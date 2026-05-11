-- Núcleo: perfiles, catálogo, pedidos + RLS

create extension if not exists "pgcrypto";

-- Perfiles (1:1 con auth.users)
create table public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  full_name text not null default '',
  phone text,
  dni_nie text,
  role text not null default 'client' check (role in ('client', 'admin')),
  stripe_customer_id text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.services (
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

create table public.orders (
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

create index orders_client_id_idx on public.orders (client_id);
create index orders_service_id_idx on public.orders (service_id);
create index orders_status_idx on public.orders (status);

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

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();

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
create policy "profiles_select_own_or_admin"
  on public.profiles for select
  using (id = auth.uid() or public.is_admin());

create policy "profiles_update_own_or_admin"
  on public.profiles for update
  using (id = auth.uid() or public.is_admin())
  with check (id = auth.uid() or public.is_admin());

-- services: lectura pública de activos; escritura solo admin
create policy "services_select_active"
  on public.services for select
  using (is_active = true or public.is_admin());

create policy "services_write_admin"
  on public.services for all
  using (public.is_admin())
  with check (public.is_admin());

-- orders
create policy "orders_select_own_or_admin"
  on public.orders for select
  using (client_id = auth.uid() or public.is_admin());

create policy "orders_insert_own_or_admin"
  on public.orders for insert
  with check (client_id = auth.uid() or public.is_admin());

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
  );
