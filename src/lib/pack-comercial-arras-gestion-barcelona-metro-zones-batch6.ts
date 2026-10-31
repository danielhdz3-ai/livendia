import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL } from "@/lib/catalog.public";
import type { PackCommercialLocalSeoContent } from "@/lib/pack-comercial-local-seo-content";
import { packArrasMetroStepLocalNotes } from "@/lib/pack-arras-gestion-process-modules";
import { metroBarcelonaZoneImage } from "@/lib/administracion-alquiler-metro-zone-images";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH6_SLUGS = [
  "barcelona-pedralbes",
  "barcelona-sant-antoni",
  "barcelona-fort-pienc",
  "mataro",
  "rubi",
] as const;

export type PackArrasGestionBcnMetroBatch6Slug =
  (typeof PACK_ARRAS_GESTION_BCN_METRO_BATCH6_SLUGS)[number];

type ZoneBatch = {
  slug: PackArrasGestionBcnMetroBatch6Slug;
  city: string;
  heroImage: string;
  diff: LocalCityLandingFields;
  seo: PackCommercialLocalSeoContent;
};

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
  testimonials?: PackCommercialLocalSeoContent["testimonials"],
): PackCommercialLocalSeoContent {
  return {
    precioMedioVenta,
    heroSubtitle,
    marketIntro,
    localProblemIntro,
    stepLocalNotes: packArrasMetroStepLocalNotes(stepDetail),
    empathyCards,
    casuistica,
    faqLocal,
    barrios: [...barrios],
    barriosIntro,
    platformParagraph,
    localBanners,
    ...(testimonials?.length ? { testimonials } : {}),
  };
}

const sharedEmpathy = [
  {
    title: "Comprador ya cerrado sin agencia",
    body: "Pack 495 € IVA incl. cubre arras CCCat y tramo documental hasta notaría.",
  },
  {
    title: "495 € vs comisión del 3 %",
    body: "Si tú captaste al comprador, no pagues miles en honorarios de intermediación.",
  },
  {
    title: "Vendedor fuera de la zona",
    body: "Panel Livendia y gestor dedicado por WhatsApp — sin ir al despacho cada semana.",
  },
] as const;

export const PACK_ARRAS_GESTION_BCN_METRO_BATCH6: readonly ZoneBatch[] = [
  {
    slug: "barcelona-pedralbes",
    city: "Pedralbes",
    heroImage: metroBarcelonaZoneImage("lescorts4.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Pedralbes — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Pedralbes sin agencia: pack arras CCCat y gestión documental 495 € IVA incl. Diagonal, Reina Elisenda, Zona Universitària. Despacho Livendia en Les Corts.",
      keywords: [
        "pack arras gestión documental pedralbes",
        "vender piso pedralbes sin agencia",
        "venta entre particulares pedralbes arras",
        "gestor inmobiliario pedralbes documentación",
        "contrato arras diagonal alta 495",
      ],
      heroBadge: "Venta · Pedralbes · Sin comisión",
      heroH1: "Vendes en Pedralbes entre particulares: arras CCCat y gestor documental hasta notaría",
      heroBullets: [
        "Reina Elisenda, Diagonal alta, Monestir de Pedralbes",
        "Señales elevadas · parking anexo · hipoteca comprador",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Pedralbes: arras calibradas y documentación de lujo sin pagar comisión",
      whySubtitle:
        "Operaciones con ticket alto exigen coherencia registral y plazos realistas de comunidad. Gestor Livendia en Les Corts (a 10 min) o 100 % online.",
      localZonesHeading: "Microzonas del pack en Pedralbes",
      localZones: "Pedralbes, Reina Elisenda, Monestir, entorno Diagonal y límite Sarrià.",
      finalCtaTitle: "Vende en Pedralbes con pack arras + gestión Livendia",
    },
    seo: zoneSeo(
      620_000,
      "Has cerrado comprador en Pedralbes y vendes sin inmobiliaria. Pack 495 € IVA incl.: arras CCCat y gestión hasta notaría con cèdula, ITE y comunidad.",
      "Pedralbes concentra ventas entre particulares con precio medio muy superior a la media de Barcelona (~620.000 €).",
      "Plazos cortos en arras copiadas de otras zonas chocan con comunidades exigentes y peritos en edificios señoriales.",
      "con cláusulas 621-49 y plazos de financiación realistas en Pedralbes",
      sharedEmpathy,
      [
        { title: "Plaza de parking no inscrita", body: "Cruce escritura–registro antes de escritura." },
        { title: "Derrama de fachada en junta", body: "Informe semáforo y actas en gestión documental." },
        { title: "Arras desequilibradas", body: "Redacción Livendia según CCCat." },
      ],
      [
        { question: "¿Precio del pack en Pedralbes?", answer: "495 € IVA incl. (145 € arras + 350 € gestión)." },
        { question: "¿Cita en despacho Les Corts?", answer: "Sí, opcional; el pack se tramita igual online." },
      ],
      ["Reina Elisenda", "Diagonal alta", "Monestir", "Zona Universitària"],
      "Pack arras + gestión documental en Pedralbes para vendedores particulares.",
      "Gestor Livendia con sede en Les Corts — mismo expediente online.",
      [{ title: "Pedralbes sin agencia", body: "Pack 495 € IVA incl." }],
      [
        {
          quote:
            "Vendí en Reina Elisenda con comprador de Idealista. El pack cubrió arras y el papeleo de comunidad e ITE — a 10 min del despacho en Les Corts si quería revisar algo en persona.",
          author: "Marta L.",
          role: "Vendedora · Pedralbes",
        },
        {
          quote:
            "La señal era alta y el comprador financiaba: el gestor equilibró las arras CCCat y detectó una derrama en junta antes de que firmáramos.",
          author: "Enric V.",
          role: "Vendedor entre particulares · Diagonal alta",
        },
        {
          quote:
            "Vivo en Madrid y el piso está en Pedralbes. Subí certificados al panel y la escritura fue en fecha sin pagar comisión de agencia.",
          author: "Silvia R.",
          role: "Propietaria no residente · Pedralbes",
        },
      ],
    ),
  },
  {
    slug: "barcelona-sant-antoni",
    city: "Sant Antoni",
    heroImage: getLocalCityCardImage("barcelona-eixample"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Sant Antoni — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Sant Antoni (Eixample) sin agencia: pack arras + gestión 495 € IVA incl. Mercat, Ronda Sant Antoni, Urgell. CCCat y cèdula.",
      keywords: [
        "pack arras gestión sant antoni barcelona",
        "vender piso sant antoni sin agencia",
        "venta entre particulares ronda sant antoni",
        "contrato arras eixample sant antoni",
      ],
      heroBadge: "Venta · Sant Antoni · Eixample",
      heroH1: "Vendes en Sant Antoni entre particulares: pack arras y gestor documental Livendia",
      heroBullets: [
        "Mercat de Sant Antoni, Ronda, Comte Borrell",
        "Reformas recientes · ITE · ZMRT",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Sant Antoni: venta directa con arras adaptadas al Eixample",
      whySubtitle:
        "Bloques mixtos con locales en planta baja y pisos reformados: el comprador pide cèdula e informe al día. Pack único 495 €.",
      localZonesHeading: "Ejes del pack en Sant Antoni",
      localZones: "Sant Antoni, Ronda de Sant Antoni, Comte Borrell, Parlament y entorno Mercat.",
      finalCtaTitle: "Vende en Sant Antoni con arras CCCat y gestor Livendia",
    },
    seo: zoneSeo(
      380_000,
      "Comprador de Idealista en Sant Antoni y venta sin agencia. Pack 495 € IVA incl. con arras CCCat y gestión documental hasta notaría.",
      "Sant Antoni combina demanda de familias y jóvenes profesionales (~380.000 € precio medio de referencia en el entorno Eixample-sur).",
      "Certificados de comunidad lentos en bloques del Ensanche sur retrasan escrituras si no hay gestor persiguiendo papeles.",
      "con checklist ZMRT y cèdula en bloques del Ensanche sur",
      sharedEmpathy,
      [
        { title: "Local comercial en planta baja", body: "Coherencia de titularidad en arras." },
        { title: "Obra reciente sin licencia reflejada", body: "Revisión en informe semáforo." },
      ],
      [
        { question: "¿Incluye gestión post-arras?", answer: "Sí, 350 € del pack cubren trámite documental hasta notaría." },
      ],
      ["Mercat Sant Antoni", "Ronda", "Comte Borrell", "Urgell"],
      "Pack en Sant Antoni para vendedores que ya tienen comprador.",
      "Panel Livendia desde cualquier barrio de Barcelona.",
      [{ title: "Sant Antoni · pack 495 €", body: "Arras + gestión documental IVA incl." }],
    ),
  },
  {
    slug: "barcelona-fort-pienc",
    city: "Fort Pienc",
    heroImage: metroBarcelonaZoneImage("eixample.jpg"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Fort Pienc — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Fort Pienc sin agencia: pack arras CCCat y gestión 495 € IVA incl. Arc de Triomf, Estació del Nord, Marina. Gestor Livendia.",
      keywords: [
        "pack arras gestión fort pienc",
        "vender piso fort pienc sin agencia",
        "venta entre particulares arc triomf arras",
        "contrato arras eixample fort pienc",
      ],
      heroBadge: "Venta · Fort Pienc · Barcelona",
      heroH1: "Vendes en Fort Pienc entre particulares: arras y gestión documental por 495 €",
      heroBullets: [
        "Arc de Triomf, Marina, Estació del Nord",
        "Pisos con terraza y locales en conversión",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Fort Pienc: pack arras + gestión sin comisión de agencia",
      whySubtitle:
        "Zona en transformación con compradores exigentes en due diligence. Gestor persigue cèdula, ITE y comunidad desde la firma de arras.",
      localZonesHeading: "Zonas del pack en Fort Pienc",
      localZones: "Fort Pienc, Arc de Triomf, Estació del Nord, Marina y límite con Ciutat Vella.",
      finalCtaTitle: "Vende en Fort Pienc con gestor Livendia hasta escritura",
    },
    seo: zoneSeo(
      360_000,
      "Venta entre particulares en Fort Pienc. Pack 495 € IVA incl.: arras CCCat y gestor documental hasta notaría.",
      "Fort Pienc enlaza Eixample y Ciutat Vella con operaciones frecuentes entre particulares (~360.000 € referencia).",
      "Terrazas no inscritas y locales reconvertidos generan sorpresas entre arras y notaría.",
      "adaptado a bloques entre Arc de Triomf y Marina",
      sharedEmpathy,
      [{ title: "Elementos comunes no inscritos", body: "Nota simple vs escritura en informe semáforo." }],
      [{ question: "¿Atendéis Fort Pienc?", answer: "Sí, con el mismo pack 495 € IVA incl." }],
      ["Arc de Triomf", "Estació del Nord", "Marina", "Fort Pienc centre"],
      "Pack arras + gestión en Fort Pienc.",
      "Servicio online con gestor dedicado.",
      [{ title: "Fort Pienc · 495 €", body: "Arras + gestión vendedor." }],
    ),
  },
  {
    slug: "mataro",
    city: "Mataró",
    heroImage: "/images/barcelona.jpg",
    diff: {
      metaTitle: `Pack arras + gestión vendedor Mataró — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Mataró (Maresme) sin agencia: pack arras CCCat y gestión documental 495 € IVA incl. Centre, Pla d'en Boet, Cerdanyola. Gestor online Livendia.",
      keywords: [
        "pack arras gestión documental mataro",
        "vender piso mataro sin agencia",
        "venta entre particulares maresme arras",
        "gestor inmobiliario mataro 495",
      ],
      heroBadge: "Venta · Mataró · Maresme",
      heroH1: "Vendes en Mataró entre particulares: pack arras CCCat y gestor documental",
      heroBullets: [
        "Centre, Pla d'en Boet, Cerdanyola, RENFE",
        "Compradores de Barcelona y Maresme",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      ],
      whyTitle: "Mataró sin inmobiliaria: arras + documentación hasta notaría",
      whySubtitle:
        "Muchas ventas se cierran con comprador de Barcelona capital. El gestor Livendia redacta arras CCCat y persigue certificados mientras tú negocias.",
      localZonesHeading: "Núcleos del pack en Mataró",
      localZones: "Centre, Pla d'en Boet, Cerdanyola del Vallès (límite), Port Corredor Cigs.",
      finalCtaTitle: "Vende en Mataró con pack Livendia 495 €",
    },
    seo: zoneSeo(
      310_000,
      "Has encontrado comprador en Mataró y vendes sin agencia. Pack 495 € IVA incl. con arras y gestión documental hasta notaría.",
      "Mataró (~310.000 € referencia) con ventas entre particulares activas y compradores del corredor Maresme–Barcelona.",
      "Comunidades en bloques de los 70–80 con certificados lentos — plazos en arras deben ser realistas.",
      "con plazos adaptados al Maresme",
      sharedEmpathy,
      [{ title: "Comprador de Barcelona", body: "Documentación con rigor CCCat — pack 495 €." }],
      [{ question: "¿Servicio 100 % online?", answer: "Sí. Panel Livendia y gestor dedicado." }],
      ["Centre", "Pla d'en Boet", "Cerdanyola", "RENFE Mataró"],
      "Pack en Mataró para vendedores particulares.",
      "Gestor Livendia con despacho en Barcelona Les Corts.",
      [{ title: "Mataró · pack 495 €", body: "Arras + gestión IVA incl." }],
    ),
  },
  {
    slug: "rubi",
    city: "Rubí",
    heroImage: getLocalCityCardImage("sant-cugat-del-valles"),
    diff: {
      metaTitle: `Pack arras + gestión vendedor Rubí — ${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} IVA incl.`,
      metaDescription:
        "Vendes en Rubí (Vallès) sin agencia: pack arras + gestión documental 495 € IVA incl. Centre, Can Jardí, FGC. Sin comisión inmobiliaria.",
      keywords: [
        "pack arras gestión documental rubi",
        "vender piso rubi sin agencia",
        "venta entre particulares valles occidental arras",
        "contrato arras rubi 495",
      ],
      heroBadge: "Venta · Rubí · Vallès",
      heroH1: "Vendes en Rubí entre particulares: arras CCCat y gestor documental Livendia",
      heroBullets: [
        "Centre, Can Jardí, FGC Rubí, polígonos",
        "Familias y segundas viviendas",
        `${LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_LABEL} · 0 % comisión`,
      ],
      whyTitle: "Rubí: pack 495 € arras + gestión sin pagar comisión",
      whySubtitle:
        "Operaciones con comprador de Terrassa o Barcelona. Gestor Livendia redacta arras y persigue cèdula y comunidad desde el panel.",
      localZonesHeading: "Zonas del pack en Rubí",
      localZones: "Centre, Can Jardí, Ca n'Oriac, entorno FGC y acceso C-16.",
      finalCtaTitle: "Vende en Rubí con arras y gestor Livendia",
    },
    seo: zoneSeo(
      280_000,
      "Vendes en Rubí sin agencia con comprador ya cerrado. Pack 495 € IVA incl.: arras CCCat y gestión documental hasta notaría.",
      "Rubí (~280.000 € referencia) con ventas entre particulares frecuentes en el Vallès Occidental.",
      "Bloques con derramas de ascensor pendientes — informe semáforo antes de fijar notaría.",
      "adaptado al Vallès Occidental",
      sharedEmpathy,
      [{ title: "Hipoteca comprador", body: "Cláusula 621-49 en arras Livendia." }],
      [{ question: "¿Precio en Rubí?", answer: "495 € IVA incl., igual que en Barcelona ciudad." }],
      ["Centre", "Can Jardí", "Ca n'Oriac", "FGC Rubí"],
      "Pack arras + gestión en Rubí.",
      "Online con gestor dedicado Livendia.",
      [{ title: "Rubí · pack 495 €", body: "Arras + gestión vendedor." }],
    ),
  },
];
