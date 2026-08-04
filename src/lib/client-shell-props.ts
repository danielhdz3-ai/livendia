import { getCachedAuthUser } from "@/lib/supabase/auth-cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";

export type ClientShellProps = {
  firstName: string;
  fullName: string;
  pendingOrders: number;
  isAdmin: boolean;
};

/** Datos compartidos para sidebar del panel cliente (dashboard + mis-pedidos). */
export async function getClientShellProps(): Promise<ClientShellProps | null> {
  const user = await getCachedAuthUser();
  if (!user) return null;

  const supabase = await createServerSupabaseClient();

  const [profileResult, ordersResult] = await Promise.all([
    supabase.from("profiles").select("full_name, role").eq("id", user.id).maybeSingle(),
    supabase.from("orders").select("status").eq("client_id", user.id),
  ]);

  const profile = profileResult.data;
  const orders = ordersResult.data ?? [];
  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const pendingOrders = orders.filter(
    (o) => o.status === "pending_docs" || o.status === "in_progress" || o.status === "paid",
  ).length;

  return {
    firstName: name.split(" ")[0] ?? "Cliente",
    fullName: name,
    pendingOrders,
    isAdmin: profile?.role === "admin",
  };
}
