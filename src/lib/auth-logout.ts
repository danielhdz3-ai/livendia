import { createBrowserSupabaseClient } from "@/lib/supabase/client";

/** Cierra sesión Supabase y recarga en login (evita estado cacheado al cambiar de usuario). */
export async function performClientLogout(redirectTo = "/login?cambiar=1"): Promise<void> {
  const supabase = createBrowserSupabaseClient();
  try {
    await supabase.auth.signOut({ scope: "global" });
  } catch {
    /* continuar con redirección */
  }
  window.location.href = redirectTo;
}
