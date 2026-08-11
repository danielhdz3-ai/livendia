import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  SERVICIO_COMPLETO_CV_PRICE_EUR,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT,
} from "@/lib/catalog.public";
import {
  PILLAR_SEVILLA_CASE_STUDIES,
  PILLAR_SEVILLA_COMPARE_ROWS,
  PILLAR_SEVILLA_DOCUMENTS,
  PILLAR_SEVILLA_FAQ,
  PILLAR_SEVILLA_SEVILLA_EXTRA,
  PILLAR_SEVILLA_NEIGHBORHOODS,
  PILLAR_SEVILLA_PATH,
  PILLAR_SEVILLA_PROCESS,
  PILLAR_SEVILLA_RELATED,
  PILLAR_SEVILLA_RISKS,
  PILLAR_SEVILLA_SAVINGS_ROWS,
  PILLAR_SEVILLA_SECTIONS,
  PILLAR_SEVILLA_TOC,
} from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-sevilla";
import { VENDER_PISO_SIN_INMOBILIARIA_BASE } from "@/lib/vender-piso-sin-inmobiliaria-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import {
  VenderPisoSinInmobiliariaPillarHeroImage,
  VenderPisoSinInmobiliariaSigningFigure,
} from "@/components/vender-piso-sin-inmobiliaria-images";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  AlertTriangle,
  BookOpen,
  Check,
  ChevronRight,
  FileText,
  List,
  MapPin,
  Phone,
  Scale,
  X,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const WA_PREFILL =
  "Hola, estoy vendiendo mi piso en Sevilla entre particulares (sin comisiones) y quiero saber cómo funciona el servicio completo de venta Livendia.";

function formatEur(n: number): string {
  return `${n.toLocaleString("es-ES")} €`;
}

function PillarJsonLd({
  pageUrl,
  priceEur,
  faq,
}: {
  pageUrl: string;
  priceEur: number;
  faq: readonly { question: string; answer: string }[];
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: "Vender piso sin comisiones en Sevilla entre particulares con gestor legal Livendia",
        description:
          "Acompañamiento jurídico-documental para propietarios que venden en Sevilla sin inmobiliaria: contratos, documentación y coordinación hasta notaría.",
        serviceType: "Venta de vivienda entre particulares",
        provider: { "@type": "Organization", name: "Livendia", url: base },
        areaServed: {
          "@type": "City",
          name: "Sevilla",
          containedInPlace: { "@type": "AdministrativeArea", name: "Andalucía" },
        },
        offers: {
          "@type": "Offer",
          price: priceEur,
          priceCurrency: "EUR",
          description: "IVA incluido · Sin comisión sobre precio de venta",
          url: `${base}/servicios/servicio-completo-venta`,
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
          { "@type": "ListItem", position: 3, name: "Sevilla", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

function InlineCta({
  priceLabelCompact,
  waHref,
  variant = "default",
}: {
  priceLabelCompact: string;
  waHref: string;
  variant?: "default" | "subtle";
}) {
  if (variant === "subtle") {
    return (
      <aside className="my-8 rounded-xl border border-blue-200 bg-blue-50/80 p-5 text-center sm:p-6">
        <p className="text-sm font-semibold text-[#1E293B] sm:text-base">
          ¿Ya tienes comprador en Sevilla? Contrata gestoría por {SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. — sin
          comisión sobre el precio de venta.
        </p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          <ContratarServicioButton className="inline-flex min-h-10 items-center rounded-lg bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#153d99]">
            Contratar · {priceLabelCompact}
          </ContratarServicioButton>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-10 items-center rounded-lg border border-[#1A4FBF] px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-white"
          >
            WhatsApp
          </a>
        </div>
      </aside>
    );
  }

  return (
    <aside className="my-10 rounded-2xl bg-[#1A4FBF] p-6 text-center text-white sm:p-8">
      <p className="text-lg font-bold sm:text-xl">Vende entre particulares con gestor legal en Sevilla</p>
      <p className="mt-2 text-sm leading-relaxed text-blue-100 sm:text-base">
        Tarifa plana {SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. · Sin comisión del 3–5 % · Gestor dedicado hasta
        notaría
      </p>
      <div className="mt-5 flex flex-wrap justify-center gap-3">
        <ContratarServicioButton className="inline-flex min-h-11 items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] hover:bg-blue-50 sm:text-base">
          Contratar servicio · {priceLabelCompact}
        </ContratarServicioButton>
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 text-sm font-semibold hover:bg-white/10"
        >
          <Phone className="h-4 w-4" aria-hidden />
          Consultar
        </a>
      </div>
    </aside>
  );
}

function ProseSection({
  id,
  title,
  paragraphs,
  children,
}: {
  id: string;
  title: string;
  paragraphs: readonly string[];
  children?: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
      <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold leading-snug text-[#0f172a] sm:text-3xl">{title}</h2>
      <div className="mx-auto mt-5 max-w-2xl space-y-4 text-left text-base leading-[1.75] text-slate-700 sm:text-[1.0625rem]">
        {paragraphs.map((p) => (
          <p key={p.slice(0, 48)}>{p}</p>
        ))}
      </div>
      {children}
    </section>
  );
}

export async function VenderPisoSinInmobiliariaSevillaPillarPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-venta") ?? null;
  const priceEur = service ? service.price_cents / 100 : SERVICIO_COMPLETO_CV_PRICE_EUR;
  const priceLabelCompact = service
    ? `${(service.price_cents / 100).toFixed(0)}€`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT;
  const pageUrl = `${getSiteUrl()}${PILLAR_SEVILLA_PATH}`;
  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(WA_PREFILL)}`;

  return (
    <ServicePurchaseProvider service={service}>
      <PillarJsonLd pageUrl={pageUrl} priceEur={priceEur} faq={PILLAR_SEVILLA_FAQ} />
      <div className="flex min-h-screen flex-col bg-[#fafaf9]">
        <PublicHeader />

        <article className="flex-1">
          {/* Cabecera editorial */}
          <header className="border-b border-slate-200 bg-white">
            <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6 sm:py-12 lg:py-16">
              <nav aria-label="Breadcrumb" className="mb-6 text-sm text-slate-500">
                <ol className="flex flex-wrap items-center justify-center gap-1 lg:justify-start">
                  <li>
                    <Link href="/" className="hover:text-[#1A4FBF]">
                      Inicio
                    </Link>
                  </li>
                  <ChevronRight className="mx-1 h-3.5 w-3.5" aria-hidden />
                  <li>
                    <Link href={VENDER_PISO_SIN_INMOBILIARIA_BASE} className="hover:text-[#1A4FBF]">
                      Vender sin inmobiliaria
                    </Link>
                  </li>
                  <ChevronRight className="mx-1 h-3.5 w-3.5" aria-hidden />
                  <li className="font-medium text-slate-800">Sevilla</li>
                </ol>
              </nav>

              <div className="grid items-center gap-8 lg:grid-cols-[1fr_min(100%,480px)] lg:gap-12 xl:grid-cols-[1fr_520px]">
                <div className="text-center lg:text-left">
                  <p className="text-xs font-semibold uppercase tracking-widest text-[#1A4FBF]">
                    Guía completa · Sevilla · 2026
                  </p>
                  <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#0f172a] sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
                    Vender piso sin comisiones en Sevilla
                  </h1>
                  <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-slate-600 lg:mx-0">
                    Guía entre particulares para{" "}
                    <strong className="font-semibold text-slate-800">ahorrar la comisión inmobiliaria</strong> y cerrar
                    en notaría con contratos y documentación en orden — con o sin Livendia como gestor legal.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-500 lg:justify-start">
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-4 w-4" aria-hidden />
                      Lectura ~18 min
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4" aria-hidden />
                      Sevilla capital y área metropolitana
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Scale className="h-4 w-4" aria-hidden />
                      {SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl. · sin % sobre venta
                    </span>
                  </div>

                  <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center rounded-lg bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white shadow-md hover:bg-[#153d99]">
                      Contratar gestoría · {priceLabelCompact}
                    </ContratarServicioButton>
                    <a
                      href="#proceso-completo"
                      className="inline-flex min-h-11 items-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 hover:border-[#1A4FBF]"
                    >
                      Ver proceso paso a paso
                    </a>
                  </div>
                </div>

                <VenderPisoSinInmobiliariaPillarHeroImage alt="Vender piso sin comisiones en Sevilla entre particulares con gestor legal Livendia" />
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <nav
              aria-label="Índice de la guía"
              className="my-8 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <p className="flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-slate-500">
                <List className="h-4 w-4" aria-hidden />
                En esta guía — Sevilla
              </p>
              <ul className="mt-4 grid grid-cols-1 gap-2 text-sm sm:grid-cols-2">
                {PILLAR_SEVILLA_TOC.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="block rounded-md px-2 py-1.5 text-center text-slate-600 transition hover:bg-slate-50 hover:text-[#1A4FBF] sm:text-left"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="pb-16 sm:pb-24">

                {PILLAR_SEVILLA_SECTIONS.map((section, idx) => (
                  <ProseSection key={section.id} id={section.id} title={section.title} paragraphs={section.paragraphs}>
                    {section.id === "que-hace-livendia" ? (
                      <div className="mt-8 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-xl border border-emerald-200 bg-emerald-50/60 p-5">
                          <p className="flex items-center gap-2 font-bold text-emerald-900">
                            <Check className="h-5 w-5" aria-hidden />
                            Livendia SÍ hace
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-emerald-900/90">
                            <li>· Gestor legal dedicado a tu expediente</li>
                            <li>· Reserva, arras y revisión registral</li>
                            <li>· Documentación de comunidad y checklist</li>
                            <li>· Coordinación hasta escritura en notaría</li>
                            <li>· Panel online y seguimiento por WhatsApp</li>
                          </ul>
                        </div>
                        <div className="rounded-xl border border-red-200 bg-red-50/60 p-5">
                          <p className="flex items-center gap-2 font-bold text-red-900">
                            <X className="h-5 w-5" aria-hidden />
                            Livendia NO hace
                          </p>
                          <ul className="mt-3 space-y-2 text-sm text-red-900/90">
                            <li>· Publicar en Idealista o Fotocasa</li>
                            <li>· Fotos, visitas ni filtrado de compradores</li>
                            <li>· Negociar el precio por ti</li>
                            <li>· Cobrar comisión sobre la venta</li>
                            <li>· Exclusiva de venta</li>
                          </ul>
                        </div>
                      </div>
                    ) : null}
                    {idx === 1 ? (
                      <InlineCta priceLabelCompact={priceLabelCompact} waHref={waHref} variant="subtle" />
                    ) : null}
                  </ProseSection>
                ))}
                {/* Proceso completo */}
                <section id="proceso-completo" className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Proceso completo para vender piso directamente a un particular en Sevilla
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-700">
                    Esta cronología recoge una venta típica entre particulares en la ciudad: desde que fijas precio hasta
                    que el comprador se inscribe en el Registro. Los plazos varían según hipotecas, comunidad y
                    documentación.
                  </p>
                  <ol className="mt-8 space-y-6">
                    {PILLAR_SEVILLA_PROCESS.map((step) => (
                      <li
                        key={step.title}
                        className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6"
                      >
                        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-wide text-[#1A4FBF]">
                          <span>{step.phase}</span>
                          <span className="text-slate-400">·</span>
                          <span className="text-slate-500">{step.duration}</span>
                        </div>
                        <h3 className="mt-2 text-lg font-bold text-[#0f172a]">{step.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-slate-700 sm:text-base">{step.body}</p>
                        <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-600">
                          <strong className="text-[#1A4FBF]">Livendia:</strong> {step.livendiaRole}
                        </p>
                      </li>
                    ))}
                  </ol>
                  <InlineCta priceLabelCompact={priceLabelCompact} waHref={waHref} />
                  <VenderPisoSinInmobiliariaSigningFigure city="Sevilla" />
                </section>

                {/* Documentación */}
                <section id="documentacion" className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Documentación necesaria para vender sin agencia en Sevilla
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-700">
                    El comprador particular y, sobre todo, su banco pedirán estos documentos. Tenerlos listos antes de
                    firmar arras acorta semanas de retraso.
                  </p>
                  <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full min-w-[640px] text-left text-sm">
                      <thead className="bg-slate-800 text-white">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Documento</th>
                          <th className="px-4 py-3 font-semibold">Quién lo aporta</th>
                          <th className="px-4 py-3 font-semibold">Por qué importa</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {PILLAR_SEVILLA_DOCUMENTS.map((doc) => (
                          <tr key={doc.name} className="align-top">
                            <td className="px-4 py-3 font-medium text-[#0f172a]">{doc.name}</td>
                            <td className="px-4 py-3 text-slate-600">{doc.whoProvides}</td>
                            <td className="px-4 py-3 text-slate-600">{doc.whyItMatters}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Riesgos */}
                <section id="riesgos" className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Riesgos de vender solo frente a vender con acompañamiento legal
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-700">
                    Vender casa sin agencia no es arriesgado por definición; lo es cuando la parte legal se improvisa.
                    Estos son los escenarios que más consultas generan en operaciones sevillanas.
                  </p>
                  <ul className="mt-8 space-y-4">
                    {PILLAR_SEVILLA_RISKS.map((r) => (
                      <li key={r.risk} className="rounded-xl border border-slate-200 bg-white p-5">
                        <p className="flex items-start gap-2 font-bold text-[#0f172a]">
                          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
                          {r.risk}
                        </p>
                        <div className="mt-3 grid gap-3 text-sm sm:grid-cols-2">
                          <p>
                            <span className="font-semibold text-slate-800">Vendiendo solo:</span> {r.alone}
                          </p>
                          <p>
                            <span className="font-semibold text-[#1A4FBF]">Con Livendia:</span> {r.withLivendia}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                  <InlineCta priceLabelCompact={priceLabelCompact} waHref={waHref} variant="subtle" />
                </section>

                {/* Comparativa */}
                <section id="comparativa" className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Comparativa: agencia inmobiliaria, vender solo o vender con Livendia
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-700">
                    Si tu objetivo es <strong>ahorrar comisión inmobiliaria</strong> y ya tienes comprador, la decisión
                    no es agencia vs. «gratis», sino cuánto riesgo asumes en contratos y documentación.
                  </p>
                  <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200 shadow-sm">
                    <table className="w-full min-w-[720px] text-left text-sm">
                      <thead>
                        <tr className="bg-slate-800 text-white">
                          <th className="px-4 py-3 font-semibold">Aspecto</th>
                          <th className="bg-[#1A4FBF] px-4 py-3 font-semibold">Livendia</th>
                          <th className="px-4 py-3 font-semibold">Agencia tradicional</th>
                          <th className="px-4 py-3 font-semibold">Vender solo</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {PILLAR_SEVILLA_COMPARE_ROWS.map((row) => (
                          <tr key={row.aspect}>
                            <td className="px-4 py-3 font-medium text-[#0f172a]">{row.aspect}</td>
                            <td className="bg-blue-50/40 px-4 py-3 font-medium text-[#1A4FBF]">{row.livendia}</td>
                            <td className="px-4 py-3 text-slate-600">{row.agency}</td>
                            <td className="px-4 py-3 text-slate-600">{row.alone}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* Ahorro */}
                <section id="ahorro-comisiones" className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Cuánto puedes ahorrar en comisiones al vender sin inmobiliaria en Sevilla
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-700">
                    Las cifras siguientes comparan comisión de agencia (3 % y 5 % más IVA) con la tarifa plana Livendia
                    de {SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido. Son orientativas; el ahorro real depende del
                    precio de cierre de tu vivienda.
                  </p>
                  <div className="mt-8 overflow-x-auto rounded-xl border border-slate-200">
                    <table className="w-full min-w-[600px] text-left text-sm">
                      <thead className="bg-emerald-800 text-white">
                        <tr>
                          <th className="px-4 py-3 font-semibold">Precio venta</th>
                          <th className="px-4 py-3 font-semibold">Agencia 3 % + IVA</th>
                          <th className="px-4 py-3 font-semibold">Agencia 5 % + IVA</th>
                          <th className="px-4 py-3 font-semibold">Livendia</th>
                          <th className="px-4 py-3 font-semibold">Ahorro vs 3 %</th>
                          <th className="px-4 py-3 font-semibold">Ahorro vs 5 %</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 bg-white">
                        {PILLAR_SEVILLA_SAVINGS_ROWS.map((row) => (
                          <tr key={row.price} className={row.price === 250_000 ? "bg-emerald-50/50" : undefined}>
                            <td className="px-4 py-3 font-medium">{formatEur(row.price)}</td>
                            <td className="px-4 py-3 text-slate-600">{formatEur(row.agency3)}</td>
                            <td className="px-4 py-3 text-slate-600">{formatEur(row.agency5)}</td>
                            <td className="px-4 py-3 font-semibold text-[#1A4FBF]">{formatEur(row.livendia)}</td>
                            <td className="px-4 py-3 font-semibold text-emerald-700">
                              {formatEur(row.agency3 - row.livendia)}
                            </td>
                            <td className="px-4 py-3 font-semibold text-emerald-700">
                              {formatEur(row.agency5 - row.livendia)}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p className="mt-4 text-left text-sm text-slate-500">
                    Ejemplo destacado: en un piso de 250.000 €, ahorras 8.185 € frente al 3 % + IVA o 14.235 € frente al
                    5 % + IVA.
                  </p>
                </section>

                {PILLAR_SEVILLA_SEVILLA_EXTRA.map((section) => (
                  <ProseSection key={section.id} id={section.id} title={section.title} paragraphs={section.paragraphs}>
                    {section.id === "sevilla-mercado" ? (
                      <div className="mt-6 text-center">
                        <p className="text-sm font-semibold text-slate-700">Barrios y municipios donde operamos en Sevilla:</p>
                        <ul className="mt-3 flex flex-wrap justify-center gap-2">
                          {PILLAR_SEVILLA_NEIGHBORHOODS.map((z) => (
                            <li
                              key={z}
                              className="rounded-full border border-slate-200 bg-white px-3 py-1 text-sm text-slate-700"
                            >
                              {z}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}
                  </ProseSection>
                ))}

                {/* Casos ejemplo */}
                <section id="casos-ejemplo" className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Ejemplos representativos de venta entre particulares en Sevilla
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-700">
                    Escenarios compuestos a partir de operaciones habituales en la ciudad. No son testimonios
                    nominativos, sino ilustraciones del ahorro y del tipo de problemas que resuelve el acompañamiento
                    legal.
                  </p>
                  <div className="mt-8 space-y-6">
                    {PILLAR_SEVILLA_CASE_STUDIES.map((c) => (
                      <article key={c.title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
                        <h3 className="text-lg font-bold text-[#0f172a]">{c.title}</h3>
                        <dl className="mt-4 space-y-3 text-sm sm:text-base">
                          <div>
                            <dt className="font-semibold text-slate-800">Situación</dt>
                            <dd className="mt-1 text-slate-600">{c.scenario}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-slate-800">Dificultad</dt>
                            <dd className="mt-1 text-slate-600">{c.challenge}</dd>
                          </div>
                          <div>
                            <dt className="font-semibold text-slate-800">Resolución</dt>
                            <dd className="mt-1 text-slate-600">{c.outcome}</dd>
                          </div>
                          <div className="rounded-lg bg-emerald-50 px-3 py-2 font-semibold text-emerald-800">
                            {c.savings}
                          </div>
                        </dl>
                      </article>
                    ))}
                  </div>
                  <InlineCta priceLabelCompact={priceLabelCompact} waHref={waHref} />
                </section>

                {/* Servicios relacionados — pilar linking */}
                <section id="servicios-relacionados" className="scroll-mt-24 border-b border-slate-100 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Servicios Livendia y guías relacionadas
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base leading-relaxed text-slate-700">
                    Esta página es el <strong>pilar editorial</strong> para vender sin inmobiliaria en Sevilla. Desde
                    aquí enlazamos las fichas de servicio, otras landings locales y el hub nacional para compraventa
                    entre particulares.
                  </p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {PILLAR_SEVILLA_RELATED.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#1A4FBF] hover:shadow-md"
                        >
                          <span className="text-xs font-semibold uppercase tracking-wide text-slate-400">
                            {link.category}
                          </span>
                          <span className="mt-1 font-semibold text-[#1A4FBF] group-hover:underline">
                            {link.label}
                          </span>
                          <span className="mt-1 text-sm text-slate-600">{link.description}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* FAQ */}
                <section id="preguntas-frecuentes" className="scroll-mt-24 py-10 text-center sm:py-12">
                  <h2 className="mx-auto max-w-2xl font-serif text-2xl font-bold text-[#0f172a] sm:text-3xl">
                    Preguntas frecuentes sobre vender sin comisiones en Sevilla
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-left text-base text-slate-600">
                    Respuestas sobre venta entre particulares, trámites, ahorro y el papel de Livendia.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {PILLAR_SEVILLA_FAQ.map((item) => (
                      <li key={item.question}>
                        <details className="group rounded-xl border border-slate-200 bg-white open:shadow-sm">
                          <summary className="cursor-pointer list-none px-5 py-4 font-semibold text-[#0f172a] marker:content-none [&::-webkit-details-marker]:hidden">
                            <span className="flex items-start justify-between gap-4">
                              {item.question}
                              <span className="shrink-0 text-[#1A4FBF] transition group-open:rotate-45">+</span>
                            </span>
                          </summary>
                          <p className="border-t border-slate-100 px-5 py-4 text-sm leading-relaxed text-slate-600 sm:text-base">
                            {item.answer}
                          </p>
                        </details>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* CTA final */}
                <footer className="mt-4 rounded-2xl border border-[#1A4FBF]/20 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] p-8 text-center text-white sm:p-10">
                  <div className="mx-auto flex max-w-2xl flex-col items-center gap-4">
                    <FileText className="h-10 w-10 shrink-0 text-cyan-200" aria-hidden />
                    <div>
                      <h2 className="text-xl font-bold sm:text-2xl">
                        Vende tu piso en Sevilla entre particulares — con gestor legal, sin comisión del 3–5 %
                      </h2>
                      <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
                        Contrata el servicio completo de venta Livendia: {SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.,
                        gestor dedicado, contratos a medida y acompañamiento hasta notaría. Ideal si ya tienes comprador
                        y quieres esta guía convertida en expediente real.
                      </p>
                      <div className="mt-6 flex flex-wrap justify-center gap-3">
                        <ContratarServicioButton className="inline-flex min-h-11 items-center rounded-full bg-white px-8 py-3 text-sm font-bold text-[#1A4FBF] hover:bg-blue-50 sm:text-base">
                          Contratar ahora · {priceLabelCompact}
                        </ContratarServicioButton>
                        <a
                          href={waHref}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex min-h-11 items-center rounded-full border-2 border-white px-8 py-3 text-sm font-semibold hover:bg-white/10"
                        >
                          Hablar con un gestor
                        </a>
                        <Link
                          href="/servicios/servicio-completo-venta"
                          className="inline-flex min-h-11 items-center rounded-full border border-white/40 px-6 py-3 text-sm text-blue-100 hover:bg-white/5"
                        >
                          Ver ficha del servicio
                        </Link>
                      </div>
                    </div>
                  </div>
                </footer>
              </div>
          </div>
        </article>
        <ServiceLandingSharedSections city="Sevilla" />

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
