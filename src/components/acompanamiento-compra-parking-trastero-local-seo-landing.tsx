import { AcompanamientoCompraParkingTrasteroLocalCityLinks } from "@/components/acompanamiento-compra-parking-trastero-local-city-links";
import { CalculadoraAhorroCompraParking } from "@/components/calculadora-ahorro-compra-parking";
import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import {
  PARKING_TRASTERO_INCLUDES,
  PARKING_TRASTERO_NOT_INCLUDED,
} from "@/lib/acompanamiento-compra-parking-trastero-shared";
import type { ParkingTrasteroLocalLandingConfig } from "@/lib/acompanamiento-compra-parking-trastero-local-cities";
import {
  PARKING_TRASTERO_AGENCY_COMPARISON_ROWS,
  PARKING_TRASTERO_EMPATHY_CARDS,
  PARKING_TRASTERO_LIVENDIA_COMPARISON_ROWS,
  PARKING_TRASTERO_PROCESS_PHASES,
} from "@/lib/acompanamiento-compra-parking-trastero-local-shared";
import { getPublicServices } from "@/lib/catalog";
import {
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_CENTS,
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL,
  ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  isGestoriaInmobiliariaLocalSlugPublished,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  isServicioCompletoCompraLocalSlugPublished,
  localServicioCompletoCompraHref,
} from "@/lib/servicio-completo-compra-local-cities";
import { buildParkingTrasteroLocalSchemaGraph } from "@/lib/service-schema";
import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Car,
  CheckCircle,
  ClipboardList,
  FileText,
  Landmark,
  MapPin,
  MessageCircle,
  Scale,
  UserCheck,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const PHASE_ICONS = [ClipboardList, Landmark, FileText, Building2] as const;

function LocalParkingTrasteroJsonLd({
  path,
  city,
  administrativeArea,
}: {
  path: string;
  city: string;
  administrativeArea: string;
}) {
  const { service, breadcrumb } = buildParkingTrasteroLocalSchemaGraph({
    path,
    city,
    administrativeArea,
    priceCents: ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_CENTS,
  });
  const graph = { "@context": "https://schema.org", "@graph": [service, breadcrumb] };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export async function AcompanamientoCompraParkingTrasteroLocalSeoLanding({
  config,
}: {
  config: ParkingTrasteroLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, ACOMPANAMIENTO_COMPRA_PARKING_TRASTERO_PRICE_LABEL);
  const seo = config.seoContent;
  const compraSlug = config.compraCompletaSlug ?? config.slug;
  const gestoriaSlug = config.gestoriaSlug ?? config.slug;
  const showCompraLocal = isServicioCompletoCompraLocalSlugPublished(compraSlug);
  const showGestoria = isGestoriaInmobiliariaLocalSlugPublished(gestoriaSlug);

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero contratar el acompañamiento de compra de parking/trastero en ${config.city} (298 €).`,
  )}`;

  return (
    <ServicePurchaseProvider service={service}>
      <LocalParkingTrasteroJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
      />
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    <Car className="h-4 w-4" aria-hidden />
                    {config.heroBadge ?? `Parking y trastero · ${config.city}`}
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    {config.heroH1 ?? `Compra parking o trastero en ${config.city}`}
                  </h1>
                  {seo ? (
                    <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">{seo.heroSubtitle}</p>
                  ) : null}
                  <div className="mt-6 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-blue-50">
                    {priceLabel} IVA incluido · Gestor dedicado · Notaría, ITP y Registro
                  </div>
                  {config.heroBullets?.length ? (
                    <ul className="mt-6 space-y-2">
                      {config.heroBullets.map((line) => (
                        <li key={line} className="flex items-start gap-2 text-blue-50">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
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
                      Consultar antes de contratar
                    </a>
                  </div>
                </div>
                <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 lg:h-[380px]">
                  <Image
                    src="/images/contratos6.jpg"
                    alt={`Acompañamiento compra parking o trastero en ${config.city}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                ¿Compras parking o trastero en {config.city}?
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {PARKING_TRASTERO_EMPATHY_CARDS.map((card) => (
                  <div key={card.title} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
                    <h3 className="text-lg font-bold text-[#1E293B]">{card.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569]">{card.body}</p>
                  </div>
                ))}
              </div>
              {seo?.localProblemIntro ? (
                <p className="mx-auto mt-8 max-w-3xl text-center text-lg leading-relaxed text-[#475569]">
                  {seo.localProblemIntro}
                </p>
              ) : null}
              <p className="mx-auto mt-4 max-w-2xl text-center font-semibold text-[#1E293B]">
                Un gestor Livendia se encarga de todos los trámites por {priceLabel}.
              </p>
            </div>
          </section>

          {seo?.zoneGroups.length ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-5xl">
                <div className="flex items-center gap-2 text-[#1A4FBF]">
                  <MapPin className="h-6 w-6" aria-hidden />
                  <h2 className="text-2xl font-bold text-[#1E293B]">{seo.zonesHeading}</h2>
                </div>
                {seo.zonesParagraph ? (
                  <p className="mt-4 text-lg text-[#475569]">{seo.zonesParagraph}</p>
                ) : null}
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {seo.zoneGroups.map((z) => (
                    <div key={z.district} className="rounded-xl bg-white p-4 ring-1 ring-slate-200">
                      <p className="font-bold text-[#1E293B]">{z.district}</p>
                      <p className="mt-1 text-sm text-[#64748b]">{z.areas}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Las 4 fases en {config.city}
              </h2>
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

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Todo lo que incluye el servicio de {priceLabel}
              </h2>
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

          {seo ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  ¿Cuánto ahorras frente a una agencia en {config.city}?
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                  Las inmobiliarias suelen cobrar un porcentaje sobre el parking o un paquete de gestión de 600–1.200 €.
                  Livendia son {priceLabel} fijos con gestor dedicado.
                </p>
                <div className="mt-10">
                  <CalculadoraAhorroCompraParking city={config.city} precioMedio={seo.precioMedio} />
                </div>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex items-center justify-center gap-2 text-[#1A4FBF]">
                <Scale className="h-6 w-6" aria-hidden />
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Livendia vs agencia inmobiliaria
                </h2>
              </div>
              <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-[#1E3A8A] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Concepto</th>
                      <th className="px-4 py-3 font-semibold">Agencia / gestoría tradicional</th>
                      <th className="px-4 py-3 font-semibold">Livendia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {PARKING_TRASTERO_AGENCY_COMPARISON_ROWS.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-medium text-[#1E293B]">{row.aspect}</td>
                        <td className="px-4 py-3 text-[#475569]">{row.agencia}</td>
                        <td className="px-4 py-3 font-medium text-[#1A4FBF]">{row.livendia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {seo?.casuistica.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Qué suele complicarse al comprar parking o trastero en {config.city}
                </h2>
                <div className="mt-8 space-y-6">
                  {seo.casuistica.map((block) => (
                    <div key={block.title}>
                      <h3 className="text-lg font-bold text-[#1E293B]">{block.title}</h3>
                      <p className="mt-2 leading-relaxed text-[#475569]">{block.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Gestor Livendia vs gestionar tú solo
              </h2>
              <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-[#1E3A8A] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Concepto</th>
                      <th className="px-4 py-3 font-semibold">Sin gestor</th>
                      <th className="px-4 py-3 font-semibold">Con gestor Livendia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {PARKING_TRASTERO_LIVENDIA_COMPARISON_ROWS.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-medium text-[#1E293B]">{row.aspect}</td>
                        <td className="px-4 py-3 text-[#475569]">{row.solo}</td>
                        <td className="px-4 py-3 text-[#475569]">{row.gestor}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {config.testimonials.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-5xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  {config.testimonialsTitle}
                </h2>
                <div className="mt-10 grid gap-8 lg:grid-cols-2">
                  {config.testimonials.map((t) => (
                    <div key={t.author} className="rounded-2xl bg-[#F8FAFC] p-8 ring-1 ring-slate-200">
                      <div className="flex gap-1 text-[#D4AF37]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <p className="mt-4 text-lg italic leading-relaxed text-[#475569]">
                        <span aria-hidden>&ldquo;</span>
                        {t.quote}
                        <span aria-hidden>&rdquo;</span>
                      </p>
                      <p className="mt-6 font-semibold text-[#1E293B]">{t.author}</p>
                      <p className="text-sm text-[#64748b]">{t.role}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {config.faq?.length ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas frecuentes — parking y trastero en ${config.city}`}
                  subtitle="Respuestas antes de contratar tu gestor Livendia."
                  items={[...config.faq]}
                />
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-lg font-bold text-[#1E293B]">Qué no incluye</h3>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-[#475569]">
                {PARKING_TRASTERO_NOT_INCLUDED.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-[#475569]">
                Si compras una <strong>vivienda</strong>, consulta el{" "}
                <Link href="/servicios/servicio-completo-compra" className="font-semibold text-[#1A4FBF] hover:underline">
                  servicio completo de compra ({SERVICIO_COMPLETO_CV_PRICE_LABEL})
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <UserCheck className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{config.finalCtaLead}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Asignación de gestor en 24 h laborables. Área de cliente y contacto directo hasta la entrega inscrita.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
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
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <AcompanamientoCompraParkingTrasteroLocalCityLinks />
            </div>
          </section>

          <section className="px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-xl font-bold text-[#1E293B]">Servicios relacionados en {config.city}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {showCompraLocal ? (
                  <Link
                    href={localServicioCompletoCompraHref(compraSlug)}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
                  >
                    <p className="font-semibold text-[#1E293B]">Compra vivienda en {config.city}</p>
                    <p className="mt-1 text-sm text-[#64748b]">{SERVICIO_COMPLETO_CV_PRICE_LABEL} IVA incl.</p>
                  </Link>
                ) : null}
                {showGestoria ? (
                  <Link
                    href={`${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${gestoriaSlug}`}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
                  >
                    <p className="font-semibold text-[#1E293B]">Gestoría inmobiliaria en {config.city}</p>
                    <p className="mt-1 text-sm text-[#64748b]">Guías y servicios locales</p>
                  </Link>
                ) : null}
              </div>
              <p className="mt-6 text-center text-sm text-[#64748b]">
                <Link
                  href="/servicios/acompanamiento-compra-parking-trastero"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Ver servicio nacional parking y trastero
                </Link>
              </p>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
