import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { HOME_COVERAGE_CITIES, HOME_CITY_CARD_IMAGES } from "@/lib/home-coverage-cities";
import { CIUDADES_HUB_BASE, CITY_HUB_TAGLINES, cityHubHref } from "@/lib/ciudades-hub";

type HomeCoverageCitiesProps = {
  /** teaser = home (5 tarjetas); compact = páginas internas (pills). */
  variant?: "teaser" | "compact";
};

export function HomeCoverageCities({ variant = "teaser" }: HomeCoverageCitiesProps) {
  const compact = variant === "compact";

  return (
    <section
      className={
        compact
          ? "border-t border-slate-200 bg-[#F8FAFC] py-10 sm:py-12"
          : "border-b border-slate-200 bg-white py-12 sm:py-16"
      }
      aria-labelledby="cobertura-ciudades"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
            <MapPin className="h-4 w-4" aria-hidden />
            Cobertura online
          </p>
          <h2 id="cobertura-ciudades" className="mt-3 text-2xl font-bold text-[#1E293B] sm:text-3xl">
            Operamos en Madrid, Valencia, Barcelona, Málaga y Sevilla — y en toda España
          </h2>
          <p className="mt-3 text-[#475569]">
            Mismo gestor, mismos precios y panel online. Las landings por ciudad te orientan; el servicio es 100 %
            digital con normativa estatal (LAU, arras, compraventa).
          </p>
        </div>

        {compact ? (
          <nav
            aria-label="Ciudades con servicios locales"
            className="mt-8 flex flex-wrap justify-center gap-2"
          >
            {HOME_COVERAGE_CITIES.map((city) => (
              <Link
                key={city.slug}
                href={cityHubHref(city.slug)}
                className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
              >
                {city.name}
              </Link>
            ))}
          </nav>
        ) : (
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {HOME_COVERAGE_CITIES.map((city) => (
              <li key={city.slug}>
                <Link
                  href={cityHubHref(city.slug)}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-0.5 hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <div className="relative h-32 overflow-hidden bg-slate-100 sm:h-36">
                    <Image
                      src={HOME_CITY_CARD_IMAGES[city.slug]}
                      alt={`Gestoría inmobiliaria en ${city.name}`}
                      fill
                      className="object-cover transition duration-300 group-hover:scale-105"
                      sizes="(max-width: 640px) 50vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A6B]/60 via-[#0F2A6B]/15 to-transparent" />
                    <h3 className="absolute bottom-3 left-4 text-lg font-bold text-white drop-shadow-sm">
                      {city.name}
                    </h3>
                  </div>
                  <div className="flex flex-1 flex-col p-4 sm:p-5">
                    <p className="flex-1 text-sm leading-relaxed text-[#64748b]">{CITY_HUB_TAGLINES[city.slug]}</p>
                    <span className="mt-4 text-sm font-semibold text-[#1A4FBF]">Ver servicios →</span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}

        <p className="mt-8 text-center">
          <Link
            href={CIUDADES_HUB_BASE}
            className="text-sm font-semibold text-[#1A4FBF] hover:underline"
          >
            Ver todas las ciudades y área metropolitana →
          </Link>
        </p>
      </div>
    </section>
  );
}
