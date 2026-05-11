-- ============================================
-- ⚡ CONFIGURACIÓN RÁPIDA - TODO EN UNO ⚡
-- ============================================
-- Este script hace TODO automáticamente:
-- 1. Crea las tablas necesarias
-- 2. Te crea una suscripción al servicio de administración de alquiler
-- 3. Crea datos de prueba completos
--
-- ✏️ Email configurado: daniel.trading.sniper@gmail.com
-- ============================================

DO $$
DECLARE
  v_user_id uuid;
  v_user_email text := 'daniel.trading.sniper@gmail.com';
  v_service_id uuid;
  v_order_id uuid;
  v_property_id uuid;
  v_tenant_id uuid;
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║   🏢 CONFIGURACIÓN DE ADMINISTRACIÓN DE ALQUILERES   ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- PASO 1: Verificar usuario
  RAISE NOTICE '📋 Paso 1/4: Verificando usuario...';
  SELECT id INTO v_user_id FROM auth.users WHERE email = v_user_email LIMIT 1;
  
  IF v_user_id IS NULL THEN
    RAISE EXCEPTION '❌ Usuario no encontrado: "%". Verifica tu email.', v_user_email;
  END IF;
  
  RAISE NOTICE '   ✓ Usuario encontrado: %', v_user_email;
  RAISE NOTICE '';

  -- PASO 2: Buscar el servicio
  RAISE NOTICE '📋 Paso 2/4: Buscando servicio de administración...';
  SELECT id INTO v_service_id FROM public.services WHERE slug = 'administracion-alquiler' LIMIT 1;
  
  IF v_service_id IS NULL THEN
    RAISE EXCEPTION '❌ Servicio no encontrado. Ejecuta primero: 20260511000000_add_administracion_alquiler_service.sql';
  END IF;
  
  RAISE NOTICE '   ✓ Servicio encontrado';
  RAISE NOTICE '';

  -- PASO 3: Crear orden de suscripción
  RAISE NOTICE '📋 Paso 3/4: Creando tu suscripción...';
  SELECT id INTO v_order_id 
  FROM public.orders 
  WHERE client_id = v_user_id AND service_id = v_service_id 
  LIMIT 1;

  IF v_order_id IS NULL THEN
    INSERT INTO public.orders (
      id, client_id, service_id, status, total_cents, created_at
    ) VALUES (
      gen_random_uuid(), v_user_id, v_service_id, 'completed', 4900, now()
    ) RETURNING id INTO v_order_id;
    
    RAISE NOTICE '   ✓ Suscripción creada (49€/mes)';
  ELSE
    RAISE NOTICE '   ✓ Ya tienes una suscripción activa';
  END IF;
  RAISE NOTICE '';

  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║              ✅ ¡CONFIGURACIÓN COMPLETA!              ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';
  RAISE NOTICE '🎯 QUÉ HACER AHORA:';
  RAISE NOTICE '   1. Recarga la página en livendia.com';
  RAISE NOTICE '   2. Serás redirigido AUTOMÁTICAMENTE a /dashboard/rental';
  RAISE NOTICE '   3. Agrega tus datos de inmueble e inquilino manualmente';
  RAISE NOTICE '';
  RAISE NOTICE '📝 IMPORTANTE:';
  RAISE NOTICE '   NO se han creado datos de prueba';
  RAISE NOTICE '   Podrás agregar todo manualmente desde el panel';
  RAISE NOTICE '';
  
END $$;
