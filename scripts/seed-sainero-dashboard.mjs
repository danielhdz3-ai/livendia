/**
 * Completa panel Carlos Pérez Sainero: inquilino, documentos, facturas y cuotas.
 * node scripts/seed-sainero-dashboard.mjs
 */
import { readFileSync, existsSync } from "fs";
import { resolve, dirname, basename } from "path";
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
const PROPERTY_ID = "61e06713-1184-481c-8601-fd92822d0159";
const SERVICE_ID = "47ff0d38-5797-43fb-aa8d-88344ad6f38c";
const ORDER_AUG = "a945846c-5769-470b-b7fc-cf18e5c3189e";
const ORDER_SEP = "eda2e049-f3d1-48e1-ae5b-47f1341a6328";

const DESKTOP = "C:\\Users\\Daniel HDZ\\Desktop";

const FILES = {
  contrato: `${DESKTOP}\\Contrato_arrendamiento_Teverga_11_3E.pdf`,
  dni: `${DESKTOP}\\DOC-20261003-WA0003.pdf`,
  dniAlt: `${DESKTOP}\\Doc1.pdf`,
  factura002: `${DESKTOP}\\Factura_002-2026_Carlos_Perez_Sainero_Agosto.pdf`,
  factura003: `${DESKTOP}\\Factura_003-2026_Carlos_Perez_Sainero_Septiembre.pdf`,
  factura004: `${DESKTOP}\\Factura_004-2026_Carlos_Perez_Sainero_Septiembre.pdf`,
};

async function rest(path, opts = {}) {
  const headers = { Authorization: `Bearer ${key}`, apikey: key, ...opts.headers };
  if (opts.body) headers["Content-Type"] = "application/json";
  if (opts.method === "POST" || opts.method === "PATCH") headers.Prefer = "return=representation";
  const res = await fetch(`${url}/rest/v1/${path}`, { ...opts, headers });
  const text = await res.text();
  if (!res.ok) throw new Error(`${res.status} ${path}: ${text}`);
  return text ? JSON.parse(text) : null;
}

async function uploadStorage(objectPath, filePath) {
  if (!existsSync(filePath)) throw new Error(`Missing file: ${filePath}`);
  const buf = readFileSync(filePath);
  const res = await fetch(`${url}/storage/v1/object/documents/${objectPath}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      apikey: key,
      "Content-Type": "application/pdf",
      "x-upsert": "true",
    },
    body: buf,
  });
  if (!res.ok) throw new Error(`Storage upload ${objectPath}: ${await res.text()}`);
  return objectPath;
}

function publicUrl(objectPath) {
  return `${url}/storage/v1/object/public/documents/${objectPath}`;
}

async function ensureTenant() {
  const existing = await rest(`tenants?property_id=eq.${PROPERTY_ID}&select=id&limit=1`);
  if (existing?.length) return existing[0].id;

  const row = await rest("tenants", {
    method: "POST",
    body: JSON.stringify({
      property_id: PROPERTY_ID,
      full_name: "Inquilino — Teverga 11 3º E",
      email: null,
      phone: null,
      dni: null,
      start_date: "2026-08-25",
      end_date: null,
      monthly_rent: 0,
      deposit_amount: 0,
      is_active: true,
      notes: "Alta automática desde contrato de arrendamiento (gestor Livendia). Actualizar datos si procede.",
    }),
  });
  console.log("tenant created", row[0].id);
  return row[0].id;
}

async function upsertPropertyDoc(documentType, filePath, fileName) {
  const objectPath = `${CLIENT_ID}/${PROPERTY_ID}/prop_${documentType}_${Date.now()}.pdf`;
  await uploadStorage(objectPath, filePath);
  const existing = await rest(
    `property_documents?property_id=eq.${PROPERTY_ID}&document_type=eq.${documentType}&select=id&limit=1`,
  );
  const payload = {
    property_id: PROPERTY_ID,
    document_type: documentType,
    file_url: publicUrl(objectPath),
    file_name: fileName,
    storage_path: objectPath,
  };
  if (existing?.length) {
    await rest(`property_documents?id=eq.${existing[0].id}`, { method: "PATCH", body: JSON.stringify(payload) });
  } else {
    await rest("property_documents", { method: "POST", body: JSON.stringify(payload) });
  }
}

async function upsertTenantDoc(tenantId, documentType, filePath, fileName) {
  const objectPath = `${CLIENT_ID}/${tenantId}/tenant_${documentType}_${Date.now()}.pdf`;
  await uploadStorage(objectPath, filePath);
  const existing = await rest(
    `tenant_documents?tenant_id=eq.${tenantId}&document_type=eq.${documentType}&select=id&limit=1`,
  );
  const payload = {
    tenant_id: tenantId,
    document_type: documentType,
    file_url: publicUrl(objectPath),
    file_name: fileName,
    storage_path: objectPath,
  };
  if (existing?.length) {
    await rest(`tenant_documents?id=eq.${existing[0].id}`, { method: "PATCH", body: JSON.stringify(payload) });
  } else {
    await rest("tenant_documents", { method: "POST", body: JSON.stringify(payload) });
  }
}

async function upsertOrderDoc(orderId, documentType, filePath, description) {
  const objectPath = `${CLIENT_ID}/${orderId}/${documentType}_${Date.now()}.pdf`;
  await uploadStorage(objectPath, filePath);
  const existing = await rest(
    `documents?order_id=eq.${orderId}&document_type=eq.${documentType}&select=id&limit=1`,
  );
  const payload = {
    order_id: orderId,
    client_id: CLIENT_ID,
    file_name: basename(filePath),
    file_path: objectPath,
    file_type: "application/pdf",
    file_size: readFileSync(filePath).length,
    document_type: documentType,
    description: description ?? null,
  };
  if (existing?.length) {
    await rest(`documents?id=eq.${existing[0].id}`, { method: "PATCH", body: JSON.stringify(payload) });
  } else {
    await rest("documents", { method: "POST", body: JSON.stringify(payload) });
  }
}

async function markOrderCompleted(orderId) {
  await rest(`orders?id=eq.${orderId}`, {
    method: "PATCH",
    body: JSON.stringify({ status: "completed" }),
  });
}

async function ensureOctoberOrder() {
  const oct = await rest(
    `orders?client_id=eq.${CLIENT_ID}&notes=ilike.*Octubre*2026*&select=id&limit=1`,
  );
  if (oct?.length) return oct[0].id;

  const row = await rest("orders", {
    method: "POST",
    body: JSON.stringify({
      client_id: CLIENT_ID,
      service_id: SERVICE_ID,
      status: "completed",
      total_cents: 4900,
      paid_at: "2026-10-01T12:00:00.000Z",
      notes:
        "Pago por transferencia bancaria (cuota administración de alquiler) · Octubre 2026 · Factura 005/2026",
    }),
  });
  const id = row[0].id;
  console.log("october order", id);
  return id;
}

async function syncBillingDues() {
  await fetch(`${url}/rest/v1/rpc/sync_rental_admin_dues`, {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": "application/json" },
    body: "{}",
  }).catch(() => null);

  const orders = await rest(
    `orders?client_id=eq.${CLIENT_ID}&service_id=eq.${SERVICE_ID}&paid_at=not.is.null&select=id,paid_at,total_cents,notes`,
  );
  for (const o of orders ?? []) {
    const paid = new Date(o.paid_at);
    const due = `${paid.getFullYear()}-${String(paid.getMonth() + 1).padStart(2, "0")}-01`;
    await rest(`rental_admin_fee_dues?client_id=eq.${CLIENT_ID}&due_date=eq.${due}`, {
      method: "PATCH",
      body: JSON.stringify({ status: "paid", order_id: o.id, amount_cents: o.total_cents }),
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
}

async function main() {
  console.log("Seeding Sainero dashboard…");
  const tenantId = await ensureTenant();

  await upsertPropertyDoc("contrato_arrendamiento", FILES.contrato, "Contrato_arrendamiento_Teverga_11_3E.pdf");

  const dniPath = existsSync(FILES.dni) ? FILES.dni : FILES.dniAlt;
  await upsertTenantDoc(tenantId, "dni", dniPath, basename(dniPath));

  await upsertOrderDoc(ORDER_AUG, "otro", FILES.factura002, "Factura 002/2026 — Agosto 2026");
  await upsertOrderDoc(ORDER_SEP, "otro", FILES.factura003, "Factura 003/2026 — Septiembre 2026");
  await upsertOrderDoc(ORDER_SEP, "recibos", FILES.factura004, "Factura 004/2026 — Septiembre 2026");

  await upsertOrderDoc(ORDER_SEP, "dni_propietario", dniPath, "DNI propietario");
  await upsertOrderDoc(ORDER_SEP, "contrato_actual", FILES.contrato, "Contrato de arrendamiento");

  const octOrderId = await ensureOctoberOrder();
  if (existsSync(FILES.factura004)) {
    await upsertOrderDoc(octOrderId, "otro", FILES.factura004, "Factura octubre (referencia 004/2026)");
  }

  await markOrderCompleted(ORDER_AUG);
  await markOrderCompleted(ORDER_SEP);
  await markOrderCompleted(octOrderId);

  await syncBillingDues();

  console.log("OK — dashboard datos actualizados para", CLIENT_ID);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
