import type { SupabaseClient } from "@supabase/supabase-js";

export type AdminUnreadMap = {
  total: number;
  byProperty: Record<string, number>;
};

export async function getAdminUnreadByProperty(
  supabase: SupabaseClient,
  adminUserId: string,
  propertyIds?: string[],
): Promise<AdminUnreadMap> {
  let query = supabase
    .from("messages")
    .select("property_id")
    .neq("sender_id", adminUserId)
    .is("read_at", null);

  if (propertyIds?.length) {
    query = query.in("property_id", propertyIds);
  }

  const { data, error } = await query;
  if (error) {
    console.error("getAdminUnreadByProperty:", error.message);
    return { total: 0, byProperty: {} };
  }

  const byProperty: Record<string, number> = {};
  for (const row of data ?? []) {
    const pid = row.property_id as string;
    byProperty[pid] = (byProperty[pid] ?? 0) + 1;
  }

  const total = Object.values(byProperty).reduce((sum, n) => sum + n, 0);
  return { total, byProperty };
}
