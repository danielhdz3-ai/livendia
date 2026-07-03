/**
 * Simula un cliente nuevo con pedido pagado (pending_docs) sin pasar por Stripe.
 * Uso: node scripts/simulate-test-client.mjs [slug-servicio] [email-opcional]
 *
 * Imprime enlace mágico de acceso y URL del expediente para probar subida de documentos.
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const envPath = resolve(root, ".env.local");

try {
  readFileSync(envPath, "utf8")
    .split(/\r?\n/)
    .forEach((line) => {
      const m = line.match(/^([^#=]+)=(.*)$/);
      if (m) process.env[m[1].trim()] = m[2].trim().replace(/^"|"$/g, "");
    });
} catch {
  console.error("No se encontró .env.local. Necesitas SUPABASE_SERVICE_ROLE_KEY y NEXT_PUBLIC_SUPABASE_URL.");
  process.exit(1);
}

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const appUrl = (process.env.NEXT_PUBLIC_APP_URL || "https://livendia.com").replace(/\/$/, "");
const publicSiteUrl = appUrl.includes("livendia.com") ? appUrl : "https://livendia.com";

const serviceSlug = process.argv[2] || "contrato-alquiler-habitacion";
const emailArg = process.argv[3]?.trim();

if (!url || !key) {
  console.error("Faltan NEXT_PUBLIC_SUPABASE_URL o SUPABASE_SERVICE_ROLE_KEY en .env.local");
  process.exit(1);
}

const headers = {
  Authorization: `Bearer ${key}`,
  apikey: key,
  "Content-Type": "application/json",
};

const stamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
const email = emailArg || `simulacion.${stamp}@cliente-test.livendia`;
const fullName = "Cliente Simulación Test";
const phone = "+34600000099";

async function findServiceBySlug(slug) {
  const res = await fetch(`${url}/rest/v1/services?slug=eq.${encodeURIComponent(slug)}&select=id,name,slug,price_cents`, {
    headers: { Authorization: `Bearer ${key}`, apikey: key },
  });
  const rows = await res.json();
  if (!res.ok || !rows?.[0]) {
    console.error(`Servicio no encontrado: ${slug}`, rows);
    process.exit(1);
  }
  return rows[0];
}

async function findUserIdByEmail(targetEmail) {
  for (let page = 1; page <= 20; page += 1) {
    const res = await fetch(`${url}/auth/v1/admin/users?page=${page}&per_page=200`, {
      headers: { Authorization: `Bearer ${key}`, apikey: key },
    });
    const body = await res.json();
    const match = body.users?.find((u) => u.email?.toLowerCase() === targetEmail.toLowerCase());
    if (match?.id) return match.id;
    if (!body.users?.length || body.users.length < 200) break;
  }
  return null;
}

async function resolveUserId() {
  const existingId = await findUserIdByEmail(email);
  if (existingId) {
    return { userId: existingId, isNew: false };
  }

  const res = await fetch(`${url}/auth/v1/admin/users`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      email,
      email_confirm: true,
      user_metadata: { full_name: fullName, phone },
    }),
  });
  const body = await res.json();
  if (!res.ok) {
    console.error("Error creando usuario:", body);
    process.exit(1);
  }
  return { userId: body.id, isNew: true };
}

async function upsertProfile(userId, isNew) {
  const patchBody = { full_name: fullName, phone };
  if (isNew) patchBody.role = "client";

  const patchRes = await fetch(`${url}/rest/v1/profiles?id=eq.${userId}`, {
    method: "PATCH",
    headers: { ...headers, Prefer: "return=representation" },
    body: JSON.stringify(patchBody),
  });
  const patched = await patchRes.json();
  if (patchRes.ok && Array.isArray(patched) && patched.length > 0) {
    return patched[0];
  }

  const insertRes = await fetch(`${url}/rest/v1/profiles`, {
    method: "POST",
    headers: { ...headers, Prefer: "return=representation" },
    body: JSON.stringify({
      id: userId,
      full_name: fullName,
      phone,
      role: "client",
    }),
  });
  const inserted = await insertRes.json();
  if (!insertRes.ok) {
    console.error("Error creando perfil:", inserted);
    process.exit(1);
  }
  return Array.isArray(inserted) ? inserted[0] : inserted;
}

async function createOrder(userId, service) {
  const fakeSessionId = `sim_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  const res = await fetch(`${url}/rest/v1/orders`, {
    method: "POST",
    headers: { ...headers, Prefer: "return=representation" },
    body: JSON.stringify({
      client_id: userId,
      service_id: service.id,
      status: "pending_docs",
      stripe_session_id: fakeSessionId,
      total_cents: service.price_cents ?? 14500,
      paid_at: new Date().toISOString(),
    }),
  });
  const body = await res.json();
  if (!res.ok) {
    console.error("Error creando pedido:", body);
    process.exit(1);
  }
  const row = Array.isArray(body) ? body[0] : body;
  return row;
}

async function generateMagicLink(orderId) {
  const res = await fetch(`${url}/auth/v1/admin/generate_link`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      type: "magiclink",
      email,
      options: { redirect_to: `${publicSiteUrl}/mis-pedidos/${orderId}` },
    }),
  });
  const body = await res.json();
  if (!res.ok) {
    console.error("Error generando enlace:", body);
    process.exit(1);
  }
  return body;
}

console.log("\n=== SIMULACIÓN CLIENTE NUEVO ===\n");
console.log(`Servicio: ${serviceSlug}`);
console.log(`Email:    ${email}\n`);

const service = await findServiceBySlug(serviceSlug);
console.log(`✓ Servicio: ${service.name} (${(service.price_cents ?? 0) / 100} €)`);

const { userId, isNew } = await resolveUserId();
console.log(isNew ? `✓ Usuario creado: ${userId}` : `✓ Usuario existente: ${userId}`);

await upsertProfile(userId, isNew);
console.log("✓ Perfil cliente listo");

const order = await createOrder(userId, service);
const orderId = order.id;
console.log(`✓ Pedido creado: ${orderId} (estado: pending_docs)`);

const link = await generateMagicLink(orderId);
const actionLink = link.action_link || link.properties?.action_link;

console.log("\n--- ACCESO (abre en navegador o móvil) ---\n");
if (actionLink) {
  console.log("Enlace mágico (login automático):");
  console.log(actionLink);
} else {
  console.log("No se pudo generar action_link. Entra en /login con:", email);
}

console.log("\n--- EXPEDIENTE DIRECTO (tras login) ---\n");
console.log(`${publicSiteUrl}/mis-pedidos/${orderId}`);

console.log("\n--- PRUEBA DE SUBIDA ---\n");
console.log("1. Abre el enlace mágico (o entra en /login con tu contraseña)");
console.log("2. Ve al expediente de abajo");
console.log("3. Pulsa «PDF o Word» o «Fotos o galería» y sube un archivo");
console.log("4. Comprueba en Admin → Pedidos que aparece el documento");
console.log("\nPara repetir con otro email: node scripts/simulate-test-client.mjs contrato-alquiler-habitacion tu@email.com\n");
