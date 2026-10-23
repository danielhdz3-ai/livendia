"use client";

const ITEMS = [
  "Contrato LAU Barcelona",
  "Arras entre particulares",
  "Alquiler habitación",
  "Temporada · turismo",
  "Administración alquiler",
  "Panel online Livendia",
  "Eixample",
  "Gràcia",
  "Poblenou",
  "Sants",
  "L'Hospitalet",
  "Les Corts",
  "Precios fijos IVA incl.",
  "Gestor dedicado",
  "Cataluña · CCCat",
] as const;

export function ContratosBcnMarqueeBand() {
  const loop = [...ITEMS, ...ITEMS];
  return (
    <div
      className="relative overflow-hidden border-y border-[#1A4FBF]/15 bg-[#0B2D7A] py-3"
      aria-hidden
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#0B2D7A] to-transparent sm:w-24" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#0B2D7A] to-transparent sm:w-24" />
      <div className="livendia-marquee-track flex w-max gap-3 motion-reduce:animate-none">
        {loop.map((label, i) => (
          <span
            key={`${label}-${i}`}
            className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-white/95 backdrop-blur-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_rgba(103,232,249,0.8)]" />
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
