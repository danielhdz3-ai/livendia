import { GestorContactCta } from "@/components/gestor-contact-cta";
import { FaqSection } from "@/components/faq-section";
import { LivendiaFoundersBanner } from "@/components/livendia-founders-banner";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { ServicioCompletoCompraLocalLandingConfig } from "@/lib/servicio-completo-compra-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import {
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT,
} from "@/lib/catalog.public";
import Image from "next/image";
import {
  Shield,
  Users,
  Clock,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  FileText,
  Home,
  Eye,
  Scale,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

function LocalCompraCompletaJsonLd({
  path,
  city,
  administrativeArea,
  description,
}: {
  path: string;
  city: string;
  administrativeArea: string;
  description?: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const graph = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Servicio completo de compra con gestor experto en ${city}`,
    description:
      description ??
      "Acompañamiento profesional desde la reserva hasta la escritura: revisión documental, defensa frente a cláusulas abusivas y gestor dedicado.",
    serviceType: "Acompañamiento integral en compraventa de vivienda",
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

export async function ServicioCompletoCompraLocalSeoLanding({
  config,
}: {
  config: ServicioCompletoCompraLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-compra") ?? null;
  const priceLabel = service
    ? `${(service.price_cents / 100).toFixed(0)} €`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL;
  const priceLabelCompact = service
    ? `${(service.price_cents / 100).toFixed(0)}€`
    : SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT;

  const howItWorks = [
    {
      icon: FileText,
      step: "1",
      title: "Revisión completa de la documentación",
      description:
        "Analizamos exhaustivamente el contrato de reserva, nota registral, cédula de habitabilidad y toda la documentación urbanística antes de que firmes nada.",
    },
    {
      icon: Shield,
      step: "2",
      title: "Te protegemos de cláusulas abusivas",
      description:
        "Revisamos contratos con agencias inmobiliarias, notas de encargo y honorarios. Identificamos y eliminamos cláusulas que perjudiquen tus intereses.",
    },
    {
      icon: Users,
      step: "3",
      title: "Gestor personal a tu disposición",
      description:
        "Tendrás un gestor experto asignado que resolverá tus dudas en cualquier momento. Estamos en contacto permanente durante todo el proceso de compra.",
    },
    {
      icon: Home,
      step: "4",
      title: "Acompañamiento hasta la escritura",
      description:
        "Te acompañamos desde la reserva, pasando por las arras, hasta el día de la firma en notaría. Coordinamos con todas las partes para que todo sea seguro.",
    },
  ];

  const defaultBenefits = [
    {
      icon: Shield,
      title: "Gestor experto que cuida de ti",
      description:
        "Un profesional dedicado exclusivamente a proteger tus intereses durante toda la operación.",
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: FileText,
      title: "Control documental completo",
      description:
        "Revisión y redacción de reserva, arras y coordinación de escritura. Todo bajo control profesional.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Eye,
      title: "Detección de cláusulas abusivas",
      description:
        "Identificamos y eliminamos cláusulas de agencias que puedan perjudicarte económicamente.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Scale,
      title: "Seguridad jurídica total",
      description:
        "Cada paso revisado por expertos en derecho inmobiliario para evitar sorpresas desagradables.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: MessageCircle,
      title: "Contacto permanente",
      description: "Resuelve tus dudas cuando las tengas. Tu gestor está disponible durante todo el proceso.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Clock,
      title: "Acompañamiento hasta el final",
      description: "Desde el primer día hasta la firma en notaría. Un proceso de compra más seguro y tranquilo.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const benefitStyle = [
    { icon: Shield, color: "from-blue-500 to-blue-600" },
    { icon: FileText, color: "from-cyan-500 to-cyan-600" },
    { icon: Eye, color: "from-teal-500 to-teal-600" },
    { icon: Scale, color: "from-indigo-500 to-indigo-600" },
    { icon: MessageCircle, color: "from-violet-500 to-violet-600" },
    { icon: Clock, color: "from-purple-500 to-purple-600" },
  ] as const;

  const benefits =
    config.localBenefits?.map((b, idx) => {
      const style = benefitStyle[idx % benefitStyle.length];
      return { ...b, icon: style.icon, color: style.color };
    }) ?? defaultBenefits;

  const heroBullets = config.heroBullets ?? [
    "Gestor personal dedicado a tu compra",
    "Protección contra prácticas abusivas",
    "Revisión completa: reserva, arras y escritura",
  ];

  const stepImages = [
    "/images/gestoria3.jpg",
    "/images/contratodearras.jpg",
    "/images/familia2.jpg",
    "/images/contratos7.jpg",
  ];

  return (
    <ServicePurchaseProvider service={service}>
      <LocalCompraCompletaJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
        description={config.metaDescription}
      />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    {config.heroBadge ?? `Compra con gestor · ${config.city}`}
                  </div>

                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-6xl">
                    {config.heroH1 ?? "¿Necesitas comprar con todas las garantías para ti?"}
                  </h1>

                  <p className="mt-6 text-xl leading-relaxed text-blue-50">{config.heroLead}</p>

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
                        <span className="text-lg">{line}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50">
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
                </div>

                <div className="relative order-2 h-44 sm:h-56 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src={config.heroImage ?? "/images/gestoria3.jpg"}
                    alt={`Servicio completo de compra con gestor en ${config.city}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  {config.whyTitle ?? `¿Por qué comprar en ${config.city} con Livendia?`}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">{config.whyIntro}</p>
                <p className="mx-auto mt-3 max-w-2xl text-sm font-medium text-[#475569]">
                  {config.whySubtitle ??
                    "Un gestor inmobiliario experto que revisa tu compra con seguridad de principio a fin."}
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

          {config.localZones ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  {config.localZonesHeading ?? `Zonas de ${config.city} donde acompañamos compradores`}
                </h2>
                <p className="mt-4 text-center text-lg leading-relaxed text-[#475569]">{config.localZones}</p>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  ¿Cómo te acompañamos en tu compra?
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
                            src={stepImages[idx] ?? "/images/gestoria3.jpg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
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
                  id={`faq-compra-local-${config.slug}`}
                  title={config.faqTitle ?? `Preguntas frecuentes sobre comprar en ${config.city} entre particulares`}
                  subtitle={
                    config.faqSubtitle ??
                    "Compra sin agencia compradora, reserva, arras y acompañamiento hasta escritura."
                  }
                  items={[...config.faq]}
                />
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-20 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
                  {config.testimonialsTitle}
                </h2>
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

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                    <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Importante saber</h3>
                  <p className="mt-2 leading-relaxed text-[#475569]">
                    Este servicio cubre el acompañamiento profesional y revisión documental completa. No incluye
                    tasas notariales, registrales ni gestorías de compraventa (responsabilidad del comprador según
                    normativa). Te informamos de todos los costes adicionales desde el inicio.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <GestorContactCta placement={`compra_local_${config.slug}`} />

          <LivendiaFoundersBanner />

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl lg:text-5xl">
                {config.finalCtaTitle ?? `¿Listo para comprar con seguridad en ${config.city}?`}
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">{config.finalCtaLead}</p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] px-10 py-5 text-lg font-bold text-[#1E293B] shadow-2xl transition hover:scale-105">
                  Contratar ahora · {priceLabelCompact}
                </ContratarServicioButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-10 py-5 text-lg font-semibold transition hover:bg-white/10"
                >
                  Consultar por WhatsApp
                </a>
              </div>

              <p className="mt-8 text-sm text-blue-200">
                ¿Tienes dudas? Escríbenos y te asesoramos sin compromiso
              </p>
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
