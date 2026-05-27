import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CreditCard, Plus, Trash2, CheckCircle } from "lucide-react";

export const metadata = { title: "Métodos de pago" };

export default async function MetodosPagoPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

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
          <h1 className="mt-4 text-3xl font-bold text-[#1E293B]">Métodos de Pago</h1>
          <p className="mt-1 text-sm text-[#64748B]">
            Gestiona tus tarjetas y métodos de pago para servicios
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <div className="mb-6">
          <button className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:scale-[1.02]">
            <Plus className="h-4 w-4" />
            <span>Añadir tarjeta</span>
          </button>
        </div>

        {/* Sample Card */}
        <div className="space-y-4">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 p-6 text-white shadow-2xl">
            <div className="mb-4 flex items-center justify-between">
              <CreditCard className="h-8 w-8" />
              <CheckCircle className="h-5 w-5 text-green-400" />
            </div>
            <div className="mb-6 font-mono text-xl tracking-wider">
              •••• •••• •••• 4242
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-xs opacity-75">Titular</div>
                <div className="font-semibold">VISA</div>
              </div>
              <div>
                <div className="text-xs opacity-75">Expira</div>
                <div className="font-semibold">12/25</div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-6 shadow ring-1 ring-slate-200">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100">
                  <CreditCard className="h-6 w-6 text-[#64748B]" />
                </div>
                <div>
                  <div className="font-semibold text-[#1E293B]">Visa terminada en 4242</div>
                  <div className="text-sm text-[#64748B]">Predeterminada</div>
                </div>
              </div>
              <button className="rounded-xl border border-red-200 p-2 text-red-600 transition hover:bg-red-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
          <h3 className="font-bold text-blue-900">Información sobre pagos</h3>
          <ul className="mt-3 space-y-2 text-sm text-blue-800">
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <span>Todos los pagos se procesan de forma segura a través de Stripe</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <span>Puedes añadir tarjetas de crédito/débito y domiciliaciones SEPA</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
              <span>Tus datos de pago están encriptados y nunca se almacenan en nuestros servidores</span>
            </li>
          </ul>
        </div>

        <div className="mt-6 rounded-2xl border-2 border-dashed border-amber-200 bg-amber-50 p-6">
          <h3 className="font-bold text-amber-900">Funcionalidad en desarrollo</h3>
          <p className="mt-2 text-sm leading-relaxed text-amber-800">
            La gestión completa de métodos de pago con Stripe estará disponible próximamente.
            Por ahora, los pagos se procesan durante el checkout de cada servicio.
          </p>
        </div>
      </main>
    </div>
  );
}
