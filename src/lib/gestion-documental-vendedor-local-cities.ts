import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  getGestionVendedorSeoContent,
  type GestionVendedorSeoContent,
} from "@/lib/gestion-documental-vendedor-local-seo-content";
import { GESTION_VENDEDOR_FAQ_FIXED } from "@/lib/gestion-documental-vendedor-local-shared";

export const GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE = "/servicios/gestion-documental-vendedor";

/** Publicación gradual: amplía cuando publiques cada ciudad. */
export const GESTION_DOCUMENTAL_VENDEDOR_LOCAL_PUBLISHED_SLUGS: readonly string[] = ["barcelona"];

export type GestionDocumentalVendedorLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  finalCtaLead: string;
  seoContent?: GestionVendedorSeoContent;
  faq?: readonly { question: string; answer: string }[];
  arrasLocalSlug?: string;
  ventaLocalSlug?: string;
  gestoriaSlug?: string;
} & LocalCityLandingFields;

export type GestionDocumentalVendedorLocalCityDefinition = Omit<
  GestionDocumentalVendedorLocalLandingConfig,
  "path"
>;

export function localGestionDocumentalVendedorHref(slug: string): string {
  return `${GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE}/${slug}`;
}

export function toGestionVendedorLandingConfig(
  def: GestionDocumentalVendedorLocalCityDefinition,
): GestionDocumentalVendedorLocalLandingConfig {
  const seoContent = getGestionVendedorSeoContent(def.slug);
  const faq = seoContent
    ? [
        {
          question: GESTION_VENDEDOR_FAQ_FIXED[0].question,
          answer: `No. Este servicio cubre exclusivamente la gestión documental para llegar a escritura: nota simple, comunidad, ITE, certificado energético, hipoteca y demás. Si necesitas redactar el contrato de arras, puedes contratarlo por separado en /servicios/contrato-arras-local/${def.slug} por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incluido.`,
        },
        GESTION_VENDEDOR_FAQ_FIXED[1],
        ...seoContent.faqLocal,
      ]
    : undefined;
  return {
    ...def,
    ...(seoContent ? { seoContent } : {}),
    ...(faq ? { faq } : {}),
    slug: def.slug,
    path: localGestionDocumentalVendedorHref(def.slug),
    arrasLocalSlug: def.arrasLocalSlug ?? def.slug,
    ventaLocalSlug: def.ventaLocalSlug ?? def.slug,
    gestoriaSlug: def.gestoriaSlug ?? def.slug,
  };
}

export function getGestionDocumentalVendedorLocalCity(
  slug: string,
): GestionDocumentalVendedorLocalCityDefinition | undefined {
  return GESTION_DOCUMENTAL_VENDEDOR_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isGestionDocumentalVendedorLocalSlugPublished(slug: string): boolean {
  return GESTION_DOCUMENTAL_VENDEDOR_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedGestionDocumentalVendedorLocalCities(): GestionDocumentalVendedorLocalCityDefinition[] {
  const pub = new Set(GESTION_DOCUMENTAL_VENDEDOR_LOCAL_PUBLISHED_SLUGS);
  return GESTION_DOCUMENTAL_VENDEDOR_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

const cityMeta = (
  slug: string,
  city: string,
  area: string,
  metaTitle: string,
  metaDescription: string,
): Omit<GestionDocumentalVendedorLocalCityDefinition, "slug"> => ({
  city,
  schemaAdministrativeArea: area,
  heroBadge: `Vendedor · Arras a escritura · ${city}`,
  heroH1: `Vendiste tu piso en ${city}: gestor que te prepara todo para escriturar`,
  metaTitle,
  metaDescription,
  finalCtaLead: `Empieza hoy — tu gestor en ${city} listo en 24h`,
  arrasLocalSlug: slug,
  ventaLocalSlug: slug,
  gestoriaSlug: slug,
});

export const GESTION_DOCUMENTAL_VENDEDOR_LOCAL_CITIES: GestionDocumentalVendedorLocalCityDefinition[] = [
  {
    slug: "barcelona",
    ...cityMeta(
      "barcelona",
      "Barcelona",
      "Cataluña",
      `Gestor documental vendedor en Barcelona — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Barcelona y no sabes qué documentos necesitas para escriturar? Un gestor te los gestiona todos. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor barcelona",
      "documentos vender piso barcelona particular",
      "preparar escritura venta barcelona",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "madrid",
    ...cityMeta(
      "madrid",
      "Madrid",
      "Comunidad de Madrid",
      `Gestor documental vendedor en Madrid — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Madrid con comprador particular? Gestor de arras a escritura: hipoteca, comunidad, ITE. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor madrid",
      "documentos vender piso madrid",
      "cancelar hipoteca venta particular madrid",
      "preparar escritura venta madrid",
    ],
  },
  {
    slug: "valencia",
    ...cityMeta(
      "valencia",
      "Valencia",
      "Comunidad Valenciana",
      `Gestor vendedor Valencia: DANA y licencias — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Valencia? Gestor de arras a escritura: cédula, energético, comunidad. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor valencia",
      "documentos vender piso valencia",
      "cedula habitabilidad venta valencia",
      "preparar escritura valencia particular",
    ],
  },
  {
    slug: "malaga",
    ...cityMeta(
      "malaga",
      "Málaga",
      "Andalucía",
      `Gestor vendedor Málaga y Costa del Sol — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Málaga o Marbella? Gestor documental arras a escritura. Comunidad, VFT, ITE. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor malaga",
      "documentos vender piso marbella",
      "preparar escritura costa del sol",
      "vender piso particular malaga documentacion",
    ],
  },
  {
    slug: "sevilla",
    ...cityMeta(
      "sevilla",
      "Sevilla",
      "Andalucía",
      `Gestor vendedor Sevilla: herencias y Triana — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Sevilla entre particulares? Gestor arras a escritura: herencias, derramas, ITE. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor sevilla",
      "documentos vender piso sevilla",
      "herencia venta vivienda sevilla",
      "preparar escritura sevilla particular",
    ],
  },
  {
    slug: "bilbao",
    ...cityMeta(
      "bilbao",
      "Bilbao",
      "País Vasco",
      `Gestor vendedor Bilbao: RENOVE y foral — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Bilbao? Gestor documental arras a escritura: hipoteca, RENOVE, comunidad. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor bilbao",
      "documentos vender piso bilbao",
      "preparar escritura venta bizkaia",
      "gestionar venta particular bilbao",
    ],
  },
  {
    slug: "zaragoza",
    ...cityMeta(
      "zaragoza",
      "Zaragoza",
      "Aragón",
      `Gestor vendedor Zaragoza: PAUs y herencias — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Zaragoza? Gestor arras a escritura: urbanización, herencias, ITE. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor zaragoza",
      "documentos vender piso zaragoza",
      "valdespartera venta documentacion",
      "preparar escritura zaragoza particular",
    ],
  },
  {
    slug: "alicante",
    ...cityMeta(
      "alicante",
      "Alicante",
      "Comunidad Valenciana",
      `Gestor vendedor Costa Blanca — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Alicante o Costa Blanca? Gestor documental arras a escritura. Deudas comunidad. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor alicante",
      "documentos vender piso torrevieja",
      "preparar escritura costa blanca",
      "vender piso particular alicante documentacion",
    ],
  },
  {
    slug: "murcia",
    ...cityMeta(
      "murcia",
      "Murcia",
      "Región de Murcia",
      `Gestor documental vendedor en Murcia — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Murcia con comprador particular? Gestor arras a escritura: comunidad, herencias. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor murcia",
      "documentos vender piso murcia",
      "preparar escritura murcia particular",
      "gestionar venta piso sin agencia murcia",
    ],
  },
  {
    slug: "valladolid",
    ...cityMeta(
      "valladolid",
      "Valladolid",
      "Castilla y León",
      `Gestor vendedor Valladolid: herencias — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Valladolid entre particulares? Gestor arras a escritura: herencia, comunidad. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor valladolid",
      "documentos vender piso valladolid",
      "herencia venta vivienda valladolid",
      "preparar escritura valladolid particular",
    ],
  },
  {
    slug: "granada",
    ...cityMeta(
      "granada",
      "Granada",
      "Andalucía",
      `Gestor vendedor Granada: Albaicín e inquilinos — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste en Granada? Gestor documental arras a escritura: patrimonio, regantes, alquiler. 350 € IVA incl.",
    ),
    keywords: [
      "gestor documental vendedor granada",
      "documentos vender piso granada",
      "albaicin venta documentacion",
      "preparar escritura granada particular",
    ],
  },
];
