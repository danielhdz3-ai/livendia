import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { SiteFooter } from "@/components/site-footer";
import {
  SERVICIO_COMPLETO_VENTA_LOCAL_BASE,
  getPublishedServicioCompletoVentaLocalCities,
  localServicioCompletoVentaHref,
} from "@/lib/servicio-completo-venta-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Vender piso sin agencia por ciudad | Acompañamiento de venta Livendia",
  description:
    "Vende entre particulares con gestor inmobiliario especializado: Madrid, Barcelona y Valencia. Reserva, arras y escritura. 890 € IVA incl. Sin comisiones del 3–5 %.",
  alternates: { canonical },
  openGraph: {
    title: "Vender sin agencia por ciudad | Livendia",
    description:
      "Acompañamiento de venta de vivienda con gestor experto. Evita honorarios elevados de agencia inmobiliaria.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function ServicioCompletoVentaLocalIndexPage() {
  const publishedCities = getPublishedServicioCompletoVentaLocalCities();

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-cyan-200">SEO local · Venta</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Vender tu piso sin agencia, con gestor inmobiliario
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Landings por ciudad del{" "}
              <Link
                href="/servicios/servicio-completo-venta"
                className="font-semibold underline-offset-2 hover:underline"
              >
                servicio completo de venta
              </Link>
              : acompañamiento desde reserva hasta escritura cuando ya tienes comprador particular.
            </p>
            <Link
              href="/servicios/servicio-completo-venta"
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] hover:bg-blue-50"
            >
              Ver ficha del servicio
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <h2 className="text-2xl font-bold text-[#1E293B]">Ciudades disponibles</h2>
          <p className="mt-2 text-[#64748b]">
            Contenido único por mercado: por qué vender sin agencia, comparativa de costes y proceso con gestor
            asignado.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {publishedCities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localServicioCompletoVentaHref(c.slug)}
                  className="block rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                >
                  <span className="text-xl font-bold text-[#1E293B]">{c.city}</span>
                  <span className="mt-1 block text-sm text-[#64748b]">{c.schemaAdministrativeArea}</span>
                  <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">
                    Vender en {c.city} con gestor →
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
