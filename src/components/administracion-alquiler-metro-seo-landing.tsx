import { AlquilerRegulatoryLocalSection } from "@/components/alquiler-regulatory-local-section";
import { FaqSection } from "@/components/faq-section";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { GestorMiniCard } from "@/components/gestor-mini-card";
import { LandingLocalTestimonialsSection } from "@/components/landing-local-sections";
import { LandingTrustBar } from "@/components/landing-trust-bar";
import { OfficeMap } from "@/components/office-map";
import { PublicHeader } from "@/components/public-header";
import { ServiceGestorPlatformSection } from "@/components/service-gestor-platform-section";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
import { MetroLocalMarketSection } from "@/components/metro-local-market-section";
import {
  mergeMetroFaq,
  type AdministracionAlquilerMetroLanding,
} from "@/lib/administracion-alquiler-metro-landings";
import { getMetroEnrichment } from "@/lib/administracion-alquiler-metro-enrichment";
import { ALQUILER_REGULATORY_BY_SLUG } from "@/lib/administracion-alquiler-local-regulatory";
import { ADMINISTRACION_ALQUILER_LOCAL_BASE } from "@/lib/administracion-alquiler-local-cities";
import {
  BUSINESS_EMAIL,
  buildBusinessPostalAddress,
  getBusinessAddressDisplayLine,
  getBusinessMapsExternalUrl,
  getBusinessPostalCode,
  getBusinessStreetAddress,
} from "@/lib/business-nap";
import { getContactPhoneDisplay, getContactPhoneE164Plus, getContactPhoneTelHref } from "@/lib/contact";
import type { GestorWorkflowContent } from "@/lib/gestor-workflow-content";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Users,
  Wrench,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function buildWaHref(place: string): string {
  const text = `Hola, quiero información sobre la administración de mi alquiler en ${place}`;
  return `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

function MetroRealEstateAgentJsonLd({ config }: { config: AdministracionAlquilerMetroLanding }) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${config.path}`;

  const agent: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${pageUrl}#realestateagent`,
    name: config.jsonLd.name,
    description: config.metaDescription,
    url: pageUrl,
    telephone: getContactPhoneE164Plus(),
    email: BUSINESS_EMAIL,
    image: `${base}/icons/icon-512.png`,
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      streetAddress: getBusinessStreetAddress(),
      addressLocality: config.jsonLd.addressLocality,
      ...(config.jsonLd.addressRegion ? { addressRegion: config.jsonLd.addressRegion } : {}),
      postalCode: getBusinessPostalCode(),
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "Place",
      name: config.jsonLd.areaServedName,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Livendia",
      url: base,
      address: buildBusinessPostalAddress(),
    },
    inLanguage: "es-ES",
  };

  if (config.jsonLd.geo) {
    agent.geo = {
      "@type": "GeoCoordinates",
      latitude: config.jsonLd.geo.latitude,
      longitude: config.jsonLd.geo.longitude,
    };
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agent) }} />
  );
}

function buildMetroWorkflow(config: AdministracionAlquilerMetroLanding): GestorWorkflowContent {
  return {
    heading: `Empieza con Livendia en ${config.zoneLabel}`,
    intro:
      "Sin desplazarte al despacho por cada incidencia: hablas con tu gestor, activamos el panel y Livendia asume el canal con el inquilino. Tú conservas el control de las decisiones importantes.",
    steps: [
      {
        title: "Contacto con tu gestor (WhatsApp o teléfono)",
        body: `Cuéntanos tu piso en ${config.zoneLabel}: situación del contrato, inquilino actual o búsqueda de nuevo arrendatario. Respondemos en horario laboral con criterio legal catalán.`,
      },
      {
        title: "Alta del inmueble en el panel Livendia",
        body: "Registramos datos del piso, contactos del inquilino, contrato y suministros. Recibes acceso al expediente digital 24/7.",
      },
      {
        title: "Livendia gestiona al inquilino — tú no",
        body: "Incidencias, averías, dudas de comunidad y reclamación de renta pasan por nosotros. Documentamos cada actuación para tu tranquilidad.",
      },
      {
        title: "Solo te avisamos de lo que importa",
        body: `Pagos recibidos, impagos, renovaciones con IRAV en zona tensionada u obras que requieran tu firma en ${config.zoneLabel}. El resto no interrumpe tu día.`,
      },
    ],
    primaryCtaLabel: config.primaryCtaLabel,
    secondaryCtaLabel: `Llamar: ${getContactPhoneDisplay()}`,
    disclaimer: "Administración 49 €/mes IVA incl. · Sin permanencia · Oficina en Les Corts, Barcelona",
  };
}

const GRID_ICONS = [Shield, FileText, Wrench, Users] as const;

export function AdministracionAlquilerMetroSeoLanding({
  config,
}: {
  config: AdministracionAlquilerMetroLanding;
}) {
  const enrichment = getMetroEnrichment(config.segments);
  const waHref = buildWaHref(config.waPlaceLabel);
  const telHref = getContactPhoneTelHref();
  const mapsUrl = getBusinessMapsExternalUrl();
  const faqItems = mergeMetroFaq(config.localFaq);
  const regulatory = config.regulatorySlug ? ALQUILER_REGULATORY_BY_SLUG[config.regulatorySlug] : undefined;
  const placement = `metro_admin_${config.segments.join("_")}`;

  const benefits = [
    {
      icon: Shield,
      title: "Cero contacto con el inquilino",
      description: `En ${config.zoneLabel}, Livendia es el único canal del arrendatario. Tú no recibes llamadas ni WhatsApp a deshora.`,
      color: "from-blue-500 to-blue-600",
    },
    {
      icon: Wrench,
      title: "Incidencias en el parque local",
      description: enrichment
        ? `Coordinamos técnicos habituados al tipo de edificio de ${config.zoneLabel}: ${enrichment.dominantHousingType.split(".")[0]}.`
        : "Coordinamos técnicos, presupuestos y seguimiento hasta el cierre. Tú apruebas cuando hace falta, no gestionas el día a día.",
      color: "from-cyan-500 to-cyan-600",
    },
    {
      icon: Clock,
      title: "Cobro y renovaciones con IRAV",
      description: enrichment
        ? `Seguimiento de la renta el día 1 y renovaciones con baremo legal en zona tensionada. Referencia de mercado: ${enrichment.rentPricePerSqm.split(".")[0]}.`
        : "Seguimiento de la renta el día 1, renovaciones, plazos legales e IRAV en Cataluña con aviso previo.",
      color: "from-teal-500 to-teal-600",
    },
    {
      icon: Users,
      title: "Mediación adaptada al inquilino",
      description: enrichment
        ? `Filtramos conflictos de convivencia y peticiones habituales de ${enrichment.tenantProfile[0]?.toLowerCase() ?? "la zona"} antes de llegar a ti.`
        : "Conflictos de convivencia, retrasos o peticiones del inquilino los filtramos con criterio antes de llegar a ti.",
      color: "from-indigo-500 to-indigo-600",
    },
    {
      icon: FileText,
      title: "Panel del propietario 24/7",
      description:
        "Contratos, recibos e historial de incidencias en un solo lugar. Consulta desde móvil sin llamar al despacho.",
      color: "from-violet-500 to-violet-600",
    },
    {
      icon: Phone,
      title: "Gestor asignado en Les Corts",
      description:
        "Oficina física en Barcelona: no eres un ticket anónimo. Hablas con un profesional que conoce tu zona.",
      color: "from-purple-500 to-purple-600",
    },
  ];

  const howItWorks = [
    {
      icon: Users,
      step: "1",
      title: "Nos convertimos en tu intermediario",
      description: `Desde el primer día en ${config.zoneLabel}, Livendia es el punto de contacto entre tú y tu inquilino. Cero mensajes directos a tu móvil.`,
    },
    {
      icon: MessageCircle,
      step: "2",
      title: "Gestionamos todas las comunicaciones",
      description:
        "Consultas, averías y reclamaciones las atiende tu gestor con tiempos de respuesta publicados.",
    },
    {
      icon: Wrench,
      step: "3",
      title: "Coordinamos reparaciones e impagos",
      description:
        "Industriales de confianza, protocolo de cobro desde el día 3 y mediación antes de escalar.",
    },
    {
      icon: FileText,
      step: "4",
      title: "Te informamos solo de lo crítico",
      description: `Rentas cobradas, decisiones que requieren tu firma o novedades legales en ${config.zoneLabel}.`,
    },
  ];

  const workflow = buildMetroWorkflow(config);

  return (
    <>
      <MetroRealEstateAgentJsonLd config={config} />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main id="contenido-principal">
          <nav aria-label="Jerarquía de administración de alquiler" className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-3 sm:px-6">
            <ol className="mx-auto flex max-w-7xl flex-wrap items-center gap-x-2 gap-y-1 text-sm text-[#64748b]">
              <li>
                <Link href={ADMINISTRACION_ALQUILER_LOCAL_BASE} className="hover:text-[#1A4FBF] hover:underline">
                  Administración por ciudad
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href={config.parentCityHubPath} className="hover:text-[#1A4FBF] hover:underline">
                  {config.parentCityHubLabel}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="font-semibold text-[#1E293B]">{config.zoneLabel}</li>
            </ol>
          </nav>

          {/* Hero */}
          <header className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[620px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
                  <p className="mb-6 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    Administración de alquiler · {config.zoneLabel}
                  </p>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">{config.h1}</h1>
                  <p className="mt-5 text-lg leading-relaxed text-blue-50 sm:text-xl">{config.subtitle}</p>
                  <p className="mt-4 text-base leading-relaxed text-blue-100/95">{config.heroLead}</p>

                  <div className="mt-8 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl">49 €</span>
                    <div className="text-lg text-blue-100">/mes · IVA incluido · Sin permanencia</div>
                  </div>

                  <ul className="mt-6 space-y-2">
                    {[
                      "Livendia habla con el inquilino — tú no",
                      "Cobro de renta e incidencias coordinadas",
                      "Oficina física en Les Corts (Barcelona)",
                    ].map((line) => (
                      <li key={line} className="flex items-center gap-3 text-base sm:text-lg">
                        <CheckCircle className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-placement={`${placement}_hero_wa`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl transition hover:bg-blue-50"
                    >
                      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                      {config.primaryCtaLabel}
                    </a>
                    <a
                      href={telHref}
                      data-analytics-placement={`${placement}_hero_phone`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                    >
                      <Phone className="h-5 w-5 shrink-0" aria-hidden />
                      {config.secondaryCtaLabel ?? `Llamar: ${getContactPhoneDisplay()}`}
                    </a>
                  </div>

                  <LandingTrustBar
                    className="mt-6 justify-start text-blue-100"
                    items={["Sin permanencia", "Respuesta en 24 h", "Gestor en Les Corts"]}
                  />
                </div>

                <div className="relative order-2 h-56 sm:h-72 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src={config.heroImage}
                    alt={`Administración de alquiler en ${config.zoneLabel}`}
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </header>

          {/* Propuesta de valor */}
          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6" aria-labelledby="beneficios-heading">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 id="beneficios-heading" className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                  Livendia se encarga del inquilino. Tú de las decisiones.
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">{config.whyIntro}</p>
              </div>
              <ul className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {benefits.map((benefit) => {
                  const Icon = benefit.icon;
                  return (
                    <li
                      key={benefit.title}
                      className="relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200"
                    >
                      <div className={`mb-4 inline-flex rounded-2xl bg-gradient-to-br ${benefit.color} p-4`}>
                        <Icon className="h-8 w-8 text-white" strokeWidth={2} aria-hidden />
                      </div>
                      <h3 className="text-xl font-bold text-[#1E293B]">{benefit.title}</h3>
                      <p className="mt-3 leading-relaxed text-[#475569]">{benefit.description}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>

          {/* EEAT local */}
          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6" aria-labelledby="eeat-heading">
            <div className="mx-auto max-w-4xl">
              <article>
                <h2 id="eeat-heading" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
                  {config.eeatHeading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#475569]">{config.eeatBlock}</p>
              </article>
            </div>
          </section>

          {enrichment ? <MetroLocalMarketSection zoneLabel={config.zoneLabel} enrichment={enrichment} /> : null}

          {/* Servicios incluidos */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6" aria-labelledby="servicios-heading">
            <div className="mx-auto max-w-7xl">
              <h2 id="servicios-heading" className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                Qué incluye la administración en {config.zoneLabel}
              </h2>

              {config.serviceGrid ? (
                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {config.serviceGrid.map((item, idx) => {
                    const Icon = GRID_ICONS[idx] ?? Shield;
                    return (
                      <li
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100"
                      >
                        <div className="mb-4 inline-flex rounded-xl bg-[#1A4FBF]/10 p-3 text-[#1A4FBF]">
                          <Icon className="h-6 w-6" aria-hidden />
                        </div>
                        <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                      </li>
                    );
                  })}
                </ul>
              ) : null}

              {config.serviceBullets ? (
                <ul className="mx-auto mt-10 max-w-3xl space-y-6">
                  {config.serviceBullets.map((item) => (
                    <li key={item.title} className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                      <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-[#64748b]">{item.description}</p>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </section>

          {/* Barrios */}
          {config.barrios?.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6" aria-labelledby="barrios-heading">
              <div className="mx-auto max-w-4xl text-center">
                <MapPin className="mx-auto h-8 w-8 text-[#1A4FBF]" aria-hidden />
                <h2 id="barrios-heading" className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Zonas que cubrimos en {config.zoneLabel}
                </h2>
                {config.barriosIntro ? (
                  <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">{config.barriosIntro}</p>
                ) : null}
                <ul className="mt-8 flex flex-wrap justify-center gap-2">
                  {config.barrios.map((zone) => (
                    <li
                      key={zone}
                      className="rounded-full bg-[#F8FAFC] px-4 py-2 text-sm font-medium text-[#1E293B] ring-1 ring-slate-200"
                    >
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {/* Banner gestor */}
          <GestorContactCta
            placement={`${placement}_mid`}
            serviceLabel={`Administración de alquiler en ${config.zoneLabel}`}
            city={config.zoneLabel}
          />

          {/* Cómo funciona */}
          <section className="border-b border-slate-200 bg-white px-4 py-20 sm:px-6" aria-labelledby="como-funciona-heading">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 id="como-funciona-heading" className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                  ¿Cómo funciona Livendia en {config.zoneLabel}?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">{config.howIntro}</p>
              </div>

              <ol className="mt-16 space-y-12">
                {howItWorks.map((item, idx) => {
                  const Icon = item.icon;
                  const isEven = idx % 2 === 0;
                  return (
                    <li
                      key={item.step}
                      className={`grid items-center gap-8 lg:grid-cols-2 ${!isEven ? "lg:flex-row-reverse" : ""}`}
                    >
                      <div className={isEven ? "" : "lg:order-2"}>
                        <div className="flex items-center gap-4">
                          <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-xl font-extrabold text-white shadow-lg">
                            {item.step}
                          </span>
                          <h3 className="text-xl font-bold text-[#1E293B] sm:text-2xl">{item.title}</h3>
                        </div>
                        <p className="mt-4 text-lg leading-relaxed text-[#475569]">{item.description}</p>
                      </div>
                      <div className={`relative ${isEven ? "" : "lg:order-1"}`}>
                        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-slate-200">
                          <Image
                            src={config.howImages[idx] ?? "/images/gestoria.jpg"}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                          />
                        </div>
                        <div className="absolute -right-3 -top-3 rounded-2xl bg-white p-3 shadow-xl ring-1 ring-slate-200">
                          <Icon className="h-7 w-7 text-[#06B6D4]" strokeWidth={2} aria-hidden />
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>

          {/* Testimonios */}
          <LandingLocalTestimonialsSection
            title={config.testimonialsTitle}
            testimonials={config.testimonials}
            subtitle={`Propietarios en ${config.zoneLabel} que delegaron el contacto con el inquilino en Livendia.`}
          />

          {/* Plataforma + proceso gestor */}
          <ServiceGestorPlatformSection
            workflow={workflow}
            city={config.zoneLabel}
            serviceLabel={`Administración de alquiler en ${config.zoneLabel}`}
            primaryHrefOverride={waHref}
            primaryExternal
          />

          {/* Oficina Les Corts */}
          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6" aria-labelledby="oficina-heading">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
              <article>
                <h2 id="oficina-heading" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
                  Oficina física en Les Corts (Barcelona)
                </h2>
                <p className="mt-4 leading-relaxed text-[#475569]">
                  Livendia opera con sede en <strong>{getBusinessAddressDisplayLine()}</strong>. Atención presencial y
                  soporte ágil para propietarios de {config.zoneLabel} y el área metropolitana.
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#1A4FBF] hover:underline"
                >
                  <MapPin className="h-5 w-5" aria-hidden />
                  Ver en Google Maps
                </a>
                <p className="mt-6">
                  <Link
                    href={config.parentCityHubPath}
                    className="font-medium text-[#1A4FBF] underline-offset-2 hover:underline"
                  >
                    ← {config.parentCityHubLabel}
                  </Link>
                </p>
              </article>
              <OfficeMap
                minHeightClassName="min-h-[280px] sm:min-h-[320px]"
                title="Despacho Livendia — Les Corts, Barcelona"
                className="rounded-2xl shadow-lg ring-1 ring-slate-200"
              />
            </div>
          </section>

          {regulatory ? (
            <AlquilerRegulatoryLocalSection city={config.zoneLabel} regulatory={regulatory} />
          ) : null}

          {/* Contacto mid-page */}
          <ServiceMidPageContactSection
            serviceLabel={`Administración de alquiler en ${config.zoneLabel}`}
            city={config.zoneLabel}
            placement={placement}
          />

          {/* FAQ */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                id={`faq-metro-${config.segments.join("-")}`}
                title={`Preguntas frecuentes — administración en ${config.zoneLabel}`}
                subtitle="Oficina en Les Corts, precio del servicio y qué ocurre con el inquilino."
                items={faqItems}
              />
            </div>
          </section>

          {/* Exclusiones */}
          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-200">
                    <AlertCircle className="h-6 w-6 text-amber-900" strokeWidth={2} aria-hidden />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#1E293B]">Exclusiones del servicio</h3>
                  <p className="mt-2 leading-relaxed text-[#475569]">
                    El servicio no incluye procesos judiciales. Para impagos prolongados o desahucios podemos coordinar
                    asesoramiento legal adicional según necesidad.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-slate-50 px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-lg">
              <GestorMiniCard />
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-20 text-white sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-4xl">
                ¿Listo para despreocuparte en {config.zoneLabel}?
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-xl leading-relaxed text-blue-50">{config.finalCtaLead}</p>
              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-placement={`${placement}_final_wa`}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-10 py-4 text-lg font-bold text-[#1A4FBF] shadow-2xl transition hover:scale-105 hover:bg-blue-50"
                >
                  <MessageCircle className="h-6 w-6" aria-hidden />
                  {config.primaryCtaLabel}
                </a>
                <a
                  href={telHref}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white px-10 py-4 text-lg font-semibold hover:bg-white/10"
                >
                  <Phone className="h-6 w-6" aria-hidden />
                  {getContactPhoneDisplay()}
                </a>
              </div>
              <LandingTrustBar
                className="mt-8 text-blue-100"
                items={["49 €/mes IVA incl.", "Sin permanencia", "Gestor en Les Corts"]}
              />
            </div>
          </section>
        </main>

        <SiteFooter variant="landing" />
      </div>
    </>
  );
}
