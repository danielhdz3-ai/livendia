"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Bell,
  CheckCircle2,
  ChevronRight,
  ClipboardList,
  FileSignature,
  FileText,
  FolderLock,
  LayoutDashboard,
  Lock,
  ShieldCheck,
  Upload,
  User,
} from "lucide-react";

const DEMO = {
  clientFirstName: "Ana",
  clientInitial: "A",
  gestorName: "Daniel H.",
  gestorInitial: "DH",
  expedienteRef: "EXP-2026-1204",
  serviceLabel: "Contrato de alquiler LAU",
  property: "Piso 3 hab. · Calle Mayor 42, Valencia",
  monthlyRent: "980 €/mes",
  progress: 72,
  documents: [
    { name: "DNI_propietario.pdf", status: "Revisado", ok: true },
    { name: "DNI_inquilino.pdf", status: "Revisado", ok: true },
    { name: "Fotos_inventario_salon.jpg", status: "Subido", ok: true },
    { name: "Fotos_inventario_cocina.jpg", status: "Subido", ok: true },
    { name: "Nota_simple_registro.pdf", status: "Pendiente", ok: false },
  ],
  contractClauses: [
    { label: "Partes y duración", done: true },
    { label: "Renta y actualización IPC", done: true },
    { label: "Fianza y depósito AVS", done: true },
    { label: "Inventario fotográfico anexo", done: true },
    { label: "Gastos de comunidad", done: false },
  ],
  timeline: [
    { step: "Pago confirmado", date: "8 sep 2026", done: true, current: false },
    { step: "Documentación recibida", date: "9 sep 2026", done: true, current: false },
    { step: "Redacción del contrato", date: "En curso", done: false, current: true },
    { step: "Entrega para firma", date: "Próximo paso", done: false, current: false },
  ],
} as const;

type TabId = "expediente" | "documentos" | "contrato" | "seguimiento";

const TABS: { id: TabId; label: string; icon: typeof LayoutDashboard }[] = [
  { id: "expediente", label: "Expediente", icon: LayoutDashboard },
  { id: "documentos", label: "Documentos", icon: FolderLock },
  { id: "contrato", label: "Contrato", icon: FileSignature },
  { id: "seguimiento", label: "Seguimiento", icon: ClipboardList },
];

export function RentalContractPlatformShowcase() {
  const [activeTab, setActiveTab] = useState<TabId>("expediente");

  return (
    <section
      id="plataforma-alquiler"
      aria-label="Plataforma Livendia para contratos de alquiler"
      className="border-y border-slate-200 bg-[#F8FAFC] py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#1A4FBF]">Plataforma 100% privada</p>
          <h2 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1E293B] sm:text-3xl lg:text-4xl">
            Tu expediente de alquiler en un panel profesional y seguro
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#475569] sm:text-lg">
            Contratas online y accedes a la misma plataforma que usan todos los clientes de Livendia: sube DNI,
            fotos del inventario y sigue la redacción de tu contrato con un gestor inmobiliario asignado — sin correos
            perdidos ni WhatsApps desordenados.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
          {/* Feature list — desktop left */}
          <ul className="hidden space-y-5 lg:col-span-2 lg:block">
            {[
              {
                icon: ShieldCheck,
                title: "Gestoría especializada, no agencia",
                body: "Livendia solo trabaja contratos y trámites inmobiliarios para particulares. Sin comisiones sobre la renta.",
              },
              {
                icon: Lock,
                title: "Documentación cifrada y privada",
                body: "Cada cliente tiene su expediente digital. Tus DNIs, fotos e inventario no circulan por email abierto.",
              },
              {
                icon: User,
                title: "Gestor asignado a tu trámite",
                body: "Un gestor inmobiliario conoce tu caso de principio a fin y te avisa cuando el contrato está listo.",
              },
              {
                icon: Upload,
                title: "Subida desde móvil u ordenador",
                body: "Arrastra PDFs y fotos del piso. Todo queda archivado en el expediente con historial de actividad.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.title} className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1A4FBF]">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-bold text-[#1E293B]">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-[#64748B]">{item.body}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          {/* Interactive mockup */}
          <div className="lg:col-span-3">
            <div className="relative mx-auto w-full">
              <div className="pointer-events-none absolute -right-8 -top-8 h-36 w-36 rounded-full bg-[#1A4FBF]/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-10 -left-8 h-44 w-44 rounded-full bg-[#06B6D4]/10 blur-3xl" />

              <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-[0_24px_60px_rgba(15,23,42,0.14)] ring-1 ring-slate-100">
                <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-4 py-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400" aria-hidden />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                  <span className="mx-auto flex items-center gap-1.5 truncate rounded-md bg-white px-3 py-0.5 text-[10px] font-medium text-[#64748B] ring-1 ring-slate-200">
                    <Lock className="h-3 w-3 text-emerald-600" aria-hidden />
                    panel.livendia.com · conexión segura
                  </span>
                </div>

                <div className="flex min-h-[28rem] flex-col sm:min-h-[32rem]">
                  {/* Tab bar — interactive */}
                  <div
                    className="flex gap-1 overflow-x-auto border-b border-slate-200 bg-white px-2 py-2 sm:px-3"
                    role="tablist"
                    aria-label="Secciones del panel de cliente"
                  >
                    {TABS.map((tab) => {
                      const Icon = tab.icon;
                      const selected = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          type="button"
                          role="tab"
                          aria-selected={selected}
                          aria-controls={`panel-tab-${tab.id}`}
                          id={`tab-${tab.id}`}
                          onClick={() => setActiveTab(tab.id)}
                          className={`flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-2 text-xs font-semibold transition sm:text-sm ${
                            selected
                              ? "bg-[#1A4FBF] text-white shadow-md"
                              : "text-[#64748B] hover:bg-slate-100 hover:text-[#1E293B]"
                          }`}
                        >
                          <Icon className="h-4 w-4" aria-hidden />
                          {tab.label}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex min-h-0 flex-1">
                    {/* Mini sidebar */}
                    <div className="hidden w-14 shrink-0 flex-col border-r border-[#1547a8]/40 bg-[#1A4FBF] sm:flex lg:w-28">
                      <div className="border-b border-white/15 p-3">
                        <p className="hidden text-xs font-extrabold text-white lg:block">Livendia</p>
                        <p className="text-center text-xs font-bold text-white lg:hidden">L</p>
                      </div>
                      <nav className="flex-1 space-y-1 p-2">
                        {TABS.map((tab) => {
                          const Icon = tab.icon;
                          const selected = activeTab === tab.id;
                          return (
                            <button
                              key={`nav-${tab.id}`}
                              type="button"
                              onClick={() => setActiveTab(tab.id)}
                              className={`flex w-full items-center justify-center rounded-lg py-2 lg:justify-start lg:gap-2 lg:px-2.5 ${
                                selected ? "bg-white/15 shadow-[inset_3px_0_0_0_#06B6D4]" : "opacity-60 hover:opacity-90"
                              }`}
                              aria-label={tab.label}
                            >
                              <Icon className="h-4 w-4 text-white" aria-hidden />
                              <span className="hidden text-[10px] font-medium text-white lg:inline">{tab.label}</span>
                            </button>
                          );
                        })}
                      </nav>
                      <div className="border-t border-white/15 p-2">
                        <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
                          {DEMO.clientInitial}
                        </div>
                      </div>
                    </div>

                    {/* Panel content */}
                    <div
                      id={`panel-tab-${activeTab}`}
                      role="tabpanel"
                      aria-labelledby={`tab-${activeTab}`}
                      className="min-w-0 flex-1 bg-[radial-gradient(ellipse_at_top,_#EFF6FF_0%,_#F8FAFC_50%,_#fff_100%)] p-3 sm:p-4 lg:p-5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <p className="text-[10px] font-semibold uppercase tracking-wide text-[#64748B] sm:text-xs">
                            Hola, {DEMO.clientFirstName}
                          </p>
                          <p className="text-xs font-bold text-[#1E293B] sm:text-sm">{DEMO.serviceLabel}</p>
                        </div>
                        <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                          <Bell className="h-4 w-4 text-[#64748B]" aria-hidden />
                          <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-[#1A4FBF] text-[9px] font-bold text-white">
                            2
                          </span>
                        </span>
                      </div>

                      {activeTab === "expediente" && (
                        <div className="mt-3 space-y-3 animate-in fade-in duration-200">
                          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
                            {[
                              { label: "Progreso", value: `${DEMO.progress}%` },
                              { label: "Docs", value: "4/5" },
                              { label: "Gestor", value: "Activo" },
                            ].map((kpi) => (
                              <div
                                key={kpi.label}
                                className="rounded-lg border border-slate-200/80 bg-white px-2 py-2 text-center shadow-sm sm:px-3"
                              >
                                <p className="text-sm font-extrabold text-[#1A4FBF] sm:text-base">{kpi.value}</p>
                                <p className="text-[9px] font-semibold uppercase text-[#64748B]">{kpi.label}</p>
                              </div>
                            ))}
                          </div>

                          <div className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
                            <div className="flex items-start gap-3">
                              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]">
                                <FileText className="h-5 w-5 text-white" aria-hidden />
                              </div>
                              <div className="min-w-0 flex-1">
                                <p className="text-sm font-bold text-[#1E293B]">{DEMO.property}</p>
                                <p className="mt-0.5 text-xs text-[#64748B]">
                                  Ref. {DEMO.expedienteRef} · {DEMO.monthlyRent}
                                </p>
                                <span className="mt-2 inline-flex rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 ring-1 ring-amber-200">
                                  Redacción en curso
                                </span>
                                <div className="mt-2">
                                  <div className="flex justify-between text-[10px] font-semibold text-[#64748B]">
                                    <span>Expediente de alquiler</span>
                                    <span className="text-[#1A4FBF]">{DEMO.progress}%</span>
                                  </div>
                                  <div className="mt-1 h-2 overflow-hidden rounded-full bg-slate-100">
                                    <div
                                      className="h-full rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#06B6D4] transition-all"
                                      style={{ width: `${DEMO.progress}%` }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-3 py-3 sm:px-4">
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/20 text-xs font-bold text-white">
                              {DEMO.gestorInitial}
                            </span>
                            <div className="min-w-0 flex-1">
                              <p className="text-xs font-bold text-white sm:text-sm">
                                {DEMO.gestorName} · Gestor inmobiliario
                              </p>
                              <p className="text-[10px] text-blue-100 sm:text-xs">
                                Revisando inventario y cláusulas de fianza AVS
                              </p>
                            </div>
                            <ChevronRight className="h-5 w-5 shrink-0 text-white/80" aria-hidden />
                          </div>
                        </div>
                      )}

                      {activeTab === "documentos" && (
                        <div className="mt-3 animate-in fade-in duration-200">
                          <div className="mb-3 flex items-center justify-between">
                            <p className="text-xs font-bold uppercase tracking-wide text-[#64748B]">
                              Documentación del expediente
                            </p>
                            <span className="inline-flex items-center gap-1 rounded-full bg-[#EFF6FF] px-2 py-0.5 text-[10px] font-semibold text-[#1A4FBF]">
                              <Upload className="h-3 w-3" aria-hidden />
                              Subir archivos
                            </span>
                          </div>
                          <ul className="space-y-2">
                            {DEMO.documents.map((doc) => (
                              <li
                                key={doc.name}
                                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2.5 shadow-sm"
                              >
                                <span
                                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                                    doc.ok ? "bg-emerald-50 text-emerald-600" : "bg-amber-50 text-amber-600"
                                  }`}
                                >
                                  {doc.ok ? (
                                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                                  ) : (
                                    <Upload className="h-4 w-4" aria-hidden />
                                  )}
                                </span>
                                <div className="min-w-0 flex-1">
                                  <p className="truncate text-xs font-semibold text-[#1E293B] sm:text-sm">{doc.name}</p>
                                  <p className="text-[10px] text-[#64748B]">{doc.status}</p>
                                </div>
                              </li>
                            ))}
                          </ul>
                          <p className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-[10px] leading-relaxed text-[#64748B] sm:text-xs">
                            Inventario fotográfico incluido: salón, cocina, dormitorios y electrodomésticos documentados
                            antes de la firma.
                          </p>
                        </div>
                      )}

                      {activeTab === "contrato" && (
                        <div className="mt-3 animate-in fade-in duration-200">
                          <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
                            <div className="border-b border-slate-100 bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-4 py-3">
                              <p className="text-[10px] font-semibold uppercase tracking-wide text-blue-100">
                                Vista previa · Borrador
                              </p>
                              <p className="text-sm font-bold text-white">Contrato de arrendamiento LAU</p>
                              <p className="text-[10px] text-blue-100">{DEMO.property}</p>
                            </div>
                            <div className="space-y-2 p-4">
                              {DEMO.contractClauses.map((clause) => (
                                <div
                                  key={clause.label}
                                  className={`flex items-center gap-2 rounded-lg px-3 py-2 text-xs ${
                                    clause.done ? "bg-emerald-50 text-emerald-900" : "bg-slate-50 text-[#64748B]"
                                  }`}
                                >
                                  {clause.done ? (
                                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" aria-hidden />
                                  ) : (
                                    <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 border-slate-300" />
                                  )}
                                  <span className="font-medium">{clause.label}</span>
                                </div>
                              ))}
                            </div>
                            <div className="border-t border-slate-100 bg-slate-50 px-4 py-3">
                              <p className="text-[10px] text-[#64748B]">
                                Documento con maquetación profesional Livendia · Anexo inventario fotográfico · Cláusulas
                                adaptadas LAU y CC
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {activeTab === "seguimiento" && (
                        <div className="mt-3 animate-in fade-in duration-200">
                          <p className="mb-3 text-xs font-bold uppercase tracking-wide text-[#64748B]">
                            Línea de tiempo del trámite
                          </p>
                          <ol className="relative space-y-0 border-l-2 border-slate-200 pl-4">
                            {DEMO.timeline.map((item, idx) => (
                              <li key={item.step} className={`relative pb-4 ${idx === DEMO.timeline.length - 1 ? "pb-0" : ""}`}>
                                <span
                                  className={`absolute -left-[1.35rem] top-0.5 flex h-5 w-5 items-center justify-center rounded-full ring-2 ring-white ${
                                    item.done
                                      ? "bg-emerald-500 text-white"
                                      : item.current
                                        ? "bg-[#1A4FBF] text-white"
                                        : "bg-slate-200 text-slate-400"
                                  }`}
                                >
                                  {item.done ? (
                                    <CheckCircle2 className="h-3 w-3" aria-hidden />
                                  ) : (
                                    <span className="h-2 w-2 rounded-full bg-current" />
                                  )}
                                </span>
                                <p className="text-xs font-bold text-[#1E293B] sm:text-sm">{item.step}</p>
                                <p className="text-[10px] text-[#64748B] sm:text-xs">{item.date}</p>
                              </li>
                            ))}
                          </ol>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <p className="mt-4 text-center text-xs text-[#94A3B8]">
                Simulación interactiva con datos ficticios ({DEMO.clientFirstName}, {DEMO.gestorName}). Haz clic en las
                pestañas para explorar el panel real de clientes Livendia.
              </p>
            </div>
          </div>

          {/* Mobile feature list */}
          <ul className="space-y-4 lg:hidden">
            {[
              "Expediente digital privado por cada contrato",
              "Subida segura de DNI, fotos e inventario",
              "Gestor inmobiliario asignado con seguimiento visible",
            ].map((line) => (
              <li key={line} className="flex items-start gap-2 text-sm text-[#475569]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#06B6D4]" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Link
            href="/dashboard/servicios"
            className="inline-flex min-h-11 items-center justify-center rounded-full bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/20 transition hover:opacity-95"
          >
            Contratar y acceder al panel
          </Link>
          <Link
            href="/login"
            className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-[#1E293B] shadow-sm transition hover:border-[#1A4FBF]/30 hover:text-[#1A4FBF]"
          >
            Ya soy cliente
          </Link>
        </div>
      </div>
    </section>
  );
}
