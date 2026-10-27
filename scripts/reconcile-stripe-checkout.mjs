/**
 * Recupera un pedido cuando Stripe cobró pero el webhook falló.
 *
 * Uso (desde la raíz del repo, con .env.local):
 *   node scripts/reconcile-stripe-checkout.mjs cs_xxx
 *   node scripts/reconcile-stripe-checkout.mjs --pi pi_3UV8SKGfWAVhSWJ21oZ2o0w8
 */
import { readFileSync } from "fs";
import { createClient } from "@supabase/supabase-js";
import Stripe from "stripe";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envName = process.env.ENV_FILE?.trim() || ".env.local";
readFileSync(resolve(root, envName), "utf8")
  .split(/\r?\n/)
  .forEach((line) => {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^"|"$/g, "");
  });

const stripeKey = process.env.STRIPE_SECRET_KEY;
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!stripeKey || !supabaseUrl || !serviceKey) {
  console.error("Faltan STRIPE_SECRET_KEY, NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local");
  process.exit(1);
}

const stripe = new Stripe(stripeKey);
const supabase = createClient(supabaseUrl, serviceKey);

async function fulfill(session) {
  const userId = session.metadata?.supabase_user_id;
  const serviceId = session.metadata?.service_id;
  if (!userId || !serviceId || !session.id) {
    throw new Error("Sesión sin metadata supabase_user_id / service_id");
  }
  if (session.payment_status !== "paid" && session.status !== "complete") {
    throw new Error(`Pago no confirmado: payment_status=${session.payment_status} status=${session.status}`);
  }

  const { data: existing } = await supabase
    .from("orders")
    .select("id")
    .eq("stripe_session_id", session.id)
    .maybeSingle();

  if (existing?.id) {
    console.log("Pedido ya existía:", existing.id);
    return existing.id;
  }

  const pi = session.payment_intent;
  const paymentIntentId = typeof pi === "string" ? pi : pi?.id ?? null;

  const { data: inserted, error } = await supabase
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

  if (error || !inserted?.id) {
    throw new Error(error?.message ?? "insert failed");
  }

  console.log("Pedido creado:", inserted.id);
  console.log("Reenvía emails desde Stripe (Resend event) o avisa al cliente manualmente.");
  return inserted.id;
}

const arg = process.argv[2];
const piFlag = process.argv[2] === "--pi" ? process.argv[3] : null;

if (!arg) {
  console.error("Indica cs_... o --pi pi_...");
  process.exit(1);
}

try {
  let session;
  if (piFlag) {
    const sessions = await stripe.checkout.sessions.list({ payment_intent: piFlag, limit: 1 });
    session = sessions.data[0];
    if (!session) {
      console.error("No hay Checkout Session para ese Payment Intent");
      process.exit(1);
    }
  } else {
    session = await stripe.checkout.sessions.retrieve(arg);
  }

  console.log("Session:", session.id, "amount:", session.amount_total, "email:", session.customer_email);
  await fulfill(session);
} catch (e) {
  console.error(e.message ?? e);
  process.exit(1);
}
