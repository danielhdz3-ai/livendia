"use client";

import type { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { ClientMobileBottomNav } from "@/components/client-mobile-bottom-nav";
import { ClientMobileTopBar } from "@/components/client-mobile-top-bar";
import { ClientPanelProvider } from "@/components/client-panel-provider";

function isClientAreaPath(pathname: string): boolean {
  return pathname.startsWith("/dashboard") || pathname.startsWith("/mis-pedidos");
}

/** Envuelve el panel cliente: provider persistente + chrome móvil entre rutas. */
export function ClientPanelShellRoot({ children }: { children: ReactNode }) {
  const pathname = usePathname() ?? "";
  const show = isClientAreaPath(pathname);

  useEffect(() => {
    if (!show) {
      document.body.classList.remove("livendia-client-mobile-nav");
      return;
    }
    document.body.classList.add("livendia-client-mobile-nav");
    return () => document.body.classList.remove("livendia-client-mobile-nav");
  }, [show]);

  if (!show) return <>{children}</>;

  return (
    <ClientPanelProvider>
      <ClientMobileTopBar />
      {children}
      <ClientMobileBottomNav />
    </ClientPanelProvider>
  );
}
