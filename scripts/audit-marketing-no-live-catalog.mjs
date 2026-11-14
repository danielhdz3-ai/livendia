/**
 * Evita await getPublicServices() en marketing (debe ser getMarketingPublicServices).
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const bad = [];

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full);
    else if (/\.(tsx|ts)$/.test(ent.name)) check(full);
  }
}

function check(file) {
  const rel = path.relative(root, file);
  if (rel.includes("dashboard")) return;
  if (rel.includes(String.raw`src\app\api`)) return;
  const text = fs.readFileSync(file, "utf8");
  if (/\bawait getPublicServices\s*\(/.test(text) && !text.includes("live: true")) {
    bad.push(rel);
  }
  if (/\bgetPublicServices\s*\(\s*\)/.test(text) && !text.includes("getMarketingPublicServices")) {
    if (rel.includes("catalog.ts")) return;
    if (!text.includes("live: true") && text.includes("getPublicServices")) {
      if (!bad.includes(rel)) bad.push(rel);
    }
  }
}

walk(path.join(root, "src", "app"));
walk(path.join(root, "src", "components"));

if (bad.length) {
  console.error("Usar getMarketingPublicServices en marketing:");
  bad.forEach((f) => console.error(" ", f));
  process.exit(1);
}
console.log("OK — marketing sin getPublicServices() en vivo.");