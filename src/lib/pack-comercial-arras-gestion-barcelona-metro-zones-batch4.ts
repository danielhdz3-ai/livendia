import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL } from "@/lib/catalog.public";
import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";
import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH4_SLUGS = [
  "barcelona-sant-marti",
  "barcelona-nou-barris",
  "barcelona-horta-guinardo",
  "barcelona-sant-andreu",
  "esplugues-de-llobregat",
  "castelldefels",
  "sant-boi-de-llobregat",
  "gava",
] as const;

export type PackArrasGestionBcnMetroBatch4Slug =
  (typeof PACK_ARRAS_GESTION_BCN_METRO_BATCH4_SLUGS)[number];

type ZoneBatch = {
  slug: PackArrasGestionBcnMetroBatch4Slug;
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

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH4: readonly ZoneBatch[] = [
  {
    slug: "barcelona-sant-marti",
    city: "Sant Martí",
    heroImage: getLocalCityCardImage("barcelona-sant-marti"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sant Martí — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sant Martí sin agencia: arras CCCat y gestor documental hasta notaría por 495 € IVA incl. Poblenou, Clot, Diagonal Mar. Sin comisión inmobiliaria.",
      keywords: [
        "pack arras gestión documental sant marti",
        "vender piso poblenou sin agencia",
        "venta entre particulares clot barcelona",
        "gestor inmobiliario sant marti arras",
        "contrato arras diagonal mar 495",
      ],
      heroBadge: "Venta · Sant Martí · Sin agencia",
      heroH1: "Vendes en Sant Martí sin inmobiliaria: arras CCCat y gestor documental hasta notaría",
      heroBullets: [
        "Poblenou, El Clot, La Verneda, Diagonal Mar",
        "CCCat · cèdula · comunidades multi-bloque",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. · 0 % comisión`,
      ],
      whyTitle: "Sant Martí entre particulares: arras + documentación sin pagar comisión",
      whySubtitle:
        "En Poblenou y el 22@ el comprador exige cèdula e ITE al día. Las arras copiadas de otros distritos no contemplan plazos de comunidad en bloques grandes — el gestor Livendia redacta y persigue certificados.",
      localZonesHeading: "Barrios del pack en Sant Martí",
      localZones:
        "Poblenou, El Clot, La Verneda, Diagonal Mar, Provençals del Poblenou y Besòs. Pack 495 € con gestor documental online.",
      finalCtaTitle: "Vende en Sant Martí con arras y gestor Livendia hasta escritura",
    },
    seo: zoneSeo(
      390_000,
      "Vendes en Barcelona — en Sant Martí — con comprador ya cerrado. Pack 495 € IVA incl.: contrato de arras CCCat y gestión documental hasta notaría, sin comisión de agencia.",
      "Sant Martí concentra ventas entre particulares en Poblenou, Clot y Diagonal Mar. Precio medio ~390.000 €. Operaciones rápidas en precio, lentas en certificado de comunidad.",
      "En La Verneda o Provençals del Poblenou el certificado de deuda cero puede tardar 2–3 semanas. Sin gestor desde la firma de arras, el banco del comprador tumba la fecha de escritura.",
      "adaptado a bloques multi-portal y compradores con hipoteca en zona 22@",
      [
        {
          title: "Comprador exigente en Poblenou",
          body: "Pack 495 € con gestor que persigue cèdula, ITE y comunidad con el mismo rigor que una agencia — sin cobrar comisión.",
        },
        {
          title: "Vendes sin captación inmobiliaria",
          body: "Si encontraste comprador por Idealista, no pagues 3 % sobre 390.000 € por trámites post-arras.",
        },
        {
          title: "Herencia o venta desde fuera de Barcelona",
          body: "Panel Livendia y gestor dedicado por WhatsApp.",
        },
      ],
      [
        { title: "Plazo de escritura irreal en arras", body: "Recalibrado conforme al calendario real de comunidad y financiación." },
        { title: "ITE en finca de los 60 en El Clot", body: "Verificación de vigencia antes de fijar notaría." },
        { title: "Derrama aprobada en junta", body: "Cruce de actas y certificado de deuda en gestión documental." },
        { title: "Art. 621-49 ausente", body: "Cláusula CCCat integrada si el comprador financia." },
      ],
      [
        { question: "¿Cuánto cuesta el pack en Sant Martí?", answer: "495 € IVA incl. (145 € arras + 350 € gestión documental)." },
        { question: "¿Atendéis Poblenou y Diagonal Mar?", answer: "Sí. Todo el distrito Sant Martí con gestor dedicado online." },
        { question: "¿Livendia busca comprador?", answer: "No. Gestoría para vendedores con comprador ya encontrado." },
      ],
      ["Poblenou", "El Clot", "La Verneda", "Diagonal Mar", "Provençals del Poblenou", "Besòs"],
      "Pack arras + gestión documental en Sant Martí para vendedores particulares.",
      "Centraliza certificados en panel Livendia si vendes en Sant Martí y resides fuera del distrito.",
      [
        { title: "Sant Martí: precio cerrado, comunidad lenta", body: "Gestor persigue certificados desde la semana post-arras." },
        { title: "495 € vs comisión de agencia", body: "Venta directa con gestores expertos Livendia." },
      ],
    ),
  },
  {
    slug: "barcelona-nou-barris",
    city: "Nou Barris",
    heroImage: getLocalCityCardImage("barcelona-nou-barris"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Nou Barris — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Nou Barris entre particulares: pack arras + gestión documental 495 € IVA incl. Verdum, Roquetes, Trinitat Vella. Gestor hasta notaría.",
      keywords: [
        "pack arras gestión documental nou barris",
        "vender piso verdum sin agencia",
        "venta entre particulares roquetes barcelona",
        "gestor inmobiliario nou barris arras",
        "contrato arras trinitat vella 495",
      ],
      heroBadge: "Venta · Nou Barris · Propietarios",
      heroH1: "Vendes en Nou Barris entre particulares: arras profesionales y gestor documental",
      heroBullets: [
        "Verdum, Roquetes, Trinitat Vella, Porta",
        "CCCat · cèdula · bloques de los 60–80",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · Sin comisión`,
      ],
      whyTitle: "Nou Barris sin agencia: pack 495 € arras + gestión documental",
      whySubtitle:
        "Muchas ventas cierran entre familias del distrito. Arras con penalidades opacas o plazos imposibles para la comunidad generan conflictos — el gestor Livendia equilibra CCCat y recopila documentación.",
      localZonesHeading: "Núcleos del pack en Nou Barris",
      localZones: "Verdum, Roquetes, Trinitat Vella, Porta, Vilapicina y Ciutat Meridiana.",
      finalCtaTitle: "Vende en Nou Barris con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      220_000,
      "Has encontrado comprador en Nou Barris y vendes sin inmobiliaria. Pack 495 € IVA incl.: gestor redacta arras CCCat y lleva cèdula, comunidad e hipoteca hasta notaría.",
      "Nou Barris ofrece ticket accesible (~220.000 €) con ventas entre particulares frecuentes en Verdum y Roquetes.",
      "Arras firmadas con 30 días a escritura cuando la comunidad tarda 20: el comprador pide rebaja o abandona la operación.",
      "con plazos realistas para administradores de fincas en bloques densos",
      [
        { title: "Precio cerrado por Idealista", body: "Pack arras + gestión cuando ya tienes comprador en Nou Barris." },
        { title: "495 € vs comisión", body: "En 220.000 € el 3 % son 6.600 € + IVA. Tarifa plana Livendia." },
        { title: "Vendedor que no domina el CCCat", body: "Gestor legal redacta lo pactado verbalmente." },
      ],
      [
        { title: "Penalidad desequilibrada en señal", body: "Recalibrada conforme al CCCat antes de firmar." },
        { title: "Cèdula caducada", body: "Renovación coordinada en checklist de gestión documental." },
        { title: "Hipoteca pendiente del vendedor", body: "Certificado de deuda bancaria alineado con arras." },
        { title: "Certificado energético", body: "Verificado antes de fijar fecha en notaría." },
      ],
      [
        { question: "¿Qué incluye el pack en Nou Barris?", answer: "Arras (145 €) + gestión documental vendedor (350 €). Total 495 € IVA incl." },
        { question: "¿Atendéis Verdum y Roquetes?", answer: "Sí. Todo el distrito con gestor dedicado online." },
        { question: "¿Servicio online?", answer: "Sí. Panel Livendia y gestor por WhatsApp." },
      ],
      ["Verdum", "Roquetes", "Trinitat Vella", "Porta", "Vilapicina", "Ciutat Meridiana"],
      "Pack arras + gestión documental en Nou Barris para vendedores particulares.",
      "Panel Livendia para vender en Nou Barris sin desplazarte a gestoría física.",
      [
        { title: "Nou Barris: arras claras, plazos realistas", body: "Gestor persigue comunidad desde la firma de arras." },
        { title: "Gestores expertos Livendia", body: "Criterio jurídico colegiado en cada borrador." },
      ],
    ),
  },
  {
    slug: "barcelona-horta-guinardo",
    city: "Horta-Guinardó",
    heroImage: getLocalCityCardImage("barcelona-horta-guinardo"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Horta-Guinardó — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Horta-Guinardó sin agencia: arras CCCat y gestor documental 495 € IVA incl. Guinardó, Horta, El Carmel. Sin comisión.",
      keywords: [
        "pack arras gestión documental horta guinardo",
        "vender piso guinardo sin agencia",
        "venta entre particulares el carmel",
        "gestor inmobiliario horta arras",
        "contrato arras barcelona 495 horta",
      ],
      heroBadge: "Venta · Horta-Guinardó · Sin agencia",
      heroH1: "Vendes en Horta-Guinardó sin inmobiliaria: pack arras + gestión con gestor Livendia",
      heroBullets: [
        "Guinardó, Horta, El Carmel, La Teixonera",
        "Fincas en ladera · ITE · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Horta-Guinardó entre particulares: arras equilibradas y documentación hasta escritura",
      whySubtitle:
        "En El Carmel y Guinardó hay edificios en ladera con ITE y comunidades activas. Un gestor persigue certificados mientras tú cierras con el comprador encontrado por tu cuenta.",
      localZonesHeading: "Barrios del pack en Horta-Guinardó",
      localZones: "Guinardó, Horta centre, El Carmel, La Teixonera, Montbau y Vall d'Hebron.",
      finalCtaTitle: "Vende en Horta-Guinardó con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      310_000,
      "Vendes en Horta-Guinardó entre particulares con comprador ya cerrado. Pack 495 € IVA incl.: contrato de arras CCCat y gestión documental hasta la notaría.",
      "Horta-Guinardó mezcla pisos en ladera, familias consolidadas y precio medio ~310.000 €. Ventas directas sin agencia son habituales en Guinardó y Horta.",
      "ITE desfavorable o cèdula caducada en fincas de los 60: el notario lo detecta el día de la firma si no hay gestor previo.",
      "con foco en ITE en edificios en ladera y plazos de comunidad en El Carmel",
      [
        { title: "Comprador con hipoteca", body: "Art. 621-49 CCCat integrado desde el borrador Livendia." },
        { title: "Venta familiar en Guinardó", body: "Arras confirmatorias con calendario de cancelación claro." },
        { title: "No quieres comisión de agencia", body: "495 € tarifa plana post-captación." },
      ],
      [
        { title: "Terraza no inscrita", body: "Regularización o reflejo en arras antes de transmitir." },
        { title: "Derrama de rehabilitación", body: "Cruce de actas y certificado de deuda." },
        { title: "Plazo bancario corto", body: "Recalibrado conforme al calendario real de financiación." },
        { title: "Informe semáforo con alertas", body: "Checklist pre-notaría en gestión documental." },
      ],
      [
        { question: "¿Precio del pack en Horta-Guinardó?", answer: "495 € IVA incl. Sin comisión sobre el precio de venta." },
        { question: "¿Atendéis El Carmel y Montbau?", answer: "Sí. Todo el distrito con el mismo protocolo Livendia." },
        { question: "¿Incluye informe semáforo?", answer: "Sí, en la gestión documental vendedor post-arras." },
      ],
      ["Guinardó", "Horta centre", "El Carmel", "La Teixonera", "Montbau", "Vall d'Hebron"],
      "Pack arras + gestión documental en Horta-Guinardó para vendedores particulares.",
      "Gestor dedicado para ventas en ladera con vendedor en otra ciudad o país.",
      [
        { title: "Horta-Guinardó: ITE y cèdula bajo control", body: "Pack 495 € con seguimiento post-arras." },
        { title: "Sin comisión si ya tienes comprador", body: "Gestoría inmobiliaria, no captación." },
      ],
    ),
  },
  {
    slug: "barcelona-sant-andreu",
    city: "Sant Andreu",
    heroImage: getLocalCityCardImage("barcelona-sant-andreu"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sant Andreu — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sant Andreu entre particulares: pack arras + gestión documental 495 € IVA incl. La Sagrera, Bon Pastor, Trinitat Vella. Gestor hasta notaría.",
      keywords: [
        "pack arras gestión documental sant andreu",
        "vender piso la sagrera sin agencia",
        "venta entre particulares bon pastor",
        "gestor inmobiliario sant andreu arras",
        "contrato arras sant andreu 495",
      ],
      heroBadge: "Venta · Sant Andreu · Entre particulares",
      heroH1: "Vendes en Sant Andreu entre particulares: arras CCCat y gestor documental hasta notaría",
      heroBullets: [
        "La Sagrera, Bon Pastor, Sant Andreu de Palomar",
        "CCCat · comunidad · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Sant Andreu sin agencia: arras + gestor que persigue la documentación",
      whySubtitle:
        "La Sagrera y el entorno del futuro hub ferroviario concentran compradores con hipoteca. Arras genéricas sin cláusula 621-49 o plazos irreales tumbarán la operación.",
      localZonesHeading: "Zonas del pack en Sant Andreu",
      localZones: "Sant Andreu de Palomar, La Sagrera, Bon Pastor, Trinitat Vella (límite) y Navas.",
      finalCtaTitle: "Vende en Sant Andreu con arras y gestor Livendia hasta escritura",
    },
    seo: zoneSeo(
      280_000,
      "Vendes en Sant Andreu sin inmobiliaria. Pack 495 € IVA incl.: gestor inmobiliario redacta contrato de arras y recopila documentación hasta notaría.",
      "Sant Andreu combina ticket moderado (~280.000 €) y ventas entre particulares estables en Palomar y La Sagrera.",
      "Comprador de otro distrito exige la misma diligencia documental que una agencia — sin gestor, la fecha de escritura se retrasa semanas.",
      "adaptado a compradores con financiación y comunidades en Bon Pastor",
      [
        { title: "Comprador encontrado por Idealista", body: "Pack 495 € cubre arras y tramo documental post-arras." },
        { title: "Financiación del comprador", body: "Cláusula CCCat 621-49 redactada antes de la señal." },
        { title: "Vendedor fuera de Barcelona", body: "Panel Livendia sin desplazamientos a gestoría." },
      ],
      [
        { title: "Arras copiadas de otra CCAA", body: "Adaptación al CCCat catalán antes de firmar." },
        { title: "Certificado de comunidad lento", body: "Seguimiento semanal del gestor post-arras." },
        { title: "Energético caducado", body: "Incluido en checklist de gestión documental." },
        { title: "Hipoteca vendedor sin coordinar", body: "Cancelación alineada con lo pactado en arras." },
      ],
      [
        { question: "¿Cuánto cuesta vender en Sant Andreu con Livendia?", answer: "495 € IVA incl. (145 € arras + 350 € gestión documental)." },
        { question: "¿Atendéis La Sagrera y Bon Pastor?", answer: "Sí. Todo el distrito Sant Andreu." },
        { question: "¿Livendia publica mi piso?", answer: "No. Entramos cuando ya tienes comprador." },
      ],
      ["Sant Andreu de Palomar", "La Sagrera", "Bon Pastor", "Navas", "Trinitat Vella (límite)"],
      "Pack arras + gestión documental en Sant Andreu para vendedores particulares.",
      "Centraliza certificados en panel Livendia si vendes en Sant Andreu y trabajas en otra zona.",
      [
        { title: "Sant Andreu: venta directa, trámites profesionales", body: "Mismo pack 495 € que en Eixample o Gràcia." },
        { title: "495 € cuando ya tienes comprador", body: "Ahorro frente a comisión del 3 %." },
      ],
    ),
  },
  {
    slug: "esplugues-de-llobregat",
    city: "Esplugues de Llobregat",
    heroImage: metroBarcelonaZoneImage("esplugues.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Esplugues — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Esplugues entre particulares: arras CCCat y gestor documental 495 € IVA incl. Can Vidalet, Finestrelles, Centre. Sin comisión.",
      keywords: [
        "pack arras gestión documental esplugues",
        "vender piso esplugues sin agencia",
        "venta entre particulares can vidalet",
        "gestor inmobiliario esplugues arras",
        "contrato arras esplugues 495",
      ],
      heroBadge: "Venta · Esplugues · Propietarios",
      heroH1: "Vendes en Esplugues de Llobregat entre particulares: pack arras + gestión Livendia",
      heroBullets: [
        "Can Vidalet, Finestrelles, Centre, Les Planes",
        "Metro L5 · CCCat · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Esplugues sin inmobiliaria: arras + documentación hasta notaría",
      whySubtitle:
        "Muchos compradores vienen de Barcelona capital y exigen documentación impecable. El gestor Livendia redacta arras CCCat y persigue comunidad, cèdula e ITE.",
      localZonesHeading: "Núcleos del pack en Esplugues",
      localZones: "Can Vidalet, Finestrelles, Centre, Les Planes, Can Clota y entorno hospitalario.",
      finalCtaTitle: "Vende en Esplugues con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      320_000,
      "Vendes en Esplugues sin agencia con comprador ya cerrado. Pack 495 € IVA incl.: gestor redacta arras y lleva toda la documentación a notaría.",
      "Esplugues (~320.000 € de media) concentra ventas entre particulares con compradores de Zona Universitària y Diagonal.",
      "Plazos de escritura copiados del ensanche no encajan con comunidades del Baix Llobregat — recalibración en borrador Livendia.",
      "con plazos realistas para bloques en ladera de Finestrelles",
      [
        { title: "Comprador de Barcelona capital", body: "Mismo rigor documental que en Eixample — pack 495 €." },
        { title: "495 € vs comisión", body: "Tarifa plana si tú trajiste al comprador." },
        { title: "Venta desde otra provincia", body: "Panel Livendia y gestor dedicado." },
      ],
      [
        { title: "Ascensor y comunidad lenta", body: "Seguimiento del certificado de deuda desde post-arras." },
        { title: "Cèdula caducada", body: "Renovación coordinada antes de notaría." },
        { title: "Cláusula 621-49 ausente", body: "Integrada si hay hipoteca comprador." },
        { title: "Parking anexo", body: "Reflejado en arras y nota simple." },
      ],
      [
        { question: "¿Precio del pack en Esplugues?", answer: "495 € IVA incl. Sin comisión sobre el precio de venta." },
        { question: "¿Atendéis Can Vidalet y Finestrelles?", answer: "Sí. Todo el municipio con gestor online." },
        { question: "¿Livendia busca comprador?", answer: "No. Gestoría inmobiliaria digital." },
      ],
      ["Can Vidalet", "Finestrelles", "Centre", "Les Planes", "Can Clota"],
      "Pack arras + gestión documental en Esplugues para vendedores particulares.",
      "Vende en Esplugues desde Barcelona u otra ciudad sin gestoría física.",
      [
        { title: "Esplugues: venta ágil, documentación rigurosa", body: "Pack 495 € con gestores colegiados." },
        { title: "Sin comisión de agencia", body: "Si ya tienes comprador, no pagues porcentaje." },
      ],
    ),
  },
  {
    slug: "castelldefels",
    city: "Castelldefels",
    heroImage: metroBarcelonaZoneImage("barcelona.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Castelldefels — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Castelldefels entre particulares: arras CCCat y gestor documental 495 € IVA incl. Platja, Bellamar, Centre. Rodalies R2. Sin comisión.",
      keywords: [
        "pack arras gestión documental castelldefels",
        "vender piso castelldefels sin agencia",
        "venta entre particulares bellamar",
        "gestor inmobiliario castelldefels arras",
        "contrato arras castelldefels 495",
      ],
      heroBadge: "Venta · Castelldefels · Sin agencia",
      heroH1: "Vendes en Castelldefels entre particulares: arras profesionales y gestor hasta notaría",
      heroBullets: [
        "Platja, Bellamar, Centre, Montmar",
        "Chalets y bloques · CCCat · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Castelldefels sin agencia: pack arras + gestión documental 495 €",
      whySubtitle:
        "Operaciones en Bellamar o chalets en Montmar exigen describir bien finca y anejos en arras. El gestor Livendia redacta CCCat y persigue ITE, cèdula y comunidad.",
      localZonesHeading: "Zonas del pack en Castelldefels",
      localZones: "Centre, Platja de Castelldefels, Bellamar, Montmar y Can Roca.",
      finalCtaTitle: "Vende en Castelldefels con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      350_000,
      "Vendes en Castelldefels sin inmobiliaria. Pack 495 € IVA incl.: gestor redacta contrato de arras y recopila documentación hasta la notaría.",
      "Castelldefels mezcla litoral, Rodalies R2 y ticket ~350.000 €. Ventas entre particulares con compradores de Barcelona y segunda residencia.",
      "Segunda residencia en la costa: vendedor ausente y certificados que caducan — gestor remoto desde post-arras.",
      "adaptado a chalets, adosados y bloques cerca de platja",
      [
        { title: "Vendes desde Barcelona capital", body: "Panel Livendia sin desplazamientos semanales a Castelldefels." },
        { title: "Comprador con hipoteca", body: "Art. 621-49 CCCat en borrador Livendia." },
        { title: "495 € vs comisión", body: "En 350.000 € el 3 % son 10.500 € + IVA." },
      ],
      [
        { title: "Casa con parcela mal descrita", body: "Objeto del contrato coherente con nota simple." },
        { title: "ITE en edificio costero", body: "Verificación de vigencia pre-notaría." },
        { title: "Humedad o terraza", body: "Informe semáforo antes de transmitir." },
        { title: "Plazo financiación irreal", body: "Recalibrado conforme al banco del comprador." },
      ],
      [
        { question: "¿Cuánto cuesta el pack en Castelldefels?", answer: "495 € IVA incl. (145 € + 350 €)." },
        { question: "¿Atendéis Bellamar y la platja?", answer: "Sí. Todo el municipio." },
        { question: "¿Servicio 100 % online?", answer: "Sí, con gestor dedicado." },
      ],
      ["Centre", "Platja de Castelldefels", "Bellamar", "Montmar", "Can Roca"],
      "Pack arras + gestión documental en Castelldefels para vendedores particulares.",
      "Gestor Livendia para ventas en el Garraf con vendedor en otra ciudad.",
      [
        { title: "Castelldefels: litoral y documentación al día", body: "Pack 495 € post-captación." },
        { title: "Gestores expertos Livendia", body: "Arras CCCat y gestión hasta escritura." },
      ],
    ),
  },
  {
    slug: "sant-boi-de-llobregat",
    city: "Sant Boi de Llobregat",
    heroImage: metroBarcelonaZoneImage("barcelona2.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sant Boi — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sant Boi entre particulares: pack arras + gestión documental 495 € IVA incl. Centre, Marianao, Camps Blancs. Sin comisión inmobiliaria.",
      keywords: [
        "pack arras gestión documental sant boi",
        "vender piso sant boi sin agencia",
        "venta entre particulares marianao",
        "gestor inmobiliario sant boi arras",
        "contrato arras sant boi llobregat 495",
      ],
      heroBadge: "Venta · Sant Boi · Entre particulares",
      heroH1: "Vendes en Sant Boi de Llobregat entre particulares: arras CCCat y gestor documental",
      heroBullets: [
        "Centre, Marianao, Camps Blancs, Plaça Catalunya",
        "CCCat · comunidades activas · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · Sin comisión`,
      ],
      whyTitle: "Sant Boi sin agencia: arras + gestor que persigue certificados",
      whySubtitle:
        "En Marianao y Centre las comunidades de bloques de los 70–90 tardan en emitir certificado de deuda. Activar gestión documental en la primera semana post-arras evita perder la fecha de escritura.",
      localZonesHeading: "Núcleos del pack en Sant Boi",
      localZones: "Centre, Marianao, Camps Blancs, entorno Plaça Catalunya y Baix Llobregat.",
      finalCtaTitle: "Vende en Sant Boi con arras y gestor Livendia hasta notaría",
    },
    seo: zoneSeo(
      240_000,
      "Has encontrado comprador en Sant Boi y vendes sin agencia. Pack 495 € IVA incl.: gestor inmobiliario redacta arras CCCat y persigue documentación hasta escritura.",
      "Sant Boi (~240.000 €) con ventas entre particulares estables y compradores del corredor del Llobregat.",
      "Arras con penalidades opacas: el comprador usa fallos para pedir rebaja días antes de notaría.",
      "con seguimiento de comunidad en bloques densos de Marianao",
      [
        { title: "Precio cerrado — empieza el papeleo", body: "Pack arras + gestión cuando ya tienes comprador." },
        { title: "495 € vs comisión", body: "En 240.000 € el 3 % son 7.200 € + IVA." },
        { title: "Comprador de Barcelona", body: "Documentación con rigor de capital — gestor Livendia." },
      ],
      [
        { title: "Caldera o ascensor en junta", body: "Derramas reflejadas en informe semáforo." },
        { title: "Cèdula caducada", body: "Checklist en gestión documental." },
        { title: "Hipoteca comprador", body: "Cláusula 621-49 integrada." },
        { title: "Plazo escritura corto", body: "Recalibrado en borrador CCCat." },
      ],
      [
        { question: "¿Qué incluye el pack en Sant Boi?", answer: "Arras (145 €) + gestión documental (350 €). Total 495 € IVA incl." },
        { question: "¿Atendéis Marianao y Camps Blancs?", answer: "Sí. Todo el municipio." },
        { question: "¿Livendia publica mi piso?", answer: "No. Gestoría, no captación." },
      ],
      ["Centre", "Marianao", "Camps Blancs", "Plaça Catalunya", "Baix Llobregat"],
      "Pack arras + gestión documental en Sant Boi para vendedores particulares.",
      "Panel Livendia para ventas en Sant Boi sin gestoría física.",
      [
        { title: "Sant Boi: venta directa, trámites cubiertos", body: "Pack 495 € IVA incl." },
        { title: "Sin comisión si ya tienes comprador", body: "Gestores colegiados Livendia." },
      ],
    ),
  },
  {
    slug: "gava",
    city: "Gavà",
    heroImage: metroBarcelonaZoneImage("barcelona.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Gavà — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Gavà entre particulares: arras CCCat y gestor documental 495 € IVA incl. Gavà Mar, Centre, Can Ros. TRAM. Sin comisión.",
      keywords: [
        "pack arras gestión documental gava",
        "vender piso gava sin agencia",
        "venta entre particulares gava mar",
        "gestor inmobiliario gava arras",
        "contrato arras gava 495 euros",
      ],
      heroBadge: "Venta · Gavà · Propietarios",
      heroH1: "Vendes en Gavà entre particulares: pack arras + gestión documental hasta notaría",
      heroBullets: [
        "Centre, Gavà Mar, Can Ros, Torre Lluch",
        "TRAM · CCCat · cèdula",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Gavà sin inmobiliaria: arras equilibradas y documentación hasta escritura",
      whySubtitle:
        "En Gavà Mar y Centre circulan ventas directas con compradores del Garraf y Barcelona. El gestor Livendia redacta arras CCCat y persigue cèdula, ITE y comunidad.",
      localZonesHeading: "Zonas del pack en Gavà",
      localZones: "Centre, Gavà Mar, Can Ros, Torre Lluch y urbanizaciones TRAM.",
      finalCtaTitle: "Vende en Gavà con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      310_000,
      "Vendes en Gavà sin agencia con comprador ya cerrado. Pack 495 € IVA incl.: contrato de arras CCCat y gestión documental hasta notaría.",
      "Gavà (~310.000 €) combina TRAM, litoral y ventas entre particulares en Centre y Gavà Mar.",
      "Vendedor en Barcelona capital y piso en Gavà: certificados que caducan sin seguimiento — gestor remoto post-arras.",
      "adaptado a bloques en Centre y vivienda cerca del litoral",
      [
        { title: "Vendes desde otra ciudad", body: "Panel Livendia y gestor sin desplazamientos al Garraf." },
        { title: "Comprador con financiación", body: "621-49 CCCat en borrador antes de señal." },
        { title: "495 € tarifa plana", body: "Sin comisión sobre el precio de venta." },
      ],
      [
        { title: "Climatización o humedad en Gavà Mar", body: "Informe semáforo y transparencia pre-venta." },
        { title: "Comunidad lenta", body: "Seguimiento certificado de deuda post-arras." },
        { title: "Energético caducado", body: "Incluido en gestión documental." },
        { title: "Arras sin CCCat", body: "Redacción legal Livendia antes de firmar." },
      ],
      [
        { question: "¿Precio del pack en Gavà?", answer: "495 € IVA incl. Sin comisión." },
        { question: "¿Atendéis Gavà Mar y Can Ros?", answer: "Sí. Todo el municipio." },
        { question: "¿Incluye informe semáforo?", answer: "Sí, en la gestión documental vendedor." },
      ],
      ["Centre", "Gavà Mar", "Can Ros", "Torre Lluch", "TRAM Gavà"],
      "Pack arras + gestión documental en Gavà para vendedores particulares.",
      "Gestor dedicado para ventas en Gavà con vendedor en Barcelona u otra provincia.",
      [
        { title: "Gavà: venta entre particulares blindada", body: "Pack 495 € con gestores expertos." },
        { title: "495 € cuando ya tienes comprador", body: "No pagues comisión de captación." },
      ],
    ),
  },
];
