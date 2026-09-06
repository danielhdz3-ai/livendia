-- Administración de alquiler por temporada o habitaciones (79 €/mes IVA incl.)

insert into public.services (
  slug,
  name,
  description,
  category,
  price_cents,
  is_recurring,
  is_active,
  features,
  badge
)
values
  (
    'administracion-alquiler-temporada',
    'Administración de alquiler por temporada o habitaciones',
    'Para propietarios con piso de temporada o alquiler por habitaciones: Livendia gestiona inquilinos, entradas y salidas, servicio técnico e incidencias. 79 €/mes IVA incl. Cada contrato nuevo se cobra aparte (100 € IVA incl.). Rescisiones de contrato gratuitas.',
    'administracion_alquiler',
    7900,
    true,
    true,
    array[
      'Punto de contacto con inquilinos de temporada o por habitación',
      'Control de entradas y salidas (check-in / check-out)',
      'Gestión de servicio técnico e incidencias',
      'Seguimiento de contratos y documentación en panel Livendia',
      'Rescisiones de contrato incluidas sin coste',
      'Cada contrato nuevo de alquiler: 100 € IVA incl. (cobro aparte)',
      'Sin permanencia'
    ],
    'Temporada · Habitaciones'
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  is_active = excluded.is_active,
  features = excluded.features,
  badge = excluded.badge;
