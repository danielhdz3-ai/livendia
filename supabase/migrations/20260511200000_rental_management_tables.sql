-- ============================================
-- TABLAS PARA ADMINISTRACIÓN DE ALQUILERES
-- ============================================

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
create policy "Users can view their own properties"
  on public.properties for select
  using (auth.uid() = user_id);

create policy "Users can insert their own properties"
  on public.properties for insert
  with check (auth.uid() = user_id);

create policy "Users can update their own properties"
  on public.properties for update
  using (auth.uid() = user_id);

create policy "Users can view tenants of their properties"
  on public.tenants for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can manage tenants of their properties"
  on public.tenants for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can view documents of their properties"
  on public.property_documents for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can manage documents of their properties"
  on public.property_documents for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can view tenant documents of their properties"
  on public.tenant_documents for select
  using (tenant_id in (select id from public.tenants where property_id in (select id from public.properties where user_id = auth.uid())));

create policy "Users can manage tenant documents"
  on public.tenant_documents for all
  using (tenant_id in (select id from public.tenants where property_id in (select id from public.properties where user_id = auth.uid())));

create policy "Users can view payments of their properties"
  on public.rent_payments for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can manage payments"
  on public.rent_payments for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can view expenses of their properties"
  on public.property_expenses for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can manage expenses"
  on public.property_expenses for all
  using (property_id in (select id from public.properties where user_id = auth.uid()));

create policy "Users can view incidents of their properties"
  on public.incidents for select
  using (property_id in (select id from public.properties where user_id = auth.uid()));

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
