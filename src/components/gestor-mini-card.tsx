import Image from "next/image";
import Link from "next/link";
import { LIVENDIA_FEATURED_GESTOR } from "@/lib/livendia-featured-gestor";

type Props = {
  className?: string;
};

export function GestorMiniCard({ className = "" }: Props) {
  const g = LIVENDIA_FEATURED_GESTOR;
  return (
    <div
      className={`flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm ring-1 ring-slate-100 sm:p-5 ${className}`}
    >
      <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full ring-2 ring-[#1A4FBF]/20">
        <Image src={g.image} alt={g.imageAlt} fill className="object-cover object-top" sizes="64px" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-xs font-semibold uppercase tracking-wide text-[#1A4FBF]">Tu gestor asignado</p>
        <p className="font-bold text-[#1E293B]">
          {g.name} — {g.credentialShort}
        </p>
        <p className="text-sm text-[#64748b]">{g.role}</p>
        <Link href={g.equipoHref} className="mt-1 inline-block text-sm font-semibold text-[#1A4FBF] hover:underline">
          Conoce al equipo →
        </Link>
      </div>
    </div>
  );
}
