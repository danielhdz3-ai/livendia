-- Retira el servicio de prueba del catálogo público (landing y checkout eliminados).

UPDATE public.services
SET is_active = false
WHERE slug = 'pago-prueba-livendia';
