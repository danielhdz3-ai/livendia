import { FaqSection } from "@/components/faq-section";
import { RedactarContratoAlquilerLocalCityLinks } from "@/components/redactar-contrato-alquiler-local-city-links";
import { RedactarContratoAlquilerOnlineGestorSection } from "@/components/redactar-contrato-alquiler-online-gestor-section";
import { RentalContractPlatformShowcase } from "@/components/rental-contract-platform-showcase";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { WhatsAppLeadLink } from "@/components/whatsapp-lead-button";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_EUR,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import type { RedactarContratoAlquilerLocalLandingConfig } from "@/lib/redactar-contrato-alquiler-local-cities";
import {
  buildAgencyRentalComparisonRows,
  REDACTAR_CONTRATO_ALQUILER_BASE,
  REDACTAR_CONTRATO_ALQUILER_FAQ,
  REDACTAR_CONTRATO_ONLINE_GESTOR,
} from "@/lib/redactar-contrato-alquiler-content";
import { BUSINESS_EMAIL, buildBusinessPostalAddress } from "@/lib/business-nap";
import { getContactPhoneE164Plus } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  CheckCircle,
  MapPin,
  Scale,
  Shield,
  Sparkles,
  XCircle,
} from "lucide-react";

function LocalJsonLd({ config }: { config: RedactarContratoAlquilerLocalLandingConfig }) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${config.path}`;
  const areaServed = {
    "@type": "City",
    name: config.city,
    containedInPlace: { "@type": "AdministrativeArea", name: config.schemaAdministrativeArea },
  };

  const graph = [
    {
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: `Redactar contrato de alquiler profesional en ${config.placeLabel}`,
      description: config.metaDescription,
      serviceType: "Redacción de contrato de arrendamiento urbano",
      provider: { "@type": "Organization", name: "Livendia", url: base },
      areaServed,
      url: pageUrl,
      offers: {
        "@type": "Offer",
        price: String(CONTRATO_ALQUILER_LAU_PRICE_EUR),
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
      },
      inLanguage: "es-ES",
    },
    {
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${pageUrl}#localbusiness`,
      name: `Livendia — Contrato alquiler ${config.placeLabel}`,
      description: config.metaDescription,
      url: pageUrl,
      telephone: getContactPhoneE164Plus(),
      email: BUSINESS_EMAIL,
      image: `${base}/icons/icon-512.png`,
      priceRange: "€€",
      address: buildBusinessPostalAddress(),
      areaServed,
      parentOrganization: { "@id": `${base}/#organization` },
    },
  ];

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />
  );
}

function formatEur(n: number): string {
  return `${n.toLocaleString("es-ES")} €`;
}

export async function RedactarContratoAlquilerLocalSeoLanding({
  config,
}: {
  config: RedactarContratoAlquilerLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const lau = catalog.find((s) => s.slug === "contrato-alquiler-lau");
  const temp = catalog.find((s) => s.slug === "contrato-alquiler-temporada");
  const hab = catalog.find((s) => s.slug === "contrato-alquiler-habitacion");
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (lau) servicesBySlug["contrato-alquiler-lau"] = lau;
  if (temp) servicesBySlug["contrato-alquiler-temporada"] = temp;
  if (hab) servicesBySlug["contrato-alquiler-habitacion"] = hab;

  const lauPrice = resolveServicePriceLabel(lau, CONTRATO_ALQUILER_LAU_PRICE_LABEL);
  const tempPrice = resolveServicePriceLabel(temp, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL);
  const habPrice = resolveServicePriceLabel(hab, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL);
  const comparisonRows = buildAgencyRentalComparisonRows();
  const serviceLabel = `Redactar contrato de alquiler profesional en ${config.placeLabel}`;

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <LocalJsonLd config={config} />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />
        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[640px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
                  <p className="mb-2 text-sm text-blue-200">
                    <Link href={REDACTAR_CONTRATO_ALQUILER_BASE} className="hover:text-white hover:underline">
                      ← Redactar contrato alquiler
                    </Link>
                  </p>
                  <p className="mb-4 inline-block self-start rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm">
                    Entre particulares · {config.placeLabel}
                  </p>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    {config.heroTitle ??
                      `¿Necesitas redactar un contrato de alquiler profesional en ${config.placeLabel}?`}
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg">{config.heroLead}</p>
                  <ul className="mt-8 space-y-3">
                    {REDACTAR_CONTRATO_ONLINE_GESTOR.onlineBullets.slice(0, 3).map((line) => (
                      <li key={line} className="flex items-start gap-3 text-sm sm:text-base">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm text-blue-200">
                    Barrios: {config.barrios.slice(0, 5).join(" · ")}…
                  </p>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarSlugButton
                      slug="contrato-alquiler-lau"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50"
                    >
                      Contratar LAU · {lauPrice}
                    </ContratarSlugButton>
                    <WhatsAppLeadLink
                      placement={`redactar_contrato_${config.slug}_hero_whatsapp`}
                      serviceLabel={serviceLabel}
                      needType="alquiler"
                      city={config.city}
                      mode="direct"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      WhatsApp
                    </WhatsAppLeadLink>
                  </div>
                  <RedactarContratoAlquilerLocalCityLinks currentSlug={config.slug} className="mt-8 justify-start" />
                </div>
                <div className="relative order-2 h-56 sm:h-72 lg:order-none lg:h-auto lg:min-h-[480px]">
                  <Image
                    src={config.heroImage}
                    alt={config.heroImageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Mercado de alquiler en {config.placeLabel}
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-[#475569]">{config.whyIntro}</p>
              <p className="mt-4 text-base leading-relaxed text-[#64748b]">{config.marketContext}</p>

              <div className="mt-10 rounded-2xl border border-[#1A4FBF]/20 bg-white p-6 shadow-sm">
                <div className="flex items-start gap-3">
                  <Scale className="mt-0.5 h-6 w-6 shrink-0 text-[#1A4FBF]" aria-hidden />
                  <div>
                    <h3 className="font-bold text-[#1E293B]">Normativa y fianza en {config.placeLabel}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{config.regulatoryBlock}</p>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="flex items-center gap-2 text-lg font-bold text-[#1E293B]">
                  <MapPin className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
                  {config.barriosIntro}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {config.barrios.map((b) => (
                    <li
                      key={b}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1E293B] shadow-sm ring-1 ring-slate-200"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <RedactarContratoAlquilerOnlineGestorSection city={config.placeLabel} />

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Por qué Livendia en {config.placeLabel}
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {config.localDifferentiators.map((item) => (
                  <div key={item.title} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                    <Sparkles className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                    <h3 className="mt-3 font-bold text-[#1E293B]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <RentalContractPlatformShowcase city={config.placeLabel} propertyLine={config.platformDemoProperty} />

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6">
                  <div className="flex items-center gap-2 text-red-800">
                    <XCircle className="h-6 w-6" aria-hidden />
                    <h3 className="text-lg font-bold">Plantilla genérica</h3>
                  </div>
                  <p className="mt-3 text-sm text-red-950/90">
                    PDF copiado de otra ciudad, sin inventario ni orientación de fianza en {config.placeLabel}.
                  </p>
                </div>
                <div className="rounded-2xl border-2 border-[#1A4FBF] bg-[#EFF6FF]/50 p-6">
                  <div className="flex items-center gap-2 text-[#1A4FBF]">
                    <CheckCircle className="h-6 w-6" aria-hidden />
                    <h3 className="text-lg font-bold">Contrato Livendia · {config.placeLabel}</h3>
                  </div>
                  <p className="mt-3 text-sm text-[#1E293B]">
                    LAU adaptada, inventario, fianza orientada, servicio 100% online y gestor con asesoramiento posterior
                    — {lauPrice} IVA incl.
                  </p>
                  <ContratarSlugButton
                    slug="contrato-alquiler-lau"
                    className="mt-4 inline-flex rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white"
                  >
                    Contratar · {lauPrice}
                  </ContratarSlugButton>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <Banknote className="mx-auto h-10 w-10 text-[#1A4FBF]" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold text-[#1E293B]">Particular vs. agencia en {config.placeLabel}</h2>
              <p className="mt-4 text-lg text-[#64748b]">{config.agencyLocalNote}</p>
              <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 bg-white">
                <table className="w-full min-w-[400px] text-left text-sm">
                  <thead>
                    <tr className="bg-[#1A4FBF] text-white">
                      <th className="px-4 py-3">Renta</th>
                      <th className="px-4 py-3">Agencia (est.)</th>
                      <th className="px-4 py-3">Livendia</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.slice(0, 3).map((row) => (
                      <tr key={row.monthlyRent} className="border-t border-slate-100">
                        <td className="px-4 py-3">{formatEur(row.monthlyRent)}/mes</td>
                        <td className="px-4 py-3 text-[#64748b]">
                          {formatEur(row.agencyEstimateLow)} – {formatEur(row.agencyEstimateHigh)}
                        </td>
                        <td className="px-4 py-3 font-bold text-[#1A4FBF]">{formatEur(row.livendia)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B]">{config.testimonialsTitle}</h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {config.testimonials.map((t) => (
                  <blockquote key={t.author} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
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

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-lg font-bold text-[#1E293B]">Servicios relacionados en {config.placeLabel}</h2>
              <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm">
                <Link href={config.contratoAlquilerLocalHref} className="font-semibold text-[#1A4FBF] hover:underline">
                  Contrato alquiler {config.placeLabel}
                </Link>
                {config.contratoTemporadaHref ? (
                  <Link href={config.contratoTemporadaHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    Temporada · {tempPrice}
                  </Link>
                ) : null}
                {config.contratoHabitacionHref ? (
                  <Link href={config.contratoHabitacionHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    Habitación · {habPrice}
                  </Link>
                ) : null}
              </div>
            </div>
          </section>

          <FaqSection
            title={`Preguntas frecuentes · ${config.placeLabel}`}
            items={[
              ...config.faqLocal,
              ...REDACTAR_CONTRATO_ALQUILER_FAQ.filter((f) =>
                ["online", "gestor", "desplazarte", "después de firmar"].some((k) =>
                  f.question.toLowerCase().includes(k),
                ),
              ),
            ]}
          />

          <ServiceMidPageContactSection
            serviceLabel={serviceLabel}
            needType="alquiler"
            city={config.city}
            placement={`redactar_contrato_${config.slug}_mid`}
          />

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-center text-white sm:px-6">
            <div className="mx-auto max-w-3xl">
              <Shield className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                Contrato profesional en {config.placeLabel} desde {lauPrice}
              </h2>
              <p className="mt-4 text-blue-100">
                Inventario, LAU adaptada, fianza orientada y plataforma privada — sin comisión de agencia.
              </p>
              <ContratarSlugButton
                slug="contrato-alquiler-lau"
                className="mt-8 inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50"
              >
                Contratar ahora
              </ContratarSlugButton>
            </div>
          </section>

          <ServiceLandingSharedSections />
        </main>
        <SiteFooter variant="landing" />
      </div>
    </MultiServicePurchaseProvider>
  );
}
