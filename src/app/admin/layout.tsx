import Link from "next/link";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-100">
      <header className="border-b border-slate-200 bg-[#1E293B] text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <div className="flex items-center gap-4 text-sm font-medium">
            <span className="font-bold text-white">Livendia Admin</span>
            <Link href="/admin/pedidos" className="text-slate-200 hover:text-white">
              Pedidos
            </Link>
          </div>
          <div className="flex items-center gap-3 text-sm">
            <Link href="/dashboard" className="text-slate-200 hover:text-white">
              Panel cliente
            </Link>
            <Link href="/" className="text-slate-200 hover:text-white">
              Web
            </Link>
          </div>
        </div>
      </header>
      {children}
    </div>
  );
}
