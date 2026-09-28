import type { ComprarPisoSinAgenciaCityDefinition } from "@/lib/comprar-piso-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { localServicioCompletoCompraHref } from "@/lib/servicio-completo-compra-local-cities";

/** Landings comprar sin agencia — barrios/municipios AMB Barcelona. */
export const COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_PUBLISHED_SLUGS = [
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
  "sant-boi-de-llobregat",
  "sant-joan-despi",
  "mollet-del-valles",
  "barcelona-poblenou",
  "barcelona-born",
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
      question: `¿Puedo comprar piso en ${zoneLabel} sin agencia compradora?`,
      answer: `Sí. Si ya has encontrado vivienda en ${zoneLabel} entre particulares o con agencia solo del vendedor, Livendia actúa como gestor del comprador por ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.: revisión de reserva y arras, documentación y coordinación hasta notaría.`,
    },
    {
      question: `¿Qué revisa la gestoría antes de firmar arras en ${zoneLabel}?`,
      answer:
        "Nota simple, cargas, ITE si procede, certificados de comunidad, plazos de hipoteca y cláusulas de penalización — especialmente en operaciones con prisa en Barcelona y área metropolitana.",
    },
    {
      question: "¿Livendia busca pisos o negocia el precio?",
      answer:
        "No. Somos gestoría inmobiliaria digital del comprador: acompañamiento jurídico-documental sin comisión sobre el precio del inmueble.",
    },
    {
      question: `¿Gestionáis normativa catalana (cèdula, ITE, CCCat) en ${zoneLabel}?`,
      answer:
        "Sí. Revisamos arras conforme al Código Civil de Catalunya y perseguimos documentación de comunidad, cèdula d'habitabilitat e ITE antes de que ingreses la señal.",
    },
  ];
}


export const COMPRAR_PISO_SIN_AGENCIA_BCN_METRO_CITIES: ComprarPisoSinAgenciaCityDefinition[] = [
  {
    slug: "barcelona-les-corts",
    city: "Les Corts",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Les Corts — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Les Corts? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia les corts",
      "comprar piso entre particulares les corts barcelona",
      "gestoría compra vivienda les corts",
      "revisar arras les corts",
      "comprar sin inmobiliaria les corts",
    ],
    savingsSalePrices: [320_000, 380_000, 420_000, 480_000, 520_000, 580_000, 650_000],
    highlightSalePrice: 480_000,
    tramitesAreaNote:
      "En Les Corts, Pedralbes y Zona Universitària, el gestor Livendia ordena reserva, arras CCCat, documentación de comunidad y coordinación con notaría mientras compras de particular a particular.",
    benefitsAreaNote:
      "Checklist documental, parking anexo en arras, ITE en fincas antiguas y seguimiento de certificados en Les Corts.",
    faq: faqZone("Les Corts"),
    analyticsPlacement: "comprar_piso_les_corts",
    gestorCtaPlacement: "comprar_piso_les_corts",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-les-corts"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en L'Hospitalet de Llobregat — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en L'Hospitalet de Llobregat? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia l'hospitalet de llobregat",
      "comprar piso entre particulares l'hospitalet de llobregat barcelona",
      "gestoría compra vivienda l'hospitalet de llobregat",
      "revisar arras l'hospitalet de llobregat",
      "comprar sin inmobiliaria l'hospitalet de llobregat",
    ],
    savingsSalePrices: [160_000, 190_000, 220_000, 240_000, 260_000, 280_000, 320_000],
    highlightSalePrice: 240_000,
    tramitesAreaNote:
      "En L'Hospitalet (Centre, Collblanc, Bellvitge, Granvia…), compra entre particulares con plazos realistas de comunidad y arras adaptadas al Baix Llobregat.",
    benefitsAreaNote:
      "Gestor que persigue certificado de deuda cero en bloques densos y documentación al día para compradores de Barcelona capital.",
    faq: faqZone("L'Hospitalet de Llobregat"),
    analyticsPlacement: "comprar_piso_hospitalet",
    gestorCtaPlacement: "comprar_piso_hospitalet",
    optionalLocalCompraHref: localServicioCompletoCompraHref("hospitalet-de-llobregat"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-horta-guinardo",
    city: "Horta-Guinardó",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Horta-Guinardó — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Horta-Guinardó? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia horta-guinardó",
      "comprar piso entre particulares horta-guinardó barcelona",
      "gestoría compra vivienda horta-guinardó",
      "revisar arras horta-guinardó",
      "comprar sin inmobiliaria horta-guinardó",
    ],
    savingsSalePrices: [220_000, 260_000, 290_000, 310_000, 340_000, 380_000, 420_000],
    highlightSalePrice: 310_000,
    tramitesAreaNote:
      "En Horta-Guinardó y El Carmel, compra entre particulares con foco en ITE, cèdula y arras CCCat equilibradas en fincas en ladera.",
    benefitsAreaNote:
      "Informe semáforo, seguimiento de comunidad y coordinación hasta notaría en el distrito.",
    faq: faqZone("Horta-Guinardó"),
    analyticsPlacement: "comprar_piso_horta_guinardo",
    gestorCtaPlacement: "comprar_piso_horta_guinardo",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-horta-guinardo"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-sant-marti",
    city: "Sant Martí",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sant Martí — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sant Martí? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sant martí",
      "comprar piso entre particulares sant martí barcelona",
      "gestoría compra vivienda sant martí",
      "revisar arras sant martí",
      "comprar sin inmobiliaria sant martí",
    ],
    savingsSalePrices: [280_000, 320_000, 360_000, 390_000, 420_000, 460_000, 520_000],
    highlightSalePrice: 390_000,
    tramitesAreaNote:
      "En Sant Martí (Poblenou, El Clot, La Verneda, Diagonal Mar), gestoría para compra entre particulares con comunidades multi-bloque y vendedores exigentes.",
    benefitsAreaNote:
      "Arras CCCat, cèdula, certificado de comunidad y calendario realista hasta escritura en el 22@ y barrios del distrito.",
    faq: faqZone("Sant Martí"),
    analyticsPlacement: "comprar_piso_sant_marti",
    gestorCtaPlacement: "comprar_piso_sant_marti",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-sant-marti"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-sant-andreu",
    city: "Sant Andreu",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sant Andreu — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sant Andreu? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sant andreu",
      "comprar piso entre particulares sant andreu barcelona",
      "gestoría compra vivienda sant andreu",
      "revisar arras sant andreu",
      "comprar sin inmobiliaria sant andreu",
    ],
    savingsSalePrices: [200_000, 230_000, 260_000, 280_000, 300_000, 330_000, 380_000],
    highlightSalePrice: 280_000,
    tramitesAreaNote:
      "En Sant Andreu (Palomar, La Sagrera, Bon Pastor), compra entre particulares con arras claras y gestión documental post-arras hasta notaría.",
    benefitsAreaNote:
      "Checklist pre-escritura, cláusula 621-49 si hay hipoteca del comprador y seguimiento de certificados.",
    faq: faqZone("Sant Andreu"),
    analyticsPlacement: "comprar_piso_sant_andreu",
    gestorCtaPlacement: "comprar_piso_sant_andreu",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-sant-andreu"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-eixample",
    city: "Eixample",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Eixample — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Eixample? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia eixample",
      "comprar piso entre particulares eixample barcelona",
      "gestoría compra vivienda eixample",
      "revisar arras eixample",
      "comprar sin inmobiliaria eixample",
    ],
    savingsSalePrices: [350_000, 400_000, 450_000, 480_000, 520_000, 560_000, 620_000],
    highlightSalePrice: 450_000,
    tramitesAreaNote:
      "En el Eixample (Dreta, Esquerra, Sagrada Família), compra entre particulares con arras CCCat, certificados de comunidad en fincas señoriales y plazos realistas hasta notaría.",
    benefitsAreaNote:
      "Gestor que revisa cargas, parking y trasteros anexos en contrato antes de vincular arras definitivas.",
    faq: faqZone("Eixample"),
    analyticsPlacement: "comprar_piso_eixample",
    gestorCtaPlacement: "comprar_piso_eixample",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-eixample"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Gràcia — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Gràcia? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia gràcia",
      "comprar piso entre particulares gràcia barcelona",
      "gestoría compra vivienda gràcia",
      "revisar arras gràcia",
      "comprar sin inmobiliaria gràcia",
    ],
    savingsSalePrices: [300_000, 340_000, 380_000, 410_000, 440_000, 480_000, 530_000],
    highlightSalePrice: 410_000,
    tramitesAreaNote:
      "En Gràcia y barrios del distrito, compra entre particulares con foco en ITE, cèdula y arras equilibradas en edificios de principios de siglo.",
    benefitsAreaNote:
      "Checklist documental, comunidad y coordinación pre-escritura con compradores exigentes del centro de Barcelona.",
    faq: faqZone("Gràcia"),
    analyticsPlacement: "comprar_piso_gracia",
    gestorCtaPlacement: "comprar_piso_gracia",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-gracia"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-sants-montjuic",
    city: "Sants-Montjuïc",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sants-Montjuïc — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sants-Montjuïc? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sants-montjuïc",
      "comprar piso entre particulares sants-montjuïc barcelona",
      "gestoría compra vivienda sants-montjuïc",
      "revisar arras sants-montjuïc",
      "comprar sin inmobiliaria sants-montjuïc",
    ],
    savingsSalePrices: [240_000, 270_000, 300_000, 330_000, 360_000, 390_000, 430_000],
    highlightSalePrice: 330_000,
    tramitesAreaNote:
      "En Sants-Montjuïc (Sants, Hostafrancs, Poble-sec), gestoría para comprar sin agencia cuando ya tienes vendedor, con arras CCCat y seguimiento de comunidad.",
    benefitsAreaNote:
      "Informe semáforo, plazos de certificados y coordinación con notaría en operaciones rápidas del distrito.",
    faq: faqZone("Sants-Montjuïc"),
    analyticsPlacement: "comprar_piso_sants_montjuic",
    gestorCtaPlacement: "comprar_piso_sants_montjuic",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-sants-montjuic"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "badalona",
    city: "Badalona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Badalona — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Badalona? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia badalona",
      "comprar piso entre particulares badalona barcelona",
      "gestoría compra vivienda badalona",
      "revisar arras badalona",
      "comprar sin inmobiliaria badalona",
    ],
    savingsSalePrices: [170_000, 200_000, 230_000, 250_000, 270_000, 300_000, 340_000],
    highlightSalePrice: 250_000,
    tramitesAreaNote:
      "En Badalona (centre, Montigala, Gorg, La Salut), compra entre particulares con plazos de comunidad y arras adaptados al mercado del Maresme metropolitano.",
    benefitsAreaNote:
      "Gestor que persigue certificado de deuda cero y documentación al día para compradores de Barcelona y Badalona.",
    faq: faqZone("Badalona"),
    analyticsPlacement: "comprar_piso_badalona",
    gestorCtaPlacement: "comprar_piso_badalona",
    optionalLocalCompraHref: localServicioCompletoCompraHref("badalona"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "sabadell",
    city: "Sabadell",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sabadell — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sabadell? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sabadell",
      "comprar piso entre particulares sabadell barcelona",
      "gestoría compra vivienda sabadell",
      "revisar arras sabadell",
      "comprar sin inmobiliaria sabadell",
    ],
    savingsSalePrices: [180_000, 210_000, 240_000, 260_000, 280_000, 310_000, 350_000],
    highlightSalePrice: 260_000,
    tramitesAreaNote:
      "En Sabadell capital y barrios (centre, Eixample, Gràcia), compra de particular a particular con arras CCCat y revisión de ITE en fincas antiguas del Vallès.",
    benefitsAreaNote:
      "Tarifa plana frente al 3 % de inmobiliaria; gestor dedicado hasta escritura para compradores locales y de Barcelona.",
    faq: faqZone("Sabadell"),
    analyticsPlacement: "comprar_piso_sabadell",
    gestorCtaPlacement: "comprar_piso_sabadell",
    optionalLocalCompraHref: localServicioCompletoCompraHref("sabadell"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    city: "Sarrià-Sant Gervasi",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sarrià-Sant Gervasi — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sarrià-Sant Gervasi? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sarrià-sant gervasi",
      "comprar piso entre particulares sarrià-sant gervasi barcelona",
      "gestoría compra vivienda sarrià-sant gervasi",
      "revisar arras sarrià-sant gervasi",
      "comprar sin inmobiliaria sarrià-sant gervasi",
    ],
    savingsSalePrices: [380_000, 450_000, 520_000, 580_000, 650_000, 720_000, 850_000],
    highlightSalePrice: 580_000,
    tramitesAreaNote:
      "En Sarrià-Sant Gervasi (Pedralbes, Sant Gervasi, Bonanova), compra entre particulares con revisión de parking, anexos y arras CCCat en operaciones de alto importe.",
    benefitsAreaNote:
      "Gestor experto en fincas señoriales, ITE y certificados de comunidad exigentes antes de escritura.",
    faq: faqZone("Sarrià-Sant Gervasi"),
    analyticsPlacement: "comprar_piso_sarria_sant_gervasi",
    gestorCtaPlacement: "comprar_piso_sarria_sant_gervasi",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-sarria-sant-gervasi"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-nou-barris",
    city: "Nou Barris",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Nou Barris — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Nou Barris? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia nou barris",
      "comprar piso entre particulares nou barris barcelona",
      "gestoría compra vivienda nou barris",
      "revisar arras nou barris",
      "comprar sin inmobiliaria nou barris",
    ],
    savingsSalePrices: [160_000, 190_000, 220_000, 240_000, 260_000, 290_000, 320_000],
    highlightSalePrice: 240_000,
    tramitesAreaNote:
      "En Nou Barris (Verdun, Roquetes, Trinitat Vella, Porta), gestoría para comprar sin agencia con arras claras y seguimiento de comunidad en bloques de los años 60-70.",
    benefitsAreaNote:
      "Checklist documental, deuda cero de comunidad y coordinación hasta notaría con compradores de Barcelona.",
    faq: faqZone("Nou Barris"),
    analyticsPlacement: "comprar_piso_nou_barris",
    gestorCtaPlacement: "comprar_piso_nou_barris",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-nou-barris"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-ciutat-vella",
    city: "Ciutat Vella",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Ciutat Vella — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Ciutat Vella? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia ciutat vella",
      "comprar piso entre particulares ciutat vella barcelona",
      "gestoría compra vivienda ciutat vella",
      "revisar arras ciutat vella",
      "comprar sin inmobiliaria ciutat vella",
    ],
    savingsSalePrices: [250_000, 290_000, 330_000, 360_000, 400_000, 450_000, 520_000],
    highlightSalePrice: 360_000,
    tramitesAreaNote:
      "En Ciutat Vella (Gòtic, Raval, Born, Barceloneta), compra de particular a particular con foco en ITE, cèdula, protección patrimonial y arras equilibradas.",
    benefitsAreaNote:
      "Gestor que conoce fincas centenarias, cargas ocultas y plazos de certificados en el casco antiguo.",
    faq: faqZone("Ciutat Vella"),
    analyticsPlacement: "comprar_piso_ciutat_vella",
    gestorCtaPlacement: "comprar_piso_ciutat_vella",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-ciutat-vella"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "terrassa",
    city: "Terrassa",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Terrassa — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Terrassa? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia terrassa",
      "comprar piso entre particulares terrassa barcelona",
      "gestoría compra vivienda terrassa",
      "revisar arras terrassa",
      "comprar sin inmobiliaria terrassa",
    ],
    savingsSalePrices: [170_000, 200_000, 230_000, 250_000, 270_000, 300_000, 340_000],
    highlightSalePrice: 250_000,
    tramitesAreaNote:
      "En Terrassa (centre, Sant Pere, Sant Pere Nord, Les Fonts), compra entre particulares con arras CCCat y documentación para vendedores del Vallès y Barcelona.",
    benefitsAreaNote:
      "Tarifa plana frente al 3 % de inmobiliaria; seguimiento de comunidad e ITE en edificios industriales reconvertidos.",
    faq: faqZone("Terrassa"),
    analyticsPlacement: "comprar_piso_terrassa",
    gestorCtaPlacement: "comprar_piso_terrassa",
    optionalLocalCompraHref: localServicioCompletoCompraHref("terrassa"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Cornellà de Llobregat — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Cornellà de Llobregat? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia cornellà de llobregat",
      "comprar piso entre particulares cornellà de llobregat barcelona",
      "gestoría compra vivienda cornellà de llobregat",
      "revisar arras cornellà de llobregat",
      "comprar sin inmobiliaria cornellà de llobregat",
    ],
    savingsSalePrices: [180_000, 210_000, 240_000, 260_000, 280_000, 310_000, 350_000],
    highlightSalePrice: 260_000,
    tramitesAreaNote:
      "En Cornellà (centre, Sant Ildefons, Almeda), compra entre particulares del Baix Llobregat con plazos realistas de comunidad y arras adaptadas al vendedor barcelonés.",
    benefitsAreaNote:
      "Gestor dedicado, informe semáforo pre-escritura y coordinación con notaría sin desplazamientos a gestoría física.",
    faq: faqZone("Cornellà de Llobregat"),
    analyticsPlacement: "comprar_piso_cornella",
    gestorCtaPlacement: "comprar_piso_cornella",
    optionalLocalCompraHref: localServicioCompletoCompraHref("cornella-de-llobregat"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "sant-cugat-del-valles",
    city: "Sant Cugat del Vallès",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sant Cugat del Vallès — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sant Cugat del Vallès? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sant cugat del vallès",
      "comprar piso entre particulares sant cugat del vallès barcelona",
      "gestoría compra vivienda sant cugat del vallès",
      "revisar arras sant cugat del vallès",
      "comprar sin inmobiliaria sant cugat del vallès",
    ],
    savingsSalePrices: [320_000, 380_000, 420_000, 460_000, 500_000, 550_000, 620_000],
    highlightSalePrice: 460_000,
    tramitesAreaNote:
      "En Sant Cugat (centre, Mira-sol, Valldoreix), compra entre particulares con arras CCCat y revisión documental para vendedores del Vallès y Barcelona.",
    benefitsAreaNote:
      "Tarifa plana en un mercado de precios altos; gestor dedicado hasta escritura sin comisión del 3–5 %.",
    faq: faqZone("Sant Cugat del Vallès"),
    analyticsPlacement: "comprar_piso_sant_cugat",
    gestorCtaPlacement: "comprar_piso_sant_cugat",
    optionalLocalCompraHref: localServicioCompletoCompraHref("sant-cugat-del-valles"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "esplugues-de-llobregat",
    city: "Esplugues de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Esplugues de Llobregat — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Esplugues de Llobregat? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia esplugues de llobregat",
      "comprar piso entre particulares esplugues de llobregat barcelona",
      "gestoría compra vivienda esplugues de llobregat",
      "revisar arras esplugues de llobregat",
      "comprar sin inmobiliaria esplugues de llobregat",
    ],
    savingsSalePrices: [240_000, 270_000, 300_000, 330_000, 360_000, 390_000, 430_000],
    highlightSalePrice: 330_000,
    tramitesAreaNote:
      "En Esplugues (Can Vidalet, centre, Finestrelles), gestoría para comprar sin agencia con plazos de comunidad y arras adaptados al vendedor barcelonés.",
    benefitsAreaNote:
      "Checklist pre-escritura, certificado de deuda cero y coordinación con notaría 100 % online.",
    faq: faqZone("Esplugues de Llobregat"),
    analyticsPlacement: "comprar_piso_esplugues",
    gestorCtaPlacement: "comprar_piso_esplugues",
    optionalLocalCompraHref: localServicioCompletoCompraHref("esplugues-de-llobregat"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "castelldefels",
    city: "Castelldefels",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Castelldefels — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Castelldefels? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia castelldefels",
      "comprar piso entre particulares castelldefels barcelona",
      "gestoría compra vivienda castelldefels",
      "revisar arras castelldefels",
      "comprar sin inmobiliaria castelldefels",
    ],
    savingsSalePrices: [280_000, 320_000, 360_000, 400_000, 440_000, 480_000, 550_000],
    highlightSalePrice: 400_000,
    tramitesAreaNote:
      "En Castelldefels (centre, Montmar, Bellamar), compra de particular a particular con foco en segunda residencia, ITE y documentación de comunidad costera.",
    benefitsAreaNote:
      "Gestor que persigue certificados y arras equilibradas en operaciones con compradores de Barcelona y Baix Llobregat.",
    faq: faqZone("Castelldefels"),
    analyticsPlacement: "comprar_piso_castelldefels",
    gestorCtaPlacement: "comprar_piso_castelldefels",
    optionalLocalCompraHref: localServicioCompletoCompraHref("castelldefels"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "gava",
    city: "Gavà",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Gavà — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Gavà? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia gavà",
      "comprar piso entre particulares gavà barcelona",
      "gestoría compra vivienda gavà",
      "revisar arras gavà",
      "comprar sin inmobiliaria gavà",
    ],
    savingsSalePrices: [220_000, 250_000, 280_000, 310_000, 340_000, 380_000, 420_000],
    highlightSalePrice: 310_000,
    tramitesAreaNote:
      "En Gavà (centre, Gavà Mar, Santa Rosa), compra entre particulares del Garraf con arras CCCat y seguimiento documental hasta notaría.",
    benefitsAreaNote:
      "Tarifa plana frente a inmobiliaria; ideal si ya tienes comprador por portal o recomendación.",
    faq: faqZone("Gavà"),
    analyticsPlacement: "comprar_piso_gava",
    gestorCtaPlacement: "comprar_piso_gava",
    optionalLocalCompraHref: localServicioCompletoCompraHref("gava"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "sant-adria-de-besos",
    city: "Sant Adrià de Besòs",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sant Adrià de Besòs — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sant Adrià de Besòs? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sant adrià de besòs",
      "comprar piso entre particulares sant adrià de besòs barcelona",
      "gestoría compra vivienda sant adrià de besòs",
      "revisar arras sant adrià de besòs",
      "comprar sin inmobiliaria sant adrià de besòs",
    ],
    savingsSalePrices: [180_000, 210_000, 240_000, 260_000, 280_000, 310_000, 350_000],
    highlightSalePrice: 260_000,
    tramitesAreaNote:
      "En Sant Adrià de Besòs, compra entre particulares con arras claras, comunidad en bloques densos y vendedores de Barcelona capital y Badalona.",
    benefitsAreaNote:
      "Gestor legal dedicado, informe semáforo y coordinación hasta escritura sin pagar el 3–5 % sobre el precio.",
    faq: faqZone("Sant Adrià de Besòs"),
    analyticsPlacement: "comprar_piso_sant_adria",
    gestorCtaPlacement: "comprar_piso_sant_adria",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "sant-boi-de-llobregat",
    city: "Sant Boi de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sant Boi de Llobregat — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sant Boi de Llobregat? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sant boi de llobregat",
      "comprar piso entre particulares sant boi de llobregat barcelona",
      "gestoría compra vivienda sant boi de llobregat",
      "revisar arras sant boi de llobregat",
      "comprar sin inmobiliaria sant boi de llobregat",
    ],
    savingsSalePrices: [170_000, 200_000, 230_000, 250_000, 270_000, 300_000, 330_000],
    highlightSalePrice: 250_000,
    tramitesAreaNote:
      "En Sant Boi (centre, Marianao, Camps Blancs), compra entre particulares del Baix Llobregat con arras CCCat y seguimiento de comunidad hasta notaría.",
    benefitsAreaNote:
      "Tarifa plana frente al 3 %; gestor dedicado para compradores de Barcelona y área metropolitana.",
    faq: faqZone("Sant Boi de Llobregat"),
    analyticsPlacement: "comprar_piso_sant_boi",
    gestorCtaPlacement: "comprar_piso_sant_boi",
    optionalLocalCompraHref: localServicioCompletoCompraHref("sant-boi-de-llobregat"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "sant-joan-despi",
    city: "Sant Joan Despí",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Sant Joan Despí — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Sant Joan Despí? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia sant joan despí",
      "comprar piso entre particulares sant joan despí barcelona",
      "gestoría compra vivienda sant joan despí",
      "revisar arras sant joan despí",
      "comprar sin inmobiliaria sant joan despí",
    ],
    savingsSalePrices: [220_000, 250_000, 280_000, 310_000, 340_000, 370_000, 410_000],
    highlightSalePrice: 310_000,
    tramitesAreaNote:
      "En Sant Joan Despí (centre, Les Planes, Torreblanca), compra entre particulares con plazos realistas de documentación y arras adaptadas al vendedor barcelonés.",
    benefitsAreaNote:
      "Checklist pre-escritura, informe semáforo y coordinación con notaría 100 % online.",
    faq: faqZone("Sant Joan Despí"),
    analyticsPlacement: "comprar_piso_sant_joan_despi",
    gestorCtaPlacement: "comprar_piso_sant_joan_despi",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "mollet-del-valles",
    city: "Mollet del Vallès",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Mollet del Vallès — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Mollet del Vallès? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia mollet del vallès",
      "comprar piso entre particulares mollet del vallès barcelona",
      "gestoría compra vivienda mollet del vallès",
      "revisar arras mollet del vallès",
      "comprar sin inmobiliaria mollet del vallès",
    ],
    savingsSalePrices: [160_000, 190_000, 220_000, 240_000, 260_000, 290_000, 320_000],
    highlightSalePrice: 240_000,
    tramitesAreaNote:
      "En Mollet del Vallès (centre, Gallecs), compra de particular a particular con arras CCCat y revisión documental para vendedores del Vallès Oriental.",
    benefitsAreaNote:
      "Gestor legal dedicado; tarifa plana frente a compra.",
    faq: faqZone("Mollet del Vallès"),
    analyticsPlacement: "comprar_piso_mollet",
    gestorCtaPlacement: "comprar_piso_mollet",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-poblenou",
    city: "Poblenou",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en Poblenou — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en Poblenou? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia poblenou",
      "comprar piso entre particulares poblenou barcelona",
      "gestoría compra vivienda poblenou",
      "revisar arras poblenou",
      "comprar sin inmobiliaria poblenou",
    ],
    savingsSalePrices: [300_000, 340_000, 380_000, 410_000, 440_000, 480_000, 530_000],
    highlightSalePrice: 410_000,
    tramitesAreaNote:
      "En Poblenou (22@, Diagonal Mar, La Verneda), compra entre particulares con arras CCCat, comunidades multi-bloque y vendedores exigentes del distrito de Sant Martí.",
    benefitsAreaNote:
      "Gestor que conoce el mercado del 22@ y operaciones rápidas con documentación al día.",
    faq: faqZone("Poblenou"),
    analyticsPlacement: "comprar_piso_poblenou",
    gestorCtaPlacement: "comprar_piso_poblenou",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona-poblenou"),
    showBarcelonaCompraModules: true,
  },
  {
    slug: "barcelona-born",
    city: "El Born",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Comprar piso sin agencia en El Born — gestor comprador 890 €",
    metaDescription:
      "¿Compras entre particulares en El Born? Gestor Livendia en tu bando: reserva, arras, ITE y notaría. 890 € IVA incl. Sin comisión sobre el precio.",
    keywords: [
      "comprar piso sin agencia el born",
      "comprar piso entre particulares el born barcelona",
      "gestoría compra vivienda el born",
      "revisar arras el born",
      "comprar sin inmobiliaria el born",
    ],
    savingsSalePrices: [320_000, 360_000, 400_000, 430_000, 460_000, 500_000, 560_000],
    highlightSalePrice: 430_000,
    tramitesAreaNote:
      "En El Born (Ciutat Vella), comprar sin agencia con foco en fincas históricas, ITE, cèdula d'habitabilitat y arras CCCat equilibradas.",
    benefitsAreaNote:
      "Gestor experto en casco antiguo; informe semáforo antes de vincular arras definitivas.",
    faq: faqZone("El Born"),
    analyticsPlacement: "comprar_piso_born",
    gestorCtaPlacement: "comprar_piso_born",
    optionalLocalCompraHref: localServicioCompletoCompraHref("barcelona"),
    showBarcelonaCompraModules: true,
  },
];
