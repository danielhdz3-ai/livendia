"use client";

import { ClientMobileBottomNav } from "@/components/client-mobile-bottom-nav";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

function isClientAreaPath(pathname: string): boolean {
  return pathname.startsWith("/dashboard") || pathname.startsWith("/mis-pedidos");
}

export function ClientAreaChrome() {
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

  if (!show) return null;

  return <ClientMobileBottomNav />;
}
