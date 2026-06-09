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
export const GESTION_DOCUMENTAL_VENDEDOR_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "barcelona",
  "madrid",
  "valencia",
  "malaga",
  "sevilla",
  "bilbao",
  "zaragoza",
  "alicante",
  "murcia",
  "valladolid",
  "granada",
];

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
      "¿Vendiste tu piso en Barcelona sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
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
      "¿Vendiste tu piso en Madrid sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor madrid",
      "documentos vender piso madrid particular",
      "preparar escritura venta madrid",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "valencia",
    ...cityMeta(
      "valencia",
      "Valencia",
      "Comunidad Valenciana",
      `Gestor documental vendedor en Valencia — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Valencia sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor valencia",
      "documentos vender piso valencia particular",
      "preparar escritura venta valencia",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "malaga",
    ...cityMeta(
      "malaga",
      "Málaga",
      "Andalucía",
      `Gestor documental vendedor en Málaga — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Málaga sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor malaga",
      "documentos vender piso malaga particular",
      "preparar escritura venta malaga",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "sevilla",
    ...cityMeta(
      "sevilla",
      "Sevilla",
      "Andalucía",
      `Gestor documental vendedor en Sevilla — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Sevilla sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor sevilla",
      "documentos vender piso sevilla particular",
      "preparar escritura venta sevilla",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "bilbao",
    ...cityMeta(
      "bilbao",
      "Bilbao",
      "País Vasco",
      `Gestor documental vendedor en Bilbao — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Bilbao sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor bilbao",
      "documentos vender piso bilbao particular",
      "preparar escritura venta bilbao",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "zaragoza",
    ...cityMeta(
      "zaragoza",
      "Zaragoza",
      "Aragón",
      `Gestor documental vendedor en Zaragoza — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Zaragoza sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor zaragoza",
      "documentos vender piso zaragoza particular",
      "preparar escritura venta zaragoza",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "alicante",
    ...cityMeta(
      "alicante",
      "Alicante",
      "Comunidad Valenciana",
      `Gestor documental vendedor en Alicante — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Alicante sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor alicante",
      "documentos vender piso alicante particular",
      "preparar escritura venta alicante",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "murcia",
    ...cityMeta(
      "murcia",
      "Murcia",
      "Región de Murcia",
      `Gestor documental vendedor en Murcia — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Murcia sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor murcia",
      "documentos vender piso murcia particular",
      "preparar escritura venta murcia",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "valladolid",
    ...cityMeta(
      "valladolid",
      "Valladolid",
      "Castilla y León",
      `Gestor documental vendedor en Valladolid — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Valladolid sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor valladolid",
      "documentos vender piso valladolid particular",
      "preparar escritura venta valladolid",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
  {
    slug: "granada",
    ...cityMeta(
      "granada",
      "Granada",
      "Andalucía",
      `Gestor documental vendedor en Granada — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
      "¿Vendiste tu piso en Granada sin agencia? Un gestor Livendia gestiona toda la documentación para escriturar. 350 € IVA incl. Arras a escritura.",
    ),
    keywords: [
      "gestor documental vendedor granada",
      "documentos vender piso granada particular",
      "preparar escritura venta granada",
      "gestionar documentacion venta piso sin agencia",
    ],
  },
];
