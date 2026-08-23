import { createServerSupabaseClient } from "@/lib/supabase/server";
import { isUserAdmin } from "@/lib/rental-api-auth";
import { getAdminUnreadByProperty } from "@/lib/rental-chat-unread";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const clientId = searchParams.get("clientId")?.trim();

    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autenticado" }, { status: 401 });

    const admin = await isUserAdmin(supabase, user.id);
    if (!admin) return NextResponse.json({ error: "No autorizado" }, { status: 403 });

    let propertyIds: string[] | undefined;
    if (clientId) {
      const { data: properties } = await supabase
        .from("properties")
        .select("id")
        .eq("user_id", clientId);
      propertyIds = (properties ?? []).map((p) => p.id as string);
    }

    const unread = await getAdminUnreadByProperty(supabase, user.id, propertyIds);
    return NextResponse.json(unread);
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
