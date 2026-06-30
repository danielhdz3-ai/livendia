import Link from "next/link";
import {
  CONTRATO_ALQUILER_HABITACION_LOCAL_BASE,
  getPublishedContratoAlquilerHabitacionLocalCities,
  localContratoAlquilerHabitacionHref,
} from "@/lib/contrato-alquiler-habitacion-local-cities";
import {
  BARCELONA_METRO_HABITACION_CITIES,
  barcelonaMetroHabitacionHref,
} from "@/lib/contrato-alquiler-habitacion-barcelona-metro";

type Props = {
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer";
};

const BARCELONA_METRO_SLUGS = new Set<string>(BARCELONA_METRO_HABITACION_CITIES.map((c) => c.slug));

export function ContratoAlquilerHabitacionLocalCityLinks({
  showTitle = true,
  variant = "default",
}: Props) {
  const cities = getPublishedContratoAlquilerHabitacionLocalCities();
  const primaryCities = cities.filter((c) => !BARCELONA_METRO_SLUGS.has(c.slug));
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
          {isFooter ? "Contrato habitación por ciudad" : "Contrato alquiler habitación por ciudad"}
        </p>
      ) : null}

      <nav aria-label="Enlaces a contrato de habitación por ciudad" className={wrapClass}>
        {primaryCities.map((c) => (
          <Link key={c.slug} href={localContratoAlquilerHabitacionHref(c.slug)} className={linkClass}>
            {c.city}
          </Link>
        ))}
      </nav>

      {!isFooter ? (
        <div className="space-y-2">
          <p className="text-xs font-semibold uppercase tracking-wide text-[#64748b]">
            Área metropolitana de Barcelona
          </p>
          <nav aria-label="Contrato habitación área metropolitana Barcelona" className={wrapClass}>
            {BARCELONA_METRO_HABITACION_CITIES.map((c) => (
              <Link key={c.slug} href={barcelonaMetroHabitacionHref(c.slug)} className={metroLinkClass}>
                {c.shortName}
              </Link>
            ))}
          </nav>
        </div>
      ) : (
        <nav aria-label="Contrato habitación área metropolitana Barcelona" className={wrapClass}>
          {BARCELONA_METRO_HABITACION_CITIES.map((c) => (
            <Link key={c.slug} href={barcelonaMetroHabitacionHref(c.slug)} className={linkClass}>
              {c.shortName}
            </Link>
          ))}
        </nav>
      )}

      <Link
        href={CONTRATO_ALQUILER_HABITACION_LOCAL_BASE}
        className={
          isCompact
            ? "inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#1A4FBF] hover:underline"
        }
      >
        {isFooter ? "Servicio nacional →" : "Ver contrato habitación (España) →"}
      </Link>
    </div>
  );
}
