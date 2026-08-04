import { ExpedienteDocChannels } from "@/components/expediente-doc-channels";
import { PANEL_HERO } from "@/lib/client-panel-ui";

type FocusOrder = {
  id: string;
  serviceName: string;
  docCount: number;
  progressPercent: number;
};

export function MisPedidosListHero({
  firstName,
  stats,
  focus,
}: {
  firstName: string;
  stats: { total: number; active: number; completed: number; invested: string };
  focus: FocusOrder | null;
}) {
  const platformHref = focus ? `/mis-pedidos/${focus.id}#documentos` : "/mis-pedidos";

  return (
    <section className={`${PANEL_HERO} border-b border-[#1547a8]/40`}>
      <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-20 left-1/4 h-48 w-48 rounded-full bg-indigo-400/15 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:py-8 xl:px-8">
        <div className="lg:mt-0">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-200 lg:text-sm">
            Tus trámites
          </p>
          <h1 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
            Hola, {firstName}
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-blue-100 lg:text-base">
            {stats.active > 0
              ? `Tienes ${stats.active} expediente(s) activo(s). Gestiona tu documentación y sigue el progreso desde aquí.`
              : "Aquí verás todos tus servicios contratados con Livendia."}
          </p>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:mt-6 lg:gap-3">
          {[
            { label: "Total", value: stats.total },
            { label: "Activos", value: stats.active },
            { label: "Cerrados", value: stats.completed },
            { label: "Invertido", value: stats.invested },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl bg-white/10 px-3 py-3 text-center ring-1 ring-white/15 backdrop-blur-sm lg:px-4 lg:py-4"
            >
              <p className="text-xl font-extrabold lg:text-2xl">{item.value}</p>
              <p className="text-[11px] font-medium text-blue-100 lg:text-xs">{item.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 lg:mt-8">
          <ExpedienteDocChannels
            serviceName={focus?.serviceName ?? "Livendia"}
            orderId={focus?.id ?? "expedientes"}
            docCount={focus?.docCount}
            progressPercent={focus?.progressPercent}
            platformHref={platformHref}
            variant="grid"
            theme="brand"
            heading="¿Cómo quieres enviar tu documentación?"
          />
        </div>
      </div>
    </section>
  );
}
