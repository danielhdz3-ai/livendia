import fs from "node:fs";

const cities = [
  ["barcelona", "BARCELONA"],
  ["valencia", "VALENCIA"],
  ["malaga", "MALAGA"],
  ["sevilla", "SEVILLA"],
  ["bilbao", "BILBAO"],
  ["granada", "GRANADA"],
  ["zaragoza", "ZARAGOZA"],
];

for (const [slug, NAME] of cities) {
  const path = `src/lib/pillar-pages/vender-piso-sin-inmobiliaria-${slug}.ts`;
  let c = fs.readFileSync(path, "utf8");
  if (!c.includes("buildPillarCompraventaRelatedLinks")) {
    c = c.replace(
      "import { VENDER_PISO_SIN_INMOBILIARIA_BASE }",
      'import { buildPillarCompraventaRelatedLinks } from "@/lib/pillar-compraventa-canonical-links";\nimport { VENDER_PISO_SIN_INMOBILIARIA_BASE }',
    );
  }
  const startMarker = `export const PILLAR_${NAME}_RELATED`;
  const start = c.indexOf(startMarker);
  const nextExport = c.indexOf(`export const PILLAR_${NAME}_`, start + startMarker.length);
  if (start < 0 || nextExport < 0) {
    console.error("no match", path);
    process.exitCode = 1;
    continue;
  }
  const replacement = `export const PILLAR_${NAME}_RELATED = buildPillarCompraventaRelatedLinks("${slug}");\n\n`;
  c = c.slice(0, start) + replacement + c.slice(nextExport);
  fs.writeFileSync(path, c);
  console.log("ok", slug);
}
