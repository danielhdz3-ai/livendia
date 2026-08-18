import Link from "next/link";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import type { GestorWorkflowContent } from "@/lib/gestor-workflow-content";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export type ServiceGestorPlatformSectionProps = {
  workflow: GestorWorkflowContent;
  city?: string;
  serviceLabel?: string;
  /** Slug del catálogo para el CTA principal; si no hay, enlace al catálogo */
  primarySlug?: string;
  /** Sustituye el href del CTA principal (p. ej. WhatsApp en landings metro) */
  primaryHrefOverride?: string;
  /** Si true, el CTA principal abre en nueva pestaña (enlaces externos) */
  primaryExternal?: boolean;
  /** Fondo superior del bloque de pasos (continúa hacia el showcase) */
  sectionClassName?: string;
};

/**
 * Bloque unificado: proceso online con gestor (4 pasos) + mockup de plataforma cliente.
 * Debe usarse siempre junto en landings de servicio.
 */
export function ServiceGestorPlatformSection({
  workflow,
  city,
  serviceLabel,
  primarySlug,
  primaryHrefOverride,
  primaryExternal = false,
  sectionClassName = "border-b border-slate-200 bg-gradient-to-b from-cyan-50 via-[#EFF6FF] to-[#F8FAFC]",
}: ServiceGestorPlatformSectionProps) {
  const secondaryHref = waHref;
  const secondaryLabel = workflow.secondaryCtaLabel ?? "Consultar por WhatsApp";
  const primaryHref = primaryHrefOverride ?? (primarySlug ? `/servicios/${primarySlug}` : "/dashboard/servicios");
  const primaryLabel = workflow.primaryCtaLabel ?? "Contratar con gestor asignado";
  const primaryClassName =
    "inline-flex rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] hover:bg-blue-50";

  return (
    <div id="tramite-gestor-plataforma" className="scroll-mt-20">
      <section className={`px-4 py-14 sm:px-6 sm:py-16 ${sectionClassName}`}>
        <div className="mx-auto max-w-5xl">
          <div className="rounded-2xl bg-[#1A4FBF] p-8 text-white shadow-lg sm:p-10">
            <h2 className="text-xl font-bold sm:text-2xl">{workflow.heading}</h2>
            <p className="mt-3 text-blue-100">{workflow.intro}</p>
            <ol className="mt-8 space-y-5">
              {workflow.steps.map((step, i) => (
                <li key={step.title} className="flex gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#1E293B]">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-semibold">{step.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-blue-100">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryExternal ? (
                <a
                  href={primaryHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={primaryClassName}
                >
                  {primaryLabel}
                </a>
              ) : (
                <Link href={primaryHref} className={primaryClassName}>
                  {primaryLabel}
                </Link>
              )}
              <a
                href={secondaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                {secondaryLabel}
              </a>
            </div>
          </div>
          {workflow.disclaimer ? (
            <p className="mt-6 text-center text-xs text-[#64748b]">{workflow.disclaimer}</p>
          ) : null}
        </div>
      </section>

      <ClientPlatformShowcase
        city={city}
        serviceLabel={serviceLabel}
        variant="compact"
        className="border-t-0 bg-[#F8FAFC] pt-0"
      />
    </div>
  );
}
