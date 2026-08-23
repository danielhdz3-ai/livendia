-- Sprint 3: chat realtime + portal inquilino

-- Rol tenant en perfiles
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles
  add constraint profiles_role_check check (role in ('client', 'admin', 'tenant'));

-- Vincular inquilinos con cuenta de acceso
alter table public.tenants
  add column if not exists user_id uuid references auth.users(id) on delete set null;

create unique index if not exists tenants_user_id_unique
  on public.tenants (user_id)
  where user_id is not null;

create index if not exists tenants_user_property_idx
  on public.tenants (user_id, property_id)
  where user_id is not null;

-- Helpers RLS
create or replace function public.is_tenant_for_property(p_property_id uuid)
returns boolean
language sql
stable
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.tenants t
    where t.property_id = p_property_id
      and t.user_id = auth.uid()
      and coalesce(t.is_active, true) = true
  );
$$;

-- Propiedades: inquilino puede ver su inmueble
drop policy if exists "Tenants view their rented property" on public.properties;
create policy "Tenants view their rented property"
  on public.properties for select
  using (public.is_tenant_for_property(id));

-- Inquilinos: ver propio registro
drop policy if exists "Tenants view own tenant record" on public.tenants;
create policy "Tenants view own tenant record"
  on public.tenants for select
  using (user_id = auth.uid());

-- Incidencias: inquilino
drop policy if exists "Tenants view incidents for their property" on public.incidents;
create policy "Tenants view incidents for their property"
  on public.incidents for select
  using (public.is_tenant_for_property(property_id));

drop policy if exists "Tenants create incidents for their property" on public.incidents;
create policy "Tenants create incidents for their property"
  on public.incidents for insert
  with check (
    public.is_tenant_for_property(property_id)
    and tenant_id in (
      select t.id from public.tenants t
      where t.user_id = auth.uid() and t.property_id = property_id
    )
  );

-- Mensajes: inquilino en chat del inmueble
drop policy if exists "messages_select_policy" on public.messages;
create policy "messages_select_policy"
  on public.messages for select
  using (
    exists (
      select 1 from public.properties p
      where p.id = property_id
        and (p.user_id = auth.uid() or public.is_admin() or public.is_tenant_for_property(p.id))
    )
  );

drop policy if exists "messages_insert_policy" on public.messages;
create policy "messages_insert_policy"
  on public.messages for insert
  with check (
    sender_id = auth.uid()
    and exists (
      select 1 from public.properties p
      where p.id = property_id
        and (p.user_id = auth.uid() or public.is_admin() or public.is_tenant_for_property(p.id))
    )
  );

drop policy if exists "messages_update_policy" on public.messages;
create policy "messages_update_policy"
  on public.messages for update
  using (
    exists (
      select 1 from public.properties p
      where p.id = property_id
        and (p.user_id = auth.uid() or public.is_admin() or public.is_tenant_for_property(p.id))
    )
  );

-- Realtime para chat
alter table public.messages replica identity full;

do $$
begin
  alter publication supabase_realtime add table public.messages;
exception
  when duplicate_object then null;
end $$;
