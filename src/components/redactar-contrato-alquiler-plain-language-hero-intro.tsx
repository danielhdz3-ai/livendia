import { REDACTAR_CONTRATO_PLAIN_LANGUAGE } from "@/lib/redactar-contrato-alquiler-content";

type Props = {
  placeLabel?: string;
  variant?: "hero" | "band";
};

export function RedactarContratoAlquilerPlainLanguageHeroIntro({ placeLabel, variant = "hero" }: Props) {
  const copy = REDACTAR_CONTRATO_PLAIN_LANGUAGE;
  const placeSuffix = placeLabel ? ` en ${placeLabel}` : "";

  if (variant === "band") {
    return (
      <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">{copy.brandLine}</p>
          <p className="mt-2 text-xl font-extrabold text-[#1E293B] sm:text-2xl">
            {copy.promiseLine}
            {placeSuffix}
          </p>
          <p className="mt-3 text-base leading-relaxed text-[#64748b]">{copy.plainExplanation}</p>
        </div>
      </section>
    );
  }

  return (
    <div className="mb-6 rounded-xl border border-white/25 bg-white/10 px-4 py-4 backdrop-blur-sm sm:px-5 sm:py-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200 sm:text-sm">{copy.brandLine}</p>
      <p className="mt-1 text-lg font-bold leading-snug text-white sm:text-xl">
        {copy.promiseLine}
        {placeSuffix}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-blue-100">{copy.plainExplanation}</p>
    </div>
  );
}
