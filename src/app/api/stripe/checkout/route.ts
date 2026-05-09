import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let body: { serviceId?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }
  const serviceId = body.serviceId;
  if (!serviceId || typeof serviceId !== "string") {
    return NextResponse.json({ error: "Falta serviceId" }, { status: 400 });
  }

  const { data: service, error: sErr } = await supabase
    .from("services")
    .select("id, name, price_cents, is_active, is_recurring")
    .eq("id", serviceId)
    .maybeSingle();

  if (sErr || !service || !service.is_active) {
    return NextResponse.json({ error: "Servicio no disponible" }, { status: 400 });
  }

  if (service.is_recurring) {
    return NextResponse.json({ error: "Suscripciones aún no configuradas" }, { status: 400 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  if (!appUrl) {
    return NextResponse.json({ error: "NEXT_PUBLIC_APP_URL no configurada" }, { status: 500 });
  }

  const stripe = getStripe();

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: user.email,
    line_items: [
      {
        price_data: {
          currency: "eur",
          product_data: {
            name: service.name,
            metadata: { service_id: service.id },
          },
          unit_amount: service.price_cents,
        },
        quantity: 1,
      },
    ],
    success_url: `${appUrl}/dashboard?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/dashboard`,
    metadata: {
      supabase_user_id: user.id,
      service_id: service.id,
    },
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe no devolvió URL" }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}
