-- Pack revisión documental post-arras (pre-escritura)

INSERT INTO public.services (slug, name, description, category, price_cents, is_recurring, features, badge, is_active)
VALUES (
  'revision-documental-post-arras',
  'Pack Revisión Documental post-arras',
  'Verificación documental integral tras firmar arras y antes de escriturar. Revisamos contrato de arras, actas de comunidad, derramas, ITE, nota registral e información urbanística. Informe ejecutivo + llamada de veredicto y asesoramiento telefónico.',
  'compraventa',
  16900,
  false,
  ARRAY[
    'Revisión completa de contrato de arras',
    'Revisión de actas de comunidad (últimos 2 años)',
    'Verificación de derramas pendientes y extraordinarias',
    'Análisis del ITE (Inspección Técnica de Edificios)',
    'Obtención y revisión de nota registral actualizada',
    'Consulta de información urbanística y licencias',
    'Informe ejecutivo PDF con hallazgos y recomendaciones',
    'Llamada de veredicto con gestor especializado',
    'Asesoramiento telefónico para dudas durante el proceso',
    'Entrega en 3-5 días · Análisis en 48h'
  ],
  'Pre-escritura',
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
