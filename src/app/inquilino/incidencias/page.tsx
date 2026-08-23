import { TenantCreateIncidentForm } from "@/components/tenant-create-incident-form";
import { IncidentsRealtimeRefresh } from "@/components/incidents-realtime-refresh";
import { getTenantContextForUser } from "@/lib/rental-tenant-access";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  INCIDENT_PRIORITY_LABELS,
  INCIDENT_STATUS_LABELS,
} from "@/lib/rental-incident-labels";

export const metadata = { title: "Incidencias — Portal inquilino" };

export default async function TenantIncidentsPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/inquilino/incidencias");

  const tenantCtx = await getTenantContextForUser(supabase, user.id);
  if (!tenantCtx) redirect("/inquilino");

  const { data: incidents } = await supabase
    .from("incidents")
    .select("id, title, description, status, priority, created_at, estimated_cost")
    .eq("property_id", tenantCtx.propertyId)
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <IncidentsRealtimeRefresh propertyId={tenantCtx.propertyId} />

      <h1 className="text-3xl font-bold text-[#1E293B]">Incidencias</h1>
      <p className="mt-1 text-[#64748B]">{tenantCtx.propertyAddress}</p>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <h2 className="mb-4 text-lg font-bold text-[#1E293B]">Reportar incidencia</h2>
        <TenantCreateIncidentForm propertyId={tenantCtx.propertyId} />
      </div>

      <div className="mt-8 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <h2 className="mb-4 text-lg font-bold text-[#1E293B]">
          Mis incidencias ({incidents?.length ?? 0})
        </h2>
        {!incidents?.length ? (
          <p className="text-sm text-[#64748B]">No hay incidencias registradas.</p>
        ) : (
          <div className="space-y-3">
            {incidents.map((incident) => {
              const status =
                INCIDENT_STATUS_LABELS[incident.status as string] ?? INCIDENT_STATUS_LABELS.pending;
              const priority =
                INCIDENT_PRIORITY_LABELS[incident.priority as string] ??
                INCIDENT_PRIORITY_LABELS.medium;
              return (
                <Link
                  key={incident.id as string}
                  href={`/inquilino/incidencias/${incident.id as string}`}
                  className="block rounded-lg border border-slate-200 p-4 transition hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-semibold text-[#1E293B]">{incident.title as string}</h3>
                        <span className={`text-xs font-semibold ${priority.color}`}>
                          {priority.label}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-[#64748B]">
                        {incident.description as string}
                      </p>
                      <p className="mt-2 text-xs text-[#64748B]">
                        {new Date(incident.created_at as string).toLocaleDateString("es-ES")}
                        {incident.estimated_cost != null
                          ? ` · Estimado: ${Number(incident.estimated_cost).toFixed(2)} €`
                          : ""}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}
                    >
                      {status.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
        <p className="mt-4 text-xs text-[#64748B]">
          Recibirás avisos por email cuando el gestor actualice una incidencia.
        </p>
      </div>
    </div>
  );
}
