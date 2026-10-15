/**
 * Landings SEO: administración alquiler temporada/habitaciones — 10 distritos Barcelona.
 * Rutas: /servicios/administracion-alquiler-temporada-local/barcelona-{distrito}
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

type BcnAdminTemporadaZone = {
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
};

const ZONES: readonly BcnAdminTemporadaZone[] = [
  {
    slug: "barcelona-les-corts",
    zoneShort: "Les Corts",
    placeLabel: "Les Corts (Barcelona)",
    metroSlug: "les-corts",
    heroH1: "Administrar alquiler por habitación o temporada en Les Corts — sin ser el teléfono de guardia",
    metaTitle: `Admin. temporada Les Corts · Pedralbes, Maternitat — ${MONTHLY}`,
    metaDescription: `Administración de alquiler por temporada o habitaciones en Les Corts: entradas, check-out, incidencias y técnico. ${MONTHLY} IVA incl. Gestor presencial AMB. Contratos ${CONTRATO}.`,
    heroLead: `En Les Corts y Pedralbes conviven pisos compartidos para personal del Clínic, estancias por máster en la zona universitaria y temporadas en Maternitat. Livendia administra inquilinos, entradas, salidas y averías por ${MONTHLY} IVA incl. — con gestor en Les Corts cuando hace falta presencia en el piso.`,
    whyIntro:
      "Alta rotación en bloques cerca del Camp Nou y fincas señoriales en Pedralbes: un solo inquilino conflictivo puede bloquear la convivencia. Nosotros somos el canal único; tú apruebas obras y renovaciones.",
    marketContext:
      "Brains Real Estate (Q2 2026) sitúa Les Corts en ~24,9 €/m² de oferta. La demanda de habitaciones y estancias medias es estable por hospitales, UB y oficinas de Diagonal.",
    barriosIntro: "Administramos temporada y habitaciones en:",
    barrios: ["Pedralbes", "La Maternitat", "Les Corts centre", "Zona Universitària", "Travessera de Les Corts"],
    testimonialsTitle: "Propietarios en Les Corts con habitaciones o temporadas",
    testimonials: [
      {
        quote:
          "Tres habitaciones cerca del Clínic. Livendia coordina entradas en septiembre y check-out en junio; yo no medío en WhatsApp de convivencia.",
        author: "Elena R.",
        role: "Propietaria · Pedralbes",
      },
      {
        quote:
          "Estancias de seis meses en Maternitat. Ellos llevan inventario presencial en la entrega y el técnico cuando falla la caldera.",
        author: "Marc T.",
        role: "Propietario · Maternitat",
      },
    ],
    faqLocal: [
      {
        question: "¿Hacéis check-in presencial en Les Corts?",
        answer:
          "Sí, cuando la operación lo requiere: entrega de llaves, inventario o mediación in situ entran en el protocolo de administración en Barcelona/AMB, sin cargo extra de desplazamiento.",
      },
      {
        question: "¿Es lo mismo que la administración LAU a 59 €/mes?",
        answer:
          "No. Esta cuota cubre el ritmo de habitaciones y temporadas. Para un inquilino estable en vivienda habitual LAU, existe administración a 59 €/mes con la misma oficina en Les Corts.",
      },
    ],
    finalCtaLead: `Activa la administración temporada/habitaciones en Les Corts — ${MONTHLY} IVA incl., rescisiones gratis.`,
  },
  {
    slug: "barcelona-gracia",
    zoneShort: "Gràcia",
    placeLabel: "Gràcia (Barcelona)",
    metroSlug: "gracia",
    heroH1: "Administración de alquiler en Gràcia: habitaciones, temporadas y gestor presencial incluido",
    metaTitle: `Admin. temporada Gràcia · Vila, Vallcarca — ${MONTHLY}`,
    metaDescription: `Administra alquiler por habitación o temporada en Gràcia sin llamadas a deshora. ${MONTHLY} IVA incl. Check-in, incidencias y técnico. Oficina Les Corts. Contratos ${CONTRATO}.`,
    heroLead: `Vila de Gràcia, Vallcarca y La Salut mezclan pisos compartidos, Erasmus y estancias por proyectos. Livendia filtra convivencia, entradas y averías por ${MONTHLY} IVA incl. — y desplaza gestor al piso cuando hace falta inventario o mediación.`,
    whyIntro:
      "Gràcia tiene rotación alta y fincas sin ascensor: las incidencias de comunidad y ruido escalan rápido si el propietario es el único contacto. Centralizamos el canal con trazabilidad en panel.",
    marketContext:
      "El distrito ronda 25,3 €/m² en oferta (Brains RE, Q2 2026), con Vila de Gràcia por encima de El Coll. Muchos propietarios combinan habitaciones y temporadas acotadas.",
    barriosIntro: "Zonas de Gràcia donde administramos:",
    barrios: ["Vila de Gràcia", "Camp d'en Grassot", "Vallcarca", "La Salut", "El Coll", "Plaça del Sol"],
    testimonialsTitle: "Propietarios en Gràcia que delegaron entradas e incidencias",
    testimonials: [
      {
        quote:
          "Piso de cuatro habitaciones en Vila de Gràcia. Livendia es el único WhatsApp del inquilino; yo solo apruebo reparaciones grandes.",
        author: "Núria P.",
        role: "Propietaria · Vila de Gràcia",
      },
      {
        quote:
          "Temporadas en Vallcarca con cambio de inquilino cada curso. Llevan calendario de entradas y salidas y contratos nuevos aparte (100 €).",
        author: "David S.",
        role: "Propietario · Vallcarca",
      },
    ],
    faqLocal: [
      {
        question: "¿Mediáis conflictos de convivencia en pisos compartidos?",
        answer:
          "Sí. Documentamos incidencias, ruido y uso de zonas comunes antes de escalar al propietario. Si hace falta, el gestor puede acudir presencialmente.",
      },
      {
        question: "¿Redactáis contratos de habitación en Gràcia?",
        answer: `Cada contrato nuevo se redacta por ${CONTRATO} IVA incl. La cuota mensual de administración incluye gestión continua y rescisiones sin coste.`,
      },
    ],
    finalCtaLead: `Delega la administración en Gràcia — ${MONTHLY} IVA incl. · gestor online y presencial en el AMB.`,
  },
  {
    slug: "barcelona-eixample",
    zoneShort: "l'Eixample",
    placeLabel: "Eixample (Barcelona)",
    metroSlug: "eixample",
    heroH1: "Administrar pisos por temporada o habitaciones en l'Eixample — Erasmus, MWC y ejecutivos",
    metaTitle: `Admin. temporada Eixample · Dreta, Esquerra — ${MONTHLY}`,
    metaDescription: `Administración alquiler temporada/habitaciones en l'Eixample: check-in, rotación Erasmus, incidencias. ${MONTHLY} IVA incl. Gestor Livendia presencial. Contratos ${CONTRATO}.`,
    heroLead: `En Dreta y Esquerra de l'Eixample hay pisos amueblados por semestre, congresos y desplazamientos ejecutivos. Livendia administra ocupantes, entradas, salidas y técnico por ${MONTHLY} IVA incl., con gestor en el inmueble cuando toca inventario o entrega.`,
    whyIntro:
      "Fincas centenarias y pisos turísticos mal delimitados generan sanciones y litigios. Filtramos el día a día del inquilino y coordinamos salidas en junio sin que tú seas el interlocutor.",
    marketContext:
      "l'Eixample concentra demanda internacional y precios de referencia altos (~22–26 €/m² según subzona, 2026). La rotación por habitación es constante cerca de universidades y Passeig de Gràcia.",
    barriosIntro: "Subzonas del Eixample:",
    barrios: ["Dreta de l'Eixample", "Esquerra / Sant Antoni límite", "Sagrada Família", "Fort Pienc", "Nova Esquerra"],
    testimonialsTitle: "Propietarios en l'Eixample con rotación alta",
    testimonials: [
      {
        quote:
          "Erasmus en piso amueblado de Dreta. Livendia gestiona entradas en septiembre, inventario fotográfico y salida en junio.",
        author: "Laura M.",
        role: "Propietaria · Dreta",
      },
      {
        quote:
          "Dos habitaciones en Esquerra para teletrabajadores. Ya no recibo llamadas de averías a medianoche.",
        author: "Pau V.",
        role: "Propietario · Esquerra",
      },
    ],
    faqLocal: [
      {
        question: "¿Administráis estancias por congresos o MWC?",
        answer:
          "Sí, con calendario de entrada/salida, control de fianza y servicio técnico. Contratos de temporada nuevos se redactan aparte si hace falta blindaje legal.",
      },
      {
        question: "¿Zona tensionada en l'Eixample?",
        answer:
          "Barcelona está en zona tensionada; en habitaciones y temporadas revisamos régimen contrato a contrato. Tu gestor te orienta antes de cada alta.",
      },
    ],
    finalCtaLead: `Administración temporada/habitaciones en l'Eixample — ${MONTHLY} IVA incl.`,
  },
  {
    slug: "barcelona-sants-montjuic",
    zoneShort: "Sants-Montjuïc",
    placeLabel: "Sants-Montjuïc (Barcelona)",
    metroSlug: "sants-montjuic",
    heroH1: "Gestión de alquiler en Sants-Montjuïc: habitaciones, temporadas y check-in presencial",
    metaTitle: `Admin. temporada Sants-Montjuïc · Poble-sec — ${MONTHLY}`,
    metaDescription: `Administra alquiler por habitación o temporada en Sants, Hostafrancs o Poble-sec. ${MONTHLY} IVA incl. Entradas, incidencias, gestor presencial. Contratos ${CONTRATO}.`,
    heroLead: `Sants, Hostafrancs, Poble-sec y Montjuïc mueven estancias por Fira, obras en finca y habitaciones para hostelería. Livendia lleva entradas, salidas, incidencias y técnico por ${MONTHLY} IVA incl. — con gestor en el piso para inventarios y entregas.`,
    whyIntro:
      "Bloques compactos y pisos compartidos cerca de la estación de Sants generan rotación continua. Sin gestor intermediario, el propietario acaba mediando convivencia y averías de caldera.",
    marketContext:
      "Precios algo por debajo del Eixample con fuerte demanda de habitaciones (~18–22 €/m² según subzona, 2026) y temporadas ligadas a congresos y reformas.",
    barriosIntro: "Barrios del distrito:",
    barrios: ["Sants", "Hostafrancs", "Poble-sec", "Montjuïc", "La Bordeta", "Font de la Guatlla"],
    testimonialsTitle: "Propietarios en Sants-Montjuïc",
    testimonials: [
      {
        quote:
          "Cuatro habitaciones en Sants. Livendia coordina entradas cuando uno se va y otro entra la misma semana.",
        author: "Montse R.",
        role: "Propietaria · Sants",
      },
      {
        quote:
          "Temporada por obra en Poble-sec. Inventario presencial en la entrega y seguimiento de suministros sin que yo fuera al piso.",
        author: "Jordi L.",
        role: "Propietario · Poble-sec",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis estancias por congresos en la Fira?",
        answer:
          "Sí. Calendario acotado, check-in/out y contacto único con el inquilino. Contrato de temporada aparte si necesitas redacción legal específica.",
      },
      {
        question: "¿Incluye desplazamiento del gestor a Sants?",
        answer:
          "Las actuaciones presenciales necesarias (entrega, inventario, mediación) forman parte del servicio en Barcelona/AMB, sin suplemento por km.",
      },
    ],
    finalCtaLead: `Activa administración en Sants-Montjuïc — ${MONTHLY} IVA incl.`,
  },
  {
    slug: "barcelona-sant-marti",
    zoneShort: "Sant Martí",
    placeLabel: "Sant Martí (Barcelona)",
    metroSlug: "sant-marti",
    heroH1: "Administración alquiler temporada en Sant Martí — Poblenou, 22@ y habitaciones",
    metaTitle: `Admin. temporada Sant Martí · Poblenou, 22@ — ${MONTHLY}`,
    metaDescription: `Administra habitaciones y temporadas en Sant Martí: Poblenou, Diagonal Mar, 22@. ${MONTHLY} IVA incl. Check-in, técnico, gestor presencial. Contratos ${CONTRATO}.`,
    heroLead: `Poblenou y el 22@ concentran teletrabajadores, prácticas tech y pisos compartidos. Livendia administra rotación, entradas, incidencias y servicio técnico por ${MONTHLY} IVA incl., con gestor presencial en entregas e inspecciones.`,
    whyIntro:
      "La mezcla de obra nueva, habitaciones y estancias laborales exige calendario claro. Un propietario no residente no puede atender cada check-in en Poblenou un domingo.",
    marketContext:
      "Sant Martí combina oferta renovada en Diagonal Mar con stock industrial reconvertido en Poblenou; demanda estable de habitaciones para sector tech y hostelería.",
    barriosIntro: "Zonas de Sant Martí:",
    barrios: ["Poblenou", "22@ / Glòries", "Diagonal Mar", "El Clot", "La Verneda", "Vila Olímpica límite"],
    testimonialsTitle: "Propietarios en Sant Martí y Poblenou",
    testimonials: [
      {
        quote:
          "Piso compartido en Poblenou para gente del 22@. Livendia filtra incidencias y yo solo veo el panel.",
        author: "Silvia A.",
        role: "Propietaria · Poblenou",
      },
      {
        quote:
          "Temporadas de tres meses en Diagonal Mar. Entradas coordinadas y técnico cuando falla el aire acondicionado.",
        author: "Oriol C.",
        role: "Propietario · Diagonal Mar",
      },
    ],
    faqLocal: [
      {
        question: "¿Administráis pisos en edificios nuevos de Diagonal Mar?",
        answer:
          "Sí. Coordinamos con comunidad, ascensor y proveedores. Incidencias y entradas documentadas en el panel del propietario.",
      },
      {
        question: "¿Enlace con contrato de temporada en Poblenou?",
        answer: `Si hace falta redactar contrato, lo hacemos por ${CONTRATO} IVA incl.; la administración mensual cubre el resto del ciclo.`,
      },
    ],
    finalCtaLead: `Delega en Sant Martí — ${MONTHLY} IVA incl. · online + presencial.`,
  },
  {
    slug: "barcelona-sarria-sant-gervasi",
    zoneShort: "Sarrià-Sant Gervasi",
    placeLabel: "Sarrià-Sant Gervasi (Barcelona)",
    metroSlug: "sarria-sant-gervasi",
    heroH1: "Administrar alquiler en Sarrià-Sant Gervasi: habitaciones premium y temporadas discretas",
    metaTitle: `Admin. temporada Sarrià-Sant Gervasi — ${MONTHLY}`,
    metaDescription: `Administración temporada/habitaciones en Sarrià, Sant Gervasi, Tres Torres. ${MONTHLY} IVA incl. Gestor presencial, check-in, técnico. Contratos ${CONTRATO}.`,
    heroLead: `Sarrià, Sant Gervasi y Tres Torres combinan familias, ejecutivos en estancia media y pisos compartidos discretos. Livendia administra inquilinos y entradas por ${MONTHLY} IVA incl., con protocolo presencial cuidado en fincas señoriales.`,
    whyIntro:
      "Rentas altas y perfiles exigentes: un impago o una salida mal gestionada duele más. Seguimiento de renta al día 1, mediación profesional y visitas presenciales cuando el inmueble lo requiere.",
    marketContext:
      "Distrito con among the highest €/m² in Barcelona (often 25–30 €/m² en oferta, 2026). Demanda de habitaciones para internacionales y estancias corporativas.",
    barriosIntro: "Barrios del distrito:",
    barrios: ["Sarrià", "Sant Gervasi - Galvany", "Tres Torres", "Putxet", "Bonanova", "Les Tres Torres"],
    testimonialsTitle: "Propietarios en Sarrià-Sant Gervasi",
    testimonials: [
      {
        quote:
          "Habitaciones en Tres Torres para expatriados. Livendia coordina entradas con inventario fotográfico detallado.",
        author: "Marta F.",
        role: "Propietaria · Tres Torres",
      },
      {
        quote:
          "Estancia temporal en Sarrià mientras vendía otro piso. Check-out presencial y devolución de fianza documentada.",
        author: "Enric D.",
        role: "Propietario · Sarrià",
      },
    ],
    faqLocal: [
      {
        question: "¿Adaptáis la comunicación a inquilinos internacionales?",
        answer:
          "Sí. El gestor asignado puede coordinar en español o inglés según el expediente; incidencias y entradas quedan en el panel.",
      },
      {
        question: "¿Administración LAU de larga duración en la zona?",
        answer:
          "Para un inquilino estable existe el servicio a 59 €/mes; esta landing es para temporada y habitaciones con más rotación.",
      },
    ],
    finalCtaLead: `Administración en Sarrià-Sant Gervasi — ${MONTHLY} IVA incl.`,
  },
  {
    slug: "barcelona-nou-barris",
    zoneShort: "Nou Barris",
    placeLabel: "Nou Barris (Barcelona)",
    metroSlug: "nou-barris",
    heroH1: "Gestión alquiler habitaciones en Nou Barris — rotación, entradas y gestor Livendia",
    metaTitle: `Admin. temporada Nou Barris · Verdun, Roquetes — ${MONTHLY}`,
    metaDescription: `Administra habitaciones y temporadas en Nou Barris: Verdun, Roquetes, Trinitat. ${MONTHLY} IVA incl. Incidencias, check-in presencial. Contratos ${CONTRATO}.`,
    heroLead: `Nou Barris concentra pisos compartidos familiares y estancias laborales en Roquetes o Verdun. Livendia lleva el teléfono del inquilino, entradas, salidas y técnico por ${MONTHLY} IVA incl. — con gestor presencial en el AMB cuando hace falta.`,
    whyIntro:
      "Bloques de los años 60–80 con muchas habitaciones: la convivencia y las averías comunes son el día a día. Centralizamos contacto y documentamos antes de escalar al propietario.",
    marketContext:
      "Precios más accesibles que el centro (~15–19 €/m² en oferta, 2026) con rotación constante de habitaciones para familias y trabajadores del cinturón.",
    barriosIntro: "Barrios de Nou Barris:",
    barrios: ["Verdun", "Roquetes", "Trinitat Vella", "Porta", "Vilapicina", "Canyelles"],
    testimonialsTitle: "Propietarios en Nou Barris",
    testimonials: [
      {
        quote:
          "Tres habitaciones en Roquetes. Antes atendía WhatsApp a cualquier hora; ahora Livendia filtra y yo solo firmo cuando toca.",
        author: "Carmen V.",
        role: "Propietaria · Roquetes",
      },
      {
        quote:
          "Temporada de seis meses en Verdun. Entrada presencial con inventario y salida sin conflicto de fianza.",
        author: "Ahmed K.",
        role: "Propietario · Verdun",
      },
    ],
    faqLocal: [
      {
        question: "¿Seguimiento de renta si el inquilino paga en efectivo?",
        answer:
          "Controlamos que la renta llegue a tu cuenta según lo pactado; te avisamos en panel si hay retraso y reclamamos al inquilino.",
      },
      {
        question: "¿Rescisiones incluidas?",
        answer: "Sí, con la administración activa las rescisiones las tramitamos sin coste adicional.",
      },
    ],
    finalCtaLead: `Activa administración en Nou Barris — ${MONTHLY} IVA incl.`,
  },
  {
    slug: "barcelona-ciutat-vella",
    zoneShort: "Ciutat Vella",
    placeLabel: "Ciutat Vella (Barcelona)",
    metroSlug: "ciutat-vella",
    heroH1: "Administración alquiler en Ciutat Vella — Gòtic, Born, Raval: temporada sin caos diario",
    metaTitle: `Admin. temporada Ciutat Vella · Born, Gòtic — ${MONTHLY}`,
    metaDescription: `Administra habitaciones y temporadas en Ciutat Vella: Gòtic, Born, Raval, Barceloneta. ${MONTHLY} IVA incl. Entradas, mediación, gestor presencial. Contratos ${CONTRATO}.`,
    heroLead: `El Gòtic, el Born, el Raval y la Barceloneta mezclan turismo, habitaciones y estancias cortas. Livendia administra ocupantes, entradas, incidencias y técnico por ${MONTHLY} IVA incl., con mediación presencial cuando la finca antigua lo exige.`,
    whyIntro:
      "Fincas históricas, vecindad densa y normativa estricta: cada rotación mal gestionada genera quejas de comunidad. Livendia es el filtro profesional ante el inquilino.",
    marketContext:
      "Ciutat Vella tiene oferta heterogénea; muchos propietarios combinan habitaciones para hostelería y temporadas fuera del LAU habitual.",
    barriosIntro: "Barrios del distrito:",
    barrios: ["Barri Gòtic", "El Born", "El Raval", "La Barceloneta", "Sant Pere", "Santa Caterina"],
    testimonialsTitle: "Propietarios en Ciutat Vella",
    testimonials: [
      {
        quote:
          "Habitaciones en el Raval. Livendia medió convivencia y coordinó reparación de humedades con el industrial sin que yo fuera al piso.",
        author: "Isabel N.",
        role: "Propietaria · Raval",
      },
      {
        quote:
          "Temporada en el Born para restauradores. Check-in presencial y salida documentada.",
        author: "Quim R.",
        role: "Propietario · Born",
      },
    ],
    faqLocal: [
      {
        question: "¿Gestionáis quejas de vecinos por ruido?",
        answer:
          "Sí. Registramos incidencias, contactamos al inquilino y documentamos. Si hace falta inspección presencial, el gestor acude.",
      },
      {
        question: "¿Compatibilidad con licencia turística?",
        answer:
          "Esta administración es para temporada/habitaciones bajo contrato entre particulares, no sustituye la gestión de VUT regulada por licencia.",
      },
    ],
    finalCtaLead: `Delega administración en Ciutat Vella — ${MONTHLY} IVA incl.`,
  },
  {
    slug: "barcelona-horta-guinardo",
    zoneShort: "Horta-Guinardó",
    placeLabel: "Horta-Guinardó (Barcelona)",
    metroSlug: "horta-guinardo",
    heroH1: "Administrar alquiler en Horta-Guinardó: habitaciones familiares y temporadas en el distrito",
    metaTitle: `Admin. temporada Horta-Guinardó · Guinardó, Carmel — ${MONTHLY}`,
    metaDescription: `Administración habitaciones/temporada en Horta-Guinardó. ${MONTHLY} IVA incl. Entradas, técnico, gestor presencial Barcelona. Contratos ${CONTRATO}.`,
    heroLead: `Guinardó, el Carmel y Horta mueven pisos compartidos familiares y estancias por prácticas en hospital o UB. Livendia administra inquilinos, entradas, salidas y averías por ${MONTHLY} IVA incl.`,
    whyIntro:
      "Distrito residencial con pendiente y edificios sin ascensor: las averías y las entregas de llaves son más lentas. Coordinamos técnicos locales y check-in presencial si tú no puedes desplazarte.",
    marketContext:
      "Precios medios del norte de Barcelona (~17–21 €/m², 2026) con demanda de habitaciones para sanitarios y estudiantes.",
    barriosIntro: "Barrios del distrito:",
    barrios: ["El Guinardó", "El Carmel", "Horta", "La Clota", "Montbau", "Can Baró"],
    testimonialsTitle: "Propietarios en Horta-Guinardó",
    testimonials: [
      {
        quote:
          "Dos habitaciones cerca del Hospital de Sant Pau. Livendia gestiona rotación de enfermeras en estancia media.",
        author: "Rosa M.",
        role: "Propietaria · Guinardó",
      },
      {
        quote:
          "Piso compartido en Horta. Incidencias de caldera y convivencia las llevan ellos; yo recibo resumen en panel.",
        author: "Felix T.",
        role: "Propietario · Horta",
      },
    ],
    faqLocal: [
      {
        question: "¿Coordináis técnicos en edificios sin ascensor?",
        answer:
          "Sí. Trabajamos con industriales habituales en el distrito y avisamos al propietario solo cuando hace falta autorizar presupuesto.",
      },
      {
        question: "¿Oficina cerca de Horta-Guinardó?",
        answer:
          "Despacho en Les Corts (Mejía Lequerica 44); desplazamientos presenciales al distrito forman parte del servicio cuando son necesarios.",
      },
    ],
    finalCtaLead: `Administración en Horta-Guinardó — ${MONTHLY} IVA incl.`,
  },
  {
    slug: "barcelona-sant-andreu",
    zoneShort: "Sant Andreu",
    placeLabel: "Sant Andreu (Barcelona)",
    metroSlug: "sant-andreu",
    heroH1: "Gestión alquiler temporada y habitaciones en Sant Andreu — entradas y gestor presencial",
    metaTitle: `Admin. temporada Sant Andreu · La Sagrera — ${MONTHLY}`,
    metaDescription: `Administra habitaciones y temporadas en Sant Andreu y La Sagrera. ${MONTHLY} IVA incl. Check-in, incidencias, gestor Livendia. Contratos ${CONTRATO}.`,
    heroLead: `Sant Andreu y La Sagrera combinan familias, habitaciones para trabajadores industriales y estancias por reformas del 22@ cercano. Livendia administra contacto, entradas, salidas y técnico por ${MONTHLY} IVA incl.`,
    whyIntro:
      "Rotación estable en bloques bien comunicados en metro: sin gestor, el propietario acaba coordinando cada cambio de habitación manualmente.",
    marketContext:
      "Distrito en consolidación con precios por debajo del Eixample (~17–20 €/m², 2026) y demanda de habitaciones ligada a polígonos y La Sagrera.",
    barriosIntro: "Zonas de Sant Andreu:",
    barrios: ["Sant Andreu de Palomar", "La Sagrera", "Navas", "Trinitat Vella límite", "Bon Pastor límite"],
    testimonialsTitle: "Propietarios en Sant Andreu",
    testimonials: [
      {
        quote:
          "Tres habitaciones en La Sagrera. Livendia lleva calendario de entradas y rescisiones sin coste extra.",
        author: "Teresa G.",
        role: "Propietaria · La Sagrera",
      },
      {
        quote:
          "Temporada por reforma en mi piso de Sant Andreu. Inventario en la entrega y seguimiento de suministros.",
        author: "Víctor P.",
        role: "Propietario · Sant Andreu",
      },
    ],
    faqLocal: [
      {
        question: "¿Tramitáis bajas de inquilino en Sant Andreu?",
        answer:
          "Sí. Rescisiones incluidas en la cuota; coordinamos salida, estado del piso y comunicación con el propietario.",
      },
      {
        question: "¿Contratos de habitación aparte?",
        answer: `Cada contrato nuevo: ${CONTRATO} IVA incl. La administración mensual cubre gestión continua.`,
      },
    ],
    finalCtaLead: `Activa administración en Sant Andreu — ${MONTHLY} IVA incl.`,
  },
] as const;

function toCityDefinition(zone: BcnAdminTemporadaZone): AdministracionAlquilerTemporadaLocalCityDefinition {
  const contratoSlug = zone.slug;
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
      "Barcelona, zona de mercado residencial tensionada (desde 2024). En habitaciones y temporadas se revisa régimen contrato a contrato; fianza LAU habitual en INCASÒl. Rescisiones incluidas en la cuota activa.",
    contratoTemporadaHref: localContratoAlquilerTemporadaHref(contratoSlug),
    contratoHabitacionHref: localContratoAlquilerHabitacionHref("barcelona"),
    adminLauHref: administracionAlquilerMetroSlugHref(zone.metroSlug),
    testimonialsTitle: zone.testimonialsTitle,
    testimonials: [...zone.testimonials],
    faqLocal: zone.faqLocal,
  };
}

export const ADMIN_TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS: readonly string[] = ZONES.map((z) => z.slug);

export const ADMIN_TEMPORADA_BCN_BARRIO_CITIES: AdministracionAlquilerTemporadaLocalCityDefinition[] =
  ZONES.map(toCityDefinition);

export const ADMIN_TEMPORADA_BCN_BARRIO_HUB = ZONES.map((z) => ({
  slug: z.slug,
  shortName: z.zoneShort,
  name: z.placeLabel,
}));

export function isAdminTemporadaBcnBarrioSlug(slug: string): boolean {
  return ADMIN_TEMPORADA_BCN_BARRIO_PUBLISHED_SLUGS.includes(slug);
}
