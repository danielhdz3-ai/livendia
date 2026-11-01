import Link from "next/link";
import { SERVICIO_COMPLETO_CV_PRICE_EUR, SERVICIO_COMPLETO_CV_PRICE_LABEL } from "@/lib/catalog.public";
import { agencyCommissionWithVat } from "@/lib/vender-piso-sin-agencia-local-cities";

function formatEur(n: number): string {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR", maximumFractionDigits: 0 }).format(n);
}

type Props = {
  city?: string;
  /** Precio de venta de referencia para el ejemplo (€). */
  salePrice?: number;
  primarySlug?: string;
};

export function ServiceCommissionCompareSection({
  city,
  salePrice = 250_000,
  primarySlug = "servicio-completo-venta",
}: Props) {
  const agency3 = agencyCommissionWithVat(salePrice, 3);
  const agency5 = agencyCommissionWithVat(salePrice, 5);
  const livendia = SERVICIO_COMPLETO_CV_PRICE_EUR;
  const saving3 = agency3 - livendia;
  const saving5 = agency5 - livendia;
  const place = city ? ` en ${city}` : "";

  return (
    <section
      id="comparativa-comision"
      className="scroll-mt-24 border-b border-slate-200 bg-white px-4 py-14 sm:px-6"
      aria-labelledby="comparativa-comision-title"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Tarifa plana vs comisión</p>
        <h2 id="comparativa-comision-title" className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
          Agencia 3 % vs Livendia {SERVICIO_COMPLETO_CV_PRICE_LABEL}{place}
        </h2>
        <p className="mt-3 max-w-3xl text-[#64748b]">
          Si ya tienes comprador particular, no pagues un porcentaje sobre el precio del piso: comparativa sobre un
          ejemplo de venta de {formatEur(salePrice)} (IVA incluido en comisiones de agencia).
        </p>

        <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
          <table className="min-w-full text-left text-sm">
            <thead className="bg-[#1A4FBF] text-white">
              <tr>
                <th className="px-4 py-3 font-semibold">Opción</th>
                <th className="px-4 py-3 font-semibold">Coste orientativo</th>
                <th className="px-4 py-3 font-semibold">Enfoque</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 bg-[#F8FAFC]">
              <tr>
                <td className="px-4 py-3 font-medium text-[#1E293B]">Inmobiliaria ~3 % + IVA</td>
                <td className="px-4 py-3 text-[#475569]">{formatEur(agency3)}</td>
                <td className="px-4 py-3 text-[#475569]">Captación y comercialización</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-medium text-[#1E293B]">Inmobiliaria ~5 % + IVA</td>
                <td className="px-4 py-3 text-[#475569]">{formatEur(agency5)}</td>
                <td className="px-4 py-3 text-[#475569]">Exclusiva y marketing</td>
              </tr>
              <tr className="bg-emerald-50/90">
                <td className="px-4 py-3 font-bold text-[#1A4FBF]">Livendia gestoría inmobiliaria</td>
                <td className="px-4 py-3 font-bold text-[#1A4FBF]">{SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.</td>
                <td className="px-4 py-3 text-[#475569]">
                  Ahorras {formatEur(saving3)} vs 3 % · {formatEur(saving5)} vs 5 %
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-center">
          <Link
            href={`/servicios/${primarySlug}`}
            className="inline-flex rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white hover:bg-[#1E40AF]"
          >
            Contratar servicio completo
          </Link>
        </p>
      </div>
    </section>
  );
}
