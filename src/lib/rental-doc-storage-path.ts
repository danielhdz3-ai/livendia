/** Extrae la clave en el bucket `documents` desde una URL pública de Supabase Storage. */
export function inferStoragePathFromPublicFileUrl(fileUrl: string): string | null {
  try {
    const u = new URL(fileUrl);
    const marker = "/object/public/documents/";
    const idx = u.pathname.indexOf(marker);
    if (idx === -1) return null;
    return decodeURIComponent(u.pathname.slice(idx + marker.length));
  } catch {
    return null;
  }
}

export function resolveRentalDocStoragePath(
  storagePath: string | null | undefined,
  fileUrl: string | null | undefined,
): string | null {
  if (storagePath?.trim()) return storagePath.trim();
  if (fileUrl) return inferStoragePathFromPublicFileUrl(fileUrl);
  return null;
}
