import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { formatEur, getPublicServices } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precios — Livendia",
  description: "Precios transparentes de gestoría inmobiliaria: alquiler, compraventa y más.",
};

export default async function PreciosPage() {
  const services = await getPublicServices();

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[#1A4FBF] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Precios</h1>
            <p className="mt-3 max-w-2xl text-lg text-blue-100">
              Importes orientativos IVA no incluido salvo indicación contraria. Pago online desde el panel.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          {services.length === 0 ? (
            <p className="rounded-xl bg-white p-8 text-center text-[#64748b] shadow ring-1 ring-slate-200">
              No hay precios publicados todavía.
            </p>
          ) : (
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200">
              <table className="w-full min-w-[320px] text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-xs font-semibold uppercase tracking-wide text-[#64748b]">
                    <th className="px-4 py-4 sm:px-6">Servicio</th>
                    <th className="px-4 py-4 sm:px-6">Precio</th>
                    <th className="hidden px-4 py-4 sm:table-cell sm:px-6"></th>
                  </tr>
                </thead>
                <tbody>
                  {services.map((s) => (
                    <tr key={s.id} className="border-b border-slate-100 last:border-0">
                      <td className="px-4 py-4 sm:px-6">
                        <span className="font-medium text-[#1E293B]">{s.name}</span>
                        {s.is_recurring ? (
                          <span className="ml-2 rounded bg-amber-100 px-2 py-0.5 text-xs font-semibold text-amber-900">
                            Suscripción
                          </span>
                        ) : null}
                      </td>
                      <td className="whitespace-nowrap px-4 py-4 text-lg font-bold text-[#1A4FBF] sm:px-6">
                        {s.is_recurring ? `${formatEur(s.price_cents)}/mes` : formatEur(s.price_cents)}
                      </td>
                      <td className="hidden px-4 py-4 sm:table-cell sm:px-6">
                        {s.is_recurring ? (
                          <span className="text-xs text-[#64748b]">Próximamente</span>
                        ) : (
                          <Link
                            href="/login?next=/dashboard"
                            className="font-semibold text-[#06B6D4] hover:underline"
                          >
                            Contratar
                          </Link>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p className="border-t border-slate-100 px-4 py-4 text-xs text-[#64748b] sm:px-6">
                ¿Dudas? Escríbenos por WhatsApp o entra al panel para contratar en unos clics.
              </p>
            </div>
          )}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/servicios"
              className="rounded-full border border-[#1A4FBF] px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-[#1A4FBF]/5"
            >
              Detalle de servicios
            </Link>
            <Link
              href="/login?next=/dashboard"
              className="rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2563EB]"
            >
              Ir al panel
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
