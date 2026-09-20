import { ContratarSlugButton } from "@/components/service-purchase-provider";
import {
  CONTRATO_ARRAS_PLAIN_LANGUAGE,
  CONTRATO_ARRAS_REDACCION_SERVICIO,
} from "@/lib/contrato-arras-local-lead-content";
import { CheckCircle, FileSignature } from "lucide-react";
import Image from "next/image";

type Props = {
  placeLabel?: string;
  arrasPriceLabel: string;
  legalRegion?: "catalunya" | "espana";
};

export function ContratoArrasRedaccionServicioSection({
  placeLabel,
  arrasPriceLabel,
  legalRegion = "catalunya",
}: Props) {
  const copy = CONTRATO_ARRAS_REDACCION_SERVICIO;
  const placeInTitle = placeLabel ? ` en ${placeLabel}` : "";
  const footnote =
    legalRegion === "espana"
      ? CONTRATO_ARRAS_PLAIN_LANGUAGE.lawFootnoteEspana
      : CONTRATO_ARRAS_PLAIN_LANGUAGE.lawFootnoteCatalunya;

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
          <p className="mt-6 text-sm text-[#64748b]">{footnote}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContratarSlugButton
              slug="contrato-arras-penitenciales"
              className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#1A4FBF] px-8 py-3.5 text-base font-bold text-white shadow-lg hover:bg-[#153e9a]"
            >
              {CONTRATO_ARRAS_PLAIN_LANGUAGE.ctaPenitencialesLabel} · {arrasPriceLabel}
            </ContratarSlugButton>
            <ContratarSlugButton
              slug="contrato-arras-confirmatorias"
              className="inline-flex min-h-11 items-center justify-center rounded-full border-2 border-[#1A4FBF] px-8 py-3.5 text-base font-semibold text-[#1A4FBF] hover:bg-[#EFF6FF]"
            >
              {CONTRATO_ARRAS_PLAIN_LANGUAGE.ctaConfirmatoriasLabel}
            </ContratarSlugButton>
          </div>
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
