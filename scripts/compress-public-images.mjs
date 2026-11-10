/**
 * Comprime JPEG/PNG en public/images para reducir Fast Origin Transfer en Vercel
 * (el optimizador de next/image lee el archivo fuente completo en cada miss de caché).
 *
 * Uso: node scripts/compress-public-images.mjs [--dry-run]
 */
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(import.meta.dirname, "..");
const imagesRoot = path.join(root, "public", "images");
const dryRun = process.argv.includes("--dry-run");

const MAX_EDGE = 1920;
const JPEG_QUALITY = 82;
const SKIP_BELOW_BYTES = 350_000;
const MIN_SAVINGS_RATIO = 0.08;

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(full, acc);
    else if (/\.(jpe?g|png)$/i.test(ent.name)) acc.push(full);
  }
  return acc;
}

function formatMb(n) {
  return `${(n / 1024 / 1024).toFixed(2)} MB`;
}

const files = walk(imagesRoot);
let saved = 0;
let touched = 0;

for (const file of files) {
  const before = fs.statSync(file).size;
  if (before < SKIP_BELOW_BYTES) continue;

  const img = sharp(file, { failOn: "none" });
  const meta = await img.metadata();
  const needsResize =
    (meta.width ?? 0) > MAX_EDGE || (meta.height ?? 0) > MAX_EDGE;

  let pipeline = sharp(file, { failOn: "none" });
  if (needsResize) {
    pipeline = pipeline.resize({
      width: MAX_EDGE,
      height: MAX_EDGE,
      fit: "inside",
      withoutEnlargement: true,
    });
  }

  const ext = path.extname(file).toLowerCase();
  const buffer =
    ext === ".png"
      ? await pipeline.png({ compressionLevel: 9, palette: true }).toBuffer()
      : await pipeline
          .jpeg({ quality: JPEG_QUALITY, mozjpeg: true, chromaSubsampling: "4:2:0" })
          .toBuffer();

  const after = buffer.length;
  if (after >= before * (1 - MIN_SAVINGS_RATIO)) continue;

  touched += 1;
  saved += before - after;
  const rel = path.relative(root, file);
  console.log(`${dryRun ? "[dry] " : ""}${rel}: ${formatMb(before)} → ${formatMb(after)}`);
  if (!dryRun) {
    try {
      const tmp = `${file}.compress-tmp`;
      fs.writeFileSync(tmp, buffer);
      fs.renameSync(tmp, file);
    } catch (err) {
      console.error(`  ERROR escribiendo ${rel}:`, err.message);
    }
  }
}

console.log(
  `\n${dryRun ? "Dry run — " : ""}${touched} archivos, ahorro total: ${formatMb(saved)} (${files.length} revisados).`,
);
