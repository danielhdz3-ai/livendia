-- Pago de prueba checkout — 5 € IVA incl. (500 céntimos). Servicio temporal para verificar flujo de pago.

INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
VALUES (
  'pago-prueba-livendia',
  'Pago de prueba Livendia',
  'Servicio temporal de 5 € para verificar registro, checkout con Stripe y confirmación de pedido en Livendia. Sin prestación real asociada.',
  'otro',
  500,
  false,
  ARRAY[
    'Pago único de 5 € IVA incluido',
    'Mismo flujo que cualquier otro servicio',
    'Confirmación por email y área de cliente',
    'Solo para pruebas internas'
  ],
  'Prueba',
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
