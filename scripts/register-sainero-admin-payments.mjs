/**
 * Registra cuotas de administración de alquiler por transferencia (Carlos Pérez Sainero).
 * Uso: node scripts/register-sainero-admin-payments.mjs
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
const SERVICE_ID = "47ff0d38-5797-43fb-aa8d-88344ad6f38c";

const payments = [
  {
    total_cents: 1106,
    paid_at: "2026-08-31T12:00:00.000Z",
    notes:
      "Pago por transferencia bancaria (cuota administración de alquiler) · Agosto 2026 (proporcional 25-31 ago) · Factura 002/2026",
  },
  {
    total_cents: 4900,
    paid_at: "2026-09-10T12:00:00.000Z",
    notes:
      "Pago por transferencia bancaria (cuota administración de alquiler) · Septiembre 2026 · Factura 003/2026",
  },
];

async function rest(path, opts = {}) {
  const res = await fetch(`${url}/rest/v1/${path}`, {
    ...opts,
    headers: {
      Authorization: `Bearer ${key}`,
      apikey: key,
      "Content-Type": "application/json",
      Prefer: opts.method === "POST" ? "return=representation" : undefined,
      ...opts.headers,
    },
  });
  const text = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${path}: ${text}`);
  return text ? JSON.parse(text) : null;
}

const existing = await rest(
  `orders?client_id=eq.${CLIENT_ID}&service_id=eq.${SERVICE_ID}&select=id,total_cents,paid_at,notes&order=paid_at.asc`,
);

for (const p of payments) {
  const dup = (existing ?? []).find(
    (o) => o.total_cents === p.total_cents && o.notes?.includes(p.notes.split("Factura")[1]?.trim() ?? ""),
  );
  if (dup) {
    console.log("skip (ya existe)", dup.id, p.total_cents);
    continue;
  }
  const dupByInvoice = (existing ?? []).find((o) => o.notes?.includes(p.notes.match(/Factura \d+\/\d+/)?.[0] ?? "___"));
  if (dupByInvoice) {
    console.log("skip factura", dupByInvoice.id);
    continue;
  }

  const inserted = await rest("orders", {
    method: "POST",
    body: JSON.stringify({
      client_id: CLIENT_ID,
      service_id: SERVICE_ID,
      status: "in_progress",
      total_cents: p.total_cents,
      paid_at: p.paid_at,
      notes: p.notes,
    }),
  });
  console.log("inserted", inserted[0]?.id, p.total_cents, p.paid_at);
}

const final = await rest(
  `orders?client_id=eq.${CLIENT_ID}&service_id=eq.${SERVICE_ID}&select=id,total_cents,paid_at,notes,status&order=paid_at.asc`,
);
console.log("orders now:", JSON.stringify(final, null, 2));
