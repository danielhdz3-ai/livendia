import Link from "next/link";
import {
  getVentaParticularCanonicalHint,
  isVentaParticularMetroMunicipalitySlug,
} from "@/lib/venta-piso-particular-canonical";
import { MapPinned } from "lucide-react";

type Props = { slug: string };

export function VentaParticularCanonicalNotice({ slug }: Props) {
  const hint = getVentaParticularCanonicalHint(slug);
  if (!hint) return null;

  const metroConsolidated = isVentaParticularMetroMunicipalitySlug(slug);

  return (
    <aside
      className="border-b border-[#1A4FBF]/15 bg-[#EFF6FF] px-4 py-5 sm:px-6"
      aria-labelledby="venta-particular-canonical-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        <MapPinned className="mt-0.5 h-6 w-6 shrink-0 text-[#1A4FBF]" aria-hidden />
        <div>
          <h2 id="venta-particular-canonical-title" className="text-sm font-bold text-[#1E293B] sm:text-base">
            Guía por zona · {hint.zoneLabel}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-[#64748b]">
            Esta página captura búsquedas de barrio o municipio (Eixample, Gràcia, L&apos;Hospitalet…). Para contratar e
            indexación prioritaria en Barcelona, usa la landing principal{" "}
            <Link href={hint.venderHeadHref} className="font-semibold text-[#1A4FBF] hover:underline">
              vender piso sin agencia Barcelona
            </Link>
            {hint.pack495Href ? (
              <>
                {" "}
                o el{" "}
                <Link href={hint.pack495Href} className="font-semibold text-[#1A4FBF] hover:underline">
                  pack arras 495 €
                </Link>
              </>
            ) : null}
            . Índice completo:{" "}
            <Link href={hint.gestoriaCompraventaHref} className="font-semibold text-[#1A4FBF] hover:underline">
              compraventa Barcelona
            </Link>
            .
          </p>
          {metroConsolidated ? (
            <p className="mt-2 text-xs text-[#64748b]">
              Esta URL de municipio AMB no compite en indexación con la landing principal de Barcelona (canonical
              consolidado).
            </p>
          ) : null}
        </div>
      </div>
    </aside>
  );
}
