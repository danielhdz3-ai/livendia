import {
  ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
} from "@/lib/catalog.public";

export const ADMINISTRACION_ALQUILER_TEMPORADA_INCLUDED = [
  "Punto de contacto único con inquilinos de temporada o por habitaciones",
  "Control de entradas y salidas (check-in / check-out) y estado de la vivienda",
  "Gestión de servicio técnico, averías e incidencias con proveedores",
  "Seguimiento de contratos, renovaciones y documentación en el panel Livendia",
  "Mediación profesional ante incidencias o desacuerdos con el inquilino",
  "Rescisiones de contrato incluidas sin coste adicional",
  "Informes de lo relevante: tú decides; nosotros filtramos el día a día",
  `Cuota ${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL} IVA incluido · sin permanencia`,
] as const;

export const ADMINISTRACION_ALQUILER_TEMPORADA_NOT_INCLUDED = [
  `Redacción de cada contrato nuevo de alquiler (temporada o habitación): ${ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL} IVA incl. por contrato, cobro aparte`,
  "Administración de alquileres de larga duración / vivienda habitual LAU (ver servicio de administración estándar)",
  "Honorarios de agencia inmobiliaria ni comercialización del anuncio",
  "Representación procesal en juzgados ni litigio contencioso",
  "Gastos de materiales, oficios o tasas ajenas a Livendia",
] as const;

export const ADMINISTRACION_ALQUILER_TEMPORADA_SCOPE =
  "Pensado para propietarios con vivienda de temporada o alquiler por habitaciones. Livendia lleva el control de inquilinos, entradas, salidas y servicio técnico. No sustituye la administración de alquiler LAU a 49 €/mes.";

export const ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_INTRO =
  "Activas la administración online, nos das de alta los contratos o habitaciones activos y desde el primer día somos el interlocutor con tus inquilinos.";

export const ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_STEPS = [
  {
    title: "Contratas la administración",
    description:
      "Pago mensual sin permanencia. Accedes al panel de alquiler Livendia y subes contratos, inventarios y datos de contacto de cada inquilino o habitación.",
  },
  {
    title: "Alta de inquilinos y calendario",
    description:
      "Registramos entradas y salidas previstas, fianzas y condiciones. Coordinamos check-in / check-out y el estado de la vivienda al cambio de ocupante.",
  },
  {
    title: "Día a día y servicio técnico",
    description:
      "El inquilino contacta con Livendia. Gestionamos incidencias, avisamos a técnicos y te consultamos solo cuando hace falta tu autorización o un cobro extraordinario.",
  },
  {
    title: "Contratos nuevos y rescisiones",
    description: `Si hace falta un contrato nuevo (temporada o habitación), lo redactamos por ${ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL} IVA incl. Las rescisiones las tramitamos sin coste adicional.`,
  },
] as const;

export const ADMINISTRACION_ALQUILER_TEMPORADA_PILLARS = [
  {
    title: "Temporada y habitaciones",
    description:
      "Más rotación, más entradas y salidas. Diseñado para el ritmo de temporada y del alquiler por habitaciones, no solo para un inquilino LAU estable.",
  },
  {
    title: "Control de ocupantes",
    description:
      "Sabemos quién entra, quién sale y qué queda pendiente en la vivienda o en cada habitación.",
  },
  {
    title: "Servicio técnico",
    description:
      "Averías, mantenimientos y proveedores: nosotros coordinamos para que tú no seas el teléfono de guardia.",
  },
  {
    title: "Contratos claros",
    description: `Cada contrato nuevo se cobra aparte (${ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL}). Las rescisiones van incluidas en la cuota.`,
  },
] as const;

export const ADMINISTRACION_ALQUILER_TEMPORADA_PRICING = [
  {
    title: "Administración mensual",
    price: ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
    detail: "IVA incluido · sin permanencia · inquilinos, entradas/salidas y servicio técnico",
  },
  {
    title: "Contrato nuevo",
    price: ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL,
    detail: "IVA incluido · por cada contrato de temporada o habitación que haya que redactar",
  },
  {
    title: "Rescisión de contrato",
    price: "Gratis",
    detail: "Incluida en la administración · sin coste adicional",
  },
] as const;

export const ADMINISTRACION_ALQUILER_TEMPORADA_TESTIMONIALS = {
  title: "Propietarios con temporada o habitaciones",
  items: [
    {
      quote:
        "Alquilo tres habitaciones y no paraba el teléfono. Desde que Livendia administra, solo me escriben si hay algo que decidir yo.",
      author: "Laura G.",
      role: "Propietaria, Barcelona",
    },
    {
      quote:
        "En temporada hay mucha rotación. Ellos llevan entradas, salidas y el técnico. Los contratos nuevos los pagan aparte y las bajas no me cuestan nada.",
      author: "Miguel R.",
      role: "Propietario, Valencia",
    },
  ],
} as const;

export const ADMINISTRACION_ALQUILER_TEMPORADA_FAQ = [
  {
    question: "¿Para quién es este servicio?",
    answer:
      "Para propietarios con vivienda de temporada o con inquilinos por habitaciones. Si tienes un alquiler de larga duración (vivienda habitual LAU), te conviene la administración estándar a 49 €/mes.",
  },
  {
    question: "¿Qué incluyen los 79 € al mes?",
    answer:
      "La administración continua: contacto con inquilinos, control de entradas y salidas, servicio técnico e incidencias, seguimiento documental y rescisiones sin coste. No incluye la redacción de cada contrato nuevo.",
  },
  {
    question: "¿Cuánto cuesta un contrato nuevo?",
    answer: `Cada contrato de alquiler (temporada o habitación) que haya que redactar se cobra aparte: ${ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL} IVA incluido por contrato.`,
  },
  {
    question: "¿Las rescisiones tienen coste?",
    answer: "No. Con la administración activa, las rescisiones de contrato las tramita Livendia sin coste adicional.",
  },
  {
    question: "¿Hay permanencia?",
    answer: "No. Puedes cancelar cuando quieras; mantienes el acceso hasta el final del periodo ya pagado.",
  },
  {
    question: "¿En qué se diferencia de la administración a 49 €/mes?",
    answer:
      "La de 49 €/mes está orientada a alquileres de larga duración con un inquilino estable. Esta de 79 €/mes cubre el ritmo de temporada y habitaciones: más rotación, entradas/salidas y control de varios ocupantes.",
  },
] as const;
