"use client";

import { TurnstileField } from "@/components/turnstile-field";
import { trackGenerateLead } from "@/lib/analytics";
import { useState } from "react";

const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "";

type ServiceInfoRequestFormProps = {
  /** Ej. "Administración de alquiler en Madrid" — se incluye en el email como contexto. */
  serviceLabel: string;
  /** Fuente para analítica (generate_lead). Por defecto "service_landing_info_form". */
  analyticsSource?: string;
  className?: string;
};

/**
 * Formulario ligero de "pedir información sin compromiso", pensado como alternativa
 * a "Contratar" para quien llega desde SEO y todavía no está listo para pagar.
 * Reutiliza el mismo endpoint /api/contact que el formulario de /contacto (misma
 * validación, mismo email al equipo) — no crea flujo ni tabla nueva. No toca el
 * botón de "Contratar" ni el checkout.
 */
export function ServiceInfoRequestForm({
  serviceLabel,
  analyticsSource = "service_landing_info_form",
  className = "",
}: ServiceInfoRequestFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [companyUrl, setCompanyUrl] = useState(""); // honeypot
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (companyUrl.trim()) return;
    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setErr("Completa la verificación antes de enviar.");
      return;
    }
    setBusy(true);
    const contextLine = `Solicita información sin compromiso sobre: ${serviceLabel}.`;
    const finalMessage = message.trim()
      ? `${contextLine}\n\n${message.trim()}`
      : `${contextLine} (prefiere que le llamemos, sin más detalle).`;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone: phone || undefined,
          message: finalMessage,
          turnstileToken: turnstileToken ?? undefined,
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErr(data.error ?? "No se pudo enviar. Inténtalo más tarde.");
        setBusy(false);
        return;
      }
      setOk(true);
      trackGenerateLead(analyticsSource);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setTurnstileToken(null);
    } catch {
      setErr("Error de red. Inténtalo de nuevo.");
    }
    setBusy(false);
  }

  if (ok) {
    return (
      <div className={`rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950 ${className}`}>
        <p className="font-semibold">Solicitud enviada</p>
        <p className="mt-2 text-sm">Un gestor te contactará en menos de 24 h laborables, sin ningún compromiso.</p>
        <button
          type="button"
          className="mt-4 text-sm font-semibold text-[#1A4FBF] underline"
          onClick={() => setOk(false)}
        >
          Enviar otra solicitud
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`space-y-3 ${className}`}>
      <input
        type="text"
        name="company_url"
        value={companyUrl}
        onChange={(e) => setCompanyUrl(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden
      />
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          type="text"
          required
          minLength={2}
          maxLength={120}
          placeholder="Tu nombre"
          aria-label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
        />
        <input
          type="tel"
          maxLength={40}
          placeholder="Teléfono (opcional)"
          aria-label="Teléfono"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
        />
      </div>
      <input
        type="email"
        required
        maxLength={254}
        placeholder="Tu email"
        aria-label="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
      />
      <textarea
        maxLength={4000}
        rows={3}
        placeholder="Cuéntanos brevemente tu caso (opcional)"
        aria-label="Mensaje"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full rounded-lg border border-slate-300 px-3 py-2.5 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
      />
      {TURNSTILE_SITE_KEY ? <TurnstileField siteKey={TURNSTILE_SITE_KEY} onToken={setTurnstileToken} /> : null}
      {err ? <p className="text-sm text-red-600">{err}</p> : null}
      <button
        type="submit"
        disabled={busy}
        className="w-full rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2563EB] disabled:opacity-60 sm:w-auto"
      >
        {busy ? "Enviando…" : "Pedir información sin compromiso"}
      </button>
      <p className="text-xs text-[#64748b]">
        Sin coste ni compromiso. Tratamos tus datos solo para responderte — más info en{" "}
        <a href="/legal/privacidad" className="font-medium text-[#1A4FBF] underline">
          privacidad
        </a>
        .
      </p>
    </form>
  );
}
