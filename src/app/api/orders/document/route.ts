import { sendAdminDocUploadedEmail } from "@/lib/email/send";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

const ALLOWED_DOC_TYPES = new Set([
  "dni_propietario",
  "dni_inquilino",
  "escrituras",
  "nota_simple",
  "contrato_actual",
  "recibos",
  "poder_notarial",
  "otro",
]);

const UPLOADABLE_STATUSES = new Set(["paid", "pending_docs", "in_review", "in_progress"]);
const MAX_BYTES = 10 * 1024 * 1024;

const DOC_TYPE_LABELS: Record<string, string> = {
  dni_propietario: "DNI propietario",
  dni_inquilino: "DNI inquilino",
  escrituras: "Escrituras",
  nota_simple: "Nota simple",
  contrato_actual: "Contrato actual",
  recibos: "Recibos",
  poder_notarial: "Poder notarial",
  otro: "Otro",
};

function guessContentType(file: File): string {
  if (file.type) return file.type;
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".heic")) return "image/heic";
  if (lower.endsWith(".heif")) return "image/heif";
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  return "application/octet-stream";
}

export async function POST(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return NextResponse.json({ error: "Debes iniciar sesión para subir archivos." }, { status: 401 });
  }

  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Formulario inválido" }, { status: 400 });
  }

  const orderId = (formData.get("orderId") as string | null)?.trim();
  const documentType = (formData.get("documentType") as string | null)?.trim() ?? "otro";
  const file = formData.get("file");

  if (!orderId || !(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Faltan datos del archivo o del pedido." }, { status: 400 });
  }

  if (!ALLOWED_DOC_TYPES.has(documentType)) {
    return NextResponse.json({ error: "Tipo de documento no válido." }, { status: 400 });
  }

  if (file.size > MAX_BYTES) {
    return NextResponse.json({ error: "Máximo 10 MB por archivo." }, { status: 400 });
  }

  const { data: order, error: orderErr } = await supabase
    .from("orders")
    .select("id, client_id, status")
    .eq("id", orderId)
    .maybeSingle();

  if (orderErr || !order || order.client_id !== user.id) {
    return NextResponse.json({ error: "Pedido no encontrado." }, { status: 404 });
  }

  if (!UPLOADABLE_STATUSES.has(order.status as string)) {
    return NextResponse.json({ error: "No puedes subir archivos en este estado del pedido." }, { status: 400 });
  }

  const safe = file.name.replace(/[^a-zA-Z0-9._-]/g, "_") || "archivo";
  const path = `${user.id}/${orderId}/${crypto.randomUUID()}_${safe}`;
  const contentType = guessContentType(file);
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error: upErr } = await supabase.storage.from("documents").upload(path, buffer, {
    contentType,
    upsert: false,
  });

  if (upErr) {
    return NextResponse.json({ error: upErr.message || "No se pudo guardar el archivo." }, { status: 400 });
  }

  const { data: row, error: insErr } = await supabase
    .from("documents")
    .insert({
      order_id: orderId,
      client_id: user.id,
      file_name: file.name,
      file_path: path,
      file_type: contentType,
      file_size: file.size,
      document_type: documentType,
    })
    .select("id, file_name, file_path, document_type, created_at")
    .single();

  if (insErr) {
    await supabase.storage.from("documents").remove([path]);
    return NextResponse.json({ error: insErr.message || "No se pudo registrar el documento." }, { status: 400 });
  }

  void sendAdminDocUploadedEmail({
    fileName: file.name,
    docTypeLabel: DOC_TYPE_LABELS[documentType] ?? documentType,
    orderId,
    clientEmail: user.email,
  }).catch(() => undefined);

  return NextResponse.json({ document: row });
}
