import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sendIncidentToOwnerEmail, getAuthUserContact } from "@/lib/email/send";
import { rateLimitIncident } from "@/lib/ratelimit";
import { toPlainText } from "@/lib/text";
import { NextResponse } from "next/server";

const TITLE_MAX = 200;
const DESC_MAX = 8000;
const PRIORITY_OK = new Set(["low", "medium", "high", "urgent"]);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { propertyId, title: titleRaw, description: descRaw, priority } = body;

    if (!propertyId || !titleRaw || !descRaw) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const title = toPlainText(String(titleRaw), TITLE_MAX);
    const description = toPlainText(String(descRaw), DESC_MAX);
    if (title.length < 3) {
      return NextResponse.json({ error: "Título demasiado corto" }, { status: 400 });
    }
    if (description.length < 10) {
      return NextResponse.json({ error: "Descripción demasiado corta" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autenticado" }, { status: 401 });
    }

    const rl = await rateLimitIncident(user.id);
    if (!rl.ok) {
      return NextResponse.json({ error: "Demasiadas incidencias por hora." }, { status: 429 });
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .maybeSingle();

    if (profile?.role !== "admin") {
      return NextResponse.json(
        { error: "Solo administradores pueden crear incidencias" },
        { status: 403 }
      );
    }

    const { data: property } = await supabase
      .from("properties")
      .select("id, user_id, address")
      .eq("id", propertyId)
      .maybeSingle();

    if (!property) {
      return NextResponse.json(
        { error: "Propiedad no encontrada" },
        { status: 404 }
      );
    }

    const { data: incident, error: incidentError } = await supabase
      .from("incidents")
      .insert({
        property_id: propertyId,
        title,
        description,
        priority:
          typeof priority === "string" && PRIORITY_OK.has(priority) ? priority : "medium",
        status: "pending",
        photos: null,
      })
      .select()
      .single();

    if (incidentError) {
      console.error("Error creando incidencia:", incidentError);
      return NextResponse.json(
        { error: "Error al crear incidencia" },
        { status: 500 }
      );
    }

    try {
      const ownerContact = await getAuthUserContact(supabase, property.user_id);

      if (ownerContact?.email) {
        const priorityLabels: Record<string, string> = {
          low: "Baja",
          medium: "Media",
          high: "Alta",
          urgent: "Urgente",
        };

        await sendIncidentToOwnerEmail({
          to: ownerContact.email,
          ownerName: ownerContact.fullName || "Propietario",
          incidentTitle: title,
          incidentDescription: description,
          priority: priorityLabels[priority || "medium"] || "Media",
          propertyAddress: property.address || "Sin dirección",
          incidentId: incident.id,
        });
      }
    } catch (emailError) {
      console.error("Error enviando email:", emailError);
    }

    return NextResponse.json({ incident });
  } catch (error) {
    console.error("Error en endpoint de incidencias:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
