"use client";

import { useState, useRef } from "react";
import { Phone, Euro, FileSignature, Plus, Check, X, Upload } from "lucide-react";

export function TenantForm({ propertyId }: { propertyId: string }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dni, setDni] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [monthlyRent, setMonthlyRent] = useState("");
  const [otherExpenses, setOtherExpenses] = useState("");
  const [legalDeposit, setLegalDeposit] = useState("");
  const [additionalDeposit, setAdditionalDeposit] = useState("");
  const [dniFile, setDniFile] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);

  const dniFileRef = useRef<HTMLInputElement>(null);

  const totalDeposit = (parseFloat(legalDeposit) || 0) + (parseFloat(additionalDeposit) || 0);

  const handleDniFileSelect = (file: File | null) => {
    setDniFile(file);
  };

  const removeDniFile = () => {
    setDniFile(null);
    if (dniFileRef.current) dniFileRef.current.value = "";
  };

  const handleSubmit = async () => {
    if (!fullName || !email || !phone || !dni || !startDate || !monthlyRent) {
      alert("Por favor completa: nombre, email, teléfono, DNI, fecha inicio y mensualidad");
      return;
    }

    setIsUploading(true);

    try {
      const formData = new FormData();
      formData.append("propertyId", propertyId);
      formData.append("fullName", fullName);
      formData.append("email", email);
      formData.append("phone", phone);
      formData.append("dni", dni);
      formData.append("startDate", startDate);
      formData.append("endDate", endDate || "");
      formData.append("monthlyRent", monthlyRent);
      formData.append("otherExpenses", otherExpenses || "0");
      formData.append("legalDeposit", legalDeposit || "0");
      formData.append("additionalDeposit", additionalDeposit || "0");

      if (dniFile) {
        formData.append("dniDocument", dniFile);
      }

      const response = await fetch("/api/rental/tenant", {
        method: "POST",
        body: formData,
      });

      const payload = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(typeof payload.error === "string" ? payload.error : "Error al guardar inquilino");
      }

      const warn =
        typeof payload.tenantDocWarning === "string" ? payload.tenantDocWarning.trim() : "";
      if (warn) {
        alert(`Inquilino guardado, pero el archivo no se subió:\n${warn}`);
      }

      window.location.href = "/dashboard/rental";
    } catch (error) {
      console.error(error);
      alert("Error al guardar. Por favor intenta de nuevo.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="text-center py-12">
      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50">
        <Phone className="h-10 w-10 text-emerald-600" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">Agrega inquilino</h3>
      <p className="mt-2 text-sm text-[#64748B]">
        Registra la información del arrendatario y los detalles del contrato
      </p>

      <div className="mt-8 grid gap-4 text-left md:grid-cols-3">
        {/* Datos de Contacto */}
        <div className="rounded-xl border-2 border-dashed border-slate-200 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Phone className="h-5 w-5 text-emerald-600" />
            <h4 className="font-semibold text-[#1E293B]">Datos de Contacto</h4>
          </div>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Nombre completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <input
              type="tel"
              placeholder="Teléfono"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <input
              type="text"
              placeholder="DNI/NIE"
              value={dni}
              onChange={(e) => setDni(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />

            {/* DNI Document Upload */}
            <div className="relative">
              <input
                ref={dniFileRef}
                type="file"
                accept=".pdf"
                className="hidden"
                onChange={(e) => handleDniFileSelect(e.target.files?.[0] || null)}
              />
              <button
                type="button"
                onClick={() => dniFileRef.current?.click()}
                className={`flex w-full items-center gap-3 rounded-lg border-2 border-dashed p-3 text-left text-sm transition ${
                  dniFile
                    ? "border-green-500 bg-green-50 text-green-900"
                    : "border-slate-300 text-[#64748B] hover:border-emerald-600 hover:bg-emerald-50"
                }`}
              >
                {dniFile ? (
                  <Check className="h-5 w-5 text-green-600" />
                ) : (
                  <Upload className="h-5 w-5" />
                )}
                <span className="flex-1">{dniFile ? dniFile.name : "Subir DNI (PDF)"}</span>
                {dniFile && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeDniFile();
                    }}
                    className="rounded-full p-1 hover:bg-green-200"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Contrato Activo */}
        <div className="rounded-xl border-2 border-dashed border-slate-200 p-6">
          <div className="mb-4 flex items-center gap-3">
            <FileSignature className="h-5 w-5 text-emerald-600" />
            <h4 className="font-semibold text-[#1E293B]">Contrato Activo</h4>
          </div>
          <div className="space-y-3">
            <input
              type="date"
              placeholder="Fecha inicio"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <input
              type="date"
              placeholder="Fecha fin"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <input
              type="number"
              placeholder="Mensualidad (€)"
              value={monthlyRent}
              onChange={(e) => setMonthlyRent(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <input
              type="number"
              placeholder="Otros gastos (€)"
              value={otherExpenses}
              onChange={(e) => setOtherExpenses(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
          </div>
        </div>

        {/* Fianzas */}
        <div className="rounded-xl border-2 border-dashed border-slate-200 p-6">
          <div className="mb-4 flex items-center gap-3">
            <Euro className="h-5 w-5 text-emerald-600" />
            <h4 className="font-semibold text-[#1E293B]">Fianzas Depositadas</h4>
          </div>
          <div className="space-y-3">
            <input
              type="number"
              placeholder="Fianza legal (€)"
              value={legalDeposit}
              onChange={(e) => setLegalDeposit(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <input
              type="number"
              placeholder="Fianza adicional (€)"
              value={additionalDeposit}
              onChange={(e) => setAdditionalDeposit(e.target.value)}
              className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
            />
            <div className="rounded-lg bg-emerald-50 p-3">
              <div className="text-xs font-semibold text-emerald-900">Total Fianza</div>
              <div className="text-2xl font-bold text-emerald-600">{totalDeposit.toFixed(2)} €</div>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleSubmit}
        disabled={isUploading}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isUploading ? (
          <>
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
            <span>Guardando...</span>
          </>
        ) : (
          <>
            <Plus className="h-5 w-5" />
            <span>Guardar Inquilino</span>
          </>
        )}
      </button>
    </div>
  );
}
