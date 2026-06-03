-- Precio oficial servicio completo compra y venta: 890 € IVA incl. (89000 céntimos)

UPDATE public.services
SET price_cents = 89000
WHERE slug IN ('servicio-completo-compra', 'servicio-completo-venta');
