import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..");
const files = [
  "src/lib/administracion-alquiler-metro-landings.ts",
  "src/lib/administracion-alquiler-how-images.ts",
  "src/lib/administracion-alquiler-metro-zone-images.ts",
  "src/lib/administracion-alquiler-local-cities.ts",
  "src/components/administracion-alquiler-local-seo-landing.tsx",
  "src/components/administracion-alquiler-metro-seo-landing.tsx",
];

const refs = new Set();
for (const rel of files) {
  const src = fs.readFileSync(path.join(root, rel), "utf8");
  for (const m of src.matchAll(/"(\/images\/[^"]+)"/g)) refs.add(m[1]);
  for (const m of src.matchAll(/metroBarcelonaZoneImage\("([^"]+)"\)/g)) {
    refs.add(`/images/zonas barcelona/${m[1]}`);
  }
}

const missing = [];
for (const ref of [...refs].sort()) {
  const fp = path.join(root, "public", ref.replace(/^\//, ""));
  if (!fs.existsSync(fp)) missing.push(ref);
}

console.log("REFERENCES:", refs.size);
console.log("MISSING:", missing.length);
for (const p of missing) console.log(" -", p);
process.exit(missing.length ? 1 : 0);
