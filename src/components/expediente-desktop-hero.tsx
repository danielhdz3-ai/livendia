import { ExpedienteDocChannels } from "@/components/expediente-doc-channels";
import { OrderStatusBadge } from "@/components/order-status-badge";

export function ExpedienteDesktopHero({
  serviceName,
  orderId,
  status,
  createdAt,
  totalCents,
  progressPercent,
  progressLabel,
  docCount,
}: {
  serviceName: string;
  orderId: string;
  status: string;
  createdAt: string;
  totalCents: number | null;
  progressPercent: number;
  progressLabel: string;
  docCount: number;
}) {
  const clamped = Math.max(0, Math.min(100, progressPercent));
  const dim = 96;
  const stroke = 8;
  const radius = (dim - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (clamped / 100) * circumference;

  return (
    <section className="hidden border-b border-[#1547a8]/40 bg-gradient-to-br from-[#0F2A6B] via-[#1A4FBF] to-[#2563EB] text-white lg:block">
      <div className="mx-auto max-w-7xl px-6 py-8 xl:px-8">
        <div className="grid grid-cols-12 gap-8 xl:gap-10">
          <div className="col-span-12 xl:col-span-7">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-200">Expediente</p>
            <div className="mt-2 flex flex-wrap items-center gap-3">
              <h1 className="text-3xl font-extrabold tracking-tight xl:text-4xl">{serviceName}</h1>
              <OrderStatusBadge status={status} />
            </div>
            <p className="mt-2 text-sm text-blue-100">
              {new Date(createdAt).toLocaleString("es-ES")}
              {totalCents != null ? ` · ${(totalCents / 100).toFixed(2)} € IVA incl.` : null}
              {" · "}
              Ref. {orderId.slice(0, 8)}
            </p>

            <div className="mt-8">
              <ExpedienteDocChannels
                serviceName={serviceName}
                orderId={orderId}
                docCount={docCount}
                progressPercent={progressPercent}
                platformHref="#documentos"
                variant="grid"
                theme="brand"
              />
            </div>
          </div>

          <div className="col-span-12 xl:col-span-5">
            <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/20 backdrop-blur-sm xl:p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-blue-100">Progreso del expediente</p>
              <div className="mt-5 flex items-center gap-6">
                <div className="relative shrink-0" style={{ width: dim, height: dim }}>
                  <svg width={dim} height={dim} className="-rotate-90" aria-hidden>
                    <circle
                      cx={dim / 2}
                      cy={dim / 2}
                      r={radius}
                      fill="none"
                      stroke="rgba(255,255,255,0.2)"
                      strokeWidth={stroke}
                    />
                    <circle
                      cx={dim / 2}
                      cy={dim / 2}
                      r={radius}
                      fill="none"
                      stroke="#06B6D4"
                      strokeWidth={stroke}
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                    />
                  </svg>
                  <span className="absolute inset-0 flex items-center justify-center text-2xl font-extrabold">
                    {clamped}%
                  </span>
                </div>
                <div className="min-w-0">
                  <p className="text-xl font-bold leading-snug">{progressLabel}</p>
                  <p className="mt-2 text-sm text-blue-100">
                    {docCount > 0
                      ? `${docCount} documento(s) recibido(s). Puedes seguir añadiendo más.`
                      : "Aún no hay documentos. Empieza subiendo los archivos recomendados."}
                  </p>
                </div>
              </div>
              <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-white/15">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-white transition-all duration-500"
                  style={{ width: `${clamped}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
