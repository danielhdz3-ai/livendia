/** MIME permitidos para adjuntos (chat, incidencias, pedidos). */
export const ALLOWED_UPLOAD_MIME_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
]);

const ALLOWED_EXTENSIONS = /\.(jpe?g|png|gif|webp|pdf|doc|docx|xls|xlsx)$/i;

/** Tamaño máximo por archivo (10 MiB). */
export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;

export const MAX_CHAT_ATTACHMENTS = 3;

export function assertAllowedUpload(file: File): { ok: true } | { ok: false; error: string } {
  if (!file || file.size <= 0) {
    return { ok: false, error: "Archivo vacío" };
  }
  if (file.size > MAX_UPLOAD_BYTES) {
    return { ok: false, error: "El archivo supera 10 MB" };
  }
  const type = file.type || "";
  if (type && !ALLOWED_UPLOAD_MIME_TYPES.has(type)) {
    return { ok: false, error: "Tipo de archivo no permitido" };
  }
  if (!ALLOWED_EXTENSIONS.test(file.name)) {
    return { ok: false, error: "Extensión no permitida" };
  }
  return { ok: true };
}
