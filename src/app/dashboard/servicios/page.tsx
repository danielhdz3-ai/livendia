import { createServerSupabaseClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ShoppingBag, Sparkles } from "lucide-react";

export const metadata = { title: "Contratar Servicios — Livendia" };

export default async function ServiciosInternosPage() {
  const supabase = await createServerSupabaseClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: services } = await supabase
    .from("services")
    .select("id, name, slug, description, price_cents, category, is_recurring")
    .eq("is_active", true)
    .eq("is_recurring", false) // Solo contratos, no suscripciones
    .order("price_cents", { ascending: true });

  const SERVICE_IMAGES: Record<string, string> = {
    "contrato-alquiler-lau": "/images/contratos1.jpg",
    "contrato-alquiler-temporada": "/images/contratos2.jpg",
    "contrato-alquiler-habitacion": "/images/contratos5.jpg",
    "contrato-arras-penitenciales": "/images/contratos6.jpg",
    "contrato-arras-confirmatorias": "/images/contratos7.jpg",
  };

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
                Contrata y gestiona tus servicios inmobiliarios
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        {!services?.length ? (
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-white p-12 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
              <Sparkles className="h-8 w-8 text-[#64748B]" />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-[#1E293B]">
              No hay servicios disponibles
            </h3>
            <p className="mt-2 text-sm text-[#64748B]">
              Los servicios estarán disponibles próximamente
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => {
              const imageUrl = SERVICE_IMAGES[service.slug as string] || "/images/contratos.jpg";
              
              return (
                <div
                  key={service.id}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-lg ring-1 ring-slate-200 transition-all hover:shadow-2xl hover:ring-[#1A4FBF]"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={service.name as string}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="rounded-xl bg-white px-3 py-1.5 text-center">
                        <span className="text-2xl font-bold text-[#1A4FBF]">
                          {((service.price_cents as number) / 100).toFixed(0)} €
                        </span>
                        <span className="ml-1 text-xs text-[#64748B]">IVA incl.</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-bold text-[#1E293B]">{service.name}</h3>
                    <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-[#64748B]">
                      {service.description}
                    </p>

                    <Link
                      href={`/servicios/${service.slug}`}
                      className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#1A4FBF] to-[#2563EB] px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-500/30 transition hover:scale-[1.02]"
                    >
                      <span>Ver detalles y contratar</span>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-8 rounded-2xl bg-blue-50 p-6 ring-1 ring-blue-200">
          <h3 className="font-bold text-blue-900">¿Necesitas ayuda?</h3>
          <p className="mt-2 text-sm leading-relaxed text-blue-800">
            Si tienes dudas sobre qué servicio contratar o necesitas asesoramiento personalizado,
            nuestro equipo está aquí para ayudarte.
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
