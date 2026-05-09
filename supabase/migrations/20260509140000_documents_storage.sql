-- Documentos + bucket Storage (privado)

create table public.documents (
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

create index documents_order_id_idx on public.documents (order_id);
create index documents_client_id_idx on public.documents (client_id);

alter table public.documents enable row level security;

create policy "documents_select_own_or_admin"
  on public.documents for select
  using (client_id = auth.uid() or public.is_admin());

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

create policy "documents_delete_own_or_admin"
  on public.documents for delete
  using (client_id = auth.uid() or public.is_admin());

-- Bucket (id = name suele ser 'documents')
insert into storage.buckets (id, name, public)
values ('documents', 'documents', false)
on conflict (id) do update set public = excluded.public;

-- Políticas Storage: ruta userId/orderId/archivo
create policy "storage_documents_select"
  on storage.objects for select to authenticated
  using (
    bucket_id = 'documents'
    and (
      split_part(name, '/', 1) = auth.uid()::text
      or public.is_admin()
    )
  );

create policy "storage_documents_insert"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'documents'
    and split_part(name, '/', 1) = auth.uid()::text
    and exists (
      select 1
      from public.orders o
      where o.id = (split_part(name, '/', 2))::uuid
        and o.client_id = auth.uid()
    )
  );

create policy "storage_documents_delete"
  on storage.objects for delete to authenticated
  using (
    bucket_id = 'documents'
    and (
      split_part(name, '/', 1) = auth.uid()::text
      or public.is_admin()
    )
  );
