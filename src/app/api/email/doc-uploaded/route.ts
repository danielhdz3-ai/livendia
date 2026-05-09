import { sendAdminDocUploadedEmail } from "@/lib/email/send";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user?.email) {
    return NextResponse.json({ error: "No autorizado" }, { status: 401 });
  }

  let body: { orderId?: string; fileName?: string; docTypeLabel?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }
  if (!body.orderId || !body.fileName) {
    return NextResponse.json({ error: "Faltan datos" }, { status: 400 });
  }

  const { data: order } = await supabase
    .from("orders")
    .select("client_id")
    .eq("id", body.orderId)
    .maybeSingle();

  if (!order || order.client_id !== user.id) {
    return NextResponse.json({ error: "No permitido" }, { status: 403 });
  }

  try {
    await sendAdminDocUploadedEmail({
      fileName: body.fileName,
      docTypeLabel: body.docTypeLabel ?? "Documento",
      orderId: body.orderId,
      clientEmail: user.email,
    });
  } catch {
    return NextResponse.json({ error: "No se pudo enviar el aviso" }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
