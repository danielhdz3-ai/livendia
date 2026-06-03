"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Check, Mail, MessageCircle, Phone } from "lucide-react";
import type { PublicService } from "@/lib/catalog.public";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";

const WA_MODAL = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHrefModal = `https://wa.me/${WA_MODAL.replace(/\D/g, "")}`;

interface ServiceModalProps {
  service: PublicService;
  onClose: () => void;
  onCheckout: (
    service: PublicService,
    formData: {
      fullName: string;
      email: string;
      phone: string;
    },
  ) => void;
}

export function ServiceModal({ service, onClose, onCheckout }: ServiceModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    document.body.classList.add("livendia-modal-open");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.classList.remove("livendia-modal-open");
      document.body.style.overflow = "";
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onCheckout(service, { fullName, email, phone });
    setIsSubmitting(false);
  };

  const benefits = service.is_recurring
    ? [
        "Cero contacto con el inquilino",
        "Gestión de incidencias y reparaciones",
        "Seguimiento de renovaciones",
        "Mediación de conflictos",
        "Alertas solo cuando sea necesario",
        "Atención al inquilino 24/7",
      ]
    : [
        "Redactado por gestores inmobiliarios especializados",
        "Adaptado a la normativa vigente y a tu operación",
        "Revisión datos registrales y nota simple incluida",
        "Entrega en 24-48h laborables tras la verificación",
        "Pago 100% seguro procesado por Stripe",
        "Seguimiento completo por email y WhatsApp",
      ];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="service-modal-title"
    >
      <div
        className="relative flex max-h-[92dvh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl bg-white shadow-2xl sm:max-h-[90vh] sm:rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/95 text-slate-600 shadow-lg ring-1 ring-slate-200 hover:text-slate-900 sm:right-4 sm:top-4"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="overflow-y-auto overscroll-contain">
          <div className="grid md:grid-cols-2">
            <div className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] p-5 text-white sm:p-8 md:p-10">
              <div className="mb-3 inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-semibold sm:text-sm">
                SERVICIO SELECCIONADO
              </div>

              <h2 id="service-modal-title" className="pr-10 text-xl font-bold leading-snug sm:text-2xl md:text-3xl">
                {service.name}
              </h2>

              <div className="mt-4 flex items-baseline gap-2 sm:mt-6">
                <span className="text-4xl font-extrabold sm:text-5xl">
                  {(service.price_cents / 100).toFixed(0)} €
                </span>
                {service.is_recurring ? <span className="text-base text-blue-200 sm:text-lg">/mes</span> : null}
              </div>
              <p className="mt-1 text-sm text-blue-100">
                {service.is_recurring ? "Sin permanencia" : "Pago único · IVA incluido"}
              </p>

              {service.description ? (
                <p className="mt-4 line-clamp-4 text-sm leading-relaxed text-blue-50 sm:mt-6 sm:line-clamp-none sm:text-base">
                  {service.description}
                </p>
              ) : null}

              <div className="mt-5 hidden space-y-2.5 sm:mt-8 sm:block">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#06B6D4]">
                      <Check className="h-3 w-3 text-white" strokeWidth={3} />
                    </div>
                    <span className="text-sm leading-relaxed text-blue-50">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] sm:p-8 md:p-10">
              <h3 className="text-lg font-bold text-[#1E293B] sm:text-xl">Completa tu pedido</h3>
              <p className="mt-2 text-sm text-[#64748b]">
                Introduce tus datos y continúa al <strong>pago seguro con tarjeta</strong>. Si aún no tienes cuenta,
                la creamos automáticamente.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-[#1E293B]">
                    Nombre completo <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="María García López"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-base sm:text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1E293B]">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maria@ejemplo.com"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-base sm:text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1E293B]">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Ej. 612 345 678"
                    className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-base sm:text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex min-h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] py-3.5 text-base font-bold text-[#1E293B] shadow-lg transition hover:shadow-xl disabled:opacity-50"
                >
                  {isSubmitting ? "Procesando..." : `Pagar ${(service.price_cents / 100).toFixed(0)} € con tarjeta`}
                </button>

                <p className="flex items-center justify-center gap-2 text-xs text-[#64748b]">
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden>
                    <path
                      fillRule="evenodd"
                      d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Pago seguro con Stripe
                </p>
              </form>

              <div className="mt-5 hidden border-t border-slate-200 pt-5 sm:block">
                <div className="flex items-center gap-3 text-xs text-[#64748b]">
                  <Image
                    src="/images/gestoria3.jpg"
                    alt=""
                    width={80}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                  <p className="leading-relaxed">
                    <strong className="text-[#1E293B]">Gestoría inmobiliaria profesional</strong>
                    <br />
                    +500 contratos tramitados
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
