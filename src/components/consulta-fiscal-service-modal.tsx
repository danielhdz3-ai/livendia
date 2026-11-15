"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";
import type { PublicService } from "@/lib/catalog.public";
import {
  CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR,
  CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR,
  CONSULTA_FISCAL_VENDEDOR_PRICE_EUR,
} from "@/lib/catalog.public";
import { FISCAL_SELLER_DISCLAIMER, FISCAL_SELLER_RGPD_NOTICE } from "@/lib/fiscal-seller-disclaimer";
import { checkoutServiceSession } from "@/lib/checkout-service-session";
import type { FiscalSellerIntake } from "@/lib/fiscal-seller-intake";
import { resolveConsultaFiscalPriceCents } from "@/lib/fiscal-seller-intake";

type Props = {
  service: PublicService;
  onClose: () => void;
};

export function ConsultaFiscalServiceModal({ service, onClose }: Props) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [municipality, setMunicipality] = useState("");
  const [escrituraDate, setEscrituraDate] = useState("");
  const [ownerCount, setOwnerCount] = useState(2);
  const [ownerShares, setOwnerShares] = useState([50, 50, 0, 0]);
  const [habitualHome, setHabitualHome] = useState(false);
  const [anyOwner65Plus, setAnyOwner65Plus] = useState(false);
  const [plansReinvest, setPlansReinvest] = useState(false);
  const [fiscalResidentSpain, setFiscalResidentSpain] = useState(true);
  const [complexCase, setComplexCase] = useState(false);
  const [disclaimer, setDisclaimer] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.add("livendia-modal-open");
    document.body.style.overflow = "hidden";
    return () => {
      document.body.classList.remove("livendia-modal-open");
      document.body.style.overflow = "";
    };
  }, []);

  const intake: FiscalSellerIntake = {
    municipality,
    escrituraDate,
    ownerCount,
    ownerShares: ownerShares.slice(0, ownerCount).map((percent) => ({ percent })),
    habitualHome,
    anyOwner65Plus,
    plansReinvest,
    fiscalResidentSpain,
    complexCase,
    nonResident: !fiscalResidentSpain,
  };

  const priceCents = resolveConsultaFiscalPriceCents(intake);
  const displayPrice =
    priceCents == null
      ? "A consultar"
      : `${(priceCents / 100).toFixed(0)} €`;

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!disclaimer) {
      setError("Debes aceptar el disclaimer de orientación fiscal.");
      return;
    }
    if (!fiscalResidentSpain) {
      setError("Para no residentes fiscales, escríbenos a info@livendia.com con tu caso.");
      return;
    }
    setIsSubmitting(true);
    try {
      await checkoutServiceSession(
        service.id,
        { fullName, email, phone },
        {
          serviceId: service.id,
          serviceName: service.name,
          serviceSlug: service.slug,
          priceCents: priceCents ?? service.price_cents,
          category: service.category,
        },
        service.slug,
        {
          fiscalIntake: intake,
          disclaimerAccepted: true,
        },
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/60 sm:items-center sm:p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative max-h-[92dvh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-5 shadow-2xl sm:rounded-2xl sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center rounded-full bg-slate-100"
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="pr-10 text-xl font-extrabold text-[#1E293B]">Contratar consulta fiscal vendedor</h2>
        <p className="mt-2 text-sm text-[#64748b]">
          {CONSULTA_FISCAL_VENDEDOR_PRICE_EUR} € hasta 2 titulares · +{CONSULTA_FISCAL_VENDEDOR_EXTRA_OWNER_EUR} € desde el
          3.º · {CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR} € caso complejo.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block text-sm">
              <span className="font-medium">Nombre completo *</span>
              <input
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Email *</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Teléfono *</span>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm">
              <span className="font-medium">Municipio del inmueble *</span>
              <input
                required
                value={municipality}
                onChange={(e) => setMunicipality(e.target.value)}
                placeholder="Ej. Barcelona, Badalona"
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </label>
            <label className="block text-sm sm:col-span-2">
              <span className="font-medium">Fecha prevista de escritura *</span>
              <input
                type="date"
                required
                value={escrituraDate}
                onChange={(e) => setEscrituraDate(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
              />
            </label>
          </div>

          <label className="block text-sm">
            <span className="font-medium">Número de titulares *</span>
            <select
              value={ownerCount}
              onChange={(e) => setOwnerCount(Number(e.target.value))}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
            >
              {[1, 2, 3, 4, 5].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </label>

          <div className="grid gap-2 sm:grid-cols-2">
            {ownerShares.slice(0, ownerCount).map((pct, i) => (
              <label key={i} className="text-sm">
                Titular {i + 1} — % en escritura
                <input
                  type="number"
                  min={0}
                  max={100}
                  value={pct}
                  onChange={(e) => {
                    const next = [...ownerShares];
                    next[i] = Number(e.target.value);
                    setOwnerShares(next);
                  }}
                  className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2"
                />
              </label>
            ))}
          </div>

          <div className="space-y-2 text-sm text-[#475569]">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={habitualHome} onChange={(e) => setHabitualHome(e.target.checked)} />
              ¿Es vivienda habitual?
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={anyOwner65Plus} onChange={(e) => setAnyOwner65Plus(e.target.checked)} />
              ¿Algún titular mayor de 65 años?
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={plansReinvest} onChange={(e) => setPlansReinvest(e.target.checked)} />
              ¿Piensa reinvertir en otra vivienda habitual?
            </label>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={fiscalResidentSpain}
                onChange={(e) => setFiscalResidentSpain(e.target.checked)}
              />
              Residente fiscal en España
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={complexCase} onChange={(e) => setComplexCase(e.target.checked)} />
              Caso complejo ({CONSULTA_FISCAL_VENDEDOR_COMPLEX_PRICE_EUR} €)
            </label>
          </div>

          <div className="rounded-xl bg-amber-50 p-4 text-xs leading-relaxed text-[#78350f] ring-1 ring-amber-200">
            <p className="font-semibold">Disclaimer</p>
            <p className="mt-2">{FISCAL_SELLER_DISCLAIMER}</p>
            <p className="mt-2 text-[#92400e]">{FISCAL_SELLER_RGPD_NOTICE}</p>
            <label className="mt-3 flex items-start gap-2 font-medium">
              <input
                type="checkbox"
                required
                checked={disclaimer}
                onChange={(e) => setDisclaimer(e.target.checked)}
                className="mt-0.5"
              />
              Acepto que se trata de una simulación orientativa y no asesoramiento vinculante.
            </label>
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            disabled={isSubmitting || priceCents == null}
            className="w-full rounded-xl bg-[#1A4FBF] py-3 text-sm font-bold text-white hover:bg-[#2563EB] disabled:opacity-50"
          >
            {isSubmitting ? "Procesando…" : `Pagar ${displayPrice} con tarjeta`}
          </button>
        </form>
      </div>
    </div>
  );
}