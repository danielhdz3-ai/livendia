import Link from "next/link";
import { Building2, FileText, KeyRound, MapPin } from "lucide-react";
import {
  BARCELONA_PACK_COMPRADOR_HUB_LINK,
  BARCELONA_REGIONAL_HUB_DOORS,
  BARCELONA_REGIONAL_HUB_SECTION_ID,
} from "@/lib/barcelona-regional-hub";
import {
  ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL,
  PACK_COMPRADOR_BARCELONA_PRICE_LABEL,
} from "@/lib/catalog.public";

const DOOR_ICONS = {
  contratos: FileText,
  compraventa: Building2,
  admin: KeyRound,
  despacho: MapPin,
} as const;

type Props = {
  /** Título de sección (hub ciudades vs home). */
  title?: string;
  lead?: string;
  showPackComprador?: boolean;
};

export function BarcelonaRegionalHubCards({
  title = "Barcelona: sede Les Corts + cobertura metropolitana",
  lead = "Única ciudad con despacho físico Livendia. El resto de España es 100 % online; aquí sumamos contratos por barrio, compraventa, administración de alquiler con gestor en campo y cita en Mejía Lequerica 44.",
  showPackComprador = true,
}: Props) {
  return (
    <section
      id={BARCELONA_REGIONAL_HUB_SECTION_ID}
      className="scroll-mt-24 rounded-2xl border-2 border-[#1A4FBF]/20 bg-gradient-to-br from-[#EFF6FF] via-white to-[#F8FAFC] p-6 shadow-sm ring-1 ring-slate-100 sm:p-8"
      aria-labelledby="barcelona-regional-hub-title"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Hub Barcelona · Cataluña</p>
      <h2 id="barcelona-regional-hub-title" className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#64748b] sm:text-base">{lead}</p>

      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {BARCELONA_REGIONAL_HUB_DOORS.map((door) => {
          const Icon = DOOR_ICONS[door.id as keyof typeof DOOR_ICONS] ?? FileText;
          return (
            <li key={door.id}>
              <Link
                href={door.href}
                className={`group flex h-full flex-col rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${
                  door.highlight ? "border-[#1A4FBF]/40 ring-1 ring-[#1A4FBF]/15" : "border-slate-200"
                }`}
              >
                <Icon className="h-6 w-6 text-[#1A4FBF]" aria-hidden />
                <h3 className="mt-3 text-lg font-bold text-[#1E293B]">{door.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">{door.description}</p>
                <span className="mt-4 text-sm font-semibold text-[#1A4FBF] group-hover:underline">{door.cta} →</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {showPackComprador ? (
        <div className="mt-6 rounded-xl border border-cyan-200/80 bg-cyan-50/60 px-4 py-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
          <div>
            <p className="text-sm font-bold text-[#1E293B]">Comprador en Barcelona</p>
            <p className="mt-1 text-sm text-[#64748b]">
              {BARCELONA_PACK_COMPRADOR_HUB_LINK.label} — {PACK_COMPRADOR_BARCELONA_PRICE_LABEL} IVA incl. (informe
              post-arras + cita en despacho Les Corts).
            </p>
          </div>
          <Link
            href={BARCELONA_PACK_COMPRADOR_HUB_LINK.href}
            className="mt-3 inline-flex min-h-11 shrink-0 items-center justify-center rounded-full bg-[#1A4FBF] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#2563EB] sm:mt-0"
          >
            Ver pack comprador
          </Link>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-[#64748b]">
        Administración desde {ADMINISTRACION_ALQUILER_MONTHLY_PRICE_LABEL} IVA incl. · Mismo catálogo nacional en{" "}
        <Link href="/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
          /servicios
        </Link>
      </p>
    </section>
  );
}
