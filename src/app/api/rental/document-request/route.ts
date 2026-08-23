import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertPropertyAccess, isUserAdmin } from "@/lib/rental-api-auth";
import {
  PROPERTY_DOCUMENT_LABEL_ES,
  TENANT_DOCUMENT_LABEL_ES,
} from "@/lib/rental-document-labels";
import { syncFulfilledDocumentRequests } from "@/lib/rental-document-requests-sync";
import { notifyRentalUser } from "@/lib/rental-notifications";
import { NextResponse } from "next/server";

const PROPERTY_TYPES = Object.keys(PROPERTY_DOCUMENT_LABEL_ES);
const TENANT_TYPES = Object.keys(TENANT_DOCUMENT_LABEL_ES);

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get("propertyId")?.trim();
    if (!propertyId) {
      return NextResponse.json({ error: "Falta propertyId" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const access = await assertPropertyAccess(supabase, user.id, propertyId);
    if (!access.ok) return NextResponse.json({ error: access.error }, { status: access.status });

    await syncFulfilledDocumentRequests(supabase, propertyId);

    const { data: requests, error } = await supabase
      .from("rental_document_requests")
      .select("*")
      .eq("property_id", propertyId)
      .order("created_at", { ascending: false });

    if (error) return NextResponse.json({ error: "Error al cargar solicitudes" }, { status: 500 });

    return NextResponse.json({ requests: requests ?? [] });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    if (!(await isUserAdmin(supabase, user.id))) {
      return NextResponse.json({ error: "Solo el gestor puede solicitar documentos" }, { status: 403 });
    }

    const body = (await request.json()) as {
      propertyId?: string;
      tenantId?: string | null;
      target?: string;
      documentType?: string;
      message?: string;
    };

    const propertyId = body.propertyId?.trim();
    const target = body.target === "tenant" ? "tenant" : "property";
    const documentType = body.documentType?.trim();

    if (!propertyId || !documentType) {
      return NextResponse.json({ error: "Faltan campos requeridos" }, { status: 400 });
    }

    const validTypes = target === "tenant" ? TENANT_TYPES : PROPERTY_TYPES;
    if (!validTypes.includes(documentType)) {
      return NextResponse.json({ error: "Tipo de documento no válido" }, { status: 400 });
    }

    const { data: property } = await supabase
      .from("properties")
      .select("id, user_id, address")
      .eq("id", propertyId)
      .maybeSingle();

    if (!property) return NextResponse.json({ error: "Inmueble no encontrado" }, { status: 404 });

    let tenantId: string | null = body.tenantId?.trim() ?? null;
    if (target === "tenant" && !tenantId) {
      const { data: tenant } = await supabase
        .from("tenants")
        .select("id")
        .eq("property_id", propertyId)
        .eq("is_active", true)
        .maybeSingle();
      tenantId = (tenant?.id as string) ?? null;
    }

    const label =
      target === "tenant"
        ? (TENANT_DOCUMENT_LABEL_ES[documentType] ?? documentType)
        : (PROPERTY_DOCUMENT_LABEL_ES[documentType] ?? documentType);

    const { data: row, error } = await supabase
      .from("rental_document_requests")
      .insert({
        property_id: propertyId,
        tenant_id: tenantId,
        target,
        document_type: documentType,
        message: body.message?.trim().slice(0, 500) || null,
        status: "pending",
        requested_by: user.id,
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error: "Error al crear solicitud" }, { status: 500 });

    void notifyRentalUser({
      userId: property.user_id as string,
      title: "Documentación solicitada",
      message: `Tu gestor necesita: ${label}${body.message ? ` — ${body.message.trim()}` : ""}`,
      href: "/dashboard/rental/documentos",
    });

    return NextResponse.json({ request: row });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const body = (await request.json()) as { requestId?: string; status?: string };
    const requestId = body.requestId?.trim();
    const status = body.status;

    if (!requestId || !status || !["fulfilled", "cancelled", "pending"].includes(status)) {
      return NextResponse.json({ error: "Parámetros inválidos" }, { status: 400 });
    }

    const { data: reqRow } = await supabase
      .from("rental_document_requests")
      .select("id, property_id, properties(user_id)")
      .eq("id", requestId)
      .maybeSingle();

    if (!reqRow) return NextResponse.json({ error: "Solicitud no encontrada" }, { status: 404 });

    const admin = await isUserAdmin(supabase, user.id);
    const prof = reqRow.properties as { user_id?: string } | { user_id?: string }[] | null;
    const ownerId = Array.isArray(prof) ? prof[0]?.user_id : prof?.user_id;

    if (!admin && ownerId !== user.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    const patch: Record<string, unknown> = { status };
    if (status === "fulfilled") patch.fulfilled_at = new Date().toISOString();
    if (status === "pending") patch.fulfilled_at = null;

    const { data: updated, error } = await supabase
      .from("rental_document_requests")
      .update(patch)
      .eq("id", requestId)
      .select()
      .single();

    if (error) return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
    return NextResponse.json({ request: updated });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
