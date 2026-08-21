export const RENT_PAYMENT_STATUS_LABELS: Record<string, string> = {
  pending: "Pendiente",
  paid: "Cobrado",
  late: "Retrasado",
};

export const RENT_PAYMENT_METHODS = [
  { value: "transferencia", label: "Transferencia" },
  { value: "sepa", label: "SEPA / domiciliación" },
  { value: "efectivo", label: "Efectivo" },
  { value: "bizum", label: "Bizum" },
  { value: "otro", label: "Otro" },
] as const;

export const EXPENSE_TYPE_LABELS: Record<string, string> = {
  ibi: "IBI",
  comunidad: "Comunidad",
  reparacion: "Reparación",
  seguro: "Seguro",
  suministro: "Suministro",
  otro: "Otro",
};

export const EXPENSE_TYPES = Object.keys(EXPENSE_TYPE_LABELS);
