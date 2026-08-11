import Link from "next/link";
import { CiudadesIndexContent } from "@/components/ciudades-index-content";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  CIUDADES_HUB_BASE,
  cityHubHref,
  getCiudadesIndexDescription,
} from "@/lib/ciudades-hub";
import { HOME_COVERAGE_CITIES } from "@/lib/home-coverage-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

const canonical = `${getSiteUrl()}${CIUDADES_HUB_BASE}`;
const description = getCiudadesIndexDescription();

export const metadata: Metadata = {
  title: "Ciudades — servicios de gestoría inmobiliaria por ciudad | Livendia",
  description,
  alternates: { canonical },
  openGraph: {
    title: "Ciudades — gestoría inmobiliaria online | Livendia",
    description,
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function CiudadesIndexPage() {
  const pageUrl = canonical;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: getSiteUrl() },
      { "@type": "ListItem", position: 2, name: "Ciudades", item: pageUrl },
    ],
  };

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Gestoría inmobiliaria por ciudad — Livendia",
    description,
    url: pageUrl,
    numberOfItems: HOME_COVERAGE_CITIES.length,
    itemListElement: HOME_COVERAGE_CITIES.map((city, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `Gestoría inmobiliaria en ${city.name}`,
      url: `${getSiteUrl()}${cityHubHref(city.slug)}`,
    })),
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListJsonLd) }}
      />
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <nav aria-label="Breadcrumb" className="text-sm text-blue-200">
              <ol className="flex flex-wrap items-center justify-center gap-1">
                <li>
                  <Link href="/" className="hover:text-white hover:underline">
                    Inicio
                  </Link>
                </li>
                <li aria-hidden>/</li>
                <li className="font-semibold text-white">Ciudades</li>
              </ol>
            </nav>
            <p className="mt-4 text-sm font-semibold uppercase tracking-wide text-cyan-200">Cobertura online</p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Gestoría inmobiliaria por ciudad
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{description}</p>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-blue-200/90">
              Contratos de alquiler, arras, venta sin agencia, administración de alquileres y compraventa con gestor
              asignado. Mismo precio y panel online en Madrid, Barcelona, Valencia, Málaga, Sevilla y resto de España.
            </p>
          </div>
        </section>

        <CiudadesIndexContent />
      </main>
      <SiteFooter />
    </div>
  );
}
