import Link from "next/link";
import { getCompraLocalBarcelonaHubHint } from "@/lib/compra-local-barcelona-hub-hint";
import { MapPinned } from "lucide-react";

type Props = {
  slug: string;
  zoneLabel: string;
};

export function CompraLocalBarcelonaHubNotice({ slug, zoneLabel }: Props) {
  const hint = getCompraLocalBarcelonaHubHint(slug);
  if (!hint) return null;

  return (
    <aside
      className="border-b border-[#1A4FBF]/15 bg-[#EFF6FF] px-4 py-5 sm:px-6"
      aria-labelledby="compra-bcn-hub-notice-title"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 sm:flex-row sm:items-start sm:gap-4">
        <MapPinned className="mt-0.5 h-6 w-6 shrink-0 text-[#1A4FBF]" aria-hidden />
        <div>
          <h2 id="compra-bcn-hub-notice-title" className="text-sm font-bold text-[#1E293B] sm:text-base">
            Compra sin agencia · {zoneLabel}
          </h2>
          <p className="mt-1 text-sm leading-relaxed text-[#64748b]">
            Esta ficha es long-tail por distrito o municipio. Para la URL ganadora de comprador en Barcelona capital, usa{" "}
            <Link href={hint.comprarHeadHref} className="font-semibold text-[#1A4FBF] hover:underline">
              comprar piso sin agencia Barcelona
            </Link>
            {" · "}
            <Link href={hint.compra890Href} className="font-semibold text-[#1A4FBF] hover:underline">
              servicio completo de compra
            </Link>{" "}
            (890 €). Índice:{" "}
            <Link href={hint.gestoriaCompraventaHref} className="font-semibold text-[#1A4FBF] hover:underline">
              compraventa Barcelona
            </Link>
            .
          </p>
        </div>
      </div>
    </aside>
  );
}
