import Link from "next/link";
import { BUSINESS_EMAIL, getWhatsAppHref } from "@/lib/business-nap";
import { PANEL_CARD, PANEL_HERO } from "@/lib/client-panel-ui";
import { ArrowRight, Mail, MessageCircle, Sparkles, Upload } from "lucide-react";

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

  const mailSubject = focus
    ? `Documentación expediente · ${focus.serviceName} · ${focus.id.slice(0, 8)}`
    : "Documentación expediente Livendia";
  const mailHref = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(mailSubject)}`;
  const waPrefill = focus
    ? `Hola, soy cliente de Livendia. Quiero enviar documentación de mi expediente "${focus.serviceName}" (ref. ${focus.id.slice(0, 8)}).`
    : "Hola, quiero enviar documentación de mi expediente en Livendia.";
  const waHref = getWhatsAppHref(waPrefill);

  const docOptions = [
    {
      step: "1",
      title: "En la plataforma",
      description: focus
        ? `Sube PDF o fotos en tu expediente${focus.docCount > 0 ? ` · ${focus.docCount} archivo(s) ya subido(s)` : ""}.`
        : "Sube PDF o fotos desde Mis expedientes.",
      href: platformHref,
      icon: Upload,
      iconBg: "bg-[#EFF6FF] text-[#1A4FBF]",
      external: false,
    },
    {
      step: "2",
      title: "Por WhatsApp",
      description: "Envía tus archivos o fotos directamente a tu gestor.",
      href: waHref,
      icon: MessageCircle,
      iconBg: "bg-[#DCFCE7] text-[#128C7E]",
      external: true,
      analytics: "dashboard_hero_whatsapp",
    },
    {
      step: "3",
      title: "Por email",
      description: `Escríbenos a ${BUSINESS_EMAIL} con tus archivos adjuntos.`,
      href: mailHref,
      icon: Mail,
      iconBg: "bg-slate-100 text-[#475569]",
      external: false,
    },
  ] as const;

  return (
    <section className={`${PANEL_HERO} mb-6 lg:hidden`}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="relative">
        <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-100">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          Panel Livendia
        </div>

        <h2 className="mt-4 text-2xl font-extrabold tracking-tight">Hola, {firstName}</h2>
        <p className="mt-2 text-sm font-medium text-blue-50">
          Puedes enviar tu documentación de <span className="font-bold text-white">3 formas</span>:
        </p>

        <ul className="mt-4 space-y-2.5" aria-label="Formas de enviar documentación">
          {docOptions.map((option) => {
            const Icon = option.icon;
            const inner = (
              <>
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-xs font-extrabold text-white">
                  {option.step}
                </span>
                <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${option.iconBg}`}>
                  <Icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-bold text-[#1E293B]">{option.title}</p>
                  <p className="mt-0.5 text-xs leading-snug text-[#64748B]">{option.description}</p>
                  {option.step === "1" && focus ? (
                    <p className="mt-1 truncate text-xs font-semibold text-[#1A4FBF]">
                      {focus.serviceName} · {focus.progressPercent}%
                    </p>
                  ) : null}
                </div>
                <ArrowRight className="h-5 w-5 shrink-0 text-[#94A3B8]" aria-hidden />
              </>
            );
            const className =
              "flex w-full items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-md transition active:scale-[0.99]";

            if (option.external) {
              return (
                <li key={option.step}>
                  <a
                    href={option.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-analytics-placement={"analytics" in option ? option.analytics : undefined}
                    className={className}
                  >
                    {inner}
                  </a>
                </li>
              );
            }

            if (option.href.startsWith("mailto:")) {
              return (
                <li key={option.step}>
                  <a href={option.href} className={className}>
                    {inner}
                  </a>
                </li>
              );
            }

            return (
              <li key={option.step}>
                <Link href={option.href} className={className}>
                  {inner}
                </Link>
              </li>
            );
          })}
        </ul>

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
