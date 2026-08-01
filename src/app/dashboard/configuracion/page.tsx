import { ClientPanelShell } from "@/components/client-panel-shell";
import { LivendiaGestorCard } from "@/components/livendia-gestor-card";
import { PANEL_CARD } from "@/lib/client-panel-ui";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Bell, Eye, Lock, Save, Shield } from "lucide-react";

export const metadata = { title: "Configuración" };

export default async function ConfiguracionPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  return (
    <ClientPanelShell
      title="Configuración"
      subtitle="Personaliza notificaciones, seguridad y privacidad de tu cuenta Livendia."
      eyebrow="Preferencias"
    >
      <section className={PANEL_CARD}>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#EFF6FF] text-[#1A4FBF]">
            <Bell className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1E293B]">Notificaciones</h2>
            <p className="text-sm text-[#64748B]">Elige cómo quieres recibir actualizaciones</p>
          </div>
        </div>
        <div className="space-y-3">
          {[
            { title: "Notificaciones por email", desc: "Actualizaciones de pedidos y expedientes" },
            { title: "Alertas de documentación", desc: "Cuando falte algún archivo en tu expediente" },
            { title: "Newsletter Livendia", desc: "Novedades y consejos inmobiliarios" },
          ].map((item, i) => (
            <label
              key={item.title}
              className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#1A4FBF]/20 hover:bg-[#EFF6FF]/30"
            >
              <div>
                <div className="font-semibold text-[#1E293B]">{item.title}</div>
                <div className="text-sm text-[#64748B]">{item.desc}</div>
              </div>
              <input
                type="checkbox"
                defaultChecked={i < 2}
                className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
              />
            </label>
          ))}
        </div>
      </section>

      <section className={PANEL_CARD}>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
            <Shield className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1E293B]">Seguridad</h2>
            <p className="text-sm text-[#64748B]">Protege tu cuenta</p>
          </div>
        </div>
        <div className="space-y-3">
          <button
            type="button"
            className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left transition hover:border-[#1A4FBF]/20 hover:bg-slate-50"
          >
            <Lock className="h-5 w-5 text-[#64748B]" aria-hidden />
            <div>
              <div className="font-semibold text-[#1E293B]">Cambiar contraseña</div>
              <div className="text-sm text-[#64748B]">Próximamente disponible</div>
            </div>
          </button>
        </div>
      </section>

      <section className={PANEL_CARD}>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-50 text-violet-700">
            <Eye className="h-5 w-5" aria-hidden />
          </div>
          <div>
            <h2 className="text-lg font-bold text-[#1E293B]">Privacidad</h2>
            <p className="text-sm text-[#64748B]">Tus derechos y nuestras políticas</p>
          </div>
        </div>
        <div className="space-y-2">
          <Link
            href="/legal/privacidad"
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 font-semibold text-[#1E293B] transition hover:border-[#1A4FBF]/20 hover:bg-[#EFF6FF]/30"
          >
            Política de privacidad
            <span className="text-[#1A4FBF]">→</span>
          </Link>
          <Link
            href="/legal/cookies"
            className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 font-semibold text-[#1E293B] transition hover:border-[#1A4FBF]/20 hover:bg-[#EFF6FF]/30"
          >
            Política de cookies
            <span className="text-[#1A4FBF]">→</span>
          </Link>
        </div>
      </section>

      <button
        type="button"
        className="inline-flex min-h-12 items-center gap-2 rounded-2xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 text-sm font-bold text-white shadow-lg"
      >
        <Save className="h-4 w-4" aria-hidden />
        Guardar preferencias
      </button>

      <LivendiaGestorCard compact />
    </ClientPanelShell>
  );
}
