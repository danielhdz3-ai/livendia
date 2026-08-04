import { cache } from "react";
import { createServerSupabaseClient } from "@/lib/supabase/server";

/** Una sola lectura de sesión por request de servidor (evita waterfalls duplicados). */
export const getCachedAuthUser = cache(async () => {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
});

export const getCachedUserProfile = cache(async (userId: string) => {
  const supabase = await createServerSupabaseClient();
  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, phone, dni_nie, fiscal_address, notify_email_orders, notify_email_docs, notify_newsletter")
    .eq("id", userId)
    .maybeSingle();
  return profile;
});
