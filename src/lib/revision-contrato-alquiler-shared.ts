import { REVISION_CONTRATO_ALQUILER_PRICE_LABEL } from "@/lib/catalog.public";

export const REVISION_CONTRATO_ALQUILER_INCLUDED = [
  "Revisión cláusula a cláusula del borrador que te envía el propietario",
  "Contratos LAU de larga duración, temporada y alquiler de habitación",
  "Detección de cláusulas abusivas, ilegales o contrarias a la LAU",
  "Análisis de fianza, depósito, renta y fórmulas de actualización",
  "Revisión de gastos, suministros, penalizaciones y preaviso de salida",
  "Identificación de puntos vulnerables para negociar con el arrendador",
  "Informe detallado PDF con recomendaciones concretas",
  "Llamada de veredicto con gestor especializado en alquileres",
  "Asesoramiento telefónico hasta que decidas si firmas",
  `Entrega en 24-48 h laborables · ${REVISION_CONTRATO_ALQUILER_PRICE_LABEL} IVA incl.`,
] as const;

/** Límites del servicio — no confundir con redacción integral. */
export const REVISION_CONTRATO_ALQUILER_NOT_INCLUDED = [
  "Redacción completa de un contrato de alquiler desde cero",
  "Entrega de un documento contractual listo para firmar sustituyendo al del propietario",
  "Elaboración de inventario, anexos o normas de convivencia como documentos nuevos",
  "Representación legal ni negociación directa con el arrendador en tu nombre",
] as const;

export const REVISION_CONTRATO_ALQUILER_SCOPE_DISCLAIMER =
  "Este servicio es una revisión e informe sobre el borrador que ya tienes. No incluye la redacción completa de un contrato de alquiler nuevo.";

export const REVISION_CONTRATO_ALQUILER_PROCESS_INTRO =
  "Subes el borrador del contrato, un gestor lo analiza y recibes un informe con los puntos más delicados antes de firmar. Sin desplazamientos: todo online desde cualquier ciudad de España.";

export const REVISION_CONTRATO_ALQUILER_PROCESS_STEPS = [
  {
    title: "Subes el borrador del contrato",
    description:
      "Desde tu panel Livendia aportas el PDF o Word que te ha enviado el propietario, agencia o particular. Si tienes anexos (inventario, normas de convivencia), también los revisamos.",
  },
  {
    title: "Análisis por un gestor especializado",
    description:
      "Revisamos cláusulas de renta, fianza, duración, gastos, penalizaciones, entrega de llaves, estado del inmueble y coherencia con el tipo de contrato (LAU, temporada o habitación).",
  },
  {
    title: "Informe detallado PDF",
    description:
      "Recibes un documento claro: hallazgos por severidad, cláusulas a negociar, riesgos legales y sugerencias puntuales de cambio para plantear al propietario. No es un contrato completo redactado desde cero.",
  },
  {
    title: "Llamada de veredicto y soporte",
    description:
      "Te explicamos el informe en una llamada y resolvemos dudas por teléfono o WhatsApp hasta que decidas si firmas, negocias o pides cambios.",
  },
] as const;

export const REVISION_CONTRATO_ALQUILER_TESTIMONIALS = {
  title: "Inquilinos que revisaron su contrato antes de firmar",
  items: [
    {
      quote:
        "El propietario me mandó un contrato de 18 páginas copiado de internet. Livendia detectó tres cláusulas abusivas sobre gastos de comunidad y una penalización ilegal por salida anticipada. Negocié con el informe y firmé tranquilo.",
      author: "Laura M.",
      role: "Inquilina · Madrid",
    },
    {
      quote:
        "Era mi primer piso en alquiler y no sabía leer un contrato LAU. El gestor me marcó qué era normal y qué no. La llamada de veredicto me ahorró meses de líos con la fianza.",
      author: "Pablo R.",
      role: "Inquilino · Valencia",
    },
    {
      quote:
        "Alquilaba por temporada seis meses y el contrato me obligaba a pagar reformas. El informe de Livendia me sirvió para pedir cambios antes de transferir la fianza.",
      author: "Carmen S.",
      role: "Inquilina · Barcelona",
    },
    {
      quote:
        "Compartía piso y el contrato de habitación no decía nada de las zonas comunes ni del reparto de facturas. Con la revisión pude cerrar por escrito lo que ya habíamos hablado verbalmente.",
      author: "Diego A.",
      role: "Inquilino · Sevilla",
    },
  ],
} as const;

export const REVISION_CONTRATO_ALQUILER_FAQ = [
  {
    question: "¿Puedo revisar el contrato si ya lo he firmado?",
    answer:
      "Este servicio está pensado para revisar el borrador antes de firmar, cuando aún puedes negociar. Si ya firmaste, contáctanos: según el caso podemos orientarte o proponerte otros servicios.",
  },
  {
    question: "¿Sirve para contratos de temporada y de habitación?",
    answer:
      "Sí. Revisamos contratos LAU de larga duración, alquileres por temporada y contratos de habitación en piso compartido. Cada régimen tiene riesgos distintos y el informe se adapta a tu caso.",
  },
  {
    question: "¿Qué tipo de cláusulas detectáis con más frecuencia?",
    answer:
      "Fianzas por encima de lo legal, gastos de comunidad o suministros mal repartidos, penalizaciones por salida anticipada, cláusulas de obra o reparaciones a cargo del inquilino, actualizaciones de renta opacas y preavisos confusos.",
  },
  {
    question: "¿Cuánto tarda la revisión?",
    answer:
      "Normalmente entregamos el informe en 24-48 horas laborables tras recibir el borrador completo y los anexos relevantes.",
  },
  {
    question: "¿El informe sirve para negociar con el propietario?",
    answer:
      "Sí. El PDF está redactado para que puedas enviarlo o usarlo en una conversación con el arrendador: indica qué cláusulas conviene cambiar y por qué, con argumentos legales comprensibles.",
  },
  {
    question: "¿Incluye la redacción completa del contrato?",
    answer:
      "No. Este servicio revisa el borrador que te envía el propietario y te entrega un informe con riesgos y puntos a negociar. No redactamos un contrato de alquiler completo listo para firmar. Si necesitas redacción integral, contrata el servicio de contrato LAU, temporada o habitación.",
  },
  {
    question: "¿Es lo mismo que redactar un contrato nuevo?",
    answer:
      "No. Aquí analizamos el documento que ya te ofrece el arrendador. La redacción completa del contrato —con todas las cláusulas, anexos e inventario— es un servicio distinto en Livendia.",
  },
  {
    question: "¿Atendéis en toda España?",
    answer:
      "Sí. El servicio es 100 % online: subes el contrato desde cualquier ciudad y el gestor te entrega informe y llamada de veredicto sin desplazamientos.",
  },
] as const;
