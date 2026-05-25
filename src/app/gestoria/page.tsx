import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  getPublishedGestoriaInmobiliariaLocalCities,
  localGestoriaInmobiliariaHref,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${GESTORIA_INMOBILIARIA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Gestoría inmobiliaria por ciudad | Livendia",
  description:
    "Landings locales con compraventa (424 € y 666 €), contratos LAU/arras (120-145 €) y administración de alquileres 49 €/mes. Precios fijos y JSON-LD LegalService.",
  alternates: { canonical },
  openGraph: {
    title: "Gestoría inmobiliaria por ciudad | Livendia",
    description:
      "Compraventa, contratos y administración de alquileres por ciudad. Piloto: Zaragoza, Alicante y Murcia.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function GestoriaIndexPage() {
  const publishedCities = getPublishedGestoriaInmobiliariaLocalCities();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · Piloto</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Gestoría inmobiliaria por ciudad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Cada landing integra compraventa entre particulares, redacción de contratos legales y administración
              mensual del alquiler con precios fijos y marcado Schema.org LegalService + Product.
            </p>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1E293B]">Ciudades piloto publicadas</h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publishedCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localGestoriaInmobiliariaHref(c.slug)}
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
      </main>
      <SiteFooter />
    </div>
  );
}
