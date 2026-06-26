import Link from "next/link";
import { MapPin } from "lucide-react";
import { HOME_COVERAGE_CITIES } from "@/lib/home-coverage-cities";
import { ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL } from "@/lib/catalog.public";

type HomeCoverageCitiesProps = {
  /** Variante compacta para páginas internas (servicios, gestoría). */
  variant?: "default" | "compact";
};

export function HomeCoverageCities({ variant = "default" }: HomeCoverageCitiesProps) {
  const compact = variant === "compact";

  return (
    <section
      className={compact ? "border-t border-slate-200 bg-[#F8FAFC] py-10 sm:py-12" : "border-b border-slate-200 bg-white py-12 sm:py-16"}
      aria-labelledby="cobertura-ciudades"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
            <MapPin className="h-4 w-4" aria-hidden />
            Cobertura online
          </p>
          <h2 id="cobertura-ciudades" className="mt-3 text-2xl font-bold text-[#1E293B] sm:text-3xl">
            Operamos en Madrid, Valencia, Barcelona, Málaga y Sevilla — y en toda España
          </h2>
          <p className="mt-3 text-[#475569]">
            Mismo gestor, mismos precios y panel online. Las landings por ciudad te orientan; el servicio es 100 %
            digital con normativa estatal (LAU, arras, compraventa).
          </p>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_COVERAGE_CITIES.map((city) => (
            <li
              key={city.slug}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100"
            >
              <h3 className="text-xl font-bold text-[#1E293B]">{city.name}</h3>
              <ul className="mt-4 flex flex-1 flex-col gap-2 text-sm">
                <li>
                  <Link href={city.gestoriaHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    Gestoría inmobiliaria
                  </Link>
                </li>
                <li>
                  <Link href={city.venderSinAgenciaHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    Vender sin agencia
                  </Link>
                </li>
                <li>
                  <Link href={city.ventaLocalHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    Servicio completo de venta
                  </Link>
                </li>
                <li>
                  <Link href={city.compraHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    Comprar con garantías
                  </Link>
                </li>
                <li>
                  <Link href={city.administracionHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    Administración de alquiler — 49 €/mes
                  </Link>
                </li>
                {city.temporadaHref ? (
                  <li>
                    <Link href={city.temporadaHref} className="font-semibold text-[#1A4FBF] hover:underline">
                      Contrato alquiler temporada — 200 €
                    </Link>
                  </li>
                ) : null}
                {city.parkingTrasteroHref ? (
                  <li>
                    <Link href={city.parkingTrasteroHref} className="font-semibold text-[#1A4FBF] hover:underline">
                      Compra parking o trastero — {ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL}
                    </Link>
                  </li>
                ) : null}
                {city.habitacionHref ? (
                  <li>
                    <Link href={city.habitacionHref} className="font-semibold text-[#1A4FBF] hover:underline">
                      Contrato alquiler habitación — {CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}
                    </Link>
                  </li>
                ) : null}
                {city.arrasLocalHref ? (
                  <li>
                    <Link href={city.arrasLocalHref} className="font-semibold text-[#1A4FBF] hover:underline">
                      Contrato de arras — 145 €
                    </Link>
                  </li>
                ) : null}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
