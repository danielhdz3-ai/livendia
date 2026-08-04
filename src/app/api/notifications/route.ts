import {
  syncDocReminderNotifications,
  type ClientNotificationRow,
} from "@/lib/client-notifications";
import { getCachedAuthUser } from "@/lib/supabase/auth-cache";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

function mapRows(rows: ClientNotificationRow[]) {
  return rows.map((row) => ({
    id: row.id,
    kind: row.kind,
    title: row.title,
    message: row.message,
    href: row.href,
    orderId: row.order_id,
    readAt: row.read_at,
    createdAt: row.created_at,
  }));
}

export async function GET(request: Request) {
  const user = await getCachedAuthUser();
  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const { searchParams } = new URL(request.url);
  const countOnly = searchParams.get("countOnly") === "1";
  const shouldSync = searchParams.get("sync") === "1";

  const supabase = await createServerSupabaseClient();

  if (countOnly) {
    const { count, error } = await supabase
      .from("client_notifications")
      .select("id", { count: "exact", head: true })
      .eq("user_id", user.id)
      .is("read_at", null);

    if (error) {
      return NextResponse.json({ error: "No se pudo cargar el contador" }, { status: 500 });
    }
    return NextResponse.json({ unreadCount: count ?? 0 });
  }

  if (shouldSync) {
    await syncDocReminderNotifications(user.id);
  }

  const { data, error } = await supabase
    .from("client_notifications")
    .select("id, kind, title, message, href, order_id, read_at, created_at")
    .eq("user_id", user.id)
    .order("created_at", { ascending: false })
    .limit(40);

  if (error) {
    console.error("[api/notifications] GET", error.message);
    return NextResponse.json({ error: "No se pudieron cargar las notificaciones" }, { status: 500 });
  }

  const rows = (data ?? []) as ClientNotificationRow[];
  const unreadCount = rows.filter((r) => !r.read_at).length;

  return NextResponse.json({
    notifications: mapRows(rows),
    unreadCount,
  });
}

type PatchBody = {
  markAllRead?: boolean;
  notificationId?: string;
};

export async function PATCH(req: Request) {
  const user = await getCachedAuthUser();
  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const supabase = await createServerSupabaseClient();

  let body: PatchBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const now = new Date().toISOString();

  if (body.markAllRead) {
    const { error } = await supabase
      .from("client_notifications")
      .update({ read_at: now })
      .eq("user_id", user.id)
      .is("read_at", null);

    if (error) {
      return NextResponse.json({ error: "No se pudieron marcar como leídas" }, { status: 500 });
    }
    return NextResponse.json({ ok: true });
  }

  const notificationId = body.notificationId?.trim();
  if (!notificationId) {
    return NextResponse.json({ error: "notificationId requerido" }, { status: 400 });
  }

  const { error } = await supabase
    .from("client_notifications")
    .update({ read_at: now })
    .eq("id", notificationId)
    .eq("user_id", user.id);

  if (error) {
    return NextResponse.json({ error: "No se pudo marcar la notificación" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
