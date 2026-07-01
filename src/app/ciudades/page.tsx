import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CIUDADES_HUB_BASE,
  CITY_HUB_TAGLINES,
  cityHubHref,
} from "@/lib/ciudades-hub";
import { HOME_COVERAGE_CITIES } from "@/lib/home-coverage-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CIUDADES_HUB_BASE}`;

export const metadata: Metadata = {
  title: "Ciudades — gestoría inmobiliaria online | Livendia",
  description:
    "Gestoría inmobiliaria en Madrid, Barcelona, Valencia, Málaga y Sevilla. Contratos, venta entre particulares y administración de alquiler con gestor asignado en toda España.",
  alternates: { canonical },
  openGraph: {
    title: "Ciudades — gestoría inmobiliaria online | Livendia",
    description:
      "Landings locales por ciudad y área metropolitana. Mismo gestor, mismos precios y panel online en toda España.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function CiudadesIndexPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Cobertura online</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Gestoría inmobiliaria por ciudad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Madrid, Valencia, Barcelona, Málaga y Sevilla — y en toda España. Mismo gestor, mismos precios y panel
              online. Las landings por ciudad te orientan; el servicio es 100 % digital con normativa estatal.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {HOME_COVERAGE_CITIES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={cityHubHref(city.slug)}
                  className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <h2 className="text-xl font-bold text-[#1E293B]">{city.name}</h2>
                  <p className="mt-2 flex-1 text-sm text-[#475569]">{CITY_HUB_TAGLINES[city.slug]}</p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-[#1A4FBF]">
                    Ver todos los servicios →
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-[#64748b]">
            ¿Tu municipio no aparece? El servicio es nacional:{" "}
            <Link href="/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
              catálogo de servicios
            </Link>{" "}
            y{" "}
            <Link href="/contacto" className="font-semibold text-[#1A4FBF] hover:underline">
              contacto con gestor
            </Link>
            .
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
