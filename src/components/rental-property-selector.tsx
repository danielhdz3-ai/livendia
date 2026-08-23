"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Building2, ChevronDown } from "lucide-react";

type PropertyOption = {
  id: string;
  address: string;
  zone?: string | null;
};

export function RentalPropertySelector({
  properties,
  activePropertyId,
}: {
  properties: PropertyOption[];
  activePropertyId: string;
}) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  if (properties.length <= 1) {
    const only = properties[0];
    if (!only) return null;
    return (
      <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-[#475569]">
        <Building2 className="h-4 w-4 shrink-0 text-[#1A4FBF]" />
        <span className="truncate font-medium text-[#1E293B]">{only.address}</span>
      </div>
    );
  }

  async function onChange(propertyId: string) {
    if (propertyId === activePropertyId || busy) return;
    setBusy(true);
    try {
      const res = await fetch("/api/rental/active-property", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ propertyId }),
      });
      if (!res.ok) return;
      router.refresh();
    } finally {
      setBusy(false);
    }
  }

  return (
    <label className="relative block min-w-0 max-w-md flex-1">
      <span className="sr-only">Inmueble activo</span>
      <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#1A4FBF]" />
      <select
        value={activePropertyId}
        disabled={busy}
        onChange={(e) => void onChange(e.target.value)}
        className="w-full appearance-none truncate rounded-xl border border-slate-200 bg-white py-2.5 pl-9 pr-9 text-sm font-medium text-[#1E293B] shadow-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF] disabled:opacity-60"
      >
        {properties.map((p) => (
          <option key={p.id} value={p.id}>
            {p.address}
            {p.zone ? ` · ${p.zone}` : ""}
          </option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94A3B8]" />
    </label>
  );
}
