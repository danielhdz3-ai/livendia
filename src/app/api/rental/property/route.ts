import { createServerSupabaseClient } from "@/lib/supabase/server";
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

    // Create property
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

    // Upload documents to Supabase Storage
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
      if (!file) continue;

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

function propertyDocLabel(docType: string) {
  const map: Record<string, string> = {
    doc_nota_simple: "Nota simple",
    doc_ibi: "IBI",
    doc_cedula_habitabilidad: "Cédula de habitabilidad",
    doc_otros: "Otros",
  };
  return map[docType] ?? docType;
}
