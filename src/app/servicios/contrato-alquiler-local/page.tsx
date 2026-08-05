import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATO_ALQUILER_LOCAL_BASE,
  getPublishedContratoAlquilerLocalCities,
  localContratoAlquilerHref,
} from "@/lib/contrato-alquiler-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CONTRATO_ALQUILER_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Contrato de alquiler por ciudad en España | Livendia",
  description:
    "¿Quieres redactar un contrato de alquiler por expertos? Landings locales con revisión LAU, inventario y asesoramiento. Publicamos nuevas ciudades de forma gradual.",
  alternates: { canonical },
  openGraph: {
    title: "Contrato de alquiler por ciudad en España | Livendia",
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
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · España</p>
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
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] hover:bg-blue-50"
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
          <h2 className="text-2xl font-bold text-[#1E293B]">Ciudades disponibles ahora</h2>
          <p className="mt-2 max-w-3xl text-[#64748b]">
            Publicamos cada ciudad cuando el contenido está listo; así mantenemos calidad y evitamos lanzar decenas de
            URLs idénticas de golpe. Cada enlace lleva a una página con revisión LAU, packs temporada y habitación,
            igual que en{" "}
            <Link href="/servicios/contrato-de-alquiler" className="font-semibold text-[#1A4FBF] hover:underline">
              /servicios/contrato-de-alquiler
            </Link>
            .
          </p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {publishedCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localContratoAlquilerHref(c.slug)}
                  className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                >
                  <span className="text-lg font-bold text-[#1E293B]">{c.city}</span>
                  <span className="mt-1 block text-sm text-[#64748b]">{c.schemaAdministrativeArea}</span>
                  <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">
                    Ver landing →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
        <ClientPlatformShowcase />

      <SiteFooter />
    </div>
  );
}
