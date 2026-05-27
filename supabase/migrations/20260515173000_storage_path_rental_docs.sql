-- Ruta en bucket `documents` para descargas firmadas (además de file_url legacy).
alter table public.property_documents
  add column if not exists storage_path text;

alter table public.tenant_documents
  add column if not exists storage_path text;
