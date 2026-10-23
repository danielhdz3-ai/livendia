import { ContratosBcnHeroVisual } from "@/components/contratos-bcn-hero-visual";
import { ContratosBcnMarqueeBand } from "@/components/contratos-bcn-marquee-band";
import { ContratosBcnProcessAnimated } from "@/components/contratos-bcn-process-animated";
import { ContratosBcnServicesCarousel } from "@/components/contratos-bcn-services-carousel";
import { ContratosBcnZonesCarousel } from "@/components/contratos-bcn-zones-carousel";
import { ContratosBcnZonesLinkCloud } from "@/components/contratos-bcn-zones-link-cloud";
import { FaqSection } from "@/components/faq-section";
import { LivendiaReveal } from "@/components/livendia-reveal";
import { PublicHeader } from "@/components/public-header";
import { RentalContractPlatformShowcase } from "@/components/rental-contract-platform-showcase";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { ContratarSlugButton, MultiServicePurchaseProvider } from "@/components/service-purchase-provider";
import { SiteFooter } from "@/components/site-footer";
import type { PublicService } from "@/lib/catalog.public";
import {
  BARCELONA_ZONE_LINKS,
  BARCELONA_ZONES_SECTION,
  CONTRATOS_BCN_FAQ,
  CONTRATOS_BCN_SERVICE_SECTIONS,
  CONTRATOS_INMOBILIARIOS_BARCELONA_PATH,
} from "@/lib/contratos-inmobiliarios-barcelona-content";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import {
  LANDING_CTA_GRADIENT,
  LANDING_HERO_GRADIENT,
  LANDING_PAGE_BG,
} from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  LayoutDashboard,
  MessageCircle,
  Phone,
  Shield,
  Sparkles,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

function JsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${pageUrl}#legalservice`,
        name: "Livendia — Contratos inmobiliarios Barcelona",
        description:
          "Gestoría inmobiliaria especializada en contratos inmobiliarios para particulares en Barcelona y Cataluña: LAU, temporada, habitación, arras y administración de alquiler.",
        url: pageUrl,
        inLanguage: "es-ES",
        provider: { "@id": `${base}/#organization` },
        areaServed: [
          { "@type": "City", name: "Barcelona" },
          { "@type": "AdministrativeArea", name: "Cataluña" },
        ],
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: base },
          { "@type": "ListItem", position: 2, name: "Gestoría Barcelona", item: `${base}/gestoria/barcelona` },
          { "@type": "ListItem", position: 3, name: "Contratos inmobiliarios Barcelona", item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: CONTRATOS_BCN_FAQ.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      },
    ],
  };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

function ServiceVisualCard({
  image,
  imageAlt,
  priceLabel,
  title,
  subtitle,
}: {
  image: string;
  imageAlt: string;
  priceLabel: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="relative mx-auto w-full max-w-2xl transition duration-500 hover:-translate-y-1">
      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl shadow-[#1A4FBF]/15 ring-1 ring-slate-200/80 transition hover:shadow-[#1A4FBF]/25">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            className="object-cover object-center transition duration-700 hover:scale-105"
            sizes="(max-width:1024px) 100vw, 672px"
            quality={92}
          />
          <div className="absolute right-4 top-4 rounded-xl bg-[#1A4FBF] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white shadow-lg">
            {priceLabel}
          </div>
        </div>
        <div className="border-t border-slate-100 bg-gradient-to-br from-white to-[#EFF6FF] p-5">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#06B6D4]">Livendia Gestoría</p>
          <p className="mt-1 text-lg font-extrabold text-[#1E293B]">{title}</p>
          <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p>
        </div>
      </div>
    </div>
  );
}

export function ContratosInmobiliariosBarcelonaLanding({
  servicesBySlug,
}: {
  servicesBySlug: Partial<Record<string, PublicService>>;
}) {
  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <div className={`min-h-screen ${LANDING_PAGE_BG}`}>
        <JsonLd />
        <PublicHeader />

        <section
          className={`livendia-hero-shimmer relative overflow-hidden ${LANDING_HERO_GRADIENT} px-4 pb-12 pt-10 sm:px-6 lg:pb-20 lg:pt-14`}
        >
          <div className="pointer-events-none absolute -right-24 top-0 h-72 w-72 rounded-full bg-cyan-400/25 blur-3xl livendia-float-slow" />
          <div className="pointer-events-none absolute -left-16 bottom-0 h-64 w-64 rounded-full bg-white/15 blur-3xl livendia-float-slow livendia-float-delay" />
          <div className="pointer-events-none absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 rounded-full bg-[#2563EB]/20 blur-[100px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="livendia-hero-stagger">
              <p className="text-sm font-semibold uppercase tracking-widest text-cyan-200">
                Barcelona · Cataluña · Particulares
              </p>
              <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-[3.1rem]">
                Contratos inmobiliarios en Barcelona con gestoría Livendia
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-blue-100">
                Gestoría online para particulares: LAU, temporada, habitación, arras, compraventa y administración de
                alquiler — con carrusel de servicios, panel interactivo y gestor dedicado.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="#servicios-carrusel"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] shadow-lg transition hover:scale-[1.02] hover:bg-blue-50"
                >
                  Ver carrusel de contratos
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:bg-white/20"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp gestor
                </a>
                <a
                  href={getContactPhoneTelHref()}
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white/95 hover:bg-white/10"
                >
                  <Phone className="h-4 w-4" />
                  {getContactPhoneDisplay()}
                </a>
              </div>
              <ul className="mt-10 grid gap-3 sm:grid-cols-3">
                {[
                  { icon: Shield, text: "Precios fijos IVA incl." },
                  { icon: LayoutDashboard, text: "Panel online en vivo" },
                  { icon: Sparkles, text: "Gestor en Barcelona" },
                ].map(({ icon: Icon, text }) => (
                  <li
                    key={text}
                    className="flex items-start gap-3 rounded-2xl bg-white/10 px-4 py-3 text-sm font-medium text-blue-50 ring-1 ring-white/15 backdrop-blur-sm"
                  >
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                    {text}
                  </li>
                ))}
              </ul>
            </div>
            <ContratosBcnHeroVisual sections={CONTRATOS_BCN_SERVICE_SECTIONS} />
          </div>
        </section>

        <ContratosBcnMarqueeBand />

        <nav
          className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/90"
          aria-label="Apartados de servicios"
        >
          <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:px-6">
            {CONTRATOS_BCN_SERVICE_SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="shrink-0 rounded-full border border-[#1A4FBF]/25 px-4 py-2 text-xs font-semibold text-[#1A4FBF] transition hover:bg-[#EFF6FF] sm:text-sm"
              >
                {s.navLabel}
              </a>
            ))}
            <a
              href="#proceso"
              className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-50 sm:text-sm"
            >
              5 pasos
            </a>
            <a
              href="#zonas"
              className="shrink-0 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-[#475569] hover:bg-slate-50 sm:text-sm"
            >
              Barrios
            </a>
          </div>
        </nav>

        <div id="servicios-carrusel">
          <ContratosBcnServicesCarousel sections={CONTRATOS_BCN_SERVICE_SECTIONS} />
        </div>

        {CONTRATOS_BCN_SERVICE_SECTIONS.map((section, sectionIndex) => (
          <section
            key={section.id}
            id={section.id}
            className={`scroll-mt-28 border-b border-slate-200 px-4 py-16 sm:px-6 lg:py-24 ${
              sectionIndex % 2 === 1 ? "bg-[#F8FAFC]" : "bg-white"
            }`}
          >
            <LivendiaReveal>
            <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className={section.reverse ? "lg:order-2" : ""}>
                <ServiceVisualCard
                  image={section.image}
                  imageAlt={section.imageAlt}
                  priceLabel={section.priceLabel}
                  title={section.navLabel}
                  subtitle="Barcelona · panel online · gestor asignado"
                />
              </div>
              <div className={section.reverse ? "lg:order-1" : ""}>
                <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">{section.eyebrow}</p>
                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl">
                  {section.title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-[#475569]">{section.lead}</p>
                <p className="mt-4 text-sm leading-relaxed text-[#64748B]">{section.localContext}</p>

                <div className="mt-8 rounded-2xl bg-[#F1F5F9] p-6 ring-1 ring-slate-200/80">
                  <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">{section.stepsTitle}</p>
                  <ol className="mt-4 space-y-3">
                    {section.steps.map((step, i) => (
                      <li key={step} className="flex gap-3 text-sm text-[#334155]">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-xs font-bold text-white">
                          {i + 1}
                        </span>
                        <span className="pt-0.5">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <ul className="mt-6 space-y-2">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-2 text-sm text-[#1E293B]">
                      <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-wrap gap-3">
                  <ContratarSlugButton
                    slug={section.serviceSlug}
                    className="inline-flex min-h-11 items-center rounded-xl bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:bg-[#2563EB]"
                  >
                    Contratar online
                  </ContratarSlugButton>
                  <Link
                    href={section.serviceHref}
                    className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1A4FBF] hover:bg-slate-50"
                  >
                    Ver ficha del servicio
                  </Link>
                  {section.localHref ? (
                    <Link
                      href={section.localHref}
                      className="inline-flex min-h-11 items-center text-sm font-semibold text-[#64748B] underline-offset-2 hover:text-[#1A4FBF] hover:underline"
                    >
                      Landing Barcelona →
                    </Link>
                  ) : null}
                </div>
              </div>
            </div>
            </LivendiaReveal>
          </section>
        ))}

        <div id="panel">
          <RentalContractPlatformShowcase
            city="Barcelona"
            propertyLine="Piso 3 hab. · Eixample, Barcelona"
          />
        </div>

        <section id="proceso" className="scroll-mt-28 border-b border-slate-200 bg-[#EFF6FF] px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-center text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Metodología Livendia</p>
            <h2 className="mt-3 text-center text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              Cinco pasos para formalizar tu contrato inmobiliario
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748B]">
              Línea de tiempo animada: cada paso se ilumina en secuencia. Toca un número en escritorio para fijar el paso.
            </p>
            <ContratosBcnProcessAnimated />
          </div>
        </section>

        <section id="zonas" className="scroll-mt-28 border-b border-slate-200 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
              {BARCELONA_ZONES_SECTION.eyebrow}
            </p>
            <h2 className="mt-3 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
              {BARCELONA_ZONES_SECTION.title}
            </h2>
            <p className="mt-4 max-w-3xl text-[#64748B]">{BARCELONA_ZONES_SECTION.lead}</p>

            <div className="relative mt-10 overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
              <div className="relative aspect-[21/9] w-full min-h-[180px] sm:min-h-[220px]">
                <Image
                  src={BARCELONA_ZONES_SECTION.heroImage}
                  alt={BARCELONA_ZONES_SECTION.heroImageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 1152px"
                  quality={90}
                  priority={false}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1A4FBF]/92 via-[#1A4FBF]/55 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-center px-6 py-8 sm:px-10 lg:max-w-2xl">
                  <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">Ciudad condal</p>
                  <p className="mt-2 text-2xl font-extrabold leading-tight text-white sm:text-3xl">
                    Barcelona, AMB y Cataluña — contratos por barrio
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100 sm:text-base">
                    Distritos, barrios finos (Born, Raval, Poblenou, Pedralbes…) y municipios del área metropolitana con
                    landings locales enlazadas desde esta página.
                  </p>
                </div>
              </div>
            </div>

            <ContratosBcnZonesCarousel zones={BARCELONA_ZONE_LINKS} />
            <ContratosBcnZonesLinkCloud zones={BARCELONA_ZONE_LINKS} />
            <p className="mt-8 text-sm leading-relaxed text-[#64748B]">
              Hubs relacionados:{" "}
              <Link href="/gestoria/barcelona" className="font-semibold text-[#1A4FBF] hover:underline">
                gestoría inmobiliaria Barcelona
              </Link>
              ,{" "}
              <Link href="/servicios/redactar-contrato-alquiler/barcelona" className="font-semibold text-[#1A4FBF] hover:underline">
                redactar contrato alquiler Barcelona
              </Link>
              ,{" "}
              <Link href="/servicios/contrato-de-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                contrato de arras
              </Link>
              ,{" "}
              <Link href="/administracion-alquiler/barcelona/eixample" className="font-semibold text-[#1A4FBF] hover:underline">
                administración alquiler Eixample
              </Link>{" "}
              e{" "}
              <Link href="/gestoria" className="font-semibold text-[#1A4FBF] hover:underline">
                gestoría por ciudades
              </Link>
              .
            </p>
          </div>
        </section>

        <FaqSection
          title="Preguntas frecuentes — contratos inmobiliarios Barcelona"
          items={CONTRATOS_BCN_FAQ.map((f) => ({ question: f.q, answer: f.a }))}
        />

        <ServiceMidPageContactSection
          serviceLabel="Contratos inmobiliarios Barcelona"
          city="Barcelona"
          needType="otro"
          placement="contratos_inmobiliarios_barcelona_mid"
        />

        <section className={`px-4 py-16 sm:px-6 ${LANDING_CTA_GRADIENT}`}>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl font-extrabold">Contrata tu gestoría inmobiliaria en Livendia</h2>
            <p className="mt-4 text-blue-100">
              Precios claros, panel online y especialistas en contratos inmobiliarios para particulares en Barcelona y
              Cataluña.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                href="/servicios"
                className="inline-flex min-h-12 items-center rounded-xl bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] shadow-lg"
              >
                Ver todos los servicios
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center rounded-xl border border-white/40 px-6 py-3 text-sm font-bold text-white"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <ServiceLandingSharedSections />
        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
