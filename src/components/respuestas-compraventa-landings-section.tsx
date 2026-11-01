import Link from "next/link";
import { getSeoPrimaryLandingCityBlocks } from "@/lib/seo-city-primary-landings";
import { ArrowRight } from "lucide-react";

/** Enlaces canónicos compraventa desde hub /respuestas (refuerzo indexación PAA). */
export function RespuestasCompraventaLandingsSection() {
  const blocks = getSeoPrimaryLandingCityBlocks();
  if (blocks.length === 0) return null;

  return (
    <section
      className="mt-12 rounded-2xl border border-[#1A4FBF]/20 bg-[#EFF6FF] p-6 sm:p-8"
      aria-labelledby="respuestas-compraventa-title"
    >
      <h2 id="respuestas-compraventa-title" className="text-xl font-extrabold text-[#1E293B]">
        Compraventa entre particulares por ciudad
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
        Desde estas respuestas enlazamos a las landings que queremos posicionar (vender, comprar, pack 495 € y servicio
        890 €). Refuerza el rastreo hacia URLs ganadoras.
      </p>
      <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {blocks.map(({ cityName, links }) => (
          <li key={cityName} className="rounded-xl border border-slate-200 bg-white p-4">
            <p className="font-bold text-[#1E293B]">{cityName}</p>
            <ul className="mt-2 space-y-1.5 text-sm">
              {links.slice(0, 4).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="font-semibold text-[#1A4FBF] hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-[#64748b]">
        <Link href="/servicios" className="inline-flex items-center gap-1 font-semibold text-[#1A4FBF] hover:underline">
          Catálogo de servicios
          <ArrowRight className="h-4 w-4" aria-hidden />
        </Link>
        {" · "}
        <Link href="/precios#precios-compraventa-ciudad" className="font-semibold text-[#1A4FBF] hover:underline">
          Precios compraventa
        </Link>
      </p>
    </section>
  );
}
