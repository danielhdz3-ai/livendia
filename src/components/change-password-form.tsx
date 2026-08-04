"use client";

import { useState } from "react";
import { Loader2, Lock, Mail } from "lucide-react";
import { useToast } from "@/components/toast-provider";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function ChangePasswordForm({ onCancel }: { onCancel?: () => void }) {
  const { toast } = useToast();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [busy, setBusy] = useState(false);
  const [sendingReset, setSendingReset] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (password.length < 8) {
      toast("La contraseña debe tener al menos 8 caracteres.", "error");
      return;
    }
    if (password !== confirm) {
      toast("Las contraseñas no coinciden.", "error");
      return;
    }

    setBusy(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const { error } = await supabase.auth.updateUser({ password });
      if (error) {
        throw new Error(error.message);
      }
      toast("Contraseña actualizada correctamente.", "success");
      setPassword("");
      setConfirm("");
      onCancel?.();
    } catch (err) {
      toast(err instanceof Error ? err.message : "No se pudo cambiar la contraseña", "error");
    } finally {
      setBusy(false);
    }
  }

  async function sendResetEmail() {
    setSendingReset(true);
    try {
      const supabase = createBrowserSupabaseClient();
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user?.email) {
        toast("No hay email asociado a tu cuenta.", "error");
        return;
      }
      const origin = window.location.origin;
      const { error } = await supabase.auth.resetPasswordForEmail(user.email, {
        redirectTo: `${origin}/login?reset=1`,
      });
      if (error) throw new Error(error.message);
      toast("Te hemos enviado un enlace para restablecer la contraseña.", "success");
    } catch (err) {
      toast(err instanceof Error ? err.message : "No se pudo enviar el enlace", "error");
    } finally {
      setSendingReset(false);
    }
  }

  return (
    <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-4">
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="new-password" className="block text-sm font-semibold text-[#1E293B]">
            Nueva contraseña
          </label>
          <input
            id="new-password"
            type="password"
            autoComplete="new-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
            placeholder="Mínimo 8 caracteres"
          />
        </div>
        <div>
          <label htmlFor="confirm-password" className="block text-sm font-semibold text-[#1E293B]">
            Confirmar contraseña
          </label>
          <input
            id="confirm-password"
            type="password"
            autoComplete="new-password"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            className="mt-2 w-full rounded-xl border border-slate-300 px-3 py-3 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
          />
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="submit"
            disabled={busy}
            className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-[#1A4FBF] px-4 text-sm font-bold text-white hover:bg-[#2563EB] disabled:opacity-60"
          >
            {busy ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Lock className="h-4 w-4" aria-hidden />}
            Guardar contraseña
          </button>
          {onCancel ? (
            <button
              type="button"
              onClick={onCancel}
              className="inline-flex min-h-11 items-center rounded-xl border border-slate-200 px-4 text-sm font-semibold text-[#64748B] hover:bg-white"
            >
              Cancelar
            </button>
          ) : null}
        </div>
      </form>
      <button
        type="button"
        onClick={() => void sendResetEmail()}
        disabled={sendingReset}
        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] hover:underline disabled:opacity-60"
      >
        {sendingReset ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden /> : <Mail className="h-4 w-4" aria-hidden />}
        Prefiero recibir un enlace por email
      </button>
    </div>
  );
}
