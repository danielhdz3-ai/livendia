import fs from "fs";

const venderPath = "src/lib/vender-piso-sin-agencia-bcn-metro-cities.ts";
const outPath = "src/lib/comprar-piso-sin-agencia-bcn-metro-cities.ts";
const src = fs.readFileSync(venderPath, "utf8");

const blocks = src.split(/\r?\n  \{\r?\n    slug: /).slice(1);
const zones = blocks.map((block) => {
  const slug = block.match(/^"([^"]+)"/)?.[1];
  const city = block.match(/\n    city: "([^"]+)"/)?.[1];
  const highlight = block.match(/highlightSalePrice: ([\d_]+)/)?.[1];
  const savings = block.match(/savingsSalePrices: \[([^\]]+)\]/)?.[1];
  const tramites = block.match(/tramitesAreaNote:\s*\n\s*"([^"]+)"/)?.[1];
  const benefits = block.match(/benefitsAreaNote:\s*\n\s*"([^"]+)"/)?.[1];
  const analytics = block.match(/analyticsPlacement: "([^"]+)"/)?.[1];
  return { slug, city, highlight, savings, tramites, benefits, analytics };
});

const header = `import type { ComprarPisoSinAgenciaCityDefinition } from "@/lib/comprar-piso-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { localServicioCompletoCompraHref } from "@/lib/servicio-completo-compra-local-cities";

/** Landings comprar sin agencia — barrios/municipios AMB Barcelona. */
export const COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS = [
${zones.map((z) => `  "${z.slug}",`).join("\n")}
] as const;

export type ComprarPisoSinAgenciaBcnMetroSlug =
  (typeof COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS)[number];

export function isComprarPisoSinAgenciaBcnMetroSlug(
  slug: string,
): slug is ComprarPisoSinAgenciaBcnMetroSlug {
  return (COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS as readonly string[]).includes(slug);
}

function faqZone(zoneLabel: string): ComprarPisoSinAgenciaCityDefinition["faq"] {
  return [
    {
      question: \`¿Puedo comprar piso en \${zoneLabel} sin agencia compradora?\`,
      answer: \`Sí. Si ya has encontrado vivienda en \${zoneLabel} entre particulares o con agencia solo del vendedor, Livendia actúa como gestor del comprador por \${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.: revisión de reserva y arras, documentación y coordinación hasta notaría.\`,
    },
    {
      question: \`¿Qué revisa la gestoría antes de firmar arras en \${zoneLabel}?\`,
      answer:
        "Nota simple, cargas, ITE si procede, certificados de comunidad, plazos de hipoteca y cláusulas de penalización — especialmente en operaciones con prisa en Barcelona y área metropolitana.",
    },
    {
      question: "¿Livendia busca pisos o negocia el precio?",
      answer:
        "No. Somos gestoría inmobiliaria digital del comprador: acompañamiento jurídico-documental sin comisión sobre el precio del inmueble.",
    },
    {
      question: \`¿Gestionáis normativa catalana (cèdula, ITE, CCCat) en \${zoneLabel}?\`,
      answer:
        "Sí. Revisamos arras conforme al Código Civil de Catalunya y perseguimos documentación de comunidad, cèdula d'habitabilitat e ITE antes de que ingreses la señal.",
    },
  ];
}

`;

const cityBlocks = zones
  .map((z) => {
    const slugKey = z.slug.replace(/-/g, " ");
    const metaTitle = `Comprar piso sin agencia en ${z.city} — gestor comprador 890 €`;
    const metaDescription = `¿Compras entre particulares en ${z.city}? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.`;
    const keywords = [
      `comprar piso sin agencia ${z.city.toLowerCase()}`,
      `comprar piso entre particulares ${z.city.toLowerCase()} barcelona`,
      `gestoría compra vivienda ${z.city.toLowerCase()}`,
      `revisar arras ${z.city.toLowerCase()}`,
      `comprar sin inmobiliaria ${z.city.toLowerCase()}`,
    ];
    const tramites =
      z.tramites?.replace(/vendes|Vendes|venta|Venta|vender|Vender|comprador/gi, (m) => {
        const map = { vendes: "compras", Vendes: "Compras", venta: "compra", Venta: "Compra", vender: "comprar", Vender: "Comprar", comprador: "vendedor" };
        return map[m] ?? m;
      }) ??
      `En ${z.city}, acompañamiento del comprador entre particulares con protocolo Livendia.`;
    const benefits =
      z.benefits?.replace(/venta|Venta|vendedor|comisión del 3–5 % sobre el precio de venta/gi, (m) => {
        if (m.toLowerCase().includes("venta")) return "compra";
        if (m.includes("vendedor")) return "comprador";
        if (m.includes("comisión")) return "tarifa plana frente a honorarios sobre el precio de compra";
        return m;
      }) ?? `Due diligence y gestor dedicado al comprador en ${z.city}.`;

    return `  {
    slug: "${z.slug}",
    city: "${z.city}",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "${metaTitle}",
    metaDescription:
      "${metaDescription}",
    keywords: [
${keywords.map((k) => `      "${k}",`).join("\n")}
    ],
    savingsSalePrices: [${z.savings}],
    highlightSalePrice: ${z.highlight},
    tramitesAreaNote:
      "${tramites.replace(/"/g, '\\"')}",
    benefitsAreaNote:
      "${benefits.replace(/"/g, '\\"')}",
    faq: faqZone("${z.city}"),
    analyticsPlacement: "${z.analytics?.replace("vender_piso", "comprar_piso") ?? `comprar_piso_${z.slug.replace(/-/g, "_")}`}",
    gestorCtaPlacement: "${z.analytics?.replace("vender_piso", "comprar_piso") ?? `comprar_piso_${z.slug.replace(/-/g, "_")}`}",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona"),
    showBarcelonaCompraModules: true,
  }`;
  })
  .join(",\n");

const footer = `
export const COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_CITIES: ComprarPisoSinAgenciaCityDefinition[] = [
${cityBlocks},
];
`;

fs.writeFileSync(outPath, header + footer);
console.log("Wrote", outPath, "zones:", zones.length);
