import { cookies } from "next/headers";
import type { SupabaseClient } from "@supabase/supabase-js";

export const RENTAL_ACTIVE_PROPERTY_COOKIE = "livendia_rental_property_id";

export type RentalPropertyRow = {
  id: string;
  address: string;
  zone?: string | null;
  postal_code?: string | null;
  cadastral_reference?: string | null;
  property_type?: string;
  rooms?: number | null;
  bathrooms?: number | null;
  surface_m2?: number | null;
  ibi_annual?: number | null;
  community_fee_monthly?: number | null;
  notes?: string | null;
  created_at?: string;
  user_id?: string;
};

export type RentalTenantRow = {
  id: string;
  property_id: string;
  full_name: string;
  email?: string | null;
  phone?: string | null;
  dni?: string | null;
  start_date: string;
  end_date?: string | null;
  monthly_rent: number;
  deposit_amount: number;
  is_active?: boolean;
  notes?: string | null;
};

export type ActiveRentalContext = {
  properties: RentalPropertyRow[];
  activeProperty: RentalPropertyRow | null;
  activeTenant: RentalTenantRow | null;
  tenantsForActive: RentalTenantRow[];
};

export async function getActivePropertyForUser(
  supabase: SupabaseClient,
  userId: string,
): Promise<ActiveRentalContext> {
  const { data: propertiesRaw } = await supabase
    .from("properties")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });

  const properties = (propertiesRaw ?? []) as RentalPropertyRow[];

  if (properties.length === 0) {
    return { properties: [], activeProperty: null, activeTenant: null, tenantsForActive: [] };
  }

  const cookieStore = await cookies();
  const cookieId = cookieStore.get(RENTAL_ACTIVE_PROPERTY_COOKIE)?.value?.trim();
  const activeProperty =
    (cookieId ? properties.find((p) => p.id === cookieId) : null) ?? properties[0];

  const { data: tenantsRaw } = await supabase
    .from("tenants")
    .select("*")
    .eq("property_id", activeProperty.id)
    .order("is_active", { ascending: false })
    .order("start_date", { ascending: false });

  const tenantsForActive = (tenantsRaw ?? []) as RentalTenantRow[];
  const activeTenant =
    tenantsForActive.find((t) => t.is_active !== false) ?? tenantsForActive[0] ?? null;

  return { properties, activeProperty, activeTenant, tenantsForActive };
}

export async function getUnreadChatCount(
  supabase: SupabaseClient,
  propertyId: string,
  userId: string,
): Promise<number> {
  const { count } = await supabase
    .from("messages")
    .select("id", { count: "exact", head: true })
    .eq("property_id", propertyId)
    .neq("sender_id", userId)
    .is("read_at", null);

  return count ?? 0;
}
