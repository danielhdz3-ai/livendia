"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { createBrowserSupabaseClient } from "@/lib/supabase/client";

export function ClientMobileTopBar() {
  const pathname = usePathname() ?? "";
  const [userLabel, setUserLabel] = useState("Mi cuenta");

  const isClientArea =
    pathname.startsWith("/dashboard") || pathname.startsWith("/mis-pedidos");

  useEffect(() => {
    if (!isClientArea) return;
    const supabase = createBrowserSupabaseClient();
    void (async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      if (!user) return;
      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", user.id)
        .maybeSingle();
      const name = (profile?.full_name as string | undefined)?.trim();
      setUserLabel(name || user.email || "Mi cuenta");
    })();
  }, [isClientArea, pathname]);

  if (!isClientArea) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur lg:hidden">
      <div className="flex min-h-14 items-center justify-between gap-3 px-4">
        <Link href="/dashboard" className="min-w-0 flex-1">
          <span className="block text-lg font-extrabold leading-tight text-[#1A4FBF]">Livendia</span>
          <span className="block truncate text-xs text-[#64748B]">{userLabel}</span>
        </Link>
      </div>
    </header>
  );
}
