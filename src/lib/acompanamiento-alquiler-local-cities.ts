/**
 * Landings SEO: acompañamiento de alquiler por ciudad/zona.
 * Rutas: /servicios/acompanamiento-alquiler-local/[slug]
 */
import { ACOMPANAMIENTO_ALQUILER_PRICE_LABEL } from "@/lib/catalog.public";
import { localAdministracionAlquilerHref } from "@/lib/administracion-alquiler-local-cities";

export const ACOMPANAMIENTO_ALQUILER_LOCAL_BASE = "/servicios/acompanamiento-alquiler-local";

export const ACOMPANAMIENTO_ALQUILER_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "barcelona-les-corts",
  "hospitalet-de-llobregat",
  "madrid",
  "valencia",
] as const;

export function isAcompanamientoAlquilerLocalSlugPublished(slug: string): boolean {
  return ACOMPANAMIENTO_ALQUILER_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedAcompanamientoAlquilerLocalCities(): AcompanamientoAlquilerLocalCityDefinition[] {
  const pub = new Set(ACOMPANAMIENTO_ALQUILER_LOCAL_PUBLISHED_SLUGS);
  return ACOMPANAMIENTO_ALQUILER_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type AcompanamientoAlquilerLocalLandingConfig = {
  path: string;
  city: string;
  /** Etiqueta corta para H1 / breadcrumbs (puede ser barrio o municipio). */
  placeLabel: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  /** Bloque legal/regulatorio único (fianza + zona tensionada). */
  regulatoryBlock: string;
  marketContext: string;
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
  faqLocal: readonly { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  /** Enlace a administración de alquiler local si existe. */
  adminLocalHref?: string;
  proximityNote?: string;
};

export type AcompanamientoAlquilerLocalCityDefinition = Omit<
  AcompanamientoAlquilerLocalLandingConfig,
  "path"
> & {
  slug: string;
};

export function localAcompanamientoAlquilerHref(slug: string): string {
  return `${ACOMPANAMIENTO_ALQUILER_LOCAL_BASE}/${slug}`;
}

export function toAcompanamientoAlquilerLandingConfig(
  def: AcompanamientoAlquilerLocalCityDefinition,
): AcompanamientoAlquilerLocalLandingConfig {
  return {
    ...def,
    path: localAcompanamientoAlquilerHref(def.slug),
  };
}

export function getAcompanamientoAlquilerLocalCity(
  slug: string,
): AcompanamientoAlquilerLocalCityDefinition | undefined {
  return ACOMPANAMIENTO_ALQUILER_LOCAL_CITIES.find((c) => c.slug === slug);
}

const PRICE = ACOMPANAMIENTO_ALQUILER_PRICE_LABEL;

export const ACOMPANAMIENTO_ALQUILER_LOCAL_CITIES: AcompanamientoAlquilerLocalCityDefinition[] = [
  {
    slug: "barcelona-les-corts",
    city: "Barcelona",
    placeLabel: "Les Corts, Barcelona",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Acompañamiento alquiler Les Corts — ${PRICE}`,
    metaDescription: `Gestor de alquiler en Les Corts (Barcelona): fianza INCASÒL, zona tensionada, contrato y firma digital. ${PRICE} IVA incl. Livendia.`,
    heroLead:
      "Si alquilas en Les Corts —cerca de Diagonal, la zona universitaria o el entorno del Camp Nou— necesitas un gestor que ordene documentación, contrato y firma con la normativa catalana en mente. Livendia te acompaña desde el expediente online hasta que tú decides cerrar el servicio.",
    regulatoryBlock:
      "En Barcelona la fianza del alquiler no se queda en manos del propietario: debe depositarse en el INCASÒL (Institut Català del Sòl), el organismo de la Generalitat que gestiona las fianzas de alquiler en toda Cataluña, en un plazo máximo de dos meses desde la firma del contrato. Además, Barcelona está declarada zona de mercado residencial tensionado desde marzo de 2024 (vigente hasta marzo de 2027), lo que significa que los contratos nuevos tienen un tope de renta vinculado al contrato anterior o al índice de referencia, y el anuncio y el contrato deben informar obligatoriamente de la renta previa. Nuestro gestor revisa que tu contrato en Les Corts cumpla con estos límites antes de que firmes.",
    marketContext:
      "Les Corts es un distrito residencial y familiar, con demanda estable cerca de Diagonal, la zona universitaria y el entorno del Camp Nou. Según datos de oferta de Idealista (alrededor de 21,4 €/m² en 2026), el alquiler se sitúa en la franja alta de Barcelona, aunque por debajo de picos de publicación del Eixample. El perfil habitual combina parejas, familias y profesionales que priorizan tranquilidad frente a barrios más turísticos del centro.",
    proximityNote:
      "Nuestro equipo trabaja desde Les Corts (Carrer de Mejía Lequerica, 44): proximidad real si tu piso está en el distrito o en la zona limítrofe.",
    heroImage: "/images/tipo1.jpg",
    heroImageAlt: "Acompañamiento de alquiler en Les Corts, Barcelona — gestoría Livendia",
    adminLocalHref: localAdministracionAlquilerHref("barcelona"),
    testimonialsTitle: "Inquilinos acompañados en Les Corts y Barcelona",
    testimonials: [
      {
        quote:
          "Alquilaba cerca de Diagonal y el propietario hablaba de fianza «en su cuenta». Livendia me explicó el INCASÒL y revisó el tope de renta de zona tensionada antes de firmar.",
        author: "Clara V.",
        role: "Inquilina · Les Corts, Barcelona",
      },
      {
        quote:
          "Tenía el contrato casi listo pero nadie aclaraba la renta anterior. El gestor de Livendia lo dejó por escrito y firmamos digitalmente desde el expediente.",
        author: "Marc T.",
        role: "Inquilino · Les Corts",
      },
    ],
    faqLocal: [
      {
        question: "¿Les Corts está en zona tensionada?",
        answer:
          "Sí. Todo el municipio de Barcelona, incluido el distrito de Les Corts, está declarado zona de mercado residencial tensionado. Eso implica límites en la renta de contratos nuevos y la obligación de informar de la renta del contrato anterior en anuncio y contrato. Tu gestor Livendia lo revisa antes de firmar.",
      },
      {
        question: "¿Dónde se deposita la fianza en Barcelona?",
        answer:
          "En el INCASÒL (Institut Català del Sòl), no en AVS ni en Hacienda. El plazo máximo es de dos meses desde la firma. Te orientamos para comprobar que el depósito se gestiona correctamente.",
      },
    ],
  },
  {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet de Llobregat",
    placeLabel: "L'Hospitalet de Llobregat",
    schemaAdministrativeArea: "Cataluña",
    metaTitle: `Acompañamiento alquiler L'Hospitalet — ${PRICE}`,
    metaDescription: `Acompañamiento de alquiler en L'Hospitalet: fianza INCASÒL, zona tensionada, contrato y mediación. ${PRICE} IVA incl. Livendia.`,
    heroLead:
      "L'Hospitalet de Llobregat es un municipio propio del área metropolitana de Barcelona, bien conectado y con mucha demanda de alquiler. Te acompañamos con gestor especializado: papeles, contrato, firma digital y coherencia con la normativa catalana.",
    regulatoryBlock:
      "Al igual que en Barcelona capital, en L'Hospitalet de Llobregat la fianza del alquiler se deposita en el INCASÒL, con un plazo máximo de dos meses desde la firma del contrato. L'Hospitalet forma parte de los municipios catalanes declarados zona de mercado residencial tensionado, por lo que los contratos nuevos también están sujetos a tope de renta y a la obligación de informar de la renta del contrato anterior. Nuestro gestor comprueba estos límites antes de que cierres el contrato.",
    marketContext:
      "Muchos inquilinos eligen L'Hospitalet como alternativa metropolitana a Barcelona capital: buena conexión y un mercado muy activo. Idealista situaba el alquiler medio en torno a 17,3 €/m² en febrero de 2026, frente a unos 23,4 €/m² en Barcelona ciudad el mismo mes: suele ser más asequible que la capital, con alta presión de demanda y mucha rotación de contratos LAU.",
    heroImage: "/images/tipo1.jpg",
    heroImageAlt: "Acompañamiento de alquiler en L'Hospitalet de Llobregat — Livendia",
    testimonialsTitle: "Inquilinos en L'Hospitalet con gestor Livendia",
    testimonials: [
      {
        quote:
          "Pensaba que el trámite de fianza era distinto al de Barcelona. Livendia me confirmó que también es INCASÒL y revisó el tope de zona tensionada en mi contrato.",
        author: "Noelia R.",
        role: "Inquilina · L'Hospitalet de Llobregat",
      },
      {
        quote:
          "La agencia iba con prisas. Con el acompañamiento ordené la documentación y firmé digitalmente sin dejar cabos sueltos.",
        author: "Andreu S.",
        role: "Inquilino · L'Hospitalet",
      },
    ],
    faqLocal: [
      {
        question: "¿L'Hospitalet tiene zona tensionada igual que Barcelona?",
        answer:
          "Sí. L'Hospitalet de Llobregat está incluido en el listado de municipios catalanes con zona de mercado residencial tensionado. Los contratos nuevos tienen las mismas reglas de tope de renta e información de renta previa que en Barcelona capital.",
      },
      {
        question: "¿Es el mismo trámite de fianza que en Barcelona?",
        answer:
          "Sí: mismo organismo (INCASÒL) y mismo plazo máximo de dos meses desde la firma. Te ayudamos a verificar que el depósito se gestiona como corresponde.",
      },
    ],
  },
  {
    slug: "madrid",
    city: "Madrid",
    placeLabel: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    metaTitle: `Acompañamiento de alquiler en Madrid — ${PRICE}`,
    metaDescription: `Gestor de alquiler en Madrid: fianza AVS, revisión LAU, contrato y firma digital. Sin zona tensionada autonómica. ${PRICE} IVA incl.`,
    heroLead:
      "En Madrid el alquiler se mueve rápido y los contratos llegan con letra pequeña. Un gestor Livendia te ordena la documentación, revisa o redacta el contrato, gestiona la firma digital y media con la parte propietaria hasta que tú decides cerrar el acompañamiento.",
    regulatoryBlock:
      "En la Comunidad de Madrid la fianza del alquiler se deposita en la Agencia de Vivienda Social (AVS). A diferencia de Barcelona, Madrid no está declarada zona de mercado residencial tensionado, por lo que no existe tope legal de renta en los contratos nuevos — el precio se fija libremente entre las partes. Aun así, nuestro gestor revisa que el resto de cláusulas (duración, actualización de renta, gastos) cumplan con la LAU.",
    marketContext:
      "Madrid concentra una demanda alta de contratos LAU. Fotocasa situaba el alquiler en Madrid capital en torno a 22,3 €/m² en febrero de 2026 (Idealista cerca de 21–22 €/m² según el informe autonómico del mismo mes). El contraste entre distritos es fuerte: zonas premium frente a sur y sureste más asequibles. Conviene revisar gastos, actualizaciones de renta y preavisos aunque no haya tope de zona tensionada.",
    heroImage: "/images/tipo1.jpg",
    heroImageAlt: "Acompañamiento de alquiler en Madrid — gestoría Livendia",
    adminLocalHref: localAdministracionAlquilerHref("madrid"),
    testimonialsTitle: "Inquilinos en Madrid acompañados por Livendia",
    testimonials: [
      {
        quote:
          "Nadie me había hablado de la AVS para la fianza. Livendia me lo aclaró y revisó cláusulas de gastos que no entendía en el contrato.",
        author: "Irene C.",
        role: "Inquilina · Madrid",
      },
      {
        quote:
          "El propietario quería firmar en 48 h. Con el gestor redactamos un anexo claro y firmamos digitalmente sin prisas mal entendidas.",
        author: "Hugo M.",
        role: "Inquilino · Madrid",
      },
    ],
    faqLocal: [
      {
        question: "¿Hay zona tensionada en Madrid?",
        answer:
          "No. A fecha de hoy la Comunidad de Madrid no está declarada zona de mercado residencial tensionado, así que el propietario puede fijar el precio libremente. Aun así conviene revisar duración, actualización de renta, gastos y fianza con un gestor.",
      },
      {
        question: "¿Dónde se deposita la fianza en Madrid?",
        answer:
          "En la Agencia de Vivienda Social (AVS), mediante el trámite correspondiente. Te orientamos para que el depósito se gestione correctamente tras la firma.",
      },
    ],
  },
  {
    slug: "valencia",
    city: "Valencia",
    placeLabel: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    metaTitle: `Acompañamiento de alquiler en Valencia — ${PRICE}`,
    metaDescription: `Acompañamiento de alquiler en Valencia: fianza en 15 días hábiles, revisión LAU, contrato y firma. ${PRICE} IVA incl. Livendia.`,
    heroLead:
      "En Valencia el plazo para depositar la fianza es especialmente corto. Te acompañamos con gestor especializado: documentación, contrato, firma digital y mediación, con el calendario valenciano bien presente.",
    regulatoryBlock:
      "En la Comunidad Valenciana la fianza se deposita a través de los registros de la Dirección Territorial de Hacienda (en la ciudad de Valencia, en el Registro General de la Consellería de Hacienda), en un plazo de 15 días hábiles desde la firma del contrato — bastante más corto que en Cataluña o Madrid, por lo que conviene no dejarlo pasar. Valencia, igual que Madrid, no está declarada zona de mercado residencial tensionado a día de hoy, así que no hay tope legal de renta en los contratos nuevos.",
    marketContext:
      "Idealista situaba el alquiler medio en Valencia capital en torno a 16,3 €/m² en enero de 2026. Zonas de alta demanda como Ruzafa o Ciutat Vella se mueven por encima (a menudo cerca de 18–21 €/m² según barrios). El mix de LAU y alguna temporada, más el plazo corto de fianza (15 días hábiles), hace especialmente útil tener gestor y expediente ordenado desde el primer día.",
    heroImage: "/images/tipo1.jpg",
    heroImageAlt: "Acompañamiento de alquiler en Valencia — gestoría Livendia",
    adminLocalHref: localAdministracionAlquilerHref("valencia"),
    testimonialsTitle: "Inquilinos en Valencia con acompañamiento Livendia",
    testimonials: [
      {
        quote:
          "No sabía que en Valencia la fianza hay que depositarla en 15 días hábiles. Livendia me lo marcó en el checklist y evitamos un retraso del propietario.",
        author: "Paula N.",
        role: "Inquilina · Valencia",
      },
      {
        quote:
          "Alquilaba cerca de Ruzafa y el contrato mezclaba gastos. El gestor lo limpió y firmamos con tranquilidad desde el panel.",
        author: "Óscar D.",
        role: "Inquilino · Valencia",
      },
    ],
    faqLocal: [
      {
        question: "¿Cuánto tiempo tiene el propietario para depositar la fianza en Valencia?",
        answer:
          "15 días hábiles desde la firma del contrato: un plazo más corto que en Cataluña o Madrid. Te ayudamos a no dejar pasar esa ventana y a verificar el trámite ante Hacienda.",
      },
      {
        question: "¿Hay zona tensionada en Valencia?",
        answer:
          "No. A día de hoy Valencia no está declarada zona de mercado residencial tensionado, así que no hay tope legal de renta en contratos nuevos. Seguimos revisando el resto de cláusulas LAU.",
      },
    ],
  },
];
