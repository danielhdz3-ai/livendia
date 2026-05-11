import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { getPublicServices, groupByCategory } from "@/lib/catalog";
import { ServiceCardsClient } from "./service-cards-client";
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
                  <h2 className="text-2xl font-bold text-[#1E293B]">{group.label}</h2>
                  <ServiceCardsClient services={group.items} />
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

