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
    const propertyId = formData.get("propertyId") as string;
    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const dni = formData.get("dni") as string;
    const startDate = formData.get("startDate") as string;
    const endDate = formData.get("endDate") as string;
    const monthlyRent = formData.get("monthlyRent") as string;
    void formData.get("otherExpenses");
    const legalDeposit = formData.get("legalDeposit") as string;
    const additionalDeposit = formData.get("additionalDeposit") as string;

    if (!propertyId || !fullName || !email || !phone || !dni || !startDate || !monthlyRent) {
      return NextResponse.json(
        { error: "Faltan campos requeridos" },
        { status: 400 }
      );
    }

    const { data: property } = await supabase
      .from("properties")
      .select("id")
      .eq("id", propertyId)
      .eq("user_id", user.id)
      .single();

    if (!property) {
      return NextResponse.json(
        { error: "Propiedad no encontrada" },
        { status: 404 }
      );
    }

    const totalDeposit = (parseFloat(legalDeposit) || 0) + (parseFloat(additionalDeposit) || 0);

    const { data: tenant, error: tenantError } = await supabase
      .from("tenants")
      .insert({
        property_id: propertyId,
        full_name: fullName,
        email: email,
        phone: phone,
        dni: dni,
        start_date: startDate,
        end_date: endDate || null,
        monthly_rent: parseFloat(monthlyRent),
        deposit_amount: totalDeposit,
        is_active: true,
      })
      .select()
      .single();

    if (tenantError || !tenant) {
      console.error("Error creating tenant:", tenantError);
      return NextResponse.json(
        { error: "Error al crear inquilino" },
        { status: 500 }
      );
    }

    const dniFile = formData.get("dniDocument") as File | null;
    let tenantDocWarning: string | null = null;

    if (dniFile && dniFile instanceof File && dniFile.size > 0) {
      const check = assertAllowedUpload(dniFile);
      if (!check.ok) {
        tenantDocWarning = `DNI: ${check.error}`;
      } else {
      const fileExt = dniFile.name.split(".").pop();
      const fileName = `${user.id}/${propertyId}/tenant_dni_${Date.now()}.${fileExt}`;

      const arrayBuffer = await dniFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);

      const { data: uploadData, error: uploadError } = await supabase.storage
        .from("documents")
        .upload(fileName, buffer, {
          contentType: dniFile.type,
          upsert: false,
        });

      if (uploadError) {
        console.error("Error uploading DNI:", uploadError);
        tenantDocWarning = `DNI: ${uploadError.message}`;
      } else if (uploadData) {
        const {
          data: { publicUrl },
        } = supabase.storage.from("documents").getPublicUrl(fileName);

        const { error: insertDocError } = await supabase.from("tenant_documents").insert({
          tenant_id: tenant.id,
          document_type: "dni",
          file_url: publicUrl,
          file_name: dniFile.name,
          storage_path: uploadData.path,
        });

        if (insertDocError) {
          console.error("tenant_documents insert:", insertDocError);
          tenantDocWarning = `DNI (BD): ${insertDocError.message}`;
          await supabase.storage.from("documents").remove([uploadData.path]);
        }
      }
      }
    }

    return NextResponse.json({
      success: true,
      tenant,
      tenantDocWarning,
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
      tenantId?: string;
      fullName?: string;
      email?: string;
      phone?: string;
      dni?: string;
      startDate?: string;
      endDate?: string | null;
      monthlyRent?: number;
      depositAmount?: number;
      notes?: string;
      isActive?: boolean;
    };

    const tenantId = body.tenantId?.trim();
    if (!tenantId) return NextResponse.json({ error: "Falta tenantId" }, { status: 400 });

    const { data: tenantRow } = await supabase
      .from("tenants")
      .select("id, property_id")
      .eq("id", tenantId)
      .maybeSingle();

    if (!tenantRow) return NextResponse.json({ error: "Inquilino no encontrado" }, { status: 404 });

    const access = await assertPropertyAccess(supabase, user.id, tenantRow.property_id as string);
    if (!access.ok) return NextResponse.json({ error: access.error }, { status: access.status });

    const patch: Record<string, unknown> = {};
    if (typeof body.fullName === "string" && body.fullName.trim().length >= 2) {
      patch.full_name = body.fullName.trim().slice(0, 120);
    }
    if (typeof body.email === "string") patch.email = body.email.trim().slice(0, 254) || null;
    if (typeof body.phone === "string") patch.phone = body.phone.trim().slice(0, 40) || null;
    if (typeof body.dni === "string") patch.dni = body.dni.trim().slice(0, 20) || null;
    if (typeof body.startDate === "string") patch.start_date = body.startDate;
    if (body.endDate === null) patch.end_date = null;
    else if (typeof body.endDate === "string") patch.end_date = body.endDate;
    if (typeof body.monthlyRent === "number" && body.monthlyRent > 0) patch.monthly_rent = body.monthlyRent;
    if (typeof body.depositAmount === "number" && body.depositAmount >= 0) {
      patch.deposit_amount = body.depositAmount;
    }
    if (typeof body.notes === "string") patch.notes = body.notes.trim().slice(0, 2000) || null;
    if (typeof body.isActive === "boolean") patch.is_active = body.isActive;

    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: "Nada que actualizar" }, { status: 400 });
    }

    const { data: tenant, error } = await supabase
      .from("tenants")
      .update(patch)
      .eq("id", tenantId)
      .select()
      .single();

    if (error) {
      console.error("tenant PATCH:", error);
      return NextResponse.json({ error: "Error al actualizar inquilino" }, { status: 500 });
    }

    return NextResponse.json({ tenant });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
