-- Acompañamiento de compra de parking o trastero — 298 € IVA incl. (29800 céntimos)

INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
VALUES (
  'acompanamiento-compra-parking-trastero',
  'Acompañamiento de compra de parking o trastero',
  'Servicio integral de compra con gestor dedicado: nota simple, IBI, comunidad, notaría, ITP y registro. Un profesional se encarga de todos los trámites hasta la entrega de la documentación final.',
  'compraventa',
  29800,
  false,
  ARRAY[
    'Nota simple registral y revisión de cargas',
    'Revisión IBI y deuda de comunidad',
    'Coordinación con oficial de notaría',
    'Preparación documentación comprador y vendedor',
    'Solicitud copia autorizada electrónica al notario',
    'Liquidación ITP (modelo 600) en ATC',
    'Presentación telemática en registradores.org',
    'Entrega documentación final inscrita'
  ],
  'Parking y trastero',
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
