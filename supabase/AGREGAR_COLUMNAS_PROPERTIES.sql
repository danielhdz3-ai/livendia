-- ============================================
-- AGREGAR COLUMNAS ZONA Y CÓDIGO POSTAL
-- ============================================
-- Ejecuta esto en Supabase SQL Editor

alter table public.properties
add column if not exists zone text,
add column if not exists postal_code text;

-- Verificar que se agregaron
select column_name, data_type 
from information_schema.columns 
where table_name = 'properties' 
and column_name in ('zone', 'postal_code');
