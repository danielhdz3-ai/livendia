/**
 * Inmueble Teverga (Oviedo), contrato PDF, facturación admin día 1 y sync cuotas.
 * Uso: node scripts/setup-sainero-rental.mjs
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
const PDF_PATH = resolve(
  process.env.USERPROFILE || "",
  "Desktop/logos imple/Contrato_arrendamiento_Teverga_11_3E.pdf",
);

const PROPERTY = {
  address: "Calle Teverga 11, 3º E",
  zone: "Oviedo",
  postal_code: "33012",
  property_type: "piso",
  rooms: 0,
  bathrooms: 0,
  notes: "Alta desde contrato de arrendamiento (administración Livendia)",
};

async function rest(path, opts = {}) {
  const headers = {
    Authorization: `Bearer ${key}`,
    apikey: key,
    ...opts.headers,
  };
  if (opts.body) headers["Content-Type"] = "application/json";
  if (opts.method === "POST" && !opts.storage) headers.Prefer = "return=representation";

  const res = await fetch(`${url}/rest/v1/${path}`, { ...opts, headers });
  const text = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${path}: ${text}`);
  return text ? JSON.parse(text) : null;
}

async function runSql(sql) {
  const dbUrl = process.env.SUPABASE_DB_URL || process.env.DATABASE_URL;
  if (!dbUrl) {
    console.warn("Sin SUPABASE_DB_URL: ejecuta la migración 20260913194500_rental_admin_billing.sql en Supabase.");
    return false;
  }
  const { default: pg } = await import("pg");
  const client = new pg.Client({ connectionString: dbUrl, ssl: { rejectUnauthorized: false } });
  await client.connect();
  await client.query(sql);
  await client.end();
  return true;
}

const migrationSql = readFileSync(
  resolve(root, "supabase/migrations/20260913194500_rental_admin_billing.sql"),
  "utf8",
);
await runSql(migrationSql);

let props = await rest(`properties?user_id=eq.${CLIENT_ID}&select=id,address`);
let propertyId = props?.[0]?.id;

if (!propertyId) {
  const inserted = await rest("properties", {
    method: "POST",
    body: JSON.stringify({ user_id: CLIENT_ID, ...PROPERTY }),
  });
  propertyId = inserted[0].id;
  console.log("property created", propertyId, PROPERTY.address);
} else {
  console.log("property exists", propertyId, props[0].address);
  await rest(`properties?id=eq.${propertyId}`, {
    method: "PATCH",
    body: JSON.stringify({
      address: PROPERTY.address,
      zone: PROPERTY.zone,
      postal_code: PROPERTY.postal_code,
      notes: PROPERTY.notes,
    }),
  });
}

const pdfBytes = readFileSync(PDF_PATH);
const storagePath = `${CLIENT_ID}/${propertyId}/contrato_arrendamiento_${Date.now()}.pdf`;

const uploadRes = await fetch(`${url}/storage/v1/object/documents/${storagePath}`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${key}`,
    apikey: key,
    "Content-Type": "application/pdf",
    "x-upsert": "true",
  },
  body: pdfBytes,
});
if (!uploadRes.ok) {
  throw new Error(`Storage upload: ${await uploadRes.text()}`);
}

const fileUrl = `${url}/storage/v1/object/public/documents/${storagePath}`;
const existingDocs = await rest(
  `property_documents?property_id=eq.${propertyId}&document_type=eq.contrato_arrendamiento&select=id`,
);
if (!existingDocs?.length) {
  await rest("property_documents", {
    method: "POST",
    body: JSON.stringify({
      property_id: propertyId,
      document_type: "contrato_arrendamiento",
      file_name: "Contrato_arrendamiento_Teverga_11_3E.pdf",
      file_url: fileUrl,
      storage_path: storagePath,
    }),
  });
  console.log("contract document saved");
} else {
  console.log("contract document already present");
}

let billingRows;
try {
  billingRows = await rest(`rental_admin_billing?client_id=eq.${CLIENT_ID}&select=*`);
} catch (e) {
  console.error(String(e));
  console.error("Aplica primero: node scripts/apply-rental-admin-billing-sql.mjs (con SUPABASE_DB_URL)");
  process.exit(1);
}
if (!billingRows?.length) {
  await rest("rental_admin_billing", {
    method: "POST",
    body: JSON.stringify({
      client_id: CLIENT_ID,
      service_id: SERVICE_ID,
      status: "active",
      billing_method: "transfer",
      monthly_cents: 4900,
      started_on: "2026-08-25",
      first_period_amount_cents: 1106,
    }),
  });
  console.log("billing account created");
} else {
  await rest(`rental_admin_billing?client_id=eq.${CLIENT_ID}`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "active",
      billing_method: "transfer",
      monthly_cents: 4900,
      started_on: "2026-08-25",
      first_period_amount_cents: 1106,
    }),
  });
}

// Generación de cuotas vía REST
const billing = (
  await rest(`rental_admin_billing?client_id=eq.${CLIENT_ID}&select=*`)
)[0];

function dueDate(y, m) {
  return `${y}-${String(m).padStart(2, "0")}-01`;
}

const start = new Date(billing.started_on);
const limit = new Date();
limit.setMonth(limit.getMonth() + 14);
const cursor = new Date(start.getFullYear(), start.getMonth(), 1);

while (cursor <= limit) {
  const d = dueDate(cursor.getFullYear(), cursor.getMonth() + 1);
  const startMonth = billing.started_on.slice(0, 7);
  const dueMonth = d.slice(0, 7);
  const amount =
    dueMonth === startMonth && billing.first_period_amount_cents
      ? billing.first_period_amount_cents
      : billing.monthly_cents;

  const ex = await rest(
    `rental_admin_fee_dues?client_id=eq.${CLIENT_ID}&due_date=eq.${d}&select=id`,
  );
  if (!ex?.length) {
    await rest("rental_admin_fee_dues", {
      method: "POST",
      body: JSON.stringify({
        client_id: CLIENT_ID,
        service_id: SERVICE_ID,
        due_date: d,
        amount_cents: amount,
        status: "pending",
      }),
    });
  }
  cursor.setMonth(cursor.getMonth() + 1);
}

const orders = await rest(
  `orders?client_id=eq.${CLIENT_ID}&service_id=eq.${SERVICE_ID}&select=id,paid_at,total_cents&not.paid_at=is.null`,
);
for (const o of orders ?? []) {
  const paid = new Date(o.paid_at);
  const due = dueDate(paid.getFullYear(), paid.getMonth() + 1);
  await rest(`rental_admin_fee_dues?client_id=eq.${CLIENT_ID}&due_date=eq.${due}`, {
    method: "PATCH",
    body: JSON.stringify({
      status: "paid",
      order_id: o.id,
      amount_cents: o.total_cents,
    }),
  });
}

console.log("done — property", propertyId, "dues synced", orders?.length ?? 0, "payments");
