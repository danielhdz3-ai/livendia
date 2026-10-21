import type { SupabaseClient } from "@supabase/supabase-js";
import { getActivePropertyForClientUser } from "@/lib/rental-active-property";
import { redirect } from "next/navigation";

/** Contexto de propiedad del cliente para páginas espejo en admin. */
export async function getAdminMirrorRentalContext(supabase: SupabaseClient, clientId: string) {
  const ctx = await getActivePropertyForClientUser(supabase, clientId);
  return ctx;
}

export async function requireAdminMirrorProperty(supabase: SupabaseClient, clientId: string) {
  const ctx = await getAdminMirrorRentalContext(supabase, clientId);
  if (!ctx.activeProperty) {
    redirect(`/admin/alquileres/${clientId}`);
  }
  return ctx;
}
