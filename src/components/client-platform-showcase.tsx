import Link from "next/link";
import {
  Bell,
  CheckCircle2,
  FileText,
  FolderLock,
  Home,
  LayoutDashboard,
  ShieldCheck,
  Upload,
  User,
} from "lucide-react";

/** Datos ficticios para el mockup de marketing (no son clientes reales). */
const DEMO = {
  clientFirstName: "María",
  clientInitial: "M",
  clientFullName: "María L.",
  gestorName: "Laura V.",
  gestorInitial: "LV",
  expedienteRef: "EXP-2026-0847",
  serviceDefault: "Contrato de arras penitenciales",
  documents: [
    { name: "DNI_propietario.pdf", type: "Identidad", date: "12 mar 2026" },
    { name: "Nota_simple_registro.pdf", type: "Registro", date: "14 mar 2026" },
    { name: "Acta_comunidad_2025.pdf", type: "Comunidad", date: "15 mar 2026" },
  ],
  activity: [
    { text: "Documento revisado por tu gestora", time: "Hace 2 h" },
    { text: "Expediente creado tras el pago", time: "15 mar 2026" },
    { text: "Gestora Laura V. asignada", time: "15 mar 2026" },
  ],
} as const;

export type ClientPlatformShowcaseProps = {
  /** Título principal de la sección */
  headline?: string;
  /** Subtítulo / párrafo introductorio */
  subtitle?: string;
  /** Nombre del servicio mostrado en el expediente demo */
  serviceLabel?: string;
  /** Ciudad para personalizar copy en landings locales */
  city?: string;
  /** Variante compacta (menos padding) */
  variant?: "default" | "compact";
  className?: string;
};

const DEFAULT_HEADLINE = "Tu expediente privado en la plataforma Livendia";
const DEFAULT_SUBTITLE =
  "Livendia es una gestoría inmobiliaria con área de cliente propia: cada trámite tiene su expediente digital, un gestor asignado y un repositorio seguro para toda tu documentación.";

export function ClientPlatformShowcase({
  headline = DEFAULT_HEADLINE,
  subtitle,
  serviceLabel = DEMO.serviceDefault,
  city,
  variant = "default",
  className = "",
}: ClientPlatformShowcaseProps) {
  const resolvedSubtitle =
    subtitle ??
    (city
      ? `Contratas online desde ${city} y accedes a un panel privado donde tu gestor analiza la documentación, avanza el servicio y te mantiene informada en cada paso.`
      : DEFAULT_SUBTITLE);

  const sectionPad = variant === "compact" ? "py-12 sm:py-16" : "py-16 sm:py-24";

  const features = [
    {
      icon: FolderLock,
      title: "Expediente digital por cliente",
      body: "Cada servicio contratado genera un expediente único con referencia, estado y historial completo.",
    },
    {
      icon: User,
      title: "Gestor que trabaja tu trámite",
      body: "Una gestora inmobiliaria revisa tu documentación, redacta contratos y te acompaña hasta cerrar el servicio.",
    },
    {
      icon: Upload,
      title: "Documentación centralizada",
      body: "Sube PDF, Word o fotos desde el ordenador o el móvil. Todo queda archivado en tu expediente privado.",
    },
    {
      icon: ShieldCheck,
      title: "Seguimiento transparente",
      body: "Progreso del trámite, actividad reciente y próximos pasos visibles en todo momento.",
    },
  ];

  return (
    <section
      id="plataforma-cliente"
      aria-label="Plataforma privada de clientes Livendia"
      className={`border-y border-slate-200 bg-[#F8FAFC] ${sectionPad} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          {/* Copy */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-[#1A4FBF]">Plataforma Livendia</p>
            <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1E293B] sm:text-3xl lg:text-4xl">
              {headline}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">{resolvedSubtitle}</p>

            <ul className="mt-8 space-y-4">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1A4FBF]">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-bold text-[#1E293B]">{item.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-[#64748B]">{item.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/dashboard/servicios"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95"
              >
                Contratar y acceder al panel
              </Link>
              <Link
                href="/login"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-[#1E293B] shadow-sm transition hover:border-[#1A4FBF]/30 hover:text-[#1A4FBF]"
              >
                Ya soy cliente
              </Link>
            </div>

            <p className="mt-4 text-xs text-[#94A3B8]">
              Ilustración con datos ficticios ({DEMO.clientFullName}, {DEMO.gestorName}). La plataforma real es la que
              usan todos los clientes de Livendia.
            </p>
          </div>

          {/* Mockup */}
          <div className="relative mx-auto w-full max-w-xl lg:max-w-none">
            <div className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-[#1A4FBF]/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-8 -left-6 h-40 w-40 rounded-full bg-[#06B6D4]/10 blur-3xl" />

            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.12)] ring-1 ring-slate-100">
              {/* Browser chrome */}
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                <span className="mx-auto truncate rounded-md bg-white px-3 py-0.5 text-[10px] font-medium text-[#64748B] ring-1 ring-slate-200">
                  panel.livendia.com · área cliente
                </span>
              </div>

              <div className="flex min-h-[22rem] sm:min-h-[26rem]">
                {/* Mini sidebar */}
                <div className="hidden w-[4.5rem] shrink-0 flex-col border-r border-[#1547a8]/40 bg-[#1A4FBF] sm:flex lg:w-36">
                  <div className="border-b border-white/15 p-3 lg:p-4">
                    <p className="hidden text-sm font-extrabold text-white lg:block">Livendia</p>
                    <p className="text-center text-xs font-bold text-white lg:hidden">L</p>
                  </div>
                  <nav className="flex-1 space-y-1 p-2 lg:p-3">
                    {[
                      { icon: Home, label: "Panel", active: false },
                      { icon: LayoutDashboard, label: "Pedidos", active: true },
                      { icon: FileText, label: "Docs", active: false },
                    ].map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className={`flex items-center justify-center gap-2 rounded-lg px-2 py-2 lg:justify-start lg:px-3 ${
                            item.active ? "bg-white/15 shadow-[inset_3px_0_0_0_#06B6D4]" : "opacity-70"
                          }`}
                        >
                          <Icon className="h-4 w-4 shrink-0 text-white" aria-hidden />
                          <span className="hidden text-[11px] font-medium text-white lg:inline">{item.label}</span>
                        </div>
                      );
                    })}
                  </nav>
                  <div className="border-t border-white/15 p-2 lg:p-3">
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white lg:mx-0">
                      {DEMO.clientInitial}
                    </div>
                  </div>
                </div>

                {/* Main panel */}
                <div className="min-w-0 flex-1 bg-[radial-gradient(ellipse_at_top,_#EFF6FF_0%,_#F8FAFC_50%,_#fff_100%)] p-3 sm:p-4 lg:p-5">
                  <div className="flex items-center justify-between gap-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-wide text-[#64748B] sm:text-xs">
                        Hola, {DEMO.clientFirstName}
                      </p>
                      <p className="text-xs font-bold text-[#1E293B] sm:text-sm">Mis expedientes</p>
                    </div>
                    <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                      <Bell className="h-4 w-4 text-[#64748B]" aria-hidden />
                      <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A4FBF] text-[9px] font-bold text-white">
                        1
                      </span>
                    </span>
                  </div>

                  {/* KPI strip */}
                  <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">
                    {[
                      { label: "Activos", value: "1" },
                      { label: "Docs", value: "3" },
                      { label: "Progreso", value: "65%" },
                    ].map((kpi) => (
                      <div
                        key={kpi.label}
                        className="rounded-lg border border-slate-200/80 bg-white px-2 py-2 text-center shadow-sm sm:px-3 sm:py-2.5"
                      >
                        <p className="text-sm font-extrabold tabular-nums text-[#1A4FBF] sm:text-base">{kpi.value}</p>
                        <p className="text-[9px] font-semibold uppercase text-[#64748B] sm:text-[10px]">{kpi.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Expediente card */}
                  <div className="mt-3 rounded-xl border border-slate-200 bg-white p-3 shadow-sm ring-1 ring-slate-100 sm:p-4">
                    <div className="flex items-start gap-2.5">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] sm:h-10 sm:w-10">
                        <FileText className="h-4 w-4 text-white sm:h-5 sm:w-5" aria-hidden />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs font-bold text-[#1E293B] sm:text-sm">{serviceLabel}</p>
                        <p className="mt-0.5 text-[10px] text-[#64748B] sm:text-xs">
                          Ref. {DEMO.expedienteRef} · {city ? `${city} · ` : ""}Gestora {DEMO.gestorName}
                        </p>
                        <span className="mt-1.5 inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[9px] font-semibold text-amber-800 ring-1 ring-amber-200 sm:text-[10px]">
                          En revisión documental
                        </span>
                        <div className="mt-2">
                          <div className="flex justify-between text-[9px] font-semibold text-[#64748B] sm:text-[10px]">
                            <span>Progreso del expediente</span>
                            <span className="text-[#1A4FBF]">65%</span>
                          </div>
                          <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[65%] rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#06B6D4]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Documents + activity */}
                  <div className="mt-3 grid gap-2 sm:grid-cols-2">
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#64748B] sm:text-xs">
                        Documentos
                      </p>
                      <ul className="mt-2 space-y-1.5">
                        {DEMO.documents.map((doc) => (
                          <li
                            key={doc.name}
                            className="flex items-center gap-2 rounded-lg bg-slate-50 px-2 py-1.5 text-[10px] sm:text-[11px]"
                          >
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-[#06B6D4]" aria-hidden />
                            <span className="min-w-0 truncate font-medium text-[#475569]">{doc.name}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="rounded-xl border border-slate-200 bg-white p-2.5 sm:p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wide text-[#64748B] sm:text-xs">
                        Actividad
                      </p>
                      <ul className="mt-2 space-y-2">
                        {DEMO.activity.map((item) => (
                          <li key={item.text} className="text-[10px] sm:text-[11px]">
                            <p className="font-medium leading-snug text-[#475569]">{item.text}</p>
                            <p className="text-[#94A3B8]">{item.time}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-2 flex items-center gap-2 rounded-lg bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-2.5 py-2">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/20 text-[10px] font-bold text-white">
                          {DEMO.gestorInitial}
                        </span>
                        <div className="min-w-0">
                          <p className="truncate text-[10px] font-bold text-white sm:text-[11px]">
                            {DEMO.gestorName} · Gestora asignada
                          </p>
                          <p className="text-[9px] text-blue-100">Analizando tu expediente</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
