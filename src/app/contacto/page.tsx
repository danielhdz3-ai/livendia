import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { OfficeMap } from "@/components/office-map";
import { ContactForm } from "./contact-form";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import {
  BUSINESS_EMAIL,
  businessNap,
  getBusinessAddressDisplayLine,
  getBusinessMapsExternalUrl,
} from "@/lib/business-nap";
import { getSiteUrl } from "@/lib/site-url";
import { REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL } from "@/lib/catalog.public";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "WhatsApp, teléfono, despacho en Barcelona y formulario: consultas sobre contratos de alquiler, arras, compraventa y administración de alquileres.",
  alternates: { canonical: `${getSiteUrl()}/contacto` },
};

export default function ContactoPage() {
  const address = getBusinessAddressDisplayLine();
  const phoneDisplay = getContactPhoneDisplay();
  const phoneTel = getContactPhoneTelHref();
  const mapsUrl = getBusinessMapsExternalUrl();

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[#1A4FBF] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contacto</h1>
            <p className="mt-3 max-w-2xl text-lg text-blue-100">
              Cuéntanos en qué podemos ayudarte. Recibirás respuesta por email. Para algo inmediato, usa
              WhatsApp.
            </p>
            <p className="mt-4 max-w-2xl text-sm text-blue-200">
              Esta es la página principal para consultas comerciales. Si buscas tarifas publicadas, consulta{" "}
              <Link href="/precios" className="font-semibold text-white underline hover:text-blue-50">
                precios
              </Link>
              ; si quieres conocer al equipo, visita{" "}
              <Link href="/equipo" className="font-semibold text-white underline hover:text-blue-50">
                equipo
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={phoneTel}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1A4FBF] hover:bg-blue-50"
              >
                Llamar: {phoneDisplay}
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-full border-2 border-[#06B6D4] px-6 py-3 text-sm font-semibold hover:bg-[#06B6D4]"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </section>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-2 sm:px-6">
          <div className="rounded-2xl bg-white p-8 shadow-md ring-1 ring-slate-200">
            <h2 className="text-lg font-bold text-[#1E293B]">Formulario</h2>
            <p className="mt-2 text-sm text-[#64748b]">
              Los campos marcados con el navegador como obligatorios son requeridos.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#1E293B]">Horario</h2>
              <p className="mt-2 text-sm text-[#475569]">
                L–V {businessNap.openingHours.opens}–{businessNap.openingHours.closes}. Respondemos consultas por
                formulario en días laborables. WhatsApp puede ser más rápido para coordinar.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#1E293B]">¿Buscas un servicio concreto?</h2>
              <p className="mt-2 text-sm text-[#475569]">
                En la página de cada servicio también puedes pedir información sin compromiso, ya con el
                contexto de tu ciudad.
              </p>
              <Link href="/servicios" className="mt-3 inline-block text-sm font-semibold text-[#06B6D4] hover:underline">
                Ver todos los servicios →
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#1E293B]">Ya soy cliente</h2>
              <p className="mt-2 text-sm text-[#475569]">
                Para el seguimiento de un pedido concreto, entra a tu panel y abre el expediente del servicio.
              </p>
              <Link
                href="/login?next=/dashboard"
                className="mt-3 inline-block text-sm font-semibold text-[#06B6D4] hover:underline"
              >
                Acceder al panel →
              </Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#1E293B]">Despacho</h2>
              <ul className="mt-3 space-y-2 text-sm text-[#475569]">
                <li className="flex items-start gap-2">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
                  <a
                    href={mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-[#1A4FBF] hover:underline"
                  >
                    {address}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
                  <a href={phoneTel} className="font-medium text-[#1A4FBF] hover:underline">
                    {phoneDisplay}
                  </a>
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
                  <a href={`mailto:${BUSINESS_EMAIL}`} className="font-medium text-[#1A4FBF] hover:underline">
                    {BUSINESS_EMAIL}
                  </a>
                </li>
              </ul>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
                <OfficeMap showCaption={false} minHeightClassName="min-h-[220px]" />
              </div>
              <p className="mt-4 text-sm text-[#475569]">
                ¿Firmaste arras y compras en Les Corts o Pedralbes? Consulta la{" "}
                <Link
                  href="/servicios/revision-documental-post-arras/les-corts"
                  className="font-semibold text-[#1A4FBF] hover:underline"
                >
                  revisión documental post-arras en Les Corts
                </Link>{" "}
                — mismo despacho, {REVISION_DOCUMENTAL_POST_ARRAS_PRICE_LABEL} IVA incl.
              </p>
            </div>
          </div>
        </div>

        <GestorContactCta placement="contacto" />
      </main>
      <SiteFooter />
    </div>
  );
}
