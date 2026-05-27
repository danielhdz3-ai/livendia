import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

/** Resumen de sesión Stripe para evento purchase (solo usuario autenticado dueño de la sesión). */
export async function GET(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  const sessionId = new URL(req.url).searchParams.get("session_id")?.trim();
  if (!sessionId) {
    return NextResponse.json({ error: "Falta session_id" }, { status: 400 });
  }

  const stripe = getStripe();
  let session;
  try {
    session = await stripe.checkout.sessions.retrieve(sessionId);
  } catch {
    return NextResponse.json({ error: "Sesión no encontrada" }, { status: 404 });
  }

  const ownerId = session.metadata?.supabase_user_id;
  if (ownerId && ownerId !== user.id) {
    return NextResponse.json({ error: "No autorizado" }, { status: 403 });
  }

  const serviceId = session.metadata?.service_id;
  let serviceName = "Servicio Livendia";
  let serviceSlug = serviceId ?? "unknown";
  if (serviceId) {
    const { data: svc } = await supabase
      .from("services")
      .select("name, slug")
      .eq("id", serviceId)
      .maybeSingle();
    if (svc?.name) serviceName = svc.name as string;
    if (svc?.slug) serviceSlug = svc.slug as string;
  }

  const total = session.amount_total ?? 0;
  const valueEur = total / 100;

  return NextResponse.json({
    transactionId: sessionId,
    serviceName,
    serviceSlug,
    valueEur,
    currency: (session.currency ?? "eur").toUpperCase(),
  });
}
