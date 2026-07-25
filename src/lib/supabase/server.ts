import { createServerClient } from "@supabase/ssr";
import { createClient } from "@supabase/supabase-js";
import { cookies } from "next/headers";

/**
 * Cliente anónimo para lecturas 100% públicas (catálogo de servicios activos).
 * A diferencia de `createServerSupabaseClient`, NO llama a `cookies()` ni a
 * ninguna otra Dynamic API: puede usarse en rutas prerenderizadas
 * (`generateStaticParams`) sin forzar render dinámico. Usa la política RLS
 * "services_select_active" (is_active = true), pensada exactamente para este
 * caso — visitantes sin sesión.
 *
 * No usar para nada que dependa de la sesión del usuario (auth, pedidos,
 * perfil, panel autenticado): para eso sigue usando `createServerSupabaseClient`.
 */
export function createAnonSupabaseClient() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }
  return createClient(url, anon, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export async function createServerSupabaseClient() {
  const cookieStore = await cookies();
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) {
    throw new Error("Faltan NEXT_PUBLIC_SUPABASE_URL o NEXT_PUBLIC_SUPABASE_ANON_KEY");
  }

  return createServerClient(url, anon, {
    cookies: {
      getAll() {
        return cookieStore.getAll();
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => {
            cookieStore.set(name, value, options);
          });
        } catch {
          /* set() no disponible en algunos Server Components */
        }
      },
    },
  });
}
