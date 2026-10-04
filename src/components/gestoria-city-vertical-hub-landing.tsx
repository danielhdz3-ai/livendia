import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { FaqSection } from "@/components/faq-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import type { GestoriaCityVerticalHubConfig } from "@/lib/gestoria-city-vertical-hub";
import { GESTORIA_INMOBILIARIA_LOCAL_BASE } from "@/lib/gestoria-inmobiliaria-local-cities";
import { LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import { ArrowRight, ChevronRight } from "lucide-react";

function VerticalHubJsonLd({ config }: { config: GestoriaCityVerticalHubConfig }) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${config.path}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${pageUrl}#page`,
        name: config.h1,
        description: config.metaDescription,
        url: pageUrl,
        inLanguage: "es-ES",
        isPartOf: { "@id": `${base}/#website` },
        about: {
          "@type": "City",
          name: config.city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: config.schemaAdministrativeArea,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: base },
          { "@type": "ListItem", position: 2, name: "Gestoría", item: `${base}${GESTORIA_INMOBILIARIA_LOCAL_BASE}` },
          {
            "@type": "ListItem",
            position: 3,
            name: config.city,
            item: `${base}${config.gestoriaHubHref}`,
          },
          { "@type": "ListItem", position: 4, name: config.verticalLabel, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export function GestoriaCityVerticalHubLanding({ config }: { config: GestoriaCityVerticalHubConfig }) {
  return (
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <VerticalHubJsonLd config={config} />
      <PublicHeader />

      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-4xl">
            <nav className="flex flex-wrap items-center gap-1 text-sm text-blue-100" aria-label="Breadcrumb">
              <Link href="/gestoria" className="hover:text-white">
                Gestoría
              </Link>
              <ChevronRight className="h-4 w-4 opacity-70" aria-hidden />
              <Link href={config.gestoriaHubHref} className="hover:text-white">
                {config.city}
              </Link>
              <ChevronRight className="h-4 w-4 opacity-70" aria-hidden />
              <span className="text-white">{config.verticalLabel}</span>
            </nav>
            <p className="mt-6 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
              Hub local · {config.verticalLabel} · {config.city}
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{config.h1}</h1>
            <p className="mt-4 text-lg leading-relaxed text-blue-50">{config.heroLead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href={config.gestoriaHubHref}
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#1A4FBF] shadow-lg transition hover:bg-blue-50"
              >
                Gestoría completa en {config.city}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
              {config.ciudadesHubHref ? (
                <Link
                  href={config.ciudadesHubHref}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white/80 px-5 py-2.5 text-sm font-semibold transition hover:bg-white/10"
                >
                  Todos los servicios en {config.city}
                </Link>
              ) : null}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <p className="max-w-3xl text-lg leading-relaxed text-[#64748b]">{config.intro}</p>

          <h2 className="mt-12 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
            Servicios de {config.verticalLabel.toLowerCase()} en {config.city}
          </h2>
          <ul className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {config.services.map((svc) => (
              <li key={svc.href}>
                <Link
                  href={svc.href}
                  className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:border-[#1A4FBF]/30 hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase tracking-wide text-[#1A4FBF]">
                    {svc.price}
                  </span>
                  <h3 className="mt-2 text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">
                    {svc.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">{svc.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF]">
                    Ver landing
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <FaqSection
              title={`Preguntas frecuentes — ${config.verticalLabel} en ${config.city}`}
              items={[...config.faq]}
            />
          </div>
        </section>
      </main>

      <ServiceLandingSharedSections skipCoverage />
      <SiteFooter />
    </div>
  );
}
