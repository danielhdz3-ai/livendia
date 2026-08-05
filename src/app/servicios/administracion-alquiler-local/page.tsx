import Link from "next/link";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getPublishedAdministracionAlquilerLocalCities,
  localAdministracionAlquilerHref,
} from "@/lib/administracion-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${ADMINISTRACION_ALQUILER_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Administración de alquiler por ciudad | Livendia",
  description:
    "Delegación profesional ante el arrendatario: incidencias, mediación y seguimiento. Landings locales con el mismo tono Livendia; nuevas ciudades se van publicando de forma gradual.",
  alternates: { canonical },
  openGraph: {
    title: "Administración de alquiler por ciudad | Livendia",
    description:
      "Intermediarios con tu inquilino desde 49 €/mes, sin permanencia. Elige ciudad y revisa contenido específico con datos estructurados.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function AdministracionAlquilerLocalIndexPage() {
  const publishedCities = getPublishedAdministracionAlquilerLocalCities();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · España</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Administración profesional del alquiler por ciudad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Cada ciudad enlaza la misma estructura que{" "}
              <Link href="/servicios/administracion-alquiler" className="font-semibold text-white underline underline-offset-2 hover:text-cyan-200">
                /servicios/administracion-alquiler
              </Link>
              , con párrafos y testimonios orientados al mercado local. Expandimos territorio poco a poco para mantener calidad editorial.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/servicios/administracion-alquiler"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] hover:bg-blue-50"
              >
                Ver servicio nacional
              </Link>
              <Link
                href="/contacto"
                className="rounded-full border-2 border-cyan-300 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Hablar antes de contratar
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
              href: localAdministracionAlquilerHref(c.slug),
              linkLabel: "Ver landing →",
            }))}
            title="Ciudades disponibles ahora"
            description="Publicamos ciudad a ciudad cuando el texto está revisado y el JSON-LD coherente. Así Google y los usuarios encuentran contenido específico, no duplicados en masa sin matiz territorial."
          />
        </section>
      </main>
        <ServiceLandingSharedSections />

      <SiteFooter />
    </div>
  );
}
