import { FaqSection } from "@/components/faq-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_EUR,
  ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_TEMPORADA_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ADMINISTRACION_ALQUILER_TEMPORADA_FAQ,
  ADMINISTRACION_ALQUILER_TEMPORADA_INCLUDED,
  ADMINISTRACION_ALQUILER_TEMPORADA_NOT_INCLUDED,
  ADMINISTRACION_ALQUILER_TEMPORADA_PILLARS,
  ADMINISTRACION_ALQUILER_TEMPORADA_PRICING,
  ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_INTRO,
  ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_STEPS,
  ADMINISTRACION_ALQUILER_TEMPORADA_SCOPE,
  ADMINISTRACION_ALQUILER_TEMPORADA_TESTIMONIALS,
} from "@/lib/administracion-alquiler-temporada-shared";
import {
  CheckCircle,
  ClipboardList,
  DoorOpen,
  Handshake,
  Phone,
  UserRound,
  Wrench,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const canonical = `${getSiteUrl()}/servicios/administracion-alquiler-temporada`;

export const revalidate = 300;

export const metadata: Metadata = {
  title: `Administración de alquiler por temporada o habitaciones — ${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL}`,
  description:
    "Para propietarios con temporada o habitaciones: Livendia gestiona inquilinos, entradas, salidas y servicio técnico. 79 €/mes IVA incl. Contratos nuevos 100 €. Rescisiones gratis.",
  alternates: { canonical },
  openGraph: {
    title: "Administración de alquiler por temporada o habitaciones",
    description:
      "79 €/mes IVA incl. Control de inquilinos, check-in/check-out y servicio técnico. Contratos 100 €. Rescisiones gratis.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function AdministracionAlquilerTemporadaPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === ADMINISTRACION_ALQUILER_TEMPORADA_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(
    service,
    `${ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_EUR} €`,
  );

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, me interesa la administración de alquiler por temporada o habitaciones (79 €/mes).",
  )}`;

  const processIcons = [ClipboardList, DoorOpen, Wrench, Handshake] as const;
  const pillarIcons = [DoorOpen, UserRound, Wrench, ClipboardList] as const;

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
                    Para propietarios · Temporada y habitaciones
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-6xl">
                    Administración de alquiler por temporada o habitaciones
                  </h1>
                  <p className="mt-6 text-xl leading-relaxed text-blue-50">
                    Si tienes el piso alquilado por temporada o por habitaciones, Livendia lleva el control de
                    inquilinos, entradas, salidas y servicio técnico. Tú cobras; nosotros filtramos el día a día.
                  </p>
                  <p className="mt-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm leading-relaxed text-blue-50">
                    {ADMINISTRACION_ALQUILER_TEMPORADA_SCOPE}
                  </p>

                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <div className="text-lg text-blue-100">
                      <div>/mes · IVA incluido</div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm text-blue-100">
                    Contrato nuevo: {ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL} IVA incl. · Rescisiones:
                    gratis
                  </p>

                  <div className="mt-8 space-y-3">
                    {[
                      "Control de inquilinos, entradas y salidas",
                      "Servicio técnico e incidencias",
                      "Sin permanencia",
                    ].map((line) => (
                      <div key={line} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" />
                        <span className="text-lg">{line}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:scale-105 hover:bg-blue-50">
                      Contratar ahora
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                    >
                      Consultar por WhatsApp
                    </a>
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
                    src="/images/gestoria20.jpg"
                    alt="Administración de alquiler por temporada o habitaciones Livendia"
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
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">Precios claros</h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-[#64748b]">
                Cuota de administración, contrato aparte y rescisiones incluidas.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {ADMINISTRACION_ALQUILER_TEMPORADA_PRICING.map((row) => (
                  <div
                    key={row.title}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 text-center shadow-sm"
                  >
                    <p className="text-sm font-semibold uppercase tracking-wide text-[#64748b]">{row.title}</p>
                    <p className="mt-3 text-3xl font-extrabold text-[#1A4FBF]">{row.price}</p>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">{row.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">Qué incluye</h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-[#64748b]">
                {ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_INTRO}
              </p>
              <ul className="mx-auto mt-10 max-w-3xl space-y-3">
                {ADMINISTRACION_ALQUILER_TEMPORADA_INCLUDED.map((item) => (
                  <li key={item} className="flex gap-3 rounded-xl bg-white px-4 py-3 shadow-sm ring-1 ring-slate-200">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-500" />
                    <span className="text-[#334155]">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4">
                <p className="text-sm font-semibold text-amber-900">No incluido en la cuota mensual</p>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-amber-950/90">
                  {ADMINISTRACION_ALQUILER_TEMPORADA_NOT_INCLUDED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">Cómo funciona</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {ADMINISTRACION_ALQUILER_TEMPORADA_PROCESS_STEPS.map((step, idx) => {
                  const Icon = processIcons[idx] ?? ClipboardList;
                  return (
                    <div key={step.title} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm">
                      <div className="mb-4 inline-flex rounded-2xl bg-[#1A4FBF] p-3 text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-sm font-semibold text-[#1A4FBF]">Paso {idx + 1}</p>
                      <h3 className="mt-1 text-xl font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 leading-relaxed text-[#475569]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">Por qué este servicio</h2>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {ADMINISTRACION_ALQUILER_TEMPORADA_PILLARS.map((pillar, idx) => {
                  const Icon = pillarIcons[idx] ?? UserRound;
                  return (
                    <div key={pillar.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                      <Icon className="h-8 w-8 text-[#1A4FBF]" />
                      <h3 className="mt-4 text-lg font-bold text-[#1E293B]">{pillar.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{pillar.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                {ADMINISTRACION_ALQUILER_TEMPORADA_TESTIMONIALS.title}
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {ADMINISTRACION_ALQUILER_TEMPORADA_TESTIMONIALS.items.map((t) => (
                  <blockquote
                    key={t.author}
                    className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 shadow-sm"
                  >
                    <p className="text-[#334155]">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4 text-sm font-semibold text-[#1E293B]">
                      {t.author}
                      <span className="font-normal text-[#64748b]"> · {t.role}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          <FaqSection
            title="Preguntas frecuentes"
            items={[...ADMINISTRACION_ALQUILER_TEMPORADA_FAQ]}
          />

          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-center text-white sm:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-extrabold sm:text-4xl">
                Delega temporada y habitaciones desde {ADMINISTRACION_ALQUILER_TEMPORADA_MONTHLY_PRICE_LABEL}
              </h2>
              <p className="mt-4 text-blue-100">
                Sin permanencia. Contratos nuevos a {ADMINISTRACION_ALQUILER_TEMPORADA_CONTRATO_PRICE_LABEL}. Rescisiones
                gratis.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:scale-105 hover:bg-blue-50">
                  Contratar administración
                </ContratarServicioButton>
                <Link
                  href="/servicios/administracion-alquiler"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                >
                  Ver admin. alquiler LAU (49 €/mes)
                </Link>
              </div>
            </div>
          </section>

          <ServiceLandingSharedSections />
        </main>
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
