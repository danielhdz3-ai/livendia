-- Ejecutar tras crear el usuario con email admin.livendia@gmail.com (registro o invitación)
update public.profiles
set role = 'admin'
where id in (
  select id from auth.users where lower(email) = lower('admin.livendia@gmail.com')
);
