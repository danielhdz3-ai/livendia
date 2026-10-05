import Link from "next/link";
import Image from "next/image";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { FaqSection } from "@/components/faq-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import type { GestoriaCityVerticalHubConfig } from "@/lib/gestoria-city-vertical-hub";
import type { GestoriaVerticalServiceShowcase } from "@/lib/gestoria-city-vertical-hub-enrichment";
import { GESTORIA_INMOBILIARIA_LOCAL_BASE } from "@/lib/gestoria-inmobiliaria-local-cities";
import type { PublicService } from "@/lib/catalog.public";
import { servicePublicLandingPath } from "@/lib/catalog.public";
import { LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import { ArrowRight, CheckCircle2, ChevronRight } from "lucide-react";

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

function ServicePriceCardVisual({
  showcase,
  city,
}: {
  showcase: GestoriaVerticalServiceShowcase;
  city: string;
}) {
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
        <div className="absolute right-4 top-4 rounded-xl bg-[#1A4FBF] px-4 py-2 text-center shadow-lg">
          <p className="text-[10px] font-bold uppercase tracking-wider text-blue-100">Precio</p>
          <p className="text-lg font-extrabold leading-tight text-white">{showcase.price}</p>
        </div>
      </div>
      <div className="border-t border-slate-100 bg-white p-5">
        <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Livendia gestoría</p>
        <p className="mt-1 text-lg font-bold text-[#1E293B]">{showcase.cardTitle}</p>
        <p className="mt-1 text-sm text-[#64748b]">
          {city} · {showcase.cardMeta}
        </p>
      </div>
    </div>
  );
}

function ServiceShowcaseSection({
  showcase,
  city,
  index,
  contratarEnabled,
}: {
  showcase: GestoriaVerticalServiceShowcase;
  city: string;
  index: number;
  contratarEnabled: boolean;
}) {
  const reverse = index % 2 === 1;
  const sectionId = `servicio-${showcase.key}`;

  return (
    <article
      id={sectionId}
      className="scroll-mt-24 border-t border-slate-200 py-16 first:border-t-0 first:pt-0"
    >
      <div
        className={`grid gap-10 lg:grid-cols-2 lg:items-start ${reverse ? "lg:[direction:rtl]" : ""}`}
      >
        <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
          <ServicePriceCardVisual showcase={showcase} city={city} />
        </div>

        <div className={`${reverse ? "lg:[direction:ltr]" : ""}`}>
          <p className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
            {showcase.sectionLabel}
          </p>
          <h3 className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">{showcase.headline}</h3>
          <p className="mt-4 text-base leading-relaxed text-[#64748b]">{showcase.body}</p>

          <div className="mt-8 rounded-2xl bg-slate-50 p-6 ring-1 ring-slate-100">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
              Cómo lo hacemos en Livendia
            </p>
            <ol className="mt-4 space-y-4">
              {showcase.steps.map((step, i) => (
                <li key={step} className="flex gap-3 text-sm leading-relaxed text-[#475569]">
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-xs font-bold text-white"
                    aria-hidden
                  >
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
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={showcase.href}
              className="inline-flex items-center gap-2 rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white transition hover:bg-[#1E40AF]"
            >
              Ver landing en {city}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            {contratarEnabled && showcase.contratarSlug ? (
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

function GestoriaVerticalHubMain({
  config,
  servicesBySlug,
}: {
  config: GestoriaCityVerticalHubConfig;
  servicesBySlug: Partial<Record<string, PublicService>>;
}) {
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

          {config.vertical === "alquiler" && config.citySlug === "valencia" ? (
            <p className="mt-4 max-w-3xl text-sm text-[#64748b]">
              <Link
                href="/blog/gestion-alquileres-valencia-propietarios-2026"
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                Leer la guía: gestión de alquileres en Valencia (2026)
              </Link>
              {" · "}
              <Link
                href="/servicios/administracion-alquiler-local/valencia"
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                Landing principal de administración en Valencia
              </Link>
            </p>
          ) : null}
          {config.vertical === "alquiler" && config.citySlug === "madrid" ? (
            <p className="mt-4 max-w-3xl text-sm text-[#64748b]">
              <Link
                href="/servicios/administracion-alquiler-local/madrid"
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                Gestión de alquileres en Madrid — landing principal
              </Link>
            </p>
          ) : null}
        </section>

        <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
              {config.catalogCopy.eyebrow}
            </p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">{config.catalogCopy.title}</h2>
            <p className="mt-3 max-w-3xl text-[#64748b]">{config.catalogCopy.subtitle}</p>

            <nav
              className="mt-8 flex flex-wrap gap-2"
              aria-label={`Servicios de ${config.verticalLabel} en ${config.city}`}
            >
              {config.serviceShowcases.map((svc) => (
                <a
                  key={svc.key}
                  href={`#servicio-${svc.key}`}
                  className="rounded-full border border-[#1A4FBF]/40 bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] transition hover:bg-blue-50"
                >
                  {svc.cardTitle}
                </a>
              ))}
            </nav>

            <div className="mt-4">
              {config.serviceShowcases.map((showcase, index) => (
                <ServiceShowcaseSection
                  key={showcase.key}
                  showcase={showcase}
                  city={config.city}
                  index={index}
                  contratarEnabled={Boolean(
                    showcase.contratarSlug && servicesBySlug[showcase.contratarSlug],
                  )}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-slate-50 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Por qué Livendia</p>
            <h2 className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              Beneficios de {config.verticalLabel.toLowerCase()} en {config.city}
            </h2>
            <ul className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {config.benefits.map((b) => (
                <li
                  key={b.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100"
                >
                  <CheckCircle2 className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                  <h3 className="mt-3 text-lg font-bold text-[#1E293B]">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{b.body}</p>
                </li>
              ))}
            </ul>

            <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h3 className="text-xl font-bold text-[#1E293B]">{config.comparison.title}</h3>
              <p className="mt-4 leading-relaxed text-[#64748b]">{config.comparison.body}</p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <FaqSection
              title={`Preguntas frecuentes — ${config.verticalLabel} en ${config.city}`}
              subtitle="Respuestas antes de contratar o entrar en la landing de cada servicio."
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

export function GestoriaCityVerticalHubLanding({
  config,
  servicesBySlug,
}: {
  config: GestoriaCityVerticalHubConfig;
  servicesBySlug: Partial<Record<string, PublicService>>;
}) {
  const slugs = config.serviceShowcases
    .map((s) => s.contratarSlug)
    .filter((s): s is string => Boolean(s));

  if (slugs.length === 0) {
    return <GestoriaVerticalHubMain config={config} servicesBySlug={{}} />;
  }

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <GestoriaVerticalHubMain config={config} servicesBySlug={servicesBySlug} />
    </MultiServicePurchaseProvider>
  );
}
