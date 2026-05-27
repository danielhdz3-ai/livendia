-- Suscripciones Stripe (servicio recurrente, ej. administración de alquileres)
-- Mantenidas vía webhooks; lectura para el cliente y admins.

create table if not exists public.client_subscriptions (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.profiles (id) on delete cascade,
  service_id uuid not null references public.services (id) on delete restrict,
  stripe_subscription_id text not null unique,
  stripe_customer_id text,
  status text not null default 'incomplete',
  current_period_end timestamptz,
  cancel_at_period_end boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists client_subscriptions_client_id_idx
  on public.client_subscriptions (client_id);
create index if not exists client_subscriptions_service_id_idx
  on public.client_subscriptions (service_id);

drop trigger if exists client_subscriptions_updated_at on public.client_subscriptions;
create trigger client_subscriptions_updated_at
  before update on public.client_subscriptions
  for each row execute procedure public.set_updated_at();

alter table public.client_subscriptions enable row level security;

drop policy if exists "client_subscriptions_select_own_or_admin" on public.client_subscriptions;
create policy "client_subscriptions_select_own_or_admin"
  on public.client_subscriptions for select
  using (client_id = auth.uid() or public.is_admin());

-- Altas/actualizaciones solo vía service_role (webhooks). Sin INSERT/UPDATE para rol authenticated.
