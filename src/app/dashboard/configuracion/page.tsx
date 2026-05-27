import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Bell, Shield, Lock, Eye, Save } from "lucide-react";

export const metadata = { title: "Configuración" };

export default async function ConfiguracionPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al panel</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-[#1E293B]">Configuración</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            Personaliza tu experiencia y preferencias de la plataforma
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        {/* Notifications */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50">
              <Bell className="h-5 w-5 text-blue-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1E293B]">Notificaciones</h2>
              <p className="text-sm text-[#64748B]">Elige cómo quieres recibir actualizaciones</p>
            </div>
          </div>

          <div className="space-y-4">
            <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <div>
                <div className="font-semibold text-[#1E293B]">Notificaciones por email</div>
                <div className="text-sm text-[#64748B]">Recibe actualizaciones de pedidos por correo</div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
            </label>

            <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <div>
                <div className="font-semibold text-[#1E293B]">Alertas de documentos caducados</div>
                <div className="text-sm text-[#64748B]">Te avisamos cuando un contrato esté próximo a vencer</div>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
            </label>

            <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <div>
                <div className="font-semibold text-[#1E293B]">Newsletter y ofertas</div>
                <div className="text-sm text-[#64748B]">Recibe novedades y promociones exclusivas</div>
              </div>
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
            </label>
          </div>
        </section>

        {/* Security */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-50">
              <Shield className="h-5 w-5 text-green-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1E293B]">Seguridad</h2>
              <p className="text-sm text-[#64748B]">Protege tu cuenta</p>
            </div>
          </div>

          <div className="space-y-3">
            <button className="flex w-full items-center justify-between rounded-xl border border-slate-200 p-4 text-left transition hover:bg-slate-50">
              <div className="flex items-center gap-3">
                <Lock className="h-5 w-5 text-[#64748B]" />
                <div>
                  <div className="font-semibold text-[#1E293B]">Cambiar contraseña</div>
                  <div className="text-sm text-[#64748B]">Última actualización: Nunca</div>
                </div>
              </div>
              <Eye className="h-5 w-5 text-[#64748B]" />
            </button>

            <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50">
              <div>
                <div className="font-semibold text-[#1E293B]">Autenticación de dos factores (2FA)</div>
                <div className="text-sm text-[#64748B]">Añade una capa extra de seguridad</div>
              </div>
              <input
                type="checkbox"
                className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
            </label>
          </div>
        </section>

        {/* Privacy */}
        <section className="mb-6 rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-50">
              <Eye className="h-5 w-5 text-violet-600" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-[#1E293B]">Privacidad</h2>
              <p className="text-sm text-[#64748B]">Controla tus datos</p>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/legal/privacidad"
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >
              <div className="font-semibold text-[#1E293B]">Política de privacidad</div>
              <ArrowLeft className="h-5 w-5 rotate-180 text-[#64748B]" />
            </Link>

            <Link
              href="/legal/cookies"
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >
              <div className="font-semibold text-[#1E293B]">Política de cookies</div>
              <ArrowLeft className="h-5 w-5 rotate-180 text-[#64748B]" />
            </Link>

            <button className="flex w-full items-center justify-between rounded-xl border border-red-200 bg-red-50 p-4 text-left transition hover:bg-red-100">
              <div>
                <div className="font-semibold text-red-900">Eliminar mi cuenta</div>
                <div className="text-sm text-red-700">Esta acción es permanente</div>
              </div>
              <ArrowLeft className="h-5 w-5 rotate-180 text-red-600" />
            </button>
          </div>
        </section>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]">
            <Save className="h-4 w-4" />
            <span>Guardar preferencias</span>
          </button>
          <Link
            href="/dashboard"
            className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-[#64748B] transition hover:bg-slate-50"
          >
            Cancelar
          </Link>
        </div>

        <div className="mt-6 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
          <h3 className="font-bold text-blue-900">Nota</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-800">
            Algunas funcionalidades de configuración están en desarrollo. Los cambios de seguridad y privacidad
            estarán completamente funcionales en próximas versiones.
          </p>
        </div>
      </main>
    </div>
  );
}
