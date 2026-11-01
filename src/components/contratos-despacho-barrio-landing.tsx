import { ContratosBcnOfficeSection } from "@/components/contratos-bcn-office-section";
import { FaqSection } from "@/components/faq-section";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import type { ContratosInmobiliariosBarrioPage } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import { contratosInmobiliariosBarrioPath } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import {
  CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_PATH,
  contratosInmobiliariosDespachoBarrioPath,
} from "@/lib/contratos-inmobiliarios-despacho-barcelona-content";
import { CONTRATOS_INMOBILIARIOS_BARCELONA_PATH } from "@/lib/contratos-inmobiliarios-barcelona-content";
import { localPackArrasGestionHref } from "@/lib/pack-comercial-local-cities";
import { LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getContratosBcnOfficeContent } from "@/lib/contratos-bcn-office-barrio";
import { getContratosDespachoBarrioSeo } from "@/lib/contratos-inmobiliarios-despacho-barrio-seo";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function ContratosDespachoBarrioLanding({ barrio }: { barrio: ContratosInmobiliariosBarrioPage }) {
  const office = getContratosBcnOfficeContent(barrio);
  const despachoSeo = getContratosDespachoBarrioSeo(barrio.slug);
  const packSlug =
    barrio.slug === "pedralbes"
      ? "barcelona-pedralbes"
      : barrio.slug === "sant-antoni"
        ? "barcelona-sant-antoni"
        : barrio.slug === "fort-pienc"
          ? "barcelona-fort-pienc"
          : barrio.slug === "mataro"
            ? "mataro"
            : barrio.slug === "rubi"
              ? "rubi"
              : barrio.localSlug;

  const faqItems = [
    ...despachoSeo.faq.map((f) => ({ question: f.q, answer: f.a })),
    {
      question: `¿En qué se diferencia esta página del hub de contratos online en ${barrio.name}?`,
      answer: `Aquí reservas cita presencial o videollamada en Les Corts. En ${contratosInmobiliariosBarrioPath(barrio.slug)} contratas y tramitas online con el mismo gestor.`,
    },
  ];

  return (
    <div className={`min-h-screen ${LANDING_PAGE_BG}`}>
      <PublicHeader />

      <section className={`${LANDING_HERO_GRADIENT} px-4 py-12 sm:px-6 lg:py-16`}>
        <div className="mx-auto max-w-6xl">
          <Link
            href={CONTRATOS_INMOBILIARIOS_DESPACHO_BARCELONA_PATH}
            className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Despacho contratos Barcelona
          </Link>
          <p className="mt-4 text-sm font-semibold uppercase tracking-widest text-cyan-200">{office.eyebrow}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-white sm:text-4xl">{despachoSeo.h1}</h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-blue-100">{despachoSeo.heroLead}</p>
          <p className="mt-4 text-sm text-blue-200/95">{office.transport}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href={contratosInmobiliariosBarrioPath(barrio.slug)}
              className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-[#1A4FBF] shadow-md hover:bg-blue-50"
            >
              Contratos completos en {barrio.name}
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
            <Link
              href={localPackArrasGestionHref(packSlug)}
              className="inline-flex min-h-11 items-center rounded-xl border-2 border-white/80 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Pack arras + gestión 495 €
            </Link>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">Qué revisamos en cita desde {barrio.name}</h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569]">{despachoSeo.citaFocus}</p>
          <ul className="mt-6 space-y-2">
            {despachoSeo.checklist.map((item) => (
              <li key={item} className="flex gap-2 text-sm text-[#475569]">
                <span className="font-bold text-[#1A4FBF]" aria-hidden>
                  ·
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContratosBcnOfficeSection barrio={barrio} />

      <GestorContactCta
        placement="despacho_bcn_barrio"
        className="mx-4 my-12 rounded-2xl sm:mx-6 lg:mx-auto lg:max-w-6xl"
        city={barrio.name}
        serviceLabel={`cita despacho — contratos inmobiliarios ${barrio.name}`}
        headline={`Reserva cita en Les Corts — ${barrio.name}`}
      />

      <FaqSection title={`Despacho y ${barrio.name}`} items={faqItems} />

      <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-10 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-wrap gap-4 text-sm font-semibold">
          <Link href={CONTRATOS_INMOBILIARIOS_BARCELONA_PATH} className="text-[#1A4FBF] hover:underline">
            Hub contratos Barcelona
          </Link>
          <Link href={contratosInmobiliariosDespachoBarrioPath("les-corts")} className="text-[#1A4FBF] hover:underline">
            Despacho Les Corts
          </Link>
        </div>
      </section>

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
