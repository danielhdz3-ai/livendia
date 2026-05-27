import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, FileText, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contrato de alquiler de habitación (piso compartido)",
  description:
    "Arrendamiento de habitación en piso compartido con cláusulas específicas para este régimen. 120€ IVA incluido.",
};

export default async function ContratoHabitacionPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-alquiler-habitacion") ?? null;

  const features = [
    {
      icon: Users,
      title: "Piso compartido",
      description: "Contrato diseñado para el alquiler de una habitación en vivienda compartida.",
    },
    {
      icon: FileText,
      title: "Cláusulas específicas",
      description: "Incluye normas de convivencia, espacios comunes y responsabilidades.",
    },
    {
      icon: Clock,
      title: "Entrega rápida",
      description: "Documento listo en 24-48h laborables tras recibir toda la información.",
    },
    {
      icon: CheckCircle,
      title: "Protección legal",
      description: "Define claramente derechos y obligaciones del arrendador e inquilino.",
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
                  Piso compartido
                </div>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Contrato de Alquiler de Habitación
                </h1>
                <p className="mt-5 text-xl leading-relaxed text-blue-100">
                  Arrendamiento de habitación en piso compartido con cláusulas específicas para este régimen.
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-5xl font-extrabold">120 €</span>
                  <span className="text-lg text-blue-200">IVA incluido</span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                    Contratar por 120 €
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
                  src="/images/contratos2.jpg"
                  alt="Contrato de alquiler de habitación"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
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
            <h2 className="text-2xl font-bold text-[#1E293B]">
              Aspectos importantes del alquiler de habitación
            </h2>
            <div className="mt-6 space-y-4 text-[#475569]">
              <p>
                El alquiler de habitación tiene características especiales que lo diferencian del
                alquiler de vivienda completa:
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>El arrendador mantiene el uso de zonas comunes (cocina, salón, baños)</li>
                <li>
                  Puede incluir cláusulas específicas sobre horarios, visitas y normas de convivencia
                </li>
                <li>Los plazos y condiciones de prórroga pueden ser diferentes a la LAU</li>
                <li>Es importante definir qué gastos están incluidos en el precio mensual</li>
              </ul>
              <p className="mt-6 rounded-lg bg-blue-50 p-4 text-sm">
                <strong>Te ayudamos:</strong> Incluimos cláusulas que protejan tanto al arrendador
                como al inquilino y eviten problemas futuros de convivencia.
              </p>
            </div>
          </div>
        </section>

        {/* Galería */}
        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Nuestro despacho</h2>
            <p className="mt-3 text-[#475569]">
              Atención personalizada y profesional en cada contrato.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["/images/gestoria3.jpg", "/images/gestoria4.jpg", "/images/gestoria5.jpg"].map(
                (src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
                  >
                    <Image
                      src={src}
                      alt={`Despacho Livendia ${idx + 1}`}
                      fill
                      className="object-cover transition hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
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
            <h2 className="text-3xl font-bold">¿Vas a alquilar una habitación?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Protégete con un contrato claro y adaptado a tu situación.
            </p>
            <div className="mt-8">
              <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                Contratar ahora
              </ContratarServicioButton>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
    </ServicePurchaseProvider>
  );
}
