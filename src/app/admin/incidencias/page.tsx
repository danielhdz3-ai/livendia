import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { AlertCircle, Building2, Calendar } from "lucide-react";

export const metadata = { title: { absolute: "Gestión de incidencias — Livendia Admin" } };

const statusLabels: Record<string, { label: string; color: string }> = {
  pending: { label: "Pendiente", color: "bg-yellow-100 text-yellow-800" },
  in_progress: { label: "En Proceso", color: "bg-blue-100 text-blue-800" },
  waiting_approval: { label: "Esperando Aprobación", color: "bg-purple-100 text-purple-800" },
  approved: { label: "Aprobada", color: "bg-green-100 text-green-800" },
  resolved: { label: "Resuelta", color: "bg-gray-100 text-gray-800" },
  rejected: { label: "Rechazada", color: "bg-red-100 text-red-800" },
};

const priorityLabels: Record<string, { label: string; color: string }> = {
  low: { label: "Baja", color: "text-gray-600" },
  medium: { label: "Media", color: "text-blue-600" },
  high: { label: "Alta", color: "text-orange-600" },
  urgent: { label: "Urgente", color: "text-red-600" },
};

export default async function AdminIncidentsPage() {
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

  // Obtener todas las incidencias con información de propiedad y cliente
  const { data: incidents } = await supabase
    .from("incidents")
    .select(`
      *,
      properties (
        address,
        user_id,
        profiles:user_id (
          full_name,
          email
        )
      )
    `)
    .order("created_at", { ascending: false });

  // Contar por estado
  const stats = {
    total: incidents?.length || 0,
    pending: incidents?.filter((i) => i.status === "pending").length || 0,
    in_progress: incidents?.filter((i) => i.status === "in_progress").length || 0,
    waiting_approval: incidents?.filter((i) => i.status === "waiting_approval").length || 0,
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-[#1E293B]">Gestión de Incidencias</h1>
          <p className="mt-1 text-[#64748B]">Todas las incidencias de alquiler</p>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-white p-4 shadow ring-1 ring-slate-200">
            <div className="text-sm text-[#64748B]">Total</div>
            <div className="text-2xl font-bold text-[#1E293B]">{stats.total}</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow ring-1 ring-slate-200">
            <div className="text-sm text-[#64748B]">Pendientes</div>
            <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow ring-1 ring-slate-200">
            <div className="text-sm text-[#64748B]">En Proceso</div>
            <div className="text-2xl font-bold text-blue-600">{stats.in_progress}</div>
          </div>
          <div className="rounded-lg bg-white p-4 shadow ring-1 ring-slate-200">
            <div className="text-sm text-[#64748B]">Esperando Aprobación</div>
            <div className="text-2xl font-bold text-purple-600">{stats.waiting_approval}</div>
          </div>
        </div>

        {/* Lista de incidencias */}
        <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
          <h2 className="mb-6 text-lg font-bold text-[#1E293B]">
            Todas las Incidencias
          </h2>

          {!incidents || incidents.length === 0 ? (
            <div className="py-12 text-center">
              <AlertCircle className="mx-auto h-12 w-12 text-slate-300" />
              <p className="mt-4 text-sm text-[#64748B]">No hay incidencias registradas</p>
            </div>
          ) : (
            <div className="space-y-3">
              {incidents.map((incident) => {
                const status = statusLabels[incident.status] || statusLabels.pending;
                const priority = priorityLabels[incident.priority] || priorityLabels.medium;
                const client = incident.properties?.profiles;

                return (
                  <Link
                    key={incident.id}
                    href={`/admin/incidencias/${incident.id}`}
                    className="block rounded-lg border border-slate-200 p-4 transition hover:border-[#1A4FBF] hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <h3 className="font-semibold text-[#1E293B]">{incident.title}</h3>
                          <span className={`text-xs font-semibold ${priority.color}`}>
                            {priority.label}
                          </span>
                        </div>
                        <p className="mt-1 line-clamp-1 text-sm text-[#64748B]">
                          {incident.description}
                        </p>
                        <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[#64748B]">
                          <span className="flex items-center gap-1">
                            <Building2 className="h-3 w-3" />
                            {incident.properties?.address}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {new Date(incident.created_at).toLocaleDateString("es-ES")}
                          </span>
                          {client && (
                            <span>Cliente: {client.full_name || client.email}</span>
                          )}
                          {incident.estimated_cost && (
                            <span className="font-semibold text-green-600">
                              {incident.estimated_cost.toFixed(2)} €
                            </span>
                          )}
                        </div>
                      </div>
                      <span className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}>
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
    </div>
  );
}
