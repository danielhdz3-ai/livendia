import Link from "next/link";
import Image from "next/image";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import {
  PARKING_TRASTERO_INCLUDES,
  PARKING_TRASTERO_NOT_INCLUDED,
  PARKING_TRASTERO_PROCESS_PHASES,
} from "@/lib/acompanamiento-compra-parking-trastero-shared";
import { getPublicServices } from "@/lib/catalog";
import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE,
  getPublishedParkingTrasteroLocalCities,
  localAcompanamientoCompraParkingTrasteroHref,
} from "@/lib/acompanamiento-compra-parking-trastero-local-cities";
import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL,
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import {
  AlertCircle,
  Building2,
  Car,
  CheckCircle,
  ClipboardList,
  FileText,
  Landmark,
  MessageCircle,
  Scale,
  UserCheck,
} from "lucide-react";

const canonical = `${getSiteUrl()}/servicios/${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG}`;
const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
  "Hola, quiero contratar el acompañamiento de compra de parking/trastero Livendia (298 €).",
)}`;

const PHASE_ICONS = [ClipboardList, Landmark, FileText, Building2] as const;

export const metadata: Metadata = {
  title: `Acompañamiento compra parking o trastero — ${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} | Livendia`,
  description:
    "Gestor dedicado para comprar parking o trastero: nota simple, IBI, comunidad, notaría, ITP y registro. Servicio integral de 298 € IVA incl. hasta la entrega de la documentación final.",
  alternates: { canonical },
  robots: { index: true, follow: true },
  openGraph: {
    title: `Acompañamiento compra parking o trastero — ${ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL} | Livendia`,
    description:
      "Un gestor se encarga de todos los trámites: preparación documental, notaría, liquidación ITP y inscripción en el Registro de la Propiedad.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function AcompanamientoCompraParkingTrasteroPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL);
  const publishedCities = getPublishedParkingTrasteroLocalCities();

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
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    <Car className="h-4 w-4" aria-hidden />
                    Parking y trastero
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl">
                    Acompañamiento de compra de parking o trastero
                  </h1>
                  <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">
                    Servicio integral de compra: un gestor se encarga de todos los trámites desde la documentación
                    previa hasta la inscripción en el Registro y la entrega final al comprador.
                  </p>
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-200">IVA incluido · Pago único</span>
                  </div>
                  <p className="mt-2 text-sm text-blue-200">Gestor dedicado · Notaría, ITP y Registro incluidos</p>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                      Contratar gestor — {priceLabel}
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="relative h-[320px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 lg:h-[400px]">
                  <Image
                    src="/images/contratos6.jpg"
                    alt="Gestor acompañando la compra de un parking o trastero"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
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
                Tú compras el parking o trastero; nosotros gestionamos el papeleo de principio a fin con un gestor
                que te acompaña en cada fase.
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {PARKING_TRASTERO_INCLUDES.map((item) => (
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
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Las 4 fases del proceso</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                Desde la preparación documental hasta la inscripción en el Registro de la Propiedad
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {PARKING_TRASTERO_PROCESS_PHASES.map((step, i) => {
                  const Icon = PHASE_ICONS[i] ?? ClipboardList;
                  return (
                    <div key={step.phase} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
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

          <section className="border-t border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <div className="grid gap-8 lg:grid-cols-3">
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <UserCheck className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Gestor dedicado</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Un profesional asignado te guía en todo el proceso. Área de cliente Livendia y contacto directo
                    para resolver dudas en cada trámite.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <Scale className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">ITP y Registro gestionados</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Liquidamos el ITP (modelo 600) en la ATC y presentamos telemáticamente en registradores.org. Te
                    enviamos las cartas de pago con el importe exacto e instrucciones claras.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                  <Landmark className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                  <h3 className="mt-4 text-lg font-bold text-[#1E293B]">Hasta la entrega final</h3>
                  <p className="mt-2 text-sm text-[#64748b]">
                    Coordinamos notaría, obtenemos la copia autorizada electrónica y completamos la inscripción. Al
                    final recibes toda la documentación inscrita.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-10 w-10 shrink-0 text-amber-700" aria-hidden />
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">¿Para quién es y qué no incluye?</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  Para <strong>compradores</strong> de parking o trastero entre particulares (o con agencia) que
                  quieren delegar los trámites administrativos en un gestor especializado.
                </p>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#475569]">
                  {PARKING_TRASTERO_NOT_INCLUDED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[#475569]">
                  Si compras una <strong>vivienda</strong>, consulta el{" "}
                  <Link
                    href="/servicios/servicio-completo-compra"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    servicio completo de compra (890 €)
                  </Link>
                  , que cubre reserva, arras y escritura con revisión documental integral.
                </p>
              </div>
            </div>
          </section>

          {publishedCities.length > 0 ? (
            <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-6xl">
                <h2 className="text-2xl font-bold text-[#1E293B]">Compra parking o trastero por ciudad y barrio</h2>
                <p className="mt-2 max-w-3xl text-[#64748b]">
                  Landings locales en Madrid, Barcelona y barrios (Eixample, Gràcia, Poblenou, Sants, Sarrià, Sant Martí)
                  con testimonios, calculadora de ahorro vs agencia y FAQ específica.
                </p>
                <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {publishedCities.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={localAcompanamientoCompraParkingTrasteroHref(c.slug)}
                        className="block rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg hover:ring-[#1A4FBF]"
                      >
                        <span className="text-lg font-bold text-[#1E293B]">{c.city}</span>
                        <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">
                          Ver servicio en {c.city} →
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    href={ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_LOCAL_BASE}
                    className="text-sm font-semibold text-[#1A4FBF] hover:underline"
                  >
                    Ver índice de ciudades y barrios →
                  </Link>
                </div>
              </div>
            </section>
          ) : null}

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <Car className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">Compra tu parking o trastero sin estrés</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrata online y deja los trámites en manos de un gestor. Notaría, ITP y Registro gestionados por{" "}
                {priceLabel}.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar por {priceLabel}
                </ContratarServicioButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
