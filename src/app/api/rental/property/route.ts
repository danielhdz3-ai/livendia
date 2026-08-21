import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertAllowedUpload } from "@/lib/uploads";
import { assertPropertyAccess } from "@/lib/rental-api-auth";
import { NextRequest, NextResponse } from "next/server";

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
    const address = formData.get("address") as string;
    const zone = formData.get("zone") as string;
    const postalCode = formData.get("postalCode") as string;
    const cadastralRef = formData.get("cadastralRef") as string;

    if (!address || !zone || !postalCode) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const { data: property, error: propertyError } = await supabase
      .from("properties")
      .insert({
        user_id: user.id,
        address,
        zone: zone,
        postal_code: postalCode,
        cadastral_reference: cadastralRef || null,
        property_type: "piso",
        rooms: 0,
        bathrooms: 0,
      })
      .select()
      .single();

    if (propertyError || !property) {
      console.error("Error creating property:", propertyError);
      return NextResponse.json(
        { error: "Error al crear inmueble" },
        { status: 500 }
      );
    }

    const documentTypes = [
      "doc_nota_simple",
      "doc_ibi",
      "doc_cedula_habitabilidad",
      "doc_otros",
    ];

    const uploadedDocs: Array<{ type: string; url: string }> = [];
    const uploadErrors: string[] = [];

    for (const docType of documentTypes) {
      const file = formData.get(docType) as File | null;
      if (!file || !(file instanceof File) || file.size <= 0) continue;

      const check = assertAllowedUpload(file);
      if (!check.ok) {
        uploadErrors.push(`${propertyDocLabel(docType)}: ${check.error}`);
        continue;
      }

      const fileExt = file.name.split(".").pop();
      const fileName = `${user.id}/${property.id}/${docType}_${Date.now()}.${fileExt}`;

      const arrayBuffer = await file.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("documents")
        .upload(fileName, buffer, {
          contentType: file.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Error uploading file:", uploadError);
        uploadErrors.push(`${propertyDocLabel(docType)}: ${uploadError.message}`);
        continue;
      }

      if (!uploadData) {
        uploadErrors.push(`${propertyDocLabel(docType)}: almacenamiento sin respuesta`);
        continue;
      }

      const {
        data: { publicUrl },
      } = supabase.storage.from("documents").getPublicUrl(fileName);

      const documentTypeName = docType.replace("doc_", "");
      const { error: insertError } = await supabase.from("property_documents").insert({
        property_id: property.id,
        document_type: documentTypeName,
        file_url: publicUrl,
        file_name: file.name,
        storage_path: uploadData.path,
      });

      if (insertError) {
        console.error("Error saving property_documents:", insertError);
        uploadErrors.push(`${propertyDocLabel(docType)} (BD): ${insertError.message}`);
        await supabase.storage.from("documents").remove([uploadData.path]);
        continue;
      }

      uploadedDocs.push({ type: documentTypeName, url: publicUrl });
    }

    return NextResponse.json({
      success: true,
      property,
      documents: uploadedDocs,
      uploadErrors,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}

export async function PATCH(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const body = (await request.json()) as {
      propertyId?: string;
      address?: string;
      zone?: string;
      postalCode?: string;
      cadastralReference?: string;
      propertyType?: string;
      rooms?: number;
      bathrooms?: number;
      surfaceM2?: number;
      ibiAnnual?: number;
      communityFeeMonthly?: number;
      notes?: string;
    };

    const propertyId = body.propertyId?.trim();
    if (!propertyId) return NextResponse.json({ error: "Falta propertyId" }, { status: 400 });

    const access = await assertPropertyAccess(supabase, user.id, propertyId);
    if (!access.ok) return NextResponse.json({ error: access.error }, { status: access.status });

    const patch: Record<string, unknown> = {};
    if (typeof body.address === "string" && body.address.trim().length >= 3) {
      patch.address = body.address.trim().slice(0, 300);
    }
    if (typeof body.zone === "string") patch.zone = body.zone.trim().slice(0, 120) || null;
    if (typeof body.postalCode === "string") patch.postal_code = body.postalCode.trim().slice(0, 12) || null;
    if (typeof body.cadastralReference === "string") {
      patch.cadastral_reference = body.cadastralReference.trim().slice(0, 80) || null;
    }
    if (typeof body.propertyType === "string") patch.property_type = body.propertyType.trim().slice(0, 40);
    if (typeof body.rooms === "number" && body.rooms >= 0) patch.rooms = Math.floor(body.rooms);
    if (typeof body.bathrooms === "number" && body.bathrooms >= 0) patch.bathrooms = Math.floor(body.bathrooms);
    if (typeof body.surfaceM2 === "number" && body.surfaceM2 >= 0) patch.surface_m2 = body.surfaceM2;
    if (typeof body.ibiAnnual === "number" && body.ibiAnnual >= 0) patch.ibi_annual = body.ibiAnnual;
    if (typeof body.communityFeeMonthly === "number" && body.communityFeeMonthly >= 0) {
      patch.community_fee_monthly = body.communityFeeMonthly;
    }
    if (typeof body.notes === "string") patch.notes = body.notes.trim().slice(0, 2000) || null;

    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: "Nada que actualizar" }, { status: 400 });
    }

    const { data: property, error } = await supabase
      .from("properties")
      .update(patch)
      .eq("id", propertyId)
      .select()
      .single();

    if (error) {
      console.error("property PATCH:", error);
      return NextResponse.json({ error: "Error al actualizar inmueble" }, { status: 500 });
    }

    return NextResponse.json({ property });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

function propertyDocLabel(docType: string) {
  const map: Record<string, string> = {
    doc_nota_simple: "Nota simple",
    doc_ibi: "IBI",
    doc_cedula_habitabilidad: "Cédula de habitabilidad",
    doc_otros: "Otros",
  };
  return map[docType] ?? docType;
}
