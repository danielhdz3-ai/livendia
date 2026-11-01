import Link from "next/link";
import type { HomeCoverageCitySlug } from "@/lib/home-coverage-cities";
import {
  getSeoCityPrimaryLandings,
  getSeoPrimaryLandingCityBlocks,
} from "@/lib/seo-city-primary-landings";
import { ArrowRight, MapPinned } from "lucide-react";

type Props = {
  /** Más compacto en /precios */
  variant?: "default" | "compact";
  id?: string;
};

export function SeoCityPrimaryLandingsSection({ variant = "default", id = "compraventa-por-ciudad" }: Props) {
  const blocks = getSeoPrimaryLandingCityBlocks();
  if (blocks.length === 0) return null;

  const compact = variant === "compact";

  return (
    <section
      id={id}
      className={`scroll-mt-24 border-b border-slate-200 bg-white ${compact ? "px-4 py-10 sm:px-6" : "px-4 py-14 sm:px-6"}`}
      aria-labelledby={`${id}-title`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex items-start gap-3">
          <MapPinned className="mt-1 h-8 w-8 shrink-0 text-[#1A4FBF]" aria-hidden />
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
              Enlazado interno · anti-canibalización
            </p>
            <h2
              id={`${id}-title`}
              className={`mt-2 font-extrabold text-[#1E293B] ${compact ? "text-xl sm:text-2xl" : "text-2xl sm:text-3xl"}`}
            >
              ¿Vendes o compras? Landings principales por ciudad
            </h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#64748b] sm:text-base">
              Cada enlace apunta a la URL que queremos posicionar: guía SEO de venta o compra, pack arras a 495 € cuando
              aplica, servicio integral a 890 € e índice de gestoría compraventa. Refuerza el rastreo desde home y
              precios hacia las páginas prioritarias en Google Search Console.
            </p>
          </div>
        </div>

        <ul className={`mt-10 grid gap-6 ${compact ? "sm:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-2 xl:grid-cols-3"}`}>
          {blocks.map(({ cityName, links }) => (
            <li
              key={cityName}
              className="flex flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 sm:p-6"
            >
              <h3 className="text-lg font-bold text-[#1E293B]">{cityName}</h3>
              <ul className="mt-4 flex flex-1 flex-col gap-2">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex flex-col rounded-xl border border-transparent bg-white px-3 py-2.5 transition hover:border-[#1A4FBF]/30 hover:shadow-sm"
                    >
                      <span className="text-sm font-semibold text-[#1E293B] group-hover:text-[#1A4FBF]">
                        {link.label}
                      </span>
                      <span className="mt-0.5 text-xs font-medium text-[#64748b]">{link.priceHint}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <p className="mt-8 text-center text-sm text-[#64748b]">
          <Link href="/ciudades" className="inline-flex items-center gap-1 font-semibold text-[#1A4FBF] hover:underline">
            Ver hub de ciudades y área metropolitana
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </p>
      </div>
    </section>
  );
}

/** Bloque canónico compraventa en hub /ciudades/[slug]. */
export function SeoCityPrimaryLandingsForCity({
  citySlug,
  cityName,
}: {
  citySlug: HomeCoverageCitySlug;
  cityName: string;
}) {
  const block = getSeoCityPrimaryLandings(citySlug);
  if (!block || block.links.length === 0) return null;

  return (
    <section
      className="rounded-2xl border border-[#1A4FBF]/20 bg-[#EFF6FF] p-6 sm:p-8"
      aria-labelledby={`ciudad-${citySlug}-compraventa-title`}
    >
      <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">URLs prioritarias · compraventa</p>
      <h2 id={`ciudad-${citySlug}-compraventa-title`} className="mt-2 text-xl font-extrabold text-[#1E293B]">
        Vender o comprar en {cityName} — landings principales
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
        Enlaces canónicos para indexación: guía SEO, pack 495 €, servicio 890 € e índice gestoría. Evita competir entre
        URLs del mismo clúster.
      </p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2">
        {block.links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="flex h-full flex-col rounded-xl border border-slate-200 bg-white px-4 py-3 transition hover:border-[#1A4FBF]/40 hover:shadow-sm"
            >
              <span className="text-sm font-semibold text-[#1E293B]">{link.label}</span>
              <span className="mt-1 text-xs text-[#64748b]">{link.priceHint}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
