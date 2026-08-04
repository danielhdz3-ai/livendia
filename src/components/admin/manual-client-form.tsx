"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Loader2, UserPlus } from "lucide-react";
import { createManualClient } from "@/app/admin/actions";
import { ADMIN_BTN_GHOST, ADMIN_BTN_PRIMARY } from "@/lib/admin-ui";

export function ManualClientForm() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setError(null);
    const result = await createManualClient({ email, fullName, phone });
    setBusy(false);
    if (result.error) {
      setError(result.error);
      return;
    }
    setOpen(false);
    setEmail("");
    setFullName("");
    setPhone("");
    router.refresh();
  }

  if (!open) {
    return (
      <button type="button" onClick={() => setOpen(true)} className={ADMIN_BTN_GHOST}>
        <UserPlus className="h-4 w-4" />
        Cliente manual
      </button>
    );
  }

  return (
    <form onSubmit={submit} className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm font-bold text-[#1E293B]">Añadir cliente manual</p>
      <div className="mt-3 space-y-2">
        <input
          required
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          required
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          placeholder="Nombre completo"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Teléfono (opcional)"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm"
        />
      </div>
      {error ? <p className="mt-2 text-sm text-red-600">{error}</p> : null}
      <div className="mt-3 flex gap-2">
        <button type="submit" disabled={busy} className={ADMIN_BTN_PRIMARY}>
          {busy ? <Loader2 className="h-4 w-4 animate-spin" /> : "Crear"}
        </button>
        <button type="button" onClick={() => setOpen(false)} className={ADMIN_BTN_GHOST}>
          Cancelar
        </button>
      </div>
    </form>
  );
}
