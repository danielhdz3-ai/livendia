import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertPropertyAccess, isUserAdmin } from "@/lib/rental-api-auth";
import { generateRentScheduleForTenant } from "@/lib/rental-rent-schedule";
import { NextResponse } from "next/server";

const STATUS_OK = new Set(["pending", "paid", "late"]);

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const body = (await request.json()) as {
      propertyId?: string;
      tenantId?: string;
      paymentDate?: string;
      amount?: number;
      status?: string;
      paymentMethod?: string;
      notes?: string;
      generateCurrentMonth?: boolean;
      generateSchedule?: boolean;
    };

    const propertyId = body.propertyId?.trim();
    const tenantId = body.tenantId?.trim();
    if (!propertyId || !tenantId) {
      return NextResponse.json({ error: "Faltan propertyId o tenantId" }, { status: 400 });
    }

    const access = await assertPropertyAccess(supabase, user.id, propertyId);
    if (!access.ok) return NextResponse.json({ error: access.error }, { status: access.status });

    const admin = await isUserAdmin(supabase, user.id);

    if (!admin && (body.generateCurrentMonth || body.generateSchedule)) {
      return NextResponse.json({ error: "Solo el gestor puede generar cuotas" }, { status: 403 });
    }

    const { data: tenant } = await supabase
      .from("tenants")
      .select("id, property_id, monthly_rent")
      .eq("id", tenantId)
      .eq("property_id", propertyId)
      .maybeSingle();

    if (!tenant) return NextResponse.json({ error: "Inquilino no válido" }, { status: 404 });

    if (body.generateSchedule) {
      const result = await generateRentScheduleForTenant(supabase, tenantId, propertyId);
      return NextResponse.json({ ok: true, ...result });
    }

    if (body.generateCurrentMonth) {
      const now = new Date();
      const paymentDate = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-01`;
      const { data: existing } = await supabase
        .from("rent_payments")
        .select("id")
        .eq("tenant_id", tenantId)
        .eq("payment_date", paymentDate)
        .maybeSingle();

      if (existing) {
        return NextResponse.json({ error: "Ya existe un registro para este mes", payment: existing }, { status: 409 });
      }

      const { data: payment, error } = await supabase
        .from("rent_payments")
        .insert({
          property_id: propertyId,
          tenant_id: tenantId,
          payment_date: paymentDate,
          amount: tenant.monthly_rent,
          status: "pending",
          payment_method: null,
          notes: "Cuota generada automáticamente",
        })
        .select()
        .single();

      if (error) return NextResponse.json({ error: "Error al generar cuota" }, { status: 500 });
      return NextResponse.json({ payment });
    }

    if (!admin) {
      return NextResponse.json({ error: "Solo el gestor puede registrar pagos manualmente" }, { status: 403 });
    }

    const paymentDate = body.paymentDate?.trim();
    const amount = body.amount;
    if (!paymentDate || typeof amount !== "number" || amount <= 0) {
      return NextResponse.json({ error: "Fecha y importe válidos requeridos" }, { status: 400 });
    }

    const status = body.status && STATUS_OK.has(body.status) ? body.status : "pending";

    const { data: payment, error } = await supabase
      .from("rent_payments")
      .insert({
        property_id: propertyId,
        tenant_id: tenantId,
        payment_date: paymentDate,
        amount,
        status,
        payment_method: body.paymentMethod?.trim().slice(0, 40) || null,
        notes: body.notes?.trim().slice(0, 500) || null,
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error: "Error al crear pago" }, { status: 500 });
    return NextResponse.json({ payment });
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

    if (!(await isUserAdmin(supabase, user.id))) {
      return NextResponse.json({ error: "Solo el gestor puede actualizar pagos" }, { status: 403 });
    }

    const body = (await request.json()) as {
      paymentId?: string;
      status?: string;
      paymentMethod?: string;
      notes?: string;
      amount?: number;
      paymentDate?: string;
    };

    const paymentId = body.paymentId?.trim();
    if (!paymentId) return NextResponse.json({ error: "Falta paymentId" }, { status: 400 });

    const patch: Record<string, unknown> = {};
    if (body.status && STATUS_OK.has(body.status)) patch.status = body.status;
    if (typeof body.paymentMethod === "string") patch.payment_method = body.paymentMethod.trim().slice(0, 40) || null;
    if (typeof body.notes === "string") patch.notes = body.notes.trim().slice(0, 500) || null;
    if (typeof body.amount === "number" && body.amount > 0) patch.amount = body.amount;
    if (typeof body.paymentDate === "string") patch.payment_date = body.paymentDate;

    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: "Nada que actualizar" }, { status: 400 });
    }

    const { data: payment, error } = await supabase
      .from("rent_payments")
      .update(patch)
      .eq("id", paymentId)
      .select()
      .single();

    if (error) return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
    return NextResponse.json({ payment });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
