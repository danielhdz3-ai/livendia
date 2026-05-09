"use server";

import { fetchClientEmailForOrder, sendOrderStatusUpdatedEmail } from "@/lib/email/send";
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

  const { data: order } = await supabase
    .from("orders")
    .select("client_id, services ( name )")
    .eq("id", orderId)
    .maybeSingle();

  const { error } = await supabase.from("orders").update({ status }).eq("id", orderId);
  if (error) return { error: error.message };

  try {
    if (order?.client_id) {
      const contact = await fetchClientEmailForOrder(order.client_id as string);
      const svc = order.services;
      const serviceName =
        (Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name) ?? "Servicio";
      if (contact?.email) {
        await sendOrderStatusUpdatedEmail({
          to: contact.email,
          customerName: contact.fullName,
          serviceName,
          statusKey: status,
        });
      }
    }
  } catch {
    /* el cambio de estado ya se guardó */
  }

  revalidatePath("/admin/pedidos");
  revalidatePath(`/admin/pedidos/${orderId}`);
  return { ok: true };
}
