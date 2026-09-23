import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL } from "@/lib/catalog.public";
import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";
import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH2_SLUGS = [
  "barcelona-gracia",
  "barcelona-born",
  "barcelona-sants-montjuic",
  "barcelona-poblenou",
  "barcelona-gotic",
  "barcelona-sarria",
  "barcelona-barceloneta",
  "barcelona-vila-olimpica",
  "barcelona-el-raval",
  "badalona",
] as const;

export type PackArrasGestionBcnMetroBatch2Slug =
  (typeof PACK_ARRAS_GESTION_BCN_METRO_BATCH2_SLUGS)[number];

type ZoneBatch = {
  slug: PackArrasGestionBcnMetroBatch2Slug;
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

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH2: readonly ZoneBatch[] = [
  {
    slug: "barcelona-gracia",
    city: "Gràcia",
    heroImage: metroBarcelonaZoneImage("gracia.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Gràcia — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Gràcia sin agencia: arras CCCat y gestor documental hasta notaría por 495 € IVA incl. Vila de Gràcia, Camp d'en Grassot. Sin comisión inmobiliaria.",
      keywords: [
        "pack arras gestión documental gracia",
        "vender piso gracia sin agencia",
        "venta entre particulares vila de gracia",
        "gestor inmobiliario gracia arras",
        "contrato arras gracia barcelona 495",
      ],
      heroBadge: "Venta · Gràcia · Sin agencia",
      heroH1: "Vendes en Gràcia sin agencia: arras CCCat y gestor documental hasta notaría",
      heroBullets: [
        "Vila de Gràcia, Camp d'en Grassot, La Salut",
        "CCCat · cèdula · fincas sin ascensor",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl. · 0 % comisión`,
      ],
      whyTitle: "Vendes de particular en Gràcia: arras + documentación sin pagar comisión",
      whySubtitle:
        "En Gràcia muchas ventas cierran entre conocidos. Las arras copiadas no reflejan reformas pendientes, inquilino en LAU o estado real del piso — el gestor Livendia redacta y persigue certificados hasta notaría.",
      localZonesHeading: "Barrios del pack en Gràcia",
      localZones:
        "Vila de Gràcia, Camp d'en Grassot i Gràcia Nova, La Salut y Vallcarca. Pack 495 € con gestor documental online.",
      finalCtaTitle: "Vende en Gràcia con arras y gestor Livendia hasta escritura",
    },
    seo: {
      precioMedioVenta: 380_000,
      heroSubtitle:
        "Vendes en Barcelona — en Gràcia — y necesitas arras más un gestor que lleve toda la documentación. Pack 495 € IVA incl.: contrato CCCat y gestión documental hasta notaría, sin comisión de agencia.",
      marketIntro:
        "Gràcia mezcla pisos señoriales sin ascensor, reformas recientes y compradores jóvenes. Precio medio de venta ~380.000 €. Las operaciones entre particulares van rápido — la documentación no.",
      localProblemIntro:
        "En Vila de Gràcia el certificado de comunidad en edificios del s. XIX puede tardar semanas. Sin gestor post-arras, la fecha de escritura se cae cuando el comprador ya presiona.",
      stepLocalNotes: packStepNotes("adaptado a herencias y ventas con inquilino LAU vigente"),
      empathyCards: [
        {
          title: "Comprador por recomendación — falta el contrato",
          body: "En Gràcia es habitual vender sin agencia cuando ya hay comprador. Pack arras + gestor documental por 495 € IVA incl.",
        },
        {
          title: "Reforma prometida antes de escritura",
          body: "Sin plazos en arras, la señal queda en disputa. El gestor refleja hitos documentados en el contrato.",
        },
        {
          title: "No quieres pagar comisión sobre el precio",
          body: "En 380.000 € el 3 % son ~11.400 € + IVA. Tarifa plana Livendia cuando tú llevas la venta.",
        },
      ],
      casuistica: [
        {
          title: "Inquilino en LAU no mencionado en arras",
          body: "Compraventa con arrendatario vigente sin cláusula de ocupación — riesgo antes de notaría.",
        },
        {
          title: "Piso sin ascensor con estado no descrito",
          body: "Comprador exige inventario y coherencia con visita — checklist en gestión documental.",
        },
        {
          title: "Confirmatorias mal identificadas",
          body: "Borrador que mezcla regímenes de señal — el gestor aclara penitenciales vs confirmatorias CCCat.",
        },
        {
          title: "Cèdula caducada en finca antigua",
          body: "Obligatoria en Catalunya para transmitir. Verificación en la primera semana post-arras.",
        },
      ],
      faqLocal: [
        {
          question: "¿Cuánto cuesta el pack en Gràcia?",
          answer: `495 € IVA incl. (145 € arras + 350 € gestión documental). Mismos precios en toda España, sin comisión sobre la venta.`,
        },
        {
          question: "¿Livendia busca comprador en Gràcia?",
          answer:
            "No. Somos gestoría: redactamos arras y gestionamos documentación cuando ya tienes comprador particular.",
        },
        {
          question: "¿Atendéis Camp d'en Grassot y La Salut?",
          answer: "Sí. Mismo pack y gestor dedicado para todo el distrito de Gràcia.",
        },
      ],
      barrios: ["Vila de Gràcia", "Camp d'en Grassot", "La Salut", "Vallcarca", "El Coll"],
      barriosIntro: "Pack arras + gestión documental para vendedores particulares en Gràcia.",
      platformParagraph:
        "Panel Livendia para centralizar certificados mientras vendes en Gràcia desde otra ciudad o país.",
      localBanners: [
        {
          title: "Gràcia: venta rápida, arras precisas",
          body: "Operaciones entre conocidos exigen contrato a medida, no plantilla de agencia del ensanche.",
        },
        {
          title: "495 € vs comisión inmobiliaria",
          body: "Si tú encontraste al comprador, no pagues miles por un trámite que ya no necesita marketing.",
        },
      ],
    },
  },
  {
    slug: "barcelona-born",
    city: "El Born",
    heroImage: metroBarcelonaZoneImage("ciutatvella.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor El Born — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes de particular en El Born: gestor inmobiliario redacta arras y lleva documentación a notaría por 495 € IVA incl. Passeig del Born, Ciutat Vella.",
      keywords: [
        "pack arras gestión documental born",
        "vender piso el born sin agencia",
        "venta entre particulares passeig del born",
        "gestor inmobiliario born arras",
        "contrato arras ciutat vella vendedor",
      ],
      heroBadge: "Venta · El Born · Entre particulares",
      heroH1:
        "Vendes de particular en El Born: un gestor inmobiliario redacta tus arras y lleva la documentación",
      heroBullets: [
        "Passeig del Born, Santa Maria del Mar, Sant Pere",
        "Fincas históricas · humedades · ITE",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · Sin comisión`,
      ],
      whyTitle: "Vendes en El Born sin inmobiliaria — arras y trámites hasta notaría",
      whySubtitle:
        "El Born mezcla fincas del s. XVIII, locales en planta baja y compradores internacionales. Arras genéricas no documentan humedades en patio ni uso mixto vivienda–local.",
      localZonesHeading: "Zonas del pack en El Born y Ciutat Vella",
      localZones: "El Born, Sant Pere, Santa Caterina y entorno de la Basílica. Normativa catalana cubierta por gestor Livendia.",
      finalCtaTitle: "Vende en El Born con arras CCCat y gestor documental Livendia",
    },
    seo: {
      precioMedioVenta: 420_000,
      heroSubtitle:
        "Has encontrado comprador en El Born y vendes sin agencia. Pack 495 € IVA incl.: gestor inmobiliario redacta contrato de arras CCCat y recopila cèdula, ITE, comunidad e hipoteca hasta la notaría.",
      marketIntro:
        "El Born concentra pisos señoriales reformados y ticket alto en Ciutat Vella (~420.000 € de media en venta). Compradores exigen documentación impecable pese a vender entre particulares.",
      localProblemIntro:
        "Humedades en patio interior, locales en planta baja y terrazas no inscritas son la tríada de sorpresas entre arras y escritura en fincas históricas del Born.",
      stepLocalNotes: packStepNotes("con mención de humedades conocidas y uso mixto vivienda–local si aplica"),
      empathyCards: [
        {
          title: "Comprador internacional exige due diligence",
          body: "Vendes entre particulares pero el comprador pide el mismo rigor que una agencia. Gestor Livendia persigue cada certificado.",
        },
        {
          title: "Finca histórica con ITE desfavorable",
          body: "Sin regularizar, el notario lo detectará. Checklist desde la semana del arras.",
        },
        {
          title: "495 € cuando ya cerraste precio",
          body: "No pagues 3–5 % de comisión si tú trajiste al comprador por Idealista o recomendación.",
        },
      ],
      casuistica: [
        {
          title: "Humedades en patio no reflejadas",
          body: "Comprador las descubre en inspección — deben constar en arras o anexo técnico.",
        },
        {
          title: "Local comercial en planta baja sin delimitar",
          body: "Uso mixto mal descrito genera conflictos pre-escritura.",
        },
        {
          title: "Comunidad lenta en edificio protegido",
          body: "Certificado de deuda cero con plazos realistas en arras — gestor hace seguimiento.",
        },
        {
          title: "Cláusula 621-49 ausente con hipoteca",
          body: "Comprador financia sin protección de desistimiento — integrada en borrador Livendia.",
        },
      ],
      faqLocal: [
        {
          question: "¿Qué incluye el pack en El Born?",
          answer:
            "Arras redactadas por gestor legal (145 €) + gestión documental post-arras (350 €): comunidad, ITE, cèdula, nota simple e informe semáforo. Total 495 € IVA incl.",
        },
        {
          question: "¿Gestionáis ventas con local en planta baja?",
          answer: "Sí. El gestor delimita uso vivienda vs local en arras y revisa coherencia registral.",
        },
        {
          question: "¿Puedo vender si vivo fuera de Barcelona?",
          answer:
            "Sí. Panel Livendia y gestor por WhatsApp — tramitación 100 % online.",
        },
      ],
      barrios: ["El Born", "Passeig del Born", "Santa Maria del Mar", "Sant Pere", "Santa Caterina"],
      barriosIntro: "Venta entre particulares en El Born con gestor documental hasta notaría.",
      platformParagraph:
        "Sube documentos al panel Livendia desde cualquier lugar. Útil en ventas del Born con vendedor no residente.",
      localBanners: [
        {
          title: "El Born: detalle en arras y en documentación",
          body: "Fincas históricas no admiten plantillas genéricas. Pack con gestor que conoce Ciutat Vella.",
        },
        {
          title: "495 € vs comisión en piso de 420.000 €",
          body: "El 3 % serían 12.600 € + IVA. Tú llevas la venta; Livendia blinda el tramo legal.",
        },
      ],
    },
  },
  {
    slug: "barcelona-sants-montjuic",
    city: "Sants-Montjuïc",
    heroImage: metroBarcelonaZoneImage("sants.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sants-Montjuïc — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sants o Montjuïc entre particulares: pack arras + gestión documental 495 € IVA incl. Hostafrancs, Poble-sec, Badal. Gestor profesional hasta notaría.",
      keywords: [
        "pack arras gestión documental sants",
        "vender piso sants montjuic sin agencia",
        "venta entre particulares poble sec",
        "gestor inmobiliario sants arras",
        "contrato arras hostafrancs barcelona",
      ],
      heroBadge: "Venta · Sants-Montjuïc · Propietarios",
      heroH1:
        "Vendes en Sants o Montjuïc entre particulares: pack arras + gestión documental completa",
      heroBullets: [
        "Sants, Hostafrancs, Poble-sec, Font de la Guatlla",
        "CCCat · edificios mid-century · comunidad",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Vendes sin agencia en Sants-Montjuïc: gestor para arras y documentación",
      whySubtitle:
        "Distrito diverso con edificios de los 60–80 y rotación entre particulares. Las arras deben reflejar derramas de rehabilitación y plazos realistas de comunidad.",
      localZonesHeading: "Barrios del pack en Sants-Montjuïc",
      localZones:
        "Sants, Hostafrancs, Poble-sec, Font de la Guatlla, La Bordeta y Montjuïc. Mismo pack 495 € online.",
      finalCtaTitle: "Vende en Sants-Montjuïc con arras y gestor Livendia hasta notaría",
    },
    seo: {
      precioMedioVenta: 320_000,
      heroSubtitle:
        "Vendes de particular en Sants o Montjuïc y necesitas gestor inmobiliario para arras y documentación. Pack 495 € IVA incl. — contrato CCCat y trámites hasta la notaría que elijáis.",
      marketIntro:
        "Sants-Montjuïc combina familias consolidadas, pisos compartidos y edificios mid-century. Precio medio ~320.000 €. Muchas ventas cierran por Idealista sin agencia.",
      localProblemIntro:
        "En Poble-sec y Hostafrancs las derramas de rehabilitación de fachada sorprenden al comprador si no constan en arras ni en certificado de comunidad.",
      stepLocalNotes: packStepNotes("con plazos ajustados a comunidades de edificios de los 60–80"),
      empathyCards: [
        {
          title: "Precio cerrado en Idealista — empieza el papeleo",
          body: "Pack arras + gestor documental cuando ya tienes comprador en Sants o Montjuïc.",
        },
        {
          title: "Derrama aprobada en junta",
          body: "Debe cruzarse con certificado de deuda antes de fijar escritura.",
        },
        {
          title: "Ahorro frente a comisión de agencia",
          body: "495 € IVA incl. vs miles en comisión sobre 320.000 €.",
        },
      ],
      casuistica: [
        {
          title: "Edificio con ITE pendiente",
          body: "Frecuente en construcciones de los 70. Verificación de vigencia y deficiencias.",
        },
        {
          title: "Plaza de parking comunitaria en precio",
          body: "Debe reflejarse en arras y nota simple — especialmente en Sants centre.",
        },
        {
          title: "Comprador con hipoteca — plazos cortos",
          body: "Cláusula 621-49 CCCat y calendario realista de aprobación bancaria.",
        },
        {
          title: "Certificado energético caducado",
          body: "Incluido en checklist de la primera semana de gestión documental.",
        },
      ],
      faqLocal: [
        {
          question: "¿Cuánto cuesta el pack en Sants-Montjuïc?",
          answer: `495 € IVA incl. Sin comisión sobre el precio de venta.`,
        },
        {
          question: "¿Atendéis Poble-sec y Hostafrancs?",
          answer: "Sí. Todo el distrito con el mismo protocolo y gestor dedicado.",
        },
        {
          question: "¿Livendia publica mi anuncio?",
          answer: "No. Entramos cuando ya tienes comprador particular.",
        },
      ],
      barrios: ["Sants", "Hostafrancs", "Poble-sec", "Font de la Guatlla", "La Bordeta", "Montjuïc"],
      barriosIntro: "Pack venta entre particulares en Sants-Montjuïc con gestor Livendia.",
      platformParagraph:
        "Gestor dedicado y panel Livendia para ventas en Sants-Montjuïc sin desplazarte a gestoría física.",
      localBanners: [
        {
          title: "Sants-Montjuïc: diversidad de fincas, un solo protocolo",
          body: "Desde Poble-sec hasta Hostafrancs — arras CCCat y documentación con gestor colegiado.",
        },
        {
          title: "495 € tarifa plana",
          body: "Venta entre particulares sin pagar porcentaje sobre el precio pactado.",
        },
      ],
    },
  },
  {
    slug: "barcelona-poblenou",
    city: "Poblenou",
    heroImage: metroBarcelonaZoneImage("poblenou.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Poblenou — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Has encontrado comprador en Poblenou: pack arras + gestión documental 495 € IVA incl. 22@, Rambla del Poblenou. Gestor inmobiliario hasta notaría.",
      keywords: [
        "pack arras gestión documental poblenou",
        "vender piso poblenou sin agencia",
        "venta entre particulares 22 arroba barcelona",
        "gestor inmobiliario poblenou arras",
        "contrato arras rambla poblenou",
      ],
      heroBadge: "Venta · Poblenou · Sin agencia",
      heroH1:
        "Has encontrado comprador en Poblenou: nosotros redactamos arras y persiguimos la documentación",
      heroBullets: [
        "22@, Rambla del Poblenou, Diagonal Mar límite",
        "Lofts reconvertidos · terrazas · parking",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Vendes en Poblenou entre particulares — arras + gestor documental",
      whySubtitle:
        "Lofts, terrazas y plantas baja comercial en el 22@ exigen arras que describan instalaciones y parking anexo — no borradores de otra operación.",
      localZonesHeading: "Zonas del pack en Poblenou",
      localZones: "Poblenou centre, 22@, Rambla del Poblenou, La Vila Olímpica del Poblenou y Diagonal Mar límite.",
      finalCtaTitle: "Vende en Poblenou con arras CCCat y documentación hasta notaría",
    },
    seo: {
      precioMedioVenta: 400_000,
      heroSubtitle:
        "Vendes en Poblenou sin inmobiliaria. Pack 495 € IVA incl.: gestor redacta arras CCCat y lleva cèdula, ITE, comunidad e hipoteca hasta notaría — ideal si cerraste con comprador por Idealista.",
      marketIntro:
        "Poblenou mezcla industria reconvertida, lofts en 22@ y familias en Rambla. Precio medio ~400.000 €. Compradores tech y profesionales exigen documentación ordenada.",
      localProblemIntro:
        "Terrazas no inscritas y parking anexo mal descrito en arras son la causa habitual de rebaja tardía en compraventas del 22@.",
      stepLocalNotes: packStepNotes("con anexo de parking y terraza cuando formen parte del precio"),
      empathyCards: [
        {
          title: "Loft en 22@ — comprador exigente",
          body: "Vendes entre particulares pero el comprador pide due diligence completa. Pack 495 € con gestor documental.",
        },
        {
          title: "Operación cerrada rápido en precio",
          body: "La comunidad no va tan rápida. Gestor desde la firma de arras.",
        },
        {
          title: "Sin comisión de agencia",
          body: "Si tú captaste al comprador, no pagues 3–5 % por arras y documentación.",
        },
      ],
      casuistica: [
        {
          title: "Parking anexo no reflejado en arras",
          body: "Frecuente en Poblenou — debe constar en contrato y nota simple.",
        },
        {
          title: "Instalaciones de loft no descritas",
          body: "Suelos técnicos, climatización o uso mixto — checklist en arras.",
        },
        {
          title: "ITE en edificio industrial reconvertido",
          body: "Verificación de vigencia antes de fecha de escritura.",
        },
        {
          title: "Comprador con financiación — art. 621-49",
          body: "Cláusula integrada conforme al CCCat.",
        },
      ],
      faqLocal: [
        {
          question: "¿Gestionáis ventas en el 22@?",
          answer: "Sí. Lofts, pisos reconvertidos y vivienda tradicional con el mismo pack 495 € IVA incl.",
        },
        {
          question: "¿Qué incluye la gestión documental?",
          answer:
            "Comunidad, nota simple, ITE, cèdula, energético, hipoteca e informe semáforo pre-notaría.",
        },
        {
          question: "¿Cuánto ahorro vs agencia?",
          answer: "En 400.000 € el 3 % supera 12.000 € + IVA. Pack tarifa plana cuando ya tienes comprador.",
        },
      ],
      barrios: ["22@", "Rambla del Poblenou", "Poblenou centre", "La Vila Olímpica del Poblenou", "Diagonal Mar"],
      barriosIntro: "Pack arras + gestión en Poblenou para vendedores particulares.",
      platformParagraph:
        "Panel Livendia para seguimiento de certificados en operaciones rápidas del Poblenou.",
      localBanners: [
        {
          title: "Poblenou: lofts y arras a medida",
          body: "Instalaciones y parking anexo deben constar antes de transferir la señal.",
        },
        {
          title: "495 € cuando ya tienes comprador",
          body: "Gestoría inmobiliaria digital, no agencia de captación.",
        },
      ],
    },
  },
  {
    slug: "barcelona-gotic",
    city: "Barri Gòtic",
    heroImage: metroBarcelonaZoneImage("ciutatvella.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Barri Gòtic — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en el Gòtic sin inmobiliaria: contrato de arras y gestor profesional hasta escritura por 495 € IVA incl. Plaça Reial, Carrer Ferran, Jaume I.",
      keywords: [
        "pack arras gestión documental gotic",
        "vender piso barri gotic sin agencia",
        "venta entre particulares plaça reial",
        "gestor inmobiliario gotic barcelona",
        "contrato arras ciutat vella vendedor",
      ],
      heroBadge: "Venta · Barri Gòtic · Propietarios",
      heroH1:
        "Vendes en el Gòtic sin inmobiliaria: contrato de arras y gestor profesional hasta escritura",
      heroBullets: [
        "Plaça Reial, Jaume I, Carrer del Pi",
        "Fincas históricas · protección patrimonial",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Vendes de particular en el Barri Gòtic — pack 495 € arras + documentación",
      whySubtitle:
        "Pisos sin ascensor, patios interiores y locales en planta baja: el Gòtic exige arras precisas y documentación impecable pese a vender sin agencia.",
      localZonesHeading: "Calles y núcleos del pack en el Gòtic",
      localZones: "Plaça Reial, Jaume I, Carrer Ferran, Pi i Sant Josep Oriol y entorno catedral.",
      finalCtaTitle: "Vende en el Gòtic con arras CCCat y gestor Livendia",
    },
    seo: {
      precioMedioVenta: 390_000,
      heroSubtitle:
        "Vendes en el Barri Gòtic entre particulares. Pack 495 € IVA incl.: gestor inmobiliario redacta arras CCCat y persigue cèdula, ITE y comunidad hasta la notaría — sin comisión sobre el precio.",
      marketIntro:
        "El Gòtic concentra fincas históricas y demanda turística residual en planta baja. Precio medio ~390.000 €. Compradores exigen transparencia documental.",
      localProblemIntro:
        "Ascensores inexistentes, humedades en patio y obras en finca protegida retrasan certificados — sin gestor, la operación se enfría.",
      stepLocalNotes: packStepNotes("con atención a fincas protegidas y patios interiores"),
      empathyCards: [
        {
          title: "Venta entre particulares en finca histórica",
          body: "No basta con arras de internet. Gestor Livendia adapta CCCat al inmueble concreto.",
        },
        {
          title: "Comprador pide certificados al día",
          body: "Pack documental post-arras desde 350 € — total pack 495 € IVA incl.",
        },
        {
          title: "Vendedor no residente en Ciutat Vella",
          body: "Panel Livendia y gestor dedicado sin desplazamientos.",
        },
      ],
      casuistica: [
        {
          title: "Obras en edificio protegido",
          body: "Autorizaciones y actas de junta deben revisarse antes de escritura.",
        },
        {
          title: "Humedades en patio interior",
          body: "Deben reflejarse en arras para evitar conflicto post-visita.",
        },
        {
          title: "Local en planta baja sin delimitar",
          body: "Uso mixto mal descrito — revisión en borrador Livendia.",
        },
        {
          title: "Comunidad con pocos propietarios activos",
          body: "Seguimiento directo del gestor para certificado de deuda.",
        },
      ],
      faqLocal: [
        {
          question: "¿Atendéis ventas en Plaça Reial y Jaume I?",
          answer: "Sí. Todo el Barri Gòtic con pack online y gestor dedicado.",
        },
        {
          question: "¿Incluye revisión de ITE?",
          answer: "Sí, en gestión documental: vigencia y deficiencias antes de notaría.",
        },
        {
          question: "¿Precio del pack?",
          answer: `495 € IVA incl. (145 € arras + 350 € gestión). Sin comisión de agencia.`,
        },
      ],
      barrios: ["Plaça Reial", "Jaume I", "Carrer Ferran", "Pi i Sant Josep Oriol", "Entorno catedral"],
      barriosIntro: "Pack venta entre particulares en el Barri Gòtic.",
      platformParagraph:
        "Centraliza documentación de fincas históricas en panel Livendia — ideal con vendedor fuera de Barcelona.",
      localBanners: [
        {
          title: "Gòtic: patrimonio y precisión documental",
          body: "Arras y certificados con gestor que conoce Ciutat Vella.",
        },
        {
          title: "495 € vs comisión",
          body: "Venta directa con comprador ya encontrado — tarifa plana Livendia.",
        },
      ],
    },
  },
  {
    slug: "barcelona-sarria",
    city: "Sarrià",
    heroImage: metroBarcelonaZoneImage("santgervasi2.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sarrià — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sarrià entre particulares: arras equilibradas y documentación a notaría por 495 € IVA incl. Sarrià centre, Vallvidrera límite. Gestor colegiado.",
      keywords: [
        "pack arras gestión documental sarria",
        "vender piso sarria sin agencia",
        "venta entre particulares sarria sant gervasi",
        "gestor inmobiliario sarria arras",
        "contrato arras sarria barcelona 495",
      ],
      heroBadge: "Venta · Sarrià · Entre particulares",
      heroH1:
        "Vendes en Sarrià entre particulares: arras equilibradas y documentación a notaría por 495 €",
      heroBullets: [
        "Sarrià centre, Vallvidrera límite, Putxet",
        "Fincas unifamiliares · casas · pisos señoriales",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · Sin comisión`,
      ],
      whyTitle: "Sarrià: venta premium entre particulares con gestor documental",
      whySubtitle:
        "Operaciones con ticket alto y señal elevada: una penalidad mal calibrada cuesta más que 495 €. Gestor Livendia redacta arras CCCat y persigue certificados.",
      localZonesHeading: "Zonas del pack en Sarrià",
      localZones: "Sarrià centre, Vallvidrera (límite), Putxet i Farró límite y entorno Tibidabo.",
      finalCtaTitle: "Vende en Sarrià con arras y gestor Livendia hasta escritura",
    },
    seo: {
      precioMedioVenta: 520_000,
      heroSubtitle:
        "Vendes en Sarrià sin agencia con comprador ya cerrado. Pack 495 € IVA incl.: arras CCCat calibradas y gestor que recopila toda la documentación hasta la notaría que elijáis.",
      marketIntro:
        "Sarrià concentra unifamiliares, pisos señoriales y ticket alto (~520.000 €). Ventas entre particulares frecuentes con compradores consolidados.",
      localProblemIntro:
        "En operaciones premium la señal es elevada: arras desequilibradas o plazos irreales de hipoteca generan conflictos costosos antes de notaría.",
      stepLocalNotes: packStepNotes("con calibración de señal en operaciones de importe alto"),
      empathyCards: [
        {
          title: "Señal elevada — necesitas arras precisas",
          body: "En Sarrià una cláusula mal redactada cuesta miles. Gestor legal Livendia desde 145 € en arras.",
        },
        {
          title: "Comprador con financiación compleja",
          body: "Art. 621-49 CCCat integrado con plazos realistas de aprobación bancaria.",
        },
        {
          title: "495 € vs comisión del 3 %",
          body: "En 520.000 € la comisión superaría 15.000 € + IVA. Pack tarifa plana.",
        },
      ],
      casuistica: [
        {
          title: "Casa unifamiliar con parcela",
          body: "Objeto del contrato debe describir finca, linderos y anejos incluidos en precio.",
        },
        {
          title: "Derrama de rehabilitación en finca señorial",
          body: "Cruce de actas y certificado de deuda antes de escritura.",
        },
        {
          title: "Hipoteca del vendedor pendiente",
          body: "Certificado bancario y cancelación alineados con arras.",
        },
        {
          title: "Cèdula y ITE en edificio antiguo",
          body: "Verificación en checklist inicial post-arras.",
        },
      ],
      faqLocal: [
        {
          question: "¿Cuánto cuesta el pack en Sarrià?",
          answer: `495 € IVA incl. Sin comisión sobre el precio de venta, aunque el piso supere 500.000 €.`,
        },
        {
          question: "¿Gestionáis casas y pisos en Sarrià centre?",
          answer: "Sí. Unifamiliares y pisos en comunidad con el mismo protocolo documental.",
        },
        {
          question: "¿Livendia capta comprador?",
          answer: "No. Gestoría para vendedores que ya tienen comprador particular.",
        },
      ],
      barrios: ["Sarrià centre", "Vallvidrera (límite)", "Putxet i Farró (límite)", "Tibidabo entorno"],
      barriosIntro: "Pack arras + gestión documental en Sarrià para vendedores particulares.",
      platformParagraph:
        "Panel Livendia para operaciones de alto importe con vendedor fuera del distrito.",
      localBanners: [
        {
          title: "Sarrià: señal alta, rigor documental",
          body: "Pack 495 € con gestores colegiados Arnau Martí y Daniel Hernández al frente del criterio Livendia.",
        },
        {
          title: "Ahorro real en ticket premium",
          body: "Sin comisión del 3–5 % si tú cerraste con el comprador.",
        },
      ],
    },
  },
  {
    slug: "barcelona-barceloneta",
    city: "La Barceloneta",
    heroImage: metroBarcelonaZoneImage("barcelona.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Barceloneta — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en la Barceloneta sin agencia: gestor inmobiliario para arras y trámites catalanes por 495 € IVA incl. Fincas marítimas, humedades, cèdula.",
      keywords: [
        "pack arras gestión documental barceloneta",
        "vender piso barceloneta sin agencia",
        "venta entre particulares barceloneta",
        "gestor inmobiliario barceloneta arras",
        "contrato arras barceloneta barcelona",
      ],
      heroBadge: "Venta · Barceloneta · Sin agencia",
      heroH1:
        "Vendes en la Barceloneta sin agencia: gestor inmobiliario para arras y trámites catalanes",
      heroBullets: [
        "Barceloneta centre, platja, port olímpic límite",
        "Humedades · salitre · fincas bajas",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Barceloneta entre particulares: arras + documentación hasta notaría",
      whySubtitle:
        "Fincas marítimas con humedades y estado degradado por salitre: el comprador las usará para negociar si no constan en arras. Gestor Livendia documenta y persigue certificados.",
      localZonesHeading: "Zonas del pack en la Barceloneta",
      localZones: "Barceloneta centre, front marítim, port olímpic límite y Sant Miquel.",
      finalCtaTitle: "Vende en la Barceloneta con arras CCCat y gestor Livendia",
    },
    seo: {
      precioMedioVenta: 350_000,
      heroSubtitle:
        "Vendes de particular en la Barceloneta. Pack 495 € IVA incl.: gestor redacta arras CCCat y gestiona cèdula, ITE, comunidad e hipoteca hasta notaría — sin comisión inmobiliaria.",
      marketIntro:
        "La Barceloneta combina demanda por ubicación y fincas antiguas con humedades frecuentes. Precio medio ~350.000 €. Muchas ventas entre particulares por segunda residencia.",
      localProblemIntro:
        "Compradores detectan humedades en visita — si no están en arras, piden rebaja días antes de escritura. Gestión documental ordena el expediente.",
      stepLocalNotes: packStepNotes("con mención de humedades conocidas y estado de fachada marítima"),
      empathyCards: [
        {
          title: "Comprador negocia por humedades",
          body: "Estado conocido debe reflejarse en arras. Gestor legal redacta antes de la señal.",
        },
        {
          title: "Segunda residencia — vendes desde fuera",
          body: "Panel Livendia y gestor dedicado sin viajar a Barcelona.",
        },
        {
          title: "495 € tarifa plana",
          body: "Sin comisión sobre 350.000 € si ya tienes comprador.",
        },
      ],
      casuistica: [
        {
          title: "Humedades por proximidad al mar",
          body: "Anexo técnico o cláusula en arras sobre estado conocido.",
        },
        {
          title: "Finca baja sin ascensor",
          body: "Descripción precisa en contrato evita reclamaciones post-arras.",
        },
        {
          title: "Comunidad pequeña pero lenta",
          body: "Seguimiento del certificado de deuda cero.",
        },
        {
          title: "Cèdula caducada",
          body: "Renovación coordinada antes de fijar notaría.",
        },
      ],
      faqLocal: [
        {
          question: "¿Gestionáis ventas en front marítim?",
          answer: "Sí. Toda la Barceloneta con pack 495 € IVA incl. y gestor dedicado.",
        },
        {
          question: "¿Qué pasa con humedades conocidas?",
          answer: "El gestor las refleja en arras para evitar conflicto antes de escritura.",
        },
        {
          question: "¿Livendia es agencia?",
          answer: "No. Gestoría inmobiliaria digital para vendedores con comprador ya encontrado.",
        },
      ],
      barrios: ["Barceloneta centre", "Front marítim", "Port Olímpic (límite)", "Sant Miquel"],
      barriosIntro: "Pack venta entre particulares en la Barceloneta.",
      platformParagraph:
        "Ideal si vendes en la Barceloneta y resides fuera: gestor persigue certificados por panel Livendia.",
      localBanners: [
        {
          title: "Barceloneta: ubicación premium, finca exigente",
          body: "Arras y documentación con gestor que conoce fincas marítimas.",
        },
        {
          title: "495 € vs comisión",
          body: "Venta directa con tarifa plana Livendia.",
        },
      ],
    },
  },
  {
    slug: "barcelona-vila-olimpica",
    city: "Vila Olímpica",
    heroImage: metroBarcelonaZoneImage("santmarti.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Vila Olímpica — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes de particular en Vila Olímpica: pack arras + gestión documental con gestor Livendia por 495 € IVA incl. Edificios olímpicos, terrazas, parking.",
      keywords: [
        "pack arras gestión documental vila olimpica",
        "vender piso vila olimpica sin agencia",
        "venta entre particulares barcelona olympic",
        "gestor inmobiliario vila olimpica arras",
        "contrato arras vila olimpica barcelona",
      ],
      heroBadge: "Venta · Vila Olímpica · Propietarios",
      heroH1:
        "Vendes de particular en Vila Olímpica: pack arras + gestión documental con gestor Livendia",
      heroBullets: [
        "Vila Olímpica, Port Olímpic, Nova Icària",
        "Edificios post-92 · terrazas · trasteros",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Vila Olímpica sin agencia: arras + gestor hasta notaría",
      whySubtitle:
        "Edificios de la villa olímpica con terrazas, trasteros y parking comunitario: el precio pactado debe reflejarse en arras y nota simple antes de la señal.",
      localZonesHeading: "Zonas del pack en Vila Olímpica",
      localZones: "Vila Olímpica, Nova Icària, Port Olímpic y entorno Arc de Triomf límite.",
      finalCtaTitle: "Vende en Vila Olímpica con arras y documentación hasta escritura",
    },
    seo: {
      precioMedioVenta: 410_000,
      heroSubtitle:
        "Vendes en Vila Olímpica entre particulares. Pack 495 € IVA incl.: gestor inmobiliario redacta arras CCCat y lleva cèdula, comunidad e hipoteca hasta notaría.",
      marketIntro:
        "Vila Olímpica concentra edificios post-1992, perfiles internacionales y ticket ~410.000 €. Ventas entre particulares frecuentes en operaciones de segunda residencia.",
      localProblemIntro:
        "Terrazas y trasteros no inscritos en registro generan sorpresas en notaría si no se verifican en gestión documental post-arras.",
      stepLocalNotes: packStepNotes("con verificación de terrazas, trasteros y parking comunitario"),
      empathyCards: [
        {
          title: "Comprador internacional",
          body: "Exige documentación al día pese a venta entre particulares. Gestor Livendia persigue certificados.",
        },
        {
          title: "Terraza incluida en precio",
          body: "Debe coincidir en arras, nota simple y escritura.",
        },
        {
          title: "Sin pagar comisión de agencia",
          body: "495 € IVA incl. cuando tú encontraste al comprador.",
        },
      ],
      casuistica: [
        {
          title: "Terraza no inscrita",
          body: "Regularización o reflejo en arras antes de transmitir.",
        },
        {
          title: "Trastero y parking en precio",
          body: "Coherencia registral verificada en checklist.",
        },
        {
          title: "Comunidad de edificio olímpico",
          body: "Certificado de deuda y actas de derramas revisadas.",
        },
        {
          title: "Hipoteca comprador — 621-49",
          body: "Cláusula CCCat en borrador Livendia.",
        },
      ],
      faqLocal: [
        {
          question: "¿Precio del pack en Vila Olímpica?",
          answer: `495 € IVA incl. (145 € + 350 €). Sin comisión sobre el precio de venta.`,
        },
        {
          question: "¿Atendéis Nova Icària y Port Olímpic?",
          answer: "Sí. Mismo pack y gestor dedicado online.",
        },
        {
          question: "¿Incluye informe semáforo?",
          answer: "Sí, en gestión documental: verde/ámbar/rojo antes de notaría.",
        },
      ],
      barrios: ["Vila Olímpica", "Nova Icària", "Port Olímpic", "Arc de Triomf (límite)"],
      barriosIntro: "Pack arras + gestión en Vila Olímpica para vendedores particulares.",
      platformParagraph:
        "Panel Livendia para ventas con comprador internacional y vendedor fuera de Barcelona.",
      localBanners: [
        {
          title: "Vila Olímpica: anejos y coherencia registral",
          body: "Terraza, parking y trastero verificados antes de escritura.",
        },
        {
          title: "495 € tarifa plana",
          body: "Gestoría profesional sin comisión sobre el precio pactado.",
        },
      ],
    },
  },
  {
    slug: "barcelona-el-raval",
    city: "El Raval",
    heroImage: metroBarcelonaZoneImage("rabal.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor El Raval — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en el Raval entre particulares: arras profesionales y gestor documental hasta notaría por 495 € IVA incl. Gòtic límite, Sant Antoni, MACBA.",
      keywords: [
        "pack arras gestión documental raval",
        "vender piso raval sin agencia",
        "venta entre particulares el raval barcelona",
        "gestor inmobiliario raval arras",
        "contrato arras raval barcelona 495",
      ],
      heroBadge: "Venta · El Raval · Sin agencia",
      heroH1:
        "Vendes en el Raval entre particulares: arras profesionales y gestor documental hasta notaría",
      heroBullets: [
        "Raval centre, Sant Antoni límite, MACBA, Drassanes",
        "Edificios s. XIX · rotación · LAU habitaciones",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "El Raval: vendes sin agencia con arras CCCat y gestor documental",
      whySubtitle:
        "Rotación elevada, pisos compartidos y plantas baja comerciales: arras genéricas no documentan humedades, ruido o habitaciones mal reguladas — el gestor Livendia adapta contrato y expediente.",
      localZonesHeading: "Núcleos del pack en El Raval",
      localZones: "Raval centre, Sant Antoni (límite), MACBA, Drassanes y Rambla del Raval.",
      finalCtaTitle: "Vende en el Raval con arras y gestor Livendia hasta escritura",
    },
    seo: {
      precioMedioVenta: 280_000,
      heroSubtitle:
        "Vendes en El Raval sin inmobiliaria con comprador ya encontrado. Pack 495 € IVA incl.: gestor redacta arras CCCat y persigue cèdula, ITE y comunidad hasta notaría.",
      marketIntro:
        "El Raval mezcla edificios del s. XIX, rotación alta y ticket ~280.000 €. Ventas entre particulares frecuentes con plazos ajustados.",
      localProblemIntro:
        "Humedades, uso mixto vivienda–local y inquilinos en LAU no reflejados en arras son la principal causa de conflicto pre-escritura en el Raval.",
      stepLocalNotes: packStepNotes("con atención a LAU vigente y uso mixto en planta baja"),
      empathyCards: [
        {
          title: "Piso con habitaciones o LAU vigente",
          body: "Debe reflejarse en arras. Gestor adapta cláusulas al caso real.",
        },
        {
          title: "Comprador cierra rápido — documentación no",
          body: "Gestor post-arras persigue comunidad y certificados desde la semana 1.",
        },
        {
          title: "495 € vs comisión",
          body: "En 280.000 € el 3 % son 8.400 € + IVA. Pack tarifa plana.",
        },
      ],
      casuistica: [
        {
          title: "Inquilino en LAU no mencionado",
          body: "Ocupación y plazos deben constar antes de transmitir.",
        },
        {
          title: "Local comercial en planta baja",
          body: "Delimitación de uso en arras y coherencia registral.",
        },
        {
          title: "Humedades en edificio del s. XIX",
          body: "Estado conocido documentado para evitar rebaja tardía.",
        },
        {
          title: "Comunidad sin administrador profesional",
          body: "Gestor contacta presidente y hace seguimiento del certificado.",
        },
      ],
      faqLocal: [
        {
          question: "¿Gestionáis ventas con inquilino en el Raval?",
          answer: "Sí. El gestor refleja LAU vigente y condiciones de transmisión en arras.",
        },
        {
          question: "¿Cuánto cuesta el pack?",
          answer: `495 € IVA incl. Sin comisión sobre el precio de venta.`,
        },
        {
          question: "¿Servicio online?",
          answer: "Sí. Panel Livendia, gestor por WhatsApp y teléfono.",
        },
      ],
      barrios: ["Raval centre", "Sant Antoni (límite)", "MACBA", "Drassanes", "Rambla del Raval"],
      barriosIntro: "Pack arras + gestión documental en El Raval para vendedores particulares.",
      platformParagraph:
        "Gestor dedicado para operaciones rápidas en El Raval con documentación ordenada en panel Livendia.",
      localBanners: [
        {
          title: "El Raval: rotación rápida, arras precisas",
          body: "No copies plantillas del ensanche — CCCat adaptado al inmueble.",
        },
        {
          title: "495 € cuando ya tienes comprador",
          body: "Gestoría inmobiliaria, no agencia de captación.",
        },
      ],
    },
  },
  {
    slug: "badalona",
    city: "Badalona",
    heroImage: metroBarcelonaZoneImage("barcelona2.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Badalona — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Badalona sin agencia: contrato de arras y gestión documental por 495 € IVA incl. Centre, Montigalà, Llefià. Gestor profesional hasta notaría.",
      keywords: [
        "pack arras gestión documental badalona",
        "vender piso badalona sin agencia",
        "venta entre particulares badalona arras",
        "gestor inmobiliario badalona documentación",
        "contrato arras badalona 495 euros",
      ],
      heroBadge: "Venta · Badalona · Propietarios",
      heroH1:
        "Vendes en Badalona sin agencia: contrato de arras y gestión documental por 495 € IVA incl.",
      heroBullets: [
        "Centre, Montigalà, Llefià, Gorg",
        "CCCat · cèdula · área metropolitana",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Badalona entre particulares: arras + gestor documental hasta notaría",
      whySubtitle:
        "Muchos compradores llegan desde Barcelona capital. El vendedor badaloní necesita la misma diligencia documental que en el ensanche — pack 495 € con gestor Livendia.",
      localZonesHeading: "Zonas del pack en Badalona",
      localZones: "Centre, Montigalà, Llefià, Gorg, Artigues i Salut i Sant Pere.",
      finalCtaTitle: "Vende en Badalona con arras CCCat y gestor Livendia",
    },
    seo: {
      precioMedioVenta: 260_000,
      heroSubtitle:
        "Vendes de particular en Badalona y necesitas gestor inmobiliario para arras y documentación. Pack 495 € IVA incl. — sin comisión de inmobiliaria, con gestores colegiados Livendia hasta notaría.",
      marketIntro:
        "Badalona ofrece precio competitivo (~260.000 € de media) frente a Barcelona capital. Ventas entre particulares activas con compradores del área metropolitana.",
      localProblemIntro:
        "Arras copiadas de Barcelona con plazos irreales para comunidades badalonesas — el gestor recalibra CCCat y persigue certificados desde la firma de arras.",
      stepLocalNotes: packStepNotes("adaptado a edificios densos del centre y Montigalà"),
      empathyCards: [
        {
          title: "Comprador de Barcelona capital",
          body: "Exige documentación como en Eixample. Gestor Livendia con mismo rigor en Badalona.",
        },
        {
          title: "Precio cerrado por Idealista",
          body: "Pack arras + gestión cuando ya tienes comprador — 495 € IVA incl.",
        },
        {
          title: "Ahorro vs comisión",
          body: "En 260.000 € el 3 % son 7.800 € + IVA. Tarifa plana Livendia.",
        },
      ],
      casuistica: [
        {
          title: "Comunidad numerosa en Llefià o centre",
          body: "Certificado de deuda con seguimiento semanal del gestor.",
        },
        {
          title: "Cèdula caducada",
          body: "Obligatoria en Catalunya — renovación antes de escritura.",
        },
        {
          title: "Plazos cortos en arras",
          body: "Recalibrados a realidad de administrador de fincas local.",
        },
        {
          title: "Hipoteca vendedor pendiente",
          body: "Coordinación bancaria alineada con contrato de arras.",
        },
      ],
      faqLocal: [
        {
          question: "¿Cuánto cuesta vender en Badalona con Livendia?",
          answer: `Pack 495 € IVA incl. (145 € arras + 350 € gestión documental).`,
        },
        {
          question: "¿Atendéis todo Badalona?",
          answer: "Sí. Centre, Montigalà, Llefià, Gorg y resto del municipio online.",
        },
        {
          question: "¿Livendia busca comprador?",
          answer: "No. Gestoría para vendedores que ya tienen comprador particular.",
        },
      ],
      barrios: ["Centre", "Montigalà", "Llefià", "Gorg", "Artigues", "Salut i Sant Pere"],
      barriosIntro: "Pack arras + gestión documental en Badalona para vendedores particulares.",
      platformParagraph:
        "Panel Livendia para vender en Badalona desde Barcelona capital u otra ciudad.",
      localBanners: [
        {
          title: "Badalona: precio competitivo, documentación exigente",
          body: "Mismo rigor que Barcelona capital con pack 495 €.",
        },
        {
          title: "495 € vs comisión de agencia",
          body: "Venta entre particulares con gestores expertos Livendia.",
        },
      ],
    },
  },
];
