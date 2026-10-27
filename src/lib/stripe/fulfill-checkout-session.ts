import {
  getAuthUserContact,
  sendAdminNewOrderEmail,
  sendOrderConfirmedEmail,
} from "@/lib/email/send";
import { logOrderActivity } from "@/lib/order-activity-log";
import { createServiceRoleClient } from "@/lib/supabase/service";
import type { SupabaseClient } from "@supabase/supabase-js";
import type Stripe from "stripe";

function subscriptionBillingPeriodEndUnix(sub: Stripe.Subscription): number | null {
  const items = sub.items?.data;
  if (items?.length && typeof items[0].current_period_end === "number") {
    return items[0].current_period_end;
  }
  return null;
}

async function persistStripeCustomer(
  supabase: SupabaseClient,
  userId: string,
  customerRaw: string | Stripe.Customer | Stripe.DeletedCustomer | null,
) {
  const id = typeof customerRaw === "string" ? customerRaw : customerRaw?.id;
  if (!id) return;
  await supabase.from("profiles").update({ stripe_customer_id: id }).eq("id", userId);
}

async function upsertClientSubscription(
  supabase: SupabaseClient,
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

async function sendConfirmationEmailsSafe(
  supabase: SupabaseClient,
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
      console.error("[fulfill-checkout] sendOrderConfirmedEmail:", err);
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
    console.error("[fulfill-checkout] sendAdminNewOrderEmail:", err);
  }
}

export type FulfillCheckoutResult =
  | { ok: true; orderId: string; created: boolean }
  | { ok: false; reason: "missing_metadata" | "missing_subscription" | "insert_failed" };

/**
 * Crea el pedido (y envía emails) a partir de una Checkout Session pagada.
 * Idempotente: si ya existe orders.stripe_session_id, no duplica ni reenvía emails.
 */
export async function fulfillCheckoutSession(
  stripe: Stripe,
  session: Stripe.Checkout.Session,
  supabase: SupabaseClient = createServiceRoleClient(),
): Promise<FulfillCheckoutResult> {
  const userId = session.metadata?.supabase_user_id;
  const serviceId = session.metadata?.service_id;
  if (!userId || !serviceId || !session.id) {
    return { ok: false, reason: "missing_metadata" };
  }

  if (session.payment_status !== "paid" && session.status !== "complete") {
    return { ok: false, reason: "missing_metadata" };
  }

  await persistStripeCustomer(supabase, userId, session.customer);

  const stripeCustomerId =
    typeof session.customer === "string" ? session.customer : session.customer?.id ?? null;

  const { data: existing } = await supabase
    .from("orders")
    .select("id")
    .eq("stripe_session_id", session.id)
    .maybeSingle();

  if (existing?.id) {
    return { ok: true, orderId: existing.id as string, created: false };
  }

  const pi = session.payment_intent;
  const paymentIntentId = typeof pi === "string" ? pi : pi?.id ?? null;

  const subRaw = session.subscription;
  const subscriptionId = typeof subRaw === "string" ? subRaw : subRaw?.id ?? null;

  if (session.mode === "subscription") {
    if (!subscriptionId) {
      return { ok: false, reason: "missing_subscription" };
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

    if (insErr || !inserted?.id) {
      return { ok: false, reason: "insert_failed" };
    }

    await sendConfirmationEmailsSafe(supabase, userId, serviceId, session, inserted.id as string);
    await logOrderActivity({
      orderId: inserted.id as string,
      kind: "payment",
      title: "Pago confirmado",
      description: "Suscripción activada correctamente.",
    });
    return { ok: true, orderId: inserted.id as string, created: true };
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

  if (insErr || !inserted?.id) {
    return { ok: false, reason: "insert_failed" };
  }

  await sendConfirmationEmailsSafe(supabase, userId, serviceId, session, inserted.id as string);
  await logOrderActivity({
    orderId: inserted.id as string,
    kind: "payment",
    title: "Pago confirmado",
    description: "Ya puedes subir la documentación de tu expediente.",
  });

  return { ok: true, orderId: inserted.id as string, created: true };
}
