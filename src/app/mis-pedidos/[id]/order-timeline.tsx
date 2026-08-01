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

const COMPACT_STEP_LABELS = ["Pago", "Docs", "Revisión", "Entrega"] as const;

function compactStepIndex(status: string): number {
  const fullIdx = flowIndex(normalizeOrderStatus(status));
  if (fullIdx <= 0) return 0;
  if (fullIdx <= 2) return 1;
  if (fullIdx <= 4) return 2;
  return 3;
}

/** Stepper horizontal compacto para móvil (4 pasos). */
export function OrderTimelineCompact({ status: rawStatus }: { status: string }) {
  const status = normalizeOrderStatus(rawStatus);

  if (status === "cancelled") {
    return (
      <p className="text-sm font-semibold text-red-700">Expediente cancelado</p>
    );
  }

  const active = compactStepIndex(status);

  return (
    <ol className="flex items-center gap-1" aria-label="Progreso del expediente">
      {COMPACT_STEP_LABELS.map((label, idx) => {
        const done = idx < active;
        const current = idx === active;
        return (
          <li key={label} className="flex min-w-0 flex-1 items-center gap-1">
            <div className="flex min-w-0 flex-1 flex-col items-center gap-1">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-[10px] font-bold ${
                  done
                    ? "bg-emerald-500 text-white"
                    : current
                      ? "bg-[#1A4FBF] text-white ring-4 ring-[#1A4FBF]/20"
                      : "bg-slate-200 text-slate-500"
                }`}
                aria-current={current ? "step" : undefined}
              >
                {done ? "✓" : idx + 1}
              </span>
              <span
                className={`max-w-full truncate text-center text-[10px] font-bold leading-none ${
                  current ? "text-[#1A4FBF]" : done ? "text-emerald-700" : "text-slate-400"
                }`}
              >
                {label}
              </span>
            </div>
            {idx < COMPACT_STEP_LABELS.length - 1 ? (
              <span
                className={`mb-4 h-0.5 min-w-[0.35rem] flex-1 rounded-full ${
                  idx < active ? "bg-emerald-400" : "bg-slate-200"
                }`}
                aria-hidden
              />
            ) : null}
          </li>
        );
      })}
    </ol>
  );
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
