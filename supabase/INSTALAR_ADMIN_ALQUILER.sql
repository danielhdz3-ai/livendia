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
  WHERE user_id = v_user_id AND service_id = v_service_id 
  LIMIT 1;

  IF v_order_id IS NULL THEN
    INSERT INTO public.orders (
      id, user_id, service_id, status, total_cents, created_at
    ) VALUES (
      gen_random_uuid(), v_user_id, v_service_id, 'delivered', 4900, now()
    ) RETURNING id INTO v_order_id;
    
    RAISE NOTICE '   ✓ Suscripción creada (49€/mes)';
  ELSE
    RAISE NOTICE '   ✓ Ya tienes una suscripción activa';
  END IF;
  RAISE NOTICE '';

  -- PASO 4: Crear datos de prueba
  RAISE NOTICE '📋 Paso 4/4: Creando datos de prueba...';
  
  -- Propiedad
  INSERT INTO public.properties (
    id, user_id, address, property_type, rooms, bathrooms, surface_m2,
    cadastral_reference, ibi_annual, community_fee_monthly, notes, created_at
  ) VALUES (
    gen_random_uuid(), v_user_id, 'Calle Gran Vía 45, 3º B, 28013 Madrid',
    'piso', 3, 2, 85.50, '1234567VK1234A0001AB', 650.00, 85.00,
    'Piso céntrico con ascensor y terraza', now()
  ) RETURNING id INTO v_property_id;

  RAISE NOTICE '   ✓ Propiedad creada (Gran Vía 45, Madrid)';

  -- Inquilino
  INSERT INTO public.tenants (
    id, property_id, full_name, email, phone, dni, address,
    start_date, end_date, monthly_rent, deposit_amount, is_active, notes, created_at
  ) VALUES (
    gen_random_uuid(), v_property_id, 'María García López',
    'maria.garcia@example.com', '+34 612 345 678', '12345678A',
    'Misma dirección del inmueble', '2025-01-01', '2026-12-31',
    950.00, 1900.00, true, 'Inquilina profesional, diseñadora gráfica', now()
  ) RETURNING id INTO v_tenant_id;

  RAISE NOTICE '   ✓ Inquilina creada (María García López)';

  -- Pagos
  INSERT INTO public.rent_payments (property_id, tenant_id, payment_date, amount, status, payment_method, notes) VALUES
    (v_property_id, v_tenant_id, '2025-02-05', 950.00, 'paid', 'transferencia', 'Febrero 2025'),
    (v_property_id, v_tenant_id, '2025-03-05', 950.00, 'paid', 'transferencia', 'Marzo 2025'),
    (v_property_id, v_tenant_id, '2025-04-05', 950.00, 'paid', 'transferencia', 'Abril 2025'),
    (v_property_id, v_tenant_id, '2025-05-05', 950.00, 'pending', null, 'Mayo 2025 - pendiente'),
    (v_property_id, v_tenant_id, '2025-06-05', 950.00, 'pending', null, 'Junio 2025 - pendiente');

  RAISE NOTICE '   ✓ 5 pagos creados (3 pagados, 2 pendientes)';

  -- Gastos
  INSERT INTO public.property_expenses (property_id, expense_type, amount, expense_date, description, is_deductible) VALUES
    (v_property_id, 'ibi', 325.00, '2025-01-15', 'IBI 1º semestre 2025', true),
    (v_property_id, 'comunidad', 85.00, '2025-02-01', 'Cuota comunidad febrero', true),
    (v_property_id, 'comunidad', 85.00, '2025-03-01', 'Cuota comunidad marzo', true),
    (v_property_id, 'comunidad', 85.00, '2025-04-01', 'Cuota comunidad abril', true),
    (v_property_id, 'reparacion', 120.00, '2025-03-10', 'Reparación caldera', true),
    (v_property_id, 'seguro', 180.00, '2025-01-01', 'Seguro hogar anual', true);

  RAISE NOTICE '   ✓ 6 gastos creados (IBI, comunidad, reparaciones...)';

  -- Incidencias
  INSERT INTO public.incidents (property_id, tenant_id, title, description, status, priority, estimated_cost, photos) VALUES
    (v_property_id, v_tenant_id, 'Fuga en grifo del baño', 'El grifo del lavabo gotea constantemente', 'resolved', 'medium', 80.00, '[]'),
    (v_property_id, v_tenant_id, 'Ruido en caldera', 'La caldera hace ruido al encenderse', 'in_progress', 'high', 150.00, '[]'),
    (v_property_id, v_tenant_id, 'Persiana atascada', 'La persiana del dormitorio principal no sube', 'pending', 'low', 50.00, '[]');

  RAISE NOTICE '   ✓ 3 incidencias creadas (grifo, caldera, persiana)';

  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║              ✅ ¡CONFIGURACIÓN COMPLETA!              ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';
  RAISE NOTICE '🎯 QUÉ HACER AHORA:';
  RAISE NOTICE '   1. Cierra tu sesión en livendia.com';
  RAISE NOTICE '   2. Vuelve a iniciar sesión';
  RAISE NOTICE '   3. Serás redirigido AUTOMÁTICAMENTE a /dashboard/rental';
  RAISE NOTICE '';
  RAISE NOTICE '📊 LO QUE VERÁS:';
  RAISE NOTICE '   💰 Ingresos totales: 2.850€ (3 pagos recibidos)';
  RAISE NOTICE '   💸 Gastos totales: 880€ (IBI + comunidad + reparaciones)';
  RAISE NOTICE '   📈 Beneficio neto: 1.970€';
  RAISE NOTICE '   ⏰ Pagos pendientes: 2 (mayo y junio)';
  RAISE NOTICE '   🔧 Incidencias abiertas: 2 (caldera, persiana)';
  RAISE NOTICE '';
  
END $$;
