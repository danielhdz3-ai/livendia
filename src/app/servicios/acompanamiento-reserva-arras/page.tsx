import { FaqSection } from "@/components/faq-section";
import { AcompanamientoReservaArrasLocalCityLinks } from "@/components/acompanamiento-reserva-arras-local-city-links";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { WhatsAppLeadLink } from "@/components/whatsapp-lead-button";
import { PublicHeader } from "@/components/public-header";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileText, Shield, Clock, CheckCircle } from "lucide-react";

const canonical = `${getSiteUrl()}/servicios/acompanamiento-reserva-arras`;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Acompañamiento reserva hasta arras — 424 € IVA incl.",
  description:
    "Asesoramiento jurídico desde la reserva hasta el contrato de arras: revisión de reserva, nota registral, urbanismo y redacción de arras. 424 € IVA incluido.",
  alternates: { canonical },
  openGraph: {
    title: "Acompañamiento reserva hasta arras",
    description:
      "Asesoramiento jurídico desde la reserva hasta el contrato de arras. 424 € IVA incluido.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
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
                    Compras entre particulares y ya firmaste reserva o estás a punto: un gestor inmobiliario revisa el
                    documento, la nota registral y el urbanismo antes de que el dinero quede vinculante, y te acompaña
                    hasta un contrato de arras coherente con lo acordado.
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">424 €</span>
                    <span className="text-lg text-blue-200">IVA incluido</span>
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                      Contratar por 424 €
                    </ContratarServicioButton>
                    <WhatsAppLeadLink
                      placement="acompanamiento_reserva_arras_hero_whatsapp"
                      serviceLabel="Acompañamiento reserva hasta arras"
                      needType="arras"
                      mode="direct"
                      className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      Consultar por WhatsApp
                    </WhatsAppLeadLink>
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
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

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">¿En qué momento encaja este servicio?</h2>
              <p className="mt-6 text-lg leading-relaxed text-[#475569]">
                Cuando has encontrado piso con otro particular, has negociado precio y plazos, y el vendedor o la
                inmobiliaria te pide firmar una reserva o entregar una señal. Es el tramo más delicado: todavía no hay
                arras penitenciales ni escritura, pero ya comprometes dinero y calendario. Livendia entra antes de que
                esas condiciones queden fijas sin revisión profesional.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                Si prefieres un único gestor desde la primera visita hasta la escritura, el{" "}
                <Link
                  href="/servicios/servicio-completo-compra"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  servicio completo de compra (890 €)
                </Link>{" "}
                cubre reserva, arras y cierre. El acompañamiento reserva–arras es la opción focalizada si ya llevas parte
                del camino hecho o quieres validar solo este tramo.
              </p>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">Qué revisamos en tu expediente</h2>
              <ul className="mt-8 space-y-4 text-lg text-[#475569]">
                <li>
                  <strong className="text-[#1E293B]">Documento de reserva:</strong> plazos, penalizaciones, quién
                  asume gastos si la operación no sigue y coherencia con el precio acordado.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Nota registral:</strong> titularidad, cargas, hipotecas y
                  limitaciones que afecten a la compra.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Situación urbanística básica:</strong> indicios de
                  irregularidades o licencias pendientes que debas conocer antes de pagar.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Borrador de arras:</strong> penitenciales o confirmatorias,
                  calendario de pago y condiciones suspensivas razonables.
                </li>
                <li>
                  <strong className="text-[#1E293B]">Coordinación con el vendedor:</strong> respuestas en lenguaje
                  claro para que ambas partes firmen con el mismo entendimiento.
                </li>
              </ul>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">Proceso con tu gestor Livendia</h2>
              <ol className="mt-8 space-y-6">
                {[
                  {
                    t: "Contratas por 424 € IVA incl.",
                    d: "Pago seguro con tarjeta; accedes al panel para subir reserva y datos del inmueble.",
                  },
                  {
                    t: "Asignación de gestor",
                    d: "Un profesional inmobiliario toma el expediente y te indica qué documentación falta.",
                  },
                  {
                    t: "Análisis registral y de reserva",
                    d: "Informe de riesgos y recomendaciones antes de transferir importes relevantes.",
                  },
                  {
                    t: "Hacia las arras",
                    d: "Ajustamos o redactamos el contrato de arras alineado con lo revisado; resolvemos dudas hasta la firma.",
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
              <p className="mt-8 text-[#475569]">
                También puedes contratar por separado{" "}
                <Link
                  href="/servicios/contrato-arras-penitenciales"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  arras penitenciales
                </Link>{" "}
                o{" "}
                <Link
                  href="/servicios/revision-documental-post-arras"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  revisión documental post-arras
                </Link>{" "}
                si tu operación ya está en otra fase.
              </p>
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel="Acompañamiento reserva hasta arras"
            needType="arras"
            placement="acompanamiento_reserva_arras_mid"
          />

          <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">Acompañamiento reserva–arras por ciudad</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                Landings locales para compradores: mercado, normativa y testimonios por ciudad. Misma tarifa 424 € IVA
                incl.
              </p>
              <div className="mt-8">
                <AcompanamientoReservaArrasLocalCityLinks />
              </div>
              <p className="mt-6 text-center text-sm text-[#64748b]">
                <Link
                  href="/servicios/acompanamiento-reserva-arras-local"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Ver índice de ciudades
                </Link>
              </p>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                title="Preguntas frecuentes — acompañamiento reserva hasta arras"
                items={[
                  {
                    question: "¿Puedo contratar si ya firmé la reserva?",
                    answer:
                      "Sí, aunque lo ideal es antes de entregar dinero. Revisamos el texto vigente y te indicamos riesgos y próximos pasos.",
                  },
                  {
                    question: "¿Sustituye al servicio completo de compra?",
                    answer:
                      "No. Este servicio cubre el tramo reserva–arras. Si quieres gestor hasta escritura, contrata el servicio completo de compra.",
                  },
                  {
                    question: "¿Incluye la escritura en notaría?",
                    answer:
                      "No forma parte de este pack. Te acompañamos hasta unas arras bien planteadas; la escritura puede encajar en otro servicio o en el completo.",
                  },
                  {
                    question: "¿Trabajáis con compras entre particulares sin agencia?",
                    answer:
                      "Sí, es nuestro foco: comprador y vendedor particulares con gestor Livendia como tercero profesional.",
                  },
                  {
                    question: "¿Cuánto tarda la primera revisión?",
                    answer:
                      "Depende de la documentación recibida; en condiciones normales el gestor responde en plazos laborables publicados tras subir la reserva al panel.",
                  },
                ]}
              />
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
        <ServiceLandingSharedSections />

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
