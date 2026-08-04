/** Tokens visuales del panel admin Livendia (sobero, azul). */

export const ADMIN_SIDEBAR_BG = "bg-[#0F172A]";
export const ADMIN_PAGE_BG = "min-h-screen bg-[#F1F5F9]";
export const ADMIN_CARD = "rounded-xl border border-slate-200/80 bg-white shadow-sm";
export const ADMIN_CARD_PAD = `${ADMIN_CARD} p-5 sm:p-6`;

export const ADMIN_NAV_ACTIVE =
  "border border-[#1A4FBF]/40 bg-[#1A4FBF]/15 text-white shadow-[inset_0_0_0_1px_rgba(26,79,191,0.25)]";
export const ADMIN_NAV_IDLE =
  "border border-transparent text-slate-400 transition hover:border-white/10 hover:bg-white/5 hover:text-slate-200";

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
