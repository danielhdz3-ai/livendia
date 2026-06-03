import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Users, FileText, Clock, CheckCircle } from "lucide-react";

const canonical = `${getSiteUrl()}/servicios/contrato-alquiler-habitacion`;

export const metadata: Metadata = {
  title: `Contrato de alquiler de habitación — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. | Livendia`,
  description:
    `Arrendamiento de habitación en piso compartido con cláusulas específicas para este régimen. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incluido.`,
  alternates: { canonical },
  openGraph: {
    title: `Contrato de alquiler de habitación | Livendia`,
    description:
      `Arrendamiento de habitación en piso compartido con cláusulas específicas. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incluido.`,
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function ContratoHabitacionPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-alquiler-habitacion") ?? null;
  const priceLabel = resolveServicePriceLabel(service, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL);

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
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Contrato de Alquiler de Habitación
                </h1>
                <p className="mt-5 text-xl leading-relaxed text-blue-100">
                  Arrendamiento de habitación en piso compartido: normas de convivencia, zonas comunes, gastos y plazos
                  redactados por un gestor inmobiliario — no un PDF genérico de vivienda completa.
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

        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">¿Quién contrata este servicio?</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
              <p>
                Propietarios que alquilan una habitación en su vivienda habitual, inquilinos que quieren salir de un
                acuerdo verbal y arrendadores con varios inquilinos en el mismo piso. También agencias o particulares que
                ya tienen un borrador pero necesitan que un gestor lo adapte al régimen de habitación y a la convivencia
                real del piso.
              </p>
              <p>
                Livendia trabaja en toda España: el contrato se tramita online y el inmueble puede estar en Madrid,
                Barcelona, Valencia, Málaga, Sevilla o cualquier municipio. Si buscas revisión LAU de vivienda completa,
                consulta nuestro{" "}
                <Link href="/servicios/contrato-de-alquiler" className="font-semibold text-[#1A4FBF] hover:underline">
                  contrato de alquiler
                </Link>{" "}
                o las landings locales como{" "}
                <Link
                  href="/servicios/contrato-alquiler-local/madrid"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Madrid
                </Link>
                ,{" "}
                <Link
                  href="/servicios/contrato-alquiler-local/barcelona"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Barcelona
                </Link>{" "}
                o{" "}
                <Link
                  href="/servicios/contrato-alquiler-local/asturias"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Asturias
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">
              Habitación vs. alquiler de vivienda completa (LAU)
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
              <p>
                El alquiler de habitación no replica el contrato LAU de un piso entero: el arrendador sigue usando cocina,
                salón y baños compartidos; las visitas, horarios, limpieza y reparto de suministros deben constar por
                escrito. Los plazos de permanencia, la fianza y la forma de actualizar la renta pueden diferir del
                arrendamiento urbano habitual.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Uso exclusivo de la habitación y normas de las zonas comunes</li>
                <li>Visitas del arrendador o de otros inquilinos</li>
                <li>Gastos incluidos en la mensualidad (luz, agua, internet, limpieza)</li>
                <li>Depósito, devolución y estado del mobiliario de la habitación</li>
                <li>Causas de resolución y preaviso de salida</li>
              </ul>
              <p>
                Con Livendia recibes un expediente en el panel de cliente: subes datos de las partes, fotos del piso y el
                gestor redacta o revisa el texto en 24-48 horas laborables tras tener la información completa.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">Proceso en cuatro pasos</h2>
            <ol className="mt-8 space-y-6">
              {[
                {
                  t: "Contratas online",
                  d: `Pagas ${priceLabel} IVA incl. con tarjeta; se abre tu expediente en el área de cliente.`,
                },
                {
                  t: "Briefing del piso y las partes",
                  d: "Indicas dirección, habitación, renta, gastos, normas de convivencia y si hay más inquilinos.",
                },
                {
                  t: "Redacción o revisión gestora",
                  d: "El gestor adapta cláusulas al régimen de habitación y al inventario acordado.",
                },
                {
                  t: "Entrega y dudas previas a firmar",
                  d: "Recibes el contrato listo; resolvemos preguntas de propiedad e inquilino antes de la firma.",
                },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-[#1E293B]">{step.t}</h3>
                    <p className="mt-1 text-[#475569]">{step.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <FaqSection
              title="Preguntas frecuentes — contrato de alquiler de habitación"
              items={[
                {
                  question: "¿Sirve si ya tengo un contrato de la agencia?",
                  answer:
                    "Sí. Lo revisamos y corregimos lagunas sobre convivencia, gastos o fianza antes de que firmes.",
                },
                {
                  question: "¿Puedo alquilar varias habitaciones del mismo piso?",
                  answer:
                    "Cada habitación puede llevar contrato propio o un documento marco; el gestor te orienta según convivan varios inquilinos.",
                },
                {
                  question: "¿Incluye inventario?",
                  answer:
                    "Documentamos el estado de la habitación y elementos comunes relevantes para evitar disputas al finalizar.",
                },
                {
                  question: "¿Es lo mismo que un contrato LAU de piso completo?",
                  answer:
                    "No. El régimen y las cláusulas son distintos; por eso existe este servicio específico y no debe usarse una plantilla de vivienda entera.",
                },
                {
                  question: "¿Atendéis solo en una ciudad?",
                  answer:
                    "No. El servicio es nacional; las landings por ciudad son para SEO local, pero contratas desde cualquier lugar.",
                },
              ]}
            />
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
