import { FaqSection } from "@/components/faq-section";
import { LivendiaFoundersBanner } from "@/components/livendia-founders-banner";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  REVISION_CONTRATO_ALQUILER_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import {
  REVISION_CONTRATO_ALQUILER_FAQ,
  REVISION_CONTRATO_ALQUILER_INCLUDED,
  REVISION_CONTRATO_ALQUILER_NOT_INCLUDED,
  REVISION_CONTRATO_ALQUILER_PROCESS_INTRO,
  REVISION_CONTRATO_ALQUILER_PROCESS_STEPS,
  REVISION_CONTRATO_ALQUILER_SCOPE_DISCLAIMER,
  REVISION_CONTRATO_ALQUILER_TESTIMONIALS,
} from "@/lib/revision-contrato-alquiler-shared";
import {
  AlertCircle,
  AlertTriangle,
  CheckCircle,
  ClipboardCheck,
  FileSearch,
  FileText,
  Home,
  MessageCircle,
  Phone,
  PhoneCall,
  Search,
  Shield,
  Upload,
  UserRound,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

const canonical = `${getSiteUrl()}/servicios/revision-contrato-alquiler`;

export const metadata: Metadata = {
  title: `Revisión de contrato de alquiler — ${REVISION_CONTRATO_ALQUILER_PRICE_LABEL} IVA incl. | Livendia`,
  description:
    "¿Eres inquilino y necesitas revisión de un contrato de alquiler? Análisis del borrador LAU, temporada o habitación con informe para negociar. No incluye redacción completa del contrato. 120 € IVA incl.",
  alternates: { canonical },
  openGraph: {
    title: "Revisión de contrato de alquiler | Livendia",
    description:
      "Revisión profesional del contrato de alquiler antes de firmar. Informe detallado + llamada de veredicto. 120 € IVA incl.",
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function RevisionContratoAlquilerPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "revision-contrato-alquiler") ?? null;
  const priceLabel = resolveServicePriceLabel(service, REVISION_CONTRATO_ALQUILER_PRICE_LABEL);

  const telHref = getContactPhoneTelHref();
  const phoneDisplay = getContactPhoneDisplay();
  const waConsultHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, necesito revisión de un contrato de alquiler antes de firmar.",
  )}`;
  const processIcons = [Upload, Search, ClipboardCheck, PhoneCall] as const;

  const riskAreas = [
    {
      icon: AlertTriangle,
      title: "Cláusulas abusivas",
      description:
        "Penalizaciones desproporcionadas, obligaciones de reparación indebidas o renuncias a derechos que la LAU no permite.",
    },
    {
      icon: Shield,
      title: "Fianza y depósitos",
      description:
        "Importes por encima del límite legal, retenciones poco claras o condiciones de devolución que te dejan expuesto.",
    },
    {
      icon: FileSearch,
      title: "Gastos y suministros",
      description:
        "Reparto confuso de comunidad, IBI, basuras, luz o agua. Detectamos quién debe pagar qué según el tipo de contrato.",
    },
    {
      icon: Home,
      title: "Duración y salida",
      description:
        "Preaviso, prórrogas, contratos de temporada mal acotados o cláusulas que dificultan rescindir con seguridad.",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
        <PublicHeader />
        <main className="flex-1">
          <section className="relative overflow-hidden border-b border-slate-200 bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[650px]">
                <div className="flex flex-col justify-center px-6 py-16 lg:px-12 lg:py-24">
                  <div className="mb-8 inline-block self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    Para inquilinos
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-4xl lg:text-6xl">
                    Revisión de contrato de alquiler
                  </h1>
                  <p className="mt-6 text-xl leading-relaxed text-blue-50">
                    ¿Eres inquilino y necesitas revisión de un contrato de alquiler? Los especialistas de Livendia se
                    encargan de asesorarte en todos los contratos que existen — temporada o larga duración — detectamos
                    los puntos más vulnerables y malas prácticas, y te enviamos un informe detallado para negociar con el
                    propietario.
                  </p>
                  <p className="mt-4 rounded-xl border border-amber-300/40 bg-amber-400/15 px-4 py-3 text-sm leading-relaxed text-amber-50">
                    <strong>Importante:</strong> {REVISION_CONTRATO_ALQUILER_SCOPE_DISCLAIMER}
                  </p>

                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-100">IVA incluido</span>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-[#1E3A8A] shadow-xl transition hover:scale-105 hover:bg-blue-50">
                      Contratar por {priceLabel}
                    </ContratarServicioButton>
                    <a
                      href={waConsultHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-4 text-base font-semibold transition hover:bg-white/10"
                    >
                      <MessageCircle className="h-5 w-5" />
                      Consultar por WhatsApp
                    </a>
                  </div>
                </div>

                <div className="relative h-44 sm:h-56 lg:h-auto">
                  <Image
                    src="/images/gestora2.jpg"
                    alt="Gestora revisando contrato de alquiler con inquilino"
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-amber-200 bg-amber-50 px-4 py-10 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-10 w-10 shrink-0 text-amber-700" aria-hidden />
              <div>
                <h2 className="text-lg font-bold text-[#1E293B]">Este servicio no incluye redacción completa</h2>
                <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                  La <strong>revisión de contrato de alquiler</strong> analiza el borrador que ya tienes y te entrega un
                  informe para negociar. <strong>No cubre la redacción integral</strong> de un contrato de alquiler
                  completo, listo para firmar, con todas sus cláusulas y anexos. Para eso necesitas un servicio de
                  redacción:{" "}
                  <Link href="/servicios/contrato-alquiler-lau" className="font-semibold text-[#1A4FBF] hover:underline">
                    contrato LAU
                  </Link>
                  ,{" "}
                  <Link
                    href="/servicios/contrato-alquiler-temporada"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    temporada
                  </Link>{" "}
                  o{" "}
                  <Link
                    href="/servicios/contrato-alquiler-habitacion"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    habitación
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">¿Qué incluye la revisión?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                Tú subes el borrador; nosotros lo auditamos y te entregamos un informe accionable antes de firmar.
              </p>
              <ul className="mt-10 grid gap-3 sm:grid-cols-2">
                {REVISION_CONTRATO_ALQUILER_INCLUDED.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                    <span className="text-sm font-medium text-[#1E293B]">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-amber-200 bg-amber-50 p-6 sm:p-8">
                <h3 className="text-lg font-bold text-[#1E293B]">Qué no incluye este servicio</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
                  Para evitar confusiones: pagas por una auditoría del contrato existente, no por un documento contractual
                  nuevo redactado al completo.
                </p>
                <ul className="mt-5 space-y-3">
                  {REVISION_CONTRATO_ALQUILER_NOT_INCLUDED.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-[#475569]">
                      <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-amber-600" aria-hidden />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B]">¿Para quién es este servicio?</h2>
              <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
                <p>
                  Para <strong>inquilinos</strong> que han recibido un borrador de contrato y quieren firmar con
                  seguridad: primer piso, cambio de ciudad, alquiler por temporada, habitación en piso compartido o
                  renovación con nuevas condiciones impuestas por el propietario.
                </p>
                <p>
                  También si el arrendador te envía un PDF genérico de internet, un contrato de agencia con letra pequeña
                  o un documento en el que no queda claro quién paga comunidad, suministros o reparaciones. Revisamos
                  antes de que transfieras la fianza o firmes en una oficina.
                </p>
                <p>
                  Si lo que necesitas es que Livendia <strong>redacte el contrato completo desde cero</strong> —no solo
                  revisarlo—, este no es el servicio adecuado. Contrata la redacción en el{" "}
                  <Link href="/servicios/contrato-alquiler-lau" className="font-semibold text-[#1A4FBF] hover:underline">
                    contrato LAU
                  </Link>
                  , el de{" "}
                  <Link
                    href="/servicios/contrato-alquiler-temporada"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    temporada
                  </Link>{" "}
                  o el de{" "}
                  <Link
                    href="/servicios/contrato-alquiler-habitacion"
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    habitación
                  </Link>
                  .
                </p>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-3xl font-bold text-[#1E293B]">Qué revisamos en tu contrato</h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                Contratos de larga duración (LAU), estancias por temporada y alquiler de habitación: cada uno con
                riesgos distintos.
              </p>
              <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {riskAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div
                      key={area.title}
                      className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                        <Icon className="h-6 w-6 text-[#06B6D4]" />
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">{area.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{area.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <div className="max-w-3xl">
                <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">Cómo funciona</h2>
                <p className="mt-4 text-lg leading-relaxed text-[#475569]">
                  {REVISION_CONTRATO_ALQUILER_PROCESS_INTRO}
                </p>
              </div>

              <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
                <ol className="space-y-5">
                  {REVISION_CONTRATO_ALQUILER_PROCESS_STEPS.map((step, i) => {
                    const Icon = processIcons[i] ?? FileText;
                    return (
                      <li
                        key={step.title}
                        className="flex gap-4 rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-200 sm:p-6"
                      >
                        <div className="flex shrink-0 flex-col items-center gap-2">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-lg font-bold text-white shadow-md">
                            {i + 1}
                          </span>
                          <Icon className="h-5 w-5 text-[#06B6D4]" aria-hidden />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-[#1E293B]">{step.title}</h3>
                          <p className="mt-2 leading-relaxed text-[#475569]">{step.description}</p>
                        </div>
                      </li>
                    );
                  })}
                </ol>

                <aside className="lg:sticky lg:top-24">
                  <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] p-6 text-white shadow-xl ring-1 ring-white/10">
                    <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
                      Asesoramiento antes de contratar
                    </p>
                    <h3 className="mt-3 text-xl font-extrabold leading-snug">
                      Habla con tu gestor especializado
                    </h3>
                    <a
                      href={telHref}
                      className="mt-6 block text-2xl font-extrabold tracking-tight text-white transition hover:text-cyan-200"
                    >
                      {phoneDisplay}
                    </a>
                    <p className="mt-1 text-xs text-blue-200/90">L–V · 9:00 – 19:30</p>
                    <div className="mt-6 flex flex-col gap-3">
                      <a
                        href={telHref}
                        className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl border-2 border-white bg-white/10 px-5 py-3 text-sm font-bold backdrop-blur-sm transition hover:bg-white/20"
                      >
                        <Phone className="h-5 w-5 shrink-0" aria-hidden />
                        Llamar ahora
                      </a>
                      <a
                        href={waConsultHref}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-[#20bd5a]"
                      >
                        <MessageCircle className="h-5 w-5 shrink-0" aria-hidden />
                        WhatsApp con gestor
                      </a>
                    </div>
                  </div>
                </aside>
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-gradient-to-br from-slate-50 to-slate-100 px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                {REVISION_CONTRATO_ALQUILER_TESTIMONIALS.title}
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
                Personas que revisaron su contrato con Livendia antes de firmar y negociar con el propietario.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2">
                {REVISION_CONTRATO_ALQUILER_TESTIMONIALS.items.map((testimonial, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 sm:p-8"
                  >
                    <div className="flex gap-1 text-[#D4AF37]" aria-hidden>
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="mt-4 text-base italic leading-relaxed text-[#475569] sm:text-lg">
                      <span aria-hidden>&ldquo;</span>
                      {testimonial.quote}
                      <span aria-hidden>&rdquo;</span>
                    </p>
                    <div className="mt-6 flex items-center gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#06B6D4]">
                        <UserRound className="h-5 w-5 text-white" aria-hidden />
                      </div>
                      <div>
                        <p className="font-semibold text-[#1E293B]">{testimonial.author}</p>
                        <p className="text-sm text-[#64748b]">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-3xl">
              <FaqSection
                title="Preguntas frecuentes — revisión de contrato de alquiler"
                items={[...REVISION_CONTRATO_ALQUILER_FAQ]}
              />
            </div>
          </section>

          <LivendiaFoundersBanner className="border-t border-slate-200" />

          <section className="px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
              <h2 className="text-3xl font-bold">¿Vas a firmar un contrato de alquiler?</h2>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
                No firmes a ciegas. Revisa el borrador con un especialista y negocia con un informe detallado en la mano.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                  Contratar revisión · {priceLabel}
                </ContratarServicioButton>
                <Link
                  href="/servicios"
                  className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Ver todos los servicios
                </Link>
              </div>
            </div>
          </section>
        </main>
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
