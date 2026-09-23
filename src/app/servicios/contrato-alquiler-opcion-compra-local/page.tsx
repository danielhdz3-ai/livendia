import Link from "next/link";
import { ContratoAlquilerOpcionCompraLocalCityLinks } from "@/components/contrato-alquiler-opcion-compra-local-city-links";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_BASE,
  getPublishedContratoAlquilerOpcionCompraLocalCities,
  localContratoAlquilerOpcionCompraHref,
} from "@/lib/contrato-alquiler-opcion-compra-local-cities";
import { CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL } from "@/lib/catalog.public";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_OPCION_COMPRA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Contrato de alquiler con opción a compra por ciudad",
  description: `Redactamos tu contrato de alquiler con opción a compra entre particulares, ciudad a ciudad. Precio de ejercicio, plazo y rentas. Desde ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incl.`,
  alternates: { canonical },
  openGraph: {
    title: "Alquiler con opción a compra por ciudad",
    description: "Gestor experto redacta contrato LAU + pacto de compra. Landings locales Livendia.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function ContratoAlquilerOpcionCompraLocalIndexPage() {
  const publishedCities = getPublishedContratoAlquilerOpcionCompraLocalCities();

  return (
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <PublicHeader />
      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-4xl text-center">
            <p className={LANDING_HERO_EYEBROW}>Alquiler con opción a compra · Entre particulares</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Redactamos tu contrato de alquiler con opción a compra
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Gestor experto redacta contrato de alquiler con opción a compra en tu ciudad — precio de ejercicio,
              plazo, imputación de rentas e inventario. Misma base que{" "}
              <Link
                href="/servicios/contrato-alquiler-opcion-compra"
                className="font-semibold text-white underline underline-offset-2 hover:text-cyan-200"
              >
                /servicios/contrato-alquiler-opcion-compra
              </Link>
              , con contexto local del mercado.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <LocalCityImageCardGrid
            cities={publishedCities.map((c) => ({
              slug: c.slug,
              city: c.city,
              region: c.schemaAdministrativeArea,
              href: localContratoAlquilerOpcionCompraHref(c.slug),
              linkLabel: "Ver landing →",
            }))}
            title="Ciudades disponibles"
            description="Contrato LAU + opción de compra con títulos y contenido diferenciado por territorio."
          />
          <div className="mt-10">
            <ContratoAlquilerOpcionCompraLocalCityLinks />
          </div>
        </section>
      </main>
      <ServiceLandingSharedSections />
      <SiteFooter />
    </div>
  );
}
