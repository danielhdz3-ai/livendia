import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sendIncidentStatusUpdatedEmail, getAuthUserContact } from "@/lib/email/send";
import { assertPropertyAccess, isUserAdmin } from "@/lib/rental-api-auth";
import { NextResponse } from "next/server";

/** Propietario aprueba o rechaza presupuesto (waiting_approval). Admin puede forzar estados. */
export async function POST(request: Request) {
  try {
    const body = (await request.json()) as {
      incidentId?: string;
      action?: "approve" | "reject";
    };

    const incidentId = body.incidentId?.trim();
    const action = body.action;
    if (!incidentId || (action !== "approve" && action !== "reject")) {
      return NextResponse.json({ error: "Parámetros inválidos" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

    const { data: incident } = await supabase
      .from("incidents")
      .select("*, properties(user_id, address)")
      .eq("id", incidentId)
      .maybeSingle();

    if (!incident) return NextResponse.json({ error: "Incidencia no encontrada" }, { status: 404 });

    const property = incident.properties as { user_id: string; address?: string } | null;
    const propertyId = incident.property_id as string;
    const admin = await isUserAdmin(supabase, user.id);
    const isOwner = property?.user_id === user.id;

    if (!admin && !isOwner) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    if (!admin && incident.status !== "waiting_approval") {
      return NextResponse.json(
        { error: "Solo puedes responder cuando el estado es «Esperando aprobación»" },
        { status: 400 },
      );
    }

    const nextStatus = action === "approve" ? "approved" : "rejected";
    const patch: Record<string, unknown> = { status: nextStatus };
    if (action === "approve" && incident.estimated_cost != null && incident.approved_budget == null) {
      patch.approved_budget = incident.estimated_cost;
    }

    const { data: updated, error } = await supabase
      .from("incidents")
      .update(patch)
      .eq("id", incidentId)
      .select("*, properties(user_id, address)")
      .single();

    if (error) return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });

    if (admin && property?.user_id) {
      try {
        const contact = await getAuthUserContact(supabase, property.user_id);
        if (contact?.email) {
          await sendIncidentStatusUpdatedEmail({
            to: contact.email,
            customerName: contact.fullName || "Cliente",
            incidentTitle: updated.title as string,
            newStatus: action === "approve" ? "Aprobada" : "Rechazada",
            estimatedCost: updated.estimated_cost ?? undefined,
            approvedBudget: updated.approved_budget ?? undefined,
            incidentId: updated.id as string,
          });
        }
      } catch (emailError) {
        console.error("approve email:", emailError);
      }
    }

    return NextResponse.json({ incident: updated });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
