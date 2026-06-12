import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL } from "@/lib/catalog.public";
import {
  getParkingTrasteroLocalSeoContent,
  type ParkingTrasteroSeoContent,
} from "@/lib/acompanamiento-compra-parking-trastero-local-seo-content";
import { PARKING_TRASTERO_FAQ_FIXED } from "@/lib/acompanamiento-compra-parking-trastero-local-shared";

export const ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE =
  "/servicios/acompanamiento-compra-parking-trastero-local";

export const PARKING_TRASTERO_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "barcelona-eixample",
  "barcelona-gracia",
  "barcelona-poblenou",
  "barcelona-sants",
  "barcelona-sarria",
  "barcelona-sant-marti",
];

export type ParkingTrasteroLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  finalCtaLead: string;
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
  seoContent?: ParkingTrasteroSeoContent;
  faq?: readonly { question: string; answer: string }[];
  compraCompletaSlug?: string;
  gestoriaSlug?: string;
} & LocalCityLandingFields;

export type ParkingTrasteroLocalCityDefinition = Omit<ParkingTrasteroLocalLandingConfig, "path">;

export function localAcompanamientoCompraParkingTrasteroHref(slug: string): string {
  return `${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE}/${slug}`;
}

export function toParkingTrasteroLandingConfig(
  def: ParkingTrasteroLocalCityDefinition,
): ParkingTrasteroLocalLandingConfig {
  const seoContent = getParkingTrasteroLocalSeoContent(def.slug);
  const faq = seoContent
    ? [...PARKING_TRASTERO_FAQ_FIXED, ...seoContent.faqLocal]
    : [...PARKING_TRASTERO_FAQ_FIXED];
  return {
    ...def,
    ...(seoContent ? { seoContent } : {}),
    faq,
    slug: def.slug,
    path: localAcompanamientoCompraParkingTrasteroHref(def.slug),
    compraCompletaSlug: def.compraCompletaSlug ?? (def.slug.startsWith("barcelona") ? "barcelona" : def.slug),
    gestoriaSlug: def.gestoriaSlug ?? (def.slug.startsWith("barcelona") ? "barcelona" : def.slug),
  };
}

export function getParkingTrasteroLocalCity(slug: string): ParkingTrasteroLocalCityDefinition | undefined {
  return PARKING_TRASTERO_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isParkingTrasteroLocalSlugPublished(slug: string): boolean {
  return PARKING_TRASTERO_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedParkingTrasteroLocalCities(): ParkingTrasteroLocalCityDefinition[] {
  const pub = new Set(PARKING_TRASTERO_LOCAL_PUBLISHED_SLUGS);
  return PARKING_TRASTERO_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export const PARKING_TRASTERO_LOCAL_CITIES: ParkingTrasteroLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroBadge: "Parking y trastero · Madrid",
    heroH1: "Compra tu parking o trastero en Madrid con gestor dedicado",
    metaTitle: "Comprar parking o trastero en Madrid | Gestor Livendia 298 €",
    metaDescription:
      "Gestor integral para comprar plaza o trastero en Madrid: nota simple, IBI, comunidad, notaría, ITP y registro. 298 € IVA incl. Ahorro frente a agencia.",
    keywords: [
      "comprar parking madrid gestoria",
      "comprar trastero madrid tramites",
      "gestor compra plaza garaje madrid",
      "ITP parking madrid",
      "acompañamiento compra parking chamberi",
    ],
    heroBullets: [
      "Chamberí, Salamanca, Retiro, Tetuán y corona metropolitana",
      "Liquidación ITP y registro telemático incluidos",
      `${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} fijos — sin % sobre el precio`,
    ],
    testimonialsTitle: "Compradores de parking y trastero en Madrid",
    testimonials: [
      {
        quote:
          "La agencia quería 900 € solo por gestionar el parking del piso que ya habíamos comprado. Livendia lo hizo por 298 € con el mismo resultado.",
        author: "Raúl G.",
        role: "Comprador, Chamberí",
      },
      {
        quote:
          "No sabía cómo liquidar el ITP del trastero. El gestor me envió la carta de pago exacta y presentó todo en el Registro sin que yo pisara la ATC.",
        author: "Elena V.",
        role: "Compradora, Tetuán",
      },
    ],
    finalCtaLead: `Contrata tu gestor en Madrid por ${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} y olvídate de notaría, ITP y registro.`,
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Parking y trastero · Barcelona",
    heroH1: "Compra parking o trastero en Barcelona con gestor integral",
    metaTitle: "Comprar parking o trastero en Barcelona | Gestor Livendia 298 €",
    metaDescription:
      "Gestor para comprar plaza o trastero en Barcelona: nota simple, comunidad, notaría, ITP catalán y registro. 298 € IVA incl. Todos los distritos.",
    keywords: [
      "comprar parking barcelona gestoria",
      "comprar trastero barcelona tramites",
      "gestor plaza garaje eixample",
      "ITP parking catalunya",
      "registro parking barcelona",
    ],
    heroBullets: [
      "Eixample, Gràcia, Poblenou, Sants, Sarrià y área metropolitana",
      "Copia autorizada electrónica y registradores.org",
      "Tarifa fija sin comisión de agencia",
    ],
    testimonialsTitle: "Compradores de anexos en Barcelona",
    testimonials: [
      {
        quote:
          "Compramos la plaza en el mismo edificio del piso. Livendia detectó una cuota de comunidad pendiente del vendedor antes de ir a notaría.",
        author: "Marc & Laia",
        role: "Compradores, Eixample",
      },
      {
        quote:
          "Me ahorré más de 600 € respecto al presupuesto de la inmobiliaria. Mismo trámite, gestor dedicado y todo inscrito en tres semanas.",
        author: "Núria P.",
        role: "Compradora, Gràcia",
      },
    ],
    finalCtaLead: `Gestor integral en Barcelona por ${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL}: de la nota simple a la entrega inscrita.`,
  },
  {
    slug: "barcelona-eixample",
    city: "Eixample (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Eixample · Parking y trastero",
    heroH1: "Compra parking o trastero en el Eixample con gestor Livendia",
    metaTitle: "Comprar parking Eixample Barcelona | Gestor 298 € Livendia",
    metaDescription:
      "Gestor para plaza o trastero en Dreta y Esquerra del Eixample: nota simple, IBI, notaría, ITP y registro. 298 € IVA incl.",
    keywords: ["parking eixample compra", "trastero sagrada familia", "gestor plaza garaje eixample"],
    heroBullets: ["Dreta y Esquerra de l'Eixample", "Rampas y servidumbres revisadas", "298 € todo incluido"],
    testimonialsTitle: "Compradores en el Eixample",
    testimonials: [
      {
        quote: "La plaza compartía rampa con otra finca. El gestor lo vio en la nota simple y lo explicó antes de firmar.",
        author: "Jordi M.",
        role: "Comprador, Dreta de l'Eixample",
      },
      {
        quote: "Evité pagar un 8 % a la agencia sobre 32.000 €. Livendia fue más barato y más claro.",
        author: "Ana R.",
        role: "Compradora, Sant Antoni",
      },
    ],
    finalCtaLead: "Tu gestor en el Eixample por 298 €: notaría, ITP y Registro sin improvisar.",
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Gràcia · Parking y trastero",
    heroH1: "Compra parking o trastero en Gràcia con gestor dedicado",
    metaTitle: "Comprar parking Gràcia Barcelona | Gestor Livendia 298 €",
    metaDescription:
      "Acompañamiento integral compra plaza o trastero en Gràcia: Vila de Gràcia, Camp d'en Grassot, La Salut. 298 € IVA incl.",
    keywords: ["parking gracia barcelona", "trastero vila de gracia", "gestor compra parking gracia"],
    heroBullets: ["Vila de Gràcia y Camp d'en Grassot", "Trasteros y plazas en fincas antiguas", "Gestor fijo 298 €"],
    testimonialsTitle: "Compradores en Gràcia",
    testimonials: [
      {
        quote: "El trastero no tenía número de finca claro. Livendia lo aclaró con el registro y la comunidad antes de la firma.",
        author: "Pau S.",
        role: "Comprador, Vila de Gràcia",
      },
    ],
    finalCtaLead: "Gestor en Gràcia por 298 €: documentación, notaría, ITP y entrega final.",
  },
  {
    slug: "barcelona-poblenou",
    city: "Poblenou (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Poblenou · Parking y trastero",
    heroH1: "Compra parking o trastero en Poblenou y 22@",
    metaTitle: "Comprar parking Poblenou Barcelona | Gestor Livendia 298 €",
    metaDescription:
      "Gestor compra plaza o trastero en Poblenou, 22@ y Sant Martí. Notaría, ITP y registro por 298 € IVA incl.",
    keywords: ["parking poblenou", "trastero 22 barcelona", "comprar plaza diagonal mar"],
    heroBullets: ["Poblenou, 22@ y Diagonal Mar", "Promociones recientes y segundas transmisiones", "298 € tarifa plana"],
    testimonialsTitle: "Compradores en Poblenou",
    testimonials: [
      {
        quote: "Compré la plaza de la promoción del 22@. Livendia gestionó ITP y registro mientras yo seguía con el trabajo.",
        author: "Carlos H.",
        role: "Comprador, Poblenou",
      },
    ],
    finalCtaLead: "Gestor en Poblenou por 298 € hasta la inscripción en el Registro.",
  },
  {
    slug: "barcelona-sants",
    city: "Sants (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Sants · Parking y trastero",
    heroH1: "Compra parking o trastero en Sants y Hostafrancs",
    metaTitle: "Comprar parking Sants Barcelona | Gestor Livendia 298 €",
    metaDescription:
      "Gestor integral para plaza o trastero en Sants, Hostafrancs y Poble-sec. 298 € IVA incl. ITP y registro gestionados.",
    keywords: ["parking sants barcelona", "trastero hostafrancs", "gestor compra parking sants"],
    heroBullets: ["Sants, Hostafrancs, Poble-sec", "IBI y comunidad del anexo", "Sin comisión de agencia"],
    testimonialsTitle: "Compradores en Sants",
    testimonials: [
      {
        quote: "Vivo en otra provincia y compré plaza junto a Sants Estació. Todo online salvo el día de notaría.",
        author: "Marta L.",
        role: "Compradora, Sants",
      },
    ],
    finalCtaLead: "Gestor en Sants por 298 €: cuatro fases hasta documentación inscrita.",
  },
  {
    slug: "barcelona-sarria",
    city: "Sarrià-Sant Gervasi (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Sarrià · Parking y trastero",
    heroH1: "Compra parking o trastero en Sarrià-Sant Gervasi",
    metaTitle: "Comprar parking Sarrià Barcelona | Gestor Livendia 298 €",
    metaDescription:
      "Gestor para plazas y trasteros en Sarrià, Sant Gervasi y Les Tres Torres. Notaría, ITP y registro por 298 €.",
    keywords: ["parking sarria barcelona", "plaza garaje tres torres", "trastero sant gervasi"],
    heroBullets: ["Sarrià, Bonanova, Les Tres Torres", "Plazas de alto importe — ahorro vs agencia", "298 € fijos"],
    testimonialsTitle: "Compradores en Sarrià",
    testimonials: [
      {
        quote: "Plaza doble por 42.000 €. La agencia pedía 3.360 € de gestión; Livendia 298 € con el mismo acompañamiento.",
        author: "Isabel C.",
        role: "Compradora, Les Tres Torres",
      },
    ],
    finalCtaLead: "Gestor en Sarrià por 298 €: máximo ahorro en plazas premium.",
  },
  {
    slug: "barcelona-sant-marti",
    city: "Sant Martí (Barcelona)",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Sant Martí · Parking y trastero",
    heroH1: "Compra parking o trastero en Sant Martí",
    metaTitle: "Comprar parking Sant Martí Barcelona | Gestor Livendia 298 €",
    metaDescription:
      "Gestor compra plaza o trastero en Clot, La Verneda y Diagonal Mar. 298 € IVA incl. Notaría, ITP y registro.",
    keywords: ["parking clot barcelona", "trastero la verneda", "gestor parking sant marti"],
    heroBullets: ["Clot, La Verneda, Diagonal Mar", "Comunidades multi-bloque", "298 € sin sorpresas"],
    testimonialsTitle: "Compradores en Sant Martí",
    testimonials: [
      {
        quote: "El certificado de comunidad tardaba. El gestor hizo seguimiento al administrador y llegamos a notaría a tiempo.",
        author: "Óscar T.",
        role: "Comprador, El Clot",
      },
    ],
    finalCtaLead: "Gestor en Sant Martí por 298 € hasta la entrega de la documentación.",
  },
];
