-- Permitir a administradores gestionar datos de alquiler de todos los clientes
-- (Las políticas existentes solo permitían al propietario; el panel admin usaba el cliente
--  de usuario y las consultas devolvían 0 filas para propiedades ajenas.)

drop policy if exists "Admins manage all properties" on public.properties;
create policy "Admins manage all properties"
  on public.properties for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins manage all tenants" on public.tenants;
create policy "Admins manage all tenants"
  on public.tenants for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins manage all property_documents" on public.property_documents;
create policy "Admins manage all property_documents"
  on public.property_documents for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins manage all tenant_documents" on public.tenant_documents;
create policy "Admins manage all tenant_documents"
  on public.tenant_documents for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins manage all rent_payments" on public.rent_payments;
create policy "Admins manage all rent_payments"
  on public.rent_payments for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins manage all property_expenses" on public.property_expenses;
create policy "Admins manage all property_expenses"
  on public.property_expenses for all
  using (public.is_admin())
  with check (public.is_admin());

drop policy if exists "Admins manage all incidents" on public.incidents;
create policy "Admins manage all incidents"
  on public.incidents for all
  using (public.is_admin())
  with check (public.is_admin());
