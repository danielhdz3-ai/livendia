import { ContratarSlugButton } from "@/components/service-purchase-provider";
import {
  REDACTAR_CONTRATO_PLAIN_LANGUAGE,
  REDACTAR_CONTRATO_REDACCION_SERVICIO,
} from "@/lib/redactar-contrato-alquiler-content";
import { CheckCircle, FileSignature } from "lucide-react";
import Image from "next/image";

type Props = {
  placeLabel?: string;
  contractPriceLabel: string;
};

export function RedactarContratoAlquilerRedaccionServicioSection({
  placeLabel,
  contractPriceLabel,
}: Props) {
  const copy = REDACTAR_CONTRATO_REDACCION_SERVICIO;
  const placeInTitle = placeLabel ? ` en ${placeLabel}` : "";

  return (
    <section className="border-b border-slate-200 bg-white px-4 py-14 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">
            <FileSignature className="h-4 w-4" aria-hidden />
            {copy.eyebrow}
          </p>
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
          <p className="mt-6 text-sm text-[#64748b]">{REDACTAR_CONTRATO_PLAIN_LANGUAGE.lawFootnote}</p>
          <ContratarSlugButton
            slug="contrato-alquiler-lau"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A4FBF] px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#153e9a]"
          >
            {REDACTAR_CONTRATO_PLAIN_LANGUAGE.ctaContractLabel} · {contractPriceLabel}
          </ContratarSlugButton>
        </div>
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
          <Image
            src={copy.imageSrc}
            alt={copy.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
}
