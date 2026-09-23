-- Contrato de alquiler con opción a compra (rent-to-own) — 145 € IVA incl. (14500 céntimos)

INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
VALUES (
  'contrato-alquiler-opcion-compra',
  'Contrato de alquiler con opción a compra',
  'Redacción del arrendamiento con pacto de opción de compra entre particulares: precio de ejercicio, plazo, tratamiento de rentas y cláusulas LAU adaptadas. Gestor dedicado e inventario incluido.',
  'alquiler',
  14500,
  false,
  ARRAY[
    'Arrendamiento LAU con pacto de opción de compra',
    'Precio de ejercicio, plazo y condiciones de la opción',
    'Tratamiento de rentas durante el arrendamiento',
    'Inventario del inmueble incluido',
    'Asesoramiento sobre tanteo y derechos del inquilino',
    'Gestor dedicado hasta la firma',
    'Entrega en 48-72 h laborables'
  ],
  'Opción a compra',
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
