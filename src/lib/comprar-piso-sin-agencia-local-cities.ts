import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { enrichWithCityMarketProfile } from "@/lib/attach-local-city-market-profile";
import { COMPRAR_PISO_DIFFERENTIATION } from "@/lib/comprar-piso-sin-agencia-differentiation";
import { COMPRAR_PISO_BCN_METRO_DIFFERENTIATION } from "@/lib/comprar-piso-sin-agencia-bcn-metro-differentiation";
import { getComprarBcnZoneEnrichment } from "@/lib/comprar-piso-sin-agencia-bcn-zone-enrichment";
import { isComprarPisoSinAgenciaBcnMetroSlug } from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import {
  COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_CITIES,
  COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS,
} from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";
import {
  buildAgencySavingsRows,
  formatEur,
  type AgencySavingsRow,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import {
  localServicioCompletoCompraHref,
  isServicioCompletoCompraLocalSlugPublished,
} from "@/lib/servicio-completo-compra-local-cities";

export { buildAgencySavingsRows, formatEur, type AgencySavingsRow };

export const COMPRA_PARTICULAR_TRAMITES = [
  {
    title: "Contrato de reserva",
    body: "Revisamos señal, plazos, condiciones de desistimiento y honorarios encadenados antes de que transfieras dinero al vendedor o a una agencia.",
  },
  {
    title: "Contrato de arras",
    body: "Penitenciales o confirmatorias: penalizaciones, plazos de hipoteca, cargas y objeto del contrato alineados con lo que viste en la visita.",
  },
  {
    title: "Nota simple y cargas registrales",
    body: "Titularidad real, hipotecas, embargos y coherencia entre vendedor y inmueble antes de comprometer la operación.",
  },
  {
    title: "Documentación de la comunidad",
    body: "Derramas aprobadas, obras pendientes, certificado de deuda cero y estatutos que afectan a tu uso del piso.",
  },
  {
    title: "Certificados e ITE si procede",
    body: "Cédula de habitabilidad, certificado energético e inspección técnica del edificio en operaciones entre particulares con prisa.",
  },
  {
    title: "Coordinación con notaría",
    body: "Checklist pre-escritura, calendario con vendedor e hipoteca, y revisión de que lo pactado coincide con lo que firmas.",
  },
] as const;

export type ComprarPisoSinAgenciaCopyOverrides = {
  heroBadge?: string;
  heroH1?: string;
  /** Usa {{price}} para insertar la tarifa en runtime. */
  heroLead?: string;
  heroBullets?: readonly string[];
  savingsIntro?: string;
  benefitsFourthTitle?: string;
  benefitsFourthText?: string;
  disclaimer?: string;
  finalCtaTitle?: string;
  /** Usa {{price}} para insertar la tarifa en runtime. */
  finalCtaSubtitle?: string;
  faqTitle?: string;
  faqSubtitle?: string;
  waPrefill?: string;
  jsonLdServiceName?: string;
  imageAlt?: string;
};

export type ComprarPisoSinAgenciaLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  savingsSalePrices: readonly number[];
  highlightSalePrice: number;
  tramitesAreaNote: string;
  benefitsAreaNote: string;
  faq: readonly { question: string; answer: string }[];
  analyticsPlacement: string;
  gestorCtaPlacement: string;
  optionalLocalCompraHref?: string;
  copy?: ComprarPisoSinAgenciaCopyOverrides;
  /** Módulos intro + 5 pasos + gestores (Barcelona y zonas AMB). */
  showBarcelonaCompraModules?: boolean;
  barcelonaZoneIntro?: {
    eyebrow: string;
    title: string;
    paragraphs: readonly string[];
  };
} & Pick<
  import("@/lib/local-city-landing-fields").LocalCityLandingFields,
  "localMarketInsight" | "localPriceSnapshot" | "localNeighborhoods" | "localServiceNotes"
>;

export type ComprarPisoSinAgenciaCityDefinition = Omit<ComprarPisoSinAgenciaLandingConfig, "path">;

export const COMPRAR_PISO_SIN_AGENCIA_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "malaga",
  "sevilla",
  "bilbao",
  ...COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS,
];

export {
  COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS,
  isComprarPisoSinAgenciaBcnMetroSlug,
} from "@/lib/comprar-piso-sin-agencia-bcn-metro-cities";

export function interpolateComprarPisoCopy(template: string, priceLabel: string): string {
  return template.replace(/\{\{price\}\}/g, priceLabel);
}

export function localComprarPisoSinAgenciaHref(slug: string): string {
  return `/servicios/comprar-piso-sin-agencia-${slug}`;
}

function faqForCity(city: string): ComprarPisoSinAgenciaLandingConfig["faq"] {
  return [
    {
      question: `¿Puedo comprar un piso sin agencia inmobiliaria en ${city}?`,
      answer: `Sí. Muchas operaciones son entre particulares (Idealista, Milanuncios, recomendación) o con agencia solo del vendedor. Livendia actúa como gestor del comprador: revisa reserva y arras, ordena documentación y te acompaña hasta escritura por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl., sin comisión sobre el precio del inmueble.`,
    },
    {
      question: `¿Qué trámites necesito para comprar entre particulares en ${city}?`,
      answer: `Revisión de reserva y arras, nota simple, certificados de comunidad, cédula y energético, ITE si el edificio lo exige, coordinación con banco e hipoteca y firma en notaría. Livendia centraliza el protocolo con tarifa plana de ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    },
    {
      question: `¿Cuánto cuesta frente a honorarios de agencia compradora en ${city}?`,
      answer: `Algunas agencias o intermediarios piden porcentaje sobre el precio de compra más IVA. Livendia cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} fijos: en la tabla de esta página comparas frente a un 3 % o 5 % orientativo sobre el precio del piso.`,
    },
    {
      question: "¿Vale la pena firmar la reserva que me pasa el vendedor sin revisar?",
      answer:
        "No te la juegues: plazos de hipoteca imposibles, penalizaciones desequilibradas o lagunas sobre cargas suelen aparecer en plantillas genéricas. Un gestor legal de Livendia revisa o redacta a medida antes de ingresar la señal.",
    },
    {
      question: "¿Livendia busca pisos o negocia el precio por mí?",
      answer:
        "No. No somos portal ni agencia de captación. El servicio es acompañamiento jurídico-documental del comprador cuando ya has encontrado vivienda y quieres comprar sin depender solo del contrato del vendedor.",
    },
  ];
}

export const COMPRAR_PISO_SIN_AGENCIA_CITIES: ComprarPisoSinAgenciaCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    metaTitle: "Comprar piso sin agencia en Madrid | Gestor comprador Livendia",
    metaDescription:
      "¿Compras piso entre particulares en Madrid? Gestor en tu bando: reserva, arras y escritura revisadas. Tarifa plana 890 € IVA incl. Sin comisión sobre el precio del inmueble.",
    keywords: [
      "comprar piso sin agencia madrid",
      "comprar piso entre particulares madrid",
      "gestor compra vivienda madrid",
      "revisar contrato reserva madrid",
      "tramites compra piso particular madrid",
    ],
    savingsSalePrices: [180_000, 220_000, 250_000, 300_000, 350_000, 400_000, 500_000],
    highlightSalePrice: 300_000,
    tramitesAreaNote:
      "En Madrid capital y corona (Chamberí, Retiro, Tetuán, Vallecas, Móstoles…), el servicio completo de compra Livendia cubre el tramo donde más se pierde si firmas a ciegas: desde la reserva hasta la escritura en notaría.",
    benefitsAreaNote:
      "Due diligence registral, comunidad, arras y coordinación pre-escritura en Madrid con un gestor dedicado al comprador.",
    faq: faqForCity("Madrid"),
    analyticsPlacement: "comprar_piso_madrid",
    gestorCtaPlacement: "comprar_piso_madrid",
    optionalLocalCompraHref: localServicioCompletoCompraHref("madrid"),
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Barcelona — 890 € IVA incl.",
    metaDescription:
      "¿Compras piso entre particulares en Barcelona? Reserva, arras e ITE revisadas. Eixample, Gràcia, Poblenou, L'Hospitalet. 890 € IVA incl., gestor del comprador.",
    keywords: [
      "comprar piso sin agencia barcelona",
      "comprar piso entre particulares barcelona",
      "gestor compra vivienda barcelona",
      "revisar arras barcelona",
      "compraventa particulares barcelona",
    ],
    savingsSalePrices: [200_000, 280_000, 320_000, 400_000, 450_000, 500_000, 600_000],
    highlightSalePrice: 400_000,
    tramitesAreaNote:
      "En Barcelona y área metropolitana (Eixample, Gràcia, Sant Martí, L'Hospitalet, Badalona…), un gestor legal experto revisa reserva, arras, ITE y documentación de comunidad antes de que ingreses la señal.",
    benefitsAreaNote:
      "Checklist documental, estado del edificio, contratos bilingües y coordinación pre-escritura en Barcelona.",
    faq: faqForCity("Barcelona"),
    analyticsPlacement: "comprar_piso_barcelona",
    gestorCtaPlacement: "comprar_piso_barcelona",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: "Comprar piso sin agencia en Valencia | Gestor comprador Livendia",
    metaDescription:
      "¿Compras entre particulares en Valencia? Revisión de reserva, arras y trámites hasta notaría. 890 € IVA incl. Gestor fijo, sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia valencia",
      "comprar piso entre particulares valencia",
      "gestor compra vivienda valencia",
      "revisar arras valencia",
    ],
    savingsSalePrices: [120_000, 150_000, 180_000, 220_000, 250_000, 280_000, 350_000],
    highlightSalePrice: 220_000,
    tramitesAreaNote:
      "En Valencia capital y l'Horta (Ruzafa, Benimaclet, Mislata, Torrent…), acompañamiento legal del comprador con protocolo Livendia de principio a fin.",
    benefitsAreaNote: "Registral, comunidad, arras y calendario con vendedor e hipoteca en Valencia.",
    faq: faqForCity("Valencia"),
    analyticsPlacement: "comprar_piso_valencia",
    gestorCtaPlacement: "comprar_piso_valencia",
    optionalLocalCompraHref: localServicioCompletoCompraHref("valencia"),
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: "Comprar piso sin agencia en Málaga | Gestor comprador Livendia",
    metaDescription:
      "Compra entre particulares en Málaga y Costa del Sol: reserva y arras bajo control. 890 € IVA incl. Due diligence antes de la señal.",
    keywords: [
      "comprar piso sin agencia malaga",
      "comprar piso entre particulares malaga",
      "gestor compra vivienda malaga",
    ],
    savingsSalePrices: [140_000, 180_000, 220_000, 260_000, 300_000, 350_000, 450_000],
    highlightSalePrice: 260_000,
    tramitesAreaNote:
      "En Málaga capital y área (Teatinos, El Palo, Torremolinos, Rincón…), revisión documental adaptada a segunda residencia y operaciones con prisa.",
    benefitsAreaNote: "Arras, comunidad, certificados y coordinación pre-escritura en Málaga.",
    faq: faqForCity("Málaga"),
    analyticsPlacement: "comprar_piso_malaga",
    gestorCtaPlacement: "comprar_piso_malaga",
    optionalLocalCompraHref: localServicioCompletoCompraHref("malaga"),
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: "Comprar piso sin agencia en Sevilla | Gestor comprador Livendia",
    metaDescription:
      "¿Compras piso entre particulares en Sevilla? Gestor legal en tu bando: reserva, arras y notaría. Tarifa plana 890 € IVA incl.",
    keywords: [
      "comprar piso sin agencia sevilla",
      "comprar piso entre particulares sevilla",
      "gestor compra vivienda sevilla",
    ],
    savingsSalePrices: [140_000, 180_000, 220_000, 250_000, 280_000, 320_000, 400_000],
    highlightSalePrice: 250_000,
    tramitesAreaNote:
      "En Sevilla capital y área metropolitana (Triana, Nervión, Los Remedios, Tomares…), el servicio cubre revisión contractual y trámites hasta escritura.",
    benefitsAreaNote: "Due diligence, comunidad y coordinación pre-escritura en Sevilla.",
    faq: faqForCity("Sevilla"),
    analyticsPlacement: "comprar_piso_sevilla",
    gestorCtaPlacement: "comprar_piso_sevilla",
    optionalLocalCompraHref: localServicioCompletoCompraHref("sevilla"),
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    metaTitle: "Comprar piso sin agencia en Bilbao | Gestor comprador Livendia",
    metaDescription:
      "Compra entre particulares en Bilbao y Gran Bilbao: reserva, arras y documentación revisadas. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia bilbao",
      "comprar piso entre particulares bilbao",
      "gestor compra vivienda bilbao",
    ],
    savingsSalePrices: [160_000, 200_000, 240_000, 280_000, 320_000, 380_000, 450_000],
    highlightSalePrice: 280_000,
    tramitesAreaNote:
      "En Bilbao, Getxo, Barakaldo y municipios del Gran Bilbao, gestor dedicado al comprador con el mismo protocolo Livendia online.",
    benefitsAreaNote: "Registral, comunidad, arras y calendario con vendedor en Bilbao.",
    faq: faqForCity("Bilbao"),
    analyticsPlacement: "comprar_piso_bilbao",
    gestorCtaPlacement: "comprar_piso_bilbao",
    optionalLocalCompraHref: localServicioCompletoCompraHref("bilbao"),
  },
  ...COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_CITIES,
];

export function toComprarPisoSinAgenciaConfig(
  def: ComprarPisoSinAgenciaCityDefinition,
): ComprarPisoSinAgenciaLandingConfig {
  const diff = {
    ...COMPRAR_PISO_BCN_METRO_DIFFERENTIATION[def.slug],
    ...COMPRAR_PISO_DIFFERENTIATION[def.slug],
    copy: {
      ...COMPRAR_PISO_BCN_METRO_DIFFERENTIATION[def.slug]?.copy,
      ...COMPRAR_PISO_DIFFERENTIATION[def.slug]?.copy,
      ...def.copy,
    },
  };
  const optionalHref =
    def.optionalLocalCompraHref && isServicioCompletoCompraLocalSlugPublished(def.slug)
      ? def.optionalLocalCompraHref
      : undefined;

  const zoneEnrich = isComprarPisoSinAgenciaBcnMetroSlug(def.slug)
    ? getComprarBcnZoneEnrichment(def.slug)
    : undefined;

  const baseFaq = diff?.faq ?? def.faq;
  const mergedFaq = zoneEnrich?.faqExtra?.length
    ? [...baseFaq, ...zoneEnrich.faqExtra]
    : baseFaq;

  const base: ComprarPisoSinAgenciaLandingConfig = {
    ...def,
    ...(diff?.keywords ? { keywords: [...diff.keywords] } : {}),
    metaTitle: zoneEnrich?.metaTitle ?? diff?.metaTitle ?? def.metaTitle,
    metaDescription: zoneEnrich?.metaDescription ?? diff?.metaDescription ?? def.metaDescription,
    ...(diff?.tramitesAreaNote ? { tramitesAreaNote: diff.tramitesAreaNote } : {}),
    ...(diff?.benefitsAreaNote ? { benefitsAreaNote: diff.benefitsAreaNote } : {}),
    faq: mergedFaq,
    ...(diff?.barcelonaZoneIntro ? { barcelonaZoneIntro: diff.barcelonaZoneIntro } : {}),
    copy: {
      ...def.copy,
      ...diff?.copy,
      ...zoneEnrich?.copy,
    },
    optionalLocalCompraHref: optionalHref,
    path: localComprarPisoSinAgenciaHref(def.slug),
  };
  return enrichWithCityMarketProfile(def.slug, "compra", base) as ComprarPisoSinAgenciaLandingConfig;
}

export function getComprarPisoSinAgenciaCity(slug: string): ComprarPisoSinAgenciaCityDefinition | undefined {
  return COMPRAR_PISO_SIN_AGENCIA_CITIES.find((c) => c.slug === slug);
}

export function getComprarPisoSinAgenciaLandingConfig(
  slug: string,
): ComprarPisoSinAgenciaLandingConfig | undefined {
  const def = getComprarPisoSinAgenciaCity(slug);
  return def ? toComprarPisoSinAgenciaConfig(def) : undefined;
}

export function isComprarPisoSinAgenciaSlugPublished(slug: string): boolean {
  return COMPRAR_PISO_SIN_AGENCIA_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedComprarPisoSinAgenciaCities(): ComprarPisoSinAgenciaCityDefinition[] {
  const pub = new Set(COMPRAR_PISO_SIN_AGENCIA_PUBLISHED_SLUGS);
  return COMPRAR_PISO_SIN_AGENCIA_CITIES.filter((c) => pub.has(c.slug));
}

export function getComprarPisoSinAgenciaCityLinks(): { slug: string; city: string; href: string }[] {
  return getPublishedComprarPisoSinAgenciaCities().map((c) => ({
    slug: c.slug,
    city: c.city,
    href: localComprarPisoSinAgenciaHref(c.slug),
  }));
}
