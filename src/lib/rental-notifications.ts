import { createServiceRoleClient } from "@/lib/supabase/service";

/** Notificación in-app (bandeja client_notifications, kind system). */
export async function notifyRentalUser(input: {
  userId: string;
  title: string;
  message?: string | null;
  href?: string | null;
}) {
  try {
    const admin = createServiceRoleClient();
    await admin.from("client_notifications").insert({
      user_id: input.userId,
      kind: "system",
      title: input.title,
      message: input.message ?? null,
      href: input.href ?? null,
      order_id: null,
    });
  } catch (error) {
    console.error("[rental-notifications] notifyRentalUser", error);
  }
}

export async function notifyAllAdmins(input: {
  title: string;
  message?: string | null;
  href?: string | null;
}) {
  try {
    const admin = createServiceRoleClient();
    const { data: admins } = await admin.from("profiles").select("id").eq("role", "admin");
    if (!admins?.length) return;

    await admin.from("client_notifications").insert(
      admins.map((row) => ({
        user_id: row.id as string,
        kind: "system" as const,
        title: input.title,
        message: input.message ?? null,
        href: input.href ?? null,
        order_id: null,
      })),
    );
  } catch (error) {
    console.error("[rental-notifications] notifyAllAdmins", error);
  }
}

/** Recordatorios idempotentes: presupuesto pendiente de aprobar. */
export async function syncRentalApprovalReminders(userId: string) {
  try {
    const admin = createServiceRoleClient();
    const { data: properties } = await admin
      .from("properties")
      .select("id")
      .eq("user_id", userId);

    const propertyIds = (properties ?? []).map((p) => p.id as string);
    if (propertyIds.length === 0) return;

    const { data: waiting } = await admin
      .from("incidents")
      .select("id, title, property_id")
      .in("property_id", propertyIds)
      .eq("status", "waiting_approval");

    for (const inc of waiting ?? []) {
      const incidentId = inc.id as string;
      const href = `/dashboard/rental/incidencias/${incidentId}`;
      const title = "Presupuesto pendiente de aprobación";
      const message = `La incidencia «${inc.title as string}» espera tu respuesta.`;

      const { data: existing } = await admin
        .from("client_notifications")
        .select("id")
        .eq("user_id", userId)
        .eq("kind", "system")
        .eq("href", href)
        .is("read_at", null)
        .maybeSingle();

      if (!existing) {
        await admin.from("client_notifications").insert({
          user_id: userId,
          kind: "system",
          title,
          message,
          href,
          order_id: null,
        });
      }
    }
  } catch (error) {
    console.error("[rental-notifications] syncRentalApprovalReminders", error);
  }
}
