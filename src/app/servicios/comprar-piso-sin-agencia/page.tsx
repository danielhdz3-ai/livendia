import { FaqSection } from "@/components/faq-section";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { PublicHeader } from "@/components/public-header";
import { ComprarPisoSinAgenciaCityLinks } from "@/components/comprar-piso-sin-agencia-city-links";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { SiteFooter } from "@/components/site-footer";
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
import { AlertCircle, CheckCircle, Handshake, Shield, Users } from "lucide-react";

export const revalidate = 300;

const canonical = `${getSiteUrl()}/servicios/comprar-piso-sin-agencia`;

export const metadata: Metadata = {
  title: "Comprar piso sin agencia entre particulares — 890 € IVA incl.",
  description:
    "¿Compras piso entre particulares? Gestor del comprador Livendia: reserva, arras, due diligence y notaría por 890 € IVA incl. Sin comisión sobre el precio del inmueble.",
  alternates: { canonical },
  keywords: [
    "comprar piso sin agencia",
    "comprar piso entre particulares",
    "gestor compra vivienda",
    "revisar contrato reserva arras",
    "tramites compra piso particular",
    "comprar sin inmobiliaria",
  ],
  openGraph: {
    title: "Comprar piso sin agencia — gestoría para compradores",
    description:
      "Compra entre particulares con gestor legal: 890 € fijos. Revisión de reserva, arras y trámites hasta escritura.",
    url: canonical,
    locale: "es_ES",
    type: "website",
    images: [{ url: "/images/gestoria3.jpg", alt: "Comprar piso sin agencia con gestor Livendia" }],
  },
};

const SERVICE_LABEL = "Comprar piso sin agencia (servicio completo de compra)";

const FAQ = [
  {
    question: "¿Puedo comprar un piso sin pagar agencia compradora?",
    answer:
      "Sí. Muchas operaciones son entre particulares o con agencia solo del vendedor. Livendia actúa como gestor del comprador: revisa reserva y arras, ordena documentación y coordina notaría por 890 € IVA incl., sin porcentaje sobre el precio.",
  },
  {
    question: "¿Livendia busca pisos o negocia el precio?",
    answer:
      "No. No somos portal ni captación inmobiliaria. Trabajamos cuando ya has encontrado vivienda y quieres acompañamiento jurídico-documental hasta escritura.",
  },
  {
    question: "¿Qué incluye el servicio completo de compra?",
    answer:
      "Revisión o redacción de reserva y arras, due diligence registral y de comunidad, certificados, orientación sobre hipoteca y plazos, y coordinación hasta la escritura en notaría.",
  },
  {
    question: "¿En qué se diferencia de /servicios/servicio-completo-compra?",
    answer:
      "Es el mismo producto (890 € IVA incl.) y el mismo checkout. Esta landing está orientada a quien busca comprar sin agencia o entre particulares; la ficha servicio-completo-compra describe el proceso genérico.",
  },
  {
    question: "¿Cuánto cuesta frente a honorarios sobre el precio?",
    answer:
      "En un piso de 300.000 €, un 3 % orientativo son 9.000 € + IVA. Livendia cuesta 890 € fijos. La tabla de esta página muestra comparativas según el precio de compra.",
  },
] as const;

export default async function ComprarPisoSinAgenciaNacionalPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-compra") ?? null;
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
                    Para compradores · Sin comisión sobre el precio
                  </p>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    Comprar piso sin agencia — entre particulares con gestor en tu bando
                  </h1>
                  <p className="mt-6 text-base leading-relaxed text-blue-50 sm:text-lg lg:text-xl">
                    ¿Has encontrado piso en Idealista, Milanuncios o directo al propietario? Livendia es gestoría del
                    comprador: reserva, arras, documentación y notaría por{" "}
                    <strong className="text-white">{priceLabel} IVA incl.</strong> — mismo servicio que la ficha{" "}
                    <Link href="/servicios/servicio-completo-compra" className="font-semibold underline hover:text-white">
                      Servicio completo de compra
                    </Link>
                    .
                  </p>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Tú eliges el piso; nosotros revisamos contratos y trámites",
                      "Due diligence antes de ingresar la señal",
                      "Gestor personal hasta escritura — no call center",
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
                      placement="comprar_piso_nacional_hero_whatsapp"
                      serviceLabel={SERVICE_LABEL}
                      needType="compra"
                      mode="direct"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      WhatsApp
                    </WhatsAppLeadLink>
                  </div>
                </div>
                <div className="relative order-2 h-48 sm:h-64 lg:order-none lg:h-auto lg:min-h-[520px]">
                  <Image
                    src="/images/gestoria3.jpg"
                    alt="Comprar piso sin agencia con gestoría Livendia"
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
                ¿Para quién es comprar sin agencia?
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-[#64748b]">
                Para <strong className="text-[#1E293B]">compradores particulares</strong> que ya tienen vivienda
                elegida y buscan en Google cómo revisar reserva, arras y documentación sin depender solo del contrato
                del vendedor o de una agencia compradora con comisión sobre el precio.
              </p>
              <div className="mt-10 grid gap-6 sm:grid-cols-3">
                {[
                  { icon: Users, title: "Particular con piso elegido", text: "Idealista, Milanuncios, boca a boca" },
                  { icon: Shield, title: "Contratos revisados", text: "Reserva y arras con gestor legal" },
                  { icon: Handshake, title: "890 €, no 3 %", text: "Tarifa plana de gestoría del comprador" },
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
                Tarifa plana frente a honorarios sobre el precio
              </h2>
              <div className="mt-8 overflow-x-auto rounded-2xl ring-1 ring-slate-200">
                <table className="w-full min-w-[480px] text-left text-sm">
                  <thead className="bg-[#1A4FBF] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Precio compra</th>
                      <th className="px-4 py-3 font-semibold">3 % + IVA</th>
                      <th className="px-4 py-3 font-semibold">Livendia</th>
                      <th className="px-4 py-3 font-semibold">Ahorro vs 3 %</th>
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
              <p className="mt-4 text-center text-sm text-[#64748b]">
                Ejemplo: en {formatEur(highlight.salePrice)} el ahorro orientativo vs 3 % es{" "}
                {formatEur(highlight.savingVs3)} ({formatEur(agencyCommissionWithVat(highlight.salePrice, 3))} + IVA).
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">Comprar sin agencia por ciudad</h2>
              <p className="mt-3 text-[#64748b]">
                Landings locales con copy de comprador, los cinco pasos del servicio, gestores expertos (Barcelona y
                barrios AMB), comparativa de tarifa y enlace al{" "}
                <Link href="/servicios/servicio-completo-compra" className="font-semibold text-[#1A4FBF] hover:underline">
                  servicio completo de compra
                </Link>
                .
              </p>
              <div className="mt-6">
                <ComprarPisoSinAgenciaCityLinks />
              </div>
              <p className="mt-6 text-sm text-[#64748b]">
                Ficha de producto:{" "}
                <Link href="/servicios/servicio-completo-compra" className="font-semibold text-[#1A4FBF] hover:underline">
                  Servicio completo de compra (España)
                </Link>
                {" · "}
                <Link
                  href="/servicios/servicio-completo-compra-local/madrid"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  Compra local Madrid
                </Link>
              </p>
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel={SERVICE_LABEL}
            needType="compra"
            placement="comprar_piso_nacional_mid"
          />

          <FaqSection
            title="Comprar piso sin agencia — preguntas frecuentes"
            subtitle="Compra entre particulares, gestoría Livendia y relación con el servicio completo de compra."
            items={[...FAQ]}
          />

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-10 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-6 w-6 shrink-0 text-amber-700" aria-hidden />
              <p className="text-sm leading-relaxed text-amber-950">
                Livendia no es agencia inmobiliaria ni portal de anuncios. No buscamos vivienda ni cobramos comisión
                sobre el precio de compra. Somos gestoría: acompañamiento jurídico-documental del comprador.
              </p>
            </div>
          </section>

          <GestorContactCta placement="comprar_piso_nacional" serviceLabel={SERVICE_LABEL} />
        </main>
        <ServiceLandingSharedSections />
        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
