import { ClientPlatformShowcase } from "@/components/client-platform-showcase";
import { FaqSection } from "@/components/faq-section";
import { LivendiaFoundersBanner } from "@/components/livendia-founders-banner";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  ACOMPANAMIENTO_ALQUILER_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { AcompanamientoAlquilerLocalCityLinks } from "@/components/acompanamiento-alquiler-local-city-links";
import {
  ACOMPANAMIENTO_ALQUILER_LOCAL_BASE,
  getPublishedAcompanamientoAlquilerLocalCities,
} from "@/lib/acompanamiento-alquiler-local-cities";
import {
  ACOMPANAMIENTO_ALQUILER_FAQ,
  ACOMPANAMIENTO_ALQUILER_INCLUDED,
  ACOMPANAMIENTO_ALQUILER_NOT_INCLUDED,
  ACOMPANAMIENTO_ALQUILER_PILLARS,
  ACOMPANAMIENTO_ALQUILER_PROCESS_INTRO,
  ACOMPANAMIENTO_ALQUILER_PROCESS_STEPS,
  ACOMPANAMIENTO_ALQUILER_SCOPE,
  ACOMPANAMIENTO_ALQUILER_TESTIMONIALS,
} from "@/lib/acompanamiento-alquiler-shared";
import {
  AlertCircle,
  CheckCircle,
  ClipboardList,
  FileSignature,
  FolderLock,
  Handshake,
  MessageCircle,
  Scale,
  UserRound,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const canonical = `${getSiteUrl()}/servicios/acompanamiento-alquiler`;

export const revalidate = 300;

export const metadata: Metadata = {
  title: `Acompañamiento de alquiler — ${ACOMPANAMIENTO_ALQUILER_PRICE_LABEL} IVA incl. | Livendia`,
  description:
    "Gestor especializado para inquilinos: documentación, revisión y redacción de contratos, firma digital certificada, expediente online y mediación con el propietario. 189 € IVA incl. El servicio acaba cuando tú lo decides.",
  alternates: { canonical },
  openGraph: {
    title: "Acompañamiento de alquiler | Livendia",
    description:
      "Ayuda integral en el trámite de alquiler: gestor, docs, contrato, firma digital y mediación. 189 € IVA incl.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function AcompanamientoAlquilerPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "acompanamiento-alquiler") ?? null;
  const priceLabel = resolveServicePriceLabel(service, ACOMPANAMIENTO_ALQUILER_PRICE_LABEL);

  const waConsultHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, me interesa el acompañamiento de alquiler con gestor Livendia.",
  )}`;

  const processIcons = [FolderLock, ClipboardList, FileSignature, Handshake] as const;
  const pillarIcons = [ClipboardList, FileSignature, UserRound, FolderLock] as const;

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    Para inquilinos · Alquiler
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-6xl">
                    Acompañamiento de alquiler con gestor especializado
                  </h1>
                  <p className="mt-6 text-xl leading-relaxed text-blue-50">
                    Ya tienes (o estás a punto de tener) un piso de alquiler y necesitas ayuda real: qué documentos
                    preparar, cómo revisar o redactar el contrato, firmar con seguridad, guardar el expediente y
                    mediar con la parte propietaria. Un gestor Livendia te acompaña en todo el trámite hasta que tú
                    decides que has terminado.
                  </p>
                  <p className="mt-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm leading-relaxed text-blue-50">
                    {ACOMPANAMIENTO_ALQUILER_SCOPE}
                  </p>

                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-100">IVA incluido</span>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50">
                      Contratar por {priceLabel}
                    </ContratarServicioButton>
                    <a
                      href={waConsultHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="relative h-44 sm:h-56 lg:h-auto">
                  <Image
                    src="/images/tipo1.jpg"
                    alt="Acompañamiento de alquiler Livendia: gestor especializado para inquilinos"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                Qué resuelve este acompañamiento
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-[#64748b]">
                Contexto del día a día del inquilino: papeles, contrato, firma y tranquilidad frente a la normativa.
              </p>
              <div className="mt-10 grid gap-5 sm:grid-cols-2">
                {ACOMPANAMIENTO_ALQUILER_PILLARS.map((item, i) => {
                  const Icon = pillarIcons[i] ?? CheckCircle;
                  return (
                    <article
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1A4FBF]/10 text-[#1A4FBF]">
                        <Icon className="h-5 w-5" aria-hidden />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-[#1E293B]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Qué incluye</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                De la documentación a la firma, con gestor y plataforma. Sin suscripción mensual.
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {ACOMPANAMIENTO_ALQUILER_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    <span className="text-sm font-medium text-[#1E293B]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1E293B]">Qué no incluye</h3>
                <ul className="mt-5 space-y-3">
                  {ACOMPANAMIENTO_ALQUILER_NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-5 text-sm text-[#64748b]">
                  Si eres propietario y buscas gestión mensual del alquiler, mira{" "}
                  <Link
                    href="/servicios/administracion-alquiler"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    administración de alquileres
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">¿Para quién es?</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
                <p>
                  Para <strong>inquilinos</strong> que ya tienen un piso de alquiler o están cerrando la operación y
                  necesitan un profesional que ordene el proceso: qué papeles preparar, cómo leer o redactar el contrato,
                  cómo firmar y cómo hablar con el propietario o la agencia sin perder derechos.
                </p>
                <p>
                  También si te han pedido documentación a destiempo, te han enviado un contrato genérico, hay dudas
                  sobre fianza, gastos o duración, o quieres dejar constancia de todo en un expediente digital seguro.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Cómo funciona</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                {ACOMPANAMIENTO_ALQUILER_PROCESS_INTRO}
              </p>
              <ol className="mt-12 grid gap-6 md:grid-cols-2">
                {ACOMPANAMIENTO_ALQUILER_PROCESS_STEPS.map((step, index) => {
                  const Icon = processIcons[index] ?? CheckCircle;
                  return (
                    <li key={step.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                          {index + 1}
                        </span>
                        <Icon className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
                        <h3 className="text-lg font-bold text-[#1E293B]">{step.title}</h3>
                      </div>
                      <p className="mt-4 text-sm leading-relaxed text-[#475569]">{step.description}</p>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-white p-6 ring-1 ring-[#1A4FBF]/15 sm:flex-row sm:items-start sm:p-8">
              <Scale className="h-10 w-10 shrink-0 text-[#1A4FBF]" aria-hidden />
              <div>
                <h2 className="text-xl font-bold text-[#1E293B]">Normativa y tranquilidad</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  Te ayudamos a comprobar que el contrato y los acuerdos se ciñen a la normativa vigente aplicable a tu
                  caso (LAU u otros regímenes). Es asesoramiento de gestoría inmobiliaria: claridad práctica para firmar
                  y convivir con menos sorpresas, no un proceso judicial.
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                {ACOMPANAMIENTO_ALQUILER_TESTIMONIALS.title}
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {ACOMPANAMIENTO_ALQUILER_TESTIMONIALS.items.map((t) => (
                  <blockquote
                    key={t.author}
                    className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                  >
                    <p className="text-sm leading-relaxed text-[#475569]">“{t.quote}”</p>
                    <footer className="mt-4 text-sm font-semibold text-[#1E293B]">
                      {t.author}
                      <span className="mt-0.5 block text-xs font-normal text-[#64748b]">{t.role}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          <LivendiaFoundersBanner />

          <section className="border-t border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-6xl text-center">
              <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">Por ciudad y zona</h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-[#64748b]">
                Misma tarifa ({priceLabel} IVA incl.) con fianza y normativa local en Les Corts, L&apos;Hospitalet,
                Madrid y Valencia.
              </p>
              <div className="mt-6">
                <AcompanamientoAlquilerLocalCityLinks />
              </div>
              {getPublishedAcompanamientoAlquilerLocalCities().length > 0 ? (
                <p className="mt-4 text-sm">
                  <Link
                    href={ACOMPANAMIENTO_ALQUILER_LOCAL_BASE}
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    Ver todas las landings locales →
                  </Link>
                </p>
              ) : null}
            </div>
          </section>
        <ClientPlatformShowcase />


          <FaqSection
            title="Preguntas frecuentes"
            items={[...ACOMPANAMIENTO_ALQUILER_FAQ]}
            className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6"
          />

          <section className="border-t border-slate-200 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl">Empieza tu acompañamiento de alquiler</h2>
              <p className="mt-4 text-lg text-blue-100">
                {priceLabel} IVA incluido. Gestor, documentación, contrato, firma digital y expediente. Tú decides
                cuándo termina.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:bg-blue-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
                <Link
                  href="/servicios"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Ver todos los servicios
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
