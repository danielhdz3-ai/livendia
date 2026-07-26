import { FaqSection } from "@/components/faq-section";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  SERVICIO_COMPLETO_CV_PRICE_EUR,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT,
} from "@/lib/catalog.public";
import type { ServicioCompletoVentaLocalLandingConfig } from "@/lib/servicio-completo-venta-local-cities";
import {
  getPublishedVenderPisoSinAgenciaCities,
  localVenderPisoSinAgenciaHref,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Users,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  FileText,
  Home,
  Banknote,
  Scale,
  Handshake,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function formatEur(n: number): string {
  return `${n.toLocaleString("es-ES")} €`;
}

function LocalVentaCompletaJsonLd({
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
    name: `Acompañamiento de venta de vivienda con gestor experto en ${city}`,
    description:
      `Vende tu piso entre particulares sin agencia: gestor inmobiliario especializado, reserva, arras, documentación y asesoramiento hasta escritura. ${SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incluido.`,
    serviceType: "Acompañamiento integral en venta de vivienda entre particulares",
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
    offers: {
      "@type": "Offer",
      price: SERVICIO_COMPLETO_CV_PRICE_EUR,
      priceCurrency: "EUR",
      description: "IVA incluido · Pago único",
      url: `${base}${path}`,
    },
    url: `${base}${path}`,
    inLanguage: "es-ES",
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export async function ServicioCompletoVentaLocalSeoLanding({
  config,
}: {
  config: ServicioCompletoVentaLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-venta") ?? null;
  const priceLabel = service
    ? `${(service.price_cents / 100).toFixed(0)} €`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL;
  const priceLabelCompact = service
    ? `${(service.price_cents / 100).toFixed(0)}€`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT;
  const seo = config.seoContent;
  const ventaSeoCity = getPublishedVenderPisoSinAgenciaCities().find((c) => c.city === config.city);
  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero vender mi piso en ${config.city} entre particulares sin agencia. Me interesa el servicio completo de venta Livendia.`,
  )}`;

  const howItWorks = [
    {
      icon: FileText,
      step: "1",
      title: "Estudio de tu venta",
      description:
        "Revisamos precio, comprador, calendario y riesgos del inmueble antes de que firmes reserva o arras que te atan.",
    },
    {
      icon: Shield,
      step: "2",
      title: "Reserva y arras a medida",
      description:
        "Redactamos contrato de reserva y arras (penitenciales o confirmatorias) protegiendo al vendedor: plazos, señal y consecuencias del desistimiento.",
    },
    {
      icon: Scale,
      step: "3",
      title: "Documentación para notaría",
      description:
        "Te guiamos con nota simple, comunidad, certificados, ITE si aplica y coherencia entre lo pactado y lo que se escritura.",
    },
    {
      icon: Handshake,
      step: "4",
      title: "Hasta la escritura",
      description:
        "Asesoramiento en hitos con el comprador y checklist pre-firma para cerrar en notaría sin sorpresas de última hora.",
    },
  ];

  const defaultBenefits = [
    {
      icon: Users,
      title: "Gestor especializado en venta",
      description: "Un profesional en tu expediente de vendedor, no un comercial de exposición.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Banknote,
      title: "Sin comisión de agencia",
      description: "Si ya tienes comprador, no pagues un 3–5 % por intermediación que no necesitas.",
      color: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Home,
      title: "Venta particular a particular",
      description: "Ideal cuando vendes por tu cuenta, Idealista, recomendación o red personal.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: FileText,
      title: "Contratos bien hechos",
      description: "Reserva y arras alineadas con la Ley y con lo que realmente quieres cobrar y entregar.",
      color: "from-indigo-500 to-indigo-600",
    },
  ];

  const benefitStyle = [
    { icon: Users, color: "from-blue-500 to-blue-600" },
    { icon: Banknote, color: "from-emerald-500 to-emerald-600" },
    { icon: Home, color: "from-cyan-500 to-cyan-600" },
    { icon: FileText, color: "from-indigo-500 to-indigo-600" },
    { icon: Shield, color: "from-violet-500 to-violet-600" },
    { icon: Scale, color: "from-purple-500 to-purple-600" },
  ] as const;

  const benefits =
    config.localBenefits?.map((b, idx) => {
      const style = benefitStyle[idx % benefitStyle.length];
      return { ...b, icon: style.icon, color: style.color };
    }) ?? defaultBenefits;

  const heroBullets = config.heroBullets ?? [
    "Gestor personal para tu venta",
    "Reserva y arras redactadas por expertos",
    "Evita comisiones altas de agencia",
  ];

  const stepImages = [
    "/images/servicio-completo-venta-hero.jpg",
    "/images/contratodearras.jpg",
    "/images/gestoria20.jpg",
    "/images/familia6.jpg",
  ];

  return (
    <ServicePurchaseProvider service={service}>
      <LocalVentaCompletaJsonLd
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
                    {config.heroBadge ?? `Vender sin agencia · ${config.city}`}
                  </div>

                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    {config.heroH1 ?? `Vender tu piso en ${config.city} con gestor inmobiliario especializado`}
                  </h1>

                  <p className="mt-6 text-lg leading-relaxed text-blue-50 sm:text-xl">{config.heroLead}</p>

                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <div className="text-lg text-blue-100">
                      <div>IVA incluido · Pago único</div>
                    </div>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {heroBullets.map((line) => (
                      <li key={line} className="flex items-center gap-3">
                        <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" aria-hidden />
                        <span className="text-base sm:text-lg">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl hover:bg-blue-50">
                      Contratar ahora
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-placement={`venta_local_${config.city}_whatsapp`}
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      Consultar por WhatsApp
                    </a>
                  </div>
                  <p className="mt-6 text-sm text-blue-200">
                    {ventaSeoCity ? (
                      <>
                        <Link
                          href={localVenderPisoSinAgenciaHref(ventaSeoCity.slug)}
                          className="font-semibold underline hover:text-white"
                        >
                          {ventaSeoCity.slug === "barcelona"
                            ? "Guía: venta de particular a particular en Barcelona"
                            : `Guía: vender piso sin agencia en ${config.city}`}
                        </Link>
                        {" · "}
                      </>
                    ) : null}
                    <Link
                      href="/servicios/servicio-completo-venta"
                      className="font-semibold underline hover:text-white"
                    >
                      Ver servicio completo de venta (España)
                    </Link>
                  </p>
                </div>

                <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src="/images/servicio-completo-venta-hero.jpg"
                    alt={`Vender piso en ${config.city} con gestor Livendia sin agencia`}
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
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                Vender sin agencia inmobiliaria en {config.city}
              </h2>
              <p className="mx-auto mt-4 text-center text-lg leading-relaxed text-[#64748b]">{config.agencyIntro}</p>
              <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#1E3A8A] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Concepto</th>
                      <th className="px-4 py-3 font-semibold">Agencia tradicional</th>
                      <th className="px-4 py-3 font-semibold">Livendia venta completa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-[#F8FAFC]">
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1E293B]">Honorarios típicos</td>
                      <td className="px-4 py-3 text-[#475569]">3–5 % del precio de venta + IVA</td>
                      <td className="px-4 py-3 font-semibold text-[#1A4FBF]">{priceLabel} fijos · IVA incl.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1E293B]">Exclusiva</td>
                      <td className="px-4 py-3 text-[#475569]">Suele ser obligatoria</td>
                      <td className="px-4 py-3 text-[#475569]">No aplica: tú decides</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1E293B]">Enfoque</td>
                      <td className="px-4 py-3 text-[#475569]">Captación y marketing</td>
                      <td className="px-4 py-3 text-[#475569]">Gestor jurídico-documental de la venta</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium text-[#1E293B]">Ideal si…</td>
                      <td className="px-4 py-3 text-[#475569]">No tienes comprador</td>
                      <td className="px-4 py-3 text-[#475569]">Ya tienes comprador particular</td>
                    </tr>
                    {seo ? (
                      <tr className="bg-emerald-50/80">
                        <td className="px-4 py-3 font-medium text-[#1E293B]">
                          Ejemplo en {config.city}
                        </td>
                        <td className="px-4 py-3 text-[#475569]">
                          {formatEur(seo.savingVs3)} (3 %) · {formatEur(seo.savingVs5)} (5 %) sobre{" "}
                          {formatEur(seo.highlightSalePrice)}
                        </td>
                        <td className="px-4 py-3 font-semibold text-[#1A4FBF]">{priceLabel} · ahorro máximo</td>
                      </tr>
                    ) : null}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                  {config.whyTitle ?? `¿Por qué vender en ${config.city} con Livendia?`}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">{config.whyIntro}</p>
                {config.whySubtitle ? (
                  <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#475569]">{config.whySubtitle}</p>
                ) : null}
                {seo?.gestorLocalNote ? (
                  <p className="mx-auto mt-6 max-w-3xl text-left text-base leading-relaxed text-[#475569] sm:text-center">
                    <span className="font-semibold text-[#1E293B]">Qué cubre tu gestor en {config.city}: </span>
                    {seo.gestorLocalNote}
                  </p>
                ) : null}
              </div>

              <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <div
                      key={benefit.title}
                      className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200"
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

          {seo?.zones?.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  {config.localZonesHeading ?? `Dónde vendemos con gestor en ${config.city}`}
                </h2>
                <ul className="mt-8 space-y-4">
                  {seo.zones.map((zone) => (
                    <li
                      key={zone.name}
                      className="rounded-xl bg-[#F8FAFC] px-5 py-4 ring-1 ring-slate-200"
                    >
                      <span className="font-semibold text-[#1E293B]">{zone.name}</span>
                      <span className="text-[#475569]"> — {zone.context}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : config.localZones ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  {config.localZonesHeading ?? `Dónde vendemos con gestor en ${config.city}`}
                </h2>
                <p className="mt-4 text-center text-lg leading-relaxed text-[#475569]">{config.localZones}</p>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                  ¿Cómo te acompañamos en tu venta?
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
                      className={`grid items-center gap-8 lg:grid-cols-2 ${!isEven ? "" : ""}`}
                    >
                      <div className={isEven ? "" : "lg:order-2"}>
                        <div className="flex items-center gap-4">
                          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-2xl font-extrabold text-white shadow-lg">
                            {item.step}
                          </div>
                          <h3 className="text-2xl font-bold text-[#1E293B]">{item.title}</h3>
                        </div>
                        <p className="mt-4 text-lg leading-relaxed text-[#475569]">{item.description}</p>
                      </div>

                      <div className={`relative ${isEven ? "" : "lg:order-1"}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                          <Image
                            src={stepImages[idx] ?? "/images/servicio-completo-venta-hero.jpg"}
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

          {config.faq?.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas frecuentes sobre vender en ${config.city} entre particulares`}
                  items={[...config.faq]}
                />
              </div>
            </section>
          ) : null}

          <ServiceMidPageContactSection serviceLabel={`Servicio completo de venta en ${config.city}`} />

          <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                {config.testimonialsTitle}
              </h2>
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                {config.testimonials.map((testimonial, idx) => (
                  <div key={idx} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                    <p className="text-lg italic leading-relaxed text-[#475569]">&ldquo;{testimonial.quote}&rdquo;</p>
                    <p className="mt-6 font-semibold text-[#1E293B]">{testimonial.author}</p>
                    <p className="text-sm text-[#64748b]">{testimonial.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <GestorContactCta placement={`venta_local_${config.city}`} />

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <AlertCircle className="h-10 w-10 shrink-0 text-amber-800" />
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Importante</h3>
                  <p className="mt-2 leading-relaxed text-[#475569]">
                    Livendia no sustituye a una agencia de marketing ni garantiza encontrar comprador: el servicio
                    cubre acompañamiento profesional cuando ya vendes entre particulares. Notaría, registro e impuestos
                    (plusvalía, IRPF) son independientes; te orientamos sobre plazos y documentación.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl">
                ¿Listo para vender con seguridad en {config.city}?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">{config.finalCtaLead}</p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105">
                  Contratar · {priceLabelCompact}
                </ContratarServicioButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
