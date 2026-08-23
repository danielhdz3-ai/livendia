-- Realtime para incidencias (actualización en vivo en listados)

alter table public.incidents replica identity full;

do $$
begin
  alter publication supabase_realtime add table public.incidents;
exception
  when duplicate_object then null;
end $$;
