import { ACOMPANAMIENTO_RESERVA_ARRAS_PRICE_LABEL } from "@/lib/catalog.public";

export const ACOMPANAMIENTO_RESERVA_ARRAS_INCLUDED = [
  "Revisión del documento de reserva antes de que quede vinculante",
  "Análisis de nota registral: titularidad, cargas e hipotecas",
  "Comprobación básica de situación urbanística e indicios de irregularidades",
  "Ajuste o redacción del borrador de arras alineado con lo revisado",
  "Gestor inmobiliario asignado durante todo el tramo reserva–arras",
  "Informe de riesgos y recomendaciones en lenguaje claro",
  "Coordinación con el vendedor para alinear condiciones y plazos",
  `Tarifa fija ${ACOMPANAMIENTO_RESERVA_ARRAS_PRICE_LABEL} IVA incl.`,
] as const;

export const ACOMPANAMIENTO_RESERVA_ARRAS_NOT_INCLUDED = [
  "Acompañamiento hasta escritura en notaría (ver servicio completo de compra)",
  "Revisión documental post-arras una vez firmadas las arras",
  "Representación legal ni negociación directa en tu nombre ante el vendedor",
  "Tasación, hipoteca ni gestión bancaria del crédito",
] as const;

export const ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS_INTRO =
  "Contratas online, subes reserva y datos del inmueble, y un gestor Livendia revisa el expediente antes de que transfieras importes relevantes. Te acompaña hasta un contrato de arras coherente con lo acordado.";

export const ACOMPANAMIENTO_RESERVA_ARRAS_PROCESS_STEPS = [
  {
    title: "Contratas y subes documentación",
    description:
      "Pago seguro con tarjeta; accedes al panel para aportar reserva, datos del inmueble y cualquier borrador que te haya enviado el vendedor.",
  },
  {
    title: "Asignación de gestor",
    description:
      "Un profesional inmobiliario toma el expediente, te indica qué falta y prioriza los riesgos antes de que entregues dinero.",
  },
  {
    title: "Análisis registral y de reserva",
    description:
      "Contrastamos titularidad, cargas, plazos, penalizaciones y coherencia del precio acordado. Informe de riesgos en plazos laborables.",
  },
  {
    title: "Hacia las arras",
    description:
      "Ajustamos o redactamos el contrato de arras alineado con lo revisado; resolvemos dudas hasta la firma entre particulares.",
  },
] as const;

export const ACOMPANAMIENTO_RESERVA_ARRAS_FAQ = [
  {
    question: "¿Puedo contratar si ya firmé la reserva?",
    answer:
      "Sí, aunque lo ideal es antes de entregar dinero. Revisamos el texto vigente y te indicamos riesgos y próximos pasos.",
  },
  {
    question: "¿Sustituye al servicio completo de compra?",
    answer:
      "No. Este servicio cubre el tramo reserva–arras. Si quieres gestor hasta escritura, contrata el servicio completo de compra.",
  },
  {
    question: "¿Incluye la escritura en notaría?",
    answer:
      "No forma parte de este pack. Te acompañamos hasta unas arras bien planteadas; la escritura puede encajar en otro servicio o en el completo.",
  },
  {
    question: "¿Trabajáis con compras entre particulares sin agencia?",
    answer:
      "Sí, es nuestro foco: comprador y vendedor particulares con gestor Livendia como tercero profesional.",
  },
  {
    question: "¿Cuánto tarda la primera revisión?",
    answer:
      "Depende de la documentación recibida; en condiciones normales el gestor responde en plazos laborables tras subir la reserva al panel.",
  },
] as const;
