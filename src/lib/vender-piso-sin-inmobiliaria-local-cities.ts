import {
  buildAgencySavingsRows,
  formatEur,
  VENTA_PARTICULAR_TRAMITES,
  type AgencySavingsRow,
} from "@/lib/vender-piso-sin-agencia-local-cities";

export const VENDER_PISO_SIN_INMOBILIARIA_BASE = "/vender-piso-sin-inmobiliaria";

export type VenderPisoSinInmobiliariaHowStep = {
  title: string;
  body: string;
};

export type VenderPisoSinInmobiliariaServiceItem = {
  title: string;
  body: string;
  href?: string;
};

export type VenderPisoSinInmobiliariaCompareRow = {
  feature: string;
  livendia: string;
  agency: string;
  alone: string;
};

export type VenderPisoSinInmobiliariaRelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type VenderPisoSinInmobiliariaLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  heroBadge: string;
  heroH1: string;
  heroLead: string;
  heroBullets: readonly string[];
  introTitle: string;
  introParagraphs: readonly string[];
  howItWorksTitle: string;
  howItWorksIntro: string;
  howItWorksSteps: readonly VenderPisoSinInmobiliariaHowStep[];
  servicesTitle: string;
  servicesIntro: string;
  servicesIncluded: readonly VenderPisoSinInmobiliariaServiceItem[];
  compareTitle: string;
  compareIntro: string;
  compareRows: readonly VenderPisoSinInmobiliariaCompareRow[];
  neighborhoodsTitle: string;
  neighborhoodsIntro: string;
  neighborhoods: readonly string[];
  savingsSalePrices: readonly number[];
  highlightSalePrice: number;
  savingsIntro: string;
  tramitesAreaNote: string;
  benefitsAreaNote: string;
  disclaimer: string;
  faq: readonly { question: string; answer: string }[];
  faqTitle: string;
  faqSubtitle: string;
  finalCtaTitle: string;
  finalCtaSubtitle: string;
  waPrefill: string;
  jsonLdServiceName: string;
  imageAlt: string;
  analyticsPlacement: string;
  gestorCtaPlacement: string;
  relatedLinks: readonly VenderPisoSinInmobiliariaRelatedLink[];
  legacyVenderSinAgenciaHref?: string;
  servicioCompletoVentaLocalHref?: string;
  gestoriaHref?: string;
  arrasLocalHref?: string;
};

export type VenderPisoSinInmobiliariaCityDefinition = Omit<VenderPisoSinInmobiliariaLandingConfig, "path">;

export const VENDER_PISO_SIN_INMOBILIARIA_PUBLISHED_SLUGS: readonly string[] = ["barcelona", "madrid", "valencia", "sevilla", "bilbao", "malaga", "granada", "zaragoza"];

/** Ciudades con guía pilar editorial (no landing comercial genérica). */
export const VENDER_PISO_SIN_INMOBILIARIA_PILLAR_SLUGS: readonly string[] = ["barcelona", "madrid", "valencia", "sevilla", "bilbao", "malaga", "granada", "zaragoza"];

export function isVenderPisoSinInmobiliariaPillarSlug(slug: string): boolean {
  return (VENDER_PISO_SIN_INMOBILIARIA_PILLAR_SLUGS as readonly string[]).includes(slug);
}

export function getVenderPisoSinInmobiliariaPillarCityLabel(slug: string): string {
  const labels: Record<string, string> = {
    barcelona: "Barcelona",
    madrid: "Madrid",
    valencia: "Valencia",
    sevilla: "Sevilla",
    bilbao: "Bilbao",
    malaga: "Málaga",
    granada: "Granada",
    zaragoza: "Zaragoza",
  };
  return labels[slug] ?? slug;
}

export function localVenderPisoSinInmobiliariaHref(slug: string): string {
  return `${VENDER_PISO_SIN_INMOBILIARIA_BASE}/${slug}`;
}

export function getVenderPisoSinInmobiliariaCity(
  slug: string,
): VenderPisoSinInmobiliariaCityDefinition | undefined {
  return VENDER_PISO_SIN_INMOBILIARIA_CITIES.find((c) => c.slug === slug);
}

export function isVenderPisoSinInmobiliariaSlugPublished(slug: string): boolean {
  return VENDER_PISO_SIN_INMOBILIARIA_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedVenderPisoSinInmobiliariaCities(): VenderPisoSinInmobiliariaCityDefinition[] {
  const pub = new Set(VENDER_PISO_SIN_INMOBILIARIA_PUBLISHED_SLUGS);
  const fromCatalog = VENDER_PISO_SIN_INMOBILIARIA_CITIES.filter((c) => pub.has(c.slug));
  const catalogSlugs = new Set(fromCatalog.map((c) => c.slug));
  const pillarOnly = VENDER_PISO_SIN_INMOBILIARIA_PUBLISHED_SLUGS.filter((slug) => !catalogSlugs.has(slug)).map(
    (slug) =>
      ({
        slug,
        city: getVenderPisoSinInmobiliariaPillarCityLabel(slug),
        schemaAdministrativeArea:
          slug === "madrid"
            ? "Comunidad de Madrid"
            : slug === "valencia"
              ? "Comunidad Valenciana"
              : slug === "sevilla"
                ? "Andalucía"
                : slug === "bilbao"
                  ? "País Vasco"
                  : slug === "malaga" || slug === "granada"
                    ? "Andalucía"
                    : "Cataluña",
        metaTitle: "",
        metaDescription: "",
        keywords: [],
        heroBadge: "",
        heroH1: "",
        heroLead: "",
        heroBullets: [],
        introTitle: "",
        introParagraphs: [],
        howItWorksTitle: "",
        howItWorksIntro: "",
        howItWorksSteps: [],
        servicesTitle: "",
        servicesIntro: "",
        servicesIncluded: [],
        compareTitle: "",
        compareIntro: "",
        compareRows: [],
        neighborhoodsTitle: "",
        neighborhoodsIntro: "",
        neighborhoods: [],
        savingsSalePrices: [],
        highlightSalePrice: 0,
        savingsIntro: "",
        tramitesAreaNote: "",
        benefitsAreaNote: "",
        disclaimer: "",
        faq: [],
        faqTitle: "",
        faqSubtitle: "",
        finalCtaTitle: "",
        finalCtaSubtitle: "",
        waPrefill: "",
        jsonLdServiceName: "",
        imageAlt: "",
        analyticsPlacement: "",
        gestorCtaPlacement: "",
        relatedLinks: [],
      }) satisfies VenderPisoSinInmobiliariaCityDefinition,
  );
  return [...fromCatalog, ...pillarOnly];
}

export function toVenderPisoSinInmobiliariaConfig(
  def: VenderPisoSinInmobiliariaCityDefinition,
): VenderPisoSinInmobiliariaLandingConfig {
  return { ...def, path: localVenderPisoSinInmobiliariaHref(def.slug) };
}

export function getVenderPisoSinInmobiliariaLandingConfig(
  slug: string,
): VenderPisoSinInmobiliariaLandingConfig | undefined {
  const def = getVenderPisoSinInmobiliariaCity(slug);
  return def ? toVenderPisoSinInmobiliariaConfig(def) : undefined;
}

export { buildAgencySavingsRows, formatEur, VENTA_PARTICULAR_TRAMITES, type AgencySavingsRow };

const BARCELONA_NEIGHBORHOODS = [
  "Eixample",
  "Gràcia",
  "Sants-Montjuïc",
  "Sant Martí",
  "Sarrià-Sant Gervasi",
  "Les Corts",
  "Horta-Guinardó",
  "Nou Barris",
  "Sant Andreu",
  "Ciutat Vella",
  "L'Hospitalet de Llobregat",
  "Badalona",
  "Santa Coloma de Gramenet",
] as const;

export const VENDER_PISO_SIN_INMOBILIARIA_CITIES: VenderPisoSinInmobiliariaCityDefinition[] = [
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: "Vender piso sin comisiones en Barcelona | Entre particulares con gestor legal",
    metaDescription:
      "Vende tu piso en Barcelona entre particulares sin pagar comisión del 3-5 %. Gestor legal dedicado: reserva, arras, documentación y notaría por 890 € IVA incl. Idealista, recomendación o comprador que ya tienes.",
    keywords: [
      "vender piso sin comisiones barcelona",
      "vender piso sin comisiones en barcelona",
      "vender piso entre particulares barcelona",
      "venta entre particulares barcelona",
      "vender piso sin agencia barcelona",
      "vender piso sin inmobiliaria barcelona",
      "vender casa sin agencia barcelona",
      "venta de particular a particular barcelona",
      "trámites vender piso particular barcelona",
      "gestor legal venta piso barcelona",
    ],
    heroBadge: "Venta entre particulares · Barcelona · Sin comisiones",
    heroH1: "Vender piso sin comisiones en Barcelona — entre particulares, con gestor legal",
    heroLead:
      "¿Has encontrado comprador en Idealista, por recomendación o entre conocidos y no quieres ceder un 3–5 % a una inmobiliaria? Livendia es la gestoría para particulares que redacta contratos, ordena la documentación y te acompaña hasta la escritura en notaría por una tarifa plana de 890 € (IVA incl.).",
    heroBullets: [
      "Sin comisión sobre el precio de venta: pagas gestoría, no porcentaje de agencia",
      "Gestor legal experto dedicado a tu operación — WhatsApp y teléfono directos",
      "Reserva, arras, nota simple, comunidad y coordinación con notaría incluidas",
    ],
    introTitle: "Vender en Barcelona entre particulares: ahorra comisiones sin renunciar a seguridad jurídica",
    introParagraphs: [
      "En Barcelona, donde el precio medio de un piso supera con frecuencia los 400.000 €, una comisión inmobiliaria del 3 % más IVA puede suponer más de 14.000 € solo por intermediar. Si tú has captado al comprador —publicando en Idealista, Fotocasa, redes o por boca a boca— no tiene sentido pagar ese porcentaje por un trámite que es fundamentalmente legal y documental.",
      "La venta entre particulares en Barcelona es completamente legal. El riesgo no está en vender sin agencia, sino en firmar contratos genéricos, no revisar cargas registrales o llegar a notaría con documentación incompleta. Ahí es donde Livendia entra: no somos una inmobiliaria que busca comprador ni una plataforma de anuncios. Somos la gestoría especializada en compraventa entre particulares con un gestor legal que defiende tus intereses de la reserva a la escritura.",
      "Operamos en Barcelona capital y área metropolitana con el mismo protocolo que en el resto de España: precio cerrado publicado, área de cliente online para subir documentos y un interlocutor humano que conoce tu expediente de principio a fin.",
    ],
    howItWorksTitle: "Cómo funciona Livendia si vendes tu piso en Barcelona sin inmobiliaria",
    howItWorksIntro:
      "Un proceso claro en cinco fases. Tú sigues negociando con tu comprador; nosotros blindamos la parte jurídica y documental.",
    howItWorksSteps: [
      {
        title: "Contratas el servicio completo de venta online",
        body: "Pago único de 890 € IVA incluido con tarjeta segura. Sin permanencia, sin exclusiva y sin comisión sobre el precio de venta. En minutos tienes acceso a tu panel de cliente.",
      },
      {
        title: "Te asignamos un gestor legal experto",
        body: "No es un call center: es la misma persona que revisa tu caso, redacta contratos y responde por WhatsApp o teléfono. Conoce la compraventa entre particulares en Barcelona y el calendario típico hasta escritura.",
      },
      {
        title: "Revisamos documentación y redactamos contratos",
        body: "Nota simple registral, certificados de la comunidad, eficiencia energética, cargas e hipotecas pendientes. Redactamos reserva y contrato de arras (penitenciales o confirmatorias) adaptados a vuestra operación.",
      },
      {
        title: "Coordinamos arras y pre-escritura",
        body: "Checklist con el comprador, plazos, señal y condiciones de desistimiento. Te orientamos sobre plusvalía municipal e impuestos del vendedor para que no haya sorpresas de última hora.",
      },
      {
        title: "Acompañamiento hasta la firma en notaría",
        body: "Verificamos que lo pactado en contrato privado coincide con lo que se va a escriturar. El objetivo: cerrar la venta entre particulares con la misma tranquilidad que con una agencia, pagando una fracción del coste.",
      },
    ],
    servicesTitle: "Qué incluye el servicio de venta Livendia en Barcelona",
    servicesIntro:
      "Todo lo que necesitas para vender entre particulares con seguridad jurídica, en un único paquete con precio cerrado:",
    servicesIncluded: [
      {
        title: "Contrato de reserva",
        body: "Si necesitáis fijar señal y plazos antes de las arras, redactamos un documento adaptado al precio y condiciones pactadas.",
        href: "/servicios/reserva-de-compra",
      },
      {
        title: "Contrato de arras a medida",
        body: "Penitenciales o confirmatorias, con cláusulas que protegen al vendedor cuando el comprador es particular.",
        href: "/servicios/contrato-arras-local/barcelona",
      },
      {
        title: "Revisión registral y cargas",
        body: "Nota simple, hipotecas, embargos y coherencia entre lo que declaras y lo que consta en el Registro de la Propiedad.",
      },
      {
        title: "Documentación de la comunidad",
        body: "Certificado de estar al corriente, actas, derramas en curso y cualquier aspecto que el comprador o su banco puedan exigir.",
      },
      {
        title: "Coordinación con notaría",
        body: "Calendario hacia la escritura pública, checklist pre-firma y revisión de que el borrador refleja lo acordado.",
        href: "/servicios/servicio-completo-venta-local/barcelona",
      },
      {
        title: "Gestor dedicado durante todo el proceso",
        body: "Un experto en compraventa entre particulares disponible por WhatsApp y teléfono hasta que firmas.",
        href: "/gestoria/barcelona",
      },
    ],
    compareTitle: "Livendia frente a una agencia inmobiliaria o vender completamente solo",
    compareIntro:
      "Muchos propietarios en Barcelona dudan entre tres caminos. Esta tabla resume las diferencias reales —no el marketing de las agencias— cuando ya tienes comprador.",
    compareRows: [
      {
        feature: "Coste sobre un piso de 400.000 €",
        livendia: "890 € IVA incl. (tarifa plana)",
        agency: "14.520–24.200 € (3–5 % + IVA)",
        alone: "0 € de gestoría (riesgo legal alto)",
      },
      {
        feature: "Busca comprador / publica anuncio",
        livendia: "No — tú captas al comprador",
        agency: "Sí — es su función principal",
        alone: "Tú en Idealista, Fotocasa, etc.",
      },
      {
        feature: "Contratos redactados por profesional",
        livendia: "Sí — gestor legal dedicado",
        agency: "A veces — depende de la agencia",
        alone: "Plantillas de internet (riesgo)",
      },
      {
        feature: "Revisión de cargas y comunidad",
        livendia: "Incluida en el servicio",
        agency: "Variable",
        alone: "Responsabilidad tuya",
      },
      {
        feature: "Comisión sobre precio de venta",
        livendia: "Ninguna",
        agency: "3–5 % habitual en Barcelona",
        alone: "Ninguna",
      },
      {
        feature: "Exclusiva de venta",
        livendia: "No",
        agency: "Suele exigirse",
        alone: "No",
      },
    ],
    neighborhoodsTitle: "Vendemos con gestoría en Barcelona capital y área metropolitana",
    neighborhoodsIntro:
      "El servicio completo de venta Livendia cubre operaciones entre particulares en estos distritos y municipios del entorno, con el mismo precio y el mismo protocolo:",
    neighborhoods: BARCELONA_NEIGHBORHOODS,
    savingsSalePrices: [200_000, 280_000, 320_000, 400_000, 450_000, 500_000, 600_000],
    highlightSalePrice: 400_000,
    savingsIntro:
      "En Barcelona, las agencias suelen cobrar un 3 % o 5 % sobre el precio de venta más IVA solo por intermediar. Si tú llevas la venta entre particulares, Livendia te da el acompañamiento jurídico por tarifa plana.",
    tramitesAreaNote:
      "En Eixample, Gràcia, Sant Martí, Sants, Sarrià, L'Hospitalet, Badalona y el resto del área metropolitana, un gestor legal de Livendia ordena reserva, arras, documentación y coordinación con notaría mientras tú vendes sin comisiones.",
    benefitsAreaNote:
      "Checklist documental, comunidad de propietarios, registral y coordinación pre-escritura en Barcelona y alrededores.",
    disclaimer:
      "Livendia no busca comprador, no publica tu piso en portales ni hace marketing inmobiliario. Somos gestoría: acompañamiento jurídico-documental para propietarios que venden sin agencia cuando ya tienen comprador particular. Notaría, registro, plusvalía e IRPF del vendedor son gastos independientes; te orientamos sobre plazos y documentación.",
    faqTitle: "Preguntas frecuentes sobre vender piso sin comisiones en Barcelona",
    faqSubtitle:
      "Venta entre particulares, trámites, ahorro frente a agencias y cómo trabaja tu gestor legal en Livendia.",
    faq: [
      {
        question: "¿Puedo vender mi piso en Barcelona sin pagar comisiones a una inmobiliaria?",
        answer:
          "Sí, es legal y cada vez más habitual. Si tú encuentras al comprador (Idealista, recomendación, conocidos), no necesitas pagar un 3–5 % sobre el precio de venta. Livendia cubre la parte jurídica y documental por 890 € IVA incl., sin comisión sobre el precio del piso.",
      },
      {
        question: "¿Qué significa vender entre particulares en Barcelona?",
        answer:
          "Que tú, como propietario, vendes directamente a otra persona física sin que una agencia inmobiliaria intermedié en la captación del comprador. Livendia no sustituye esa captación: te acompañamos en contratos, documentación y trámites hasta la escritura.",
      },
      {
        question: "¿Livendia publica mi piso o busca comprador?",
        answer:
          "No. No somos portal inmobiliario ni agencia de marketing. Si buscas alguien que cuelgue tu anuncio y traiga visitas, necesitas Idealista/Fotocasa o una agencia tradicional. Si ya tienes comprador, somos la opción inteligente para no pagar comisión sobre la venta.",
      },
      {
        question: "¿Qué trámites necesito para vender sin agencia en Barcelona?",
        answer:
          "Entre otros: certificado de eficiencia energética, nota simple registral, certificado de la comunidad, contrato de arras, liquidación de plusvalía municipal e impuestos del vendedor, y escritura pública ante notario. Livendia te guía y redacta los contratos privados con tarifa plana de 890 € IVA incl.",
      },
      {
        question: "¿Cuánto ahorro respecto a una agencia inmobiliaria en Barcelona?",
        answer:
          "En un piso de 400.000 €, una comisión del 3 % + IVA ronda los 14.520 €; al 5 %, unos 24.200 €. Livendia cuesta 890 € fijos. En la tabla de esta página ves el ahorro según el precio de tu vivienda.",
      },
      {
        question: "¿Vale la pena usar contratos de arras descargados de internet?",
        answer:
          "No es recomendable. Las plantillas genéricas suelen omitir plazos, arras penitenciales, cargas o entrega de llaves. Un error en el tramo privado puede retrasar meses la venta o generar reclamaciones. Un gestor legal de Livendia redacta a medida.",
      },
      {
        question: "¿Cómo funciona el gestor legal asignado?",
        answer:
          "Es un experto en compraventa entre particulares, no un operador de call center. Conoce tu expediente, redacta contratos, revisa documentación y responde por WhatsApp o teléfono durante todo el proceso hasta la firma en notaría.",
      },
      {
        question: "¿Puedo vender si mi piso tiene hipoteca pendiente?",
        answer:
          "Sí, es habitual en Barcelona. Hay que coordinar la cancelación o subrogación con el banco antes o en el momento de la escritura. Revisamos la nota simple y te orientamos sobre el calendario con el comprador y la entidad financiera.",
      },
      {
        question: "¿En qué barrios de Barcelona trabajáis?",
        answer:
          "En toda Barcelona capital y área metropolitana: Eixample, Gràcia, Sant Martí, Sants, Sarrià, Ciutat Vella, L'Hospitalet, Badalona y municipios del entorno. El precio del servicio es el mismo con gestoría online y seguimiento dedicado.",
      },
      {
        question: "¿Qué diferencia hay entre Livendia y una inmobiliaria sin comisiones tipo Housfy?",
        answer:
          "Las inmobiliaras sin comisiones suelen cobrar tarifa fija pero también captan comprador, hacen fotos y gestionan visitas. Livendia es solo gestoría: tú traes al comprador y nosotros blindamos la operación legal. Si ya tienes comprador, no pagas por servicios de marketing que no necesitas.",
      },
    ],
    finalCtaTitle: "Vende en Barcelona entre particulares — sin comisiones abusivas, con gestor legal",
    finalCtaSubtitle:
      "Tarifa plana 890 € IVA incl.: reserva, arras, trámites y coordinación con notaría. Contrata online en minutos.",
    waPrefill:
      "Hola, estoy vendiendo mi piso en Barcelona entre particulares (sin comisiones de agencia) y necesito gestoría legal. Me interesa el servicio completo de venta Livendia.",
    jsonLdServiceName: "Vender piso sin comisiones en Barcelona entre particulares con gestor legal Livendia",
    imageAlt: "Vender piso sin comisiones en Barcelona entre particulares con gestor legal Livendia",
    analyticsPlacement: "vender_sin_inmobiliaria_barcelona",
    gestorCtaPlacement: "vender_sin_inmobiliaria_barcelona",
    relatedLinks: [
      {
        href: "/servicios/servicio-completo-venta",
        label: "Servicio completo de venta (España)",
        description: "Ficha técnica del servicio con precio y alcance nacional.",
      },
      {
        href: "/servicios/contrato-arras-local/barcelona",
        label: "Contrato de arras en Barcelona",
        description: "Si solo necesitas el contrato de arras con revisión legal.",
      },
      {
        href: "/servicios/gestion-documental-vendedor/barcelona",
        label: "Gestión documental vendedor",
        description: "Para cuando ya firmaste arras y necesitas ordenar la documentación hacia escritura.",
      },
      {
        href: "/gestoria/barcelona",
        label: "Gestoría inmobiliaria Barcelona",
        description: "Todos los servicios Livendia disponibles en Barcelona.",
      },
      {
        href: "/servicios/vender-piso-sin-agencia-barcelona",
        label: "Vender piso sin agencia Barcelona",
        description: "Nuestra guía anterior para vendedores entre particulares en la ciudad.",
      },
      {
        href: "/precios",
        label: "Precios Livendia",
        description: "Tarifas cerradas de todos los servicios para particulares.",
      },
    ],
    legacyVenderSinAgenciaHref: "/servicios/vender-piso-sin-agencia-barcelona",
    servicioCompletoVentaLocalHref: "/servicios/servicio-completo-venta-local/barcelona",
    gestoriaHref: "/gestoria/barcelona",
    arrasLocalHref: "/servicios/contrato-arras-local/barcelona",
  },
];

/** Copy del hub nacional /vender-piso-sin-inmobiliaria */
export const VENDER_PISO_SIN_INMOBILIARIA_HUB = {
  metaTitle: "Vender piso sin comisiones entre particulares | Gestor legal",
  metaDescription:
    "Vende tu vivienda sin pagar comisión del 3-5 % a una inmobiliaria. Livendia acompaña la venta entre particulares con gestor legal: contratos, documentación y notaría por 890 € IVA incl.",
  keywords: [
    "vender piso sin comisiones",
    "vender piso sin inmobiliaria",
    "vender piso entre particulares",
    "vender casa sin agencia",
    "venta vivienda entre particulares",
    "vender piso particular",
  ],
  heroH1: "Vender piso sin comisiones — entre particulares, con seguridad jurídica",
  heroLead:
    "Si ya tienes comprador y no quieres ceder miles de euros a una agencia, Livendia es la gestoría que redacta contratos, revisa documentación y te acompaña hasta la escritura por 890 € IVA incl.",
} as const;
