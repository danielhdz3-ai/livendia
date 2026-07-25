import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import { RESERVA_DE_COMPRA_PRICE_LABEL, resolveServicePriceLabel } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Shield, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: `Reserva de compra — ${RESERVA_DE_COMPRA_PRICE_LABEL} IVA incl. | Livendia`,
  description:
    `Documento de reserva de compraventa personalizado: plazos, señal, condiciones y protección de tu dinero. Entrega 48–72 h. ${RESERVA_DE_COMPRA_PRICE_LABEL} IVA incluido. Livendia.`,
  alternates: { canonical: `${getSiteUrl()}/servicios/reserva-de-compra` },
};

const INCLUDED = [
  "Documento de reserva en 48–72 h laborables",
  "Redacción personalizada según vuestra operación",
  "Protección de la señal económica acordada",
  "Asesoramiento del gestor antes de firmar",
];

export default async function ReservaDeCompraPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "reserva-de-compra") ?? null;
  const priceLabel = resolveServicePriceLabel(service, RESERVA_DE_COMPRA_PRICE_LABEL);

  const features = [
    {
      icon: FileText,
      title: "Reserva a medida",
      description: "Cláusulas adaptadas al precio, plazos y condiciones que habéis negociado con la otra parte.",
    },
    {
      icon: Shield,
      title: "Señal protegida",
      description: "Definimos qué ocurre con el importe entregado si la operación no llega a arras o escritura.",
    },
    {
      icon: Clock,
      title: "Entrega 48–72 h",
      description: "Borrador listo en plazo laboral tras recibir los datos de comprador, vendedor e inmueble.",
    },
    {
      icon: CheckCircle,
      title: "Gestor asignado",
      description: "Resolvemos dudas antes de firmar para que la reserva no deje lagunas jurídicas.",
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
                    Compraventa
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Reserva de compra
                  </h1>
                  <p className="mt-5 text-xl leading-relaxed text-blue-100">
                    {service?.description ??
                      "Documento de reserva de compraventa con redacción profesional antes de entregar la señal."}
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
                      href="/servicios/acompanamiento-reserva-arras"
                      className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      ¿Necesitas ir hasta arras? Ver acompañamiento
                    </Link>
                  </div>
                </div>

                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                  <Image
                    src="/images/contratos6.jpg"
                    alt="Reserva de compra de vivienda"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">¿Qué incluye?</h2>
              <ul className="mx-auto mt-10 max-w-2xl space-y-3">
                {(service?.features?.length ? service.features : INCLUDED).map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#475569]">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

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
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">¿Para quién es la reserva de compra?</h2>
              <div className="mt-6 space-y-4 text-[#475569]">
                <p>
                  Cuando comprador y vendedor acuerdan reservar el piso pero aún no firmáis arras, hace falta un
                  documento que fije precio, plazos y qué pasa con la señal. Las plantillas genéricas suelen dejar
                  condiciones suspensivas, devoluciones o penalidades mal definidas.
                </p>
                <ul className="ml-6 list-disc space-y-2">
                  <li>Compraventa entre particulares (Idealista, recomendación, etc.)</li>
                  <li>Operaciones donde aún no tenéis fecha de arras cerrada</li>
                  <li>Quien quiere solo el documento de reserva, sin acompañamiento hasta arras</li>
                </ul>
                <p className="mt-6 rounded-lg bg-blue-50 p-4 text-sm">
                  <strong>¿Vas a necesitar revisión registral y arras después?</strong> Consulta el{" "}
                  <Link href="/servicios/acompanamiento-reserva-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                    acompañamiento reserva hasta arras
                  </Link>{" "}
                  o el{" "}
                  <Link href="/servicios/servicio-completo-compra" className="font-semibold text-[#1A4FBF] hover:underline">
                    servicio completo hasta escritura
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold">¿Vas a reservar un piso?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrata online, sube la información en tu panel y recibe el borrador revisado por gestor.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
                <Link
                  href="/servicios/contrato-de-arras"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Guía de arras
                </Link>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
