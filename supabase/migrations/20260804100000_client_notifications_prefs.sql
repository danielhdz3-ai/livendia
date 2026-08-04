-- Preferencias de notificación en perfil + bandeja de notificaciones del cliente.

alter table public.profiles
  add column if not exists notify_email_orders boolean not null default true,
  add column if not exists notify_email_docs boolean not null default true,
  add column if not exists notify_newsletter boolean not null default false;

create table if not exists public.client_notifications (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.profiles (id) on delete cascade,
  kind text not null check (kind in ('status', 'document', 'deliverable', 'payment', 'reminder', 'system')),
  title text not null,
  message text,
  href text,
  order_id uuid references public.orders (id) on delete cascade,
  read_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists client_notifications_user_created_idx
  on public.client_notifications (user_id, created_at desc);

create index if not exists client_notifications_unread_idx
  on public.client_notifications (user_id)
  where read_at is null;

create unique index if not exists client_notifications_reminder_unique
  on public.client_notifications (user_id, order_id, kind)
  where order_id is not null and kind = 'reminder';

alter table public.client_notifications enable row level security;

create policy "client_notifications_select_own"
  on public.client_notifications for select
  using (user_id = auth.uid());

create policy "client_notifications_update_own"
  on public.client_notifications for update
  using (user_id = auth.uid());

-- Realtime en tablas del expediente (panel cliente).
alter table public.order_activity replica identity full;
alter table public.orders replica identity full;
alter table public.order_deliverables replica identity full;
alter table public.client_notifications replica identity full;

do $$
begin
  alter publication supabase_realtime add table public.order_activity;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.orders;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.order_deliverables;
exception when duplicate_object then null;
end $$;

do $$
begin
  alter publication supabase_realtime add table public.client_notifications;
exception when duplicate_object then null;
end $$;
