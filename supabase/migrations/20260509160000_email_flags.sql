-- Marca de emails enviados (bienvenida, recordatorio documentación)

alter table public.profiles
  add column if not exists welcome_email_sent_at timestamptz;

alter table public.orders
  add column if not exists docs_reminder_sent_at timestamptz;
