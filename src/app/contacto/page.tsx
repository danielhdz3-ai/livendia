import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import type { Metadata } from "next";
import Link from "next/link";
import { ContactForm } from "./contact-form";

const WA = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600000000";
const waHref = `https://wa.me/${WA.replace(/\D/g, "")}`;

export const metadata: Metadata = {
  title: "Contacto — Livendia",
  description: "Escríbenos para dudas sobre servicios, alquiler o contratos. Gestoría inmobiliaria digital.",
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
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex rounded-full border-2 border-[#06B6D4] px-6 py-3 text-sm font-semibold hover:bg-[#06B6D4]"
            >
              WhatsApp
            </a>
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
              <h2 className="font-semibold text-[#1E293B]">Horario</h2>
              <p className="mt-2 text-sm text-[#475569]">
                Respondemos consultas por formulario en días laborables. WhatsApp puede ser más rápido para
                coordinar.
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
                Ir al panel →
              </Link>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
