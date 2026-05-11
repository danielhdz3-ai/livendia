-- Añadir servicios de contratos de alquiler y arras

insert into public.services (slug, name, description, category, price_cents, is_recurring, is_active)
values
  -- Contratos de alquiler
  (
    'contrato-alquiler-lau',
    'Contrato de Alquiler LAU',
    'Redacción o revisión del contrato de arrendamiento de vivienda conforme a la normativa vigente.',
    'alquiler',
    12000,
    false,
    true
  ),
  (
    'contrato-alquiler-temporada',
    'Contrato de Alquiler por Temporada',
    'Para estancias temporales, estudios o trabajo. Regulación específica fuera de la LAU estándar.',
    'alquiler',
    12000,
    false,
    true
  ),
  (
    'contrato-alquiler-habitacion',
    'Contrato de Alquiler de Habitación',
    'Arrendamiento de habitación en piso compartido con cláusulas específicas para este régimen.',
    'alquiler',
    12000,
    false,
    true
  ),
  -- Contratos de arras
  (
    'contrato-arras-penitenciales',
    'Contrato de Arras Penitenciales',
    'El contrato más habitual en compraventa. Permite desistir pagando o reteniendo las arras.',
    'compraventa',
    14500,
    false,
    true
  ),
  (
    'contrato-arras-confirmatorias',
    'Contrato de Arras Confirmatorias',
    'Mayor seguridad jurídica para ambas partes. Obliga a completar la compraventa.',
    'compraventa',
    14500,
    false,
    true
  )
on conflict (slug) do update set
  name = excluded.name,
  description = excluded.description,
  category = excluded.category,
  price_cents = excluded.price_cents,
  is_recurring = excluded.is_recurring,
  is_active = excluded.is_active;
