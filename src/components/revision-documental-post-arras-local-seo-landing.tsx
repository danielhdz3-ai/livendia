import { FaqSection } from "@/components/faq-section";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_EUR,
  REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL,
  REVISION_DOCUMENTAL_POST_ARRAS_SLUG,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  isGestoriaInmobiliariaLocalSlugPublished,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import type { RevisionDocumentalPostArrasLocalLandingConfig } from "@/lib/revision-documental-post-arras-local-cities";
import {
  getRevisionPostArrasBarcelonaMetroCities,
  isRevisionPostArrasBarcelonaMetroSlug,
  localRevisionDocumentalPostArrasHref,
} from "@/lib/revision-documental-post-arras-local-cities";
import {
  REVISION_POST_ARRAS_COMPARISON_HEADING,
  REVISION_POST_ARRAS_COMPARISON_ROWS,
  REVISION_POST_ARRAS_HOW_STEPS,
  REVISION_POST_ARRAS_NOT_INCLUDED,
  revisionPostArrasComparisonCaption,
} from "@/lib/revision-documental-post-arras-local-shared";
import {
  localServicioCompletoCompraHref,
  isServicioCompletoCompraLocalSlugPublished,
} from "@/lib/servicio-completo-compra-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  AlertCircle,
  MessageCircle,
  FileText,
  Search,
  ClipboardCheck,
  Phone,
  Shield,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { BUSINESS_EMAIL, buildBusinessPostalAddress, getBusinessAddressDisplayLine, getBusinessMapsExternalUrl } from "@/lib/business-nap";
import { getContactPhoneE164Plus } from "@/lib/contact";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

const STEP_ICONS = [FileText, Search, ClipboardCheck, Phone] as const;

function LocalRevisionPostArrasJsonLd({
  config,
}: {
  config: RevisionDocumentalPostArrasLocalLandingConfig;
}) {
  const base = getSiteUrl().replace(/\/$/, "");
  const pageUrl = `${base}${config.path}`;
  const areaServed = {
    "@type": "City",
    name: config.city,
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: config.schemaAdministrativeArea,
    },
  };

  const service = {
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    name: `Pack Revisión Documental Post-Arras en ${config.city}`,
    description:
      `Verificación documental tras firmar arras en ${config.city}: actas, derramas, ITE, nota registral y urbanismo. Informe PDF + llamada de veredicto. ${REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incluido.`,
    serviceType: "Revisión documental post-arras",
    provider: {
      "@type": "Organization",
      name: "Livendia",
      url: base,
    },
    areaServed,
    offers: {
      "@type": "Offer",
      price: REVISION_DOCUMENTAL_POST_ARRAS_PRICE_EUR,
      priceCurrency: "EUR",
      description: "IVA incluido · Pago único",
      url: pageUrl,
    },
    url: pageUrl,
    inLanguage: "es-ES",
  };

  const graph: Record<string, unknown>[] = [service];

  if (config.includeLocalBusinessSchema) {
    graph.push({
      "@type": ["LocalBusiness", "ProfessionalService"],
      "@id": `${pageUrl}#localbusiness`,
      name: `Livendia — Revisión documental post-arras en ${config.city}`,
      description: `Gestoría inmobiliaria Livendia: revisión documental post-arras para compradores en ${config.city}. Despacho en ${getBusinessAddressDisplayLine()}.`,
      url: pageUrl,
      telephone: getContactPhoneE164Plus(),
      email: BUSINESS_EMAIL,
      image: `${base}/icons/icon-512.png`,
      priceRange: "€€",
      address: buildBusinessPostalAddress(),
      areaServed,
      parentOrganization: { "@id": `${base}/#organization` },
    });
  }

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }) }} />
  );
}

export async function RevisionDocumentalPostArrasLocalSeoLanding({
  config,
}: {
  config: RevisionDocumentalPostArrasLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === REVISION_DOCUMENTAL_POST_ARRAS_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL);
  const seo = config.seoContent;
  const compraSlug = config.compraLocalSlug ?? config.slug;
  const gestoriaSlug = config.gestoriaSlug ?? config.slug;
  const showCompraLocal = isServicioCompletoCompraLocalSlugPublished(compraSlug);
  const showGestoria = isGestoriaInmobiliariaLocalSlugPublished(gestoriaSlug);

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, firmé arras en ${config.city} y quiero contratar el Pack Revisión Documental Post-Arras Livendia (350 €).`,
  )}`;

  const heroBullets = config.heroBullets ?? [
    "Análisis en 48 h · informe en 3-5 días",
    "Actas, derramas, ITE y nota registral",
    "Llamada de veredicto con gestor",
  ];
  const faqItems = config.faq ?? [];
  const showBarcelonaMetroLinks = isRevisionPostArrasBarcelonaMetroSlug(config.slug);
  const barcelonaMetroCities = showBarcelonaMetroLinks ? getRevisionPostArrasBarcelonaMetroCities() : [];
  const officeAddress = getBusinessAddressDisplayLine();
  const mapsUrl = getBusinessMapsExternalUrl();

  return (
    <ServicePurchaseProvider service={service}>
      <LocalRevisionPostArrasJsonLd config={config} />
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />

        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 lg:grid-cols-2">
                <div>
                  <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    {config.heroBadge ?? `Post-arras · ${config.city}`}
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                    {config.heroH1 ??
                      `Revisión documental post-arras en ${config.city}: comprueba antes de escriturar — ${priceLabel}`}
                  </h1>
                  {seo ? (
                    <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">{seo.introParagraph}</p>
                  ) : null}
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl">{priceLabel}</span>
                    <span className="text-lg text-blue-200">IVA incluido</span>
                  </div>
                  <ul className="mt-6 space-y-2">
                    {heroBullets.map((line) => (
                      <li key={line} className="flex items-start gap-2 text-blue-50">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                        <span>{line}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                      Contratar pack · {priceLabel}
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-analytics-placement={`revision_post_arras_${config.slug}_whatsapp`}
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      WhatsApp
                    </a>
                  </div>
                </div>
                <div className="relative h-[280px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 lg:h-[380px]">
                  <Image
                    src="/images/gestoria20.jpg"
                    alt={`Revisión documental post-arras en ${config.city} antes de escriturar`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          {config.includeLocalBusinessSchema ? (
            <section className="border-b border-slate-200 bg-[#EFF6FF] px-4 py-12 sm:px-6">
              <div className="mx-auto max-w-4xl rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#1A4FBF]/20 sm:p-8">
                <div className="flex gap-4">
                  <MapPin className="h-8 w-8 shrink-0 text-[#1A4FBF]" aria-hidden />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-[#1A4FBF]">
                      Despacho Livendia · Les Corts
                    </p>
                    <h2 className="mt-2 text-xl font-bold text-[#1E293B] sm:text-2xl">
                      Proximidad real en Carrer de Mejía Lequerica, 44
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-[#475569] sm:text-base">
                      Gestoría inmobiliaria con sede física en Les Corts (08028 Barcelona). El pack post-arras se
                      tramita online con panel y gestor dedicado; si compras en Pedralbes, la Maternitat o la Zona
                      Universitària, trabajamos con la misma dirección que figura en nuestra ficha de Google Business.
                    </p>
                    <p className="mt-4 text-sm font-medium text-[#1E293B]">
                      <a href={mapsUrl} target="_blank" rel="noopener noreferrer" className="text-[#1A4FBF] hover:underline">
                        {officeAddress}
                      </a>
                    </p>
                    <p className="mt-4 text-sm text-[#64748b]">
                      <Link href="/contacto" className="font-semibold text-[#1A4FBF] hover:underline">
                        Contacto y mapa del despacho
                      </Link>
                      {" · "}
                      <Link href={`${GESTORIA_INMOBILIARIA_LOCAL_BASE}/barcelona`} className="font-semibold text-[#1A4FBF] hover:underline">
                        Gestoría inmobiliaria Barcelona
                      </Link>
                    </p>
                  </div>
                </div>
              </div>
            </section>
          ) : null}

          {seo?.problems.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Qué problemas detectamos habitualmente en {config.city}
                </h2>
                <div className="mt-8 space-y-6">
                  {seo.problems.map((problem) => (
                    <div
                      key={problem.title}
                      className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200"
                    >
                      <h3 className="text-lg font-bold text-[#1E293B]">{problem.title}</h3>
                      <p className="mt-3 leading-relaxed text-[#475569]">{problem.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          {seo?.reviewItems.length ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  Qué revisamos en tu operación en {config.city}
                </h2>
                <ul className="mt-8 space-y-4">
                  {seo.reviewItems.map((item, idx) => (
                    <li key={item} className="flex gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                        {idx + 1}
                      </span>
                      <span className="text-[#475569] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm font-medium text-[#64748b]">
                  Plazo: análisis en 48 h · entrega informe en 3-5 días laborables · {priceLabel} IVA incluido
                </p>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">Cómo funciona</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {REVISION_POST_ARRAS_HOW_STEPS.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? FileText;
                  return (
                    <div key={step.title} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">
                        Paso {step.step}
                      </span>
                      <div className="mt-3 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1A4FBF]/10">
                        <Icon className="h-6 w-6 text-[#1A4FBF]" />
                      </div>
                      <h3 className="mt-4 font-bold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{step.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {seo?.targetAudienceParagraph ? (
            <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                  ¿Para quién es este servicio en {config.city}?
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-[#475569]">{seo.targetAudienceParagraph}</p>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                {REVISION_POST_ARRAS_COMPARISON_HEADING}
              </h2>
              <p className="mt-3 text-center text-sm text-[#64748b]">{revisionPostArrasComparisonCaption()}</p>
              <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead className="bg-[#1A4FBF] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold"> </th>
                      <th className="px-4 py-3 font-semibold">Revisión post-arras {priceLabel}</th>
                      <th className="px-4 py-3 font-semibold">Servicio completo compra {SERVICIO_COMPLETO_CV_PRICE_LABEL}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-white">
                    {REVISION_POST_ARRAS_COMPARISON_ROWS.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-medium text-[#1E293B]">{row.aspect}</td>
                        <td className="px-4 py-3 text-[#475569]">{row.revision}</td>
                        <td className="px-4 py-3 text-[#475569]">{row.completo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-10 w-10 shrink-0 text-amber-700" aria-hidden />
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">Qué no incluye este pack</h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-relaxed text-[#475569]">
                  {REVISION_POST_ARRAS_NOT_INCLUDED.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="mt-4 text-sm text-[#475569]">
                  Si aún no has firmado arras, valora el{" "}
                  <Link href="/servicios/acompanamiento-reserva-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                    acompañamiento desde la reserva (424 €)
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          {config.faq?.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas frecuentes en ${config.city}`}
                  subtitle="Respuestas para compradores que acaban de firmar arras."
                  items={[...config.faq]}
                />
              </div>
            </section>
          ) : null}

          {showBarcelonaMetroLinks ? (
            <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-xl font-bold text-[#1E293B] sm:text-2xl">
                  Revisión post-arras en Barcelona y área metropolitana
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b] sm:text-base">
                  Mismo pack de {priceLabel} IVA incl. en la capital y municipios del entorno. Enlaza con la landing de
                  tu ciudad o con la{" "}
                  <Link href={`${GESTORIA_INMOBILIARIA_LOCAL_BASE}/barcelona`} className="font-semibold text-[#1A4FBF] hover:underline">
                    gestoría inmobiliaria en Barcelona
                  </Link>
                  .
                </p>
                <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                  {barcelonaMetroCities.map((metroCity) => {
                    const href = localRevisionDocumentalPostArrasHref(metroCity.slug);
                    const isCurrent = metroCity.slug === config.slug;
                    return (
                      <li key={metroCity.slug}>
                        <Link
                          href={href}
                          aria-current={isCurrent ? "page" : undefined}
                          className={`group flex h-full flex-col rounded-xl p-4 ring-1 transition ${
                            isCurrent
                              ? "bg-[#EFF6FF] ring-[#1A4FBF]/40"
                              : "bg-[#F8FAFC] ring-slate-200 hover:ring-[#1A4FBF]/40"
                          }`}
                        >
                          <span className="flex items-center gap-1 font-semibold text-[#1A4FBF] group-hover:underline">
                            {metroCity.city}
                            {isCurrent ? (
                              <span className="text-xs font-normal text-[#64748b]">(estás aquí)</span>
                            ) : (
                              <ArrowRight className="h-4 w-4" aria-hidden />
                            )}
                          </span>
                          <span className="mt-1 text-xs leading-relaxed text-[#64748b]">
                            {metroCity.slug === "les-corts"
                              ? "Despacho en Mejía Lequerica 44 · revisión post-arras"
                              : `Pack revisión documental post-arras en ${metroCity.city}`}
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </section>
          ) : null}

          <ServiceMidPageContactSection serviceLabel={`Revisión documental post-arras en ${config.city}`} />

          <section className="border-b border-slate-200 bg-white px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-4xl text-center text-sm text-[#475569]">
              <p>
                <Link href="/servicios/acompanamiento-reserva-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                  Acompañamiento desde la reserva
                </Link>
                {showCompraLocal ? (
                  <>
                    {" · "}
                    <Link
                      href={localServicioCompletoCompraHref(compraSlug)}
                      className="font-semibold text-[#1A4FBF] hover:underline"
                    >
                      Servicio completo de compra en {config.city}
                    </Link>
                  </>
                ) : null}
                {showGestoria ? (
                  <>
                    {" · "}
                    <Link
                      href={`${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${gestoriaSlug}`}
                      className="font-semibold text-[#1A4FBF] hover:underline"
                    >
                      Gestoría inmobiliaria en {config.city}
                    </Link>
                  </>
                ) : null}
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <Shield className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">
                {config.finalCtaLead ?? `¿Ya firmaste arras en ${config.city}? Contrata el pack por ${priceLabel}.`}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Informe en 48 h · entrega completa en 3-5 días laborables · asesoramiento hasta escritura.
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
              <p className="mt-6 text-sm text-blue-200">
                <Link href="/servicios/revision-documental-post-arras" className="underline hover:text-white">
                  Ver pack revisión post-arras (España)
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
