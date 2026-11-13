/**
 * En Hobby las landings públicas deben ser estáticas (revalidate = false)
 * para no consumir ISR Reads/Writes con miles de URLs SEO.
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const appDir = path.join(root, "src", "app");
const SKIP_PREFIXES = new Set(["dashboard", "admin", "api", "auth", "inquilino"]);
const bad = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full);
    else if (/\.(tsx|ts|jsx|js)$/.test(name.name)) scan(full);
  }
}

function scan(file) {
  const rel = path.relative(appDir, file).replace(/\\/g, "/");
  const top = rel.split("/")[0];
  if (SKIP_PREFIXES.has(top)) return;
  if (!rel.endsWith("page.tsx")) return;

  const text = fs.readFileSync(file, "utf8");
  const m = text.match(/export const revalidate\s*=\s*(false|\d+)/);
  if (!m) return;
  if (m[1] !== "false") {
    bad.push({ file: path.relative(root, file), sec: m[1] });
  }
}

walk(appDir);

if (bad.length) {
  console.error("Landings públicas deben usar export const revalidate = false:");
  for (const { file, sec } of bad) console.error(`  ${file} → ${sec}`);
  process.exit(1);
}

console.log("OK — landings públicas con revalidate = false.");