import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { HomeCoverageCities } from "@/components/home-coverage-cities";
import { GestoriaOnlineDigitalSection } from "@/components/gestoria-online-digital-section";
import { GestoriaPremiumOfferCards } from "@/components/gestoria-premium-offer-cards";
import Image from "next/image";
import Link from "next/link";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getPublishedGestoriaInmobiliariaLocalCities,
  localGestoriaInmobiliariaHref,
  type GestoriaInmobiliariaLocalCityDefinition,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";
import { HOME_COVERAGE_CITY_SLUGS } from "@/lib/home-coverage-cities";
import { localGestoriaCityVerticalHref } from "@/lib/gestoria-city-vertical-hub";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_HUB_EYEBROW, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

export const revalidate = false;

const canonical = `${getSiteUrl()}${GESTORIA_INMOBILIARIA_LOCAL_BASE}`;

const GESTORIA_INDEX_DESCRIPTION =
  "Gestoría inmobiliaria en España para particulares: venta sin comisiones desde 890 €, contratos LAU y arras, revisión documental y administración de alquiler desde 59 €/mes. Madrid, Barcelona, Valencia y más — gestor dedicado, 100 % online.";

export const metadata: Metadata = {
  title: "Gestoría inmobiliaria España — precios fijos desde 145 €",
  description: GESTORIA_INDEX_DESCRIPTION,
  alternates: { canonical },
  openGraph: {
    title: "Gestoría inmobiliaria para particulares | Livendia",
    description: GESTORIA_INDEX_DESCRIPTION,
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/gestoria5.jpg", alt: "Gestoría inmobiliaria Livendia" }],
  },
};

function GestoriaVerticalHubLinks({ slug, city }: { slug: string; city: string }) {
  return (
    <div className="mt-3 flex flex-col gap-2 text-sm">
      <Link
        href={localGestoriaCityVerticalHref(slug, "alquiler")}
        className="font-semibold text-[#1A4FBF] hover:underline"
      >
        Gestoría alquiler {city} →
      </Link>
      <Link
        href={localGestoriaCityVerticalHref(slug, "compraventa")}
        className="font-semibold text-[#1A4FBF] hover:underline"
      >
        Gestoría compraventa {city} →
      </Link>
      <Link href={localGestoriaInmobiliariaHref(slug)} className="text-[#64748b] hover:text-[#1A4FBF]">
        Landing completa {city}
      </Link>
    </div>
  );
}

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
        <section className={`relative overflow-hidden border-b border-slate-200 ${LANDING_HERO_GRADIENT} text-white`}>
          <div className="mx-auto max-w-7xl">
            <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[520px]">
              <div className="flex flex-col justify-center px-4 py-12 sm:px-6 lg:px-12 lg:py-16">
                <p className={LANDING_HERO_EYEBROW}>{LANDING_HUB_EYEBROW.gestoria}</p>
                <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Gestoría inmobiliaria en España — sin comisión del 3–5 %
                </h1>
                <p className="mt-4 max-w-xl text-lg leading-relaxed text-blue-100">
                  Compraventa desde {SERVICIO_COMPLETO_CV_PRICE_LABEL}, contratos LAU {CONTRATO_ALQUILER_LAU_PRICE_LABEL} y{" "}
                  <Link href="/servicios/administracion-alquiler" className="font-semibold underline underline-offset-2 hover:text-white">
                    gestión de alquileres
                  </Link>{" "}
                  {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}. Gestor legal dedicado en Madrid, Barcelona, Valencia y más.
                </p>
                <Link
                  href="/precios"
                  className="mt-8 inline-flex w-fit items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:scale-[1.02] hover:bg-blue-50"
                >
                  Ver precios y contratar
                </Link>
              </div>
              <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-[480px]">
                <Image
                  src="/images/gestoria5.jpg"
                  alt="Gestoría inmobiliaria Livendia — contratos y compraventa"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <GestoriaPremiumOfferCards
          city="España"
          gestoriaHref={localGestoriaInmobiliariaHref("madrid")}
          administracionHref="/servicios/administracion-alquiler"
          ventaHref="/servicios/servicio-completo-venta"
        />

        <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xl font-extrabold text-[#1E293B] sm:text-2xl">Hubs de gestoría por intención de búsqueda</h2>
            <p className="mt-2 text-[#64748b]">
              Alquiler y compraventa en las tres ciudades con más demanda — refuerzo de enlazado interno para indexación.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {(
                [
                  { slug: "madrid", city: "Madrid" },
                  { slug: "barcelona", city: "Barcelona" },
                  { slug: "valencia", city: "Valencia" },
                ] as const
              ).map(({ slug, city }) => (
                <article key={slug} className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
                  <p className="text-lg font-bold text-[#1E293B]">{city}</p>
                  <GestoriaVerticalHubLinks slug={slug} city={city} />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <LocalCityImageCardGrid
            cities={featured.map((c) => ({
              slug: c.slug,
              city: c.city,
              region: c.schemaAdministrativeArea,
              href: localGestoriaInmobiliariaHref(c.slug),
              linkLabel: "Ver gestoría →",
              tagline: `Venta ${SERVICIO_COMPLETO_CV_PRICE_LABEL} · alquiler ${ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}`,
            }))}
            title="Gestoría inmobiliaria: Madrid, Valencia y Barcelona"
            description="Landings locales con gestor dedicado, mismos precios nacionales y panel de cliente."
            listClassName="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          />

          {rest.length > 0 ? (
            <LocalCityImageCardGrid
              cities={rest.map((c) => ({
                slug: c.slug,
                city: c.city,
                region: c.schemaAdministrativeArea,
                href: localGestoriaInmobiliariaHref(c.slug),
                linkLabel: "Ver landing →",
                tagline: "Compraventa, contratos y alquiler",
              }))}
              title="Más ciudades con gestoría Livendia"
              listClassName="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            />
          ) : null}
        </section>

        <GestoriaOnlineDigitalSection city="España" schemaAdministrativeArea="España" />

        <HomeCoverageCities variant="compact" />
      </main>
      <ServiceLandingSharedSections skipCoverage skipGestorPlatform />
      <SiteFooter />
    </div>
  );
}