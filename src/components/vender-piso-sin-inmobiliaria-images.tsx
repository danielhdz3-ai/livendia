import Image from "next/image";

export const VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE = "/images/comercial1.jpg";
export const VENDER_PISO_SIN_INMOBILIARIA_SIGNING_IMAGE = "/images/firma11.jpg";

export function VenderPisoSinInmobiliariaPillarHeroImage({ alt }: { alt: string }) {
  return (
    <div className="mx-auto w-full max-w-xl lg:max-w-none">
      <Image
        src={VENDER_PISO_SIN_INMOBILIARIA_HERO_IMAGE}
        alt={alt}
        width={1200}
        height={800}
        className="h-auto w-full rounded-2xl object-contain shadow-md ring-1 ring-slate-200"
        sizes="(max-width: 1024px) 100vw, 520px"
        priority
      />
    </div>
  );
}

export function VenderPisoSinInmobiliariaSigningFigure({ city }: { city: string }) {
  return (
    <figure className="my-10 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <Image
        src={VENDER_PISO_SIN_INMOBILIARIA_SIGNING_IMAGE}
        alt={`Firma de escritura de venta entre particulares en ${city} con acompañamiento Livendia`}
        width={1200}
        height={800}
        className="h-auto w-full object-contain"
        sizes="(max-width: 1024px) 100vw, 768px"
      />
      <figcaption className="px-4 py-3 text-center text-sm text-slate-600">
        El objetivo: llegar a notaría con contratos y documentación alineados — sin sorpresas el día de la firma.
      </figcaption>
    </figure>
  );
}
