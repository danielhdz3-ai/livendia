import { createServerSupabaseClient } from "@/lib/supabase/server";
import { inferStoragePathFromPublicFileUrl } from "@/lib/rental-doc-storage-path";
import { assertAllowedUpload } from "@/lib/uploads";
import { NextRequest, NextResponse } from "next/server";

const ALLOWED_TYPES = new Set(["dni", "nomina", "contrato_trabajo", "contrato_arrendamiento", "otro"]);

function typeLabel(dt: string) {
  switch (dt) {
    case "dni":
      return "DNI / NIE";
    case "nomina":
      return "Nómina";
    case "contrato_trabajo":
      return "Contrato de trabajo";
    case "contrato_arrendamiento":
      return "Contrato de arrendamiento";
    case "otro":
      return "Otro";
    default:
      return dt;
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const formData = await request.formData();
    const tenantId = (formData.get("tenantId") as string | null)?.trim();
    const documentType = (formData.get("documentType") as string | null)?.trim();
    const file = formData.get("file") as File | null;

    if (!tenantId || !documentType || !file) {
      return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
    }

    if (!ALLOWED_TYPES.has(documentType)) {
      return NextResponse.json({ error: "Tipo de documento no válido" }, { status: 400 });
    }

    const check = assertAllowedUpload(file);
    if (!check.ok) {
      return NextResponse.json({ error: check.error }, { status: 400 });
    }

    const { data: tenant, error: tenantErr } = await supabase
      .from("tenants")
      .select("id, property_id")
      .eq("id", tenantId)
      .maybeSingle();

    if (tenantErr || !tenant) {
      return NextResponse.json({ error: "Inquilino no encontrado" }, { status: 404 });
    }

    const { data: prop } = await supabase
      .from("properties")
      .select("user_id")
      .eq("id", tenant.property_id as string)
      .maybeSingle();

    if (!prop || prop.user_id !== user.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    const propertyId = tenant.property_id as string;

    const fileExt = file.name.split(".").pop() || "bin";
    const objectPath = `${user.id}/${propertyId}/tenant_${documentType}_${Date.now()}.${fileExt}`;

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const { data: uploadData, error: uploadError } = await supabase.storage
      .from("documents")
      .upload(objectPath, buffer, {
        contentType: file.type || "application/octet-stream",
        upsert: false,
      });

    if (uploadError || !uploadData) {
      console.error("tenant-document upload:", uploadError);
      return NextResponse.json(
        { error: uploadError?.message ?? "Error al subir" },
        { status: 500 },
      );
    }

    const {
      data: { publicUrl },
    } = supabase.storage.from("documents").getPublicUrl(objectPath);

    const { data: row, error: insertError } = await supabase
      .from("tenant_documents")
      .insert({
        tenant_id: tenantId,
        document_type: documentType,
        file_url: publicUrl,
        file_name: file.name,
        storage_path: uploadData.path,
      })
      .select("id, document_type, file_name, file_url, storage_path, uploaded_at")
      .single();

    if (insertError || !row) {
      await supabase.storage.from("documents").remove([uploadData.path]);
      console.error("tenant_documents insert:", insertError);
      return NextResponse.json({ error: "Error al guardar el registro" }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      document: row,
      documentTypeLabel: typeLabel(documentType),
    });
  } catch (e) {
    console.error("POST /api/rental/tenant-document:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id")?.trim();
    if (!id) {
      return NextResponse.json({ error: "id requerido" }, { status: 400 });
    }

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      return NextResponse.json({ error: "No autorizado" }, { status: 401 });
    }

    const { data: doc, error: fetchErr } = await supabase
      .from("tenant_documents")
      .select("id, tenant_id, storage_path, file_url")
      .eq("id", id)
      .maybeSingle();

    if (fetchErr || !doc) {
      return NextResponse.json({ error: "Documento no encontrado" }, { status: 404 });
    }

    const { data: ten } = await supabase
      .from("tenants")
      .select("property_id")
      .eq("id", doc.tenant_id as string)
      .maybeSingle();

    if (!ten) {
      return NextResponse.json({ error: "Documento no encontrado" }, { status: 404 });
    }

    const { data: propRow } = await supabase
      .from("properties")
      .select("user_id")
      .eq("id", ten.property_id as string)
      .maybeSingle();

    if (!propRow || propRow.user_id !== user.id) {
      return NextResponse.json({ error: "No autorizado" }, { status: 403 });
    }

    const path =
      (doc.storage_path as string | null)?.trim() ||
      inferStoragePathFromPublicFileUrl((doc.file_url as string) ?? "");

    if (path) {
      await supabase.storage.from("documents").remove([path]);
    }

    const { error: delErr } = await supabase.from("tenant_documents").delete().eq("id", id);
    if (delErr) {
      console.error("tenant_documents delete:", delErr);
      return NextResponse.json({ error: "No se pudo eliminar" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("DELETE /api/rental/tenant-document:", e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
