import { FaqSection } from "@/components/faq-section";
import { OfficeMap } from "@/components/office-map";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import {
  METRO_ADMINISTRACION_FAQ,
  type AdministracionAlquilerMetroLanding,
} from "@/lib/administracion-alquiler-metro-landings";
import {
  BUSINESS_EMAIL,
  buildBusinessPostalAddress,
  getBusinessAddressDisplayLine,
  getBusinessMapsExternalUrl,
  getBusinessStreetAddress,
  getBusinessPostalCode,
} from "@/lib/business-nap";
import { getContactPhoneDisplay, getContactPhoneE164Plus, getContactPhoneTelHref } from "@/lib/contact";
import { getSiteUrl } from "@/lib/site-url";
import { ADMINISTRACION_ALQUILER_LOCAL_BASE } from "@/lib/administracion-alquiler-local-cities";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  CheckCircle,
  ClipboardCheck,
  FileText,
  MapPin,
  MessageCircle,
  Phone,
  Shield,
  Wrench,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function buildWaHref(place: string): string {
  const text = `Hola, quiero información sobre la administración de mi alquiler en ${place}`;
  return `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(text)}`;
}

function MetroRealEstateAgentJsonLd({ config }: { config: AdministracionAlquilerMetroLanding }) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${config.path}`;

  const officeAddress = buildBusinessPostalAddress();
  const agent: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${pageUrl}#realestateagent`,
    name: config.jsonLd.name,
    description: config.metaDescription,
    url: pageUrl,
    telephone: getContactPhoneE164Plus(),
    email: BUSINESS_EMAIL,
    image: `${base}/icons/icon-512.png`,
    priceRange: "€",
    address: {
      "@type": "PostalAddress",
      streetAddress: getBusinessStreetAddress(),
      addressLocality: config.jsonLd.addressLocality,
      ...(config.jsonLd.addressRegion ? { addressRegion: config.jsonLd.addressRegion } : {}),
      postalCode: getBusinessPostalCode(),
      addressCountry: "ES",
    },
    areaServed: {
      "@type": "Place",
      name: config.jsonLd.areaServedName,
    },
    parentOrganization: {
      "@type": "Organization",
      name: "Livendia",
      url: base,
      address: officeAddress,
    },
    inLanguage: "es-ES",
  };

  if (config.jsonLd.geo) {
    agent.geo = {
      "@type": "GeoCoordinates",
      latitude: config.jsonLd.geo.latitude,
      longitude: config.jsonLd.geo.longitude,
    };
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(agent) }} />
  );
}

const GRID_ICONS = [Shield, FileText, Wrench, ClipboardCheck] as const;
const BULLET_ICONS = [MessageCircle, FileText, Building2] as const;

export function AdministracionAlquilerMetroSeoLanding({
  config,
}: {
  config: AdministracionAlquilerMetroLanding;
}) {
  const waHref = buildWaHref(config.waPlaceLabel);
  const telHref = getContactPhoneTelHref();
  const mapsUrl = getBusinessMapsExternalUrl();

  return (
    <>
      <MetroRealEstateAgentJsonLd config={config} />
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />

        <main id="contenido-principal">
          <header className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-[520px] lg:grid-cols-2">
                <div className="flex flex-col justify-center px-6 py-14 lg:px-12 lg:py-20">
                  <p className="mb-4 inline-block self-start rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
                    Administración de alquiler · 49 €/mes IVA incl.
                  </p>
                  <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-[2.65rem]">{config.h1}</h1>
                  <p className="mt-5 text-lg leading-relaxed text-blue-50">{config.subtitle}</p>
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-placement={`metro_admin_wa_${config.segments.join("_")}`}
                      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-bold text-[#1A4FBF] shadow-lg transition hover:bg-blue-50"
                    >
                      <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                      {config.primaryCtaLabel}
                    </a>
                    {config.secondaryCtaLabel ? (
                      <a
                        href={telHref}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white px-6 py-3 text-base font-semibold transition hover:bg-white/10"
                      >
                        <Phone className="h-5 w-5 shrink-0" aria-hidden />
                        {config.secondaryCtaLabel}
                      </a>
                    ) : (
                      <a
                        href={telHref}
                        className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border-2 border-white/80 px-6 py-3 text-sm font-semibold transition hover:bg-white/10"
                      >
                        <Phone className="h-5 w-5 shrink-0" aria-hidden />
                        Llamar: {getContactPhoneDisplay()}
                      </a>
                    )}
                  </div>
                </div>
                <div className="relative min-h-[240px] lg:min-h-[520px]">
                  <Image
                    src={config.heroImage}
                    alt={`Administración de alquiler en ${config.waPlaceLabel}`}
                    fill
                    priority
                    fetchPriority="high"
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          </header>

          <section
            className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6"
            aria-labelledby="eeat-heading"
          >
            <div className="mx-auto max-w-4xl">
              <article>
                <h2 id="eeat-heading" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
                  {config.eeatHeading}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-[#475569]">{config.eeatBlock}</p>
              </article>
            </div>
          </section>

          <section
            className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6"
            aria-labelledby="servicios-heading"
          >
            <div className="mx-auto max-w-7xl">
              <h2 id="servicios-heading" className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                Qué incluye la administración Livendia
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-center text-[#64748b]">
                Tarifa fija 49 €/mes · Sin permanencia · Gestor dedicado ante el inquilino
              </p>

              {config.serviceGrid ? (
                <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  {config.serviceGrid.map((item, idx) => {
                    const Icon = GRID_ICONS[idx] ?? Shield;
                    return (
                      <li
                        key={item.title}
                        className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100"
                      >
                        <div className="mb-4 inline-flex rounded-xl bg-[#1A4FBF]/10 p-3 text-[#1A4FBF]">
                          <Icon className="h-6 w-6" aria-hidden />
                        </div>
                        <h3 className="text-lg font-bold text-[#1E293B]">{item.title}</h3>
                        <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                      </li>
                    );
                  })}
                </ul>
              ) : null}

              {config.serviceBullets ? (
                <ul className="mx-auto mt-10 max-w-3xl space-y-6">
                  {config.serviceBullets.map((item, idx) => {
                    const Icon = BULLET_ICONS[idx] ?? CheckCircle;
                    return (
                      <li key={item.title} className="flex gap-4 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
                        <div className="shrink-0 rounded-lg bg-cyan-50 p-2.5 text-[#1A4FBF]">
                          <Icon className="h-5 w-5" aria-hidden />
                        </div>
                        <div>
                          <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
                          <p className="mt-1 text-sm leading-relaxed text-[#64748b]">{item.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6" aria-labelledby="oficina-heading">
            <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:items-center">
              <article>
                <h2 id="oficina-heading" className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
                  Oficina física en Les Corts (Barcelona)
                </h2>
                <p className="mt-4 leading-relaxed text-[#475569]">
                  Livendia opera con sede en <strong>{getBusinessAddressDisplayLine()}</strong>. Atención presencial y
                  soporte ágil para propietarios del área metropolitana de Barcelona.
                </p>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 font-semibold text-[#1A4FBF] hover:underline"
                >
                  <MapPin className="h-5 w-5" aria-hidden />
                  Ver en Google Maps
                </a>
                <p className="mt-6">
                  <Link
                    href={`${ADMINISTRACION_ALQUILER_LOCAL_BASE}/barcelona`}
                    className="text-sm font-medium text-[#64748b] underline-offset-2 hover:text-[#1A4FBF] hover:underline"
                  >
                    Ver administración de alquiler en Barcelona (ciudad)
                  </Link>
                </p>
              </article>
              <OfficeMap
                minHeightClassName="min-h-[280px] sm:min-h-[320px]"
                title="Despacho Livendia — Les Corts, Barcelona"
                className="rounded-2xl shadow-lg ring-1 ring-slate-200"
              />
            </div>
          </section>

          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-14 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-bold sm:text-3xl">¿Hablamos de tu alquiler?</h2>
              <p className="mt-3 text-blue-100">
                Sin compromiso de permanencia. Respuesta por WhatsApp o teléfono en horario laboral.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-analytics-placement={`metro_admin_wa_footer_${config.segments.join("_")}`}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full bg-white px-8 py-3 font-bold text-[#1A4FBF] shadow-lg transition hover:bg-blue-50"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  {config.primaryCtaLabel}
                </a>
                <a
                  href={telHref}
                  className="inline-flex min-h-12 items-center gap-2 rounded-full border-2 border-white px-8 py-3 font-semibold transition hover:bg-white/10"
                >
                  <Phone className="h-5 w-5" aria-hidden />
                  {getContactPhoneDisplay()}
                </a>
              </div>
            </div>
          </section>

          <section className="bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                id="faq-metro-admin"
                title="Preguntas frecuentes"
                subtitle="Respuestas sobre la administración de alquiler y nuestra oficina en Les Corts."
                items={[...METRO_ADMINISTRACION_FAQ]}
              />
            </div>
          </section>
        </main>

        <SiteFooter />
      </div>
    </>
  );
}
