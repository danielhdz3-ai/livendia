import {
  syncDocReminderNotifications,
  type ClientNotificationRow,
} from "@/lib/client-notifications";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  await syncDocReminderNotifications(user.id);

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
    notifications: rows.map((row) => ({
      id: row.id,
      kind: row.kind,
      title: row.title,
      message: row.message,
      href: row.href,
      orderId: row.order_id,
      readAt: row.read_at,
      createdAt: row.created_at,
    })),
    unreadCount,
  });
}

type PatchBody = {
  markAllRead?: boolean;
  notificationId?: string;
};

export async function PATCH(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

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
