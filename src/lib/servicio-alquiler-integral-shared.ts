import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
  SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL,
} from "@/lib/catalog.public";

export const SERVICIO_ALQUILER_INTEGRAL_HERO_BADGE = "Propietarios · Del anuncio a las llaves";

export const SERVICIO_ALQUILER_INTEGRAL_SCOPE =
  "Servicio de puesta en marcha del alquiler: búsqueda activa de inquilinos, filtrado de solvencia, contratos y trámites hasta la entrada. La administración mensual del inquilino es opcional y se contrata aparte cuando el piso ya está alquilado.";

export const SERVICIO_ALQUILER_INTEGRAL_INCLUDED = [
  "Búsqueda activa y captación de candidatos: difusión del anuncio, filtrado de curiosos y coordinación de visitas según tu calendario",
  "Perfilado de inquilinos: priorizamos solvencia, estabilidad laboral y encaje con la vivienda (LAU, temporada o habitación)",
  "Tramitación de la documentación del candidato elegido ante el servicio de impago / alquiler garantizado (producto de la aseguradora; te orientamos hacia nuestra aseguradora de confianza)",
  "Redacción y coordinación de firma del contrato de alquiler adaptado al uso real (LAU, temporada o habitación)",
  "Orientación y apoyo en el depósito de fianza legal (INCASÒL u organismo autonómico cuando corresponda) y en la entrega de llaves",
  "Gestión de altas de suministros y cambio de titularidad con compañías (luz, gas, agua, internet) según lo pactado en contrato",
  "Checklist de entrega: inventario, lecturas, estado de la vivienda y documentación en panel Livendia",
  "Gestor dedicado por WhatsApp durante todo el proceso de puesta en marcha",
] as const;

export const SERVICIO_ALQUILER_INTEGRAL_NOT_INCLUDED = [
  "Prima del seguro de impago o alquiler garantizado (lo contrata el propietario con la aseguradora; Livendia no es aseguradora ni garantiza la renta)",
  `Administración mensual del inquilino una vez alquilado (opcional: ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} LAU o ${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL} temporada/habitaciones)`,
  "Honorarios de agencia tradicional por porcentaje sobre la renta anual (nuestro modelo es tarifa de servicio Livendia, cerrada por escrito)",
  "Reparaciones, mobiliario, fotografía profesional o reformas previas al anuncio",
  "Representación procesal en juzgados ni litigio contencioso",
] as const;

export const SERVICIO_ALQUILER_INTEGRAL_INSURANCE_NOTE = {
  title: "Seguro de impago y alquiler garantizado",
  body: "Livendia no sustituye a la aseguradora: recomendamos nuestra compañía de alquiler garantizado de confianza para el estudio de solvencia (nóminas, contrato, vida laboral y ratio de endeudamiento). La póliza la contratas tú como propietario con prima aparte; nosotros preparamos y remitimos el expediente. Solo proponemos firmar cuando el estudio es favorable o tú asumes el riesgo residual de forma informada. Tras el alta, salvo condiciones de la póliza, la renta la ingresa el inquilino en tu cuenta bancaria.",
} as const;

export const SERVICIO_ALQUILER_INTEGRAL_OPTIONAL_ADMIN = [
  {
    title: "Administración de alquiler LAU",
    description:
      "Cuando el inquilino ya está dentro, delega incidencias, renovaciones y seguimiento de la renta en tu cuenta. Sin permanencia.",
    href: "/servicios/administracion-alquiler",
    priceLabel: ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  },
  {
    title: "Admin. temporada / habitaciones",
    description:
      "Si alquilas por habitaciones o estancias de temporada: entradas, salidas, servicio técnico y rotación de ocupantes.",
    href: "/servicios/administracion-alquiler-temporada",
    priceLabel: ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
  },
] as const;

export const SERVICIO_ALQUILER_INTEGRAL_FAQ = [
  {
    question: "¿En qué se diferencia de la administración de alquiler?",
    answer:
      "El servicio integral cubre la fase previa y de puesta en marcha: encontrar inquilino, pasar el filtro del seguro, firmar contrato, fianza y suministros. La administración mensual empieza cuando el piso ya está alquilado y el inquilino convive en la vivienda.",
  },
  {
    question: "¿Livendia garantiza el cobro de la renta?",
    answer:
      "No. Livendia no es aseguradora. Recomendamos contratar alquiler garantizado / seguro de impago con nuestra aseguradora de confianza para estudiar la solvencia del inquilino antes de firmar. La cobertura y la prima dependen de la póliza que contrates como propietario.",
  },
  {
    question: "¿Cuánto cuesta el servicio integral?",
    answer: `El honorario de Livendia se presupuesta según vivienda, zona y alcance (visitas, tipo de contrato, suministros). Referencia orientativa desde ${SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL} IVA incl. Te enviamos propuesta cerrada antes de empezar. Seguro de impago y administración mensual van aparte.`,
  },
  {
    question: "¿Puedo contratar solo la administración si ya tengo inquilino?",
    answer: `Sí. Si ya tienes arrendatario, el servicio integral no es necesario: puedes ir directo a administración LAU (${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}) o temporada/habitaciones (${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL}).`,
  },
  {
    question: "¿Tramitáis contratos de habitación o temporada?",
    answer:
      "Sí. Adaptamos búsqueda, seguro y contrato al régimen real (LAU habitual, temporada o habitación). Si después necesitas gestión del día a día con mucha rotación, la administración de temporada encaja mejor que la LAU.",
  },
  {
    question: "¿Operáis en toda España?",
    answer:
      "Sí, con gestoría inmobiliaria online. La búsqueda de inquilino y los trámites se coordinan de forma remota; visitas y entrega de llaves según acordemos contigo en tu municipio.",
  },
  {
    question: "¿Qué documentación pedís a los inquilinos?",
    answer:
      "DNI o NIE, nóminas recientes, contrato de trabajo indefinido o justificante de ingresos estables, informe de vida laboral y, si hace falta, otros documentos para contrastar solvencia. Analizamos si la renta encaja en un ratio de endeudamiento razonable antes de proponer visita o envío al seguro.",
  },
  {
    question: "¿Qué es SERPAVI y me afecta?",
    answer:
      "En Cataluña, SERPAVI es el registro de alquiler donde deben inscribirse muchos contratos. En otras comunidades existen registros o obligaciones similares. En la fase de valoración te orientamos sobre registro, zonas tensionadas y documentación exigible en tu CCAA.",
  },
] as const;
