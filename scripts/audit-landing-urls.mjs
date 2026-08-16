/**
 * Audita URLs indexables contra producción (HEAD).
 * Uso: node scripts/audit-landing-urls.mjs [--base https://livendia.com]
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const lib = path.join(root, "src/lib");

const baseArg = process.argv.find((a) => a.startsWith("--base="));
const base = baseArg ? baseArg.slice("--base=".length) : "https://livendia.com";
const concurrency = 12;

function readFile(rel) {
  return fs.readFileSync(path.join(lib, rel), "utf8");
}

function extractPublishedSlugs(file, constName) {
  const src = readFile(file);
  const re = new RegExp(`export const ${constName}[^=]*=\\s*\\[([\\s\\S]*?)\\];`);
  const m = src.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/"([^"]+)"/g)].map((x) => x[1]);
}

function urlsFor(basePath, slugs) {
  return slugs.map((s) => `${base}${basePath}/${s}`);
}

const SERVICIO_SLUGS = [
  "administracion-alquiler",
  "contrato-alquiler-habitacion",
  "contrato-alquiler-lau",
  "contrato-alquiler-temporada",
  "contrato-arras-penitenciales",
  "vender-piso-sin-agencia",
  "contrato-entre-particulares-local",
  "servicio-completo-compra",
  "acompanamiento-compra-parking-trastero",
  "acompanamiento-compra-parking-trastero-local",
  "servicio-completo-venta",
  "revision-documental-post-arras",
  "revision-contrato-alquiler",
  "acompanamiento-alquiler",
  "acompanamiento-alquiler-local",
  "gestion-documental-vendedor",
  "reserva-de-compra",
  "acompanamiento-reserva-arras",
  "contrato-de-arras",
  "contrato-de-alquiler",
  "contrato-alquiler-local",
  "contrato-arras-local",
  "administracion-alquiler-local",
  "contrato-alquiler-temporada-local",
  "servicio-completo-compra-local",
  "servicio-completo-venta-local",
  "venta-piso-particular-sin-agencia",
];

const PILLAR_PATHS = {
  barcelona: "/vender-piso-sin-inmobiliaria/barcelona",
  madrid: "/vender-piso-sin-inmobiliaria/madrid",
  valencia: "/vender-piso-sin-inmobiliaria/valencia",
  sevilla: "/vender-piso-sin-inmobiliaria/sevilla",
  bilbao: "/vender-piso-sin-inmobiliaria/bilbao",
  malaga: "/vender-piso-sin-inmobiliaria/malaga",
  granada: "/vender-piso-sin-inmobiliaria/granada",
};

const venderSlugs = extractPublishedSlugs(
  "vender-piso-sin-agencia-local-cities.ts",
  "VENDER_PISO_SIN_AGENCIA_PUBLISHED_SLUGS",
);

const pillarSlugs = extractPublishedSlugs(
  "vender-piso-sin-inmobiliaria-local-cities.ts",
  "VENDER_PISO_SIN_INMOBILIARIA_PUBLISHED_SLUGS",
);

const urls = new Set([
  base,
  `${base}/servicios`,
  `${base}/precios`,
  `${base}/para-propietarios`,
  `${base}/contacto`,
  `${base}/equipo`,
  `${base}/blog`,
  `${base}/ciudades`,
  `${base}/gestoria`,
  `${base}/vender-piso-sin-inmobiliaria`,
  `${base}/servicios/venta-piso-particular-sin-agencia`,
  ...SERVICIO_SLUGS.map((s) => `${base}/servicios/${s}`),
  ...urlsFor("/servicios/contrato-alquiler-local", extractPublishedSlugs("contrato-alquiler-local-cities.ts", "CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/contrato-arras-local", extractPublishedSlugs("contrato-arras-local-cities.ts", "CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/administracion-alquiler-local", extractPublishedSlugs("administracion-alquiler-local-cities.ts", "ADMINISTRACION_ALQUILER_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/contrato-alquiler-temporada-local", extractPublishedSlugs("contrato-alquiler-temporada-local-cities.ts", "CONTRATO_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/servicio-completo-compra-local", extractPublishedSlugs("servicio-completo-compra-local-cities.ts", "SERVICIO_COMPLETO_COMPRA_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/servicio-completo-venta-local", extractPublishedSlugs("servicio-completo-venta-local-cities.ts", "SERVICIO_COMPLETO_VENTA_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/gestoria", extractPublishedSlugs("gestoria-inmobiliaria-local-cities.ts", "GESTORIA_INMOBILIARIA_LOCAL_PUBLISHED_SLUGS")),
  ...venderSlugs.map((s) => `${base}/servicios/vender-piso-sin-agencia-${s}`),
  ...pillarSlugs.map((s) => `${base}${PILLAR_PATHS[s] ?? `/vender-piso-sin-inmobiliaria/${s}`}`),
  ...urlsFor("/servicios/revision-documental-post-arras", extractPublishedSlugs("revision-documental-post-arras-local-cities.ts", "REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/gestion-documental-vendedor", extractPublishedSlugs("gestion-documental-vendedor-local-cities.ts", "GESTION_DOCUMENTAL_VENDEDOR_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/acompanamiento-compra-parking-trastero-local", extractPublishedSlugs("acompanamiento-compra-parking-trastero-local-cities.ts", "PARKING_TRASTERO_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/acompanamiento-alquiler-local", extractPublishedSlugs("acompanamiento-alquiler-local-cities.ts", "ACOMPANAMIENTO_ALQUILER_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/contrato-alquiler-habitacion", extractPublishedSlugs("contrato-alquiler-habitacion-local-cities.ts", "CONTRATO_ALQUILER_HABITACION_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/venta-piso-particular-sin-agencia", extractPublishedSlugs("venta-piso-particular-sin-agencia-local-cities.ts", "VENTA_PISO_PARTICULAR_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/contrato-entre-particulares-local", extractPublishedSlugs("contrato-entre-particulares-local-cities.ts", "CONTRATO_ENTRE_PARTICULARES_LOCAL_PUBLISHED_SLUGS")),
]);

// Legacy URLs con guion (deben redirigir 301)
for (const s of pillarSlugs) {
  urls.add(`${base}/vender-piso-sin-inmobiliaria-${s}`);
}

const hubSrc = readFile("ciudades-hub.ts");
const hubSlugs = [...hubSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
for (const s of hubSlugs) urls.add(`${base}/ciudades/${s}`);

const blogDir = path.join(root, "src/content/blog");
if (fs.existsSync(blogDir)) {
  for (const f of fs.readdirSync(blogDir)) {
    if (f.endsWith(".mdx") || f.endsWith(".md")) {
      urls.add(`${base}/blog/${f.replace(/\.(mdx|md)$/, "")}`);
    }
  }
}

async function checkUrl(url) {
  try {
    const res = await fetch(url, {
      method: "HEAD",
      redirect: "manual",
      signal: AbortSignal.timeout(15000),
    });
    return { url, status: res.status, location: res.headers.get("location") };
  } catch (err) {
    return { url, status: 0, error: String(err.message ?? err) };
  }
}

async function runPool(items, fn, limit) {
  const results = [];
  let i = 0;
  async function worker() {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await fn(items[idx]);
    }
  }
  await Promise.all(Array.from({ length: limit }, worker));
  return results;
}

const list = [...urls].sort();
console.log(`Auditing ${list.length} URLs on ${base}...\n`);

const results = await runPool(list, checkUrl, concurrency);

const ok = results.filter((r) => r.status >= 200 && r.status < 400);
const redirects = results.filter((r) => r.status >= 300 && r.status < 400);
const errors = results.filter((r) => r.status === 0 || r.status >= 400);

console.log(`OK (2xx/3xx handled as ok above): ${ok.length}`);
console.log(`Redirects (3xx): ${redirects.length}`);
console.log(`Errors (4xx/5xx/timeout): ${errors.length}`);

if (redirects.length) {
  console.log("\n--- Redirects ---");
  for (const r of redirects.sort((a, b) => a.url.localeCompare(b.url))) {
    console.log(`${r.status}\t${r.url}\t→ ${r.location ?? "?"}`);
  }
}

if (errors.length) {
  console.log("\n--- FAILURES ---");
  for (const r of errors.sort((a, b) => a.url.localeCompare(b.url))) {
    console.log(`${r.status || "ERR"}\t${r.url}${r.error ? `\t${r.error}` : ""}`);
  }
  process.exitCode = 1;
} else {
  console.log("\nAll URLs OK or redirecting correctly.");
}
