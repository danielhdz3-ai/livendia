-- Precio comercial administración LAU: 59 €/mes IVA incl. (antes 49 € en algunas filas)

update public.services
set price_cents = 5900
where slug = 'administracion-alquiler'
  and price_cents is distinct from 5900;
