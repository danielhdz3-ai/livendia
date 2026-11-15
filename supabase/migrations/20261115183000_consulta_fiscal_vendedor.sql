-- Consulta fiscal del vendedor (post-arras): servicio, intake y borradores de memoria.

alter table public.orders
  add column if not exists order_intake jsonb not null default '{}'::jsonb;

alter table public.orders
  add column if not exists fiscal_disclaimer_accepted_at timestamptz;

create table if not exists public.checkout_intake_staging (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  service_slug text not null,
  payload jsonb not null,
  disclaimer_accepted_at timestamptz not null,
  created_at timestamptz not null default now()
);

create index if not exists checkout_intake_staging_user_idx
  on public.checkout_intake_staging (user_id, created_at desc);

alter table public.order_deliverables
  add column if not exists visible_to_client boolean not null default true;

alter table public.order_deliverables
  add column if not exists approved_at timestamptz;

insert into public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
values (
  'consulta-fiscal-vendedor',
  'Cuánto te queda neto de tu venta',
  'Consulta tributaria orientativa post-arras para vendedores: estimación de plusvalía municipal (IIVTNU) e IRPF por titular, memoria en PDF y videollamada de explicación. No sustituye liquidaciones oficiales ni gestión de la compraventa.',
  'compraventa',
  19500,
  false,
  array[
    'Plusvalía municipal (objetivo y real; se aplica la menor)',
    'IRPF estimado por titular según porcentaje en escritura',
    'Escenarios vivienda habitual, mayores de 65 y reinversión',
    'Líquido aproximado tras gastos, hipoteca e impuestos',
    'Memoria PDF con revisión humana obligatoria',
    'Videollamada de 30–45 min',
    'Plazo 3–5 días laborables con documentación completa'
  ],
  'Post-arras · Vendedor',
  true
)
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  features = excluded.features,
  badge = excluded.badge,
  is_active = excluded.is_active;