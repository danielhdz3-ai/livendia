"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type PropertyShape = {
  id: string;
  address: string;
  zone?: string | null;
  postal_code?: string | null;
  cadastral_reference?: string | null;
  property_type?: string;
  rooms?: number | null;
  bathrooms?: number | null;
  surface_m2?: number | null;
  ibi_annual?: number | null;
  community_fee_monthly?: number | null;
  notes?: string | null;
};

export function RentalPropertyEditForm({ property }: { property: PropertyShape }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({
    address: property.address ?? "",
    zone: property.zone ?? "",
    postalCode: property.postal_code ?? "",
    cadastralReference: property.cadastral_reference ?? "",
    propertyType: property.property_type ?? "piso",
    rooms: property.rooms?.toString() ?? "",
    bathrooms: property.bathrooms?.toString() ?? "",
    surfaceM2: property.surface_m2?.toString() ?? "",
    ibiAnnual: property.ibi_annual?.toString() ?? "",
    communityFeeMonthly: property.community_fee_monthly?.toString() ?? "",
    notes: property.notes ?? "",
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setOk(false);
    try {
      const res = await fetch("/api/rental/property", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId: property.id,
          address: form.address,
          zone: form.zone,
          postalCode: form.postalCode,
          cadastralReference: form.cadastralReference,
          propertyType: form.propertyType,
          rooms: form.rooms ? Number(form.rooms) : undefined,
          bathrooms: form.bathrooms ? Number(form.bathrooms) : undefined,
          surfaceM2: form.surfaceM2 ? Number(form.surfaceM2) : undefined,
          ibiAnnual: form.ibiAnnual ? Number(form.ibiAnnual) : undefined,
          communityFeeMonthly: form.communityFeeMonthly ? Number(form.communityFeeMonthly) : undefined,
          notes: form.notes,
        }),
      });
      const data = (await res.json()) as { error?: string };
      if (!res.ok) throw new Error(data.error ?? "Error al guardar");
      setOk(true);
      router.refresh();
    } catch (error) {
      setErr(error instanceof Error ? error.message : "Error al guardar");
    } finally {
      setBusy(false);
    }
  }

  const inputClass =
    "mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-[#1E293B] focus:border-[#1A4FBF] focus:outline-none focus:ring-1 focus:ring-[#1A4FBF]";

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {err ? <p className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{err}</p> : null}
      {ok ? <p className="rounded-lg bg-emerald-50 p-3 text-sm text-emerald-800">Datos guardados.</p> : null}
      <div className="grid gap-4 md:grid-cols-2">
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-[#64748B]">Dirección</label>
          <input required className={inputClass} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Zona</label>
          <input className={inputClass} value={form.zone} onChange={(e) => setForm({ ...form, zone: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Código postal</label>
          <input required className={inputClass} value={form.postalCode} onChange={(e) => setForm({ ...form, postalCode: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Referencia catastral</label>
          <input className={inputClass} value={form.cadastralReference} onChange={(e) => setForm({ ...form, cadastralReference: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Tipo</label>
          <select className={inputClass} value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })}>
            <option value="piso">Piso</option>
            <option value="casa">Casa</option>
            <option value="local">Local</option>
            <option value="otro">Otro</option>
          </select>
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Habitaciones</label>
          <input type="number" min={0} className={inputClass} value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Baños</label>
          <input type="number" min={0} className={inputClass} value={form.bathrooms} onChange={(e) => setForm({ ...form, bathrooms: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Superficie m²</label>
          <input type="number" min={0} step="0.01" className={inputClass} value={form.surfaceM2} onChange={(e) => setForm({ ...form, surfaceM2: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">IBI anual (€)</label>
          <input type="number" min={0} step="0.01" className={inputClass} value={form.ibiAnnual} onChange={(e) => setForm({ ...form, ibiAnnual: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Comunidad/mes (€)</label>
          <input type="number" min={0} step="0.01" className={inputClass} value={form.communityFeeMonthly} onChange={(e) => setForm({ ...form, communityFeeMonthly: e.target.value })} />
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-[#64748B]">Notas internas</label>
          <textarea rows={3} className={inputClass} value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} />
        </div>
      </div>
      <button
        type="submit"
        disabled={busy}
        className="rounded-lg bg-[#1A4FBF] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#2563EB] disabled:opacity-60"
      >
        {busy ? "Guardando…" : "Guardar cambios"}
      </button>
    </form>
  );
}
