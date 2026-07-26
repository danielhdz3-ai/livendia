import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { FaqSection } from "@/components/faq-section";
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
import type { VenderPisoSinInmobiliariaLandingConfig } from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import {
  buildAgencySavingsRows,
  formatEur,
  VENDER_PISO_SIN_INMOBILIARIA_BASE,
  VENTA_PARTICULAR_TRAMITES,
} from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import Image from "next/image";
import {
  VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE,
  VenderPisoSinInmobiliariaSigningFigure,
} from "@/components/vender-piso-sin-inmobiliaria-images";
import Link from "next/link";
import {
  AlertCircle,
  ArrowRight,
  Banknote,
  CheckCircle,
  ChevronRight,
  ClipboardList,
  FileText,
  Handshake,
  MapPin,
  Phone,
  Shield,
  Users,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function VenderSinInmobiliariaJsonLd({
  config,
  priceEur,
}: {
  config: VenderPisoSinInmobiliariaLandingConfig;
  priceEur: number;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${config.path}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: config.jsonLdServiceName,
        description: config.metaDescription,
        serviceType: "Venta de vivienda entre particulares con acompañamiento jurídico",
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
          description: "IVA incluido · Pago único · Sin comisión sobre precio de venta",
          url: pageUrl,
        },
        url: pageUrl,
        inLanguage: "es-ES",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: base },
          {
            "@type": "ListItem",
            position: 2,
            name: "Vender sin inmobiliaria",
            item: `${base}${VENDER_PISO_SIN_INMOBILIARIA_BASE}`,
          },
          { "@type": "ListItem", position: 3, name: config.city, item: pageUrl },
        ],
      },
      {
        "@type": "HowTo",
        "@id": `${pageUrl}#howto`,
        name: config.howItWorksTitle,
        description: config.howItWorksIntro,
        step: config.howItWorksSteps.map((step, index) => ({
          "@type": "HowToStep",
          position: index + 1,
          name: step.title,
          text: step.body,
        })),
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: config.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export async function VenderPisoSinInmobiliariaSeoLanding({
  config,
}: {
  config: VenderPisoSinInmobiliariaLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-venta") ?? null;
  const priceEur = service ? service.price_cents / 100 : SERVICIO_COMPLETO_CV_PRICE_EUR;
  const priceLabel = service
    ? `${(service.price_cents / 100).toFixed(0)} €`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL;
  const priceLabelCompact = service
    ? `${(service.price_cents / 100).toFixed(0)}€`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT;

  const savingsRows = buildAgencySavingsRows(config.savingsSalePrices, priceEur);
  const highlightRow =
    savingsRows.find((r) => r.salePrice === config.highlightSalePrice) ??
    savingsRows[Math.floor(savingsRows.length / 2)];

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(config.waPrefill)}`;

  return (
    <ServicePurchaseProvider service={service}>
      <VenderSinInmobiliariaJsonLd config={config} priceEur={priceEur} />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <nav
            aria-label="Breadcrumb"
            className="border-b border-slate-100 bg-slate-50 px-4 py-3 text-sm text-slate-600 sm:px-6"
          >
            <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-1">
              <li>
                <Link href="/" className="hover:text-[#1A4FBF]">
                  Inicio
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li>
                <Link href={VENDER_PISO_SIN_INMOBILIARIA_BASE} className="hover:text-[#1A4FBF]">
                  Vender sin inmobiliaria
                </Link>
              </li>
              <li aria-hidden className="text-slate-400">
                <ChevronRight className="h-4 w-4" />
              </li>
              <li className="font-medium text-[#1E293B]">{config.city}</li>
            </ol>
          </nav>

          <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[680px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <p className="mb-4 inline-block self-start rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-sm">
                    {config.heroBadge}
                  </p>

                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">{config.heroH1}</h1>

                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
                    {config.heroLead}
                  </p>

                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-base text-blue-100 sm:text-lg">IVA incl. · Sin comisión sobre venta</span>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {config.heroBullets.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300 sm:h-6 sm:w-6" aria-hidden />
                        <span className="text-sm sm:text-base lg:text-lg">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl hover:bg-blue-50">
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
                </div>

                <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src={VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE}
                    alt={config.imageAlt}
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
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">{config.introTitle}</h2>
              <div className="mt-6 space-y-4 text-base leading-relaxed text-[#475569] sm:text-lg">
                {config.introParagraphs.map((p) => (
                  <p key={p.slice(0, 40)}>{p}</p>
                ))}
              </div>
            </div>
          </section>

          <section
            className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6"
            aria-labelledby="como-funciona-heading"
          >
            <div className="mx-auto max-w-4xl">
              <h2 id="como-funciona-heading" className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                {config.howItWorksTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#64748b] sm:text-lg">
                {config.howItWorksIntro}
              </p>
              <ol className="mt-10 space-y-4">
                {config.howItWorksSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-[#475569] sm:text-base">{step.body}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mx-auto mt-10 max-w-3xl">
                <VenderPisoSinInmobiliariaSigningFigure city={config.city} />
              </div>
            </div>
          </section>

          <section
            className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
            aria-labelledby="servicios-incluidos-heading"
          >
            <div className="mx-auto max-w-5xl">
              <h2
                id="servicios-incluidos-heading"
                className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl"
              >
                {config.servicesTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-base text-[#64748b]">{config.servicesIntro}</p>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2">
                {config.servicesIncluded.map((item) => (
                  <li key={item.title} className="rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200 sm:p-6">
                    <div className="flex items-start gap-3">
                      <FileText className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                      <div>
                        <h3 className="font-bold text-[#1E293B]">
                          {item.href ? (
                            <Link href={item.href} className="hover:text-[#1A4FBF] hover:underline">
                              {item.title}
                            </Link>
                          ) : (
                            item.title
                          )}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-[#475569]">{item.body}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
            aria-labelledby="ahorro-agencias-heading"
          >
            <div className="mx-auto max-w-5xl">
              <h2 id="ahorro-agencias-heading" className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                Cuánto ahorras vendiendo sin comisiones en {config.city}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-base leading-relaxed text-[#64748b] sm:text-lg">
                {config.savingsIntro} En un piso de {formatEur(highlightRow.salePrice)} te ahorras{" "}
                <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVs3)}</strong> frente a una comisión
                del 3 %, o <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVs5)}</strong> frente al
                5 %.
              </p>

              <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-[#1E3A8A] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Precio de venta</th>
                      <th className="px-4 py-3 font-semibold">Agencia 3 % + IVA</th>
                      <th className="px-4 py-3 font-semibold">Agencia 5 % + IVA</th>
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
                Cálculo orientativo: comisión sobre precio de venta + 21 % IVA. Livendia no busca comprador; cubre
                trámites y contratos cuando vendes entre particulares.
              </p>
            </div>
          </section>

          <section
            className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6"
            aria-labelledby="comparativa-heading"
          >
            <div className="mx-auto max-w-5xl">
              <h2 id="comparativa-heading" className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                {config.compareTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-base text-[#64748b]">{config.compareIntro}</p>

              <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[720px] text-left text-sm">
                  <thead className="bg-slate-800 text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Aspecto</th>
                      <th className="bg-[#1A4FBF] px-4 py-3 font-semibold">Livendia</th>
                      <th className="px-4 py-3 font-semibold">Agencia tradicional</th>
                      <th className="px-4 py-3 font-semibold">Vender solo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {config.compareRows.map((row) => (
                      <tr key={row.feature}>
                        <td className="px-4 py-3 font-medium text-[#1E293B]">{row.feature}</td>
                        <td className="bg-blue-50/50 px-4 py-3 font-medium text-[#1A4FBF]">{row.livendia}</td>
                        <td className="px-4 py-3 text-[#475569]">{row.agency}</td>
                        <td className="px-4 py-3 text-[#475569]">{row.alone}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                Trámites para vender un piso entre particulares en {config.city}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">{config.tramitesAreaNote}</p>
              <ol className="mt-10 space-y-4">
                {VENTA_PARTICULAR_TRAMITES.map((item, index) => (
                  <li
                    key={item.title}
                    className="flex gap-4 rounded-2xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200 sm:p-6"
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
                    text: `${priceLabel} IVA incl. Aunque tu piso valga más, el precio del servicio no cambia.`,
                    color: "from-emerald-500 to-emerald-600",
                  },
                  {
                    icon: Shield,
                    title: "Contratos a medida",
                    text: "Reserva y arras redactadas por gestor legal, no plantillas genéricas de internet.",
                    color: "from-blue-500 to-blue-600",
                  },
                  {
                    icon: ClipboardList,
                    title: "Todos los trámites ordenados",
                    text: config.benefitsAreaNote,
                    color: "from-cyan-500 to-cyan-600",
                  },
                  {
                    icon: Handshake,
                    title: "Tú traes al comprador",
                    text: "Ideal para venta entre particulares: Idealista, recomendación, familia o conocidos.",
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

          <section
            className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6"
            aria-labelledby="zonas-heading"
          >
            <div className="mx-auto max-w-4xl text-center">
              <MapPin className="mx-auto h-8 w-8 text-[#1A4FBF]" aria-hidden />
              <h2 id="zonas-heading" className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                {config.neighborhoodsTitle}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-base text-[#64748b]">{config.neighborhoodsIntro}</p>
              <ul className="mt-8 flex flex-wrap justify-center gap-2">
                {config.neighborhoods.map((zone) => (
                  <li
                    key={zone}
                    className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1E293B] ring-1 ring-slate-200"
                  >
                    {zone}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section
            className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6"
            aria-labelledby="relacionados-heading"
          >
            <div className="mx-auto max-w-5xl">
              <h2 id="relacionados-heading" className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Servicios relacionados en {config.city}
              </h2>
              <p className="mt-3 text-base text-[#64748b]">
                Además del servicio completo de venta, estos recursos pueden ayudarte según en qué fase esté tu
                operación:
              </p>
              <ul className="mt-8 grid gap-4 sm:grid-cols-2">
                {config.relatedLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-[#F8FAFC] p-5 transition hover:border-[#1A4FBF] hover:bg-white"
                    >
                      <span className="flex items-center gap-2 font-semibold text-[#1A4FBF] group-hover:underline">
                        {link.label}
                        <ArrowRight className="h-4 w-4" aria-hidden />
                      </span>
                      <span className="mt-2 text-sm text-[#64748b]">{link.description}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-8 w-8 shrink-0 text-amber-800" aria-hidden />
              <div>
                <h2 className="text-lg font-bold text-[#1E293B]">Importante: qué es y qué no es Livendia</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#475569] sm:text-base">{config.disclaimer}</p>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                id={`faq-vender-sin-inmobiliaria-${config.slug}`}
                title={config.faqTitle}
                subtitle={config.faqSubtitle}
                items={[...config.faq]}
              />
            </div>
          </section>

          <ServiceMidPageContactSection serviceLabel={`Venta sin inmobiliaria en ${config.city}`} />

          <GestorContactCta placement={config.gestorCtaPlacement} />

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <Users className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-4xl">{config.finalCtaTitle}</h2>
              <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-blue-50">{config.finalCtaSubtitle}</p>
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
                  <Phone className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
              </div>
              <p className="mt-8 text-sm text-blue-200">
                <Link href="/servicios/servicio-completo-venta" className="font-semibold underline hover:text-white">
                  Ficha del servicio completo de venta
                </Link>
                {config.servicioCompletoVentaLocalHref ? (
                  <>
                    {" · "}
                    <Link
                      href={config.servicioCompletoVentaLocalHref}
                      className="font-semibold underline hover:text-white"
                    >
                      Servicio venta {config.city}
                    </Link>
                  </>
                ) : null}
              </p>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
