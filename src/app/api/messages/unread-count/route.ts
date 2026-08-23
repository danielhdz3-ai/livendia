import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertPropertyAccess } from "@/lib/rental-api-auth";
import { NextResponse } from "next/server";

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
    if (!user) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

    const access = await assertPropertyAccess(supabase, user.id, propertyId);
    if (!access.ok) return NextResponse.json({ error: access.error }, { status: access.status });

    const { count, error } = await supabase
      .from("messages")
      .select("id", { count: "exact", head: true })
      .eq("property_id", propertyId)
      .neq("sender_id", user.id)
      .is("read_at", null);

    if (error) {
      return NextResponse.json({ error: "Error al contar" }, { status: 500 });
    }

    return NextResponse.json({ unreadCount: count ?? 0 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
