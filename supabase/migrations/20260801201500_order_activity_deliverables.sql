-- Actividad del expediente y entregables del gestor.

create table if not exists public.order_activity (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  kind text not null check (kind in ('status', 'document', 'payment', 'deliverable', 'note')),
  title text not null,
  description text,
  meta jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index if not exists order_activity_order_id_created_idx
  on public.order_activity (order_id, created_at desc);

create table if not exists public.order_deliverables (
  id uuid primary key default gen_random_uuid(),
  order_id uuid not null references public.orders (id) on delete cascade,
  title text not null,
  message text,
  file_name text,
  file_path text,
  file_type text,
  file_size integer,
  created_at timestamptz not null default now()
);

create index if not exists order_deliverables_order_id_idx
  on public.order_deliverables (order_id, created_at desc);

alter table public.order_activity enable row level security;
alter table public.order_deliverables enable row level security;

create policy "order_activity_select_own_or_admin"
  on public.order_activity for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = order_id and (o.client_id = auth.uid() or public.is_admin())
    )
  );

create policy "order_deliverables_select_own_or_admin"
  on public.order_deliverables for select
  using (
    exists (
      select 1 from public.orders o
      where o.id = order_id and (o.client_id = auth.uid() or public.is_admin())
    )
  );
