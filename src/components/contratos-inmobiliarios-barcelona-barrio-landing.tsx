import { ContratosBcnOfficeSection } from "@/components/contratos-bcn-office-section";
import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { ContratarSlugButton, MultiServicePurchaseProvider } from "@/components/service-purchase-provider";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
import type { ContratosInmobiliariosBarrioPage } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import { contratosInmobiliariosBarrioPath } from "@/lib/contratos-inmobiliarios-barcelona-barrios";
import {
  CONTRATOS_INMOBILIARIOS_BARCELONA_PATH,
  CONTRATOS_INMOBILIARIOS_BARCELONA_META,
} from "@/lib/contratos-inmobiliarios-barcelona-content";
import type { PublicService } from "@/lib/catalog.public";
import { LANDING_HERO_GRADIENT, LANDING_PAGE_BG } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2, FileText } from "lucide-react";

export function ContratosInmobiliariosBarrioLanding({
  barrio,
  servicesBySlug,
  allBarrios,
}: {
  barrio: ContratosInmobiliariosBarrioPage;
  servicesBySlug: Partial<Record<string, PublicService>>;
  allBarrios: readonly ContratosInmobiliariosBarrioPage[];
}) {
  const hubUrl = `${getSiteUrl().replace(/\/$/, "")}${CONTRATOS_INMOBILIARIOS_BARCELONA_PATH}`;

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <div className={`min-h-screen ${LANDING_PAGE_BG}`}>
        <PublicHeader />

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
                className="object-cover object-center"
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

        <section className="border-b border-slate-200 px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
              Servicios de contratos inmobiliarios en {barrio.name}
            </h2>
            <p className="mt-3 max-w-2xl text-[#64748B]">
              Precios fijos IVA incluido, panel online y gestor dedicado — los mismos servicios que en{" "}
              <Link href={CONTRATOS_INMOBILIARIOS_BARCELONA_PATH} className="font-semibold text-[#1A4FBF] hover:underline">
                toda Barcelona
              </Link>
              , con foco en el contexto de {barrio.districtLabel}.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {barrio.servicesFocus.map((label) => (
                <li
                  key={label}
                  className="flex items-center gap-3 rounded-2xl bg-[#EFF6FF] px-5 py-4 text-sm font-semibold text-[#1E293B] ring-1 ring-[#1A4FBF]/10"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                  {label}
                </li>
              ))}
            </ul>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {(
                [
                  { slug: "contrato-alquiler-lau", label: "Contrato LAU" },
                  { slug: "contrato-arras-penitenciales", label: "Contrato arras" },
                  { slug: "contrato-alquiler-habitacion", label: "Habitación" },
                  { slug: "administracion-alquiler", label: "Admin. alquiler" },
                ] as const
              ).map(({ slug, label }) => (
                <div
                  key={slug}
                  className="flex flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <FileText className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                  <p className="mt-3 font-bold text-[#1E293B]">{label}</p>
                  <ContratarSlugButton
                    slug={slug}
                    className="mt-4 inline-flex min-h-10 items-center justify-center rounded-xl bg-[#1A4FBF] px-4 py-2 text-sm font-bold text-white hover:bg-[#2563EB]"
                  >
                    Contratar
                  </ContratarSlugButton>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-12 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-xl font-extrabold text-[#1E293B]">Otros barrios de Barcelona</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {allBarrios.map((b) => (
                <Link
                  key={b.slug}
                  href={contratosInmobiliariosBarrioPath(b.slug)}
                  className={`overflow-hidden rounded-2xl bg-white shadow-md ring-1 transition hover:-translate-y-0.5 hover:shadow-lg ${
                    b.slug === barrio.slug ? "ring-2 ring-[#1A4FBF]" : "ring-slate-200"
                  }`}
                  aria-current={b.slug === barrio.slug ? "page" : undefined}
                >
                  <div className="relative aspect-[16/10] w-full">
                    <Image src={b.image} alt="" fill className="object-cover" sizes="240px" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 to-transparent" />
                    <p className="absolute bottom-2 left-3 text-sm font-bold text-white">{b.name}</p>
                  </div>
                  <p className="p-3 text-xs font-semibold text-[#1A4FBF]">Contratos inmobiliarios →</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ContratosBcnOfficeSection />

        <FaqSection
          title={`Preguntas frecuentes — contratos inmobiliarios ${barrio.name}`}
          items={[
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
