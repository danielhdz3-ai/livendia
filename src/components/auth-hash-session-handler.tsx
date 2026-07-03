"use client";

import { resolvePostLoginPath } from "@/lib/admin-access";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";

/** Tras magic link / recuperación: Supabase devuelve tokens en el hash de /login. */
export function AuthHashSessionHandler() {
  const search = useSearchParams();
  const next = search.get("next") ?? "/dashboard";
  const started = useRef(false);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (started.current || typeof window === "undefined") return;
    const hash = window.location.hash?.replace(/^#/, "");
    if (!hash?.includes("access_token")) return;

    const params = new URLSearchParams(hash);
    const access_token = params.get("access_token");
    const refresh_token = params.get("refresh_token");
    if (!access_token || !refresh_token) return;

    started.current = true;
    setWorking(true);

    void (async () => {
      const supabase = createBrowserSupabaseClient();
      const { data, error } = await supabase.auth.setSession({ access_token, refresh_token });
      if (error || !data.user) {
        setWorking(false);
        return;
      }

      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", data.user.id)
        .maybeSingle();

      const dest = resolvePostLoginPath(data.user.email, profile?.role, next);
      window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
      window.location.replace(dest);
    })();
  }, [next]);

  if (!working) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-white/95 text-sm font-semibold text-[#1A4FBF]">
      Entrando en tu área de cliente…
    </div>
  );
}
