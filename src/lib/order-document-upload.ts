export const ORDER_DOC_MAX_BYTES = 25 * 1024 * 1024;
export const ORDER_DOC_MAX_MB = 25;

export const ORDER_DOC_ALLOWED_EXTENSIONS = new Set([
  ".pdf",
  ".doc",
  ".docx",
  ".xls",
  ".xlsx",
  ".txt",
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".gif",
  ".heic",
  ".heif",
]);

/** Input fotos/galería (móvil iOS/Android). */
export const ORDER_DOC_ACCEPT_PHOTOS = "image/*,.heic,.heif";

/** Input documentos (PDF/Word) — separado en móvil para que iOS muestre Archivos. */
export const ORDER_DOC_ACCEPT_DOCUMENTS =
  ".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document";

export const ORDER_DOC_ALLOWED_TYPES = new Set([
  "dni_propietario",
  "dni_inquilino",
  "escrituras",
  "nota_simple",
  "contrato_actual",
  "contrato_alquiler",
  "cedula_habitabilidad",
  "certificado_energetico",
  "facturas",
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
  contrato_alquiler: "Contrato de alquiler",
  cedula_habitabilidad: "Cédula de habitabilidad",
  certificado_energetico: "Certificado energético",
  facturas: "Facturas",
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

export function formatOrderDocBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function guessOrderDocContentType(file: File): string {
  if (file.type) return file.type;
  const lower = file.name.toLowerCase();
  if (lower.endsWith(".heic")) return "image/heic";
  if (lower.endsWith(".heif")) return "image/heif";
  if (lower.endsWith(".pdf")) return "application/pdf";
  if (lower.endsWith(".png")) return "image/png";
  if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
  if (lower.endsWith(".webp")) return "image/webp";
  if (lower.endsWith(".gif")) return "image/gif";
  if (lower.endsWith(".doc")) return "application/msword";
  if (lower.endsWith(".docx")) return "application/vnd.openxmlformats-officedocument.wordprocessingml.document";
  if (lower.endsWith(".xls")) return "application/vnd.ms-excel";
  if (lower.endsWith(".xlsx")) return "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";
  if (lower.endsWith(".txt")) return "text/plain";
  return "application/octet-stream";
}

export function validateOrderDocFile(file: File): { ok: true } | { ok: false; error: string } {
  if (file.size <= 0) {
    return { ok: false, error: `${file.name}: el archivo está vacío.` };
  }

  if (file.size > ORDER_DOC_MAX_BYTES) {
    return {
      ok: false,
      error: `${file.name}: supera ${ORDER_DOC_MAX_MB} MB (${formatOrderDocBytes(file.size)}). Comprime el PDF o la foto e inténtalo de nuevo.`,
    };
  }

  const lowerName = file.name.toLowerCase();
  const ext = lowerName.includes(".") ? lowerName.slice(lowerName.lastIndexOf(".")) : "";

  if (ORDER_DOC_ALLOWED_EXTENSIONS.has(ext)) {
    return { ok: true };
  }

  const type = file.type.toLowerCase();
  if (
    type.startsWith("image/") ||
    type === "application/pdf" ||
    type === "application/msword" ||
    type.includes("wordprocessingml") ||
    type.includes("spreadsheetml") ||
    type === "text/plain"
  ) {
    return { ok: true };
  }

  return {
    ok: false,
    error: `${file.name}: formato no admitido. Usa PDF, Word (.doc/.docx) o foto (JPG, PNG, HEIC).`,
  };
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
  if (lower.includes("payload too large") || lower.includes("entity too large") || lower.includes("maximum allowed size")) {
    return `El archivo supera el límite permitido (${ORDER_DOC_MAX_MB} MB). Prueba con una foto más ligera o un PDF comprimido.`;
  }
  if (lower.includes("row-level security") || lower.includes("policy")) {
    return "No pudimos guardar el archivo en tu expediente. Cierra sesión, vuelve a entrar e inténtalo de nuevo. Si persiste, escríbenos por WhatsApp.";
  }
  if (lower.includes("jwt") || lower.includes("session") || lower.includes("auth")) {
    return "Tu sesión ha caducado. Vuelve a iniciar sesión y sube el archivo otra vez.";
  }
  if (lower.includes("network") || lower.includes("fetch")) {
    return "Fallo de red al subir. Comprueba tu conexión (mejor Wi‑Fi con archivos grandes) e inténtalo de nuevo.";
  }
  return message || "No se pudo subir el archivo. Prueba de nuevo o contacta con nosotros.";
}
