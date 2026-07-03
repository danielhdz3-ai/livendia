export const ORDER_DOC_MAX_BYTES = 10 * 1024 * 1024;

export const ORDER_DOC_ALLOWED_TYPES = new Set([
  "dni_propietario",
  "dni_inquilino",
  "escrituras",
  "nota_simple",
  "contrato_actual",
  "recibos",
  "poder_notarial",
  "otro",
]);

export const ORDER_DOC_TYPE_LABELS: Record<string, string> = {
  dni_propietario: "DNI propietario",
  dni_inquilino: "DNI inquilino",
  escrituras: "Escrituras",
  nota_simple: "Nota simple",
  contrato_actual: "Contrato actual",
  recibos: "Recibos",
  poder_notarial: "Poder notarial",
  otro: "Otro",
};

export const ORDER_DOC_UPLOADABLE_STATUSES = new Set([
  "paid",
  "pending_docs",
  "in_review",
  "in_progress",
]);

export function guessOrderDocContentType(file: File): string {
  if (file.type) return file.type;
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".heic")) return "image/heic";
  if (lower.endsWith(".heif")) return "image/heif";
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".doc")) return "application/msword";
  if (lower.endsWith(".docx")) return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  return "application/octet-stream";
}

export function sanitizeOrderDocFileName(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, "_") || "archivo";
}

export function buildOrderDocStoragePath(userId: string, orderId: string, fileName: string): string {
  return `${userId}/${orderId}/${crypto.randomUUID()}_${sanitizeOrderDocFileName(fileName)}`;
}

/** Mensajes claros para el cliente (móvil / panel). */
export function mapStorageUploadError(message: string): string {
  const lower = message.toLowerCase();
  if (lower.includes("payload too large") || lower.includes("entity too large")) {
    return "El archivo supera el límite permitido (10 MB). Prueba con una foto más ligera o un PDF comprimido.";
  }
  if (lower.includes("row-level security") || lower.includes("policy")) {
    return "No pudimos guardar el archivo en tu expediente. Cierra sesión, vuelve a entrar e inténtalo de nuevo. Si persiste, escríbenos por WhatsApp.";
  }
  if (lower.includes("jwt") || lower.includes("session")) {
    return "Tu sesión ha caducado. Vuelve a iniciar sesión y sube el archivo otra vez.";
  }
  return message || "No se pudo subir el archivo. Prueba de nuevo o contacta con nosotros.";
}
