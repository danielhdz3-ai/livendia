import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertPropertyAccess, isUserAdmin } from "@/lib/rental-api-auth";
import { EXPENSE_TYPES } from "@/lib/rental-finance-labels";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    if (!(await isUserAdmin(supabase, user.id))) {
      return NextResponse.json({ error: "Solo el gestor puede registrar gastos" }, { status: 403 });
    }

    const body = (await request.json()) as {
      propertyId?: string;
      expenseType?: string;
      amount?: number;
      expenseDate?: string;
      description?: string;
      isDeductible?: boolean;
    };

    const propertyId = body.propertyId?.trim();
    if (!propertyId) return NextResponse.json({ error: "Falta propertyId" }, { status: 400 });

    const access = await assertPropertyAccess(supabase, user.id, propertyId);
    if (!access.ok) return NextResponse.json({ error: access.error }, { status: access.status });

    const expenseType = body.expenseType?.trim();
    if (!expenseType || !EXPENSE_TYPES.includes(expenseType)) {
      return NextResponse.json({ error: "Tipo de gasto no válido" }, { status: 400 });
    }

    if (typeof body.amount !== "number" || body.amount <= 0 || !body.expenseDate) {
      return NextResponse.json({ error: "Importe y fecha requeridos" }, { status: 400 });
    }

    const { data: expense, error } = await supabase
      .from("property_expenses")
      .insert({
        property_id: propertyId,
        expense_type: expenseType,
        amount: body.amount,
        expense_date: body.expenseDate,
        description: body.description?.trim().slice(0, 500) || null,
        is_deductible: body.isDeductible !== false,
      })
      .select()
      .single();

    if (error) return NextResponse.json({ error: "Error al crear gasto" }, { status: 500 });
    return NextResponse.json({ expense });
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
      return NextResponse.json({ error: "Solo el gestor puede editar gastos" }, { status: 403 });
    }

    const body = (await request.json()) as {
      expenseId?: string;
      expenseType?: string;
      amount?: number;
      expenseDate?: string;
      description?: string;
      isDeductible?: boolean;
    };

    const expenseId = body.expenseId?.trim();
    if (!expenseId) return NextResponse.json({ error: "Falta expenseId" }, { status: 400 });

    const patch: Record<string, unknown> = {};
    if (body.expenseType && EXPENSE_TYPES.includes(body.expenseType)) patch.expense_type = body.expenseType;
    if (typeof body.amount === "number" && body.amount > 0) patch.amount = body.amount;
    if (typeof body.expenseDate === "string") patch.expense_date = body.expenseDate;
    if (typeof body.description === "string") patch.description = body.description.trim().slice(0, 500) || null;
    if (typeof body.isDeductible === "boolean") patch.is_deductible = body.isDeductible;

    if (Object.keys(patch).length === 0) {
      return NextResponse.json({ error: "Nada que actualizar" }, { status: 400 });
    }

    const { data: expense, error } = await supabase
      .from("property_expenses")
      .update(patch)
      .eq("id", expenseId)
      .select()
      .single();

    if (error) return NextResponse.json({ error: "Error al actualizar" }, { status: 500 });
    return NextResponse.json({ expense });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    if (!(await isUserAdmin(supabase, user.id))) {
      return NextResponse.json({ error: "Solo el gestor puede eliminar gastos" }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const expenseId = searchParams.get("expenseId")?.trim();
    if (!expenseId) return NextResponse.json({ error: "Falta expenseId" }, { status: 400 });

    const { error } = await supabase.from("property_expenses").delete().eq("id", expenseId);
    if (error) return NextResponse.json({ error: "Error al eliminar" }, { status: 500 });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
