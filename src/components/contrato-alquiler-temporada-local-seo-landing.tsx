import { FaqSection } from "@/components/faq-section";
import { LocalCityContextSectionFromConfig } from "@/components/local-city-context-section-from-config";
import { LandingLocalTestimonialsSection } from "@/components/landing-local-sections";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import { CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL, resolveServicePriceLabel } from "@/lib/catalog.public";
import type { ContratoAlquilerTemporadaLocalLandingConfig } from "@/lib/contrato-alquiler-temporada-local-cities";
import { temporadaSavingsDerived } from "@/lib/contrato-alquiler-temporada-local-seo-content";
import { localAdministracionAlquilerHref } from "@/lib/administracion-alquiler-local-cities";
import { GESTORIA_INMOBILIARIA_LOCAL_BASE } from "@/lib/gestoria-inmobiliaria-local-cities";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Phone,
  FileText,
  Calendar,
  ClipboardList,
  Home,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

function formatEur(n: number): string {
  return `${n.toLocaleString("es-ES")} €`;
}

function LocalTemporadaJsonLd({
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
    name: `Contrato de alquiler por temporada en ${city}`,
    description:
      "Redacción y revisión de contratos de arrendamiento temporal fuera del régimen LAU habitual. Inventario del inmueble y asesoramiento hasta la firma. Livendia.",
    serviceType: "Contrato de alquiler por temporada",
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
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export async function ContratoAlquilerTemporadaLocalSeoLanding({
  config,
}: {
  config: ContratoAlquilerTemporadaLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const temporada = catalog.find((s) => s.slug === "contrato-alquiler-temporada") ?? null;
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (temporada) servicesBySlug["contrato-alquiler-temporada"] = temporada;
  const priceLabel = resolveServicePriceLabel(temporada, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL);
  const seo = config.seoContent;
  const adminSlug = config.adminSlug ?? config.slug;
  const gestoriaSlug = config.gestoriaSlug ?? config.slug;
  const savingsRows = seo?.savingsRows.map(temporadaSavingsDerived) ?? [];
  const highlightRow =
    savingsRows.find((r) => r.monthlyRent === seo?.highlightRent) ?? savingsRows[0];

  const howItWorks = [
    {
      icon: FileText,
      step: "1",
      title: "Datos del arrendamiento temporal",
      description:
        "Recogemos duración exacta, motivo de la estancia, renta, fianza, suministros y cualquier pacto sobre mobiliario o limpieza de salida.",
    },
    {
      icon: Shield,
      step: "2",
      title: "Redacción específica fuera de LAU habitual",
      description:
        "El contrato de temporada tiene régimen propio: plazos, prórroga y extinción deben cuadrar con lo acordado, no con una plantilla de vivienda habitual.",
    },
    {
      icon: ClipboardList,
      step: "3",
      title: "Inventario del inmueble",
      description:
        "Documentamos el estado del piso y el equipamiento para que entrada y salida queden claras — especialmente útil en rotaciones estacionales.",
    },
    {
      icon: Calendar,
      step: "4",
      title: "Asesoramiento hasta firmar",
      description:
        "Resolvemos dudas en lenguaje directo y dejamos el texto cerrado antes de transferencias o entrega de llaves.",
    },
  ];

  const benefits = [
    {
      icon: Calendar,
      title: "Duración y prórroga claras",
      description: "Fechas de inicio y fin, condiciones de extensión y salida sin ambigüedades que generen litigios.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Home,
      title: `Adaptado a ${config.city}`,
      description:
        "Estancias de verano, desplazamiento laboral o segunda residencia temporal en Palma y municipios de la isla.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Shield,
      title: "Diferencia LAU vs temporada",
      description: "Te explicamos qué encaja en tu caso antes de firmar un contrato que no corresponde al uso real.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: ClipboardList,
      title: "Inventario incluido",
      description: "Estado del inmueble documentado para proteger propiedad e inquilino al finalizar la temporada.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: Clock,
      title: "Entrega en 24-48 h",
      description: "Tras recibir la información completa, redactamos con los plazos publicados de Livendia.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: MessageCircle,
      title: "Gestor dedicado",
      description: "Un interlocutor profesional que conoce tu expediente de principio a fin.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const howImages = [
    "/images/contratos5.jpg",
    "/images/contratodealquiler.jpg",
    "/images/contratos2.jpg",
    "/images/gestoria3.jpg",
  ];

  const benefitStyle = [
    { icon: Calendar, color: "from-blue-500 to-blue-600" },
    { icon: Home, color: "from-cyan-500 to-cyan-600" },
    { icon: Shield, color: "from-teal-500 to-teal-600" },
    { icon: ClipboardList, color: "from-indigo-500 to-indigo-600" },
    { icon: Clock, color: "from-violet-500 to-violet-600" },
    { icon: MessageCircle, color: "from-purple-500 to-purple-600" },
  ] as const;

  const displayBenefits =
    config.localBenefits?.map((b, idx) => {
      const style = benefitStyle[idx % benefitStyle.length];
      return { ...b, icon: style.icon, color: style.color };
    }) ?? benefits;

  const heroBullets = config.heroBullets ?? [
    "Regulación específica fuera de LAU estándar",
    "Cláusulas de duración, prórroga y suministros",
    "Inventario del inmueble incluido",
  ];

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <LocalTemporadaJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
      />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    {config.heroBadge ?? `Entre particulares · Temporada · ${config.city}`}
                  </div>

                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-6xl">
                    {config.heroH1 ?? `Contrato de alquiler por temporada en ${config.city}`}
                  </h1>

                  <p className="mt-6 text-xl leading-relaxed text-blue-50">{config.heroLead}</p>

                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <div className="text-lg text-blue-100">
                      <div>IVA incluido</div>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {heroBullets.map((line) => (
                      <li key={line} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                        <span className="text-lg">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarSlugButton
                      slug="contrato-alquiler-temporada"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:scale-105 hover:bg-blue-50"
                    >
                      Contratar por {priceLabel}
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
                    src={config.heroImage ?? "/images/contratos5.jpg"}
                    alt={`Contrato de alquiler por temporada en ${config.city}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {seo ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <p className="text-lg leading-relaxed text-[#475569]">{seo.introParagraph}</p>
              </div>
            </section>
          ) : null}

          {seo ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  ¿Cuándo usar un contrato de temporada en {config.city}?
                </h2>
                <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-relaxed text-[#475569]">
                  {seo.whenToUseCases.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  {config.whyTitle ?? `¿Por qué un contrato de temporada en ${config.city}?`}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">
                  {config.whySubtitle ?? config.whyIntro}
                </p>
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {displayBenefits.map((benefit) => {
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
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {seo ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Qué incluye el contrato de temporada de Livendia
                </h2>
                <ul className="mt-6 list-disc space-y-2 pl-6 text-[#475569]">
                  {seo.includesItems.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-6 text-lg font-semibold text-[#1A4FBF]">
                  Precio: {priceLabel} IVA incluido · Plazo: 24-48 h laborables
                </p>
              </div>
            </section>
          ) : null}

          {seo ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-5xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Diferencia entre contrato de temporada y contrato LAU en {config.city}
                </h2>
                <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                  <table className="w-full min-w-[640px] text-left text-sm">
                    <thead className="bg-[#1A4FBF] text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Aspecto</th>
                        <th className="px-4 py-3 font-semibold">Contrato de temporada</th>
                        <th className="px-4 py-3 font-semibold">Contrato LAU (vivienda habitual)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-white">
                      {seo.lauComparisonRows.map((row) => (
                        <tr key={row.aspect}>
                          <td className="px-4 py-3 font-medium text-[#1E293B]">{row.aspect}</td>
                          <td className="px-4 py-3 text-[#475569]">{row.temporada}</td>
                          <td className="px-4 py-3 text-[#475569]">{row.lau}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          ) : null}

          {seo && highlightRow ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-5xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                  {seo.savingsTitle}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#64748b]">
                  {seo.savingsIntro} Con una renta de referencia de {formatEur(highlightRow.monthlyRent)}/mes, Livendia
                  supone un ahorro de{" "}
                  <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVsLawyer)}</strong> frente a despacho
                  de abogados y{" "}
                  <strong className="text-[#1E293B]">{formatEur(highlightRow.savingVsAgency)}</strong> frente a gestión
                  inmobiliaria por contrato.
                </p>
                <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                  <table className="w-full min-w-[720px] text-left text-sm">
                    <thead className="bg-[#1A4FBF] text-white">
                      <tr>
                        <th className="px-4 py-3 font-semibold">Renta mensual ref.</th>
                        <th className="px-4 py-3 font-semibold">Despacho abogados*</th>
                        <th className="px-4 py-3 font-semibold">Inmobiliaria (contrato)**</th>
                        <th className="px-4 py-3 font-semibold">Livendia</th>
                        <th className="px-4 py-3 font-semibold text-emerald-200">Ahorro vs abogado</th>
                        <th className="px-4 py-3 font-semibold text-emerald-200">Ahorro vs agencia</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200 bg-[#F8FAFC]">
                      {savingsRows.map((row) => (
                        <tr
                          key={row.monthlyRent}
                          className={row.monthlyRent === seo.highlightRent ? "bg-emerald-50/80" : undefined}
                        >
                          <td className="px-4 py-3 font-medium text-[#1E293B]">{formatEur(row.monthlyRent)}/mes</td>
                          <td className="px-4 py-3 text-[#475569]">{formatEur(row.lawyerWithVat)}</td>
                          <td className="px-4 py-3 text-[#475569]">{formatEur(row.agencyEstimate)}</td>
                          <td className="px-4 py-3 font-semibold text-[#1A4FBF]">{formatEur(row.livendiaPrice)}</td>
                          <td className="px-4 py-3 font-semibold text-emerald-700">{formatEur(row.savingVsLawyer)}</td>
                          <td className="px-4 py-3 font-semibold text-emerald-700">{formatEur(row.savingVsAgency)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-center text-xs text-[#64748b] sm:text-sm">{seo.savingsFootnote}</p>
              </div>
            </section>
          ) : null}

          {seo ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  ¿Qué pasa si el contrato de temporada no está bien redactado?
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#475569]">{seo.risksParagraph}</p>
              </div>
            </section>
          ) : null}

          {config.localZones ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  {config.localZonesHeading ?? `Dónde redactamos contratos de temporada en ${config.city}`}
                </h2>
                <p className="mt-4 text-center text-lg leading-relaxed text-[#475569]">{config.localZones}</p>
              </div>
            </section>
          ) : null}

          <LocalCityContextSectionFromConfig
            city={config.city}
            localMarketInsight={config.localMarketInsight}
            localPriceSnapshot={config.localPriceSnapshot}
            localNeighborhoods={config.localNeighborhoods}
            localServiceNotes={config.localServiceNotes}
            serviceNotesHeading={`Contrato de temporada en ${config.city}`}
          />

          <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">¿Cómo funciona?</h2>
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
                            src={howImages[idx] ?? "/images/contratos5.jpg"}
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

          <LandingLocalTestimonialsSection
            title={config.testimonialsTitle}
            testimonials={config.testimonials}
          />

          <section className="border-b border-slate-200 bg-slate-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl space-y-6">
              <div className="rounded-2xl bg-white p-8 ring-1 ring-slate-200">
                <h3 className="text-lg font-bold text-[#1E293B]">¿Ya tienes inquilino y quieres delegar el día a día?</h3>
                <p className="mt-2 text-[#475569]">
                  Si el piso ya está alquilado en {config.city}, nuestra{" "}
                  <Link
                    href={localAdministracionAlquilerHref(adminSlug)}
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    administración de alquiler en {config.city} (49 €/mes)
                  </Link>{" "}
                  convierte a Livendia en único interlocutor ante el arrendatario.
                </p>
              </div>
              {seo ? (
                <p className="text-center text-sm text-[#64748b]">
                  También te puede interesar el{" "}
                  <Link href="/servicios/contrato-alquiler-lau" className="font-semibold text-[#1A4FBF] hover:underline">
                    contrato de alquiler LAU
                  </Link>{" "}
                  o la{" "}
                  <Link
                    href={`${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${gestoriaSlug}`}
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    gestoría inmobiliaria en {config.city}
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </section>

          {config.faq && config.faq.length > 0 ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas frecuentes sobre contrato de temporada en ${config.city}`}
                  items={config.faq.map((f) => ({ question: f.question, answer: f.answer }))}
                />
              </div>
            </section>
          ) : null}


          <ServiceMidPageContactSection serviceLabel={`Contrato de alquiler de temporada en ${config.city}`} />

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                    <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Alcance del servicio</h3>
                  <p className="mt-2 leading-relaxed text-[#475569]">
                    Redactamos contratos de arrendamiento temporal conforme a la práctica gestora. La obtención de
                    licencias turísticas u otros permisos municipales, si aplican a tu caso, queda fuera de este
                    servicio contractual — te orientamos si detectamos que hace falta otro especialista.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
                ¿Listo para firmar tu contrato de temporada en {config.city}?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">{config.finalCtaLead}</p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="contrato-alquiler-temporada"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105"
                >
                  Contratar por {priceLabel}
                </ContratarSlugButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold hover:bg-white/10"
                >
                  Consultar por WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections city={config.city} skipTestimonials />


        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
