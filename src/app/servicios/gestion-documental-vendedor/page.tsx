import Link from "next/link";
import { LocalCityImageCardGrid } from "@/components/local-city-image-card-grid";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { WhatsAppLeadLink } from "@/components/whatsapp-lead-button";
import Image from "next/image";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE,
  getPublishedGestionDocumentalVendedorLocalCities,
  localGestionDocumentalVendedorHref,
} from "@/lib/gestion-documental-vendedor-local-cities";
import {
  GESTION_VENDEDOR_INCLUDES,
  GESTION_VENDEDOR_NOT_INCLUDED,
  GESTION_VENDEDOR_PROCESS_STEPS,
} from "@/lib/gestion-documental-vendedor-local-shared";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import {
  AlertCircle,
  CheckCircle,
  ClipboardList,
  FileSearch,
  MessageCircle,
  Phone,
  Shield,
  UserCheck,
} from "lucide-react";

const canonical = `${getSiteUrl()}${GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE}`;
const SERVICE_LABEL = "Gestión documental vendedor post-arras";

const STEP_ICONS = [ClipboardList, FileSearch, Shield, Phone] as const;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: `Gestión documental vendedor post-arras — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
  description:
    "Vendiste entre particulares y ya tienes comprador: un gestor obtiene y verifica toda la documentación de arras a escritura. 350 € IVA incl. Gestor dedicado en 24 h.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Gestión documental vendedor post-arras — ${GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL} | Livendia`,
    description:
      "Gestión documental para vendedores particulares: nota simple, comunidad, ITE, energético, hipoteca e informe semáforo hasta notaría.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function GestionDocumentalVendedorPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === GESTION_DOCUMENTAL_VENDEDOR_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL);
  const publishedCities = getPublishedGestionDocumentalVendedorLocalCities();

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    Vendedor particular · Post-arras
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl">
                    Gestión documental vendedor post-arras
                  </h1>
                  <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">
                    Ya tienes comprador y has firmado (o vas a firmar) arras. Un gestor dedicado obtiene y verifica
                    toda la documentación para que llegues a notaría sin retrasos: nota simple, comunidad, ITE,
                    certificado energético, hipoteca e informe semáforo.
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-200">IVA incluido</span>
                  </div>
                  <p className="mt-2 text-sm text-blue-200">Gestor asignado en 24 h laborables · Arras a escritura</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                      Contratar gestor — {priceLabel}
                    </ContratarServicioButton>
                    <WhatsAppLeadLink
                      placement="gestion_documental_vendedor_hero_whatsapp"
                      serviceLabel={SERVICE_LABEL}
                      needType="venta"
                      mode="direct"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      Consultar por WhatsApp
                    </WhatsAppLeadLink>
                  </div>
                </div>
                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 lg:h-[400px]">
                  <Image
                    src="/images/gestoria20.jpg"
                    alt="Gestor documental preparando la escritura de venta entre particulares"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">¿Qué incluye el servicio?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                Tú cierras la venta con tu comprador; nosotros gestionamos el papeleo hasta que el notario tenga
                todo listo.
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {GESTION_VENDEDOR_INCLUDES.map((item) => (
                  <li
                    key={item.title}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    <div>
                      <span className="text-sm font-semibold text-[#1E293B]">{item.title}</span>
                      <p className="mt-0.5 text-xs text-[#64748b]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Cómo funciona</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {GESTION_VENDEDOR_PROCESS_STEPS.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? ClipboardList;
                  return (
                    <div key={step.title} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                        {step.phase}
                      </span>
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A4FBF]/10">
                        <Icon className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                      </div>
                      <h3 className="mt-4 font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel={SERVICE_LABEL}
            needType="venta"
            placement="gestion_documental_vendedor_mid"
          />

          <section className="border-t border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <UserCheck className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Para vendedores con comprador</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    No buscamos comprador ni actuamos como agencia. Tú ya tienes la operación cerrada entre
                    particulares; nosotros evitamos que la documentación frene la escritura.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <FileSearch className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Informe semáforo</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Estado documental verde, ámbar o rojo por ítem. Detectamos cargas, derramas o certificados
                    caducados con semanas de margen, no el día de notaría.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <Shield className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Hasta la firma</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Línea directa con tu gestor por WhatsApp, área de cliente y llamadas de seguimiento hasta el
                    día de escritura.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {publishedCities.length > 0 ? (
            <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-6xl">
                <LocalCityImageCardGrid
                  cities={publishedCities.map((c) => ({
                    slug: c.slug,
                    city: c.city,
                    region: c.schemaAdministrativeArea,
                    href: localGestionDocumentalVendedorHref(c.slug),
                    linkLabel: `Ver servicio vendedor post-arras en ${c.city} →`,
                  }))}
                  title="Gestión documental vendedor por ciudad"
                  description="Landings locales con casuística documental específica de cada mercado. Publicamos ciudades de forma gradual."
                />
              </div>
            </section>
          ) : null}

          <section className="border-t border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-10 w-10 shrink-0 text-amber-700" aria-hidden />
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">¿Para quién es y qué no incluye?</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  Para <strong>vendedores particulares</strong> que ya tienen comprador y están entre arras y
                  escritura. El contrato de arras se contrata aparte ({CONTRATO_ARRAS_LOCAL_PRICE_LABEL}).
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#475569]">
                  {GESTION_VENDEDOR_NOT_INCLUDED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[#475569]">
                  Si eres <strong>comprador</strong>, valora la{" "}
                  <Link
                    href="/servicios/revision-documental-post-arras"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    revisión documental comprador post-arras (350 €)
                  </Link>
                  . Si aún no has firmado arras, el{" "}
                  <Link
                    href="/servicios/servicio-completo-venta"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    servicio completo de venta (890 €)
                  </Link>{" "}
                  cubre reserva, arras y documentación.
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <UserCheck className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">Tu gestor listo en 24 h</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrata online, recibe diagnóstico inicial y checklist personalizado. Desde arras hasta el día de
                notaría, sin improvisar 15-20 h de trámites.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
                <WhatsAppLeadLink
                  placement="gestion_documental_vendedor_footer_whatsapp"
                  serviceLabel={SERVICE_LABEL}
                  needType="venta"
                  mode="modal"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </WhatsAppLeadLink>
              </div>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections />

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
