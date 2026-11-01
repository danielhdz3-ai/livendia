import { ContratosBcnOfficeSection } from "@/components/contratos-bcn-office-section";
import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import {
  CONTRATOS_DESPACHO_BCN_FAQ,
  CONTRATOS_DESPACHO_BCN_HUB_LINKS,
  CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META,
  CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_PATH,
} from "@/lib/contratos-inmobiliarios-despacho-barcelona-content";
import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getBusinessAddressDisplayLine } from "@/lib/business-nap";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";

export function ContratosDespachoBarcelonaLanding() {
  return (
    <div className={`min-h-screen ${LANDING_PAGE_BG}`}>
      <PublicHeader />

      <section className={`${LANDING_HERO_GRADIENT} px-4 py-14 sm:px-6 lg:py-20`}>
        <div className="mx-auto max-w-6xl">
          <Link
            href={CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}
            className="text-sm font-semibold text-cyan-200 hover:text-white"
          >
            ← Contratos inmobiliarios Barcelona
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-cyan-200">Despacho · Les Corts</p>
          <h1 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Contratos inmobiliarios — despacho en Barcelona
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">
            {CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_META.description}
          </p>
          <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-100">
            <MapPin className="h-4 w-4" aria-hidden />
            {getBusinessAddressDisplayLine()}
          </p>
        </div>
      </section>

      <ContratosBcnOfficeSection showBarrioDespachoNav />

      <section
        id="barrios-despacho"
        className="scroll-mt-28 border-b border-slate-200 bg-white px-4 py-14 sm:px-6 lg:py-20"
        aria-labelledby="despacho-bcn-barrios-title"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">15 barrios y municipios</p>
          <h2 id="despacho-bcn-barrios-title" className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
            Cita en despacho por barrio — mismo gestor online
          </h2>
          <p className="mt-4 max-w-3xl text-[#64748B]">
            Cada enlace abre la landing de cita presencial con indicaciones de metro desde tu zona. También puedes ir al
            hub completo de contratos del barrio.
          </p>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONTRATOS_DESPACHO_BCN_HUB_LINKS.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="group flex gap-4 overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC] p-4 shadow-sm transition hover:border-[#1A4FBF] hover:shadow-md"
                >
                  <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-bold uppercase tracking-wide text-[#64748B]">{item.districtLabel}</p>
                    <p className="mt-1 text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">{item.name}</p>
                    <span className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF]">
                      Reservar cita
                      <ArrowRight className="h-4 w-4" aria-hidden />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FaqSection
        title="Despacho Livendia Barcelona"
        items={CONTRATOS_DESPACHO_BCN_FAQ.map((f) => ({ question: f.q, answer: f.a }))}
      />

      <ServiceLandingSharedSections
        city="Barcelona"
        serviceLabel="Contratos inmobiliarios"
        primarySlug="contrato-arras-penitenciales"
        skipGestorPlatform
        skipCoverage
        skipCommissionCompare
      />

      <SiteFooter />
    </div>
  );
}
