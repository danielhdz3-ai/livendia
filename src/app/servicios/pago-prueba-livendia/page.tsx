import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  PAGO_PRUEBA_LIVENDIA_PRICE_LABEL,
  PAGO_PRUEBA_LIVENDIA_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, CreditCard, FileUp } from "lucide-react";

export const revalidate = 300;

export const metadata: Metadata = {
  title: `Pago de prueba — ${PAGO_PRUEBA_LIVENDIA_PRICE_LABEL} IVA incl. | Livendia`,
  description:
    `Contrata online por ${PAGO_PRUEBA_LIVENDIA_PRICE_LABEL} IVA incluido, recibe confirmación por email y gestiona tu expediente con subida de documentación. Livendia.`,
  alternates: { canonical: `${getSiteUrl()}/servicios/${PAGO_PRUEBA_LIVENDIA_SLUG}` },
};

const INCLUDED = [
  "Contratación online con confirmación inmediata",
  "Acceso al área de cliente y expediente del pedido",
  "Subida segura de documentación",
  "Confirmación por email",
];

const STEPS = [
  {
    icon: CreditCard,
    title: "Contratación online",
    description: "Completa el checkout con tus datos y realiza el pago de forma segura con Stripe.",
  },
  {
    icon: CheckCircle,
    title: "Confirmación",
    description: "Recibirás email de confirmación y acceso automático a tu expediente en el área de cliente.",
  },
  {
    icon: FileUp,
    title: "Subida de documentos",
    description: "Centraliza la documentación de tu operación en el expediente del pedido.",
  },
];

export default async function PagoPruebaLivendiaPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === PAGO_PRUEBA_LIVENDIA_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, PAGO_PRUEBA_LIVENDIA_PRICE_LABEL);

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
                    Otros servicios
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    Pago de prueba Livendia
                  </h1>
                  <p className="mt-5 text-xl leading-relaxed text-blue-100">
                    {service?.description ??
                      "Servicio de 5 € para contratar online, recibir confirmación y gestionar tu expediente con subida de documentación."}
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
                    src="/images/gestoria.jpg"
                    alt="Pago de prueba Livendia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
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

              <div className="mt-12 grid gap-8 sm:grid-cols-3">
                {STEPS.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div
                      key={step.title}
                      className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                        <Icon className="h-6 w-6 text-[#06B6D4]" aria-hidden />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold">¿Listo para contratar?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrata online, accede a tu expediente y sube la documentación desde el área de cliente.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
                <Link
                  href="/precios"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Ver precios
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
