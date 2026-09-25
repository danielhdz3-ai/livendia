import type { VenderPisoSinAgenciaCityDefinition } from "@/lib/vender-piso-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

/** Landings vender sin agencia — barrios/municipios AMB Barcelona. */
export const VENDER_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS = [
  "barcelona-les-corts",
  "hospitalet-de-llobregat",
  "barcelona-horta-guinardo",
  "barcelona-sant-marti",
  "barcelona-sant-andreu",
] as const;

export type VenderPisoSinAgenciaBcnMetroSlug =
  (typeof VENDER_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS)[number];

export function isVenderPisoSinAgenciaBcnMetroSlug(
  slug: string,
): slug is VenderPisoSinAgenciaBcnMetroSlug {
  return (VENDER_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS as readonly string[]).includes(slug);
}

function faqZone(zoneLabel: string): VenderPisoSinAgenciaCityDefinition["faq"] {
  return [
    {
      question: `¿Puedo vender mi piso en ${zoneLabel} entre particulares sin agencia?`,
      answer: `Sí. Si ya tienes comprador en ${zoneLabel}, Livendia es gestoría por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.: reserva, arras, documentación y coordinación con notaría — sin comisión sobre el precio de venta.`,
    },
    {
      question: `¿Cuánto ahorro frente a una inmobiliaria en ${zoneLabel}?`,
      answer: `En la tabla de esta página ves el ahorro según el precio de tu vivienda. Una comisión del 3–5 % más IVA suele costar miles de euros; Livendia es tarifa plana fija.`,
    },
    {
      question: "¿Livendia busca comprador o publica mi anuncio?",
      answer:
        "No. Somos gestoría inmobiliaria digital: acompañamiento jurídico-documental cuando vendes sin agencia y ya tienes comprador particular.",
    },
    {
      question: `¿Gestionáis la normativa catalana (cèdula, ITE, CCCat) en ${zoneLabel}?`,
      answer:
        "Sí. Redactamos arras conforme al Código Civil de Catalunya y persiguimos documentación de comunidad, cèdula d'habitabilitat e ITE si procede hasta la escritura.",
    },
  ];
}

export const VENDER_PISO_SIN_AGENCIA_BCN_METRO_CITIES: VenderPisoSinAgenciaCityDefinition[] = [
  {
    slug: "barcelona-les-corts",
    city: "Les Corts",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender vivienda sin agencia y de particular en Les Corts — 890 €",
    metaDescription:
      "¿Vendes tu vivienda sin agencia y de particular en Les Corts? Gestoría Livendia 890 € IVA incl. Venta de particular a particular: arras, documentación y notaría. Pedralbes, Zona Universitària.",
    keywords: [
      "vender piso de particular a particular les corts",
      "vender piso sin agencia les corts",
      "venta entre particulares les corts barcelona",
      "vender piso particular pedralbes",
      "vender vivienda sin comisiones les corts",
    ],
    savingsSalePrices: [320_000, 380_000, 420_000, 480_000, 520_000, 580_000, 650_000],
    highlightSalePrice: 480_000,
    tramitesAreaNote:
      "En Les Corts, Pedralbes y Zona Universitària, el gestor Livendia ordena reserva, arras CCCat, documentación de comunidad y coordinación con notaría mientras vendes de particular a particular.",
    benefitsAreaNote:
      "Checklist documental, parking anexo en arras, ITE en fincas antiguas y seguimiento de certificados en Les Corts.",
    faq: faqZone("Les Corts"),
    analyticsPlacement: "vender_piso_les_corts",
    gestorCtaPlacement: "vender_piso_les_corts",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender vivienda sin comisiones en L'Hospitalet — 890 € IVA incl.",
    metaDescription:
      "¿Vendes tu vivienda sin comisiones en L'Hospitalet? Venta entre particulares con gestoría Livendia por 890 € IVA incl. Arras, trámites y notaría. Collblanc, Bellvitge, centre.",
    keywords: [
      "vender piso sin comisiones hospitalet",
      "vender piso sin comisiones l hospitalet",
      "venta entre particulares hospitalet",
      "vender piso sin agencia hospitalet",
      "vender piso de particular a particular hospitalet",
    ],
    savingsSalePrices: [160_000, 190_000, 220_000, 240_000, 260_000, 280_000, 320_000],
    highlightSalePrice: 240_000,
    tramitesAreaNote:
      "En L'Hospitalet (Centre, Collblanc, Bellvitge, Granvia…), venta entre particulares con plazos realistas de comunidad y arras adaptadas al Baix Llobregat.",
    benefitsAreaNote:
      "Gestor que persigue certificado de deuda cero en bloques densos y documentación al día para compradores de Barcelona capital.",
    faq: faqZone("L'Hospitalet de Llobregat"),
    analyticsPlacement: "vender_piso_hospitalet",
    gestorCtaPlacement: "vender_piso_hospitalet",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/hospitalet-de-llobregat",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-horta-guinardo",
    city: "Horta-Guinardó",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso entre particulares en Horta-Guinardó — 890 €",
    metaDescription:
      "¿Vendes tu piso entre particulares en Horta-Guinardó? Gestoría Livendia 890 € IVA incl. Sin comisión de agencia. Guinardó, El Carmel, Horta centre, La Teixonera.",
    keywords: [
      "vender piso entre particulares guinardo",
      "venta entre particulares horta guinardo",
      "vender piso sin agencia el carmel",
      "vender piso particular barcelona horta",
      "vender piso sin comisiones guinardo",
    ],
    savingsSalePrices: [220_000, 260_000, 290_000, 310_000, 340_000, 380_000, 420_000],
    highlightSalePrice: 310_000,
    tramitesAreaNote:
      "En Horta-Guinardó y El Carmel, venta entre particulares con foco en ITE, cèdula y arras CCCat equilibradas en fincas en ladera.",
    benefitsAreaNote:
      "Informe semáforo, seguimiento de comunidad y coordinación hasta notaría en el distrito.",
    faq: faqZone("Horta-Guinardó"),
    analyticsPlacement: "vender_piso_horta_guinardo",
    gestorCtaPlacement: "vender_piso_horta_guinardo",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-sant-marti",
    city: "Sant Martí",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso de particular a particular en Sant Martí — 890 €",
    metaDescription:
      "¿Vendes piso de particular a particular en Sant Martí? Gestoría Livendia 890 € IVA incl. Poblenou, El Clot, Diagonal Mar. Arras, documentación y notaría sin comisión.",
    keywords: [
      "vender piso de particular a particular sant marti",
      "vender piso sin agencia poblenou",
      "venta entre particulares sant marti barcelona",
      "vender piso sin comisiones poblenou",
      "vender piso particular el clot",
    ],
    savingsSalePrices: [280_000, 320_000, 360_000, 390_000, 420_000, 460_000, 520_000],
    highlightSalePrice: 390_000,
    tramitesAreaNote:
      "En Sant Martí (Poblenou, El Clot, La Verneda, Diagonal Mar), gestoría para venta entre particulares con comunidades multi-bloque y compradores exigentes.",
    benefitsAreaNote:
      "Arras CCCat, cèdula, certificado de comunidad y calendario realista hasta escritura en el 22@ y barrios del distrito.",
    faq: faqZone("Sant Martí"),
    analyticsPlacement: "vender_piso_sant_marti",
    gestorCtaPlacement: "vender_piso_sant_marti",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-sant-andreu",
    city: "Sant Andreu",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender sin comisiones de agencia en Sant Andreu — 890 €",
    metaDescription:
      "¿Vendes sin comisiones de agencia en Sant Andreu? Venta entre particulares con Livendia por 890 € IVA incl. La Sagrera, Bon Pastor, Sant Andreu de Palomar.",
    keywords: [
      "vender piso sin comisiones sant andreu",
      "vender piso sin agencia sant andreu barcelona",
      "venta entre particulares sant andreu",
      "vender piso de particular a particular sant andreu",
      "vender piso particular la sagrera",
    ],
    savingsSalePrices: [200_000, 230_000, 260_000, 280_000, 300_000, 330_000, 380_000],
    highlightSalePrice: 280_000,
    tramitesAreaNote:
      "En Sant Andreu (Palomar, La Sagrera, Bon Pastor), venta entre particulares con arras claras y gestión documental post-arras hasta notaría.",
    benefitsAreaNote:
      "Checklist pre-escritura, cláusula 621-49 si hay hipoteca del comprador y seguimiento de certificados.",
    faq: faqZone("Sant Andreu"),
    analyticsPlacement: "vender_piso_sant_andreu",
    gestorCtaPlacement: "vender_piso_sant_andreu",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
];
