"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { GoogleAuthButton } from "@/components/google-auth-button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get("next") ?? "/dashboard";
  const oauthError = search.get("error");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const supabase = createBrowserSupabaseClient();
    const { data, error: err } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (err) {
      setError(err.message);
      return;
    }
    if (data.session?.access_token) {
      void fetch("/api/email/welcome", {
        method: "POST",
        headers: { Authorization: `Bearer ${data.session.access_token}` },
      });
    }
    router.push(next);
    router.refresh();
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F1F5F9] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        {oauthError === "oauth" ? (
          <p className="mb-4 rounded-lg bg-red-50 px-3 py-2 text-sm text-red-700">
            No se pudo completar el acceso con Google. Configura el proveedor en Supabase y la URL de
            redirección (ver documentación del proyecto).
          </p>
        ) : null}
        <h1 className="text-2xl font-bold text-[#1E293B]">Entrar</h1>
        <p className="mt-1 text-sm text-[#475569]">Panel Livendia</p>
        <div className="mt-8">
          <GoogleAuthButton next={next} />
        </div>
        <div className="relative mt-8">
          <div className="absolute inset-0 flex items-center" aria-hidden>
            <span className="w-full border-t border-slate-200" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-white px-2 text-[#94a3b8]">o con email</span>
          </div>
        </div>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-[#1E293B]">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] outline-none focus:border-[#1A4FBF] focus:ring-1 focus:ring-[#1A4FBF]"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-[#1E293B]">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] outline-none focus:border-[#1A4FBF] focus:ring-1 focus:ring-[#1A4FBF]"
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#1A4FBF] py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:opacity-60"
          >
            {loading ? "Entrando…" : "Entrar"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#475569]">
          ¿No tienes cuenta?{" "}
          <Link href={`/register?next=${encodeURIComponent(next)}`} className="font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
            Regístrate
          </Link>
        </p>
        <p className="mt-4 text-center">
          <Link href="/" className="text-sm text-[#475569] hover:text-[#1A4FBF]">
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
}
