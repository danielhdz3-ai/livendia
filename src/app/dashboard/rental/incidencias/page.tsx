import { createServerSupabaseClient } from "@/lib/supabase/server";
import { AlertCircle, MessageCircle } from "lucide-react";
import Link from "next/link";

export const metadata = { title: "Portal de incidencias" };

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

export default async function IncidentsPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <div>No autenticado</div>;
  }

  // Obtener propiedad del usuario
  const { data: property } = await supabase
    .from("properties")
    .select("id, address")
    .eq("user_id", user.id)
    .maybeSingle();

  if (!property) {
    return (
      <div className="p-8">
        <div className="rounded-lg bg-amber-50 p-4 text-amber-800">
          No se encontró una propiedad registrada. Contacta con tu gestor.
        </div>
      </div>
    );
  }

  // Obtener incidencias de la propiedad
  const { data: incidents } = await supabase
    .from("incidents")
    .select("*")
    .eq("property_id", property.id)
    .order("created_at", { ascending: false });

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#1E293B]">Portal de Incidencias</h1>
          <p className="mt-1 text-[#64748B]">{property.address}</p>
        </div>
        <Link
          href="/dashboard/rental/chat"
          className="flex items-center gap-2 rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#06B6D4]"
        >
          <MessageCircle className="h-4 w-4" />
          Chat con Gestor
        </Link>
      </div>

      <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
        <h2 className="mb-4 text-lg font-bold text-[#1E293B]">
          Incidencias ({incidents?.length || 0})
        </h2>

        <div className="mb-4 rounded-lg bg-blue-50 p-4 text-sm text-blue-800">
          💡 Tu gestor de Livendia reportará aquí las incidencias de tu propiedad. 
          Recibirás un email cuando se cree una nueva. Las fotos se enviarán por email o WhatsApp.
        </div>

        {!incidents || incidents.length === 0 ? (
          <div className="py-12 text-center">
            <AlertCircle className="mx-auto h-12 w-12 text-slate-300" />
            <p className="mt-4 text-sm text-[#64748B]">
              No hay incidencias registradas
            </p>
            <p className="mt-1 text-xs text-[#64748B]">
              Cuando tu gestor reporte una incidencia, aparecerá aquí
            </p>
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
                        <span className={`text-xs font-semibold ${priority.color}`}>
                          {priority.label}
                        </span>
                      </div>
                      <p className="mt-1 line-clamp-2 text-sm text-[#64748B]">
                        {incident.description}
                      </p>
                      <div className="mt-2 flex items-center gap-3 text-xs text-[#64748B]">
                        <span>
                          {new Date(incident.created_at).toLocaleDateString("es-ES")}
                        </span>
                        {incident.estimated_cost && (
                          <span>Estimado: {incident.estimated_cost.toFixed(2)} €</span>
                        )}
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

