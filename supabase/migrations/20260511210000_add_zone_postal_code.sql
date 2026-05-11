-- Agregar columnas zone y postal_code a la tabla properties
alter table public.properties
add column if not exists zone text,
add column if not exists postal_code text;
