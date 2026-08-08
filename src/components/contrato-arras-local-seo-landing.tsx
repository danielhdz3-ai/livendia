import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { ContratoArrasLocalCityLinks } from "@/components/contrato-arras-local-city-links";
import { FaqSection } from "@/components/faq-section";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import type { ContratoArrasLocalLandingConfig } from "@/lib/contrato-arras-local-cities";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import {
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  FileText,
  Eye,
  Scale,
  FileSearch,
  ClipboardCheck,
  MapPin,
  BookOpen,
  Gavel,
} from "lucide-react";
import { CONTRATO_ARRAS_LOCAL_PRICE_LABEL } from "@/lib/catalog.public";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

function LocalArrasServiceJsonLd({
  path,
  city,
  administrativeArea,
}: {
  path: string;
  city: string;
  administrativeArea: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const graph = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Contrato de arras asistido por profesionales en ${city}`,
    description:
      "Revisión y asistencia profesional en contratos de arras penitenciales y confirmatorias antes de firmar: penalidades, plazos y coherencia registral.",
    serviceType: "Revisión de contratos de arras inmobiliarias",
    provider: {
      "@type": "Organization",
      name: "Livendia",
      url: base,
    },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: administrativeArea,
      },
    },
    url: `${base}${path}`,
    inLanguage: "es-ES",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

export async function ContratoArrasLocalSeoLanding({
  config,
}: {
  config: ContratoArrasLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const pen = catalog.find((s) => s.slug === "contrato-arras-penitenciales");
  const conf = catalog.find((s) => s.slug === "contrato-arras-confirmatorias");
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (pen) servicesBySlug["contrato-arras-penitenciales"] = pen;
  if (conf) servicesBySlug["contrato-arras-confirmatorias"] = conf;

  const seo = config.seoContent;
  const isCatalanLaw = seo?.legalRegion !== "espana";
  const legalFrameworkLabel = isCatalanLaw ? "CCCat" : "Código Civil español";
  const arrasLegalTitle = isCatalanLaw
    ? `Arras — arts. ${seo?.cccatArrasArticles ?? "621-4 a 621-9"} CCCat`
    : `Arras penitenciales — art. ${seo?.cccatArrasArticles ?? "1454"} CC`;
  const financingLegalTitle = isCatalanLaw
    ? `Financiación — art. ${seo?.cccatFinancingArticle ?? "621-49"} CCCat`
    : `Financiación hipotecaria — cláusula en contrato (CC)`;
  const heroTitle =
    config.heroH1 ??
    (seo ? `Gestor que tramita tu contrato de arras en ${config.city}` : "¿Necesitas redactar un contrato de arras por un profesional?");
  const heroBadge = config.heroBadge ?? `Contrato de arras · ${config.city}`;
  const heroLead = seo?.heroSubtitle ?? config.heroLead;

  const howItWorks = [
    {
      icon: FileSearch,
      step: "1",
      title: "Diagnóstico global del borrador",
      description:
        "Leemos el contrato como lo haría un despacho especializado: tipo de arras, identificación del inmueble, forma de pago y cada obligación que te compromete antes de escritura.",
    },
    {
      icon: Shield,
      step: "2",
      title: "Detección de riesgos y malas prácticas",
      description:
        "Señalamos plazos irreales, penalidades desequilibradas, cargas ignoradas o redacciones ambiguas que suelen aparecer en plantillas copiadas sin contrastar con tu caso.",
    },
    {
      icon: ClipboardCheck,
      step: "3",
      title: "Propuesta de correcciones claras",
      description:
        "No solo marcamos problemas: te decimos cómo redactarlo mejor y priorizamos lo negociable frente a lo imprescindible para cerrar sin tensiones innecesarias.",
    },
    {
      icon: Users,
      step: "4",
      title: "Decisión informada hasta la firma",
      description:
        "Resolvemos dudas en lenguaje directo y coordinamos los últimos flecos para que llegues al día de las firmas entendiendo cada coma legalmente relevante.",
    },
  ];

  const benefits = [
    {
      icon: Eye,
      title: "Arras más que una firma rápida",
      description:
        "Este contrato decide cómo sales si algo falla: cantidades, plazos y consecuencias del incumplimiento. Un segundo par experto evita lecturas optimistas.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Shield,
      title: "Menos plantillas peligrosas",
      description:
        "Muchos borradores arrastran cláusulas del año pasado o de otro tipo de operación. Las contrastamos con tu situación para que la obligación coincida con lo pactado verbalmente.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Scale,
      title: "Simetría comprador–vendedor",
      description:
        "Detectamos condiciones que cargan todo el peso sobre una sola parte y sugerimos equilibrios defendibles ante incumplimientos o demoras registrales.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: FileText,
      title: "Coherencia documental",
      description:
        "Cruzamos objetos literales, superficies y situaciones registrales mínimas para reducir grietas entre lo que lees en arras y lo que aparecerá en escritura.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: AlertCircle,
      title: "Alerta ante ‘mini-cláusulas’ conflictivas",
      description:
        "Mantenimiento extraordinario, gastos ocultos, penalidades escalonadas… Sabemos qué puntos disparan disputas después y los tratamos antes del primer ingreso.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Timing seguro",
      description:
        "Validamos calendarios de entrega de documentación y cobros para que nadie quede vendido entre promesas verbales y plazos por escrito.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const stepImages = [
    "/images/contratodearras.jpg",
    "/images/contratos7.jpg",
    "/images/contratos1.jpg",
    "/images/contratos6.jpg",
  ];

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <LocalArrasServiceJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
      />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    {heroBadge}
                  </div>

                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-6xl">{heroTitle}</h1>

                  <p className="mt-6 text-xl leading-relaxed text-blue-50">{heroLead}</p>

                  {seo ? (
                    <div className="mt-6 rounded-xl border border-[#D4AF37]/40 bg-[#D4AF37]/10 px-5 py-4">
                      <p className="text-sm font-semibold text-[#F4E4A6]">Gestor asignado a tu expediente</p>
                      <p className="mt-2 text-sm leading-relaxed text-blue-50">{seo.gestorPitch}</p>
                      <p className="mt-2 text-xs text-blue-200">
                        {legalFrameworkLabel}: arras (arts. {seo.cccatArrasArticles}) · financiación (
                        {isCatalanLaw ? `art. ${seo.cccatFinancingArticle}` : "cláusula hipoteca"})
                      </p>
                    </div>
                  ) : null}

                  <div className="mt-10 rounded-xl bg-white/10 px-5 py-4 backdrop-blur-sm">
                    <p className="text-lg font-semibold text-white">Contrata arras con tarjeta — panel después del pago</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Elige tipo de arras, completa datos y paga en Stripe; al confirmarse el cobro accedes al panel para
                      documentación y expediente.
                    </p>
                    <div className="mt-3 flex flex-wrap gap-3 text-sm">
                      <ContratarSlugButton
                        slug="contrato-arras-penitenciales"
                        className="rounded-full bg-white/90 px-4 py-2 font-semibold text-[#1E3A8A] hover:bg-white"
                      >
                        Contratar penitenciales
                      </ContratarSlugButton>
                      <ContratarSlugButton
                        slug="contrato-arras-confirmatorias"
                        className="rounded-full border border-white/60 px-4 py-2 font-semibold text-white hover:bg-white/10"
                      >
                        Contratar confirmatorias
                      </ContratarSlugButton>
                    </div>
                  </div>

                  <div className="mt-8 space-y-3">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                      <span className="text-lg">Análisis jurídico-gestor centrado en tu operación real</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                      <span className="text-lg">Informe entendible + líneas rojas negociables</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                      <span className="text-lg">Menos sustos entre arras y escritura</span>
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarSlugButton
                      slug="contrato-arras-penitenciales"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50"
                    >
                      Contratar arras penitenciales
                    </ContratarSlugButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src="/images/contratodearras.jpg"
                    alt={`Revisión profesional de contrato de arras en ${config.city}`}
                    fill
                    className="object-cover object-[center_25%]"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {seo ? (
            <>
              <section className="border-b border-[#D4AF37]/30 bg-gradient-to-r from-[#1E293B] via-[#334155] to-[#1E293B] px-4 py-14 text-white sm:px-6">
                <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2 lg:items-start">
                  <div>
                    <div className="flex items-center gap-2 text-[#D4AF37]">
                      <Gavel className="h-6 w-6" aria-hidden />
                      <h2 className="text-xl font-bold sm:text-2xl">{seo.fairArrasHeading}</h2>
                    </div>
                    <p className="mt-4 leading-relaxed text-slate-200">{seo.fairArrasIntro}</p>
                    <p className="mt-4 text-sm leading-relaxed text-slate-300">{seo.arrasTypesIntro}</p>
                  </div>
                  <div className="space-y-4">
                    <div className="rounded-xl bg-white/5 p-5 ring-1 ring-white/10">
                      <div className="flex items-center gap-2 text-cyan-300">
                        <BookOpen className="h-5 w-5" aria-hidden />
                        <h3 className="font-semibold">Código Civil español</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{seo.legalSpanish}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-5 ring-1 ring-[#D4AF37]/30">
                      <div className="flex items-center gap-2 text-[#F4E4A6]">
                        <Scale className="h-5 w-5" aria-hidden />
                        <h3 className="font-semibold">{arrasLegalTitle}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{seo.legalCatalan}</p>
                    </div>
                    <div className="rounded-xl bg-white/5 p-5 ring-1 ring-cyan-400/30">
                      <div className="flex items-center gap-2 text-cyan-200">
                        <Gavel className="h-5 w-5" aria-hidden />
                        <h3 className="font-semibold">{financingLegalTitle}</h3>
                      </div>
                      <p className="mt-2 text-sm leading-relaxed text-slate-300">{seo.legalCatalanFinancing}</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="border-b border-cyan-200 bg-gradient-to-b from-cyan-50 to-white px-4 py-16 sm:px-6">
                <div className="mx-auto max-w-5xl">
                  <p className="text-center text-xs font-bold uppercase tracking-wider text-[#0E7490]">
                    Guía educativa · {legalFrameworkLabel}
                  </p>
                  <h2 className="mt-3 text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                    {seo.financingEducation.heading}
                  </h2>
                  <p className="mx-auto mt-5 max-w-3xl text-center text-lg leading-relaxed text-[#475569]">
                    {seo.financingEducation.intro}
                  </p>

                  <div className="mt-10 grid gap-6 md:grid-cols-2">
                    <div className="rounded-2xl border border-red-200 bg-red-50/80 p-6 ring-1 ring-red-100">
                      <p className="text-sm font-bold uppercase tracking-wide text-[#991B1B]">Riesgo</p>
                      <h3 className="mt-2 text-lg font-bold text-[#1E293B]">
                        {seo.financingEducation.withoutClauseTitle}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                        {seo.financingEducation.withoutClauseBody}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-emerald-200 bg-emerald-50/80 p-6 ring-1 ring-emerald-100">
                      <p className="text-sm font-bold uppercase tracking-wide text-[#047857]">Protección</p>
                      <h3 className="mt-2 text-lg font-bold text-[#1E293B]">
                        {seo.financingEducation.withClauseTitle}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-[#475569]">
                        {seo.financingEducation.withClauseBody}
                      </p>
                    </div>
                  </div>

                  <div className="mt-12 rounded-2xl bg-[#1A4FBF] p-8 text-white shadow-lg sm:p-10">
                    <h3 className="text-xl font-bold sm:text-2xl">{seo.financingEducation.gestorHeading}</h3>
                    <p className="mt-3 text-blue-100">{seo.financingEducation.gestorIntro}</p>
                    <ol className="mt-8 space-y-5">
                      {seo.financingEducation.steps.map((step, i) => (
                        <li key={step.title} className="flex gap-4">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-sm font-bold text-[#1E293B]">
                            {i + 1}
                          </span>
                          <div>
                            <p className="font-semibold">{step.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-blue-100">{step.body}</p>
                          </div>
                        </li>
                      ))}
                    </ol>
                    <div className="mt-8 flex flex-wrap gap-3">
                      <ContratarSlugButton
                        slug="contrato-arras-penitenciales"
                        className="rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] hover:bg-blue-50"
                      >
                        Contratar con gestor asignado
                      </ContratarSlugButton>
                      <a
                        href={waHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold hover:bg-white/10"
                      >
                        {isCatalanLaw ? "Preguntar por el 621-49" : "Preguntar por cláusula hipoteca"}
                      </a>
                    </div>
                  </div>

                  <p className="mt-6 text-center text-xs text-[#64748b]">{seo.financingEducation.disclaimer}</p>
                </div>
              </section>

              <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
                <div className="mx-auto max-w-5xl">
                  <div className="flex items-center gap-2 text-[#1A4FBF]">
                    <MapPin className="h-6 w-6" aria-hidden />
                    <h2 className="text-2xl font-bold text-[#1E293B]">{seo.zonesHeading}</h2>
                  </div>
                  <p className="mt-4 text-lg text-[#475569]">{seo.zonesParagraph}</p>
                  <p className="mt-3 text-[#475569]">{seo.localMarketIntro}</p>
                  <div className="mt-8 grid gap-3 sm:grid-cols-2">
                    {seo.zoneGroups.map((z) => (
                      <div key={z.district} className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-slate-200">
                        <p className="font-bold text-[#1E293B]">{z.district}</p>
                        <p className="mt-1 text-sm text-[#64748b]">{z.areas}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section className="border-b border-red-100 bg-red-50/60 px-4 py-14 sm:px-6">
                <div className="mx-auto max-w-5xl">
                  <h2 className="text-2xl font-bold text-[#1E293B]">
                    Riesgos de perder la señal en {config.city}
                  </h2>
                  <p className="mt-3 text-[#475569]">
                    Sin gestor especializado, estas cláusulas suelen costar miles de euros en arras mal calibradas:
                  </p>
                  <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                    {seo.moneyLossRisks.map((risk) => (
                      <li key={risk.title} className="rounded-xl bg-white p-5 shadow-sm ring-1 ring-red-100">
                        <h3 className="font-semibold text-[#991B1B]">{risk.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#475569]">{risk.body}</p>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-8 text-center text-sm font-medium text-[#64748b]">
                    Tarifa cerrada {CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl. · penitenciales o confirmatorias · gestor
                    asignado
                  </p>
                </div>
              </section>
            </>
          ) : null}

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  ¿Por qué revisar las arras con Livendia en {config.city}?
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">{config.whyIntro}</p>
                <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#475569]">
                  Pensamos como despacho especializado en operaciones entre particulares: lectura crítica + sentido común
                  comercial.
                </p>
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-[#1A4FBF]"
                    >
                      <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${benefit.color} p-4`}>
                        <Icon className="h-8 w-8 text-white" strokeWidth={2} />
                      </div>
                      <h3 className="text-xl font-bold text-[#1E293B]">{benefit.title}</h3>
                      <p className="mt-3 leading-relaxed text-[#475569]">{benefit.description}</p>
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-to-br from-[#1A4FBF]/5 to-transparent" />
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  ¿Cómo trabajamos tu contrato de arras?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">{config.howIntro}</p>
              </div>

              <div className="mt-16 space-y-12">
                {howItWorks.map((item, idx) => {
                  const Icon = item.icon;
                  const isEven = idx % 2 === 0;

                  return (
                    <div
                      key={item.step}
                      className={`grid items-center gap-8 lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                    >
                      <div className={isEven ? "" : "lg:order-2"}>
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-2xl font-extrabold text-white shadow-lg">
                            {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-[#1E293B] lg:text-3xl">{item.title}</h3>
                        </div>
                        <p className="mt-4 text-lg leading-relaxed text-[#475569]">{item.description}</p>
                      </div>

                      <div className={`relative ${isEven ? "" : "lg:order-1"}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                          <Image
                            src={stepImages[idx] ?? "/images/contratodearras.jpg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                          />
                        </div>
                        <div className="absolute -right-4 -top-4 rounded-2xl bg-white p-4 shadow-xl ring-1 ring-slate-200">
                          <Icon className="h-8 w-8 text-[#06B6D4]" strokeWidth={2} />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">{config.testimonialsTitle}</h2>
              </div>

              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {config.testimonials.map((testimonial, idx) => (
                  <div key={idx} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                    <div className="flex gap-1 text-[#D4AF37]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-4 text-lg italic leading-relaxed text-[#475569]">
                      <span aria-hidden>&ldquo;</span>
                      {testimonial.quote}
                      <span aria-hidden>&rdquo;</span>
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#06B6D4]" />
                      <div>
                        <p className="font-semibold text-[#1E293B]">{testimonial.author}</p>
                        <p className="text-sm text-[#64748b]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {config.faq?.length ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas sobre arras en ${config.city}`}
                  subtitle="CC español, Codi civil de Catalunya y gestor asignado — respuestas antes de firmar."
                  items={[...config.faq]}
                />
              </div>
            </section>
          ) : null}


          <ServiceMidPageContactSection serviceLabel={`Contrato de arras en ${config.city}`} />

          {seo ? (
            <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <ContratoArrasLocalCityLinks />
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                    <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Transparencia</h3>
                  <p className="mt-2 leading-relaxed text-[#475569]">
                    Nuestro foco es la lectura profesional del contrato de arras y la coordinación gestora. Cada caso
                    tiene matices urbanísticos o fiscales que pueden requerir otros especialistas; si detectamos un
                    límite, te lo decimos antes de comprometernos más allá de nuestro ámbito.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
                ¿Listo para firmar arras con criterio en {config.city}?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">{config.finalCtaLead}</p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="contrato-arras-penitenciales"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105"
                >
                  Contratar penitenciales
                </ContratarSlugButton>
                <ContratarSlugButton
                  slug="contrato-arras-confirmatorias"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
                >
                  Contratar confirmatorias
                </ContratarSlugButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
                >
                  Consultar por WhatsApp
                </a>
              </div>

              <p className="mt-8 flex flex-wrap items-center justify-center gap-2 text-sm text-blue-200">
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                <span>¿Dudas entre penitenciales y confirmatorias? Te orientamos sin compromiso.</span>
              </p>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections city={config.city} />


        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
