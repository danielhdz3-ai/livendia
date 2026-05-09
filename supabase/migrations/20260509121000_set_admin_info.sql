-- Ejecutar tras crear el usuario con email info@livendia.com (registro o invitación)
update public.profiles
set role = 'admin'
where id in (
  select id from auth.users where lower(email) = lower('info@livendia.com')
);
