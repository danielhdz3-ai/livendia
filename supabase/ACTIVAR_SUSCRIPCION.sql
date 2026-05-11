-- ╔═══════════════════════════════════════════════════════════════╗
-- ║        🚀 ACTIVAR SUSCRIPCIÓN DE ADMINISTRACIÓN DE ALQUILER    ║
-- ╚═══════════════════════════════════════════════════════════════╝
-- 
-- USO:
-- 1. Copia TODO este script
-- 2. Ve a Supabase > SQL Editor > + New Query
-- 3. Pega y ejecuta (RUN)
-- 
-- IMPORTANTE: Cambia el email si es necesario

DO $$
DECLARE
  v_user_id uuid;
  v_service_id uuid;
  v_order_exists boolean;
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔═══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║      🔄 ACTIVANDO SUSCRIPCIÓN DE ADMINISTRACIÓN        ║';
  RAISE NOTICE '╚═══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- Email del cliente (CAMBIA ESTO si es necesario)
  DECLARE v_email text := 'daniel.trading.sniper@gmail.com';
  BEGIN
    RAISE NOTICE '👤 Usuario: %', v_email;

    -- Verificar usuario
    SELECT id INTO v_user_id FROM auth.users WHERE email = v_email;
    IF v_user_id IS NULL THEN
      RAISE EXCEPTION '❌ Usuario no encontrado. Regístrate primero en /register';
    END IF;
    RAISE NOTICE '   ✓ Usuario encontrado';

    -- Verificar servicio
    SELECT id INTO v_service_id 
    FROM public.services 
    WHERE slug = 'administracion-alquiler';
    
    IF v_service_id IS NULL THEN
      RAISE EXCEPTION '❌ Servicio "administracion-alquiler" no existe';
    END IF;
    RAISE NOTICE '   ✓ Servicio encontrado';

    -- Verificar si ya tiene suscripción
    SELECT EXISTS(
      SELECT 1 FROM public.orders 
      WHERE user_id = v_user_id 
      AND service_id = v_service_id
    ) INTO v_order_exists;

    IF NOT v_order_exists THEN
      -- Crear suscripción
      INSERT INTO public.orders (
        id, user_id, service_id, status, amount, payment_method, created_at
      ) VALUES (
        gen_random_uuid(), v_user_id, v_service_id, 'completed', 49.00, 'manual', now()
      );
      RAISE NOTICE '   ✓ Suscripción creada (49€/mes)';
    ELSE
      RAISE NOTICE '   ✓ Ya tienes una suscripción activa';
    END IF;

    RAISE NOTICE '';
    RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
    RAISE NOTICE '║                ✅ SUSCRIPCIÓN ACTIVADA                ║';
    RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
    RAISE NOTICE '';
    RAISE NOTICE '🎯 SIGUIENTE PASO:';
    RAISE NOTICE '   1. Ve a https://livendia.com/dashboard';
    RAISE NOTICE '   2. Serás redirigido automáticamente a /dashboard/rental';
    RAISE NOTICE '   3. Agrega tus datos manualmente';
    RAISE NOTICE '';
  END;
END $$;
