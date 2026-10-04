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

export const SERVICIO_ALQUILER_INTEGRAL_PROCESS_STEPS = [
  {
    title: "Briefing y estrategia",
    description:
      "Definimos renta, condiciones, tipo de contrato y calendario. Preparamos el mensaje del anuncio y los criterios de solvencia que exigirá el seguro de impago.",
  },
  {
    title: "Búsqueda y visitas",
    description:
      "Activamos la captación, filtramos candidatos y organizamos visitas. Tú decides el inquilino final con criterio profesional, no solo intuición.",
  },
  {
    title: "Seguro de impago y documentación",
    description:
      "El candidato elegido aporta documentación. La tramitamos con la aseguradora de alquiler garantizado que recomendamos; solo avanzamos cuando el estudio de solvencia es favorable.",
  },
  {
    title: "Contrato, fianza y suministros",
    description:
      "Redactamos el contrato, coordinamos firma, fianza legal y altas de suministros. Te acompañamos hasta la entrega de llaves y el inicio del arrendamiento.",
  },
] as const;

export const SERVICIO_ALQUILER_INTEGRAL_INSURANCE_NOTE = {
  title: "Seguro de impago y alquiler garantizado",
  body: "Livendia no sustituye a la aseguradora: recomendamos una compañía de alquiler garantizado de confianza para que el estudio de solvencia filtre al inquilino antes de firmar. La prima y la cobertura las contratas tú como propietario; nosotros gestionamos la documentación y el encaje con el contrato. Tras el alta, la renta la ingresa el inquilino en tu cuenta bancaria (salvo condiciones específicas de la póliza, que revisamos contigo).",
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
] as const;
