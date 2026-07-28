-- Mover acompañamiento de alquiler a categoría «acompanamiento» (más visible en /servicios)

UPDATE public.services
SET
  category = 'acompanamiento',
  name = 'Acompañamiento de alquiler',
  price_cents = 18900,
  is_active = true,
  badge = 'Para inquilinos'
WHERE slug = 'acompanamiento-alquiler';
