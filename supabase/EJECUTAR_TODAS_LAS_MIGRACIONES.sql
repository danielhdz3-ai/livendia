-- ============================================
-- 🚀 SCRIPT CONSOLIDADO DE MIGRACIONES
-- ============================================
-- Ejecuta todas las migraciones pendientes en orden cronológico
-- Ejecutar en: Supabase Dashboard → SQL Editor
-- ============================================

-- ============================================
-- 1️⃣ MIGRACIÓN: 20260509120000_init_core.sql
-- ============================================
-- Núcleo: perfiles, catálogo, pedidos + RLS

create extension if not exists "pgcrypto";

-- Perfiles (1:1 con auth.users)
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  phone text,
  dni_nie text,
  role text not null default 'client' check (role in ('client', 'admin')),
  stripe_customer_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.services (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique,
  name text not null,
  description text,
  category text check (
    category in (
      'administracion_alquiler',
      'contrato',
      'acompanamiento',
      'revision',
      'pack',
      'compraventa',
      'alquiler',
      'otro'
    )
  ),
  price_cents integer not null,
  is_recurring boolean not null default false,
  stripe_price_id text,
  stripe_product_id text,
  is_active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles (id) on delete restrict,
  service_id uuid not null references public.services (id) on delete restrict,
  status text not null default 'pending_payment' check (
    status in (
      'pending_payment',
      'paid',
      'pending_docs',
      'in_review',
      'in_progress',
      'completed',
      'cancelled'
    )
  ),
  stripe_session_id text,
  stripe_payment_intent_id text,
  stripe_subscription_id text,
  notes text,
  client_notes text,
  total_cents integer,
  paid_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists orders_client_id_idx on public.orders (client_id);
create index if not exists orders_service_id_idx on public.orders (service_id);
create index if not exists orders_status_idx on public.orders (status);

-- updated_at
create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists profiles_updated_at on public.profiles;
create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

drop trigger if exists orders_updated_at on public.orders;
create trigger orders_updated_at
  before update on public.orders
  for each row execute procedure public.set_updated_at();

-- Perfil al registrarse
create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(new.raw_user_meta_data ->> 'full_name', ''),
    'client'
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function public.handle_new_user();

-- RLS
alter table public.profiles enable row level security;
alter table public.services enable row level security;
alter table public.orders enable row level security;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles p
    where p.id = auth.uid()
      and p.role = 'admin'
  );
$$;

-- profiles
drop policy if exists "profiles_select_own_or_admin" on public.profiles;
create policy "profiles_select_own_or_admin"
  on public.profiles for select
  using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles_update_own_or_admin" on public.profiles;
create policy "profiles_update_own_or_admin"
  on public.profiles for update
  using (id = auth.uid() or public.is_admin())
  with check (id = auth.uid() or public.is_admin());

-- services: lectura pública de activos; escritura solo admin
drop policy if exists "services_select_active" on public.services;
create policy "services_select_active"
  on public.services for select
  using (is_active = true or public.is_admin());

drop policy if exists "services_write_admin" on public.services;
create policy "services_write_admin"
  on public.services for all
  using (public.is_admin())
  with check (public.is_admin());

-- orders
drop policy if exists "orders_select_own_or_admin" on public.orders;
create policy "orders_select_own_or_admin"
  on public.orders for select
  using (client_id = auth.uid() or public.is_admin());

drop policy if exists "orders_insert_own_or_admin" on public.orders;
create policy "orders_insert_own_or_admin"
  on public.orders for insert
  with check (client_id = auth.uid() or public.is_admin());

drop policy if exists "orders_update_own_or_admin" on public.orders;
create policy "orders_update_own_or_admin"
  on public.orders for update
  using (client_id = auth.uid() or public.is_admin())
  with check (client_id = auth.uid() or public.is_admin());

-- Datos mínimos para probar (ajusta o borra en prod)
insert into public.services (slug, name, description, category, price_cents, is_recurring)
values
  (
    'reserva-de-compra',
    'Reserva de Compra',
    'Documento de reserva 48–72h.',
    'compraventa',
    6100,
    false
  )
on conflict (slug) do nothing;


-- ============================================
-- 2️⃣ MIGRACIÓN: 20260509121000_set_admin_info.sql
-- ============================================
-- Ejecutar tras crear el usuario con email info@livendia.com (registro o invitación)
update public.profiles
set role = 'admin'
where id in (
  select id from auth.users where lower(email) = lower('info@livendia.com')
);


-- ============================================
-- 3️⃣ MIGRACIÓN: 20260509140000_documents_storage.sql
-- ============================================
-- Documentos + bucket Storage (privado)

create table if not exists public.documents (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  client_id uuid not null references public.profiles (id) on delete cascade,
  file_name text not null,
  file_path text not null,
  file_type text,
  file_size integer,
  document_type text not null default 'otro' check (
    document_type in (
      'dni_propietario',
      'dni_inquilino',
      'escrituras',
      'nota_simple',
      'contrato_actual',
      'recibos',
      'poder_notarial',
      'otro'
    )
  ),
  description text,
  created_at timestamptz not null default now()
);

create index if not exists documents_order_id_idx on public.documents (order_id);
create index if not exists documents_client_id_idx on public.documents (client_id);

alter table public.documents enable row level security;

drop policy if exists "documents_select_own_or_admin" on public.documents;
create policy "documents_select_own_or_admin"
  on public.documents for select
  using (client_id = auth.uid() or public.is_admin());

drop policy if exists "documents_insert_own_order" on public.documents;
create policy "documents_insert_own_order"
  on public.documents for insert
  with check (
    client_id = auth.uid()
    and exists (
      select 1
      from public.orders o
      where o.id = order_id
        and o.client_id = auth.uid()
    )
  );

drop policy if exists "documents_delete_own_or_admin" on public.documents;
create policy "documents_delete_own_or_admin"
  on public.documents for delete
  using (client_id = auth.uid() or public.is_admin());

-- Bucket (id = name suele ser 'documents')
insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do update set public = excluded.public;


-- ============================================
-- 4️⃣ MIGRACIÓN: 20260509160000_email_flags.sql
-- ============================================
-- Marca de emails enviados (bienvenida, recordatorio documentación)

alter table public.profiles
  add column if not exists welcome_email_sent_at timestamptz;

alter table public.orders
  add column if not exists docs_reminder_sent_at timestamptz;


-- ============================================
-- 5️⃣ MIGRACIÓN: 20260509190000_oauth_profile_name.sql
-- ============================================
-- Nombres desde proveedores OAuth (p. ej. Google suele enviar "name", no siempre "full_name")

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, full_name, role)
  values (
    new.id,
    coalesce(
      new.raw_user_meta_data ->> 'full_name',
      new.raw_user_meta_data ->> 'name',
      ''
    ),
    'client'
  );
  return new;
end;
$$;


-- ============================================
-- 6️⃣ MIGRACIÓN: 20260511000000_add_administracion_alquiler_service.sql
-- ============================================
-- Añadir servicio de Administración de Alquileres

insert into public.services (slug, name, description, category, price_cents, is_recurring, is_active)
values
  (
    'administracion-alquiler',
    'Administración de Alquileres',
    'Gestión completa de tu alquiler. Nosotros somos el punto de contacto con el inquilino, gestionamos incidencias, renovaciones y mediación. Tú solo cobras. Sin permanencia.',
    'administracion_alquiler',
    4900,
    true,
    true
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  is_active = excluded.is_active;


-- ============================================
-- 7️⃣ MIGRACIÓN: 20260511010000_add_contratos_services.sql
-- ============================================
-- Añadir servicios de contratos de alquiler y arras

insert into public.services (slug, name, description, category, price_cents, is_recurring, is_active)
values
  -- Contratos de alquiler
  (
    'contrato-alquiler-lau',
    'Contrato de Alquiler LAU',
    'Redacción o revisión del contrato de arrendamiento de vivienda conforme a la normativa vigente.',
    'alquiler',
    12000,
    false,
    true
  ),
  (
    'contrato-alquiler-temporada',
    'Contrato de Alquiler por Temporada',
    'Para estancias temporales, estudios o trabajo. Regulación específica fuera de la LAU estándar.',
    'alquiler',
    12000,
    false,
    true
  ),
  (
    'contrato-alquiler-habitacion',
    'Contrato de Alquiler de Habitación',
    'Arrendamiento de habitación en piso compartido con cláusulas específicas para este régimen.',
    'alquiler',
    12000,
    false,
    true
  ),
  -- Contratos de arras
  (
    'contrato-arras-penitenciales',
    'Contrato de Arras Penitenciales',
    'El contrato más habitual en compraventa. Permite desistir pagando o reteniendo las arras.',
    'compraventa',
    14500,
    false,
    true
  ),
  (
    'contrato-arras-confirmatorias',
    'Contrato de Arras Confirmatorias',
    'Mayor seguridad jurídica para ambas partes. Obliga a completar la compraventa.',
    'compraventa',
    14500,
    false,
    true
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  is_active = excluded.is_active;


-- ============================================
-- 8️⃣ MIGRACIÓN: 20260511200000_rental_management_tables.sql
-- ============================================
-- TABLAS PARA ADMINISTRACIÓN DE ALQUILERES

-- Tabla de inmuebles gestionados
create table if not exists public.properties (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade not null,
  address text not null,
  property_type text not null, -- 'piso', 'casa', 'local', etc.
  rooms integer,
  bathrooms integer,
  surface_m2 numeric,
  cadastral_reference text,
  ibi_annual numeric default 0,
  community_fee_monthly numeric default 0,
  notes text,
  created_at timestamptz default now()
);

-- Tabla de inquilinos
create table if not exists public.tenants (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade not null,
  full_name text not null,
  email text,
  phone text,
  dni text,
  address text,
  start_date date not null,
  end_date date,
  monthly_rent numeric not null,
  deposit_amount numeric not null,
  is_active boolean default true,
  notes text,
  created_at timestamptz default now()
);

-- Tabla de documentos del inmueble
create table if not exists public.property_documents (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade not null,
  document_type text not null, -- 'nota_simple', 'ibi', 'cedula_habitabilidad', etc.
  file_url text not null,
  file_name text not null,
  uploaded_at timestamptz default now()
);

-- Tabla de documentos del inquilino
create table if not exists public.tenant_documents (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  document_type text not null, -- 'dni', 'nomina', 'contrato_trabajo', etc.
  file_url text not null,
  file_name text not null,
  uploaded_at timestamptz default now()
);

-- Tabla de pagos de alquiler
create table if not exists public.rent_payments (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid references public.tenants(id) on delete cascade not null,
  property_id uuid references public.properties(id) on delete cascade not null,
  payment_date date not null,
  amount numeric not null,
  status text not null default 'pending', -- 'pending', 'paid', 'late'
  payment_method text,
  notes text,
  created_at timestamptz default now()
);

-- Tabla de gastos del inmueble
create table if not exists public.property_expenses (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade not null,
  expense_type text not null, -- 'ibi', 'comunidad', 'reparacion', 'seguro', etc.
  amount numeric not null,
  expense_date date not null,
  description text,
  is_deductible boolean default true,
  receipt_url text,
  created_at timestamptz default now()
);

-- Tabla de incidencias
create table if not exists public.incidents (
  id uuid primary key default gen_random_uuid(),
  property_id uuid references public.properties(id) on delete cascade not null,
  tenant_id uuid references public.tenants(id) on delete cascade,
  title text not null,
  description text not null,
  status text not null default 'pending', -- 'pending', 'in_progress', 'waiting_approval', 'approved', 'resolved', 'rejected'
  priority text not null default 'medium', -- 'low', 'medium', 'high', 'urgent'
  estimated_cost numeric,
  approved_budget numeric,
  photos jsonb, -- array de URLs de fotos
  created_at timestamptz default now(),
  resolved_at timestamptz
);

-- Row Level Security (RLS)
alter table public.properties enable row level security;
alter table public.tenants enable row level security;
alter table public.property_documents enable row level security;
alter table public.tenant_documents enable row level security;
alter table public.rent_payments enable row level security;
alter table public.property_expenses enable row level security;
alter table public.incidents enable row level security;

-- Políticas RLS
drop policy if exists "Users can view their own properties" on public.properties;
create policy "Users can view their own properties"
  on public.properties for select
  using (auth.uid() = user_id);

drop policy if exists "Users can insert their own properties" on public.properties;
create policy "Users can insert their own properties"
  on public.properties for insert
  with check (auth.uid() = user_id);

drop policy if exists "Users can update their own properties" on public.properties;
create policy "Users can update their own properties"
  on public.properties for update
  using (auth.uid() = user_id);

drop policy if exists "Users can view tenants of their properties" on public.tenants;
create policy "Users can view tenants of their properties"
  on public.tenants for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can manage tenants of their properties" on public.tenants;
create policy "Users can manage tenants of their properties"
  on public.tenants for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can view documents of their properties" on public.property_documents;
create policy "Users can view documents of their properties"
  on public.property_documents for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can manage documents of their properties" on public.property_documents;
create policy "Users can manage documents of their properties"
  on public.property_documents for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can view tenant documents of their properties" on public.tenant_documents;
create policy "Users can view tenant documents of their properties"
  on public.tenant_documents for select
  using (tenant_id in (select id from public.tenants where property_id in (select id from public.properties where user_id = auth.uid())));

drop policy if exists "Users can manage tenant documents" on public.tenant_documents;
create policy "Users can manage tenant documents"
  on public.tenant_documents for all
  using (tenant_id in (select id from public.tenants where property_id in (select id from public.properties where user_id = auth.uid())));

drop policy if exists "Users can view payments of their properties" on public.rent_payments;
create policy "Users can view payments of their properties"
  on public.rent_payments for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can manage payments" on public.rent_payments;
create policy "Users can manage payments"
  on public.rent_payments for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can view expenses of their properties" on public.property_expenses;
create policy "Users can view expenses of their properties"
  on public.property_expenses for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can manage expenses" on public.property_expenses;
create policy "Users can manage expenses"
  on public.property_expenses for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can view incidents of their properties" on public.incidents;
create policy "Users can view incidents of their properties"
  on public.incidents for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

drop policy if exists "Users can manage incidents" on public.incidents;
create policy "Users can manage incidents"
  on public.incidents for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

-- Índices para mejorar rendimiento
create index if not exists idx_properties_user_id on public.properties(user_id);
create index if not exists idx_tenants_property_id on public.tenants(property_id);
create index if not exists idx_tenants_is_active on public.tenants(is_active);
create index if not exists idx_rent_payments_tenant_id on public.rent_payments(tenant_id);
create index if not exists idx_rent_payments_status on public.rent_payments(status);
create index if not exists idx_property_expenses_property_id on public.property_expenses(property_id);
create index if not exists idx_incidents_property_id on public.incidents(property_id);
create index if not exists idx_incidents_status on public.incidents(status);


-- ============================================
-- 9️⃣ MIGRACIÓN: 20260511210000_add_zone_postal_code.sql
-- ============================================
-- Agregar columnas zone y postal_code a la tabla properties
alter table public.properties
add column if not exists zone text,
add column if not exists postal_code text;


-- ============================================
-- 🔟 MIGRACIÓN: 20260512000000_messages_table.sql
-- ============================================
-- 📨 TABLA DE MENSAJES PARA CHAT UNIFICADO

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║           📨 CREANDO TABLA DE MENSAJES               ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- Crear tabla de mensajes
  CREATE TABLE IF NOT EXISTS public.messages (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    property_id uuid REFERENCES public.properties(id) ON DELETE CASCADE NOT NULL,
    sender_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    message text NOT NULL,
    attachments jsonb, -- array de { file_name, file_path }
    read_at timestamptz,
    created_at timestamptz DEFAULT now()
  );

  RAISE NOTICE '   ✓ Tabla "messages" creada';

  -- Índices para performance
  CREATE INDEX IF NOT EXISTS idx_messages_property ON public.messages(property_id, created_at DESC);
  CREATE INDEX IF NOT EXISTS idx_messages_sender ON public.messages(sender_id);

  RAISE NOTICE '   ✓ Índices creados';

  -- Habilitar RLS
  ALTER TABLE public.messages ENABLE ROW LEVEL SECURITY;

  RAISE NOTICE '   ✓ RLS habilitado';

  -- Políticas de acceso
  -- Los mensajes son visibles para el propietario de la propiedad y para admins
  DROP POLICY IF EXISTS "messages_select_policy" ON public.messages;
  CREATE POLICY "messages_select_policy"
    ON public.messages FOR SELECT
    USING (
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = property_id
        AND (p.user_id = auth.uid() OR public.is_admin())
      )
    );

  -- Solo pueden insertar mensajes el propietario y los admins
  DROP POLICY IF EXISTS "messages_insert_policy" ON public.messages;
  CREATE POLICY "messages_insert_policy"
    ON public.messages FOR INSERT
    WITH CHECK (
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = property_id
        AND (p.user_id = auth.uid() OR public.is_admin())
      )
    );

  -- Solo pueden actualizar (marcar como leído) el destinatario
  DROP POLICY IF EXISTS "messages_update_policy" ON public.messages;
  CREATE POLICY "messages_update_policy"
    ON public.messages FOR UPDATE
    USING (
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = property_id
        AND (p.user_id = auth.uid() OR public.is_admin())
      )
    );

  RAISE NOTICE '   ✓ Políticas creadas';

  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║              ✅ ¡TABLA CREADA CON ÉXITO!              ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

END $$;


-- ============================================
-- 1️⃣1️⃣ MIGRACIÓN: 20260512100000_update_storage_policies.sql
-- ============================================
-- 🔧 ACTUALIZACIÓN DE STORAGE POLICIES
-- Permitir archivos para chat e incidencias además de pedidos

-- Eliminar políticas antiguas
DROP POLICY IF EXISTS "storage_documents_select" ON storage.objects;
DROP POLICY IF EXISTS "storage_documents_insert" ON storage.objects;
DROP POLICY IF EXISTS "storage_documents_delete" ON storage.objects;

-- POLICY SELECT: permite acceso a archivos propios o si eres admin
-- Rutas soportadas:
--   - userId/orderId/archivo (pedidos)
--   - userId/propertyId/chat/archivo (chat)
--   - userId/propertyId/incidents/archivo (incidencias)
CREATE POLICY "storage_documents_select"
  ON storage.objects FOR SELECT TO authenticated
  USING (
    bucket_id = 'documents'
    AND (
      -- El archivo es del usuario autenticado
      split_part(name, '/', 1) = auth.uid()::text
      OR 
      -- O es admin
      public.is_admin()
      OR
      -- O es propietario de la propiedad (para chat/incidencias compartidas)
      EXISTS (
        SELECT 1 FROM public.properties p
        WHERE p.id = (split_part(name, '/', 2))::uuid
        AND p.user_id = auth.uid()
      )
    )
  );

-- POLICY INSERT: permite subir archivos propios
-- Validaciones:
--   - Ruta debe empezar con userId del usuario autenticado
--   - Si es ruta de pedido: debe ser propietario del order
--   - Si es ruta de property (chat/incidencias): debe ser propietario O admin
CREATE POLICY "storage_documents_insert"
  ON storage.objects FOR INSERT TO authenticated
  WITH CHECK (
    bucket_id = 'documents'
    AND split_part(name, '/', 1) = auth.uid()::text
    AND (
      -- Ruta de pedido: userId/orderId/archivo
      (
        split_part(name, '/', 3) NOT IN ('chat', 'incidents')
        AND EXISTS (
          SELECT 1 FROM public.orders o
          WHERE o.id = (split_part(name, '/', 2))::uuid
          AND o.client_id = auth.uid()
        )
      )
      OR
      -- Ruta de property (chat/incidencias): userId/propertyId/chat/archivo
      (
        split_part(name, '/', 3) IN ('chat', 'incidents')
        AND (
          public.is_admin()
          OR EXISTS (
            SELECT 1 FROM public.properties p
            WHERE p.id = (split_part(name, '/', 2))::uuid
            AND p.user_id = auth.uid()
          )
        )
      )
    )
  );

-- POLICY DELETE: permite borrar archivos propios o si eres admin
CREATE POLICY "storage_documents_delete"
  ON storage.objects FOR DELETE TO authenticated
  USING (
    bucket_id = 'documents'
    AND (
      split_part(name, '/', 1) = auth.uid()::text
      OR public.is_admin()
    )
  );


-- ============================================
-- ✅ ¡TODAS LAS MIGRACIONES EJECUTADAS!
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║                                                      ║';
  RAISE NOTICE '║        ✅ ¡MIGRACIONES COMPLETADAS CON ÉXITO!        ║';
  RAISE NOTICE '║                                                      ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';
  RAISE NOTICE '📊 RESUMEN DE TABLAS CREADAS:';
  RAISE NOTICE '   • profiles - Perfiles de usuario';
  RAISE NOTICE '   • services - Catálogo de servicios';
  RAISE NOTICE '   • orders - Pedidos de clientes';
  RAISE NOTICE '   • documents - Documentos de pedidos';
  RAISE NOTICE '   • properties - Inmuebles gestionados';
  RAISE NOTICE '   • tenants - Inquilinos';
  RAISE NOTICE '   • property_documents - Documentos de inmuebles';
  RAISE NOTICE '   • tenant_documents - Documentos de inquilinos';
  RAISE NOTICE '   • rent_payments - Pagos de alquiler';
  RAISE NOTICE '   • property_expenses - Gastos de inmuebles';
  RAISE NOTICE '   • incidents - Incidencias';
  RAISE NOTICE '   • messages - Chat unificado';
  RAISE NOTICE '';
  RAISE NOTICE '🔐 POLÍTICAS RLS CONFIGURADAS';
  RAISE NOTICE '📦 STORAGE BUCKET "documents" CONFIGURADO';
  RAISE NOTICE '';
  RAISE NOTICE '🎯 PRÓXIMOS PASOS:';
  RAISE NOTICE '   1. Verifica que no hay errores arriba';
  RAISE NOTICE '   2. Comprueba las tablas en Table Editor';
  RAISE NOTICE '   3. Verifica DNS de Resend (send.livendia.com)';
  RAISE NOTICE '   4. Prueba el sistema completo';
  RAISE NOTICE '';
END $$;
