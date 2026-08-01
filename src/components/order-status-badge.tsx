import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";
import {
  CheckCircle2,
  Clock,
  FileSearch,
  FileUp,
  Loader2,
  XCircle,
} from "lucide-react";

const STATUS_STYLE: Record<string, { className: string; icon: typeof Clock }> = {
  pending_payment: {
    className: "bg-amber-100 text-amber-900 ring-amber-200/80",
    icon: Clock,
  },
  paid: {
    className: "bg-blue-100 text-blue-900 ring-blue-200/80",
    icon: FileUp,
  },
  pending_docs: {
    className: "bg-amber-100 text-amber-900 ring-amber-200/80",
    icon: FileUp,
  },
  in_review: {
    className: "bg-violet-100 text-violet-900 ring-violet-200/80",
    icon: FileSearch,
  },
  in_progress: {
    className: "bg-sky-100 text-sky-900 ring-sky-200/80",
    icon: Loader2,
  },
  completed: {
    className: "bg-emerald-100 text-emerald-900 ring-emerald-200/80",
    icon: CheckCircle2,
  },
  delivered: {
    className: "bg-emerald-100 text-emerald-900 ring-emerald-200/80",
    icon: CheckCircle2,
  },
  cancelled: {
    className: "bg-red-100 text-red-900 ring-red-200/80",
    icon: XCircle,
  },
};

export function OrderStatusBadge({
  status,
  size = "default",
}: {
  status: string;
  size?: "default" | "sm";
}) {
  const normalized = status === "delivered" ? "completed" : status;
  const style = STATUS_STYLE[normalized] ?? STATUS_STYLE.pending_payment;
  const Icon = style.icon;
  const label = ORDER_STATUS_LABEL_ES[normalized] ?? status;

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full font-bold ring-1 ${
        size === "sm" ? "px-2.5 py-1 text-[11px]" : "px-3 py-1.5 text-xs"
      } ${style.className}`}
    >
      <Icon className={`shrink-0 ${size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"}`} aria-hidden />
      {label}
    </span>
  );
}
