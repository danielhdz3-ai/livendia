import Link from "next/link";
import {
  BARCELONA_METRO_CONTRATO_ALQUILER_SLUG_SET,
  getPublishedBarcelonaMetroContratoAlquilerLinks,
  type BarcelonaMetroContratoAlquilerSlug,
} from "@/lib/barcelona-metro-contrato-alquiler-slugs";
import {
  REDACTAR_CONTRATO_ALQUILER_BASE,
  getPublishedRedactarContratoAlquilerLocalCities,
  localRedactarContratoAlquilerHref,
} from "@/lib/redactar-contrato-alquiler-local-cities";

type Props = {
  currentSlug?: string;
  className?: string;
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer" | "landing";
};

export function RedactarContratoAlquilerLocalCityLinks({
  currentSlug,
  className = "",
  showTitle = true,
  variant = "default",
}: Props) {
  const cities = getPublishedRedactarContratoAlquilerLocalCities();
  const publishedSlugs = new Set(cities.map((c) => c.slug));
  const primaryCities = cities.filter((c) => !BARCELONA_METRO_CONTRATO_ALQUILER_SLUG_SET.has(c.slug));
  const metroLinks = getPublishedBarcelonaMetroContratoAlquilerLinks(
    publishedSlugs,
    (slug) => localRedactarContratoAlquilerHref(slug),
  );

  if (variant === "landing") {
    return (
      <nav
        aria-label="Redactar contrato de alquiler por ciudad"
        className={`flex flex-wrap justify-center gap-2 ${className}`}
      >
        {cities.map((c) => {
          const active = c.slug === currentSlug;
          return (
            <Link
              key={c.slug}
              href={localRedactarContratoAlquilerHref(c.slug)}
              className={
                active
                  ? "rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white"
                  : "rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] hover:border-[#1A4FBF]/40"
              }
              aria-current={active ? "page" : undefined}
            >
              {c.placeLabel}
            </Link>
          );
        })}
      </nav>
    );
  }

  const isFooter = variant === "footer";
  const isCompact = variant === "compact" || isFooter;

  const linkClass = isCompact
    ? "text-[11px] text-blue-100 underline-offset-2 hover:text-white hover:underline"
    : "rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1E293B] shadow ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]";

  const metroLinkClass = isCompact
    ? linkClass
    : "rounded-full bg-[#EFF6FF] px-3 py-1 text-sm font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] transition hover:bg-blue-100";

  const wrapClass = isCompact ? "flex flex-wrap gap-x-2 gap-y-1" : "flex flex-wrap gap-2";

  return (
    <div className={isCompact ? "min-w-0 space-y-1.5" : "space-y-4"}>
      {showTitle ? (
        <p
          className={
            isFooter
              ? "text-[10px] font-bold uppercase leading-snug tracking-wide text-cyan-300"
              : variant === "compact"
                ? "text-[11px] font-bold uppercase tracking-wider text-cyan-300"
                : "text-sm font-semibold text-[#1E293B]"
          }
        >
          {isFooter ? "Redactar contrato por ciudad" : "Redactar contrato de alquiler por ciudad"}
        </p>
      ) : null}
      <nav aria-label="Redactar contrato de alquiler por ciudad en España" className={wrapClass}>
        {primaryCities.map((c) => (
          <Link key={c.slug} href={localRedactarContratoAlquilerHref(c.slug)} className={linkClass}>
            {c.placeLabel}
          </Link>
        ))}
      </nav>

      {metroLinks.length > 0 ? (
        !isFooter ? (
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">
              Área metropolitana de Barcelona
            </p>
            <nav aria-label="Redactar contrato área metropolitana Barcelona" className={wrapClass}>
              {metroLinks.map((m) => (
                <Link key={m.slug} href={m.href} className={metroLinkClass}>
                  {m.shortName}
                </Link>
              ))}
            </nav>
          </div>
        ) : (
          <nav aria-label="Redactar contrato área metropolitana Barcelona" className={wrapClass}>
            {metroLinks.map((m) => (
              <Link key={m.slug} href={m.href} className={linkClass}>
                {m.shortName}
              </Link>
            ))}
          </nav>
        )
      ) : null}

      <Link
        href={REDACTAR_CONTRATO_ALQUILER_BASE}
        className={
          isCompact
            ? "inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#1A4FBF] hover:underline"
        }
      >
        {isFooter ? "Índice →" : "Ver página índice de ciudades →"}
      </Link>
    </div>
  );
}
