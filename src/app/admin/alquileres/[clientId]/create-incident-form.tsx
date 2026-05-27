"use client";

import { useState } from "react";
import { AlertCircle } from "lucide-react";

interface CreateIncidentFormProps {
  propertyId: string;
  propertyAddress: string;
  onSuccess: () => void;
}

export function CreateIncidentForm({ propertyId, propertyAddress, onSuccess }: CreateIncidentFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch("/api/incidents/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          propertyId,
          title: formData.title,
          description: formData.description,
          priority: formData.priority,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al crear incidencia");
      }

      // Reset form
      setFormData({ title: "", description: "", priority: "medium" });
      setSuccess(true);
      setTimeout(() => {
        onSuccess();
      }, 1500);
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Error al crear incidencia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-xl bg-white p-6 shadow-lg">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-lg bg-orange-50 p-2">
          <AlertCircle className="h-6 w-6 text-orange-600" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-[#1E293B]">Reportar Incidencia</h3>
          <p className="text-sm text-[#64748B]">{propertyAddress}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
            {error}
          </div>
        )}

        {success && (
          <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
            ✓ Incidencia creada. Email enviado al propietario.
          </div>
        )}

        {/* Título */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
            Título *
          </label>
          <input
            type="text"
            required
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Ej: Fuga de agua en el baño"
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            disabled={loading}
          />
        </div>

        {/* Prioridad */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
            Prioridad *
          </label>
          <select
            value={formData.priority}
            onChange={(e) => setFormData({ ...formData, priority: e.target.value })}
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            disabled={loading}
          >
            <option value="low">Baja - Puede esperar</option>
            <option value="medium">Media - Normal</option>
            <option value="high">Alta - Importante</option>
            <option value="urgent">Urgente - Requiere atención inmediata</option>
          </select>
        </div>

        {/* Descripción */}
        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
            Descripción detallada *
          </label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe el problema. Las fotos se enviarán al propietario por email o WhatsApp."
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            disabled={loading}
          />
        </div>

        <div className="text-xs text-[#64748B]">
          💡 Las fotos de la incidencia se enviarán al propietario por email o WhatsApp
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-[#1A4FBF] px-6 py-3 font-semibold text-white transition hover:bg-[#06B6D4] disabled:opacity-50"
        >
          {loading ? "Creando..." : "Crear Incidencia"}
        </button>
      </form>
    </div>
  );
}
