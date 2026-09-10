import { RedactarContratoAlquilerLocalCityLinks } from "@/components/redactar-contrato-alquiler-local-city-links";
import { RedactarContratoAlquilerOnlineGestorSection } from "@/components/redactar-contrato-alquiler-online-gestor-section";
import { FaqSection } from "@/components/faq-section";
import { RentalContractPlatformShowcase } from "@/components/rental-contract-platform-showcase";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
import {
  ContratarSlugButton,
  MultiServicePurchaseProvider,
} from "@/components/service-purchase-provider";
import { WhatsAppLeadLink } from "@/components/whatsapp-lead-button";
import { getPublicServices } from "@/lib/catalog";
import type { PublicService } from "@/lib/catalog.public";
import {
  CONTRATO_ALQUILER_HABITACION_PRICE_LABEL,
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
  resolveServicePriceLabel,
} from "@/lib/catalog.public";
import {
  buildAgencyRentalComparisonRows,
  REDACTAR_CONTRATO_ALQUILER_FAQ,
  REDACTAR_CONTRATO_ALQUILER_TESTIMONIALS,
} from "@/lib/redactar-contrato-alquiler-content";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Banknote,
  CheckCircle,
  ClipboardList,
  Eye,
  FileSignature,
  KeyRound,
  Scale,
  Shield,
  Sparkles,
  Users,
  XCircle,
} from "lucide-react";

export const revalidate = 300;

const canonical = `${getSiteUrl()}/servicios/redactar-contrato-alquiler`;
const SERVICE_LABEL = "Redactar contrato de alquiler profesional (LAU)";

export const metadata: Metadata = {
  title: `¿Necesitas redactar un contrato de alquiler profesional? — ${CONTRATO_ALQUILER_LAU_PRICE_LABEL}`,
  description:
    "Contrato de alquiler entre particulares con inventario profesional, LAU adaptada, inscripción de fianza orientada y panel digital seguro. 145 € IVA incl. — sin comisión de agencia (2.000–3.000 €).",
  alternates: { canonical },
  keywords: [
    "redactar contrato alquiler",
    "contrato alquiler profesional",
    "contrato alquiler entre particulares",
    "inventario alquiler",
    "contrato LAU particular",
    "gestoría contrato alquiler",
  ],
  openGraph: {
    title: "Redactar contrato de alquiler profesional entre particulares",
    description:
      "Inventario, LAU adaptada, fianza en organismo correcto y plataforma privada. 145 € IVA incl. frente a 2.000–3.000 € de agencia.",
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/contratodealquiler.jpg", alt: "Contrato de alquiler profesional Livendia" }],
  },
};

function formatEur(n: number): string {
  return `${n.toLocaleString("es-ES")} €`;
}

export default async function RedactarContratoAlquilerPage() {
  const catalog = await getPublicServices();
  const lau = catalog.find((s) => s.slug === "contrato-alquiler-lau");
  const temp = catalog.find((s) => s.slug === "contrato-alquiler-temporada");
  const hab = catalog.find((s) => s.slug === "contrato-alquiler-habitacion");
  const servicesBySlug: Partial<Record<string, PublicService>> = {};
  if (lau) servicesBySlug["contrato-alquiler-lau"] = lau;
  if (temp) servicesBySlug["contrato-alquiler-temporada"] = temp;
  if (hab) servicesBySlug["contrato-alquiler-habitacion"] = hab;

  const lauPrice = resolveServicePriceLabel(lau, CONTRATO_ALQUILER_LAU_PRICE_LABEL);
  const tempPrice = resolveServicePriceLabel(temp, CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL);
  const habPrice = resolveServicePriceLabel(hab, CONTRATO_ALQUILER_HABITACION_PRICE_LABEL);
  const comparisonRows = buildAgencyRentalComparisonRows();
  const highlightRow = comparisonRows.find((r) => r.monthlyRent === 1_000) ?? comparisonRows[1];

  return (
    <MultiServicePurchaseProvider servicesBySlug={servicesBySlug}>
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />
        <main className="flex-1">
          {/* Hero conversión */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[680px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
                  <p className="mb-4 inline-block self-start rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-sm">
                    Entre particulares · Sin comisión de agencia
                  </p>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    ¿Necesitas redactar un contrato de alquiler profesional?
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
                    Livendia es gestoría <strong className="text-white">especializada en contratos inmobiliarios</strong>{" "}
                    para particulares — <strong className="text-white">100% online, sin desplazarte</strong>: contrato
                    LAU adaptado al Código Civil, inventario profesional, fianza orientada y un{" "}
                    <strong className="text-white">gestor operativo</strong> en todo el proceso (y asesoramiento posterior
                    incluido) — por <strong className="text-white">{lauPrice} IVA incl.</strong>
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Servicio online: contratas, subes docs y hablas con tu gestor sin ir al despacho",
                      "Gestor inmobiliario asignado — adaptado a tu alquiler de principio a fin",
                      "Inventario profesional y contrato con acabado visual impecable",
                      "Asesoramiento posterior a la entrega del contrato, dentro del servicio",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3 text-sm sm:text-base">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarSlugButton
                      slug="contrato-alquiler-lau"
                      className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50"
                    >
                      Contratar LAU · {lauPrice}
                    </ContratarSlugButton>
                    <WhatsAppLeadLink
                      placement="redactar_contrato_alquiler_hero_whatsapp"
                      serviceLabel={SERVICE_LABEL}
                      needType="alquiler"
                      mode="direct"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      WhatsApp
                    </WhatsAppLeadLink>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <ContratarSlugButton
                      slug="contrato-alquiler-temporada"
                      className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Temporada · {tempPrice}
                    </ContratarSlugButton>
                    <ContratarSlugButton
                      slug="contrato-alquiler-habitacion"
                      className="rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white hover:bg-white/10"
                    >
                      Habitación · {habPrice}
                    </ContratarSlugButton>
                  </div>
                </div>
                <div className="relative order-2 h-56 sm:h-72 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src="/images/contratodealquiler.jpg"
                    alt="Contrato de alquiler profesional con inventario Livendia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A4FBF]/40 to-transparent lg:bg-gradient-to-r lg:from-[#1A4FBF]/30 lg:to-transparent" />
                </div>
              </div>
            </div>
          </section>

          {/* Por qué Livendia */}
          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Gestoría inmobiliaria especializada — tranquilidad al alquilar entre particulares
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-[#64748b]">
                Livendia <strong className="text-[#1E293B]">no es una inmobiliaria</strong>: no buscamos inquilino ni
                cobramos comisión sobre la renta. Somos gestoría legal-inmobiliaria dedicada a que propietario e
                inquilino firmen con un contrato riguroso, un inventario documentado y la fianza bien gestionada.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: Scale,
                    title: "LAU + Código Civil aplicado",
                    text: "Cada cláusula revisada por gestor inmobiliario: renta, duración, obras, suministros y extinción del contrato.",
                  },
                  {
                    icon: ClipboardList,
                    title: "Inventario profesional",
                    text: "Estado del piso documentado con fotos antes de las llaves. Menos conflictos al devolver el inmueble.",
                  },
                  {
                    icon: Shield,
                    title: "Fianza en el organismo correcto",
                    text: "Orientación para AVS (Madrid), INCASÒL (Cataluña) o el depósito que corresponda en tu comunidad autónoma.",
                  },
                  {
                    icon: Sparkles,
                    title: "Aspecto visual impecable",
                    text: "Contrato maquetado con estándar profesional Livendia — transmite seriedad a ambas partes al firmar.",
                  },
                  {
                    icon: KeyRound,
                    title: "Particular a particular",
                    text: "Ideal si ya tenéis acuerdo por Idealista, recomendación o conocido y queréis evitar miles de euros de agencia.",
                  },
                  {
                    icon: Eye,
                    title: "Online y con seguimiento",
                    text: "Panel digital sin desplazamientos: progreso visible, gestor asignado y canal de consulta durante y después del alquiler.",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <Icon className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                    <h3 className="mt-4 text-lg font-bold text-[#1E293B]">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <RedactarContratoAlquilerOnlineGestorSection />

          {/* Plataforma interactiva */}
          <RentalContractPlatformShowcase />

          {/* Qué incluye vs plantilla */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Qué recibes por {lauPrice} IVA incl.
              </h2>
              <div className="mt-12 grid gap-8 lg:grid-cols-2">
                <div className="rounded-2xl border-2 border-red-200 bg-red-50/50 p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-red-800">
                    <XCircle className="h-6 w-6" aria-hidden />
                    <h3 className="text-lg font-bold">Plantilla de internet</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-red-950/90">
                    {[
                      "Cláusulas genéricas de otra CCAA o desactualizadas",
                      "Sin inventario — disputas al final del alquiler",
                      "Fianza mal explicada o depositada incorrectamente",
                      "Aspecto pobre que no inspira confianza al firmar",
                      "Cero seguimiento ni gestor al otro lado",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-red-500">×</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border-2 border-[#1A4FBF] bg-[#EFF6FF]/50 p-6 sm:p-8">
                  <div className="flex items-center gap-2 text-[#1A4FBF]">
                    <CheckCircle className="h-6 w-6" aria-hidden />
                    <h3 className="text-lg font-bold">Contrato Livendia</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-[#1E293B]">
                    {[
                      "Redacción o revisión adaptada a vuestra negociación y LAU vigente",
                      "Inventario profesional con fotos integrado al expediente",
                      "Orientación de inscripción de fianza en organismo autonómico",
                      "Documento con maquetación visual profesional",
                      "100% online + gestor operativo durante y después del alquiler",
                    ].map((item) => (
                      <li key={item} className="flex gap-2">
                        <CheckCircle className="h-4 w-4 shrink-0 text-[#06B6D4] mt-0.5" aria-hidden />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <ContratarSlugButton
                      slug="contrato-alquiler-lau"
                      className="inline-flex rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-bold text-white hover:bg-[#2563EB]"
                    >
                      Contratar ahora · {lauPrice}
                    </ContratarSlugButton>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Particular vs agencia */}
          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Alquiler entre particulares vs. inmobiliaria
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#64748b]">
                Si ya tienes inquilino o propietario, <strong className="text-[#1E293B]">no necesitas pagar 2.000–3.000 €</strong>{" "}
                de gestión inmobiliaria más un mes entero de renta en comisión. Livendia cubre el tramo legal por{" "}
                <strong className="text-[#1A4FBF]">{lauPrice} IVA incl.</strong>
              </p>

              <div className="mt-10 overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
                <table className="w-full min-w-[520px] text-left text-sm">
                  <thead>
                    <tr className="bg-[#1A4FBF] text-white">
                      <th className="px-4 py-3 font-semibold">Renta mensual</th>
                      <th className="px-4 py-3 font-semibold">Inmobiliaria (estimado)</th>
                      <th className="px-4 py-3 font-semibold">Livendia</th>
                      <th className="px-4 py-3 font-semibold">Ahorro orientativo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonRows.map((row) => {
                      const savingsMid = Math.round(
                        (row.agencyEstimateLow + row.agencyEstimateHigh) / 2 - row.livendia,
                      );
                      return (
                        <tr key={row.monthlyRent} className="border-t border-slate-100">
                          <td className="px-4 py-3 font-medium text-[#1E293B]">{formatEur(row.monthlyRent)}/mes</td>
                          <td className="px-4 py-3 text-[#64748b]">
                            {formatEur(row.agencyEstimateLow)} – {formatEur(row.agencyEstimateHigh)}
                            <span className="mt-0.5 block text-xs">1 mes renta + gestión 2.000–3.000 €</span>
                          </td>
                          <td className="px-4 py-3 font-bold text-[#1A4FBF]">{formatEur(row.livendia)}</td>
                          <td className="px-4 py-3 font-semibold text-emerald-700">~{formatEur(savingsMid)}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <p className="mt-6 text-center text-xs text-[#64748b]">
                Estimación orientativa según mercado habitual: comisión de un mes de renta más honorarios de gestión
                inmobiliaria entre 2.000 y 3.000 €. Livendia no capta inquilino ni cobra comisión sobre la renta.
              </p>

              {highlightRow ? (
                <div className="mt-8 rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] p-6 text-center text-white sm:p-8">
                  <Banknote className="mx-auto h-10 w-10 text-cyan-200" aria-hidden />
                  <p className="mt-4 text-lg font-semibold">
                    Con renta de {formatEur(highlightRow.monthlyRent)}/mes, una agencia puede costarte más de{" "}
                    {formatEur(highlightRow.agencyEstimateLow)}. Livendia: {formatEur(highlightRow.livendia)}.
                  </p>
                </div>
              ) : null}

              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  {
                    icon: Users,
                    title: "Tú encuentras la contraparte",
                    text: "Idealista, Milanuncios, boca a boca — nosotros el contrato",
                  },
                  {
                    icon: FileSignature,
                    title: "145 €, precio cerrado",
                    text: "Sin % sobre la renta ni permanencia con agencia",
                  },
                  {
                    icon: Shield,
                    title: "Misma seguridad jurídica",
                    text: "Gestor inmobiliario + plataforma privada de seguimiento",
                  },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-xl bg-white p-5 text-center shadow-sm ring-1 ring-slate-200">
                    <Icon className="mx-auto h-8 w-8 text-[#1A4FBF]" aria-hidden />
                    <h3 className="mt-3 font-bold text-[#1E293B]">{title}</h3>
                    <p className="mt-2 text-sm text-[#64748b]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Proceso */}
          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-5xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">Cómo funciona</h2>
              <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    step: "1",
                    title: "Contratas online",
                    text: "Pago seguro con tarjeta. Acceso inmediato al panel Livendia y expediente digital.",
                  },
                  {
                    step: "2",
                    title: "Subes documentación",
                    text: "DNI de las partes, datos del piso y fotos para el inventario profesional.",
                  },
                  {
                    step: "3",
                    title: "Redacción del contrato",
                    text: "Tu gestor adapta cláusulas LAU/CC, integra inventario y revisa la fianza.",
                  },
                  {
                    step: "4",
                    title: "Entrega para firmar",
                    text: "Contrato con acabado visual profesional listo para firmar entre particulares.",
                  },
                ].map((item) => (
                  <li key={item.step} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                      {item.step}
                    </span>
                    <h3 className="mt-4 font-bold text-[#1E293B]">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-[#64748b]">{item.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Testimonios */}
          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Propietarios que eligieron contrato profesional Livendia
              </h2>
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {REDACTAR_CONTRATO_ALQUILER_TESTIMONIALS.map((t) => (
                  <blockquote key={t.author} className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200">
                    <p className="text-[#334155]">&ldquo;{t.quote}&rdquo;</p>
                    <footer className="mt-4 text-sm font-semibold text-[#1E293B]">
                      {t.author}
                      <span className="font-normal text-[#64748b]"> · {t.role}</span>
                    </footer>
                  </blockquote>
                ))}
              </div>
            </div>
          </section>

          <FaqSection title="Preguntas frecuentes" items={[...REDACTAR_CONTRATO_ALQUILER_FAQ]} />

          <ServiceMidPageContactSection
            serviceLabel={SERVICE_LABEL}
            needType="alquiler"
            placement="redactar_contrato_alquiler_mid"
          />

          {/* Ciudades conversión local */}
          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-xl font-extrabold text-[#1E293B] sm:text-2xl">
                Redactar contrato de alquiler por ciudad
              </h2>
              <p className="mt-3 text-[#64748b]">
                Misma landing de conversión con barrios, normativa local y mercado en 10 ciudades: Madrid, Barcelona,
                Valencia, Sevilla, Málaga, Bilbao, Zaragoza, Alicante, Granada y Palma.
              </p>
              <RedactarContratoAlquilerLocalCityLinks className="mt-6" />
            </div>
          </section>

          {/* CTA final */}
          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-center text-white sm:px-6">
            <div className="mx-auto max-w-3xl">
              <h2 className="text-2xl font-extrabold sm:text-4xl">
                Redacta tu contrato de alquiler profesional desde {lauPrice}
              </h2>
              <p className="mt-4 text-blue-100">
                Inventario, LAU adaptada, fianza orientada y plataforma privada — sin pagar miles de euros a una agencia.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarSlugButton
                  slug="contrato-alquiler-lau"
                  className="inline-flex rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50"
                >
                  Contratar contrato LAU
                </ContratarSlugButton>
                <Link
                  href="/servicios/contrato-alquiler-lau"
                  className="inline-flex rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  Ficha técnica del servicio
                </Link>
              </div>
            </div>
          </section>

          <ServiceLandingSharedSections />
        </main>
        <SiteFooter variant="landing" />
      </div>
    </MultiServicePurchaseProvider>
  );
}
