"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, LogOut, UserRound } from "lucide-react";
import { performClientLogout } from "@/lib/auth-logout";

const VIEW_AS_CLIENT_COOKIE = "livendia_view_as_client";

function setViewAsClientCookie() {
  document.cookie = `${VIEW_AS_CLIENT_COOKIE}=1; path=/; max-age=86400; SameSite=Lax`;
}

type AdminExitActionsProps = {
  variant?: "header" | "sidebar";
};

export function AdminExitActions({ variant = "header" }: AdminExitActionsProps) {
  const [loading, setLoading] = useState<"exit" | "logout" | null>(null);

  async function exitAdminMode() {
    setLoading("exit");
    setViewAsClientCookie();
    window.location.href = "/dashboard";
  }

  async function logout() {
    setLoading("logout");
    await performClientLogout();
  }

  if (variant === "sidebar") {
    return (
      <div className="space-y-2 text-sm">
        <button
          type="button"
          onClick={() => void exitAdminMode()}
          disabled={loading !== null}
          className="flex w-full items-center gap-2 rounded-lg border border-white/10 px-3 py-2 text-slate-300 transition hover:bg-white/5 hover:text-white disabled:opacity-60"
        >
          <UserRound className="h-4 w-4" />
          {loading === "exit" ? "Saliendo..." : "Volver al panel cliente"}
        </button>
        <Link
          href="/"
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
        >
          <Home className="h-4 w-4" />
          Volver al sitio
        </Link>
        <button
          type="button"
          onClick={() => void logout()}
          disabled={loading !== null}
          className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-slate-400 transition hover:bg-white/5 hover:text-white disabled:opacity-60"
        >
          <LogOut className="h-4 w-4" />
          {loading === "logout" ? "Cerrando..." : "Cerrar sesión"}
        </button>
      </div>
    );
  }

  if (variant === "header") {
    return (
      <div className="flex items-center gap-2 text-sm">
        <button
          type="button"
          onClick={() => void exitAdminMode()}
          disabled={loading !== null}
          className="inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-white/5 px-3 py-2 text-slate-100 transition hover:bg-white/10 hover:text-white disabled:opacity-60"
          title="Ver el panel de cliente sin cerrar sesión"
        >
          <UserRound className="h-4 w-4" />
          <span>{loading === "exit" ? "Saliendo..." : "Salir del admin"}</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-1 rounded-lg px-2 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
          title="Ir a la web pública"
        >
          <Home className="h-4 w-4" />
          <span className="hidden sm:inline">Web</span>
        </Link>
        <button
          type="button"
          onClick={() => void logout()}
          disabled={loading !== null}
          className="inline-flex items-center gap-1.5 rounded-lg px-2 py-2 text-slate-300 transition hover:bg-white/10 hover:text-white disabled:opacity-60"
          title="Cerrar sesión por completo"
        >
          <LogOut className="h-4 w-4" />
          <span className="hidden sm:inline">{loading === "logout" ? "Cerrando..." : "Cerrar sesión"}</span>
        </button>
      </div>
    );
  }

  return null;
}
