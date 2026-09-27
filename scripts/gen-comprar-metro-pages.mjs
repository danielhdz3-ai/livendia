import fs from "fs";
import path from "path";

const slugs = [
  "barcelona-les-corts",
  "hospitalet-de-llobregat",
  "barcelona-horta-guinardo",
  "barcelona-sant-marti",
  "barcelona-sant-andreu",
  "barcelona-eixample",
  "barcelona-gracia",
  "barcelona-sants-montjuic",
  "badalona",
  "sabadell",
  "barcelona-sarria-sant-gervasi",
  "barcelona-nou-barris",
  "barcelona-ciutat-vella",
  "terrassa",
  "cornella-de-llobregat",
  "sant-cugat-del-valles",
  "esplugues-de-llobregat",
  "castelldefels",
  "gava",
  "sant-adria-de-besos",
  "sant-boi-de-llobregat",
  "sant-joan-despi",
  "mollet-del-valles",
  "barcelona-poblenou",
  "barcelona-born",
];

const template = (slug) => `import {
  ComprarPisoMetroPage,
  comprarPisoMetroPageMetadata,
} from "@/lib/comprar-piso-sin-agencia-metro-page";
import type { ComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";

const slug = "${slug}" as ComprarPisoSinAgenciaBcnMetroSlug;

export const revalidate = 300;
export const metadata = comprarPisoMetroPageMetadata(slug);

export default function Page() {
  return <ComprarPisoMetroPage slug={slug} />;
}
`;

for (const slug of slugs) {
  const dir = path.join("src/app/servicios", `comprar-piso-sin-agencia-${slug}`);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "page.tsx"), template(slug));
}
console.log("Created", slugs.length, "metro pages");
