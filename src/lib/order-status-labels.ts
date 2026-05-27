export const ORDER_STATUS_LABEL_ES: Record<string, string> = {
  pending_payment: "Pago pendiente",
  paid: "Pagado",
  pending_docs: "Falta documentación",
  in_review: "En revisión",
  in_progress: "En curso",
  completed: "Completado",
  /** Compatibilidad con estados antiguos en BD */
  delivered: "Completado",
  cancelled: "Cancelado",
};
