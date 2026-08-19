import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ClipboardList,
  FileText,
  MapPin,
  MessageCircle,
  Monitor,
  Shield,
  Users,
} from "lucide-react";
import { CalculadoraAhorroVendedor } from "@/components/calculadora-ahorro-vendedor";
import { PackComercialLocalCityLinks } from "@/components/pack-comercial-local-city-links";
import { PackCommercialWhatsAppLink } from "@/components/pack-comercial-whatsapp-link";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
  ServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import type { PackCommercialLandingConfig } from "@/lib/pack-comercial-landings";
import type { PackCommercialLocalLandingConfig } from "@/lib/pack-comercial-local-cities";
import type { PublicService } from "@/lib/catalog.public";
import {
  LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR,
  LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_EUR,
  GESTION_DOCUMENTAL_VENDEDOR_SLUG,
  PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH,
  PACK_LAU_ADMIN_LANDING_PATH,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import {
  resolvePackVariantFromPath,
  type PackCommercialWhatsAppVariant,
} from "@/lib/pack-comercial-whatsapp";

const STEP_ICONS = [ClipboardList, FileText, Users, Shield] as const;

type Props = {
  config: PackCommercialLandingConfig | PackCommercialLocalLandingConfig;
  servicesBySlug: Partial<Record<string, PublicService>>;
};

function isLocalPackConfig(
  config: PackCommercialLandingConfig | PackCommercialLocalLandingConfig,
): config is PackCommercialLocalLandingConfig {
  return "localSeo" in config && config.localSeo != null;
}

function PackFaqJsonLd({ config }: { config: PackCommercialLandingConfig }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function PackProductJsonLd({
  config,
}: {
  config: PackCommercialLandingConfig | PackCommercialLocalLandingConfig;
}) {
  const siteUrl = getSiteUrl();
  const packUrl = `${siteUrl}${config.path}`;
  const priceEur = isLocalPackConfig(config)
    ? config.contactNeedType === "venta"
      ? LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR
      : LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_EUR
    : Number(config.totalPriceLabel.replace(/[^\d]/g, ""));

  const offers = isLocalPackConfig(config)
    ? {
        "@type": "Offer",
        price: priceEur,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: packUrl,
      }
    : {
        "@type": "AggregateOffer",
        priceCurrency: "EUR",
        lowPrice: config.totalPriceLabel.replace(/[^\d]/g, ""),
        offerCount: config.priceBreakdown.length,
        availability: "https://schema.org/InStock",
        url: packUrl,
      };

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: config.jsonLdName,
    description: config.jsonLdDescription,
    brand: { "@type": "Brand", name: "Livendia" },
    ...(isLocalPackConfig(config)
      ? {
          areaServed: {
            "@type": "City",
            name: config.city,
            containedInPlace: {
              "@type": "AdministrativeArea",
              name: config.schemaAdministrativeArea,
            },
          },
        }
      : {}),
    offers,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function PackLocalServiceJsonLd({ config }: { config: PackCommercialLocalLandingConfig }) {
  const siteUrl = getSiteUrl();
  const priceEur =
    config.contactNeedType === "venta"
      ? LIVENDIA_ARRAS_MAS_GESTION_VENDEDOR_EUR
      : LIVENDIA_LAU_MAS_ADMIN_PRIMER_MES_EUR;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.jsonLdName,
    description: config.jsonLdDescription,
    provider: {
      "@type": "Organization",
      name: "Livendia",
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: config.city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: config.schemaAdministrativeArea,
      },
    },
    offers: {
      "@type": "Offer",
      price: priceEur,
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}${config.path}`,
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PackComercialSeoLanding({ config, servicesBySlug }: Props) {
  const local = isLocalPackConfig(config) ? config : null;
  const localSeo = local?.localSeo;
  const packWaVariant: PackCommercialWhatsAppVariant | null =
    resolvePackVariantFromPath(config.path) ??
    (config.path === PACK_LAU_ADMIN_LANDING_PATH
      ? "lau-admin"
      : config.path === PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH
        ? "arras-gestion"
        : null);
  const heroBullets = "heroBullets" in config ? config.heroBullets : undefined;
  const isVentaPack = config.contactNeedType === "venta";
  const localCityLinksVariant = !local
    ? config.path === PACK_LAU_ADMIN_LANDING_PATH
      ? ("lau-admin" as const)
      : config.path === PACK_ARRAS_GESTION_VENDEDOR_LANDING_PATH
        ? ("arras-gestion" as const)
        : null
    : null;

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <PackFaqJsonLd config={config} />
      <PackProductJsonLd config={config} />
      {local ? <PackLocalServiceJsonLd config={local} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] via-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    {config.heroBadge}
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl">
                    {config.heroH1}
                  </h1>
                  <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">{config.heroLead}</p>
                  <ul className="mt-6 space-y-2 rounded-xl bg-white/10 p-4 ring-1 ring-white/20">
                    {config.priceBreakdown.map((line) => (
                      <li key={line.label} className="flex justify-between gap-4 text-sm sm:text-base">
                        <span className="text-blue-100">{line.label}</span>
                        <span className="font-bold text-white">{line.price}</span>
                      </li>
                    ))}
                    <li className="flex justify-between gap-4 border-t border-white/20 pt-2 text-base sm:text-lg">
                      <span className="font-semibold">Total estimado</span>
                      <span className="text-2xl font-extrabold">{config.totalPriceLabel}</span>
                    </li>
                  </ul>
                  <p className="mt-2 text-sm text-blue-200">IVA incluido · Contrata cada partida por separado</p>
                  {heroBullets && heroBullets.length > 0 ? (
                    <ul className="mt-4 space-y-1.5 text-sm text-blue-100">
                      {heroBullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-[#06B6D4]" aria-hidden />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-8 flex flex-wrap gap-3">
                    <ContratarSlugButton
                      slug={config.primaryCtaSlug}
                      className="rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50 sm:px-8 sm:text-base"
                    >
                      {config.primaryCtaLabel}
                    </ContratarSlugButton>
                    <ContratarSlugButton
                      slug={config.secondaryCtaSlug}
                      className="rounded-full border-2 border-white px-6 py-3.5 text-sm font-semibold hover:bg-white/10 sm:px-8 sm:text-base"
                    >
                      {config.secondaryCtaLabel}
                    </ContratarSlugButton>
                    <PackCommercialWhatsAppLink
                      variant={packWaVariant ?? "lau-admin"}
                      city={local?.city}
                      slug={local?.slug}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white/60 px-6 py-3.5 text-sm font-semibold hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      WhatsApp
                    </PackCommercialWhatsAppLink>
                  </div>
                </div>
                <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 sm:h-[320px] lg:h-[400px]">
                  <Image
                    src={config.heroImage}
                    alt={config.heroImageAlt}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {localSeo ? (
            <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">
                  Mercado en {local!.city}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">
                  {localSeo.marketIntro}
                </p>
              </div>
            </section>
          ) : null}

          {localSeo ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                  {isVentaPack ? "Tienes comprador. ¿Y la documentación?" : "Tienes inquilino. ¿Y el contrato?"}
                </h2>
                <div className="mt-10 grid gap-6 sm:grid-cols-3">
                  {localSeo.empathyCards.map((card) => (
                    <div
                      key={card.title}
                      className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200"
                    >
                      <h3 className="text-lg font-bold text-[#1E293B]">{card.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#475569]">{card.body}</p>
                    </div>
                  ))}
                </div>
                <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-[#475569]">
                  {localSeo.localProblemIntro}
                </p>
              </div>
            </section>
          ) : null}

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">{config.includedTitle}</h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-[#64748b]">{config.includedIntro}</p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {config.includedItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    <span className="text-sm font-medium leading-relaxed text-[#1E293B]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                {local ? `Cómo funciona el pack en ${local.city}` : "Cómo funciona el pack"}
              </h2>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {config.steps.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? ClipboardList;
                  return (
                    <div key={step.title} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                        Paso {i + 1}
                      </span>
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A4FBF]/10">
                        <Icon className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                      </div>
                      <h3 className="mt-4 font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {localSeo && localSeo.regulatory ? (
            <section className="border-t border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">
                  Normativa de alquiler en {local!.city}
                </h2>
                <dl className="mt-6 space-y-4 text-sm leading-relaxed text-[#475569] sm:text-base">
                  <div>
                    <dt className="font-semibold text-[#1E293B]">Zona tensionada</dt>
                    <dd className="mt-1">{localSeo.regulatory.tensionedZone}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#1E293B]">Actualización de renta</dt>
                    <dd className="mt-1">{localSeo.regulatory.rentIndex}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold text-[#1E293B]">
                      Depósito de fianza ({localSeo.regulatory.depositOrganism})
                    </dt>
                    <dd className="mt-1">{localSeo.regulatory.depositNote}</dd>
                  </div>
                  {local!.schemaAdministrativeArea === "Andalucía" ? (
                    <div className="rounded-xl bg-white/80 p-4 ring-1 ring-amber-200">
                      <dt className="font-semibold text-[#1E293B]">AVRA — registro obligatorio en Andalucía</dt>
                      <dd className="mt-1">
                        La fianza legal debe depositarse en{" "}
                        <strong>AVRA (Agencia de Vivienda y Rehabilitación de Andalucía)</strong>, no solo
                        entregarse al inquilino. Livendia orienta plazos y documentación al contratar el pack
                        en {local!.city}.
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            </section>
          ) : null}

          {localSeo && localSeo.casuistica.length > 0 ? (
            <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-6xl">
                <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                  Situaciones frecuentes en {local!.city}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-[#64748b]">
                  Casuística real que el gestor Livendia conoce en operaciones entre particulares en la ciudad.
                </p>
                <div className="mt-10 grid gap-6 sm:grid-cols-2">
                  {localSeo.casuistica.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6"
                    >
                      <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#475569]">{item.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {localSeo && localSeo.barrios.length > 0 ? (
            <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-12 sm:px-6">
              <div className="mx-auto max-w-6xl">
                <h2 className="flex items-center justify-center gap-2 text-xl font-bold text-[#1E293B] sm:text-2xl">
                  <MapPin className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                  {local!.localZonesHeading ?? `Zonas en ${local!.city}`}
                </h2>
                <p className="mx-auto mt-3 max-w-3xl text-center text-sm text-[#64748b]">
                  {localSeo.barriosIntro}
                </p>
                {local.localZones ? (
                  <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-[#475569]">
                    {local.localZones}
                  </p>
                ) : null}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {localSeo.barrios.map((barrio) => (
                    <span
                      key={barrio}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1E293B] ring-1 ring-slate-200"
                    >
                      {barrio}
                    </span>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {localSeo && isVentaPack && localSeo.precioMedioVenta ? (
            <section className="border-t border-slate-200 px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <ServicePurchaseProvider
                  service={servicesBySlug[GESTION_DOCUMENTAL_VENDEDOR_SLUG] ?? null}
                >
                  <CalculadoraAhorroVendedor city={local!.city} precioMedio={localSeo.precioMedioVenta} />
                </ServicePurchaseProvider>
              </div>
            </section>
          ) : null}

          {localSeo ? (
            <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <div className="flex flex-col items-center text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1A4FBF]/10">
                    <Monitor className="h-7 w-7 text-[#1A4FBF]" aria-hidden />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold text-[#1E293B] sm:text-3xl">
                    Plataforma Livendia en {local!.city}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">
                    {localSeo.platformParagraph}
                  </p>
                  <p className="mt-4 text-sm text-[#64748b]">
                    Gestor dedicado por WhatsApp · Pago seguro · Panel propietario 24/7 · Sin comisión de agencia
                  </p>
                </div>
              </div>
            </section>
          ) : null}

          <section className="border-t border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl space-y-6">
              {config.infoBanners.map((banner) => (
                <div
                  key={banner.title}
                  className="rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF] p-6 sm:p-8"
                >
                  <h3 className="text-lg font-bold text-[#1E293B]">{banner.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-base">{banner.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-t border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">{config.audienceTitle}</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">{config.audienceParagraph}</p>
            </div>
          </section>

          <section className="border-t border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">{config.comparisonTitle}</h2>
              <div className="mt-8 overflow-x-auto rounded-2xl bg-white shadow ring-1 ring-slate-200">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead>
                    <tr className="border-b border-slate-200 bg-slate-50">
                      <th className="px-4 py-3 font-semibold text-[#64748b]" scope="col" />
                      <th className="px-4 py-3 font-semibold text-[#1A4FBF]" scope="col">
                        Pack Livendia
                      </th>
                      <th className="px-4 py-3 font-semibold text-[#64748b]" scope="col">
                        Alternativa habitual
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {config.comparisonRows.map((row) => (
                      <tr key={row.label} className="border-b border-slate-100 last:border-0">
                        <th className="px-4 py-3 font-medium text-[#1E293B]" scope="row">
                          {row.label}
                        </th>
                        <td className="px-4 py-3 text-[#1E293B]">{row.pack}</td>
                        <td className="px-4 py-3 text-[#64748b]">{row.alternative}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel={config.contactServiceLabel}
            needType={config.contactNeedType}
            city={local?.city}
            placement={`pack_${config.path.split("/").filter(Boolean).slice(-2).join("_")}_mid`}
          />

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">Preguntas frecuentes</h2>
              <dl className="mt-10 space-y-6">
                {config.faq.map((item) => (
                  <div key={item.question} className="rounded-xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200">
                    <dt className="font-bold text-[#1E293B]">{item.question}</dt>
                    <dd className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="border-t border-slate-200 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-lg font-bold text-[#1E293B]">Servicios relacionados</h2>
              <nav aria-label="Servicios relacionados con este pack" className="mt-4 flex flex-wrap gap-2">
                {config.relatedLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] hover:bg-[#EFF6FF]"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/precios"
                  className="rounded-full bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white hover:bg-[#2563EB]"
                >
                  Ver todos los precios
                </Link>
              </nav>
            </div>
          </section>

          {localCityLinksVariant ? (
            <PackComercialLocalCityLinks variant={localCityLinksVariant} />
          ) : null}

          <section className="px-4 pb-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-6 py-12 text-center text-white shadow-xl sm:px-8">
              <h2 className="text-2xl font-bold sm:text-3xl">{config.finalCtaTitle}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">{config.finalCtaLead}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <ContratarSlugButton
                  slug={config.primaryCtaSlug}
                  className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50"
                >
                  {config.primaryCtaLabel} · {config.priceBreakdown[0]?.price}
                </ContratarSlugButton>
                <Link
                  href="/precios"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Comparar en precios
                </Link>
              </div>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections
          serviceLabel={config.heroH1}
          skipGestorPlatform={false}
          testimonialsCtaHref={config.path}
          testimonialsCtaLabel="Contratar este pack"
        />
        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
