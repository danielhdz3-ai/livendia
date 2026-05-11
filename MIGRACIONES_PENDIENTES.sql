-- ============================================
-- MIGRACIONES PENDIENTES - EJECUTAR EN SUPABASE
-- ============================================
-- Fecha: 11 Mayo 2026
-- Descripción: Añadir nuevos servicios al catálogo

-- Migración 1: Administración de Alquileres
-- ============================================

insert into public.services (slug, name, description, category, price_cents, is_recurring, is_active)
values
  (
    'administracion-alquiler',
    'Administración de Alquileres',
    'Gestión completa de tu alquiler. Nosotros somos el punto de contacto con el inquilino, gestionamos incidencias, renovaciones y mediación. Tú solo cobras. Sin permanencia.',
    'administracion_alquiler',
    4900,
    true,
    true
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  is_active = excluded.is_active;


-- Migración 2: Contratos de Alquiler y Arras
-- ============================================

insert into public.services (slug, name, description, category, price_cents, is_recurring, is_active)
values
  -- Contratos de alquiler
  (
    'contrato-alquiler-lau',
    'Contrato de Alquiler LAU',
    'Redacción o revisión del contrato de arrendamiento de vivienda conforme a la normativa vigente.',
    'alquiler',
    12000,
    false,
    true
  ),
  (
    'contrato-alquiler-temporada',
    'Contrato de Alquiler por Temporada',
    'Para estancias temporales, estudios o trabajo. Regulación específica fuera de la LAU estándar.',
    'alquiler',
    12000,
    false,
    true
  ),
  (
    'contrato-alquiler-habitacion',
    'Contrato de Alquiler de Habitación',
    'Arrendamiento de habitación en piso compartido con cláusulas específicas para este régimen.',
    'alquiler',
    12000,
    false,
    true
  ),
  -- Contratos de arras
  (
    'contrato-arras-penitenciales',
    'Contrato de Arras Penitenciales',
    'El contrato más habitual en compraventa. Permite desistir pagando o reteniendo las arras.',
    'compraventa',
    14500,
    false,
    true
  ),
  (
    'contrato-arras-confirmatorias',
    'Contrato de Arras Confirmatorias',
    'Mayor seguridad jurídica para ambas partes. Obliga a completar la compraventa.',
    'compraventa',
    14500,
    false,
    true
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  is_active = excluded.is_active;

-- ============================================
-- FIN DE MIGRACIONES
-- ============================================

-- INSTRUCCIONES:
-- 1. Ir a: https://supabase.com/dashboard/project/TU_PROJECT_ID/editor
-- 2. Abrir el SQL Editor
-- 3. Copiar y pegar este script completo
-- 4. Ejecutar (Run)
-- 5. Verificar que los 6 servicios se hayan insertado correctamente
