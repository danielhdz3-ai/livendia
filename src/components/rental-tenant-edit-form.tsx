"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type TenantShape = {
  id: string;
  full_name: string;
  email?: string | null;
  phone?: string | null;
  dni?: string | null;
  start_date: string;
  end_date?: string | null;
  monthly_rent: number;
  deposit_amount: number;
  notes?: string | null;
  is_active?: boolean;
};

export function RentalTenantEditForm({ tenant }: { tenant: TenantShape }) {
  const router = useRouter();
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [ok, setOk] = useState(false);
  const [form, setForm] = useState({
    fullName: tenant.full_name ?? "",
    email: tenant.email ?? "",
    phone: tenant.phone ?? "",
    dni: tenant.dni ?? "",
    startDate: tenant.start_date?.slice(0, 10) ?? "",
    endDate: tenant.end_date?.slice(0, 10) ?? "",
    monthlyRent: tenant.monthly_rent?.toString() ?? "",
    depositAmount: tenant.deposit_amount?.toString() ?? "",
    notes: tenant.notes ?? "",
    isActive: tenant.is_active !== false,
  });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setBusy(true);
    setErr(null);
    setOk(false);
    try {
      const res = await fetch("/api/rental/tenant", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tenantId: tenant.id,
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          dni: form.dni,
          startDate: form.startDate,
          endDate: form.endDate || null,
          monthlyRent: Number(form.monthlyRent),
          depositAmount: Number(form.depositAmount),
          notes: form.notes,
          isActive: form.isActive,
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
          <label className="text-xs font-semibold text-[#64748B]">Nombre completo</label>
          <input required className={inputClass} value={form.fullName} onChange={(e) => setForm({ ...form, fullName: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Email</label>
          <input type="email" className={inputClass} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Teléfono</label>
          <input className={inputClass} value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">DNI/NIE</label>
          <input className={inputClass} value={form.dni} onChange={(e) => setForm({ ...form, dni: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Inicio contrato</label>
          <input type="date" required className={inputClass} value={form.startDate} onChange={(e) => setForm({ ...form, startDate: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Fin contrato</label>
          <input type="date" className={inputClass} value={form.endDate} onChange={(e) => setForm({ ...form, endDate: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Renta mensual (€)</label>
          <input type="number" min={0} step="0.01" required className={inputClass} value={form.monthlyRent} onChange={(e) => setForm({ ...form, monthlyRent: e.target.value })} />
        </div>
        <div>
          <label className="text-xs font-semibold text-[#64748B]">Fianza (€)</label>
          <input type="number" min={0} step="0.01" className={inputClass} value={form.depositAmount} onChange={(e) => setForm({ ...form, depositAmount: e.target.value })} />
        </div>
        <div className="md:col-span-2 flex items-center gap-2">
          <input id="tenant-active" type="checkbox" checked={form.isActive} onChange={(e) => setForm({ ...form, isActive: e.target.checked })} />
          <label htmlFor="tenant-active" className="text-sm text-[#475569]">Contrato activo</label>
        </div>
        <div className="md:col-span-2">
          <label className="text-xs font-semibold text-[#64748B]">Notas</label>
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
