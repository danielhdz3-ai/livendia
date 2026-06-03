import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Building2, FileText, KeyRound, Scale } from "lucide-react";

import {
  CONTRATO_ALQUILER_LAU_PRICE_LABEL,
  CONTRATO_ALQUILER_TEMPORADA_PRICE_LABEL,
} from "@/lib/catalog.public";

const QUICK_ACTIONS = [
  {
    href: "/para-propietarios",
    title: "Administración",
    subtitle: "49 €/mes · sin permanencia",
    icon: KeyRound,
    tint: "bg-violet-50 ring-violet-100",
    iconColor: "text-violet-600",
    image: "/images/modelo3.jpg",
  },
  {
    href: "/servicios/contrato-alquiler-lau",
    title: "Contrato LAU",
    subtitle: `${CONTRATO_ALQUILER_LAU_PRICE_LABEL} IVA incl.`,
    icon: FileText,
    tint: "bg-amber-50 ring-amber-100",
    iconColor: "text-amber-700",
    image: "/images/contratos.jpg",
  },
  {
    href: "/servicios/contrato-de-arras",
    title: "Contrato arras",
    subtitle: "145 € IVA incl.",
    icon: Scale,
    tint: "bg-rose-50 ring-rose-100",
    iconColor: "text-rose-600",
    image: "/images/contratodearras.jpg",
  },
  {
    href: "/servicios/servicio-completo-compra",
    title: "Compra completa",
    subtitle: "890 € hasta escritura",
    icon: Building2,
    tint: "bg-emerald-50 ring-emerald-100",
    iconColor: "text-emerald-700",
    image: "/images/gestoria3.jpg",
  },
] as const;

export function HomeMobileQuickActions() {
  return (
    <section className="border-b border-slate-200 bg-[#0f172a] px-4 pb-5 pt-3 sm:hidden" aria-label="Accesos rápidos">
      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Todo lo que necesitas</p>
      <div className="mt-3 grid grid-cols-2 gap-3">
        {QUICK_ACTIONS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group flex min-h-[5.5rem] items-center gap-3 rounded-2xl p-3 ring-1 transition active:scale-[0.98] ${item.tint}`}
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-white shadow-sm">
                <Image src={item.image} alt="" fill className="object-cover" sizes="56px" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-1">
                  <p className="text-sm font-bold leading-tight text-[#1E293B]">{item.title}</p>
                  <Icon className={`h-4 w-4 shrink-0 ${item.iconColor}`} aria-hidden />
                </div>
                <p className="mt-0.5 text-[11px] leading-snug text-[#64748B]">{item.subtitle}</p>
              </div>
            </Link>
          );
        })}
      </div>
      <Link
        href="/servicios"
        className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded-xl bg-[#1A4FBF] px-4 text-sm font-semibold text-white shadow-lg"
      >
        Ver catálogo completo
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </section>
  );
}
