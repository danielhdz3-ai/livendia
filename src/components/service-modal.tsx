"use client";

import { useState } from "react";
import Image from "next/image";
import { X, Check, Mail, MessageCircle, Phone } from "lucide-react";
import type { PublicService } from "@/lib/catalog.public";
import { getContactPhoneDisplay, getContactPhoneTelHref } from "@/lib/contact";

const WA_MODAL = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "34600367742";
const waHrefModal = `https://wa.me/${WA_MODAL.replace(/\D/g, "")}`;

interface ServiceModalProps {
  service: PublicService;
  onClose: () => void;
  onCheckout: (service: PublicService, formData: {
    fullName: string;
    email: string;
    phone: string;
  }) => void;
}

export function ServiceModal({ service, onClose, onCheckout }: ServiceModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div 
        className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 rounded-full bg-white/90 p-2 text-slate-600 shadow-lg hover:bg-white hover:text-slate-900"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="grid md:grid-cols-2">
          {/* Columna izquierda - Información del servicio */}
          <div className="bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] p-8 text-white md:p-10">
            <div className="mb-4 inline-block rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold">
              SERVICIO SELECCIONADO
            </div>
            
            <h2 className="text-2xl font-bold leading-tight md:text-3xl">{service.name}</h2>
            
            <div className="mt-6 flex items-baseline gap-2">
              <span className="text-5xl font-extrabold">{(service.price_cents / 100).toFixed(0)} €</span>
              {service.is_recurring && <span className="text-lg text-blue-200">/mes</span>}
            </div>
            <p className="mt-2 text-sm text-blue-100">
              {service.is_recurring ? "Sin suscripción. Sin permanencia" : "Pago único · IVA incluido"}
            </p>

            {service.description && (
              <p className="mt-6 leading-relaxed text-blue-50">
                {service.description}
              </p>
            )}

            <div className="mt-8 space-y-3">
              {benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-[#06B6D4]">
                    <Check className="h-3 w-3 text-white" strokeWidth={3} />
                  </div>
                  <span className="text-sm leading-relaxed text-blue-50">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 space-y-2 border-t border-white/20 pt-6 text-sm">
              <div className="flex items-center gap-2 text-blue-100">
                <Mail className="h-4 w-4 shrink-0" aria-hidden />
                <span>Seguimiento por email</span>
              </div>
              <div className="flex items-center gap-2 text-blue-100">
                <Phone className="h-4 w-4 shrink-0" aria-hidden />
                <a href={getContactPhoneTelHref()} className="font-medium hover:underline">
                  Tel. {getContactPhoneDisplay()}
                </a>
              </div>
              <a
                href={waHrefModal}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-100 hover:text-white"
              >
                <MessageCircle className="h-4 w-4 shrink-0" aria-hidden />
                <span>Soporte vía WhatsApp</span>
              </a>
            </div>

            <p className="mt-6 rounded-lg bg-white/10 p-4 text-xs leading-relaxed">
              <strong className="text-white">Gestoría inmobiliaria profesional:</strong> Nuestros
              gestores especializados te acompañan en todo el proceso. +500 contratos tramitados.
            </p>
          </div>

          {/* Columna derecha - Formulario de checkout */}
          <div className="p-8 md:p-10">
            <h3 className="text-xl font-bold text-[#1E293B]">Completa tu pedido</h3>
            <p className="mt-2 text-sm text-[#64748b]">
              Introduce tus datos y continúa al <strong>pago seguro con tarjeta</strong>. Si aún no tienes cuenta,
              la creamos automáticamente; después entrarás al panel para la documentación y el seguimiento.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
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
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
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
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
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
                  className="mt-1.5 w-full rounded-lg border border-slate-300 px-4 py-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
                />
              </div>

              <div className="rounded-lg bg-blue-50 p-4 text-xs leading-relaxed text-[#475569]">
                Tras enviar este formulario pasarás a <strong>Stripe</strong> para pagar el servicio. Cuando el cobro
                se confirme, tendrás acceso a tu <strong>panel</strong> para subir documentación y coordinar los
                siguientes pasos con tu gestor.
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-lg bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] py-4 text-base font-bold text-[#1E293B] shadow-lg transition hover:shadow-xl disabled:opacity-50"
              >
                {isSubmitting ? "Procesando..." : `Pagar ${(service.price_cents / 100).toFixed(0)} € con tarjeta`}
              </button>

              <p className="flex items-center justify-center gap-2 text-xs text-[#64748b]">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                Pago seguro con Stripe · Cifrado SSL
              </p>
            </form>

            <div className="mt-6 border-t border-slate-200 pt-6">
              <div className="flex items-center gap-3 text-xs text-[#64748b]">
                <div className="flex-1">
                  <Image src="/images/gestoria3.jpg" alt="Gestoría" width={80} height={60} className="rounded-lg object-cover" />
                </div>
                <p className="flex-[2] leading-relaxed">
                  <strong className="text-[#1E293B]">Gestoría inmobiliaria profesional</strong>
                  <br />
                  +500 contratos tramitados con éxito
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
