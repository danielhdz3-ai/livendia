import Link from "next/link";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  getPublishedContratoArrasLocalCities,
  localContratoArrasHref,
} from "@/lib/contrato-arras-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CONTRATO_ARRAS_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Contrato de arras por ciudad en España | Livendia",
  description:
    "¿Necesitas redactar un contrato de arras por un profesional? Landings locales con revisión de penitenciales y confirmatorias. Publicamos ciudades de forma gradual.",
  alternates: { canonical },
  openGraph: {
    title: "Contrato de arras por ciudad en España | Livendia",
    description:
      "Revisión profesional de contratos de arras antes de firmar: penitenciales y confirmatorias con proceso digital.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function ContratoArrasLocalIndexPage() {
  const publishedCities = getPublishedContratoArrasLocalCities();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · Arras</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              ¿Necesitas redactar un contrato de arras por un profesional?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Misma estructura visual que nuestra{" "}
              <Link href="/servicios/contrato-de-arras" className="font-semibold underline-offset-2 hover:underline">
                guía general de contrato de arras
              </Link>
              , con textos orientados a cada ciudad. Sumamos nuevas ubicaciones poco a poco.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/servicios/contrato-de-arras"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] hover:bg-blue-50"
              >
                Ver guía general de arras
              </Link>
              <Link
                href="/servicios/contrato-arras-penitenciales"
                className="rounded-full border-2 border-cyan-300 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Contratar penitenciales
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
              href: localContratoArrasHref(c.slug),
              linkLabel: "Ver landing →",
            }))}
            title="Ciudades disponibles ahora"
            description={
              <>
                Cada página enlaza a los mismos servicios de <strong>arras penitenciales</strong> y{" "}
                <strong>confirmatorias</strong> que en Livendia, con texto local para SEO.
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
