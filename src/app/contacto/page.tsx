import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin } from "lucide-react";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { OfficeMap } from "@/components/office-map";
import { ContactForm } from "./contact-form";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";
import {
  businessNap,
  getBusinessAddressDisplayLine,
  getBusinessMapsExternalUrl,
} from "@/lib/business-nap";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "WhatsApp, teléfono, despacho en Barcelona y formulario: consultas sobre contratos de alquiler, arras, compraventa y administración de alquileres.",
};

export default function ContactoPage() {
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
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={getContactPhoneTelHref()}
                className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1E3A8A] hover:bg-blue-50"
              >
                Llamar: {getContactPhoneDisplay()}
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
            <p className="mt-2 text-sm text-[#64748b]">Los campos marcados con el navegador como obligatorios son requeridos.</p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#1E293B]">Despacho</h2>
              <p className="mt-2 flex items-start gap-2 text-sm text-[#475569]">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
                <a
                  href={getBusinessMapsExternalUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#1A4FBF] hover:underline"
                >
                  {getBusinessAddressDisplayLine()}
                </a>
              </p>
              <div className="mt-4 overflow-hidden rounded-xl ring-1 ring-slate-200">
                <OfficeMap minHeightClassName="min-h-[220px]" />
              </div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="font-semibold text-[#1E293B]">Horario</h2>
              <p className="mt-2 text-sm text-[#475569]">
                L–V {businessNap.openingHours.opens}–{businessNap.openingHours.closes}. Respondemos consultas por
                formulario en días laborables. WhatsApp puede ser más rápido para coordinar.
              </p>
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
          </div>
        </div>

        <GestorContactCta placement="contacto" />
      </main>
      <SiteFooter />
    </div>
  );
}
