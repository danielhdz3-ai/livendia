/**
 * Sube nota de encargo firmada (Carlos Pérez Sainero).
 * node scripts/upload-sainero-nota-encargo.mjs
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
const ORDER_SEP = "eda2e049-f3d1-48e1-ae5b-47f1341a6328";
const FILE = "C:\\Users\\Daniel HDZ\\Desktop\\Administracion_Alquiler_firmado.pdf";

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
  if (!res.ok) throw new Error(`Storage: ${await res.text()}`);
}

function publicUrl(objectPath) {
  return `${url}/storage/v1/object/public/documents/${objectPath}`;
}

async function main() {
  if (!existsSync(FILE)) throw new Error(`No encontrado: ${FILE}`);

  const existingProp = await rest(
    `property_documents?property_id=eq.${PROPERTY_ID}&document_type=eq.nota_encargo&select=id,file_name`,
  );
  console.log("property nota_encargo antes:", existingProp);

  const existingReq = await rest(
    `rental_document_requests?property_id=eq.${PROPERTY_ID}&select=id,document_type,status`,
  );
  console.log("solicitudes documentación (agenda):", existingReq);

  const objectPath = `${CLIENT_ID}/${PROPERTY_ID}/prop_nota_encargo_${Date.now()}.pdf`;
  await uploadStorage(objectPath, FILE);
  const payload = {
    property_id: PROPERTY_ID,
    document_type: "nota_encargo",
    file_url: publicUrl(objectPath),
    file_name: basename(FILE),
    storage_path: objectPath,
  };
  if (existingProp?.length) {
    await rest(`property_documents?id=eq.${existingProp[0].id}`, { method: "PATCH", body: JSON.stringify(payload) });
  } else {
    await rest("property_documents", { method: "POST", body: JSON.stringify(payload) });
  }

  const existingOrder = await rest(
    `documents?order_id=eq.${ORDER_SEP}&document_type=eq.poder_notarial&select=id,description`,
  );
  const orderPayload = {
    order_id: ORDER_SEP,
    client_id: CLIENT_ID,
    file_name: basename(FILE),
    file_path: `${CLIENT_ID}/${ORDER_SEP}/nota_encargo_${Date.now()}.pdf`,
    file_type: "application/pdf",
    file_size: readFileSync(FILE).length,
    document_type: "poder_notarial",
    description: "Nota de encargo — Administración de alquiler (firmado)",
  };
  await uploadStorage(orderPayload.file_path, FILE);
  if (existingOrder?.length) {
    await rest(`documents?id=eq.${existingOrder[0].id}`, { method: "PATCH", body: JSON.stringify(orderPayload) });
  } else {
    await rest("documents", { method: "POST", body: JSON.stringify(orderPayload) });
  }

  console.log("OK — nota de encargo en panel inmueble + expediente pedido", ORDER_SEP);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
