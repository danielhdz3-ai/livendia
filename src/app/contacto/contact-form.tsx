"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export function ContactForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [companyUrl, setCompanyUrl] = useState(""); // honeypot
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    if (companyUrl.trim()) return;
    setBusy(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone: phone || undefined, message }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) {
        setErr(data.error ?? "No se pudo enviar. Inténtalo más tarde.");
        setBusy(false);
        return;
      }
      setOk(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      router.refresh();
    } catch {
      setErr("Error de red. Inténtalo de nuevo.");
    }
    setBusy(false);
  }

  if (ok) {
    return (
      <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-950">
        <p className="font-semibold">Mensaje enviado</p>
        <p className="mt-2 text-sm">
          Gracias. Te responderemos lo antes posible. También puedes escribirnos por WhatsApp si es urgente.
        </p>
        <button
          type="button"
          className="mt-4 text-sm font-semibold text-[#1A4FBF] underline"
          onClick={() => setOk(false)}
        >
          Enviar otro mensaje
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
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
      <div>
        <label htmlFor="c-name" className="text-sm font-medium text-[#374151]">
          Nombre
        </label>
        <input
          id="c-name"
          required
          minLength={2}
          maxLength={120}
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
        />
      </div>
      <div>
        <label htmlFor="c-email" className="text-sm font-medium text-[#374151]">
          Email
        </label>
        <input
          id="c-email"
          type="email"
          required
          maxLength={254}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
        />
      </div>
      <div>
        <label htmlFor="c-phone" className="text-sm font-medium text-[#374151]">
          Teléfono (opcional)
        </label>
        <input
          id="c-phone"
          type="tel"
          maxLength={40}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
        />
      </div>
      <div>
        <label htmlFor="c-msg" className="text-sm font-medium text-[#374151]">
          Mensaje
        </label>
        <textarea
          id="c-msg"
          required
          minLength={10}
          maxLength={4000}
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]"
        />
      </div>
      {err ? <p className="text-sm text-red-600">{err}</p> : null}
      <button
        type="submit"
        disabled={busy}
        className="rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[#2563EB] disabled:opacity-60"
      >
        {busy ? "Enviando…" : "Enviar"}
      </button>
      <p className="text-xs text-[#64748b]">
        Al enviar este formulario tratamos tus datos para atender tu consulta. Más información en{" "}
        <a href="/legal/privacidad" className="font-medium text-[#1A4FBF] underline">
          privacidad
        </a>
        .
      </p>
    </form>
  );
}
