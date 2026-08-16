import Link from "next/link";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  SERVICIO_COMPLETO_VENTA_LOCAL_BASE,
  getPublishedServicioCompletoVentaLocalCities,
  localServicioCompletoVentaHref,
} from "@/lib/servicio-completo-venta-local-cities";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_HUB_EYEBROW, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${SERVICIO_COMPLETO_VENTA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: "Vender piso sin agencia por ciudad | Acompañamiento de venta Livendia",
  description:
    "Vende entre particulares con gestor inmobiliario especializado: Madrid, Barcelona y Valencia. Reserva, arras y escritura. 890 € IVA incl. Sin comisiones del 3–5 %.",
  alternates: { canonical },
  openGraph: {
    title: "Vender sin agencia por ciudad",
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
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <PublicHeader />
      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-4xl text-center">
            <p className={LANDING_HERO_EYEBROW}>{LANDING_HUB_EYEBROW.venta}</p>
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
              className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50"
            >
              Ver ficha del servicio
            </Link>
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <LocalCityImageCardGrid
            cities={publishedCities.map((c) => ({
              slug: c.slug,
              city: c.city,
              region: c.schemaAdministrativeArea,
              href: localServicioCompletoVentaHref(c.slug),
              linkLabel: `Vender en ${c.city} con gestor →`,
            }))}
            title="Ciudades disponibles"
            description="Contenido único por mercado: por qué vender sin agencia, comparativa de costes y proceso con gestor asignado."
            listClassName="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          />
        </section>
      </main>
        <ServiceLandingSharedSections />

      <SiteFooter />
    </div>
  );
}
