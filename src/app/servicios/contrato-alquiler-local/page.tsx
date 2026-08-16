import Link from "next/link";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedContratoAlquilerLocalCities,
  localContratoAlquilerHref,
} from "@/lib/contrato-alquiler-local-cities";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_HUB_EYEBROW, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Contrato de alquiler por ciudad en España",
  description:
    "¿Quieres redactar un contrato de alquiler por expertos? Landings locales con revisión LAU, inventario y asesoramiento. Publicamos nuevas ciudades de forma gradual.",
  alternates: { canonical },
  openGraph: {
    title: "Contrato de alquiler por ciudad en España",
    description:
      "Redacción y revisión profesional de contratos de alquiler por ciudad: LAU, temporada y habitación con proceso digital.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function ContratoAlquilerLocalIndexPage() {
  const publishedCities = getPublishedContratoAlquilerLocalCities();

  return (
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <PublicHeader />
      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-4xl text-center">
            <p className={LANDING_HERO_EYEBROW}>{LANDING_HUB_EYEBROW.alquiler}</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              ¿Quieres redactar un contrato de alquiler por expertos?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Elige tu ciudad y accede a la misma landing visual que nuestra guía general de contrato de alquiler, con
              textos y datos estructurados orientados a tu zona. Iremos sumando más ciudades de forma gradual.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/servicios/contrato-de-alquiler"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50"
              >
                Ver guía general de contrato
              </Link>
              <Link
                href="/servicios/contrato-alquiler-lau"
                className="rounded-full border-2 border-cyan-300 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contratar LAU directamente
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <LocalCityImageCardGrid
            cities={publishedCities.map((c) => ({
              slug: c.slug,
              city: c.city,
              region: c.schemaAdministrativeArea,
              href: localContratoAlquilerHref(c.slug),
              linkLabel: "Ver landing →",
            }))}
            title="Ciudades disponibles ahora"
            description={
              <>
                Publicamos cada ciudad cuando el contenido está listo; así mantenemos calidad y evitamos lanzar decenas
                de URLs idénticas de golpe. Cada enlace lleva a una página con revisión LAU, packs temporada y
                habitación, igual que en{" "}
                <Link href="/servicios/contrato-de-alquiler" className="font-semibold text-[#1A4FBF] hover:underline">
                  /servicios/contrato-de-alquiler
                </Link>
                .
              </>
            }
          />
        </section>
      </main>
        <ServiceLandingSharedSections />

      <SiteFooter />
    </div>
  );
}
