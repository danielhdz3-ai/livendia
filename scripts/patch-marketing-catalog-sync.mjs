/**
 * Marketing: getMarketingPublicServices() síncrono (cero red en build/edge).
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const SKIP = new Set([
  path.join(root, "src", "app", "dashboard", "servicios", "page.tsx"),
]);

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (/\.(tsx|ts)$/.test(ent.name)) acc.push(full);
  }
  return acc;
}

let n = 0;
for (const file of [...walk(path.join(root, "src", "app")), ...walk(path.join(root, "src", "components"))]) {
  if (SKIP.has(file)) continue;
  let src = fs.readFileSync(file, "utf8");
  if (!src.includes("getPublicServices")) continue;
  if (src.includes("live: true")) continue;

  const next = src
    .replace(
      /import\s*\{\s*getPublicServices\s*,\s*groupByCategory\s*\}\s*from\s*"@\/lib\/catalog";/g,
      'import { getMarketingPublicServices, groupByCategory } from "@/lib/catalog";',
    )
    .replace(
      /import\s*\{\s*getPublicServices\s*\}\s*from\s*"@\/lib\/catalog";/g,
      'import { getMarketingPublicServices } from "@/lib/catalog";',
    )
    .replace(/await getPublicServices\(\)/g, "getMarketingPublicServices()")
    .replace(/getPublicServices\(\)/g, "getMarketingPublicServices()");

  if (next !== src) {
    fs.writeFileSync(file, next);
    n += 1;
    console.log(path.relative(root, file));
  }
}
console.log(`\n${n} ficheros → getMarketingPublicServices()`);