import { PublicHeader } from "@/components/public-header";
import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL, resolveServicePriceLabel } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Calendar, FileText, Clock, CheckCircle } from "lucide-react";

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: `Contrato de alquiler por temporada — ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incl. | Livendia`,
  description:
    `Para estancias temporales, estudios o trabajo. Regulación específica fuera de la LAU estándar. ${CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL} IVA incluido.`,
  alternates: { canonical: `${getSiteUrl()}/servicios/contrato-alquiler-temporada` },
};

export default async function ContratoTemporadaPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-alquiler-temporada") ?? null;
  const priceLabel = resolveServicePriceLabel(service, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL);

  const features = [
    {
      icon: Calendar,
      title: "Regulación específica",
      description: "Contrato adaptado a arrendamientos temporales con normativa especial.",
    },
    {
      icon: FileText,
      title: "Cláusulas para temporada",
      description: "Incluye condiciones específicas de duración, prórroga y finalización.",
    },
    {
      icon: Clock,
      title: "Entrega rápida",
      description: "Documento listo en 24-48h laborables tras recibir toda la información.",
    },
    {
      icon: CheckCircle,
      title: "Asesoramiento incluido",
      description: "Te explicamos las diferencias con el contrato LAU y tus obligaciones.",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
    {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                  Alquiler temporal
                </div>
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Contrato de Alquiler por Temporada
                </h1>
                <p className="mt-5 text-xl leading-relaxed text-blue-100">
                  Para estancias temporales, estudios o trabajo. Regulación específica fuera de la LAU estándar.
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                  <span className="text-lg text-blue-200">IVA incluido</span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                    Contratar por {priceLabel}
                  </ContratarServicioButton>
                  <Link
                    href="/servicios"
                    className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/images/contratos5.jpg"
                  alt="Contrato de alquiler por temporada"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-[#1E293B]">
              ¿Qué incluye este servicio?
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                      <Icon className="h-6 w-6 text-[#06B6D4]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Info adicional */}
        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">¿Cuándo usar este contrato?</h2>
            <div className="mt-6 space-y-4 text-[#475569]">
              <p>
                El contrato de alquiler por temporada está pensado para estancias que no van a ser
                la vivienda habitual del inquilino, como por ejemplo:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Estudiantes que se desplazan temporalmente para cursar estudios</li>
                <li>Trabajadores con contratos temporales o desplazamientos laborales</li>
                <li>Estancias vacacionales de duración superior a unos meses</li>
              </ul>
              <p className="mt-6 rounded-lg bg-amber-50 p-4 text-sm">
                <strong>Importante:</strong> Este contrato tiene una regulación diferente a la LAU
                estándar y no está sujeto a las mismas prórrogas obligatorias. Te asesoramos sobre
                cuál es la mejor opción para tu caso.
              </p>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Nuestro trabajo</h2>
            <p className="mt-3 text-[#475569]">
              Documentación y contratos preparados en nuestro despacho.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["/images/contratos6.jpg", "/images/contratos7.jpg", "/images/gestoria2.jpg"].map(
                (src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
                  >
                    <Image
                      src={src}
                      alt={`Documentación contrato ${idx + 1}`}
                      fill
                      className="object-cover transition hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1152px) 33vw, 373px"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold">¿Necesitas un contrato de temporada?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Contrata ahora y recibe tu contrato personalizado en 24-48h laborables.
            </p>
            <div className="mt-8">
              <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                Contratar ahora
              </ContratarServicioButton>
            </div>
          </div>
        </section>
      </main>
        <ClientPlatformShowcase />

      <SiteFooter />
    </div>
    </ServicePurchaseProvider>
  );
}
