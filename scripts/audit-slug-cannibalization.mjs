/**
 * Slugs compartidos entre clústeres locales (canibalización).
 * node scripts/audit-slug-cannibalization.mjs
 */
import fs from "fs";
import path from "path";

const lib = path.join(process.cwd(), "src/lib");
const slugMap = new Map();

function add(service, slug, file) {
  if (!slugMap.has(slug)) slugMap.set(slug, []);
  slugMap.get(slug).push({ service, file });
}

for (const f of fs.readdirSync(lib)) {
  if (!f.endsWith("-local-cities.ts") && !f.startsWith("pack-comercial-arras-gestion-barcelona-metro")) continue;
  const c = fs.readFileSync(path.join(lib, f), "utf8");
  const pubs = [...c.matchAll(/PUBLISHED_SLUGS[^=]*=\s*\[([\s\S]*?)\]\s*(?:as const)?;/g)];
  for (const m of pubs) {
    const slugs = [...m[1].matchAll(/"([a-z0-9-]+)"/g)].map((x) => x[1]);
    const svc = f.replace(/-local-cities\.ts$/, "").replace(/\.ts$/, "");
    for (const s of slugs) add(svc, s, f);
  }
  if (f.startsWith("pack-comercial-arras-gestion-barcelona-metro")) {
    const slugs = [...c.matchAll(/slug:\s*"([a-z0-9-]+)"/g)].map((m) => m[1]);
    for (const s of slugs) add("pack-arras-metro", s, f);
  }
}

const byCount = [...slugMap.entries()].sort((a, b) => b[1].length - a[1].length);
console.log("Total slugs únicos:", byCount.length);
console.log("\n=== 3+ servicios (alta canibalización) ===");
for (const [slug, arr] of byCount.filter(([, v]) => v.length >= 3)) {
  console.log(`${slug}: ${arr.map((x) => x.service).join(" | ")}`);
}
console.log("\n=== 2 servicios (BCN metro / venta) ===");
for (const [slug, arr] of byCount.filter(
  ([s, v]) => v.length === 2 && (s.includes("barcelona") || s.includes("hospitalet") || s.includes("sevilla") || s.includes("madrid")),
)) {
  console.log(`${slug}: ${arr.map((x) => x.service).join(" | ")}`);
}
