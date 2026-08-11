import { CalculadoraAhorroVendedor } from "@/components/calculadora-ahorro-vendedor";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { FaqSection } from "@/components/faq-section";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_CENTS,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_SLUG,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  isContratoArrasLocalSlugPublished,
  localContratoArrasHref,
} from "@/lib/contrato-arras-local-cities";
import type { GestionDocumentalVendedorLocalLandingConfig } from "@/lib/gestion-documental-vendedor-local-cities";
import {
  GESTION_VENDEDOR_COMPARISON_ROWS,
  GESTION_VENDEDOR_EMPATHY_CARDS,
  GESTION_VENDEDOR_INCLUDES,
  GESTION_VENDEDOR_PROCESS_STEPS,
} from "@/lib/gestion-documental-vendedor-local-shared";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  isGestoriaInmobiliariaLocalSlugPublished,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import {
  isServicioCompletoVentaLocalSlugPublished,
  localServicioCompletoVentaHref,
} from "@/lib/servicio-completo-venta-local-cities";
import { buildGestionVendedorLocalSchemaGraph } from "@/lib/service-schema";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ClipboardList,
  FileSearch,
  MessageCircle,
  Phone,
  Shield,
  UserCheck,
  MapPin,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

const STEP_ICONS = [ClipboardList, FileSearch, Shield, Phone] as const;

function LocalGestionVendedorJsonLd({
  path,
  city,
  administrativeArea,
}: {
  path: string;
  city: string;
  administrativeArea: string;
}) {
  const { service, breadcrumb } = buildGestionVendedorLocalSchemaGraph({
    path,
    city,
    administrativeArea,
    priceCents: GESTION_DOCUMENTAL_VENDEDOR_PRICE_CENTS,
  });
  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export async function GestionDocumentalVendedorLocalSeoLanding({
  config,
}: {
  config: GestionDocumentalVendedorLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === GESTION_DOCUMENTAL_VENDEDOR_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL);
  const seo = config.seoContent;
  const arrasSlug = config.arrasLocalSlug ?? config.slug;
  const ventaSlug = config.ventaLocalSlug ?? config.slug;
  const gestoriaSlug = config.gestoriaSlug ?? config.slug;
  const showArrasLocal = isContratoArrasLocalSlugPublished(arrasSlug);
  const showVentaLocal = isServicioCompletoVentaLocalSlugPublished(ventaSlug);
  const showGestoria = isGestoriaInmobiliariaLocalSlugPublished(gestoriaSlug);

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, vendí mi piso en ${config.city} entre particulares y quiero contratar el gestor documental Livendia (350 €) de arras a escritura.`,
  )}`;

  const heroImage = config.heroImage ?? "/images/gestoria20.jpg";

  const arrasHref = showArrasLocal
    ? localContratoArrasHref(arrasSlug)
    : `${CONTRATO_ARRAS_LOCAL_BASE}`;

  return (
    <ServicePurchaseProvider service={service}>
      <LocalGestionVendedorJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
      />
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />

        <main className="flex-1">
          {/* Bloque 1 — Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <div className="mb-6 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    {config.heroBadge ?? `Vendedor · ${config.city}`}
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    {config.heroH1}
                  </h1>
                  {seo ? (
                    <p className="mt-6 text-lg leading-relaxed text-blue-50 sm:text-xl">{seo.heroSubtitle}</p>
                  ) : null}
                  <div className="mt-8 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-blue-50">
                    {priceLabel} IVA incluido · Gestor dedicado · Arras a escritura
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50">
                      Contratar gestor — {priceLabel}
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-placement={`gestion_vendedor_${config.slug}_whatsapp`}
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      Consultar antes de contratar
                    </a>
                  </div>
                </div>
                <div className="relative order-2 h-56 sm:h-72 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src={heroImage}
                    alt={`Gestor documental para vendedor en ${config.city} — arras a escritura entre particulares`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Bloque 2 — Empatía */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Tienes comprador. ¿Y ahora qué?
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {GESTION_VENDEDOR_EMPATHY_CARDS.map((card) => (
                  <div
                    key={card.title}
                    className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200"
                  >
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
                Ese trabajo es el nuestro. Tú cierras la venta, nosotros gestionamos el papeleo.
              </p>
            </div>
          </section>

          {/* Bloque 3 — Proceso */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Qué gestiona tu gestor Livendia en {config.city}
              </h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {GESTION_VENDEDOR_PROCESS_STEPS.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? ClipboardList;
                  const description =
                    i === 1 && seo?.step2LocalNote
                      ? `${step.description} ${seo.step2LocalNote}`
                      : step.description;
                  return (
                    <div key={step.title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                        {step.phase}
                      </span>
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A4FBF]/10">
                        <Icon className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                      </div>
                      <h3 className="mt-4 font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Bloque 4 — Qué incluye */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Todo lo que incluye el servicio de {priceLabel}
              </h2>
              <ul className="mt-10 space-y-4">
                {GESTION_VENDEDOR_INCLUDES.map((item) => (
                  <li key={item.title} className="flex gap-3 rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-slate-200">
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                    <div>
                      <p className="font-semibold text-[#1E293B]">{item.title}</p>
                      <p className="mt-1 text-sm text-[#64748b]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-6">
                <p className="text-sm leading-relaxed text-[#475569]">
                  El contrato de arras no está incluido en este servicio. Si aún no lo tienes, puedes redactarlo
                  en{" "}
                  <Link href={arrasHref} className="font-semibold text-[#1A4FBF] hover:underline">
                    {showArrasLocal
                      ? `contrato de arras en ${config.city}`
                      : "contrato de arras por ciudad"}
                  </Link>{" "}
                  por {CONTRATO_ARRAS_LOCAL_PRICE_LABEL} adicionales.
                </p>
              </div>
            </div>
          </section>

          {/* Bloque 5 — Calculadora */}
          {seo ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  ¿Cuánto te ahorras vendiendo sin agencia en {config.city}?
                </h2>
                <div className="mt-10">
                  <CalculadoraAhorroVendedor city={config.city} precioMedio={seo.precioMedio} />
                </div>
              </div>
            </section>
          ) : null}

          {/* Bloque 6 — Casuística local */}
          {seo?.casuistica.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Qué suele complicarse en las ventas entre particulares en {config.city}
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

          {/* Barrios y zonas */}
          {seo?.barrios?.length ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl text-center">
                <MapPin className="mx-auto h-8 w-8 text-[#1A4FBF]" aria-hidden />
                <h2 className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Barrios y zonas donde gestionamos la venta entre particulares en {config.city}
                </h2>
                {seo.barriosIntro ? (
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748b] sm:text-lg">
                    {seo.barriosIntro}
                  </p>
                ) : null}
                <ul className="mt-8 flex flex-wrap justify-center gap-2">
                  {seo.barrios.map((zone) => (
                    <li
                      key={zone}
                      className="rounded-full bg-white px-4 py-2 text-sm font-medium text-[#1E293B] ring-1 ring-slate-200"
                    >
                      {zone}
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          ) : null}

          {/* Bloque 7 — Comparativa */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Gestor Livendia vs gestionar la documentación tú solo
              </h2>
              <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-[#1A4FBF] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Concepto</th>
                      <th className="px-4 py-3 font-semibold">Sin gestor</th>
                      <th className="px-4 py-3 font-semibold">Con gestor Livendia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {GESTION_VENDEDOR_COMPARISON_ROWS.map((row) => (
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

          {/* Bloque 8 — FAQ */}
          {config.faq?.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas frecuentes de vendedores en ${config.city}`}
                  subtitle="Respuestas antes de contratar tu gestor de arras a escritura."
                  items={[...config.faq]}
                />
              </div>
            </section>
          ) : null}


          <ServiceMidPageContactSection serviceLabel={`Gestión documental para vendedores en ${config.city}`} />

          {/* Bloque 9 — CTA final */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <UserCheck className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{config.finalCtaLead}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                El primer contacto es sin compromiso: tu gestor hace un diagnóstico inicial y te indica qué
                documentos necesitas en {config.city}. Asignación en 24 h laborables.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar gestor — {priceLabel} IVA incl.
                </ContratarServicioButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  Hablar con un gestor por WhatsApp
                </a>
              </div>
            </div>
          </section>

          {/* Bloque 10 — Servicios relacionados */}
          <section className="px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-xl font-bold text-[#1E293B]">Servicios relacionados en {config.city}</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {showArrasLocal ? (
                  <Link
                    href={localContratoArrasHref(arrasSlug)}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
                  >
                    <p className="font-semibold text-[#1E293B]">Contrato de arras en {config.city}</p>
                    <p className="mt-1 text-sm text-[#64748b]">{CONTRATO_ARRAS_LOCAL_PRICE_LABEL} IVA incl.</p>
                  </Link>
                ) : null}
                {showVentaLocal ? (
                  <Link
                    href={localServicioCompletoVentaHref(ventaSlug)}
                    className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 transition hover:ring-[#1A4FBF]"
                  >
                    <p className="font-semibold text-[#1E293B]">Venta completa en {config.city}</p>
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
                  href="/servicios/gestion-documental-vendedor"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Ver gestor documental vendedor (España)
                </Link>
              </p>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections city={config.city} />


        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
