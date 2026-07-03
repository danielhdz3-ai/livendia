/**
 * Prueba subida PDF como cliente simulado (storage + API register).
 * Uso: node scripts/test-document-upload.mjs <orderId> <userId>
 */
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
readFileSync(resolve(root, ".env.local"), "utf8")
  .split(/\r?\n/)
  .forEach((line) => {
    const m = line.match(/^([^#=]+)=(.*)$/);
    if (m) process.env[m[1].trim()] = m[2].trim().replace(/^"|"$/g, "");
  });

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const appUrl = process.env.NEXT_PUBLIC_APP_URL?.includes("livendia.com")
  ? process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, "")
  : "https://livendia.com";

const orderId = process.argv[2] || "26b762bd-78fb-4616-8883-efca4611ac37";
const userId = process.argv[3] || "6123fa43-7451-4348-8932-dab59941f671";

if (!url || !serviceKey || !anonKey) {
  console.error("Faltan variables en .env.local");
  process.exit(1);
}

const pdfPath = resolve(root, "scripts/fixtures/test-contrato.pdf");
const pdfBytes = readFileSync(pdfPath);
const fileName = "test-contrato.pdf";
const storagePath = `${userId}/${orderId}/${randomUUID()}_${fileName}`;

async function getUserEmail() {
  const res = await fetch(`${url}/auth/v1/admin/users/${userId}`, {
    headers: { Authorization: `Bearer ${serviceKey}`, apikey: serviceKey },
  });
  const body = await res.json();
  return body.email;
}

async function signInAsUser(email) {
  const res = await fetch(`${url}/auth/v1/admin/generate_link`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${serviceKey}`,
      apikey: serviceKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "magiclink", email }),
  });
  const body = await res.json();
  const tokenHash = body.hashed_token;
  if (!tokenHash) {
    console.error("No hashed_token", body);
    process.exit(1);
  }

  const verifyRes = await fetch(`${url}/auth/v1/verify`, {
    method: "POST",
    headers: {
      apikey: anonKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ type: "magiclink", token_hash: tokenHash }),
  });
  const session = await verifyRes.json();
  if (!session.access_token) {
    console.error("Verify failed", session);
    process.exit(1);
  }
  return session.access_token;
}

console.log("Order:", orderId);
console.log("User:", userId);

const email = await getUserEmail();
console.log("Email:", email);

const accessToken = await signInAsUser(email);
console.log("✓ Sesión cliente obtenida");

// 1) Storage upload (como hace el navegador)
const storageRes = await fetch(`${url}/storage/v1/object/documents/${storagePath}`, {
  method: "POST",
  headers: {
    Authorization: `Bearer ${accessToken}`,
    apikey: anonKey,
    "Content-Type": "application/pdf",
    "x-upsert": "false",
  },
  body: pdfBytes,
});
const storageText = await storageRes.text();
console.log("\n--- Storage upload ---");
console.log("Status:", storageRes.status);
console.log("Body:", storageText.slice(0, 500));

if (!storageRes.ok) {
  process.exit(1);
}

// 2) API register
  const registerRes = await fetch(`${appUrl}/api/orders/document`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  body: JSON.stringify({
    orderId,
    documentType: "otro",
    fileName,
    filePath: storagePath,
    fileType: "application/pdf",
    fileSize: pdfBytes.length,
  }),
});
const registerBody = await registerRes.text();
console.log("\n--- API PUT register ---");
console.log("Status:", registerRes.status);
console.log("Body:", registerBody);

if (!registerRes.ok) {
  console.log("\n⚠️ Storage OK pero API falló — el cliente vería error tras subir.");
  process.exit(1);
}

console.log("\n✅ Subida completa OK (storage + registro)");
