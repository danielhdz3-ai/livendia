import {
  resolveOrCreateCheckoutUser,
  validateCheckoutCustomer,
  type CheckoutCustomerInput,
} from "@/lib/checkout-account";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { getStripe } from "@/lib/stripe/server";
import { NextResponse } from "next/server";

/** Precio Stripe de respaldo cuando `services.stripe_price_id` está vacío (suscripciones admin). */
function fallbackRecurringPriceId(slug: string | null | undefined): string | undefined {
  if (slug === "administracion-alquiler") {
    const v = process.env.STRIPE_PRICE_ID_ADMINISTRACION_ALQUILER?.trim();
    return v || undefined;
  }
  if (slug === "administracion-alquiler-temporada") {
    const v = process.env.STRIPE_PRICE_ID_ADMINISTRACION_ALQUILER_TEMPORADA?.trim();
    return v || undefined;
  }
  return undefined;
}

type CheckoutBody = {
  serviceId?: string;
  email?: string;
  fullName?: string;
  phone?: string;
  utm?: Record<string, string>;
};

async function syncProfileFromForm(userId: string, input: CheckoutCustomerInput) {
  const admin = createServiceRoleClient();
  await admin
    .from("profiles")
    .update({
      full_name: input.fullName.trim(),
      phone: input.phone.replace(/\s+/g, "").trim(),
    })
    .eq("id", userId);
}

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user: sessionUser },
  } = await supabase.auth.getUser();

  let body: CheckoutBody;
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

  const customerInput: CheckoutCustomerInput = {
    email: typeof body.email === "string" ? body.email : "",
    fullName: typeof body.fullName === "string" ? body.fullName : "",
    phone: typeof body.phone === "string" ? body.phone : "",
  };

  let checkoutUserId: string;
  let checkoutEmail: string;

  if (sessionUser?.email) {
    checkoutUserId = sessionUser.id;
    checkoutEmail = sessionUser.email;
    const formError = validateCheckoutCustomer({
      ...customerInput,
      email: customerInput.email || sessionUser.email,
    });
    if (formError) {
      return NextResponse.json({ error: formError }, { status: 400 });
    }
    await syncProfileFromForm(checkoutUserId, {
      email: checkoutEmail,
      fullName: customerInput.fullName,
      phone: customerInput.phone,
    });
  } else {
    const formError = validateCheckoutCustomer(customerInput);
    if (formError) {
      return NextResponse.json({ error: formError }, { status: 400 });
    }
    try {
      const resolved = await resolveOrCreateCheckoutUser(customerInput);
      checkoutUserId = resolved.userId;
      checkoutEmail = resolved.email;
    } catch (e) {
      const message = e instanceof Error ? e.message : "No se pudo preparar la cuenta";
      return NextResponse.json({ error: message }, { status: 400 });
    }
  }

  const admin = createServiceRoleClient();
  const { data: service, error: sErr } = await admin
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

    const successUrl = `${appUrl}/gracias?session_id={CHECKOUT_SESSION_ID}&dest=rental`;
    const commonSub = {
      mode: "subscription" as const,
      customer_email: checkoutEmail,
      success_url: successUrl,
      cancel_url: `${appUrl}/servicios`,
      subscription_data: {
        metadata: {
          supabase_user_id: checkoutUserId,
          service_id: service.id,
          ...utmMeta,
        },
      },
      metadata: {
        supabase_user_id: checkoutUserId,
        service_id: service.id,
        ...utmMeta,
      },
      allow_promotion_codes: true,
    };

    const session = priceId
      ? await stripe.checkout.sessions.create({
          ...commonSub,
          line_items: [{ price: priceId, quantity: 1 }],
        })
      : await stripe.checkout.sessions.create({
          ...commonSub,
          line_items: [
            {
              price_data: {
                currency: "eur",
                unit_amount: service.price_cents,
                recurring: { interval: "month" },
                product_data: {
                  name: service.name,
                  metadata: { service_id: service.id },
                },
              },
              quantity: 1,
            },
          ],
        });

    if (!session.url) {
      return NextResponse.json({ error: "Stripe no devolvió URL" }, { status: 500 });
    }
    return NextResponse.json({ url: session.url });
  }

  const session = await stripe.checkout.sessions.create({
    mode: "payment",
    customer_email: checkoutEmail,
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
    cancel_url: `${appUrl}/servicios`,
    metadata: {
      supabase_user_id: checkoutUserId,
      service_id: service.id,
      ...utmMeta,
    },
  });

  if (!session.url) {
    return NextResponse.json({ error: "Stripe no devolvió URL" }, { status: 500 });
  }

  return NextResponse.json({ url: session.url });
}
