import { ProfileForm } from "@/app/dashboard/perfil/profile-form";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = { title: "Mi perfil" };

export default async function PerfilPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role, phone, dni_nie, fiscal_address")
    .eq("id", user.id)
    .maybeSingle();

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-6">
          <Link
            href="/dashboard"
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al panel
          </Link>
          <h1 className="mt-3 text-2xl font-bold text-[#1E293B] sm:mt-4 sm:text-3xl">Mi perfil</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            Actualiza tus datos de contacto y facturación para tus expedientes en Livendia.
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
        <ProfileForm
          initial={{
            fullName: profile?.full_name ?? "",
            email: user.email ?? "",
            phone: profile?.phone ?? "",
            dniNie: profile?.dni_nie ?? "",
            fiscalAddress: profile?.fiscal_address ?? "",
            role: profile?.role ?? "client",
          }}
        />

        <p className="mt-6 text-center text-xs text-[#64748B] sm:text-sm">
          Estos datos se usan en tus contratos y comunicaciones con tu gestor. Si necesitas ayuda, escribe a{" "}
          <a href="mailto:info@livendia.com" className="font-semibold text-[#1A4FBF] hover:underline">
            info@livendia.com
          </a>
          .
        </p>
      </main>
    </div>
  );
}
