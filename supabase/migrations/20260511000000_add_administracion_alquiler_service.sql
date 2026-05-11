-- Añadir servicio de Administración de Alquileres

insert into public.services (slug, name, description, category, price_cents, is_recurring, is_active)
values
  (
    'administracion-alquiler',
    'Administración de Alquileres',
    'Gestión completa de tu alquiler. Nosotros somos el punto de contacto con el inquilino, gestionamos incidencias, renovaciones y mediación. Tú solo cobras. Sin permanencia.',
    'administracion_alquiler',
    4900,
    true,
    true
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  is_active = excluded.is_active;
