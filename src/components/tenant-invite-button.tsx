"use client";

import { useState } from "react";
import { Mail, Loader2 } from "lucide-react";

export function TenantInviteButton({
  tenantId,
  tenantEmail,
  tenantName,
  linked,
}: {
  tenantId: string;
  tenantEmail?: string | null;
  tenantName: string;
  linked?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  if (linked) {
    return (
      <span className="inline-flex items-center rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-800">
        Portal activo
      </span>
    );
  }

  if (!tenantEmail?.trim()) {
    return (
      <span className="text-xs text-amber-700">Añade email al inquilino para invitar</span>
    );
  }

  async function handleInvite() {
    setLoading(true);
    setError(null);
    setMessage(null);
    try {
      const res = await fetch("/api/rental/tenant-invite", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tenantId }),
      });
      const data = (await res.json()) as { error?: string; message?: string };
      if (!res.ok) throw new Error(data.error || "No se pudo enviar la invitación");
      setMessage(data.message ?? "Invitación enviada");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error al invitar");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => void handleInvite()}
        disabled={loading}
        className="inline-flex items-center gap-2 rounded-lg border border-[#1A4FBF] px-3 py-1.5 text-xs font-semibold text-[#1A4FBF] hover:bg-blue-50 disabled:opacity-50"
      >
        {loading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Mail className="h-3.5 w-3.5" />}
        Invitar a portal inquilino
      </button>
      <p className="text-xs text-[#64748B]">
        Enviará acceso a {tenantName} ({tenantEmail})
      </p>
      {message ? <p className="text-xs text-green-700">{message}</p> : null}
      {error ? <p className="text-xs text-red-700">{error}</p> : null}
    </div>
  );
}
