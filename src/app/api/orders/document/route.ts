import { sendAdminDocUploadedEmail } from "@/lib/email/send";
import {
  ORDER_DOC_ALLOWED_TYPES,
  ORDER_DOC_MAX_BYTES,
  ORDER_DOC_TYPE_LABELS,
  ORDER_DOC_UPLOADABLE_STATUSES,
  buildOrderDocStoragePath,
  guessOrderDocContentType,
  validateOrderDocFile,
} from "@/lib/order-document-upload";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

type RegisterBody = {
  orderId?: string;
  documentType?: string;
  fileName?: string;
  filePath?: string;
  fileType?: string;
  fileSize?: number;
};

async function assertOrderUploadable(
  supabase: Awaited<ReturnType<typeof createServerSupabaseClient>>,
  orderId: string,
  userId: string,
) {
  const { data: order, error: orderErr } = await supabase
    .from("orders")
    .select("id, client_id, status")
    .eq("id", orderId)
    .maybeSingle();

  if (orderErr || !order || order.client_id !== userId) {
    return { ok: false as const, response: NextResponse.json({ error: "Pedido no encontrado." }, { status: 404 }) };
  }

  if (!ORDER_DOC_UPLOADABLE_STATUSES.has(order.status as string)) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: "No puedes subir archivos en este estado del pedido." }, { status: 400 }),
    };
  }

  return { ok: true as const, order };
}

function validateFilePathForUser(filePath: string, userId: string, orderId: string): boolean {
  const expectedPrefix = `${userId}/${orderId}/`;
  return filePath.startsWith(expectedPrefix) && !filePath.includes("..");
}

async function insertDocumentRow(
  supabase: Awaited<ReturnType<typeof createServerSupabaseClient>>,
  params: {
    orderId: string;
    userId: string;
    fileName: string;
    filePath: string;
    fileType: string;
    fileSize: number;
    documentType: string;
    userEmail: string;
  },
) {
  const { data: row, error: insErr } = await supabase
    .from("documents")
    .insert({
      order_id: params.orderId,
      client_id: params.userId,
      file_name: params.fileName,
      file_path: params.filePath,
      file_type: params.fileType,
      file_size: params.fileSize,
      document_type: params.documentType,
    })
    .select("id, file_name, file_path, document_type, created_at")
    .single();

  if (insErr) {
    return {
      ok: false as const,
      response: NextResponse.json(
        { error: insErr.message || "No se pudo registrar el documento." },
        { status: 400 },
      ),
    };
  }

  void sendAdminDocUploadedEmail({
    fileName: params.fileName,
    docTypeLabel: ORDER_DOC_TYPE_LABELS[params.documentType] ?? params.documentType,
    orderId: params.orderId,
    clientEmail: params.userEmail,
  }).catch(() => undefined);

  return { ok: true as const, row };
}

/** Registra un archivo ya subido a Storage desde el navegador (evita límite de tamaño en Vercel). */
export async function PUT(req: Request) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user?.email) {
    return NextResponse.json({ error: "Debes iniciar sesión para subir archivos." }, { status: 401 });
  }

  let body: RegisterBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "JSON inválido" }, { status: 400 });
  }

  const orderId = body.orderId?.trim();
  const documentType = body.documentType?.trim() ?? "otro";
  const fileName = body.fileName?.trim();
  const filePath = body.filePath?.trim();
  const fileType = body.fileType?.trim() || "application/octet-stream";
  const fileSize = typeof body.fileSize === "number" ? body.fileSize : 0;

  if (!orderId || !fileName || !filePath || fileSize <= 0) {
    return NextResponse.json({ error: "Faltan datos del archivo o del pedido." }, { status: 400 });
  }

  if (!ORDER_DOC_ALLOWED_TYPES.has(documentType)) {
    return NextResponse.json({ error: "Tipo de documento no válido." }, { status: 400 });
  }

  if (fileSize > ORDER_DOC_MAX_BYTES) {
    return NextResponse.json({ error: "Máximo 10 MB por archivo." }, { status: 400 });
  }

  if (!validateFilePathForUser(filePath, user.id, orderId)) {
    return NextResponse.json({ error: "Ruta de archivo no válida." }, { status: 400 });
  }

  const orderCheck = await assertOrderUploadable(supabase, orderId, user.id);
  if (!orderCheck.ok) return orderCheck.response;

  const inserted = await insertDocumentRow(supabase, {
    orderId,
    userId: user.id,
    fileName,
    filePath,
    fileType,
    fileSize,
    documentType,
    userEmail: user.email,
  });

  if (!inserted.ok) return inserted.response;
  return NextResponse.json({ document: inserted.row });
}

/** Subida clásica vía servidor (respaldo; archivos pequeños). */
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
    return NextResponse.json(
      {
        error:
          "No se pudo recibir el archivo. Si el fichero es grande, actualiza la página e inténtalo de nuevo desde el móvil.",
      },
      { status: 400 },
    );
  }

  const orderId = (formData.get("orderId") as string | null)?.trim();
  const documentType = (formData.get("documentType") as string | null)?.trim() ?? "otro";
  const file = formData.get("file");

  if (!orderId || !(file instanceof File) || file.size === 0) {
    return NextResponse.json({ error: "Faltan datos del archivo o del pedido." }, { status: 400 });
  }

  const fileValidation = validateOrderDocFile(file);
  if (!fileValidation.ok) {
    return NextResponse.json({ error: fileValidation.error }, { status: 400 });
  }

  if (!ORDER_DOC_ALLOWED_TYPES.has(documentType)) {
    return NextResponse.json({ error: "Tipo de documento no válido." }, { status: 400 });
  }

  if (file.size > ORDER_DOC_MAX_BYTES) {
    return NextResponse.json({ error: "Máximo 10 MB por archivo." }, { status: 400 });
  }

  const orderCheck = await assertOrderUploadable(supabase, orderId, user.id);
  if (!orderCheck.ok) return orderCheck.response;

  const path = buildOrderDocStoragePath(user.id, orderId, file.name);
  const contentType = guessOrderDocContentType(file);
  const buffer = Buffer.from(await file.arrayBuffer());

  const { error: upErr } = await supabase.storage.from("documents").upload(path, buffer, {
    contentType,
    upsert: false,
  });

  if (upErr) {
    return NextResponse.json({ error: upErr.message || "No se pudo guardar el archivo." }, { status: 400 });
  }

  const inserted = await insertDocumentRow(supabase, {
    orderId,
    userId: user.id,
    fileName: file.name,
    filePath: path,
    fileType: contentType,
    fileSize: file.size,
    documentType,
    userEmail: user.email,
  });

  if (!inserted.ok) {
    await supabase.storage.from("documents").remove([path]);
    return inserted.response;
  }

  return NextResponse.json({ document: inserted.row });
}
