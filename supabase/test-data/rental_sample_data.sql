-- ============================================
-- DATOS DE PRUEBA: Propiedad, inquilino, y actividad
-- ============================================
-- Ejecuta esto DESPUÉS de:
-- 1. La migración 20260511200000_rental_management_tables.sql
-- 2. El script create_rental_subscription_order.sql

-- Reemplaza 'TU_EMAIL_AQUI' con tu email de usuario

DO $$
DECLARE
  v_user_id uuid;
  v_property_id uuid;
  v_tenant_id uuid;
BEGIN
  -- Obtener tu user_id
  SELECT id INTO v_user_id
  FROM auth.users
  WHERE email = 'TU_EMAIL_AQUI'
  LIMIT 1;

  IF v_user_id IS NULL THEN
    RAISE EXCEPTION 'Usuario no encontrado. Verifica tu email.';
  END IF;

  -- Crear propiedad de prueba
  INSERT INTO public.properties (
    id,
    user_id,
    address,
    property_type,
    rooms,
    bathrooms,
    surface_m2,
    cadastral_reference,
    ibi_annual,
    community_fee_monthly,
    notes,
    created_at
  ) VALUES (
    gen_random_uuid(),
    v_user_id,
    'Calle Gran Vía 45, 3º B, 28013 Madrid',
    'piso',
    3,
    2,
    85.50,
    '1234567VK1234A0001AB',
    650.00,
    85.00,
    'Piso céntrico con ascensor y terraza',
    now()
  ) RETURNING id INTO v_property_id;

  RAISE NOTICE 'Propiedad creada: %', v_property_id;

  -- Crear inquilino activo
  INSERT INTO public.tenants (
    id,
    property_id,
    full_name,
    email,
    phone,
    dni,
    address,
    start_date,
    end_date,
    monthly_rent,
    deposit_amount,
    is_active,
    notes,
    created_at
  ) VALUES (
    gen_random_uuid(),
    v_property_id,
    'María García López',
    'maria.garcia@example.com',
    '+34 612 345 678',
    '12345678A',
    'Misma dirección del inmueble',
    '2025-01-01',
    '2026-12-31',
    950.00,
    1900.00, -- Dos meses de fianza
    true,
    'Inquilina profesional, diseñadora gráfica',
    now()
  ) RETURNING id INTO v_tenant_id;

  RAISE NOTICE 'Inquilino creado: %', v_tenant_id;

  -- Crear pagos de alquiler (últimos 3 meses + próximo mes)
  INSERT INTO public.rent_payments (property_id, tenant_id, payment_date, amount, status, payment_method, notes) VALUES
    (v_property_id, v_tenant_id, '2025-02-05', 950.00, 'paid', 'transferencia', 'Febrero 2025 - pagado'),
    (v_property_id, v_tenant_id, '2025-03-05', 950.00, 'paid', 'transferencia', 'Marzo 2025 - pagado'),
    (v_property_id, v_tenant_id, '2025-04-05', 950.00, 'paid', 'transferencia', 'Abril 2025 - pagado'),
    (v_property_id, v_tenant_id, '2025-05-05', 950.00, 'pending', null, 'Mayo 2025 - pendiente'),
    (v_property_id, v_tenant_id, '2025-06-05', 950.00, 'pending', null, 'Junio 2025 - pendiente');

  RAISE NOTICE 'Pagos de alquiler creados';

  -- Crear gastos del inmueble
  INSERT INTO public.property_expenses (property_id, expense_type, amount, expense_date, description, is_deductible) VALUES
    (v_property_id, 'ibi', 325.00, '2025-01-15', 'IBI 1º semestre 2025', true),
    (v_property_id, 'comunidad', 85.00, '2025-02-01', 'Cuota comunidad febrero', true),
    (v_property_id, 'comunidad', 85.00, '2025-03-01', 'Cuota comunidad marzo', true),
    (v_property_id, 'comunidad', 85.00, '2025-04-01', 'Cuota comunidad abril', true),
    (v_property_id, 'reparacion', 120.00, '2025-03-10', 'Reparación caldera', true),
    (v_property_id, 'seguro', 180.00, '2025-01-01', 'Seguro hogar anual', true);

  RAISE NOTICE 'Gastos creados';

  -- Crear incidencias
  INSERT INTO public.incidents (property_id, tenant_id, title, description, status, priority, estimated_cost, photos) VALUES
    (v_property_id, v_tenant_id, 'Fuga en grifo del baño', 'El grifo del lavabo gotea constantemente', 'resolved', 'medium', 80.00, '[]'),
    (v_property_id, v_tenant_id, 'Ruido en caldera', 'La caldera hace ruido al encenderse', 'in_progress', 'high', 150.00, '[]'),
    (v_property_id, v_tenant_id, 'Persiana atascada', 'La persiana del dormitorio principal no sube', 'pending', 'low', 50.00, '[]');

  RAISE NOTICE 'Incidencias creadas';

  RAISE NOTICE '✓ Datos de prueba creados exitosamente';
  RAISE NOTICE 'Accede a /dashboard/rental para ver el panel de administración';
END $$;
