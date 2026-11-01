import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import {
  buildVentaClusterProductLinks,
  type VentaClusterHighlight,
} from "@/lib/venta-cluster-product-links";

type Props = {
  localSlug: string;
  cityLabel: string;
  /** Producto de esta página — se resalta y no se enlaza a sí misma como CTA principal. */
  current: VentaClusterHighlight;
};

export function VentaClusterProductPicker({ localSlug, cityLabel, current }: Props) {
  const links = buildVentaClusterProductLinks(localSlug, cityLabel);
  if (links.length < 2) return null;

  return (
    <section
      className="border-b border-slate-200 bg-[#EFF6FF] px-4 py-12 sm:px-6"
      aria-labelledby="venta-cluster-picker-title"
    >
      <div className="mx-auto max-w-6xl">
        <h2 id="venta-cluster-picker-title" className="text-xl font-bold text-[#1E293B] sm:text-2xl">
          ¿Qué servicio encaja con tu venta en {cityLabel}?
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#475569] sm:text-base">
          Livendia no busca comprador: somos gestoría. Elige según si necesitas solo arras y documentación (495 €) o
          acompañamiento completo hasta notaría (890 €). Cada enlace lleva a una landing distinta para evitar confusiones.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((item) => {
            const isCurrent = item.id === current;
            return (
              <li
                key={item.id}
                className={`flex flex-col rounded-2xl p-5 ring-1 ${
                  isCurrent
                    ? "bg-white ring-2 ring-[#1A4FBF] shadow-md"
                    : "bg-white/90 ring-slate-200 hover:ring-[#BFDBFE]"
                }`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-base font-bold text-[#1E293B]">{item.title}</h3>
                  {isCurrent ? (
                    <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#1A4FBF]/10 px-2 py-0.5 text-xs font-semibold text-[#1A4FBF]">
                      <CheckCircle className="h-3.5 w-3.5" aria-hidden />
                      Estás aquí
                    </span>
                  ) : null}
                </div>
                <p className="mt-1 text-sm font-semibold text-[#06B6D4]">{item.priceLabel}</p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                {isCurrent ? (
                  <p className="mt-4 text-xs font-medium text-[#64748b]">Contrata desde los botones de esta página.</p>
                ) : (
                  <Link
                    href={item.href}
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF] hover:underline"
                  >
                    Ver landing
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
