import { sendWelcomeEmail } from "@/lib/email/send";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { rateLimitWelcome } from "@/lib/ratelimit";
import { getRequestIp } from "@/lib/request-ip";
import { createClient } from "@supabase/supabase-js";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    return NextResponse.json({ error: "Config incompleta" }, { status: 500 });
  }

  let bodyData: { email?: string; name?: string } = {};
  try {
    bodyData = await req.json();
  } catch {
    /* Body vacío o no es JSON */
  }

  let userEmail: string | null = null;
  let userName = "";
  let userId: string | null = null;

  const raw = req.headers.get("authorization");
  const token = raw?.replace(/^Bearer\s+/i, "").trim();

  if (token) {
    const supabaseAuth = createClient(url, anon);
    const {
      data: { user },
    } = await supabaseAuth.auth.getUser(token);

    if (user?.email) {
      userEmail = user.email;
      userId = user.id;
      userName = (user.user_metadata?.full_name as string | undefined) ?? bodyData.name ?? "";
    }
  }

  if (!userEmail && bodyData.email) {
    userEmail = bodyData.email;
    userName = bodyData.name || "";
  }

  if (!userEmail) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const ip = await getRequestIp();
  const rl = await rateLimitWelcome(`${ip}:${userEmail}`);
  if (!rl.ok) {
    return NextResponse.json({ error: "Demasiadas solicitudes" }, { status: 429 });
  }

  if (userId) {
    const admin = createServiceRoleClient();
    const { data: prof } = await admin
      .from("profiles")
      .select("welcome_email_sent_at")
      .eq("id", userId)
      .maybeSingle();

    if (prof?.welcome_email_sent_at) {
      return NextResponse.json({ ok: true, skipped: true });
    }
  }

  try {
    await sendWelcomeEmail({ to: userEmail, customerName: userName });

    if (userId) {
      const admin = createServiceRoleClient();
      await admin
        .from("profiles")
        .update({ welcome_email_sent_at: new Date().toISOString() })
        .eq("id", userId);
    }
  } catch (error) {
    console.error("Error sending welcome email:", error);
    return NextResponse.json({ error: "No se pudo enviar el email" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
