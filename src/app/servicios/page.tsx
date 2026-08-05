import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { SiteFooter } from "@/components/site-footer";
import { HomeCoverageCities } from "@/components/home-coverage-cities";
import { getPublicServices, groupByCategory } from "@/lib/catalog";
import { SITE_DEFAULT_DESCRIPTION } from "@/lib/site-default-description";
import { getSiteUrl } from "@/lib/site-url";
import { ServiceCardsClient } from "./service-cards-client";
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
  title: "Servicios de gestoría inmobiliaria: alquiler, compraventa y packs",
  description: SITE_DEFAULT_DESCRIPTION,
  alternates: { canonical: `${getSiteUrl()}/servicios` },
};

export default async function ServiciosPage() {
  const services = await getPublicServices();
  const groups = groupByCategory(services);

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[#1A4FBF] px-4 py-10 text-white sm:px-6 sm:py-14">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">Servicios</h1>
            <p className="mt-3 max-w-2xl text-base text-blue-100 sm:text-lg">
              Consulta toda la información de cada servicio y, cuando quieras, contrata con{" "}
              <strong>pago seguro por tarjeta</strong>. Operamos online en Madrid, Valencia, Barcelona y toda España
              con los mismos precios y gestor dedicado.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/precios"
                className="inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-100"
              >
                Contratar
              </Link>
              <Link
                href="/login?next=/dashboard"
                className="inline-flex min-h-11 items-center rounded-full border-2 border-[#06B6D4] px-6 py-3 text-sm font-semibold hover:bg-[#06B6D4]"
              >
                Ya soy cliente — acceder al panel
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
                  <ServiceCardsClient services={group.items} mode="landing" />
                </section>
              ))}
            </div>
          )}
        </div>

        <HomeCoverageCities variant="compact" />
      </main>
        <ClientPlatformShowcase />

      <SiteFooter />
    </div>
  );
}
