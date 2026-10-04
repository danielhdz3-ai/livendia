import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  SERVICIO_ALQUILER_INTEGRAL_PATH,
  SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL,
  SERVICIO_ALQUILER_INTEGRAL_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import {
  SERVICIO_ALQUILER_INTEGRAL_FAQ,
  SERVICIO_ALQUILER_INTEGRAL_HERO_BADGE,
  SERVICIO_ALQUILER_INTEGRAL_INCLUDED,
  SERVICIO_ALQUILER_INTEGRAL_INSURANCE_NOTE,
  SERVICIO_ALQUILER_INTEGRAL_NOT_INCLUDED,
  SERVICIO_ALQUILER_INTEGRAL_OPTIONAL_ADMIN,
  SERVICIO_ALQUILER_INTEGRAL_PROCESS_STEPS,
  SERVICIO_ALQUILER_INTEGRAL_SCOPE,
} from "@/lib/servicio-alquiler-integral-shared";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  FileSignature,
  Phone,
  Search,
  ShieldCheck,
  UserCheck,
  XCircle,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const canonical = `${getSiteUrl()}${SERVICIO_ALQUILER_INTEGRAL_PATH}`;

export const revalidate = 300;

export const metadata: Metadata = {
  title: `Servicio de alquiler integral para propietarios — desde ${SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL} IVA incl.`,
  description:
    "Búsqueda de inquilinos, filtrado con seguro de impago recomendado, contrato, fianza, suministros y entrega de llaves. Administración mensual opcional. Livendia.",
  alternates: { canonical },
  openGraph: {
    title: "Servicio de alquiler integral",
    description:
      "Del anuncio al inquilino en tu vivienda: captación, solvencia, contrato y trámites. Sin comisión de agencia por porcentaje.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

const processIcons = [Search, UserCheck, ShieldCheck, FileSignature] as const;

export default async function ServicioAlquilerIntegralPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === SERVICIO_ALQUILER_INTEGRAL_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, SERVICIO_ALQUILER_INTEGRAL_PRICE_LABEL);

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, me interesa el servicio de alquiler integral (búsqueda de inquilino y puesta en marcha). ¿Me podéis enviar presupuesto?",
  )}`;

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    {SERVICIO_ALQUILER_INTEGRAL_HERO_BADGE}
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-5xl">
                    Servicio de alquiler integral
                  </h1>
                  <p className="mt-6 text-xl leading-relaxed text-blue-50">
                    Búsqueda activa de inquilinos, filtrado de los perfiles más solventes, trámite con seguro de impago
                    recomendado, contrato, fianza, suministros y entrega de llaves. Tú alquilas con criterio; nosotros
                    llevamos el proceso de principio a fin.
                  </p>
                  <p className="mt-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm leading-relaxed text-blue-50">
                    {SERVICIO_ALQUILER_INTEGRAL_SCOPE}
                  </p>

                  <div className="mt-10 flex flex-wrap items-baseline gap-3">
                    <span className="text-sm font-semibold uppercase tracking-wide text-cyan-200">Desde</span>
                    <span className="text-4xl font-extrabold sm:text-5xl">{priceLabel}</span>
                    <div className="text-lg text-blue-100">
                      <div>IVA incl. · presupuesto cerrado antes de empezar</div>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    {[
                      "Captación y visitas con candidatos filtrados",
                      "Estudio de solvencia vía aseguradora recomendada",
                      "Contrato, fianza y altas de suministros",
                    ].map((line) => (
                      <div key={line} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" />
                        <span className="text-lg">{line}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:scale-105 hover:bg-blue-50"
                    >
                      Solicitar presupuesto
                    </a>
                    <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10">
                      Reservar con pago seguro
                    </ContratarServicioButton>
                  </div>

                  <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-blue-100">
                    <a
                      href={getContactPhoneTelHref()}
                      className="inline-flex items-center gap-2 font-semibold text-white hover:text-cyan-200"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                      <span>Llamar: {getContactPhoneDisplay()}</span>
                    </a>
                  </div>
                </div>

                <div className="relative h-44 sm:h-56 lg:h-auto">
                  <Image
                    src="/images/servicio-alquiler-integral-hero.jpg"
                    alt="Gestora Livendia coordinando la puesta en marcha de un alquiler para propietarios"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">Cómo funciona</h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-[#64748b]">
                Cuatro fases hasta que el inquilino entra en la vivienda con contrato y trámites en orden.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {SERVICIO_ALQUILER_INTEGRAL_PROCESS_STEPS.map((step, index) => {
                  const Icon = processIcons[index] ?? ClipboardCheck;
                  return (
                    <div
                      key={step.title}
                      className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 ring-1 ring-slate-100"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#EFF6FF]">
                        <Icon className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                      </div>
                      <p className="mt-4 text-sm font-bold text-[#1A4FBF]">Paso {index + 1}</p>
                      <h3 className="mt-1 text-lg font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200">
                  <ShieldCheck className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                </div>
                <div>
                  <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                    {SERVICIO_ALQUILER_INTEGRAL_INSURANCE_NOTE.title}
                  </h2>
                  <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                    {SERVICIO_ALQUILER_INTEGRAL_INSURANCE_NOTE.body}
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              <div>
                <h2 className="text-2xl font-extrabold text-[#1E293B]">Qué incluye</h2>
                <ul className="mt-6 space-y-4">
                  {SERVICIO_ALQUILER_INTEGRAL_INCLUDED.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#475569] sm:text-base">
                      <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-extrabold text-[#1E293B]">Qué no incluye</h2>
                <ul className="mt-6 space-y-4">
                  {SERVICIO_ALQUILER_INTEGRAL_NOT_INCLUDED.map((line) => (
                    <li key={line} className="flex gap-3 text-sm leading-relaxed text-[#475569] sm:text-base">
                      <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-slate-400" aria-hidden />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-gradient-to-b from-white to-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Después del alquiler (opcional)
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-[#64748b]">
                Cuando el inquilino ya está dentro, puedes delegar el día a día con la administración Livendia — sin
                obligación de contratarla en el pack integral.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {SERVICIO_ALQUILER_INTEGRAL_OPTIONAL_ADMIN.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-[#1A4FBF]/40 hover:shadow-md"
                  >
                    <h3 className="text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{item.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-[#475569]">{item.description}</p>
                    <p className="mt-4 text-sm font-semibold text-[#1A4FBF]">{item.priceLabel} · IVA incl.</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF]">
                      Ver servicio
                      <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" aria-hidden />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          <FaqSection title="Preguntas frecuentes" items={[...SERVICIO_ALQUILER_INTEGRAL_FAQ]} />

          <section className="bg-[#1A4FBF] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-3xl">¿Quieres alquilar tu vivienda con respaldo?</h2>
              <p className="mt-4 text-lg text-blue-100">
                Cuéntanos municipio, tipo de contrato y plazos. Te enviamos presupuesto del servicio integral antes de
                activar la búsqueda de inquilino.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center rounded-full bg-white px-8 py-3.5 text-base font-bold text-[#1A4FBF] hover:bg-blue-50"
                >
                  WhatsApp — solicitar presupuesto
                </a>
                <Link
                  href="/contacto"
                  className="inline-flex min-h-11 items-center rounded-full border-2 border-white px-8 py-3.5 text-base font-semibold hover:bg-white/10"
                >
                  Formulario de contacto
                </Link>
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
