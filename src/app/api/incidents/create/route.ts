import { createServerSupabaseClient } from "@/lib/supabase/server";
import { sendIncidentToOwnerEmail, getAuthUserContact } from "@/lib/email/send";
import { uploadIncidentPhotos } from "@/lib/incident-photos";
import { assertPropertyAccess, isUserAdmin } from "@/lib/rental-api-auth";
import { notifyAllAdmins, notifyRentalUser } from "@/lib/rental-notifications";
import { rateLimitIncident } from "@/lib/ratelimit";
import { toPlainText } from "@/lib/text";
import { NextResponse } from "next/server";

const TITLE_MAX = 200;
const DESC_MAX = 8000;
const PRIORITY_OK = new Set(["low", "medium", "high", "urgent"]);

type IncidentInput = {
  propertyId: string;
  title: string;
  description: string;
  priority: string;
  photoFiles: File[];
};

async function parseIncidentInput(request: Request): Promise<IncidentInput | { error: string; status: number }> {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const propertyId = String(formData.get("propertyId") ?? "").trim();
    const titleRaw = String(formData.get("title") ?? "");
    const descRaw = String(formData.get("description") ?? "");
    const priority = String(formData.get("priority") ?? "medium");
    const photoFiles: File[] = [];
    for (let i = 0; i < 5; i++) {
      const f = formData.get(`photo_${i}`);
      if (f instanceof File && f.size > 0) photoFiles.push(f);
    }
    const title = toPlainText(titleRaw, TITLE_MAX);
    const description = toPlainText(descRaw, DESC_MAX);
    if (!propertyId || title.length < 3 || description.length < 10) {
      return { error: "Faltan campos requeridos", status: 400 };
    }
    return { propertyId, title, description, priority, photoFiles };
  }

  const body = (await request.json()) as {
    propertyId?: string;
    title?: string;
    description?: string;
    priority?: string;
  };

  const propertyId = body.propertyId?.trim() ?? "";
  const title = toPlainText(String(body.title ?? ""), TITLE_MAX);
  const description = toPlainText(String(body.description ?? ""), DESC_MAX);
  const priority = body.priority ?? "medium";

  if (!propertyId || title.length < 3 || description.length < 10) {
    return { error: "Faltan campos requeridos", status: 400 };
  }

  return { propertyId, title, description, priority, photoFiles: [] };
}

export async function POST(request: Request) {
  try {
    const parsed = await parseIncidentInput(request);
    if ("error" in parsed) {
      return NextResponse.json({ error: parsed.error }, { status: parsed.status });
    }

    const { propertyId, title, description, priority, photoFiles } = parsed;

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

    const access = await assertPropertyAccess(supabase, user.id, propertyId);
    if (!access.ok) {
      return NextResponse.json({ error: access.error }, { status: access.status });
    }

    const admin = await isUserAdmin(supabase, user.id);

    const { data: property } = await supabase
      .from("properties")
      .select("id, user_id, address")
      .eq("id", propertyId)
      .maybeSingle();

    if (!property) {
      return NextResponse.json({ error: "Propiedad no encontrada" }, { status: 404 });
    }

    const { data: incident, error: incidentError } = await supabase
      .from("incidents")
      .insert({
        property_id: propertyId,
        title,
        description,
        priority: PRIORITY_OK.has(priority) ? priority : "medium",
        status: admin ? "pending" : "pending",
        photos: null,
      })
      .select()
      .single();

    if (incidentError || !incident) {
      console.error("Error creando incidencia:", incidentError);
      return NextResponse.json({ error: "Error al crear incidencia" }, { status: 500 });
    }

    let photoPaths: string[] = [];
    if (photoFiles.length > 0) {
      const uploaded = await uploadIncidentPhotos(
        supabase,
        user.id,
        propertyId,
        incident.id as string,
        photoFiles,
      );
      photoPaths = uploaded.paths;
      if (photoPaths.length > 0) {
        await supabase.from("incidents").update({ photos: photoPaths }).eq("id", incident.id);
      }
    }

    if (admin) {
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
            priority: priorityLabels[priority] || "Media",
            propertyAddress: property.address || "Sin dirección",
            incidentId: incident.id as string,
          });
        }

        void notifyRentalUser({
          userId: property.user_id as string,
          title: "Nueva incidencia registrada",
          message: title,
          href: `/dashboard/rental/incidencias/${incident.id as string}`,
        });
      } catch (emailError) {
        console.error("Error enviando email:", emailError);
      }
    } else {
      void notifyAllAdmins({
        title: "Incidencia reportada por propietario",
        message: `${property.address}: ${title}`,
        href: `/admin/alquileres/${property.user_id as string}`,
      });
    }

    return NextResponse.json({
      incident: { ...incident, photos: photoPaths.length ? photoPaths : incident.photos },
    });
  } catch (error) {
    console.error("Error en endpoint de incidencias:", error);
    return NextResponse.json({ error: "Error interno del servidor" }, { status: 500 });
  }
}
