import Link from "next/link";
import { ExpedienteDocChannels } from "@/components/expediente-doc-channels";
import { PANEL_CARD, PANEL_HERO } from "@/lib/client-panel-ui";
import { ArrowRight, Sparkles } from "lucide-react";

type FocusOrder = {
  id: string;
  serviceName: string;
  status: string;
  docCount: number;
  progressPercent: number;
};

export function ClientPanelPremiumHero({
  firstName,
  focus,
  stats,
}: {
  firstName: string;
  focus: FocusOrder | null;
  stats: { total: number; active: number; completed: number };
}) {
  const platformHref = focus ? `/mis-pedidos/${focus.id}` : "/mis-pedidos";

  return (
    <section className={`${PANEL_HERO} mb-6 lg:hidden`}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-100">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Panel Livendia
        </div>

        <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Hola, {firstName}</h2>

        {focus ? (
          <ExpedienteDocChannels
            serviceName={focus.serviceName}
            orderId={focus.id}
            docCount={focus.docCount}
            progressPercent={focus.progressPercent}
            platformHref={platformHref}
            variant="stack"
            theme="brand"
            showHeading
          />
        ) : (
          <ExpedienteDocChannels
            serviceName="Livendia"
            orderId="panel"
            platformHref={platformHref}
            variant="stack"
            theme="brand"
            showHeading
          />
        )}

        {stats.total > 0 ? (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {[
              { label: "Pedidos", value: stats.total },
              { label: "Activos", value: stats.active },
              { label: "Cerrados", value: stats.completed },
            ].map((item) => (
              <div key={item.label} className="rounded-2xl bg-white/10 px-3 py-3 text-center backdrop-blur-sm">
                <p className="text-xl font-extrabold">{item.value}</p>
                <p className="text-[11px] font-medium text-blue-100">{item.label}</p>
              </div>
            ))}
          </div>
        ) : (
          <Link
            href="/dashboard/servicios"
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-2xl bg-white/15 px-5 py-3 text-sm font-bold text-white ring-1 ring-white/25"
          >
            Contratar tu primer servicio
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        )}
      </div>
    </section>
  );
}

export function ClientPanelKpiStrip({
  items,
}: {
  items: { label: string; value: string | number; hint?: string; tone?: "blue" | "amber" | "green" | "violet" }[];
}) {
  const tones = {
    blue: "from-blue-500 to-blue-600 shadow-blue-500/20",
    amber: "from-amber-500 to-orange-500 shadow-amber-500/20",
    green: "from-emerald-500 to-green-600 shadow-emerald-500/20",
    violet: "from-violet-600 to-indigo-600 shadow-violet-500/20",
  };

  return (
    <div className="mb-6 grid grid-cols-2 gap-3 lg:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.label}
          className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${tones[item.tone ?? "blue"]} p-4 text-white shadow-lg`}
        >
          <p className="text-xs font-medium opacity-90">{item.label}</p>
          <p className="mt-1 text-2xl font-extrabold">{item.value}</p>
          {item.hint ? <p className="mt-1 text-[11px] opacity-80">{item.hint}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function ClientPanelPage({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`min-h-screen bg-[radial-gradient(ellipse_at_top,_#EFF6FF_0%,_#F8FAFC_45%,_#F1F5F9_100%)] ${className}`}>
      {children}
    </div>
  );
}

export function ClientPanelSurface({ children }: { children: React.ReactNode }) {
  return <div className={`${PANEL_CARD}`}>{children}</div>;
}
