import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";

const FLOW = [
  "pending_payment",
  "paid",
  "pending_docs",
  "in_review",
  "in_progress",
  "completed",
] as const;

const STEP_UI: Record<(typeof FLOW)[number], { title: string; hint: string }> = {
  pending_payment: {
    title: "Pago",
    hint: "Completa el pago para activar el expediente.",
  },
  paid: {
    title: "Pago confirmado",
    hint: "Ya puedes subir la documentación necesaria.",
  },
  pending_docs: {
    title: "Documentación",
    hint: "Sube los archivos que te pedimos más abajo.",
  },
  in_review: {
    title: "Revisión",
    hint: "Estamos revisando la documentación.",
  },
  in_progress: {
    title: "Tramitación",
    hint: "Expediente en curso. Te avisamos ante cambios.",
  },
  completed: {
    title: "Cerrado",
    hint: "Servicio completado. Gracias por confiar en Livendia.",
  },
};

function normalizeOrderStatus(status: string): string {
  if (status === "delivered") return "completed";
  return status;
}

function flowIndex(status: string): number {
  const normalized = normalizeOrderStatus(status);
  const i = FLOW.indexOf(normalized as (typeof FLOW)[number]);
  return i >= 0 ? i : 0;
}

export function OrderTimeline({
  status: rawStatus,
  createdAt,
  paidAt,
  completedAt,
  updatedAt,
}: {
  status: string;
  createdAt: string;
  paidAt: string | null;
  completedAt: string | null;
  updatedAt: string;
}) {
  const status = normalizeOrderStatus(rawStatus);

  if (status === "cancelled") {
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-red-950">
        <p className="font-semibold">Pedido cancelado</p>
        <p className="mt-1 text-sm">
          Este expediente está cancelado. Si se trata de un error, contacta con nosotros.
        </p>
        <p className="mt-2 text-xs text-red-800/80">
          Última actualización: {new Date(updatedAt).toLocaleString("es-ES")}
        </p>
      </div>
    );
  }

  const active = flowIndex(status);

  const dateForStep = (stepIdx: number): string | null => {
    const key = FLOW[stepIdx];
    if (stepIdx === 0) return new Date(createdAt).toLocaleString("es-ES");
    if (key === "paid" && paidAt) return new Date(paidAt).toLocaleString("es-ES");
    if (key === "completed" && completedAt) return new Date(completedAt).toLocaleString("es-ES");
    if (stepIdx === active) return new Date(updatedAt).toLocaleString("es-ES");
    return null;
  };

  return (
    <div>
      <p className="text-xs font-medium uppercase tracking-wide text-[#64748b]">Seguimiento</p>
      <h2 className="mt-1 text-lg font-semibold text-[#1E293B]">
        Estado: {ORDER_STATUS_LABEL_ES[status] ?? status}
      </h2>
      <ol className="relative mt-6 border-s border-slate-200 pl-6">
        {FLOW.map((key, idx) => {
          const done = idx < active;
          const current = idx === active;
          const dateStr = dateForStep(idx);
          const ui = STEP_UI[key];
          return (
            <li key={key} className="mb-8 last:mb-0">
              <span
                className={
                  "absolute -start-[21px] mt-1.5 flex h-3.5 w-3.5 rounded-full border-2 " +
                  (done
                    ? "border-emerald-500 bg-emerald-500"
                    : current
                      ? "border-[#1A4FBF] bg-white"
                      : "border-slate-300 bg-white")
                }
              />
              <div
                className={
                  current ? "rounded-xl bg-[#1A4FBF]/5 px-3 py-2 ring-1 ring-[#1A4FBF]/20" : ""
                }
              >
                <p className={"font-medium " + (done || current ? "text-[#1E293B]" : "text-[#94a3b8]")}>
                  {ui.title}
                </p>
                <p className={"mt-1 text-sm " + (current ? "text-[#475569]" : "text-[#64748b]")}>
                  {ui.hint}
                </p>
                {dateStr ? (
                  <p className="mt-1 text-xs text-[#94a3b8]">{dateStr}</p>
                ) : !done && !current ? (
                  <p className="mt-1 text-xs text-[#cbd5e1]">Pendiente</p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
