import type { VenderPisoSinAgenciaCityDefinition } from "@/lib/vender-piso-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";

/** Landings vender sin agencia — barrios/municipios AMB Barcelona. */
export const VENDER_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS = [
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
  {
    slug: "barcelona-eixample",
    city: "Eixample",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso sin comisiones en el Eixample — 890 € IVA incl.",
    metaDescription:
      "¿Vendes tu piso en Barcelona sin comisiones en el Eixample? Gestoría Livendia 890 € IVA incl. Venta entre particulares: arras CCCat, documentación y notaría. Dreta, Esquerra, Sagrada Família.",
    keywords: [
      "vender piso sin comisiones eixample",
      "vender piso sin comisiones barcelona eixample",
      "venta entre particulares eixample",
      "vender piso sin agencia eixample barcelona",
      "vender piso de particular a particular eixample",
    ],
    savingsSalePrices: [350_000, 400_000, 450_000, 480_000, 520_000, 560_000, 620_000],
    highlightSalePrice: 450_000,
    tramitesAreaNote:
      "En el Eixample (Dreta, Esquerra, Sagrada Família), venta entre particulares con arras CCCat, certificados de comunidad en fincas señoriales y plazos realistas hasta notaría.",
    benefitsAreaNote:
      "Gestor que revisa cargas, parking y trasteros anexos en contrato antes de vincular arras definitivas.",
    faq: faqZone("Eixample"),
    analyticsPlacement: "vender_piso_eixample",
    gestorCtaPlacement: "vender_piso_eixample",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso entre particulares en Gràcia — 890 €",
    metaDescription:
      "¿Vendes tu piso entre particulares en Gràcia? Livendia gestoría 890 € IVA incl. Vila de Gràcia, Camp d'en Grassot, Vallcarca. Arras, trámites y notaría sin comisión de agencia.",
    keywords: [
      "vender piso entre particulares gracia barcelona",
      "venta entre particulares gracia",
      "vender piso sin agencia gracia",
      "vender piso sin comisiones gracia barcelona",
      "vender piso particular vila de gracia",
    ],
    savingsSalePrices: [300_000, 340_000, 380_000, 410_000, 440_000, 480_000, 530_000],
    highlightSalePrice: 410_000,
    tramitesAreaNote:
      "En Gràcia y barrios del distrito, venta entre particulares con foco en ITE, cèdula y arras equilibradas en edificios de principios de siglo.",
    benefitsAreaNote:
      "Checklist documental, comunidad y coordinación pre-escritura con compradores exigentes del centro de Barcelona.",
    faq: faqZone("Gràcia"),
    analyticsPlacement: "vender_piso_gracia",
    gestorCtaPlacement: "vender_piso_gracia",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-sants-montjuic",
    city: "Sants-Montjuïc",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender sin agencia en Sants-Montjuïc — gestoría 890 €",
    metaDescription:
      "¿Vendes tu piso sin agencia en Sants-Montjuïc? Livendia 890 € IVA incl. Sants, Hostafrancs, Poble-sec, Montjuïc. Venta entre particulares con arras y documentación hasta notaría.",
    keywords: [
      "vender piso sin agencia sants",
      "vender piso sin agencia poble sec",
      "venta entre particulares sants montjuic",
      "vender piso sin comisiones sants barcelona",
      "vender piso de particular a particular sants",
    ],
    savingsSalePrices: [240_000, 270_000, 300_000, 330_000, 360_000, 390_000, 430_000],
    highlightSalePrice: 330_000,
    tramitesAreaNote:
      "En Sants-Montjuïc (Sants, Hostafrancs, Poble-sec), gestoría para vender sin agencia cuando ya tienes comprador, con arras CCCat y seguimiento de comunidad.",
    benefitsAreaNote:
      "Informe semáforo, plazos de certificados y coordinación con notaría en operaciones rápidas del distrito.",
    faq: faqZone("Sants-Montjuïc"),
    analyticsPlacement: "vender_piso_sants_montjuic",
    gestorCtaPlacement: "vender_piso_sants_montjuic",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "badalona",
    city: "Badalona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender vivienda sin comisiones en Badalona — 890 €",
    metaDescription:
      "¿Vendes tu vivienda sin comisiones en Badalona? Gestoría Livendia 890 € IVA incl. Venta entre particulares: arras, documentación y notaría. Centre, Montigala, Gorg, La Salut.",
    keywords: [
      "vender piso sin comisiones badalona",
      "venta entre particulares badalona",
      "vender piso sin agencia badalona",
      "vender piso de particular a particular badalona",
      "vender piso sin inmobiliaria badalona",
    ],
    savingsSalePrices: [170_000, 200_000, 230_000, 250_000, 270_000, 300_000, 340_000],
    highlightSalePrice: 250_000,
    tramitesAreaNote:
      "En Badalona (centre, Montigala, Gorg, La Salut), venta entre particulares con plazos de comunidad y arras adaptados al mercado del Maresme metropolitano.",
    benefitsAreaNote:
      "Gestor que persigue certificado de deuda cero y documentación al día para compradores de Barcelona y Badalona.",
    faq: faqZone("Badalona"),
    analyticsPlacement: "vender_piso_badalona",
    gestorCtaPlacement: "vender_piso_badalona",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "sabadell",
    city: "Sabadell",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso de particular a particular en Sabadell — 890 €",
    metaDescription:
      "¿Vendes piso de particular a particular en Sabadell? Livendia gestoría 890 € IVA incl. Sin comisión de agencia. Centre, Eixample sabadellense, Gràcia. Arras y notaría.",
    keywords: [
      "vender piso de particular a particular sabadell",
      "venta entre particulares sabadell",
      "vender piso sin comisiones sabadell",
      "vender piso sin agencia sabadell",
      "gestoría venta piso particular sabadell",
    ],
    savingsSalePrices: [180_000, 210_000, 240_000, 260_000, 280_000, 310_000, 350_000],
    highlightSalePrice: 260_000,
    tramitesAreaNote:
      "En Sabadell capital y barrios (centre, Eixample, Gràcia), venta de particular a particular con arras CCCat y revisión de ITE en fincas antiguas del Vallès.",
    benefitsAreaNote:
      "Tarifa plana frente al 3 % de inmobiliaria; gestor dedicado hasta escritura para compradores locales y de Barcelona.",
    faq: faqZone("Sabadell"),
    analyticsPlacement: "vender_piso_sabadell",
    gestorCtaPlacement: "vender_piso_sabadell",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    city: "Sarrià-Sant Gervasi",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso entre particulares en Sarrià-Sant Gervasi — 890 €",
    metaDescription:
      "¿Vendes en Sarrià-Sant Gervasi entre particulares? Gestoría Livendia 890 € IVA incl. Pedralbes, Sant Gervasi, Les Tres Torres. Arras CCCat y notaría sin comisión de agencia.",
    keywords: [
      "vender piso entre particulares sarria sant gervasi",
      "vender piso sin comisiones sarria barcelona",
      "venta entre particulares pedralbes",
      "vender piso sin agencia sant gervasi",
      "vender piso particular les tres torres",
    ],
    savingsSalePrices: [380_000, 450_000, 520_000, 580_000, 650_000, 720_000, 850_000],
    highlightSalePrice: 580_000,
    tramitesAreaNote:
      "En Sarrià-Sant Gervasi (Pedralbes, Sant Gervasi, Bonanova), venta entre particulares con revisión de parking, anexos y arras CCCat en operaciones de alto importe.",
    benefitsAreaNote:
      "Gestor experto en fincas señoriales, ITE y certificados de comunidad exigentes antes de escritura.",
    faq: faqZone("Sarrià-Sant Gervasi"),
    analyticsPlacement: "vender_piso_sarria_sant_gervasi",
    gestorCtaPlacement: "vender_piso_sarria_sant_gervasi",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-nou-barris",
    city: "Nou Barris",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender sin agencia en Nou Barris — gestoría 890 €",
    metaDescription:
      "¿Vendes tu piso sin agencia en Nou Barris? Livendia 890 € IVA incl. Venta entre particulares: Verdun, Roquetes, Trinitat Vella. Arras, trámites y notaría.",
    keywords: [
      "vender piso sin agencia nou barris",
      "venta entre particulares nou barris barcelona",
      "vender piso sin comisiones verdun",
      "vender piso de particular a particular nou barris",
      "vender piso sin inmobiliaria trinitat vella",
    ],
    savingsSalePrices: [160_000, 190_000, 220_000, 240_000, 260_000, 290_000, 320_000],
    highlightSalePrice: 240_000,
    tramitesAreaNote:
      "En Nou Barris (Verdun, Roquetes, Trinitat Vella, Porta), gestoría para vender sin agencia con arras claras y seguimiento de comunidad en bloques de los años 60-70.",
    benefitsAreaNote:
      "Checklist documental, deuda cero de comunidad y coordinación hasta notaría con compradores de Barcelona.",
    faq: faqZone("Nou Barris"),
    analyticsPlacement: "vender_piso_nou_barris",
    gestorCtaPlacement: "vender_piso_nou_barris",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "barcelona-ciutat-vella",
    city: "Ciutat Vella",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso de particular a particular en Ciutat Vella — 890 €",
    metaDescription:
      "¿Vendes piso de particular a particular en Ciutat Vella? Gestoría Livendia 890 € IVA incl. Gòtic, El Raval, Born, Barceloneta. Arras CCCat sin comisión de agencia.",
    keywords: [
      "vender piso de particular a particular gothic quarter",
      "vender piso sin agencia ciutat vella",
      "venta entre particulares el raval barcelona",
      "vender piso sin comisiones barrio gotico",
      "vender piso particular born barcelona",
    ],
    savingsSalePrices: [250_000, 290_000, 330_000, 360_000, 400_000, 450_000, 520_000],
    highlightSalePrice: 360_000,
    tramitesAreaNote:
      "En Ciutat Vella (Gòtic, Raval, Born, Barceloneta), venta de particular a particular con foco en ITE, cèdula, protección patrimonial y arras equilibradas.",
    benefitsAreaNote:
      "Gestor que conoce fincas centenarias, cargas ocultas y plazos de certificados en el casco antiguo.",
    faq: faqZone("Ciutat Vella"),
    analyticsPlacement: "vender_piso_ciutat_vella",
    gestorCtaPlacement: "vender_piso_ciutat_vella",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "terrassa",
    city: "Terrassa",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender vivienda sin comisiones en Terrassa — 890 € IVA incl.",
    metaDescription:
      "¿Vendes tu vivienda sin comisiones en Terrassa? Venta entre particulares con Livendia por 890 € IVA incl. Centre, Sant Pere, Les Fonts. Arras y notaría.",
    keywords: [
      "vender piso sin comisiones terrassa",
      "venta entre particulares terrassa",
      "vender piso sin agencia terrassa",
      "vender piso de particular a particular terrassa",
      "gestoría venta piso terrassa",
    ],
    savingsSalePrices: [170_000, 200_000, 230_000, 250_000, 270_000, 300_000, 340_000],
    highlightSalePrice: 250_000,
    tramitesAreaNote:
      "En Terrassa (centre, Sant Pere, Sant Pere Nord, Les Fonts), venta entre particulares con arras CCCat y documentación para compradores del Vallès y Barcelona.",
    benefitsAreaNote:
      "Tarifa plana frente al 3 % de inmobiliaria; seguimiento de comunidad e ITE en edificios industriales reconvertidos.",
    faq: faqZone("Terrassa"),
    analyticsPlacement: "vender_piso_terrassa",
    gestorCtaPlacement: "vender_piso_terrassa",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender entre particulares en Cornellà — gestoría 890 €",
    metaDescription:
      "¿Vendes tu piso entre particulares en Cornellà de Llobregat? Livendia 890 € IVA incl. Sin comisión de agencia. Centre, Sant Ildefons, Almeda. Arras y notaría.",
    keywords: [
      "vender piso entre particulares cornella de llobregat",
      "vender piso sin comisiones cornella",
      "vender piso sin agencia cornella",
      "venta entre particulares cornella barcelona",
      "vender piso particular sant ildefons",
    ],
    savingsSalePrices: [180_000, 210_000, 240_000, 260_000, 280_000, 310_000, 350_000],
    highlightSalePrice: 260_000,
    tramitesAreaNote:
      "En Cornellà (centre, Sant Ildefons, Almeda), venta entre particulares del Baix Llobregat con plazos realistas de comunidad y arras adaptadas al comprador barcelonés.",
    benefitsAreaNote:
      "Gestor dedicado, informe semáforo pre-escritura y coordinación con notaría sin desplazamientos a gestoría física.",
    faq: faqZone("Cornellà de Llobregat"),
    analyticsPlacement: "vender_piso_cornella",
    gestorCtaPlacement: "vender_piso_cornella",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "sant-cugat-del-valles",
    city: "Sant Cugat del Vallès",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso sin comisiones en Sant Cugat — 890 € IVA incl.",
    metaDescription:
      "¿Vendes tu piso sin comisiones en Sant Cugat del Vallès? Gestoría Livendia 890 € IVA incl. Venta entre particulares: arras CCCat, documentación y notaría. Centre, Mira-sol, Valldoreix.",
    keywords: [
      "vender piso sin comisiones sant cugat",
      "venta entre particulares sant cugat del valles",
      "vender piso sin agencia sant cugat",
      "vender piso de particular a particular sant cugat",
      "gestoría venta vivienda sant cugat",
    ],
    savingsSalePrices: [320_000, 380_000, 420_000, 460_000, 500_000, 550_000, 620_000],
    highlightSalePrice: 460_000,
    tramitesAreaNote:
      "En Sant Cugat (centre, Mira-sol, Valldoreix), venta entre particulares con arras CCCat y revisión documental para compradores del Vallès y Barcelona.",
    benefitsAreaNote:
      "Tarifa plana en un mercado de precios altos; gestor dedicado hasta escritura sin comisión del 3–5 %.",
    faq: faqZone("Sant Cugat del Vallès"),
    analyticsPlacement: "vender_piso_sant_cugat",
    gestorCtaPlacement: "vender_piso_sant_cugat",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "esplugues-de-llobregat",
    city: "Esplugues de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender sin agencia en Esplugues — gestoría 890 €",
    metaDescription:
      "¿Vendes tu piso sin agencia en Esplugues de Llobregat? Livendia 890 € IVA incl. Venta entre particulares. Can Vidalet, centre, Finestrelles. Arras y notaría.",
    keywords: [
      "vender piso sin agencia esplugues",
      "venta entre particulares esplugues de llobregat",
      "vender piso sin comisiones esplugues",
      "vender piso entre particulares esplugues barcelona",
      "vender piso particular can vidalet",
    ],
    savingsSalePrices: [240_000, 270_000, 300_000, 330_000, 360_000, 390_000, 430_000],
    highlightSalePrice: 330_000,
    tramitesAreaNote:
      "En Esplugues (Can Vidalet, centre, Finestrelles), gestoría para vender sin agencia con plazos de comunidad y arras adaptados al comprador barcelonés.",
    benefitsAreaNote:
      "Checklist pre-escritura, certificado de deuda cero y coordinación con notaría 100 % online.",
    faq: faqZone("Esplugues de Llobregat"),
    analyticsPlacement: "vender_piso_esplugues",
    gestorCtaPlacement: "vender_piso_esplugues",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "castelldefels",
    city: "Castelldefels",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso de particular a particular en Castelldefels — 890 €",
    metaDescription:
      "¿Vendes piso de particular a particular en Castelldefels? Gestoría Livendia 890 € IVA incl. Sin comisión de agencia. Centre, Montmar, Bellamar. Arras CCCat y notaría.",
    keywords: [
      "vender piso de particular a particular castelldefels",
      "venta entre particulares castelldefels",
      "vender piso sin comisiones castelldefels",
      "vender piso sin agencia castelldefels",
      "vender piso particular bellamar",
    ],
    savingsSalePrices: [280_000, 320_000, 360_000, 400_000, 440_000, 480_000, 550_000],
    highlightSalePrice: 400_000,
    tramitesAreaNote:
      "En Castelldefels (centre, Montmar, Bellamar), venta de particular a particular con foco en segunda residencia, ITE y documentación de comunidad costera.",
    benefitsAreaNote:
      "Gestor que persigue certificados y arras equilibradas en operaciones con compradores de Barcelona y Baix Llobregat.",
    faq: faqZone("Castelldefels"),
    analyticsPlacement: "vender_piso_castelldefels",
    gestorCtaPlacement: "vender_piso_castelldefels",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "gava",
    city: "Gavà",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender vivienda entre particulares en Gavà — 890 €",
    metaDescription:
      "¿Vendes tu vivienda entre particulares en Gavà? Livendia gestoría 890 € IVA incl. Centre, Gavà Mar, Santa Rosa. Arras, trámites y notaría sin comisión.",
    keywords: [
      "vender piso entre particulares gava",
      "venta entre particulares gava mar",
      "vender piso sin comisiones gava",
      "vender piso sin agencia gava",
      "vender piso de particular a particular gava",
    ],
    savingsSalePrices: [220_000, 250_000, 280_000, 310_000, 340_000, 380_000, 420_000],
    highlightSalePrice: 310_000,
    tramitesAreaNote:
      "En Gavà (centre, Gavà Mar, Santa Rosa), venta entre particulares del Garraf con arras CCCat y seguimiento documental hasta notaría.",
    benefitsAreaNote:
      "Tarifa plana frente a inmobiliaria; ideal si ya tienes comprador por portal o recomendación.",
    faq: faqZone("Gavà"),
    analyticsPlacement: "vender_piso_gava",
    gestorCtaPlacement: "vender_piso_gava",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
  {
    slug: "sant-adria-de-besos",
    city: "Sant Adrià de Besòs",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender sin comisiones de agencia en Sant Adrià — 890 €",
    metaDescription:
      "¿Vendes sin comisiones de agencia en Sant Adrià de Besòs? Venta entre particulares con Livendia por 890 € IVA incl. Arras, documentación y notaría.",
    keywords: [
      "vender piso sin comisiones sant adria de besos",
      "vender piso sin agencia sant adria",
      "venta entre particulares sant adria besos",
      "vender piso de particular a particular sant adria",
      "vender piso sin inmobiliaria sant adria barcelona",
    ],
    savingsSalePrices: [180_000, 210_000, 240_000, 260_000, 280_000, 310_000, 350_000],
    highlightSalePrice: 260_000,
    tramitesAreaNote:
      "En Sant Adrià de Besòs, venta entre particulares con arras claras, comunidad en bloques densos y compradores de Barcelona capital y Badalona.",
    benefitsAreaNote:
      "Gestor legal dedicado, informe semáforo y coordinación hasta escritura sin pagar el 3–5 % sobre el precio.",
    faq: faqZone("Sant Adrià de Besòs"),
    analyticsPlacement: "vender_piso_sant_adria",
    gestorCtaPlacement: "vender_piso_sant_adria",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    showBarcelonaVentaModules: true,
  },
];
