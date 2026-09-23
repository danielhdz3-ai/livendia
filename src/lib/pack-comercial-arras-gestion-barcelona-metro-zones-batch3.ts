import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL } from "@/lib/catalog.public";
import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";
import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH3_SLUGS = [
  "cornella-de-llobregat",
  "sant-cugat-del-valles",
  "sabadell",
  "terrassa",
] as const;

export type PackArrasGestionBcnMetroBatch3Slug =
  (typeof PACK_ARRAS_GESTION_BCN_METRO_BATCH3_SLUGS)[number];

type ZoneBatch = {
  slug: PackArrasGestionBcnMetroBatch3Slug;
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

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH3: readonly ZoneBatch[] = [
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    heroImage: getLocalCityCardImage("cornella-de-llobregat"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Cornellà — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Cornellà sin agencia: arras CCCat y gestor documental hasta notaría por 495 € IVA incl. Sant Ildefons, Can Mercader. Sin comisión inmobiliaria.",
      keywords: [
        "pack arras gestión documental cornella",
        "vender piso cornella sin agencia",
        "venta entre particulares cornella de llobregat",
        "gestor inmobiliario cornella arras",
        "contrato arras sant ildefons 495",
      ],
      heroBadge: "Venta · Cornellà · Sin agencia",
      heroH1:
        "Vendes en Cornellà sin agencia: arras CCCat y gestor documental hasta notaría",
      heroBullets: [
        "Sant Ildefons, Can Mercader, centre",
        "CCCat · cèdula · área metropolitana",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. · 0 % comisión`,
      ],
      whyTitle: "Cornellà entre particulares: pack arras + gestión documental 495 €",
      whySubtitle:
        "Sant Ildefons y Can Mercader cierran rápido por Idealista. Las arras copiadas de Barcelona no contemplan plazos de comunidad local — el gestor Livendia redacta y persigue certificados hasta escritura.",
      localZonesHeading: "Zonas del pack en Cornellà de Llobregat",
      localZones:
        "Sant Ildefons, Can Mercader, centre, Riera de Corb i Albereda y Sant Joan Despí límite. Pack online con gestor dedicado.",
      finalCtaTitle: "Vende en Cornellà con arras y gestor Livendia hasta notaría",
    },
    seo: {
      precioMedioVenta: 250_000,
      heroSubtitle:
        "Vendes de particular en Cornellà y necesitas gestor inmobiliario para arras y documentación. Pack 495 € IVA incl.: contrato CCCat y trámites hasta la notaría — sin comisión sobre el precio.",
      marketIntro:
        "Cornellà ofrece precio competitivo (~250.000 €) frente a Barcelona capital. Ventas entre particulares frecuentes con compradores del Baix Llobregat.",
      localProblemIntro:
        "Operaciones rápidas con borradores copiados del ensanche: plazos irreales para certificado de comunidad en edificios de Sant Ildefons.",
      stepLocalNotes: packStepNotes("adaptado a operaciones rápidas del Baix Llobregat"),
      empathyCards: [
        {
          title: "Comprador cerrado en Idealista",
          body: "Pack arras + gestor documental cuando ya tienes comprador en Cornellà — 495 € IVA incl.",
        },
        {
          title: "Arras desequilibradas",
          body: "El gestor recalibra penalidades y plazos conforme al CCCat antes de la señal.",
        },
        {
          title: "495 € vs comisión",
          body: "Sin pagar 3–5 % si tú llevas la venta entre particulares.",
        },
      ],
      casuistica: [
        {
          title: "Borrador mezcla penitenciales y confirmatorias",
          body: "Confusión costosa antes de notaría — el gestor aclara el régimen de señal.",
        },
        {
          title: "Comunidad lenta en Sant Ildefons",
          body: "Seguimiento semanal del certificado de deuda cero post-arras.",
        },
        {
          title: "Cèdula caducada",
          body: "Verificación en checklist inicial de gestión documental.",
        },
        {
          title: "Hipoteca comprador sin art. 621-49",
          body: "Cláusula CCCat integrada en borrador Livendia.",
        },
      ],
      faqLocal: [
        {
          question: "¿Cuánto cuesta el pack en Cornellà?",
          answer: `495 € IVA incl. (145 € arras + 350 € gestión documental).`,
        },
        {
          question: "¿Atendéis Sant Ildefons y Can Mercader?",
          answer: "Sí. Todo Cornellà con gestor dedicado online.",
        },
        {
          question: "¿Livendia busca comprador?",
          answer: "No. Gestoría para vendedores con comprador ya encontrado.",
        },
      ],
      barrios: ["Sant Ildefons", "Can Mercader", "Centre", "Riera de Corb", "Albereda"],
      barriosIntro: "Pack arras + gestión documental en Cornellà para vendedores particulares.",
      platformParagraph:
        "Panel Livendia para vender en Cornellà desde Barcelona u otra ciudad sin desplazarte.",
      localBanners: [
        {
          title: "Cornellà: venta ágil, documentación rigurosa",
          body: "Mismo rigor que Barcelona capital con pack 495 €.",
        },
        {
          title: "Gestores expertos Livendia",
          body: "Arnau Martí y Daniel Hernández — profesionales colegiados al frente del criterio jurídico.",
        },
      ],
    },
  },
  {
    slug: "sant-cugat-del-valles",
    city: "Sant Cugat del Vallès",
    heroImage: metroBarcelonaZoneImage("santjoandespi.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sant Cugat — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sant Cugat entre particulares: pack arras + gestión documental 495 € IVA incl. Mira-sol, Valldoreix, centre. Gestor profesional hasta notaría.",
      keywords: [
        "pack arras gestión documental sant cugat",
        "vender piso sant cugat sin agencia",
        "venta entre particulares valldoreix",
        "gestor inmobiliario sant cugat arras",
        "contrato arras mira sol 495",
      ],
      heroBadge: "Venta · Sant Cugat · Propietarios",
      heroH1:
        "Vendes en Sant Cugat del Vallès entre particulares: pack arras + gestión con gestor Livendia",
      heroBullets: [
        "Centre, Mira-sol, Valldoreix, Parc Central",
        "Ticket alto · fincas unifamiliares · CCCat",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · Sin comisión`,
      ],
      whyTitle: "Sant Cugat sin agencia: arras equilibradas y documentación hasta escritura",
      whySubtitle:
        "Operaciones con hipoteca y plazos ajustados en Mira-sol o Valldoreix exigen arras calibradas y gestor que persiga cèdula, ITE y comunidad.",
      localZonesHeading: "Zonas del pack en Sant Cugat del Vallès",
      localZones:
        "Centre histórico, Mira-sol, Valldoreix, Parc Central y Volpelleres. Pack 495 € con gestor documental online.",
      finalCtaTitle: "Vende en Sant Cugat con arras CCCat y gestor Livendia",
    },
    seo: {
      precioMedioVenta: 480_000,
      heroSubtitle:
        "Vendes en Sant Cugat sin inmobiliaria con comprador ya cerrado. Pack 495 € IVA incl.: gestor redacta arras CCCat y lleva toda la documentación a la notaría que elijáis.",
      marketIntro:
        "Sant Cugat concentra familias consolidadas, fincas unifamiliares y ticket alto (~480.000 €). Ventas entre particulares con compradores exigentes en documentación.",
      localProblemIntro:
        "Señal elevada y plazos de financiación cortos: arras genéricas generan conflictos costosos antes de notaría en Valldoreix o Mira-sol.",
      stepLocalNotes: packStepNotes("con calibración de señal en operaciones de importe alto del Vallès"),
      empathyCards: [
        {
          title: "Comprador con hipoteca en Mira-sol",
          body: "Art. 621-49 CCCat integrado desde el borrador — pack 495 € IVA incl.",
        },
        {
          title: "Venta entre particulares sin agencia",
          body: "495 € tarifa plana vs comisión del 3 % sobre 480.000 €.",
        },
        {
          title: "Vendedor fuera del Vallès",
          body: "Panel Livendia y gestor dedicado sin desplazamientos.",
        },
      ],
      casuistica: [
        {
          title: "Casa unifamiliar con parcela",
          body: "Objeto del contrato debe describir finca y anejos incluidos en precio.",
        },
        {
          title: "Plazo de hipoteca irreal",
          body: "Recalibrado conforme al calendario bancario real.",
        },
        {
          title: "ITE en edificio de los 70",
          body: "Verificación de vigencia antes de fijar escritura.",
        },
        {
          title: "Derrama en comunidad",
          body: "Cruce de actas y certificado de deuda en gestión documental.",
        },
      ],
      faqLocal: [
        {
          question: "¿Precio del pack en Sant Cugat?",
          answer: `495 € IVA incl. Sin comisión aunque el piso supere 450.000 €.`,
        },
        {
          question: "¿Atendéis Valldoreix y Mira-sol?",
          answer: "Sí. Todo el municipio con el mismo protocolo Livendia.",
        },
        {
          question: "¿Incluye informe semáforo?",
          answer: "Sí, en gestión documental post-arras.",
        },
      ],
      barrios: ["Centre", "Mira-sol", "Valldoreix", "Parc Central", "Volpelleres"],
      barriosIntro: "Pack venta entre particulares en Sant Cugat del Vallès.",
      platformParagraph:
        "Ideal para vendedores no residentes en Sant Cugat: gestor persigue certificados por panel Livendia.",
      localBanners: [
        {
          title: "Sant Cugat: ticket alto, arras precisas",
          body: "Gestor legal redacta lo pactado verbalmente conforme al CCCat.",
        },
        {
          title: "495 € vs comisión inmobiliaria",
          body: "En 480.000 € el 3 % superaría 14.000 € + IVA.",
        },
      ],
    },
  },
  {
    slug: "sabadell",
    city: "Sabadell",
    heroImage: getLocalCityCardImage("sabadell"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sabadell — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sabadell sin agencia: contrato de arras y gestión documental por 495 € IVA incl. Creu Alta, Gràcia, Can Feu. Gestor inmobiliario hasta notaría.",
      keywords: [
        "pack arras gestión documental sabadell",
        "vender piso sabadell sin agencia",
        "venta entre particulares creu alta",
        "gestor inmobiliario sabadell arras",
        "contrato arras valles occidental 495",
      ],
      heroBadge: "Venta · Sabadell · Sin agencia",
      heroH1:
        "Vendes en Sabadell sin agencia: contrato de arras y gestión documental por 495 € IVA incl.",
      heroBullets: [
        "Creu Alta, Gràcia, Can Feu, Centre",
        "CCCat · herencias · hipoteca comprador",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Sabadell entre particulares: gestor para arras y documentación completa",
      whySubtitle:
        "Herencias, reformas pendientes o hipoteca del comprador: el gestor Livendia adapta arras CCCat y persigue certificados mientras tú cierras con el comprador.",
      localZonesHeading: "Barrios del pack en Sabadell",
      localZones:
        "Creu Alta, Gràcia, Can Feu, Centre, Sant Oleguer y Eixample (Sabadell). Pack online 495 €.",
      finalCtaTitle: "Vende en Sabadell con arras y gestor Livendia hasta escritura",
    },
    seo: {
      precioMedioVenta: 270_000,
      heroSubtitle:
        "Vendes de particular en Sabadell y necesitas que un gestor inmobiliario redacte arras y lleve la documentación a notaría. Pack 495 € IVA incl. — sin comisión de agencia.",
      marketIntro:
        "Sabadell combina operaciones familiares, herencias compartidas y compradores del Vallès Occidental. Precio medio ~270.000 €.",
      localProblemIntro:
        "En Creu Alta o Can Feu las arras con penalidades opacas o plazos irreales generan pérdida de señal o rebaja tardía del comprador.",
      stepLocalNotes: packStepNotes("con hitos claros en herencias y operaciones con varios vendedores"),
      empathyCards: [
        {
          title: "Herencia de varios hermanos",
          body: "Hitos documentados en arras antes del resto del precio — gestor Livendia.",
        },
        {
          title: "Borrador de agencia desequilibrado",
          body: "Revisión CCCat antes de transferir la señal.",
        },
        {
          title: "495 € tarifa plana",
          body: "Venta entre particulares sin comisión sobre 270.000 €.",
        },
      ],
      casuistica: [
        {
          title: "Herencia con varios titulares",
          body: "Coordinación de firmantes y plazos en arras confirmatorias.",
        },
        {
          title: "Reforma pendiente prometida",
          body: "Plazos escritos en contrato para evitar disputa pre-escritura.",
        },
        {
          title: "Comunidad sin respuesta rápida",
          body: "Gestor contacta administrador y hace seguimiento del certificado.",
        },
        {
          title: "Cláusula 621-49 ausente",
          body: "Integrada cuando el comprador financia.",
        },
      ],
      faqLocal: [
        {
          question: "¿Cuánto cuesta vender en Sabadell con Livendia?",
          answer: `Pack 495 € IVA incl. (145 € + 350 €).`,
        },
        {
          question: "¿Gestionáis ventas en herencia?",
          answer: "Sí. Arras adaptadas a varios vendedores y plazos de escritura realistas.",
        },
        {
          question: "¿Servicio 100 % online?",
          answer: "Sí. Panel Livendia, gestor por WhatsApp y teléfono.",
        },
      ],
      barrios: ["Creu Alta", "Gràcia", "Can Feu", "Centre", "Sant Oleguer", "Eixample"],
      barriosIntro: "Pack arras + gestión documental en Sabadell para vendedores particulares.",
      platformParagraph:
        "Gestor dedicado para ventas en Sabadell con vendedor en Barcelona capital u otra provincia.",
      localBanners: [
        {
          title: "Sabadell: herencias y arras equilibradas",
          body: "Pack 495 € con gestores colegiados Livendia.",
        },
        {
          title: "Sin comisión de agencia",
          body: "Si ya tienes comprador, no pagues porcentaje sobre el precio.",
        },
      ],
    },
  },
  {
    slug: "terrassa",
    city: "Terrassa",
    heroImage: getLocalCityCardImage("terrassa"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Terrassa — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Terrassa entre particulares: arras profesionales y gestor documental hasta notaría por 495 € IVA incl. Sant Pere, La Maurina, Ca n'Anglada.",
      keywords: [
        "pack arras gestión documental terrassa",
        "vender piso terrassa sin agencia",
        "venta entre particulares sant pere terrassa",
        "gestor inmobiliario terrassa arras",
        "contrato arras terrassa 495 euros",
      ],
      heroBadge: "Venta · Terrassa · Entre particulares",
      heroH1:
        "Vendes en Terrassa entre particulares: arras profesionales y gestor documental hasta notaría",
      heroBullets: [
        "Sant Pere, La Maurina, Ca n'Anglada, Centre",
        "CCCat · cèdula · Vallès Occidental",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Terrassa sin inmobiliaria: pack 495 € arras + gestión documental",
      whySubtitle:
        "En Sant Pere o La Maurina circulan arras con penalidades opacas. El gestor Livendia redacta CCCat equilibrado y recopila documentación hasta la notaría.",
      localZonesHeading: "Núcleos del pack en Terrassa",
      localZones:
        "Sant Pere, La Maurina, Ca n'Anglada, Centre, Sant Llorenç y Les Fonts.",
      finalCtaTitle: "Vende en Terrassa con arras CCCat y gestor Livendia",
    },
    seo: {
      precioMedioVenta: 260_000,
      heroSubtitle:
        "Has encontrado comprador en Terrassa y vendes sin agencia. Pack 495 € IVA incl.: gestor inmobiliario redacta contrato de arras y persigue cèdula, comunidad e hipoteca hasta escritura.",
      marketIntro:
        "Terrassa ofrece precio accesible (~260.000 €) con ventas entre particulares activas en Sant Pere y La Maurina.",
      localProblemIntro:
        "Cláusula de financiación mal redactada o plazos irreales en arras copiadas — el comprador usa fallos para pedir rebaja días antes de notaría.",
      stepLocalNotes: packStepNotes("adaptado a ventas familiares y piso heredado en el Vallès"),
      empathyCards: [
        {
          title: "Precio cerrado — empieza el papeleo",
          body: "Pack arras + gestión cuando ya tienes comprador en Terrassa.",
        },
        {
          title: "Financiación del comprador",
          body: "Art. 621-49 CCCat explicado y redactado antes de la señal.",
        },
        {
          title: "495 € vs comisión",
          body: "En 260.000 € el 3 % son 7.800 € + IVA. Tarifa plana Livendia.",
        },
      ],
      casuistica: [
        {
          title: "Penalidad opaca en arras",
          body: "Recalibrada conforme al CCCat antes de firmar.",
        },
        {
          title: "Piso familiar en Sant Pere",
          body: "Confirmatorias con calendario de cancelación de hipoteca claro.",
        },
        {
          title: "Certificado energético caducado",
          body: "Incluido en checklist de gestión documental.",
        },
        {
          title: "Comunidad lenta",
          body: "Seguimiento del gestor desde la semana post-arras.",
        },
      ],
      faqLocal: [
        {
          question: "¿Qué incluye el pack en Terrassa?",
          answer:
            "Arras (145 €) + gestión documental vendedor (350 €). Total 495 € IVA incl.",
        },
        {
          question: "¿Atendéis La Maurina y Ca n'Anglada?",
          answer: "Sí. Todo Terrassa con gestor dedicado online.",
        },
        {
          question: "¿Livendia publica mi piso?",
          answer: "No. Gestoría inmobiliaria, no agencia de captación.",
        },
      ],
      barrios: ["Sant Pere", "La Maurina", "Ca n'Anglada", "Centre", "Sant Llorenç", "Les Fonts"],
      barriosIntro: "Pack arras + gestión documental en Terrassa para vendedores particulares.",
      platformParagraph:
        "Panel Livendia para ventas en Terrassa sin desplazarte a gestoría física.",
      localBanners: [
        {
          title: "Terrassa: arras claras, documentación al día",
          body: "Gestor persigue certificados desde la firma de arras.",
        },
        {
          title: "495 € cuando ya tienes comprador",
          body: "Venta directa con gestores expertos Livendia.",
        },
      ],
    },
  },
];
