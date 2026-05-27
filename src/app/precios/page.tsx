import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { getPublicServices, groupByCategory } from "@/lib/catalog";
import { ServiceCardsClient } from "@/app/servicios/service-cards-client";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Precios gestoría inmobiliaria desde 49 €/mes | Livendia",
  description:
    "Tarifas fijas IVA incl.: LAU 120 €, arras 145 €, revisión post-arras 169 €, compraventa 424 € y 666 €, administración alquileres 49 €/mes sin permanencia. Livendia.",
};

export default async function PreciosPage() {
  const services = await getPublicServices();
  const groups = groupByCategory(services);

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[#1A4FBF] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Precios</h1>
            <p className="mt-3 max-w-2xl text-lg text-blue-100">
              Importes con <strong>IVA incluido</strong>. Elige un servicio y contrata con{" "}
              <strong>pago seguro por tarjeta</strong>; el flujo es el mismo que en Servicios.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          {groups.length === 0 ? (
            <p className="rounded-xl bg-white p-8 text-center text-[#64748b] shadow ring-1 ring-slate-200">
              No hay precios publicados todavía.
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

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/servicios"
              className="rounded-full border border-[#1A4FBF] px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-[#1A4FBF]/5"
            >
              Ver todos los servicios
            </Link>
            <Link
              href="/login?next=/dashboard"
              className="rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2563EB]"
            >
              Ya soy cliente — acceder al panel
            </Link>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
