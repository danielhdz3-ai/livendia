import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { AcompanamientoAlquilerLocalCityLinks } from "@/components/acompanamiento-alquiler-local-city-links";
import {
  ACOMPANAMIENTO_ALQUILER_LOCAL_BASE,
  getPublishedAcompanamientoAlquilerLocalCities,
  localAcompanamientoAlquilerHref,
} from "@/lib/acompanamiento-alquiler-local-cities";
import { ACOMPANAMIENTO_ALQUILER_PRICE_LABEL } from "@/lib/catalog.public";
import { LANDING_HERO_EYEBROW, LANDING_HERO_GRADIENT, LANDING_HUB_EYEBROW, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

const canonical = `${getSiteUrl()}${ACOMPANAMIENTO_ALQUILER_LOCAL_BASE}`;

export const revalidate = 300;

export const metadata: Metadata = {
  title: `Acompañamiento de alquiler por ciudad — ${ACOMPANAMIENTO_ALQUILER_PRICE_LABEL}`,
  description: `Landings locales del acompañamiento de alquiler (${ACOMPANAMIENTO_ALQUILER_PRICE_LABEL} IVA incl.): Les Corts, L'Hospitalet, Madrid y Valencia. Gestor, fianza y normativa local.`,
  alternates: { canonical },
};

export default function AcompanamientoAlquilerLocalHubPage() {
  const cities = getPublishedAcompanamientoAlquilerLocalCities();

  return (
    <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
      <PublicHeader />
      <main className="flex-1">
        <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6`}>
          <div className="mx-auto max-w-6xl">
            <p className={LANDING_HERO_EYEBROW}>{LANDING_HUB_EYEBROW.acompanamientoAlquiler}</p>
            <p className="mt-2 text-sm text-blue-100">
              <Link href="/servicios/acompanamiento-alquiler" className="hover:underline">
                ← Acompañamiento de alquiler
              </Link>
            </p>
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Acompañamiento de alquiler por ciudad
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-blue-100">
              Misma tarifa ({ACOMPANAMIENTO_ALQUILER_PRICE_LABEL} IVA incl.) con contexto local de fianza y normativa
              en cada zona.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <AcompanamientoAlquilerLocalCityLinks className="justify-start" />
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {cities.map((c) => (
              <li key={c.slug}>
                <Link
                  href={localAcompanamientoAlquilerHref(c.slug)}
                  className="block rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
                >
                  <h2 className="text-lg font-bold text-[#1E293B]">{c.placeLabel}</h2>
                  <p className="mt-2 line-clamp-3 text-sm text-[#64748b]">{c.heroLead}</p>
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
