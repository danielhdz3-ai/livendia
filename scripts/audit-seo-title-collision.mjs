/**
 * Detecta slugs con varias landings de venta/compra (mismo título meta aproximado).
 * node scripts/audit-seo-title-collision.mjs
 */
import fs from "node:fs";
import path from "node:path";

const lib = path.join(process.cwd(), "src/lib");

const titleExtractors = [
  { service: "vender-piso-sin-agencia", file: "vender-piso-sin-agencia-local-cities.ts", re: /metaTitle:\s*`([^`]+)`/g },
  { service: "servicio-completo-venta-local", file: "servicio-completo-venta-local-cities.ts", re: /metaTitle:\s*`([^`]+)`/g },
  { service: "comprar-piso-sin-agencia", file: "comprar-piso-sin-agencia-local-cities.ts", re: /metaTitle:\s*`([^`]+)`/g },
  { service: "servicio-completo-compra-local", file: "servicio-completo-compra-local-cities.ts", re: /metaTitle:\s*`([^`]+)`/g },
];

function slugsFromPublished(content) {
  const m = content.match(/PUBLISHED_SLUGS[^=]*=\s*\[([\s\S]*?)\]\s*as const/);
  if (!m) return new Set();
  return new Set([...m[1].matchAll(/"([a-z0-9-]+)"/g)].map((x) => x[1]));
}

const bySlug = new Map();

for (const { service, file, re } of titleExtractors) {
  const content = fs.readFileSync(path.join(lib, file), "utf8");
  const published = slugsFromPublished(content);
  const blocks = [...content.matchAll(/slug:\s*"([a-z0-9-]+)"[\s\S]*?metaTitle:\s*`([^`]+)`/g)];
  for (const m of blocks) {
    const slug = m[1];
    if (published.size > 0 && !published.has(slug)) continue;
    const title = m[2].trim();
    if (!bySlug.has(slug)) bySlug.set(slug, []);
    bySlug.get(slug).push({ service, title });
  }
  if (blocks.length === 0) {
    let match;
    const slugBlocks = content.split(/\n  [a-z]/);
    re.lastIndex = 0;
  }
}

console.log("=== Slugs con 2+ servicios compraventa y título similar ===");
for (const [slug, arr] of [...bySlug.entries()].sort((a, b) => b[1].length - a[1].length)) {
  if (arr.length < 2) continue;
  const normalized = arr.map((x) => x.title.toLowerCase().replace(/\s+/g, " ").slice(0, 40));
  const dup = new Set(normalized).size < normalized.length || arr.length >= 3;
  if (!dup && arr.length === 2) {
    const a = normalized[0];
    const b = normalized[1];
    if (!a.includes(b.slice(0, 20)) && !b.includes(a.slice(0, 20))) continue;
  }
  console.log(`\n${slug}:`);
  for (const row of arr) console.log(`  - ${row.service}: ${row.title.slice(0, 72)}`);
}
