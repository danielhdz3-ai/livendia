import Link from "next/link";
import { Building2, Clock, Mail, Phone, ShieldCheck } from "lucide-react";
import { getBusinessLegalIdentity } from "@/lib/business-legal";

type LivendiaTrustPanelProps = {
  variant?: "default" | "compact";
};

/** Datos de empresa visibles en panel y expediente (genera confianza). */
export function LivendiaTrustPanel({ variant = "default" }: LivendiaTrustPanelProps) {
  const legal = getBusinessLegalIdentity();
  const compact = variant === "compact";

  return (
    <section
      className={
        compact
          ? "rounded-2xl border border-slate-200 bg-slate-50 p-5 ring-1 ring-slate-100"
          : "rounded-2xl border border-[#1A4FBF]/15 bg-gradient-to-br from-[#EFF6FF] to-white p-6 shadow-sm ring-1 ring-[#1A4FBF]/10"
      }
      aria-labelledby="livendia-trust-heading"
    >
      <div className="flex gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1A4FBF]/10 text-[#1A4FBF]">
          <ShieldCheck className="h-5 w-5" aria-hidden />
        </div>
        <div className="min-w-0 flex-1">
          <h2 id="livendia-trust-heading" className="text-base font-bold text-[#1E293B] sm:text-lg">
            Quién es Livendia
          </h2>
          <p className="mt-1 text-sm text-[#475569]">
            Gestoría inmobiliaria digital con gestor asignado, precios cerrados y expediente online. Tus archivos solo
            los ves tú y nuestro equipo.
          </p>
        </div>
      </div>

      <ul className="mt-4 space-y-2 text-sm text-[#475569]">
        <li className="flex items-start gap-2">
          <Building2 className="mt-0.5 h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
          <span>
            <strong className="text-[#1E293B]">{legal.legalName}</strong>
            {legal.taxId ? (
              <>
                {" "}
                · <span className="font-medium">{legal.taxId}</span>
              </>
            ) : null}
            {legal.addressLine ? (
              <>
                <br />
                {legal.addressLine}
              </>
            ) : null}
          </span>
        </li>
        <li className="flex items-center gap-2">
          <Phone className="h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
          <a href={legal.phoneTel} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.phoneDisplay}
          </a>
          <span className="text-[#94a3b8]">·</span>
          <a href={legal.whatsappHref} className="font-semibold text-[#1A4FBF] hover:underline">
            WhatsApp
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Mail className="h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
          <a href={`mailto:${legal.email}`} className="font-semibold text-[#1A4FBF] hover:underline">
            {legal.email}
          </a>
        </li>
        <li className="flex items-center gap-2">
          <Clock className="h-4 w-4 shrink-0 text-[#1A4FBF]" aria-hidden />
          <span>Horario {legal.openingHours}</span>
        </li>
      </ul>

      <nav className="mt-4 flex flex-wrap gap-3 text-sm font-semibold">
        <Link href="/equipo" className="text-[#1A4FBF] hover:underline">
          Conoce al equipo →
        </Link>
        <Link href="/legal/aviso-legal" className="text-[#1A4FBF] hover:underline">
          Aviso legal
        </Link>
        <Link href="/contacto" className="text-[#1A4FBF] hover:underline">
          Contacto
        </Link>
      </nav>
    </section>
  );
}
