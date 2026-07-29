import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { AcompanamientoAlquilerLocalCityLinks } from "@/components/acompanamiento-alquiler-local-city-links";
import { getPublicServices } from "@/lib/catalog";
import {
  ACOMPANAMIENTO_ALQUILER_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import type { AcompanamientoAlquilerLocalLandingConfig } from "@/lib/acompanamiento-alquiler-local-cities";
import {
  ACOMPANAMIENTO_ALQUILER_INCLUDED,
  ACOMPANAMIENTO_ALQUILER_NOT_INCLUDED,
  ACOMPANAMIENTO_ALQUILER_PROCESS_INTRO,
  ACOMPANAMIENTO_ALQUILER_PROCESS_STEPS,
  ACOMPANAMIENTO_ALQUILER_FAQ,
} from "@/lib/acompanamiento-alquiler-shared";
import { BUSINESS_EMAIL, buildBusinessPostalAddress } from "@/lib/business-nap";
import { getContactPhoneE164Plus } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle,
  ClipboardList,
  FileSignature,
  FolderLock,
  Handshake,
  MessageCircle,
  Scale,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function LocalJsonLd({
  config,
  faqItems,
}: {
  config: AcompanamientoAlquilerLocalLandingConfig;
  faqItems: { question: string; answer: string }[];
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${config.path}`;
  const areaServed = {
    "@type": "City",
    name: config.city,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: config.schemaAdministrativeArea,
    },
  };

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Acompañamiento de alquiler en ${config.placeLabel}`,
    description: config.metaDescription,
    serviceType: "Acompañamiento de alquiler para inquilinos",
    provider: { "@type": "Organization", name: "Livendia", url: base },
    areaServed,
    url: pageUrl,
    offers: {
      "@type": "Offer",
      price: "189",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    inLanguage: "es-ES",
  };

  const localBusiness = {
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": `${pageUrl}#localbusiness`,
    name: `Livendia — Acompañamiento de alquiler en ${config.placeLabel}`,
    description: `Gestoría inmobiliaria Livendia: acompañamiento de alquiler para inquilinos en ${config.placeLabel}.`,
    url: pageUrl,
    telephone: getContactPhoneE164Plus(),
    email: BUSINESS_EMAIL,
    image: `${base}/icon.svg`,
    priceRange: "€€",
    address: buildBusinessPostalAddress(),
    areaServed,
    parentOrganization: { "@id": `${base}/#organization` },
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${pageUrl}#faq`,
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": [service, localBusiness, faqPage] }),
      }}
    />
  );
}

export async function AcompanamientoAlquilerLocalSeoLanding({
  config,
}: {
  config: AcompanamientoAlquilerLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "acompanamiento-alquiler") ?? null;
  const priceLabel = resolveServicePriceLabel(service, ACOMPANAMIENTO_ALQUILER_PRICE_LABEL);
  const waConsultHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, me interesa el acompañamiento de alquiler en ${config.placeLabel}.`,
  )}`;
  const processIcons = [FolderLock, ClipboardList, FileSignature, Handshake] as const;
  const faqItems = [...config.faqLocal, ...ACOMPANAMIENTO_ALQUILER_FAQ];

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <LocalJsonLd config={config} faqItems={faqItems} />
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <nav
            className="border-b border-slate-200 bg-white px-4 py-3 text-sm text-[#64748b] sm:px-6"
            aria-label="Migas de pan"
          >
            <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-[#1A4FBF]">
                  Inicio
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/servicios" className="hover:text-[#1A4FBF]">
                  Servicios
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/servicios/acompanamiento-alquiler" className="hover:text-[#1A4FBF]">
                  Acompañamiento de alquiler
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-medium text-[#1E293B]">{config.placeLabel}</li>
            </ol>
          </nav>

          <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    Para inquilinos · {config.placeLabel}
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-6xl">
                    Acompañamiento de alquiler en {config.placeLabel}
                  </h1>
                  <p className="mt-6 text-xl leading-relaxed text-blue-50">{config.heroLead}</p>
                  {config.proximityNote ? (
                    <p className="mt-4 rounded-xl border border-white/25 bg-white/10 px-4 py-3 text-sm leading-relaxed text-blue-50">
                      {config.proximityNote}
                    </p>
                  ) : null}

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
                    src={config.heroImage}
                    alt={config.heroImageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">Mercado local en {config.placeLabel}</h2>
              <p className="mt-4 text-base leading-relaxed text-[#475569]">{config.marketContext}</p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Qué incluye</h2>
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
                <h2 className="text-xl font-bold text-[#1E293B]">
                  Normativa y tranquilidad en {config.placeLabel}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">{config.regulatoryBlock}</p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                {config.testimonialsTitle}
              </h2>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {config.testimonials.map((t) => (
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

          <FaqSection
            title={`Preguntas frecuentes — ${config.placeLabel}`}
            items={faqItems}
            className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6"
          />

          <section className="border-t border-slate-200 bg-white px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-xl font-bold text-[#1E293B]">También en otras ciudades</h2>
              <div className="mt-6">
                <AcompanamientoAlquilerLocalCityLinks currentSlug={config.path.split("/").pop()} />
              </div>
              <p className="mt-6 text-center text-sm text-[#64748b]">
                <Link href="/servicios/acompanamiento-alquiler" className="font-semibold text-[#1A4FBF] hover:underline">
                  Ver acompañamiento de alquiler (toda España)
                </Link>
                {config.adminLocalHref ? (
                  <>
                    {" · "}
                    <Link href={config.adminLocalHref} className="font-semibold text-[#1A4FBF] hover:underline">
                      Administración de alquiler en {config.city}
                    </Link>
                  </>
                ) : null}
              </p>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl">
                Empieza tu acompañamiento en {config.placeLabel}
              </h2>
              <p className="mt-4 text-lg text-blue-100">
                {priceLabel} IVA incluido. Gestor, documentación, contrato, firma digital y expediente.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:bg-blue-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
                <Link
                  href="/servicios/acompanamiento-alquiler"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Ver servicio nacional
                </Link>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter variant="landing" />
      </div>
    </ServicePurchaseProvider>
  );
}
