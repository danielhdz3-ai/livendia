-- Revisión de contrato de alquiler para inquilinos

INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
VALUES (
  'revision-contrato-alquiler',
  'Revisión de contrato de alquiler',
  'Revisión profesional del contrato de alquiler antes de firmar: LAU, temporada o habitación. Detectamos cláusulas abusivas, puntos vulnerables y malas prácticas. Informe detallado PDF para negociar con el propietario.',
  'revision',
  12000,
  false,
  ARRAY[
    'Revisión cláusula a cláusula del borrador',
    'Contratos LAU, temporada y habitación',
    'Detección de cláusulas abusivas o ilegales',
    'Análisis de fianza, renta y actualizaciones',
    'Revisión de gastos, suministros y penalizaciones',
    'Informe detallado PDF con puntos a negociar',
    'Llamada de veredicto con gestor especializado',
    'Asesoramiento telefónico antes de firmar',
    'Entrega en 24-48 h laborables'
  ],
  'Para inquilinos',
  true
)
ON CONFLICT (slug) DO UPDATE SET
  name = EXCLUDED.name,
  description = EXCLUDED.description,
  category = EXCLUDED.category,
  price_cents = EXCLUDED.price_cents,
  is_recurring = EXCLUDED.is_recurring,
  features = EXCLUDED.features,
  badge = EXCLUDED.badge,
  is_active = EXCLUDED.is_active;
