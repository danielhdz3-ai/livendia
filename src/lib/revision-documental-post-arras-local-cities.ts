import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL } from "@/lib/catalog.public";
import {
  getRevisionPostArrasLocalSeoContent,
  type RevisionPostArrasSeoContent,
} from "@/lib/revision-documental-post-arras-local-seo-content";
import {
  REVISION_POST_ARRAS_FAQ_FIXED,
} from "@/lib/revision-documental-post-arras-local-shared";

/**
 * Landings SEO locales: Pack Revisión Documental Post-Arras por ciudad.
 * Rutas: /servicios/revision-documental-post-arras/[slug]
 */

export const REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE = "/servicios/revision-documental-post-arras";

export const REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
];

export type RevisionDocumentalPostArrasLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  finalCtaLead: string;
  seoContent?: RevisionPostArrasSeoContent;
  faq?: readonly { question: string; answer: string }[];
  compraLocalSlug?: string;
  gestoriaSlug?: string;
} & LocalCityLandingFields;

export type RevisionDocumentalPostArrasLocalCityDefinition = Omit<
  RevisionDocumentalPostArrasLocalLandingConfig,
  "path"
>;

export function localRevisionDocumentalPostArrasHref(slug: string): string {
  return `${REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_BASE}/${slug}`;
}

export function toRevisionPostArrasLandingConfig(
  def: RevisionDocumentalPostArrasLocalCityDefinition,
): RevisionDocumentalPostArrasLocalLandingConfig {
  const seoContent = getRevisionPostArrasLocalSeoContent(def.slug);
  const faq = seoContent
    ? [...REVISION_POST_ARRAS_FAQ_FIXED, ...seoContent.faqLocal]
    : undefined;
  return {
    ...def,
    ...(seoContent ? { seoContent } : {}),
    ...(faq ? { faq } : {}),
    slug: def.slug,
    path: localRevisionDocumentalPostArrasHref(def.slug),
    compraLocalSlug: def.compraLocalSlug ?? def.slug,
    gestoriaSlug: def.gestoriaSlug ?? def.slug,
  };
}

export function getRevisionDocumentalPostArrasLocalCity(
  slug: string,
): RevisionDocumentalPostArrasLocalCityDefinition | undefined {
  return REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isRevisionDocumentalPostArrasLocalSlugPublished(slug: string): boolean {
  return REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedRevisionDocumentalPostArrasLocalCities(): RevisionDocumentalPostArrasLocalCityDefinition[] {
  const pub = new Set(REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_PUBLISHED_SLUGS);
  return REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export const REVISION_DOCUMENTAL_POST_ARRAS_LOCAL_CITIES: RevisionDocumentalPostArrasLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroBadge: "Post-arras · Comprador · Madrid",
    heroH1: `Revisión documental post-arras en Madrid: comprueba antes de escriturar — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: `Revisión documental post-arras en Madrid — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Firmaste arras en Madrid? Revisamos derramas, ITE y nota registral antes de escriturar. Informe en 48h — 350 € IVA incl.",
    keywords: [
      "revision documental post arras madrid",
      "revisar documentacion compra piso madrid",
      "derramas comunidad madrid comprador",
      "ite edificio madrid compra",
      "verificar arras antes escritura madrid",
    ],
    heroBullets: [
      "Derramas en Carabanchel, Vallecas, Tetuán y Usera",
      "ITE en edificios anteriores a 1970 en Chamberí y Centro",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Madrid? Contrata el pack por 350 € — informe en 48h.",
    compraLocalSlug: "madrid",
    gestoriaSlug: "madrid",
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Post-arras · Comprador · Barcelona",
    heroH1: `Revisión documental post-arras en Barcelona: comprueba antes de escriturar — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: `Revisión documental post-arras en Barcelona — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Firmaste arras en Barcelona? Verificamos ITE, derramas y nota registral antes de escriturar. Informe en 48h — 350 € IVA incl.",
    keywords: [
      "revision documental post arras barcelona",
      "revisar ite edificio barcelona compra",
      "derramas comunidad barcelona comprador",
      "nota registral barcelona post arras",
      "verificar arras antes escritura barcelona",
    ],
    heroBullets: [
      "ITE estricta en Eixample, Gràcia, Sant Andreu y Nou Barris",
      "Terrazas, trasteros y parkings no inscritos en registro",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Barcelona? Contrata el pack por 350 € — informe en 48h.",
    compraLocalSlug: "barcelona",
    gestoriaSlug: "barcelona",
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    finalCtaLead: "",
    compraLocalSlug: "valencia",
    gestoriaSlug: "valencia",
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    finalCtaLead: "",
    compraLocalSlug: "malaga",
    gestoriaSlug: "malaga",
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    finalCtaLead: "",
    compraLocalSlug: "sevilla",
    gestoriaSlug: "sevilla",
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    finalCtaLead: "",
    compraLocalSlug: "bilbao",
    gestoriaSlug: "bilbao",
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    finalCtaLead: "",
    compraLocalSlug: "zaragoza",
    gestoriaSlug: "zaragoza",
  },
  {
    slug: "alicante",
    city: "Alicante",
    schemaAdministrativeArea: "Comunidad Valenciana",
    finalCtaLead: "",
    compraLocalSlug: "alicante",
    gestoriaSlug: "alicante",
  },
  {
    slug: "granada",
    city: "Granada",
    schemaAdministrativeArea: "Andalucía",
    finalCtaLead: "",
    compraLocalSlug: "granada",
    gestoriaSlug: "granada",
  },
];
