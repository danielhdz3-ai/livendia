import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { ContratarServicioButton, ServicePurchaseProvider } from "@/components/service-purchase-provider";
import { getPublicServices } from "@/lib/catalog";
import { getWhatsAppHref, businessNap } from "@/lib/business-nap";
import { CAMPAIGN_URLS } from "@/lib/campaign-links";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Shield, Clock, Wrench, Users, CheckCircle2, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Administración de alquiler para propietarios — delega el contacto con el inquilino",
  description:
    "Desde 49 €/mes sin permanencia. Gestor asignado, incidencias, renovaciones y panel online. Valoración 5.0 en Google. Contrata en Livendia.",
  alternates: { canonical: "https://livendia.com/para-propietarios" },
};

const waPrefill =
  "Hola, soy propietario y me interesa la administración de alquiler (49€/mes). ¿Me podéis orientar?";

export default async function ParaPropietariosPage() {
  const services = await getPublicServices();
  const rental = services.find((s) => s.slug === "administracion-alquiler") ?? null;
  const waHref = getWhatsAppHref(waPrefill);

  const steps = [
    { n: "1", title: "Contratas online", body: "49 €/mes IVA incl. Sin permanencia. Pago seguro con Stripe." },
    { n: "2", title: "Subes datos del piso", body: "Contrato, inquilino y documentación en tu panel privado." },
    { n: "3", title: "Nosotros somos el contacto", body: "El inquilino escribe y llama a Livendia, no a ti." },
    { n: "4", title: "Te informamos lo importante", body: "Pagos, decisiones y renovaciones — sin ruido diario." },
  ];

  return (
    <ServicePurchaseProvider service={rental}>
      <div className="flex flex-col">
        <PublicHeader />

        <section className="bg-gradient-to-br from-[#1E3A8A] via-[#1E40AF] to-[#2563EB] text-white">
          <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:py-16">
            <div className="flex flex-col justify-center">
              <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Para propietarios</p>
              <h1 className="mt-3 text-3xl font-bold leading-snug sm:text-4xl lg:text-5xl">
                Delega la administración de tu alquiler y recupera tu tranquilidad
              </h1>
              <p className="mt-4 text-base leading-relaxed text-blue-50 sm:text-lg">
                {businessNap.category} digital: gestor asignado, incidencias, reparaciones y renovaciones. Tú decides;
                nosotros gestionamos al inquilino.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <ContratarServicioButton className="inline-flex min-h-11 w-full items-center justify-center rounded-full bg-white px-6 py-3.5 text-base font-bold text-[#1E3A8A] shadow-xl hover:bg-blue-50 sm:w-auto">
                  Contratar 49 €/mes
                </ContratarServicioButton>
                <a
                  href={waHref}
                  data-analytics-placement="para_propietarios_hero_whatsapp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 w-full items-center justify-center rounded-full border-2 border-white px-6 py-3.5 text-base font-semibold hover:bg-white/10 sm:w-auto"
                >
                  Hablar por WhatsApp
                </a>
              </div>
              <p className="mt-4 text-sm text-blue-200">
                Horario {businessNap.openingHours.opens}–{businessNap.openingHours.closes} (L–V) · Tel.{" "}
                {businessNap.telephoneDisplay()}
                {" · "}
                <Link href="/servicios/administracion-alquiler-local/valencia" className="underline hover:text-white">
                  Gestión de alquileres en Valencia
                </Link>
              </p>
            </div>
            <div className="relative h-56 sm:h-72 lg:h-auto lg:min-h-[320px]">
              <Image
                src="/images/chica-mobile.jpg"
                alt="Propietaria gestionando su alquiler desde el móvil con Livendia"
                fill
                className="rounded-2xl object-cover lg:rounded-none"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </section>

        <section className="border-b border-amber-100 bg-amber-50/80 py-12 sm:py-14">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="grid gap-8 rounded-2xl border border-amber-200/80 bg-white p-6 shadow-sm ring-1 ring-amber-100 sm:grid-cols-[1fr_auto] sm:items-center sm:p-8">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wide text-amber-800">Venta entre particulares</p>
                <h2 className="mt-2 text-2xl font-bold text-[#1E293B] sm:text-3xl">
                  ¿Vendes tu piso sin agencia?
                </h2>
                <p className="mt-3 max-w-2xl text-[#475569]">
                  Te acompañamos desde la reserva hasta la escritura: gestor personalizado, contratos de reserva y arras,
                  recopilación de documentación y asesoramiento hasta notaría.
                </p>
              </div>
              <div className="flex flex-col gap-2 sm:items-end">
                <Link
                  href="/servicios/vender-piso-sin-agencia-barcelona"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] px-6 py-3.5 text-center text-base font-bold text-white hover:bg-[#2563EB]"
                >
                  Vender sin comisiones en Barcelona
                </Link>
                <Link
                  href="/servicios/servicio-completo-venta"
                  className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-full border-2 border-[#1A4FBF] px-6 py-3.5 text-center text-base font-bold text-[#1A4FBF] hover:bg-amber-50"
                >
                  Servicio completo de venta
                </Link>
                <p className="text-xs text-amber-900/80">
                  Madrid · Valencia · Barcelona —{" "}
                  <Link href="/servicios/servicio-completo-venta-local" className="font-semibold underline">
                    ver por ciudad
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-[#1E293B] sm:text-3xl">Cómo funciona</h2>
            <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((s) => (
                <li key={s.n} className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6">
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1A4FBF] text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-3 font-bold text-[#1E293B]">{s.title}</h3>
                  <p className="mt-2 text-sm text-[#475569]">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="bg-[#EFF3F9] py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="text-center text-2xl font-bold text-[#1E293B]">Qué dejas de hacer tú</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { icon: Users, text: "Cero llamadas y mensajes del inquilino" },
                { icon: Wrench, text: "Coordinación de reparaciones e incidencias" },
                { icon: Clock, text: "Seguimiento de renovaciones y plazos" },
                { icon: Shield, text: "Mediación profesional si hay conflicto" },
              ].map(({ icon: Icon, text }) => (
                <li
                  key={text}
                  className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-200"
                >
                  <Icon className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                  <span className="text-[#1E293B]">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-gradient-to-br from-[#1E3A8A] to-[#2563EB] py-12 text-white sm:py-16">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <h2 className="text-2xl font-bold sm:text-3xl">49 €/mes · IVA incluido · Sin permanencia</h2>
            <ul className="mx-auto mt-6 max-w-md space-y-2 text-left text-blue-50">
              {[
                "Gestor asignado y panel online",
                "Gestión de incidencias y comunicación con inquilino",
                "Seguimiento de renovaciones",
              ].map((line) => (
                <li key={line} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-300" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <ContratarServicioButton className="inline-flex min-h-11 w-full max-w-xs items-center justify-center rounded-full bg-white px-8 py-3.5 font-bold text-[#1E3A8A] hover:bg-blue-50 sm:w-auto">
                Contratar ahora
              </ContratarServicioButton>
              <Link
                href="/servicios/administracion-alquiler"
                className="text-sm font-semibold text-cyan-200 underline hover:text-white"
              >
                Ver ficha completa del servicio
              </Link>
            </div>
            <p className="mt-6 text-xs text-blue-200">
              También disponible en{" "}
              <Link href="/servicios/administracion-alquiler-local/madrid" className="underline">
                Madrid
              </Link>
              ,{" "}
              <Link href="/servicios/administracion-alquiler-local/valencia" className="underline">
                Valencia
              </Link>
              ,{" "}
              <Link href="/servicios/administracion-alquiler-local/barcelona" className="underline">
                Barcelona
              </Link>{" "}
              y toda España.
            </p>
          </div>
        </section>

        <section className="border-t border-slate-200 bg-white py-10">
          <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 text-center sm:px-6">
            <Phone className="h-8 w-8 text-[#1A4FBF]" aria-hidden />
            <p className="text-[#475569]">
              ¿Prefieres hablar antes?{" "}
              <a
                href={businessNap.telephoneTel()}
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                {businessNap.telephoneDisplay()}
              </a>{" "}
              o{" "}
              <a
                href={waHref}
                data-analytics-placement="para_propietarios_footer_whatsapp"
                className="font-semibold text-[#1A4FBF] hover:underline"
              >
                WhatsApp
              </a>
            </p>
            <p className="text-xs text-[#64748B]">
              Enlace de campaña ejemplo:{" "}
              <code className="rounded bg-slate-100 px-1">{CAMPAIGN_URLS.administracionPropietarios}</code>
            </p>
          </div>
        </section>

        <SiteFooter />
      </div>
    </ServicePurchaseProvider>
  );
}
