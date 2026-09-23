import Image from "next/image";
import Link from "next/link";
import { LIVENDIA_FOUNDERS } from "@/lib/livendia-founders";

type LivendiaExpertGestorsSectionProps = {
  /** Ciudad o zona de la landing local (opcional). */
  city?: string;
  className?: string;
};

export function LivendiaExpertGestorsSection({ city, className = "" }: LivendiaExpertGestorsSectionProps) {
  const placeLabel = city ?? "toda España";

  return (
    <section className={`border-t border-slate-200 bg-white px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-wider text-[#1A4FBF]">Gestores expertos</p>
          <h2 className="mt-3 text-2xl font-extrabold text-[#1E293B] sm:text-3xl lg:text-4xl">
            {city
              ? `Las personas que redactan tus arras en ${city}`
              : "Las personas detrás de tu pack de venta"}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-[#64748b] sm:text-lg">
            No es un formulario anónimo: detrás del pack arras + gestión documental hay{" "}
            <strong className="font-semibold text-[#1E293B]">profesionales colegiados</strong> con experiencia real
            en ventas entre particulares en {placeLabel}. Conoce a los socios fundadores de Livendia antes de
            contratar.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-10">
          {LIVENDIA_FOUNDERS.map((founder) => (
            <article
              key={founder.name}
              className="overflow-hidden rounded-2xl bg-[#F8FAFC] shadow-lg ring-1 ring-slate-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#1A4FBF]">
                <Image
                  src={founder.image}
                  alt={founder.imageAlt}
                  fill
                  className="object-cover object-[center_20%]"
                  sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-xl font-bold text-[#1E293B] sm:text-2xl">{founder.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-wide text-[#1A4FBF]">
                  {founder.role} · Gestor experto Livendia
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {founder.credentials.map((credential) => (
                    <span
                      key={credential}
                      className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#475569] ring-1 ring-slate-200"
                    >
                      {credential}
                    </span>
                  ))}
                </div>
                <div className="mt-5 space-y-3 text-sm leading-relaxed text-[#475569] sm:text-base">
                  {founder.ventaBio.map((paragraph) => (
                    <p key={paragraph.slice(0, 48)}>{paragraph}</p>
                  ))}
                </div>
                <div
                  className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6"
                  aria-label={`Sellos profesionales de ${founder.name}`}
                >
                  {founder.seals.map((seal) => (
                    <Image
                      key={seal.src}
                      src={seal.src}
                      alt={seal.alt}
                      width={240}
                      height={108}
                      className="h-14 w-auto max-w-[10rem] object-contain sm:h-20 sm:max-w-[12rem]"
                    />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center">
          <Link
            href="/equipo"
            className="inline-flex min-h-11 items-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2563EB]"
          >
            Conoce al equipo completo
          </Link>
        </p>
      </div>
    </section>
  );
}
