/**
 * Evita repetir el bloqueo Vercel Hobby por ISR writes (402 DEPLOYMENT_DISABLED).
 * Las landings públicas deben usar revalidate >= 86400 (24 h).
 */
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const appDir = path.join(root, "src", "app");
const MIN_SECONDS = 86400;
const bad = [];

function walk(dir) {
  for (const name of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, name.name);
    if (name.isDirectory()) walk(full);
    else if (/\.(tsx|ts|jsx|js)$/.test(name.name)) scan(full);
  }
}

function scan(file) {
  const text = fs.readFileSync(file, "utf8");
  const re = /export const revalidate\s*=\s*(\d+)/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    const sec = Number(m[1]);
    if (sec < MIN_SECONDS) {
      bad.push({ file: path.relative(root, file), sec });
    }
  }
}

walk(appDir);

if (bad.length) {
  console.error("ISR revalidate demasiado bajo (mínimo 86400 s):");
  for (const { file, sec } of bad) console.error(`  ${file} → ${sec}`);
  process.exit(1);
}

console.log(`OK — revalidate público >= ${MIN_SECONDS}s en src/app.`);
