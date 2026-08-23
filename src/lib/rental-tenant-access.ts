import type { SupabaseClient } from "@supabase/supabase-js";

export type TenantContext = {
  tenantId: string;
  propertyId: string;
  propertyAddress: string;
  tenantName: string;
};

export async function getTenantContextForUser(
  supabase: SupabaseClient,
  userId: string,
): Promise<TenantContext | null> {
  const { data: tenant } = await supabase
    .from("tenants")
    .select("id, full_name, property_id, properties:property_id ( address )")
    .eq("user_id", userId)
    .eq("is_active", true)
    .maybeSingle();

  if (!tenant?.property_id) return null;

  const prop = tenant.properties as { address?: string } | { address?: string }[] | null;
  const property = Array.isArray(prop) ? prop[0] : prop;

  return {
    tenantId: tenant.id as string,
    propertyId: tenant.property_id as string,
    propertyAddress: property?.address ?? "Inmueble",
    tenantName: (tenant.full_name as string) || "Inquilino",
  };
}

export async function getTenantForProperty(
  supabase: SupabaseClient,
  userId: string,
  propertyId: string,
): Promise<{ tenantId: string } | null> {
  const { data } = await supabase
    .from("tenants")
    .select("id")
    .eq("user_id", userId)
    .eq("property_id", propertyId)
    .eq("is_active", true)
    .maybeSingle();

  return data?.id ? { tenantId: data.id as string } : null;
}
