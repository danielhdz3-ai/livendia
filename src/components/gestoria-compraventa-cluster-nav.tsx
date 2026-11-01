import Link from "next/link";
import { buildCompraClusterProductLinks } from "@/lib/compra-cluster-product-links";
import { buildVentaClusterProductLinks } from "@/lib/venta-cluster-product-links";

type Props = {
  citySlug: string;
  cityLabel: string;
};

export function GestoriaCompraventaClusterNav({ citySlug, cityLabel }: Props) {
  const ventaLinks = buildVentaClusterProductLinks(citySlug, cityLabel);
  const compraLinks = buildCompraClusterProductLinks(citySlug, cityLabel);
  if (ventaLinks.length === 0 && compraLinks.length === 0) return null;

  return (
    <aside
      className="mt-8 rounded-2xl border border-[#1A4FBF]/20 bg-[#EFF6FF] p-6 sm:p-8"
      aria-labelledby="gestoria-compraventa-cluster-title"
    >
      <h2 id="gestoria-compraventa-cluster-title" className="text-xl font-extrabold text-[#1E293B]">
        ¿Vendes o compras en {cityLabel}?
      </h2>
      <p className="mt-2 max-w-2xl text-sm leading-relaxed text-[#64748b]">
        Elige la landing que encaja con tu caso: pack arras 495 €, servicio integral 890 € o guías SEO vender/comprar sin
        agencia. Misma tarifa nacional; distinto alcance documental.
      </p>

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {ventaLinks.length > 0 ? (
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Vendedor</p>
            <ul className="mt-3 space-y-2">
              {ventaLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="block rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#1A4FBF]/40 hover:shadow-sm"
                  >
                    <span className="text-sm font-bold text-[#1E293B]">{link.title}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#06B6D4]">{link.priceLabel}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-[#64748b]">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {compraLinks.length > 0 ? (
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">Comprador</p>
            <ul className="mt-3 space-y-2">
              {compraLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="block rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#1A4FBF]/40 hover:shadow-sm"
                  >
                    <span className="text-sm font-bold text-[#1E293B]">{link.title}</span>
                    <span className="mt-1 block text-xs font-semibold text-[#06B6D4]">{link.priceLabel}</span>
                    <span className="mt-2 block text-xs leading-relaxed text-[#64748b]">{link.description}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </aside>
  );
}
