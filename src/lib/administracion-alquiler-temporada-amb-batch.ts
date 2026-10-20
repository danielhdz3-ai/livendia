/**
 * Admin. temporada / habitaciones — 9 municipios AMB (clientes Barcelona metropolitana).
 * Rutas: /servicios/administracion-alquiler-temporada-local/{slug}
 */
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  administracionAlquilerMetroSlugHref,
  type AdministracionAlquilerBarcelonaMetroSlug,
} from "@/lib/administracion-alquiler-barcelona-metro";
import { localContratoAlquilerHabitacionHref } from "@/lib/contrato-alquiler-habitacion-local-cities";
import { localContratoAlquilerTemporadaHref } from "@/lib/contrato-alquiler-temporada-local-cities";
import type { AdministracionAlquilerTemporadaLocalCityDefinition } from "@/lib/administracion-alquiler-temporada-local-cities";
import {
  getAdminTemporadaBcnBarrioHeroAlt,
  getAdminTemporadaBcnBarrioHeroImage,
} from "@/lib/administracion-alquiler-temporada-bcn-images";

const MONTHLY = ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL;
const CONTRATO = ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL;

type AmbAdminTemporadaZone = {
  slug: string;
  zoneShort: string;
  placeLabel: string;
  metroSlug: AdministracionAlquilerBarcelonaMetroSlug;
  heroH1: string;
  metaTitle: string;
  metaDescription: string;
  heroLead: string;
  whyIntro: string;
  marketContext: string;
  barriosIntro: string;
  barrios: readonly string[];
  testimonialsTitle: string;
  testimonials: readonly { quote: string; author: string; role: string }[];
  faqLocal: readonly { question: string; answer: string }[];
  finalCtaLead: string;
  habitacionContratoSlug: string;
};

const ZONES: readonly AmbAdminTemporadaZone[] = [
  {
    slug: "hospitalet-de-llobregat",
    zoneShort: "L'Hospitalet",
    placeLabel: "L'Hospitalet de Llobregat",
    metroSlug: "l-hospitalet",
    heroH1: "Tramitar administración de alquiler en L'Hospitalet — habitaciones, temporadas y gestor AMB",
    metaTitle: `Admin. alquiler temporada L'Hospitalet · Collblanc — ${MONTHLY}`,
    metaDescription: `Delega administración de habitaciones y temporadas en L'Hospitalet: entradas, incidencias, técnico. ${MONTHLY} IVA incl. Gestor Livendia desde Les Corts. Contratos ${CONTRATO}.`,
    heroLead: `En Collblanc, Bellvitge o Centre muchos propietarios alquilan por habitación a quien trabaja en Barcelona capital pero duerme en el cinturón sur. Livendia tramita el día a día — WhatsApp del inquilino, check-in, averías — por ${MONTHLY} IVA incl., con gestor presencial en el AMB cuando hace falta inventario o entrega.`,
    whyIntro:
      "L'Hospitalet concentra bloques densos y rotación alta: si vives fuera del municipio o tienes varias habitaciones, ser el único contacto agota. Centralizamos incidencias y documentamos antes de escalar a ti.",
    marketContext:
      "Precios por debajo de Barcelona ciudad (~16–19 €/m² en oferta, 2026) con demanda estable de habitaciones ligada a Fira, Zona Franca y metro L1/L5. Muchas temporadas de obra mientras reforman en Barcelona.",
    barriosIntro: "Zonas de L'Hospitalet donde administramos:",
    barrios: ["Collblanc", "Bellvitge", "Centre", "La Florida", "Can Serra", "Pubilla Cases"],
    testimonialsTitle: "Propietarios en L'Hospitalet con administración Livendia",
    testimonials: [
      {
        quote:
          "Cuatro habitaciones en Bellvitge. Livendia tramita entradas en septiembre y yo no recibo llamadas de convivencia a medianoche.",
        author: "José M.",
        role: "Propietario · Bellvitge",
      },
      {
        quote:
          "Temporada de ocho meses en Centre mientras vendía otro piso. Check-out presencial y fianza documentada.",
        author: "Aina C.",
        role: "Propietaria · Centre",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis administración si el inquilino trabaja en Barcelona?",
        answer:
          "Sí. Es el perfil habitual en L'Hospitalet: estancias laborales o habitaciones. Gestionamos contacto, calendario y técnico; tú apruebas reparaciones grandes.",
      },
      {
        question: "¿ZMRT e INCASÒL aplican igual que en Barcelona?",
        answer:
          "L'Hospitalet está en zona tensionada: revisamos régimen contrato a contrato (habitación, temporada, LAU). Contratos nuevos aparte por " + CONTRATO + ".",
      },
    ],
    finalCtaLead: `Tramita administración en L'Hospitalet — ${MONTHLY} IVA incl. · gestor AMB.`,
    habitacionContratoSlug: "hospitalet-de-llobregat",
  },
  {
    slug: "badalona",
    zoneShort: "Badalona",
    placeLabel: "Badalona",
    metroSlug: "badalona",
    heroH1: "Administración alquiler temporada Badalona — habitaciones frente al mar y gestor Livendia",
    metaTitle: `Admin. temporada Badalona · Montigalà, Centre — ${MONTHLY}`,
    metaDescription: `Administración alquiler habitación/temporada en Badalona. Entradas, incidencias, rescisiones incluidas. ${MONTHLY} IVA incl. Oficina Les Corts · desplazamientos AMB.`,
    heroLead: `Badalona mezcla pisos compartidos en el Centre, estancias en Montigalà y habitaciones para quien usa metro o Rodalies hacia Barcelona. Livendia tramita administración mensual por ${MONTHLY} IVA incl.: filtro de incidencias, entradas y servicio técnico sin comisión sobre la renta.`,
    whyIntro:
      "La rotación en bloques de los 70–80 cerca del mar genera conflictos de convivencia si el propietario no está cerca. Nosotros somos el canal profesional ante el inquilino.",
    marketContext:
      "Alquiler medio inferior a Barcelona capital con demanda de habitaciones para hostelería, logística portuaria y familias del Maresme interior (~15–18 €/m², 2026).",
    barriosIntro: "Barrios y zonas en Badalona:",
    barrios: ["Centre", "Montigalà", "Sant Roc", "La Salut", "Artigues", "Gorg"],
    testimonialsTitle: "Propietarios en Badalona",
    testimonials: [
      {
        quote:
          "Tres habitaciones en el Centre. Livendia lleva rescisiones y entradas; yo solo miro el panel una vez por semana.",
        author: "Ramon S.",
        role: "Propietario · Centre",
      },
      {
        quote:
          "Estancias de verano cerca de la playa. Coordinaron check-in y suministros sin que yo fuera desde Barcelona.",
        author: "Lucía H.",
        role: "Propietaria · La Salut",
      },
    ],
    faqLocal: [
      {
        question: "¿Incluye desplazamiento del gestor a Badalona?",
        answer:
          "Las actuaciones presenciales necesarias en el AMB (entrega, inventario, mediación grave) van incluidas, sin suplemento por municipio.",
      },
      {
        question: "¿Redactáis contrato de habitación en Badalona?",
        answer: `Cada contrato nuevo: ${CONTRATO} IVA incl. La cuota ${MONTHLY} cubre gestión continua y rescisiones.`,
      },
    ],
    finalCtaLead: `Activa administración en Badalona — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "barcelona",
  },
  {
    slug: "cornella-de-llobregat",
    zoneShort: "Cornellà",
    placeLabel: "Cornellà de Llobregat",
    metroSlug: "cornella",
    heroH1: "Gestión administrativa alquiler Cornellà — habitaciones cerca de Zona Franca y Fira",
    metaTitle: `Admin. alquiler temporada Cornellà · Almeda — ${MONTHLY}`,
    metaDescription: `Tramita administración de habitaciones y temporadas en Cornellà. ${MONTHLY} IVA incl. Check-in, técnico, gestor presencial AMB. Contratos ${CONTRATO}.`,
    heroLead: `Cornellà recibe trabajadores de Zona Franca, Fira y oficinas del Baix Llobregat en pisos compartidos o estancias medias. Livendia administra inquilinos, entradas y averías por ${MONTHLY} IVA incl. — tramitación online con gestor desde Les Corts y visitas al piso cuando toca.`,
    whyIntro:
      "Bloques compactos y familias que alquilan habitación extra: la mediación diaria no puede depender del propietario que trabaja en otra ciudad.",
    marketContext:
      "Demanda estable de habitaciones por proximidad a metro L5 y empresas del polígono (~16–19 €/m², 2026). Temporadas ligadas a proyectos industriales o reformas.",
    barriosIntro: "Zonas de Cornellà:",
    barrios: ["Centre", "Almeda", "Sant Ildefons", "Riera", "Can Mercader"],
    testimonialsTitle: "Propietarios en Cornellà de Llobregat",
    testimonials: [
      {
        quote:
          "Piso compartido en Almeda. Livendia es el único contacto del inquilino; yo autorizo presupuestos desde el móvil.",
        author: "Pedro G.",
        role: "Propietario · Almeda",
      },
      {
        quote:
          "Temporada por traslado laboral seis meses. Inventario en la entrada y salida sin conflicto.",
        author: "Marina L.",
        role: "Propietaria · Centre",
      },
    ],
    faqLocal: [
      {
        question: "¿Administráis pisos cerca de la estación de Cornellà Centre?",
        answer:
          "Sí. Misma cuota mensual; calendario de rotaciones y técnico coordinado desde el panel Livendia.",
      },
      {
        question: "¿Enlace con administración LAU a 59 €?",
        answer:
          "Para un inquilino estable en vivienda habitual existe admin LAU; esta landing es para rotación de habitaciones/temporada.",
      },
    ],
    finalCtaLead: `Tramita administración en Cornellà — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "cornella-de-llobregat",
  },
  {
    slug: "esplugues-de-llobregat",
    zoneShort: "Esplugues",
    placeLabel: "Esplugues de Llobregat",
    metroSlug: "esplugues",
    heroH1: "Administración alquiler Esplugues — habitaciones familiares y temporadas en el Baix",
    metaTitle: `Admin. temporada Esplugues · Can Vidalet — ${MONTHLY}`,
    metaDescription: `Delega admin. alquiler habitación/temporada en Esplugues. ${MONTHLY} IVA incl. Gestor Livendia, entradas presenciales AMB. Contratos ${CONTRATO}.`,
    heroLead: `Esplugues combina vivienda unifamiliar alquilada por habitaciones y estancias para profesionales del Diagonal y Zona Universitària cercana. Livendia tramita contacto, entradas, salidas e incidencias por ${MONTHLY} IVA incl.`,
    whyIntro:
      "Perfil residencial con propietarios mayores que no quieren WhatsApp a deshora: delegar el canal es la razón principal de contratar administración aquí.",
    marketContext:
      "Rentas medias-altas para el Baix (~18–22 €/m² en zonas prime) con habitaciones discretas para expatriados y familias.",
    barriosIntro: "Zonas de Esplugues:",
    barrios: ["Centre", "Can Vidalet", "Can Clota", "Finestrelles", "Sant Jordi"],
    testimonialsTitle: "Propietarios en Esplugues",
    testimonials: [
      {
        quote:
          "Dos habitaciones en Can Vidalet. Livendia filtra averías menores y yo solo intervengo si supera 300 €.",
        author: "Francesc A.",
        role: "Propietario · Can Vidalet",
      },
      {
        quote:
          "Estancia temporal ocho meses mientras hacía obra en casa. Gestión de suministros impecable.",
        author: "Cristina B.",
        role: "Propietaria · Centre",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis entradas en fincas con piscina comunitaria?",
        answer:
          "Sí. Coordinamos normas de comunidad y entregas con portero o administrador si hace falta.",
      },
      {
        question: "¿Contrato de temporada aparte?",
        answer: `Redacción legal por ${CONTRATO} IVA incl. por contrato; administración mensual ${MONTHLY}.`,
      },
    ],
    finalCtaLead: `Administración en Esplugues — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "barcelona",
  },
  {
    slug: "sant-joan-despi",
    zoneShort: "Sant Joan Despí",
    placeLabel: "Sant Joan Despí",
    metroSlug: "sant-joan-despi",
    heroH1: "Tramitar administración alquiler Sant Joan Despí — habitaciones y estancias laborales",
    metaTitle: `Admin. alquiler temporada Sant Joan Despí — ${MONTHLY}`,
    metaDescription: `Administración habitaciones/temporada Sant Joan Despí. ${MONTHLY} IVA incl. Incidencias, check-in, gestor AMB. Rescisiones gratis.`,
    heroLead: `Sant Joan Despí concentra pisos compartidos para familias y trabajadores de oficinas del Llobregat. Livendia tramita administración mensual por ${MONTHLY} IVA incl.: calendario de rotaciones, técnico y gestor presencial en entregas.`,
    whyIntro:
      "Rotación moderada pero exigente en convivencia: un inquilino conflictivo afecta a todo el piso si no hay mediador externo.",
    marketContext:
      "Mercado residencial consolidado (~17–20 €/m²) con habitaciones para parejas jóvenes y temporadas por reforma en vivienda principal.",
    barriosIntro: "Zonas del municipio:",
    barrios: ["Centre", "Les Planes", "La Torre", "Can Vicent", "Can Roca"],
    testimonialsTitle: "Propietarios en Sant Joan Despí",
    testimonials: [
      {
        quote:
          "Tres habitaciones en Les Planes. Livendia tramita bajas y altas sin que yo coordine horarios con cuatro personas.",
        author: "Helena V.",
        role: "Propietaria · Les Planes",
      },
      {
        quote:
          "Temporada seis meses en Centre. Check-in presencial y devolución de llaves documentada.",
        author: "Albert R.",
        role: "Propietario · Centre",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis reclamación de renta?",
        answer:
          "Controlamos cobros según IBAN pactado; avisamos en panel si hay retraso y reclamamos al inquilino antes de escalar.",
      },
      {
        question: "¿Oficina Livendia cerca?",
        answer:
          "Despacho en Les Corts (Barcelona); desplazamientos al Baix incluidos cuando la operación requiere presencia.",
      },
    ],
    finalCtaLead: `Activa admin. en Sant Joan Despí — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "barcelona",
  },
  {
    slug: "sant-adria-de-besos",
    zoneShort: "Sant Adrià",
    placeLabel: "Sant Adrià de Besòs",
    metroSlug: "sant-adria",
    heroH1: "Administración alquiler Sant Adrià — habitaciones junto al Besòs y 22@ cercano",
    metaTitle: `Admin. temporada Sant Adrià · La Mina — ${MONTHLY}`,
    metaDescription: `Administra alquiler habitación/temporada en Sant Adrià de Besòs. ${MONTHLY} IVA incl. Entradas, técnico, gestor Livendia AMB.`,
    heroLead: `Sant Adrià mueve habitaciones para quien trabaja en el 22@ o el Fòrum, y temporadas en bloques reformados. Livendia tramita el día a día por ${MONTHLY} IVA incl. — sin comisión sobre la renta.`,
    whyIntro:
      "Proximidad a Barcelona con rentas más asequibles: alta rotación de habitaciones exige calendario profesional, no improvisación del propietario.",
    marketContext:
      "Oferta en regeneración urbana (~16–19 €/m²) con demanda de estancias medias ligadas a obra y sector servicios.",
    barriosIntro: "Barrios de Sant Adrià:",
    barrios: ["Centre", "La Mina", "Progrés", "Ribera", "Port Fòrum límite"],
    testimonialsTitle: "Propietarios en Sant Adrià de Besòs",
    testimonials: [
      {
        quote:
          "Cuatro habitaciones cerca del metro. Livendia medió convivencia y coordinó fontanero sin que yo fuera entre semana.",
        author: "Karim B.",
        role: "Propietario · Centre",
      },
      {
        quote:
          "Temporada por proyecto en La Mina. Entrada y salida con inventario fotográfico.",
        author: "Sandra T.",
        role: "Propietaria · La Mina",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis administración en edificios nuevos del Fòrum?",
        answer:
          "Sí. Coordinamos con administrador de fincas y documentamos incidencias en panel.",
      },
      {
        question: "¿Rescisiones incluidas?",
        answer: "Sí, con la cuota activa tramitamos bajas sin coste adicional.",
      },
    ],
    finalCtaLead: `Delega en Sant Adrià — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "barcelona",
  },
  {
    slug: "castelldefels",
    zoneShort: "Castelldefels",
    placeLabel: "Castelldefels",
    metroSlug: "castelldefels",
    heroH1: "Gestión alquiler temporada Castelldefels — habitaciones, playa y estancias ERASMUS",
    metaTitle: `Admin. alquiler temporada Castelldefels · Bellamar — ${MONTHLY}`,
    metaDescription: `Administración habitaciones/temporada Castelldefels. ${MONTHLY} IVA incl. Check-in, incidencias, gestor presencial. Contratos ${CONTRATO}.`,
    heroLead: `Castelldefels mezcla habitaciones para estudiantes de la zona, estancias de verano y pisos compartidos cerca de la playa. Livendia tramita administración por ${MONTHLY} IVA incl. — ideal si no vives en el municipio.`,
    whyIntro:
      "Estacionalidad marcada: entradas en septiembre y salidas en junio multiplicadas por habitación. Sin gestor, el propietario pierde fines de semana.",
    marketContext:
      "Demanda estacional y precios variables (~17–24 €/m² según distancia al mar, 2026). Muchas temporadas acotadas fuera del LAU habitual mal redactadas.",
    barriosIntro: "Zonas de Castelldefels:",
    barrios: ["Centre", "Bellamar", "Montmar", "La Pineda", "El Castell"],
    testimonialsTitle: "Propietarios en Castelldefels",
    testimonials: [
      {
        quote:
          "Piso compartido en Bellamar. Livendia coordina entradas Erasmus y yo evito conflictos de convivencia.",
        author: "Eva M.",
        role: "Propietaria · Bellamar",
      },
      {
        quote:
          "Temporada verano tres meses. Check-out presencial y estado del piso fotografiado.",
        author: "Joan P.",
        role: "Propietario · Centre",
      },
    ],
    faqLocal: [
      {
        question: "¿Administráis solo verano o todo el año?",
        answer:
          "Todo el año. La cuota mensual cubre rotación continua; puedes pausar rescindiendo el servicio sin permanencia.",
      },
      {
        question: "¿Licencia turística?",
        answer:
          "Esta administración es para contratos entre particulares (habitación/temporada), no sustituye gestión de VUT con licencia municipal.",
      },
    ],
    finalCtaLead: `Tramita administración en Castelldefels — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "barcelona",
  },
  {
    slug: "sant-cugat-del-valles",
    zoneShort: "Sant Cugat",
    placeLabel: "Sant Cugat del Vallès",
    metroSlug: "sant-cugat",
    heroH1: "Administración alquiler Sant Cugat — habitaciones premium y temporadas corporativas",
    metaTitle: `Admin. temporada Sant Cugat · Mira-sol — ${MONTHLY}`,
    metaDescription: `Delega admin. alquiler habitación/temporada en Sant Cugat. ${MONTHLY} IVA incl. Gestor presencial, entradas, técnico. Contratos ${CONTRATO}.`,
    heroLead: `Sant Cugat concentra familias, ejecutivos en estancia media y habitaciones discretas en Mira-sol o Centre. Livendia tramita administración por ${MONTHLY} IVA incl. con protocolo cuidado en entregas e incidencias.`,
    whyIntro:
      "Rentas altas y perfiles exigentes: la mediación debe ser profesional y documentada. Ideal si el propietario está en el extranjero o tiene varios activos.",
    marketContext:
      "Entre los municipios con mayor renta media del AMB (~20–26 €/m², 2026). Temporadas corporativas y habitaciones para internacionales.",
    barriosIntro: "Zonas de Sant Cugat:",
    barrios: ["Centre", "Mira-sol", "Valldoreix", "La Floresta límite", "Sant Cugat Sud"],
    testimonialsTitle: "Propietarios en Sant Cugat del Vallès",
    testimonials: [
      {
        quote:
          "Habitaciones en Valldoreix para expatriados. Livendia coordina en inglés y entregas con inventario detallado.",
        author: "Claire D.",
        role: "Propietaria · Valldoreix",
      },
      {
        quote:
          "Estancia corporativa seis meses. Yo estaba en Madrid; ellos hicieron check-in presencial y seguimiento de suministros.",
        author: "Ignasi W.",
        role: "Propietario · Centre",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis administración en chalets con habitaciones anexas?",
        answer:
          "Sí, si el régimen es alquiler de habitación o temporada con contrato claro. Revisamos caso en la llamada inicial.",
      },
      {
        question: "¿Enlace con contrato habitación?",
        answer: `Redacción por ${CONTRATO} IVA incl.; admin mensual ${MONTHLY} para gestión continua.`,
      },
    ],
    finalCtaLead: `Activa administración en Sant Cugat — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "barcelona",
  },
  {
    slug: "gava",
    zoneShort: "Gavà",
    placeLabel: "Gavà",
    metroSlug: "gava",
    heroH1: "Tramitar administración alquiler Gavà — habitaciones cerca del aeropuerto y Fira",
    metaTitle: `Admin. alquiler temporada Gavà · Centre — ${MONTHLY}`,
    metaDescription: `Administración habitaciones/temporada en Gavà. ${MONTHLY} IVA incl. Entradas, incidencias, gestor AMB desde Les Corts.`,
    heroLead: `Gavà recibe trabajadores del aeropuerto, Fira y polígonos del Garraf en pisos compartidos. Livendia tramita administración mensual por ${MONTHLY} IVA incl.: contacto único con inquilinos, entradas y técnico.`,
    whyIntro:
      "Buena comunicación con Barcelona pero propietarios a menudo en otra población: delegar el teléfono del inquilino evita desgaste y errores en fianzas.",
    marketContext:
      "Precios moderados (~15–18 €/m²) con rotación de habitaciones para sector logístico y hostelería costera.",
    barriosIntro: "Zonas de Gavà:",
    barrios: ["Centre", "Gavà Mar", "Sant Pere", "Torre Llana", "Can Ros"],
    testimonialsTitle: "Propietarios en Gavà",
    testimonials: [
      {
        quote:
          "Tres habitaciones en Centre. Livendia tramita entradas cuando cambia el inquilino del sector aeroportuario.",
        author: "Miguel A.",
        role: "Propietario · Centre",
      },
      {
        quote:
          "Temporada ocho meses en Gavà Mar. Inventario en la entrega y seguimiento sin desplazarme desde Terrassa.",
        author: "Núria S.",
        role: "Propietaria · Gavà Mar",
      },
    ],
    faqLocal: [
      {
        question: "¿Cubrís Gavà Mar y Centre con la misma cuota?",
        answer:
          "Sí, una cuota mensual por inmueble administrado, sin suplemento por barrio dentro del municipio.",
      },
      {
        question: "¿Contratos nuevos en cada rotación?",
        answer: `Cada alta con contrato nuevo: ${CONTRATO} IVA incl. Rescisiones incluidas en la admin activa.`,
      },
    ],
    finalCtaLead: `Delega administración en Gavà — ${MONTHLY} IVA incl.`,
    habitacionContratoSlug: "barcelona",
  },
] as const;

function toCityDefinition(zone: AmbAdminTemporadaZone): AdministracionAlquilerTemporadaLocalCityDefinition {
  const contratoSlug = zone.slug.startsWith("barcelona-") ? zone.slug : "barcelona";
  return {
    slug: zone.slug,
    city: zone.placeLabel,
    placeLabel: zone.placeLabel,
    schemaAdministrativeArea: "Cataluña",
    metaTitle: zone.metaTitle,
    metaDescription: zone.metaDescription,
    heroBadge: `Temporada · ${zone.zoneShort}`,
    heroH1: zone.heroH1,
    heroLead: zone.heroLead,
    heroImage: getAdminTemporadaBcnBarrioHeroImage(zone.slug),
    heroImageAlt: getAdminTemporadaBcnBarrioHeroAlt(zone.zoneShort),
    whyIntro: zone.whyIntro,
    marketContext: zone.marketContext,
    barriosIntro: zone.barriosIntro,
    barrios: zone.barrios,
    regulatoryBlock:
      "Municipio en área metropolitana de Barcelona; muchos supuestos en zona tensionada (ZMRT). Fianza LAU en INCASÒL cuando aplique. Habitaciones y temporadas: régimen revisado contrato a contrato. Rescisiones incluidas en cuota activa.",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref(contratoSlug),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref(zone.habitacionContratoSlug),
    adminLauHref: administracionAlquilerMetroSlugHref(zone.metroSlug),
    testimonialsTitle: zone.testimonialsTitle,
    testimonials: [...zone.testimonials],
    faqLocal: zone.faqLocal,
  };
}

export const ADMIN_TEMPORADA_AMB_PUBLISHED_SLUGS: readonly string[] = ZONES.map((z) => z.slug);

export const ADMIN_TEMPORADA_AMB_CITIES: AdministracionAlquilerTemporadaLocalCityDefinition[] =
  ZONES.map(toCityDefinition);

export const ADMIN_TEMPORADA_AMB_HUB = ZONES.map((z) => ({
  slug: z.slug,
  shortName: z.zoneShort,
  name: z.placeLabel,
}));

export function isAdminTemporadaAmbSlug(slug: string): boolean {
  return ADMIN_TEMPORADA_AMB_PUBLISHED_SLUGS.includes(slug);
}
