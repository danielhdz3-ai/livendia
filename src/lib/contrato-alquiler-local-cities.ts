/**
 * Landings SEO locales: contrato de alquiler por ciudad (España).
 * Rutas: /servicios/contrato-alquiler-local/[slug]
 *
 * **Publicación gradual:** puedes dejar borradores en `CONTRATO_ALQUILER_LOCAL_CITIES` y solo añadir el
 * `slug` a `CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS` cuando quieras indexar la página (ruta, sitemap,
 * enlaces internos). Así reduces el riesgo de que parezca contenido masivo de golpe.
 */

import { ALQUILER_LOCAL_DIFFERENTIATION } from "@/lib/contrato-alquiler-local-differentiation";
import { enrichWithCityMarketProfile } from "@/lib/attach-local-city-market-profile";
import type { LocalCityLandingFields } from "@/lib/local-city-landing-fields";
import { mergeLocalDifferentiation } from "@/lib/merge-local-differentiation";

export const CONTRATO_ALQUILER_LOCAL_BASE = "/servicios/contrato-alquiler-local";

/**
 * Slugs ya públicos (Google + enlaces del sitio). Añade aquí ciudades de una en una cuando las des a conocer.
 */
export const CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "barcelona-les-corts",
  "barcelona-gracia",
  "hospitalet-de-llobregat",
  "cornella-de-llobregat",
  "valencia",
  "asturias",
  "sevilla",
  "malaga",
  "zaragoza",
  "murcia",
  "palma",
  "las-palmas",
  "bilbao",
  "alicante",
  "cordoba",
  "valladolid",
  "vigo",
  "gijon",
  "granada",
  "santander",
  "pamplona",
];

export function isContratoAlquilerLocalSlugPublished(slug: string): boolean {
  return CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

/** Ciudades enlazadas en hub, footer, servicios, etc. (solo las publicadas). */
export function getPublishedContratoAlquilerLocalCities(): ContratoAlquilerLocalCityDefinition[] {
  const pub = new Set(CONTRATO_ALQUILER_LOCAL_PUBLISHED_SLUGS);
  return CONTRATO_ALQUILER_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type ContratoAlquilerLocalLandingConfig = {
  path: string;
  city: string;
  schemaAdministrativeArea: string;
  heroLead: string;
  whyIntro: string;
  howIntro: string;
  testimonialsTitle: string;
  testimonials: { quote: string; author: string; role: string }[];
  finalCtaLead: string;
  faq?: readonly { question: string; answer: string }[];
} & LocalCityLandingFields;

export type ContratoAlquilerLocalCityDefinition = Omit<ContratoAlquilerLocalLandingConfig, "path"> & {
  slug: string;
};

export function localContratoAlquilerHref(slug: string): string {
  return `${CONTRATO_ALQUILER_LOCAL_BASE}/${slug}`;
}

export function toLandingConfig(def: ContratoAlquilerLocalCityDefinition): ContratoAlquilerLocalLandingConfig {
  const diff = ALQUILER_LOCAL_DIFFERENTIATION[def.slug] ?? {};
  const merged = mergeLocalDifferentiation(
    { ...def, path: localContratoAlquilerHref(def.slug) },
    diff,
  );
  return enrichWithCityMarketProfile(def.slug, "alquiler-lau", merged) as ContratoAlquilerLocalLandingConfig;
}

export function getContratoAlquilerLocalCity(slug: string): ContratoAlquilerLocalCityDefinition | undefined {
  return CONTRATO_ALQUILER_LOCAL_CITIES.find((c) => c.slug === slug);
}

/** Orden aproximado por volumen de mercado arrendaticio; estable para hub y footer */
export const CONTRATO_ALQUILER_LOCAL_CITIES: ContratoAlquilerLocalCityDefinition[] = [
  {
    slug: "madrid",
    city: "Madrid",
    schemaAdministrativeArea: "Comunidad de Madrid",
    heroLead:
      "En Madrid capital y alrededores, un gestor inmobiliario especializado en LAU revisa tu contrato, ordena las cláusulas sensibles y documenta el estado del inmueble para que propiedad e inquilino firmen con las mismas garantías que en una gestoría presencial, con proceso digital claro.",
    whyIntro:
      "El mercado de alquiler en Madrid mueve miles de contratos al año y los conflictos suelen nacer de plantillas mal adaptadas o inventarios incompletos. Anticipamos esas fricciones con revisión profesional y documentación útil desde el primer día.",
    howIntro:
      "Cuatro hitos claros desde que nos cuentas tu caso hasta que ambas partes firman con seguridad, estés en Retiro, Tetuán, Chamberí o municipios limítrofes.",
    testimonialsTitle: "Propietarios e inquilinos en Madrid que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Teníamos una plantilla de la agencia con lagunas sobre gastos de la comunidad. Livendia lo dejó cerrado antes de formalizar la fianza y el depósito.",
        author: "Elena V.",
        role: "Propietaria, distrito Centro (Madrid)",
      },
      {
        quote:
          "Alquiler de habitación en piso compartido: necesitábamos límites claros de zonas comunes y limpieza. El contrato reflejó lo que habíamos pactado verbalmente.",
        author: "Marc & Júlia",
        role: "Inquilinos, Chamberí",
      },
    ],
    finalCtaLead:
      "Elige LAU, temporada o habitación y completa el pago seguro en segundos. Tu expediente queda ordenado con inventario y revisiones listas para una firma informada en Madrid.",
  },
  {
    slug: "barcelona",
    city: "Barcelona",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "En Barcelona ciudad y área metropolitana, un gestor inmobiliario especializado en LAU revisa tu contrato, ordena las cláusulas sensibles y documenta el estado del inmueble para que propiedad e inquilino firmen con garantías claras, con seguimiento digital y respuesta cercana.",
    whyIntro:
      "El alquiler en Barcelona combina alta rotación, pisos turísticos regulados y tensiones sobre rentas y gastos. Un contrato bien cerrado reduce litigios posteriores; nos centramos en que el texto sea coherente con la LAU y con lo que habéis acordado.",
    howIntro:
      "Cuatro hitos claros desde que nos cuentas tu caso hasta que ambas partes firman con seguridad, estés en el Eixample, Gràcia, Sant Martí u otros municipios del entorno.",
    testimonialsTitle: "Propietarios e inquilinos en Barcelona que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Alquiler por temporadas en un piso céntrico: necesitábamos límites explícitos sobre estancia máxima y suministros. Livendia cuadró el borrador con lo pactado.",
        author: "Jaume R.",
        role: "Propietario, Eixample Esquerre",
      },
      {
        quote:
          "Contrato LAU para vivienda habitual: revisaron actualización de renta y comunidad antes de que firmáramos. Evitamos una cláusula ambigua sobre reformas.",
        author: "Nuria & Pau",
        role: "Arrendatarios, Gràcia",
      },
    ],
    finalCtaLead:
      "Elige LAU, temporada o habitación y completa el pago seguro en segundos. Tu expediente queda ordenado con inventario y revisiones listas para una firma informada en Barcelona.",
  },
  {
    slug: "barcelona-les-corts",
    city: "Les Corts",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "¿Alquilas o alquilas en Les Corts entre particulares — por Idealista, recomendación o porque ya os conocíais — sin agencia intermediaria? Por 145 € IVA incl. Livendia redacta o revisa tu contrato LAU con inventario, cumplimiento de zona tensionada e INCASÒL explicado antes de firmar.",
    whyIntro:
      "En Les Corts muchos arrendamientos cierran directo entre propietario e inquilino cerca de Diagonal, la zona universitaria o el entorno del Camp Nou. Las plantillas copiadas de internet no contemplan el tope de renta de Barcelona ni el depósito en INCASÒL — y ahí empiezan los conflictos.",
    howIntro:
      "Cuatro hitos hasta firmar con seguridad en Les Corts, Pedralbes, la Zona Universitària o el entorno del Camp Nou.",
    testimonialsTitle: "Particulares en Les Corts que cerraron su contrato LAU con Livendia",
    testimonials: [
      {
        quote:
          "Encontré inquilino por Idealista en Pedralbes y el propietario me pasó un PDF genérico. Livendia adaptó la renta anterior de zona tensionada y el depósito INCASÒL antes de la fianza.",
        author: "Clara V.",
        role: "Inquilina · Les Corts",
      },
      {
        quote:
          "Alquilo cerca de la Zona Universitària sin agencia. El gestor dejó por escrito comunidad, inventario y visitas del propietario — todo en castellano claro.",
        author: "Marc T.",
        role: "Propietario · Les Corts",
      },
    ],
    finalCtaLead:
      "Contrata LAU, temporada o habitación online y firma en Les Corts con contrato revisado — gestoría Livendia, no inmobiliaria.",
  },
  {
    slug: "barcelona-gracia",
    city: "Gràcia",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "¿Tienes contraparte en Gràcia y quieres firmar sin pagar comisión de agencia? Redacción o revisión de contrato LAU entre propietario e inquilino particular desde 145 € IVA incl. — Vila de Gràcia, Camp d'en Grassot o la Salut, con inventario y normativa catalana aplicada.",
    whyIntro:
      "Gràcia mezcla pisos señoriales, compartidos de estudiantes y alquileres que cierran en días por Idealista. Sin gestor, las cláusulas sobre reformas, ruido o subarriendo quedan ambiguas y la zona tensionada de Barcelona exige informar la renta anterior.",
    howIntro:
      "Cuatro pasos hasta rubricar con seguridad en Vila de Gràcia, Camp d'en Grassot, la Salut o Vallcarca.",
    testimonialsTitle: "Propietarios e inquilinos en Gràcia que alquilaron entre particulares con Livendia",
    testimonials: [
      {
        quote:
          "Alquilaba una habitación en un piso de Gràcia sin contrato serio. Livendia redactó LAU con normas de convivencia y explicó el tope de renta antes de entrar.",
        author: "Laura M.",
        role: "Propietaria · Vila de Gràcia",
      },
      {
        quote:
          "Entramos en un piso en Camp d'en Grassot con acuerdo verbal. El gestor cerró comunidad, fianza INCASÒL e inventario fotográfico — sin intermediario inmobiliario.",
        author: "Nuria & Pau",
        role: "Inquilinos · Gràcia",
      },
    ],
    finalCtaLead:
      "Elige modalidad y deja listo tu expediente antes de firmar en Gràcia — particulares con gestoría profesional.",
  },
  {
    slug: "hospitalet-de-llobregat",
    city: "L'Hospitalet",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "¿Alquilas en L'Hospitalet entre particulares — Collblanc, Bellvitge, La Florida o centre — sin agencia? Contrato LAU redactado o revisado por 145 € IVA incl. Gestoría Livendia: INCASÒL, zona tensionada e inventario antes de entregar la fianza.",
    whyIntro:
      "L'Hospitalet concentra alquileres rápidos entre propietario e inquilino cuando el precio es más asequible que Barcelona capital. Los borradores suelen ser copias barcelonesas que no reflejan plazos reales de comunidad en bloques densos ni el depósito correcto en INCASÒL.",
    howIntro:
      "Cuatro hitos hasta la firma en Collblanc, Bellvitge, La Florida, Sant Josep o el centre de L'Hospitalet.",
    testimonialsTitle: "Particulares en L'Hospitalet que revisaron su contrato de alquiler con Livendia",
    testimonials: [
      {
        quote:
          "Encontré piso en Bellvitge por Idealista y el casero iba con prisas. Livendia revisó renta anterior, fianza y comunidad antes de que transfiriera la señal.",
        author: "Noelia R.",
        role: "Inquilina · L'Hospitalet",
      },
      {
        quote:
          "Alquilo en Collblanc sin inmobiliaria. El contrato LAU quedó con inventario y cláusulas de mantenimiento claras — 145 € frente a lo que pedía una agencia solo por redactar.",
        author: "Andreu S.",
        role: "Propietario · L'Hospitalet",
      },
    ],
    finalCtaLead:
      "Contrata online el pack LAU, temporada o habitación y firma en L'Hospitalet con gestoría — no comisión de agencia.",
  },
  {
    slug: "cornella-de-llobregat",
    city: "Cornellà",
    schemaAdministrativeArea: "Cataluña",
    heroLead:
      "¿Propietario e inquilino en Cornellà de Llobregat — Sant Ildefons, Can Mercader o centre — y queréis contrato LAU sin agencia? Redacción profesional desde 145 € IVA incl. con inventario, INCASÒL y revisión de zona tensionada del Baix Llobregat.",
    whyIntro:
      "Cornellà comparte mercado metropolitano con L'Hospitalet: muchos inquilinos llegan desde Barcelona y cierran alquiler entre particulares. Sin revisión legal, los PDF genéricos ignoran plazos de comunidad y la obligación de informar la renta del contrato anterior.",
    howIntro:
      "Cuatro pasos hasta firmar con seguridad en Sant Ildefons, Can Mercader, el centre o la zona próxima a la estación de Renfe.",
    testimonialsTitle: "Arrendadores e inquilinos en Cornellà que cerraron contrato entre particulares",
    testimonials: [
      {
        quote:
          "Alquilé en Sant Ildefons sin agencia. Livendia adaptó el contrato al piso real, incluyó inventario y me explicó el depósito en INCASÒL antes de firmar.",
        author: "Marta L.",
        role: "Propietaria · Cornellà",
      },
      {
        quote:
          "Entré en un piso del centre con acuerdo por WhatsApp. El gestor cerró LAU, gastos de comunidad y preaviso de salida — todo por 145 € IVA incl.",
        author: "David K.",
        role: "Inquilino · Cornellà de Llobregat",
      },
    ],
    finalCtaLead:
      "Contrata LAU, temporada o habitación y prepara una firma ordenada en Cornellà — gestoría para particulares.",
  },
  {
    slug: "valencia",
    city: "Valencia",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroLead:
      "En Valencia capital y área metropolitana, revisamos tu contrato de alquiler con foco LAU, inventario del inmueble y lenguaje claro para propiedad e inquilino, con tramitación online y tiempos publicados.",
    whyIntro:
      "La demanda de vivienda en alquiler en Valencia crece y proliferan borradores incongruentes con la normativa o con los pactos verbales. Afinamos cláusulas sensibles para que la firma sea defendible después.",
    howIntro:
      "Cuatro hitos hasta la firma con seguridad: puedes estar en Ciutat Vella, l'Eixample, Ruzafa o en municipios como Torrent o Paterna.",
    testimonialsTitle: "Propietarios e inquilinos en Valencia que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Necesitábamos cerrar comunidad de gastos y una revisión anual que cuadrara con lo que habíamos hablado en la visita. Salimos sin ‘sorpresas’ en el contrato.",
        author: "Laura M.",
        role: "Propietaria, Ruzafa",
      },
      {
        quote:
          "Alquiler por habitaciones con tres personas: Livendia ordenó uso de baños, limpieza y aviso de visitas con tono neutro para todas las partes.",
        author: "Álex & Marta",
        role: "Inquilinos, Benimaclet",
      },
    ],
    finalCtaLead:
      "Contrata LAU, temporada o habitación con pago seguro y deja el expediente listo para firmar en Valencia con inventario incluido.",
  },
  {
    slug: "asturias",
    city: "Asturias",
    schemaAdministrativeArea: "Principado de Asturias",
    heroLead:
      "En el Principado de Asturias —desde Oviedo y Gijón hasta Avilés, la costa y núcleos con vivienda rural o de temporada— revisamos tu contrato de alquiler con criterio LAU, inventario y lenguaje claro. Adaptamos el texto cuando el uso mezcla residencia habitual, segunda residencia próxima al mar o viviendas en entornos menos urbanos donde suelen colarse pactos verbales sobre mantenimiento, caminos o suministros.",
    whyIntro:
      "Aquí conviven mercado urbano, demanda turística costera y arrendamientos en pueblos: los PDF genéricos ignoran humedades, calefacción, desplazamientos o normas de convivencia en casas compartidas. Anticipamos esas fricciones con revisión profesional y documentación que sirva tanto en ciudad como en entornos rurales o de costa.",
    howIntro:
      "Cuatro hitos hasta la firma con seguridad: puedes vivir el arrendamiento en Oviedo, Gijón, Avilés, Corvera de Asturias, la franja costera o municipios del interior con vivienda tradicional o turística regulada.",
    testimonialsTitle: "Propietarios e inquilinos en Asturias que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Alquiler de temporada en un piso con vistas al mar: dejamos por escrito equipamiento, ropa de cama y qué pasaba con el parking comunitario; Livendia evitó dos lagunas que la plantilla de la agencia traía de serie.",
        author: "Sandra & Marcos",
        role: "Arrendatarios, zona costera (Asturias)",
      },
      {
        quote:
          "Casa rural compartida cerca de Oviedo: necesitábamos reparto de leña, acceso a fincas colindantes y plazo de aviso de salida. El contrato reflejó por fin lo que habíamos pactado con el propietario.",
        author: "Lucía P.",
        role: "Propietaria, concejo del interior",
      },
    ],
    finalCtaLead:
      "Elige LAU, temporada o habitación y completa el pago seguro. Tu expediente queda listo para firmar en Asturias con inventario y revisiones aplicadas.",
  },
  {
    slug: "sevilla",
    city: "Sevilla",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "En Sevilla capital y entorno cercano, te ayudamos a redactar o revisar tu contrato de alquiler con criterio LAU, inventario acotado y foco en las fricciones típicas del mercado local.",
    whyIntro:
      "Fuerte temporada turística y rotación estudiantil conviven con arrendamientos de larga duración: el mismo modelo PDF no vale para todos los casos. Adaptamos el texto al tipo real de arrendamiento.",
    howIntro:
      "Seguimos cuatro pasos hasta la firma, estés en Triana, Los Remedios, Nervión o en algún municipio colindante donde también hay presión por la vivienda en alquiler.",
    testimonialsTitle: "Propietarios e inquilinos en Sevilla que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Teníamos dudas sobre actualización de renta y comunidad en una planta sin ascensor. Nos lo explicaron antes de rubricar.",
        author: "Rafa G.",
        role: "Propietario, Triana",
      },
      {
        quote:
          "Contrato para temporada académica con opciones claras de salida anticipada y suministros a nombre del inquilino.",
        author: "Elena & Jorge",
        role: "Arrendatarios, Macarena",
      },
    ],
    finalCtaLead:
      "Elige modalidad y deja cerrado inventario + revisión profesional antes de firmar en Sevilla.",
  },
  {
    slug: "malaga",
    city: "Málaga",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "En Málaga ciudad y Costa del Sol próxima, revisamos tu contrato de alquiler con especial atención a temporadas, suministros y uso real del inmueble turístico-residencial.",
    whyIntro:
      "Mercados mixtos (residencial + temporal) generan borradores ambiguos sobre ocupación máxima y gastos. Equilibramos el texto para que ambas partes entiendan límites y obligaciones.",
    howIntro:
      "Cuatro hitos hasta firmar con seguridad: desde el centro histórico hasta Teatinos o municipios próximos como Rincón de la Victoria.",
    testimonialsTitle: "Propietarios e inquilinos en Málaga que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Alquiler de temporada en planta alta: quedó por escrito el estado del mobiliario y la forma de resolver incidencias.",
        author: "Carmen P.",
        role: "Propietaria, Centro Histórico",
      },
      {
        quote:
          "Contrato LAU con cláusulas de comunidad y pequeñas reparaciones bien separadas; nos dio tranquilidad antes de entrar.",
        author: "Iván L.",
        role: "Inquilino, El Palo",
      },
    ],
    finalCtaLead:
      "Contrata online el pack que encaje y prepara una firma informada en Málaga.",
  },
  {
    slug: "zaragoza",
    city: "Zaragoza",
    schemaAdministrativeArea: "Aragón",
    heroLead:
      "En Zaragoza capital y comarca próxima, un gestor centrado en LAU ordena tu contrato de alquiler con inventario y revisión de renta, garantías y causas de resolución.",
    whyIntro:
      "Mercados medianos también sufren conflictos por inventarios incompletos o pactos sobre IPC mal redactados. Evitamos ambigüedades antes del primer ingreso.",
    howIntro:
      "Cuatro pasos hasta la firma, ya sea en el Casco Histórico, Delicias o universidad cercana.",
    testimonialsTitle: "Propietarios e inquilinos en Zaragoza que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Redactaron una actualización de renta coherente con la LAU y dejaron claros los gastos de la comunidad.",
        author: "Miguel Á.",
        role: "Propietario, Universidad",
      },
      {
        quote:
          "Alquiler compartido: limitamos horarios razonables de visitas del propietario y estado de zonas comunes.",
        author: "Lucía & Hugo",
        role: "Inquilinas/os, Delicias",
      },
    ],
    finalCtaLead:
      "Elige modalidad y cierra expediente digital antes de firmar en Zaragoza.",
  },
  {
    slug: "murcia",
    city: "Murcia",
    schemaAdministrativeArea: "Región de Murcia",
    heroLead:
      "En Murcia capital y área metropolitana, revisamos tu contrato de alquiler con foco LAU, inventario fotográfico y asesoramiento hasta rubricar.",
    whyIntro:
      "Muchos conflictos locales empiezan por depósitos mal descritos o mantenimiento confuso. Documentamos el estado del bien desde el día de las llaves.",
    howIntro:
      "Cuatro hitos hasta firmar con seguridad: Centro, Espinardo, El Carmen u otros núcleos cercanos.",
    testimonialsTitle: "Propietarios e inquilinos en Murcia que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Teníamos prisa por entrar pero Livendia frenó una cláusula sobre reformas que no encajaba con lo pactado.",
        author: "Patricia R.",
        role: "Propietaria, Centro",
      },
      {
        quote:
          "Contrato por habitación con reparto de suministros y normas de convivencia por escrito.",
        author: "Sergio M.",
        role: "Inquilino, Vistabella",
      },
    ],
    finalCtaLead:
      "Contrata el pack adecuado y firma en Murcia con revisiones ya aplicadas.",
  },
  {
    slug: "palma",
    city: "Palma",
    schemaAdministrativeArea: "Islas Baleares",
    heroLead:
      "En Palma y área próxima, adaptamos tu contrato de alquiler al caso real (habitual, temporada o habitación) con LAU vigente y foco en uso turístico-residencial cuando toca.",
    whyIntro:
      "La presión sobre la vivienda en Palma exige contratos claros sobre ocupación, suministros y cesión de uso. Reducimos áreas grises antes de cobrar la renta.",
    howIntro:
      "Cuatro pasos hasta la firma con seguridad: Casco Antiguo, Santa Catalina, Playa de Palma o municipios limítrofes.",
    testimonialsTitle: "Propietarios e inquilinos en Palma que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Temporada con límites de estancia máxima y fotos del estado del piso incorporadas al expediente.",
        author: "Toni V.",
        role: "Propietario, Santa Catalina",
      },
      {
        quote:
          "LAU habitual con comunidad y seguros bien explicitados antes de que entráramos con mudanza.",
        author: "Marina K.",
        role: "Arrendataria, Son Espanyol",
      },
    ],
    finalCtaLead:
      "Contrata online y prepara una firma defendible en Palma.",
  },
  {
    slug: "las-palmas",
    city: "Las Palmas de Gran Canaria",
    schemaAdministrativeArea: "Canarias",
    heroLead:
      "En Las Palmas de Gran Canaria revisamos tu contrato de alquiler con LAU, inventario del inmueble y foco en climatización, humedades y costes recurrentes típicos del archipiélago.",
    whyIntro:
      "Las disputas sobre estado del inmueble y mantenimiento son frecuentes si no hay inventario serio y cláusulas de pequeña reparación claras.",
    howIntro:
      "Cuatro hitos hasta firmar con seguridad: Vegueta, Triana, Las Canteras o zona universitaria.",
    testimonialsTitle: "Propietarios e inquilinos en Las Palmas que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Dejamos cerrado qué tocaba al propietario con averías de avería claro frente a desgaste normal.",
        author: "Lucía F.",
        role: "Propietaria, Las Canteras",
      },
      {
        quote:
          "Contrato por habitaciones en piso amplio con normas de zonas comunes que todas firmamos tranquilas.",
        author: "Ana & Pedro",
        role: "Inquilinos, Guanarteme",
      },
    ],
    finalCtaLead:
      "Elige modalidad y deja listo tu expediente antes de firmar en Las Palmas de Gran Canaria.",
  },
  {
    slug: "bilbao",
    city: "Bilbao",
    schemaAdministrativeArea: "País Vasco",
    heroLead:
      "En Bilbao y entorno próximo, revisamos tu contrato de alquiler con rigor LAU, inventario ordenado y asesoramiento hasta la firma con ambas partes alineadas.",
    whyIntro:
      "Mercados con fuerte demanda necesitan contratos que no dependan del ‘nos dijeron en la visita’. Pasamos todo a papel defendible.",
    howIntro:
      "Cuatro pasos hasta rubricar con seguridad: Abando, Casco Viejo, Deusto o barrios limítrofes.",
    testimonialsTitle: "Propietarios e inquilinos en Bilbao que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "IPC y revisión bien explicados; evitamos una penalidad mal redactada que parecía automática.",
        author: "Iker M.",
        role: "Propietario, Indautxu",
      },
      {
        quote:
          "Inventario con fotos integrado nos salvó discusiones sobre el parquet tras un año de uso.",
        author: "Ane & Jon",
        role: "Arrendatarios, Zabala",
      },
    ],
    finalCtaLead:
      "Contrata el pack correcto y firma en Bilbao con revisión profesional aplicada.",
  },
  {
    slug: "alicante",
    city: "Alicante",
    schemaAdministrativeArea: "Comunidad Valenciana",
    heroLead:
      "En Alicante ciudad y zona próxima, te ayudamos a redactar o revisar tu contrato de alquiler con LAU, temporada o habitación según tu caso real.",
    whyIntro:
      "La combinación residencial y turística genera borradores que no distinguen bien duración ni gastos. Ajustamos el texto al uso pactado.",
    howIntro:
      "Cuatro hitos hasta firmar con seguridad: centro, Playa de San Juan, Universidad o municipios cercanos.",
    testimonialsTitle: "Propietarios e inquilinos en Alicante que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Temporada con protocolo claro de entrega de llaves y estado del mobiliario.",
        author: "Rosa C.",
        role: "Propietaria, Playa de San Juan",
      },
      {
        quote:
          "Contrato LAU con comunidad y suministros separados como queríamos antes de entrar.",
        author: "David N.",
        role: "Inquilino, Centro",
      },
    ],
    finalCtaLead:
      "Completa la contratación online y prepara una firma ordenada en Alicante.",
  },
  {
    slug: "cordoba",
    city: "Córdoba",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "En Córdoba capital y pedanías cercanas, revisamos tu contrato de alquiler con LAU vigente, inventario del inmueble y foco en causas típicas de conflicto.",
    whyIntro:
      "Los contratos genéricos ignoran pactos sobre muebles, patios o uso compartido. Lo cerramos antes del primer mes de renta.",
    howIntro:
      "Cuatro pasos hasta firmar con seguridad: Judería, Ciudad Jardín, sector feria o zonas universitarias.",
    testimonialsTitle: "Propietarios e inquilinos en Córdoba que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Actualización de renta acorde a LAU sin ‘letras pequeñas’ que no entendíamos.",
        author: "Francisco J.",
        role: "Propietario, Ciudad Jardín",
      },
      {
        quote:
          "Habitación en piso compartido con normas de convivencia que todos firmamos.",
        author: "Beatriz L.",
        role: "Inquilina, Lepanto",
      },
    ],
    finalCtaLead:
      "Contrata modalidad y deja el texto revisado antes de firmar en Córdoba.",
  },
  {
    slug: "valladolid",
    city: "Valladolid",
    schemaAdministrativeArea: "Castilla y León",
    heroLead:
      "En Valladolid capital y alrededores, ordenamos tu contrato de alquiler con revisión LAU, inventario incluido y acompañamiento hasta rubricar.",
    whyIntro:
      "Mercados con ritmo estable también acumulan conflictos por falta de inventario o por cláusulas de rescisión confusas.",
    howIntro:
      "Cuatro hitos hasta la firma con seguridad: centro, Huerta del Rey, Parquesol o Campus Miguel Delibes.",
    testimonialsTitle: "Propietarios e inquilinos en Valladolid que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Propietaria primera vez: necesitaba orden en depósitos y entrega de llaves; Livendia lo dejó cerrado.",
        author: "Isabel T.",
        role: "Propietaria, Centro",
      },
      {
        quote:
          "Contrato compartido con reparto de gastos clarísimo antes de entrar.",
        author: "Carlos & Elena",
        role: "Inquilinos, Delicias",
      },
    ],
    finalCtaLead:
      "Elige LAU, temporada o habitación y firma en Valladolid con revisión aplicada.",
  },
  {
    slug: "vigo",
    city: "Vigo",
    schemaAdministrativeArea: "Galicia",
    heroLead:
      "En Vigo y área próxima, revisamos tu contrato de alquiler con LAU, inventario fotográfico y tono claro para propiedad e inquilino.",
    whyIntro:
      "Los litigios locales suelen venir de interpretaciones distintas sobre mantenimiento y comunidad. Lo explicitamos por escrito.",
    howIntro:
      "Cuatro pasos hasta firmar con seguridad: Casco Viejo, Bouzas, Samil o zonas próximas al campus.",
    testimonialsTitle: "Propietarios e inquilinos en Vigo que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Pequeña reforma antes de entrar quedó documentada quién la pagaba y cómo se devolvía el uso.",
        author: "Diego R.",
        role: "Propietario, Bouzas",
      },
      {
        quote:
          "LAU habitual con cláusulas de comunidad revisadas punto por punto.",
        author: "Sandra P.",
        role: "Arrendataria, Coia",
      },
    ],
    finalCtaLead:
      "Contrata online y rubrica en Vigo con expediente ordenado.",
  },
  {
    slug: "gijon",
    city: "Gijón",
    schemaAdministrativeArea: "Asturias",
    heroLead:
      "En Gijón y concejos cercanos, te ayudamos a redactar o revisar tu contrato de alquiler con enfoque LAU y documentación útil desde el primer día.",
    whyIntro:
      "Los borradores copiados de internet generan lagunas sobre estado del inmueble y obligaciones de cada parte. Las cerramos antes de cobrar.",
    howIntro:
      "Cuatro hitos hasta firmar con seguridad: Cimadevilla, Playa de San Lorenzo, Roces o zonas universitarias.",
    testimonialsTitle: "Propietarios e inquilinos en Gijón que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Inventario integrado nos dio tranquilidad en un piso con muebles antiguos valorados verbalmente.",
        author: "María O.",
        role: "Propietaria, Centro",
      },
      {
        quote:
          "Temporada estival con límites claros sobre ocupación máxima por habitación.",
        author: "Andrés & Nerea",
        role: "Arrendatarios, Playa",
      },
    ],
    finalCtaLead:
      "Elige modalidad y firma en Gijón con revisión profesional lista.",
  },
  {
    slug: "granada",
    city: "Granada",
    schemaAdministrativeArea: "Andalucía",
    heroLead:
      "En Granada capital y entorno universitario-próximo, revisamos tu contrato de alquiler con LAU, temporada o habitación según corresponda.",
    whyIntro:
      "Fuerte componente estudiantil y turístico: hace falta distinguir bien duración, uso y gastos sin mezclar regímenes.",
    howIntro:
      "Cuatro pasos hasta rubricar con seguridad: Albaicín, Realejo, Centro, Zaidín o Pedro Antonio.",
    testimonialsTitle: "Propietarios e inquilinos en Granada que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Contrato por habitaciones con normas razonables de ruido y limpieza compartida.",
        author: "Paula S.",
        role: "Propietaria, Centro",
      },
      {
        quote:
          "Temporada académica con opciones de prórroga bien definidas.",
        author: "Tomás & Irene",
        role: "Inquilinos, Zaidín",
      },
    ],
    finalCtaLead:
      "Contrata el pack que encaje y firma en Granada con texto revisado.",
  },
  {
    slug: "santander",
    city: "Santander",
    schemaAdministrativeArea: "Cantabria",
    heroLead:
      "En Santander y zona cercana, ordenamos tu contrato de alquiler con revisión LAU, inventario del inmueble y respuesta cercana hasta la firma.",
    whyIntro:
      "Mercados costeros combinan temporada y residencia: conviene explicitar uso, muebles incluidos y reparto de suministros.",
    howIntro:
      "Cuatro hitos hasta firmar con seguridad: Centro, El Sardinero, Raos o zona universitaria.",
    testimonialsTitle: "Propietarios e inquilinos en Santander que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Depósito y entrega de llaves descritos paso a paso en el expediente.",
        author: "Marta E.",
        role: "Propietaria, El Sardinero",
      },
      {
        quote:
          "LAU habitual con cláusulas de comunidad revisadas antes de la mudanza.",
        author: "Javier H.",
        role: "Arrendatario, Centro",
      },
    ],
    finalCtaLead:
      "Completa la contratación digital y firma en Santander con garantías claras.",
  },
  {
    slug: "pamplona",
    city: "Pamplona",
    schemaAdministrativeArea: "Navarra",
    heroLead:
      "En Pamplona-Iruña y comarca próxima, revisamos tu contrato de alquiler con LAU, inventario integrado y foco en obligaciones equilibradas entre partes.",
    whyIntro:
      "Los conflictos posteriores suelen venir de mantenimiento mal repartido o de falta de fotografías contrastadas del estado inicial.",
    howIntro:
      "Cuatro pasos hasta rubricar con seguridad: Casco Viejo, Rochapea, Ensanche o zonas próximas a campus.",
    testimonialsTitle: "Propietarios e inquilinos en Pamplona que ya revisaron su contrato con Livendia",
    testimonials: [
      {
        quote:
          "Primera vez alquilando: Livendia nos ordenó comunidad, seguros y entrega sin precipitarnos.",
        author: "Gorka M.",
        role: "Propietario, Ensanche",
      },
      {
        quote:
          "Habitación en piso compartido con límites claros sobre visitas del propietario.",
        author: "Leire & Xabi",
        role: "Inquilinos, Milagrosa",
      },
    ],
    finalCtaLead:
      "Elige modalidad y deja cerrado tu expediente antes de firmar en Pamplona.",
  },
];
