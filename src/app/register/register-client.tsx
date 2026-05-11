"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { GoogleAuthButton } from "@/components/google-auth-button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

function safeNext(raw: string | null): string {
  const n = raw ?? "/dashboard";
  if (!n.startsWith("/") || n.startsWith("//")) return "/dashboard";
  return n;
}

export function RegisterClient() {
  const router = useRouter();
  const search = useSearchParams();
  const next = safeNext(search.get("next"));
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setMessage(null);
    setLoading(true);
    const supabase = createBrowserSupabaseClient();
    const appUrl = process.env.NEXT_PUBLIC_APP_URL ?? window.location.origin;
    const { data, error: err } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${appUrl}${next}`,
        data: { full_name: fullName },
      },
    });
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
      router.push(next);
      router.refresh();
      return;
    }
    setMessage("Si está activada la confirmación por email, revisa tu bandeja.");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#F1F5F9] px-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
        <h1 className="text-2xl font-bold text-[#1E293B]">Crear cuenta</h1>
        <p className="mt-1 text-sm text-[#475569]">Acceso al panel Livendia</p>
        <div className="mt-8">
          <GoogleAuthButton next={next} />
        </div>
        <p className="mt-3 text-center text-xs text-[#64748b]">
          Si es tu primera vez, Google creará tu cuenta automáticamente.
        </p>
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
            <label htmlFor="name" className="block text-sm font-medium text-[#1E293B]">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] outline-none focus:border-[#1A4FBF] focus:ring-1 focus:ring-[#1A4FBF]"
            />
          </div>
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
              autoComplete="new-password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 px-3 py-2 text-[#1E293B] outline-none focus:border-[#1A4FBF] focus:ring-1 focus:ring-[#1A4FBF]"
            />
          </div>
          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {message ? <p className="text-sm text-[#1A4FBF]">{message}</p> : null}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-full bg-[#1A4FBF] py-3 text-sm font-semibold text-white transition hover:bg-[#2563EB] disabled:opacity-60"
          >
            {loading ? "Creando…" : "Registrarse"}
          </button>
        </form>
        <p className="mt-6 text-center text-sm text-[#475569]">
          ¿Ya tienes cuenta?{" "}
          <Link
            href={`/login?next=${encodeURIComponent(next)}`}
            className="font-semibold text-[#1A4FBF] hover:text-[#06B6D4]"
          >
            Entrar
          </Link>
        </p>
      </div>
    </div>
  );
}
