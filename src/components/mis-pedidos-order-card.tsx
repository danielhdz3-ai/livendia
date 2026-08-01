import Link from "next/link";
import { OrderStatusBadge } from "@/components/order-status-badge";
import { PANEL_CARD_INTERACTIVE } from "@/lib/client-panel-ui";
import { ArrowRight, FileSignature, Upload } from "lucide-react";

export type MisPedidosOrderCardProps = {
  id: string;
  serviceName: string;
  status: string;
  createdAt: string;
  totalCents: number | null;
  docCount: number;
  progressPercent: number;
  progressLabel: string;
};

export function MisPedidosOrderCard({
  id,
  serviceName,
  status,
  createdAt,
  totalCents,
  docCount,
  progressPercent,
  progressLabel,
}: MisPedidosOrderCardProps) {
  const needsDocs = status === "pending_docs" || status === "paid";
  const clamped = Math.max(0, Math.min(100, progressPercent));

  return (
    <Link
      href={`/mis-pedidos/${id}`}
      className={`${PANEL_CARD_INTERACTIVE} group block overflow-hidden`}
    >
      <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center lg:p-6">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] shadow-lg shadow-blue-500/25">
          <FileSignature className="h-7 w-7 text-white" aria-hidden />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-extrabold tracking-tight text-[#1E293B] group-hover:text-[#1A4FBF]">
              {serviceName}
            </h3>
            <OrderStatusBadge status={status} size="sm" />
          </div>

          <p className="mt-1 text-sm text-[#64748B]">
            {new Date(createdAt).toLocaleDateString("es-ES", { dateStyle: "medium" })}
            {totalCents != null ? ` · ${(totalCents / 100).toFixed(2)} €` : null}
            {docCount > 0 ? ` · ${docCount} documento(s)` : null}
          </p>

          <div className="mt-4">
            <div className="flex items-center justify-between gap-3 text-xs font-semibold text-[#64748B]">
              <span>{progressLabel}</span>
              <span className="text-[#1A4FBF]">{clamped}%</span>
            </div>
            <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#06B6D4] transition-all"
                style={{ width: `${clamped}%` }}
              />
            </div>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 sm:flex-col sm:items-end">
          <span
            className={`inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold transition ${
              needsDocs
                ? "bg-[#1A4FBF] text-white shadow-md shadow-blue-500/25 group-hover:bg-[#2563EB]"
                : "bg-slate-100 text-[#475569] group-hover:bg-[#EFF6FF] group-hover:text-[#1A4FBF]"
            }`}
          >
            {needsDocs ? (
              <>
                <Upload className="h-4 w-4" aria-hidden />
                Subir docs
              </>
            ) : (
              <>
                Ver expediente
                <ArrowRight className="h-4 w-4" aria-hidden />
              </>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
}
