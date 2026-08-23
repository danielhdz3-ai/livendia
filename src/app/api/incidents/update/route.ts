import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sendIncidentStatusUpdatedEmail, getAuthUserContact } from "@/lib/email/send";
import { notifyRentalUser } from "@/lib/rental-notifications";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { incidentId, status, estimated_cost, approved_budget } = body;

    if (!incidentId) {
      return NextResponse.json(
        { error: "ID de incidencia requerido" },
        { status: 400 }
      );
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    // Verificar que es admin
    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.role !== "admin") {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    type IncidentPatch = {
      status?: string;
      estimated_cost?: number | null;
      approved_budget?: number | null;
      resolved_at?: string | null;
    };

    const updateData: IncidentPatch = {};
    if (status) updateData.status = status;
    if (estimated_cost !== null && estimated_cost !== undefined) {
      updateData.estimated_cost = estimated_cost;
    }
    if (approved_budget !== null && approved_budget !== undefined) {
      updateData.approved_budget = approved_budget;
    }

    // Si se marca como resuelta, añadir timestamp
    if (status === "resolved" && !updateData.resolved_at) {
      updateData.resolved_at = new Date().toISOString();
    }

    // Actualizar incidencia
    const { data: incident, error: updateError } = await supabase
      .from("incidents")
      .update(updateData)
      .eq("id", incidentId)
      .select("*, properties(user_id, address)")
      .single();

    if (updateError) {
      console.error("Error actualizando incidencia:", updateError);
      return NextResponse.json(
        { error: "Error al actualizar incidencia" },
        { status: 500 }
      );
    }

    // Enviar email al cliente si cambió el estado
    if (status && incident.properties?.user_id) {
      try {
        const contact = await getAuthUserContact(supabase, incident.properties.user_id);
        
        if (contact?.email) {
          const statusLabels: Record<string, string> = {
            pending: "Pendiente",
            in_progress: "En Proceso",
            waiting_approval: "Esperando Aprobación",
            approved: "Aprobada",
            resolved: "Resuelta",
            rejected: "Rechazada",
          };

          await sendIncidentStatusUpdatedEmail({
            to: contact.email,
            customerName: contact.fullName || "Cliente",
            incidentTitle: incident.title,
            newStatus: statusLabels[status] || status,
            estimatedCost: incident.estimated_cost,
            approvedBudget: incident.approved_budget,
            incidentId: incident.id,
          });
        }

        const statusLabelsInApp: Record<string, string> = {
          waiting_approval: "Presupuesto pendiente de tu aprobación",
          in_progress: "Incidencia en proceso",
          resolved: "Incidencia resuelta",
          approved: "Presupuesto aprobado",
          rejected: "Presupuesto rechazado",
        };
        const inAppTitle = statusLabelsInApp[status] ?? "Actualización de incidencia";
        void notifyRentalUser({
          userId: incident.properties.user_id as string,
          title: inAppTitle,
          message: incident.title as string,
          href: `/dashboard/rental/incidencias/${incident.id as string}`,
        });
      } catch (emailError) {
        console.error("Error enviando email:", emailError);
        // No bloquear la actualización si falla el email
      }
    }

    return NextResponse.json({ incident });
  } catch (error) {
    console.error("Error en endpoint de actualización:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
