-- ============================================
-- 📋 AGREGAR CARACTERÍSTICAS A SERVICIOS
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║      📋 AGREGANDO CARACTERÍSTICAS A SERVICIOS        ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- Agregar columna features para lista de características
  ALTER TABLE public.services 
  ADD COLUMN IF NOT EXISTS features text[];

  RAISE NOTICE '   ✓ Columna features agregada';

  -- Agregar columna badge para etiquetas especiales (Premium, Todo Incluido, etc)
  ALTER TABLE public.services 
  ADD COLUMN IF NOT EXISTS badge text;

  RAISE NOTICE '   ✓ Columna badge agregada';

  -- Insertar servicios de Acompañamiento
  INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
  VALUES 
    (
      'acompanamiento-reserva-arras',
      'Acompañamiento Reserva hasta Arras',
      'Servicio completo de asesoramiento jurídico desde la reserva hasta el contrato de arras. Incluye revisión de contratos de reserva, nota registral, documentación urbanística y apoyo legal en todo el proceso.',
      'acompanamiento',
      42400,
      false,
      ARRAY[
        'Revisión completa de contrato de reserva',
        'Análisis exhaustivo de nota simple registral',
        'Revisión de documentación urbanística',
        'Redacción de contrato de arras personalizado',
        'Apoyo jurídico durante todo el proceso',
        'Entrega en 48h · Atención personalizada'
      ],
      'Premium',
      true
    ),
    (
      'servicio-completo-compra',
      'Servicio Completo de Compra: Reserva a Escritura',
      'El servicio más completo de gestoría inmobiliaria. Te acompañamos desde la reserva hasta la escrituración con revisión total de documentación, contratos con agencias, honorarios y apoyo en cada paso del proceso de compra.',
      'acompanamiento',
      66600,
      false,
      ARRAY[
        'Gestión completa: reserva, arras y escritura',
        'Revisión de contratos con agencias inmobiliarias',
        'Revisión de notas de encargo y honorarios',
        'Análisis documentación registral y urbanística',
        'Apoyo legal en todo el proceso de compra',
        'Coordinación con notaría · Atención prioritaria'
      ],
      'Todo Incluido',
      true
    )
  ON CONFLICT (slug) DO NOTHING;

  RAISE NOTICE '   ✓ Servicios de Acompañamiento creados';

  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║            ✅ ¡MIGRACIÓN COMPLETADA!                  ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

END $$;
