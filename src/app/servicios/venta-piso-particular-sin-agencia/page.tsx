import Link from "next/link";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { VentaPisoParticularSinAgenciaLocalCityLinks } from "@/components/venta-piso-particular-sin-agencia-local-city-links";
import {
  getPublishedVentaPisoParticularCities,
  localVentaPisoParticularSinAgenciaHref,
  VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE,
} from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import { SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { MapPin } from "lucide-react";

const canonical = `${getSiteUrl()}${VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE}`;

export const metadata: Metadata = {
  title: `Venta de piso de particular sin agencia — área Barcelona`,
  description: `¿Ya tienes comprador? Gestor inmobiliario Livendia coordina arras, documentación y notaría. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. Sin comisión. Hospitalet, Cornellà, Esplugues, Sabadell, Terrassa.`,
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Venta entre particulares sin agencia — Livendia`,
    description: `Acompañamiento de venta para propietarios con comprador ya encontrado. Área metropolitana de Barcelona.`,
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function VentaPisoParticularSinAgenciaHubPage() {
  const cities = getPublishedVentaPisoParticularCities();

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-[#F4E4A6]">
              Vendedores particulares · Comprador ya encontrado
            </p>
            <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
              Venta de piso de particular sin agencia
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              Livendia no busca comprador ni cobra comisión. Asignamos un gestor inmobiliario que coordina toda
              la gestión documental hasta la firma en notaría — {SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.
            </p>
          </div>
        </section>

        <section className="px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[#1E293B]">
              <MapPin className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
              Área metropolitana de Barcelona
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={localVentaPisoParticularSinAgenciaHref(city.slug)}
                    className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 hover:ring-[#1A4FBF]/40"
                  >
                    <p className="font-bold text-[#1E293B]">{city.city}</p>
                    <p className="mt-2 text-sm text-[#64748b]">{city.metaDescription.slice(0, 120)}…</p>
                    <span className="mt-3 inline-block text-sm font-semibold text-[#1A4FBF]">
                      Ver landing →
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <VentaPisoParticularSinAgenciaLocalCityLinks variant="inline" />
      </main>
        <ServiceLandingSharedSections />

      <SiteFooter />
    </div>
  );
}
