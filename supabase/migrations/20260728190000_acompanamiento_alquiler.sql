-- Acompañamiento de alquiler para inquilinos (gestor + docs + firma)

INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
VALUES (
  'acompanamiento-alquiler',
  'Acompañamiento de alquiler',
  'Gestor especializado para inquilinos que ya tienen piso de alquiler (o lo van a firmar): documentación requerida, asesoramiento, revisión y redacción de contratos, firma digital electrónica certificada, expediente online y mediación con la parte propietaria hasta que tú decidas cerrar el servicio.',
  'alquiler',
  18900,
  false,
  ARRAY[
    'Gestor especializado asignado en todo momento',
    'Checklist y revisión de la documentación requerida',
    'Asesoramiento continuo del trámite de alquiler',
    'Revisión y redacción de contratos de alquiler',
    'Firma digital electrónica certificada',
    'Plataforma Livendia: expediente y documentos seguros',
    'Mediación y apoyo con la parte propietaria',
    'Control de coherencia con la normativa vigente',
    'El servicio finaliza cuando tú lo decides'
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
