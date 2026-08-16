import { PublicHeader } from "@/components/public-header";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { WhatsAppLeadLink } from "@/components/whatsapp-lead-button";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, FileText, Clock, AlertCircle } from "lucide-react";

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Contrato de arras penitenciales entre particulares — 145 € IVA incl.",
  description:
    "Arras penitenciales entre comprador y vendedor particular. Redacción legal por 145 € IVA incl. — no plantilla de internet. Gestoría Livendia, no agencia inmobiliaria.",
  alternates: { canonical: `${getSiteUrl()}/servicios/contrato-arras-penitenciales` },
};

export default async function ArrasPenitencialesPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-arras-penitenciales") ?? null;

  const features = [
    {
      icon: Shield,
      title: "Derecho de desistimiento",
      description:
        "Cualquiera de las partes puede retirarse de la compra perdiendo o reteniendo las arras.",
    },
    {
      icon: FileText,
      title: "Cláusulas personalizadas",
      description: "Adaptamos el contrato a las condiciones específicas de tu operación.",
    },
    {
      icon: Clock,
      title: "Entrega rápida",
      description: "Documento listo en 24-48h laborables tras recibir toda la información.",
    },
    {
      icon: AlertCircle,
      title: "Asesoramiento legal",
      description: "Te explicamos las implicaciones y diferencias con otros tipos de arras.",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                  Entre particulares · Compraventa
                </div>
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Arras penitenciales entre comprador y vendedor particular
                </h1>
                <p className="mt-5 text-xl leading-relaxed text-blue-100">
                  ¿Vendes o compras entre particulares sin agencia? Redacción legal de arras penitenciales por 145 € IVA
                  incl. — no uses plantillas de internet para la señal de tu piso.
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">145 €</span>
                  <span className="text-lg text-blue-200">IVA incluido</span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                    Contratar por 145 €
                  </ContratarServicioButton>
                  <WhatsAppLeadLink
                    placement="contrato_arras_penitenciales_hero_whatsapp"
                    serviceLabel="Contrato de arras penitenciales"
                    needType="arras"
                    mode="direct"
                    className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                  >
                    Consultar por WhatsApp
                  </WhatsAppLeadLink>
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
                  src="/images/contratos1.jpg"
                  alt="Contrato de arras penitenciales"
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
            <h2 className="text-2xl font-bold text-[#1E293B]">¿Cómo funcionan las arras penitenciales?</h2>
            <div className="mt-6 space-y-4 text-[#475569]">
              <p>
                Las arras penitenciales son el tipo de contrato de señal más común en las compraventas
                inmobiliarias en España. Su característica principal es que permiten a cualquiera de las
                partes desistir de la compra:
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg bg-blue-50 p-6">
                  <h3 className="font-semibold text-[#1E293B]">Si desiste el comprador:</h3>
                  <p className="mt-2 text-sm">
                    Pierde la cantidad entregada como arras. El vendedor se queda con el dinero.
                  </p>
                </div>
                <div className="rounded-lg bg-amber-50 p-6">
                  <h3 className="font-semibold text-[#1E293B]">Si desiste el vendedor:</h3>
                  <p className="mt-2 text-sm">
                    Debe devolver el doble de las arras recibidas al comprador como penalización.
                  </p>
                </div>
              </div>
              <p className="mt-6 rounded-lg border border-[#06B6D4] bg-cyan-50 p-4 text-sm">
                <strong>Importante:</strong> Las arras suelen representar entre el 10% y el 20% del
                precio total de la vivienda. Te asesoramos sobre la cantidad más adecuada según tu caso.
              </p>
            </div>
          </div>
        </section>

        <ServiceMidPageContactSection
          serviceLabel="Contrato de arras penitenciales"
          needType="arras"
          placement="contrato_arras_penitenciales_mid"
        />

        {/* Galería */}
        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Nuestro trabajo</h2>
            <p className="mt-3 text-[#475569]">
              Contratos y documentación inmobiliaria preparados en nuestro despacho.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["/images/contratos.jpg", "/images/contratos6.jpg", "/images/familia1.jpg"].map(
                (src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
                  >
                    <Image
                      src={src}
                      alt={`Documentación ${idx + 1}`}
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
            <h2 className="text-3xl font-bold">¿Listo para formalizar tu compraventa?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Contrata ahora y recibe tu contrato de arras en 24-48h laborables.
            </p>
            <div className="mt-8">
              <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                Contratar ahora
              </ContratarServicioButton>
            </div>
          </div>
        </section>

        <GestorContactCta
          placement="contrato_arras_penitenciales"
          serviceLabel="Contrato de arras penitenciales"
        />
      </main>
        <ServiceLandingSharedSections
          serviceLabel="Contrato de arras penitenciales"
          primarySlug="contrato-arras-penitenciales"
        />

      <SiteFooter />
    </div>
    </ServicePurchaseProvider>
  );
}
