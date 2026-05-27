"use client";

import { useState } from "react";
import { Camera, X } from "lucide-react";

interface CreateIncidentFormProps {
  propertyId: string;
  onSuccess: () => void;
}

export function CreateIncidentForm({ propertyId, onSuccess }: CreateIncidentFormProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<File[]>([]);
  
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    priority: "medium",
  });

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    const validFiles = files.filter(f => 
      f.type.startsWith("image/") && f.size <= 10 * 1024 * 1024 // 10MB
    );
    
    if (validFiles.length !== files.length) {
      setError("Algunas fotos no son válidas. Solo imágenes hasta 10MB");
    }
    
    setPhotos(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 fotos
  };

  const removePhoto = (index: number) => {
    setPhotos(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const data = new FormData();
      data.append("propertyId", propertyId);
      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("priority", formData.priority);
      
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

      // Reset form
      setFormData({ title: "", description: "", priority: "medium" });
      setPhotos([]);
      onSuccess();
    } catch (err) {
      console.error("Error:", err);
      setError(err instanceof Error ? err.message : "Error al crear incidencia");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-800">
          {error}
        </div>
      )}

      {/* Título */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
          Título de la incidencia *
        </label>
        <input
          type="text"
          required
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Ej: Fuga de agua en el baño"
          className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
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
          placeholder="Describe el problema con el mayor detalle posible..."
          className="w-full rounded-lg border border-slate-300 px-4 py-2 focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
        />
      </div>

      {/* Fotos */}
      <div>
        <label className="mb-2 block text-sm font-semibold text-[#1E293B]">
          Fotos (opcional, máximo 5)
        </label>
        
        <div className="space-y-3">
          {/* Preview de fotos */}
          {photos.length > 0 && (
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {photos.map((photo, index) => (
                <div key={index} className="relative">
                  {/* eslint-disable-next-line @next/next/no-img-element -- vistas previas locales (blob:) */}
                  <img
                    src={URL.createObjectURL(photo)}
                    alt={`Foto ${index + 1}`}
                    className="h-32 w-full rounded-lg object-cover"
                  />
                  <button
                    type="button"
                    onClick={() => removePhoto(index)}
                    className="absolute right-2 top-2 rounded-full bg-red-500 p-1 text-white hover:bg-red-600"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Botón para añadir fotos */}
          {photos.length < 5 && (
            <label className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-dashed border-slate-300 bg-slate-50 px-4 py-8 transition hover:border-[#1A4FBF] hover:bg-blue-50">
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
              />
            </label>
          )}
        </div>
      </div>

      {/* Botones */}
      <div className="flex gap-3">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 rounded-lg bg-[#1A4FBF] px-6 py-3 font-semibold text-white transition hover:bg-[#2563EB] disabled:opacity-50"
        >
          {loading ? "Creando..." : "Crear Incidencia"}
        </button>
      </div>
    </form>
  );
}
