/**
 * Fusiona variables de production (pull) con development para claves "sensitive"
 * que Vercel no devuelve en production pull. Salida: .env.livendia.migrate
 * No commitear ese archivo.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const prodPath = path.join(root, ".env.vercel.migration");
const devPath = path.join(root, ".env.vercel.dev");
const outPath = path.join(root, ".env.livendia.migrate");

const SENSITIVE_FALLBACK_FROM_DEV = new Set([
  "NEXT_PUBLIC_GA_MEASUREMENT_ID",
  "NEXT_PUBLIC_SUPABASE_ANON_KEY",
  "RESEND_API_KEY",
  "STRIPE_SECRET_KEY",
  "STRIPE_WEBHOOK_SECRET",
  "SUPABASE_SERVICE_ROLE_KEY",
]);

const SKIP_KEYS = new Set(["VERCEL"]);
const SKIP_PREFIX = /^(VERCEL_|TURBO_|NX_)/;

function parseDotenv(content) {
  const map = new Map();
  for (const line of content.split(/\r?\n/)) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const m = t.match(/^([A-Za-z_][A-Za-z0-9_]*)=(.*)$/);
    if (!m) continue;
    let v = m[2];
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    map.set(m[1], v);
  }
  return map;
}

if (!fs.existsSync(prodPath)) {
  console.error("Falta .env.vercel.migration — ejecuta: vercel env pull ... production");
  process.exit(1);
}

const prod = parseDotenv(fs.readFileSync(prodPath, "utf8"));
const dev = fs.existsSync(devPath)
  ? parseDotenv(fs.readFileSync(devPath, "utf8"))
  : new Map();

const merged = new Map();
for (const [k, v] of prod) {
  if (SKIP_KEYS.has(k) || SKIP_PREFIX.test(k)) continue;
  if (v.includes("SENSITIVE") && SENSITIVE_FALLBACK_FROM_DEV.has(k)) {
    const dv = dev.get(k);
    if (!dv || dv.includes("SENSITIVE")) {
      console.error(`Sin valor para ${k}`);
      process.exit(1);
    }
    merged.set(k, dv);
  } else if (!v.includes("SENSITIVE")) {
    merged.set(k, v);
  }
}

const lines = [
  "# Generado por scripts/merge-vercel-env-for-migration.mjs — NO COMMITEAR",
  ...[...merged.entries()]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([k, v]) => {
      const escaped = v.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
      return `${k}="${escaped}"`;
    }),
];

fs.writeFileSync(outPath, lines.join("\n") + "\n", "utf8");
console.log(`OK ${merged.size} variables -> ${path.basename(outPath)}`);
for (const k of [...merged.keys()].sort()) console.log(`  - ${k}`);
