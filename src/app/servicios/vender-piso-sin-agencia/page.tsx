import { FaqSection } from "@/components/faq-section";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
import { VenderPisoSinAgenciaCityLinks } from "@/components/vender-piso-sin-agencia-city-links";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { WhatsAppLeadLink } from "@/components/whatsapp-lead-button";
import { getPublicServices } from "@/lib/catalog";
import {
  SERVICIO_COMPLETO_CV_PRICE_EUR,
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
} from "@/lib/catalog.public";
import {
  agencyCommissionWithVat,
  buildAgencySavingsRows,
  formatEur,
} from "@/lib/vender-piso-sin-agencia-local-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { AlertCircle, Banknote, CheckCircle, Handshake, Shield, Users } from "lucide-react";

export const revalidate = 300;

const canonical = `${getSiteUrl()}/servicios/vender-piso-sin-agencia`;

export const metadata: Metadata = {
  title: "Vender piso sin comisiones entre particulares — 890 € IVA incl. | Livendia",
  description:
    "¿Ya tienes comprador particular? Vende tu piso sin comisiones de agencia: gestoría Livendia 890 € IVA incl. Reserva, arras, trámites y notaría. No somos inmobiliaria.",
  alternates: { canonical },
  keywords: [
    "vender piso sin comisiones",
    "vender piso sin agencia",
    "venta entre particulares",
    "vender piso de particular a particular",
    "trámites venta entre particulares",
    "gestoría venta piso particular",
  ],
  openGraph: {
    title: "Vender piso sin comisiones — gestoría para particulares | Livendia",
    description:
      "Venta entre particulares con gestor legal: 890 € fijos, sin comisión del 3–5 %. Reserva, arras y notaría.",
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/servicio-completo-venta-hero.jpg", alt: "Vender piso sin comisiones entre particulares" }],
  },
};

const SERVICE_LABEL = "Vender piso sin comisiones (servicio completo de venta)";

const FAQ = [
  {
    question: "¿Puedo vender mi piso sin pagar comisiones a una agencia?",
    answer:
      "Sí, si tú encuentras al comprador (Idealista, Milanuncios, recomendación o conocido). No necesitas agencia para el tramo legal: Livendia redacta reserva y arras, ordena documentación y coordina notaría por 890 € IVA incl., sin porcentaje sobre el precio de venta.",
  },
  {
    question: "¿Livendia busca comprador o publica mi anuncio?",
    answer:
      "No. Somos gestoría inmobiliaria especializada en contratos y trámites para particulares. No hacemos marketing ni captación: trabajamos cuando ya tienes comprador particular.",
  },
  {
    question: "¿Qué incluye el servicio de venta sin comisiones?",
    answer:
      "Estudio de la operación, contrato de reserva (si aplica), contrato de arras, checklist documental (nota simple, comunidad, certificados), orientación sobre impuestos del vendedor y coordinación hasta la escritura en notaría.",
  },
  {
    question: "¿Cuánto ahorro respecto a una inmobiliaria?",
    answer:
      "En un piso de 300.000 €, una comisión del 3 % son 9.000 € + IVA (~10.890 €). Livendia cuesta 890 € fijos. La tabla de esta página muestra el ahorro según el precio de tu vivienda.",
  },
  {
    question: "¿Solo necesito el contrato de arras?",
    answer:
      "Si aún no has firmado arras, puedes contratar solo el contrato de arras penitenciales (145 € IVA incl.) o el servicio completo si quieres acompañamiento hasta notaría.",
  },
] as const;

export default async function VenderPisoSinAgenciaNacionalPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-venta") ?? null;
  const priceEur = service ? service.price_cents / 100 : SERVICIO_COMPLETO_CV_PRICE_EUR;
  const priceLabel = service ? `${priceEur.toFixed(0)} €` : SERVICIO_COMPLETO_CV_PRICE_LABEL;
  const savingsRows = buildAgencySavingsRows([200_000, 250_000, 300_000, 350_000, 400_000, 500_000], priceEur);
  const highlight = savingsRows.find((r) => r.salePrice === 300_000) ?? savingsRows[2];

  return (
    <ServicePurchaseProvider service={service}>
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />
        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[620px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-20">
                  <p className="mb-4 inline-block self-start rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide backdrop-blur-sm sm:text-sm">
                    Para particulares · Sin comisiones
                  </p>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    Vender piso sin comisiones — entre particulares con gestoría profesional
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
                    ¿Ya tienes comprador y no quieres pagar el 3–5 % de una inmobiliaria? Livendia es gestoría
                    especializada en venta entre particulares: reserva, arras, trámites y notaría por{" "}
                    <strong className="text-white">{priceLabel} IVA incl.</strong> — precio cerrado, sin comisión sobre
                    el precio de venta.
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Tú llevas la venta; nosotros los contratos y el papeleo",
                      "Idealista, recomendación, familia o comprador que ya tienes",
                      "No exclusiva · No cartel en portal · No comisión abusiva",
                    ].map((line) => (
                      <li key={line} className="flex items-start gap-3 text-sm sm:text-base lg:text-lg">
                        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50">
                      Contratar · {priceLabel}
                    </ContratarServicioButton>
                    <WhatsAppLeadLink
                      placement="vender_piso_nacional_hero_whatsapp"
                      serviceLabel={SERVICE_LABEL}
                      needType="venta"
                      mode="direct"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      WhatsApp
                    </WhatsAppLeadLink>
                  </div>
                </div>
                <div className="relative order-2 h-48 sm:h-64 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src="/images/servicio-completo-venta-hero.jpg"
                    alt="Vender piso sin comisiones entre particulares con gestoría Livendia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                ¿Para quién es vender sin comisiones?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#64748b]">
                Para <strong className="text-[#1E293B]">propietarios particulares</strong> que han encontrado un{" "}
                <strong className="text-[#1E293B]">comprador particular</strong> y buscan en Google o redes cómo hacer
                los trámites sin pagar miles de euros de comisión ni fiarse de una plantilla de internet.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { icon: Users, title: "Particular con comprador", text: "Idealista, Milanuncios, boca a boca" },
                  { icon: Shield, title: "Contratos seguros", text: "Reserva y arras redactadas por gestor legal" },
                  { icon: Handshake, title: "890 €, no 3 %", text: "Tarifa plana frente a comisión de agencia" },
                ].map(({ icon: Icon, title, text }) => (
                  <div key={title} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                    <Icon className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
                    <h3 className="mt-3 font-bold text-[#1E293B]">{title}</h3>
                    <p className="mt-2 text-sm text-[#475569]">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
                Cuánto ahorras vs una agencia
              </h2>
              <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead className="bg-[#1A4FBF] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Precio venta</th>
                      <th className="px-4 py-3 font-semibold">Agencia 3 % + IVA</th>
                      <th className="px-4 py-3 font-semibold">Livendia</th>
                      <th className="px-4 py-3 font-semibold">Ahorro</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-[#F8FAFC]">
                    {savingsRows.map((row) => (
                      <tr key={row.salePrice} className={row.salePrice === 300_000 ? "bg-blue-50/50" : undefined}>
                        <td className="px-4 py-3 font-medium">{formatEur(row.salePrice)}</td>
                        <td className="px-4 py-3 text-[#475569]">{formatEur(row.agency3WithVat)}</td>
                        <td className="px-4 py-3 font-semibold text-[#1A4FBF]">{formatEur(row.livendiaPrice)}</td>
                        <td className="px-4 py-3 font-semibold text-emerald-700">{formatEur(row.savingVs3)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 flex items-center justify-center gap-2 text-sm text-[#64748b]">
                <Banknote className="h-5 w-5 text-[#1A4FBF]" aria-hidden />
                Ejemplo destacado: en {formatEur(highlight.salePrice)} ahorras {formatEur(highlight.savingVs3)} vs comisión
                del 3 % ({formatEur(agencyCommissionWithVat(highlight.salePrice, 3))} + IVA).
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">Vender sin comisiones por ciudad</h2>
              <p className="mt-3 text-[#64748b]">
                Landings locales con comparativa de ahorro y copy adaptado a Madrid, Barcelona, Valencia y más ciudades.
              </p>
              <div className="mt-6">
                <VenderPisoSinAgenciaCityLinks />
              </div>
              <p className="mt-6 text-sm text-[#64748b]">
                ¿Solo necesitas un contrato?{" "}
                <Link href="/servicios/contrato-entre-particulares-local" className="font-semibold text-[#1A4FBF] hover:underline">
                  Contratos entre particulares por ciudad
                </Link>
                {" · "}
                <Link href="/servicios/contrato-arras-penitenciales" className="font-semibold text-[#1A4FBF] hover:underline">
                  Arras penitenciales (145 €)
                </Link>
              </p>
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel={SERVICE_LABEL}
            needType="venta"
            placement="vender_piso_nacional_mid"
          />

          <FaqSection
            title="Vender piso sin comisiones — preguntas frecuentes"
            subtitle="Venta entre particulares, gestoría Livendia y ahorro frente a agencias."
            items={[...FAQ]}
          />

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-10 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-6 w-6 shrink-0 text-amber-700" aria-hidden />
              <p className="text-sm leading-relaxed text-amber-950">
                Livendia no es agencia inmobiliaria ni portal de anuncios. No buscamos comprador ni cobramos comisión
                sobre el precio de venta. Somos gestoría: acompañamiento jurídico-documental para particulares que
                venden por su cuenta.
              </p>
            </div>
          </section>

          <GestorContactCta placement="vender_piso_nacional" serviceLabel={SERVICE_LABEL} />
        </main>
        <ServiceLandingSharedSections />
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
