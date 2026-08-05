import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { SiteFooter } from "@/components/site-footer";
import {
  COMPRA_LOCAL_BARCELONA_METRO_CITIES,
  barcelonaMetroCompraHref,
} from "@/lib/compra-local-barcelona-metro";
import {
  SERVICIO_COMPLETO_COMPRA_LOCAL_BASE,
  getPublishedServicioCompletoCompraLocalCities,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${SERVICIO_COMPLETO_COMPRA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Servicio completo de compra por ciudad | Gestor experto Livendia",
  description:
    "¿Necesitas comprar con todas las garantías? Acompañamiento desde reserva a escritura en Madrid, Barcelona, Cataluña (L'Hospitalet, Sabadell, Terrassa…), Valencia, Bilbao, Málaga, Sevilla y más. Gestor inmobiliario experto para compradores particulares.",
  alternates: { canonical },
  openGraph: {
    title: "Servicio completo de compra por ciudad | Livendia",
    description:
      "Compra tu vivienda con gestor dedicado: revisión documental, arras y escritura con seguridad.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function ServicioCompletoCompraLocalIndexPage() {
  const publishedCities = getPublishedServicioCompletoCompraLocalCities();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · Compra</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              ¿Necesitas comprar con todas las garantías para ti?
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Landings por ciudad con la misma estructura que el{" "}
              <Link
                href="/servicios/servicio-completo-compra"
                className="font-semibold underline-offset-2 hover:underline"
              >
                servicio completo de compra
              </Link>
              : gestor experto, revisión de reserva y arras, y acompañamiento hasta escritura.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/servicios/servicio-completo-compra"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] hover:bg-blue-50"
              >
                Ver servicio completo
              </Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1E293B]">Ciudades disponibles ahora</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publishedCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localServicioCompletoCompraHref(c.slug)}
                  className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                >
                  <span className="text-lg font-bold text-[#1E293B]">{c.city}</span>
                  <span className="mt-1 block text-sm text-[#64748b]">{c.schemaAdministrativeArea}</span>
                  <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">Ver landing →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
            <div className="rounded-2xl border border-[#1A4FBF]/20 bg-gradient-to-br from-[#EFF6FF] to-white p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">Cataluña · Área metropolitana</p>
              <h2 className="mt-2 text-2xl font-bold text-[#1E293B]">Compra entre particulares en Cataluña: Baix Llobregat, Vallès y Sant Andreu</h2>
              <p className="mt-3 max-w-3xl text-[#475569]">
                Además de{" "}
                <Link href={localServicioCompletoCompraHref("barcelona")} className="font-semibold text-[#1A4FBF] hover:underline">
                  Barcelona capital
                </Link>
                , publicamos landings de compra con gestor experto bajo{" "}
                <strong className="text-[#1E293B]">Codi civil de Catalunya</strong> (arras 621-4 a 621-9 y cláusula
                621-49 para hipoteca): comarca del Baix Llobregat, distrito de{" "}
                <strong className="text-[#1E293B]">Sant Andreu (barrio de Barcelona)</strong> y municipios del Vallès.
              </p>
              <nav aria-label="Compra completa área metropolitana Barcelona" className="mt-6 flex flex-wrap gap-2">
                {COMPRA_LOCAL_BARCELONA_METRO_CITIES.map((c) => (
                  <Link
                    key={c.slug}
                    href={barcelonaMetroCompraHref(c.slug)}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]"
                  >
                    {c.shortName}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </section>
      </main>
        <ClientPlatformShowcase />

      <SiteFooter />
    </div>
  );
}
