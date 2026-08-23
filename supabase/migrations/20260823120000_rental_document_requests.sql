-- Solicitudes de documentación del gestor al propietario (panel alquiler)

create table if not exists public.rental_document_requests (
  id uuid primary key default gen_random_uuid(),
  property_id uuid not null references public.properties(id) on delete cascade,
  tenant_id uuid references public.tenants(id) on delete set null,
  target text not null check (target in ('property', 'tenant')),
  document_type text not null,
  message text,
  status text not null default 'pending' check (status in ('pending', 'fulfilled', 'cancelled')),
  requested_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  fulfilled_at timestamptz
);

create index if not exists rental_document_requests_property_idx
  on public.rental_document_requests (property_id, status, created_at desc);

alter table public.rental_document_requests enable row level security;

create policy "Owners view document requests for their properties"
  on public.rental_document_requests for select
  using (
    property_id in (select id from public.properties where user_id = auth.uid())
  );

create policy "Owners update document requests for their properties"
  on public.rental_document_requests for update
  using (
    property_id in (select id from public.properties where user_id = auth.uid())
  );

create policy "Admins manage all rental document requests"
  on public.rental_document_requests for all
  using (public.is_admin())
  with check (public.is_admin());
