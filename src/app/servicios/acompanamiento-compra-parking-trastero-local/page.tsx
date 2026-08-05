import { AcompanamientoCompraParkingTrasteroLocalCityLinks } from "@/components/acompanamiento-compra-parking-trastero-local-city-links";
import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { SiteFooter } from "@/components/site-footer";
import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE,
  getPublishedParkingTrasteroLocalCities,
  localAcompanamientoCompraParkingTrasteroHref,
} from "@/lib/acompanamiento-compra-parking-trastero-local-cities";
import { ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Compra parking o trastero por ciudad | Gestor Livendia 298 €",
  description:
    "Landings locales para comprar plaza de garaje o trastero en Madrid, Barcelona y barrios (Eixample, Gràcia, Poblenou…). Gestor integral, comparativa de ahorro vs agencia y testimonios.",
  alternates: { canonical },
  openGraph: {
    title: "Compra parking o trastero por ciudad | Livendia",
    description: `Acompañamiento integral por ${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} IVA incl.: notaría, ITP y registro.`,
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function AcompanamientoCompraParkingTrasteroLocalIndexPage() {
  const published = getPublishedParkingTrasteroLocalCities();
  const madrid = published.filter((c) => c.slug === "madrid");
  const barcelonaCity = published.filter((c) => c.slug === "barcelona");
  const barcelonaBarrios = published.filter((c) => c.slug.startsWith("barcelona-"));

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1A4FBF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · Parking y trastero</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Compra parking o trastero con gestor en tu ciudad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Madrid, Barcelona y barrios del Eixample, Gràcia, Poblenou, Sants, Sarrià y Sant Martí. Mismo servicio
              nacional de{" "}
              <Link
                href="/servicios/acompanamiento-compra-parking-trastero"
                className="font-semibold underline-offset-2 hover:underline"
              >
                {ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL}
              </Link>
              : testimonios, calculadora de ahorro vs agencia y FAQ local.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1E293B]">Madrid</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {madrid.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localAcompanamientoCompraParkingTrasteroHref(c.slug)}
                  className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                >
                  <span className="text-lg font-bold text-[#1E293B]">{c.city}</span>
                  <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">Ver landing →</span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 text-2xl font-bold text-[#1E293B]">Barcelona ciudad</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {barcelonaCity.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localAcompanamientoCompraParkingTrasteroHref(c.slug)}
                  className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                >
                  <span className="text-lg font-bold text-[#1E293B]">{c.city}</span>
                  <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">Ver landing →</span>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-14 text-2xl font-bold text-[#1E293B]">Barrios de Barcelona</h2>
          <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {barcelonaBarrios.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localAcompanamientoCompraParkingTrasteroHref(c.slug)}
                  className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                >
                  <span className="text-lg font-bold text-[#1E293B]">{c.city}</span>
                  <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">Ver landing →</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-14">
            <AcompanamientoCompraParkingTrasteroLocalCityLinks />
          </div>
        </section>
      </main>
        <ClientPlatformShowcase />

      <SiteFooter />
    </div>
  );
}
