import Link from "next/link";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE,
  getPublishedContratoEntreParticularesLocalCities,
  localContratoEntreParticularesHref,
} from "@/lib/contrato-entre-particulares-local-cities";
import { CONTRATO_ALQUILER_LAU_PRICE_LABEL } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CONTRATO_ENTRE_PARTICULARES_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: `Contratos entre particulares por ciudad — desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} | Livendia`,
  description:
    `Contratos inmobiliarios entre particulares: alquiler LAU, arras y habitación desde ${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl. Gestoría Livendia — no agencia, no comisiones.`,
  alternates: { canonical },
  openGraph: {
    title: "Contratos entre particulares por ciudad | Livendia",
    description: "Alquiler, arras y habitación entre particulares con gestoría a precio cerrado.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function ContratoEntreParticularesLocalIndexPage() {
  const cities = getPublishedContratoEntreParticularesLocalCities();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Para particulares</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contratos entre particulares — alquiler, arras y habitación
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              ¿Alquilas, vendes o compras entre particulares y no quieres una plantilla de internet? Elige tu ciudad:
              gestoría profesional desde {CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl., sin comisión de agencia.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/servicios/contrato-alquiler-lau"
                className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1E3A8A] hover:bg-blue-50"
              >
                Contrato LAU nacional
              </Link>
              <Link
                href="/servicios/contrato-arras-penitenciales"
                className="rounded-full border-2 border-white px-6 py-3 text-sm font-semibold hover:bg-white/10"
              >
                Arras penitenciales
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <LocalCityImageCardGrid
            title="Ciudades con landing de contratos entre particulares"
            cities={cities.map((c) => ({
              slug: c.slug,
              city: c.city,
              region: c.schemaAdministrativeArea,
              href: localContratoEntreParticularesHref(c.slug),
              linkLabel: "Contratos entre particulares →",
            }))}
          />
        </section>
      </main>
      <ServiceLandingSharedSections />
      <SiteFooter />
    </div>
  );
}
