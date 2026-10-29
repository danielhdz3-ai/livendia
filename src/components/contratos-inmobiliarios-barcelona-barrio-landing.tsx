import { BlogContractPromoBanner } from "@/components/blog-contract-promo-banner";
import { ContratosBcnFeaturedBarrios } from "@/components/contratos-bcn-featured-barrios";
import { ContratosBcnMarqueeBand } from "@/components/contratos-bcn-marquee-band";
import { ContratosBcnOfficeSection } from "@/components/contratos-bcn-office-section";
import { ContratosBcnProcessAnimated } from "@/components/contratos-bcn-process-animated";
import { ContratosBcnServiceBlocks } from "@/components/contratos-bcn-service-blocks";
import { ContratosBcnZonesCarousel } from "@/components/contratos-bcn-zones-carousel";
import { ContratosBcnZonesLinkCloud } from "@/components/contratos-bcn-zones-link-cloud";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { HomeDecretosBannerCarousel } from "@/components/home-decretos-banner-carousel";
import { BLOG_CONTRACT_PROMOS } from "@/lib/blog-contract-promos";
import { FaqSection } from "@/components/faq-section";
import { LivendiaReveal } from "@/components/livendia-reveal";
import { PublicHeader } from "@/components/public-header";
import { RentalContractPlatformShowcase } from "@/components/rental-contract-platform-showcase";
import { ContratarSlugButton, MultiServicePurchaseProvider } from "@/components/service-purchase-provider";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
import type { ContratosInmobiliariosBarrioPage } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import { getContratosBcnServiceSectionsForBarrio } from "@/lib/contratos-inmobiliarios-barcelona-barrio-sections";
import {
  BARCELONA_ZONE_LINKS,
  BARCELONA_ZONES_SECTION,
  CONTRATOS_INMOBILIARIOS_BARCELONA_PATH,
  CONTRATOS_INMOBILIARIOS_BARCELONA_META,
} from "@/lib/contratos-inmobiliarios-barcelona-content";
import type { PublicService } from "@/lib/catalog.public";
import { LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, MapPin, Newspaper } from "lucide-react";

const EDITORIAL_IMAGES = [
  "/images/contratos5.jpg",
  "/images/gestora2.jpg",
  "/images/firma6.jpg",
] as const;

export function ContratosInmobiliariosBarrioLanding({
  barrio,
  servicesBySlug,
}: {
  barrio: ContratosInmobiliariosBarrioPage;
  servicesBySlug: Partial<Record<string, PublicService>>;
  allBarrios: readonly ContratosInmobiliariosBarrioPage[];
}) {
  const hubUrl = `${getSiteUrl().replace(/\/$/, "")}${CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}`;
  const serviceSections = getContratosBcnServiceSectionsForBarrio(barrio);
  const cardSubtitle = `${barrio.name} · panel online · gestor asignado`;

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <div className={`min-h-screen ${LANDING_PAGE_BG}`}>
        <PublicHeader />

        <HomeDecretosBannerCarousel />

        <section className={`${LANDING_HERO_GRADIENT} px-4 pb-14 pt-10 sm:px-6 lg:pb-20 lg:pt-14`}>
          <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-10">
            <div>
              <Link
                href={CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}
                className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
                Contratos inmobiliarios Barcelona
              </Link>
              <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-cyan-200">
                {barrio.districtLabel} · Cataluña
              </p>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-[2.75rem]">
                {barrio.h1}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-blue-100">{barrio.lead}</p>
              <p className="mt-4 text-sm leading-relaxed text-blue-200/95">{barrio.localContext}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {barrio.servicesFocus.map((label) => (
                  <li
                    key={label}
                    className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25"
                  >
                    {label}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3">
                <ContratarSlugButton
                  slug="contrato-alquiler-lau"
                  className="inline-flex min-h-12 items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-[#1A4FBF] shadow-lg"
                >
                  Contratar LAU
                  <ArrowRight className="h-4 w-4" />
                </ContratarSlugButton>
                <Link
                  href={barrio.contratoAlquilerHref}
                  className="inline-flex min-h-12 items-center rounded-xl border border-white/40 px-5 py-3 text-sm font-bold text-white hover:bg-white/10"
                >
                  Landing alquiler {barrio.name}
                </Link>
                <Link
                  href={barrio.contratoArrasHref}
                  className="inline-flex min-h-12 items-center rounded-xl border border-white/30 px-5 py-3 text-sm font-semibold text-white/95 hover:bg-white/10"
                >
                  Contrato arras
                </Link>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl ring-2 ring-white/20 lg:aspect-[16/11]">
              <Image
                src={barrio.image}
                alt={barrio.imageAlt}
                fill
                className="object-cover object-center transition duration-700 hover:scale-[1.02]"
                sizes="(max-width:1024px) 100vw, 560px"
                quality={92}
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B2D7A]/80 via-transparent to-transparent" />
              <p className="absolute bottom-0 left-0 right-0 p-6 text-lg font-bold text-white">
                Gestoría Livendia · {barrio.name}
              </p>
            </div>
          </div>
        </section>

        <ContratosBcnMarqueeBand />

        <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2">
            <LivendiaReveal>
              <div>
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                  <MapPin className="h-4 w-4" aria-hidden />
                  Zonas dentro de {barrio.name}
                </p>
                <h2 className="mt-2 text-2xl font-extrabold text-[#1E293B]">
                  Microzonas y calles donde más tramitamos contratos
                </h2>
                <ul className="mt-6 space-y-3">
                  {barrio.zoneHighlights.map((z) => (
                    <li
                      key={z}
                      className="flex gap-3 rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm leading-relaxed text-[#475569] ring-1 ring-slate-200"
                    >
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-[#1A4FBF]" aria-hidden />
                      {z}
                    </li>
                  ))}
                </ul>
              </div>
            </LivendiaReveal>
            <LivendiaReveal>
              <div className="rounded-2xl bg-gradient-to-br from-[#EFF6FF] to-[#F8FAFC] p-6 ring-1 ring-[#1A4FBF]/15 sm:p-8">
                <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A4FBF]">
                  <Newspaper className="h-4 w-4" aria-hidden />
                  Actualidad 2026
                </p>
                <h2 className="mt-2 text-xl font-extrabold text-[#1E293B]">Normativa vigente en {barrio.districtLabel}</h2>
                <p className="mt-4 text-sm leading-relaxed text-[#475569] sm:text-base">{barrio.actualidad2026}</p>
                <div className="mt-6 flex flex-wrap gap-3 text-sm font-semibold">
                  <Link
                    href="/blog/real-decreto-ley-28-2026-alquiler-estabilidad-prorroga-indemnizacion-guia"
                    className="text-[#1A4FBF] underline decoration-[#1A4FBF]/30 underline-offset-2 hover:text-[#2563EB]"
                  >
                    RDL 28/2026 (LAU)
                  </Link>
                  <Link
                    href="/blog/real-decreto-ley-29-2026-vivienda-funcion-social-guia-particulares"
                    className="text-[#1A4FBF] underline decoration-[#1A4FBF]/30 underline-offset-2 hover:text-[#2563EB]"
                  >
                    RDL 29/2026 (vivienda)
                  </Link>
                  <Link
                    href="/blog/serpavi-2026-decreto-3-informe-anexo-contrato-incasol-guia-ampliada"
                    className="text-[#1A4FBF] underline decoration-[#1A4FBF]/30 underline-offset-2 hover:text-[#2563EB]"
                  >
                    SERPAVI Cataluña
                  </Link>
                </div>
              </div>
            </LivendiaReveal>
          </div>
        </section>

        {barrio.editorialSections?.length ? (
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Guía local Livendia</p>
              <h2 className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
                Contratos inmobiliarios en {barrio.name}: contexto y buenas prácticas
              </h2>
              <div className="mt-12 space-y-16">
                {barrio.editorialSections.map((block, i) => {
                  const imageSrc = EDITORIAL_IMAGES[i % EDITORIAL_IMAGES.length] ?? barrio.image;
                  const reverse = i % 2 === 1;
                  return (
                    <LivendiaReveal key={block.title}>
                      <div className={`grid items-center gap-10 lg:grid-cols-2 ${reverse ? "lg:[direction:rtl]" : ""}`}>
                        <div className={`relative aspect-[16/10] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200 ${reverse ? "lg:[direction:ltr]" : ""}`}>
                          <Image
                            src={imageSrc}
                            alt=""
                            fill
                            className="object-cover transition duration-700 hover:scale-105"
                            sizes="(max-width:1024px) 100vw, 560px"
                            quality={88}
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#1A4FBF]/25 to-transparent" />
                        </div>
                        <div className={reverse ? "lg:[direction:ltr]" : ""}>
                          <h3 className="text-2xl font-extrabold text-[#1E293B]">{block.title}</h3>
                          <p className="mt-4 text-base leading-relaxed text-[#475569]">{block.body}</p>
                          <ul className="mt-6 space-y-2">
                            {["Gestor dedicado", "Panel online", "Precio fijo IVA incl."].map((item) => (
                              <li key={item} className="flex gap-2 text-sm font-medium text-[#1E293B]">
                                <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </LivendiaReveal>
                  );
                })}
              </div>
            </div>
          </section>
        ) : null}

        <ContratosBcnServiceBlocks
          sections={serviceSections}
          cardSubtitle={cardSubtitle}
          navExtras={[
            { href: "#panel", label: "Panel Livendia" },
            { href: "#proceso", label: "Cómo funciona" },
            { href: "#barrios-destacados", label: "Todos los barrios" },
            { href: "#zonas", label: "Municipios" },
          ]}
        />

        <div id="panel">
          <RentalContractPlatformShowcase
            city="Barcelona"
            propertyLine={`Contrato en ${barrio.name} · Barcelona`}
          />
        </div>

        <section id="proceso" className="scroll-mt-28 border-b border-slate-200 bg-[#EFF6FF] px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <LivendiaReveal>
              <p className="text-center text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Cómo funciona Livendia</p>
              <h2 className="mt-3 text-center text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
                Cinco pasos para tu contrato inmobiliario en {barrio.name}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748B]">
                Primera llamada con el gestor, contratas online, envías documentación, tramitamos el expediente y te
                entregamos el contrato listo para firmar.
              </p>
            </LivendiaReveal>
            <ContratosBcnProcessAnimated />
          </div>
        </section>

        <ContratosBcnOfficeSection barrio={barrio} />

        <ContratosBcnFeaturedBarrios currentSlug={barrio.slug} />

        <section id="zonas" className="scroll-mt-28 border-b border-slate-200 px-4 py-16 sm:px-6 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <LivendiaReveal>
              <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                {BARCELONA_ZONES_SECTION.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
                {BARCELONA_ZONES_SECTION.title}
              </h2>
              <p className="mt-4 max-w-3xl text-[#64748B]">{BARCELONA_ZONES_SECTION.lead}</p>
              <div className="relative mt-8 aspect-[21/9] overflow-hidden rounded-3xl shadow-xl ring-1 ring-slate-200">
                <Image
                  src={BARCELONA_ZONES_SECTION.heroImage}
                  alt={BARCELONA_ZONES_SECTION.heroImageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 1152px"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2D7A]/70 to-transparent" />
                <p className="absolute bottom-6 left-6 max-w-md text-lg font-bold text-white sm:text-xl">
                  Más de 30 landings locales · mismo gestor Livendia
                </p>
              </div>
            </LivendiaReveal>
            <div className="mt-10">
              <ContratosBcnZonesCarousel zones={BARCELONA_ZONE_LINKS} />
            </div>
            <ContratosBcnZonesLinkCloud zones={BARCELONA_ZONE_LINKS} />
          </div>
        </section>

        <div className="mx-auto max-w-6xl space-y-8 px-4 py-10 sm:px-6">
          <BlogContractPromoBanner promo={BLOG_CONTRACT_PROMOS.lau} placement={`contratos_bcn_${barrio.slug}_lau`} />
          <BlogContractPromoBanner promo={BLOG_CONTRACT_PROMOS.arras} placement={`contratos_bcn_${barrio.slug}_arras`} />
        </div>

        <GestorContactCta
          placement={`contratos_bcn_barrio_${barrio.slug}`}
          className="mx-4 mb-10 rounded-2xl sm:mx-6 lg:mx-auto lg:max-w-6xl"
          city="Barcelona"
          serviceLabel={`contratos inmobiliarios ${barrio.name}`}
          headline="Gestor experto en contratos — normativa 2026"
        />

        <FaqSection
          title={`Preguntas frecuentes — contratos inmobiliarios ${barrio.name}`}
          items={[
            ...(barrio.barrioFaq ?? []),
            {
              question: `¿Tramitáis contratos inmobiliarios solo en ${barrio.name}?`,
              answer: `Atendemos ${barrio.name} y todo Barcelona y Cataluña. Esta página resume el contexto del barrio; el servicio es el mismo gestoría Livendia con panel online y precios publicados en livendia.com/precios.`,
            },
            {
              question: "¿Puedo firmar o revisar el contrato en el despacho?",
              answer:
                "Sí. Tenemos despacho en Les Corts (Mejía Lequerica 44). Pide cita por contacto o WhatsApp y revisamos borradores de LAU, arras o habitación antes de firmar.",
            },
            {
              question: `¿Dónde está la landing de alquiler específica de ${barrio.name}?`,
              answer: `Usa el botón «Landing alquiler ${barrio.name}» en esta página: enlaza la ficha local de contrato de alquiler. Desde aquí también puedes contratar arras y LAU online al instante.`,
            },
          ]}
        />

        <ServiceMidPageContactSection
          serviceLabel={`Contratos inmobiliarios ${barrio.name}`}
          city="Barcelona"
          needType="otro"
          placement={`contratos_bcn_barrio_${barrio.slug}`}
        />

        <section className="px-4 py-8 text-center text-sm text-[#64748B] sm:px-6">
          <Link href={CONTRATOS_INMOBILIARIOS_BARCELONA_PATH} className="font-semibold text-[#1A4FBF] hover:underline">
            ← Volver a {CONTRATOS_INMOBILIARIOS_BARCELONA_META.title}
          </Link>
          <span className="mx-2">·</span>
          <a href={hubUrl} className="font-semibold text-[#1A4FBF] hover:underline">
            livendia.com{CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}
          </a>
        </section>

        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}

