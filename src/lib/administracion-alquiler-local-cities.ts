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
    heroLead:
      "Capital y corona regional con enorme volumen de viviendas en alquiler: propietarios con varios pisos y pequeños inversores comparten el mismo dolor — llamadas fuera de horario, urgencias en ascensores u hormigas veraniegas y discordancias sobre quién coordina cada reparación. Livendia actúa como único intermediario ante el inquilino para que vosotros decidáis solo lo que merece vuestra firma.",
    whyIntro:
      "En Madrid muchos conflictos empiezan por mensajes dispersos entre WhatsApp particular y mails de administradores de fincas. Centralizamos el canal hasta el inquilino, ordenamos urgencias desde la incidencia en el portal y documentamos cada paso hasta el cierre, compatible con agendas de distrito Centro, Salamanca o barrios como Lavapiés.",
    howIntro:
      "Cuatro fases igual que nuestra página general de administración, adaptadas cuando el arrendamiento transcurre entre el ensanche madrileño y municipios cercanos donde también gestionamos el mismo protocolo profesional.",
    testimonialsTitle: "Propietarios en Madrid que ya delegaron el contacto con el inquilino",
    testimonials: [
      {
        quote:
          "Tengo tres pisos entre Chamartín y Tetuán. Antes perdía noches revisando chats; ahora solo me llaman cuando hace falta firmar algo o cuando entra una renta. La cuota compensa el tiempo que ya no pierdo.",
        author: "Fernando R.",
        role: "Propietario, Madrid norte",
      },
      {
        quote:
          "Vivimos fuera y el vecindario suele tener ruidos o ascensores viejos. Livendia filtraba lo menor y cuando hubo avería grave coordinaron empresa y avisos sin que yo llamara tres veces a la comunidad.",
        author: "Cristina V.",
        role: "Propietaria en alquiler, distrito Retiro",
      },
    ],
    finalCtaLead:
      "Contrata desde 49 € al mes sin permanencia: nos convertimos en vuestro interlocutor con el inquilino en Madrid, con mismo panel y WhatsApp profesional que en el servicio nacional.",
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "En Barcelona ciudad y área metropolitana coexisten alta demanda habitacional y normativas comunales exigentes. Los propietarios reciben dudas sobre subarrendamientos locales, obra menor o suministro compartido. Nosotros damos canal único ante el arrendatario, mediamos con tono cercano pero firme y os resumimos lo que verdaderamente requiere decisión vuestra antes de ejecutar cualquier orden de trabajo.",
    whyIntro:
      "Aquí suele aumentar la fricción entre propiedad, comunidad e inquilino por idioma distinto del contrato verbal y la práctica cotidiana. Un administrador profesional amortigua esas diferencias antes de escalarlas: filtros coherentes para incidencias, calendarios de comunidad solicitados cuando toca y trazabilidad que encaja tanto en Eixample como en Nou Barris o municipios próximos al TRAM.",
    howIntro:
      "Replicamos el flujo Livendia de onboarding, intermediación, ejecución y reporting, con comunicación ágil incluso cuando el uso del piso oscila entre vivienda habitual y estancias acotadas pactadas contractualmente.",
    testimonialsTitle: "Propietarias y propietarios en Barcelona ya descansaron del día a día con Livendia",
    testimonials: [
      {
        quote:
          "Piso turístico regularizado también lo alquilo por temporadas intermedias cuando la norma lo permite. Livendia supo distinguir qué consulta tocaba cada canal y nos evitamos cruce de mensajes con el vecino del rellano.",
        author: "Jordi L.",
        role: "Propietario, Sant Martí",
      },
      {
        quote:
          "Alquilo habitaciones con normas escritas desde el día uno. Livendia atiende llamadas cuando una compañera nueva entra el fin de semana y yo trabajo en sector retail sin poder coger el teléfono.",
        author: "Miriam K.",
        role: "Propietaria, zona universitaria Besòs",
      },
    ],
    finalCtaLead:
      "Activa administración profesional Livendia en Barcelona con un solo clic al checkout: mismo precio publicado sin permanencia, contacto WhatsApp igual que vuestra página /servicios/administracion-alquiler.",
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroLead:
      "Valencia capital y Horta combinan llegada de población local e internacional, pisos rehabilitados frente al mar y amplias zonas con ascensores y terrazas comunitarias donde surgen fugas sin avisar quién debe abrir técnico. Como gestoría inmobiliaria digital, Livendia asume el día a día con el arrendatario mientras vosotros verificáis solo lo que marca la cuenta o la firma de facturas relevantes.",
    whyIntro:
      "El ciclo rápido de visitas—contrato suele hacer que lleguen incidencias en los primeros quince días después de entrar muebles nuevos o encender primera vez el electrodoméstico. Anticipamos el caos inicial con checklist y seguimiento, útil igualmente si el bien está en Ciutat Vella, Extramurs o cercanías de Torrent y Paiporta donde muchos propietarios viven fuera.",
    howIntro:
      "Mismo esquema de cuatro pasos que en Livendia: intermediación continua hasta que la relación lleva orden y los recordatorios sobre renovaciones o IPC no os pillan en silencio de buzón antiguo.",
    testimonialsTitle: "Propietarios en Valencia que llevaron las incidencias al despacho Livendia",
    testimonials: [
      {
        quote:
          "Soy médico residente fuera desde hace año y medio y el apartamento junto mercado lo alquilo amueblado. Ellos llamaron cerrajero válido comunidad antes de autorizar obra y yo solo vi el parte final consolidado.",
        author: "Héctor G.",
        role: "Propietario en alquiler, Cabanyal",
      },
      {
        quote:
          "Comparten edificios con segunda residencia; los vecinos llaman comunidad rápido. Livendia explicaba al inquilino cuando era su tubería interior y cuando procedía comunicar al presidente: menos malentendidos en el grupo del vecindario.",
        author: "Inés & Pedro",
        role: "Copropiedad en alquiler, Benimaclet",
      },
    ],
    finalCtaLead:
      "Suscripciones Stripe como en cualquier ciudad: activáis administración profesional Valencia con soporte igual al resto del territorio español donde opera Livendia.",
  },
  {
    slug: "mallorca",
    city: "Palma de Mallorca",
    schemaAdministrativeArea: "Islas Baleares",
    heroLead:
      "Mallorca concentra una de las subidas de alquiler más intensas de España (+51 % entre 2022 y 2025). Propietarios con piso en Palma, Calvià, Manacor o segunda residencia en la costa comparten el mismo problema: inquilinos que llaman en temporada alta, averías en comunidades con mucha rotación y dudas sobre renovaciones cuando el mercado presiona al alza. Livendia es vuestro único interlocutor ante el arrendatario para que solo decidáis lo que requiere firma o inversión relevante.",
    whyIntro:
      "En las Baleares conviven alquiler de larga duración, estancias estacionales y propietarios que viven fuera de la isla. Sin canal profesional, las incidencias se mezclan con WhatsApp personal y el vecino de la finca acaba mediando antes que el gestor. Centralizamos comunicaciones, filtramos urgencias reales —fontanería, climatización, cerrajería en verano— y documentamos cada paso con el mismo protocolo Livendia que en la península, adaptado al ritmo balear.",
    howIntro:
      "Cuatro fases idénticas al servicio nacional: intermediación desde el primer día, gestión de consultas del inquilino, coordinación de reparaciones y avisos solo cuando hace falta vuestra decisión. Útil tanto en Palma ciudad como en municipios costeros donde el propietario no puede desplazarse en 24 horas.",
    testimonialsTitle: "Propietarios en Mallorca que delegaron el día a día del alquiler en Livendia",
    testimonials: [
      {
        quote:
          "Tengo un piso en Palma que alquilo todo el año y paso temporadas en la península. Antes perdía fines de semana con llamadas de averías; ahora Livendia coordina técnico y comunidad y yo solo veo el resumen cuando toca autorizar gasto.",
        author: "Margarita S.",
        role: "Propietaria, Palma — Son Espanyolet",
      },
      {
        quote:
          "Alquilamos apartamento en zona turística con contrato LAU bien hecho, pero las incidencias no entienden de calendario. Ellos atienden al inquilino en verano cuando nosotros estamos fuera y filtran lo que no es nuestra responsabilidad.",
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
    heroLead:
      "Sevilla capital y área metropolitana concentran alquiler habitual, estancias académicas y segunda residencia: propietarios que viven fuera reciben llamadas de averías, dudas sobre IPC y conflictos con la comunidad. Livendia es vuestro único interlocutor ante el inquilino para que solo firméis lo que merece vuestra decisión.",
    whyIntro:
      "En barrios como Triana, Nervión o Los Remedios la rotación de inquilinos acelera incidencias en los primeros quince días. Sin canal profesional, WhatsApp personal y el presidente de la comunidad acaban mediando antes que un gestor. Centralizamos comunicaciones y documentamos cada paso.",
    howIntro:
      "Cuatro fases idénticas al servicio nacional: intermediación, gestión de consultas, coordinación de reparaciones y avisos solo cuando hace falta vuestra firma — en Sevilla, Tomares, Dos Hermanas o municipios cercanos.",
    testimonialsTitle: "Propietarios en Sevilla que delegaron el día a día del alquiler en Livendia",
    testimonials: [
      {
        quote:
          "Alquilo en Macarena y trabajo fuera de la ciudad. Livendia atiende al inquilino, coordina fontanería y yo solo apruebo cuando el gasto supera el umbral que pactamos.",
        author: "Elena R.",
        role: "Propietaria, Macarena",
      },
      {
        quote:
          "Piso en Los Remedios con contrato LAU bien hecho, pero las averías no entienden de horario. Ellos filtran lo urgente y me resumen por WhatsApp lo importante.",
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
    heroLead:
      "Málaga capital y Costa del Sol mezclan alquiler residencial, temporada y propietarios en la península: incidencias en verano, averías en comunidades con mucha rotación y dudas sobre renovaciones cuando el mercado presiona. Livendia canaliza todo con el inquilino para que no perdáis fines de semana en llamadas.",
    whyIntro:
      "En Teatinos, El Palo o municipios como Torremolinos o Rincón de la Victoria es frecuente que el propietario no pueda desplazarse en 24 h. Un gestor profesional amortigua conflictos sobre suministros, ocupación y reparaciones antes de que escalen a la junta de vecinos.",
    howIntro:
      "Mismo protocolo Livendia en cuatro hitos: onboarding, intermediación con el arrendatario, ejecución de incidencias y reporting — válido para vivienda habitual o segunda residencia en la costa.",
    testimonialsTitle: "Propietarios en Málaga que delegaron el contacto con el inquilino en Livendia",
    testimonials: [
      {
        quote:
          "Tengo piso en Teatinos y vivo en Madrid. Antes perdía noches con WhatsApp del inquilino; ahora Livendia coordina técnico y comunidad y yo solo veo el resumen cuando toca autorizar.",
        author: "Laura P.",
        role: "Propietaria, Teatinos",
      },
      {
        quote:
          "Apartamento en la costa alquilado todo el año. Filtran incidencias menores y cuando hubo humedad coordinaron empresa sin que yo llamara tres veces al vecino.",
        author: "Antonio R.",
        role: "Propietario, Torremolinos",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Málaga desde 49 €/mes sin permanencia: mismo checkout Stripe, panel online y WhatsApp que en el servicio nacional de Livendia.",
  },
];
