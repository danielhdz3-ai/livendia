/**
 * Landings SEO locales: administración de alquiler por ciudad (España).
 * Rutas: /servicios/administracion-alquiler-local/[slug]
 *
 * **Publicación gradual:** mantén borradores en la lista grande y solo añade el `slug` a
 * `ADMINISTRACION_ALQUILER_LOCAL_PUBLISHED_SLUGS` cuando quieras indexar la URL (ruta,
 * sitemap, enlaces internos).
 */

export const ADMINISTRACION_ALQUILER_LOCAL_BASE = "/servicios/administracion-alquiler-local";

/** Slugs indexables públicamente. Publica de una en una para controlar SEO. */
export const ADMINISTRACION_ALQUILER_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "mallorca",
  "sevilla",
  "malaga",
  "oviedo",
  "gijon",
  "zaragoza",
  "murcia",
  "bilbao",
];

export function isAdministracionAlquilerLocalSlugPublished(slug: string): boolean {
  return ADMINISTRACION_ALQUILER_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedAdministracionAlquilerLocalCities(): AdministracionAlquilerLocalCityDefinition[] {
  const pub = new Set(ADMINISTRACION_ALQUILER_LOCAL_PUBLISHED_SLUGS);
  return ADMINISTRACION_ALQUILER_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type AdministracionAlquilerLocalLandingConfig = {
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  heroImage?: string;
  barriosIntro?: string;
  barrios?: readonly string[];
  faq?: readonly { question: string; answer: string }[];
};

export type AdministracionAlquilerLocalCityDefinition = Omit<
  AdministracionAlquilerLocalLandingConfig,
  "path"
> & {
  slug: string;
};

export function localAdministracionAlquilerHref(slug: string): string {
  return `${ADMINISTRACION_ALQUILER_LOCAL_BASE}/${slug}`;
}

export function toAdministracionLandingConfig(
  def: AdministracionAlquilerLocalCityDefinition,
): AdministracionAlquilerLocalLandingConfig {
  return {
    ...def,
    path: localAdministracionAlquilerHref(def.slug),
  };
}

export function getAdministracionAlquilerLocalCity(
  slug: string,
): AdministracionAlquilerLocalCityDefinition | undefined {
  return ADMINISTRACION_ALQUILER_LOCAL_CITIES.find((c) => c.slug === slug);
}

/** Orden por relevancia inmobiliaria; estable para hub y footer */
export const ADMINISTRACION_ALQUILER_LOCAL_CITIES: AdministracionAlquilerLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    // Precio medio: Fotocasa, febrero 2026 (21,59 €/m²). Verificar vigencia antes de campañas nuevas.
    heroLead:
      "Madrid capital combina algunos de los precios más altos de España —21,59 €/m² de media según Fotocasa (febrero 2026)— con una fuerte dispersión interna: de los 26-28 €/m² de Salamanca a los 13-16 €/m² de Villaverde o Usera. Propietarios con varios pisos y pequeños inversores comparten el mismo problema: llamadas fuera de horario, incidencias en comunidad y dudas sobre quién coordina cada reparación. Livendia es el único intermediario ante el inquilino para que decidáis solo lo que merece vuestra firma.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, verificado en
    // vivo el 25/07/2026 (Madrid no figura en ninguna resolución 1T2024-1T2026). Revisar cada 3-6
    // meses: el registro se actualiza trimestralmente y la postura autonómica podría cambiar.
    whyIntro:
      "Madrid no tiene zonas de mercado residencial tensionado declaradas: la Comunidad de Madrid no ha solicitado esta declaración al Ministerio de Vivienda, así que hoy no aplican los límites de actualización de renta de la Ley de Vivienda en la capital, con independencia de lo altos que sean los precios de mercado. Eso no elimina la fricción del día a día: seguimos centralizando el canal hasta el inquilino y documentando cada incidencia, especialmente en distrito Centro, Salamanca o barrios como Lavapiés, donde el contraste de precios entre calles genera más dudas sobre qué es una renta de mercado razonable.",
    howIntro:
      "Onboarding con datos del inmueble y del inquilino, intermediación como único canal de contacto, coordinación de incidencias con técnicos y comunidad, y avisos solo cuando hace falta vuestra firma — tanto en Salamanca o Chamberí, donde el precio medio supera los 24 €/m², como en Villaverde, Vallecas o Usera, con rentas de 13-16 €/m² y un perfil de inquilino distinto.",
    barriosIntro:
      "Del extremo alto en Salamanca y Chamberí (26-28 €/m² y 24-26 €/m², según Fotocasa de febrero de 2026) a los barrios más asequibles del sur y sureste — administramos alquileres en toda la capital y su corona metropolitana.",
    barrios: [
      "Salamanca",
      "Chamberí",
      "Chamartín",
      "Retiro",
      "Centro",
      "Tetuán",
      "Carabanchel",
      "Villaverde",
      "Vallecas",
      "Usera",
      "Getafe",
      "Alcorcón",
    ],
    faq: [
      {
        // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, verificado
        // en vivo el 25/07/2026. Revisar cada 3-6 meses (actualización trimestral del registro).
        question: "¿Está Madrid declarada zona tensionada?",
        answer:
          "No. La Comunidad de Madrid no ha declarado ninguna zona de mercado residencial tensionado, por lo que los límites de subida de renta de la Ley de Vivienda no se aplican actualmente en la capital. Puedes verificarlo en el buscador oficial del Ministerio de Vivienda.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Madrid?",
        answer:
          "Según Fotocasa (febrero de 2026), el precio medio es de 21,59 €/m², aunque varía mucho por distrito: Salamanca y Chamberí rondan los 24-28 €/m², mientras Villaverde, Vallecas o Usera se mueven en 13-16 €/m².",
      },
      {
        question: "¿Por qué hay tanta diferencia de precio entre barrios de Madrid?",
        answer:
          "La combinación de demanda, transporte, oferta de vivienda y renta media del distrito explica diferencias de hasta el doble entre zonas como Salamanca (26-28 €/m²) y Villaverde o Usera (13-16 €/m²). Livendia adapta la gestión de incidencias al perfil de cada zona.",
      },
    ],
    testimonialsTitle: "Propietarios en Madrid que ya delegaron el contacto con el inquilino",
    testimonials: [
      {
        quote:
          "Tengo un piso en Salamanca, uno de los barrios más caros de Madrid (26-28 €/m² según Fotocasa). Cada renovación generaba dudas sobre qué subida era razonable; Livendia me da la referencia de mercado del barrio antes de firmar y filtra las llamadas del inquilino.",
        author: "Fernando R.",
        role: "Propietario, barrio de Salamanca",
      },
      {
        quote:
          "Mi piso está en Vallecas, con un perfil de inquilino muy distinto al de Salamanca. Antes cualquier avería de comunidad se me escalaba directo a mí; ahora Livendia distingue lo que es responsabilidad del inquilino y solo me avisan cuando hace falta mi firma.",
        author: "Cristina V.",
        role: "Propietaria, distrito de Vallecas",
      },
    ],
    finalCtaLead:
      "Contrata desde 49 € al mes sin permanencia: nos convertimos en vuestro interlocutor con el inquilino en Madrid, con mismo panel y WhatsApp profesional que en el servicio nacional.",
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    // Precio medio: Idealista, abril 2026 (~22 €/m², -7,6% interanual).
    heroLead:
      "Barcelona es, según Idealista (abril de 2026), la única gran capital española donde el alquiler ha bajado en el último año: el precio medio ronda los 22 €/m², con una caída interanual del 7,6 %. Aun con esa corrección, ciudad y área metropolitana mantienen alta demanda habitacional y normativas comunales exigentes; los propietarios siguen recibiendo dudas sobre subarrendamientos locales, obra menor o suministro compartido. Livendia da un canal único ante el arrendatario y os resume solo lo que requiere vuestra decisión.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, verificado en
    // vivo el 25/07/2026 (Barcelona, Resolución de 14/03/2024, vigente hasta 16/03/2027). Revisar
    // cada 3-6 meses: el registro se actualiza trimestralmente y la vigencia expira en marzo 2027.
    whyIntro:
      "Barcelona está declarada zona de mercado residencial tensionado desde marzo de 2024, dentro de la declaración catalana que cubre 271 municipios, lo que implica límites legales a la subida de renta en nuevos contratos y condiciones específicas si el propietario es gran tenedor. La bajada de precios tampoco ha simplificado la burocracia: entre esos límites, normativas comunales exigentes y la complejidad de compatibilizar alquiler de temporada con la normativa turística, cada contrato en Barcelona requiere revisión caso a caso. Nuestro protocolo encaja tanto en Eixample como en Nou Barris o municipios próximos al TRAM.",
    howIntro:
      "Registramos contrato y contactos, asumimos la intermediación con el arrendatario, gestionamos incidencias con trazabilidad y os informamos solo de pagos, renovaciones o decisiones que requieran vuestra aprobación. Con el precio medio a la baja (-7,6 % interanual, Idealista abril 2026), prestamos especial atención a que cada renovación parta de una referencia de mercado actualizada, en Eixample, Nou Barris o municipios del TRAM.",
    faq: [
      {
        question: "¿Cuál es el precio medio del alquiler en Barcelona?",
        answer:
          "Según Idealista (abril de 2026), el precio medio ronda los 22 €/m², con una caída interanual del 7,6 % — la única entre las grandes capitales españolas con esa tendencia a la baja.",
      },
      {
        // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, verificado
        // en vivo el 25/07/2026. Revisar cada 3-6 meses (vigencia de la declaración hasta 03/2027).
        question: "¿Está Barcelona declarada zona tensionada?",
        answer:
          "Sí. Barcelona forma parte de la declaración de zona de mercado residencial tensionado de Cataluña, vigente desde marzo de 2024, que limita la subida de renta en nuevos contratos de alquiler. Tu gestor puede confirmarte cómo aplica esto a tu contrato concreto.",
      },
      {
        question: "¿Por qué ha bajado el alquiler en Barcelona si sigue habiendo mucha demanda?",
        answer:
          "La combinación de nueva oferta regulada, cambios normativos y el ajuste tras varios años de subidas explica la corrección del 7,6 % interanual (Idealista, abril de 2026). Aun así, la ciudad mantiene algunas de las rentas más altas de España y una gestión de incidencias más compleja que la media.",
      },
    ],
    testimonialsTitle: "Propietarias y propietarios en Barcelona ya descansaron del día a día con Livendia",
    testimonials: [
      {
        quote:
          "Mi piso está en Sant Martí, dentro de la zona tensionada desde 2024. Antes cada renovación de contrato era un quebradero de cabeza por no saber qué subida de renta era legal; Livendia me confirma el límite exacto antes de renovar y gestiona todo el contacto con el inquilino.",
        author: "Jordi L.",
        role: "Propietario, Sant Martí (zona tensionada)",
      },
      {
        quote:
          "Alquilo varias habitaciones cerca del Besòs y, al tener más de un piso, me aplican condiciones distintas por ser considerada gran tenedora. Livendia me avisa cuando una consulta del inquilino tiene que pasar por ese filtro legal antes de responder.",
        author: "Miriam K.",
        role: "Propietaria, zona Besòs — gran tenedora",
      },
    ],
    finalCtaLead:
      "Activa administración profesional Livendia en Barcelona con un solo clic al checkout: mismo precio publicado sin permanencia, contacto WhatsApp igual que vuestra página /servicios/administracion-alquiler.",
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    // Precio medio: Idealista, junio 2026 (14,3 €/m²). Sin declaración de zona tensionada.
    heroLead:
      "Valencia capital y Horta acumulan una de las mayores tasas de rotación de alquiler de España: un piso bien ubicado en zonas como Ruzafa o El Carmen tarda de media entre 8 y 12 días en encontrar inquilino. El precio medio se sitúa en 14,3 €/m² (Idealista, junio de 2026), muy por debajo de Madrid o Barcelona, lo que atrae tanto a población local como a inquilinos internacionales. Como gestoría inmobiliaria digital, Livendia asume el día a día con el arrendatario mientras vosotros verificáis solo lo que marca la cuenta o la firma de facturas relevantes.",
    whyIntro:
      "A diferencia de otras grandes ciudades, Valencia no está declarada zona de mercado residencial tensionado: el contrato se rige por la LAU general, sin límites adicionales de actualización de renta impuestos por esa figura. Eso no elimina la fricción del día a día: con tanta rotación, las incidencias suelen concentrarse en las primeras dos semanas tras la entrada de un nuevo inquilino, especialmente en edificios del Eixample o Gran Vía con instalaciones más antiguas. Filtramos esas llamadas y documentamos cada paso desde el primer día, también si el bien está en Ciutat Vella, Extramurs o cercanías de Torrent y Paiporta.",
    howIntro:
      "Alta del arrendamiento en panel, canal único con el inquilino, resolución de averías con proveedores de confianza y resumen periódico de lo relevante — especialmente útil en las dos primeras semanas tras la entrada de muebles o electrodomésticos, el momento de mayor volumen de incidencias dado el ritmo de rotación del mercado valenciano.",
    barriosIntro:
      "Precios más altos en Pla del Real, Gran Vía, Eixample, Ruzafa y El Carmen; alternativas más asequibles en los Poblats del Nord — administramos alquileres en toda la capital y área metropolitana.",
    barrios: [
      "Pla del Real",
      "Gran Vía",
      "Eixample",
      "Ruzafa",
      "El Carmen",
      "Ciutat Vella",
      "Extramurs",
      "Benimaclet",
      "Poblats del Nord",
      "Cabanyal",
      "Torrent",
      "Paiporta",
    ],
    faq: [
      {
        question: "¿Valencia es zona de mercado tensionado?",
        answer:
          "No. Valencia no ha sido declarada zona de mercado residencial tensionado. El contrato de alquiler se rige por la LAU general, sin los límites adicionales de actualización de renta que aplican en zonas declaradas tensionadas.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Valencia?",
        answer:
          "Según datos de Idealista de junio de 2026, el precio medio se sitúa en 14,3 €/m², con barrios como Pla del Real, Gran Vía, Eixample, Ruzafa y El Carmen por encima de la media, y zonas como los Poblats del Nord entre las más asequibles.",
      },
      {
        question: "¿Cuánto tarda en alquilarse un piso en Valencia?",
        answer:
          "Un piso bien ubicado y con precio de mercado suele encontrar inquilino en 8-12 días, uno de los ciclos más rápidos de España. Esa alta rotación es justo lo que hace más valioso un canal profesional que filtre incidencias desde el primer día.",
      },
    ],
    testimonialsTitle: "Propietarios en Valencia que llevaron las incidencias al despacho Livendia",
    testimonials: [
      {
        quote:
          "Con la rotación tan alta que hay en Valencia, cada vez que entra un inquilino nuevo las primeras dos semanas son las que más incidencias traen. Antes coordinaba yo mismo cerrajero y comunidad desde fuera; ahora Livendia lo gestiona y solo veo el parte final.",
        author: "Héctor G.",
        role: "Propietario, Cabanyal",
      },
      {
        quote:
          "Nuestro piso está en Benimaclet, con mucho estudiante que cambia cada curso. Livendia distingue qué es avería de la vivienda y qué toca a la comunidad, así que el vecindario deja de escalarnos todo directamente a nosotros.",
        author: "Inés & Pedro",
        role: "Copropiedad, Benimaclet",
      },
    ],
    finalCtaLead:
      "Suscripciones Stripe como en cualquier ciudad: activáis administración profesional Valencia con soporte igual al resto del territorio español donde opera Livendia.",
  },
  {
    slug: "mallorca",
    city: "Palma de Mallorca",
    schemaAdministrativeArea: "Islas Baleares",
    // Precio medio: Idealista, Q2 2026 (19,1 €/m²). Sin declaración de zona tensionada.
    heroLead:
      "Mallorca es, según Idealista (segundo trimestre de 2026), una de las islas con el alquiler más caro de España: el precio medio ronda los 19,1 €/m², con Llevant-La Soledat, en Palma, entre los barrios de mayor revalorización reciente. Propietarios con piso en la capital, en Calvià o con segunda residencia en la costa comparten el mismo problema: inquilinos que llaman en temporada alta, averías en comunidades muy rotativas y dudas sobre renovaciones cuando el mercado sigue presionando al alza. Livendia es vuestro único interlocutor ante el arrendatario para que solo decidáis lo que requiere firma o gasto relevante.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, abril 2026:
    // Baleares no figura entre las comunidades con declaración vigente. Revisar cada 3-6 meses.
    whyIntro:
      "Baleares no ha presentado ante el Ministerio de Vivienda la solicitud formal de zona de mercado residencial tensionado, aunque el propio criterio técnico —esfuerzo de más del 30 % de la renta media sobre el alquiler— ya se cumple en buena parte de la isla. Esa falta de declaración no frena la presión de la demanda: en Llevant-La Soledat, uno de los barrios de Palma con mayor revalorización de los últimos años, la rotación de inquilinos genera más incidencias que en zonas más estables. Sin canal profesional, el vecino de la finca o el WhatsApp personal acaban mediando antes que un gestor; nosotros centralizamos comunicaciones y documentamos cada incidencia con el mismo protocolo que en la península.",
    howIntro:
      "Intermediación desde el primer día, gestión de consultas del inquilino, coordinación de reparaciones con proveedores de confianza y avisos solo cuando hace falta vuestra decisión — con atención reforzada en Llevant-La Soledat, donde la revalorización reciente eleva tanto el precio como la exigencia del inquilino, y en el resto de Palma, Calvià o Manacor.",
    barriosIntro:
      "Barrio de referencia: Llevant-La Soledat, en pleno proceso de revalorización (Idealista, segundo trimestre de 2026) — administramos alquileres también en el resto de Palma y municipios costeros de la isla.",
    barrios: ["Llevant-La Soledat", "Palma Centro", "Calvià", "Manacor", "Marratxí", "Llucmajor"],
    faq: [
      {
        question: "¿Está declarada Mallorca zona de mercado tensionado?",
        answer:
          "No. Baleares no ha presentado la solicitud formal de zona de mercado residencial tensionado ante el Ministerio de Vivienda, aunque técnicamente buena parte de la isla ya supera el umbral del 30 % de esfuerzo sobre la renta media que se usa como referencia para esa declaración.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Mallorca?",
        answer:
          "Según Idealista (segundo trimestre de 2026), el precio medio se sitúa en 19,1 €/m², uno de los más altos de España, con Llevant-La Soledat entre los barrios de Palma con mayor revalorización reciente.",
      },
      {
        question: "¿Por qué sube tanto el alquiler en Llevant-La Soledat?",
        answer:
          "La combinación de proximidad al centro de Palma, reforma de edificios y fuerte demanda turística y residencial explica la revalorización del barrio, que atrae tanto a inquilinos de larga duración como a estancias de temporada.",
      },
    ],
    testimonialsTitle: "Propietarios en Mallorca que delegaron el día a día del alquiler en Livendia",
    testimonials: [
      {
        quote:
          "Mi piso está cerca de Llevant-La Soledat, uno de los barrios que más ha subido de precio en Palma. Con esa revalorización el inquilino es más exigente con el estado de la vivienda; Livendia coordina las reparaciones con proveedores de confianza antes de que se convierta en un conflicto.",
        author: "Margarita S.",
        role: "Propietaria, Palma — Llevant-La Soledat",
      },
      {
        quote:
          "Tenemos una segunda residencia en Calvià que alquilamos en temporada alta. Livendia atiende al inquilino en pleno verano, cuando nosotros estamos fuera, y solo nos escala lo que de verdad requiere nuestra decisión.",
        author: "Tomás & Elena",
        role: "Propietarios, Calvià — segunda residencia",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Mallorca desde 49 €/mes sin permanencia: mismo checkout Stripe, panel online y WhatsApp que en el servicio nacional de Livendia.",
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    // Precio medio: Brains Real Estate, Q1 2026 (19,1 €/m², ticket medio 1.556 €/mes).
    heroLead:
      "Sevilla capital combina un precio medio de alquiler de 19,1 €/m², con un ticket medio de 1.556 €/mes según Brains Real Estate (primer trimestre de 2026), con una revalorización muy desigual por barrio: Casco Antiguo lidera con una subida del 90 % interanual, mientras zonas como el Norte o Torreblanca se mantienen mucho más asequibles. Propietarios que viven fuera de la ciudad —o que compaginan alquiler habitual con estancias académicas— reciben llamadas de averías, dudas sobre IPC y conflictos de comunidad que no entienden de horario. Livendia es vuestro único interlocutor ante el inquilino para que solo firméis lo que merece vuestra decisión.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, abril 2026:
    // Andalucía no ha activado el mecanismo. Revisar cada 3-6 meses.
    whyIntro:
      "La Junta de Andalucía no ha activado el mecanismo de zona de mercado residencial tensionado en Sevilla —el mismo caso que Málaga—, así que el contrato se rige por la LAU general sin límites adicionales de actualización de renta. Eso no frena la presión de la demanda: en Casco Antiguo, Triana y Nervión, los barrios con las rentas más altas de la ciudad, la subida del 90 % interanual en Casco Antiguo concentra buena parte de las dudas sobre qué renta es razonable en una renovación. En Triana, Nervión o Los Remedios la rotación de inquilinos también acelera incidencias en los primeros quince días; sin canal profesional, WhatsApp personal y el presidente de la comunidad acaban mediando antes que un gestor.",
    howIntro:
      "Intermediación con el inquilino, gestión de consultas, coordinación de reparaciones y avisos solo cuando hace falta vuestra firma — con atención reforzada en Casco Antiguo, Triana y Nervión, donde la fuerte revalorización reciente exige más seguimiento documental en cada renovación, y en el resto de la ciudad y área metropolitana: Los Remedios, Tomares, Dos Hermanas o el Norte, Cerro-Amate, Alcosa y Torreblanca.",
    barriosIntro:
      "Los precios más altos se concentran en Casco Antiguo, Triana y Nervión (Casco Antiguo con un +90 % interanual, Brains Real Estate Q1 2026); Norte, Cerro-Amate, Alcosa y Torreblanca ofrecen las opciones más asequibles de la capital.",
    barrios: [
      "Casco Antiguo",
      "Triana",
      "Nervión",
      "Los Remedios",
      "Macarena",
      "Norte",
      "Cerro-Amate",
      "Alcosa",
      "Torreblanca",
      "Tomares",
      "Dos Hermanas",
    ],
    faq: [
      {
        question: "¿Sevilla es zona de mercado tensionado?",
        answer:
          "No. La Junta de Andalucía no ha activado el mecanismo de zona de mercado residencial tensionado en Sevilla, el mismo caso que Málaga, por lo que el contrato se rige por la LAU general sin límites adicionales de actualización de renta.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Sevilla?",
        answer:
          "Según Brains Real Estate (primer trimestre de 2026), el precio medio es de 19,1 €/m², con un ticket medio de 1.556 €/mes. Casco Antiguo destaca con una subida del 90 % interanual.",
      },
      {
        question: "¿Qué barrios de Sevilla tienen el alquiler más caro?",
        answer:
          "Casco Antiguo, Triana y Nervión concentran las rentas más altas de la capital. Norte, Cerro-Amate, Alcosa y Torreblanca son, en cambio, las zonas más asequibles.",
      },
    ],
    testimonialsTitle: "Propietarios en Sevilla que delegaron el día a día del alquiler en Livendia",
    testimonials: [
      {
        quote:
          "Mi piso está en Casco Antiguo, el barrio que más ha subido en Sevilla (+90 % interanual). Cada renovación me generaba dudas sobre qué renta era razonable; Livendia me da la referencia de zona actualizada antes de firmar.",
        author: "Elena R.",
        role: "Propietaria, Casco Antiguo",
      },
      {
        quote:
          "Piso en Los Remedios, uno de los barrios con rentas más altas de la ciudad. Las averías no entienden de horario, así que agradezco que Livendia filtre lo urgente y me resuma por WhatsApp solo lo que requiere mi aprobación.",
        author: "Javier M.",
        role: "Propietario, Los Remedios",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Sevilla desde 49 €/mes sin permanencia: mismo checkout Stripe, panel online y WhatsApp que en el servicio nacional de Livendia.",
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    // Precio medio: Brains Real Estate, Q1 2026 (16-17 €/m², ticket medio 1.476 €/mes).
    heroLead:
      "Málaga capital y Costa del Sol combinan alquiler residencial, temporada y fuerte presión inversora: el precio medio ronda los 16-17 €/m², con un ticket medio de 1.476 €/mes según Brains Real Estate (primer trimestre de 2026), y distritos como Victoria han subido un 32,1 % interanual. Livendia canaliza todo el contacto con el inquilino para que no perdáis fines de semana en llamadas mientras el mercado sigue tensionándose.",
    whyIntro:
      "La Junta de Andalucía no ha declarado oficialmente Málaga zona de mercado residencial tensionado, aunque técnicamente todos sus distritos superan ya el umbral del 30 % de esfuerzo sobre la renta media que suele usarse como referencia — un matiz relevante a la hora de fijar expectativas de renovación. En Teatinos, El Palo o municipios como Torremolinos y Rincón de la Victoria, esa presión de mercado se traduce en más rotación y más incidencias que gestionar antes de que escalen a la junta de vecinos.",
    howIntro:
      "Onboarding, intermediación con el arrendatario, ejecución de incidencias y reporting claro — con especial atención a los distritos con mayor revalorización, como Victoria, donde la rotación de inquilinos es más alta y las renovaciones requieren más seguimiento documental. Válido también para vivienda habitual o segunda residencia en Teatinos, El Palo, Torremolinos o la costa.",
    barriosIntro:
      "Cubrimos administración de alquiler en los distritos con más presión de mercado de la capital y en la Costa del Sol.",
    barrios: [
      "Centro",
      "Teatinos",
      "El Palo",
      "Victoria",
      "Cruz de Humilladero",
      "Carretera de Cádiz",
      "Torremolinos",
      "Rincón de la Victoria",
      "Benalmádena",
      "Fuengirola",
    ],
    faq: [
      {
        question: "¿Málaga es zona de mercado tensionado?",
        answer:
          "La Junta de Andalucía no ha declarado oficialmente Málaga zona de mercado residencial tensionado. Aun así, todos sus distritos superan ya el umbral técnico del 30 % de esfuerzo sobre la renta media, un indicador de presión de mercado a tener en cuenta al planificar renovaciones.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Málaga?",
        answer:
          "Según Brains Real Estate (primer trimestre de 2026), el precio medio se sitúa en 16-17 €/m², con un ticket medio de 1.476 €/mes. El distrito de Victoria destaca con una subida interanual del 32,1 %.",
      },
      {
        question: "¿Qué zonas de Málaga tienen más rotación de inquilinos?",
        answer:
          "Victoria, por su fuerte revalorización reciente, junto con Teatinos y El Palo, concentran buena parte de la rotación. Administramos también en Torremolinos, Rincón de la Victoria y el resto de la Costa del Sol.",
      },
    ],
    testimonialsTitle: "Propietarios en Málaga que delegaron el contacto con el inquilino en Livendia",
    testimonials: [
      {
        quote:
          "Tengo un piso en el distrito de Victoria, que ha subido un 32 % en el último año. Con esa presión de mercado el inquilino cambia más a menudo; Livendia coordina cada entrada nueva y filtra las llamadas para que yo solo intervenga cuando toca firmar.",
        author: "Laura P.",
        role: "Propietaria, distrito Victoria",
      },
      {
        quote:
          "Apartamento en la costa de Torremolinos, alquilado todo el año a pesar de estar en zona turística. Livendia filtra las incidencias menores y, cuando hubo humedad, coordinaron la empresa sin que yo tuviera que insistir tres veces a la comunidad.",
        author: "Antonio R.",
        role: "Propietario, Torremolinos",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Málaga desde 49 €/mes sin permanencia: mismo checkout Stripe, panel online y WhatsApp que en el servicio nacional de Livendia.",
  },
  {
    slug: "oviedo",
    city: "Oviedo",
    schemaAdministrativeArea: "Principado de Asturias",
    heroImage: "/images/oviedo2.jpg",
    // Precio medio: Enalquiler, abril 2026 (986-995 €/mes). Sin declaración de zona tensionada.
    heroLead:
      "Oviedo concentra demanda de alquiler universitario, familias en expansión y propietarios que viven fuera del Principado, con un precio medio de alquiler de 986-995 €/mes según Enalquiler (abril de 2026). Entre La Ería, Los Pilares y el casco histórico surgen incidencias de humedades, ascensores antiguos y dudas sobre comunidad que no entienden de horario laboral. Livendia es vuestro único interlocutor ante el inquilino: filtramos urgencias, coordinamos técnicos y solo os avisamos cuando hace falta vuestra firma o autorización de gasto.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, abril 2026:
    // Asturias no figura entre las comunidades con declaración vigente. Revisar cada 3-6 meses.
    whyIntro:
      "Asturias no ha activado la figura de zona de mercado residencial tensionado, así que en Oviedo el contrato se rige por la LAU general sin límites adicionales de actualización de renta en las renovaciones — el mismo régimen que en Gijón. Es habitual alquilar pisos amueblados cerca del campus o en Ciudad Naranco mientras el propietario reside en Madrid, León o la costa; sin canal profesional, WhatsApp personal y el presidente de la comunidad acaban mediando antes que un gestor. Centralizamos comunicaciones, pedimos certificados de comunidad cuando toca y documentamos cada incidencia.",
    howIntro:
      "Intermediación desde el primer día, gestión de consultas del inquilino, coordinación de reparaciones y avisos solo cuando requiere decisión vuestra — en Oviedo capital, Siero, Lugones o Langreo, con un precio medio de referencia de 986-995 €/mes (Enalquiler, abril de 2026) que ayuda a fijar expectativas realistas en cada renovación.",
    faq: [
      {
        question: "¿Oviedo es zona de mercado tensionado?",
        answer:
          "No. Asturias no ha activado la figura de zona de mercado residencial tensionado, por lo que Oviedo se rige por la LAU general sin límites adicionales de actualización de renta en las renovaciones, el mismo caso que Gijón.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Oviedo?",
        answer:
          "Según Enalquiler (abril de 2026), el precio medio se sitúa entre 986 y 995 €/mes, uno de los mercados más asequibles entre las capitales de provincia del norte de España.",
      },
      {
        question: "¿Qué zonas de Oviedo tienen más rotación de inquilinos?",
        answer:
          "La Ería y Los Pilares, por su cercanía al campus universitario, concentran buena parte de la rotación de inquilinos jóvenes; también hay alta demanda en Ciudad Naranco entre propietarios que residen fuera del Principado.",
      },
    ],
    barriosIntro:
      "Administramos alquileres en los barrios donde más rotación hay entre estudiantes, familias y segundas residencias en el Principado.",
    barrios: [
      "Centro",
      "El Cristo",
      "La Florida",
      "Los Pilares",
      "Ciudad Naranco",
      "Pumarín",
      "La Ería",
      "Ventanueva",
      "Tenderina",
      "Fonsovel",
      "Vallobín",
      "Corredoria",
      "Siero",
      "Lugones",
      "Langreo",
    ],
    testimonialsTitle: "Propietarios en Oviedo que delegaron el día a día del alquiler en Livendia",
    testimonials: [
      {
        quote:
          "Mi piso está en La Ería, muy cerca del campus, así que el inquilino cambia casi cada curso. Antes perdía tardes enteras con averías de caldera; ahora Livendia coordina al fontanero y a la comunidad y yo solo apruebo cuando el gasto supera lo pactado.",
        author: "María S.",
        role: "Propietaria, La Ería",
      },
      {
        quote:
          "Piso en Los Pilares con inquilino joven, otro barrio muy ligado a la universidad. Cuando hubo humedad en fachada, Livendia explicó al inquilino qué era responsabilidad suya y qué correspondía a la comunidad, algo que antes generaba discusiones.",
        author: "Roberto G.",
        role: "Propietario, Los Pilares",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Oviedo desde 49 €/mes sin permanencia: mismo checkout Stripe, panel online y WhatsApp que en el servicio nacional de Livendia.",
  },
  {
    slug: "gijon",
    city: "Gijón",
    schemaAdministrativeArea: "Principado de Asturias",
    heroImage: "/images/gijon.jpg",
    // Precio medio: Indomio, enero 2026 (11,0 €/m², +7,98% interanual). Sin zona tensionada.
    heroLead:
      "Gijón combina alquiler residencial en La Arena y El Natahoyo con un mercado que crece rápido: el precio medio es de 11,0 €/m² según Indomio (enero de 2026), tras subir un 7,98 % interanual — uno de los ritmos de crecimiento más marcados del norte de España. Entre Cimadevilla, Laviada y Montevil conviven edificios históricos y propietarios en la península que no pueden desplazarse en 24 horas cuando salta una avería.",
    whyIntro:
      "Asturias no ha activado la figura de zona de mercado tensionado, por lo que Gijón se rige por la LAU general sin límites adicionales de actualización de renta en las renovaciones. Eso no frena la subida de precios: barrios como El Llano, Somió-Cabueñes y el entorno periurbano son los que más se revalorizan, lo que también eleva la exigencia de los inquilinos sobre el estado del inmueble y la rapidez de respuesta ante incidencias — sobre todo en La Arena, El Natahoyo y el Centro.",
    howIntro:
      "Alta del contrato, intermediación con el arrendatario, resolución de incidencias y avisos puntuales — con atención reforzada en El Llano, Somió-Cabueñes y las zonas periurbanas donde la revalorización reciente atrae a inquilinos más exigentes, además del resto de La Arena, El Natahoyo, Somió, litoral o concejos limítrofes como Carreño y Avilés.",
    faq: [
      {
        question: "¿Gijón es zona de mercado tensionado?",
        answer:
          "No. Asturias no ha activado la figura de zona de mercado residencial tensionado, por lo que Gijón se rige por la LAU general sin límites adicionales de actualización de renta en las renovaciones.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Gijón?",
        answer:
          "Según Indomio (enero de 2026), el precio medio es de 11,0 €/m², tras una subida del 7,98 % interanual, uno de los ritmos de crecimiento más rápidos de Asturias.",
      },
      {
        question: "¿Qué barrios de Gijón se están revalorizando más?",
        answer:
          "El Llano, Somió-Cabueñes y las zonas periurbanas son las que más se revalorizan actualmente, lo que también incrementa la rotación de inquilinos y las exigencias sobre el estado del inmueble.",
      },
    ],
    barriosIntro:
      "Cubrimos administración de alquiler en los barrios y zonas donde más propietarios delegan el contacto con el inquilino.",
    barrios: [
      "Centro",
      "Cimadevilla",
      "La Arena",
      "El Natahoyo",
      "Laviada",
      "Somió",
      "Viesques",
      "Montevil",
      "La Calzada",
      "Pumarín",
      "El Llano",
      "Ceares",
      "Contrueces",
      "Roces",
      "Carreño",
      "Avilés",
    ],
    testimonialsTitle: "Propietarios en Gijón que delegaron el contacto con el inquilino en Livendia",
    testimonials: [
      {
        quote:
          "Tengo piso en La Arena y vivo en Bilbao, así que no puedo bajar en 24 horas si salta una avería. Livendia atiende al inquilino, coordina cerrajero y fontanería y yo solo veo el resumen cuando toca autorizar gasto.",
        author: "Patricia L.",
        role: "Propietaria, La Arena",
      },
      {
        quote:
          "Alquilo en Somió, uno de los barrios que más se está revalorizando en Gijón, cerca del campus. Ellos gestionan las entradas de inquilinos nuevos en septiembre, la época con más incidencias, y yo no recibo llamadas un domingo a las once de la noche.",
        author: "Ignacio M.",
        role: "Propietario, Somió",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Gijón desde 49 €/mes sin permanencia: mismo checkout Stripe, panel online y WhatsApp que en el servicio nacional de Livendia.",
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    heroImage: "/images/zaragoza2.jpg",
    // Precio medio: Idealista, mayo 2026 (11 €/m², 38-42% más barata que Madrid).
    heroLead:
      "Zaragoza es, según Idealista (mayo de 2026), una de las capitales de provincia más asequibles de España: el precio medio de 11 €/m² supone entre un 38 % y un 42 % menos que Madrid para alquileres equivalentes. Aun así, la demanda se concentra en Centro Histórico y Universidad-Romareda, los barrios más caros de la ciudad, mientras Delicias y Las Fuentes ofrecen las opciones más económicas. Propietarios con pisos en cualquiera de estas zonas reciben llamadas de averías, dudas sobre renovaciones y conflictos con la comunidad. Livendia canaliza todo el contacto con el inquilino para que solo firméis lo que merece vuestra decisión.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, abril 2026:
    // Aragón no está entre las CCAA con declaración activa. Revisar cada 3-6 meses.
    whyIntro:
      "Aragón no está entre las comunidades autónomas que han activado la figura de zona de mercado residencial tensionado, así que en Zaragoza el contrato se rige por la LAU general sin límites adicionales de actualización de renta. Eso no frena la presión de la demanda en Centro Histórico y Universidad-Romareda, donde la rotación acelera incidencias en los primeros quince días; Actur-Rey Fernando, en cambio, destaca por su mejor relación calidad-precio y atrae a un perfil de inquilino más estable. Sin canal profesional, WhatsApp personal y el presidente de la comunidad acaban mediando antes que un gestor; nosotros centralizamos comunicaciones y documentamos cada paso.",
    howIntro:
      "Intermediación desde el primer día, gestión de consultas, coordinación de reparaciones y avisos solo cuando hace falta vuestra firma — con especial atención a Centro Histórico y Universidad-Romareda, los barrios con más rotación, y también en Delicias, Las Fuentes, Actur-Rey Fernando, Utebo, Cuarte de Huerva o Valdespartera.",
    barriosIntro:
      "Centro Histórico y Universidad-Romareda concentran los precios más altos; Delicias y Las Fuentes son las zonas más económicas, y Actur-Rey Fernando destaca por su relación calidad-precio (Idealista, mayo de 2026).",
    barrios: [
      "Centro Histórico",
      "Delicias",
      "Las Fuentes",
      "Actur-Rey Fernando",
      "Romareda",
      "Universidad",
      "Parque Goya",
      "Valdespartera",
      "Torrero-La Paz",
      "Rosales del Canal",
      "Utebo",
      "Cuarte de Huerva",
    ],
    faq: [
      {
        question: "¿Zaragoza es zona de mercado tensionado?",
        answer:
          "No. Aragón no está entre las comunidades autónomas que han activado la figura de zona de mercado residencial tensionado, por lo que Zaragoza se rige por la LAU general sin límites adicionales de actualización de renta.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Zaragoza?",
        answer:
          "Según Idealista (mayo de 2026), el precio medio es de 11 €/m², entre un 38 % y un 42 % más barato que Madrid para alquileres equivalentes. Centro Histórico y Universidad-Romareda son los barrios más caros; Delicias y Las Fuentes, los más económicos.",
      },
      {
        question: "¿Qué barrio de Zaragoza tiene mejor relación calidad-precio?",
        answer:
          "Actur-Rey Fernando destaca por combinar buenas comunicaciones, servicios y un precio más contenido que Centro Histórico o Universidad-Romareda.",
      },
    ],
    testimonialsTitle: "Propietarios en Zaragoza que delegaron el contacto con el inquilino en Livendia",
    testimonials: [
      {
        quote:
          "Alquilo en Romareda, zona universitaria con mucha rotación de inquilinos. Vivo en Madrid, así que agradezco que Livendia atienda al inquilino y coordine fontanería mientras yo solo apruebo cuando el gasto supera lo pactado.",
        author: "Lucía M.",
        role: "Propietaria, Romareda",
      },
      {
        quote:
          "Piso en Delicias, uno de los barrios más económicos de Zaragoza, con inquilino joven. Cuando hubo humedad, Livendia explicó qué era responsabilidad suya y qué tocaba a la comunidad, algo que en un barrio con tanta rotación conviene tener siempre claro.",
        author: "Jorge P.",
        role: "Propietario, Delicias",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Zaragoza desde 49 €/mes sin permanencia: panel online, WhatsApp profesional y gestor colegiado.",
  },
  {
    slug: "murcia",
    city: "Murcia",
    schemaAdministrativeArea: "Región de Murcia",
    // Precio medio: Engel & Völkers, junio 2026 (10,55 €/m² para pisos). Sin declaración de zona tensionada.
    heroLead:
      "Murcia capital tiene un precio medio de alquiler de 10,55 €/m² para pisos, según Engel & Völkers (junio de 2026), con Centro, La Flota y Vistalegre entre las zonas más activas del mercado y Santa Eulalia y El Carmen en pleno proceso de regeneración urbana. Propietarios en cualquiera de estos barrios reciben incidencias, dudas sobre renovaciones y conflictos con la comunidad. Livendia es vuestro único interlocutor ante el inquilino.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, abril 2026:
    // la Región de Murcia no figura entre las comunidades con declaración vigente. Revisar cada 3-6 meses.
    whyIntro:
      "Murcia no está declarada zona de mercado residencial tensionado, así que el contrato se rige por la LAU general sin límites adicionales de actualización de renta. En Centro, La Flota y Vistalegre, las zonas con más movimiento del mercado, distinguir una avería interior de un problema comunitario es la fricción más habitual; en Santa Eulalia y El Carmen, en cambio, la regeneración urbana en marcha atrae a nuevos inquilinos y genera más consultas sobre el estado del inmueble. Un gestor profesional amortigua esos conflictos antes de que escalen a la junta de propietarios.",
    howIntro:
      "Onboarding, intermediación con el arrendatario, coordinación de incidencias y avisos puntuales — con atención reforzada en Centro, La Flota y Vistalegre por su mayor rotación, y en Santa Eulalia y El Carmen por la regeneración en marcha, además del resto de Espinardo, El Palmar, Molina de Segura o pedanías del área metropolitana.",
    barriosIntro:
      "Centro, La Flota y Vistalegre concentran la mayor actividad del mercado; Santa Eulalia y El Carmen están en pleno proceso de regeneración urbana (Engel & Völkers, junio de 2026).",
    barrios: [
      "Centro",
      "La Flota",
      "Vistalegre",
      "Santa Eulalia",
      "El Carmen",
      "Santa Catalina-San Bartolomé",
      "San Miguel",
      "Espinardo",
      "El Palmar",
      "Sucina",
      "Corvera",
      "Alcantarilla",
      "Molina de Segura",
    ],
    faq: [
      {
        question: "¿Murcia es zona de mercado tensionado?",
        answer:
          "No. Murcia no está declarada zona de mercado residencial tensionado, por lo que el contrato se rige por la LAU general sin límites adicionales de actualización de renta.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Murcia?",
        answer:
          "Según Engel & Völkers (junio de 2026), el precio medio de los pisos en Murcia capital es de 10,55 €/m², con Centro, La Flota y Vistalegre entre las zonas más activas del mercado.",
      },
      {
        question: "¿Qué barrios de Murcia están en proceso de regeneración?",
        answer:
          "Santa Eulalia y El Carmen concentran actualmente los principales proyectos de regeneración urbana de la capital, lo que está atrayendo a nuevos inquilinos y elevando la rotación en esas zonas.",
      },
    ],
    testimonialsTitle: "Propietarios en Murcia que delegaron el día a día del alquiler en Livendia",
    testimonials: [
      {
        quote:
          "Tengo piso en Espinardo, cerca del campus universitario, y trabajo fuera de la ciudad. Antes perdía fines de semana con el WhatsApp del inquilino; ahora Livendia coordina técnico y comunidad y yo solo veo el resumen cuando toca autorizar.",
        author: "Carmen R.",
        role: "Propietaria, Espinardo",
      },
      {
        quote:
          "Mi piso está en El Carmen, en pleno proceso de regeneración urbana, así que llegan inquilinos nuevos con más frecuencia que antes. Livendia filtra las incidencias menores y, cuando hubo una avería de climatización, coordinaron la empresa sin que yo tuviera que llamar al vecino.",
        author: "Francisco T.",
        role: "Propietario, El Carmen",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Murcia desde 49 €/mes sin permanencia: gestor colegiado, panel online y WhatsApp profesional.",
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    heroImage: "/images/bilbao1.jpg",
    // Precio medio: BOE / Ministerio de Vivienda, índice de precios de referencia en vigor desde
    // abril de 2026 (700-950 €/mes, 800 € el más común). Zona tensionada declarada desde 31/10/2025.
    heroLead:
      "Bilbao tiene un precio medio de alquiler de entre 700 y 950 €/mes, siendo 800 € el más habitual, según el índice de precios de referencia del Ministerio de Vivienda en vigor desde abril de 2026. Bizkaia y Bilbao capital tienen además un mercado comprimido: propietarios en Abando, Deusto, Indautxu o Getxo reciben incidencias, dudas sobre normativa vasca de arrendamientos y conflictos con comunidades de edificios históricos. Livendia actúa como único intermediario ante el inquilino para que vosotros decidáis solo lo que merece vuestra firma.",
    // Fuente: MIVAU, registro oficial de zonas de mercado residencial tensionado, abril 2026:
    // Bilbao declarada desde el 31/10/2025 junto con Vitoria-Gasteiz y San Sebastián. Sin ambigüedad
    // entre fuentes. Revisar cada 3-6 meses (actualización trimestral del registro).
    whyIntro:
      "Bilbao está declarada zona de mercado residencial tensionado desde el 31 de octubre de 2025, junto con Vitoria-Gasteiz y San Sebastián —las tres capitales vascas—, lo que implica límites legales a la subida de renta en nuevos contratos de alquiler. En el Gran Bilbao es además frecuente que el propietario no pueda desplazarse en 24 horas cuando salta una avería en ascensor o fachada; centralizamos el canal con el inquilino, pedimos certificados de comunidad cuando toca y documentamos cada incidencia, siempre teniendo en cuenta los límites de actualización vigentes en Abando, Deusto, Barakaldo o Portugalete.",
    howIntro:
      "Intermediación desde el primer día, gestión de consultas del inquilino, coordinación de reparaciones y avisos solo cuando requiere decisión vuestra — con atención específica a los límites de renta de la zona tensionada vigente desde octubre de 2025 en Bilbao, Getxo, Barakaldo, Portugalete o el resto del área metropolitana.",
    faq: [
      {
        question: "¿Está Bilbao declarada zona tensionada?",
        answer:
          "Sí. Bilbao está declarada zona de mercado residencial tensionado desde el 31 de octubre de 2025, junto con Vitoria-Gasteiz y San Sebastián, las tres capitales vascas. Esto implica límites legales a la subida de renta en nuevos contratos de alquiler.",
      },
      {
        question: "¿Cuál es el precio medio del alquiler en Bilbao?",
        answer:
          "Según el índice de precios de referencia del Ministerio de Vivienda (en vigor desde abril de 2026), el precio medio se sitúa entre 700 y 950 €/mes, siendo 800 € el importe más habitual.",
      },
      {
        question: "¿Qué significa que Bilbao sea zona tensionada para una renovación de contrato?",
        answer:
          "En los nuevos contratos de alquiler en Bilbao se aplican límites legales a la subida de renta, y existen condiciones específicas si el propietario es considerado gran tenedor. Tu gestor puede confirmarte cómo aplica esto a tu contrato concreto.",
      },
    ],
    barriosIntro:
      "Administramos alquileres en los barrios y municipios del Gran Bilbao con más demanda residencial.",
    barrios: [
      "Abando",
      "Deusto",
      "Indautxu",
      "Basurto",
      "Rekalde",
      "Begoña",
      "Getxo",
      "Barakaldo",
      "Portugalete",
      "Santurtzi",
      "Leioa",
      "Erandio",
    ],
    testimonialsTitle: "Propietarios en Bilbao que delegaron el contacto con el inquilino en Livendia",
    testimonials: [
      {
        quote:
          "Mi piso está en Deusto, dentro de la zona tensionada desde octubre de 2025. Antes de renovar el contrato no tenía claro qué subida de renta era legal; Livendia me confirma el límite exacto y además coordina cerrajero y fontanería con el inquilino.",
        author: "Ander L.",
        role: "Propietario, Deusto (zona tensionada)",
      },
      {
        quote:
          "Alquilo en Getxo, en un edificio antiguo con comunidad exigente. Cuando hubo una avería de ascensor, Livendia explicó al inquilino el protocolo con la comunidad sin que yo tuviera que mediar personalmente.",
        author: "Maite S.",
        role: "Propietaria, Getxo",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Bilbao desde 49 €/mes sin permanencia: panel online, WhatsApp profesional y gestor colegiado.",
  },
];
