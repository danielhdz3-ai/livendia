/** Tipos de documento que suelen requerir foto por ambas caras. */
export const ORDER_DOC_TWO_SIDED_TYPES = new Set(["dni_propietario", "dni_inquilino"]);

export function isOrderDocImageFile(file: File): boolean {
  if (file.type.startsWith("image/")) return true;
  const lower = file.name.toLowerCase();
  return [".jpg", ".jpeg", ".png", ".webp", ".gif", ".heic", ".heif"].some((ext) => lower.endsWith(ext));
}

export function orderDocTypeNeedsTwoSides(docType: string): boolean {
  return ORDER_DOC_TWO_SIDED_TYPES.has(docType);
}

export function labelForPhotoSide(side: "anverso" | "reverso"): string {
  return side === "anverso" ? "Anverso (frontal)" : "Reverso (trasera)";
}

export function buildSideFileName(originalName: string, side: "anverso" | "reverso"): string {
  const dot = originalName.lastIndexOf(".");
  if (dot > 0) {
    return `${originalName.slice(0, dot)}_${side}${originalName.slice(dot)}`;
  }
  return `${originalName}_${side}`;
}

export function isMobileUploadViewport(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 1023px)").matches;
}
