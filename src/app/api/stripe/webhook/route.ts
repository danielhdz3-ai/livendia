import { getAuthUserContact, sendAdminNewOrderEmail, sendOrderConfirmedEmail } from "@/lib/email/send";
import { createServiceRoleClient } from "@/lib/supabase/service";
import { getStripe } from "@/lib/stripe/server";
import { headers } from "next/headers";
import Stripe from "stripe";
import { NextResponse } from "next/server";

async function persistStripeCustomer(
  supabase: ReturnType<typeof createServiceRoleClient>,
  userId: string,
  customerRaw: string | Stripe.Customer | Stripe.DeletedCustomer | null,
) {
  const id = typeof customerRaw === "string" ? customerRaw : customerRaw?.id;
  if (!id) return;
  await supabase.from("profiles").update({ stripe_customer_id: id }).eq("id", userId);
}

async function upsertClientSubscription(
  supabase: ReturnType<typeof createServiceRoleClient>,
  stripe: Stripe,
  subscriptionId: string,
  userId: string,
  serviceId: string,
  customerId: string | null,
) {
  const sub = await stripe.subscriptions.retrieve(subscriptionId, { expand: ["items.data"] });
  const periodEndUnix = subscriptionBillingPeriodEndUnix(sub);
  await supabase.from("client_subscriptions").upsert(
    {
      client_id: userId,
      service_id: serviceId,
      stripe_subscription_id: subscriptionId,
      stripe_customer_id: customerId,
      status: sub.status,
      current_period_end: periodEndUnix
        ? new Date(periodEndUnix * 1000).toISOString()
        : null,
      cancel_at_period_end: sub.cancel_at_period_end,
    },
    { onConflict: "stripe_subscription_id" },
  );
}

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

async function sendConfirmationEmailsSafe(
  supabase: ReturnType<typeof createServiceRoleClient>,
  userId: string,
  serviceId: string,
  session: Stripe.Checkout.Session,
  orderId: string,
) {
  const { data: svc } = await supabase.from("services").select("name").eq("id", serviceId).maybeSingle();
  const serviceName = (svc?.name as string) ?? "Servicio";
  const contact = await getAuthUserContact(supabase, userId);
  const customerEmail = contact?.email ?? session.customer_email ?? null;
  const customerName = contact?.fullName?.trim() || "—";
  const paidAt = new Date().toISOString();
  const totalCents = session.amount_total ?? null;

  if (customerEmail) {
    try {
      await sendOrderConfirmedEmail({
        to: customerEmail,
        customerName: customerName === "—" ? "" : customerName,
        serviceName,
        orderId,
      });
    } catch (err) {
      console.error("[webhook] sendOrderConfirmedEmail:", err);
    }
  }

  try {
    await sendAdminNewOrderEmail({
      serviceName,
      orderId,
      clientEmail: customerEmail ?? "—",
      clientName: customerName,
      clientPhone: contact?.phone ?? null,
      totalCents,
      paidAt,
    });
  } catch (err) {
    console.error("[webhook] sendAdminNewOrderEmail:", err);
  }
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
    const userId = session.metadata?.supabase_user_id;
    const serviceId = session.metadata?.service_id;
    if (!userId || !serviceId || !session.id) {
      return new NextResponse("ok");
    }

    await persistStripeCustomer(supabase, userId, session.customer);

    const stripeCustomerId =
      typeof session.customer === "string" ? session.customer : session.customer?.id ?? null;

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

    const subRaw = session.subscription;
    const subscriptionId = typeof subRaw === "string" ? subRaw : subRaw?.id ?? null;

    if (session.mode === "subscription") {
      if (!subscriptionId) {
        return new NextResponse("ok");
      }

      await upsertClientSubscription(supabase, stripe, subscriptionId, userId, serviceId, stripeCustomerId);

      const { data: inserted, error: insErr } = await supabase
        .from("orders")
        .insert({
          client_id: userId,
          service_id: serviceId,
          status: "paid",
          stripe_session_id: session.id,
          stripe_payment_intent_id: paymentIntentId,
          stripe_subscription_id: subscriptionId,
          total_cents: session.amount_total ?? null,
          paid_at: new Date().toISOString(),
        })
        .select("id")
        .single();

      if (!insErr && inserted?.id) {
        await sendConfirmationEmailsSafe(supabase, userId, serviceId, session, inserted.id as string);
      }
      return new NextResponse("ok");
    }

    const { data: inserted, error: insErr } = await supabase
      .from("orders")
      .insert({
        client_id: userId,
        service_id: serviceId,
        status: "pending_docs",
        stripe_session_id: session.id,
        stripe_payment_intent_id: paymentIntentId,
        total_cents: session.amount_total ?? null,
        paid_at: new Date().toISOString(),
      })
      .select("id")
      .single();

    if (!insErr && inserted?.id) {
      await sendConfirmationEmailsSafe(supabase, userId, serviceId, session, inserted.id as string);
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
