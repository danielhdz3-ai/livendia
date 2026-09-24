import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL } from "@/lib/catalog.public";
import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";
import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH5_SLUGS = [
  "sant-joan-despi",
  "sant-adria-de-besos",
  "mollet-del-valles",
  "barcelona-sarria-sant-gervasi",
  "barcelona-ciutat-vella",
] as const;

export type PackArrasGestionBcnMetroBatch5Slug =
  (typeof PACK_ARRAS_GESTION_BCN_METRO_BATCH5_SLUGS)[number];

type ZoneBatch = {
  slug: PackArrasGestionBcnMetroBatch5Slug;
  city: string;
  heroImage: string;
  diff: LocalCityLandingFields;
  seo: PackCommercialLocalSeoContent;
};

function packStepNotes(zoneDetail: string): readonly string[] {
  return [
    `Arras 145 €: CCCat (621-4 a 621-9), cláusula 621-49 si hay hipoteca — ${zoneDetail}.`,
    "Gestión 350 €: cèdula d'habitabilitat, ITE si procede, certificado de deuda de comunidad y nota simple.",
    "Informe semáforo pre-notaría: energético, derramas en junta, cargas hipotecarias del vendedor.",
    "Escritura con expediente ordenado: reduces rebajas tardías del comprador por documentación incompleta.",
  ] as const;
}

function zoneSeo(
  precioMedioVenta: number,
  heroSubtitle: string,
  marketIntro: string,
  localProblemIntro: string,
  stepDetail: string,
  empathyCards: PackCommercialLocalSeoContent["empathyCards"],
  casuistica: PackCommercialLocalSeoContent["casuistica"],
  faqLocal: PackCommercialLocalSeoContent["faqLocal"],
  barrios: readonly string[],
  barriosIntro: string,
  platformParagraph: string,
  localBanners: PackCommercialLocalSeoContent["localBanners"],
): PackCommercialLocalSeoContent {
  return {
    precioMedioVenta,
    heroSubtitle,
    marketIntro,
    localProblemIntro,
    stepLocalNotes: packStepNotes(stepDetail),
    empathyCards,
    casuistica,
    faqLocal,
    barrios: [...barrios],
    barriosIntro,
    platformParagraph,
    localBanners,
  };
}

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH5: readonly ZoneBatch[] = [
  {
    slug: "sant-joan-despi",
    city: "Sant Joan Despí",
    heroImage: metroBarcelonaZoneImage("santjoandespi.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sant Joan Despí — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sant Joan Despí entre particulares: arras CCCat y gestor documental 495 € IVA incl. Centre, Torreblanca, TRAM. Sin comisión inmobiliaria.",
      keywords: [
        "pack arras gestión documental sant joan despi",
        "vender piso sant joan despi sin agencia",
        "venta entre particulares torreblanca",
        "gestor inmobiliario sant joan despi arras",
        "contrato arras sant joan despi 495",
      ],
      heroBadge: "Venta · Sant Joan Despí · Sin agencia",
      heroH1: "Vendes en Sant Joan Despí entre particulares: pack arras + gestión con gestor Livendia",
      heroBullets: [
        "Centre, Torreblanca, Les Fonts, TRAM T1/T2",
        "CCCat · cèdula · comunidad",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Sant Joan Despí sin agencia: arras + documentación hasta notaría",
      whySubtitle:
        "Compradores del corredor TRAM exigen cèdula e informe al día. El gestor Livendia redacta arras CCCat y persigue certificados desde la firma de señal.",
      localZonesHeading: "Núcleos del pack en Sant Joan Despí",
      localZones: "Centre, Torreblanca, Les Fonts, Can Trabal y entorno TRAM Baix Llobregat.",
      finalCtaTitle: "Vende en Sant Joan Despí con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      290_000,
      "Vendes en Sant Joan Despí sin inmobiliaria con comprador ya cerrado. Pack 495 € IVA incl.: contrato de arras CCCat y gestión documental hasta notaría.",
      "Sant Joan Despí (~290.000 €) con ventas entre particulares activas y compradores de Barcelona y polígonos del Llobregat.",
      "Arras con plazo de escritura de 30 días cuando la comunidad tarda 20 — el comprador pide rebaja o abandona.",
      "con plazos realistas para bloques en Centre y Torreblanca",
      [
        { title: "Comprador encontrado por Idealista", body: "Pack 495 € cubre arras y tramo documental post-arras." },
        { title: "495 € vs comisión", body: "Tarifa plana si tú trajiste al comprador." },
        { title: "Vendedor fuera del Baix Llobregat", body: "Panel Livendia y gestor dedicado online." },
      ],
      [
        { title: "Caldera o ascensor en junta", body: "Derramas reflejadas en informe semáforo." },
        { title: "Cèdula caducada", body: "Checklist en gestión documental." },
        { title: "Art. 621-49 ausente", body: "Integrada si el comprador financia." },
        { title: "Hipoteca vendedor", body: "Cancelación alineada con arras." },
      ],
      [
        { question: "¿Precio del pack en Sant Joan Despí?", answer: "495 € IVA incl. (145 € arras + 350 € gestión documental)." },
        { question: "¿Atendéis Torreblanca y Les Fonts?", answer: "Sí. Todo el municipio con gestor dedicado." },
        { question: "¿Livendia busca comprador?", answer: "No. Gestoría cuando ya tienes comprador." },
      ],
      ["Centre", "Torreblanca", "Les Fonts", "Can Trabal", "TRAM T1/T2"],
      "Pack arras + gestión documental en Sant Joan Despí para vendedores particulares.",
      "Vende en Sant Joan Despí desde Barcelona u otra ciudad sin gestoría física.",
      [
        { title: "Sant Joan Despí: venta directa, trámites cubiertos", body: "Pack 495 € IVA incl." },
        { title: "Gestores expertos Livendia", body: "Arras CCCat y gestión hasta escritura." },
      ],
    ),
  },
  {
    slug: "sant-adria-de-besos",
    city: "Sant Adrià de Besòs",
    heroImage: metroBarcelonaZoneImage("barcelona2.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sant Adrià — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sant Adrià de Besòs entre particulares: pack arras + gestión documental 495 € IVA incl. La Mina, Parc del Besòs, metro L2. Sin comisión.",
      keywords: [
        "pack arras gestión documental sant adria besos",
        "vender piso sant adria sin agencia",
        "venta entre particulares la mina",
        "gestor inmobiliario sant adria arras",
        "contrato arras parc besos 495",
      ],
      heroBadge: "Venta · Sant Adrià · Entre particulares",
      heroH1: "Vendes en Sant Adrià de Besòs entre particulares: arras CCCat y gestor documental",
      heroBullets: [
        "Centre, La Mina, Parc del Besòs, metro L2",
        "CCCat · bloques 60–80 · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Sant Adrià sin inmobiliaria: pack 495 € arras + gestión documental",
      whySubtitle:
        "En La Mina y Centre las comunidades envejecidas tardan en certificar deuda cero. El gestor Livendia solicita documentación en la primera semana post-arras.",
      localZonesHeading: "Zonas del pack en Sant Adrià de Besòs",
      localZones: "Centre, La Mina, Parc del Besòs, entorno Fòrum y corredor metro L2.",
      finalCtaTitle: "Vende en Sant Adrià con arras y gestor Livendia hasta notaría",
    },
    seo: zoneSeo(
      230_000,
      "Has encontrado comprador en Sant Adrià de Besòs y vendes sin agencia. Pack 495 € IVA incl.: gestor redacta arras CCCat y persigue cèdula, comunidad e hipoteca.",
      "Sant Adrià (~230.000 €) comparte dinámica con Badalona: ventas entre particulares y compradores de Barcelona por metro L2.",
      "Humedades y ascensores en bloques antiguos: el comprador exige transparencia — informe semáforo antes de notaría.",
      "adaptado a bloques densos del Besòs y compradores con hipoteca",
      [
        { title: "Comprador de Barcelona capital", body: "Documentación con rigor de capital — pack 495 €." },
        { title: "495 € vs comisión", body: "En 230.000 € el 3 % son 6.900 € + IVA." },
        { title: "Venta desde otra provincia", body: "Panel Livendia sin desplazamientos." },
      ],
      [
        { title: "Humedad en La Mina", body: "Perito e informe semáforo pre-transmisión." },
        { title: "Certificado comunidad lento", body: "Seguimiento semanal post-arras." },
        { title: "Arras sin CCCat", body: "Redacción legal Livendia." },
        { title: "Plazo financiación corto", body: "Cláusula 621-49 y plazos recalibrados." },
      ],
      [
        { question: "¿Qué incluye el pack en Sant Adrià?", answer: "Arras (145 €) + gestión documental (350 €). Total 495 € IVA incl." },
        { question: "¿Atendéis La Mina y Parc del Besòs?", answer: "Sí. Todo el municipio." },
        { question: "¿Servicio online?", answer: "Sí. Panel Livendia y gestor por WhatsApp." },
      ],
      ["Centre", "La Mina", "Parc del Besòs", "Fòrum (límite)", "Metro L2"],
      "Pack arras + gestión documental en Sant Adrià de Besòs para vendedores particulares.",
      "Gestor dedicado para ventas en el corredor Besòs con vendedor en otra ciudad.",
      [
        { title: "Sant Adrià: precio cerrado, comunidad lenta", body: "Gestor persigue certificados desde post-arras." },
        { title: "Sin comisión si ya tienes comprador", body: "Gestoría inmobiliaria Livendia." },
      ],
    ),
  },
  {
    slug: "mollet-del-valles",
    city: "Mollet del Vallès",
    heroImage: metroBarcelonaZoneImage("barcelona2.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Mollet — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Mollet del Vallès entre particulares: arras CCCat y gestor documental 495 € IVA incl. Centre, Can Borrell, RENFE. Sin comisión.",
      keywords: [
        "pack arras gestión documental mollet del valles",
        "vender piso mollet sin agencia",
        "venta entre particulares can borrell",
        "gestor inmobiliario mollet arras",
        "contrato arras mollet 495 euros",
      ],
      heroBadge: "Venta · Mollet · Propietarios",
      heroH1: "Vendes en Mollet del Vallès entre particulares: pack arras + gestión documental",
      heroBullets: [
        "Centre, Can Borrell, Gallecs, estación RENFE",
        "CCCat · Vallès · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Mollet sin agencia: arras equilibradas y gestor hasta escritura",
      whySubtitle:
        "Ventas familiares en el Vallès con herencias y compradores con hipoteca. Arras mal calibradas generan conflictos — el gestor Livendia redacta CCCat y recopila documentación.",
      localZonesHeading: "Núcleos del pack en Mollet del Vallès",
      localZones: "Centre, Can Borrell, Gallecs, entorno estación Mollet-Sant Fost y Plaça Catalunya.",
      finalCtaTitle: "Vende en Mollet con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      250_000,
      "Vendes en Mollet del Vallès sin inmobiliaria. Pack 495 € IVA incl.: gestor inmobiliario redacta contrato de arras y lleva documentación a notaría.",
      "Mollet (~250.000 €) es alternativa asequible al Vallès con ventas entre particulares y buena RENFE a Barcelona.",
      "Piso heredado en Centre: confirmatorias sin calendario de cancelación de hipoteca claro — riesgo en notaría.",
      "adaptado a ventas familiares y financiación del comprador en el Vallès",
      [
        { title: "Herencia en Mollet", body: "Arras confirmatorias y gestión documental coordinada." },
        { title: "495 € vs comisión", body: "Tarifa plana post-captación." },
        { title: "Vendedor en Barcelona", body: "Panel Livendia sin desplazamientos al Vallès." },
      ],
      [
        { title: "Penalidad opaca en señal", body: "Recalibrada conforme al CCCat." },
        { title: "Ascensor en Centre", body: "Seguimiento comunidad post-arras." },
        { title: "Energético caducado", body: "Incluido en gestión documental." },
        { title: "Art. 621-49", body: "Integrada si hay hipoteca comprador." },
      ],
      [
        { question: "¿Cuánto cuesta el pack en Mollet?", answer: "495 € IVA incl. Sin comisión sobre el precio." },
        { question: "¿Atendéis Can Borrell y Gallecs?", answer: "Sí. Todo Mollet del Vallès." },
        { question: "¿Livendia publica mi piso?", answer: "No. Entramos con comprador ya encontrado." },
      ],
      ["Centre", "Can Borrell", "Gallecs", "Mollet-Sant Fost", "Plaça Catalunya"],
      "Pack arras + gestión documental en Mollet para vendedores particulares.",
      "Gestor dedicado para ventas en el Vallès con vendedor en otra ciudad.",
      [
        { title: "Mollet: arras claras en el Vallès", body: "Pack 495 € con gestores colegiados." },
        { title: "495 € cuando ya tienes comprador", body: "No pagues comisión de captación." },
      ],
    ),
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    city: "Sarrià-Sant Gervasi",
    heroImage: getLocalCityCardImage("barcelona-sarria-sant-gervasi"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sarrià-Sant Gervasi — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sarrià-Sant Gervasi sin agencia: arras CCCat y gestor documental 495 € IVA incl. Tres Torres, Bonanova, Putxet. Sin comisión.",
      keywords: [
        "pack arras gestión documental sarria sant gervasi",
        "vender piso tres torres sin agencia",
        "venta entre particulares bonanova arras",
        "gestor inmobiliario putxet arras",
        "contrato arras sarria 495 euros",
      ],
      heroBadge: "Venta · Sarrià-Sant Gervasi · Sin agencia",
      heroH1: "Vendes en Sarrià-Sant Gervasi sin inmobiliaria: arras CCCat y gestor hasta notaría",
      heroBullets: [
        "Tres Torres, Bonanova, Putxet, Sarrià centre",
        "Ticket alto · fincas señoriales · CCCat",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Sarrià-Sant Gervasi entre particulares: arras precisas y documentación premium",
      whySubtitle:
        "En Tres Torres una señal mal calibrada cuesta más que 495 €. El gestor Livendia redacta arras equilibradas y persigue cèdula, ITE y comunidad exigente.",
      localZonesHeading: "Barrios del pack en Sarrià-Sant Gervasi",
      localZones:
        "Les Tres Torres, Bonanova, Putxet i Farró, Sarrià centre, Sant Gervasi – Galvany y Vallvidrera (límite).",
      finalCtaTitle: "Vende en Sarrià-Sant Gervasi con arras y gestor Livendia",
    },
    seo: zoneSeo(
      520_000,
      "Vendes en Barcelona — distrito Sarrià-Sant Gervasi — entre particulares. Pack 495 € IVA incl.: contrato de arras CCCat y gestión documental hasta notaría.",
      "Sarrià-Sant Gervasi concentra ticket alto (~520.000 €), fincas señoriales y compradores con hipoteca preconcedida.",
      "Parking anexo o terraza no inscrita en Tres Torres: el comprador pide rebaja días antes de notaría si no consta en arras.",
      "con calibración de señal en operaciones de importe alto y fincas con portería",
      [
        { title: "Operación de alto importe", body: "Arras equilibradas CCCat — pack 495 € vs miles en comisión." },
        { title: "Comprador exigente en Bonanova", body: "Gestor persigue documentación con rigor de agencia sin cobrar %." },
        { title: "Vendedor fuera de España", body: "Panel Livendia y gestor dedicado." },
      ],
      [
        { title: "Plaza de parking no reflejada", body: "Incluida en arras y nota simple." },
        { title: "ITE en finca del s. XX", body: "Verificación pre-notaría." },
        { title: "Derrama de fachada", body: "Cruce actas y certificado de deuda." },
        { title: "Cláusula 621-49", body: "Integrada desde borrador Livendia." },
      ],
      [
        { question: "¿Precio del pack en Tres Torres o Bonanova?", answer: "495 € IVA incl. Sin comisión aunque el piso supere 500.000 €." },
        { question: "¿Diferencia con la landing Sarrià?", answer: "Esta cubre todo el distrito (Tres Torres, Putxet, Sant Gervasi, etc.)." },
        { question: "¿Incluye informe semáforo?", answer: "Sí, en gestión documental vendedor post-arras." },
      ],
      ["Les Tres Torres", "Bonanova", "Putxet i Farró", "Sarrià centre", "Sant Gervasi – Galvany"],
      "Pack arras + gestión documental en Sarrià-Sant Gervasi para vendedores particulares.",
      "Centraliza certificados en panel Livendia si vendes en el distrito y resides fuera.",
      [
        { title: "Distrito premium: arras que aguantan notaría", body: "Gestores colegiados Livendia." },
        { title: "495 € vs 3 % de comisión", body: "Si ya tienes comprador, tarifa plana." },
      ],
    ),
  },
  {
    slug: "barcelona-ciutat-vella",
    city: "Ciutat Vella",
    heroImage: getLocalCityCardImage("barcelona-ciutat-vella"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Ciutat Vella — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Ciutat Vella sin agencia: pack arras + gestión documental 495 € IVA incl. Gòtic, Raval, Born, Barceloneta. CCCat. Sin comisión.",
      keywords: [
        "pack arras gestión documental ciutat vella",
        "vender piso gothic quarter sin agencia",
        "venta entre particulares raval arras",
        "gestor inmobiliario born barcelona",
        "contrato arras ciutat vella 495",
      ],
      heroBadge: "Venta · Ciutat Vella · Entre particulares",
      heroH1: "Vendes en Ciutat Vella entre particulares: arras CCCat y gestor documental hasta notaría",
      heroBullets: [
        "Gòtic, El Raval, El Born, La Barceloneta",
        "Fincas históricas · cèdula · ITE",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Ciutat Vella sin agencia: pack 495 € arras + gestión documental",
      whySubtitle:
        "En el Gòtic y el Raval las comunidades saturadas y las fincas protegidas exigen arras CCCat precisas y gestor que persiga cèdula e ITE desde post-arras.",
      localZonesHeading: "Barrios del distrito Ciutat Vella",
      localZones:
        "El Gòtic, El Raval, Sant Pere-Santa Caterina i la Ribera (Born) y La Barceloneta. Landings específicas por barrio también disponibles.",
      finalCtaTitle: "Vende en Ciutat Vella con arras y gestor Livendia hasta escritura",
    },
    seo: zoneSeo(
      360_000,
      "Vendes en Ciutat Vella — Gòtic, Raval, Born o Barceloneta — sin inmobiliaria. Pack 495 € IVA incl.: gestor redacta arras CCCat y recopila documentación hasta notaría.",
      "Ciutat Vella mezcla fincas históricas, turismo residual y ventas entre particulares (~360.000 € de media según barrio).",
      "Arras copiadas sin CCCat ni cláusula 621-49: el comprador usa fallos para pedir rebaja en el último momento.",
      "adaptado a fincas del casco antiguo, terrazas y comunidades saturadas",
      [
        { title: "Vendes sin agencia en el casco antiguo", body: "Pack 495 € con gestor que conoce normativa catalana." },
        { title: "Comprador con hipoteca", body: "Art. 621-49 integrado en borrador Livendia." },
        { title: "Herencia en el Born", body: "Confirmatorias y calendario de cancelación claro." },
      ],
      [
        { title: "Terraza no inscrita", body: "Regularización o reflejo en arras." },
        { title: "Cèdula caducada en Raval", body: "Renovación coordinada pre-notaría." },
        { title: "ITE en edificio protegido", body: "Verificación de vigencia en checklist." },
        { title: "Comunidad lenta en Gòtic", body: "Seguimiento certificado de deuda post-arras." },
      ],
      [
        { question: "¿Cuánto cuesta el pack en Ciutat Vella?", answer: "495 € IVA incl. (145 € + 350 €)." },
        { question: "¿Tenéis landings por barrio (Gòtic, Raval…)?", answer: "Sí. Esta landing cubre el distrito; también existen páginas por barrio." },
        { question: "¿Livendia busca comprador?", answer: "No. Gestoría inmobiliaria digital." },
      ],
      ["El Gòtic", "El Raval", "El Born", "La Barceloneta", "Sant Pere"],
      "Pack arras + gestión documental en Ciutat Vella para vendedores particulares.",
      "Panel Livendia especialmente útil si vendes en el casco antiguo y resides fuera de Barcelona.",
      [
        { title: "Ciutat Vella: normativa catalana en arras", body: "Cèdula, ITE y CCCat — pack 495 €." },
        { title: "Sin comisión si ya tienes comprador", body: "Gestores expertos Livendia." },
      ],
    ),
  },
];
