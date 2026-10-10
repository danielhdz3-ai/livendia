import Link from "next/link";
import {
  CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE,
  getPublishedContratoAlquilerTemporadaLocalCities,
  localContratoAlquilerTemporadaHref,
} from "@/lib/contrato-alquiler-temporada-local-cities";
import { TEMPORADA_BCN_BARRIO_HUB } from "@/lib/contrato-alquiler-temporada-bcn-barrios";

type Props = {
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer";
};

export function ContratoAlquilerTemporadaLocalCityLinks({
  showTitle = true,
  variant = "default",
}: Props) {
  const cities = getPublishedContratoAlquilerTemporadaLocalCities();
  const barrioSlugs = new Set(TEMPORADA_BCN_BARRIO_HUB.map((b) => b.slug));
  const cityLinks = cities.filter((c) => !barrioSlugs.has(c.slug));
  const isFooter = variant === "footer";
  const isCompact = variant === "compact" || isFooter;

  const linkClass = isCompact
    ? "text-[11px] text-blue-100 underline-offset-2 hover:text-white hover:underline"
    : "rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1E293B] shadow ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]";

  const wrapClass = isCompact ? "flex flex-wrap gap-x-2 gap-y-1" : "flex flex-wrap gap-2";

  const metroLinkClass = isCompact
    ? linkClass
    : "rounded-full bg-[#EFF6FF] px-3 py-1 text-sm font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] transition hover:bg-blue-100";

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
          {isFooter ? "Temporada por ciudad" : "Contrato de alquiler por temporada"}
        </p>
      ) : null}
      <nav aria-label="Enlaces a contrato de alquiler por temporada por ciudad" className={wrapClass}>
        {cityLinks.map((c) => (
          <Link key={c.slug} href={localContratoAlquilerTemporadaHref(c.slug)} className={linkClass}>
            {c.city === "Palma de Mallorca" ? "Mallorca" : c.city}
          </Link>
        ))}
      </nav>

      {!isFooter ? (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">
            Distritos de Barcelona (contrato temporada)
          </p>
          <nav aria-label="Contrato temporada por distrito Barcelona" className={wrapClass}>
            {TEMPORADA_BCN_BARRIO_HUB.map((c) => (
              <Link
                key={c.slug}
                href={localContratoAlquilerTemporadaHref(c.slug)}
                className={metroLinkClass}
              >
                {c.shortName}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
      <Link
        href={CONTRATO_ALQUILER_TEMPORADA_LOCAL_BASE}
        className={
          isCompact
            ? "inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#1A4FBF] hover:underline"
        }
      >
        {isFooter ? "Índice →" : "Ver página índice →"}
      </Link>
    </div>
  );
}
