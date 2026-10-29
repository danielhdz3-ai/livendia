import Link from "next/link";
import { CONTRATOS_BCN_DESPACHO_BARRIO_LINKS } from "@/lib/contratos-bcn-office-barrio";
import { MapPin } from "lucide-react";

/** Enlaces a #despacho personalizado por barrio (hub Barcelona). */
export function ContratosBcnDespachoBarrioNav() {
  return (
    <div className="mt-10 rounded-2xl border border-[#BFDBFE] bg-[#EFF6FF]/80 p-5 sm:p-6">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1A4FBF]">
        <MapPin className="h-4 w-4" aria-hidden />
        Despacho Les Corts · copy por barrio
      </p>
      <p className="mt-2 text-sm text-[#64748b]">
        Misma dirección (Mejía Lequerica 44), contexto local distinto: elige tu barrio para ver cómo llegar y qué
        revisamos en cita.
      </p>
      <nav aria-label="Cita en despacho por barrio de Barcelona" className="mt-4 flex flex-wrap gap-2">
        {CONTRATOS_BCN_DESPACHO_BARRIO_LINKS.map((item) => (
          <Link
            key={item.slug}
            href={item.href}
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#1A4FBF] ring-1 ring-[#BFDBFE] transition hover:bg-blue-50 hover:ring-[#1A4FBF]/40"
            title={item.shortLead}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
