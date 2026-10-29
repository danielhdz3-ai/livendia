import { AdministracionAlquilerMetroHubLinks } from "@/components/administracion-alquiler-metro-hub-links";
import { AdministracionAlquilerPresencialSection } from "@/components/administracion-alquiler-presencial-section";
import { ContratosBcnMarqueeBand } from "@/components/contratos-bcn-marquee-band";
import { ContratosBcnOfficeSection } from "@/components/contratos-bcn-office-section";
import { FaqSection } from "@/components/faq-section";
import { LivendiaReveal } from "@/components/livendia-reveal";
import { PublicHeader } from "@/components/public-header";
import { RentalContractPlatformShowcase } from "@/components/rental-contract-platform-showcase";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ContratarSlugButton, MultiServicePurchaseProvider } from "@/components/service-purchase-provider";
import { SiteFooter } from "@/components/site-footer";
import type { PublicService } from "@/lib/catalog.public";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  ADMINISTRACION_ALQUILER_SLUG,
} from "@/lib/catalog.public";
import {
  ADMIN_ALQUILER_BCN_HUB_FAQ,
  ADMIN_ALQUILER_BCN_HUB_LINKS,
  ADMINISTRACION_ALQUILER_BARCELONA_HUB_META,
  ADMINISTRACION_ALQUILER_BARCELONA_HUB_PATH,
} from "@/lib/administracion-alquiler-barcelona-hub-content";
import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, LayoutDashboard } from "lucide-react";

type Props = {
  adminService: PublicService | null;
};

function JsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${ADMINISTRACION_ALQUILER_BARCELONA_HUB_PATH}`;
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Administración de alquiler Barcelona — Livendia",
        description: ADMINISTRACION_ALQUILER_BARCELONA_HUB_META.description,
        url: pageUrl,
        provider: { "@id": `${base}/#organization` },
        areaServed: { "@type": "City", name: "Barcelona" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: base },
          { "@type": "ListItem", position: 2, name: "Barcelona", item: `${base}/ciudades/barcelona` },
          { "@type": "ListItem", position: 3, name: "Administración de alquiler Barcelona", item: pageUrl },
        ],
      },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />;
}

export function AdministracionAlquilerBarcelonaLanding({ adminService }: Props) {
  const servicesBySlug = adminService ? { [ADMINISTRACION_ALQUILER_SLUG]: adminService } : {};

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <JsonLd />
      <div className={`flex min-h-screen flex-col ${LANDING_PAGE_BG}`}>
        <PublicHeader />
        <main className="flex-1">
          <section className={`border-b border-slate-200 ${LANDING_HERO_GRADIENT} px-4 py-14 text-white sm:px-6 lg:py-20`}>
            <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
              <LivendiaReveal>
                <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">Barcelona · AMB · Propietarios</p>
                <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  Administración de alquiler en Barcelona — online y presencial
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-blue-100">
                  Livendia es el único canal con tu inquilino: panel, WhatsApp y gestor dedicado desde{" "}
                  {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. En Barcelona y área metropolitana incluimos
                  protocolo presencial cuando la operación lo exige — y despacho en Les Corts.
                </p>
                <ul className="mt-6 space-y-2 text-sm text-blue-50">
                  {[
                    "Seguimiento de renta e incidencias documentadas",
                    "Renovaciones, IRAV e INCASÒL cuando aplica",
                    "Gestor en el piso o en comunidad si hace falta",
                  ].map((line) => (
                    <li key={line} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" aria-hidden />
                      {line}
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex flex-wrap gap-3">
                  <ContratarSlugButton
                    slug={ADMIN_ALQUILER_BCN_HUB_LINKS.serviceSlug}
                    className="inline-flex min-h-12 items-center rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] shadow-lg hover:bg-blue-50"
                  >
                    Contratar · {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL}/mes
                  </ContratarSlugButton>
                  <Link
                    href={CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}
                    className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold hover:bg-white/10"
                  >
                    Contratos Barcelona
                    <ArrowRight className="h-4 w-4" aria-hidden />
                  </Link>
                </div>
              </LivendiaReveal>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/images/gestoria.jpg"
                  alt="Administración de alquileres en Barcelona — gestor Livendia"
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 480px"
                  priority
                />
              </div>
            </div>
          </section>

          <ContratosBcnMarqueeBand />

          <AdministracionAlquilerPresencialSection zoneLabel="Barcelona y área metropolitana" />

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="flex items-center gap-2 text-[#1A4FBF]">
                <LayoutDashboard className="h-6 w-6" aria-hidden />
                <span className="text-sm font-bold uppercase tracking-wide">Panel online</span>
              </div>
              <h2 className="mt-3 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Mismo panel que en el resto de España — con equipo en Les Corts
              </h2>
              <p className="mt-3 max-w-3xl text-[#64748b]">
                Incidencias, documentos y mensajes con tu gestor en un solo lugar. La diferencia en Barcelona es que, si
                hace falta, el gestor también actúa en el inmueble o te recibe en Mejía Lequerica 44.
              </p>
              <div className="mt-8">
                <RentalContractPlatformShowcase city="Barcelona" propertyLine="Piso 3 hab. · Les Corts, Barcelona" />
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <AdministracionAlquilerMetroHubLinks />
              <p className="mt-6 text-sm text-[#64748b]">
                Landing general ciudad:{" "}
                <Link href={ADMIN_ALQUILER_BCN_HUB_LINKS.cityLanding} className="font-semibold text-[#1A4FBF] hover:underline">
                  administración de alquiler en Barcelona (local)
                </Link>
              </p>
            </div>
          </section>

          <ContratosBcnOfficeSection />

          <section className="px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                title="Preguntas frecuentes — administración Barcelona"
                items={ADMIN_ALQUILER_BCN_HUB_FAQ.map((f) => ({ question: f.q, answer: f.a }))}
              />
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">Delega el contacto con el inquilino</h2>
              <p className="mt-4 text-blue-100">
                Sin permanencia · {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. · Barcelona y AMB
              </p>
              <ContratarSlugButton
                slug={ADMIN_ALQUILER_BCN_HUB_LINKS.serviceSlug}
                className="mt-8 inline-flex min-h-12 items-center rounded-full bg-white px-8 py-3 font-bold text-[#1A4FBF] hover:bg-blue-50"
              >
                Contratar administración
              </ContratarSlugButton>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections city="Barcelona" serviceLabel="Administración de alquiler" />
        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
