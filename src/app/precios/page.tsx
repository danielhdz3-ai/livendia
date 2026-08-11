import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { getPublicServices, groupByCategory } from "@/lib/catalog";
import { ServiceCardsClient } from "@/app/servicios/service-cards-client";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Contratar gestoría inmobiliaria: precios y tarifas | Livendia",
  description:
    `Tarifas fijas IVA incl. para particulares: habitación ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}, LAU ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}, arras 145 €, temporada ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}, revisión post-arras ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}, venta sin agencia 890 €, administración 49 €/mes. Gestor por teléfono.`,
  alternates: { canonical: `${getSiteUrl()}/precios` },
};

export default async function PreciosPage() {
  const services = await getPublicServices();
  const groups = groupByCategory(services);

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[#1A4FBF] px-4 py-10 text-white sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">Contratar</h1>
            <p className="mt-3 max-w-2xl text-base text-blue-100 sm:text-lg">
              Importes con <strong>IVA incluido</strong>. Elige un servicio, registra tus datos y contrata al momento
              con <strong>pago seguro por tarjeta</strong>.
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
              className="inline-flex min-h-11 items-center rounded-full border border-[#1A4FBF] px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-[#1A4FBF]/5"
            >
              Ver todos los servicios
            </Link>
            <Link
              href="/blog/cuanto-cuesta-una-gestoria-inmobiliaria"
              className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#475569] hover:bg-slate-50"
            >
              ¿Cuánto cuesta una gestoría?
            </Link>
            <Link
              href="/contacto"
              className="inline-flex min-h-11 items-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white hover:bg-[#2563EB]"
            >
              Habla con un gestor
            </Link>
            <Link
              href="/login?next=/dashboard"
              className="inline-flex min-h-11 items-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-[#475569] hover:bg-slate-50"
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
