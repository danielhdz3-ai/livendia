import {
  ContratarSlugButton,
} from "@/components/service-purchase-provider";
import {
  REDACTAR_CONTRATO_ADMIN_UPSELL,
  redactarContratoAdministracionHref,
} from "@/lib/redactar-contrato-alquiler-content";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type Props = {
  placeLabel?: string;
  citySlug?: string;
  adminPriceLabel: string;
};

export function RedactarContratoAlquilerAdministracionUpsellSection({
  placeLabel,
  citySlug,
  adminPriceLabel,
}: Props) {
  const copy = REDACTAR_CONTRATO_ADMIN_UPSELL;
  const adminHref = citySlug ? redactarContratoAdministracionHref(citySlug) : "/servicios/administracion-alquiler";
  const placeInTitle = placeLabel ? ` en ${placeLabel}` : "";

  return (
    <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div className="relative order-2 aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200 lg:order-1">
          <Image
            src={copy.imageSrc}
            alt={copy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="order-1 lg:order-2">
          <p className="text-xs font-bold uppercase tracking-wide text-[#06B6D4]">{copy.eyebrow}</p>
          <h2 className="mt-2 text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
            {copy.title}
            {placeInTitle}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-[#64748b]">{copy.intro}</p>
          <ul className="mt-6 space-y-3">
            {copy.bullets.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-[#475569] sm:text-base">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#1A4FBF]" aria-hidden />
                {line}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm font-semibold text-[#1E293B]">
            Desde <span className="text-2xl font-extrabold text-[#1A4FBF]">{adminPriceLabel}</span> IVA incl. · sin
            permanencia
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <ContratarSlugButton
              slug="administracion-alquiler"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A4FBF] px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#153e9a]"
            >
              {copy.ctaPrimary} · {adminPriceLabel}
            </ContratarSlugButton>
            <Link
              href={adminHref}
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#1A4FBF] px-8 py-3.5 text-base font-semibold text-[#1A4FBF] hover:bg-[#EFF6FF]"
            >
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
