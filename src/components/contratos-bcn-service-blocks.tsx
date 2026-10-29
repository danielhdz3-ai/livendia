import { ContratosBcnServicesCarousel } from "@/components/contratos-bcn-services-carousel";
import { LivendiaReveal } from "@/components/livendia-reveal";
import { ContratarSlugButton } from "@/components/service-purchase-provider";
import type { ContratosBcnServiceSection } from "@/lib/contratos-inmobiliarios-barcelona-content";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

function ServiceVisualCard({
  image,
  imageAlt,
  priceLabel,
  title,
  subtitle,
}: {
  image: string;
  imageAlt: string;
  priceLabel: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-2xl transition duration-500 hover:-translate-y-1">
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-[#1A4FBF]/15 ring-1 ring-slate-200/80 transition hover:shadow-[#1A4FBF]/25">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center transition duration-700 hover:scale-105"
            sizes="(max-width:1024px) 100vw, 672px"
            quality={92}
          />
          <div className="absolute right-4 top-4 rounded-xl bg-[#1A4FBF] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
            {priceLabel}
          </div>
        </div>
        <div className="border-t border-slate-100 bg-gradient-to-br from-white to-[#EFF6FF] p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#06B6D4]">Livendia Gestoría</p>
          <p className="mt-1 text-lg font-extrabold text-[#1E293B]">{title}</p>
          <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export type ContratosBcnServiceBlocksNavExtra = {
  href: string;
  label: string;
  highlight?: boolean;
};

type ContratosBcnServiceBlocksProps = {
  sections: readonly ContratosBcnServiceSection[];
  cardSubtitle?: string;
  navExtras?: ContratosBcnServiceBlocksNavExtra[];
};

/** Carrusel + navegación sticky + apartados de servicio (misma estructura que el hub BCN). */
export function ContratosBcnServiceBlocks({
  sections,
  cardSubtitle = "Barcelona · panel online · gestor asignado",
  navExtras = [],
}: ContratosBcnServiceBlocksProps) {
  return (
    <>
      <nav
        className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90"
        aria-label="Apartados de servicios"
      >
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="shrink-0 rounded-full border border-[#1A4FBF]/25 px-4 py-2 text-xs font-semibold text-[#1A4FBF] transition hover:bg-[#EFF6FF] sm:text-sm"
            >
              {s.navLabel}
            </a>
          ))}
          <a
            href="#despacho"
            className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-50 sm:text-sm"
          >
            Despacho Les Corts
          </a>
          {navExtras.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold sm:text-sm ${
                link.highlight
                  ? "border-[#1A4FBF]/25 text-[#1A4FBF] hover:bg-[#EFF6FF]"
                  : "border-slate-200 text-[#475569] hover:bg-slate-50"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>

      <div id="servicios-carrusel">
        <ContratosBcnServicesCarousel sections={sections} />
      </div>

      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 border-b border-slate-200 px-4 py-16 sm:px-6 lg:py-24 ${
            sectionIndex % 2 === 1 ? "bg-[#F8FAFC]" : "bg-white"
          }`}
        >
          <LivendiaReveal>
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={section.reverse ? "lg:order-2" : ""}>
                <ServiceVisualCard
                  image={section.image}
                  imageAlt={section.imageAlt}
                  priceLabel={section.priceLabel}
                  title={section.navLabel}
                  subtitle={cardSubtitle}
                />
              </div>
              <div className={section.reverse ? "lg:order-1" : ""}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#475569]">{section.lead}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{section.localContext}</p>

                <div className="mt-8 rounded-2xl bg-[#F1F5F9] p-6 ring-1 ring-slate-200/80">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">{section.stepsTitle}</p>
                  <ol className="mt-4 space-y-3">
                    {section.steps.map((step, i) => (
                      <li key={step} className="flex gap-3 text-sm text-[#334155]">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <ul className="mt-6 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-[#1E293B]">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ContratarSlugButton
                    slug={section.serviceSlug}
                    className="inline-flex min-h-11 items-center rounded-xl bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#2563EB]"
                  >
                    Contratar online
                  </ContratarSlugButton>
                  <Link
                    href={section.serviceHref}
                    className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-50"
                  >
                    Ver ficha del servicio
                  </Link>
                  {section.localHref ? (
                    <Link
                      href={section.localHref}
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-[#64748B] underline-offset-2 hover:text-[#1A4FBF] hover:underline"
                    >
                      Landing local →
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
          </LivendiaReveal>
        </section>
      ))}
    </>
  );
}
