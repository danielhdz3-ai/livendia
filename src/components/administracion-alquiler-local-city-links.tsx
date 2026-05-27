import Link from "next/link";
import {
  ADMINISTRACION_ALQUILER_LOCAL_BASE,
  getPublishedAdministracionAlquilerLocalCities,
  localAdministracionAlquilerHref,
} from "@/lib/administracion-alquiler-local-cities";

type Props = {
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer";
};

export function AdministracionAlquilerLocalCityLinks({ showTitle = true, variant = "default" }: Props) {
  const cities = getPublishedAdministracionAlquilerLocalCities();
  const isFooter = variant === "footer";
  const isCompact = variant === "compact" || isFooter;

  const linkClass = isCompact
    ? "text-[11px] text-blue-100 underline-offset-2 hover:text-white hover:underline"
    : "rounded-full bg-white px-3 py-1 text-sm font-medium text-[#1E293B] shadow ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]";

  const wrapClass = isCompact ? "flex flex-wrap gap-x-2 gap-y-1" : "flex flex-wrap gap-2";

  return (
    <div className={isCompact ? "min-w-0 space-y-1.5" : "space-y-3"}>
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
          {isFooter ? "Administración por ciudad" : "Administración de alquiler por ciudad"}
        </p>
      ) : null}
      <nav
        aria-label="Enlaces a administración de alquiler por ciudad en España"
        className={wrapClass}
      >
        {cities.map((c) => (
          <Link key={c.slug} href={localAdministracionAlquilerHref(c.slug)} className={linkClass}>
            {c.city}
          </Link>
        ))}
      </nav>
      <Link
        href={ADMINISTRACION_ALQUILER_LOCAL_BASE}
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
