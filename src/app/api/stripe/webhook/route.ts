import { fulfillCheckoutSession } from "@/lib/stripe/fulfill-checkout-session";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { getStripe } from "@/lib/stripe/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { NextResponse } from "next/server";

/** Fin de período de facturación (Stripe API reciente: por ítem de suscripción). */
function subscriptionBillingPeriodEndUnix(sub: Stripe.Subscription): number | null {
  const items = sub.items?.data;
  if (items?.length && typeof items[0].current_period_end === "number") {
    return items[0].current_period_end;
  }
  return null;
}

/** Suscripción asociada al invoice (estructura parent en API reciente). */
function invoiceSubscriptionId(invoice: Stripe.Invoice): string | null {
  const p = invoice.parent;
  if (p?.type === "subscription_details" && p.subscription_details?.subscription) {
    const s = p.subscription_details.subscription;
    return typeof s === "string" ? s : s.id;
  }
  return null;
}

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
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, secret);
  } catch {
    return new NextResponse("Firma inválida", { status: 400 });
  }

  const supabase = createServiceRoleClient();

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const result = await fulfillCheckoutSession(stripe, session, supabase);
    if (!result.ok && result.reason === "insert_failed") {
      console.error("[webhook] fulfillCheckoutSession insert_failed", session.id);
    }
  }

  if (event.type === "invoice.payment_succeeded") {
    const invoice = event.data.object as Stripe.Invoice;
    const subscriptionId = invoiceSubscriptionId(invoice);
    if (subscriptionId) {
      try {
        const sub = await stripe.subscriptions.retrieve(subscriptionId, { expand: ["items.data"] });
        const periodEndUnix = subscriptionBillingPeriodEndUnix(sub);
        await supabase
          .from("client_subscriptions")
          .update({
            status: sub.status,
            current_period_end: periodEndUnix
              ? new Date(periodEndUnix * 1000).toISOString()
              : null,
            cancel_at_period_end: sub.cancel_at_period_end,
          })
          .eq("stripe_subscription_id", subscriptionId);
      } catch {
        /* noop */
      }
    }
  }

  if (event.type === "invoice.payment_failed") {
    const invoice = event.data.object as Stripe.Invoice;
    const subscriptionId = invoiceSubscriptionId(invoice);
    if (subscriptionId) {
      await supabase
        .from("client_subscriptions")
        .update({ status: "past_due" })
        .eq("stripe_subscription_id", subscriptionId);
    }
  }

  if (event.type === "customer.subscription.updated" || event.type === "customer.subscription.deleted") {
    const subThin = event.data.object as Stripe.Subscription;
    const status = event.type === "customer.subscription.deleted" ? "canceled" : subThin.status;

    let periodEndUnix = subscriptionBillingPeriodEndUnix(subThin);
    let cancelAtEnd = subThin.cancel_at_period_end;
    if (periodEndUnix == null) {
      try {
        const full = await stripe.subscriptions.retrieve(subThin.id, { expand: ["items.data"] });
        periodEndUnix = subscriptionBillingPeriodEndUnix(full);
        cancelAtEnd = full.cancel_at_period_end;
      } catch {
        /* noop */
      }
    }

    await supabase
      .from("client_subscriptions")
      .update({
        status,
        current_period_end: periodEndUnix ? new Date(periodEndUnix * 1000).toISOString() : null,
        cancel_at_period_end: cancelAtEnd,
      })
      .eq("stripe_subscription_id", subThin.id);
  }

  return new NextResponse("ok");
}
