"use client";

import { MessageCircle, X } from "lucide-react";
import { useEffect, useId, useState } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";
import { getWhatsAppHref } from "@/lib/business-nap";
import { appendAttributionToWhatsAppMessage } from "@/lib/utm";
import {
  WHATSAPP_NEED_OPTIONS,
  WHATSAPP_RESPONSE_HOURS,
  WHATSAPP_STAGE_OPTIONS,
  buildWhatsAppLeadMessage,
  type WhatsAppLeadStage,
  type WhatsAppNeedType,
  type WhatsAppPageContext,
} from "@/lib/whatsapp-prefill";

type WhatsAppLeadModalProps = {
  open: boolean;
  onClose: () => void;
  context: WhatsAppPageContext;
  placement: string;
};

export function WhatsAppLeadModal({ open, onClose, context, placement }: WhatsAppLeadModalProps) {
  const titleId = useId();
  const [needType, setNeedType] = useState<WhatsAppNeedType>(context.needType);
  const [city, setCity] = useState(context.city ?? "");
  const [stage, setStage] = useState<WhatsAppLeadStage>("valorando");
  const [caseDetail, setCaseDetail] = useState("");

  useEffect(() => {
    if (!open) return;
    setNeedType(context.needType);
    setCity(context.city ?? "");
    setStage("valorando");
    setCaseDetail("");
  }, [open, context]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const message = appendAttributionToWhatsAppMessage(
      buildWhatsAppLeadMessage({
        serviceLabel: context.serviceLabel,
        needType,
        city,
        stage,
        caseDetail,
      }),
    );
    const href = getWhatsAppHref(message);
    trackWhatsAppClick(placement, href);
    window.open(href, "_blank", "noopener,noreferrer");
    onClose();
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-4 sm:items-center"
      role="presentation"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
        aria-label="Cerrar"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-slate-200 sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-2 text-[#64748B] hover:bg-slate-100"
          aria-label="Cerrar formulario"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-start gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366]/15">
            <MessageCircle className="h-6 w-6 text-[#25D366]" aria-hidden />
          </div>
          <div>
            <h2 id={titleId} className="text-xl font-bold text-[#1E293B]">
              Cuéntanos tu caso por WhatsApp
            </h2>
            <p className="mt-1 text-sm text-[#64748B]">
              Te abrimos WhatsApp con un mensaje listo para enviar. Un gestor te orientará sin compromiso.
            </p>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="wa-need" className="block text-sm font-semibold text-[#1E293B]">
              ¿Qué necesitas?
            </label>
            <select
              id="wa-need"
              value={needType}
              onChange={(e) => setNeedType(e.target.value as WhatsAppNeedType)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
            >
              {WHATSAPP_NEED_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="wa-city" className="block text-sm font-semibold text-[#1E293B]">
              ¿En qué ciudad?
            </label>
            <input
              id="wa-city"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="Ej. Madrid, Barcelona, Valencia…"
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
            />
          </div>

          <div>
            <label htmlFor="wa-stage" className="block text-sm font-semibold text-[#1E293B]">
              ¿En qué situación estás?
            </label>
            <select
              id="wa-stage"
              value={stage}
              onChange={(e) => setStage(e.target.value as WhatsAppLeadStage)}
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
            >
              {WHATSAPP_STAGE_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="wa-case" className="block text-sm font-semibold text-[#1E293B]">
              Detalle breve (opcional)
            </label>
            <textarea
              id="wa-case"
              rows={3}
              value={caseDetail}
              onChange={(e) => setCaseDetail(e.target.value)}
              placeholder="Ej. tengo comprador, falta redactar arras…"
              className="mt-1.5 w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
            />
          </div>

          <p className="text-xs leading-relaxed text-[#64748B]">{WHATSAPP_RESPONSE_HOURS}</p>

          <button
            type="submit"
            className="flex w-full min-h-12 items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-base font-bold text-white shadow-lg transition hover:bg-[#20bd5a]"
          >
            <MessageCircle className="h-5 w-5" aria-hidden />
            Enviar por WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
