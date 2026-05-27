"use client";

import { useState, useRef } from "react";
import { MapPin, Upload, FileText, Plus, Check, X } from "lucide-react";

type DocumentType = "nota_simple" | "ibi" | "cedula_habitabilidad" | "otros";

interface UploadedDocument {
  type: DocumentType;
  file: File;
  name: string;
}

function PropertyDocumentButton({
  label,
  type,
  inputRef,
  accept = ".pdf,.jpg,.jpeg,.png",
  doc,
  onPick,
  onRemove,
}: {
  label: string;
  type: DocumentType;
  inputRef: React.RefObject<HTMLInputElement | null>;
  accept?: string;
  doc: UploadedDocument | undefined;
  onPick: (t: DocumentType, file: File | null) => void;
  onRemove: (t: DocumentType) => void;
}) {
  return (
    <div className="relative">
      <input
        ref={inputRef}
        type="file"
        accept={accept}
        className="hidden"
        onChange={(e) => onPick(type, e.target.files?.[0] || null)}
      />
      <button
        type="button"
        onClick={() => inputRef.current?.click()}
        className={`flex w-full items-center gap-3 rounded-lg border-2 border-dashed p-3 text-left text-sm transition ${
          doc
            ? "border-green-500 bg-green-50 text-green-900"
            : "border-slate-300 text-[#64748B] hover:border-[#1A4FBF] hover:bg-blue-50"
        }`}
      >
        {doc ? <Check className="h-5 w-5 text-green-600" /> : <FileText className="h-5 w-5" />}
        <span className="flex-1">{doc ? doc.name : label}</span>
        {doc && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove(type);
            }}
            className="rounded-full p-1 hover:bg-green-200"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </button>
    </div>
  );
}

export function PropertyForm() {
  const [address, setAddress] = useState("");
  const [zone, setZone] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [cadastralRef, setCadastralRef] = useState("");
  const [documents, setDocuments] = useState<UploadedDocument[]>([]);
  const [isUploading, setIsUploading] = useState(false);

  const notaSimpleRef = useRef<HTMLInputElement>(null);
  const ibiRef = useRef<HTMLInputElement>(null);
  const cedulaRef = useRef<HTMLInputElement>(null);
  const otrosRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (type: DocumentType, file: File | null) => {
    if (!file) return;

    // Check if document type already exists
    const existingIndex = documents.findIndex((doc) => doc.type === type);
    
    if (existingIndex >= 0) {
      // Replace existing
      const newDocs = [...documents];
      newDocs[existingIndex] = { type, file, name: file.name };
      setDocuments(newDocs);
    } else {
      // Add new
      setDocuments([...documents, { type, file, name: file.name }]);
    }
  };

  const removeDocument = (type: DocumentType) => {
    setDocuments(documents.filter((doc) => doc.type !== type));
    
    // Reset file input
    switch (type) {
      case "nota_simple":
        if (notaSimpleRef.current) notaSimpleRef.current.value = "";
        break;
      case "ibi":
        if (ibiRef.current) ibiRef.current.value = "";
        break;
      case "cedula_habitabilidad":
        if (cedulaRef.current) cedulaRef.current.value = "";
        break;
      case "otros":
        if (otrosRef.current) otrosRef.current.value = "";
        break;
    }
  };

  const getDocumentByType = (type: DocumentType) => {
    return documents.find((doc) => doc.type === type);
  };

  const handleSubmit = async () => {
    if (!address || !zone || !postalCode) {
      alert("Por favor completa dirección, zona y código postal");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("address", address);
      formData.append("zone", zone);
      formData.append("postalCode", postalCode);
      formData.append("cadastralRef", cadastralRef);

      // Add documents
      documents.forEach((doc) => {
        formData.append(`doc_${doc.type}`, doc.file);
      });

      const response = await fetch("/api/rental/property", {
        method: "POST",
        body: formData,
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(typeof payload.error === "string" ? payload.error : "Error al guardar inmueble");
      }

      const errs = Array.isArray(payload.uploadErrors) ? (payload.uploadErrors as string[]) : [];
      if (errs.length > 0) {
        alert(
          "Inmueble guardado, pero algún archivo no se pudo subir:\n\n" +
            errs.join("\n") +
            "\n\nSi ves permisos o RLS: ejecuta en Supabase la migración storage (property docs).",
        );
      }

      window.location.reload();
    } catch (error) {
      console.error(error);
      alert("Error al guardar. Por favor intenta de nuevo.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="text-center py-12">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
        <Upload className="h-10 w-10 text-[#1A4FBF]" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">Agrega tu primer inmueble</h3>
      <p className="mt-2 text-sm text-[#64748B]">
        Completa la información de la propiedad que deseas administrar
      </p>

      <div className="mt-8 grid gap-4 text-left md:grid-cols-2">
        {/* Información Básica */}
        <div className="rounded-xl border-2 border-dashed border-slate-200 p-6">
          <div className="mb-4 flex items-center gap-3">
            <MapPin className="h-5 w-5 text-[#1A4FBF]" />
            <h4 className="font-semibold text-[#1E293B]">Información Básica</h4>
          </div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Dirección del inmueble"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            />
            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="Zona"
                value={zone}
                onChange={(e) => setZone(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
              <input
                type="text"
                placeholder="Código Postal"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
                className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
            </div>
            <input
              type="text"
              placeholder="Referencia catastral (opcional)"
              value={cadastralRef}
              onChange={(e) => setCadastralRef(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            />
          </div>
        </div>

        {/* Documentación */}
        <div className="rounded-xl border-2 border-dashed border-slate-200 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Upload className="h-5 w-5 text-[#1A4FBF]" />
            <h4 className="font-semibold text-[#1E293B]">Documentación</h4>
          </div>
          <div className="space-y-3">
            <PropertyDocumentButton
              label="Nota simple"
              type="nota_simple"
              inputRef={notaSimpleRef}
              doc={getDocumentByType("nota_simple")}
              onPick={handleFileSelect}
              onRemove={removeDocument}
            />
            <PropertyDocumentButton
              label="IBI"
              type="ibi"
              inputRef={ibiRef}
              doc={getDocumentByType("ibi")}
              onPick={handleFileSelect}
              onRemove={removeDocument}
            />
            <PropertyDocumentButton
              label="Cédula de habitabilidad"
              type="cedula_habitabilidad"
              inputRef={cedulaRef}
              doc={getDocumentByType("cedula_habitabilidad")}
              onPick={handleFileSelect}
              onRemove={removeDocument}
            />
            <PropertyDocumentButton
              label="Otros documentos"
              type="otros"
              inputRef={otrosRef}
              doc={getDocumentByType("otros")}
              onPick={handleFileSelect}
              onRemove={removeDocument}
            />
          </div>
          {documents.length > 0 && (
            <div className="mt-3 text-xs text-green-600">
              {documents.length} documento{documents.length > 1 ? "s" : ""} seleccionado
              {documents.length > 1 ? "s" : ""}
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isUploading}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#06B6D4] px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isUploading ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            <span>Guardando...</span>
          </>
        ) : (
          <>
            <Plus className="h-5 w-5" />
            <span>Guardar Inmueble</span>
          </>
        )}
      </button>
    </div>
  );
}
