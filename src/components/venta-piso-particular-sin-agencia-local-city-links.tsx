import Link from "next/link";
import {
  BARCELONA_METRO_VENTA_PARTICULAR_CITIES,
  barcelonaMetroVentaParticularHref,
} from "@/lib/venta-piso-particular-barcelona-metro";
import {
  VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE,
} from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import { localVenderPisoSinAgenciaHref } from "@/lib/vender-piso-sin-agencia-local-cities";

type Props = {
  currentSlug?: string;
  variant?: "footer" | "inline";
};

export function VentaPisoParticularSinAgenciaLocalCityLinks({
  currentSlug,
  variant = "inline",
}: Props) {
  const compact = variant === "footer";

  return (
    <section
      className={
        compact
          ? "border-t border-slate-200 bg-white px-4 py-8 sm:px-6"
          : "border-t border-slate-200 bg-white px-4 py-12 sm:px-6"
      }
    >
      <div className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
          Venta entre particulares — área metropolitana de Barcelona
        </p>
        {!compact ? (
          <p className="mt-2 text-sm text-[#64748b]">
            Ya tienes comprador — elige tu municipio. También{" "}
            <Link href={localVenderPisoSinAgenciaHref("barcelona")} className="text-[#1A4FBF] hover:underline">
              Barcelona capital
            </Link>
            .
          </p>
        ) : null}
        <nav
          aria-label="Venta piso particular sin agencia por ciudad"
          className="mt-4 flex flex-wrap gap-2"
        >
          <Link
            href={localVenderPisoSinAgenciaHref("barcelona")}
            className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#1A4FBF]"
          >
            Barcelona
          </Link>
          {BARCELONA_METRO_VENTA_PARTICULAR_CITIES.map((metro) => {
            const href = barcelonaMetroVentaParticularHref(metro.slug);
            const active = currentSlug === metro.slug;
            return (
              <Link
                key={metro.slug}
                href={href}
                aria-current={active ? "page" : undefined}
                className={
                  active
                    ? "rounded-full bg-[#D4AF37] px-4 py-2 text-sm font-semibold text-[#1E293B]"
                    : "rounded-full bg-[#F1F5F9] px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-slate-200 hover:bg-blue-50"
                }
              >
                {metro.shortName}
              </Link>
            );
          })}
        </nav>
        {!compact ? (
          <p className="mt-4 text-xs text-[#64748b]">
            Hub:{" "}
            <Link href={VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE} className="text-[#1A4FBF] hover:underline">
              {VENTA_PISO_PARTICULAR_SIN_AGENCIA_LOCAL_BASE}
            </Link>
          </p>
        ) : null}
      </div>
    </section>
  );
}
