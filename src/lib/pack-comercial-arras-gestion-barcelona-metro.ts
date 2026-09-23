import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL } from "@/lib/catalog.public";
import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";
import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import {
  PACK_ARRAS_GESTION_BCN_METRO_BATCH2,
  PACK_ARRAS_GESTION_BCN_METRO_BATCH2_SLUGS,
} from "@/lib/pack-comercial-arras-gestion-barcelona-metro-zones-batch2";

const PACK_ARRAS_GESTION_BCN_METRO_CORE_SLUGS = [
  "barcelona-les-corts",
  "barcelona-eixample",
  "hospitalet-de-llobregat",
] as const;

/** Landings metro del pack arras + gestión documental vendedor (Barcelona). */
export const PACK_ARRAS_GESTION_BCN_METRO_PUBLISHED_SLUGS = [
  ...PACK_ARRAS_GESTION_BCN_METRO_CORE_SLUGS,
  ...PACK_ARRAS_GESTION_BCN_METRO_BATCH2_SLUGS,
] as const;

export type PackArrasGestionBcnMetroSlug = (typeof PACK_ARRAS_GESTION_BCN_METRO_PUBLISHED_SLUGS)[number];

function mergeBatch2CityBases(): Record<
  PackArrasGestionBcnMetroSlug,
  { slug: string; city: string; schemaAdministrativeArea: string }
> {
  const batch = Object.fromEntries(
    PACK_ARRAS_GESTION_BCN_METRO_BATCH2.map((z) => [
      z.slug,
      { slug: z.slug, city: z.city, schemaAdministrativeArea: "Cataluña" as const },
    ]),
  );
  return { ...PACK_ARRAS_GESTION_BCN_METRO_CITY_BASES_CORE, ...batch } as unknown as Record<
    PackArrasGestionBcnMetroSlug,
    { slug: string; city: string; schemaAdministrativeArea: string }
  >;
}

function mergeBatch2Differentiation(): Record<PackArrasGestionBcnMetroSlug, LocalCityLandingFields> {
  const batch = Object.fromEntries(PACK_ARRAS_GESTION_BCN_METRO_BATCH2.map((z) => [z.slug, z.diff]));
  return { ...PACK_ARRAS_GESTION_BCN_METRO_DIFFERENTIATION_CORE, ...batch } as unknown as Record<
    PackArrasGestionBcnMetroSlug,
    LocalCityLandingFields
  >;
}

function mergeBatch2Seo(): Record<PackArrasGestionBcnMetroSlug, PackCommercialLocalSeoContent> {
  const batch = Object.fromEntries(PACK_ARRAS_GESTION_BCN_METRO_BATCH2.map((z) => [z.slug, z.seo]));
  return { ...PACK_ARRAS_GESTION_BCN_METRO_SEO_CORE, ...batch } as unknown as Record<
    PackArrasGestionBcnMetroSlug,
    PackCommercialLocalSeoContent
  >;
}

const PACK_ARRAS_GESTION_BCN_METRO_CITY_BASES_CORE = {
  "barcelona-les-corts": {
    slug: "barcelona-les-corts",
    city: "Les Corts",
    schemaAdministrativeArea: "Cataluña",
  },
  "barcelona-eixample": {
    slug: "barcelona-eixample",
    city: "Eixample",
    schemaAdministrativeArea: "Cataluña",
  },
  "hospitalet-de-llobregat": {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
  },
} as const;

export const PACK_ARRAS_GESTION_BCN_METRO_CITY_BASES = mergeBatch2CityBases();

const PACK_ARRAS_GESTION_BCN_METRO_DIFFERENTIATION_CORE = {
  "barcelona-les-corts": {
    metaTitle: `Pack arras + gestión vendedor Les Corts — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
    metaDescription:
      "Vendes en Les Corts sin agencia: contrato de arras CCCat y gestor documental hasta notaría por 495 € IVA incl. Pedralbes, Zona Universitària. Cèdula, ITE, comunidad.",
    keywords: [
      "pack arras gestión documental les corts",
      "vender piso les corts sin agencia",
      "venta entre particulares pedralbes arras",
      "gestor inmobiliario les corts documentación",
      "contrato arras zona universitaria barcelona",
      "vender sin inmobiliaria les corts 495",
    ],
    heroBadge: "Venta · Les Corts · Sin agencia",
    heroH1:
      "Vendes en Les Corts sin inmobiliaria: arras profesionales y gestor documental hasta notaría",
    heroBullets: [
      "Pedralbes, Zona Universitària, Plaça Francesc Macià",
      "CCCat 621-4 a 621-9 · cláusula 621-49 si hay hipoteca",
      `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. · 0 % comisión`,
    ],
    whyTitle: "Vendes de particular en Les Corts: arras + documentación sin pagar comisión",
    whySubtitle:
      "En Pedralbes y alrededor del Camp Nou las señales son elevadas y los plazos apretados. Un gestor Livendia redacta arras equilibradas y persigue cèdula, ITE y certificado de comunidad mientras tú cierras con el comprador.",
    localZonesHeading: "Zonas del pack en Les Corts y Pedralbes",
    localZones:
      "Les Corts centre, Pedralbes, Zona Universitària, Maternitat-Sant Ramon y entorno Diagonal. Mismo pack 495 € con gestor documental online — sin desplazarte a una gestoría física.",
    heroImage: metroBarcelonaZoneImage("barcelona2.jpg"),
    finalCtaTitle: "Vende en Les Corts con arras CCCat y gestor Livendia hasta notaría",
  },
  "barcelona-eixample": {
    metaTitle: `Pack arras + gestión vendedor Eixample — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
    metaDescription:
      "Vendes de particular en el Eixample: gestor inmobiliario redacta contrato de arras y lleva toda la documentación a notaría por 495 € IVA incl. Dreta, Esquerra, Sagrada Família.",
    keywords: [
      "pack arras gestión documental eixample",
      "vender piso eixample sin agencia",
      "venta entre particulares dreta eixample arras",
      "gestor inmobiliario eixample documentación notaría",
      "contrato arras esquerra eixample particular",
      "vender sin inmobiliaria eixample 495 euros",
    ],
    heroBadge: "Venta · Eixample · Entre particulares",
    heroH1:
      "Vendes de particular en el Eixample: un gestor inmobiliario redacta tus arras y lleva la documentación a notaría",
    heroBullets: [
      "Dreta, Esquerra, Sagrada Família, Sant Antoni",
      "Cèdula d'habitabilitat · ITE · derramas en junta",
      `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · Sin comisión agencia`,
    ],
    whyTitle: "Has encontrado comprador en el Eixample — nosotros blindamos arras y trámites",
    whySubtitle:
      "Terrazas no inscritas, derramas de fachada y comunidades saturadas: en el ensanche el comprador exige documentación impecable. Pack 495 € vs miles en comisión si ya vendes sin agencia.",
    localZonesHeading: "Barrios del Eixample con pack arras + gestión",
    localZones:
      "Dreta de l'Eixample, Esquerra, Sagrada Família, Sant Antoni y Fort Pienc. Normativa catalana (CCCat, cèdula, ITE) cubierta por gestor Livendia desde el panel digital.",
    heroImage: metroBarcelonaZoneImage("eixample.jpg"),
    finalCtaTitle: "Vende en el Eixample con arras CCCat y documentación hasta escritura",
  },
  "hospitalet-de-llobregat": {
    metaTitle: `Pack arras + gestión vendedor L'Hospitalet — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
    metaDescription:
      "Vendes en L'Hospitalet entre particulares: contrato de arras y gestión documental con gestor profesional por 495 € IVA incl. Collblanc, Bellvitge, centre. Sin comisión inmobiliaria.",
    keywords: [
      "pack arras gestión documental hospitalet",
      "vender piso l hospitalet sin agencia",
      "venta entre particulares collblanc arras",
      "gestor inmobiliario hospitalet documentación",
      "contrato arras bellvitge particular",
      "vender sin inmobiliaria hospitalet 495",
    ],
    heroBadge: "Venta · L'Hospitalet · Propietarios",
    heroH1:
      "Vendes en L'Hospitalet entre particulares: contrato de arras y gestión documental con gestor profesional",
    heroBullets: [
      "Centre, Collblanc, Bellvitge, La Florida",
      "CCCat · cèdula · certificado comunidad",
      `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. · 0 % comisión`,
    ],
    whyTitle: "Vendes sin agencia en L'Hospitalet: arras + gestor que persigue la documentación",
    whySubtitle:
      "Muchas ventas se cierran por Idealista con comprador de Barcelona capital. Las arras copiadas del ensanche no contemplan plazos realistas de comunidad en bloques grandes — el gestor Livendia redacta y recopila todo hasta notaría.",
    localZonesHeading: "Núcleos de L'Hospitalet con pack Livendia",
    localZones:
      "Centre, Collblanc, Bellvitge, La Florida, Pubilla Cases, Santa Eulàlia y Granvia. Mismo pack 495 € que en Barcelona ciudad, con gestor dedicado online.",
    heroImage: metroBarcelonaZoneImage("hospitalet.jpg"),
    finalCtaTitle: "Vende en L'Hospitalet con arras y gestor documental hasta notaría",
  },
} as const;

export const PACK_ARRAS_GESTION_BCN_METRO_DIFFERENTIATION = mergeBatch2Differentiation();

const PACK_ARRAS_GESTION_BCN_METRO_SEO_CORE = {
  "barcelona-les-corts": {
    precioMedioVenta: 480_000,
    heroSubtitle:
      "Has encontrado comprador en Les Corts o Pedralbes y vendes sin agencia. Pack arras + gestión documental (495 € IVA incl.): un gestor inmobiliario redacta contrato de arras CCCat y recopila cèdula, ITE, comunidad e hipoteca hasta la notaría que elijáis.",
    marketIntro:
      "Les Corts y Pedralbes concentran ventas entre particulares con ticket alto: pisos señoriales, plazas de parking anexas y compradores con hipoteca preconcedida. Precio medio ~480.000 € en el distrito (Idealista, 2026).",
    localProblemIntro:
      "En Pedralbes una señal mal calibrada cuesta miles de euros. Y en bloques de la Zona Universitària el certificado de deuda cero puede tardar semanas si la comunidad está saturada — sin gestor, la fecha de escritura se cae.",
    stepLocalNotes: [
      "Arras 145 €: penitenciales o confirmatorias CCCat (621-4 a 621-9), cláusula 621-49 si el comprador financia, parking anexo reflejado en precio.",
      "Gestión 350 €: solicitud prioritaria de certificado de comunidad en bloques grandes y verificación cèdula d'habitabilitat.",
      "Checklist: ITE en fincas +50 años, terrazas inscritas, energético vigente — informe semáforo pre-notaría.",
      "Escritura con expediente ordenado en Les Corts o Pedralbes: reduces rebajas tardías del comprador.",
    ],
    empathyCards: [
      {
        title: "Comprador encontrado en Idealista — el papeleo te abruma",
        body: "En Les Corts cerraste precio de palabra. Entre arras y notaría aparecen comunidad, cèdula e ITE. Este pack une contrato de arras y gestor documental por 495 € IVA incl.",
      },
      {
        title: "No quieres pagar comisión de inmobiliaria",
        body: "En un piso de 480.000 € el 3 % son ~14.400 € + IVA. Si tú trajiste al comprador, el pack cubre arras y documentación con tarifa plana.",
      },
      {
        title: "Vendes desde fuera de Barcelona",
        body: "Herencia en Pedralbes o segunda residencia: el panel Livendia centraliza certificados y tu gestor persigue plazos sin desplazarte.",
      },
    ],
    casuistica: [
      {
        title: "Parking anexo no reflejado en arras",
        body: "En Pedralbes es habitual vender plaza incluida. Si no consta en contrato, el comprador puede pedir rebaja antes de notaría.",
      },
      {
        title: "Señal elevada con penalidad desequilibrada",
        body: "Arras penitenciales mal calibradas en operaciones de alto importe. El gestor equilibra señal conforme al CCCat.",
      },
      {
        title: "ITE con deficiencias en edificio universitario",
        body: "Fincas de los 60–70 con ITE desfavorable. Sin regularizar, el notario lo detectará el día de la firma.",
      },
      {
        title: "Comprador con hipoteca y plazos del banco",
        body: "Cláusula 621-49 CCCat integrada desde el borrador para que la financiación no tumbe la operación.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto cuesta el pack arras + gestión en Les Corts?",
        answer: `495 € IVA incl. (145 € arras + 350 € gestión documental). Sin comisión sobre el precio de venta. En Pedralbes el ahorro vs agencia suele superar los 12.000 €.`,
      },
      {
        question: "¿Livendia busca comprador en Les Corts?",
        answer:
          "No. Somos gestoría inmobiliaria digital: entramos cuando tú ya tienes comprador particular y necesitas arras profesionales y documentación hasta notaría.",
      },
      {
        question: "¿Gestionáis ventas con plaza de parking en Pedralbes?",
        answer:
          "Sí. El gestor refleja parking anexo en arras y verifica coherencia con nota simple y escrituras antes de firmar.",
      },
    ],
    barrios: ["Pedralbes", "Les Corts centre", "Zona Universitària", "Maternitat-Sant Ramon", "Plaça Francesc Macià"],
    barriosIntro: "Pack arras + gestión documental para vendedores particulares en Les Corts y Pedralbes.",
    platformParagraph:
      "Sube documentos al panel Livendia: nota simple, certificados de comunidad e informe semáforo. Tu gestor persigue plazos mientras tú negocias con el comprador en Les Corts.",
    localBanners: [
      {
        title: "Les Corts: señal alta, arras precisas",
        body: "En operaciones de Pedralbes una cláusula mal redactada cuesta más que 495 €. Gestor legal redacta lo pactado verbalmente conforme al CCCat.",
      },
      {
        title: "495 € vs comisión si ya tienes comprador",
        body: "No somos agencia: no cobramos porcentaje sobre el precio. Cubrimos arras y tramo documental post-arras hasta notaría.",
      },
    ],
  },
  "barcelona-eixample": {
    precioMedioVenta: 450_000,
    heroSubtitle:
      "Vendes en Barcelona — en el Eixample — y necesitas contratar arras más un gestor profesional que lleve toda la documentación. Pack 495 € IVA incl.: contrato de arras CCCat y gestión documental hasta la notaría, sin comisión de agencia.",
    marketIntro:
      "El Eixample concentra la mayoría de ventas entre particulares de Barcelona ciudad: Dreta y Esquerra con compradores de Idealista, herencias en fincas modernistas y plazos ajustados. Precio medio ~450.000 € (Brains Real Estate, 2026).",
    localProblemIntro:
      "En Dreta de l'Eixample las comunidades de edificios del ensanche tardan 10–20 días en emitir certificado de deuda cero. Sin gestor desde la semana del arras, la fecha de escritura se desmorona.",
    stepLocalNotes: [
      "Arras 145 €: derramas conocidas, terrazas y cláusula 621-49 si el comprador pide hipoteca — redacción CCCat.",
      "Gestión 350 €: verificación ITE en fincas 1900–1970, cèdula d'habitabilitat vigente y certificado de comunidad.",
      "Informe semáforo: elementos no inscritos en registro, energético caducado, actas de junta con derramas aprobadas.",
      "Notaría con expediente coherente: el gestor no sustituye al notario, pero evita sorpresas el día de la firma.",
    ],
    empathyCards: [
      {
        title: "Vendes sin agencias en el Eixample",
        body: "Publicaste en Idealista, cerraste con el comprador y quieres ahorrar comisión. Necesitas un gestor inmobiliario para arras y documentación — no otra inmobiliaria.",
      },
      {
        title: "El comprador exige la misma diligencia que una agencia",
        body: "En Esquerra o Dreta el comprador pide cèdula, ITE y comunidad al día. Pack 495 € con gestor que persigue cada certificado.",
      },
      {
        title: "Herencia o venta desde otra provincia",
        body: "Piso en el Eixample, tú en Madrid o fuera de España: panel Livendia y gestor dedicado por WhatsApp.",
      },
    ],
    casuistica: [
      {
        title: "Terraza no inscrita en registro",
        body: "Muy frecuente en el ensanche. Debe regularizarse o reflejarse en arras antes de transmitir.",
      },
      {
        title: "Derrama de fachada aprobada en junta",
        body: "En Dreta y Esquerra hay rehabilitaciones de fachada con cuotas pendientes. Cruce de actas y certificado de deuda.",
      },
      {
        title: "Cèdula d'habitabilitat caducada",
        body: "Obligatoria en Catalunya para transmitir. Muchos vendedores particulares no la detectan hasta que el comprador pide documentación.",
      },
      {
        title: "Arras copiadas de otra CCAA",
        body: "Plantillas sin CCCat ni cláusula 621-49: el comprador usa fallos para pedir rebaja días antes de notaría.",
      },
    ],
    faqLocal: [
      {
        question: "¿Qué incluye el pack en el Eixample?",
        answer:
          "Contrato de arras redactado por gestor legal (145 €) más gestión documental vendedor post-arras (350 €): comunidad, nota simple, ITE, cèdula, energético e informe semáforo. Total 495 € IVA incl.",
      },
      {
        question: "¿Cuánto tarda la comunidad en dar el certificado en el Eixample?",
        answer:
          "De 5 días en comunidades pequeñas a 2–3 semanas en bloques grandes del ensanche. Conviene activar gestión documental justo tras firmar arras.",
      },
      {
        question: "¿Puedo contratar si vendo en Sant Antoni o Fort Pienc?",
        answer:
          "Sí. Mismo pack y precios para todo el distrito del Eixample y barrios limítrofes atendidos desde la landing.",
      },
    ],
    barrios: ["Dreta de l'Eixample", "Esquerra de l'Eixample", "Sagrada Família", "Sant Antoni", "Fort Pienc"],
    barriosIntro: "Venta entre particulares en el Eixample con gestor documental Livendia hasta notaría.",
    platformParagraph:
      "Centraliza nota simple, certificados de comunidad e informe semáforo en panel Livendia. Especialmente útil si vendes en el Eixample y resides fuera de Catalunya.",
    localBanners: [
      {
        title: "Eixample: normativa catalana en arras y documentación",
        body: "Cèdula, ITE y CCCat no aparecen en plantillas genéricas. Pack con gestor que conoce el trámite del ensanche.",
      },
      {
        title: "495 € cuando ya tienes comprador",
        body: "El 3 % sobre 450.000 € serían 13.500 € + IVA de comisión. Tú llevas la venta; Livendia blinda arras y documentación.",
      },
    ],
  },
  "hospitalet-de-llobregat": {
    precioMedioVenta: 240_000,
    heroSubtitle:
      "Vendes de particular en L'Hospitalet y necesitas que un gestor inmobiliario redacte el contrato de arras y te lleve toda la documentación a notaría. Pack 495 € IVA incl. — sin comisión de inmobiliaria.",
    marketIntro:
      "L'Hospitalet es uno de los municipios con más ventas entre particulares del área metropolitana: precio competitivo frente a Barcelona capital (~240.000 € de media) y compradores que cierran rápido por Idealista o recomendación.",
    localProblemIntro:
      "En Collblanc o Bellvitge las arras suelen ser copias barcelonesas con plazos irreales para comunidades numerosas. Y el certificado de deuda cero puede tardar 2–3 semanas — el gestor Livendia lo solicita en la primera semana post-arras.",
    stepLocalNotes: [
      "Arras 145 €: CCCat (621-4 a 621-9), cláusula 621-49, plazos realistas para comunidad en bloques grandes de L'Hospitalet.",
      "Gestión 350 €: contacto con administrador de fincas, cèdula d'habitabilitat y nota simple sin cargas ocultas.",
      "Checklist: energético, IBI, derramas en edificios rehabilitados del centre o Granvia.",
      "Escritura en notaría de L'Hospitalet o Barcelona: expediente listo antes de que el banco del comprador pida más papeles.",
    ],
    empathyCards: [
      {
        title: "Has encontrado comprador — ahora empieza el papeleo",
        body: "En L'Hospitalet muchos cierran precio por Idealista. Entre arras y notaría aparecen comunidad, cèdula e hipoteca. Pack arras + gestor documental en un solo contrato Livendia.",
      },
      {
        title: "No quieres pagar comisión de agencia",
        body: "En un piso de 240.000 € el 3 % son ~7.200 € + IVA. Si vendes entre particulares, 495 € IVA incl. cubre arras y documentación.",
      },
      {
        title: "Comprador de Barcelona capital exige documentación al día",
        body: "El comprador compara con estándares del Eixample. Tu gestor persigue certificados con el mismo rigor que una gestoría barcelonesa.",
      },
    ],
    casuistica: [
      {
        title: "Comunidad saturada en Bellvitge o Collblanc",
        body: "Bloques densos con administrador lento. El gestor hace seguimiento semanal del certificado de deuda cero.",
      },
      {
        title: "Plazo de escritura demasiado corto en arras",
        body: "Arras firmadas con 30 días a notaría cuando la comunidad tarda 20. El gestor recalibra plazos en el borrador.",
      },
      {
        title: "Cèdula caducada en piso de los 80",
        body: "Obligatoria en Catalunya. Renovación coordinada antes de fijar fecha en notaría.",
      },
      {
        title: "Hipoteca pendiente del vendedor",
        body: "Certificado de deuda bancaria y cancelación alineados con lo pactado en arras — coordinación desde el día uno.",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto cuesta vender entre particulares en L'Hospitalet con Livendia?",
        answer: `Pack arras + gestión documental: 495 € IVA incl. (145 € + 350 €). Sin comisión sobre el precio de venta. Alternativa integral: servicio completo venta 890 €.`,
      },
      {
        question: "¿Livendia publica mi piso en portales?",
        answer:
          "No. Entramos cuando ya tienes comprador. Redactamos arras y gestionamos documentación hasta notaría — gestoría inmobiliaria, no agencia.",
      },
      {
        question: "¿Atendéis ventas en todo L'Hospitalet?",
        answer:
          "Sí. Centre, Collblanc, Bellvitge, La Florida, Pubilla Cases y resto del municipio con el mismo pack online y gestor dedicado.",
      },
    ],
    barrios: ["Centre", "Collblanc", "Bellvitge", "La Florida", "Pubilla Cases", "Santa Eulàlia", "Granvia"],
    barriosIntro: "Pack arras + gestión documental para vendedores particulares en L'Hospitalet de Llobregat.",
    platformParagraph:
      "Panel Livendia para subir y consultar documentos desde cualquier lugar. Útil si vendes en L'Hospitalet y trabajas o vives en Barcelona capital u otra ciudad.",
    localBanners: [
      {
        title: "L'Hospitalet: venta rápida, documentación lenta",
        body: "El precio se cierra en días; la comunidad no. Gestor dedicado desde la firma de arras para no perder la fecha de escritura.",
      },
      {
        title: "495 € vs comisión de agencia",
        body: "Si encontraste comprador por Idealista o conocido, no pagues 3–5 % por un trámite que ya no necesita marketing inmobiliario.",
      },
    ],
  },
} as const;

export const PACK_ARRAS_GESTION_BCN_METRO_SEO = mergeBatch2Seo();

export function isPackArrasGestionBcnMetroSlug(slug: string): slug is PackArrasGestionBcnMetroSlug {
  return (PACK_ARRAS_GESTION_BCN_METRO_PUBLISHED_SLUGS as readonly string[]).includes(slug);
}

export function getPackArrasGestionBcnMetroSeo(
  slug: string,
): PackCommercialLocalSeoContent | undefined {
  if (!isPackArrasGestionBcnMetroSlug(slug)) return undefined;
  return PACK_ARRAS_GESTION_BCN_METRO_SEO[slug];
}
