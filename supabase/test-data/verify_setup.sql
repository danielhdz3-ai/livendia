-- ============================================
-- SCRIPT DE VERIFICACIÓN: Verifica tu configuración
-- ============================================
-- Ejecuta este script para ver el estado actual de tu cuenta
-- Reemplaza 'TU_EMAIL_AQUI' con tu email

DO $$
DECLARE
  v_user_id uuid;
  v_user_email text := 'TU_EMAIL_AQUI'; -- CAMBIA ESTO
  v_service_exists boolean;
  v_has_order boolean;
  v_tables_exist boolean;
BEGIN
  RAISE NOTICE '=== VERIFICACIÓN DE CONFIGURACIÓN ===';
  RAISE NOTICE '';

  -- 1. Verificar usuario
  SELECT id INTO v_user_id FROM auth.users WHERE email = v_user_email LIMIT 1;
  
  IF v_user_id IS NULL THEN
    RAISE NOTICE '❌ Usuario NO encontrado con email: %', v_user_email;
    RAISE NOTICE '   → Verifica que usaste el email correcto';
    RAISE EXCEPTION 'Usuario no encontrado';
  ELSE
    RAISE NOTICE '✓ Usuario encontrado: %', v_user_email;
    RAISE NOTICE '  ID: %', v_user_id;
  END IF;

  RAISE NOTICE '';

  -- 2. Verificar que existe el servicio de administración
  SELECT EXISTS(SELECT 1 FROM public.services WHERE slug = 'administracion-alquiler') INTO v_service_exists;
  
  IF v_service_exists THEN
    RAISE NOTICE '✓ Servicio "administracion-alquiler" existe en la base de datos';
  ELSE
    RAISE NOTICE '❌ Servicio "administracion-alquiler" NO existe';
    RAISE NOTICE '   → Ejecuta la migración: 20260511000000_add_administracion_alquiler_service.sql';
  END IF;

  RAISE NOTICE '';

  -- 3. Verificar que existe una orden de ese servicio para este usuario
  SELECT EXISTS(
    SELECT 1 
    FROM public.orders o
    JOIN public.services s ON o.service_id = s.id
    WHERE o.user_id = v_user_id 
    AND s.slug = 'administracion-alquiler'
  ) INTO v_has_order;

  IF v_has_order THEN
    RAISE NOTICE '✓ ORDEN de administración de alquiler encontrada para tu usuario';
    RAISE NOTICE '';
    RAISE NOTICE '📋 Detalles de la orden:';
    FOR r IN (
      SELECT o.id, o.status, o.created_at, s.name
      FROM public.orders o
      JOIN public.services s ON o.service_id = s.id
      WHERE o.user_id = v_user_id AND s.slug = 'administracion-alquiler'
    ) LOOP
      RAISE NOTICE '   ID: %', r.id;
      RAISE NOTICE '   Servicio: %', r.name;
      RAISE NOTICE '   Estado: %', r.status;
      RAISE NOTICE '   Creada: %', r.created_at;
    END LOOP;
  ELSE
    RAISE NOTICE '❌ NO tienes una orden de administración de alquiler';
    RAISE NOTICE '   → Ejecuta el script: create_rental_subscription_order.sql';
  END IF;

  RAISE NOTICE '';

  -- 4. Verificar que existen las tablas de rental management
  SELECT EXISTS(
    SELECT 1 FROM information_schema.tables 
    WHERE table_schema = 'public' AND table_name = 'properties'
  ) INTO v_tables_exist;

  IF v_tables_exist THEN
    RAISE NOTICE '✓ Tablas de administración de alquileres creadas';
    
    -- Contar propiedades
    FOR r IN (
      SELECT COUNT(*) as count FROM public.properties WHERE user_id = v_user_id
    ) LOOP
      IF r.count > 0 THEN
        RAISE NOTICE '  → Tienes % propiedades registradas', r.count;
      ELSE
        RAISE NOTICE '  → No tienes propiedades todavía';
        RAISE NOTICE '    Ejecuta: rental_sample_data.sql para crear datos de prueba';
      END IF;
    END LOOP;
  ELSE
    RAISE NOTICE '❌ Tablas de administración NO existen';
    RAISE NOTICE '   → Ejecuta la migración: 20260511200000_rental_management_tables.sql';
  END IF;

  RAISE NOTICE '';
  RAISE NOTICE '=== RESUMEN ===';
  
  IF v_user_id IS NOT NULL AND v_service_exists AND v_has_order AND v_tables_exist THEN
    RAISE NOTICE '✓ TODO CONFIGURADO CORRECTAMENTE';
    RAISE NOTICE '  → Cierra sesión y vuelve a iniciar sesión en livendia.com';
    RAISE NOTICE '  → Deberías ver automáticamente el dashboard de administración de alquileres';
  ELSE
    RAISE NOTICE '⚠ CONFIGURACIÓN INCOMPLETA - Sigue los pasos indicados arriba';
  END IF;

END $$;
