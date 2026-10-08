import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ContratarSlugButton } from "@/components/service-purchase-provider";
import type { GestoriaVerticalServiceShowcase } from "@/lib/gestoria-city-vertical-hub-enrichment";
import { servicePublicLandingPath } from "@/lib/catalog.public";

export type ServiceShowcaseVariant = "hub" | "paa";

export function ServicePriceCardVisual({
  showcase,
  locationLabel,
  variant = "hub",
}: {
  showcase: GestoriaVerticalServiceShowcase;
  locationLabel: string;
  variant?: ServiceShowcaseVariant;
}) {
  const priceBadgeClass =
    variant === "paa"
      ? "bg-gradient-to-br from-[#D4AF37] to-[#C9A227] text-[#1E293B]"
      : "bg-[#1A4FBF] text-white";
  const priceLabelClass = variant === "paa" ? "text-[#1E293B]/70" : "text-blue-100";
  const brandClass = variant === "paa" ? "text-[#B8860B]" : "text-[#1A4FBF]";

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl ring-1 ring-slate-200">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={showcase.image}
          alt={showcase.imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 480px"
        />
        <div className={`absolute right-4 top-4 rounded-xl px-4 py-2 text-center shadow-lg ${priceBadgeClass}`}>
          <p className={`text-[10px] font-bold uppercase tracking-wider ${priceLabelClass}`}>Precio</p>
          <p className={`text-lg font-extrabold leading-tight ${variant === "paa" ? "text-[#1E293B]" : ""}`}>
            {showcase.price}
          </p>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-white p-5">
        <p className={`text-xs font-bold uppercase tracking-wide ${brandClass}`}>Livendia gestoría</p>
        <p className="mt-1 text-lg font-bold text-[#1E293B]">{showcase.cardTitle}</p>
        <p className="mt-1 text-sm text-[#64748b]">
          {locationLabel} · {showcase.cardMeta}
        </p>
      </div>
    </div>
  );
}

function contratarCtaLabel(cardTitle: string): string {
  const lower = cardTitle.toLowerCase();
  if (lower.includes("contrato")) return `Contratar ${lower} →`;
  if (lower.startsWith("acompañamiento")) return `Contratar ${lower} →`;
  if (lower.includes("revisión")) return "Contratar revisión documental →";
  if (lower.includes("administración")) return "Contratar administración →";
  return `Contratar ${lower} →`;
}

export function ServiceShowcaseSection({
  showcase,
  locationLabel,
  index,
  contratarEnabled,
  primaryLinkLabel,
  variant = "hub",
}: {
  showcase: GestoriaVerticalServiceShowcase;
  locationLabel: string;
  index: number;
  contratarEnabled: boolean;
  primaryLinkLabel: string;
  variant?: ServiceShowcaseVariant;
}) {
  const reverse = index % 2 === 1;
  const sectionId = `servicio-${showcase.key}`;
  const isPaa = variant === "paa";

  const badgeClass = isPaa
    ? "rounded-full bg-[#FFFBEB] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#B8860B] ring-1 ring-[#D4AF37]/40"
    : "inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]";

  const stepsBoxClass = isPaa
    ? "mt-8 rounded-2xl bg-[#FFFBEB]/80 p-6 ring-1 ring-[#D4AF37]/25"
    : "mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100";

  const stepsTitleClass = isPaa
    ? "text-xs font-bold uppercase tracking-wide text-[#B8860B]"
    : "text-xs font-bold uppercase tracking-wide text-[#1A4FBF]";

  const stepNumClass = isPaa
    ? "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-xs font-bold text-[#1E293B]"
    : "flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-xs font-bold text-white";

  const checkClass = isPaa ? "text-[#B8860B]" : "text-[#1A4FBF]";

  return (
    <article
      id={sectionId}
      className="scroll-mt-24 border-t border-[#D4AF37]/20 py-16 first:border-t-0 first:pt-0"
    >
      <div
        className={`grid gap-10 lg:grid-cols-2 lg:items-start ${reverse ? "lg:[direction:rtl]" : ""}`}
      >
        <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
          <ServicePriceCardVisual showcase={showcase} locationLabel={locationLabel} variant={variant} />
        </div>

        <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
          <p className={badgeClass}>{showcase.sectionLabel}</p>
          <h3 className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">{showcase.headline}</h3>
          <p className="mt-4 text-base leading-relaxed text-[#64748b]">{showcase.body}</p>

          <div className={stepsBoxClass}>
            <p className={stepsTitleClass}>Cómo lo hacemos en Livendia</p>
            <ol className="mt-4 space-y-4">
              {showcase.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#475569]">
                  <span className={stepNumClass} aria-hidden>
                    {i + 1}
                  </span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <ul className="mt-6 space-y-3">
            {showcase.checklist.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-[#475569]">
                <CheckCircle2 className={`mt-0.5 h-5 w-5 shrink-0 ${checkClass}`} aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            {isPaa && contratarEnabled && showcase.contratarSlug ? (
              <ContratarSlugButton
                slug={showcase.contratarSlug}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-6 py-3 text-sm font-bold text-[#1E293B] shadow-md transition hover:scale-[1.02]"
              >
                {contratarCtaLabel(showcase.cardTitle)}
              </ContratarSlugButton>
            ) : null}
            {isPaa && !showcase.contratarSlug ? (
              <Link
                href={showcase.href}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-6 py-3 text-sm font-bold text-[#1E293B] shadow-md transition hover:scale-[1.02]"
              >
                {contratarCtaLabel(showcase.cardTitle)}
              </Link>
            ) : null}
            <Link
              href={showcase.href}
              className={
                isPaa
                  ? "inline-flex items-center gap-2 rounded-full border-2 border-[#1E293B]/20 bg-white px-5 py-2.5 text-sm font-bold text-[#1E293B] transition hover:border-[#D4AF37]"
                  : "inline-flex items-center gap-2 rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1E40AF]"
              }
            >
              {primaryLinkLabel}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {!isPaa && contratarEnabled && showcase.contratarSlug ? (
              <ContratarSlugButton
                slug={showcase.contratarSlug}
                className="inline-flex items-center justify-center rounded-full border-2 border-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-[#1A4FBF] transition hover:bg-blue-50"
              >
                Contratar online
              </ContratarSlugButton>
            ) : null}
            {showcase.contratarSlug ? (
              <Link
                href={servicePublicLandingPath(showcase.contratarSlug)}
                className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-[#64748b] underline-offset-2 hover:text-[#1A4FBF] hover:underline"
              >
                Ficha del servicio
              </Link>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}
