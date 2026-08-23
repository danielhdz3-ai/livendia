"use client";

import { CreateIncidentForm } from "@/app/dashboard/rental/incidencias/create-incident-form";
import { IncidentsRealtimeRefresh } from "@/components/incidents-realtime-refresh";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { AlertCircle, MessageCircle } from "lucide-react";
import {
  INCIDENT_PRIORITY_LABELS,
  INCIDENT_STATUS_LABELS,
} from "@/lib/rental-incident-labels";

const statusLabels = INCIDENT_STATUS_LABELS;
const priorityLabels = INCIDENT_PRIORITY_LABELS;

type Incident = {
  id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
  created_at: string;
  estimated_cost?: number | null;
};

export function RentalIncidentsClient({
  propertyId,
  propertyAddress,
  incidents,
}: {
  propertyId: string;
  propertyAddress: string;
  incidents: Incident[];
}) {
  const router = useRouter();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-8">
      <IncidentsRealtimeRefresh propertyId={propertyId} />
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#1E293B]">Portal de Incidencias</h1>
          <p className="mt-1 text-[#64748B]">{propertyAddress}</p>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setShowForm((v) => !v)}
            className="rounded-lg border border-[#1A4FBF] px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50"
          >
            {showForm ? "Ocultar formulario" : "Reportar incidencia"}
          </button>
          <Link
            href="/dashboard/rental/chat"
            className="flex items-center gap-2 rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563EB]"
          >
            <MessageCircle className="h-4 w-4" />
            Chat con Gestor
          </Link>
        </div>
      </div>

      {showForm ? (
        <div className="mb-8 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <h2 className="mb-4 text-lg font-bold text-[#1E293B]">Nueva incidencia</h2>
          <CreateIncidentForm
            propertyId={propertyId}
            onSuccess={() => {
              setShowForm(false);
              router.refresh();
            }}
          />
        </div>
      ) : null}

      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <h2 className="mb-4 text-lg font-bold text-[#1E293B]">Incidencias ({incidents.length})</h2>

        <div className="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
          Puedes reportar incidencias tú mismo o consultar las que registre tu gestor Livendia. Recibirás email en cada actualización importante.
        </div>

        {incidents.length === 0 ? (
          <div className="py-12 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-sm text-[#64748B]">No hay incidencias registradas</p>
          </div>
        ) : (
          <div className="space-y-4">
            {incidents.map((incident) => {
              const status = statusLabels[incident.status] || statusLabels.pending;
              const priority = priorityLabels[incident.priority] || priorityLabels.medium;

              return (
                <Link
                  key={incident.id}
                  href={`/dashboard/rental/incidencias/${incident.id}`}
                  className="block rounded-lg border border-slate-200 p-4 transition hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-[#1E293B]">{incident.title}</h3>
                        <span className={`text-xs font-semibold ${priority.color}`}>{priority.label}</span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-[#64748B]">{incident.description}</p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-[#64748B]">
                        <span>{new Date(incident.created_at).toLocaleDateString("es-ES")}</span>
                        {incident.estimated_cost != null ? (
                          <span>Estimado: {incident.estimated_cost.toFixed(2)} €</span>
                        ) : null}
                      </div>
                    </div>
                    <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
                      {status.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
