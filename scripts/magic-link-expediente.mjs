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
const orderId = process.argv[2] || "26b762bd-78fb-4616-8883-efca4611ac37";
const email = process.argv[3] || "simulacion.2026-07-03T06-52-41@cliente-test.livendia";

const res = await fetch(`${url}/auth/v1/admin/generate_link`, {
  method: "POST",
  headers: { Authorization: `Bearer ${key}`, apikey: key, "Content-Type": "application/json" },
  body: JSON.stringify({
    type: "magiclink",
    email,
    options: { redirect_to: `https://livendia.com/mis-pedidos/${orderId}` },
  }),
});
const body = await res.json();
const link = body.action_link || body.properties?.action_link;

console.log("\n=== ENTRAR SIN CONTRASEÑA ===\n");
console.log(link || JSON.stringify(body, null, 2));
console.log("\nExpediente (tras abrir el enlace de arriba):");
console.log(`https://livendia.com/mis-pedidos/${orderId}\n`);
