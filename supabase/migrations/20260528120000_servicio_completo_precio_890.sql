-- Acompañamiento completo de compra y venta: 890 € IVA incl. (89000 céntimos en price_cents)
UPDATE public.services
SET price_cents = 89000
WHERE slug IN ('servicio-completo-compra', 'servicio-completo-venta');
