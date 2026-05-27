"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

type LogoutButtonProps = {
  /** Fondo claro vs. contraste sobre sidebar azul Livendia. */
  variant?: "default" | "on-brand";
};

export function LogoutButton({ variant = "default" }: LogoutButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function logout() {
    setLoading(true);
    const supabase = createBrowserSupabaseClient();
    await supabase.auth.signOut();
    setLoading(false);
    router.push("/login");
    router.refresh();
  }

  return (
    <button
      type="button"
      onClick={logout}
      disabled={loading}
      className={
        variant === "on-brand"
          ? "flex w-full items-center justify-center gap-2 rounded-xl border border-white/35 bg-white/10 px-4 py-2.5 text-sm font-medium text-white transition hover:bg-white/20 hover:text-white disabled:opacity-60"
          : "flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-medium text-[#64748B] transition hover:bg-slate-50 hover:text-[#1E293B] disabled:opacity-60"
      }
    >
      <LogOut className="h-4 w-4" />
      <span>{loading ? "Cerrando..." : "Cerrar sesión"}</span>
    </button>
  );
}
