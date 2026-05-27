import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedContratoAlquilerTemporadaLocalCities,
  localContratoAlquilerTemporadaHref,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Contrato de alquiler por temporada por ciudad | Livendia",
  description:
    "Landings locales para arrendamientos temporales: estancias estacionales, trabajo o segunda residencia. Redacción gestor desde 120 € IVA incl.",
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
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · Temporada</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Contrato de alquiler por temporada por ciudad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Misma base que{" "}
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
          <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publishedCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localContratoAlquilerTemporadaHref(c.slug)}
                  className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                >
                  <span className="text-lg font-bold text-[#1E293B]">
                    {c.slug === "mallorca" ? "Mallorca" : c.city}
                  </span>
                  <span className="mt-1 block text-sm text-[#64748b]">{c.schemaAdministrativeArea}</span>
                  <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">Ver landing →</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
