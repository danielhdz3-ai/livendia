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
  "valencia",
  "malaga",
  "sevilla",
  "bilbao",
  "zaragoza",
  "alicante",
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
    heroBadge: "Post-arras · Comprador · Valencia",
    heroH1: `Revisión documental post-arras en Valencia: comprueba antes de escriturar — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: `Revisión documental post-arras en Valencia — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Firmaste arras en Valencia? Revisamos DANA, derramas, licencias y nota registral antes de escriturar. Informe en 48h — 350 € IVA incl.",
    keywords: [
      "revision documental post arras valencia",
      "revisar documentacion compra piso valencia",
      "dana valencia compra vivienda arras",
      "licencia primera ocupacion valencia",
      "verificar arras antes escritura valencia",
    ],
    heroBullets: [
      "Daños DANA en Paiporta, Sedaví, Catarroja y área sur",
      "Primera ocupación en obra nueva 2000-2010",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Valencia? Contrata el pack por 350 € — informe en 48h.",
    compraLocalSlug: "valencia",
    gestoriaSlug: "valencia",
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    heroBadge: "Post-arras · Comprador · Málaga y Costa del Sol",
    heroH1: `Revisión documental post-arras en Málaga: comprueba antes de escriturar — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: `Revisión documental post-arras en Málaga — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Firmaste arras en Málaga o Costa del Sol? Revisamos derramas, VFT y nota registral antes de escriturar. Informe en 48h — 350 € IVA incl.",
    keywords: [
      "revision documental post arras malaga",
      "comprar piso marbella revisar documentacion",
      "derramas urbanizacion costa del sol",
      "licencia turistica vft malaga compra",
      "verificar arras extranjero malaga",
    ],
    heroBullets: [
      "Compradores UK, Alemania y nórdicos en Marbella y Estepona",
      "Derramas en urbanizaciones con piscina y seguridad",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Málaga o la Costa del Sol? Contrata el pack por 350 € — informe en 48h.",
    compraLocalSlug: "malaga",
    gestoriaSlug: "malaga",
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    heroBadge: "Post-arras · Comprador · Sevilla",
    heroH1: `Revisión documental post-arras en Sevilla: comprueba antes de escriturar — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: `Revisión documental post-arras en Sevilla — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Firmaste arras en Sevilla? Revisamos derramas en Triana, herencias y licencias antes de escriturar. Informe en 48h — 350 € IVA incl.",
    keywords: [
      "revision documental post arras sevilla",
      "revisar documentacion compra piso sevilla",
      "derramas triana casco antiguo comprador",
      "herencia compra vivienda sevilla arras",
      "verificar arras antes escritura sevilla",
    ],
    heroBullets: [
      "Derramas en Triana, Macarena y Casco Antiguo",
      "Herencias y titularidad registral pendiente",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Sevilla? Contrata el pack por 350 € — informe en 48h.",
    compraLocalSlug: "sevilla",
    gestoriaSlug: "sevilla",
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    heroBadge: "Post-arras · Comprador · Gran Bilbao",
    heroH1: `Revisión documental post-arras en Bilbao: comprueba antes de escriturar — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: `Revisión documental post-arras en Bilbao — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} | Livendia`,
    metaDescription:
      "¿Firmaste arras en Bilbao? Revisamos régimen foral, derramas RENOVE e ITE antes de escriturar. Informe en 48h — 350 € IVA incl.",
    keywords: [
      "revision documental post arras bilbao",
      "revisar nota registral bilbao compra",
      "derramas renovo bilbao comunidad",
      "regimen foral vasco compra vivienda",
      "verificar arras antes escritura bilbao",
    ],
    heroBullets: [
      "Régimen foral y cargas en nota registral",
      "Derramas RENOVE en Casco Viejo e Indautxu",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Bilbao? Contrata el pack por 350 € — informe en 48h.",
    compraLocalSlug: "bilbao",
    gestoriaSlug: "bilbao",
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    heroBadge: "Post-arras · Comprador · Zaragoza",
    heroH1: `Pack post-arras en Zaragoza: audita PAUs, ITE y herencias antes de notaría — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: "Verificar arras en Zaragoza: PAUs y herencias — 350 € | Livendia",
    metaDescription:
      "¿Firmaste arras en Zaragoza? Revisamos cargas en PAUs, ITE del Casco y herencias antes de escriturar. Informe 48h — 350 € IVA incl.",
    keywords: [
      "revision post arras zaragoza",
      "cargas urbanizacion valdespartera compra",
      "revisar documentacion compra piso zaragoza",
      "herencia compra vivienda zaragoza arras",
      "verificar arras antes escritura zaragoza",
    ],
    heroBullets: [
      "PAUs: Valdespartera, Parque Goya, Rosales del Canal",
      "Herencias familiares y titularidad registral",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Zaragoza? Contrata el pack por 350 € — informe en 48h.",
    compraLocalSlug: "zaragoza",
    gestoriaSlug: "zaragoza",
  },
  {
    slug: "alicante",
    city: "Alicante",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroBadge: "Post-arras · Comprador · Costa Blanca",
    heroH1: `Auditoría post-arras en Alicante y Costa Blanca: comunidad, VFT y registro — ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}`,
    metaTitle: "Post-arras Costa Blanca: deudas comunidad y VFT — 350 € | Livendia",
    metaDescription:
      "¿Firmaste arras en Alicante o Costa Blanca? Revisamos deudas de urbanización, licencia VFT y registro. Informe 48h — 350 € IVA incl.",
    keywords: [
      "revision post arras alicante",
      "comprar piso torrevieja revisar documentacion",
      "deudas comunidad costa blanca comprador",
      "licencia turistica vft alicante compra",
      "verificar arras benidorm altea",
    ],
    heroBullets: [
      "Torrevieja, Benidorm, Altea y Jávea",
      "Deudas de comunidad del vendedor no residente",
      "Informe PDF + llamada de veredicto en 48 h",
    ],
    finalCtaLead:
      "¿Ya firmaste arras en Alicante o la Costa Blanca? Contrata el pack por 350 € — informe en 48h.",
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
