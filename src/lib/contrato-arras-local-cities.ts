/**
 * Landings SEO locales: contrato de arras por ciudad (España).
 * Rutas: /servicios/contrato-arras-local/[slug]
 *
 * Publicación gradual: amplía `CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS` cuando publiques cada ciudad.
 */

export const CONTRATO_ARRAS_LOCAL_BASE = "/servicios/contrato-arras-local";

export const CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "asturias",
];

export type ContratoArrasLocalLandingConfig = {
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
};

export type ContratoArrasLocalCityDefinition = Omit<ContratoArrasLocalLandingConfig, "path"> & {
  slug: string;
};

export function localContratoArrasHref(slug: string): string {
  return `${CONTRATO_ARRAS_LOCAL_BASE}/${slug}`;
}

export function toArrasLandingConfig(def: ContratoArrasLocalCityDefinition): ContratoArrasLocalLandingConfig {
  return {
    ...def,
    path: localContratoArrasHref(def.slug),
  };
}

export function getContratoArrasLocalCity(slug: string): ContratoArrasLocalCityDefinition | undefined {
  return CONTRATO_ARRAS_LOCAL_CITIES.find((c) => c.slug === slug);
}

export function isContratoArrasLocalSlugPublished(slug: string): boolean {
  return CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedContratoArrasLocalCities(): ContratoArrasLocalCityDefinition[] {
  const pub = new Set(CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS);
  return CONTRATO_ARRAS_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export const CONTRATO_ARRAS_LOCAL_CITIES: ContratoArrasLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroLead:
      "En Madrid capital y corredor próximo, un gestor inmobiliario revisa tu contrato de arras antes de firmar: penalidades, plazos hasta escritura, objeto y coherencia mínima registral —para que comprador y vendedor entendáis cada compromiso económico antes de ingresar la señal.",
    whyIntro:
      "Aquí las operaciones suelen ir rápido y reaparecen las mismas plantillas sin contrastar con vuestra situación real. Detectamos condiciones desequilibradas, plazos irreales o lagunas sobre cargas antes de que el dinero quede ligado a un texto defendido aprisa.",
    howIntro:
      "Cuatro fases hasta una firma defendible: desde operaciones en Centro, Salamanca o Chamberí hasta cierres en Pozuelo, Las Rozas u otros municipios del área metropolitana.",
    testimonialsTitle: "Compradores y vendedores en Madrid que ya pasaron sus arras por Livendia",
    testimonials: [
      {
        quote:
          "La agencia nos metió prisa con arras penitenciales estándar. Livendia señaló una penalidad mal calibrada y un plazo de financiación que no cuadraba con nuestro banco.",
        author: "Patricia & Iván",
        role: "Compradores, distrito Salamanca",
      },
      {
        quote:
          "Vendíamos piso familiar y no quería enfrentamientos; nos tradujeron escenarios de incumplimiento y cerramos confirmatorias que todos pudimos firmar.",
        author: "Rosa M.",
        role: "Vendedora, Chamartín",
      },
    ],
    finalCtaLead:
      "Elige penitenciales o confirmatorias y completa el pago seguro. Tu expediente queda ordenado en el panel hasta una firma informada en Madrid.",
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "En Barcelona ciudad y área metropolitana, revisamos tu contrato de arras con el mismo rigor que en despacho: tipo de arras claro, consecuencias del impago o del desistimiento y calendarios realistas hasta escritura.",
    whyIntro:
      "Mercado competido y documentos que circulan entre agencias y particulares: no es raro mezclar figuras o arrastrar cláusulas desactualizadas. Afinamos el texto para que refleje lo pactado y reduzca disputas entre arras y notaría.",
    howIntro:
      "Cuatro fases hasta rubricar con criterio: Eixample, Gràcia, Sant Martí, Cornellà u otros núcleos donde también hay fuerte volumen compraventa.",
    testimonialsTitle: "Compradores y vendedores en Barcelona que ya pasaron sus arras por Livendia",
    testimonials: [
      {
        quote:
          "Teníamos dudas entre penitenciales y confirmatorias para una reforma pendiente. Nos ordenaron obligaciones y plazos antes de transferir la señal.",
        author: "Arnau & Laia",
        role: "Compradores, Sant Andreu",
      },
      {
        quote:
          "Confirmatorias en piso heredado: Livendia cruzó superficies literales con lo que aparecía en registro y evitamos una discusión posterior.",
        author: "Montserrat V.",
        role: "Vendedora, Eixample",
      },
    ],
    finalCtaLead:
      "Contrata penitenciales o confirmatorias online y prepara una firma coherente en Barcelona con expediente digital.",
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroLead:
      "En Valencia capital y área metropolitana revisamos tu contrato de arras con foco en penitenciales o confirmatorias claras: plazos hasta notaría, objeto del inmueble, financiación y escenarios de incumplimiento. Menos plantillas copiadas y más texto alineado con lo que habéis pactado en visita o con la agencia.",
    whyIntro:
      "La compraventa aquí va a ritmo alto y reaparecen borradores con penalidades genéricas, cargas mal explicadas o plazos de obra que no encajan con licencias reales. Detectamos desequilibrios antes de transferir la señal.",
    howIntro:
      "Cuatro fases hasta rubricar con criterio: Ciutat Vella, l'Eixample, Ruzafa, Benimaclet o municipios metropolitanos como Torrent, Mislata o Paterna.",
    testimonialsTitle: "Compradores y vendedores en Valencia que ya pasaron sus arras por Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos con hipoteca y el borrador mezclaba consecuencias de arras penitenciales con condiciones que parecían confirmatorias. Livendia lo ordenó antes de ingresar la señal.",
        author: "Vicente & Elena",
        role: "Compradores, Campanar",
      },
      {
        quote:
          "Vendía en Gran Vía: había reforma pendiente y cargas menores. Las confirmatorias quedaron con calendario de cancelación y entrega de licencias razonable para ambas partes.",
        author: "Carmen L.",
        role: "Vendedora, extramurs",
      },
    ],
    finalCtaLead:
      "Elige penitenciales o confirmatorias con pago seguro y deja el expediente listo para firmar en Valencia sin sorpresas entre arras y escritura.",
  },
  {
    slug: "asturias",
    city: "Asturias",
    schemaAdministrativeArea: "Principado de Asturias",
    heroLead:
      "En Asturias —Oviedo, Gijón, Avilés, corredor costero o viviendas con componente rural o turístico— revisamos tu contrato de arras antes de comprometer la señal. Prestamos atención al objeto literal coherente con catastro y registro, plazos realistas si hay financiación o trámites en conceyu y cláusulas que no desbalanceen comprador y vendedor en segunda residencia o compraventa fuera de gran núcleo urbano.",
    whyIntro:
      "Operaciones con piso en ciudad, chalet en la costa o casa en el interior: no es lo mismo una plantilla valenciana o madrileña que un caso con parcela, anexos o usos mixtos. Ajustamos el texto a la compraventa real y avisamos cuando haga falta contrastar con técnico o registro antes de cerrar arras.",
    howIntro:
      "Cuatro fases hasta la firma informada: operaciones en Oviedo, Gijón, Avilés, Langreo, Siero o compraventa en zonas costeras y rurales del Principado.",
    testimonialsTitle: "Compradores y vendedores en Asturias que ya pasaron sus arras por Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos un piso en Gijón con parking separado en escritura futura. Livendia cuadró cómo quedaba la arras si el garaje no podía incluirse en el mismo asiento.",
        author: "Iker & Nerea",
        role: "Compradores, centro de Gijón",
      },
      {
        quote:
          "Vendíamos finca con edificabilidad discutida en el pueblo: confirmatorias con hitos claros de información urbanística antes del resto del precio.",
        author: "Roberto M.",
        role: "Vendedor, concejo del oriente",
      },
    ],
    finalCtaLead:
      "Contrata penitenciales o confirmatorias online y prepara arras defendibles en Asturias con expediente digital en el panel Livendia.",
  },
];
