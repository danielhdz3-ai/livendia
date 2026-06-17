import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

async function waitForOrderId(stripeSessionId: string, maxAttempts = 20): Promise<string | null> {
  const admin = createServiceRoleClient();
  for (let i = 0; i < maxAttempts; i += 1) {
    const { data } = await admin
      .from("orders")
      .select("id")
      .eq("stripe_session_id", stripeSessionId)
      .maybeSingle();
    if (data?.id) return data.id as string;
    await new Promise((r) => setTimeout(r, 1000));
  }
  return null;
}

async function ensureSessionForUser(userId: string, email: string) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (user?.id === userId) return;

  const admin = createServiceRoleClient();
  const { data: linkData, error: linkErr } = await admin.auth.admin.generateLink({
    type: "magiclink",
    email,
  });
  if (linkErr || !linkData.properties?.hashed_token) {
    throw new Error(linkErr?.message ?? "No se pudo iniciar sesión automática.");
  }

  const { error: verifyErr } = await supabase.auth.verifyOtp({
    token_hash: linkData.properties.hashed_token,
    type: "email",
  });
  if (verifyErr) {
    throw new Error(verifyErr.message);
  }
}

export async function POST(req: Request) {
  let body: { sessionId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const sessionId = body.sessionId?.trim();
  if (!sessionId) {
    return NextResponse.json({ error: "Falta sessionId" }, { status: 400 });
  }

  const stripe = getStripe();
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.json({ error: "Sesión de pago no encontrada" }, { status: 404 });
  }

  if (session.payment_status !== "paid" && session.status !== "complete") {
    return NextResponse.json({ error: "El pago aún no está confirmado" }, { status: 409 });
  }

  const userId = session.metadata?.supabase_user_id;
  if (!userId) {
    return NextResponse.json({ error: "Sesión sin usuario asociado" }, { status: 400 });
  }

  const admin = createServiceRoleClient();
  const { data: authUser, error: userErr } = await admin.auth.admin.getUserById(userId);
  if (userErr || !authUser.user?.email) {
    return NextResponse.json({ error: "Usuario no encontrado" }, { status: 404 });
  }

  try {
    await ensureSessionForUser(userId, authUser.user.email);
  } catch (e) {
    const message = e instanceof Error ? e.message : "Error al iniciar sesión";
    return NextResponse.json({ error: message }, { status: 500 });
  }

  if (session.mode === "subscription") {
    return NextResponse.json({ redirectUrl: "/dashboard/rental" });
  }

  const orderId = await waitForOrderId(sessionId);
  if (orderId) {
    return NextResponse.json({ redirectUrl: `/dashboard?pedido=${orderId}` });
  }

  return NextResponse.json({ redirectUrl: "/dashboard" });
}
