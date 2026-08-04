import { createServiceRoleClient } from "@/lib/supabase/service";

export type ClientNotificationKind =
  | "status"
  | "document"
  | "deliverable"
  | "payment"
  | "reminder"
  | "system";

export type ClientNotificationRow = {
  id: string;
  user_id: string;
  kind: ClientNotificationKind;
  title: string;
  message: string | null;
  href: string | null;
  order_id: string | null;
  read_at: string | null;
  created_at: string;
};

/** Crea una notificación in-app para el cliente del pedido. */
export async function notifyOrderClient(input: {
  orderId: string;
  kind: ClientNotificationKind;
  title: string;
  message?: string | null;
  href?: string | null;
}) {
  try {
    const admin = createServiceRoleClient();
    const { data: order } = await admin
      .from("orders")
      .select("client_id")
      .eq("id", input.orderId)
      .maybeSingle();

    if (!order?.client_id) return;

    const href = input.href ?? `/mis-pedidos/${input.orderId}`;

    await admin.from("client_notifications").insert({
      user_id: order.client_id as string,
      kind: input.kind,
      title: input.title,
      message: input.message ?? null,
      href,
      order_id: input.orderId,
    });
  } catch (error) {
    console.error("[client-notifications] notifyOrderClient", error);
  }
}

/** Recordatorios de documentación pendiente (idempotente por pedido). */
export async function syncDocReminderNotifications(userId: string) {
  try {
    const admin = createServiceRoleClient();
    const { data: orders } = await admin
      .from("orders")
      .select("id, services ( name )")
      .eq("client_id", userId)
      .in("status", ["paid", "pending_docs"]);

    const orderIds = (orders ?? []).map((o) => o.id as string);
    if (orderIds.length === 0) return;

    const { data: existingRows } = await admin
      .from("client_notifications")
      .select("order_id")
      .eq("user_id", userId)
      .eq("kind", "reminder")
      .in("order_id", orderIds);

    const existingOrderIds = new Set((existingRows ?? []).map((r) => r.order_id as string));

    const toInsert = (orders ?? [])
      .filter((order) => !existingOrderIds.has(order.id as string))
      .map((order) => {
        const svc = order.services;
        const serviceRow = Array.isArray(svc) ? svc[0] : svc;
        const serviceName = (serviceRow?.name as string | undefined) ?? "tu servicio";
        const orderId = order.id as string;
        return {
          user_id: userId,
          order_id: orderId,
          kind: "reminder" as const,
          title: "Documentación pendiente",
          message: `Sube los archivos de ${serviceName} para que Daniel pueda revisar tu expediente.`,
          href: `/mis-pedidos/${orderId}#documentos`,
        };
      });

    if (toInsert.length > 0) {
      await admin.from("client_notifications").insert(toInsert);
    }
  } catch (error) {
    console.error("[client-notifications] syncDocReminderNotifications", error);
  }
}

export function mapActivityKindToNotification(
  kind: string,
): ClientNotificationKind | null {
  if (kind === "status" || kind === "deliverable" || kind === "payment") {
    return kind;
  }
  return null;
}
