import { DownloadButton } from "@/components/download-button";
import { getTenantContextForUser } from "@/lib/rental-tenant-access";
import {
  INCIDENT_PRIORITY_LABELS,
  INCIDENT_STATUS_LABELS,
} from "@/lib/rental-incident-labels";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  ArrowLeft,
  Calendar,
  CheckCircle,
  Clock,
  DollarSign,
  AlertCircle,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export const metadata = { title: "Detalle de incidencia — Portal inquilino" };

const statusIcons: Record<string, LucideIcon> = {
  pending: Clock,
  in_progress: Clock,
  waiting_approval: AlertCircle,
  approved: CheckCircle,
  resolved: CheckCircle,
  rejected: AlertCircle,
};

export default async function TenantIncidentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/inquilino/incidencias");

  const tenantCtx = await getTenantContextForUser(supabase, user.id);
  if (!tenantCtx) redirect("/inquilino");

  const { data: incident } = await supabase
    .from("incidents")
    .select("*, properties(address)")
    .eq("id", id)
    .maybeSingle();

  if (!incident || incident.property_id !== tenantCtx.propertyId) {
    redirect("/inquilino/incidencias");
  }

  const status = INCIDENT_STATUS_LABELS[incident.status as string] ?? INCIDENT_STATUS_LABELS.pending;
  const priority = INCIDENT_PRIORITY_LABELS[incident.priority as string] ?? INCIDENT_PRIORITY_LABELS.medium;
  const StatusIcon = statusIcons[incident.status as string] ?? Clock;
  const photos = (incident.photos as string[]) || [];
  const prop = incident.properties as { address?: string } | { address?: string }[] | null;
  const address = Array.isArray(prop) ? prop[0]?.address : prop?.address;

  return (
    <div className="p-8">
      <Link
        href="/inquilino/incidencias"
        className="mb-6 inline-flex items-center gap-2 text-sm text-[#64748B] hover:text-[#1A4FBF]"
      >
        <ArrowLeft className="h-4 w-4" />
        Volver a incidencias
      </Link>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="flex items-start justify-between gap-3">
              <div>
                <h1 className="text-2xl font-bold text-[#1E293B]">{incident.title as string}</h1>
                <p className="mt-1 text-sm text-[#64748B]">{address ?? tenantCtx.propertyAddress}</p>
              </div>
              <div className="flex flex-wrap justify-end gap-2">
                <span className={`rounded-full px-3 py-1 text-xs font-semibold ${priority.color}`}>
                  {priority.label}
                </span>
                <span
                  className={`flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${status.color}`}
                >
                  <StatusIcon className="h-3 w-3" />
                  {status.label}
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-2 text-sm font-semibold text-[#64748B]">Descripción</h3>
              <p className="text-[#1E293B]">{incident.description as string}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 text-sm">
              <div className="flex items-center gap-2 text-[#64748B]">
                <Calendar className="h-4 w-4" />
                <span>Creada: {new Date(incident.created_at as string).toLocaleDateString("es-ES")}</span>
              </div>
              {incident.resolved_at ? (
                <div className="flex items-center gap-2 text-[#64748B]">
                  <CheckCircle className="h-4 w-4" />
                  <span>
                    Resuelta: {new Date(incident.resolved_at as string).toLocaleDateString("es-ES")}
                  </span>
                </div>
              ) : null}
            </div>
          </div>

          {photos.length > 0 ? (
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <h3 className="mb-4 text-lg font-bold text-[#1E293B]">Fotos ({photos.length})</h3>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {photos.map((photoPath, index) => (
                  <DownloadButton
                    key={index}
                    filePath={photoPath}
                    fileName={`incidencia_${incident.id}_foto_${index + 1}`}
                    variant="button"
                    className="w-full"
                  />
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="space-y-6">
          {incident.estimated_cost != null || incident.approved_budget != null ? (
            <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
              <h3 className="mb-4 flex items-center gap-2 text-lg font-bold text-[#1E293B]">
                <DollarSign className="h-5 w-5" />
                Presupuesto
              </h3>
              {incident.estimated_cost != null ? (
                <div className="mb-3">
                  <div className="text-xs text-[#64748B]">Coste estimado</div>
                  <div className="text-2xl font-bold text-[#1E293B]">
                    {Number(incident.estimated_cost).toFixed(2)} €
                  </div>
                </div>
              ) : null}
              {incident.approved_budget != null ? (
                <div>
                  <div className="text-xs text-[#64748B]">Presupuesto aprobado</div>
                  <div className="text-2xl font-bold text-green-600">
                    {Number(incident.approved_budget).toFixed(2)} €
                  </div>
                </div>
              ) : null}
              {incident.status === "waiting_approval" ? (
                <p className="mt-4 text-xs text-purple-800">
                  El gestor ha enviado un presupuesto. El propietario debe aprobarlo; te avisaremos
                  cuando haya novedades.
                </p>
              ) : null}
            </div>
          ) : null}

          <div className="rounded-2xl bg-blue-50 p-4 text-sm text-blue-900 ring-1 ring-blue-100">
            Si necesitas ampliar información, usa el{" "}
            <Link href="/inquilino/chat" className="font-semibold underline">
              chat con el gestor
            </Link>
            .
          </div>
        </div>
      </div>
    </div>
  );
}
