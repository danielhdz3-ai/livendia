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
const email = "sainero1985@gmail.com";

const users = await fetch(`${url}/auth/v1/admin/users?per_page=200`, {
  headers: { Authorization: `Bearer ${key}`, apikey: key },
}).then((r) => r.json());
const u = users.users?.find((x) => x.email?.toLowerCase() === email);
console.log("user", u?.id, u?.email);
if (!u) process.exit(0);

const prof = await fetch(`${url}/rest/v1/profiles?id=eq.${u.id}&select=*`, {
  headers: { Authorization: `Bearer ${key}`, apikey: key },
}).then((r) => r.json());
console.log("profile", prof[0]);

const subs = await fetch(
  `${url}/rest/v1/client_subscriptions?client_id=eq.${u.id}&select=*,services(slug,name)`,
  { headers: { Authorization: `Bearer ${key}`, apikey: key } },
).then((r) => r.json());
console.log("subs", JSON.stringify(subs, null, 2));

const orders = await fetch(
  `${url}/rest/v1/orders?client_id=eq.${u.id}&select=id,status,total_cents,paid_at,notes,stripe_session_id,created_at,services(slug,name)&order=created_at.desc`,
  { headers: { Authorization: `Bearer ${key}`, apikey: key } },
).then((r) => r.json());
console.log("orders", JSON.stringify(orders, null, 2));

const svc = await fetch(`${url}/rest/v1/services?slug=eq.administracion-alquiler&select=id,name,price_cents`, {
  headers: { Authorization: `Bearer ${key}`, apikey: key },
}).then((r) => r.json());
console.log("service", svc[0]);

const props = await fetch(`${url}/rest/v1/properties?user_id=eq.${u.id}&select=*`, {
  headers: { Authorization: `Bearer ${key}`, apikey: key },
}).then((r) => r.json());
console.log("properties", JSON.stringify(props, null, 2));

if (props[0]?.id) {
  const tenants = await fetch(
    `${url}/rest/v1/tenants?property_id=eq.${props[0].id}&select=*`,
    { headers: { Authorization: `Bearer ${key}`, apikey: key } },
  ).then((r) => r.json());
  console.log("tenants", JSON.stringify(tenants, null, 2));
  if (tenants[0]?.id) {
    const td = await fetch(
      `${url}/rest/v1/tenant_documents?tenant_id=eq.${tenants[0].id}&select=document_type,file_name`,
      { headers: { Authorization: `Bearer ${key}`, apikey: key } },
    ).then((r) => r.json());
    console.log("tenant_docs", td);
  }
  const pd = await fetch(
    `${url}/rest/v1/property_documents?property_id=eq.${props[0].id}&select=document_type,file_name`,
    { headers: { Authorization: `Bearer ${key}`, apikey: key } },
  ).then((r) => r.json());
  console.log("property_docs", pd);
}
