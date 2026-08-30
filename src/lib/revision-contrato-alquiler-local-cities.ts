/**
 * Landings SEO: revisión de contrato de alquiler por ciudad (inquilinos).
 * Rutas: /servicios/revision-contrato-alquiler-local/[slug]
 */
import { REVISION_CONTRATO_ALQUILER_PRICE_LABEL } from "@/lib/catalog.public";
import { localAcompanamientoAlquilerHref } from "@/lib/acompanamiento-alquiler-local-cities";
import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";

export const REVISION_CONTRATO_ALQUILER_LOCAL_BASE = "/servicios/revision-contrato-alquiler-local";

export const REVISION_CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "malaga",
  "sevilla",
  "bilbao",
  "granada",
  "zaragoza",
] as const;

export function isRevisionContratoAlquilerLocalSlugPublished(slug: string): boolean {
  return REVISION_CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedRevisionContratoAlquilerLocalCities(): RevisionContratoAlquilerLocalCityDefinition[] {
  const pub = new Set(REVISION_CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS);
  return REVISION_CONTRATO_ALQUILER_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type RevisionContratoAlquilerLocalLandingConfig = {
  path: string;
  city: string;
  placeLabel: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  regulatoryBlock: string;
  marketContext: string;
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
  faqLocal: readonly { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  contratoAlquilerLocalHref?: string;
  acompanamientoAlquilerLocalHref?: string;
};

export type RevisionContratoAlquilerLocalCityDefinition = Omit<
  RevisionContratoAlquilerLocalLandingConfig,
  "path"
> & {
  slug: string;
};

export function localRevisionContratoAlquilerHref(slug: string): string {
  return `${REVISION_CONTRATO_ALQUILER_LOCAL_BASE}/${slug}`;
}

export function toRevisionContratoAlquilerLandingConfig(
  def: RevisionContratoAlquilerLocalCityDefinition,
): RevisionContratoAlquilerLocalLandingConfig {
  return {
    ...def,
    path: localRevisionContratoAlquilerHref(def.slug),
  };
}

export function getRevisionContratoAlquilerLocalCity(
  slug: string,
): RevisionContratoAlquilerLocalCityDefinition | undefined {
  return REVISION_CONTRATO_ALQUILER_LOCAL_CITIES.find((c) => c.slug === slug);
}

const PRICE = REVISION_CONTRATO_ALQUILER_PRICE_LABEL;
const HERO = "/images/gestora2.jpg";

export const REVISION_CONTRATO_ALQUILER_LOCAL_CITIES: RevisionContratoAlquilerLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    placeLabel: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    metaTitle: `Revisión de contrato de alquiler en Madrid — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Madrid: detectamos cláusulas abusivas antes de firmar. Informe PDF + llamada. ${PRICE} IVA incl.`,
    heroLead:
      "¿Te han enviado un borrador de contrato para un piso en Madrid? Los gestores de Livendia revisan cláusula a cláusula el documento — LAU, temporada o habitación — y te entregan un informe para negociar con el propietario antes de transferir la fianza.",
    regulatoryBlock:
      "En Madrid la fianza legal de un alquiler LAU de vivienda habitual es de un mes de renta (dos si el arrendador es persona jurídica). Cualquier cláusula que exija más, penalice la salida anticipada de forma desproporcionada o traslade al inquilino reparaciones estructurales suele ser revisable. Si el piso está en zona tensionada de la Comunidad de Madrid, también conviene comprobar que la renta respeta los límites aplicables.",
    marketContext:
      "Madrid concentra la mayor rotación de alquileres de España: Chamberí, Malasaña, Tetuán, Vallecas o Usera mezclan contratos entre particulares, agencias y plantillas genéricas. Muchos inquilinos firman a prisa por la presión del mercado; la revisión previa evita meses de conflicto sobre comunidad, suministros o devolución de fianza.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Madrid — gestora Livendia con inquilino",
    contratoAlquilerLocalHref: localContratoAlquilerHref("madrid"),
    acompanamientoAlquilerLocalHref: localAcompanamientoAlquilerHref("madrid"),
    testimonialsTitle: "Inquilinos en Madrid que revisaron su contrato antes de firmar",
    testimonials: [
      {
        quote:
          "El propietario me pasó un PDF de 20 páginas. Livendia señaló dos cláusulas ilegales sobre la comunidad y una penalización por salida que no cuadraba con la LAU. Negocié con el informe.",
        author: "Lucía H.",
        role: "Inquilina · Chamberí, Madrid",
      },
      {
        quote:
          "Era mi primer alquiler en Madrid y no sabía si la fianza de dos meses era normal. El gestor me lo explicó en la llamada de veredicto y pedí cambios antes de firmar.",
        author: "Jorge M.",
        role: "Inquilino · Tetuán",
      },
    ],
    faqLocal: [
      {
        question: "¿Puedo revisar un contrato si el piso está en un municipio del área metropolitana?",
        answer:
          "Sí. El servicio es online: subes el borrador desde cualquier punto de la Comunidad de Madrid y recibes informe en 24-48 h laborables.",
      },
      {
        question: "¿Revisáis alquileres de habitación en pisos compartidos?",
        answer:
          "Sí. En Madrid es habitual el piso compartido; revisamos reparto de gastos, zonas comunes y coherencia con el régimen de habitación.",
      },
    ],
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    placeLabel: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Revisión de contrato de alquiler en Barcelona — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Barcelona: INCASÒl, zona tensionada y cláusulas abusivas. ${PRICE} IVA incl.`,
    heroLead:
      "Antes de firmar un alquiler en Barcelona, revisa el borrador con un especialista: comprobamos fianza INCASÒl, topes de renta en zona tensionada, gastos y cláusulas que suelen generar conflictos en el mercado catalán.",
    regulatoryBlock:
      "En Barcelona la fianza debe depositarse en el INCASÒl (Institut Català del Sòl), no en la cuenta del propietario, en un plazo máximo de dos meses. Además, Barcelona está en zona de mercado residencial tensionado: los contratos nuevos deben respetar límites de renta y declarar la renta del contrato anterior. Revisamos que el borrador cumpla estos puntos antes de que transfieras dinero.",
    marketContext:
      "El mercado barcelonés mezcla alquiler de larga duración, habitación en piso compartido y estancias temporales reguladas. Eixample, Gràcia, Sant Martí o Les Corts tienen alta demanda y muchos contratos copiados de internet; la revisión previa es especialmente útil si no dominas la normativa catalana.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Barcelona — gestora Livendia",
    contratoAlquilerLocalHref: localContratoAlquilerHref("barcelona"),
    acompanamientoAlquilerLocalHref: localAcompanamientoAlquilerHref("barcelona-les-corts"),
    testimonialsTitle: "Inquilinos en Barcelona que revisaron su contrato",
    testimonials: [
      {
        quote:
          "No sabía lo del INCASÒl ni la renta anterior obligatoria. El informe de Livendia me sirvió para pedir cambios al propietario antes de la señal.",
        author: "Martí P.",
        role: "Inquilino · Gràcia, Barcelona",
      },
      {
        quote:
          "Alquilaba habitación en un piso compartido. Revisaron convivencia, limpieza y facturas compartidas; evité firmar algo incompleto.",
        author: "Aina R.",
        role: "Inquilina · Eixample",
      },
    ],
    faqLocal: [
      {
        question: "¿Qué revisáis específicamente en Barcelona?",
        answer:
          "Depósito en INCASÒl, información de renta anterior en zona tensionada, reparto de gastos, duración del contrato y cláusulas de salida o reformas a cargo del inquilino.",
      },
      {
        question: "¿Sirve para contratos de temporada en Barcelona?",
        answer:
          "Sí. Revisamos que la duración, la fianza y las obligaciones encajen con un alquiler temporal y no con un LAU disfrazado.",
      },
    ],
  },
  {
    slug: "valencia",
    city: "Valencia",
    placeLabel: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: `Revisión de contrato de alquiler en Valencia — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Valencia: informe antes de firmar. Ruzafa, Benimaclet, Ciutat Vella. ${PRICE} IVA incl.`,
    heroLead:
      "Si vas a alquilar en Valencia y ya tienes el borrador del contrato, Livendia lo analiza antes de que firmes: fianza, actualización de renta, gastos de comunidad y cláusulas habituales en Ruzafa, Benimaclet, Ciutat Vella o cualquier barrio.",
    regulatoryBlock:
      "En la Comunidad Valenciana aplican las reglas LAU para vivienda habitual: fianza de un mes (dos si el arrendador es empresa), depósito adicional limitado y prohibición de cláusulas que impongan al inquilino obras estructurales. Revisamos también si el contrato mezcla indebidamente temporada y larga duración.",
    marketContext:
      "Valencia crece en alquiler entre particulares y pisos compartidos cerca de la UPV y la UV. Es frecuente recibir borradores con lagunas sobre suministros, mobiliario o preaviso; la revisión te da argumentos concretos para negociar.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Valencia — Livendia",
    contratoAlquilerLocalHref: localContratoAlquilerHref("valencia"),
    acompanamientoAlquilerLocalHref: localAcompanamientoAlquilerHref("valencia"),
    testimonialsTitle: "Inquilinos en Valencia que revisaron su contrato",
    testimonials: [
      {
        quote:
          "En Ruzafa el propietario quería que pagara la mitad de una reforma futura. El informe marcó la cláusula como problemática y la quitamos antes de firmar.",
        author: "Elena C.",
        role: "Inquilina · Ruzafa, Valencia",
      },
      {
        quote:
          "Primera vez compartiendo piso en Benimaclet. Revisaron el contrato de habitación y las normas de la cocina y el baño.",
        author: "David S.",
        role: "Inquilino · Benimaclet",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis alquileres en la huerta y municipios del área metropolitana?",
        answer:
          "Sí, el servicio es 100 % online. Puedes contratar desde Valencia capital o desde Paterna, Torrent, Mislata u otros municipios.",
      },
      {
        question: "¿Cuánto tarda la revisión en Valencia?",
        answer: `Normalmente 24-48 h laborables tras recibir el borrador completo. Tarifa fija ${PRICE} IVA incl.`,
      },
    ],
  },
  {
    slug: "malaga",
    city: "Málaga",
    placeLabel: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Revisión de contrato de alquiler en Málaga — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Málaga y Costa del Sol: LAU, temporada y habitación. ${PRICE} IVA incl.`,
    heroLead:
      "¿Te ofrecen un contrato para alquilar en Málaga, Teatinos o la Costa del Sol? Revisamos el borrador antes de firmar: detectamos cláusulas abusivas en alquileres de larga duración, temporada o habitación y te enviamos un informe para negociar.",
    regulatoryBlock:
      "En Málaga conviven alquileres LAU, estancias por temporada y contratos turísticos regulados de forma distinta. Revisamos que el documento que te envían corresponda al régimen real de la estancia y que la fianza, los gastos y las penalizaciones respeten la LAU cuando aplique.",
    marketContext:
      "Málaga combina demanda universitaria (UMA, Teatinos), profesionales en la capital y estancias estacionales en la costa. Los borradores genéricos suelen mezclar conceptos; conviene revisarlos antes de entregar la fianza.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Málaga — Livendia",
    contratoAlquilerLocalHref: localContratoAlquilerHref("malaga"),
    testimonialsTitle: "Inquilinos en Málaga que revisaron su contrato",
    testimonials: [
      {
        quote:
          "Me ofrecían un contrato de temporada de seis meses con obligaciones de un LAU de cinco años. Livendia me explicó la diferencia y pedí un documento acorde.",
        author: "Sara L.",
        role: "Inquilina · Teatinos, Málaga",
      },
      {
        quote:
          "El propietario incluía limpieza de piscina comunitaria en mis gastos. Con el informe negocié un reparto más justo.",
        author: "Antonio G.",
        role: "Inquilino · Málaga capital",
      },
    ],
    faqLocal: [
      {
        question: "¿Revisáis contratos en la Costa del Sol?",
        answer:
          "Sí. Puedes subir el borrador aunque el piso esté en Torremolinos, Fuengirola o Marbella; el análisis es el mismo.",
      },
      {
        question: "¿Incluye redactar un contrato nuevo?",
        answer:
          "No. Solo revisamos el borrador existente y entregamos informe. La redacción integral es otro servicio de Livendia.",
      },
    ],
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    placeLabel: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Revisión de contrato de alquiler en Sevilla — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Sevilla: Nervión, Triana, Macarena. Informe PDF. ${PRICE} IVA incl.`,
    heroLead:
      "Antes de firmar tu alquiler en Sevilla, deja que un gestor revise el contrato: Nervión, Triana, Los Remedios o Macarena — revisamos fianza, gastos, duración y cláusulas conflictivas en el borrador que te envía el propietario.",
    regulatoryBlock:
      "En Sevilla aplican las mismas bases LAU que en el resto de España para vivienda habitual. Prestamos especial atención a cláusulas sobre obras, comunidad, IBI mal repartido y penalizaciones por rescisión anticipada, muy frecuentes en borradores entre particulares.",
    marketContext:
      "Sevilla tiene fuerte demanda de estudiantes (US, UPO) y familias en barrios como Nervión o Triana. Muchos contratos circulan sin adaptación local; la revisión previa reduce disputas al finalizar el arrendamiento.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Sevilla — Livendia",
    contratoAlquilerLocalHref: localContratoAlquilerHref("sevilla"),
    testimonialsTitle: "Inquilinos en Sevilla que revisaron su contrato",
    testimonials: [
      {
        quote:
          "Compartía piso cerca de la US y el contrato no regulaba visitas ni limpieza. Livendia señaló los huecos y el propietario aceptó añadir un anexo.",
        author: "María J.",
        role: "Inquilina · Nervión, Sevilla",
      },
      {
        quote:
          "Me pedían dos meses de fianza más un mes extra «de garantía». El informe aclaró qué era legal y qué no.",
        author: "Raúl T.",
        role: "Inquilino · Triana",
      },
    ],
    faqLocal: [
      {
        question: "¿Revisáis contratos de habitación en pisos compartidos?",
        answer:
          "Sí. Es habitual en Sevilla cerca de campus universitarios; analizamos convivencia, gastos y preaviso.",
      },
      {
        question: "¿El servicio sustituye a un abogado?",
        answer:
          "Es una revisión gestoría inmobiliaria con informe y llamada de veredicto, no representación judicial.",
      },
    ],
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    placeLabel: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    metaTitle: `Revisión de contrato de alquiler en Bilbao — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Bilbao: Deusto, Indautxu, Abando. ${PRICE} IVA incl.`,
    heroLead:
      "¿Vas a alquilar en Bilbao y ya tienes el borrador? Livendia revisa cláusulas de fianza, gastos, duración y actualización de renta antes de que firmes, con informe detallado para negociar con el arrendador.",
    regulatoryBlock:
      "En el País Vasco el marco LAU es el mismo que en el resto del Estado para arrendamientos urbanos, pero es frecuente ver contratos con cláusulas sobre comunidad, ascensor o calefacción central mal repartidas. También revisamos coherencia entre fianza legal y depósitos adicionales.",
    marketContext:
      "Bilbao concentra demanda en Deusto, Indautxu, Abando y el entorno de la ría. El mercado es más estable que Madrid o Barcelona, pero los borradores entre particulares suelen ser plantillas genéricas que conviene ajustar.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Bilbao — Livendia",
    contratoAlquilerLocalHref: localContratoAlquilerHref("bilbao"),
    testimonialsTitle: "Inquilinos en Bilbao que revisaron su contrato",
    testimonials: [
      {
        quote:
          "El contrato obligaba a pintar el piso al salir con cualquier motivo. Livendia lo marcó como cláusula a negociar y el propietario aceptó matizarlo.",
        author: "Iker A.",
        role: "Inquilino · Deusto, Bilbao",
      },
      {
        quote:
          "Revisión rápida y clara. La llamada de veredicto me ayudó a entender qué era razonable firmar en Indautxu.",
        author: "Nerea B.",
        role: "Inquilina · Indautxu",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis alquileres en Getxo o el área metropolitana?",
        answer:
          "Sí. El servicio es online para cualquier municipio; subes el PDF desde tu panel Livendia.",
      },
      {
        question: "¿Puedo usar el informe para negociar con el propietario?",
        answer:
          "Sí. El PDF indica cláusulas a cambiar y argumentos comprensibles para la conversación con el arrendador.",
      },
    ],
  },
  {
    slug: "granada",
    city: "Granada",
    placeLabel: "Granada",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Revisión de contrato de alquiler en Granada — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Granada: Realejo, Zaidín, UGR. ${PRICE} IVA incl.`,
    heroLead:
      "Si alquilas en Granada —Realejo, Zaidín, Chana o cerca de la UGR— y ya tienes el borrador del contrato, Livendia lo revisa antes de firmar: cláusulas abusivas, fianza, habitación en piso compartido o temporada.",
    regulatoryBlock:
      "Granada mezcla alquiler para estudiantes, familias y estancias en el centro histórico. Revisamos que el régimen contractual (LAU, habitación o temporada) coincida con la estancia real y que la fianza y los gastos cumplan la LAU.",
    marketContext:
      "La demanda universitaria empuja muchos contratos de habitación con lagunas sobre zonas comunes, internet o limpieza. También aparecen alquileres turísticos mal encuadrados; la revisión previa evita sorpresas.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Granada — Livendia",
    contratoAlquilerLocalHref: localContratoAlquilerHref("granada"),
    testimonialsTitle: "Inquilinos en Granada que revisaron su contrato",
    testimonials: [
      {
        quote:
          "Contrato de habitación en piso compartido sin decir quién paga la fibra. El informe de Livendia lo dejó claro antes de firmar.",
        author: "Paula V.",
        role: "Inquilina · Realejo, Granada",
      },
      {
        quote:
          "Me preocupaba una cláusula de entrada de obras. El gestor me explicó el riesgo y negocié una redacción más justa.",
        author: "Hugo D.",
        role: "Inquilino · Zaidín",
      },
    ],
    faqLocal: [
      {
        question: "¿Revisáis alquileres cerca de la UGR?",
        answer:
          "Sí. Habitación, LAU o temporada: adaptamos el informe al tipo de contrato que te envían.",
      },
      {
        question: "¿Cuánto cuesta la revisión en Granada?",
        answer: `${PRICE} IVA incluido, tarifa plana publicada en Livendia.`,
      },
    ],
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    placeLabel: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    metaTitle: `Revisión de contrato de alquiler en Zaragoza — ${PRICE} | Livendia`,
    metaDescription: `Revisión de contrato de alquiler para inquilinos en Zaragoza: Delicias, Actur, centro. ${PRICE} IVA incl.`,
    heroLead:
      "¿Te han enviado un contrato para alquilar en Zaragoza? Revisamos el borrador antes de firmar: Delicias, Actur, el centro o cualquier barrio — informe con puntos a negociar y llamada con gestor especializado.",
    regulatoryBlock:
      "En Zaragoza predominan alquileres LAU entre particulares y contratos de habitación para estudiantes de la UNIZAR. Verificamos fianza legal, reparto de suministros, duración y cláusulas de salida o reparaciones que suelen generar conflictos.",
    marketContext:
      "El mercado zaragozano es más accesible que Madrid o Barcelona, pero los borradores copiados de internet siguen incluyendo cláusulas desactualizadas sobre actualización de renta o gastos de comunidad.",
    heroImage: HERO,
    heroImageAlt: "Revisión de contrato de alquiler en Zaragoza — Livendia",
    contratoAlquilerLocalHref: localContratoAlquilerHref("zaragoza"),
    testimonialsTitle: "Inquilinos en Zaragoza que revisaron su contrato",
    testimonials: [
      {
        quote:
          "En Actur el propietario me mandó un contrato con una penalización alta por salir antes de un año. Livendia me ayudó a negociar una redacción más equilibrada.",
        author: "Claudia F.",
        role: "Inquilina · Actur, Zaragoza",
      },
      {
        quote:
          "Primera vez alquilando en Delicias. El informe PDF fue fácil de entender y la llamada resolvió mis dudas sobre la fianza.",
        author: "Miguel R.",
        role: "Inquilino · Delicias",
      },
    ],
    faqLocal: [
      {
        question: "¿El servicio es solo para Zaragoza capital?",
        answer:
          "No. Puedes contratar desde cualquier municipio de Aragón; el análisis es del documento, no requiere visita presencial.",
      },
      {
        question: "¿Revisáis contratos de temporada en Zaragoza?",
        answer:
          "Sí. Comprobamos duración, fianza y obligaciones propias del alquiler temporal.",
      },
    ],
  },
];
