import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { AdministracionAlquilerTemporadaLocalCityLinks } from "@/components/administracion-alquiler-temporada-local-city-links";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedAdministracionAlquilerTemporadaLocalCities,
  localAdministracionAlquilerTemporadaHref,
} from "@/lib/administracion-alquiler-temporada-local-cities";
import { ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL } from "@/lib/catalog.public";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_HUB_EYEBROW, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}${ADMINISTRACION_ALQUILER_TEMPORADA_LOCAL_BASE}`;

export const revalidate = 300;

export const metadata: Metadata = {
  title: `Admin. temporada y habitaciones por ciudad — ${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL}`,
  description: `Landings locales de administración de alquiler por temporada o habitaciones (${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL} IVA incl.): Madrid, Barcelona, Valencia, Mallorca, Málaga y Sevilla.`,
  alternates: { canonical },
};

export default function AdministracionAlquilerTemporadaLocalHubPage() {
  const cities = getPublishedAdministracionAlquilerTemporadaLocalCities();

  return (
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <PublicHeader />
      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-6xl">
            <p className={LANDING_HERO_EYEBROW}>{LANDING_HUB_EYEBROW.adminTemporada}</p>
            <p className="mt-2 text-sm text-blue-100">
              <Link href="/servicios/administracion-alquiler-temporada" className="hover:underline">
                ← Administración temporada / habitaciones
              </Link>
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Administración de alquiler por temporada o habitaciones por ciudad
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-100">
              Misma tarifa ({ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL} IVA incl.) con contexto local de
              mercado, barrios y normativa en cada zona.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <AdministracionAlquilerTemporadaLocalCityLinks className="justify-start" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localAdministracionAlquilerTemporadaHref(c.slug)}
                  className="block h-full rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
                >
                  <h2 className="text-lg font-bold text-[#1E293B]">{c.placeLabel}</h2>
                  <p className="mt-2 line-clamp-4 text-sm text-[#64748b]">{c.heroLead}</p>
                  <span className="mt-4 inline-block text-sm font-semibold text-[#1A4FBF]">Ver landing →</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <ServiceLandingSharedSections />
      <SiteFooter variant="landing" />
    </div>
  );
}
