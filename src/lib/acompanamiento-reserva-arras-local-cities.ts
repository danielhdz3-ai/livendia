/**
 * Landings SEO: acompañamiento reserva hasta arras por ciudad (compradores).
 * Rutas: /servicios/acompanamiento-reserva-arras-local/[slug]
 */
import { ACOMPANAMIENTO_RESERVA_ARRAS_PRICE_LABEL } from "@/lib/catalog.public";
import { localContratoArrasHref } from "@/lib/contrato-arras-local-cities";
import { localRevisionDocumentalPostArrasHref } from "@/lib/revision-documental-post-arras-local-cities";
import { localServicioCompletoCompraHref } from "@/lib/servicio-completo-compra-local-cities";

export const ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE = "/servicios/acompanamiento-reserva-arras-local";

export const ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "malaga",
  "sevilla",
  "bilbao",
  "granada",
  "zaragoza",
] as const;

export function isAcompanamientoReservaArrasLocalSlugPublished(slug: string): boolean {
  return ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedAcompanamientoReservaArrasLocalCities(): AcompanamientoReservaArrasLocalCityDefinition[] {
  const pub = new Set(ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_PUBLISHED_SLUGS);
  return ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type AcompanamientoReservaArrasLocalLandingConfig = {
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
  servicioCompletoCompraLocalHref?: string;
  revisionPostArrasLocalHref?: string;
  contratoArrasLocalHref?: string;
};

export type AcompanamientoReservaArrasLocalCityDefinition = Omit<
  AcompanamientoReservaArrasLocalLandingConfig,
  "path"
> & {
  slug: string;
};

export function localAcompanamientoReservaArrasHref(slug: string): string {
  return `${ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_BASE}/${slug}`;
}

export function toAcompanamientoReservaArrasLandingConfig(
  def: AcompanamientoReservaArrasLocalCityDefinition,
): AcompanamientoReservaArrasLocalLandingConfig {
  return {
    ...def,
    path: localAcompanamientoReservaArrasHref(def.slug),
  };
}

export function getAcompanamientoReservaArrasLocalCity(
  slug: string,
): AcompanamientoReservaArrasLocalCityDefinition | undefined {
  return ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_CITIES.find((c) => c.slug === slug);
}

const PRICE = ACOMPANAMIENTO_RESERVA_ARRAS_PRICE_LABEL;
const HERO = "/images/familia1.jpg";

export const ACOMPANAMIENTO_RESERVA_ARRAS_LOCAL_CITIES: AcompanamientoReservaArrasLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    placeLabel: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    metaTitle: `Acompañamiento reserva hasta arras en Madrid — ${PRICE} | Livendia`,
    metaDescription: `Asesoramiento jurídico desde la reserva hasta las arras en Madrid: nota registral, urbanismo y borrador de arras. ${PRICE} IVA incl.`,
    heroLead:
      "¿Has encontrado piso con otro particular en Madrid y te piden firmar reserva o entregar señal? Un gestor Livendia revisa el documento, la nota registral y el urbanismo antes de que el dinero quede vinculante, y te acompaña hasta un contrato de arras coherente con lo acordado.",
    regulatoryBlock:
      "En Madrid capital y área metropolitana las operaciones entre particulares suelen ir rápido: reservas con plazos cortos, arras penitenciales estándar y poca revisión registral previa. Contrastamos titularidad, cargas e hipotecas pendientes, y comprobamos que la reserva no imponga penalizaciones desproporcionadas ni plazos irreales hasta escritura.",
    marketContext:
      "Chamberí, Salamanca, Tetuán, Vallecas o municipios del corredor del Henares concentran compras entre particulares con mucha presión de tiempo. Las plantillas de reserva se repiten sin adaptar al inmueble concreto; conviene revisarlas antes de transferir la señal.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Madrid — compradores Livendia",
    servicioCompletoCompraLocalHref: localServicioCompletoCompraHref("madrid"),
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("madrid"),
    contratoArrasLocalHref: localContratoArrasHref("madrid"),
    testimonialsTitle: "Compradores en Madrid que revisaron reserva y arras con Livendia",
    testimonials: [
      {
        quote:
          "La agencia nos metió prisa con la reserva. Livendia detectó una penalización desproporcionada y un plazo de financiación que no cuadraba con nuestro banco antes de ingresar la señal.",
        author: "Patricia & Iván",
        role: "Compradores · Chamberí, Madrid",
      },
      {
        quote:
          "Comprábamos entre particulares en Vallecas. El gestor revisó la nota registral y vimos una carga que el vendedor no había mencionado; negociamos condiciones suspensivas razonables.",
        author: "Miguel R.",
        role: "Comprador · Madrid",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis compras en el área metropolitana de Madrid?",
        answer:
          "Sí. El servicio es online: puedes contratar desde Madrid capital, Pozuelo, Getafe, Móstoles u otros municipios del área.",
      },
      {
        question: "¿Qué pasa si ya transferí la señal de reserva?",
        answer:
          "Podemos revisar el texto vigente y orientarte sobre riesgos y próximos pasos hacia las arras, aunque lo ideal es contratar antes de pagar.",
      },
    ],
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    placeLabel: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Acompañamiento reserva hasta arras en Barcelona — ${PRICE} | Livendia`,
    metaDescription: `Reserva y arras en Barcelona entre particulares: revisión registral, urbanismo y borrador de arras. ${PRICE} IVA incl.`,
    heroLead:
      "Compras entre particulares en Barcelona y ya tienes reserva o borrador de arras: Livendia revisa el documento, la situación registral y los indicios urbanísticos antes de que firmes, con un gestor dedicado hasta las arras.",
    regulatoryBlock:
      "En Cataluña conviven operaciones con cédula de habitabilidad, ITE y normativa local que afecta a la compra. Revisamos que la reserva y el borrador de arras reflejen el estado real del inmueble y que las condiciones suspensivas cubran licencias o cargas relevantes antes de comprometer importes elevados.",
    marketContext:
      "Eixample, Gràcia, Sant Martí o Les Corts mezclan compras entre particulares y operaciones con intermediarios. En Barcelona es frecuente recibir reservas copiadas de internet sin contrastar con la nota registral ni con el estado del edificio.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Barcelona — Livendia",
    servicioCompletoCompraLocalHref: localServicioCompletoCompraHref("barcelona"),
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("barcelona"),
    contratoArrasLocalHref: localContratoArrasHref("barcelona"),
    testimonialsTitle: "Compradores en Barcelona que pasaron reserva y arras por Livendia",
    testimonials: [
      {
        quote:
          "El vendedor nos pasó una reserva con plazos imposibles para la hipoteca. El gestor nos ayudó a replantear condiciones antes de la señal en Eixample.",
        author: "Laura & Marc",
        role: "Compradores · Barcelona",
      },
      {
        quote:
          "No entendíamos la nota registral. Livendia tradujo cargas y nos indicó qué pedir en el contrato de arras antes de firmar.",
        author: "Sílvia P.",
        role: "Compradora · Gràcia",
      },
    ],
    faqLocal: [
      {
        question: "¿Revisáis cédula de habitabilidad e ITE en Barcelona?",
        answer:
          "Comprobamos indicios urbanísticos básicos y señalamos qué documentación conviene exigir antes de las arras; la revisión profunda post-arras puede encajar en otro servicio.",
      },
      {
        question: "¿Trabajáis con compras sin agencia inmobiliaria?",
        answer: "Sí. Es nuestro foco: comprador y vendedor particulares con gestor Livendia como tercero profesional.",
      },
    ],
  },
  {
    slug: "valencia",
    city: "Valencia",
    placeLabel: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: `Acompañamiento reserva hasta arras en Valencia — ${PRICE} | Livendia`,
    metaDescription: `Reserva hasta arras en Valencia: revisión registral, reserva y borrador de arras entre particulares. ${PRICE} IVA incl.`,
    heroLead:
      "Has negociado un piso en Valencia con otro particular y te piden reserva o señal: Livendia revisa el documento, contrasta la nota registral y te acompaña hasta un contrato de arras coherente con el precio y plazos acordados.",
    regulatoryBlock:
      "En la Comunidad Valenciana las compras entre particulares suelen combinar reserva verbal, transferencia de señal y arras penitenciales sin revisión registral previa. Verificamos titularidad, hipotecas, usufructos o limitaciones que debas conocer antes de pagar.",
    marketContext:
      "Ruzafa, Benimaclet, Ciutat Vella o Campanar tienen alta rotación de compradores primerizos. Las reservas genéricas suelen omitir gastos, plazos de cancelación o qué ocurre si la hipoteca no sale; la revisión previa evita sorpresas.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Valencia — Livendia",
    servicioCompletoCompraLocalHref: localServicioCompletoCompraHref("valencia"),
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("valencia"),
    contratoArrasLocalHref: localContratoArrasHref("valencia"),
    testimonialsTitle: "Compradores en Valencia que revisaron reserva y arras",
    testimonials: [
      {
        quote:
          "Comprábamos en Ruzafa entre particulares. Livendia señaló lagunas en la reserva sobre quién pagaba la plusvalía si la operación no seguía.",
        author: "Elena C.",
        role: "Compradora · Valencia",
      },
      {
        quote:
          "Primera compra y no sabíamos leer la nota registral. El gestor nos explicó cargas y plazos razonables para las arras.",
        author: "David S.",
        role: "Comprador · Benimaclet",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis compras en la huerta y municipios del área metropolitana?",
        answer:
          "Sí. El servicio es 100 % online desde Valencia capital, Paterna, Torrent, Mislata u otros municipios.",
      },
      {
        question: "¿Incluye redactar las arras desde cero?",
        answer:
          "Incluye ajuste o redacción del borrador alineado con lo revisado; si solo necesitas arras sin tramo reserva, también puedes contratar arras penitenciales por separado.",
      },
    ],
  },
  {
    slug: "malaga",
    city: "Málaga",
    placeLabel: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Acompañamiento reserva hasta arras en Málaga — ${PRICE} | Livendia`,
    metaDescription: `Reserva y arras en Málaga entre particulares: nota registral, urbanismo y acompañamiento gestor. ${PRICE} IVA incl.`,
    heroLead:
      "Compras un piso en Málaga o la Costa del Sol con otro particular y ya tienes reserva: Livendia revisa el documento, la nota registral y el urbanismo básico antes de que transfieras la señal, y te acompaña hasta las arras.",
    regulatoryBlock:
      "En Málaga conviven operaciones de vivienda habitual, segundas residencias y propiedades con licencias turísticas previas. Revisamos coherencia entre lo acordado verbalmente, la reserva escrita y la situación registral del inmueble.",
    marketContext:
      "Málaga capital, Teatinos y municipios costeros concentran compras con plazos ajustados en temporada alta. Es habitual recibir reservas sin condiciones suspensivas claras si la financiación o la tasación fallan.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Málaga — Livendia",
    servicioCompletoCompraLocalHref: localServicioCompletoCompraHref("malaga"),
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("malaga"),
    contratoArrasLocalHref: localContratoArrasHref("malaga"),
    testimonialsTitle: "Compradores en Málaga que revisaron reserva y arras",
    testimonials: [
      {
        quote:
          "Comprábamos en Teatinos entre particulares. Livendia revisó la reserva y propuso condiciones suspensivas razonables para la hipoteca.",
        author: "Sara L.",
        role: "Compradora · Málaga",
      },
      {
        quote:
          "El vendedor quería señal inmediata sin revisar cargas. El informe registral nos permitió negociar con datos concretos.",
        author: "Antonio G.",
        role: "Comprador · Málaga capital",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis compras en la Costa del Sol?",
        answer:
          "Sí. Puedes contratar desde Málaga, Torremolinos, Fuengirola o Marbella; el análisis es el mismo.",
      },
      {
        question: "¿Cuánto tarda la primera revisión en Málaga?",
        answer: `Normalmente en plazos laborables tras recibir reserva y datos del inmueble. Tarifa fija ${PRICE} IVA incl.`,
      },
    ],
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    placeLabel: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Acompañamiento reserva hasta arras en Sevilla — ${PRICE} | Livendia`,
    metaDescription: `Reserva hasta arras en Sevilla: revisión registral, reserva y borrador entre particulares. ${PRICE} IVA incl.`,
    heroLead:
      "Has encontrado vivienda en Sevilla con otro particular y te piden firmar reserva: Livendia analiza el documento, la nota registral y te guía hasta un contrato de arras coherente antes de comprometer importes relevantes.",
    regulatoryBlock:
      "En Sevilla las operaciones entre particulares suelen usar reservas breves y arras penitenciales estándar. Revisamos penalizaciones, plazos hasta escritura, reparto de gastos si la operación no continúa y coherencia con el precio negociado.",
    marketContext:
      "Nervión, Triana, Los Remedios o Macarena combinan compradores primerizos y operaciones familiares. Las reservas copiadas de internet suelen dejar fuera la hipoteca, la plusvalía o cargas registrales.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Sevilla — Livendia",
    servicioCompletoCompraLocalHref: localServicioCompletoCompraHref("sevilla"),
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("sevilla"),
    contratoArrasLocalHref: localContratoArrasHref("sevilla"),
    testimonialsTitle: "Compradores en Sevilla que pasaron reserva y arras por Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Nervión entre particulares. Livendia detectó un plazo de arras incompatible con nuestra aprobación hipotecaria.",
        author: "María J.",
        role: "Compradora · Sevilla",
      },
      {
        quote:
          "No sabíamos si la señal de reserva era recuperable. El gestor nos explicó riesgos y condiciones antes de transferir.",
        author: "Raúl T.",
        role: "Comprador · Triana",
      },
    ],
    faqLocal: [
      {
        question: "¿Sirve si compro con ayuda de un familiar sin agencia?",
        answer:
          "Sí. Livendia actúa como tercero profesional aunque la negociación sea entre particulares sin intermediario comercial.",
      },
      {
        question: "¿Incluye escritura en notaría?",
        answer:
          "No. Este pack cubre reserva–arras; para acompañamiento hasta escritura existe el servicio completo de compra.",
      },
    ],
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    placeLabel: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    metaTitle: `Acompañamiento reserva hasta arras en Bilbao — ${PRICE} | Livendia`,
    metaDescription: `Reserva y arras en Bilbao entre particulares: nota registral, urbanismo y gestor dedicado. ${PRICE} IVA incl.`,
    heroLead:
      "Compras vivienda en Bilbao con otro particular y ya tienes reserva o borrador de arras: Livendia revisa el expediente registral, la reserva y te acompaña hasta un contrato de arras alineado con lo acordado.",
    regulatoryBlock:
      "En el País Vasco las compras entre particulares comparten el marco registral estatal, pero es frecuente ver reservas con plazos cortos y arras sin contrastar cargas o situación de comunidad. Verificamos titularidad, hipotecas y coherencia de condiciones económicas.",
    marketContext:
      "Deusto, Indautxu, Abando y el entorno de la ría concentran operaciones con compradores que buscan estabilidad. El mercado es menos frenético que Madrid o Barcelona, pero las plantillas genéricas siguen generando conflictos en el tramo reserva–arras.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Bilbao — Livendia",
    servicioCompletoCompraLocalHref: localServicioCompletoCompraHref("bilbao"),
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("bilbao"),
    testimonialsTitle: "Compradores en Bilbao que revisaron reserva y arras",
    testimonials: [
      {
        quote:
          "Comprábamos en Indautxu entre particulares. Livendia revisó la reserva y la nota registral antes de la señal; detectamos una hipoteca que debía cancelarse antes de arras.",
        author: "Ane M.",
        role: "Compradora · Bilbao",
      },
      {
        quote:
          "El vendedor quería arras confirmatorias sin plazo claro de escritura. El gestor propuso un calendario razonable.",
        author: "Jon I.",
        role: "Comprador · Deusto",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis compras en el Gran Bilbao?",
        answer:
          "Sí. Puedes contratar desde Bilbao, Getxo, Barakaldo u otros municipios; el servicio es online.",
      },
      {
        question: "¿Qué documentación necesito para empezar?",
        answer:
          "Reserva o borrador, datos del inmueble y, si los tienes, nota registral o referencia catastral. El gestor te indica qué falta tras contratar.",
      },
    ],
  },
  {
    slug: "granada",
    city: "Granada",
    placeLabel: "Granada",
    schemaAdministrativeArea: "Andalucía",
    metaTitle: `Acompañamiento reserva hasta arras en Granada — ${PRICE} | Livendia`,
    metaDescription: `Reserva hasta arras en Granada: revisión registral y acompañamiento gestor entre particulares. ${PRICE} IVA incl.`,
    heroLead:
      "Has negociado un piso en Granada con otro particular y te piden reserva o señal: Livendia revisa el documento, contrasta la nota registral y te acompaña hasta las arras con un gestor dedicado.",
    regulatoryBlock:
      "En Granada conviven vivienda habitual, pisos para estudiantes cerca de la UGR y segundas residencias. Revisamos que la reserva y el borrador de arras reflejen el régimen real del inmueble y que las penalizaciones sean proporcionadas.",
    marketContext:
      "Realejo, Zaidín, Chana o el centro histórico mezclan compradores locales y de otras provincias. Las reservas entre particulares suelen omitir condiciones sobre licencias, estado de la vivienda o plazos de financiación.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Granada — Livendia",
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("granada"),
    testimonialsTitle: "Compradores en Granada que revisaron reserva y arras",
    testimonials: [
      {
        quote:
          "Comprábamos cerca de la UGR entre particulares. Livendia revisó la reserva y señaló cláusulas confusas sobre el estado del piso.",
        author: "Carmen V.",
        role: "Compradora · Granada",
      },
      {
        quote:
          "Primera compra y mucha prisa del vendedor. El gestor nos dio tiempo para entender la nota registral antes de la señal.",
        author: "Pablo N.",
        role: "Comprador · Zaidín",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis compras en la provincia de Granada?",
        answer:
          "Sí. El servicio es online desde Granada capital, Armilla, Maracena u otros municipios.",
      },
      {
        question: "¿Puedo pasar después a revisión post-arras?",
        answer:
          "Sí. Una vez firmadas las arras puedes contratar revisión documental post-arras si necesitas comprobar derramas, ITE o cargas antes de escriturar.",
      },
    ],
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    placeLabel: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    metaTitle: `Acompañamiento reserva hasta arras en Zaragoza — ${PRICE} | Livendia`,
    metaDescription: `Reserva y arras en Zaragoza entre particulares: nota registral, reserva y gestor Livendia. ${PRICE} IVA incl.`,
    heroLead:
      "Compras vivienda en Zaragoza con otro particular y ya tienes reserva: Livendia revisa el documento, la nota registral y el urbanismo básico antes de que transfieras la señal, y te acompaña hasta un contrato de arras coherente.",
    regulatoryBlock:
      "En Zaragoza las operaciones entre particulares suelen usar reservas sencillas y arras penitenciales. Contrastamos titularidad, cargas, plazos hasta escritura y reparto de gastos si la operación no continúa, especialmente en edificios con derramas o limitaciones registrales.",
    marketContext:
      "Centro, Delicias, Actur o Valdespartera concentran compradores primerizos y familias. El mercado es más estable que en grandes capitales, pero las reservas genéricas siguen siendo un riesgo si no se contrastan con la realidad del inmueble.",
    heroImage: HERO,
    heroImageAlt: "Acompañamiento reserva hasta arras en Zaragoza — Livendia",
    servicioCompletoCompraLocalHref: localServicioCompletoCompraHref("zaragoza"),
    revisionPostArrasLocalHref: localRevisionDocumentalPostArrasHref("zaragoza"),
    contratoArrasLocalHref: localContratoArrasHref("zaragoza"),
    testimonialsTitle: "Compradores en Zaragoza que pasaron reserva y arras por Livendia",
    testimonials: [
      {
        quote:
          "Comprábamos en Actur entre particulares. Livendia revisó la reserva y propuso condiciones claras sobre la hipoteca antes de la señal.",
        author: "Lucía F.",
        role: "Compradora · Zaragoza",
      },
      {
        quote:
          "No entendíamos las penalizaciones de la reserva. El gestor las tradujo y negociamos cambios con el vendedor.",
        author: "Héctor D.",
        role: "Comprador · Delicias",
      },
    ],
    faqLocal: [
      {
        question: "¿Atendéis compras en la provincia de Zaragoza?",
        answer:
          "Sí. Puedes contratar desde Zaragoza capital u otros municipios; todo el proceso es online.",
      },
      {
        question: "¿Cuál es la diferencia con el servicio completo de compra?",
        answer:
          "Este pack cubre solo reserva–arras (424 €). El servicio completo (890 €) incluye acompañamiento hasta escritura.",
      },
    ],
  },
];
