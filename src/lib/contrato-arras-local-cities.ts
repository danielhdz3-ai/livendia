/**
 * Landings SEO locales: contrato de arras por ciudad (España).
 * Rutas: /servicios/contrato-arras-local/[slug]
 *
 * Publicación gradual: amplía `CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS` cuando publiques cada ciudad.
 */

import { getArrasLocalSeoContent } from "@/lib/contrato-arras-local-seo-content";
import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";

export const CONTRATO_ARRAS_LOCAL_BASE = "/servicios/contrato-arras-local";

export const CONTRATO_ARRAS_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "badalona",
  "sant-cugat-del-valles",
  "sabadell",
  "terrassa",
  "valencia",
  "asturias",
  "sevilla",
  "malaga",
  "zaragoza",
  "palma",
];

export type ContratoArrasLocalLandingConfig = {
  slug: string;
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  heroH1?: string;
  heroBadge?: string;
  metaTitle?: string;
  metaDescription?: string;
  keywords?: readonly string[];
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  seoContent?: import("@/lib/contrato-arras-local-seo-content").ArrasLocalSeoContent;
  faq?: readonly { question: string; answer: string }[];
};

export type ContratoArrasLocalCityDefinition = Omit<ContratoArrasLocalLandingConfig, "path" | "seoContent" | "faq">;

export function localContratoArrasHref(slug: string): string {
  return `${CONTRATO_ARRAS_LOCAL_BASE}/${slug}`;
}

export function toArrasLandingConfig(def: ContratoArrasLocalCityDefinition): ContratoArrasLocalLandingConfig {
  const seoContent = getArrasLocalSeoContent(def.slug, def.city);
  return {
    ...def,
    path: localContratoArrasHref(def.slug),
    ...(seoContent ? { seoContent, faq: seoContent.faqLocal } : {}),
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
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Arras entre particulares · L'Hospitalet",
    heroH1: "Gestor que tramita tu contrato de arras en L'Hospitalet",
    metaTitle: `Tramitar contrato de arras L'Hospitalet — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `¿Buscas gestor para tramitar arras en L'Hospitalet? Gestor asignado, CCCat 621-4 a 621-9 y cláusula 621-49. ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Bellvitge, Collblanc.`,
    keywords: [
      "contrato de arras hospitalet",
      "tramitar arras l hospitalet de llobregat",
      "gestor contrato arras hospitalet",
      "arras penitenciales hospitalet",
      "contrato arras entre particulares hospitalet",
      "gestoria arras bellvitge",
      "firmar arras collblanc",
    ],
    heroLead:
      "Entre particulares en L'Hospitalet, las arras mal redactadas son la principal causa de pérdida de señal. Un gestor Livendia asignado a tu caso redacta o revisa penitenciales o confirmatorias con base en Código Civil español y Codi civil de Catalunya (arts. 621-4 a 621-9).",
    whyIntro:
      "En Collblanc, Bellvitge o La Florida circulan plantillas de agencia pensadas para otra operación. Calibramos penalidades, plazos hasta escritura y objeto del inmueble para una gestión justa de la señal.",
    howIntro:
      "Cuatro fases con gestor asignado: diagnóstico del borrador, detección de riesgos de pérdida de señal, redacción equilibrada y firma informada en L'Hospitalet.",
    testimonialsTitle: "Particulares en L'Hospitalet que tramitaron sus arras con Livendia",
    testimonials: [
      {
        quote:
          "El vendedor nos pasó arras penitenciales con penalidad desproporcionada. El gestor asignado la recalibró según CCCat y firmamos sin perder la señal por sorpresa.",
        author: "Jordi & Marta",
        role: "Compradores, Collblanc",
      },
      {
        quote:
          "Vendía en Bellvitge entre particulares. Livendia redactó confirmatorias claras con plazo de cancelación de hipoteca realista.",
        author: "Sonia P.",
        role: "Vendedora, Bellvitge",
      },
    ],
    finalCtaLead:
      "Contrata arras con gestor asignado en L'Hospitalet — gestión justa, 145 € IVA incl., panel digital.",
  },
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Arras entre particulares · Cornellà",
    heroH1: "Tramitar contrato de arras en Cornellà con gestor especializado",
    metaTitle: `Contrato de arras Cornellà — gestor asignado ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `Gestor que tramita arras en Cornellà de Llobregat. CCCat 621-4 a 621-9 y art. 621-49 (financiación). ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Sant Ildefons, Can Mercader.`,
    keywords: [
      "contrato arras cornella",
      "tramitar arras cornella de llobregat",
      "gestor arras cornella",
      "arras penitenciales cornella",
      "contrato arras particulares cornella",
      "firmar arras sant ildefons",
    ],
    heroLead:
      "¿Compras o vendes en Cornellà sin agencia? Tu gestor Livendia se asigna a tu expediente, domina CC español y Codi civil de Catalunya y redacta arras equilibradas — sin cláusulas que te hagan perder el depósito.",
    whyIntro:
      "Sant Ildefons y Can Mercader concentran operaciones rápidas con borradores copiados. Revisamos coherencia registral, financiación y arts. 621-4 a 621-9 CCCat antes de ingresar la señal.",
    howIntro:
      "Gestor asignado, llamada previa y contrato en 48-72 h: penitenciales o confirmatorias adaptadas a tu compraventa en Cornellà.",
    testimonialsTitle: "Compradores y vendedores en Cornellà que pasaron sus arras por Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Sant Ildefons y el borrador mezclaba penitenciales con efectos de confirmatorias. El gestor lo aclaró y lo dejó justo para ambos.",
        author: "Alejandro R.",
        role: "Comprador, Sant Ildefons",
      },
      {
        quote:
          "Venta entre particulares en Can Mercader: Livendia redactó arras con hitos de documentación antes del resto del precio.",
        author: "Montse L.",
        role: "Vendedora, Cornellà",
      },
    ],
    finalCtaLead:
      "Arras justas en Cornellà con gestor especialista — contrata online y firma con criterio.",
  },
  {
    slug: "sabadell",
    city: "Sabadell",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Arras entre particulares · Sabadell",
    heroH1: "¿Buscas gestor para tu contrato de arras en Sabadell?",
    metaTitle: `Tramitar arras Sabadell — gestor CC + CCCat ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `Gestor asignado tramita contrato de arras en Sabadell. Arras 621-4 a 621-9 y desistimiento por financiación (621-49). ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Creu Alta, Gràcia, Can Feu.`,
    keywords: [
      "contrato arras sabadell",
      "tramitar arras sabadell",
      "gestor contrato arras sabadell",
      "arras penitenciales sabadell",
      "contrato arras entre particulares sabadell",
      "firmar arras creu alta",
      "gestoria arras valles",
    ],
    heroLead:
      "En Sabadell un gestor Livendia se asigna a tu compraventa entre particulares: especialista en Código Civil español y Codi civil de Catalunya, redacta arras penitenciales o confirmatorias justas y te evita perder la señal por cláusulas abusivas.",
    whyIntro:
      "Creu Alta, Gràcia o Can Feu: operaciones con hipoteca, herencia o reforma pendiente. Ajustamos arras al CCCat (621-4 a 621-9) y al calendario real hasta notaría.",
    howIntro:
      "Diagnóstico, riesgos, redacción equilibrada y firma informada — con un gestor dedicado a tu caso en Sabadell.",
    testimonialsTitle: "Particulares en Sabadell que tramitaron arras con gestor Livendia",
    testimonials: [
      {
        quote:
          "Herencia de tres hermanos y comprador con hipoteca: el gestor asignado ordenó hitos en las arras confirmatorias y nadie perdió señal por plazos imposibles.",
        author: "Pere & Núria",
        role: "Vendedores, Creu Alta",
      },
      {
        quote:
          "Borrador de la agencia desequilibrado en Can Feu. Livendia lo revisó con criterio CCCat antes de transferir los 15.000 € de señal.",
        author: "Lucas H.",
        role: "Comprador, Can Feu",
      },
    ],
    finalCtaLead:
      "Contrata arras en Sabadell con gestor asignado — gestión justa de la señal, 145 € IVA incl.",
  },
  {
    slug: "terrassa",
    city: "Terrassa",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Arras entre particulares · Terrassa",
    heroH1: "Contrato de arras en Terrassa con gestor asignado",
    metaTitle: `Contrato arras Terrassa — gestor especialista ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `Tramita arras en Terrassa con gestor asignado. CCCat 621-4 a 621-9 y art. 621-49 hipoteca. ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Sant Pere, La Maurina.`,
    keywords: [
      "contrato arras terrassa",
      "tramitar arras terrassa",
      "gestor arras terrassa",
      "arras penitenciales terrassa",
      "contrato arras particulares terrassa",
      "firmar arras sant pere terrassa",
    ],
    heroLead:
      "Terrassa: compraventa entre particulares con gestor Livendia asignado a tu expediente. Dominio del Código Civil español y del Codi civil de Catalunya (arts. 621-4 a 621-9) para arras justas — sin sorpresas que te hagan perder la señal.",
    whyIntro:
      "En Sant Pere, La Maurina o Ca n'Anglada vemos arras con penalidades opacas o plazos irreales. Las redactamos o corregimos para equilibrio comprador-vendedor.",
    howIntro:
      "Tu gestor analiza el borrador, aplica CCCat y CC, y entrega contrato listo para firmar en 48-72 h laborables.",
    testimonialsTitle: "Compradores y vendedores en Terrassa con arras tramitadas por Livendia",
    testimonials: [
      {
        quote:
          "Comprador con cláusula de financiación mal redactada en La Maurina. El gestor la reescribió y solo entonces transferí la señal.",
        author: "Iván S.",
        role: "Comprador, La Maurina",
      },
      {
        quote:
          "Vendíamos piso familiar en Sant Pere. Confirmatorias con calendario de cancelación de hipoteca claro — art. 621-49 explicado en la llamada.",
        author: "Carme D.",
        role: "Vendedora, Sant Pere",
      },
    ],
    finalCtaLead:
      "Gestión de arras justa en Terrassa — gestor asignado, penitenciales o confirmatorias, panel Livendia.",
  },
  {
    slug: "badalona",
    city: "Badalona",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Arras entre particulares · Badalona",
    heroH1: "Gestor que tramita tu contrato de arras en Badalona",
    metaTitle: `Contrato de arras Badalona — gestor CCCat ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `Tramita arras en Badalona con gestor asignado. CCCat 621-4 a 621-9 y art. 621-49 (hipoteca). ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Centre, Montigalà, La Salut.`,
    keywords: [
      "contrato arras badalona",
      "tramitar arras badalona",
      "gestor contrato arras badalona",
      "arras penitenciales badalona",
      "contrato arras entre particulares badalona",
      "firmar arras montigala",
      "gestoria arras badalona",
    ],
    heroLead:
      "En Badalona, entre particulares, las arras mal redactadas son la vía más rápida a perder la señal. Un gestor Livendia asignado domina CC español y Codi civil de Catalunya (621-4 a 621-9) y te explica el art. 621-49 si compras con hipoteca.",
    whyIntro:
      "Centre, Montigalà, La Salut o el Gorg: operaciones con borradores de agencia barcelonesa sin adaptar. Calibramos penalidades, plazos hasta escritura y cláusula de financiación para una gestión justa de la señal.",
    howIntro:
      "Cuatro fases con gestor dedicado: diagnóstico, riesgos de pérdida de señal, redacción equilibrada y firma informada en Badalona.",
    testimonialsTitle: "Particulares en Badalona que tramitaron sus arras con Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Montigalà con hipoteca y el borrador no tenía cláusula 621-49. El gestor la redactó y entonces transferimos la señal con tranquilidad.",
        author: "Marc & Laura",
        role: "Compradores, Montigalà",
      },
      {
        quote:
          "Vendía en el centre entre particulares. Livendia dejó confirmatorias claras con plazo de cancelación de hipoteca realista.",
        author: "Teresa G.",
        role: "Vendedora, centre de Badalona",
      },
    ],
    finalCtaLead:
      "Contrata arras en Badalona con gestor asignado — 621-49 explicado en la llamada, 145 € IVA incl., panel digital.",
  },
  {
    slug: "sant-cugat-del-valles",
    city: "Sant Cugat del Vallès",
    schemaAdministrativeArea: "Cataluña",
    heroBadge: "Arras entre particulares · Sant Cugat",
    heroH1: "Contrato de arras en Sant Cugat del Vallès con gestor especializado",
    metaTitle: `Tramitar arras Sant Cugat del Vallès — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `Gestor asignado tramita contrato de arras en Sant Cugat del Vallès. CCCat 621-4 a 621-9 y art. 621-49. ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Centre, Mira-sol, Valldoreix.`,
    keywords: [
      "contrato arras sant cugat",
      "tramitar arras sant cugat del valles",
      "gestor arras sant cugat",
      "arras penitenciales sant cugat",
      "contrato arras particulares sant cugat",
      "firmar arras mira sol",
      "gestoria arras valles",
    ],
    heroLead:
      "Sant Cugat del Vallès: compraventa entre particulares con gestor Livendia asignado. Especialista en Código Civil español y CCCat — arras justas (621-4 a 621-9) y cláusula 621-49 si necesitas hipoteca, sin perder la señal por plantillas genéricas.",
    whyIntro:
      "En Mira-sol, Valldoreix o el centre histórico las operaciones suelen ir con hipoteca y plazos ajustados. Revisamos arras penitenciales o confirmatorias y la cláusula de desistimiento por falta de financiación antes de ingresar la señal.",
    howIntro:
      "Tu gestor analiza el borrador, aplica CC y CCCat, y entrega contrato listo para firmar en 48-72 h laborables.",
    testimonialsTitle: "Compradores y vendedores en Sant Cugat que pasaron sus arras por Livendia",
    testimonials: [
      {
        quote:
          "Comprador con hipoteca en Valldoreix: el gestor explicó 621-4 vs 621-49 en la llamada y redactó todo el contrato antes de la señal.",
        author: "Albert & Núria",
        role: "Compradores, Valldoreix",
      },
      {
        quote:
          "Vendíamos chalet en Mira-sol entre particulares. Confirmatorias con hitos de documentación y calendario de cancelación de hipoteca claro.",
        author: "Jordi M.",
        role: "Vendedor, Mira-sol",
      },
    ],
    finalCtaLead:
      "Arras justas en Sant Cugat del Vallès — gestor asignado, penitenciales o confirmatorias, trámite 621-49 incluido si lo necesitas.",
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
    metaTitle: `Arras Asturias — 145 €, gestor humano sin agencia | Livendia`,
    metaDescription:
      `Contrato de arras Oviedo, Gijón y Avilés por 145 € IVA incl. Penitenciales o confirmatorias entre particulares — sin comisión de inmobiliaria. Gestor por teléfono antes de firmar. Entrega 48-72 h.`,
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
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    heroBadge: "Arras entre particulares · Sevilla",
    heroH1: "Contrato de arras en Sevilla entre particulares — gestoría online, no agencia",
    metaTitle: `Contrato de arras Sevilla entre particulares — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. | Livendia`,
    metaDescription:
      `¿Compras o vendes sin inmobiliaria en Sevilla? Arras penitenciales o confirmatorias por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestor asignado, trámite online. Triana, Nervión, Los Remedios.`,
    keywords: [
      "contrato arras sevilla entre particulares",
      "tramitar arras sevilla sin agencia",
      "gestor contrato arras sevilla",
      "arras penitenciales sevilla particular",
      "contrato arras triana",
      "firmar arras nervion sevilla",
      "gestoria arras sevilla precio",
    ],
    heroLead:
      "¿Ya tienes comprador o vendedor en Sevilla — por Idealista, recomendación o porque os conocíais — y no quieres pagar miles a una agencia solo por las arras? Por 145 € IVA incl. Livendia asigna un gestor experto: trámite 100 % online, asesoramiento constante y contrato art. 1454 CC antes de entregar la señal.",
    whyIntro:
      "Triana, Nervión, Los Remedios y Macarena concentran compraventas rápidas entre particulares. Las plantillas genéricas no contemplan plazos de comunidad, herencia pendiente o hipoteca sin cláusula de protección — ahí se pierden miles en señal mal calibrada.",
    howIntro:
      "Cuatro fases con gestor dedicado: diagnóstico online, detección de riesgos, redacción equilibrada y firma informada en Sevilla capital o área metropolitana.",
    testimonialsTitle: "Particulares en Sevilla que tramitaron sus arras con Livendia",
    testimonials: [
      {
        quote:
          "Vendíamos en Triana entre particulares. La agencia pedía 8.000 € de comisión; Livendia redactó las arras por 145 € y el gestor nos explicó el art. 1454 en la llamada.",
        author: "Rafa G.",
        role: "Vendedor · Triana",
      },
      {
        quote:
          "Comprábamos en Nervión con hipoteca. El borrador no tenía cláusula de financiación — el gestor la incluyó antes de transferir la señal.",
        author: "Elena & Jorge",
        role: "Compradores · Nervión",
      },
    ],
    finalCtaLead:
      "Arras justas en Sevilla entre particulares — 145 € IVA incl., gestor asignado, panel digital.",
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    heroBadge: "Arras entre particulares · Málaga",
    heroH1: "Contrato de arras en Málaga sin comisión de agencia — gestoría Livendia",
    metaTitle: `Contrato arras Málaga entre particulares — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `Arras penitenciales o confirmatorias en Málaga por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestor online asignado. Centro, Teatinos, El Palo. Sin comisión inmobiliaria.`,
    keywords: [
      "contrato arras malaga entre particulares",
      "tramitar arras malaga sin agencia",
      "gestor arras malaga",
      "arras penitenciales malaga",
      "contrato arras teatinos",
      "firmar arras el palo",
      "gestoria arras malaga precio",
    ],
    heroLead:
      "¿Cerraste precio en Málaga entre particulares y te pasan un PDF de arras sin revisar? Livendia no es agencia: gestoría por 145 € IVA incl., trámite online, asesor experto que responde dudas hasta la firma — Centro, Teatinos, El Palo o Carretera de Cádiz.",
    whyIntro:
      "En Málaga capital conviven segunda residencia, mercado universitario y compradores internacionales. Sin gestor, las arras copiadas de otra ciudad ignoran comunidad, ITE o cláusula de hipoteca — riesgo directo para tu señal.",
    howIntro:
      "Contratas online, tu gestor te llama en 24-48 h, redacta o corrige arras en 48-72 h y te acompaña por WhatsApp y panel hasta rubricar.",
    testimonialsTitle: "Compradores y vendedores en Málaga con arras tramitadas por Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Teatinos sin agencia. Livendia costó 145 € frente a lo que pedía una inmobiliaria solo por redactar — y el gestor aclaró penitenciales vs confirmatorias.",
        author: "Iván L.",
        role: "Comprador · Teatinos",
      },
      {
        quote:
          "Vendía en El Palo entre particulares. El gestor incluyó calendario de cancelación de hipoteca realista y cláusulas de comunidad claras.",
        author: "Carmen P.",
        role: "Vendedora · El Palo",
      },
    ],
    finalCtaLead:
      "Cierra tus arras en Málaga con gestoría profesional — no miles de euros de comisión de agencia.",
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    heroBadge: "Arras entre particulares · Zaragoza",
    heroH1: "Tramitar contrato de arras en Zaragoza entre particulares — gestor online",
    metaTitle: `Contrato de arras Zaragoza — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. | Livendia`,
    metaDescription:
      `Arras entre particulares en Zaragoza: gestor asignado, trámite online, ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Actur, Delicias, Casco Histórico. Sin comisión de agencia.`,
    keywords: [
      "contrato arras zaragoza entre particulares",
      "tramitar arras zaragoza sin agencia",
      "gestor contrato arras zaragoza",
      "arras penitenciales zaragoza",
      "contrato arras actur",
      "firmar arras delicias zaragoza",
      "gestoria arras zaragoza",
    ],
    heroLead:
      "¿Compras o vendes en Zaragoza sin inmobiliaria? Por 145 € IVA incl. un gestor Livendia se asigna a tu expediente: arras penitenciales o confirmatorias redactadas online, asesoramiento constante y consultas resueltas antes de entregar la señal — Actur, Delicias o Casco Histórico.",
    whyIntro:
      "Zaragoza cierra operaciones rápidas entre particulares cuando el precio es competitivo. El error más caro: arras del art. 1454 CC mal explicadas, sin cláusula de hipoteca o con plazos imposibles de documentación.",
    howIntro:
      "Cuatro hitos digitales: contratación, llamada con gestor experto, entrega de contrato y firma informada en Zaragoza o área metropolitana.",
    testimonialsTitle: "Particulares en Zaragoza que pasaron sus arras por Livendia",
    testimonials: [
      {
        quote:
          "Encontramos piso en Actur por Idealista. Livendia revisó las arras en 48 h — el gestor detectó una penalidad desproporcionada antes de la señal.",
        author: "Miguel Á.",
        role: "Comprador · Actur",
      },
      {
        quote:
          "Vendíamos en Delicias entre particulares. 145 € por gestoría frente a lo que pedía una agencia por el mismo trámite contractual.",
        author: "Lucía & Hugo",
        role: "Vendedores · Delicias",
      },
    ],
    finalCtaLead:
      "Arras en Zaragoza con gestoría Livendia — 145 € IVA incl., trámite online, sin comisión sobre el precio.",
  },
  {
    slug: "palma",
    city: "Palma de Mallorca",
    schemaAdministrativeArea: "Islas Baleares",
    heroBadge: "Arras entre particulares · Palma",
    heroH1: "Contrato de arras en Palma de Mallorca — gestoría online para particulares",
    metaTitle: `Contrato arras Palma de Mallorca — ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} | Livendia`,
    metaDescription:
      `Arras entre particulares en Palma por ${CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. Gestor asignado, trámite online. Eixample, Son Espanyolet, Santa Catalina. Sin agencia.`,
    keywords: [
      "contrato arras palma de mallorca",
      "tramitar arras palma entre particulares",
      "gestor arras mallorca",
      "arras penitenciales palma",
      "contrato arras son espanyolet",
      "firmar arras santa catalina palma",
      "gestoria arras baleares",
    ],
    heroLead:
      "¿Compras o vendes en Palma entre particulares sin pagar comisión de agencia sobre cientos de miles de euros? Livendia tramita arras por 145 € IVA incl.: gestor experto asignado, panel digital, asesoramiento constante y contrato adaptado a tu piso en Eixample, Son Espanyolet o Santa Catalina.",
    whyIntro:
      "Palma mueve operaciones con compradores nacionales e internacionales, herencias y segundas residencias. Las plantillas peninsulares sin adaptar generan conflictos sobre comunidad, registro o financiación antes de notaría.",
    howIntro:
      "Trámite 100 % online: contratas, hablas con tu gestor, recibes arras en 48-72 h y resuelves dudas hasta la firma en Palma.",
    testimonialsTitle: "Particulares en Palma que cerraron arras con Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Son Espanyolet sin agencia. El gestor redactó cláusula de hipoteca y explicó penitenciales por teléfono — todo por 145 € IVA incl.",
        author: "Marina K.",
        role: "Compradora · Son Espanyolet",
      },
      {
        quote:
          "Vendíamos en Santa Catalina entre particulares. Livendia equilibró las arras cuando el comprador traía un borrador desequilibrado.",
        author: "Toni V.",
        role: "Vendedor · Santa Catalina",
      },
    ],
    finalCtaLead:
      "Firma arras en Palma con gestoría Livendia — económico, online y con asesor experto dedicado.",
  },
];
