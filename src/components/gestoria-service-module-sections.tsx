import Image from "next/image";
import Link from "next/link";
import { ContratarSlugButton } from "@/components/service-purchase-provider";
import type { ContratosBcnServiceSection } from "@/lib/contratos-inmobiliarios-barcelona-content";
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
    <div className="overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-slate-200/90">
      <div className="relative aspect-[4/3] w-full">
        <Image src={image} alt={imageAlt} fill className="object-cover" sizes="(max-width:1024px) 100vw, 560px" />
        <div className="absolute right-4 top-4 rounded-xl bg-[#1A4FBF] px-3 py-1.5 text-xs font-bold uppercase text-white shadow-lg">
          {priceLabel}
        </div>
      </div>
      <div className="border-t border-slate-100 p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-[#06B6D4]">Livendia gestoría</p>
        <p className="mt-1 text-lg font-extrabold text-[#1E293B]">{title}</p>
        <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p>
      </div>
    </div>
  );
}

export function GestoriaServiceModuleSections({
  sections,
  cityLabel,
}: {
  sections: readonly ContratosBcnServiceSection[];
  cityLabel: string;
}) {
  return (
    <>
      {sections.map((section, sectionIndex) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-28 border-b border-slate-200 px-4 py-16 sm:px-6 lg:py-20 ${
            sectionIndex % 2 === 1 ? "bg-[#F8FAFC]" : "bg-white"
          }`}
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className={section.reverse ? "lg:order-2" : ""}>
              <ServiceVisualCard
                image={section.image}
                imageAlt={section.imageAlt}
                priceLabel={section.priceLabel}
                title={section.navLabel}
                subtitle={`${cityLabel} · panel online · gestor asignado`}
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
                    className="inline-flex min-h-11 items-center rounded-xl border border-[#1A4FBF]/30 px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50"
                  >
                    Landing {cityLabel} →
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
