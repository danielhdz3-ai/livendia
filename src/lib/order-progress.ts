import {
  buildOrderDocChecklist,
  countUploadedRecommended,
  type OrderDocChecklistItem,
} from "@/lib/order-doc-checklist";

const STATUS_BASE: Record<string, number> = {
  pending_payment: 8,
  paid: 22,
  pending_docs: 30,
  in_review: 62,
  in_progress: 78,
  completed: 100,
  delivered: 100,
  cancelled: 0,
};

export function calculateOrderProgress(input: {
  status: string;
  serviceSlug: string | null | undefined;
  uploadedTypes: string[];
  docCount: number;
}): { percent: number; label: string; checklist: OrderDocChecklistItem[] } {
  const normalized = input.status === "delivered" ? "completed" : input.status;
  const checklist = buildOrderDocChecklist(input.serviceSlug, input.uploadedTypes);
  const { uploaded, total } = countUploadedRecommended(checklist);

  let percent = STATUS_BASE[normalized] ?? 15;

  if (normalized === "paid" || normalized === "pending_docs") {
    const docRatio = total > 0 ? uploaded / total : Math.min(1, input.docCount / 3);
    percent = Math.round(22 + docRatio * 38);
  } else if (normalized === "in_review" && total > 0 && uploaded < total) {
    percent = Math.max(55, Math.round(55 + (uploaded / total) * 10));
  }

  percent = Math.max(0, Math.min(100, percent));

  let label = "Expediente en curso";
  if (percent >= 100) label = "Expediente completado";
  else if (normalized === "pending_docs" || normalized === "paid") label = "Pendiente de documentación";
  else if (normalized === "in_review") label = "En revisión por tu gestor";
  else if (normalized === "in_progress") label = "Tramitación en marcha";

  return { percent, label, checklist };
}
