import { createServerSupabaseClient } from "@/lib/supabase/server";
import { RENTAL_ACTIVE_PROPERTY_COOKIE } from "@/lib/rental-active-property";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const supabase = await createServerSupabaseClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return NextResponse.json({ error: "No autorizado" }, { status: 401 });

    const body = (await request.json()) as { propertyId?: string };
    const propertyId = body.propertyId?.trim();
    if (!propertyId) return NextResponse.json({ error: "Falta propertyId" }, { status: 400 });

    const { data: property } = await supabase
      .from("properties")
      .select("id")
      .eq("id", propertyId)
      .eq("user_id", user.id)
      .maybeSingle();

    if (!property) {
      return NextResponse.json({ error: "Inmueble no encontrado" }, { status: 404 });
    }

    const res = NextResponse.json({ ok: true, propertyId });
    res.cookies.set(RENTAL_ACTIVE_PROPERTY_COOKIE, propertyId, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 365,
    });
    return res;
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Error interno" }, { status: 500 });
  }
}
