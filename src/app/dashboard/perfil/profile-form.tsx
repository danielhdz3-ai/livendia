"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileText, Mail, MapPin, Phone, Save, User } from "lucide-react";

export type ProfileFormInitial = {
  fullName: string;
  email: string;
  phone: string;
  dniNie: string;
  fiscalAddress: string;
  role: string;
};

export function ProfileForm({ initial }: { initial: ProfileFormInitial }) {
  const router = useRouter();
  const [fullName, setFullName] = useState(initial.fullName);
  const [phone, setPhone] = useState(initial.phone);
  const [dniNie, setDniNie] = useState(initial.dniNie);
  const [fiscalAddress, setFiscalAddress] = useState(initial.fiscalAddress);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const avatarLetter = (fullName.trim().charAt(0) || initial.email.charAt(0) || "U").toUpperCase();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    setSuccess(null);

    try {
      const res = await fetch("/api/profile", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName, phone, dniNie, fiscalAddress }),
      });
      const payload = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(typeof payload.error === "string" ? payload.error : "No se pudieron guardar los cambios");
      }

      const profile = payload.profile as ProfileFormInitial | undefined;
      if (profile) {
        setFullName(profile.fullName);
        setPhone(profile.phone);
        setDniNie(profile.dniNie);
        setFiscalAddress(profile.fiscalAddress);
      }

      setSuccess("Tus datos se han guardado correctamente.");
      router.refresh();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-200 sm:p-8">
      <div className="mb-6 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-2xl font-bold text-white sm:h-20 sm:w-20 sm:text-3xl">
          {avatarLetter}
        </div>
        <div className="min-w-0">
          <h2 className="truncate text-xl font-bold text-[#1E293B] sm:text-2xl">
            {fullName.trim() || "Usuario"}
          </h2>
          <p className="text-sm text-[#64748B]">{initial.role === "admin" ? "Administrador" : "Cliente"}</p>
        </div>
      </div>

      {error ? (
        <div className="mb-4 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
          {error}
        </div>
      ) : null}

      {success ? (
        <div
          className="mb-4 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900"
          role="status"
        >
          {success}
        </div>
      ) : null}

      <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-[#1E293B]">
            <span className="mb-2 flex items-center gap-2">
              <User className="h-4 w-4" aria-hidden />
              Nombre completo
            </span>
          </label>
          <input
            id="name"
            name="fullName"
            type="text"
            required
            minLength={2}
            maxLength={120}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
            placeholder="Tu nombre completo"
            autoComplete="name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-[#1E293B]">
            <span className="mb-2 flex items-center gap-2">
              <Mail className="h-4 w-4" aria-hidden />
              Email
            </span>
          </label>
          <input
            id="email"
            type="email"
            value={initial.email}
            disabled
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-[#64748B] outline-none"
          />
          <p className="mt-2 text-xs text-[#64748B]">
            El email no se puede cambiar aquí. Escríbenos a info@livendia.com si necesitas actualizarlo.
          </p>
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-[#1E293B]">
            <span className="mb-2 flex items-center gap-2">
              <Phone className="h-4 w-4" aria-hidden />
              Teléfono
            </span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
            placeholder="+34 600 000 000"
            autoComplete="tel"
          />
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-semibold text-[#1E293B]">
            <span className="mb-2 flex items-center gap-2">
              <MapPin className="h-4 w-4" aria-hidden />
              Dirección fiscal
            </span>
          </label>
          <input
            id="address"
            name="fiscalAddress"
            type="text"
            maxLength={240}
            value={fiscalAddress}
            onChange={(e) => setFiscalAddress(e.target.value)}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
            placeholder="Calle, número, ciudad, CP"
            autoComplete="street-address"
          />
        </div>

        <div>
          <label htmlFor="nif" className="block text-sm font-semibold text-[#1E293B]">
            <span className="mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4" aria-hidden />
              NIF/CIF/NIE
            </span>
          </label>
          <input
            id="nif"
            name="dniNie"
            type="text"
            maxLength={20}
            value={dniNie}
            onChange={(e) => setDniNie(e.target.value.toUpperCase())}
            className="w-full rounded-xl border border-slate-300 px-4 py-3 uppercase text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
            placeholder="12345678A"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-slate-200 pt-6 sm:flex-row">
          <button
            type="submit"
            disabled={saving}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <Save className="h-4 w-4" aria-hidden />
            {saving ? "Guardando…" : "Guardar cambios"}
          </button>
          <Link
            href="/dashboard"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-[#64748B] transition hover:bg-slate-50"
          >
            Cancelar
          </Link>
        </div>
      </form>
    </div>
  );
}
