import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";

export type OrderActivityRow = {
  id: string;
  kind: string;
  title: string;
  description: string | null;
  created_at: string;
};

export type OrderDeliverableRow = {
  id: string;
  title: string;
  message: string | null;
  file_name: string | null;
  file_path: string | null;
  created_at: string;
};

function syntheticActivities(input: {
  status: string;
  createdAt: string;
  paidAt: string | null;
  completedAt: string | null;
  docCount: number;
}): OrderActivityRow[] {
  const rows: OrderActivityRow[] = [
    {
      id: "s-created",
      kind: "note",
      title: "Expediente creado",
      description: "Tu pedido quedó registrado en Livendia.",
      created_at: input.createdAt,
    },
  ];

  if (input.paidAt) {
    rows.push({
      id: "s-paid",
      kind: "payment",
      title: "Pago confirmado",
      description: "El pago se completó correctamente.",
      created_at: input.paidAt,
    });
  }

  if (input.docCount > 0) {
    rows.push({
      id: "s-docs",
      kind: "document",
      title: "Documentación recibida",
      description: `${input.docCount} archivo(s) en tu expediente.`,
      created_at: input.paidAt ?? input.createdAt,
    });
  }

  if (input.status === "in_review" || input.status === "in_progress") {
    rows.push({
      id: "s-review",
      kind: "status",
      title: ORDER_STATUS_LABEL_ES[input.status] ?? "En revisión",
      description: "Tu gestor está revisando la documentación.",
      created_at: input.paidAt ?? input.createdAt,
    });
  }

  if (input.completedAt || input.status === "completed" || input.status === "delivered") {
    rows.push({
      id: "s-done",
      kind: "status",
      title: "Servicio completado",
      description: "Tu expediente se ha cerrado correctamente.",
      created_at: input.completedAt ?? input.createdAt,
    });
  }

  return rows;
}

export function mergeOrderActivity(
  dbRows: OrderActivityRow[] | null | undefined,
  syntheticInput: Parameters<typeof syntheticActivities>[0],
): OrderActivityRow[] {
  const synthetic = syntheticActivities(syntheticInput);
  const byTitle = new Set((dbRows ?? []).map((r) => r.title));
  const merged = [...(dbRows ?? [])];
  for (const row of synthetic) {
    if (!byTitle.has(row.title)) merged.push(row);
  }
  return merged.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  );
}
