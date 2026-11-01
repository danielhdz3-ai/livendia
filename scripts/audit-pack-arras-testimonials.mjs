/**
 * Slugs pack arras sin testimonios propios en datos (usarían default genérico).
 * node scripts/audit-pack-arras-testimonials.mjs
 */
import { readFileSync } from "node:fs";

const cities = readFileSync("src/lib/pack-comercial-local-cities.ts", "utf8");
function extractPublishedSlugs(source, constName) {
  const block = source.match(new RegExp(`${constName}[\\s\\S]*?\\[([\\s\\S]*?)\\]\\s*as const`))?.[1] ?? "";
  return [...block.matchAll(/"([a-z0-9-]+)"/g)].map((m) => m[1]);
}
const national = ["madrid", "barcelona", "valencia", "malaga", "sevilla"];
const batchFiles = [
  readFileSync("src/lib/pack-comercial-arras-gestion-barcelona-metro.ts", "utf8"),
  ...["batch2", "batch3", "batch4", "batch5", "batch6"].map((b) =>
    readFileSync(`src/lib/pack-comercial-arras-gestion-barcelona-metro-zones-${b}.ts`, "utf8"),
  ),
];
const metroSlugs = batchFiles.flatMap((src) => [...src.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]));
const all = [...new Set([...national, ...metroSlugs])];

const testimonialLib = readFileSync("src/lib/pack-arras-gestion-local-testimonials.ts", "utf8");
const mapped = new Set([
  ...testimonialLib.matchAll(new RegExp('"([a-z0-9-]+)":\\s*\\[', "g")).map((m) => m[1]),
  ...testimonialLib.matchAll(new RegExp("^\\s{2}([a-z0-9-]+):\\s*\\[", "gm")).map((m) => m[1]),
]);

const libSeo = readFileSync("src/lib/pack-comercial-local-seo-content.ts", "utf8");

function hasInlineTestimonials(slug) {
  if (libSeo.includes(`${slug}:`) && libSeo.includes("testimonials:")) {
    const block = libSeo.split(`  ${slug}:`)[1]?.slice(0, 4000) ?? "";
    if (block.includes("testimonials:")) return true;
  }
  for (const src of batchFiles) {
    const i = src.indexOf(`slug: "${slug}"`);
    if (i < 0) continue;
    const chunk = src.slice(i, i + 8000);
    if (chunk.includes("testimonials:")) return true;
  }
  return false;
}

const missing = [];
for (const slug of all.sort()) {
  if (mapped.has(slug) || hasInlineTestimonials(slug)) continue;
  missing.push(slug);
}
console.log("Pack arras slugs total:", all.length);
console.log("Sin testimonio único (default genérico):", missing.length);
console.log(missing.join("\n"));
