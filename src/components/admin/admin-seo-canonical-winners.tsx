import Link from "next/link";
import { ADMIN_CARD, ADMIN_CARD_PAD } from "@/lib/admin-ui";
import { getSeoCanonicalWinnerRows } from "@/lib/seo-canonical-winners";

type Props = { siteOrigin: string };

export function AdminSeoCanonicalWinners({ siteOrigin }: Props) {
  const rows = getSeoCanonicalWinnerRows();
  if (rows.length === 0) return null;

  return (
    <section className={`${ADMIN_CARD} ${ADMIN_CARD_PAD} mb-8`}>
      <h2 className="text-lg font-bold text-[#1E293B]">URLs ganadoras · compraventa (top ciudades)</h2>
      <p className="mt-2 text-sm text-[#64748B]">
        Prioridad de indexación y enlazado interno. Home, precios, servicios y hubs /ciudades apuntan aquí. Solicita
        indexación en GSC tras cada deploy relevante.
      </p>
      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 text-xs font-bold uppercase tracking-wide text-[#64748B]">
              <th className="py-2 pr-4">Ciudad</th>
              <th className="py-2 pr-4">Intención</th>
              <th className="py-2 pr-4">URL</th>
              <th className="py-2">Tarifa</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={`${row.citySlug}-${row.role}`} className="border-b border-slate-100">
                <td className="py-2.5 pr-4 font-medium text-[#1E293B]">{row.cityName}</td>
                <td className="py-2.5 pr-4 text-[#475569]">{row.intentLabel}</td>
                <td className="py-2.5 pr-4">
                  <Link
                    href={row.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    {row.href}
                  </Link>
                </td>
                <td className="py-2.5 text-[#64748B]">{row.priceHint}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-[#64748B]">Dominio: {siteOrigin}</p>
    </section>
  );
}
