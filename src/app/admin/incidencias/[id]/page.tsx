import { createServerSupabaseClient } from "@/lib/supabase/server";
import { ArrowLeft, Calendar, User, Mail, DollarSign } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { DownloadButton } from "@/components/download-button";
import { UpdateIncidentForm } from "./update-incident-form";

export const metadata = { title: { absolute: "Detalle de incidencia — Livendia Admin" } };

const statusLabels: Record<string, { label: string; color: string }> = {
  pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800" },
  in_progress: { label: "En Proceso", color: "bg-blue-100 text-blue-800" },
  waiting_approval: { label: "Esperando Aprobación", color: "bg-purple-100 text-purple-800" },
  approved: { label: "Aprobada", color: "bg-green-100 text-green-800" },
  resolved: { label: "Resuelta", color: "bg-gray-100 text-gray-800" },
  rejected: { label: "Rechazada", color: "bg-red-100 text-red-800" },
};

const priorityLabels: Record<string, { label: string; color: string }> = {
  low: { label: "Baja", color: "bg-gray-100 text-gray-800" },
  medium: { label: "Media", color: "bg-blue-100 text-blue-800" },
  high: { label: "Alta", color: "bg-orange-100 text-orange-800" },
  urgent: { label: "Urgente", color: "bg-red-100 text-red-800" },
};

export default async function AdminIncidentDetailPage({
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

  // Verificar que es admin
  const { data: profile } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "admin") {
    redirect("/dashboard");
  }

  // Obtener incidencia con info completa
  const { data: incident } = await supabase
    .from("incidents")
    .select(`
      *,
      properties (
        address,
        zone,
        user_id,
        profiles:user_id (
          full_name,
          email,
          phone
        )
      )
    `)
    .eq("id", id)
    .maybeSingle();

  if (!incident) {
    redirect("/admin/incidencias");
  }

  const status = statusLabels[incident.status] || statusLabels.pending;
  const priority = priorityLabels[incident.priority] || priorityLabels.medium;
  const photos = (incident.photos as string[]) || [];
  const client = incident.properties?.profiles;

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">
        <Link
          href="/admin/incidencias"
          className="mb-6 inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#1A4FBF]"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver a incidencias
        </Link>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Columna principal */}
          <div className="lg:col-span-2 space-y-6">
            {/* Header */}
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <div className="flex items-start justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-[#1E293B]">{incident.title}</h1>
                  <p className="mt-1 text-sm text-[#64748B]">
                    {incident.properties?.address}
                  </p>
                </div>
                <div className="flex gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priority.color}`}>
                    {priority.label}
                  </span>
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
                    {status.label}
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="mb-2 text-sm font-semibold text-[#64748B]">Descripción</h3>
                <p className="text-[#1E293B]">{incident.description}</p>
              </div>

              <div className="mt-6 flex gap-6 text-sm">
                <div className="flex items-center gap-2 text-[#64748B]">
                  <Calendar className="h-4 w-4" />
                  <span>Creada: {new Date(incident.created_at).toLocaleDateString("es-ES")}</span>
                </div>
                {incident.resolved_at && (
                  <div className="flex items-center gap-2 text-[#64748B]">
                    <Calendar className="h-4 w-4" />
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
                    <DownloadButton
                      key={index}
                      filePath={photoPath}
                      fileName={`incidencia_${incident.id}_foto_${index + 1}`}
                      variant="button"
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Info del cliente */}
            {client && (
              <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
                <h3 className="mb-4 text-lg font-bold text-[#1E293B]">
                  Información del Cliente
                </h3>
                <div className="space-y-2 text-sm">
                  {client.full_name && (
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4 text-[#64748B]" />
                      <span className="text-[#1E293B]">{client.full_name}</span>
                    </div>
                  )}
                  {client.email && (
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-[#64748B]" />
                      <a href={`mailto:${client.email}`} className="text-[#1A4FBF] hover:underline">
                        {client.email}
                      </a>
                    </div>
                  )}
                  {client.phone && (
                    <div className="flex items-center gap-2">
                      <span className="text-[#64748B]">📞</span>
                      <a href={`tel:${client.phone}`} className="text-[#1A4FBF] hover:underline">
                        {client.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Formulario de actualización */}
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <h3 className="mb-4 text-lg font-bold text-[#1E293B]">
                Gestionar Incidencia
              </h3>
              <UpdateIncidentForm
                incidentId={incident.id}
                currentStatus={incident.status}
                currentEstimatedCost={incident.estimated_cost}
                currentApprovedBudget={incident.approved_budget}
              />
            </div>

            {/* Presupuesto actual */}
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
          </div>
        </div>
      </div>
    </div>
  );
}
