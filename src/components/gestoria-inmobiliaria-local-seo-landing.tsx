import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  GESTORIA_SCHEMA_OFFERS,
  type GestoriaInmobiliariaLocalLandingConfig,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
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

  const offers = GESTORIA_SCHEMA_OFFERS.map((item) => ({
    "@type": "Offer" as const,
    price: item.price,
    priceCurrency: "EUR",
    ...( "unitText" in item && item.unitText
      ? { priceSpecification: { "@type": "UnitPriceSpecification", price: item.price, priceCurrency: "EUR", unitText: item.unitText } }
      : {}),
    availability: "https://schema.org/InStock",
    url: pageUrl,
    itemOffered: {
      "@type": "Product",
      name: item.name,
      brand: { "@type": "Brand", name: "Livendia" },
      offers: {
        "@type": "Offer",
        price: item.price,
        priceCurrency: "EUR",
        availability: "https://schema.org/InStock",
        url: pageUrl,
      },
    },
  }));

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
        provider: {
          "@type": "Organization",
          name: "Livendia",
          url: base,
        },
        areaServed: {
          "@type": "City",
          name: city,
          containedInPlace: {
            "@type": "AdministrativeArea",
            name: administrativeArea,
          },
        },
        makesOffer: offers,
      },
      ...GESTORIA_SCHEMA_OFFERS.map((item, i) => ({
        "@type": "Product",
        "@id": `${pageUrl}#product-${item.slug}`,
        name: `${item.name} — ${city}`,
        description: `${item.name} en ${city} con gestoría Livendia. Precio fijo IVA incluido.`,
        brand: { "@type": "Brand", name: "Livendia" },
        offers: offers[i],
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
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
        <span className="text-4xl font-extrabold text-[#1E3A8A]">{price}</span>
        {price.includes("/mes") ? (
          <span className="text-sm text-[#64748b]">IVA incl.</span>
        ) : (
          <span className="text-sm text-[#64748b]">IVA incl.</span>
        )}
      </div>
      <ContratarSlugButton
        slug={slug}
        className="mt-6 inline-flex items-center justify-center rounded-full bg-[#1E3A8A] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#1E40AF]"
      >
        Contratar
      </ContratarSlugButton>
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
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
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
                      <span>Compraventa: 424 € y 666 € (IVA incl.)</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                      <span>Contratos: 120 €, 145 € y 169 € · entrega 48-72 h</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                      <span>Administración alquiler: 49 €/mes sin permanencia</span>
                    </li>
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="#compraventa"
                      className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#1E3A8A] shadow-xl transition hover:bg-blue-50"
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
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section id="compraventa" className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 text-[#1E3A8A]">
                <Home className="h-8 w-8" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide">Alta rentabilidad</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">{config.compraventa.h2}</h2>
              <p className="mt-4 max-w-3xl text-lg text-[#64748b]">{config.compraventa.intro}</p>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                <ServicePriceCard
                  slug="acompanamiento-reserva-arras"
                  price="424 €"
                  title={config.compraventa.h3Reserva}
                >
                  {config.compraventa.reservaCopy}
                </ServicePriceCard>
                <ServicePriceCard
                  slug="servicio-completo-compra"
                  price="666 €"
                  title={config.compraventa.h3Completo}
                >
                  {config.compraventa.completoCopy}
                </ServicePriceCard>
              </div>
            </div>
          </section>

          <section id="contratos" className="border-b border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 text-[#1E3A8A]">
                <Scale className="h-8 w-8" aria-hidden />
                <span className="text-sm font-semibold uppercase tracking-wide">Transaccional</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">{config.contratos.h2}</h2>
              <p className="mt-4 max-w-3xl text-lg text-[#64748b]">{config.contratos.intro}</p>
              <p className="mt-2 flex items-center gap-2 text-sm font-medium text-[#475569]">
                <Clock className="h-4 w-4 text-[#1E3A8A]" aria-hidden />
                Entrega en 48-72 h laborables
              </p>
              <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <ServicePriceCard slug="contrato-arras-penitenciales" price="145 €" title={config.contratos.h3Arras}>
                  {config.contratos.arrasCopy}
                </ServicePriceCard>
                <ServicePriceCard
                  slug="revision-documental-post-arras"
                  price="169 €"
                  title="Pack Revisión Documental post-arras"
                >
                  Verificación integral tras firmar arras: actas, derramas, ITE, nota registral e informe con
                  llamada de veredicto antes de escriturar en {config.city}.
                </ServicePriceCard>
                <ServicePriceCard slug="contrato-alquiler-lau" price="120 €" title={config.contratos.h3Lau}>
                  {config.contratos.lauCopy}
                </ServicePriceCard>
                <ServicePriceCard
                  slug="contrato-alquiler-temporada"
                  price="120 €"
                  title={config.contratos.h3Temporada}
                >
                  {config.contratos.temporadaCopy}
                </ServicePriceCard>
              </div>
              <p className="mt-6 text-sm text-[#64748b]">
                También disponible{" "}
                <ContratarSlugButton slug="contrato-alquiler-habitacion" className="font-semibold text-[#1E3A8A] underline">
                  Contrato de Habitación — 120 €
                </ContratarSlugButton>
              </p>
            </div>
          </section>

          <section id="administracion" className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-7xl">
              <div className="flex items-center gap-3 text-[#1E3A8A]">
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
                        <Shield className="h-5 w-5 shrink-0 text-[#1E3A8A]" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <article className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200">
                  <h3 className="text-xl font-bold text-[#1E293B]">{config.administracion.h3Precio}</h3>
                  <p className="mt-3 text-[#64748b] leading-relaxed">{config.administracion.precioCopy}</p>
                  <div className="mt-6 flex items-baseline gap-2">
                    <span className="text-5xl font-extrabold text-[#1E3A8A]">49 €</span>
                    <span className="text-lg text-[#64748b]">/mes · IVA incl.</span>
                  </div>
                  <ContratarSlugButton
                    slug="administracion-alquiler"
                    className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-[#1E3A8A] px-6 py-4 text-base font-bold text-white transition hover:bg-[#1E40AF]"
                  >
                    Contratar administración
                  </ContratarSlugButton>
                </article>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">Preguntas frecuentes en {config.city}</h2>
              <dl className="mt-8 space-y-6">
                {config.faq.map((item) => (
                  <div key={item.question} className="rounded-xl border border-slate-200 bg-white p-5">
                    <dt className="font-semibold text-[#1E293B]">{item.question}</dt>
                    <dd className="mt-2 text-[#64748b]">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <FileText className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-bold sm:text-3xl">Empieza hoy en {config.city}</h2>
              <p className="mt-4 text-lg text-blue-100">{config.finalCtaLead}</p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="servicio-completo-compra"
                  className="rounded-full bg-white px-8 py-3 font-bold text-[#1E3A8A] hover:bg-blue-50"
                >
                  Servicio completo 666 €
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

        <SiteFooter />
      </div>
    </MultiServicePurchaseProvider>
  );
}
