"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function PwaRegister() {
  const pathname = usePathname() ?? "";

  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    void navigator.serviceWorker.register("/sw.js").catch(() => undefined);
  }, []);

  useEffect(() => {
    const isPanel = pathname.startsWith("/dashboard") || pathname.startsWith("/mis-pedidos");
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) {
      meta.setAttribute("content", isPanel ? "#1A4FBF" : "#ffffff");
    }
  }, [pathname]);

  return null;
}
