import { BillingPortalButton } from "@/components/billing-portal-button";
import {
  orderGrantsRentalAccess,
  RENTAL_SERVICE_SLUG,
  subscriptionGrantsRentalAccess,
} from "@/lib/rental-access";
import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { LogoutButton } from "@/app/dashboard/logout-button";
import {
  Home,
  Building2,
  Users,
  MessageSquare,
  AlertCircle,
  ShoppingBag,
  User,
  CreditCard,
  Settings,
} from "lucide-react";

const navBase =
  "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white";
const navActive =
  "flex items-center gap-3 rounded-lg bg-white/[0.17] px-3 py-2 text-sm font-semibold text-white shadow-[inset_4px_0_0_0_#06B6D4]";
const sidebarQuickLink =
  "block rounded-lg bg-white/[0.08] px-3 py-2 text-sm text-white/85 transition hover:bg-white/15 hover:text-white";
const billingNavOnBrand =
  "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm font-medium text-white/85 transition hover:bg-white/10 hover:text-white disabled:opacity-60";

export default async function RentalDashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  
  if (!user) redirect("/login");

  const { data: orders } = await supabase
    .from("orders")
    .select("id, status, services(slug)")
    .order("created_at", { ascending: false });

  const { data: rentalSubs, error: subsErr } = await supabase
    .from("client_subscriptions")
    .select("status, current_period_end, services(slug)")
    .eq("client_id", user.id);

  if (subsErr) {
    console.error("client_subscriptions:", subsErr.message);
  }

  const allowed =
    (rentalSubs ?? []).some((row) => {
      const svc = row.services;
      const slug = Array.isArray(svc) ? svc[0]?.slug : (svc as { slug?: string } | null)?.slug;
      return (
        slug === RENTAL_SERVICE_SLUG &&
        subscriptionGrantsRentalAccess(row.status, row.current_period_end)
      );
    }) || (orders ?? []).some((o) => orderGrantsRentalAccess(o));

  if (!allowed) {
    redirect("/dashboard");
  }

  const { data: profile } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", user.id)
    .maybeSingle();

  const name = profile?.full_name?.trim() || user.email || "Cliente";
  const firstName = name.split(" ")[0];

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Sidebar */}
      <aside className="w-64 border-r border-[#1547a8]/80 bg-[#1A4FBF] shadow-xl shadow-slate-900/15">
        <div className="flex h-full flex-col">
          {/* Marca */}
          <div className="border-b border-white/15 p-6">
            <Link href="/dashboard/rental" className="block outline-none ring-white/40 focus-visible:ring-2">
              <span className="text-3xl font-extrabold leading-tight tracking-tight text-white">Livendia</span>
              <span className="mt-1.5 block text-sm font-semibold text-white/80">Gestoría Digital</span>
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1 p-4">
            <Link href="/dashboard/rental" className={navActive}>
              <Home className="h-5 w-5 shrink-0 text-white" />
              <span>Panel principal</span>
            </Link>

            <Link href="/dashboard/rental/inmueble" className={navBase}>
              <Building2 className="h-5 w-5 shrink-0 opacity-95" />
              <span>Datos del inmueble</span>
            </Link>

            <Link href="/dashboard/rental/inquilino" className={navBase}>
              <Users className="h-5 w-5 shrink-0 opacity-95" />
              <span>Datos del inquilino</span>
            </Link>

            <Link href="/dashboard/rental/incidencias" className={navBase}>
              <AlertCircle className="h-5 w-5 shrink-0 opacity-95" />
              <span>Portal de incidencias</span>
            </Link>

            <Link href="/dashboard/rental/chat" className={navBase}>
              <MessageSquare className="h-5 w-5 shrink-0 opacity-95" />
              <span>Chat unificado</span>
            </Link>

            <Link href="/dashboard/servicios" className={navBase}>
              <ShoppingBag className="h-5 w-5 shrink-0 opacity-95" />
              <span>Servicios</span>
            </Link>

            <div className="my-4 border-t border-white/15" />

            <Link href="/dashboard/perfil" className={navBase}>
              <User className="h-5 w-5 shrink-0 opacity-95" />
              <span>Mi perfil</span>
            </Link>

            <Link href="/dashboard/pagos" className={navBase}>
              <CreditCard className="h-5 w-5 shrink-0 opacity-95" />
              <span>Métodos de pago</span>
            </Link>

            <BillingPortalButton navItemClassName={billingNavOnBrand} />

            <Link href="/dashboard/configuracion" className={navBase}>
              <Settings className="h-5 w-5 shrink-0 opacity-95" />
              <span>Configuración</span>
            </Link>
          </nav>

          {/* User Profile & Actions */}
          <div className="border-t border-white/15 p-4">
            {/* Acciones rápidas */}
            <div className="mb-4 space-y-2">
              <div className="text-xs font-semibold uppercase text-white/50">Acciones rápidas</div>
              <Link href="/dashboard/perfil" className={sidebarQuickLink}>
                Editar perfil
              </Link>
              <Link href="/dashboard/pagos" className={sidebarQuickLink}>
                Métodos de pago
              </Link>
            </div>

            {/* User info */}
            <div className="flex items-center gap-3 rounded-lg bg-white/[0.1] p-3 ring-1 ring-white/10">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-sm font-bold text-white">
                {firstName.charAt(0).toUpperCase()}
              </div>
              <div className="min-w-0 flex-1">
                <div className="truncate text-sm font-semibold text-white">{firstName}</div>
                <div className="text-xs text-white/65">Administración de alquileres</div>
              </div>            </div>

            {/* Logout */}
            <div className="mt-3">
              <LogoutButton variant="on-brand" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {children}
      </main>
    </div>
  );
}
