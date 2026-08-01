"use client";

import { MobileBottomNav } from "@/components/mobile-bottom-nav";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const HIDDEN_PREFIXES = ["/admin", "/dashboard", "/mis-pedidos", "/login", "/register", "/auth"];

function shouldShowMobileNav(pathname: string): boolean {
  return !HIDDEN_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function PublicMobileChrome() {
  const pathname = usePathname() ?? "";
  const show = shouldShowMobileNav(pathname);

  useEffect(() => {
    if (!show) {
      document.body.classList.remove("livendia-mobile-nav");
      return;
    }
    document.body.classList.add("livendia-mobile-nav");
    return () => document.body.classList.remove("livendia-mobile-nav");
  }, [show]);

  if (!show) return null;

  return <MobileBottomNav />;
}
