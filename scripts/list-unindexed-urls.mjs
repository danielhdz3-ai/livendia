/**
 * Genera URLs del sitemap (desde PUBLISHED_SLUGS) y las compara con el export GSC Performance.
 * Uso: node scripts/list-unindexed-urls.mjs
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const lib = path.join(root, "src/lib");
const base = "https://livendia.com";

const PERF_XLSX =
  process.env.GSC_PERF ??
  "C:/Users/Daniel HDZ/Desktop/https___livendia.com_-Performance-on-Search-2026-08-11 (2).xlsx";

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
  ...extractPublishedSlugs("vender-piso-sin-inmobiliaria-local-cities.ts", "VENDER_PISO_SIN_INMOBILIARIA_PUBLISHED_SLUGS").map(
    (s) => `${base}${PILLAR_PATHS[s] ?? `/vender-piso-sin-inmobiliaria/${s}`}`,
  ),
  ...urlsFor("/servicios/revision-documental-post-arras", extractPublishedSlugs("revision-documental-post-arras-local-cities.ts", "REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/gestion-documental-vendedor", extractPublishedSlugs("gestion-documental-vendedor-local-cities.ts", "GESTION_DOCUMENTAL_VENDEDOR_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/acompanamiento-compra-parking-trastero-local", extractPublishedSlugs("acompanamiento-compra-parking-trastero-local-cities.ts", "PARKING_TRASTERO_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/acompanamiento-alquiler-local", extractPublishedSlugs("acompanamiento-alquiler-local-cities.ts", "ACOMPANAMIENTO_ALQUILER_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/contrato-alquiler-habitacion", extractPublishedSlugs("contrato-alquiler-habitacion-local-cities.ts", "CONTRATO_ALQUILER_HABITACION_LOCAL_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/venta-piso-particular-sin-agencia", extractPublishedSlugs("venta-piso-particular-sin-agencia-local-cities.ts", "VENTA_PISO_PARTICULAR_PUBLISHED_SLUGS")),
  ...urlsFor("/servicios/contrato-entre-particulares-local", extractPublishedSlugs("contrato-entre-particulares-local-cities.ts", "CONTRATO_ENTRE_PARTICULARES_LOCAL_PUBLISHED_SLUGS")),
]);

// ciudades hub
const hubSrc = readFile("ciudades-hub.ts");
const hubSlugs = [...hubSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
for (const s of hubSlugs) urls.add(`${base}/ciudades/${s}`);

// blog
const blogDir = path.join(root, "src/content/blog");
if (fs.existsSync(blogDir)) {
  for (const f of fs.readdirSync(blogDir)) {
    if (f.endsWith(".mdx") || f.endsWith(".md")) {
      urls.add(`${base}/blog/${f.replace(/\.(mdx|md)$/, "")}`);
    }
  }
}

let gscPages = new Set();
try {
  const require = createRequire(import.meta.url);
  // dynamic import xlsx if available via python fallback
} catch {}

// Python subprocess for GSC pages (openpyxl already installed)
import { spawnSync } from "node:child_process";
const py = spawnSync(
  "python",
  [
    "-c",
    `
import openpyxl, sys, json
path = sys.argv[1]
wb = openpyxl.load_workbook(path, read_only=True, data_only=True)
ws = wb['Páginas']
urls = []
for r in ws.iter_rows(min_row=2, values_only=True):
    if r and r[0]:
        u = str(r[0]).strip().rstrip('/')
        urls.append(u)
wb.close()
print(json.dumps(urls))
`,
    PERF_XLSX,
  ],
  { encoding: "utf8" },
);

if (py.status === 0) {
  gscPages = new Set(JSON.parse(py.stdout.trim()));
} else {
  console.error("No se pudo leer GSC Performance:", py.stderr);
  process.exit(1);
}

function norm(u) {
  return u.replace(/\/$/, "");
}

const sitemapList = [...urls].map(norm).sort();
const gscNorm = new Set([...gscPages].map(norm));

const notInGsc = sitemapList.filter((u) => !gscNorm.has(u));
const inGscOnly = [...gscNorm].filter((u) => u.startsWith(base) && !urls.has(u) && !sitemapList.includes(u));

console.log(`Sitemap (indexables): ${sitemapList.length}`);
console.log(`GSC Performance páginas (3m): ${gscNorm.size}`);
console.log(`Probablemente sin impresiones / no indexadas: ${notInGsc.length}`);
console.log("---");
for (const u of notInGsc) console.log(u);

if (inGscOnly.length) {
  console.error("\n# En GSC pero no en sitemap local (revisar):");
  for (const u of inGscOnly.sort()) console.error(u);
}
