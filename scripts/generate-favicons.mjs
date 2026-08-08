/**
 * Genera favicons PNG desde public/images/logo.png.
 * Ejecutar: node scripts/generate-favicons.mjs
 *
 * Tras regenerar, copia public/icons/favicon-48.png a src/app/favicon.ico
 * con una herramienta ICO, o mantén el favicon.ico ya versionado en git.
 */
import sharp from "sharp";
import { mkdir } from "fs/promises";
import { join } from "path";

const SRC = "public/images/logo.png";
const PUBLIC_ICONS = "public/icons";

const sizes = [
  { file: "src/app/icon.png", size: 512 },
  { file: "src/app/apple-icon.png", size: 180 },
  { file: join(PUBLIC_ICONS, "icon-192.png"), size: 192 },
  { file: join(PUBLIC_ICONS, "icon-512.png"), size: 512 },
  { file: join(PUBLIC_ICONS, "favicon-32.png"), size: 32 },
  { file: join(PUBLIC_ICONS, "favicon-48.png"), size: 48 },
];

await mkdir(PUBLIC_ICONS, { recursive: true });

for (const { file, size } of sizes) {
  await sharp(SRC)
    .resize(size, size, { fit: "cover", position: "centre" })
    .png({ compressionLevel: 9 })
    .toFile(file);
  console.log(`✓ ${file} (${size}px)`);
}

console.log("Favicons generados.");
