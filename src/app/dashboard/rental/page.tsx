import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import {
  Home,
  Building2,
  Users,
  MessageSquare,
  AlertCircle,
  Plus,
  FileText,
  Upload,
  ArrowLeft,
  MapPin,
  Phone,
  Mail,
  Euro,
  FileSignature,
  ImageIcon,
} from "lucide-react";
import { PropertyForm } from "./property-form";

export const metadata = { title: "Administración de Alquileres — Livendia" };

export default async function RentalManagementPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const firstName = name.split(" ")[0];

  // Fetch properties
  const { data: properties } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", user.id);

  const hasProperty = (properties?.length ?? 0) > 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span>Volver al panel</span>
            </Link>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-semibold text-[#1E293B]">{firstName}</div>
                <div className="text-xs text-[#64748B]">Administración de alquileres</div>
              </div>
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-[#1A4FBF] to-[#06B6D4] text-sm font-bold text-white">
                {firstName.charAt(0).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {/* Welcome Section */}
        <div className="mb-8 rounded-2xl bg-gradient-to-r from-[#1A4FBF] via-[#2563EB] to-[#06B6D4] p-8 text-white shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-sm">
              <Building2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Bienvenido a tu panel de administración de alquiler</h1>
              <p className="mt-2 text-blue-100">
                Gestiona tus inmuebles, inquilinos, incidencias y comunicaciones en un solo lugar
              </p>
            </div>
          </div>
        </div>

        {/* Section 1: Datos del Inmueble */}
        <section className="mb-8">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#1E293B]">1. Datos del Inmueble</h2>
              <p className="text-sm text-[#64748B]">Información y documentación de la propiedad</p>
            </div>
            {hasProperty && (
              <button className="inline-flex items-center gap-2 rounded-xl bg-[#1A4FBF] px-4 py-2 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2563EB]">
                <Plus className="h-4 w-4" />
                <span>Agregar inmueble</span>
              </button>
            )}
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            {!hasProperty ? (
              <PropertyForm />
            ) : (
              <div className="text-center py-8">
                <p className="text-sm text-[#64748B]">Inmuebles registrados: {properties?.length}</p>
              </div>
            )}
          </div>
        </section>

        {/* Section 2: Datos del Inquilino */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-[#1E293B]">2. Datos del Inquilino</h2>
            <p className="text-sm text-[#64748B]">Información del arrendatario y contrato activo</p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="text-center py-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-emerald-50">
                <Users className="h-10 w-10 text-emerald-600" />
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
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <input
                      type="tel"
                      placeholder="Teléfono"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <input
                      type="text"
                      placeholder="DNI/NIE"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
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
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <input
                      type="date"
                      placeholder="Fecha fin"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <input
                      type="number"
                      placeholder="Mensualidad (€)"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <input
                      type="number"
                      placeholder="Otros gastos (€)"
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
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <input
                      type="number"
                      placeholder="Fianza adicional (€)"
                      className="w-full rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/20"
                    />
                    <div className="rounded-lg bg-emerald-50 p-3">
                      <div className="text-xs font-semibold text-emerald-900">Total Fianza</div>
                      <div className="text-2xl font-bold text-emerald-600">0 €</div>
                    </div>
                  </div>
                </div>
              </div>

              <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105">
                <Plus className="h-5 w-5" />
                <span>Guardar Inquilino</span>
              </button>
            </div>
          </div>
        </section>

        {/* Section 3: Portal de Incidencias */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-[#1E293B]">3. Portal de Incidencias</h2>
            <p className="text-sm text-[#64748B]">
              Gestiona tickets con fotos, autoriza presupuestos y coordina técnicos
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="text-center py-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-50">
                <AlertCircle className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">Sin incidencias activas</h3>
              <p className="mt-2 text-sm text-[#64748B]">
                Los inquilinos pueden crear tickets y tú autorizas presupuestos
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-2">
                <div className="rounded-xl border border-slate-200 p-6 text-left">
                  <h4 className="font-semibold text-[#1E293B]">Crear Incidencia Manual</h4>
                  <p className="mt-2 text-sm text-[#64748B]">
                    Registra una incidencia como gestor
                  </p>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900 transition hover:bg-amber-200">
                    <Plus className="h-4 w-4" />
                    <span>Nueva incidencia</span>
                  </button>
                </div>

                <div className="rounded-xl border border-slate-200 p-6 text-left">
                  <h4 className="font-semibold text-[#1E293B]">Portal del Inquilino</h4>
                  <p className="mt-2 text-sm text-[#64748B]">
                    Los inquilinos crean tickets con fotos desde su portal
                  </p>
                  <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-200">
                    <ImageIcon className="h-4 w-4" />
                    <span>Configurar acceso</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Chat Unificado */}
        <section className="mb-8">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-[#1E293B]">4. Chat Unificado</h2>
            <p className="text-sm text-[#64748B]">
              Conversaciones entre propietario y gestor con archivos adjuntos
            </p>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200">
            <div className="text-center py-12">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-blue-50">
                <MessageSquare className="h-10 w-10 text-[#1A4FBF]" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">Chat con tu gestor</h3>
              <p className="mt-2 text-sm text-[#64748B]">
                Comunícate directamente con nuestro equipo de gestión inmobiliaria
              </p>

              <button className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#1A4FBF] px-6 py-3 font-semibold text-white shadow-lg transition hover:bg-[#2563EB]">
                <MessageSquare className="h-5 w-5" />
                <span>Iniciar Conversación</span>
              </button>

              <div className="mt-6 rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-blue-900">
                  💡 <strong>Tip:</strong> Puedes adjuntar fotos, documentos y facturas en el chat
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
