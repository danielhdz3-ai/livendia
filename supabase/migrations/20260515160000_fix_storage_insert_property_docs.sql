-- Corrige INSERT en Storage: rutas de inmueble/inquilino usan
--   userId / propertyId / archivo
-- donde el segundo segmento es properties.id (no orders.id).

drop policy if exists "storage_documents_insert" on storage.objects;

create policy "storage_documents_insert"
  on storage.objects for insert to authenticated
  with check (
    bucket_id = 'documents'
    and split_part(name, '/', 1) = auth.uid()::text
    and (
      -- Rutas tipo pedido o inmueble: userId/orderId/file  O  userId/propertyId/file
      (
        split_part(name, '/', 3) not in ('chat', 'incidents')
        and (
          exists (
            select 1
            from public.orders o
            where o.id = (split_part(name, '/', 2))::uuid
              and o.client_id = auth.uid()
          )
          or exists (
            select 1
            from public.properties p
            where p.id = (split_part(name, '/', 2))::uuid
              and p.user_id = auth.uid()
          )
        )
      )
      or
      (
        split_part(name, '/', 3) in ('chat', 'incidents')
        and (
          public.is_admin()
          or exists (
            select 1
            from public.properties p
            where p.id = (split_part(name, '/', 2))::uuid
              and p.user_id = auth.uid()
          )
        )
      )
    )
  );
