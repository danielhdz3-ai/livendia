-- ============================================
-- SCRIPT DE PRUEBA: Crear orden de administración de alquiler
-- ============================================
-- Ejecuta esto en Supabase SQL Editor DESPUÉS de ejecutar la migración
-- Reemplaza 'TU_EMAIL_AQUI' con tu email de usuario

-- 1. Obtener el ID del servicio de administración de alquiler
DO $$
DECLARE
  v_user_id uuid;
  v_service_id uuid;
  v_order_id uuid;
BEGIN
  -- Buscar tu usuario por email (CAMBIA ESTO)
  SELECT id INTO v_user_id
  FROM auth.users
  WHERE email = 'TU_EMAIL_AQUI'
  LIMIT 1;

  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Usuario no encontrado. Verifica tu email.';
  END IF;

  -- Buscar el servicio de administración de alquiler
  SELECT id INTO v_service_id
  FROM public.services
  WHERE slug = 'administracion-alquiler'
  LIMIT 1;

  IF v_service_id IS NULL THEN
    RAISE EXCEPTION 'Servicio de administración de alquiler no encontrado. Ejecuta primero la migración 20260511000000_add_administracion_alquiler_service.sql';
  END IF;

  -- Crear la orden
  INSERT INTO public.orders (
    id,
    user_id,
    service_id,
    status,
    total_cents,
    created_at
  ) VALUES (
    gen_random_uuid(),
    v_user_id,
    v_service_id,
    'delivered', -- Orden completada para que el dashboard funcione inmediatamente
    4900, -- 49€
    now()
  ) RETURNING id INTO v_order_id;

  RAISE NOTICE 'Orden creada exitosamente: %', v_order_id;
  RAISE NOTICE 'Ahora puedes acceder a /dashboard/rental';
END $$;
