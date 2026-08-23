import { PublicHeader } from "@/components/public-header";
import { FaqSection } from "@/components/faq-section";
import { LocalCityContextSectionFromConfig } from "@/components/local-city-context-section-from-config";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
} from "@/lib/catalog.public";
import type { GestoriaInmobiliariaLocalLandingConfig } from "@/lib/gestoria-inmobiliaria-local-cities";
import { localRevisionDocumentalPostArrasHref } from "@/lib/revision-documental-post-arras-local-cities";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { LANDING_CTA_GRADIENT, LANDING_HERO_GRADIENT } from "@/lib/landing-design-system";
import { getSiteUrl } from "@/lib/site-url";
import {
  isAdministracionAlquilerLocalSlugPublished,
  localAdministracionAlquilerHref,
} from "@/lib/administracion-alquiler-local-cities";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  CheckCircle,
  FileText,
  Home,
  KeyRound,
  MessageCircle,
  Phone,
  Scale,
  Shield,
  Clock,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

/** Fase 4 (enlazado interno): ciudades con contenido único ya reescrito en administracion-alquiler-local. */
const ADMINISTRACION_LOCAL_LINK_PHASE_SLUGS = [
  "madrid",
  "barcelona",
  "valencia",
  "malaga",
  "gijon",
  "zaragoza",
  "murcia",
  "sevilla",
];

function GestoriaLocalJsonLd({
  path,
  city,
  administrativeArea,
}: {
  path: string;
  city: string;
  administrativeArea: string;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${path}`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LegalService",
        "@id": `${pageUrl}#legalservice`,
        name: `Livendia — Gestoría inmobiliaria en ${city}`,
        description: `Gestoría inmobiliaria en ${city}: compraventa entre particulares, redacción de contratos legales y administración de alquileres con precios fijos.`,
        url: pageUrl,
        inLanguage: "es-ES",
        provider: { "@id": `${base}/#organization` },
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: administrativeArea,
          },
        },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: base },
          { "@type": "ListItem", position: 2, name: "Gestoría por ciudad", item: `${base}/gestoria` },
          { "@type": "ListItem", position: 3, name: city, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

function serviceProductHref(slug: string): string {
  return `/servicios/${slug}`;
}

function ServicePriceCard({
  slug,
  price,
  title,
  children,
}: {
  slug: string;
  price: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <article className="flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
      <h3 className="text-xl font-bold text-[#1E293B]">{title}</h3>
      <p className="mt-4 flex-1 text-[#64748b] leading-relaxed">{children}</p>
      <div className="mt-6 flex items-baseline gap-2">
        <span className="text-4xl font-extrabold text-[#1A4FBF]">{price}</span>
        <span className="text-sm text-[#64748b]">IVA incl.</span>
      </div>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <ContratarSlugButton
          slug={slug}
          className="inline-flex flex-1 items-center justify-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1E40AF]"
        >
          Contratar
        </ContratarSlugButton>
        <Link
          href={serviceProductHref(slug)}
          className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#1A4FBF] px-6 py-3 text-sm font-bold text-[#1A4FBF] transition hover:bg-blue-50"
        >
          Acceder
        </Link>
      </div>
    </article>
  );
}

export async function GestoriaInmobiliariaLocalSeoLanding({
  config,
}: {
  config: GestoriaInmobiliariaLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const slugs = [
    "acompanamiento-reserva-arras",
    "revision-documental-post-arras",
    "servicio-completo-compra",
    "servicio-completo-venta",
    "contrato-arras-penitenciales",
    "contrato-alquiler-lau",
    "contrato-alquiler-temporada",
    "contrato-alquiler-habitacion",
    "administracion-alquiler",
  ] as const;
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  for (const s of catalog) {
    if (slugs.includes(s.slug as (typeof slugs)[number])) {
      servicesBySlug[s.slug] = s;
    }
  }

  const showAdministracionLocalLink =
    ADMINISTRACION_LOCAL_LINK_PHASE_SLUGS.includes(config.slug) &&
    isAdministracionAlquilerLocalSlugPublished(config.slug);
  const administracionLocalHref = localAdministracionAlquilerHref(config.slug);

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <GestoriaLocalJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
      />
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className={`relative overflow-hidden ${LANDING_HERO_GRADIENT} text-white`}>
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-[580px] lg:grid-cols-2">
                <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-20">
                  <p className="mb-6 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    Gestoría inmobiliaria · {config.city}
                  </p>
                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">{config.h1}</h1>
                  <p className="mt-6 text-lg leading-relaxed text-blue-50">{config.heroLead}</p>
                  <ul className="mt-8 space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                      <span>Compraventa: 424 € y 890 € (IVA incl.)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                      <span>
                        Contratos: LAU {CONTRATO_ALQUILER_LAU_PRICE_LABEL}, arras 145 €, temporada{" "}
                        {CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}, revisión {REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}{" "}
                        · entrega 48-72 h
                      </span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                      <span>Administración alquiler: 49 €/mes sin permanencia</span>
                    </li>
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#compraventa"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1A4FBF] shadow-xl transition hover:bg-blue-50"
                    >
                      Ver servicios y precios
                    </a>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="relative h-[280px] lg:h-auto">
                  <Image
                    src="/images/livendia-fachada-azul.jpg"
                    alt={`Gestoría inmobiliaria en ${config.city}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </section>

          <LocalCityContextSectionFromConfig
            city={config.city}
            heading={`Gestoría inmobiliaria en ${config.city}: panorama local`}
            localMarketInsight={config.localMarketInsight}
            localPriceSnapshot={config.localPriceSnapshot}
            localNeighborhoods={config.localNeighborhoods}
            localServiceNotes={config.localServiceNotes}
          />

          <section id="compraventa" className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 text-[#1A4FBF]">
                <Home className="h-8 w-8" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide">Alta rentabilidad</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">{config.compraventa.h2}</h2>
              <p className="mt-4 max-w-3xl text-lg text-[#64748b]">{config.compraventa.intro}</p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                <ServicePriceCard
                  slug="acompanamiento-reserva-arras"
                  price="424 €"
                  title={config.compraventa.h3Reserva}
                >
                  {config.compraventa.reservaCopy}
                </ServicePriceCard>
                <ServicePriceCard
                  slug="servicio-completo-compra"
                  price="890 €"
                  title={config.compraventa.h3Completo}
                >
                  {config.compraventa.completoCopy}
                </ServicePriceCard>
                <ServicePriceCard
                  slug="servicio-completo-venta"
                  price="890 €"
                  title="Servicio completo de venta"
                >
                  Para propietarios que venden entre particulares: reserva, arras, documentación del inmueble y
                  asesoramiento hasta la escritura con gestor personalizado.
                </ServicePriceCard>
              </div>
              {config.slug === "barcelona" ? (
                <p className="mt-6 text-center text-sm text-[#64748b]">
                  ¿Vendes en Barcelona? Consulta la{" "}
                  <Link
                    href="/servicios/servicio-completo-venta-local/barcelona"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    landing de venta completa local (890 € IVA incl.)
                  </Link>
                  .
                </p>
              ) : null}
            </div>
          </section>

          <section id="contratos" className="border-b border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 text-[#1A4FBF]">
                <Scale className="h-8 w-8" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide">Transaccional</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">{config.contratos.h2}</h2>
              <p className="mt-4 max-w-3xl text-lg text-[#64748b]">{config.contratos.intro}</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#475569]">
                <Clock className="h-4 w-4 text-[#1A4FBF]" aria-hidden />
                Entrega en 48-72 h laborables
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ServicePriceCard slug="contrato-arras-penitenciales" price="145 €" title={config.contratos.h3Arras}>
                  {config.contratos.arrasCopy}
                </ServicePriceCard>
                <ServicePriceCard
                  slug="revision-documental-post-arras"
                  price={REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL}
                  title="Pack Revisión Documental post-arras"
                >
                  Verificación integral tras firmar arras: actas, derramas, ITE, nota registral e informe con
                  llamada de veredicto antes de escriturar en {config.city}.
                </ServicePriceCard>
                <ServicePriceCard slug="contrato-alquiler-lau" price={CONTRATO_ALQUILER_LAU_PRICE_LABEL} title={config.contratos.h3Lau}>
                  {config.contratos.lauCopy}
                </ServicePriceCard>
                <ServicePriceCard
                  slug="contrato-alquiler-temporada"
                  price={CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}
                  title={config.contratos.h3Temporada}
                >
                  {config.contratos.temporadaCopy}
                </ServicePriceCard>
              </div>
              <p className="mt-6 text-sm text-[#64748b]">
                También disponible{" "}
                <ContratarSlugButton slug="contrato-alquiler-habitacion" className="font-semibold text-[#1A4FBF] underline">
                  Contrato de Habitación — {CONTRATO_ALQUILER_HABITACION_PRICE_LABEL}
                </ContratarSlugButton>
              </p>
              {config.slug === "barcelona" ? (
                <p className="mt-4 text-sm text-[#64748b]">
                  Revisión post-arras por zona:{" "}
                  <Link href={localRevisionDocumentalPostArrasHref("barcelona")} className="font-semibold text-[#1A4FBF] hover:underline">
                    Barcelona
                  </Link>
                  {" · "}
                  <Link href={localRevisionDocumentalPostArrasHref("hospitalet-de-llobregat")} className="font-semibold text-[#1A4FBF] hover:underline">
                    L&apos;Hospitalet
                  </Link>
                  {" · "}
                  <Link href={localRevisionDocumentalPostArrasHref("cornella-de-llobregat")} className="font-semibold text-[#1A4FBF] hover:underline">
                    Cornellà
                  </Link>
                  {" · "}
                  <Link href={localRevisionDocumentalPostArrasHref("les-corts")} className="font-semibold text-[#1A4FBF] hover:underline">
                    Les Corts (despacho Mejía Lequerica 44)
                  </Link>
                </p>
              ) : null}
            </div>
          </section>

          <section id="administracion" className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 text-[#1A4FBF]">
                <KeyRound className="h-8 w-8" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide">Ingreso recurrente</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">{config.administracion.h2}</h2>
              <p className="mt-4 max-w-3xl text-lg text-[#64748b]">{config.administracion.intro}</p>
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div>
                  <h3 className="text-xl font-bold text-[#1E293B]">{config.administracion.h3Incluye}</h3>
                  <p className="mt-3 text-[#64748b] leading-relaxed">{config.administracion.incluyeCopy}</p>
                  <ul className="mt-6 space-y-3">
                    {[
                      "Cero contacto directo con el inquilino",
                      "Coordinación de averías y reparaciones",
                      "Mediación y seguimiento de renovaciones",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3 text-[#475569]">
                        <Shield className="h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  {showAdministracionLocalLink ? (
                    <p className="mt-6 text-sm text-[#64748b]">
                      Si ya tienes claro que quieres delegar el contacto con el inquilino, consulta la{" "}
                      <Link
                        href={administracionLocalHref}
                        className="font-semibold text-[#1A4FBF] hover:underline"
                      >
                        guía completa de administración de alquiler en {config.city}
                      </Link>
                      : precio medio de alquiler, barrios donde operamos y preguntas frecuentes de tu ciudad.
                    </p>
                  ) : null}
                </div>
                <article className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200">
                  <h3 className="text-xl font-bold text-[#1E293B]">{config.administracion.h3Precio}</h3>
                  <p className="mt-3 text-[#64748b] leading-relaxed">{config.administracion.precioCopy}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold text-[#1A4FBF] sm:text-5xl lg:text-6xl">49 €</span>
                    <span className="text-lg text-[#64748b]">/mes · IVA incl.</span>
                  </div>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <ContratarSlugButton
                      slug="administracion-alquiler"
                      className="inline-flex flex-1 items-center justify-center rounded-full bg-[#1A4FBF] px-6 py-4 text-base font-bold text-white transition hover:bg-[#1E40AF]"
                    >
                      Contratar administración
                    </ContratarSlugButton>
                    <Link
                      href={serviceProductHref("administracion-alquiler")}
                      className="inline-flex flex-1 items-center justify-center rounded-full border-2 border-[#1A4FBF] px-6 py-4 text-base font-bold text-[#1A4FBF] transition hover:bg-blue-50"
                    >
                      Acceder
                    </Link>
                  </div>
                  {showAdministracionLocalLink ? (
                    <p className="mt-4 text-center text-xs text-[#64748b]">
                      ¿Dudas antes de contratar? Consulta la{" "}
                      <Link
                        href={administracionLocalHref}
                        className="font-semibold text-[#1A4FBF] hover:underline"
                      >
                        ficha de administración de alquiler en {config.city}
                      </Link>
                      .
                    </p>
                  ) : null}
                </article>
              </div>
            </div>
          </section>


          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                title={`Preguntas frecuentes en ${config.city}`}
                items={config.faq.map((item) => ({ question: item.question, answer: item.answer }))}
              />
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel={`Gestoría inmobiliaria en ${config.city}`}
            city={config.city}
            placement={`gestoria_local_${config.slug}`}
          />

          <section className={`${LANDING_CTA_GRADIENT} px-4 py-16 text-white sm:px-6`}>
            <div className="mx-auto max-w-3xl text-center">
              <FileText className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Empieza hoy en {config.city}</h2>
              <p className="mt-4 text-lg text-blue-100">{config.finalCtaLead}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="servicio-completo-compra"
                  className="rounded-full bg-white px-8 py-3 font-bold text-[#1A4FBF] hover:bg-blue-50"
                >
                  servicio completo 890 €
                </ContratarSlugButton>
                <a
                  href={getContactPhoneTelHref()}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-6 py-3 font-semibold hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {getContactPhoneDisplay()}
                </a>
              </div>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections city={config.city} serviceLabel="Gestoría inmobiliaria" />


        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
