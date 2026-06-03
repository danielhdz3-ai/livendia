-- Servicio de acompañamiento de venta (particular a particular): reserva → escritura

INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
VALUES (
  'servicio-completo-venta',
  'Servicio completo de venta: reserva a escritura',
  'Acompañamiento para propietarios que venden su vivienda de forma particular a un comprador particular. Gestor personalizado, redacción de reserva y arras, recopilación documental y asesoramiento hasta la escritura.',
  'acompanamiento',
  66600,
  false,
  ARRAY[
    'Estudio de la operación con gestor personalizado',
    'Redacción de contrato de reserva adaptado a tu venta',
    'Redacción de contrato de arras (penitenciales o confirmatorias)',
    'Ayuda para recabar nota simple, comunidad, ITE y documentación',
    'Revisión de documentación del comprador y coherencia con lo pactado',
    'Asesoramiento continuo hasta la firma en notaría',
    'Coordinación de plazos y checklist pre-escritura',
    'Área de cliente para subir y centralizar documentos'
  ],
  'Para vendedores',
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
