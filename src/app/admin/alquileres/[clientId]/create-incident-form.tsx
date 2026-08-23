"use client";

import { useState } from "react";
import { AlertCircle, Camera, X } from "lucide-react";

interface CreateIncidentFormProps {
  propertyId: string;
  propertyAddress: string;
  tenantId?: string;
  onSuccess: () => void;
}

export function CreateIncidentForm({
  propertyId,
  propertyAddress,
  tenantId,
  onSuccess,
}: CreateIncidentFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [photos, setPhotos] = useState<File[]>([]);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(
      (f) => f.type.startsWith("image/") && f.size <= 10 * 1024 * 1024,
    );
    if (validFiles.length !== files.length) {
      setError("Algunas fotos no son válidas. Solo imágenes hasta 10MB");
    }
    setPhotos((prev) => [...prev, ...validFiles].slice(0, 5));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const data = new FormData();
      data.append("propertyId", propertyId);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("priority", formData.priority);
      if (tenantId) data.append("tenantId", tenantId);
      photos.forEach((photo, index) => {
        data.append(`photo_${index}`, photo);
      });

      const response = await fetch("/api/incidents/create", {
        method: "POST",
        body: data,
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al crear incidencia");
      }

      setFormData({ title: "", description: "", priority: "medium" });
      setPhotos([]);
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
        {error ? (
          <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">{error}</div>
        ) : null}

        {success ? (
          <div className="rounded-lg bg-green-50 p-4 text-sm text-green-800">
            ✓ Incidencia creada. Email enviado al propietario.
          </div>
        ) : null}

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1E293B]">Título *</label>
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

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1E293B]">Prioridad *</label>
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

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
            Descripción detallada *
          </label>
          <textarea
            required
            rows={4}
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Describe el problema con el mayor detalle posible..."
            className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            disabled={loading}
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
            Fotos (opcional, máximo 5)
          </label>
          {photos.length > 0 ? (
            <div className="mb-3 grid grid-cols-2 gap-3 md:grid-cols-3">
              {photos.map((photo, index) => (
                <div key={index} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Foto ${index + 1}`}
                    className="h-32 w-full rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => setPhotos((prev) => prev.filter((_, i) => i !== index))}
                    className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          ) : null}
          {photos.length < 5 ? (
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-6 transition hover:border-[#1A4FBF] hover:bg-blue-50">
              <Camera className="h-5 w-5 text-[#64748B]" />
              <span className="text-sm font-medium text-[#64748B]">
                Añadir fotos ({photos.length}/5)
              </span>
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                className="hidden"
                disabled={loading}
              />
            </label>
          ) : null}
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
