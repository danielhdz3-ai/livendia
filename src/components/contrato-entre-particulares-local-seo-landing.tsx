import { FaqSection } from "@/components/faq-section";
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
import type { ContratoEntreParticularesLocalLandingConfig } from "@/lib/contrato-entre-particulares-local-cities";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle, FileText, Handshake, Home, KeyRound } from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function JsonLd({ config }: { config: ContratoEntreParticularesLocalLandingConfig }) {
  const base = getSiteUrl().replace(/\/$/, "");
  const graph = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Contratos entre particulares en ${config.city}`,
    description: config.metaDescription,
    serviceType: "Redacción de contratos inmobiliarios entre particulares",
    provider: { "@type": "Organization", name: "Livendia", url: base },
    areaServed: {
      "@type": "City",
      name: config.city,
      containedInPlace: { "@type": "AdministrativeArea", name: config.schemaAdministrativeArea },
    },
    url: `${base}${config.path}`,
    inLanguage: "es-ES",
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export async function ContratoEntreParticularesLocalSeoLanding({
  config,
}: {
  config: ContratoEntreParticularesLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const lau = catalog.find((s) => s.slug === "contrato-alquiler-lau") ?? null;
  const arras = catalog.find((s) => s.slug === "contrato-arras-penitenciales") ?? null;
  const hab = catalog.find((s) => s.slug === "contrato-alquiler-habitacion") ?? null;
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (lau) servicesBySlug["contrato-alquiler-lau"] = lau;
  if (arras) servicesBySlug["contrato-arras-penitenciales"] = arras;
  if (hab) servicesBySlug["contrato-alquiler-habitacion"] = hab;

  const lauPrice = resolveServicePriceLabel(lau, CONTRATO_ALQUILER_LAU_PRICE_LABEL);
  const arrasPrice = resolveServicePriceLabel(arras, CONTRATO_ARRAS_LOCAL_PRICE_LABEL);
  const habPrice = resolveServicePriceLabel(hab, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL);
  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(config.waPrefill)}`;

  const contractOffers = [
    {
      icon: Home,
      slug: "contrato-alquiler-lau" as const,
      title: "Alquiler entre particulares (LAU)",
      description:
        "Propietario e inquilino particular: contrato LAU con inventario, cláusulas adaptadas y depósito orientado.",
      price: lauPrice,
    },
    {
      icon: Handshake,
      slug: "contrato-arras-penitenciales" as const,
      title: "Arras entre comprador y vendedor",
      description:
        "Compraventa entre particulares: arras penitenciales con plazos, señal y penalidades equilibradas.",
      price: arrasPrice,
    },
    {
      icon: KeyRound,
      slug: "contrato-alquiler-habitacion" as const,
      title: "Habitación en piso compartido",
      description:
        "Alquiler de habitación entre particulares: convivencia, gastos compartidos y LAU aplicable.",
      price: habPrice,
    },
  ];

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <JsonLd config={config} />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[600px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
                  <p className="mb-4 inline-block self-start rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-sm">
                    {config.heroBadge}
                  </p>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">{config.heroH1}</h1>
                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg">{config.heroLead}</p>
                  <ul className="mt-8 space-y-3">
                    {config.heroBullets.map((line) => (
                      <li key={line} className="flex items-start gap-3">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                        <span className="text-sm sm:text-base">{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#contratos"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl hover:bg-blue-50"
                    >
                      Ver contratos desde {lauPrice}
                    </a>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      WhatsApp
                    </a>
                  </div>
                  <p className="mt-6 text-sm text-blue-200">
                    No somos agencia: no buscamos inquilino ni comprador. Gestoría de contratos para particulares.
                  </p>
                </div>
                <div className="relative order-2 h-48 sm:h-64 lg:order-none lg:h-auto lg:min-h-[480px]">
                  <Image
                    src="/images/contratos.jpg"
                    alt={`Contratos entre particulares en ${config.city}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="contratos" className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-4xl">
                  Contratos entre particulares en {config.city}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-[#64748b]">
                  Elige el tipo de contrato. Precio cerrado, gestor legal, entrega en 48–72 h. Sin comisión sobre renta
                  ni precio de venta.
                </p>
              </div>
              <div className="mt-12 grid gap-8 md:grid-cols-3">
                {contractOffers.map((offer) => {
                  const Icon = offer.icon;
                  return (
                    <div
                      key={offer.slug}
                      className="flex flex-col rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200"
                    >
                      <div className="mb-4 inline-flex rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] p-3">
                        <Icon className="h-7 w-7 text-white" aria-hidden />
                      </div>
                      <h3 className="text-xl font-bold text-[#1E293B]">{offer.title}</h3>
                      <p className="mt-3 flex-1 text-[#475569]">{offer.description}</p>
                      <p className="mt-4 text-2xl font-extrabold text-[#1A4FBF]">
                        {offer.price}
                        <span className="text-sm font-normal text-[#64748b]"> IVA incl.</span>
                      </p>
                      <ContratarSlugButton
                        slug={offer.slug}
                        className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white hover:bg-[#153d99]"
                      >
                        Contratar · {offer.price}
                      </ContratarSlugButton>
                    </div>
                  );
                })}
              </div>
              <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[#64748b]">
                ¿Vendes o compras vivienda completa entre particulares?{" "}
                <Link href="/servicios/servicio-completo-venta" className="font-semibold text-[#1A4FBF] hover:underline">
                  Servicio completo de venta (890 €)
                </Link>{" "}
                con reserva, arras y trámites hasta notaría.
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">{config.whyTitle}</h2>
              <p className="mt-6 text-left text-lg leading-relaxed text-[#475569] sm:text-center">{config.whyIntro}</p>
              <p className="mt-4 text-sm font-medium text-[#64748b]">{config.zonesNote}</p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-6 text-center">
              <div className="flex items-center gap-2 text-[#1E293B]">
                <FileText className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                <span className="font-semibold">Contrato a medida</span>
              </div>
              <div className="flex items-center gap-2 text-[#1E293B]">
                <CheckCircle className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                <span className="font-semibold">Sin plantillas genéricas</span>
              </div>
              <div className="flex items-center gap-2 text-[#1E293B]">
                <Handshake className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                <span className="font-semibold">Solo particulares</span>
              </div>
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel="Contrato entre particulares"
            needType="alquiler"
            city={config.city}
            placement={`contrato_particulares_${config.slug}`}
          />

          <FaqSection
            title={`Preguntas sobre contratos entre particulares en ${config.city}`}
            subtitle="Alquiler, arras y habitación — gestoría Livendia, no agencia inmobiliaria."
            items={[...config.faq]}
          />

          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-3xl">Contrata tu contrato en {config.city}</h2>
              <p className="mt-4 text-lg text-blue-100">{config.finalCtaLead}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="contrato-alquiler-lau"
                  className="rounded-full bg-white px-8 py-4 font-bold text-[#1E3A8A] hover:bg-blue-50"
                >
                  Alquiler LAU · {lauPrice}
                </ContratarSlugButton>
                <ContratarSlugButton
                  slug="contrato-arras-penitenciales"
                  className="rounded-full border-2 border-white px-8 py-4 font-semibold hover:bg-white/10"
                >
                  Arras · {arrasPrice}
                </ContratarSlugButton>
              </div>
            </div>
          </section>
        </main>

        <ServiceLandingSharedSections />
        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
