/**
 * Landings SEO: administración de alquiler por temporada o habitaciones.
 * Rutas: /servicios/administracion-alquiler-temporada-local/[slug]
 */
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
} from "@/lib/catalog.public";
import { localAdministracionAlquilerHref } from "@/lib/administracion-alquiler-local-cities";
import { localContratoAlquilerTemporadaHref } from "@/lib/contrato-alquiler-temporada-local-cities";
import { localContratoAlquilerHabitacionHref } from "@/lib/contrato-alquiler-habitacion-local-cities";

export const ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE =
  "/servicios/administracion-alquiler-temporada-local";

export const ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS: readonly string[] = [
  "madrid",
  "barcelona",
  "valencia",
  "mallorca",
  "malaga",
  "sevilla",
] as const;

export function isAdministracionAlquilerTemporadaLocalSlugPublished(slug: string): boolean {
  return ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS.includes(slug);
}

export function getPublishedAdministracionAlquilerTemporadaLocalCities(): AdministracionAlquilerTemporadaLocalCityDefinition[] {
  const pub = new Set(ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_PUBLISHED_SLUGS);
  return ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_CITIES.filter((c) => pub.has(c.slug));
}

export type AdministracionAlquilerTemporadaLocalLandingConfig = {
  path: string;
  city: string;
  placeLabel: string;
  schemaAdministrativeArea: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  whyIntro: string;
  marketContext: string;
  barriosIntro: string;
  barrios: readonly string[];
  regulatoryBlock: string;
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
  faqLocal: readonly { question: string; answer: string }[];
  heroImage: string;
  heroImageAlt: string;
  contratoTemporadaHref?: string;
  contratoHabitacionHref?: string;
  adminLauHref?: string;
};

export type AdministracionAlquilerTemporadaLocalCityDefinition = Omit<
  AdministracionAlquilerTemporadaLocalLandingConfig,
  "path"
> & {
  slug: string;
};

const MONTHLY = ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL;
const CONTRATO = ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL;

export function localAdministracionAlquilerTemporadaHref(slug: string): string {
  return `${ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE}/${slug}`;
}

export function toAdministracionAlquilerTemporadaLandingConfig(
  def: AdministracionAlquilerTemporadaLocalCityDefinition,
): AdministracionAlquilerTemporadaLocalLandingConfig {
  return { ...def, path: localAdministracionAlquilerTemporadaHref(def.slug) };
}

export function getAdministracionAlquilerTemporadaLocalCity(
  slug: string,
): AdministracionAlquilerTemporadaLocalCityDefinition | undefined {
  return ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_CITIES.find((c) => c.slug === slug);
}

export const ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_CITIES: AdministracionAlquilerTemporadaLocalCityDefinition[] =
  [
    {
      slug: "madrid",
      city: "Madrid",
      placeLabel: "Madrid",
      schemaAdministrativeArea: "Comunidad de Madrid",
      metaTitle: `Admin. alquiler temporada y habitaciones Madrid — ${MONTHLY}`,
      metaDescription: `Administración de alquiler por temporada o habitaciones en Madrid: inquilinos, entradas/salidas y servicio técnico. ${MONTHLY} IVA incl. Contratos ${CONTRATO}. Rescisiones gratis.`,
      heroLead:
        "En Madrid capital conviven pisos compartidos por habitaciones, estancias de seis meses por oposiciones o proyectos laborales y rotación alta en barrios universitarios. Livendia administra entradas, salidas, incidencias y servicio técnico por 79 €/mes — sin que tú seas el teléfono de guardia.",
      whyIntro:
        "La administración LAU a 49 €/mes está pensada para un inquilino estable. En Madrid, Chamberí, Malasaña o Vallecas muchos propietarios gestionan tres habitaciones con calendarios distintos: check-in en septiembre, baja en junio, avería un domingo. Nosotros filtramos ese ritmo.",
      marketContext:
        "Según Fotocasa (2026), el alquiler medio en Madrid ronda 21,6 €/m², pero el mercado por habitaciones y estancias cortas se mueve aparte: demanda de opositores, becarios ERASMUS y teletrabajadores que buscan contratos acotados sin comisión de agencia.",
      barriosIntro:
        "Gestionamos administración de temporada y habitaciones en distritos con más rotación y demanda de estancias medias:",
      barrios: [
        "Chamberí",
        "Malasaña / Universidad",
        "Salamanca",
        "Retiro",
        "Usera",
        "Vallecas",
        "Carabanchel",
        "Getafe",
        "Alcorcón",
      ],
      regulatoryBlock:
        "Madrid no está declarada zona tensionada (MIVAU, 2026). En habitaciones y temporadas conviene distinguir contrato LAU de vivienda habitual vs. estancia acotada fuera del LAU: cada entrada nueva puede requerir contrato aparte (100 € IVA incl.). Las rescisiones las tramitamos sin coste con la cuota activa.",
      contratoTemporadaHref: localContratoAlquilerTemporadaHref("madrid"),
      contratoHabitacionHref: localContratoAlquilerHabitacionHref("madrid"),
      adminLauHref: localAdministracionAlquilerHref("madrid"),
      heroImage: "/images/gestoria20.jpg",
      heroImageAlt: "Administración alquiler temporada y habitaciones en Madrid — Livendia",
      testimonialsTitle: "Propietarios con habitaciones y temporadas en Madrid",
      testimonials: [
        {
          quote:
            "Alquilo tres habitaciones cerca de Moncloa. Antes atendía WhatsApp a cualquier hora; Livendia coordina entradas, inventarios y el técnico cuando falla la caldera.",
          author: "Patricia M.",
          role: "Propietaria · Chamberí, Madrid",
        },
        {
          quote:
            "Tenía estancias de seis meses para opositores. Ellos llevan el calendario de entradas y salidas y yo solo apruebo cuando hace falta.",
          author: "Jorge L.",
          role: "Propietario · Vallecas",
        },
      ],
      faqLocal: [
        {
          question: "¿Cuánto cuesta administrar habitaciones en Madrid?",
          answer: `La cuota es ${MONTHLY} IVA incluido, sin permanencia. Cada contrato nuevo de habitación o temporada se redacta aparte por ${CONTRATO}. Las rescisiones van incluidas.`,
        },
        {
          question: "¿Gestionáis oposiciones y estancias de seis meses?",
          answer:
            "Sí. Registramos fechas de entrada y salida, coordinamos check-in/check-out y el servicio técnico. Si hace falta un contrato de temporada nuevo, lo redactamos por la tarifa de contrato aparte.",
        },
        {
          question: "¿Es lo mismo que la administración LAU a 49 €/mes?",
          answer:
            "No. La de 49 €/mes es para un inquilino estable en vivienda habitual. Esta de 79 €/mes cubre el ritmo de habitaciones y temporadas con más rotación.",
        },
      ],
    },
    {
      slug: "barcelona",
      city: "Barcelona",
      placeLabel: "Barcelona",
      schemaAdministrativeArea: "Cataluña",
      metaTitle: `Admin. temporada y habitaciones Barcelona — ${MONTHLY}`,
      metaDescription: `Administración de alquiler por temporada o habitaciones en Barcelona: check-in, incidencias y servicio técnico. ${MONTHLY} IVA incl. Contratos ${CONTRATO}. Rescisiones gratis.`,
      heroLead:
        "Barcelona mezcla pisos compartidos, estancias por estudios o prácticas y viviendas con licencia turística en barrios como Eixample o Poblenou. Livendia lleva el contacto con inquilinos, entradas, salidas y averías por 79 €/mes — tú no recibes llamadas del día a día.",
      whyIntro:
        "En Barcelona la normativa catalana (zona tensionada, INCASÒL, compatibilidad turística) complica cada rotación. Si alquilas por habitación en Gràcia o Sant Martí, un solo inquilino conflictivo puede bloquear la convivencia: nosotros mediamos y documentamos.",
      marketContext:
        "Idealista (2026) sitúa el alquiler medio en Barcelona en torno a 22 €/m², con caída interanual reciente pero demanda sostenida de habitaciones en distritos universitarios y temporadas laborales en el 22@ o la zona del Camp Nou.",
      barriosIntro: "Administramos temporada y habitaciones en distritos con alta rotación:",
      barrios: [
        "Eixample",
        "Gràcia",
        "Sant Martí",
        "Les Corts",
        "Poblenou",
        "Sants",
        "Hospitalet de Llobregat",
        "Badalona",
      ],
      regulatoryBlock:
        "Barcelona está en zona de mercado residencial tensionado (desde 2024). La fianza en alquiler LAU se deposita en INCASÒL. En habitaciones y temporadas hay que separar bien el régimen del contrato; cada alta nueva puede requerir redacción aparte (100 €). Rescisiones incluidas en la cuota.",
      contratoTemporadaHref: localContratoAlquilerTemporadaHref("barcelona"),
      contratoHabitacionHref: localContratoAlquilerHabitacionHref("barcelona"),
      adminLauHref: localAdministracionAlquilerHref("barcelona"),
      heroImage: "/images/gestoria20.jpg",
      heroImageAlt: "Administración alquiler temporada y habitaciones en Barcelona — Livendia",
      testimonialsTitle: "Propietarios en Barcelona con habitaciones y temporadas",
      testimonials: [
        {
          quote:
            "Tengo un piso de cuatro habitaciones en Sants. Livendia gestiona entradas en septiembre y salidas en junio; yo solo firmo cuando toca renovar o autorizar una reparación grande.",
          author: "Montse R.",
          role: "Propietaria · Sants, Barcelona",
        },
        {
          quote:
            "Alquilaba por habitación sin intermediario y acababa mediando conflictos de convivencia. Ahora Livendia es el canal único con los inquilinos.",
          author: "Oriol P.",
          role: "Propietario · Gràcia",
        },
      ],
      faqLocal: [
        {
          question: "¿Administráis pisos compartidos por habitaciones en Barcelona?",
          answer:
            "Sí. Controlamos entradas y salidas, incidencias comunes (caldera, wifi, convivencia) y servicio técnico. Cada contrato nuevo de habitación se cobra aparte (100 € IVA incl.).",
        },
        {
          question: "¿Qué pasa con la zona tensionada y las habitaciones?",
          answer:
            "La declaración de zona tensionada afecta sobre todo a contratos LAU de vivienda habitual. En habitaciones y temporadas revisamos el régimen aplicable contrato a contrato; tu gestor te orienta antes de cada entrada.",
        },
        {
          question: "¿Trabajáis desde Les Corts?",
          answer:
            "Sí. Nuestro despacho está en Carrer de Mejía Lequerica, 44 (Les Corts): proximidad real si tu piso está en el distrito o en la zona limítrofe.",
        },
      ],
    },
    {
      slug: "valencia",
      city: "Valencia",
      placeLabel: "Valencia",
      schemaAdministrativeArea: "Comunidad Valenciana",
      metaTitle: `Admin. temporada y habitaciones Valencia — ${MONTHLY}`,
      metaDescription: `Administración de alquiler por temporada o habitaciones en Valencia: inquilinos, entradas/salidas y técnico. ${MONTHLY} IVA incl. Contratos ${CONTRATO}. Rescisiones gratis.`,
      heroLead:
        "En Valencia muchos propietarios alquilan por habitación a trabajadores en estancias medias o combinan una vivienda de temporada con inquilinos estables en otras habitaciones. Livendia centraliza el contacto, las entradas, las salidas y el servicio técnico por 79 €/mes.",
      whyIntro:
        "Ruzafa, Benimaclet, Campanar o Mislata concentran pisos compartidos y contratos de meses para profesionales del sector turístico, logístico o universitario. La rotación exige calendario claro: nosotros lo llevamos y tú solo decides lo importante.",
      marketContext:
        "El alquiler medio en Valencia capital ronda 16–17 €/m² (Idealista/Fotocasa, 2026), con demanda fuerte de habitaciones en barrios cerca de la Ciudad de las Artes, universidades y polígonos del cinturón metropolitano.",
      barriosIntro: "Zonas donde más delegan administración de habitaciones y temporada:",
      barrios: [
        "Ruzafa",
        "Benimaclet",
        "Campanar",
        "Ciutat Vella",
        "Mislata",
        "Paterna",
        "Alboraya",
      ],
      regulatoryBlock:
        "Valencia tiene normativa autonómica propia en materia de vivienda y fianzas. En alquiler por habitación conviene delimitar zonas comunes, suministros y duración. Cada contrato nuevo: 100 € IVA incl. Rescisiones gratuitas con la administración activa.",
      contratoTemporadaHref: localContratoAlquilerTemporadaHref("valencia"),
      contratoHabitacionHref: localContratoAlquilerHabitacionHref("valencia"),
      adminLauHref: localAdministracionAlquilerHref("valencia"),
      heroImage: "/images/gestoria20.jpg",
      heroImageAlt: "Administración alquiler temporada y habitaciones en Valencia — Livendia",
      testimonialsTitle: "Propietarios en Valencia con habitaciones y temporadas",
      testimonials: [
        {
          quote:
            "Alquilo tres habitaciones en Ruzafa a gente que trabaja en hostelería. Livendia coordina entradas cuando uno se va y otro entra la misma semana.",
          author: "Cecilia A.",
          role: "Propietaria · Ruzafa, Valencia",
        },
        {
          quote:
            "Tenía un piso por temporada para teletrabajadores y no quería gestionar averías yo solo. La cuota de 79 € me quitó el teléfono del bolsillo.",
          author: "Víctor H.",
          role: "Propietario · Campanar",
        },
      ],
      faqLocal: [
        {
          question: "¿Puedo alquilar por habitación a trabajadores en estancias medias?",
          answer:
            "Sí, es uno de los casos habituales. Livendia administra el calendario de ocupantes, incidencias y servicio técnico. Cada contrato de habitación nuevo se redacta por 100 € IVA incl.",
        },
        {
          question: "¿Cuánto cuesta frente a una agencia?",
          answer: `La administración es ${MONTHLY} fijo, sin comisión sobre la renta. No sustituye la comercialización del anuncio, pero sí el día a día con el inquilino.`,
        },
        {
          question: "¿Las bajas de inquilino tienen coste?",
          answer: "No. Con la cuota activa, las rescisiones de contrato las tramita Livendia sin coste adicional.",
        },
      ],
    },
    {
      slug: "mallorca",
      city: "Mallorca",
      placeLabel: "Mallorca",
      schemaAdministrativeArea: "Islas Baleares",
      metaTitle: `Admin. temporada y habitaciones Mallorca — ${MONTHLY}`,
      metaDescription: `Administración de alquiler por temporada o habitaciones en Mallorca y Palma: entradas, salidas e incidencias. ${MONTHLY} IVA incl. Contratos ${CONTRATO}. Rescisiones gratis.`,
      heroLead:
        "En Mallorca la temporada alta concentra entradas en primavera y salidas en otoño: apartamentos para teletrabajadores, habitaciones para personal de hostelería o estancias de meses fuera del pico turístico. Livendia administra inquilinos, check-in/check-out y servicio técnico por 79 €/mes.",
      whyIntro:
        "Palma, Playa de Palma o pueblos del interior tienen ritmos distintos: en verano la rotación es máxima y las averías (aire acondicionado, caldera) no pueden esperar. Nosotros coordinamos técnicos locales mientras tú estés en la península.",
      marketContext:
        "El mercado balear combina vivienda turística regulada, estancias medias para nómadas digitales y habitaciones para trabajadores del sector servicios. La demanda estacional obliga a un calendario de entradas muy estricto.",
      barriosIntro: "Zonas con más administración de temporada y habitaciones en Mallorca:",
      barrios: [
        "Palma centro",
        "Portixol",
        "Son Espanyolet",
        "Playa de Palma",
        "Inca",
        "Manacor",
        "Alcúdia",
      ],
      regulatoryBlock:
        "En Baleares conviene separar vivienda turística con licencia, temporada fuera del LAU y habitaciones en piso compartido. Cada contrato nuevo se redacta por 100 € IVA incl. Rescisiones incluidas en la cuota mensual.",
      contratoTemporadaHref: localContratoAlquilerTemporadaHref("mallorca"),
      adminLauHref: localAdministracionAlquilerHref("mallorca"),
      heroImage: "/images/mallorca2.jpg",
      heroImageAlt: "Administración alquiler temporada en Mallorca — Livendia",
      testimonialsTitle: "Propietarios en Mallorca con temporadas y habitaciones",
      testimonials: [
        {
          quote:
            "Tengo un piso en Palma que alquilo por temporadas fuera del verano punta. Livendia hace el check-in cuando yo estoy en Madrid y me manda fotos del estado al entrar y salir.",
          author: "Elena S.",
          role: "Propietaria · Palma de Mallorca",
        },
        {
          quote:
            "Alquilaba habitaciones a camareros en temporada. Ellos llevan incidencias y yo dejé de recibir llamadas a las once de la noche.",
          author: "Tomeu F.",
          role: "Propietario · Playa de Palma",
        },
      ],
      faqLocal: [
        {
          question: "¿Administráis pisos en Mallorca estando yo fuera de la isla?",
          answer:
            "Sí. Somos el interlocutor con el inquilino, coordinamos entradas/salidas y servicio técnico. Te informamos solo cuando hace falta tu autorización o un gasto extraordinario.",
        },
        {
          question: "¿Temporada turística y administración Livendia?",
          answer:
            "Este servicio cubre administración de inquilinos (contacto, entradas, incidencias). La licencia turística y la comercialización del anuncio van aparte; te orientamos si hace falta encajar contrato de temporada.",
        },
        {
          question: "¿Cuánto cuesta un contrato nuevo en Mallorca?",
          answer: `Cada contrato de temporada o habitación que haya que redactar: ${CONTRATO} IVA incl., cobro aparte de la cuota ${MONTHLY}.`,
        },
      ],
    },
    {
      slug: "malaga",
      city: "Málaga",
      placeLabel: "Málaga",
      schemaAdministrativeArea: "Andalucía",
      metaTitle: `Admin. temporada y habitaciones Málaga — ${MONTHLY}`,
      metaDescription: `Administración de alquiler por temporada o habitaciones en Málaga capital y Costa del Sol: entradas, salidas y técnico. ${MONTHLY} IVA incl. Contratos ${CONTRATO}.`,
      heroLead:
        "Málaga capital y la Costa del Sol atraen estancias de meses para teletrabajo, habitaciones para personal de hostelería y rotación alta en barrios como La Malagueta o Teatinos. Livendia administra inquilinos, entradas, salidas y averías por 79 €/mes.",
      whyIntro:
        "El perfil mezcla estudiantes de la UMA, profesionales del turismo y nómadas digitales que buscan contratos acotados. Gestionar tres habitaciones con calendarios distintos desde fuera de Málaga es inviable sin un intermediario.",
      marketContext:
        "El alquiler en Málaga capital supera los 18 €/m² de media (2026), con picos en zonas cerca del puerto y demanda sostenida de habitaciones en Teatinos y El Palo.",
      barriosIntro: "Barrios y zonas con más demanda de administración por habitación o temporada:",
      barrios: [
        "Centro histórico",
        "La Malagueta",
        "Teatinos",
        "El Palo",
        "Huelin",
        "Torremolinos",
        "Rincón de la Victoria",
      ],
      regulatoryBlock:
        "Andalucía regula alquiler de vivienda y compatibilidad con usos turísticos. En habitaciones conviene delimitar zonas comunes y suministros. Contrato nuevo: 100 € IVA incl. Rescisiones gratis con la cuota activa.",
      contratoTemporadaHref: localContratoAlquilerTemporadaHref("malaga"),
      contratoHabitacionHref: localContratoAlquilerHabitacionHref("malaga"),
      adminLauHref: localAdministracionAlquilerHref("malaga"),
      heroImage: "/images/gestoria20.jpg",
      heroImageAlt: "Administración alquiler temporada y habitaciones en Málaga — Livendia",
      testimonialsTitle: "Propietarios en Málaga con habitaciones y temporadas",
      testimonials: [
        {
          quote:
            "Alquilo dos habitaciones en Teatinos. Livendia hace el check-in cuando llega un nuevo inquilino y me envía el parte de estado.",
          author: "Rosa C.",
          role: "Propietaria · Teatinos, Málaga",
        },
        {
          quote:
            "Tenía un piso por temporada para trabajadores en verano. Ellos coordinan técnicos de aire acondicionado sin que yo esté en la ciudad.",
          author: "Manuel D.",
          role: "Propietario · La Malagueta",
        },
      ],
      faqLocal: [
        {
          question: "¿Cubrís la Costa del Sol además de Málaga capital?",
          answer:
            "La administración online funciona en toda España; el servicio está orientado a Málaga capital y municipios del área metropolitana donde haya rotación de inquilinos.",
        },
        {
          question: "¿Qué incluyen los 79 €/mes en Málaga?",
          answer:
            "Contacto con inquilinos, entradas/salidas, servicio técnico e incidencias, seguimiento documental y rescisiones sin coste. No incluye redacción de cada contrato nuevo (100 € aparte).",
        },
        {
          question: "¿Diferencia con administración LAU?",
          answer:
            "La administración LAU (49 €/mes) es para un inquilino estable. Esta de 79 €/mes está pensada para habitaciones y temporadas con más rotación.",
        },
      ],
    },
    {
      slug: "sevilla",
      city: "Sevilla",
      placeLabel: "Sevilla",
      schemaAdministrativeArea: "Andalucía",
      metaTitle: `Admin. temporada y habitaciones Sevilla — ${MONTHLY}`,
      metaDescription: `Administración de alquiler por temporada o habitaciones en Sevilla: inquilinos, entradas/salidas y servicio técnico. ${MONTHLY} IVA incl. Contratos ${CONTRATO}. Rescisiones gratis.`,
      heroLead:
        "Sevilla combina pisos compartidos por habitación cerca de universidades, estancias vinculadas a feria o eventos y temporadas para profesionales. Livendia lleva entradas, salidas, incidencias y servicio técnico por 79 €/mes.",
      whyIntro:
        "Triana, Nervión, Los Remedios o Macarena concentran habitaciones con rotación en curso académico. Un propietario con dos o tres habitaciones no puede atender averías y check-in el mismo día que entra un inquilino nuevo.",
      marketContext:
        "El alquiler en Sevilla capital ronda 14–15 €/m² (2026), con demanda fuerte de habitaciones en distritos universitarios y estancias medias ligadas al calendario académico y ferias.",
      barriosIntro: "Distritos con más administración de habitaciones y temporada:",
      barrios: [
        "Triana",
        "Nervión",
        "Los Remedios",
        "Macarena",
        "Centro",
        "Heliópolis",
        "Dos Hermanas",
      ],
      regulatoryBlock:
        "En Andalucía aplican normas de vivienda y fianza según tipo de contrato. Habitaciones y temporadas requieren delimitar duración y suministros. Contrato nuevo: 100 € IVA incl. Rescisiones incluidas.",
      contratoTemporadaHref: localContratoAlquilerTemporadaHref("sevilla"),
      contratoHabitacionHref: localContratoAlquilerHabitacionHref("sevilla"),
      adminLauHref: localAdministracionAlquilerHref("sevilla"),
      heroImage: "/images/gestoria20.jpg",
      heroImageAlt: "Administración alquiler temporada y habitaciones en Sevilla — Livendia",
      testimonialsTitle: "Propietarios en Sevilla con habitaciones y temporadas",
      testimonials: [
        {
          quote:
            "Tengo tres habitaciones en Nervión. Livendia gestiona entradas en septiembre y las incidencias de convivencia sin que yo medie directamente.",
          author: "Isabel G.",
          role: "Propietaria · Nervión, Sevilla",
        },
        {
          quote:
            "Alquilaba por temporada durante feria y eventos. Ellos llevan el calendario y el técnico cuando hay avería.",
          author: "Antonio J.",
          role: "Propietario · Triana",
        },
      ],
      faqLocal: [
        {
          question: "¿Administráis pisos compartidos en Sevilla?",
          answer:
            "Sí. Entradas, salidas, incidencias comunes y servicio técnico. Cada contrato de habitación nuevo: 100 € IVA incl.",
        },
        {
          question: "¿Hay permanencia en la cuota de 79 €?",
          answer: "No. Puedes cancelar cuando quieras; mantienes acceso hasta fin del periodo pagado.",
        },
        {
          question: "¿Las rescisiones tienen coste?",
          answer: "No, van incluidas en la administración activa.",
        },
      ],
    },
  ];
