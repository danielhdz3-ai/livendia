import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { HomeCoverageCities } from "@/components/home-coverage-cities";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getPublishedGestoriaInmobiliariaLocalCities,
  localGestoriaInmobiliariaHref,
  type GestoriaInmobiliariaLocalCityDefinition,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
} from "@/lib/catalog.public";
import { HOME_COVERAGE_CITY_SLUGS } from "@/lib/home-coverage-cities";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_HUB_EYEBROW, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { SITE_DEFAULT_DESCRIPTION } from "@/lib/site-default-description";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${GESTORIA_INMOBILIARIA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Gestoría inmobiliaria por ciudad | Livendia",
  description: SITE_DEFAULT_DESCRIPTION,
  alternates: { canonical },
  openGraph: {
    title: "Gestoría inmobiliaria por ciudad | Livendia",
    description:
      "Compraventa, contratos y administración de alquileres. Madrid, Valencia, Barcelona y más ciudades — mismo servicio online en toda España.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

function splitFeaturedCities(published: GestoriaInmobiliariaLocalCityDefinition[]) {
  const prioritySet = new Set<string>(HOME_COVERAGE_CITY_SLUGS);
  const featured = HOME_COVERAGE_CITY_SLUGS.map((slug) => published.find((c) => c.slug === slug)).filter(
    (c): c is GestoriaInmobiliariaLocalCityDefinition => c != null,
  );
  const rest = published.filter((c) => !prioritySet.has(c.slug));
  return { featured, rest };
}

export default function GestoriaIndexPage() {
  const publishedCities = getPublishedGestoriaInmobiliariaLocalCities();
  const { featured, rest } = splitFeaturedCities(publishedCities);
  return (
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <PublicHeader />
      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-4xl text-center">
            <p className={LANDING_HERO_EYEBROW}>{LANDING_HUB_EYEBROW.gestoria}</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Gestoría inmobiliaria por ciudad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Gestoría inmobiliaria online en Madrid, Valencia, Barcelona y toda España. Compraventa entre
              particulares, contratos LAU/arras ({CONTRATO_ALQUILER_LAU_PRICE_LABEL}, temporada{" "}
              {CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}) y administración 49 €/mes.
            </p>          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <LocalCityImageCardGrid
            cities={featured.map((c) => ({
              slug: c.slug,
              city: c.city,
              region: c.schemaAdministrativeArea,
              href: localGestoriaInmobiliariaHref(c.slug),
              linkLabel: "Ver gestoría →",
            }))}
            title="Madrid, Valencia y Barcelona"
            description="Misma operativa online en las tres ciudades: gestor dedicado, precios fijos y panel de cliente."
            listClassName="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          />

          {rest.length > 0 ? (
            <LocalCityImageCardGrid
              cities={rest.map((c) => ({
                slug: c.slug,
                city: c.city,
                region: c.schemaAdministrativeArea,
                href: localGestoriaInmobiliariaHref(c.slug),
                linkLabel: "Ver landing →",
              }))}
              title="Más ciudades"
              listClassName="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            />
          ) : null}
        </section>

        <HomeCoverageCities variant="compact" />
      </main>
      <ServiceLandingSharedSections skipCoverage />
      <SiteFooter />
    </div>
  );
}
