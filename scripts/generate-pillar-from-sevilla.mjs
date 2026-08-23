import { readFileSync, writeFileSync, copyFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");

function replaceAll(content, pairs) {
  let c = content;
  for (const [a, b] of pairs) c = c.split(a).join(b);
  return c;
}

function generate(city) {
  const {
    slug,
    City,
    CITY,
    areaLabel,
    region,
    marketId,
    savingsHighlight,
    savingsExample,
    comparePrice,
  } = city;

  const libSrc = resolve(root, "src/lib/pillar-pages/vender-piso-sin-inmobiliaria-sevilla.ts");
  const libDst = resolve(root, `src/lib/pillar-pages/vender-piso-sin-inmobiliaria-${slug}.ts`);
  let lib = readFileSync(libSrc, "utf8");
  lib = replaceAll(lib, [
    ["PILLAR_SEVILLA_SEVILLA_EXTRA", `PILLAR_${CITY}_${CITY}_EXTRA`],
    ["sevilla-mercado", `${slug}-mercado`],
    ["PILLAR_SEVILLA", `PILLAR_${CITY}`],
    ["Sevilla capital y área metropolitana", areaLabel],
    ["Sevilla", City],
    ["sevilla", slug],
    ["sevillanas", `${slug}nas`],
    ["sevillanos", `${slug}nos`],
    ["sevillana", `${slug}na`],
    ["sevillano", `${slug}no`],
    ["/vender-piso-sin-inmobiliaria/sevilla", `/vender-piso-sin-inmobiliaria/${slug}`],
    ["Contenido pilar editorial — /vender-piso-sin-inmobiliaria/sevilla", `Contenido pilar editorial — /vender-piso-sin-inmobiliaria/${slug}`],
  ]);
  lib = lib.replace(/250_000 \? "bg-emerald-50\/50"/, `${savingsHighlight} ? "bg-emerald-50/50"`);
  writeFileSync(libDst, lib);

  const pageSrc = resolve(root, "src/components/pillar-pages/vender-piso-sin-inmobiliaria-sevilla-page.tsx");
  const pageDst = resolve(root, `src/components/pillar-pages/vender-piso-sin-inmobiliaria-${slug}-page.tsx`);
  let page = readFileSync(pageSrc, "utf8");
  page = replaceAll(page, [
    ["VenderPisoSinInmobiliariaSevillaPillarPage", `VenderPisoSinInmobiliaria${City}PillarPage`],
    ["PILLAR_SEVILLA_SEVILLA_EXTRA", `PILLAR_${CITY}_${CITY}_EXTRA`],
    ["sevilla-mercado", `${slug}-mercado`],
    ["PILLAR_SEVILLA", `PILLAR_${CITY}`],
    ["vender-piso-sin-inmobiliaria-sevilla", `vender-piso-sin-inmobiliaria-${slug}`],
    ["Sevilla capital y área metropolitana", areaLabel],
    ["Sevilla", City],
    ["sevillanas", `${slug}nas`],
    ["250_000", String(savingsHighlight)],
  ]);
  page = page.replace(
    /Ejemplo destacado: en un piso de 250\.000 €, ahorras 8\.185 € frente al 3 % \+ IVA o 14\.235 € frente al/,
    `Ejemplo destacado: en un piso de ${comparePrice}, ahorras ${savingsExample.split(" / ")[0]} frente al 3 % + IVA o ${savingsExample.split(" / ")[1]} frente al`,
  );
  writeFileSync(pageDst, page);

  const routeDir = resolve(root, `src/app/vender-piso-sin-inmobiliaria/${slug}`);
  mkdirSync(routeDir, { recursive: true });
  const routeSrc = resolve(root, "src/app/vender-piso-sin-inmobiliaria/sevilla/page.tsx");
  const routeDst = resolve(routeDir, "page.tsx");
  let route = readFileSync(routeSrc, "utf8");
  route = replaceAll(route, [
    ["VenderPisoSinInmobiliariaSevillaPillarPage", `VenderPisoSinInmobiliaria${City}PillarPage`],
    ["VenderPisoSinInmobiliariaSevillaPage", `VenderPisoSinInmobiliaria${City}Page`],
    ["PILLAR_SEVILLA", `PILLAR_${CITY}`],
    ["vender-piso-sin-inmobiliaria-sevilla", `vender-piso-sin-inmobiliaria-${slug}`],
    ["Sevilla", City],
  ]);
  writeFileSync(routeDst, route);

  console.log(`Generated ${slug}`);
}

// generate({ slug: "malaga", ... }); — ya generado
// generate({ slug: "granada", ... }); — ya generado

generate({
  slug: "zaragoza",
  City: "Zaragoza",
  CITY: "ZARAGOZA",
  areaLabel: "Zaragoza capital y comarca",
  region: "Aragón",
  marketId: "zaragoza-mercado",
  savingsHighlight: 200_000,
  comparePrice: "200.000 €",
  savingsExample: "7.260 € / 12.110 €",
});
