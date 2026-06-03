import { PublicHeader } from "@/components/public-header";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Shield, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Acompañamiento reserva hasta arras — 424 € IVA incl. | Livendia",
  description:
    "Asesoramiento jurídico desde la reserva hasta el contrato de arras: revisión de reserva, nota registral, urbanismo y redacción de arras. 424 € IVA incluido.",
};

export default async function AcompanamientoReservaArrasPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "acompanamiento-reserva-arras") ?? null;

  const features = [
    {
      icon: FileText,
      title: "Revisión de reserva",
      description: "Analizamos el documento de reserva antes de que quede vinculante.",
    },
    {
      icon: Shield,
      title: "Nota registral y urbanismo",
      description: "Contrastamos cargas, licencias y situación registral del inmueble.",
    },
    {
      icon: Clock,
      title: "Hasta las arras",
      description: "Te acompañamos hasta un contrato de arras coherente con lo acordado.",
    },
    {
      icon: CheckCircle,
      title: "Gestor asignado",
      description: "Un interlocutor experto durante todo el tramo reserva–arras.",
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
                    Acompañamiento: reserva hasta arras
                  </h1>
                  <p className="mt-5 text-xl leading-relaxed text-blue-100">
                    {service?.description ??
                      "Servicio de asesoramiento jurídico desde la reserva hasta el contrato de arras."}
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">424 €</span>
                    <span className="text-lg text-blue-200">IVA incluido</span>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                      Contratar por 424 €
                    </ContratarServicioButton>
                    <Link
                      href="/servicios/servicio-completo-compra"
                      className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      Ver servicio completo hasta escritura
                    </Link>
                  </div>
                </div>
                <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                  <Image
                    src="/images/familia1.jpg"
                    alt="Acompañamiento en compra de vivienda"
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
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {features.map((feature) => {
                  const Icon = feature.icon;
                  return (
                    <div
                      key={feature.title}
                      className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                        <Icon className="h-6 w-6 text-[#06B6D4]" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">{feature.title}</h3>
                      <p className="mt-2 text-sm text-[#475569]">{feature.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold">¿Compras con reserva firmada?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrata el acompañamiento y sube tu documentación en el área de cliente.
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
