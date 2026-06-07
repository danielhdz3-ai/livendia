import {
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";

/** FAQs 1 y 2 — idénticas en todas las ciudades (brief SEO). */
export const REVISION_POST_ARRAS_FAQ_FIXED = [
  {
    question: "¿Cuánto tiempo tengo desde que firmo arras para contratar este servicio?",
    answer:
      "Cuanto antes mejor. Recomendamos contratar en los primeros 15 días tras firmar arras para tener margen de maniobra si detectamos algo.",
  },
  {
    question: "¿Qué pasa si encontráis un problema grave?",
    answer:
      "Te lo comunicamos en la llamada de veredicto con opciones concretas: negociar con el vendedor, exigir subsanación antes de escritura, o en casos extremos valorar si ejercer el desistimiento de arras.",
  },
] as const;

export const REVISION_POST_ARRAS_HOW_STEPS = [
  {
    step: "1",
    title: "Subes la documentación desde tu panel",
    description:
      "Contratas el pack, accedes al panel Livendia y subes contrato de arras, actas de comunidad, ITE, nota registral y documentación urbanística que tengas.",
  },
  {
    step: "2",
    title: "Análisis en 48h por gestor especializado",
    description:
      "Un gestor inmobiliario revisa contrato, actas, derramas, ITE, registro y urbanismo. Plazo de análisis: 48 horas laborables.",
  },
  {
    step: "3",
    title: "Informe ejecutivo PDF con hallazgos y semáforo de riesgo",
    description:
      "Recibes un informe en PDF con hallazgos claros, nivel de riesgo por área y recomendaciones antes de ir a notaría. Entrega total: 3-5 días laborables.",
  },
  {
    step: "4",
    title: "Llamada de veredicto + asesoramiento hasta escritura",
    description:
      "Te explicamos el informe en una llamada con el gestor y quedas con asesoramiento telefónico para dudas hasta la firma de escritura.",
  },
] as const;

export const REVISION_POST_ARRAS_NOT_INCLUDED = [
  "No negocia con el vendedor en tu nombre",
  "No actúa como abogado en caso de litigio",
  "No cancela hipotecas ni gestiona registros",
  "No sustituye al notario en la escritura",
] as const;

export const REVISION_POST_ARRAS_COMPARISON_ROWS = [
  {
    aspect: "Ideal si…",
    revision: "Ya firmé arras y tengo documentación",
    completo: "Quiero acompañamiento desde reserva",
  },
  {
    aspect: "Qué cubre",
    revision: "Auditoría documental + informe",
    completo: "Todo el proceso + contratos",
  },
  {
    aspect: "Cuándo contratarlo",
    revision: "Tras firmar arras",
    completo: "Antes de hacer reserva",
  },
  {
    aspect: "Incluye redacción de contratos",
    revision: "No",
    completo: "Sí",
  },
] as const;

export const REVISION_POST_ARRAS_COMPARISON_HEADING =
  "¿Ya tenía esto cubierto con mi servicio completo de compra?";

export function revisionPostArrasComparisonCaption(): string {
  return `Revisión post-arras ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} · Servicio completo compra ${SERVICIO_COMPLETO_CV_PRICE_LABEL}`;
}
