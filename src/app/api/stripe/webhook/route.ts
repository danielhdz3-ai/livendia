import { getAuthUserContact, sendAdminNewOrderEmail, sendOrderConfirmedEmail } from "@/lib/email/send";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { getStripe } from "@/lib/stripe/server";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret) {
    return new NextResponse("STRIPE_WEBHOOK_SECRET no configurada", { status: 503 });
  }

  const raw = await req.text();
  const sig = (await headers()).get("stripe-signature");
  if (!sig) {
    return new NextResponse("Falta stripe-signature", { status: 400 });
  }

  const stripe = getStripe();
  let event: import("stripe").Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, secret);
  } catch {
    return new NextResponse("Firma inválida", { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as import("stripe").Stripe.Checkout.Session;
    const userId = session.metadata?.supabase_user_id;
    const serviceId = session.metadata?.service_id;
    if (!userId || !serviceId || !session.id) {
      return new NextResponse("ok");
    }

    const supabase = createServiceRoleClient();
    const { data: existing } = await supabase
      .from("orders")
      .select("id")
      .eq("stripe_session_id", session.id)
      .maybeSingle();

    if (existing) {
      return new NextResponse("ok");
    }

    const pi = session.payment_intent;
    const paymentIntentId = typeof pi === "string" ? pi : pi?.id ?? null;

    const { data: inserted, error: insErr } = await supabase
      .from("orders")
      .insert({
        client_id: userId,
        service_id: serviceId,
        status: "paid",
        stripe_session_id: session.id,
        stripe_payment_intent_id: paymentIntentId,
        total_cents: session.amount_total ?? null,
        paid_at: new Date().toISOString(),
      })
      .select("id")
      .single();

    if (insErr || !inserted?.id) {
      return new NextResponse("ok");
    }

    const orderId = inserted.id as string;

    try {
      const { data: svc } = await supabase.from("services").select("name").eq("id", serviceId).maybeSingle();
      const serviceName = (svc?.name as string) ?? "Servicio";
      const contact = await getAuthUserContact(supabase, userId);
      const customerEmail = contact?.email ?? session.customer_email ?? null;
      const customerName = contact?.fullName ?? "";

      if (customerEmail) {
        await sendOrderConfirmedEmail({
          to: customerEmail,
          customerName,
          serviceName,
          orderId,
        });
        await sendAdminNewOrderEmail({
          serviceName,
          orderId,
          clientEmail: customerEmail,
        });
      }
    } catch {
      /* email no debe bloquear el webhook */
    }
  }

  return new NextResponse("ok");
}
