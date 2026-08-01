import Link from "next/link";
import { BUSINESS_EMAIL, getWhatsAppHref } from "@/lib/business-nap";
import { PANEL_CARD } from "@/lib/client-panel-ui";
import { ArrowRight, Mail, MessageCircle, Upload } from "lucide-react";

export type ExpedienteDocChannelsProps = {
  serviceName: string;
  orderId: string;
  docCount?: number;
  progressPercent?: number;
  /** Enlace al subir en plataforma. Por defecto ancla #documentos. */
  platformHref?: string;
  variant?: "stack" | "grid";
  theme?: "brand" | "light";
  heading?: string;
  showHeading?: boolean;
};

function buildLinks(serviceName: string, orderId: string) {
  const mailSubject = `Documentación expediente · ${serviceName} · ${orderId.slice(0, 8)}`;
  const mailHref = `mailto:${BUSINESS_EMAIL}?subject=${encodeURIComponent(mailSubject)}`;
  const waPrefill = `Hola, soy cliente de Livendia. Quiero enviar documentación de mi expediente "${serviceName}" (ref. ${orderId.slice(0, 8)}).`;
  const waHref = getWhatsAppHref(waPrefill);
  return { mailHref, waHref };
}

export function ExpedienteDocChannels({
  serviceName,
  orderId,
  docCount = 0,
  progressPercent,
  platformHref = "#documentos",
  variant = "grid",
  theme = "light",
  heading = "Envía tu documentación de 3 formas",
  showHeading = true,
}: ExpedienteDocChannelsProps) {
  const { mailHref, waHref } = buildLinks(serviceName, orderId);
  const isHash = platformHref.startsWith("#");

  const options = [
    {
      step: "1",
      title: "En la plataforma",
      description:
        docCount > 0
          ? `Sube PDF o fotos aquí · ${docCount} archivo(s) ya subido(s).`
          : "Sube PDF, Word o fotos directamente en tu expediente.",
      href: platformHref,
      icon: Upload,
      iconClass: "bg-[#EFF6FF] text-[#1A4FBF]",
      cta: "Ir a subir archivos",
      external: false,
    },
    {
      step: "2",
      title: "Por WhatsApp",
      description: "Envía fotos o archivos a tu gestor. Te responderemos en horario laboral.",
      href: waHref,
      icon: MessageCircle,
      iconClass: "bg-[#DCFCE7] text-[#128C7E]",
      cta: "Abrir WhatsApp",
      external: true,
      analytics: "expediente_doc_whatsapp",
    },
    {
      step: "3",
      title: "Por email",
      description: `Adjunta tus archivos a ${BUSINESS_EMAIL} indicando tu nombre y servicio.`,
      href: mailHref,
      icon: Mail,
      iconClass: "bg-slate-100 text-[#475569]",
      cta: "Abrir email",
      external: false,
    },
  ] as const;

  const headingClass =
    theme === "brand" ? "text-blue-50" : "text-[#64748B]";
  const headingStrongClass = theme === "brand" ? "text-white" : "text-[#1E293B]";

  function renderLink(
    option: (typeof options)[number],
    className: string,
    children: React.ReactNode,
  ) {
    if (option.external) {
      return (
        <a
          href={option.href}
          target="_blank"
          rel="noopener noreferrer"
          data-analytics-placement={"analytics" in option ? option.analytics : undefined}
          className={className}
        >
          {children}
        </a>
      );
    }
    if (isHash || option.href.startsWith("mailto:")) {
      return (
        <a href={option.href} className={className}>
          {children}
        </a>
      );
    }
    return (
      <Link href={option.href} className={className}>
        {children}
      </Link>
    );
  }

  if (variant === "stack") {
    return (
      <div>
        {showHeading ? (
          <p className={`mt-2 text-sm font-medium ${headingClass}`}>
            Puedes enviar tu documentación de{" "}
            <span className={`font-bold ${headingStrongClass}`}>3 formas</span>:
          </p>
        ) : null}
        <ul className="mt-4 space-y-2.5" aria-label="Formas de enviar documentación">
          {options.map((option) => {
            const Icon = option.icon;
            return (
              <li key={option.step}>
                {renderLink(
                  option,
                  "flex w-full items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-md transition active:scale-[0.99]",
                  <>
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-xs font-extrabold text-white">
                      {option.step}
                    </span>
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${option.iconClass}`}>
                      <Icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-[#1E293B]">{option.title}</p>
                      <p className="mt-0.5 text-xs leading-snug text-[#64748B]">{option.description}</p>
                      {option.step === "1" && progressPercent != null ? (
                        <p className="mt-1 truncate text-xs font-semibold text-[#1A4FBF]">
                          {serviceName} · {progressPercent}%
                        </p>
                      ) : null}
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#94A3B8]" aria-hidden />
                  </>,
                )}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  return (
    <section aria-labelledby={showHeading ? "expediente-channels-heading" : undefined}>
      {showHeading ? (
        <div className="mb-4">
          <h2
            id="expediente-channels-heading"
            className={`text-lg font-bold sm:text-xl ${theme === "brand" ? "text-white" : "text-[#1E293B]"}`}
          >
            {heading}
          </h2>
          <p className={`mt-1 text-sm ${headingClass}`}>
            Elige la opción que te resulte más cómoda. Tu gestor incorporará todo al mismo expediente.
          </p>
        </div>
      ) : null}

      <div className="grid gap-4 lg:grid-cols-3">
        {options.map((option) => {
          const Icon = option.icon;
          const cardClass =
            theme === "brand"
              ? "group flex h-full flex-col rounded-2xl bg-white p-5 text-[#1E293B] shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
              : `${PANEL_CARD} group flex h-full flex-col transition hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(26,79,191,0.12)]`;

          return (
            <div key={option.step} className="relative">
              <span
                className={`absolute -top-2.5 left-4 flex h-7 w-7 items-center justify-center rounded-full text-xs font-extrabold text-white ${
                  theme === "brand" ? "bg-[#0F2A6B] ring-2 ring-white/30" : "bg-[#1A4FBF] shadow-md"
                }`}
              >
                {option.step}
              </span>
              {renderLink(
                option,
                cardClass,
                <>
                  <div className={`mt-2 flex h-12 w-12 items-center justify-center rounded-2xl ${option.iconClass}`}>
                    <Icon className="h-6 w-6" aria-hidden />
                  </div>
                  <h3 className="mt-4 text-base font-bold">{option.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748B]">{option.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#1A4FBF] group-hover:gap-2.5 transition-all">
                    {option.cta}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </>,
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
