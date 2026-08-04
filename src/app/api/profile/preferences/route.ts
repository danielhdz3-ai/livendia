import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type PreferencesBody = {
  notifyEmailOrders?: boolean;
  notifyEmailDocs?: boolean;
  notifyNewsletter?: boolean;
};

export async function GET() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  const { data: profile, error } = await supabase
    .from("profiles")
    .select("notify_email_orders, notify_email_docs, notify_newsletter")
    .eq("id", user.id)
    .maybeSingle();

  if (error) {
    return NextResponse.json({ error: "No se pudieron cargar las preferencias" }, { status: 500 });
  }

  return NextResponse.json({
    notifyEmailOrders: profile?.notify_email_orders ?? true,
    notifyEmailDocs: profile?.notify_email_docs ?? true,
    notifyNewsletter: profile?.notify_newsletter ?? false,
  });
}

export async function PATCH(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "No autenticado" }, { status: 401 });
  }

  let body: PreferencesBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const payload: Record<string, boolean> = {};
  if (typeof body.notifyEmailOrders === "boolean") {
    payload.notify_email_orders = body.notifyEmailOrders;
  }
  if (typeof body.notifyEmailDocs === "boolean") {
    payload.notify_email_docs = body.notifyEmailDocs;
  }
  if (typeof body.notifyNewsletter === "boolean") {
    payload.notify_newsletter = body.notifyNewsletter;
  }

  if (Object.keys(payload).length === 0) {
    return NextResponse.json({ error: "No hay cambios que guardar" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("profiles")
    .update(payload)
    .eq("id", user.id)
    .select("notify_email_orders, notify_email_docs, notify_newsletter")
    .maybeSingle();

  if (error) {
    console.error("[api/profile/preferences]", error.message);
    return NextResponse.json({ error: "No se pudieron guardar las preferencias" }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    preferences: {
      notifyEmailOrders: data?.notify_email_orders ?? true,
      notifyEmailDocs: data?.notify_email_docs ?? true,
      notifyNewsletter: data?.notify_newsletter ?? false,
    },
  });
}
