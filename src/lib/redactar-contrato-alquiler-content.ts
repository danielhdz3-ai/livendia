import { CONTRATO_ALQUILER_LAU_PRICE_EUR, CONTRATO_ALQUILER_LAU_PRICE_LABEL } from "@/lib/catalog.public";

export const REDACTAR_CONTRATO_ALQUILER_BASE = "/servicios/redactar-contrato-alquiler" as const;

export const REDACTAR_CONTRATO_ALQUILER_PRICE_LABEL = CONTRATO_ALQUILER_LAU_PRICE_LABEL;
export const REDACTAR_CONTRATO_ALQUILER_PRICE_EUR = CONTRATO_ALQUILER_LAU_PRICE_EUR;

export type AgencyRentalComparisonRow = {
  monthlyRent: number;
  agencyEstimateLow: number;
  agencyEstimateHigh: number;
  livendia: number;
};

/** Estimación orientativa: 1 mes de renta + honorarios de gestión inmobiliaria (2.000–3.000 €). */
export function buildAgencyRentalComparisonRows(
  monthlyRents: number[] = [850, 1_000, 1_200, 1_400],
): AgencyRentalComparisonRow[] {
  const livendia = REDACTAR_CONTRATO_ALQUILER_PRICE_EUR;
  return monthlyRents.map((monthlyRent) => ({
    monthlyRent,
    agencyEstimateLow: monthlyRent + 2_000,
    agencyEstimateHigh: monthlyRent + 3_000,
    livendia,
  }));
}

export const REDACTAR_CONTRATO_ALQUILER_FAQ = [
  {
    question: "¿Incluye inventario profesional del piso?",
    answer:
      "Sí. El servicio incorpora inventario descriptivo y fotográfico del estado del inmueble para documentar la entrega de llaves y evitar conflictos al final del arrendamiento.",
  },
  {
    question: "¿Me ayudáis con la inscripción de la fianza?",
    answer:
      "Te orientamos para depositar la fianza en el organismo correcto según tu comunidad autónoma (AVS en Madrid, INCASÒL en Cataluña, etc.) antes de transferir dinero al propietario.",
  },
  {
    question: "¿Es lo mismo que una plantilla de internet?",
    answer:
      "No. Un gestor inmobiliario revisa tu caso, adapta cláusulas a la LAU y al Código Civil aplicable, y entrega un documento con acabado profesional — no un PDF genérico copiado.",
  },
  {
    question: "¿Livendia busca inquilino o publica mi anuncio?",
    answer:
      "No. Somos gestoría especializada en contratos inmobiliarios para particulares que ya tienen contraparte (Idealista, recomendación, conocido). Tú cierras el alquiler; nosotros el contrato y la documentación.",
  },
  {
    question: "¿Cuánto ahorro respecto a una inmobiliaria?",
    answer:
      "Muchas agencias cobran entre 2.000 y 3.000 € por la gestión del alquiler más un mes de renta de comisión. Livendia redacta el contrato profesional por 145 € IVA incl. — precio cerrado, sin comisión sobre la renta.",
  },
  {
    question: "¿Tengo acceso a una plataforma para subir documentos?",
    answer:
      "Sí. Tras contratar accedes al panel Livendia: expediente digital, subida segura de documentación, seguimiento del trámite y gestor asignado hasta la entrega del contrato.",
  },
] as const;

export const REDACTAR_CONTRATO_ALQUILER_TESTIMONIALS = [
  {
    quote:
      "Encontré inquilino por Idealista y la agencia me pedía casi 2.500 €. Con Livendia tuve contrato impecable, inventario con fotos y orientación de la fianza por 145 €.",
    author: "Carlos M.",
    role: "Propietario, Valencia",
  },
  {
    quote:
      "El contrato que nos pasaron era una plantilla antigua. Livendia lo rehizo con cláusulas claras y un aspecto visual que da confianza al firmar entre particulares.",
    author: "Laura & David",
    role: "Propietario e inquilino, Madrid",
  },
] as const;
