import Link from "next/link";
import { AlertCircle } from "lucide-react";
import {
  INCIDENT_PRIORITY_LABELS,
  INCIDENT_STATUS_LABELS,
} from "@/lib/rental-incident-labels";

export type AdminIncidentRow = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  created_at: string;
  property_id: string;
  estimated_cost?: number | null;
};

export function AdminIncidentsList({
  incidents,
  propertyAddresses,
}: {
  incidents: AdminIncidentRow[];
  propertyAddresses: Record<string, string>;
}) {
  if (incidents.length === 0) {
    return (
      <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
        <h3 className="mb-2 flex items-center gap-2 font-bold text-[#1E293B]">
          <AlertCircle className="h-5 w-5 text-orange-600" />
          Incidencias
        </h3>
        <p className="text-sm text-[#64748B]">No hay incidencias registradas para este cliente.</p>
      </div>
    );
  }

  return (
    <div className="rounded-xl bg-white p-6 shadow ring-1 ring-slate-200">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h3 className="flex items-center gap-2 font-bold text-[#1E293B]">
          <AlertCircle className="h-5 w-5 text-orange-600" />
          Incidencias ({incidents.length})
        </h3>
        <Link
          href="/admin/incidencias"
          className="text-sm font-semibold text-[#1A4FBF] hover:text-[#2563EB]"
        >
          Ver todas →
        </Link>
      </div>

      <div className="space-y-3">
        {incidents.map((incident) => {
          const status = INCIDENT_STATUS_LABELS[incident.status] ?? INCIDENT_STATUS_LABELS.pending;
          const priority = INCIDENT_PRIORITY_LABELS[incident.priority] ?? INCIDENT_PRIORITY_LABELS.medium;
          const address = propertyAddresses[incident.property_id] ?? "Inmueble";

          return (
            <Link
              key={incident.id}
              href={`/admin/incidencias/${incident.id}`}
              className="block rounded-lg border border-slate-200 p-4 transition hover:border-[#1A4FBF] hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h4 className="font-semibold text-[#1E293B]">{incident.title}</h4>
                    <span className={`text-xs font-semibold ${priority.color}`}>{priority.label}</span>
                  </div>
                  <p className="mt-1 text-xs text-[#64748B]">{address}</p>
                  <p className="mt-1 line-clamp-2 text-sm text-[#64748B]">{incident.description}</p>
                  <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
                    <span>{new Date(incident.created_at).toLocaleDateString("es-ES")}</span>
                    {incident.estimated_cost != null ? (
                      <span>Estimado: {Number(incident.estimated_cost).toFixed(2)} €</span>
                    ) : null}
                  </div>
                </div>
                <span className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
                  {status.label}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
