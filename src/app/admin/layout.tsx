import Link from "next/link";
import { LayoutDashboard, Users, ShoppingCart, Building2, AlertCircle, MessageCircle } from "lucide-react";
import { AdminExitActions } from "@/components/admin-exit-actions";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-[#1E293B] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-6 text-sm font-medium">
            <span className="font-bold text-white">Livendia Admin</span>
            <nav className="flex items-center gap-1">
              <Link
                href="/admin"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <LayoutDashboard className="h-4 w-4" />
                <span>Dashboard</span>
              </Link>
              <Link
                href="/admin/clientes"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <Users className="h-4 w-4" />
                <span>Clientes</span>
              </Link>
              <Link
                href="/admin/pedidos"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Pedidos</span>
              </Link>
              <Link
                href="/admin/alquileres"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <Building2 className="h-4 w-4" />
                <span>Alquileres</span>
              </Link>
              <Link
                href="/admin/incidencias"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <AlertCircle className="h-4 w-4" />
                <span>Incidencias</span>
              </Link>
              <Link
                href="/admin/chat"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-slate-200 transition hover:bg-white/10 hover:text-white"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Chat</span>
              </Link>
            </nav>
          </div>
          <AdminExitActions />
        </div>
      </header>
      {children}
    </div>
  );
}
