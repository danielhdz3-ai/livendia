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
const TENANT_ID = "93cd879e-e208-46d5-b61b-c5d0be624f6c";
const SERVICE_ID = "47ff0d38-5797-43fb-aa8d-88344ad6f38c";

/** Datos extraídos del contrato de arrendamiento (Teverga 11, 3º E, Oviedo). */
const CONTRACT = {
  tenantName: "Marta Martínez Bastián",
  tenantDni: "52617323-Q",
  tenantPhone: "+34686340498",
  tenantAddress: "Calle Teverga 11, 3º E, Oviedo (33012)",
  startDate: "2026-01-09",
  endDate: "2027-01-08",
  monthlyRent: 720,
  depositAmount: 720,
  cadastralRef: "6356903TP6065N0017FZ",
  propertyNotes:
    "Vivienda habitual amueblada. Anexos: plaza de garaje n.º 76 (sótano -2) y trastero n.º 26 (sótano -1). Ref. catastral 6356903TP6065N0017FZ. Contrato firmado en Oviedo el 9/01/2026.",
  tenantNotes:
    "Contrato LAU vivienda habitual (9 ene 2026 – 8 ene 2027, prórroga anual hasta 5 años). Renta 720 €/mes (Unicaja ES02 2103 7843 3100 3011 1731). Fianza 720 €. Email no consta en contrato.",
};
const ORDER_AUG = "a945846c-5769-470b-b7fc-cf18e5c3189e";
const ORDER_SEP = "eda2e049-f3d1-48e1-ae5b-47f1341a6328";

const DESKTOP = "C:\\Users\\Daniel HDZ\\Desktop";

const FILES = {
  notaEncargo: `${DESKTOP}\\Administracion_Alquiler_firmado.pdf`,
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
  const tenantId = existing?.[0]?.id ?? TENANT_ID;

  if (!existing?.length) {
    const row = await rest("tenants", {
      method: "POST",
      body: JSON.stringify({
        property_id: PROPERTY_ID,
        full_name: CONTRACT.tenantName,
        email: null,
        phone: CONTRACT.tenantPhone,
        dni: CONTRACT.tenantDni,
        address: CONTRACT.tenantAddress,
        start_date: CONTRACT.startDate,
        end_date: CONTRACT.endDate,
        monthly_rent: CONTRACT.monthlyRent,
        deposit_amount: CONTRACT.depositAmount,
        is_active: true,
        notes: CONTRACT.tenantNotes,
      }),
    });
    console.log("tenant created", row[0].id);
    return row[0].id;
  }

  await rest(`tenants?id=eq.${tenantId}`, {
    method: "PATCH",
    body: JSON.stringify({
      full_name: CONTRACT.tenantName,
      phone: CONTRACT.tenantPhone,
      dni: CONTRACT.tenantDni,
      address: CONTRACT.tenantAddress,
      start_date: CONTRACT.startDate,
      end_date: CONTRACT.endDate,
      monthly_rent: CONTRACT.monthlyRent,
      deposit_amount: CONTRACT.depositAmount,
      is_active: true,
      notes: CONTRACT.tenantNotes,
    }),
  });
  console.log("tenant synced", tenantId);
  return tenantId;
}

async function syncPropertyFromContract() {
  await rest(`properties?id=eq.${PROPERTY_ID}`, {
    method: "PATCH",
    body: JSON.stringify({
      address: "Calle Teverga 11, 3º E",
      zone: "Oviedo",
      postal_code: "33012",
      property_type: "piso",
      cadastral_reference: CONTRACT.cadastralRef,
      notes: CONTRACT.propertyNotes,
    }),
  });
  console.log("property synced", PROPERTY_ID);
}

async function fixMislabeledTenantDni(tenantId) {
  const rows = await rest(
    `tenant_documents?tenant_id=eq.${tenantId}&document_type=eq.dni&select=id,file_name`,
  );
  for (const row of rows ?? []) {
    if (/DOC-20261003|WA0003/i.test(row.file_name ?? "")) {
      await rest(`tenant_documents?id=eq.${row.id}`, { method: "DELETE" });
      console.log("removed mislabeled tenant dni doc", row.id);
    }
  }
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

async function upsertOrderDocAllOrders(documentType, filePath, description) {
  const orders = await rest(
    `orders?client_id=eq.${CLIENT_ID}&service_id=eq.${SERVICE_ID}&select=id&order=created_at.asc`,
  );
  for (const o of orders ?? []) {
    await upsertOrderDoc(o.id, documentType, filePath, description);
  }
}

async function main() {
  console.log("Seeding Sainero dashboard…");
  await syncPropertyFromContract();
  const tenantId = await ensureTenant();
  await fixMislabeledTenantDni(tenantId);

  await upsertPropertyDoc("contrato_arrendamiento", FILES.contrato, "Contrato_arrendamiento_Teverga_11_3E.pdf");
  if (existsSync(FILES.notaEncargo)) {
    await upsertPropertyDoc(
      "nota_encargo",
      FILES.notaEncargo,
      "Administracion_Alquiler_firmado.pdf",
    );
    await upsertOrderDoc(
      ORDER_SEP,
      "poder_notarial",
      FILES.notaEncargo,
      "Nota de encargo — Administración de alquiler (firmado)",
    );
    console.log("nota de encargo subida (inmueble + expediente septiembre)");
  } else {
    console.warn("Missing nota encargo:", FILES.notaEncargo);
  }
  await upsertTenantDoc(tenantId, "contrato_arrendamiento", FILES.contrato, "Contrato_arrendamiento_Teverga_11_3E.pdf");

  const dniPath = existsSync(FILES.dniAlt) ? FILES.dniAlt : null;
  if (dniPath && existsSync(dniPath)) {
    await upsertTenantDoc(tenantId, "dni", dniPath, basename(dniPath));
  }

  await upsertOrderDoc(ORDER_AUG, "otro", FILES.factura002, "Factura 002/2026 — Agosto 2026");
  await upsertOrderDoc(ORDER_SEP, "otro", FILES.factura003, "Factura 003/2026 — Septiembre 2026");
  await upsertOrderDoc(ORDER_SEP, "recibos", FILES.factura004, "Factura 004/2026 — Septiembre 2026");

  const ownerDocPath = existsSync(FILES.dni) ? FILES.dni : FILES.dniAlt;
  if (existsSync(ownerDocPath)) {
    await upsertOrderDoc(ORDER_SEP, "dni_propietario", ownerDocPath, "Documentación propietario / justificante");
  }
  await upsertOrderDoc(ORDER_SEP, "contrato_actual", FILES.contrato, "Contrato de arrendamiento");
  await upsertOrderDocAllOrders("contrato_actual", FILES.contrato, "Contrato arrendamiento Teverga 11 3º E");
  await upsertOrderDocAllOrders("dni_inquilino", FILES.contrato, "DNI inquilino (consignado en contrato firmado)");

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
