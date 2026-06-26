-- Desactiva el servicio de prueba para que no aparezca en el catálogo público.
UPDATE public.services
SET is_active = false
WHERE slug = 'pago-prueba-livendia';
