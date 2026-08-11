import Link from "next/link";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedContratoAlquilerTemporadaLocalCities,
  localContratoAlquilerTemporadaHref,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL } from "@/lib/catalog.public";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_HUB_EYEBROW, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Contrato de alquiler por temporada por ciudad | Livendia",
  description:
    `Redacción de contrato de alquiler por temporada entre particulares, ciudad a ciudad. Estudios, desplazamientos laborales y estancias acotadas. Desde ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl., sin comisión.`,
  alternates: { canonical },
  openGraph: {
    title: "Contrato de alquiler por temporada por ciudad | Livendia",
    description: "Contrato específico fuera de LAU habitual. Publicamos ciudad a ciudad con contenido local.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function ContratoAlquilerTemporadaLocalIndexPage() {
  const publishedCities = getPublishedContratoAlquilerTemporadaLocalCities();

  return (
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <PublicHeader />
      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-4xl text-center">
            <p className={LANDING_HERO_EYEBROW}>{LANDING_HUB_EYEBROW.temporada}</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contrato de alquiler por temporada entre particulares
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Redacción profesional para propietarios e inquilinos que alquilan por meses concretos — sin comisión de
              agencia. Misma base que{" "}
              <Link
                href="/servicios/contrato-alquiler-temporada"
                className="font-semibold text-white underline underline-offset-2 hover:text-cyan-200"
              >
                /servicios/contrato-alquiler-temporada
              </Link>
              , con contexto del mercado local: duración, prórroga, suministros e inventario adaptados a cada territorio.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <LocalCityImageCardGrid
            cities={publishedCities.map((c) => ({
              slug: c.slug,
              city: c.slug === "mallorca" ? "Mallorca" : c.city,
              region: c.schemaAdministrativeArea,
              href: localContratoAlquilerTemporadaHref(c.slug),
              linkLabel: "Ver landing →",
            }))}
            title="Ciudades disponibles"
            description="Contrato de alquiler por temporada con contexto del mercado local: duración, prórroga, suministros e inventario."
          />
        </section>
      </main>
        <ServiceLandingSharedSections />

      <SiteFooter />
    </div>
  );
}
