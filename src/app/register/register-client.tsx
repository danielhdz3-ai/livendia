"use client";

import { createBrowserSupabaseClient } from "@/lib/supabase/client";
import {
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
} from "@/lib/catalog.public";
import { GoogleAuthButton } from "@/components/google-auth-button";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { Zap, Target, Award, CheckCircle2 } from "lucide-react";

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
    
    // Enviar email de bienvenida (con o sin sesión inmediata)
    if (data.user?.email) {
      try {
        await fetch("/api/email/welcome", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            ...(data.session?.access_token 
              ? { Authorization: `Bearer ${data.session.access_token}` }
              : {}),
          },
          body: JSON.stringify({ 
            email: data.user.email, 
            name: fullName 
          }),
        });
      } catch (emailError) {
        console.error("Error sending welcome email:", emailError);
        // No bloqueamos el login por un error de email
      }
    }
    
    if (data.session?.access_token) {
      router.push(next);
      router.refresh();
      return;
    }
    setMessage("✅ Registro exitoso. Revisa tu email para confirmar tu cuenta.");
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Left Panel - Branding & Benefits */}
      <div className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-gradient-to-br from-[#1A4FBF] via-[#2563EB] to-[#06B6D4] p-12 lg:flex">
        {/* Background Pattern */}
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/images/amigos.jpg')] bg-cover bg-center"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#1A4FBF]/90 via-[#2563EB]/80 to-[#06B6D4]/90"></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Link href="/" className="inline-flex items-center gap-2">
            <span className="text-4xl font-bold text-white">Livendia</span>
          </Link>
          <div className="mt-2 text-sm font-light tracking-wide text-blue-100">
            Gestoría Inmobiliaria Digital
          </div>
        </div>

        <div className="relative z-10 space-y-8">
          <div>
            <h2 className="text-4xl font-bold leading-tight text-white lg:text-5xl">
              Únete a la nueva generación
              <span className="mt-2 block bg-gradient-to-r from-[#D4AF37] to-[#F4E4A6] bg-clip-text text-transparent">
                de gestión inmobiliaria
              </span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-blue-50">
              Crea tu cuenta y accede a todos nuestros servicios. Sin agencias, sin intermediarios abusivos. 
              Solo tú y una gestoría digital que trabaja para ti.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Zap className="h-6 w-6 text-[#D4AF37]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Registro en 30 segundos</h3>
                <p className="mt-1 text-sm leading-relaxed text-blue-100">
                  Crea tu cuenta con Google o email y empieza a contratar servicios al instante.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Target className="h-6 w-6 text-[#D4AF37]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Panel personalizado</h3>
                <p className="mt-1 text-sm leading-relaxed text-blue-100">
                  Gestiona tus contratos, seguimiento de pedidos y documentación desde un solo lugar.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                <Award className="h-6 w-6 text-[#D4AF37]" strokeWidth={2} />
              </div>
              <div>
                <h3 className="font-semibold text-white">Precios transparentes</h3>
                <p className="mt-1 text-sm leading-relaxed text-blue-100">
                  Tarifas claras sin letra pequeña. LAU {CONTRATO_ALQUILER_LAU_PRICE_LABEL}, temporada{" "}
                  {CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL}, administración desde 49€/mes.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-white/20 bg-white/10 p-6 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D4AF37]">
                <CheckCircle2 className="h-6 w-6 text-white" strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold text-white">Tu primera ventaja</span>
            </div>
            <p className="text-sm leading-relaxed text-blue-50">
              Al registrarte, tienes acceso inmediato a nuestro catálogo de servicios. 
              Empieza con un contrato de alquiler o activa la administración completa de tu propiedad.
            </p>
          </div>
        </div>

        <div className="relative z-10 border-t border-white/20 pt-8">
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">+500</div>
              <div className="text-xs text-blue-200">Contratos gestionados</div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">4.9</div>
              <div className="text-xs text-blue-200">Valoración media</div>
            </div>
            <div className="h-8 w-px bg-white/20"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">24h</div>
              <div className="text-xs text-blue-200">Respuesta media</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Panel - Registration Form */}
      <div className="flex w-full flex-col items-center justify-center bg-[#F8FAFC] px-6 lg:w-1/2 lg:px-12">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="mb-8 lg:hidden">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="text-3xl font-bold text-[#1A4FBF]">Livendia</span>
            </Link>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-200 lg:p-10">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-[#1E293B]">Crea tu cuenta</h1>
              <p className="mt-2 text-sm text-[#64748B]">
                Empieza a gestionar tus inmuebles de forma inteligente
              </p>
            </div>

            <div className="mb-6">
              <GoogleAuthButton next={next} />
            </div>

            <p className="mb-6 text-center text-xs text-[#64748B]">
              Si es tu primera vez, Google creará tu cuenta automáticamente
            </p>

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
                <label htmlFor="name" className="block text-sm font-semibold text-[#1E293B]">
                  Nombre completo
                </label>
                <input
                  id="name"
                  type="text"
                  autoComplete="name"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                  placeholder="Juan Pérez"
                />
              </div>

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
                  autoComplete="new-password"
                  required
                  minLength={6}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                  placeholder="Mínimo 6 caracteres"
                />
                <p className="mt-1.5 text-xs text-[#64748B]">
                  Al menos 6 caracteres. Te recomendamos usar mayúsculas, números y símbolos.
                </p>
              </div>

              {error ? (
                <div className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">
                  {error}
                </div>
              ) : null}

              {message ? (
                <div className="rounded-xl bg-blue-50 px-4 py-3 text-sm text-[#1A4FBF]">
                  {message}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02] hover:shadow-xl hover:shadow-blue-500/40 disabled:opacity-60 disabled:hover:scale-100"
              >
                {loading ? "Creando cuenta…" : "Crear cuenta gratis"}
              </button>

              <p className="text-center text-xs leading-relaxed text-[#64748B]">
                Al registrarte aceptas nuestros{" "}
                <Link href="/legal/privacidad" className="font-semibold text-[#1A4FBF] hover:underline">
                  Términos de Servicio
                </Link>{" "}
                y{" "}
                <Link href="/legal/privacidad" className="font-semibold text-[#1A4FBF] hover:underline">
                  Política de Privacidad
                </Link>
              </p>
            </form>

            <div className="mt-8 space-y-4 border-t border-slate-200 pt-6">
              <p className="text-center text-sm text-[#64748B]">
                ¿Ya tienes cuenta?{" "}
                <Link 
                  href={`/login?next=${encodeURIComponent(next)}`}
                  className="font-bold text-[#1A4FBF] transition hover:text-[#06B6D4]"
                >
                  Inicia sesión
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

          {/* Mobile benefits preview */}
          <div className="mt-8 rounded-2xl bg-white p-6 shadow-lg ring-1 ring-slate-200 lg:hidden">
            <h3 className="mb-4 text-sm font-bold text-[#1E293B]">
              Qué incluye tu cuenta
            </h3>
            <ul className="space-y-2 text-sm text-[#64748B]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1A4FBF]" />
                <span>Panel personalizado para gestionar servicios</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1A4FBF]" />
                <span>Acceso inmediato al catálogo completo</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-[#1A4FBF]" />
                <span>Seguimiento de contratos y documentos</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
