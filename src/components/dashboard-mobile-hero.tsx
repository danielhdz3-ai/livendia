"use client";

import Link from "next/link";
import { ArrowRight, FileSignature, Upload } from "lucide-react";

type OrderRow = {
  id: string;
  status: string;
  serviceName: string;
  docCount: number;
};

export function DashboardMobileHero({
  firstName,
  orders,
  highlightOrderId,
}: {
  firstName: string;
  orders: OrderRow[];
  highlightOrderId?: string | null;
}) {
  const pendingUpload = orders.filter(
    (o) => o.status === "pending_docs" || o.status === "paid",
  );
  const focus =
    (highlightOrderId ? orders.find((o) => o.id === highlightOrderId) : null) ??
    pendingUpload[0] ??
    orders[0];

  return (
    <section className="mb-6 space-y-4 lg:hidden">
      <div className="rounded-2xl bg-white p-5 shadow ring-1 ring-slate-200">
        <p className="text-sm text-[#64748B]">Hola, {firstName}</p>
        <h2 className="mt-1 text-xl font-bold text-[#1E293B]">Tu panel Livendia</h2>
        <p className="mt-2 text-sm leading-relaxed text-[#64748B]">
          Contrata, sube documentos y sigue tu contrato desde el móvil en pocos pasos.
        </p>
      </div>

      {focus && (focus.status === "pending_docs" || focus.status === "paid") ? (
        <Link
          href={`/mis-pedidos/${focus.id}`}
          className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] p-5 text-white shadow-lg"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
            <Upload className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-blue-100">Siguiente paso</p>
            <p className="mt-0.5 font-bold leading-snug">{focus.serviceName}</p>
            <p className="mt-1 text-sm text-blue-100">
              {focus.docCount > 0
                ? `${focus.docCount} archivo(s) subido(s) · puedes añadir más`
                : "Sube fotos o PDF de tu contrato"}
            </p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0" />
        </Link>
      ) : (
        <Link
          href="/dashboard/servicios"
          className="flex items-center gap-4 rounded-2xl bg-gradient-to-r from-violet-600 to-[#1A4FBF] p-5 text-white shadow-lg"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20">
            <FileSignature className="h-6 w-6" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-violet-100">Empezar</p>
            <p className="mt-0.5 font-bold">Contratar un contrato</p>
            <p className="mt-1 text-sm text-violet-100">Arras, alquiler LAU, habitación…</p>
          </div>
          <ArrowRight className="h-5 w-5 shrink-0" />
        </Link>
      )}

      {orders.length > 0 ? (
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-[#1E293B]">Tus pedidos</h3>
          {orders.slice(0, 4).map((order) => {
            const needsDocs = order.status === "pending_docs" || order.status === "paid";
            return (
              <Link
                key={order.id}
                href={`/mis-pedidos/${order.id}`}
                className="flex items-center justify-between gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
              >
                <div className="min-w-0">
                  <p className="truncate font-semibold text-[#1E293B]">{order.serviceName}</p>
                  <p className="mt-0.5 text-xs text-[#64748B]">
                    {needsDocs ? "Falta documentación" : "Ver expediente"}
                    {order.docCount > 0 ? ` · ${order.docCount} doc.` : ""}
                  </p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-3 py-1.5 text-xs font-bold ${
                    needsDocs ? "bg-[#1A4FBF] text-white" : "bg-slate-100 text-[#475569]"
                  }`}
                >
                  {needsDocs ? "Subir" : "Abrir"}
                </span>
              </Link>
            );
          })}
        </div>
      ) : null}
    </section>
  );
}
