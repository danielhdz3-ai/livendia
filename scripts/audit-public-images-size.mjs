/**
 * Evita volver a subir JPEG/PNG enormes a public/images (Fast Origin Transfer en Vercel).
 * Máx. 900 KB por archivo; dimensiones máx. 1920 px.
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const imagesRoot = path.join(root, "public", "images");
const MAX_BYTES = 900_000;
const MAX_EDGE = 1920;

function walk(dir, acc = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (/\.(jpe?g|png)$/i.test(ent.name)) acc.push(full);
  }
  return acc;
}

const bad = [];
for (const file of walk(imagesRoot)) {
  const size = fs.statSync(file).size;
  const meta = await sharp(file).metadata();
  const w = meta.width ?? 0;
  const h = meta.height ?? 0;
  if (size > MAX_BYTES || w > MAX_EDGE || h > MAX_EDGE) {
    bad.push({
      file: path.relative(root, file),
      sizeKb: Math.round(size / 1024),
      dims: `${w}x${h}`,
    });
  }
}

if (bad.length) {
  console.error("Imágenes demasiado pesadas o grandes (ejecuta npm run compress:images):");
  for (const b of bad) console.error(`  ${b.file} — ${b.sizeKb} KB, ${b.dims}`);
  process.exit(1);
}

console.log(`OK — ${walk(imagesRoot).length} imágenes bajo ${MAX_BYTES / 1000} KB y ${MAX_EDGE}px.`);
