import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, User, Mail, Phone, MapPin, FileText, Save } from "lucide-react";

export const metadata = { title: "Mi perfil" };

export default async function PerfilPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  const name = profile?.full_name || "";
  const email = user.email || "";

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al panel</span>
          </Link>
          <h1 className="mt-4 text-3xl font-bold text-[#1E293B]">Mi Perfil</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            Gestiona tu información personal y preferencias
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-slate-200">
          <div className="mb-6 flex items-center gap-4">
            <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-3xl font-bold text-white">
              {name.charAt(0).toUpperCase() || "U"}
            </div>
            <div>
              <h2 className="text-2xl font-bold text-[#1E293B]">{name || "Usuario"}</h2>
              <p className="text-sm text-[#64748B]">
                {profile?.role === "admin" ? "Administrador" : "Cliente"}
              </p>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#1E293B]">
                <div className="mb-2 flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>Nombre completo</span>
                </div>
              </label>
              <input
                id="name"
                type="text"
                defaultValue={name}
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                placeholder="Tu nombre completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#1E293B]">
                <div className="mb-2 flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <span>Email</span>
                </div>
              </label>
              <input
                id="email"
                type="email"
                defaultValue={email}
                disabled
                className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-[#64748B] outline-none"
                placeholder="tu@email.com"
              />
              <p className="mt-2 text-xs text-[#64748B]">
                El email no se puede cambiar. Contacta con soporte si necesitas actualizarlo.
              </p>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-[#1E293B]">
                <div className="mb-2 flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <span>Teléfono</span>
                </div>
              </label>
              <input
                id="phone"
                type="tel"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                placeholder="+34 600 000 000"
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-sm font-semibold text-[#1E293B]">
                <div className="mb-2 flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>Dirección fiscal</span>
                </div>
              </label>
              <input
                id="address"
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                placeholder="Calle, número, ciudad, CP"
              />
            </div>

            <div>
              <label htmlFor="nif" className="block text-sm font-semibold text-[#1E293B]">
                <div className="mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  <span>NIF/CIF</span>
                </div>
              </label>
              <input
                id="nif"
                type="text"
                className="w-full rounded-xl border border-slate-300 px-4 py-3 text-[#1E293B] outline-none transition focus:border-[#1A4FBF] focus:ring-2 focus:ring-[#1A4FBF]/20"
                placeholder="12345678A"
              />
            </div>

            <div className="flex gap-3 border-t border-slate-200 pt-6">
              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]"
              >
                <Save className="h-4 w-4" />
                <span>Guardar cambios</span>
              </button>
              <Link
                href="/dashboard"
                className="rounded-xl border border-slate-300 px-6 py-3 text-sm font-semibold text-[#64748B] transition hover:bg-slate-50"
              >
                Cancelar
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-6 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
          <h3 className="font-bold text-blue-900">Información</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-800">
            Esta funcionalidad de edición de perfil está en desarrollo. Por ahora, puedes visualizar tu información.
            Para cambios urgentes, contacta con soporte.
          </p>
        </div>
      </main>
    </div>
  );
}
