import { FaqSection } from "@/components/faq-section";
import { ContratoAlquilerOpcionCompraLocalLeadModules } from "@/components/contrato-alquiler-opcion-compra-local-lead-modules";
import { LocalCityContextSectionFromConfig } from "@/components/local-city-context-section-from-config";
import { LandingLocalTestimonialsSection } from "@/components/landing-local-sections";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  ServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import type { ContratoAlquilerOpcionCompraLocalLandingConfig } from "@/lib/contrato-alquiler-opcion-compra-local-cities";
import { CONTRATO_ALQUILER_OPCION_COMPRA_INCLUDES } from "@/lib/contrato-alquiler-opcion-compra-content";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ClipboardList,
  FileText,
  KeyRound,
  Phone,
  Scale,
  Shield,
  Users,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

function LocalOpcionCompraJsonLd({
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
    name: `Contrato de alquiler con opción a compra en ${city}`,
    description:
      "Redacción del arrendamiento LAU con pacto de opción de compra entre particulares. Precio de ejercicio, plazo, rentas e inventario. Livendia.",
    serviceType: "Contrato de alquiler con opción a compra",
    provider: { "@type": "Organization", name: "Livendia", url: base },
    areaServed: {
      "@type": "City",
      name: city,
      containedInPlace: { "@type": "AdministrativeArea", name: administrativeArea },
    },
    url: `${base}${path}`,
    inLanguage: "es-ES",
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export async function ContratoAlquilerOpcionCompraLocalSeoLanding({
  config,
}: {
  config: ContratoAlquilerOpcionCompraLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-alquiler-opcion-compra") ?? null;
  const priceLabel = resolveServicePriceLabel(service, CONTRATO_ALQUILER_OPCION_COMPRA_PRICE_LABEL);

  const howItWorks = [
    {
      icon: FileText,
      step: "1",
      title: "Briefing del acuerdo rent-to-own",
      description:
        "Recogemos renta, duración del alquiler, precio de ejercicio de la opción, plazo para comprar y si parte de las mensualidades se imputa al precio final.",
    },
    {
      icon: Scale,
      step: "2",
      title: "Redacción LAU + opción de compra",
      description:
        "El gestor redacta arrendamiento y pacto de opción de forma coherente: no basta un LAU genérico ni un anexo ambiguo.",
    },
    {
      icon: ClipboardList,
      step: "3",
      title: "Inventario del inmueble",
      description:
        "Documentamos el estado del piso para la entrada y para cuando llegue el momento de ejercer la compra.",
    },
    {
      icon: Users,
      step: "4",
      title: "Asesoramiento hasta firmar",
      description:
        "Resolvemos dudas sobre tanteo, derechos del inquilino y escenarios si no se ejerce la opción.",
    },
  ];

  const benefitStyle = [
    { icon: KeyRound, color: "from-blue-500 to-blue-600" },
    { icon: Shield, color: "from-cyan-500 to-cyan-600" },
    { icon: Scale, color: "from-teal-500 to-teal-600" },
    { icon: ClipboardList, color: "from-indigo-500 to-indigo-600" },
    { icon: FileText, color: "from-violet-500 to-violet-600" },
    { icon: Users, color: "from-purple-500 to-purple-600" },
  ] as const;

  const displayBenefits =
    config.localBenefits?.map((b, idx) => {
      const style = benefitStyle[idx % benefitStyle.length];
      return { ...b, icon: style.icon, color: style.color };
    }) ?? [];

  const heroBullets = config.heroBullets ?? [
    "Precio de ejercicio y plazo de la opción",
    "Tratamiento de rentas si se imputan al precio",
    `${priceLabel} IVA incl. · sin comisión de agencia`,
  ];

  return (
    <ServicePurchaseProvider service={service}>
      <LocalOpcionCompraJsonLd
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
                    {config.heroBadge ?? `Opción a compra · ${config.placeLabel}`}
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    {config.heroH1 ?? `Contrato de alquiler con opción a compra en ${config.placeLabel}`}
                  </h1>
                  <p className="mt-6 text-xl leading-relaxed text-blue-50">{config.heroLead}</p>
                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-100">IVA incluido</span>
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
                      slug="contrato-alquiler-opcion-compra"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50"
                    >
                      Contratar por {priceLabel}
                    </ContratarSlugButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href={getContactPhoneTelHref()}
                      className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-cyan-200"
                    >
                      <Phone className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                      Llamar: {getContactPhoneDisplay()}
                    </a>
                  </div>
                </div>
                <div className="relative h-44 sm:h-56 lg:h-auto lg:min-h-[480px]">
                  <Image
                    src={config.heroImage ?? "/images/contratos7.jpg"}
                    alt={`Contrato alquiler opción a compra ${config.placeLabel}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <ContratoAlquilerOpcionCompraLocalLeadModules placeLabel={config.placeLabel} priceLabel={priceLabel} />

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 pb-20 pt-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                  {config.whyTitle ?? `¿Por qué redactar la opción de compra en ${config.placeLabel}?`}
                </h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">
                  {config.whySubtitle ?? config.whyIntro}
                </p>
              </div>
              {displayBenefits.length > 0 ? (
                <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {displayBenefits.map((benefit) => {
                    const Icon = benefit.icon;
                    return (
                      <div
                        key={benefit.title}
                        className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
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
              ) : null}
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">Qué incluye la redacción Livendia</h2>
              <ul className="mt-6 space-y-3">
                {CONTRATO_ALQUILER_OPCION_COMPRA_INCLUDES.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[#475569]">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-lg font-semibold text-[#1A4FBF]">
                Precio: {priceLabel} IVA incluido · Plazo: 48-72 h laborables
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">Cómo funciona en {config.placeLabel}</h2>
                <p className="mx-auto mt-4 max-w-3xl text-lg text-[#64748b]">{config.howIntro}</p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {howItWorks.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.title} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                        {step.step}
                      </div>
                      <Icon className="mt-4 h-8 w-8 text-[#06B6D4]" />
                      <h3 className="mt-3 text-lg font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {config.localZones ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  {config.localZonesHeading ?? `Zonas en ${config.placeLabel}`}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#475569]">{config.localZones}</p>
              </div>
            </section>
          ) : null}

          <LocalCityContextSectionFromConfig
            city={config.city}
            localMarketInsight={config.localMarketInsight}
            localPriceSnapshot={config.localPriceSnapshot}
            localNeighborhoods={config.localNeighborhoods}
            localServiceNotes={config.localServiceNotes}
          />

          {config.testimonials.length > 0 ? (
            <LandingLocalTestimonialsSection
              title={config.testimonialsTitle || `Testimonios en ${config.placeLabel}`}
              testimonials={[...config.testimonials]}
            />
          ) : null}

          {config.faq?.length ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <FaqSection title={`Preguntas frecuentes — ${config.placeLabel}`} items={[...config.faq]} />
              </div>
            </section>
          ) : null}

          <ServiceMidPageContactSection
            serviceLabel={`Contrato alquiler opción a compra ${config.placeLabel}`}
            needType="alquiler"
            city={config.city}
            placement="contrato_alquiler_opcion_compra_local_mid"
          />

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold">
                {config.finalCtaTitle ?? `Contrato con opción a compra en ${config.placeLabel}`}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">{config.finalCtaLead}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="contrato-alquiler-opcion-compra"
                  className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50"
                >
                  Contratar por {priceLabel}
                </ContratarSlugButton>
                <Link
                  href="/servicios/contrato-alquiler-opcion-compra"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Ver ficha nacional
                </Link>
              </div>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections />
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
