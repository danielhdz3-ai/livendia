import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { formatEur, getPublicServices, groupByCategory } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Servicios — Livendia",
  description:
    "Contratos LAU, reservas, arras, compraventa y packs de gestoría inmobiliaria digital.",
};

export default async function ServiciosPage() {
  const services = await getPublicServices();
  const groups = groupByCategory(services);

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[#1A4FBF] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Servicios</h1>
            <p className="mt-3 max-w-2xl text-lg text-blue-100">
              Catálogo de gestoría inmobiliaria. Contratas desde tu panel con pago seguro.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/precios"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-100"
              >
                Ver precios
              </Link>
              <Link
                href="/login?next=/dashboard"
                className="rounded-full border-2 border-[#06B6D4] px-6 py-3 text-sm font-semibold hover:bg-[#06B6D4]"
              >
                Ir al panel
              </Link>
            </div>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          {groups.length === 0 ? (
            <p className="rounded-xl bg-white p-8 text-center text-[#64748b] shadow ring-1 ring-slate-200">
              Próximamente más servicios.
            </p>
          ) : (
            <div className="space-y-12">
              {groups.map((group) => (
                <section key={group.key}>
                  <h2 className="text-xl font-bold text-[#1E293B]">{group.label}</h2>
                  <ul className="mt-4 grid gap-4 sm:grid-cols-2">
                    {group.items.map((s) => (
                      <li
                        key={s.id}
                        className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200"
                      >
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <h3 className="text-lg font-semibold text-[#1E293B]">{s.name}</h3>
                          <span className="text-lg font-bold text-[#1A4FBF]">
                            {s.is_recurring ? `${formatEur(s.price_cents)}/mes` : formatEur(s.price_cents)}
                          </span>
                        </div>
                        {s.description ? (
                          <p className="mt-3 text-sm leading-relaxed text-[#475569]">{s.description}</p>
                        ) : null}
                        {s.is_recurring ? (
                          <p className="mt-4 text-xs text-[#64748b]">Suscripción — disponible pronto en web.</p>
                        ) : (
                          <Link
                            href="/login?next=/dashboard"
                            className="mt-4 inline-block text-sm font-semibold text-[#06B6D4] hover:underline"
                          >
                            Contratar →
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          )}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
