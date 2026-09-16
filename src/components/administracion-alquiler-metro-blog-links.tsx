import Link from "next/link";
import {
  ADMINISTRACION_ALQUILER_BARCELONA_CITY_HUB,
  ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS,
  administracionAlquilerMetroHref,
} from "@/lib/administracion-alquiler-barcelona-metro";
import {
  ADMINISTRACION_ALQUILER_METRO_BASE,
  isAdministracionAlquilerMetroSegmentPublished,
} from "@/lib/administracion-alquiler-metro-landings";

type Props = {
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer";
};

/** Card del blog: landings metro /administracion-alquiler/… (solo publicadas). */
export function AdministracionAlquilerMetroBlogLinks({ showTitle = true, variant = "default" }: Props) {
  const isFooter = variant === "footer";
  const isCompact = variant === "compact" || isFooter;

  const published = ADMINISTRACION_ALQUILER_BARCELONA_METRO_LANDINGS.filter((l) =>
    isAdministracionAlquilerMetroSegmentPublished(l.segments),
  );
  if (published.length === 0) return null;

  const linkClass = isCompact
    ? "text-[11px] text-blue-100 underline-offset-2 hover:text-white hover:underline"
    : "rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1E293B] shadow ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]";

  const metroLinkClass = isCompact
    ? linkClass
    : "rounded-full bg-[#EFF6FF] px-3 py-1 text-sm font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] transition hover:bg-blue-100";

  const wrapClass = isCompact ? "flex flex-wrap gap-x-2 gap-y-1" : "flex flex-wrap gap-2";

  const barrios = published.filter((l) => l.kind === "barrio");
  const municipios = published.filter((l) => l.kind === "municipio");

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
          {isFooter ? "Admin. alquiler AMB" : "Administración de alquiler — área metropolitana Barcelona"}
        </p>
      ) : null}

      {barrios.length > 0 ? (
        <div className="space-y-2">
          {!isFooter ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Barrios de Barcelona</p>
          ) : null}
          <nav aria-label="Administración alquiler por barrio Barcelona" className={wrapClass}>
            {barrios.map((l) => (
              <Link key={l.slug} href={administracionAlquilerMetroHref(l.segments)} className={metroLinkClass}>
                {l.shortName}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}

      {municipios.length > 0 ? (
        <div className="space-y-2">
          {!isFooter ? (
            <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">Municipios AMB</p>
          ) : null}
          <nav aria-label="Administración alquiler municipios AMB" className={wrapClass}>
            {municipios.map((l) => (
              <Link key={l.slug} href={administracionAlquilerMetroHref(l.segments)} className={metroLinkClass}>
                {l.shortName}
              </Link>
            ))}
          </nav>
        </div>
      ) : null}

      <Link
        href={ADMINISTRACION_ALQUILER_BARCELONA_CITY_HUB}
        className={
          isCompact
            ? "inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#1A4FBF] hover:underline"
        }
      >
        {isFooter ? "Barcelona ciudad →" : "Administración en Barcelona (ciudad) →"}
      </Link>
      <Link
        href={ADMINISTRACION_ALQUILER_METRO_BASE}
        className={
          isCompact
            ? "ml-2 inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#64748B] hover:text-[#1A4FBF] hover:underline"
        }
      >
        {isFooter ? "Metro →" : " · Índice metro"}
      </Link>
    </div>
  );
}
