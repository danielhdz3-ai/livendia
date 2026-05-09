"use server";

import { createServerSupabaseClient } from "@/lib/supabase/server";
import { revalidatePath } from "next/cache";

const ALLOWED = new Set([
  "pending_payment",
  "paid",
  "pending_docs",
  "in_review",
  "in_progress",
  "completed",
  "cancelled",
]);

export async function updateOrderStatus(orderId: string, status: string) {
  if (!ALLOWED.has(status)) {
    return { error: "Estado inválido" };
  }
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "No autorizado" };

  const { data: p } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (p?.role !== "admin") return { error: "No permitido" };

  const { error } = await supabase.from("orders").update({ status }).eq("id", orderId);
  if (error) return { error: error.message };

  revalidatePath("/admin/pedidos");
  revalidatePath(`/admin/pedidos/${orderId}`);
  return { ok: true };
}
