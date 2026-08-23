import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertPropertyAccess } from "@/lib/rental-api-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { propertyId?: string };
    const propertyId = body.propertyId?.trim();
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

    const now = new Date().toISOString();
    const { data: updated, error } = await supabase
      .from("messages")
      .update({ read_at: now })
      .eq("property_id", propertyId)
      .neq("sender_id", user.id)
      .is("read_at", null)
      .select("id");

    if (error) {
      console.error("[messages/read]", error);
      return NextResponse.json({ error: "No se pudieron marcar mensajes" }, { status: 500 });
    }

    return NextResponse.json({ marked: updated?.length ?? 0 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
