-- Cuotas mensuales de administración de alquiler (transferencia / calendario día 1)

create table if not exists public.rental_admin_billing (
  client_id uuid primary key references public.profiles (id) on delete cascade,
  service_id uuid not null references public.services (id) on delete restrict,
  status text not null default 'active' check (status in ('active', 'suspended')),
  billing_method text not null default 'transfer' check (billing_method in ('transfer', 'stripe')),
  monthly_cents integer not null default 5900,
  started_on date not null default (current_date),
  first_period_amount_cents integer,
  suspended_at timestamptz,
  suspend_reason text,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists rental_admin_billing_service_id_idx
  on public.rental_admin_billing (service_id);

create table if not exists public.rental_admin_fee_dues (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles (id) on delete cascade,
  service_id uuid not null references public.services (id) on delete restrict,
  due_date date not null,
  amount_cents integer not null,
  status text not null default 'pending' check (status in ('pending', 'paid', 'skipped')),
  order_id uuid references public.orders (id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (client_id, service_id, due_date)
);

create index if not exists rental_admin_fee_dues_due_date_idx
  on public.rental_admin_fee_dues (due_date);
create index if not exists rental_admin_fee_dues_client_id_idx
  on public.rental_admin_fee_dues (client_id);

drop trigger if exists rental_admin_billing_updated_at on public.rental_admin_billing;
create trigger rental_admin_billing_updated_at
  before update on public.rental_admin_billing
  for each row execute procedure public.set_updated_at();

drop trigger if exists rental_admin_fee_dues_updated_at on public.rental_admin_fee_dues;
create trigger rental_admin_fee_dues_updated_at
  before update on public.rental_admin_fee_dues
  for each row execute procedure public.set_updated_at();

alter table public.rental_admin_billing enable row level security;
alter table public.rental_admin_fee_dues enable row level security;

drop policy if exists "rental_admin_billing_select_own_or_admin" on public.rental_admin_billing;
create policy "rental_admin_billing_select_own_or_admin"
  on public.rental_admin_billing for select
  using (client_id = auth.uid() or public.is_admin());

drop policy if exists "rental_admin_billing_admin_write" on public.rental_admin_billing;
create policy "rental_admin_billing_admin_write"
  on public.rental_admin_billing for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "rental_admin_fee_dues_select_own_or_admin" on public.rental_admin_fee_dues;
create policy "rental_admin_fee_dues_select_own_or_admin"
  on public.rental_admin_fee_dues for select
  using (client_id = auth.uid() or public.is_admin());

drop policy if exists "rental_admin_fee_dues_admin_write" on public.rental_admin_fee_dues;
create policy "rental_admin_fee_dues_admin_write"
  on public.rental_admin_fee_dues for all
  using (public.is_admin())
  with check (public.is_admin());

notify pgrst, 'reload schema';
