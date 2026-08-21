import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft, Calendar, AlertCircle, CheckCircle, Clock, DollarSign } from "lucide-react";
import { DownloadButton } from "@/components/download-button";
import { IncidentApprovalActions } from "@/components/incident-approval-actions";

export const metadata = { title: "Detalle de incidencia" };

const statusLabels: Record<string, { label: string; color: string; icon: LucideIcon }> = {
  pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  in_progress: { label: "En Proceso", color: "bg-blue-100 text-blue-800", icon: Clock },
  waiting_approval: { label: "Esperando Aprobación", color: "bg-purple-100 text-purple-800", icon: AlertCircle },
  approved: { label: "Aprobada", color: "bg-green-100 text-green-800", icon: CheckCircle },
  resolved: { label: "Resuelta", color: "bg-gray-100 text-gray-800", icon: CheckCircle },
  rejected: { label: "Rechazada", color: "bg-red-100 text-red-800", icon: AlertCircle },
};

const priorityLabels: Record<string, { label: string; color: string }> = {
  low: { label: "Baja", color: "bg-gray-100 text-gray-800" },
  medium: { label: "Media", color: "bg-blue-100 text-blue-800" },
  high: { label: "Alta", color: "bg-orange-100 text-orange-800" },
  urgent: { label: "Urgente", color: "bg-red-100 text-red-800" },
};

export default async function IncidentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/login");
  }

  // Obtener incidencia
  const { data: incident } = await supabase
    .from("incidents")
    .select("*, properties(address, user_id)")
    .eq("id", id)
    .maybeSingle();

  if (!incident) {
    redirect("/dashboard/rental/incidencias");
  }

  // Verificar permisos
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  const isAdmin = profile?.role === "admin";
  const isOwner = incident.properties?.user_id === user.id;

  if (!isAdmin && !isOwner) {
    redirect("/dashboard/rental/incidencias");
  }

  const status = statusLabels[incident.status] || statusLabels.pending;
  const priority = priorityLabels[incident.priority] || priorityLabels.medium;
  const StatusIcon = status.icon;
  const photos = (incident.photos as string[]) || [];

  return (
    <div className="p-8">
      <Link
        href="/dashboard/rental/incidencias"
        className="mb-6 inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#1A4FBF]"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a incidencias
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Información principal */}
        <div className="lg:col-span-2 space-y-6">
          {/* Header */}
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="flex items-start justify-between">
              <div>
                <h1 className="text-2xl font-bold text-[#1E293B]">{incident.title}</h1>
                <p className="mt-1 text-sm text-[#64748B]">
                  Propiedad: {incident.properties?.address}
                </p>
              </div>
              <div className="flex gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priority.color}`}>
                  {priority.label}
                </span>
                <span className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
                  <StatusIcon className="h-3 w-3" />
                  {status.label}
                </span>
              </div>
            </div>

            {/* Descripción */}
            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold text-[#64748B]">Descripción</h3>
              <p className="text-[#1E293B]">{incident.description}</p>
            </div>

            {/* Fechas */}
            <div className="mt-6 flex gap-6 text-sm">
              <div className="flex items-center gap-2 text-[#64748B]">
                <Calendar className="h-4 w-4" />
                <span>Creada: {new Date(incident.created_at).toLocaleDateString("es-ES")}</span>
              </div>
              {incident.resolved_at && (
                <div className="flex items-center gap-2 text-[#64748B]">
                  <CheckCircle className="h-4 w-4" />
                  <span>Resuelta: {new Date(incident.resolved_at).toLocaleDateString("es-ES")}</span>
                </div>
              )}
            </div>
          </div>

          {/* Fotos */}
          {photos.length > 0 && (
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <h3 className="mb-4 text-lg font-bold text-[#1E293B]">
                Fotos ({photos.length})
              </h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {photos.map((photoPath, index) => (
                  <div key={index} className="group relative">
                    <div className="overflow-hidden rounded-lg">
                      <DownloadButton
                        filePath={photoPath}
                        fileName={`incidencia_${incident.id}_foto_${index + 1}`}
                        variant="button"
                        className="w-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {!isAdmin ? (
            <IncidentApprovalActions
              incidentId={incident.id as string}
              status={incident.status as string}
              estimatedCost={incident.estimated_cost as number | null}
            />
          ) : null}

          {/* Presupuesto */}
          {(incident.estimated_cost || incident.approved_budget) && (
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#1E293B]">
                <DollarSign className="h-5 w-5" />
                Presupuesto
              </h3>
              {incident.estimated_cost && (
                <div className="mb-3">
                  <div className="text-xs text-[#64748B]">Coste Estimado</div>
                  <div className="text-2xl font-bold text-[#1E293B]">
                    {incident.estimated_cost.toFixed(2)} €
                  </div>
                </div>
              )}
              {incident.approved_budget && (
                <div>
                  <div className="text-xs text-[#64748B]">Presupuesto Aprobado</div>
                  <div className="text-2xl font-bold text-green-600">
                    {incident.approved_budget.toFixed(2)} €
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Info adicional */}
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <h3 className="mb-4 text-lg font-bold text-[#1E293B]">Información</h3>
            <div className="space-y-3 text-sm">
              <div>
                <span className="text-[#64748B]">ID:</span>
                <span className="ml-2 font-mono text-xs text-[#1E293B]">
                  {incident.id.slice(0, 8)}...
                </span>
              </div>
              <div>
                <span className="text-[#64748B]">Estado:</span>
                <span className="ml-2 text-[#1E293B]">{status.label}</span>
              </div>
              <div>
                <span className="text-[#64748B]">Prioridad:</span>
                <span className="ml-2 text-[#1E293B]">{priority.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
