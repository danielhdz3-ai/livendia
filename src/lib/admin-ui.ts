/** Tokens visuales del panel admin Livendia (sobero, azul). */

export const ADMIN_SIDEBAR_BG = "bg-gradient-to-b from-[#2563EB] to-[#1A4FBF]";
export const ADMIN_PAGE_BG = "min-h-screen bg-[#F1F5F9]";
export const ADMIN_CARD = "rounded-xl border border-slate-200/80 bg-white shadow-sm";
export const ADMIN_CARD_PAD = `${ADMIN_CARD} p-5 sm:p-6`;
export const ADMIN_CARD_COMPACT = `${ADMIN_CARD} p-3 sm:p-4`;

export const ADMIN_NAV_ACTIVE =
  "border border-white/30 bg-white/20 text-white shadow-sm";
export const ADMIN_NAV_IDLE =
  "border border-transparent text-white/75 transition hover:border-white/20 hover:bg-white/10 hover:text-white";

export const ADMIN_STAT_LABEL = "text-[11px] font-semibold uppercase tracking-wide text-[#64748B]";
export const ADMIN_TABLE_HEAD = "text-[11px] font-semibold uppercase tracking-wide text-[#64748B]";

export const ADMIN_BTN_PRIMARY =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg bg-[#1A4FBF] px-4 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:opacity-60";

export const ADMIN_BTN_GHOST =
  "inline-flex min-h-10 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-[#1E293B] transition hover:border-[#1A4FBF]/30 hover:bg-[#EFF6FF]/50";

export const ADMIN_MONEY = "font-semibold text-[#1A4FBF]";

export const ORDER_STATUS_LABEL: Record<string, string> = {
  pending_payment: "Pendiente",
  paid: "Pagado",
  pending_docs: "Falta docs",
  in_review: "En revisión",
  in_progress: "En curso",
  completed: "Completado",
  delivered: "Completado",
  cancelled: "Cancelado",
};

export const PAID_STATUSES = new Set(["paid", "pending_docs", "in_review", "in_progress", "completed", "delivered"]);

export type SalePaymentStatus = "paid" | "refund";

export function isSaleRefunded(order: { status: string }): boolean {
  return order.status === "cancelled";
}

export function getSalePaymentLabel(order: { status: string; paid_at?: string | null }): string {
  if (isSaleRefunded(order)) return "Devolución";
  if (order.paid_at) return "Pagado";
  return "Pendiente";
}
