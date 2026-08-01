import { createServiceRoleClient } from "@/lib/supabase/service";

export type OrderActivityKind = "status" | "document" | "payment" | "deliverable" | "note";

export async function logOrderActivity(input: {
  orderId: string;
  kind: OrderActivityKind;
  title: string;
  description?: string | null;
  meta?: Record<string, unknown>;
}) {
  try {
    const admin = createServiceRoleClient();
    await admin.from("order_activity").insert({
      order_id: input.orderId,
      kind: input.kind,
      title: input.title,
      description: input.description ?? null,
      meta: input.meta ?? {},
    });
  } catch (error) {
    console.error("[order-activity]", error);
  }
}

export async function logOrderDeliverable(input: {
  orderId: string;
  title: string;
  message?: string | null;
}) {
  try {
    const admin = createServiceRoleClient();
    await admin.from("order_deliverables").insert({
      order_id: input.orderId,
      title: input.title,
      message: input.message ?? null,
    });
    await logOrderActivity({
      orderId: input.orderId,
      kind: "deliverable",
      title: input.title,
      description: input.message ?? "Tu gestor ha compartido una entrega en tu expediente.",
    });
  } catch (error) {
    console.error("[order-deliverable]", error);
  }
}
