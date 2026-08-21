import { createServerSupabaseClient } from "@/lib/supabase/server";
import { assertPropertyAccess } from "@/lib/rental-api-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const propertyId = searchParams.get("propertyId")?.trim();
    const since = searchParams.get("since")?.trim();

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

    let query = supabase
      .from("messages")
      .select(`
        id,
        sender_id,
        message,
        attachments,
        created_at,
        profiles:sender_id ( full_name, role )
      `)
      .eq("property_id", propertyId)
      .order("created_at", { ascending: true });

    if (since) {
      query = query.gt("created_at", since);
    }

    const { data: messages, error } = await query;
    if (error) {
      console.error("messages list:", error);
      return NextResponse.json({ error: "Error al cargar mensajes" }, { status: 500 });
    }

    const formatted = (messages ?? []).map((msg) => {
      const prof = msg.profiles as { full_name?: string; role?: string } | { full_name?: string; role?: string }[] | null;
      const profile = Array.isArray(prof) ? prof[0] : prof;
      return {
        id: msg.id,
        sender_id: msg.sender_id,
        message: msg.message,
        attachments: msg.attachments,
        created_at: msg.created_at,
        sender_name: profile?.full_name || "Usuario",
        sender_role: profile?.role || "client",
      };
    });

    return NextResponse.json({ messages: formatted });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
