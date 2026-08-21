import type { SupabaseClient } from "@supabase/supabase-js";

export async function getProfileRole(
  supabase: SupabaseClient,
  userId: string,
): Promise<string | null> {
  const { data } = await supabase.from("profiles").select("role").eq("id", userId).maybeSingle();
  return (data?.role as string | undefined) ?? null;
}

export async function isUserAdmin(supabase: SupabaseClient, userId: string): Promise<boolean> {
  return (await getProfileRole(supabase, userId)) === "admin";
}

export async function assertPropertyAccess(
  supabase: SupabaseClient,
  userId: string,
  propertyId: string,
): Promise<{ ok: true; isAdmin: boolean } | { ok: false; status: number; error: string }> {
  const admin = await isUserAdmin(supabase, userId);
  if (admin) return { ok: true, isAdmin: true };

  const { data: property } = await supabase
    .from("properties")
    .select("id, user_id")
    .eq("id", propertyId)
    .maybeSingle();

  if (!property) {
    return { ok: false, status: 404, error: "Propiedad no encontrada" };
  }
  if (property.user_id !== userId) {
    return { ok: false, status: 403, error: "No autorizado para esta propiedad" };
  }
  return { ok: true, isAdmin: false };
}
