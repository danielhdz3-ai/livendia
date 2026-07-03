import { createServerSupabaseClient } from "@/lib/supabase/server";
import { createClient, type SupabaseClient, type User } from "@supabase/supabase-js";

type AuthedContext = {
  supabase: SupabaseClient;
  user: User;
};

/** Sesión desde cookies (SSR) o Authorization Bearer (subida desde el navegador). */
export async function getAuthedSupabaseFromRequest(req: Request): Promise<AuthedContext | null> {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anon = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !anon) return null;

  const bearer = req.headers.get("authorization")?.replace(/^Bearer\s+/i, "").trim();

  if (bearer) {
    const supabase = createClient(url, anon, {
      global: { headers: { Authorization: `Bearer ${bearer}` } },
    });
    const {
      data: { user },
      error,
    } = await supabase.auth.getUser(bearer);
    if (!error && user?.email) {
      return { supabase, user };
    }
  }

  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) return null;

  return { supabase, user };
}
