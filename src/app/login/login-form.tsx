"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import { GoogleAuthButton } from "@/components/google-auth-button";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Home, ShieldCheck, Users, Sparkles, CheckCircle2 } from "lucide-react";

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
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Branding & Content */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-12 lg:flex">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/familia2.jpg"
            alt="Gestoría inmobiliaria boutique"
            fill
            className="object-cover opacity-20"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-white">
            <Home className="h-7 w-7 text-[#D4AF37]" />
            <span>Livendia</span>
          </Link>
          <div className="mt-2 text-sm font-light tracking-wide text-slate-300">
            Gestoría Inmobiliaria Digital
          </div>
        </div>

        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              Tu aliado inmobiliario
              <span className="mt-2 block bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] bg-clip-text text-transparent">
                sin intermediarios abusivos
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-300">
              Somos una gestoría inmobiliaria boutique diseñada para hacer tu vida más fácil. 
              Ayudamos a particulares en el proceso de compra y gestión de alquileres, 
              sin comisiones exorbitantes ni agencias tradicionales.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-600">
                <ShieldCheck className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Contratos y documentación legal</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Redactamos y revisamos contratos de alquiler, arras y toda la documentación 
                  necesaria para tu tranquilidad.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-cyan-600">
                <Users className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Administración de alquileres</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Nos encargamos de toda la gestión con tus inquilinos. Tú solo cobras, 
                  nosotros hacemos el resto.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-violet-600">
                <Sparkles className="h-6 w-6 text-white" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Asesoramiento personalizado</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-400">
                  Cada cliente es único. Te acompañamos en cada paso con un servicio 
                  cercano y profesional.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/50 p-6 backdrop-blur-sm">
            <div className="mb-3 flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-[#D4AF37]" />
              <span className="text-sm font-semibold text-slate-300">Por qué Livendia</span>
            </div>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Tarifas transparentes, sin sorpresas</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Tecnología al servicio del cliente</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>Atención personalizada y cercana</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37]"></span>
                <span>+500 contratos gestionados con éxito</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10 border-t border-slate-700 pt-8">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Livendia. Gestoría inmobiliaria digital.
          </p>
        </div>
      </div>

      {/* Right Panel - Login Form */}
      <div className="flex w-full flex-col items-center justify-center bg-[#F8FAFC] px-6 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-8 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2 text-2xl font-bold text-[#1E293B]">
              <Home className="h-7 w-7 text-[#1A4FBF]" />
              <span>Livendia</span>
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 lg:p-10">
            {oauthError === "oauth" ? (
              <p className="mb-6 rounded-xl bg-red-50 px-4 py-3 text-sm text-red-700">
                No se pudo completar el acceso con Google. Configura el proveedor en Supabase y la URL de
                redirección.
              </p>
            ) : null}

            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#1E293B]">Bienvenido de nuevo</h1>
              <p className="mt-2 text-sm text-[#64748B]">
                Accede a tu panel de gestión inmobiliaria
              </p>
            </div>

            <div className="mb-6">
              <GoogleAuthButton next={next} />
            </div>

            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center" aria-hidden>
                <span className="w-full border-t border-slate-200" />
              </div>
              <div className="relative flex justify-center text-xs font-medium uppercase tracking-wider">
                <span className="bg-white px-4 text-[#94A3B8]">o con email</span>
              </div>
            </div>

            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-[#1E293B]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-semibold text-[#1E293B]">
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                  placeholder="••••••••"
                />
              </div>

              {error ? (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? "Entrando…" : "Entrar"}
              </button>
            </form>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              <p className="text-center text-sm text-[#64748B]">
                ¿No tienes cuenta?{" "}
                <Link 
                  href={`/register?next=${encodeURIComponent(next)}`} 
                  className="font-bold text-[#1A4FBF] transition hover:text-[#06B6D4]"
                >
                  Regístrate gratis
                </Link>
              </p>
              <p className="text-center">
                <Link 
                  href="/" 
                  className="inline-flex items-center gap-1 text-sm text-[#64748B] transition hover:text-[#1A4FBF]"
                >
                  <span>←</span>
                  <span>Volver al inicio</span>
                </Link>
              </p>
            </div>
          </div>

          {/* Mobile features preview */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 lg:hidden">
            <h3 className="mb-4 text-sm font-bold text-[#1E293B]">
              ¿Por qué Livendia?
            </h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1A4FBF]" />
                <span>Tarifas transparentes sin sorpresas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1A4FBF]" />
                <span>Sin agencias ni comisiones abusivas</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1A4FBF]" />
                <span>Atención personalizada y profesional</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
