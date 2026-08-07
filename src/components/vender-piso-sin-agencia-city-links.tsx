import Link from "next/link";
import {
  getPublishedVenderPisoSinAgenciaCities,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";

type Props = {
  showTitle?: boolean;
  variant?: "default" | "compact" | "footer";
};

export function VenderPisoSinAgenciaCityLinks({ showTitle = true, variant = "default" }: Props) {
  const cities = getPublishedVenderPisoSinAgenciaCities();
  const isFooter = variant === "footer";
  const isCompact = variant === "compact" || isFooter;

  const linkClass = isCompact
    ? "text-[11px] text-blue-100 underline-offset-2 hover:text-white hover:underline"
    : "rounded-full bg-white px-3 py-1.5 text-sm font-medium text-[#1E293B] shadow ring-1 ring-slate-200 transition hover:bg-blue-50 hover:ring-[#1A4FBF]";

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
          Vender sin comisiones por ciudad
        </p>
      ) : null}
      <nav aria-label="Venta entre particulares por ciudad" className={wrapClass}>
        {cities.map((c) => (
          <Link key={c.slug} href={localVenderPisoSinAgenciaHref(c.slug)} className={linkClass}>
            {c.city}
          </Link>
        ))}
      </nav>
    </div>
  );
}
