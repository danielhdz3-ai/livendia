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
    heroLead:
      "Capital y corona regional con enorme volumen de viviendas en alquiler: propietarios con varios pisos y pequeños inversores comparten el mismo dolor — llamadas fuera de horario, urgencias en ascensores u hormigas veraniegas y discordancias sobre quién coordina cada reparación. Livendia actúa como único intermediario ante el inquilino para que vosotros decidáis solo lo que merece vuestra firma.",
    whyIntro:
      "En Madrid muchos conflictos empiezan por mensajes dispersos entre WhatsApp particular y mails de administradores de fincas. Centralizamos el canal hasta el inquilino, ordenamos urgencias desde la incidencia en el portal y documentamos cada paso hasta el cierre, compatible con agendas de distrito Centro, Salamanca o barrios como Lavapiés.",
    howIntro:
      "Onboarding con datos del inmueble y del inquilino, intermediación como único canal de contacto, coordinación de incidencias con técnicos y comunidad, y avisos solo cuando hace falta vuestra firma — en el ensanche madrileño, barrios periféricos o municipios del cinturón donde no podéis desplazaros en 24 horas.",
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
      "Registramos contrato y contactos, asumimos la intermediación con el arrendatario, gestionamos incidencias con trazabilidad y os informamos solo de pagos, renovaciones o decisiones que requieran vuestra aprobación — en Eixample, Nou Barris o municipios del TRAM.",
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
      "Alta del arrendamiento en panel, canal único con el inquilino, resolución de averías con proveedores de confianza y resumen periódico de lo relevante — especialmente útil en los primeros quince días tras la entrada de muebles o electrodomésticos.",
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
      "Intermediación desde el primer día, gestión de consultas del inquilino, coordinación de reparaciones y avisos solo cuando hace falta vuestra decisión — en Palma ciudad o municipios costeros donde el propietario no puede desplazarse en 24 horas.",
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
      "Intermediación con el inquilino, gestión de consultas, coordinación de reparaciones y avisos solo cuando hace falta vuestra firma — en Triana, Nervión, Los Remedios, Tomares, Dos Hermanas o municipios del área metropolitana.",
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
      "Onboarding, intermediación con el arrendatario, ejecución de incidencias y reporting claro — válido para vivienda habitual o segunda residencia en Teatinos, El Palo, Torremolinos o la costa.",
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
  {
    slug: "oviedo",
    city: "Oviedo",
    schemaAdministrativeArea: "Principado de Asturias",
    heroImage: "/images/oviedo2.jpg",
    heroLead:
      "Oviedo concentra demanda de alquiler universitario, familias en expansión y propietarios que viven fuera del Principado. Entre La Ería, Los Pilares y el casco histórico surgen incidencias de humedades, ascensores antiguos y dudas sobre comunidad que no entienden de horario laboral. Livendia es vuestro único interlocutor ante el inquilino: filtramos urgencias, coordinamos técnicos y solo os avisamos cuando hace falta vuestra firma o autorización de gasto.",
    whyIntro:
      "En Oviedo es habitual alquilar pisos amueblados cerca del campus o en Ciudad Naranco mientras el propietario reside en Madrid, León o la costa. Sin canal profesional, WhatsApp personal y el presidente de la comunidad acaban mediando antes que un gestor. Centralizamos comunicaciones, pedimos certificados de comunidad cuando toca y documentamos cada incidencia — útil en El Cristo, Pumarín, La Florida o municipios del área como Siero y Lugones.",
    howIntro:
      "Intermediación desde el primer día, gestión de consultas del inquilino, coordinación de reparaciones y avisos solo cuando requiere decisión vuestra — en Oviedo capital, Siero, Lugones o Langreo.",
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
          "Alquilo un piso en La Ería cerca de la uni y vivo en Madrid. Antes perdía tardes con averías de caldera; ahora Livendia coordina fontanero y comunidad y yo solo apruebo cuando el gasto supera lo pactado.",
        author: "María S.",
        role: "Propietaria, La Ería",
      },
      {
        quote:
          "Piso en Los Pilares con inquilino joven. Filtran consultas menores y cuando hubo humedad en fachada explicaron al inquilino qué era responsabilidad suya y qué tocaba comunidad.",
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
    heroLead:
      "Gijón mezcla alquiler residencial en La Arena y El Natahoyo, pisos cerca del campus en Somió y propietarios en la península que no pueden desplazarse en 24 horas cuando salta una avería. Entre Cimadevilla, Laviada y Montevil conviven edificios históricos, comunidades con derramas y inquilinos que llaman fuera de horario. Livendia canaliza todo con el arrendatario para que no perdáis fines de semana en llamadas.",
    whyIntro:
      "En Gijón la fricción habitual es distinguir avería interior de problema de fachada o ascensor comunitario — sobre todo en La Arena, El Natahoyo y el Centro. Un gestor profesional amortigua conflictos con el vecindario, filtra incidencias reales y mantiene trazabilidad antes de que escalen a la junta de propietarios.",
    howIntro:
      "Alta del contrato, intermediación con el arrendatario, resolución de incidencias y avisos puntuales — en La Arena, El Natahoyo, Somió, litoral o concejos limítrofes como Carreño y Avilés.",
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
          "Tengo piso en La Arena y trabajo en Bilbao. Livendia atiende al inquilino, coordina cerrajero y fontanería y yo solo veo el resumen cuando toca autorizar.",
        author: "Patricia L.",
        role: "Propietaria, La Arena",
      },
      {
        quote:
          "Alquilo en Somió cerca del campus. Ellos gestionan entradas de inquilinos nuevos en septiembre y yo no recibo llamadas un domingo a las once de la noche.",
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
    heroLead:
      "Zaragoza concentra demanda en Centro, Romareda, Actur y barrios universitarios con precios medios en torno a 2.250–2.300 €/m² en 2026. Propietarios con pisos en Delicias, Las Fuentes o Torrero-La Paz reciben llamadas de averías, dudas sobre IRAV en zonas tensionadas y conflictos con la comunidad. Livendia canaliza todo con el inquilino para que solo firméis lo que merece vuestra decisión.",
    whyIntro:
      "En barrios como Romareda, Universidad o Casco Histórico (2.600–2.800 €/m²) la rotación acelera incidencias en los primeros quince días. Sin canal profesional, WhatsApp personal y el presidente de la comunidad acaban mediando antes que un gestor. Centralizamos comunicaciones y documentamos cada paso.",
    howIntro:
      "Intermediación desde el primer día, gestión de consultas, coordinación de reparaciones y avisos solo cuando hace falta vuestra firma — en Zaragoza capital, Utebo, Cuarte de Huerva o Valdespartera.",
    barriosIntro:
      "Administramos alquileres en los barrios con más presión de mercado y rotación de inquilinos en Aragón.",
    barrios: [
      "Centro",
      "Casco Histórico",
      "Delicias",
      "Las Fuentes",
      "Actur",
      "Romareda",
      "Universidad",
      "Parque Goya",
      "Valdespartera",
      "Torrero-La Paz",
      "Rosales del Canal",
      "Utebo",
      "Cuarte de Huerva",
    ],
    testimonialsTitle: "Propietarios en Zaragoza que delegaron el contacto con el inquilino en Livendia",
    testimonials: [
      {
        quote:
          "Alquilo en Romareda cerca del campus y vivo en Madrid. Livendia atiende al inquilino, coordina fontanería y yo solo apruebo cuando el gasto supera lo pactado.",
        author: "Lucía M.",
        role: "Propietaria, Romareda",
      },
      {
        quote:
          "Piso en Delicias con inquilino joven. Filtran consultas menores y cuando hubo humedad explicaron qué era responsabilidad suya y qué tocaba comunidad.",
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
    heroLead:
      "Murcia capital y pedanías como Sucina o Corvera viven una subida fuerte de precios (media regional ~1.700–2.000 €/m² en 2026). Propietarios en Santa Catalina-San Bartolomé, San Miguel o El Carmen reciben incidencias, dudas sobre renovaciones y conflictos con la comunidad. Livendia es vuestro único interlocutor ante el inquilino.",
    whyIntro:
      "En barrios premium como Santa Catalina-San Bartolomé o San Miguel (+3.000 €/m²) y en pedanías en boom inversor, la fricción habitual es distinguir avería interior de problema comunitario. Un gestor profesional amortigua conflictos antes de que escalen a la junta de propietarios.",
    howIntro:
      "Onboarding, intermediación con el arrendatario, coordinación de incidencias y avisos puntuales — en Murcia capital, Espinardo, El Palmar, Molina de Segura o pedanías del área metropolitana.",
    barriosIntro:
      "Cubrimos administración de alquiler en capital, huerta metropolitana y pedanías con alta rotación.",
    barrios: [
      "Centro",
      "Santa Catalina-San Bartolomé",
      "San Miguel",
      "El Carmen",
      "Espinardo",
      "Vistabella",
      "El Palmar",
      "Sucina",
      "Corvera",
      "Alcantarilla",
      "Molina de Segura",
      "Alguazas",
    ],
    testimonialsTitle: "Propietarios en Murcia que delegaron el día a día del alquiler en Livendia",
    testimonials: [
      {
        quote:
          "Tengo piso en Espinardo y trabajo fuera. Antes perdía fines de semana con WhatsApp del inquilino; ahora Livendia coordina técnico y comunidad y yo solo veo el resumen cuando toca autorizar.",
        author: "Carmen R.",
        role: "Propietaria, Espinardo",
      },
      {
        quote:
          "Alquilamos en zona cerca de Sucina con contrato LAU bien hecho. Ellos filtran incidencias menores y cuando hubo avería de climatización coordinaron empresa sin que yo llamara al vecino.",
        author: "Francisco T.",
        role: "Propietario, pedanía sur",
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
    heroLead:
      "Bizkaia y Bilbao capital tienen mercado comprimido: propietarios en Abando, Deusto, Indautxu o Getxo reciben incidencias, dudas sobre normativa vasca de arrendamientos y conflictos con comunidades de edificios históricos. Livendia actúa como único intermediario ante el inquilino para que vosotros decidáis solo lo que merece vuestra firma.",
    whyIntro:
      "En el Gran Bilbao es frecuente que el propietario no pueda desplazarse en 24 h cuando salta una avería en ascensor o fachada. Centralizamos el canal con el inquilino, pedimos certificados de comunidad cuando toca y documentamos cada incidencia — en Abando, Deusto, Barakaldo o Portugalete.",
    howIntro:
      "Intermediación desde el primer día, gestión de consultas del inquilino, coordinación de reparaciones y avisos solo cuando requiere decisión vuestra — en Bilbao, Getxo, Barakaldo, Portugalete o municipios del área metropolitana.",
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
          "Tengo piso en Deusto y vivo en Madrid. Livendia atiende al inquilino, coordina cerrajero y fontanería y yo solo veo el resumen cuando toca autorizar gasto.",
        author: "Ander L.",
        role: "Propietario, Deusto",
      },
      {
        quote:
          "Alquilo en Getxo con inquilino estable. Filtran consultas menores y cuando hubo avería de ascensor explicaron al inquilino el protocolo con la comunidad.",
        author: "Maite S.",
        role: "Propietaria, Getxo",
      },
    ],
    finalCtaLead:
      "Contrata administración profesional en Bilbao desde 49 €/mes sin permanencia: panel online, WhatsApp profesional y gestor colegiado.",
  },
];
