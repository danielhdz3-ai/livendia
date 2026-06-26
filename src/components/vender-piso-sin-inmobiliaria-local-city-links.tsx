import Link from "next/link";
import {
  VENDER_PISO_SIN_INMOBILIARIA_BASE,
  VENDER_PISO_SIN_INMOBILIARIA_PILLAR_SLUGS,
  getVenderPisoSinInmobiliariaPillarCityLabel,
  localVenderPisoSinInmobiliariaHref,
} from "@/lib/vender-piso-sin-inmobiliaria-local-cities";

type Props = {
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer";
};

export function VenderPisoSinInmobiliariaLocalCityLinks({
  showTitle = true,
  variant = "default",
}: Props) {
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
          Vender piso sin inmobiliaria (guías pilar)
        </p>
      ) : null}
      <nav aria-label="Guías para vender sin inmobiliaria por ciudad" className={wrapClass}>
        {VENDER_PISO_SIN_INMOBILIARIA_PILLAR_SLUGS.map((slug) => (
          <Link key={slug} href={localVenderPisoSinInmobiliariaHref(slug)} className={linkClass}>
            {getVenderPisoSinInmobiliariaPillarCityLabel(slug)}
          </Link>
        ))}
      </nav>
      <Link
        href={VENDER_PISO_SIN_INMOBILIARIA_BASE}
        className={
          isCompact
            ? "inline-block text-[11px] font-semibold text-cyan-200 hover:text-white"
            : "inline-flex text-sm font-semibold text-[#1A4FBF] hover:underline"
        }
      >
        {isFooter ? "Hub vender sin inmobiliaria →" : "Ver hub vender sin inmobiliaria →"}
      </Link>
    </div>
  );
}
