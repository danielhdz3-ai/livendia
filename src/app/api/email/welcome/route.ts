import { sendWelcomeEmail } from "@/lib/email/send";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    return NextResponse.json({ error: "Config incompleta" }, { status: 500 });
  }

  const raw = req.headers.get("authorization");
  const token = raw?.replace(/^Bearer\s+/i, "").trim();
  if (!token) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const supabaseAuth = createClient(url, anon);
  const {
    data: { user },
    error,
  } = await supabaseAuth.auth.getUser(token);
  if (error || !user?.email) {
    return NextResponse.json({ error: "Sesión inválida" }, { status: 401 });
  }

  const admin = createServiceRoleClient();
  const { data: prof } = await admin
    .from("profiles")
    .select("welcome_email_sent_at")
    .eq("id", user.id)
    .maybeSingle();

  if (prof?.welcome_email_sent_at) {
    return NextResponse.json({ ok: true, skipped: true });
  }

  try {
    const name = (user.user_metadata?.full_name as string | undefined) ?? "";
    await sendWelcomeEmail({ to: user.email, customerName: name });
    await admin
      .from("profiles")
      .update({ welcome_email_sent_at: new Date().toISOString() })
      .eq("id", user.id);
  } catch {
    return NextResponse.json({ error: "No se pudo enviar el email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
