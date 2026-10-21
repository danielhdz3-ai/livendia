/**
 * Actualiza email inquilina + perfil propietario y sincroniza cuotas pagadas.
 * node scripts/patch-sainero-tenant-email.mjs
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
readFileSync(resolve(root, ".env.local"), "utf8")
  .split(/\r?\n/)
  .forEach((line) => {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^"|"$/g, "");
  });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
const CLIENT_ID = "cb67014d-dbd8-46ff-b849-e84393515f60";
const TENANT_ID = "93cd879e-e208-46d5-b61b-c5d0be624f6c";
const SERVICE_ID = "47ff0d38-5797-43fb-aa8d-88344ad6f38c";
const TENANT_EMAIL = "martbastian@hotmail.com";

async function rest(path, opts = {}) {
  const headers = { Authorization: `Bearer ${key}`, apikey: key, ...opts.headers };
  if (opts.body) headers["Content-Type"] = "application/json";
  if (opts.method === "PATCH" || opts.method === "POST") headers.Prefer = "return=representation";
  const res = await fetch(`${url}/rest/v1/${path}`, { ...opts, headers });
  const text = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${path}: ${text}`);
  return text ? JSON.parse(text) : null;
}

await rest(`tenants?id=eq.${TENANT_ID}`, {
  method: "PATCH",
  body: JSON.stringify({
    email: TENANT_EMAIL,
    notes:
      "Contrato LAU vivienda habitual (9 ene 2026 – 8 ene 2027, prórroga anual hasta 5 años). Renta 720 €/mes (Unicaja ES02 2103 7843 3100 3011 1731). Fianza 720 €.",
  }),
});

await rest(`profiles?id=eq.${CLIENT_ID}`, {
  method: "PATCH",
  body: JSON.stringify({
    dni_nie: "71670228C",
    phone: "+34679057128",
  }),
});

const orders = await rest(
  `orders?client_id=eq.${CLIENT_ID}&service_id=eq.${SERVICE_ID}&select=id,status,paid_at,total_cents&order=created_at.asc`,
);
for (const o of orders ?? []) {
  if (o.status !== "completed" && o.paid_at) {
    await rest(`orders?id=eq.${o.id}`, { method: "PATCH", body: JSON.stringify({ status: "completed" }) });
  }
}

for (const o of orders ?? []) {
  if (!o.paid_at) continue;
  const paid = new Date(o.paid_at);
  const due = `${paid.getFullYear()}-${String(paid.getMonth() + 1).padStart(2, "0")}-01`;
  await rest(`rental_admin_fee_dues?client_id=eq.${CLIENT_ID}&due_date=eq.${due}`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "paid",
      order_id: o.id,
      amount_cents: o.total_cents,
      service_id: SERVICE_ID,
    }),
  }).catch(async () => {
    await rest("rental_admin_fee_dues", {
      method: "POST",
      body: JSON.stringify({
        client_id: CLIENT_ID,
        service_id: SERVICE_ID,
        due_date: due,
        amount_cents: o.total_cents,
        status: "paid",
        order_id: o.id,
      }),
    });
  });
}

const tenant = await rest(`tenants?id=eq.${TENANT_ID}&select=full_name,email,phone,dni`);
const dues = await rest(
  `rental_admin_fee_dues?client_id=eq.${CLIENT_ID}&select=due_date,status,amount_cents&order=due_date.asc`,
);
console.log("OK tenant", tenant[0]);
console.log("cuotas", dues);
