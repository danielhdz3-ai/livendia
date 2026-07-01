import { CalculadoraAhorroVendedor } from "@/components/calculadora-ahorro-vendedor";
import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { VentaPisoParticularSinAgenciaLocalCityLinks } from "@/components/venta-piso-particular-sin-agencia-local-city-links";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  CONTRATO_ARRAS_LOCAL_PRICE_LABEL,
  GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_CENTS,
  SERVICIO_COMPLETO_CV_PRICE_EUR,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  CONTRATO_ARRAS_LOCAL_BASE,
  isContratoArrasLocalSlugPublished,
  localContratoArrasHref,
} from "@/lib/contrato-arras-local-cities";
import {
  GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE,
  isGestionDocumentalVendedorLocalSlugPublished,
  localGestionDocumentalVendedorHref,
} from "@/lib/gestion-documental-vendedor-local-cities";
import {
  GESTORIA_INMOBILIARIA_LOCAL_BASE,
  isGestoriaInmobiliariaLocalSlugPublished,
} from "@/lib/gestoria-inmobiliaria-local-cities";
import { buildVentaPisoParticularLocalSchemaGraph } from "@/lib/service-schema";
import type { VentaPisoParticularLocalLandingConfig } from "@/lib/venta-piso-particular-sin-agencia-local-cities";
import {
  VENTA_PARTICULAR_BENEFITS,
  VENTA_PARTICULAR_COMPARISON_ROWS,
  VENTA_PARTICULAR_DOCUMENTATION,
  VENTA_PARTICULAR_NOT_AGENCY,
  VENTA_PARTICULAR_PROCESS_STEPS,
  VENTA_PARTICULAR_WHAT_LIVENDIA_DOES,
} from "@/lib/venta-piso-particular-sin-agencia-local-shared";
import { localVenderPisoSinAgenciaHref } from "@/lib/vender-piso-sin-agencia-local-cities";
import { PILLAR_BARCELONA_PATH } from "@/lib/pillar-pages/vender-piso-sin-inmobiliaria-barcelona";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  ClipboardList,
  FileSearch,
  Handshake,
  MessageCircle,
  Shield,
  UserCheck,
  XCircle,
  MapPin,
  Quote,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const HERO_IMAGE = "/images/contratodealquiler.jpg";

const STEP_ICONS = [ClipboardList, FileSearch, Shield, UserCheck, Handshake, Shield, CheckCircle] as const;

function LocalVentaParticularJsonLd({
  path,
  city,
  administrativeArea,
  priceCents,
}: {
  path: string;
  city: string;
  administrativeArea: string;
  priceCents: number;
}) {
  const { service, breadcrumb } = buildVentaPisoParticularLocalSchemaGraph({
    path,
    city,
    administrativeArea,
    priceCents,
  });
  const graph = {
    "@context": "https://schema.org",
    "@graph": [service, breadcrumb],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export async function VentaPisoParticularSinAgenciaLocalSeoLanding({
  config,
}: {
  config: VentaPisoParticularLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-venta") ?? null;
  const priceEur = service ? service.price_cents / 100 : SERVICIO_COMPLETO_CV_PRICE_EUR;
  const priceCents = service?.price_cents ?? SERVICIO_COMPLETO_CV_PRICE_CENTS;
  const priceLabel = resolveServicePriceLabel(service, SERVICIO_COMPLETO_CV_PRICE_LABEL);
  const seo = config.seoContent;

  const showArrasLocal = isContratoArrasLocalSlugPublished(config.arrasLocalSlug);
  const showGestoria = isGestoriaInmobiliariaLocalSlugPublished(config.gestoriaSlug);
  const showGestionDoc = isGestionDocumentalVendedorLocalSlugPublished(config.gestoriaSlug);

  const arrasHref = showArrasLocal
    ? localContratoArrasHref(config.arrasLocalSlug)
    : CONTRATO_ARRAS_LOCAL_BASE;
  const gestoriaHref = showGestoria
    ? `${GESTORIA_INMOBILIARIA_LOCAL_BASE}/${config.gestoriaSlug}`
    : GESTORIA_INMOBILIARIA_LOCAL_BASE;
  const gestionDocHref = showGestionDoc
    ? localGestionDocumentalVendedorHref(config.gestoriaSlug)
    : GESTION_DOCUMENTAL_VENDEDOR_LOCAL_BASE;

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, ya tengo comprador particular para mi piso en ${config.city} y quiero vender sin agencia con gestor Livendia (${priceLabel} IVA incl.).`,
  )}`;

  return (
    <ServicePurchaseProvider service={service}>
      <LocalVentaParticularJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
        priceCents={priceCents}
      />
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#0F172A] via-[#1E3A8A] to-[#1E40AF] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[680px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <p className="mb-4 inline-block self-start rounded-full bg-[#D4AF37]/90 px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-[#1E293B] sm:text-sm">
                    {config.heroBadge}
                  </p>
                  <h1 className="text-2xl font-extrabold leading-snug sm:text-4xl lg:text-5xl">
                    {config.heroH1}
                  </h1>
                  <p className="mt-4 text-xl font-semibold text-[#F4E4A6] sm:text-2xl">{config.heroH2}</p>
                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg">{seo.heroSubtitle}</p>
                  <div className="mt-8 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-blue-50">
                    {priceLabel} IVA incl. · Gestor dedicado · Sin comisión de agencia
                  </div>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#D4AF37] px-8 py-4 text-base font-bold text-[#1E293B] shadow-xl hover:bg-[#F4E4A6]">
                      Solicitar asesoramiento
                    </ContratarServicioButton>
                    <a
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center justify-center gap-2 rounded-full border-2 border-white/80 px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" aria-hidden />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>
                <div className="relative order-2 h-64 sm:h-80 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src={HERO_IMAGE}
                    alt={`Venta de piso entre particulares en ${config.city} — gestor Livendia`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F172A]/40 to-transparent lg:bg-gradient-to-l lg:from-[#1E40AF]/30 lg:to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* Qué NO somos / qué SÍ */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Qué hace Livendia cuando ya tienes comprador en {config.city}
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#475569]">
                No somos inmobiliaria. No buscamos compradores. Coordinamos toda la gestión documental y jurídica
                hasta la firma en notaría.
              </p>
              <div className="mt-10 grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border border-red-100 bg-red-50/50 p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#991B1B]">
                    <XCircle className="h-5 w-5" aria-hidden />
                    Lo que no hacemos
                  </h3>
                  <ul className="mt-4 space-y-2">
                    {VENTA_PARTICULAR_NOT_AGENCY.map((line) => (
                      <li key={line} className="flex gap-2 text-sm text-[#475569]">
                        <span className="text-red-500" aria-hidden>
                          ✕
                        </span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-emerald-100 bg-emerald-50/50 p-6">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-[#047857]">
                    <CheckCircle className="h-5 w-5" aria-hidden />
                    Lo que sí incluye tu gestor
                  </h3>
                  <ul className="mt-4 space-y-4">
                    {VENTA_PARTICULAR_WHAT_LIVENDIA_DOES.map((item) => (
                      <li key={item.title}>
                        <p className="font-semibold text-[#1E293B]">{item.title}</p>
                        <p className="mt-1 text-sm text-[#475569]">{item.body}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="prose prose-slate mx-auto mt-12 max-w-3xl">
                {seo.introParagraphs.map((p) => (
                  <p key={p.slice(0, 40)} className="text-base leading-relaxed text-[#475569]">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Proceso 7 pasos */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Proceso paso a paso con tu gestor en {config.city}
              </h2>
              <ol className="mt-12 space-y-6">
                {VENTA_PARTICULAR_PROCESS_STEPS.map((step, i) => {
                  const Icon = STEP_ICONS[i] ?? ClipboardList;
                  return (
                    <li
                      key={step.step}
                      className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
                    >
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-lg font-bold text-white">
                        {step.step}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <Icon className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
                          <h3 className="text-lg font-bold text-[#1E293B]">{step.title}</h3>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{step.body}</p>
                      </div>
                    </li>
                  );
                })}
              </ol>
            </div>
          </section>

          {/* Documentación */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                ¿Qué documentación revisamos?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#475569]">
                Checklist personalizado según tu inmueble en {config.city}. Tu gestor obtiene, verifica y cruza
                cada documento antes de notaría.
              </p>
              <ul className="mt-10 space-y-4">
                {VENTA_PARTICULAR_DOCUMENTATION.map((doc) => (
                  <li key={doc.title} className="flex gap-3 rounded-xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200">
                    <FileSearch className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                    <div>
                      <p className="font-semibold text-[#1E293B]">{doc.title}</p>
                      <p className="mt-1 text-sm text-[#64748b]">{doc.body}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Comparativa 3 columnas */}
          <section className="border-b border-slate-200 bg-[#1E3A8A] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold sm:text-3xl">
                Vender con inmobiliaria vs solo vs Livendia
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-blue-100">
                Si ya tienes comprador particular, la agencia cobra comisión por algo que Livendia cubre por tarifa
                plana.
              </p>
              <div className="mt-10 overflow-x-auto rounded-2xl ring-1 ring-white/20">
                <table className="w-full min-w-[640px] text-left text-sm">
                  <thead className="bg-[#0F172A]">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Concepto</th>
                      <th className="px-4 py-3 font-semibold">Con inmobiliaria</th>
                      <th className="px-4 py-3 font-semibold">Completamente solo</th>
                      <th className="px-4 py-3 font-semibold text-[#F4E4A6]">Particulares + Livendia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10 bg-[#1E40AF]/50">
                    {VENTA_PARTICULAR_COMPARISON_ROWS.map((row) => (
                      <tr key={row.aspect}>
                        <td className="px-4 py-3 font-medium">{row.aspect}</td>
                        <td className="px-4 py-3 text-blue-100">{row.agencia}</td>
                        <td className="px-4 py-3 text-blue-100">{row.solo}</td>
                        <td className="px-4 py-3 font-medium text-[#F4E4A6]">{row.livendia}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Beneficios */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Beneficios de vender entre particulares con gestor Livendia
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {VENTA_PARTICULAR_BENEFITS.map((b) => (
                  <div key={b.title} className="rounded-2xl bg-[#F8FAFC] p-6 ring-1 ring-slate-200">
                    <Shield className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                    <h3 className="mt-4 font-bold text-[#1E293B]">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{b.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Calculadora */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                ¿Cuánto ahorras vendiendo sin comisión en {config.city}?
              </h2>
              <div className="mt-10">
                <CalculadoraAhorroVendedor city={config.city} precioMedio={seo.precioMedio} />
              </div>
            </div>
          </section>

          {/* Contenido local */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">{seo.localHeading}</h2>
              {seo.localParagraphs.map((p) => (
                <p key={p.slice(0, 50)} className="mt-4 text-base leading-relaxed text-[#475569]">
                  {p}
                </p>
              ))}
            </div>
          </section>

          {/* Casuística */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Qué suele complicarse en ventas entre particulares en {config.city}
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

          {/* Barrios */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <MapPin className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Barrios de {config.city} donde acompañamos vendedores particulares
              </h2>
              <p className="mt-4 text-lg text-[#475569]">{seo.barriosIntro}</p>
              <div className="mt-8 space-y-4">
                {seo.barrios.map((barrio) => (
                  <div key={barrio.name} className="rounded-xl bg-[#F8FAFC] p-5 ring-1 ring-slate-200">
                    <h3 className="font-bold text-[#1A4FBF]">{barrio.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">{barrio.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonios */}
          <section className="border-b border-slate-200 bg-[#1E3A8A] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold sm:text-3xl">{config.testimonialsTitle}</h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {config.testimonials.map((t) => (
                  <blockquote key={t.author} className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/20">
                    <Quote className="h-8 w-8 text-[#D4AF37]" aria-hidden />
                    <p className="mt-4 text-sm leading-relaxed text-blue-50">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4 text-sm font-semibold text-[#F4E4A6]">
                      {t.author}
                      <span className="block font-normal text-blue-200">{t.role}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          {/* Enlaces internos */}
          <section className="border-b border-slate-200 bg-white px-4 py-12 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-lg font-bold text-[#1E293B]">Servicios relacionados</h2>
              <nav aria-label="Enlaces servicios relacionados" className="mt-4 flex flex-wrap gap-3 text-sm">
                <Link href={gestoriaHref} className="font-semibold text-[#1A4FBF] hover:underline">
                  Gestoría inmobiliaria
                </Link>
                <Link href={arrasHref} className="font-semibold text-[#1A4FBF] hover:underline">
                  Contrato de arras{showArrasLocal ? ` en ${config.city}` : ""}
                </Link>
                <Link href={gestionDocHref} className="font-semibold text-[#1A4FBF] hover:underline">
                  Gestión documental vendedor ({GESTION_DOCUMENTAL_VENDEDOR_PRICE_LABEL})
                </Link>
                <Link
                  href={localVenderPisoSinAgenciaHref("barcelona")}
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Vender sin agencia Barcelona
                </Link>
                <Link href={PILLAR_BARCELONA_PATH} className="font-semibold text-[#1A4FBF] hover:underline">
                  Guía vender sin inmobiliaria
                </Link>
                <Link href="/blog" className="font-semibold text-[#1A4FBF] hover:underline">
                  Blog Livendia
                </Link>
                <Link href="/servicios/revision-documental-post-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                  Revisión documental post-arras
                </Link>
              </nav>
              <p className="mt-4 text-xs text-[#64748b]">
                Arras sueltas desde {CONTRATO_ARRAS_LOCAL_PRICE_LABEL} si solo necesitas ese trámite. Servicio
                completo de venta: {priceLabel} IVA incl.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                title={`Preguntas frecuentes — venta de piso de particular sin agencia en ${config.city}`}
                subtitle="Respuestas para vendedores que ya tienen comprador y buscan gestor inmobiliario."
                items={[...config.faq]}
              />
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] px-4 py-16 text-white sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-2xl font-extrabold sm:text-3xl">{config.finalCtaLead}</h2>
              <p className="mt-4 text-lg text-blue-100">
                Contrata el servicio completo por {priceLabel} IVA incl. — gestor asignado en 24 h laborables.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-[#D4AF37] px-8 py-4 text-base font-bold text-[#1E293B] hover:bg-[#F4E4A6]">
                  Solicitar asesoramiento
                </ContratarServicioButton>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 font-semibold hover:bg-white/10"
                >
                  <MessageCircle className="h-5 w-5" aria-hidden />
                  WhatsApp
                </a>
              </div>
            </div>
          </section>

          <VentaPisoParticularSinAgenciaLocalCityLinks currentSlug={config.slug} />
        </main>

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
