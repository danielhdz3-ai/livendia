import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";
import { getPublicServices, groupByCategory } from "@/lib/catalog";
import { ServiceCardsClient } from "@/app/servicios/service-cards-client";

export const metadata = { title: "Contratar servicios" };

export default async function ServiciosInternosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  /** Mismo catálogo y flujo (modal → Stripe) que /servicios; enlaces a `/servicios/{slug}` fallaban en slugs sin página Next. */
  const services = await getPublicServices();
  const groups = groupByCategory(services);

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6">
          <Link
            href="/dashboard"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Volver al panel</span>
          </Link>
          <div className="mt-4 flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]">
              <ShoppingBag className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#1E293B]">Servicios disponibles</h1>
              <p className="text-sm text-[#64748B]">
                Elige tarjeta y contrata con pago seguro; mismo catálogo que en la web pública.
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {groups.length === 0 ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <Sparkles className="h-8 w-8 text-[#64748B]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">No hay servicios disponibles</h3>
            <p className="mt-2 text-sm text-[#64748B]">Los servicios estarán disponibles próximamente.</p>
          </div>
        ) : (
          <div className="space-y-12">
            {groups.map((group) => (
              <section key={group.key}>
                <h2 className="text-2xl font-bold text-[#1E293B]">{group.label}</h2>
                <ServiceCardsClient services={group.items} />
              </section>
            ))}
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
          <h3 className="font-bold text-blue-900">¿Necesitas ayuda?</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-800">
            Si tienes dudas sobre qué servicio contratar o necesitas asesoramiento personalizado, nuestro equipo está
            aquí para ayudarte.
          </p>
          <Link
            href="/contacto"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            <span>Contactar con soporte</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
