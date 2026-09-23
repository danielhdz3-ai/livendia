import { ContratoAlquilerOpcionCompraLocalCityLinks } from "@/components/contrato-alquiler-opcion-compra-local-city-links";
import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  CONTRATO_ALQUILER_OPCION_COMPRA_FAQ,
  CONTRATO_ALQUILER_OPCION_COMPRA_INCLUDES,
} from "@/lib/contrato-alquiler-opcion-compra-content";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, FileText, KeyRound, Scale, Shield, Clock } from "lucide-react";

export const revalidate = 300;

const canonical = `${getSiteUrl()}/servicios/contrato-alquiler-opcion-compra`;

export const metadata: Metadata = {
  title: `Contrato de alquiler con opción a compra — ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incl.`,
  description:
    `Redacción profesional del arrendamiento con pacto de opción de compra entre particulares. Precio de ejercicio, plazo, rentas e inventario. ${CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL} IVA incl. — gestoría Livendia.`,
  alternates: { canonical },
  keywords: [
    "contrato alquiler opción compra",
    "alquiler con opción a compra",
    "rent to own contrato",
    "arrendamiento opción compra",
    "redactar contrato alquiler opción compra",
  ],
};

export default async function ContratoAlquilerOpcionCompraPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-alquiler-opcion-compra") ?? null;
  const priceLabel = resolveServicePriceLabel(service, CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL);

  const features = [
    {
      icon: KeyRound,
      title: "Opción de compra definida",
      description: "Precio de ejercicio, plazo y condiciones para que ambas partes sepan qué pasa en cada escenario.",
    },
    {
      icon: Scale,
      title: "LAU + pactos particulares",
      description: "Arrendamiento conforme a la ley con cláusulas específicas de la opción y derechos del inquilino.",
    },
    {
      icon: FileText,
      title: "Tratamiento de rentas",
      description: "Si parte de la mensualidad se imputa al precio final, lo dejamos por escrito sin ambigüedades.",
    },
    {
      icon: Shield,
      title: "Inventario incluido",
      description: "Estado del inmueble documentado para la entrada y para cuando llegue el momento de comprar.",
    },
    {
      icon: Clock,
      title: "Gestor hasta la firma",
      description: "Un gestor dedicado resuelve dudas y entrega el contrato listo para firmar en 48-72 h laborables.",
    },
    {
      icon: CheckCircle,
      title: "Entre particulares",
      description: "Sin comisión de agencia: gestoría profesional online con pago seguro y panel Livendia.",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    Entre particulares · Rent-to-own
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Contrato de alquiler con opción a compra
                  </h1>
                  <p className="mt-5 text-xl leading-relaxed text-blue-100">
                    ¿Alquilas con posibilidad de que el inquilino compre el piso más adelante? Livendia redacta el
                    arrendamiento y el pacto de opción — precio futuro, plazo, rentas e inventario — por{" "}
                    <strong className="text-white">{priceLabel} IVA incl.</strong>
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
                      href="/servicios/redactar-contrato-alquiler"
                      className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      Otros contratos de alquiler
                    </Link>
                  </div>
                </div>

                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                  <Image
                    src="/images/contratos7.jpg"
                    alt="Contrato de alquiler con opción a compra"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
                <div>
                  <h2 className="text-3xl font-bold text-[#1E293B]">¿Para quién es este servicio?</h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                    Para propietarios e inquilinos que ya han acordado (o quieren acordar) un alquiler con derecho futuro
                    a comprar la vivienda. No basta un LAU genérico: hace falta regular la opción, el precio de
                    ejercicio, los plazos y qué ocurre con las rentas si finalmente se compra — o si no.
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                    Livendia no es agencia: somos gestoría. Redactamos el contrato adaptado a vuestro acuerdo y os
                    asesoramos sobre los puntos sensibles (tanteo, imputación de rentas, extinción del arrendamiento al
                    ejercer la opción).
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200">
                  <h3 className="text-xl font-bold text-[#1E293B]">Qué incluye la redacción</h3>
                  <ul className="mt-6 space-y-3">
                    {CONTRATO_ALQUILER_OPCION_COMPRA_INCLUDES.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-[#475569]">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Claves del contrato bien redactado</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200 transition-shadow hover:shadow-md"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                        <Icon className="h-6 w-6 text-[#06B6D4]" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">{feature.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <ContratoAlquilerOpcionCompraLocalCityLinks />
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel="Contrato de alquiler con opción a compra"
            needType="alquiler"
            placement="contrato_alquiler_opcion_compra_mid"
          />

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <FaqSection title="Preguntas frecuentes" items={[...CONTRATO_ALQUILER_OPCION_COMPRA_FAQ]} />
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-[#64748B]">
                También ofrecemos{" "}
                <Link href="/servicios/contrato-alquiler-lau" className="font-semibold text-[#1A4FBF] hover:underline">
                  contrato LAU habitual
                </Link>
                ,{" "}
                <Link
                  href="/servicios/contrato-alquiler-temporada"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  alquiler por temporada
                </Link>{" "}
                y{" "}
                <Link
                  href="/servicios/servicio-completo-compra"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  servicio completo de compra
                </Link>{" "}
                cuando llegue el momento de escriturar.
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold">Contrato con opción a compra, bien cerrado</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrata ahora y recibe la redacción profesional en 48-72 h laborables tras validar la información.
              </p>
              <div className="mt-8">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
              </div>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections />
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
