/**
 * Quita ISR en landings públicas: revalidate = false → HTML estático en CDN (no cuenta ISR Reads).
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const appDir = path.join(root, "src", "app");
const SKIP_PREFIXES = ["dashboard", "admin", "api", "auth", "inquilino"];

const OLD_BLOCK =
  /\/\*\*[\s\S]*?ISR: revalida[\s\S]*?\*\/\s*\nexport const revalidate = \d+;\s*\n?/g;

const REPLACEMENT = `/** Estático hasta el siguiente deploy (evita ISR Reads/Writes en Hobby). */\nexport const revalidate = false;\n\n`;

let changed = 0;

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full);
    else if (/page\.tsx$/.test(ent.name)) maybePatch(full);
  }
}

function maybePatch(file) {
  const rel = path.relative(appDir, file).replace(/\\/g, "/");
  const top = rel.split("/")[0];
  if (SKIP_PREFIXES.includes(top)) return;

  let src = fs.readFileSync(file, "utf8");
  if (!/export const revalidate = \d+/.test(src) && !src.includes("revalidate = 86400")) return;

  const next = src
    .replace(OLD_BLOCK, REPLACEMENT)
    .replace(/export const revalidate = 86400;\s*\n/g, REPLACEMENT)
    .replace(/export const revalidate = \d+;\s*\n/g, (m) => {
      if (m.includes("false")) return m;
      return `export const revalidate = false;\n`;
    });

  if (next !== src) {
    fs.writeFileSync(file, next);
    changed += 1;
    console.log("patched", rel);
  }
}

walk(appDir);
console.log(`\n${changed} páginas → revalidate false`);
