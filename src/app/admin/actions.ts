"use server";

import {
  fetchClientEmailForOrder,
  sendDocumentDeliveredEmail,
  sendOrderStatusUpdatedEmail,
} from "@/lib/email/send";
import { logOrderActivity, logOrderDeliverable } from "@/lib/order-activity-log";
import { ORDER_STATUS_LABEL_ES } from "@/lib/order-status-labels";
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

  await logOrderActivity({
    orderId,
    kind: "status",
    title: ORDER_STATUS_LABEL_ES[status] ?? "Estado actualizado",
    description: "Tu gestor ha actualizado el estado de tu expediente.",
  });

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
  revalidatePath("/admin/expedientes");
  revalidatePath(`/admin/pedidos/${orderId}`);
  revalidatePath(`/admin/expedientes/${orderId}`);
  revalidatePath("/admin/ventas");
  revalidatePath("/admin");
  return { ok: true };
}

export async function notifyDocumentDelivered(orderId: string, message: string) {
  const trimmed = message.trim();
  if (!trimmed) return { error: "Escribe un mensaje para el cliente" };

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

  if (!order?.client_id) return { error: "Pedido no encontrado" };

  const contact = await fetchClientEmailForOrder(order.client_id as string);
  if (!contact?.email) return { error: "Cliente sin email" };

  const svc = order.services;
  const serviceName =
    (Array.isArray(svc) ? svc[0]?.name : (svc as { name?: string } | null)?.name) ?? "Servicio";

  try {
    await sendDocumentDeliveredEmail({
      to: contact.email,
      customerName: contact.fullName,
      serviceName,
      message: trimmed,
    });
    await logOrderDeliverable({
      orderId,
      title: "Entrega de tu gestor",
      message: trimmed,
    });
  } catch {
    return { error: "No se pudo enviar el email" };
  }

  revalidatePath(`/admin/pedidos/${orderId}`);
  revalidatePath(`/admin/expedientes/${orderId}`);
  return { ok: true };
}

async function assertAdmin() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return { error: "No autorizado" as const, supabase: null };

  const { data: p } = await supabase.from("profiles").select("role").eq("id", user.id).maybeSingle();
  if (p?.role !== "admin") return { error: "No permitido" as const, supabase: null };

  return { supabase, user };
}

function revalidateAdminSales() {
  revalidatePath("/admin");
  revalidatePath("/admin/ventas");
  revalidatePath("/admin/expedientes");
  revalidatePath("/admin/base-datos");
}

export async function createManualSale(input: {
  clientId: string;
  serviceId: string;
  totalCents: number;
  paymentNote?: string;
}) {
  const auth = await assertAdmin();
  if (auth.error || !auth.supabase) return { error: auth.error };

  const clientId = input.clientId.trim();
  const serviceId = input.serviceId.trim();
  const totalCents = Math.round(input.totalCents);

  if (!clientId || !serviceId || totalCents <= 0) {
    return { error: "Cliente, servicio e importe son obligatorios." };
  }

  const paidAt = new Date().toISOString();
  const note = input.paymentNote?.trim() || "Pago manual registrado por admin";

  const { data, error } = await auth.supabase
    .from("orders")
    .insert({
      client_id: clientId,
      service_id: serviceId,
      status: "pending_docs",
      total_cents: totalCents,
      paid_at: paidAt,
      notes: note,
    })
    .select("id")
    .single();

  if (error) return { error: error.message };

  await logOrderActivity({
    orderId: data.id as string,
    kind: "payment",
    title: "Pago manual registrado",
    description: note,
  });

  revalidateAdminSales();
  return { ok: true, orderId: data.id as string };
}

export async function deleteManualSale(orderId: string) {
  return deleteSaleByAdmin(orderId);
}

export async function deleteSaleByAdmin(orderId: string) {
  const auth = await assertAdmin();
  if (auth.error || !auth.supabase) return { error: auth.error };

  const { error } = await auth.supabase.from("orders").delete().eq("id", orderId);
  if (error) return { error: error.message };

  revalidateAdminSales();
  return { ok: true };
}

export async function updateSaleByAdmin(input: {
  orderId: string;
  totalCents: number;
  notes?: string;
}) {
  const auth = await assertAdmin();
  if (auth.error || !auth.supabase) return { error: auth.error };

  const totalCents = Math.round(input.totalCents);
  if (totalCents <= 0) return { error: "Importe inválido." };

  const { error } = await auth.supabase
    .from("orders")
    .update({
      total_cents: totalCents,
      notes: input.notes?.trim() || null,
    })
    .eq("id", input.orderId);

  if (error) return { error: error.message };

  revalidateAdminSales();
  revalidatePath(`/admin/expedientes/${input.orderId}`);
  return { ok: true };
}

export async function updateSalePaymentStatus(orderId: string, paymentStatus: "paid" | "refund") {
  const auth = await assertAdmin();
  if (auth.error || !auth.supabase) return { error: auth.error };

  const { data: order } = await auth.supabase
    .from("orders")
    .select("paid_at, notes, status")
    .eq("id", orderId)
    .maybeSingle();

  if (!order) return { error: "Venta no encontrada" };

  if (paymentStatus === "refund") {
    const note = order.notes?.includes("[Devolución]") ? order.notes : `[Devolución] ${order.notes ?? ""}`.trim();
    const { error } = await auth.supabase
      .from("orders")
      .update({ status: "cancelled", notes: note })
      .eq("id", orderId);
    if (error) return { error: error.message };
  } else {
    const paidAt = order.paid_at ?? new Date().toISOString();
    const note = (order.notes ?? "").replace(/^\[Devolución\]\s*/, "").trim() || null;
    const status = order.status === "cancelled" ? "pending_docs" : order.status;
    const { error } = await auth.supabase
      .from("orders")
      .update({
        status: status === "cancelled" ? "pending_docs" : status,
        paid_at: paidAt,
        notes: note,
      })
      .eq("id", orderId);
    if (error) return { error: error.message };
  }

  revalidateAdminSales();
  revalidatePath(`/admin/expedientes/${orderId}`);
  return { ok: true };
}

export async function updateClientByAdmin(input: {
  clientId: string;
  fullName: string;
  phone?: string;
  dniNie?: string;
}) {
  const auth = await assertAdmin();
  if (auth.error || !auth.supabase) return { error: auth.error };

  const { error } = await auth.supabase
    .from("profiles")
    .update({
      full_name: input.fullName.trim(),
      phone: input.phone?.trim() || null,
      dni_nie: input.dniNie?.trim() || null,
    })
    .eq("id", input.clientId)
    .eq("role", "client");

  if (error) return { error: error.message };

  revalidatePath("/admin/base-datos");
  revalidatePath(`/admin/base-datos/${input.clientId}`);
  return { ok: true };
}

export async function createManualClient(input: { email: string; fullName: string; phone?: string }) {
  const auth = await assertAdmin();
  if (auth.error) return { error: auth.error };

  const email = input.email.trim().toLowerCase();
  const fullName = input.fullName.trim();
  if (!email || !fullName) return { error: "Email y nombre son obligatorios." };

  const admin = (await import("@/lib/supabase/service")).createServiceRoleClient();
  const tempPassword = crypto.randomUUID().replace(/-/g, "").slice(0, 16) + "Aa1!";

  const { data: created, error: createError } = await admin.auth.admin.createUser({
    email,
    password: tempPassword,
    email_confirm: true,
    user_metadata: { full_name: fullName },
  });

  if (createError) return { error: createError.message };
  const userId = created.user?.id;
  if (!userId) return { error: "No se pudo crear el usuario." };

  const { error: profileError } = await admin
    .from("profiles")
    .update({
      full_name: fullName,
      phone: input.phone?.trim() || null,
      role: "client",
    })
    .eq("id", userId);

  if (profileError) return { error: profileError.message };

  revalidatePath("/admin/base-datos");
  revalidatePath("/admin/ventas");
  return { ok: true, clientId: userId };
}
