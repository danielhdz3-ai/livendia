import { createServerSupabaseClient } from "@/lib/supabase/server";
import type { ReactNode } from "react";

/**
 * Enlace firmado temporal para que el staff admin abra un objeto del bucket `documents`.
 * `path` debe ser la clave del objeto (p. ej. userId/orderId/archivo.pdf), no una URL pública.
 */
export async function AdminStorageDocLink({
  path,
  children,
  className = "font-medium text-[#1A4FBF] hover:underline",
}: {
  path: string;
  children: ReactNode;
  className?: string;
}) {
  const supabase = await createServerSupabaseClient();
  const { data, error } = await supabase.storage.from("documents").createSignedUrl(path, 900);
  if (error || !data?.signedUrl) {
    return <span className="text-sm text-slate-600">{children}</span>;
  }
  return (
    <a href={data.signedUrl} target="_blank" rel="noreferrer" className={className}>
      {children}
    </a>
  );
}
