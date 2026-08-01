-- Reactiva el servicio de prueba de 5 € para verificar checkout Stripe y subida de documentos.
UPDATE public.services
SET is_active = true
WHERE slug = 'pago-prueba-livendia';
