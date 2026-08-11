import { ContratoAlquilerHabitacionLocalCityLinks } from "@/components/contrato-alquiler-habitacion-local-city-links";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { FaqSection } from "@/components/faq-section";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import {
  HABITACION_PROCESS_INTRO,
  HABITACION_PROCESS_STEPS,
  HABITACION_TESTIMONIALS_NATIONAL,
} from "@/lib/contrato-alquiler-habitacion-local-shared";
import {
  CreditCard,
  FileCheck,
  Users,
  FileText,
  Clock,
  CheckCircle,
  MessageCircle,
  Phone,
  PhoneCall,
  UserRound,
} from "lucide-react";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";

const canonical = `${getSiteUrl()}/servicios/contrato-alquiler-habitacion`;

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: `Contrato de alquiler de habitación — ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incl. | Livendia`,
  description:
    `Arrendamiento de habitación en piso compartido con cláusulas específicas para este régimen. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incluido.`,
  alternates: { canonical },
  openGraph: {
    title: `Contrato de alquiler de habitación | Livendia`,
    description:
      `Arrendamiento de habitación en piso compartido con cláusulas específicas. ${CONTRATO_ALQUILER_HABITACION_PRICE_LABEL} IVA incluido.`,
    url: canonical,
    locale: "es_ES",
    type: "website",
  },
};

export default async function ContratoHabitacionPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "contrato-alquiler-habitacion") ?? null;
  const priceLabel = resolveServicePriceLabel(service, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL);

  const telHref = getContactPhoneTelHref();
  const phoneDisplay = getContactPhoneDisplay();
  const waConsultHref = `https://wa.me/${WA.replace(/\D/g, "")}?text=${encodeURIComponent(
    "Hola, quiero una llamada con un gestor para un contrato de alquiler de habitación.",
  )}`;
  const processIcons = [PhoneCall, CreditCard, UserRound, FileCheck] as const;

  const features = [
    {
      icon: Users,
      title: "Piso compartido",
      description: "Contrato diseñado para el alquiler de una habitación en vivienda compartida.",
    },
    {
      icon: FileText,
      title: "Cláusulas específicas",
      description: "Incluye normas de convivencia, espacios comunes y responsabilidades.",
    },
    {
      icon: Clock,
      title: "Entrega rápida",
      description: "Documento listo en 24-48h laborables tras recibir toda la información.",
    },
    {
      icon: CheckCircle,
      title: "Protección legal",
      description: "Define claramente derechos y obligaciones del arrendador e inquilino.",
    },
  ];

  return (
    <ServicePurchaseProvider service={service}>
    {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="border-b border-slate-200 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="grid items-center gap-10 md:grid-cols-2">
              <div>
                <div className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
                  Piso compartido
                </div>
                <h1 className="mt-4 text-2xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
                  Contrato de Alquiler de Habitación
                </h1>
                <p className="mt-5 text-xl leading-relaxed text-blue-100">
                  Arrendamiento de habitación en piso compartido: normas de convivencia, zonas comunes, gastos y plazos
                  redactados por un gestor inmobiliario — no un PDF genérico de vivienda completa.
                </p>

                <div className="mt-8 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                  <span className="text-lg text-blue-200">IVA incluido</span>
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                    Contratar por {priceLabel}
                  </ContratarServicioButton>
                  <Link
                    href="/servicios"
                    className="rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                  >
                    Ver todos los servicios
                  </Link>
                </div>
              </div>

              <div className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-white/20">
                <Image
                  src="/images/contratos2.jpg"
                  alt="Contrato de alquiler de habitación"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1152px) 50vw, 556px"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Características */}
        <section className="px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-3xl font-bold text-[#1E293B]">
              ¿Qué incluye este servicio?
            </h2>

            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200 transition-shadow hover:shadow-lg"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#06B6D4]/10">
                      <Icon className="h-6 w-6 text-[#06B6D4]" />
                    </div>
                    <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">{feature.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#475569]">
                      {feature.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">¿Quién contrata este servicio?</h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
              <p>
                Propietarios que alquilan una habitación en su vivienda habitual, inquilinos que quieren salir de un
                acuerdo verbal y arrendadores con varios inquilinos en el mismo piso. También agencias o particulares que
                ya tienen un borrador pero necesitan que un gestor lo adapte al régimen de habitación y a la convivencia
                real del piso.
              </p>
              <p>
                Livendia trabaja en toda España: el contrato se tramita online y el inmueble puede estar en cualquier
                municipio. Consulta las landings por ciudad con barrios, comparativas y casos típicos de particulares
                en la sección siguiente. Si buscas revisión LAU de vivienda completa,
                consulta nuestro{" "}
                <Link href="/servicios/contrato-de-alquiler" className="font-semibold text-[#1A4FBF] hover:underline">
                  contrato de alquiler
                </Link>{" "}
                o las landings locales como{" "}
                <Link
                  href="/servicios/contrato-alquiler-local/madrid"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Madrid
                </Link>
                ,{" "}
                <Link
                  href="/servicios/contrato-alquiler-local/barcelona"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Barcelona
                </Link>{" "}
                o{" "}
                <Link
                  href="/servicios/contrato-alquiler-local/asturias"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Asturias
                </Link>
                .
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">
              Habitación vs. alquiler de vivienda completa (LAU)
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
              <p>
                El alquiler de habitación no replica el contrato LAU de un piso entero: el arrendador sigue usando cocina,
                salón y baños compartidos; las visitas, horarios, limpieza y reparto de suministros deben constar por
                escrito. Los plazos de permanencia, la fianza y la forma de actualizar la renta pueden diferir del
                arrendamiento urbano habitual.
              </p>
              <ul className="ml-6 list-disc space-y-2">
                <li>Uso exclusivo de la habitación y normas de las zonas comunes</li>
                <li>Visitas del arrendador o de otros inquilinos</li>
                <li>Gastos incluidos en la mensualidad (luz, agua, internet, limpieza)</li>
                <li>Depósito, devolución y estado del mobiliario de la habitación</li>
                <li>Causas de resolución y preaviso de salida</li>
              </ul>
              <p>
                Con Livendia recibes un expediente en el panel de cliente: subes datos de las partes, fotos del piso y el
                gestor redacta o revisa el texto en 24-48 horas laborables tras tener la información completa.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6 lg:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="max-w-3xl">
              <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">Proceso en cuatro pasos</h2>
              <p className="mt-4 text-lg leading-relaxed text-[#475569]">{HABITACION_PROCESS_INTRO}</p>
            </div>

            <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
              <ol className="space-y-5">
                {HABITACION_PROCESS_STEPS.map((step, i) => {
                  const Icon = processIcons[i] ?? FileCheck;
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
                <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] p-6 text-white shadow-xl ring-1 ring-white/10">
                  <p className="text-sm font-semibold uppercase tracking-wider text-cyan-200">
                    Asesoramiento antes de contratar
                  </p>
                  <h3 className="mt-3 text-xl font-extrabold leading-snug">
                    Habla con tu gestor especializado
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-blue-100">
                    Cuéntanos tu caso por teléfono o WhatsApp. Te orientamos sobre convivencia, gastos y fianza
                    antes de pagar {priceLabel}.
                  </p>
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
              {HABITACION_TESTIMONIALS_NATIONAL.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-center text-[#64748b]">
              Propietarios e inquilinos que tramitaron su contrato de habitación en piso compartido con asesoramiento
              del gestor.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {HABITACION_TESTIMONIALS_NATIONAL.items.map((testimonial, idx) => (
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
                    <div className="h-11 w-11 shrink-0 rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#06B6D4]" />
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
          <div className="mx-auto max-w-4xl">
            <h2 className="text-2xl font-bold text-[#1E293B]">Contrato de habitación por ciudad</h2>
            <p className="mt-4 text-lg leading-relaxed text-[#475569]">
              Landings locales para particulares: barrios habituales de piso compartido, perfiles típicos (propietario,
              inquilino, estudiante), comparativa con otras ciudades y testimonios por mercado.
            </p>
            <div className="mt-8">
              <ContratoAlquilerHabitacionLocalCityLinks showTitle={false} />
            </div>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <FaqSection
              title="Preguntas frecuentes — contrato de alquiler de habitación"
              items={[
                {
                  question: "¿Sirve si ya tengo un contrato de la agencia?",
                  answer:
                    "Sí. Lo revisamos y corregimos lagunas sobre convivencia, gastos o fianza antes de que firmes.",
                },
                {
                  question: "¿Puedo alquilar varias habitaciones del mismo piso?",
                  answer:
                    "Cada habitación puede llevar contrato propio o un documento marco; el gestor te orienta según convivan varios inquilinos.",
                },
                {
                  question: "¿Incluye inventario?",
                  answer:
                    "Documentamos el estado de la habitación y elementos comunes relevantes para evitar disputas al finalizar.",
                },
                {
                  question: "¿Es lo mismo que un contrato LAU de piso completo?",
                  answer:
                    "No. El régimen y las cláusulas son distintos; por eso existe este servicio específico y no debe usarse una plantilla de vivienda entera.",
                },
                {
                  question: "¿Atendéis solo en una ciudad?",
                  answer:
                    "No. El servicio es nacional; las landings por ciudad son para SEO local, pero contratas desde cualquier lugar.",
                },
              ]}
            />
          </div>
        </section>

        {/* Galería */}
        <section className="border-t border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-[#1E293B]">Nuestro despacho</h2>
            <p className="mt-3 text-[#475569]">
              Atención personalizada y profesional en cada contrato.
            </p>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {["/images/gestoria3.jpg", "/images/gestoria4.jpg", "/images/gestoria5.jpg"].map(
                (src, idx) => (
                  <div
                    key={idx}
                    className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200"
                  >
                    <Image
                      src={src}
                      alt={`Despacho Livendia ${idx + 1}`}
                      fill
                      className="object-cover transition hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1152px) 33vw, 373px"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl rounded-3xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-8 py-12 text-center text-white shadow-xl">
            <h2 className="text-3xl font-bold">¿Vas a alquilar una habitación?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Protégete con un contrato claro y adaptado a tu situación.
            </p>
            <div className="mt-8">
              <ContratarServicioButton className="rounded-full bg-white px-8 py-4 text-base font-semibold text-[#1A4FBF] shadow-lg hover:bg-slate-50">
                Contratar ahora
              </ContratarServicioButton>
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
