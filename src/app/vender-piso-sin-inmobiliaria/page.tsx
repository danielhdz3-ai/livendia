import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  getPublishedVenderPisoSinInmobiliariaCities,
  getVenderPisoSinInmobiliariaPillarCityLabel,
  isVenderPisoSinInmobiliariaPillarSlug,
  localVenderPisoSinInmobiliariaHref,
  VENDER_PISO_SIN_INMOBILIARIA_BASE,
  VENDER_PISO_SIN_INMOBILIARIA_HUB,
} from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

const canonical = `${getSiteUrl()}${VENDER_PISO_SIN_INMOBILIARIA_BASE}`;

export const metadata: Metadata = {
  title: VENDER_PISO_SIN_INMOBILIARIA_HUB.metaTitle,
  description: VENDER_PISO_SIN_INMOBILIARIA_HUB.metaDescription,
  alternates: { canonical },
  keywords: [...VENDER_PISO_SIN_INMOBILIARIA_HUB.keywords],
  openGraph: {
    title: VENDER_PISO_SIN_INMOBILIARIA_HUB.metaTitle,
    description: VENDER_PISO_SIN_INMOBILIARIA_HUB.metaDescription,
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default function VenderPisoSinInmobiliariaHubPage() {
  const cities = getPublishedVenderPisoSinInmobiliariaCities();

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PublicHeader />

      <main className="flex-1">
        <section className="bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] px-4 py-16 text-white sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Venta entre particulares</p>
            <h1 className="mt-4 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
              {VENDER_PISO_SIN_INMOBILIARIA_HUB.heroH1}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-blue-50">
              {VENDER_PISO_SIN_INMOBILIARIA_HUB.heroLead}
            </p>
            <Link
              href="/servicios/servicio-completo-venta"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-bold text-[#1A4FBF] hover:bg-blue-50"
            >
              Ver servicio y contratar
              <ArrowRight className="h-5 w-5" aria-hidden />
            </Link>
          </div>
        </section>

        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="flex items-center gap-2 text-2xl font-bold text-[#1E293B]">
              <MapPin className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
              Guías por ciudad
            </h2>
            <p className="mt-3 text-[#64748b]">
              Elige tu ciudad para ver trámites locales, ahorro frente a comisiones y cómo funciona tu gestor legal en
              Livendia.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={localVenderPisoSinInmobiliariaHref(city.slug)}
                    className="group flex items-center justify-between rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 transition hover:border-[#1A4FBF] hover:bg-white"
                  >
                    <div>
                      <span className="text-lg font-semibold text-[#1E293B] group-hover:text-[#1A4FBF]">
                        {isVenderPisoSinInmobiliariaPillarSlug(city.slug)
                          ? `Guía completa: vender sin comisiones en ${getVenderPisoSinInmobiliariaPillarCityLabel(city.slug)}`
                          : `Vender sin comisiones en ${city.city}`}
                      </span>
                      <p className="mt-1 text-sm text-[#64748b]">
                        {isVenderPisoSinInmobiliariaPillarSlug(city.slug)
                          ? "Pilar editorial · proceso, documentación y ahorro"
                          : "Entre particulares con gestor legal"}
                      </p>
                    </div>
                    <ArrowRight className="h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
