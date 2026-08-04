"use client";

import { ClientDesktopShell } from "@/components/client-desktop-shell";
import type { ClientShellProps } from "@/lib/client-shell-props";
import { usePathname } from "next/navigation";

/** Envuelve rutas del panel con sidebar desktop; excluye rental (layout propio). */
export function ClientPanelLayoutClient({
  shell,
  children,
}: {
  shell: ClientShellProps;
  children: React.ReactNode;
}) {
  const pathname = usePathname() ?? "";

  if (pathname.startsWith("/dashboard/rental")) {
    return <>{children}</>;
  }

  return <ClientDesktopShell shell={shell}>{children}</ClientDesktopShell>;
}
