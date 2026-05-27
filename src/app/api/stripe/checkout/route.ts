import { createServerSupabaseClient } from "@/lib/supabase/server";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

/** Precio Stripe de respaldo cuando `services.stripe_price_id` está vacío (solo administración recurrente). */
function fallbackRecurringPriceId(slug: string | null | undefined): string | undefined {
  if (slug === "administracion-alquiler") {
    const v = process.env.STRIPE_PRICE_ID_ADMINISTRACION_ALQUILER?.trim();
    return v || undefined;
  }
  return undefined;
}

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let body: { serviceId?: string; utm?: Record<string, string> };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }
  const serviceId = body.serviceId;
  const utmMeta =
    body.utm && typeof body.utm === "object"
      ? Object.fromEntries(
          Object.entries(body.utm).filter(
            ([k, v]) => k.startsWith("utm_") && typeof v === "string" && v.length > 0 && v.length <= 200,
          ),
        )
      : {};
  if (!serviceId || typeof serviceId !== "string") {
    return NextResponse.json({ error: "Falta serviceId" }, { status: 400 });
  }

  const { data: service, error: sErr } = await supabase
    .from("services")
    .select("id, name, price_cents, is_active, is_recurring, slug, stripe_price_id")
    .eq("id", serviceId)
    .maybeSingle();

  if (sErr || !service || !service.is_active) {
    return NextResponse.json({ error: "Servicio no disponible" }, { status: 400 });
  }

  const appUrl = process.env.NEXT_PUBLIC_APP_URL?.replace(/\/$/, "");
  if (!appUrl) {
    return NextResponse.json({ error: "NEXT_PUBLIC_APP_URL no configurada" }, { status: 500 });
  }

  const stripe = getStripe();

  if (service.is_recurring) {
    const priceFromDb = typeof service.stripe_price_id === "string" ? service.stripe_price_id.trim() : "";
    const priceId =
      priceFromDb || fallbackRecurringPriceId(service.slug as string | null | undefined) || "";
    if (!priceId) {
      return NextResponse.json(
        {
          error:
            "Suscripción sin precio Stripe: rellena `stripe_price_id` en la tabla `services` o define STRIPE_PRICE_ID_ADMINISTRACION_ALQUILER.",
        },
        { status: 503 },
      );
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: user.email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${appUrl}/gracias?session_id={CHECKOUT_SESSION_ID}&dest=rental`,
      cancel_url: `${appUrl}/dashboard/servicios`,
      subscription_data: {
        metadata: {
          supabase_user_id: user.id,
          service_id: service.id,
          ...utmMeta,
        },
      },
      metadata: {
        supabase_user_id: user.id,
        service_id: service.id,
        ...utmMeta,
      },
      allow_promotion_codes: true,
    });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe no devolvió URL" }, { status: 500 });
    }
    return NextResponse.json({ url: session.url });
  }

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
    success_url: `${appUrl}/gracias?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${appUrl}/dashboard`,
    metadata: {
      supabase_user_id: user.id,
      service_id: service.id,
      ...utmMeta,
    },
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe no devolvió URL" }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}
