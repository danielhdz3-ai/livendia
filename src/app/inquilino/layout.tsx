import { TenantSidebarNav } from "@/components/tenant-sidebar-nav";
import { getTenantContextForUser } from "@/lib/rental-tenant-access";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogoutButton } from "@/app/dashboard/logout-button";

export const metadata = { title: { absolute: "Portal inquilino — Livendia" } };

export default async function TenantPortalLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login?next=/inquilino");

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name, role")
    .eq("id", user.id)
    .maybeSingle();

  if (profile?.role !== "tenant") {
    redirect("/dashboard");
  }

  const tenantCtx = await getTenantContextForUser(supabase, user.id);
  if (!tenantCtx) {
    return (
      <main className="mx-auto max-w-lg px-4 py-16 text-center">
        <h1 className="text-xl font-bold text-[#1E293B]">Acceso no configurado</h1>
        <p className="mt-2 text-sm text-[#64748B]">
          Tu gestor aún no ha vinculado tu cuenta a un inmueble. Contacta con Livendia.
        </p>
        <LogoutButton variant="on-brand" />
      </main>
    );
  }

  const name = profile?.full_name?.trim() || tenantCtx.tenantName;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      <aside className="w-64 border-r border-[#1547a8]/80 bg-[#1A4FBF] shadow-xl shadow-slate-900/15">
        <div className="flex h-full flex-col">
          <div className="border-b border-white/15 p-6">
            <Link href="/inquilino" className="block">
              <span className="text-3xl font-extrabold text-white">Livendia</span>
              <span className="mt-1.5 block text-sm font-semibold text-white/80">Portal inquilino</span>
            </Link>
            <p className="mt-3 line-clamp-2 text-xs text-white/70">{tenantCtx.propertyAddress}</p>
          </div>

          <TenantSidebarNav />

          <div className="mt-auto border-t border-white/15 p-4 space-y-3">
            <div className="rounded-lg bg-white/[0.1] p-3 ring-1 ring-white/10">
              <div className="truncate text-sm font-semibold text-white">{name}</div>
              <div className="text-xs text-white/65">Inquilino</div>
            </div>
            <LogoutButton variant="on-brand" />
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">{children}</main>
    </div>
  );
}
