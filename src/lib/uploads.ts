/** MIME permitidos para adjuntos (chat, incidencias, inmueble). */
export const ALLOWED_UPLOAD_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]);

const ALLOWED_EXTENSIONS = /\.(jpe?g|png|gif|webp|heic|heif|pdf|doc|docx|xls|xlsx)$/i;

/** Tamaño máximo por archivo en rutas API FormData (10 MiB). Pedidos usan subida directa hasta 25 MB. */
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export const MAX_CHAT_ATTACHMENTS = 3;

export function assertAllowedUpload(file: File): { ok: true } | { ok: false; error: string } {
  if (!file || file.size <= 0) {
    return { ok: false, error: "Archivo vacío" };
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return { ok: false, error: "El archivo supera 10 MB" };
  }
  const type = (file.type || "").toLowerCase();
  const nameOk = ALLOWED_EXTENSIONS.test(file.name);
  const mimeOk = !type || ALLOWED_UPLOAD_MIME_TYPES.has(type) || type.startsWith("image/");

  // iPhone a menudo manda type vacío o image/heic; aceptar por extensión.
  if (!nameOk && !mimeOk) {
    return { ok: false, error: "Tipo de archivo no permitido (PDF, Word o imagen)" };
  }
  if (!nameOk && type && !ALLOWED_UPLOAD_MIME_TYPES.has(type) && !type.startsWith("image/")) {
    return { ok: false, error: "Tipo de archivo no permitido" };
  }
  return { ok: true };
}
