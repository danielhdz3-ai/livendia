"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bell, Eye, Lock, Save, Shield } from "lucide-react";
import { useToast } from "@/components/toast-provider";
import { ChangePasswordForm } from "@/components/change-password-form";
import { PANEL_CARD, PANEL_CTA } from "@/lib/client-panel-ui";

export type ConfiguracionInitial = {
  notifyEmailOrders: boolean;
  notifyEmailDocs: boolean;
  notifyNewsletter: boolean;
};

export function ConfiguracionForm({ initial }: { initial: ConfiguracionInitial }) {
  const router = useRouter();
  const { toast } = useToast();
  const [notifyEmailOrders, setNotifyEmailOrders] = useState(initial.notifyEmailOrders);
  const [notifyEmailDocs, setNotifyEmailDocs] = useState(initial.notifyEmailDocs);
  const [notifyNewsletter, setNotifyNewsletter] = useState(initial.notifyNewsletter);
  const [saving, setSaving] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    try {
      const res = await fetch("/api/profile/preferences", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ notifyEmailOrders, notifyEmailDocs, notifyNewsletter }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        throw new Error(typeof data.error === "string" ? data.error : "No se pudieron guardar las preferencias");
      }
      toast("Preferencias guardadas correctamente.", "success");
      router.refresh();
    } catch (err) {
      toast(err instanceof Error ? err.message : "Error al guardar", "error");
    } finally {
      setSaving(false);
    }
  }

  return (
    <form className="space-y-6" onSubmit={handleSave}>
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
          <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#1A4FBF]/20 hover:bg-[#EFF6FF]/30">
            <div>
              <div className="font-semibold text-[#1E293B]">Notificaciones por email</div>
              <div className="text-sm text-[#64748B]">Actualizaciones de pedidos y expedientes</div>
            </div>
            <input
              type="checkbox"
              checked={notifyEmailOrders}
              onChange={(e) => setNotifyEmailOrders(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
            />
          </label>
          <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#1A4FBF]/20 hover:bg-[#EFF6FF]/30">
            <div>
              <div className="font-semibold text-[#1E293B]">Alertas de documentación</div>
              <div className="text-sm text-[#64748B]">Cuando falte algún archivo en tu expediente</div>
            </div>
            <input
              type="checkbox"
              checked={notifyEmailDocs}
              onChange={(e) => setNotifyEmailDocs(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
            />
          </label>
          <label className="flex items-center justify-between rounded-xl border border-slate-200 p-4 transition hover:border-[#1A4FBF]/20 hover:bg-[#EFF6FF]/30">
            <div>
              <div className="font-semibold text-[#1E293B]">Newsletter Livendia</div>
              <div className="text-sm text-[#64748B]">Novedades y consejos inmobiliarios</div>
            </div>
            <input
              type="checkbox"
              checked={notifyNewsletter}
              onChange={(e) => setNotifyNewsletter(e.target.checked)}
              className="h-5 w-5 rounded border-slate-300 text-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
            />
          </label>
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
        {!showPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword(true)}
            className="flex w-full items-center gap-3 rounded-xl border border-slate-200 p-4 text-left transition hover:border-[#1A4FBF]/20 hover:bg-slate-50"
          >
            <Lock className="h-5 w-5 text-[#64748B]" aria-hidden />
            <div>
              <div className="font-semibold text-[#1E293B]">Cambiar contraseña</div>
              <div className="text-sm text-[#64748B]">Actualiza la contraseña de acceso al panel</div>
            </div>
          </button>
        ) : (
          <ChangePasswordForm onCancel={() => setShowPassword(false)} />
        )}
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

      <button type="submit" disabled={saving} className={`inline-flex min-h-12 items-center gap-2 ${PANEL_CTA} disabled:opacity-60`}>
        <Save className="h-4 w-4" aria-hidden />
        {saving ? "Guardando…" : "Guardar preferencias"}
      </button>
    </form>
  );
}
