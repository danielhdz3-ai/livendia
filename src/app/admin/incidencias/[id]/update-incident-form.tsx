"use client";

import { useState } from "react";

interface UpdateIncidentFormProps {
  incidentId: string;
  currentStatus: string;
  currentEstimatedCost?: number;
  currentApprovedBudget?: number;
}

export function UpdateIncidentForm({
  incidentId,
  currentStatus,
  currentEstimatedCost,
  currentApprovedBudget,
}: UpdateIncidentFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    status: currentStatus,
    estimated_cost: currentEstimatedCost?.toString() || "",
    approved_budget: currentApprovedBudget?.toString() || "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/incidents/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          incidentId,
          status: formData.status,
          estimated_cost: formData.estimated_cost ? parseFloat(formData.estimated_cost) : null,
          approved_budget: formData.approved_budget ? parseFloat(formData.approved_budget) : null,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al actualizar");
      }

      setSuccess(true);
      setTimeout(() => window.location.reload(), 1000);
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Error al actualizar");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {error && (
        <div className="rounded-lg bg-red-50 p-3 text-sm text-red-800">{error}</div>
      )}
      {success && (
        <div className="rounded-lg bg-green-50 p-3 text-sm text-green-800">
          ✓ Actualizado correctamente
        </div>
      )}

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
          Estado
        </label>
        <select
          value={formData.status}
          onChange={(e) => setFormData({ ...formData, status: e.target.value })}
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
        >
          <option value="pending">Pendiente</option>
          <option value="in_progress">En Proceso</option>
          <option value="waiting_approval">Esperando Aprobación</option>
          <option value="approved">Aprobada</option>
          <option value="resolved">Resuelta</option>
          <option value="rejected">Rechazada</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
          Coste Estimado (€)
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.estimated_cost}
          onChange={(e) => setFormData({ ...formData, estimated_cost: e.target.value })}
          placeholder="0.00"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
          Presupuesto Aprobado (€)
        </label>
        <input
          type="number"
          step="0.01"
          value={formData.approved_budget}
          onChange={(e) => setFormData({ ...formData, approved_budget: e.target.value })}
          placeholder="0.00"
          className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:opacity-50"
      >
        {loading ? "Guardando..." : "Guardar Cambios"}
      </button>
    </form>
  );
}
