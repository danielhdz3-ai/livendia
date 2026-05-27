-- ============================================
-- 📋 AGREGAR CARACTERÍSTICAS A CONTRATOS
-- ============================================

DO $$
BEGIN
  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║      📋 AGREGANDO CARACTERÍSTICAS A CONTRATOS        ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';

  -- Actualizar Reserva de Compra
  UPDATE public.services
  SET features = ARRAY[
    'Documento de reserva en 48-72h',
    'Redacción personalizada',
    'Protección de tu señal económica',
    'Asesoramiento incluido'
  ]
  WHERE slug = 'reserva-de-compra';

  RAISE NOTICE '   ✓ Features agregadas a Reserva de Compra';

  -- Actualizar Contrato de Alquiler LAU
  UPDATE public.services
  SET features = ARRAY[
    'Redacción conforme a LAU vigente',
    'Cláusulas personalizadas',
    'Protección legal arrendador/arrendatario',
    'Revisión de fianzas y garantías',
    'Entrega en 48-72h'
  ]
  WHERE slug = 'contrato-alquiler-lau';

  RAISE NOTICE '   ✓ Features agregadas a Contrato de Alquiler LAU';

  -- Actualizar Contrato de Alquiler por Temporada
  UPDATE public.services
  SET features = ARRAY[
    'Regulación específica temporada',
    'Ideal para estudiantes o trabajo',
    'Cláusulas adaptadas a corta estancia',
    'Protección legal ambas partes',
    'Entrega en 48-72h'
  ]
  WHERE slug = 'contrato-alquiler-temporada';

  RAISE NOTICE '   ✓ Features agregadas a Contrato de Alquiler por Temporada';

  -- Actualizar Contrato de Alquiler de Habitación
  UPDATE public.services
  SET features = ARRAY[
    'Régimen específico habitación compartida',
    'Cláusulas de convivencia',
    'Protección zonas comunes/privadas',
    'Gestión de gastos compartidos',
    'Entrega en 48-72h'
  ]
  WHERE slug = 'contrato-alquiler-habitacion';

  RAISE NOTICE '   ✓ Features agregadas a Contrato de Alquiler de Habitación';

  -- Actualizar Contrato de Arras Penitenciales
  UPDATE public.services
  SET features = ARRAY[
    'El contrato más habitual en España',
    'Permite desistir de la compra',
    'Cláusulas de penalización claras',
    'Protección de la señal económica',
    'Redacción personalizada',
    'Entrega en 48-72h'
  ]
  WHERE slug = 'contrato-arras-penitenciales';

  RAISE NOTICE '   ✓ Features agregadas a Contrato de Arras Penitenciales';

  -- Actualizar Contrato de Arras Confirmatorias
  UPDATE public.services
  SET features = ARRAY[
    'Mayor seguridad jurídica',
    'Obliga a completar la compraventa',
    'Protección máxima ambas partes',
    'Ideal para operaciones seguras',
    'Redacción personalizada',
    'Entrega en 48-72h'
  ]
  WHERE slug = 'contrato-arras-confirmatorias';

  RAISE NOTICE '   ✓ Features agregadas a Contrato de Arras Confirmatorias';

  RAISE NOTICE '';
  RAISE NOTICE '╔══════════════════════════════════════════════════════╗';
  RAISE NOTICE '║            ✅ ¡MIGRACIÓN COMPLETADA!                  ║';
  RAISE NOTICE '╚══════════════════════════════════════════════════════╝';
  RAISE NOTICE '';
  RAISE NOTICE '🎯 Servicios de contratos actualizados:';
  RAISE NOTICE '   • Reserva de Compra';
  RAISE NOTICE '   • Contrato de Alquiler LAU';
  RAISE NOTICE '   • Contrato de Alquiler por Temporada';
  RAISE NOTICE '   • Contrato de Alquiler de Habitación';
  RAISE NOTICE '   • Contrato de Arras Penitenciales';
  RAISE NOTICE '   • Contrato de Arras Confirmatorias';
  RAISE NOTICE '';

END $$;
