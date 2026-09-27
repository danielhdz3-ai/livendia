import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { FaqSection } from "@/components/faq-section";
import { LocalCityContextSectionFromConfig } from "@/components/local-city-context-section-from-config";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  SERVICIO_COMPLETO_CV_PRICE_EUR,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { ComprarPisoSinAgenciaLandingConfig } from "@/lib/comprar-piso-sin-agencia-local-cities";
import {
  buildAgencySavingsRows,
  COMPRA_PARTICULAR_TRAMITES,
  formatEur,
  interpolateComprarPisoCopy,
} from "@/lib/comprar-piso-sin-agencia-local-cities";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Banknote,
  CheckCircle,
  ClipboardList,
  Handshake,
  Shield,
} from "lucide-react";
import { LivendiaExpertGestorsSection } from "@/components/livendia-expert-gestors-section";
import { VenderBarcelonaSinAgenciaIntroSection } from "@/components/vender-barcelona-sin-agencia-intro-section";
import { VentaSinAgenciaPasoAPasoSection } from "@/components/venta-sin-agencia-paso-a-paso-section";
import {
  buildComprarSinAgenciaBarcelonaSteps,
  COMPRAR_SIN_AGENCIA_BARCELONA_INTRO,
  COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS,
} from "@/lib/comprar-piso-sin-agencia-barcelona-modules";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function resolvePageCopy(config: ComprarPisoSinAgenciaLandingConfig, priceLabel: string) {
  const c = config.copy ?? {};

  return {
    heroBadge: c.heroBadge ?? `Comprar piso sin agencia · ${config.city}`,
    heroH1: c.heroH1 ?? `¿Compras piso en ${config.city} sin agencia? — gestor en tu bando`,
    heroLead:
      c.heroLead ??
      `No firmes reserva ni arras a ciegas. Un gestor legal de Livendia revisa contratos, ordena la documentación del inmueble y coordina la notaría hasta la escritura por una tarifa plana de {{price}} (IVA incl.).`,
    heroBullets: c.heroBullets ?? [
      "Compra entre particulares o con agencia solo del vendedor",
      "Due diligence registral y de comunidad antes de la señal",
      "Tarifa plana — sin comisión sobre el precio del piso",
    ],
    savingsIntro: c.savingsIntro,
    savingsIntroUsesHighlight: !c.savingsIntro,
    benefitsFourthTitle: c.benefitsFourthTitle ?? "Gestor del comprador",
    benefitsFourthText:
      c.benefitsFourthText ??
      "Un interlocutor dedicado por WhatsApp y panel Livendia durante toda la operación.",
    disclaimer:
      c.disclaimer ??
      "Livendia no busca vivienda ni sustituye a una agencia de captación. El servicio es acompañamiento jurídico-documental del comprador. Notaría, registro e impuestos de compraventa son independientes; te orientamos sobre plazos y documentación.",
    finalCtaTitle: c.finalCtaTitle ?? `Cierra la compra en ${config.city} con documentación profesional`,
    finalCtaSubtitle:
      c.finalCtaSubtitle ??
      `Contrata el servicio completo de compra: reserva, arras, trámites y coordinación con notaría por {{price}} IVA incl.`,
    faqTitle: c.faqTitle ?? `Preguntas sobre comprar piso sin agencia en ${config.city}`,
    faqSubtitle: c.faqSubtitle ?? "Compra entre particulares, trámites y tarifa plana de gestoría.",
    waPrefill:
      c.waPrefill ??
      `Hola, estoy comprando un piso entre particulares en ${config.city} y quiero comprar sin agencia con gestor Livendia.`,
    jsonLdServiceName:
      c.jsonLdServiceName ?? `Comprar piso sin agencia en ${config.city} con gestor comprador`,
    imageAlt: c.imageAlt ?? `Comprar piso sin agencia en ${config.city} con gestor Livendia`,
  };
}

function CompraParticularJsonLd({
  config,
  priceEur,
}: {
  config: ComprarPisoSinAgenciaLandingConfig;
  priceEur: number;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const graph = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: config.copy?.jsonLdServiceName ?? `Comprar piso sin agencia en ${config.city}`,
    description: config.metaDescription,
    serviceType: "Trámites para comprar piso entre particulares",
    provider: { "@type": "Organization", name: "Livendia", url: base },
    areaServed: {
      "@type": "City",
      name: config.city,
      containedInPlace: { "@type": "AdministrativeArea", name: config.schemaAdministrativeArea },
    },
    offers: {
      "@type": "Offer",
      price: priceEur,
      priceCurrency: "EUR",
      description: "IVA incluido · Pago único",
      url: `${base}${config.path}`,
    },
    url: `${base}${config.path}`,
    inLanguage: "es-ES",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export async function ComprarPisoSinAgenciaLocalSeoLanding({
  config,
}: {
  config: ComprarPisoSinAgenciaLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-compra") ?? null;
  const priceEur = service ? service.price_cents / 100 : SERVICIO_COMPLETO_CV_PRICE_EUR;
  const priceLabel = service
    ? `${(service.price_cents / 100).toFixed(0)} €`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL;
  const priceLabelCompact = service
    ? `${(service.price_cents / 100).toFixed(0)}€`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT;

  const savingsRows = buildAgencySavingsRows(config.savingsSalePrices, priceEur);
  const highlightRow =
    savingsRows.find((r) => r.salePrice === config.highlightSalePrice) ?? savingsRows[Math.floor(savingsRows.length / 2)];

  const pageCopy = resolvePageCopy(config, priceLabel);
  const finalCtaSubtitle = interpolateComprarPisoCopy(pageCopy.finalCtaSubtitle, priceLabel);
  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(pageCopy.waPrefill)}`;
  const isBarcelonaExtended = config.slug === "barcelona" || config.showBarcelonaCompraModules === true;
  const barcelonaIntro = config.barcelonaZoneIntro ?? {
    ...COMPRAR_SIN_AGENCIA_BARCELONA_INTRO,
    title: COMPRAR_SIN_AGENCIA_BARCELONA_INTRO.title.replace("Barcelona", config.city),
  };
  const barcelonaProcessSteps = isBarcelonaExtended
    ? buildComprarSinAgenciaBarcelonaSteps(priceLabel)
    : null;
  const processTitle = COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.title.replace("Barcelona", config.city);

  return (
    <ServicePurchaseProvider service={service}>
      <CompraParticularJsonLd config={config} priceEur={priceEur} />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <p className="mb-4 inline-block self-start rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-sm">
                    {pageCopy.heroBadge}
                  </p>

                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">{pageCopy.heroH1}</h1>

                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
                    {interpolateComprarPisoCopy(pageCopy.heroLead, priceLabel)
                      .split(priceLabel)
                      .map((part, i, arr) => (
                        <span key={i}>
                          {part}
                          {i < arr.length - 1 ? (
                            <strong className="text-white">{priceLabel}</strong>
                          ) : null}
                        </span>
                      ))}
                  </p>

                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-base text-blue-100 sm:text-lg">IVA incl. · Pago único</span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {pageCopy.heroBullets.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300 sm:h-6 sm:w-6" aria-hidden />
                        <span className="text-sm sm:text-base lg:text-lg">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50">
                      Contratar · {priceLabelCompact}
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-placement={`${config.analyticsPlacement}_whatsapp`}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>

                  {config.optionalLocalCompraHref ? (
                    <Link
                      href={config.optionalLocalCompraHref}
                      className="mt-8 flex items-center gap-3 rounded-2xl bg-white/15 px-5 py-4 text-sm font-semibold ring-1 ring-white/30 backdrop-blur-sm transition hover:bg-white/25 sm:text-base"
                    >
                      <span className="flex-1 text-left leading-snug">
                        Servicio completo de compra en {config.city} — ficha detallada · {priceLabel} IVA incl.
                      </span>
                      <ArrowRight className="h-5 w-5 shrink-0" aria-hidden />
                    </Link>
                  ) : null}
                </div>

                <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src="/images/gestoria3.jpg"
                    alt={pageCopy.imageAlt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {isBarcelonaExtended ? (
            <>
              <VenderBarcelonaSinAgenciaIntroSection
                eyebrow={barcelonaIntro.eyebrow}
                title={barcelonaIntro.title}
                paragraphs={barcelonaIntro.paragraphs}
              />
              <VentaSinAgenciaPasoAPasoSection
                city={config.city}
                priceLabel={priceLabel}
                eyebrow={COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.eyebrow}
                title={processTitle}
                intro={COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.intro}
                steps={barcelonaProcessSteps!}
                alwaysWithYouTitle={COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.alwaysWithYouTitle}
                alwaysWithYouBody={COMPRAR_SIN_AGENCIA_BARCELONA_PROCESS.alwaysWithYouBody}
                serviceLine="Servicio completo compra · Livendia"
                feeNote={`Sin comisión sobre el precio de compra. Trámite 100 % online con gestor real en ${config.city}.`}
              />
              <LivendiaExpertGestorsSection city={config.city} variant="servicio-completo-compra" />
            </>
          ) : null}

          <section
            className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
            aria-labelledby="ahorro-compra-heading"
          >
            <div className="mx-auto max-w-5xl">
              <h2 id="ahorro-compra-heading" className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                Tarifa plana frente a honorarios sobre el precio de compra en {config.city}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#64748b] sm:text-lg">
                {pageCopy.savingsIntroUsesHighlight ? (
                  <>
                    Algunos intermediarios piden un 3 % o 5 % sobre el precio del inmueble más IVA. En un piso de{" "}
                    {formatEur(highlightRow.salePrice)} el acompañamiento Livendia supone un ahorro orientativo de{" "}
                    <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVs3)}</strong> frente al 3 %, o{" "}
                    <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVs5)}</strong> frente al 5 % — con
                    revisión profesional de reserva, arras y trámites hasta escritura.
                  </>
                ) : (
                  <>
                    {pageCopy.savingsIntro} En un piso de {formatEur(highlightRow.salePrice)} el ahorro orientativo es{" "}
                    <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVs3)}</strong> frente al 3 %, o{" "}
                    <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVs5)}</strong> frente al 5 %.
                  </>
                )}
              </p>

              <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-[#1A4FBF] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Precio de compra</th>
                      <th className="px-4 py-3 font-semibold">Honorarios 3 % + IVA</th>
                      <th className="px-4 py-3 font-semibold">Honorarios 5 % + IVA</th>
                      <th className="px-4 py-3 font-semibold">Livendia</th>
                      <th className="px-4 py-3 font-semibold text-emerald-200">Ahorro vs 3 %</th>
                      <th className="px-4 py-3 font-semibold text-emerald-200">Ahorro vs 5 %</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-[#F8FAFC]">
                    {savingsRows.map((row) => (
                      <tr
                        key={row.salePrice}
                        className={row.salePrice === config.highlightSalePrice ? "bg-emerald-50/80" : undefined}
                      >
                        <td className="px-4 py-3 font-medium text-[#1E293B]">{formatEur(row.salePrice)}</td>
                        <td className="px-4 py-3 text-[#475569]">{formatEur(row.agency3WithVat)}</td>
                        <td className="px-4 py-3 text-[#475569]">{formatEur(row.agency5WithVat)}</td>
                        <td className="px-4 py-3 font-semibold text-[#1A4FBF]">{formatEur(row.livendiaPrice)}</td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">{formatEur(row.savingVs3)}</td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">{formatEur(row.savingVs5)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-center text-xs text-[#64748b] sm:text-sm">
                Cálculo orientativo: porcentaje sobre precio de compra + 21 % IVA. Livendia no busca inmuebles; cubre
                contratos y trámites cuando compras entre particulares o sin agencia compradora.
              </p>
            </div>
          </section>

          <LocalCityContextSectionFromConfig
            city={config.city}
            heading={`Comprar sin agencia en ${config.city}: mercado y barrios`}
            localMarketInsight={config.localMarketInsight}
            localPriceSnapshot={config.localPriceSnapshot}
            localNeighborhoods={config.localNeighborhoods}
            localServiceNotes={config.localServiceNotes}
          />

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                Trámites para comprar un piso entre particulares en {config.city}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">{config.tramitesAreaNote}</p>
              <ol className="mt-10 space-y-4">
                {COMPRA_PARTICULAR_TRAMITES.map((item, index) => (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#475569] sm:text-base">{item.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    icon: Banknote,
                    title: "Tarifa plana, sin sorpresas",
                    text: `${priceLabel} IVA incl. Aunque el piso valga más, el precio del servicio no cambia.`,
                    color: "from-emerald-500 to-emerald-600",
                  },
                  {
                    icon: Shield,
                    title: "Contratos revisados",
                    text: "Reserva y arras analizadas o redactadas por gestor legal, no plantillas del vendedor sin filtro.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: ClipboardList,
                    title: "Due diligence ordenada",
                    text: config.benefitsAreaNote,
                    color: "from-cyan-500 to-cyan-600",
                  },
                  {
                    icon: Handshake,
                    title: pageCopy.benefitsFourthTitle,
                    text: pageCopy.benefitsFourthText,
                    color: "from-indigo-500 to-indigo-600",
                  },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.title} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
                      <div className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3`}>
                        <Icon className="h-6 w-6 text-white" aria-hidden />
                      </div>
                      <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.text}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-8 w-8 shrink-0 text-amber-800" aria-hidden />
              <div>
                <h2 className="text-lg font-bold text-[#1E293B]">Importante</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#475569] sm:text-base">{pageCopy.disclaimer}</p>
              </div>
            </div>
          </section>

          {config.optionalLocalCompraHref ? (
            <section className="border-b border-slate-200 bg-[#EFF6FF] px-4 py-12 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <Link
                  href={config.optionalLocalCompraHref}
                  className="group flex flex-col gap-3 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#1A4FBF]/20 transition hover:ring-[#1A4FBF]/50 sm:flex-row sm:items-center sm:justify-between sm:p-8"
                >
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#1A4FBF]">
                      Compra entre particulares · {config.city}
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-[#1E293B] sm:text-2xl">
                      Servicio completo de compra local en {config.city}
                    </h2>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-base">
                      Ficha ampliada: documentación, testimonios y proceso detallado por {priceLabel} IVA incl.
                    </p>
                  </div>
                  <span className="inline-flex shrink-0 items-center gap-2 rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white group-hover:bg-[#1A4FBF]">
                    Ver landing compra {config.city}
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </span>
                </Link>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                id={`faq-comprar-piso-${config.slug}`}
                title={pageCopy.faqTitle}
                subtitle={pageCopy.faqSubtitle}
                items={[...config.faq]}
              />
            </div>
          </section>

          <ServiceMidPageContactSection serviceLabel={`Compra de piso sin agencia en ${config.city}`} />

          <GestorContactCta placement={config.gestorCtaPlacement} />

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl">{pageCopy.finalCtaTitle}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-50">
                {finalCtaSubtitle.split(priceLabel).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 ? <strong className="text-white">{priceLabel}</strong> : null}
                  </span>
                ))}
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="inline-flex min-h-11 items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105">
                  Contratar · {priceLabelCompact}
                </ContratarServicioButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
              <p className="mt-8 text-sm text-blue-200">
                <Link href="/servicios/servicio-completo-compra" className="font-semibold underline hover:text-white">
                  Ver ficha del servicio completo de compra (España)
                </Link>
                {config.optionalLocalCompraHref ? (
                  <>
                    {" · "}
                    <Link href={config.optionalLocalCompraHref} className="font-semibold underline hover:text-white">
                      Landing compra {config.city}
                    </Link>
                  </>
                ) : null}
              </p>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections
          city={config.city}
          serviceLabel="Servicio completo de compra"
          primarySlug="servicio-completo-compra"
          platformServiceKind="compra"
          skipFoundersBanner={isBarcelonaExtended}
        />

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
