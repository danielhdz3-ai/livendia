import { ORDER_DOC_TYPE_LABELS } from "@/lib/order-document-upload";

/** Documentos recomendados por slug de servicio (orientación al cliente, no bloqueo). */
const RECOMMENDED_BY_SLUG: Record<string, string[]> = {
  "pago-prueba-livendia": [
    "dni_propietario",
    "contrato_alquiler",
    "cedula_habitabilidad",
    "certificado_energetico",
    "facturas",
    "otro",
  ],
  "contrato-alquiler-lau": [
    "dni_propietario",
    "dni_inquilino",
    "contrato_alquiler",
    "cedula_habitabilidad",
    "certificado_energetico",
    "facturas",
    "contrato_actual",
    "recibos",
  ],
  "contrato-alquiler-temporada": [
    "dni_propietario",
    "dni_inquilino",
    "contrato_alquiler",
    "cedula_habitabilidad",
    "certificado_energetico",
    "facturas",
  ],
  "contrato-alquiler-habitacion": [
    "dni_propietario",
    "dni_inquilino",
    "contrato_alquiler",
    "cedula_habitabilidad",
    "certificado_energetico",
    "facturas",
  ],
  "contrato-arras-penitenciales": ["dni_propietario", "dni_inquilino", "escrituras", "nota_simple"],
  "contrato-arras-confirmatorias": ["dni_propietario", "dni_inquilino", "escrituras", "nota_simple"],
  "reserva-de-compra": ["dni_propietario", "dni_inquilino", "escrituras", "nota_simple"],
  "revision-documental-post-arras": ["escrituras", "nota_simple", "recibos", "contrato_actual"],
  "gestion-documental-vendedor": ["escrituras", "nota_simple", "recibos", "poder_notarial"],
  "servicio-completo-compra": ["dni_propietario", "dni_inquilino", "escrituras", "nota_simple", "recibos"],
  "servicio-completo-venta": ["dni_propietario", "escrituras", "nota_simple", "recibos"],
};

const DEFAULT_RECOMMENDED = [
  "dni_propietario",
  "dni_inquilino",
  "contrato_alquiler",
  "cedula_habitabilidad",
  "certificado_energetico",
  "facturas",
  "escrituras",
  "nota_simple",
  "recibos",
];

export type OrderDocChecklistItem = {
  type: string;
  label: string;
  uploaded: boolean;
};

export function getRecommendedDocTypes(serviceSlug: string | null | undefined): string[] {
  if (!serviceSlug) return DEFAULT_RECOMMENDED;
  return RECOMMENDED_BY_SLUG[serviceSlug] ?? DEFAULT_RECOMMENDED;
}

export function buildOrderDocChecklist(
  serviceSlug: string | null | undefined,
  uploadedTypes: string[],
): OrderDocChecklistItem[] {
  const uploaded = new Set(uploadedTypes);
  return getRecommendedDocTypes(serviceSlug).map((type) => ({
    type,
    label: ORDER_DOC_TYPE_LABELS[type] ?? type,
    uploaded: uploaded.has(type),
  }));
}

export function countUploadedRecommended(items: OrderDocChecklistItem[]): {
  uploaded: number;
  total: number;
} {
  return {
    uploaded: items.filter((i) => i.uploaded).length,
    total: items.length,
  };
}
