import Image from "next/image";
import Link from "next/link";

type HomeMobileHeroProps = {
  waHref: string;
};

/**
 * Hero móvil: imagen protagonista a pantalla completa + tarjeta flotante (estilo app inmobiliaria).
 * Solo visible en pantallas pequeñas; el desktop usa el grid en page.tsx.
 */
export function HomeMobileHero({ waHref }: HomeMobileHeroProps) {
  return (
    <section className="relative lg:hidden" aria-label="Presentación Livendia">
      {/* Imagen principal — altura generosa, sin recorte del rostro */}
      <div className="relative w-full overflow-hidden bg-[#1A4FBF]">
        <div className="relative aspect-[4/5] min-h-[min(62vw,280px)] max-h-[min(72vh,560px)] w-full sm:aspect-[5/6] sm:max-h-[min(68vh,600px)]">
          <Image
            src="/images/chicasofaazul.png"
            alt="Familia tranquila en casa: gestión inmobiliaria online con Livendia"
            fill
            priority
            fetchPriority="high"
            className="object-cover object-[center_22%] sm:object-[center_20%]"
            sizes="100vw"
          />
          {/* Degradado suave para unir imagen y tarjeta */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#1A4FBF]/25 via-transparent to-[#0f172a]/90"
            aria-hidden
          />
        </div>
      </div>

      {/* Tarjeta flotante sobre la imagen */}
      <div className="relative z-10 -mt-20 px-4 pb-2 sm:-mt-24">
        <div className="mx-auto max-w-lg rounded-2xl bg-[#1e293b]/96 p-5 shadow-[0_20px_50px_rgba(15,23,42,0.45)] ring-1 ring-white/10 backdrop-blur-md sm:p-6">
          <p className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            Gestoría inmobiliaria online
          </p>
          <h1 className="mt-2 text-[1.65rem] font-bold leading-snug tracking-tight text-white sm:text-3xl">
            La gestoría inmobiliaria que cuida de los tuyos
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
            Gestoría inmobiliaria online en Madrid, Valencia, Barcelona y toda España. Contratos, venta entre
            particulares y administración de alquileres con gestores expertos.
          </p>

          <div className="mt-5 flex flex-col gap-3">
            <Link
              href="#servicios"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-white px-6 text-base font-bold text-[#1A4FBF] shadow-lg transition active:scale-[0.98]"
            >
              Ver servicios
            </Link>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              data-analytics-placement="hero_whatsapp"
              className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/25 bg-white/10 px-6 text-sm font-semibold text-white transition active:scale-[0.98]"
            >
              Hablar con un gestor
            </a>
          </div>

          <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[11px] font-medium text-slate-400">
            <li>IVA incluido</li>
            <li>·</li>
            <li>Pago seguro</li>
            <li>·</li>
            <li>Área cliente 24/7</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
