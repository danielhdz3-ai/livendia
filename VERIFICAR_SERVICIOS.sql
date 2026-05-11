-- ============================================
-- VERIFICACIÓN DE SERVICIOS INSERTADOS
-- ============================================
-- Ejecutar en el SQL Editor de Supabase para confirmar

-- Ver todos los servicios activos ordenados por categoría
SELECT 
  slug,
  name,
  category,
  price_cents / 100.0 as precio_euros,
  is_recurring,
  is_active,
  created_at
FROM public.services
WHERE is_active = true
ORDER BY category, name;

-- Contar servicios por categoría
SELECT 
  category,
  COUNT(*) as total_servicios
FROM public.services
WHERE is_active = true
GROUP BY category
ORDER BY category;

-- Ver específicamente los 6 servicios nuevos
SELECT 
  slug,
  name,
  CASE 
    WHEN is_recurring THEN CONCAT((price_cents / 100.0)::text, '€/mes')
    ELSE CONCAT((price_cents / 100.0)::text, '€')
  END as precio
FROM public.services
WHERE slug IN (
  'administracion-alquiler',
  'contrato-alquiler-lau',
  'contrato-alquiler-temporada',
  'contrato-alquiler-habitacion',
  'contrato-arras-penitenciales',
  'contrato-arras-confirmatorias'
)
ORDER BY slug;
