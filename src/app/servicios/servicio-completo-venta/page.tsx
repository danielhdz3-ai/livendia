import { PublicHeader } from "@/components/public-header";
import { ServiceLandingSharedSections } from "@/components/service-landing-shared-sections";
import { SiteFooter } from "@/components/site-footer";
import { ServiceStructuredDataFromCatalog } from "@/components/service-structured-data";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import {
  SERVICIO_COMPLETO_CV_PRICE_LABEL,
  SERVICIO_COMPLETO_CV_PRICE_LABEL_COMPACT,
} from "@/lib/catalog.public";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { ServiceMidPageContactSection } from "@/components/service-mid-page-contact-section";
import { WhatsAppLeadLink } from "@/components/whatsapp-lead-button";
import { ServicioCompletoVentaLocalCityLinks } from "@/components/servicio-completo-venta-local-city-links";
import {
  AlertCircle,
  Banknote,
  CheckCircle,
  ClipboardList,
  FileText,
  Handshake,
  Home,
  Scale,
  Shield,
  Users,
} from "lucide-react";

/**
 * ISR: revalida cada 5 min para que los precios/estado del catalogo
 * (getPublicServices, cliente Supabase anonimo) no queden fijados hasta
 * el proximo despliegue. Cambiar este numero (segundos) si se necesita
 * otra frecuencia -- ver SEO_ROADMAP.md.
 */
export const revalidate = 300;

export const metadata: Metadata = {
  title: "Acompañamiento de venta sin agencia: gestor inmobiliario hasta escritura | Livendia",
  description:
    "Vende tu piso entre particulares sin comisiones del 3–5 %: gestor inmobiliario especializado en la venta, reserva, arras, documentación y asesoramiento hasta notaría. 890 € IVA incluido.",
  alternates: { canonical: "https://livendia.com/servicios/servicio-completo-venta" },
  openGraph: {
    title: "Servicio completo de venta — Livendia",
    description:
      "Vende tu piso entre particulares con gestor personalizado: reserva, arras, documentación y escritura.",
    images: [{ url: "/images/servicio-completo-venta-hero.jpg", width: 1200, height: 1600, alt: "Acuerdo de venta de vivienda con gestoría" }],
  },
};

const SERVICE_LABEL = "Servicio completo de venta";

export default async function ServicioCompletoVentaPage() {
  const catalog = await getPublicServices();
  const service = catalog.find((s) => s.slug === "servicio-completo-venta") ?? null;
  const priceLabel = service ? `${(service.price_cents / 100).toFixed(0)} €` : SERVICIO_COMPLETO_CV_PRICE_LABEL;

  const howItWorks = [
    {
      icon: ClipboardList,
      step: "1",
      title: "Estudiamos tu operación",
      description:
        "Analizamos el inmueble, el perfil del comprador, el calendario y los riesgos antes de que firmes compromisos que te atan.",
    },
    {
      icon: FileText,
      step: "2",
      title: "Reserva y arras bien redactadas",
      description:
        "Redactamos el contrato de reserva y el de arras (penitenciales o confirmatorias) alineados con lo que quieres vender y cobrar.",
    },
    {
      icon: Shield,
      step: "3",
      title: "Documentación lista para notaría",
      description:
        "Te guiamos para recabar nota simple, comunidad, certificados, ITE si aplica y el resto de papel que suele frenar la escritura.",
    },
    {
      icon: Handshake,
      step: "4",
      title: "Hasta la escritura con éxito",
      description:
        "Asesoramiento en cada hito con el comprador y checklist pre-escritura para llegar a notaría con seguridad.",
    },
  ];

  const benefits = [
    {
      icon: Users,
      title: "Gestor personal para tu venta",
      description: "Un interlocutor experto que conoce tu caso y responde dudas durante todo el proceso.",
    },
    {
      icon: Home,
      title: "Pensado para venta entre particulares",
      description: "Sin agencia obligatoria: tú vendes a un comprador particular con respaldo profesional.",
    },
    {
      icon: Scale,
      title: "Contratos que protegen al vendedor",
      description: "Cláusulas claras en reserva y arras sobre precio, plazos, cargas y consecuencias del desistimiento.",
    },
    {
      icon: FileText,
      title: "Menos sorpresas documentales",
      description: "Detectamos antes lo que suele retrasar la escritura: derramas, cargas o documentación incompleta.",
    },
  ];

  const includes = service?.features ?? [
    "Estudio de la operación con gestor personalizado",
    "Redacción de contrato de reserva",
    "Redacción de contrato de arras",
    "Ayuda para recabar documentación del inmueble",
    "Asesoramiento hasta la escritura",
    "Área de cliente Livendia",
  ];

  return (
    <ServicePurchaseProvider service={service}>
      {service ? <ServiceStructuredDataFromCatalog service={service} /> : null}
      <div className="flex min-h-screen flex-col bg-white">
        <PublicHeader />

        <main className="flex-1">
          <section className="relative overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#1E40AF] to-[#2563EB] text-white">
            <div className="mx-auto max-w-7xl">
              <div className="grid min-h-0 lg:grid-cols-2 lg:min-h-[600px]">
                <div className="flex flex-col justify-center px-4 py-10 sm:px-6 sm:py-14 lg:px-12 lg:py-24">
                  <div className="mb-6 inline-flex self-start rounded-full bg-white/20 px-5 py-2 text-sm font-semibold backdrop-blur-sm">
                    Venta entre particulares
                  </div>
                  <h1 className="text-2xl font-bold leading-snug sm:text-3xl lg:text-5xl">
                    Acompañamiento de venta con gestor inmobiliario especializado
                  </h1>
                  <p className="mt-6 text-lg leading-relaxed text-blue-50 sm:text-xl">
                    {service?.description ??
                      "Vende tu piso entre particulares sin agencia inmobiliaria: desde la reserva hasta la escritura con un gestor que redacta contratos, ordena la documentación y te asesora en cada paso."}
                  </p>
                  <div className="mt-10 flex items-baseline gap-3">
                    <span className="text-4xl font-extrabold sm:text-5xl lg:text-6xl">{priceLabel}</span>
                    <span className="text-lg text-blue-100">IVA incluido · Pago único</span>
                  </div>
                  <ul className="mt-8 space-y-3">
                    {[
                      "Gestor personalizado asignado",
                      "Reserva y arras redactadas por expertos",
                      "Documentación y asesoramiento hasta notaría",
                    ].map((line) => (
                      <li key={line} className="flex items-center gap-3 text-lg">
                        <CheckCircle className="h-6 w-6 shrink-0 text-cyan-300" />
                        {line}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10 flex flex-wrap gap-4">
                    <ContratarServicioButton className="inline-flex min-h-11 items-center justify-center rounded-full bg-white px-8 py-4 text-base font-bold text-[#1A4FBF] shadow-xl hover:bg-blue-50">
                      Contratar · {priceLabel}
                    </ContratarServicioButton>
                    <WhatsAppLeadLink
                      placement="servicio_completo_venta_hero_whatsapp"
                      serviceLabel={SERVICE_LABEL}
                      needType="venta"
                      mode="direct"
                      className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                    >
                      Consultar por WhatsApp
                    </WhatsAppLeadLink>
                  </div>
                  <p className="mt-6 text-sm text-blue-200">
                    ¿Compras en lugar de vender?{" "}
                    <Link href="/servicios/servicio-completo-compra" className="font-semibold underline hover:text-white">
                      Ver servicio completo de compra
                    </Link>
                  </p>
                </div>
                <div className="relative h-44 sm:h-56 lg:h-auto lg:min-h-[600px]">
                  <Image
                    src="/images/servicio-completo-venta-hero.jpg"
                    alt="Acuerdo de venta de vivienda entre particulares con gestoría Livendia"
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                    priority
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
                ¿Para quién es este servicio?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-[#64748B]">
                Para <strong className="text-[#1E293B]">propietarios particulares</strong> que han encontrado un{" "}
                <strong className="text-[#1E293B]">comprador particular</strong> y quieren vender con la misma
                tranquilidad que quien compra con gestoría: sin improvisar contratos ni llegar a notaría con lagunas.
              </p>
              <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {benefits.map((b) => {
                  const Icon = b.icon;
                  return (
                    <div key={b.title} className="rounded-2xl bg-white p-6 shadow-md ring-1 ring-slate-200">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#06B6D4]/10">
                        <Icon className="h-6 w-6 text-[#06B6D4]" />
                      </div>
                      <h3 className="mt-4 text-lg font-bold text-[#1E293B]">{b.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#475569]">{b.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-white px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
                Vender sin agencia inmobiliaria: ¿cuándo tiene sentido?
              </h2>
              <p className="mx-auto mt-4 max-w-3xl text-center text-lg leading-relaxed text-[#64748B]">
                Si <strong className="text-[#1E293B]">ya tienes comprador particular</strong>, pagar una comisión del
                3–5 % sobre el precio de venta suele ser desproporcionado: la agencia aporta captación y marketing, no el
                tramo jurídico-documental de reserva, arras y escritura. Livendia cubre ese tramo con un{" "}
                <strong className="text-[#1E293B]">gestor inmobiliario especializado en la venta</strong> por{" "}
                <strong className="text-[#1E293B]">{priceLabel} IVA incluido</strong>.
              </p>
              <div className="mt-10 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <table className="w-full text-left text-sm">
                  <thead className="bg-[#1A4FBF] text-white">
                    <tr>
                      <th className="px-4 py-3 font-semibold">Concepto</th>
                      <th className="px-4 py-3 font-semibold">Agencia tradicional</th>
                      <th className="px-4 py-3 font-semibold">Livendia</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200 bg-[#F8FAFC]">
                    <tr>
                      <td className="px-4 py-3 font-medium">Honorarios típicos (piso 300.000 €)</td>
                      <td className="px-4 py-3 text-[#475569]">9.000–15.000 € + IVA</td>
                      <td className="px-4 py-3 font-semibold text-[#1A4FBF]">{priceLabel} · IVA incl.</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Exclusiva</td>
                      <td className="px-4 py-3 text-[#475569]">Frecuente</td>
                      <td className="px-4 py-3 text-[#475569]">No obligatoria</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Enfoque</td>
                      <td className="px-4 py-3 text-[#475569]">Captar comprador</td>
                      <td className="px-4 py-3 text-[#475569]">Contratos + documentación + asesoramiento</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <Banknote className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                <p className="text-center text-sm font-medium text-[#475569]">
                  Ahorra comisiones altas y mantén control de la operación con respaldo profesional.
                </p>
              </div>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-center text-3xl font-extrabold text-[#1E293B]">Qué incluye el acompañamiento</h2>
              <ul className="mt-10 space-y-4">
                {includes.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 rounded-xl border border-slate-200 bg-[#F8FAFC] px-5 py-4 text-[#334155]"
                  >
                    <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8 text-center text-sm text-[#64748B]">
                Solo necesitas un contrato de arras suelto?{" "}
                <Link href="/servicios/contrato-arras-penitenciales" className="font-semibold text-[#1A4FBF] hover:underline">
                  Contrato de arras penitenciales
                </Link>
                {" · "}
                <Link href="/servicios/contrato-de-arras" className="font-semibold text-[#1A4FBF] hover:underline">
                  Guía de arras
                </Link>
              </p>
            </div>
          </section>

          <section className="border-b border-slate-200 bg-[#F1F5F9] px-4 py-16 sm:px-6 lg:py-20">
            <div className="mx-auto max-w-7xl">
              <h2 className="text-center text-3xl font-extrabold text-[#1E293B] sm:text-4xl">Cómo te acompañamos</h2>
              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                {howItWorks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.step} className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-lg font-bold text-white">
                          {item.step}
                        </span>
                        <Icon className="h-8 w-8 text-[#06B6D4]" />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-[#1E293B]">{item.title}</h3>
                      <p className="mt-3 leading-relaxed text-[#475569]">{item.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          <ServiceMidPageContactSection
            serviceLabel={SERVICE_LABEL}
            needType="venta"
            placement="servicio_completo_venta_mid"
          />

          <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-2xl font-bold text-[#1E293B] sm:text-3xl">
                Acompañamiento de venta por ciudad
              </h2>
              <p className="mt-3 text-[#64748B]">
                Contenido local para Madrid, Barcelona y Valencia: vender sin agencia, comparativa de costes y proceso
                con gestor en tu zona.
              </p>
              <div className="mt-6">
                <ServicioCompletoVentaLocalCityLinks />
              </div>
            </div>
          </section>

          <GestorContactCta placement="servicio_completo_venta" serviceLabel={SERVICE_LABEL} />

          <section className="border-b border-slate-200 bg-amber-50 px-4 py-12 sm:px-6">
            <div className="mx-auto flex max-w-4xl gap-4">
              <AlertCircle className="h-10 w-10 shrink-0 text-amber-800" />
              <div>
                <h3 className="text-lg font-bold text-[#1E293B]">Importante</h3>
                <p className="mt-2 leading-relaxed text-[#475569]">
                  El servicio cubre asesoramiento, redacción de contratos privados y coordinación documental. Las tasas
                  notariales, registrales e impuestos de la transmisión (por ejemplo, plusvalía municipal o IRPF en la
                  venta) son independientes y te las explicamos para que no haya sorpresas.
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] px-4 py-16 text-white sm:px-6 lg:py-20">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-3xl font-extrabold sm:text-4xl">Vende tu piso con respaldo profesional</h2>
              <p className="mt-4 text-lg text-blue-100">
                Contrata online, sube la documentación en tu área de cliente y trabaja con tu gestor hasta la escritura.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <ContratarServicioButton className="rounded-full bg-white px-10 py-4 text-lg font-bold text-[#1A4FBF] shadow-xl hover:bg-slate-50">
                  Contratar ahora
                </ContratarServicioButton>
                <Link
                  href="/para-propietarios"
                  className="inline-flex items-center rounded-full border-2 border-white px-8 py-4 text-base font-semibold hover:bg-white/10"
                >
                  También alquilo mi piso
                </Link>
              </div>
            </div>
          </section>
        </main>
        <ServiceLandingSharedSections
          serviceLabel="Servicio completo de venta"
          primarySlug="servicio-completo-venta"
        />


        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
