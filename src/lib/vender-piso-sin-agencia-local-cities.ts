import { SERVICIO_COMPLETO_CV_PRICE_EUR, SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { VENDER_PISO_DIFFERENTIATION } from "@/lib/vender-piso-sin-agencia-differentiation";

export const VENTA_PARTICULAR_TRAMITES = [
  {
    title: "Contrato de reserva",
    body: "Redacción adaptada a tu operación: señal, plazos, condiciones de desistimiento y coherencia con el precio pactado.",
  },
  {
    title: "Contrato de arras",
    body: "Penitenciales o confirmatorias, con cláusulas que protegen al vendedor cuando ya tienes comprador particular.",
  },
  {
    title: "Nota simple y cargas registrales",
    body: "Verificamos titularidad, hipotecas pendientes y gravámenes antes de que firmes compromisos que te atan.",
  },
  {
    title: "Documentación de la comunidad",
    body: "Actas, derramas, certificado de estar al corriente y coherencia con lo que declaras al comprador.",
  },
  {
    title: "Certificados e ITE si procede",
    body: "Orientación sobre cédula, eficiencia energética, inspección técnica de edificios y otros requisitos urbanísticos.",
  },
  {
    title: "Coordinación con notaría",
    body: "Checklist pre-escritura, calendario con el comprador y revisión de que lo pactado coincide con lo que se firma.",
  },
] as const;

const IVA_MULTIPLIER = 1.21;

export type AgencySavingsRow = {
  salePrice: number;
  agency3WithVat: number;
  agency5WithVat: number;
  livendiaPrice: number;
  savingVs3: number;
  savingVs5: number;
};

/** Overrides opcionales de copy por ciudad (p. ej. Barcelona: venta entre particulares). */
export type VenderPisoSinAgenciaCopyOverrides = {
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

export type VenderPisoSinAgenciaLandingConfig = {
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
  optionalLocalVentaHref?: string;
  copy?: VenderPisoSinAgenciaCopyOverrides;
};

export type VenderPisoSinAgenciaCityDefinition = Omit<VenderPisoSinAgenciaLandingConfig, "path">;

export const VENDER_PISO_SIN_AGENCIA_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "sevilla",
  "barcelona",
  "valencia",
  "malaga",
  "bilbao",
  "granada",
  "zaragoza",
];

export function interpolateVenderPisoCopy(template: string, priceLabel: string): string {
  return template.replace(/\{\{price\}\}/g, priceLabel);
}

export function localVenderPisoSinAgenciaHref(slug: string): string {
  return `/servicios/vender-piso-sin-agencia-${slug}`;
}

/** @deprecated Usar localVenderPisoSinAgenciaHref("madrid") */
export const VENDER_PISO_SIN_AGENCIA_MADRID_PATH = localVenderPisoSinAgenciaHref("madrid");

export function agencyCommissionWithVat(salePrice: number, percent: number): number {
  return Math.round(salePrice * (percent / 100) * IVA_MULTIPLIER);
}

export function buildAgencySavingsRows(
  salePrices: readonly number[],
  livendiaPrice = SERVICIO_COMPLETO_CV_PRICE_EUR,
): AgencySavingsRow[] {
  return salePrices.map((salePrice) => {
    const agency3WithVat = agencyCommissionWithVat(salePrice, 3);
    const agency5WithVat = agencyCommissionWithVat(salePrice, 5);
    return {
      salePrice,
      agency3WithVat,
      agency5WithVat,
      livendiaPrice,
      savingVs3: agency3WithVat - livendiaPrice,
      savingVs5: agency5WithVat - livendiaPrice,
    };
  });
}

export function formatEur(amount: number): string {
  return `${amount.toLocaleString("es-ES")} €`;
}

function faqForCity(city: string): VenderPisoSinAgenciaLandingConfig["faq"] {
  return [
    {
      question: "¿Puedo vender mi piso de particular a particular si ya tengo comprador?",
      answer: `Sí. Es el escenario ideal para el servicio completo de venta Livendia: no necesitas agencia para captar comprador, pero sí un gestor que redacte reserva y arras, ordene la documentación y te acompañe hasta la escritura en ${city}.`,
    },
    {
      question: `¿Qué trámites necesito para vender un piso entre particulares en ${city}?`,
      answer: `Reserva (si aplica), contrato de arras, nota simple registral, certificados de la comunidad, revisión de cargas e impuestos, coordinación con notaría y, en su caso, plusvalía municipal. Livendia te guía en cada hito con tarifa plana de ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.`,
    },
    {
      question: `¿Cuánto ahorro respecto a una agencia inmobiliaria en ${city}?`,
      answer: `Si ya tienes comprador, pagar un 3–5 % sobre el precio de venta más IVA suele ser desproporcionado. Livendia cuesta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} fijos: en la tabla de esta página ves el ahorro según el precio de tu vivienda.`,
    },
    {
      question: "¿Vale la pena usar contratos copiados de internet?",
      answer:
        "No te la juegues: plantillas genéricas suelen omitir plazos, arras penitenciales, cargas o entrega de llaves. Un error en el tramo privado puede retrasar meses la venta o generar reclamaciones. Un gestor legal de Livendia redacta a medida.",
    },
    {
      question: "¿Livendia busca comprador por mí?",
      answer:
        "No. No somos agencia de marketing ni portal inmobiliario. El servicio cubre el acompañamiento jurídico-documental cuando vendes sin agencia y ya tienes comprador particular.",
    },
  ];
}

export const VENDER_PISO_SIN_AGENCIA_CITIES: VenderPisoSinAgenciaCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    metaTitle: "Vender piso sin agencia en Madrid | Ya tienes comprador particular",
    metaDescription:
      "¿Ya tienes comprador particular para tu piso en Madrid? Gestor legal Livendia: reserva, arras, trámites de venta y coordinación con notaría. Tarifa plana 890 € IVA incl. Ahorra comisiones abusivas.",
    keywords: [
      "vender piso sin agencia madrid",
      "vender piso de particular cuando ya tienes comprador",
      "trámites para vender piso particular",
      "venta entre particulares madrid",
      "contrato arras vendedor madrid",
      "vender piso sin inmobiliaria",
    ],
    savingsSalePrices: [180_000, 220_000, 250_000, 300_000, 350_000, 400_000, 500_000],
    highlightSalePrice: 300_000,
    tramitesAreaNote:
      "El servicio completo de venta Livendia cubre el tramo donde más se pierde si improvisas: desde la reserva hasta la firma en notaría, con gestor legal dedicado.",
    benefitsAreaNote: "Checklist documental, comunidad, registral y coordinación pre-escritura en Madrid.",
    faq: faqForCity("Madrid"),
    analyticsPlacement: "vender_piso_madrid",
    gestorCtaPlacement: "vender_piso_madrid",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/madrid",
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: "Vender piso sin agencia en Sevilla | Ya tienes comprador particular",
    metaDescription:
      "¿Ya tienes comprador particular para tu piso en Sevilla? Gestor legal Livendia: reserva, arras, trámites de venta y coordinación con notaría. Tarifa plana 890 € IVA incl. Ahorra comisiones abusivas.",
    keywords: [
      "vender piso sin agencia sevilla",
      "vender piso de particular cuando ya tienes comprador sevilla",
      "trámites para vender piso particular sevilla",
      "venta entre particulares sevilla",
      "vender piso sin inmobiliaria sevilla",
      "contrato arras vendedor sevilla",
    ],
    savingsSalePrices: [140_000, 180_000, 220_000, 250_000, 280_000, 320_000, 400_000],
    highlightSalePrice: 250_000,
    tramitesAreaNote:
      "En Sevilla capital y área metropolitana (Triana, Nervión, Los Remedios, Tomares, Dos Hermanas…), el servicio cubre reserva, arras, documentación y coordinación con notaría con un gestor legal dedicado.",
    benefitsAreaNote:
      "Checklist documental, comunidad de propietarios, registral y coordinación pre-escritura en Sevilla y alrededores.",
    faq: faqForCity("Sevilla"),
    analyticsPlacement: "vender_piso_sevilla",
    gestorCtaPlacement: "vender_piso_sevilla",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/sevilla",
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso sin comisiones Barcelona — 890 € IVA incl. | Livendia",
    metaDescription:
      "Vender piso sin comisiones en Barcelona: venta entre particulares con gestoría por 890 € IVA incl. Reserva, arras, documentación y notaría. Sin agencia del 3–5 %. Eixample, Gràcia, Sant Martí.",
    keywords: [
      "vender piso en barcelona sin comisiones",
      "vender piso sin comisiones en barcelona",
      "inmobiliarias en barcelona sin comisiones",
      "venta de particular a particular barcelona",
      "venta entre particulares barcelona",
      "vender piso sin agencia barcelona",
      "gestoría venta piso particular barcelona",
      "trámites venta entre particulares barcelona",
      "vender piso sin inmobiliaria barcelona",
      "gestionar venta piso particular barcelona",
    ],
    savingsSalePrices: [200_000, 280_000, 320_000, 400_000, 450_000, 500_000, 600_000],
    highlightSalePrice: 400_000,
    tramitesAreaNote:
      "En Barcelona capital y área metropolitana (Eixample, Gràcia, Sant Martí, L'Hospitalet, Badalona, Sants…), un gestor legal experto de Livendia ordena reserva, arras, documentación y coordinación con notaría mientras tú vendes entre particulares.",
    benefitsAreaNote:
      "Checklist documental, comunidad de propietarios, registral y coordinación pre-escritura en Barcelona y alrededores.",
    faq: [
      {
        question: "¿Cómo vender piso en Barcelona sin comisiones?",
        answer:
          "Vendes entre particulares (Idealista, recomendación o comprador que ya tienes) y contratas gestoría en lugar de agencia: Livendia redacta reserva y arras, ordena documentación y coordina notaría por 890 € IVA incl., sin porcentaje sobre el precio de venta.",
      },
      {
        question: "¿Cómo vender piso sin comisiones en Barcelona?",
        answer:
          "No necesitas inmobiliaria si llevas tú la captación o ya tienes comprador. Livendia es gestoría especializada en venta entre particulares: tarifa plana 890 € IVA incl., gestor legal dedicado y trámites hasta escritura — sin comisión del 3–5 %.",
      },
      {
        question: "¿Hay inmobiliarias en Barcelona sin comisiones?",
        answer:
          "Las agencias tradicionales suelen cobrar un 3–5 % sobre el precio más IVA. Livendia no es agencia: somos gestoría con tarifa fija de 890 € IVA incl. para propietarios que venden sin intermediario y quieren contratos y trámites bien hechos.",
      },
      {
        question: "¿Qué es la venta de particular a particular en Barcelona?",
        answer:
          "Es cuando tú, como propietario, vendes tu piso a otro particular sin pagar comisión a una agencia inmobiliaria. Livendia es la gestoría que te acompaña en contratos, documentación y trámites hasta la escritura, con tarifa plana de 890 € IVA incl.",
      },
      {
        question: "¿Necesito una agencia para vender mi piso en Barcelona?",
        answer:
          "No es obligatorio. Si prefieres no pagar un 3–5 % sobre el precio de venta y llevas tú la captación (Idealista, recomendación, conocidos) o ya tienes comprador, una gestoría especializada como Livendia cubre la parte legal con un gestor experto dedicado a tu operación.",
      },
      {
        question: "¿Qué trámites incluye la gestoría para vender entre particulares en Barcelona?",
        answer:
          "Reserva (si aplica), contrato de arras, nota simple registral, certificados de la comunidad, revisión de cargas, coordinación con notaría y orientación sobre plusvalía e impuestos del vendedor. Todo con tarifa plana de 890 € IVA incl., sin comisiones sobre el precio de venta.",
      },
      {
        question: "¿Cuánto ahorro respecto a una agencia inmobiliaria en Barcelona?",
        answer:
          "En un mercado con precios medios altos, una comisión del 3–5 % más IVA puede suponer miles de euros. Livendia cuesta 890 € fijos: en la tabla de esta página ves el ahorro según el precio de tu vivienda en Barcelona.",
      },
      {
        question: "¿Cómo funciona el gestor experto asignado a mi venta?",
        answer:
          "Te asignamos un gestor legal experto en venta inmobiliaria entre particulares. No pasas por un call center: es la misma persona que conoce tu expediente, redacta contratos, ordena la documentación y responde tus dudas con agilidad por WhatsApp o teléfono durante todo el proceso.",
      },
      {
        question: "¿Livendia busca comprador o publica mi piso?",
        answer:
          "No. No somos agencia ni portal inmobiliario. Somos gestoría: acompañamiento jurídico-documental para propietarios que venden sin agencia y gestionan la venta entre particulares.",
      },
    ],
    analyticsPlacement: "vender_piso_barcelona",
    gestorCtaPlacement: "vender_piso_barcelona",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/barcelona",
    copy: {
      heroBadge: "Venta entre particulares · Barcelona",
      heroH1: "Venta de particular a particular en Barcelona — sin agencias ni comisiones abusivas",
      heroLead:
        "¿Estás vendiendo tu piso y no quieres una inmobiliaria? Livendia es la gestoría especializada en el servicio inmobiliario para particulares: un gestor legal experto gestiona reserva, arras, trámites y coordinación con notaría por {{price}} (IVA incl.).",
      heroBullets: [
        "Venta entre particulares con gestoría, no con agencia del 3–5 %",
        "Trámites y contratos a medida para propietarios que venden solos",
        "Gestor legal experto dedicado a tu operación — atención directa por WhatsApp y teléfono",
      ],
      savingsIntro:
        "En Barcelona, las agencias suelen cobrar un 3 % o 5 % sobre el precio de venta más IVA solo por intermediar. Si tú llevas la venta entre particulares, Livendia te da el mismo acompañamiento jurídico por tarifa plana.",
      benefitsFourthTitle: "Gestoría para particulares",
      benefitsFourthText:
        "Especialistas en venta inmobiliaria entre particulares: Idealista, recomendación, familia o comprador que ya tienes.",
      disclaimer:
        "Livendia no busca comprador ni hace marketing inmobiliario. Somos gestoría: acompañamiento jurídico-documental para propietarios que venden sin agencia. Notaría, registro, plusvalía e IRPF del vendedor son independientes; te orientamos sobre plazos y documentación.",
      finalCtaTitle: "Vende en Barcelona entre particulares con gestoría de confianza",
      finalCtaSubtitle:
        "Tarifa plana {{price}} IVA incl.: reserva, arras, trámites y notaría con gestor legal experto dedicado.",
      faqTitle: "Preguntas sobre venta de particular a particular en Barcelona",
      faqSubtitle: "Gestoría inmobiliaria para propietarios, trámites y ahorro frente a comisiones.",
      waPrefill:
        "Hola, estoy vendiendo mi piso en Barcelona entre particulares (sin agencia) y necesito gestoría para los trámites. Me interesa el servicio completo de venta Livendia.",
      jsonLdServiceName: "Venta de particular a particular en Barcelona con gestoría Livendia",
      imageAlt: "Venta entre particulares en Barcelona con gestoría Livendia",
    },
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: "Vender piso sin agencia en Valencia | Ya tienes comprador particular",
    metaDescription:
      "¿Ya tienes comprador particular para tu piso en Valencia? Gestor legal Livendia: reserva, arras, trámites de venta y coordinación con notaría. Tarifa plana 890 € IVA incl. Ahorra comisiones abusivas.",
    keywords: [
      "vender piso sin agencia valencia",
      "venta entre particulares valencia",
      "vender piso de particular cuando ya tienes comprador valencia",
      "trámites para vender piso particular valencia",
      "gestoría venta piso particular valencia",
      "vender piso sin inmobiliaria valencia",
      "contrato arras vendedor valencia",
    ],
    savingsSalePrices: [150_000, 190_000, 230_000, 280_000, 320_000, 380_000, 450_000],
    highlightSalePrice: 280_000,
    tramitesAreaNote:
      "En Valencia capital y área metropolitana (Ruzafa, Benimaclet, Campanar, Malvarrosa, Mislata, Torrent…), el servicio cubre reserva, arras, documentación y coordinación con notaría con un gestor legal dedicado.",
    benefitsAreaNote:
      "Checklist documental, comunidad de propietarios, registral y coordinación pre-escritura en Valencia y alrededores.",
    faq: faqForCity("Valencia"),
    analyticsPlacement: "vender_piso_valencia",
    gestorCtaPlacement: "vender_piso_valencia",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/valencia",
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: "Vender piso sin agencia en Málaga | Ya tienes comprador particular",
    metaDescription:
      "¿Ya tienes comprador particular para tu piso en Málaga? Gestor legal Livendia: reserva, arras, trámites de venta y coordinación con notaría. Tarifa plana 890 € IVA incl. Ahorra comisiones abusivas.",
    keywords: [
      "vender piso sin agencia malaga",
      "venta entre particulares malaga",
      "vender piso de particular cuando ya tienes comprador malaga",
      "trámites para vender piso particular malaga",
      "gestoría venta piso particular malaga",
      "vender piso sin inmobiliaria malaga",
      "contrato arras vendedor malaga",
    ],
    savingsSalePrices: [160_000, 200_000, 250_000, 320_000, 380_000, 450_000, 550_000],
    highlightSalePrice: 320_000,
    tramitesAreaNote:
      "En Málaga capital y Costa del Sol (Teatinos, El Palo, Torremolinos, Rincón de la Victoria, Benalmádena…), el servicio cubre reserva, arras, documentación y coordinación con notaría con un gestor legal dedicado.",
    benefitsAreaNote:
      "Checklist documental, comunidad de propietarios, registral y coordinación pre-escritura en Málaga y alrededores.",
    faq: faqForCity("Málaga"),
    analyticsPlacement: "vender_piso_malaga",
    gestorCtaPlacement: "vender_piso_malaga",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/malaga",
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    metaTitle: "Vender piso sin agencia en Bilbao | Ya tienes comprador particular",
    metaDescription:
      "¿Ya tienes comprador particular para tu piso en Bilbao? Gestor legal Livendia: reserva, arras, trámites de venta y coordinación con notaría. Tarifa plana 890 € IVA incl. Ahorra comisiones abusivas.",
    keywords: [
      "vender piso sin agencia bilbao",
      "venta entre particulares bilbao",
      "vender piso de particular cuando ya tienes comprador bilbao",
      "trámites para vender piso particular bilbao",
      "gestoría venta piso particular bilbao",
      "vender piso sin inmobiliaria bilbao",
      "contrato arras vendedor bilbao",
    ],
    savingsSalePrices: [200_000, 260_000, 320_000, 380_000, 420_000, 480_000, 550_000],
    highlightSalePrice: 380_000,
    tramitesAreaNote:
      "En Bilbao y área metropolitana (Abando, Deusto, Getxo, Barakaldo, Portugalete, Santurtzi…), el servicio cubre reserva, arras, documentación y coordinación con notaría con un gestor legal dedicado.",
    benefitsAreaNote:
      "Checklist documental, comunidad de propietarios, registral y coordinación pre-escritura en Bilbao y alrededores.",
    faq: faqForCity("Bilbao"),
    analyticsPlacement: "vender_piso_bilbao",
    gestorCtaPlacement: "vender_piso_bilbao",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/bilbao",
  },
  {
    slug: "granada",
    city: "Granada",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: "Vender piso sin comisiones Granada — 890 € IVA incl. | Livendia",
    metaDescription:
      "Vender piso entre particulares en Granada: gestoría por 890 € IVA incl. Reserva, arras, trámites y notaría. Sin agencia del 3–5 %. Albaicín, Zaidín, Realejo.",
    keywords: [
      "vender piso sin comisiones granada",
      "vender piso sin agencia granada",
      "venta entre particulares granada",
      "gestoría venta piso particular granada",
      "vender piso sin inmobiliaria granada",
    ],
    savingsSalePrices: [140_000, 170_000, 200_000, 230_000, 260_000, 300_000, 350_000],
    highlightSalePrice: 170_000,
    tramitesAreaNote:
      "En Granada capital y área metropolitana (Albaicín, Zaidín, Realejo, Armilla, Maracena…), el gestor legal cubre reserva, arras, documentación y coordinación con notaría cuando vendes entre particulares.",
    benefitsAreaNote:
      "Ideal si ya tienes comprador (Idealista, UGR, recomendación): checklist registral, comunidad y pre-escritura en Granada.",
    faq: faqForCity("Granada"),
    analyticsPlacement: "vender_piso_granada",
    gestorCtaPlacement: "vender_piso_granada",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta-local/granada",
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    metaTitle: "Vender piso sin comisiones Zaragoza — 890 € IVA incl. | Livendia",
    metaDescription:
      "Vender piso entre particulares en Zaragoza: gestoría por 890 € IVA incl. Reserva, arras, documentación y notaría. Sin comisión de agencia. Actur, Delicias, Centro.",
    keywords: [
      "vender piso sin comisiones zaragoza",
      "vender piso sin agencia zaragoza",
      "venta entre particulares zaragoza",
      "gestoría venta piso particular zaragoza",
      "vender piso sin inmobiliaria zaragoza",
    ],
    savingsSalePrices: [130_000, 160_000, 190_000, 220_000, 250_000, 280_000, 320_000],
    highlightSalePrice: 190_000,
    tramitesAreaNote:
      "En Zaragoza capital y área (Actur, Delicias, Centro Histórico, Universidad…), acompañamiento legal de venta entre particulares con gestor dedicado.",
    benefitsAreaNote:
      "Checklist documental, comunidad y coordinación pre-escritura en Zaragoza — tarifa plana frente al 3 % de inmobiliaria.",
    faq: faqForCity("Zaragoza"),
    analyticsPlacement: "vender_piso_zaragoza",
    gestorCtaPlacement: "vender_piso_zaragoza",
    optionalLocalVentaHref: "/servicios/servicio-completo-venta",
  },
];

export function toVenderPisoSinAgenciaConfig(
  def: VenderPisoSinAgenciaCityDefinition,
): VenderPisoSinAgenciaLandingConfig {
  const diff = VENDER_PISO_DIFFERENTIATION[def.slug];
  return {
    ...def,
    ...(diff?.keywords ? { keywords: [...diff.keywords] } : {}),
    ...(diff?.metaTitle ? { metaTitle: diff.metaTitle } : {}),
    ...(diff?.metaDescription ? { metaDescription: diff.metaDescription } : {}),
    ...(diff?.tramitesAreaNote ? { tramitesAreaNote: diff.tramitesAreaNote } : {}),
    ...(diff?.benefitsAreaNote ? { benefitsAreaNote: diff.benefitsAreaNote } : {}),
    ...(diff?.faq ? { faq: diff.faq } : {}),
    copy: { ...def.copy, ...diff?.copy },
    path: localVenderPisoSinAgenciaHref(def.slug),
  };
}

export function getVenderPisoSinAgenciaCity(slug: string): VenderPisoSinAgenciaCityDefinition | undefined {
  return VENDER_PISO_SIN_AGENCIA_CITIES.find((c) => c.slug === slug);
}

/** Config lista para render (merge de copy diferenciado por ciudad). */
export function getVenderPisoSinAgenciaLandingConfig(
  slug: string,
): VenderPisoSinAgenciaLandingConfig | undefined {
  const def = getVenderPisoSinAgenciaCity(slug);
  return def ? toVenderPisoSinAgenciaConfig(def) : undefined;
}

export function isVenderPisoSinAgenciaSlugPublished(slug: string): boolean {
  return VENDER_PISO_SIN_AGENCIA_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedVenderPisoSinAgenciaCities(): VenderPisoSinAgenciaCityDefinition[] {
  const pub = new Set(VENDER_PISO_SIN_AGENCIA_PUBLISHED_SLUGS);
  return VENDER_PISO_SIN_AGENCIA_CITIES.filter((c) => pub.has(c.slug));
}

/** Ciudades SEO publicadas con landing dedicada vender sin agencia. */
export function getVentaParticularCityLinks(): { slug: string; city: string; href: string }[] {
  return getPublishedVenderPisoSinAgenciaCities().map((c) => ({
    slug: c.slug,
    city: c.city,
    href: localVenderPisoSinAgenciaHref(c.slug),
  }));
}
