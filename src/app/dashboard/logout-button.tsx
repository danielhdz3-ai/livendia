"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
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
      className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-[#1E293B] hover:bg-slate-50 disabled:opacity-60"
    >
      {loading ? "…" : "Salir"}
    </button>
  );
}
