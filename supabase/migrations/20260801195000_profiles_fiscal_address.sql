-- Dirección fiscal del cliente (contratos y facturación).

alter table public.profiles
  add column if not exists fiscal_address text;
