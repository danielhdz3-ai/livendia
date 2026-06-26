import Image from "next/image";

export const VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE = "/images/comercial1.jpg";
export const VENDER_PISO_SIN_INMOBILIARIA_SIGNING_IMAGE = "/images/firma11.jpg";

export function VenderPisoSinInmobiliariaSigningFigure({ city }: { city: string }) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-[16/9] w-full max-h-80">
        <Image
          src={VENDER_PISO_SIN_INMOBILIARIA_SIGNING_IMAGE}
          alt={`Firma de escritura de venta entre particulares en ${city} con acompañamiento Livendia`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 768px"
        />
      </div>
      <figcaption className="px-4 py-3 text-center text-sm text-slate-600">
        El objetivo: llegar a notaría con contratos y documentación alineados — sin sorpresas el día de la firma.
      </figcaption>
    </figure>
  );
}
