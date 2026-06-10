import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import type { ContratoAlquilerHabitacionLocalLandingConfig } from "@/lib/contrato-alquiler-habitacion-local-cities";
import {
  HABITACION_INCLUDES,
  HABITACION_PROCESS_STEPS,
  WHY_CONTRACT_MATTERS,
} from "@/lib/contrato-alquiler-habitacion-local-shared";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_CENTS,
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_HABITACION_SLUG,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { localContratoAlquilerHref } from "@/lib/contrato-alquiler-local-cities";
import { buildContratoHabitacionLocalSchemaGraph } from "@/lib/service-schema";
import Image from "next/image";
import Link from "next/link";
import {
  AlertCircle,
  CheckCircle,
  FileText,
  MapPin,
  MessageCircle,
  Users,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

function LocalHabitacionJsonLd({
  path,
  city,
  administrativeArea,
}: {
  path: string;
  city: string;
  administrativeArea: string;
}) {
  const { service, breadcrumb } = buildContratoHabitacionLocalSchemaGraph({
    path,
    city,
    administrativeArea,
    priceCents: CONTRATO_ALQUILER_HABITACION_PRICE_CENTS,
  });
  const graph = { "@context": "https://schema.org", "@graph": [service, breadcrumb] };
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }} />
  );
}

export async function ContratoAlquilerHabitacionLocalSeoLanding({
  config,
}: {
  config: ContratoAlquilerHabitacionLocalLandingConfig;
}) {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === CONTRATO_ALQUILER_HABITACION_SLUG) ?? null;
  const priceLabel = resolveServicePriceLabel(service, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL);
  const seo = config.seoContent;
  const heroBullets = config.heroBullets ?? [];

  const waHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    `Hola, quiero contratar un contrato de alquiler de habitación en ${config.city} (120 €).`,
  )}`;

  return (
    <ServicePurchaseProvider service={service}>
      <LocalHabitacionJsonLd
        path={config.path}
        city={config.city}
        administrativeArea={config.schemaAdministrativeArea}
      />
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-10 md:grid-cols-2">
                <div>
                  <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                    {config.heroBadge ?? `Piso compartido · ${config.city}`}
                  </div>
                  <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                    {config.heroH1 ?? `Contrato de alquiler de habitación en ${config.city}`}
                  </h1>
                  {seo ? (
                    <p className="mt-5 text-lg leading-relaxed text-blue-100 sm:text-xl">{seo.heroSubtitle}</p>
                  ) : null}
                  <div className="mt-8 flex items-baseline gap-2">
                    <span className="text-4xl font-extrabold sm:text-5xl">{priceLabel}</span>
                    <span className="text-lg text-blue-200">IVA incluido</span>
                  </div>
                  {heroBullets.length ? (
                    <ul className="mt-6 space-y-2">
                      {heroBullets.map((line) => (
                        <li key={line} className="flex items-start gap-2 text-blue-50">
                          <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                          <span>{line}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                  <div className="mt-8 flex flex-wrap gap-4">
                    <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                      Contratar por {priceLabel}
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
                <div className="relative h-[360px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20 lg:h-[400px]">
                  <Image
                    src="/images/contratos2.jpg"
                    alt={`Contrato de alquiler de habitación en ${config.city}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <div className="flex gap-4">
                <AlertCircle className="h-10 w-10 shrink-0 text-amber-700" aria-hidden />
                <div>
                  <h2 className="text-2xl font-bold text-[#1E293B]">
                    Por qué es imprescindible un contrato en {config.city}
                  </h2>
                  {seo?.localMarketIntro ? (
                    <p className="mt-4 leading-relaxed text-[#475569]">{seo.localMarketIntro}</p>
                  ) : null}
                  <div className="mt-8 grid gap-4 sm:grid-cols-3">
                    {WHY_CONTRACT_MATTERS.map((item) => (
                      <div key={item.title} className="rounded-xl bg-white p-4 ring-1 ring-amber-200/80">
                        <h3 className="font-semibold text-[#1E293B]">{item.title}</h3>
                        <p className="mt-2 text-sm text-[#64748b]">{item.body}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {seo?.zoneGroups.length ? (
            <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-5xl">
                <div className="flex items-center gap-2 text-[#1A4FBF]">
                  <MapPin className="h-6 w-6" aria-hidden />
                  <h2 className="text-2xl font-bold text-[#1E293B]">
                    Contrato de habitación en todos los distritos de Barcelona
                  </h2>
                </div>
                {seo.zonesParagraph ? (
                  <p className="mt-4 text-lg text-[#475569]">{seo.zonesParagraph}</p>
                ) : null}
                <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                  {seo.zoneGroups.map((z) => (
                    <div
                      key={z.district}
                      className="rounded-xl bg-[#F8FAFC] p-4 ring-1 ring-slate-200"
                    >
                      <p className="font-bold text-[#1E293B]">{z.district}</p>
                      <p className="mt-1 text-sm text-[#64748b]">{z.areas}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">
                Qué incluye el contrato de {priceLabel}
              </h2>
              <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {HABITACION_INCLUDES.map((item) => (
                  <li
                    key={item.title}
                    className="flex gap-3 rounded-xl bg-white p-5 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    <div>
                      <p className="font-semibold text-[#1E293B]">{item.title}</p>
                      <p className="mt-1 text-sm text-[#64748b]">{item.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {seo?.localRisks.length ? (
            <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-4xl">
                <h2 className="text-2xl font-bold text-[#1E293B]">
                  Qué suele salir mal sin contrato en pisos compartidos de {config.city}
                </h2>
                <div className="mt-8 space-y-6">
                  {seo.localRisks.map((risk) => (
                    <div key={risk.title}>
                      <h3 className="text-lg font-semibold text-[#1E293B]">{risk.title}</h3>
                      <p className="mt-2 leading-relaxed text-[#475569]">{risk.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">Proceso en cuatro pasos</h2>
              <ol className="mt-8 space-y-6">
                {HABITACION_PROCESS_STEPS.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] text-lg font-bold text-white">
                      {i + 1}
                    </span>
                    <div>
                      <h3 className="font-semibold text-[#1E293B]">{step.title}</h3>
                      <p className="mt-1 text-[#475569]">{step.description}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {config.faq?.length ? (
            <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
              <div className="mx-auto max-w-3xl">
                <FaqSection
                  title={`Preguntas frecuentes — habitación en ${config.city}`}
                  subtitle="Respuestas antes de contratar tu contrato de piso compartido."
                  items={[...config.faq]}
                />
              </div>
            </section>
          ) : null}

          <section className="border-b border-slate-200 bg-white px-4 py-10 sm:px-6">
            <div className="mx-auto max-w-4xl text-center text-sm text-[#64748b]">
              <Users className="mx-auto h-8 w-8 text-[#1A4FBF]" aria-hidden />
              <p className="mt-3">
                ¿Alquilas el piso entero? Ver{" "}
                <Link
                  href={localContratoAlquilerHref(config.slug)}
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  contrato de alquiler LAU en {config.city}
                </Link>
                . Servicio nacional:{" "}
                <Link
                  href="/servicios/contrato-alquiler-habitacion"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  contrato habitación (España)
                </Link>
                .
              </p>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <FileText className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
              <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl">{config.finalCtaLead}</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                Contrato profesional para habitación en piso compartido — no un PDF genérico de vivienda completa.
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
