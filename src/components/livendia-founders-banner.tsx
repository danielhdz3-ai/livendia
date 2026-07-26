import Image from "next/image";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const FOUNDERS_BULLETS = [
  "Tramitación 100 % online en todo el territorio",
  "Gestor inmobiliario dedicado a tu expediente",
  "Precios fijos publicados, sin comisión de agencia",
  "Profesionales colegiados con experiencia real",
] as const;

type LivendiaFoundersBannerProps = {
  className?: string;
  showCta?: boolean;
};

export function LivendiaFoundersBanner({ className = "", showCta = true }: LivendiaFoundersBannerProps) {
  return (
    <section className={`border-b border-slate-200 bg-[#F8FAFC] px-4 py-16 sm:px-6 sm:py-20 ${className}`}>
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-sm font-bold uppercase tracking-wider text-[#1A4FBF]">Quiénes somos</p>
            <h2 className="mt-3 text-2xl font-extrabold text-[#1E293B] sm:text-4xl lg:text-5xl">
              Gestoría inmobiliaria digital en toda España
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-[#475569]">
              <p>
                <strong className="text-[#1E293B]">Livendia</strong> nace para que comprar, vender o alquilar entre
                particulares no implique ir a ciegas ni depender de una agencia tradicional. Somos una gestoría
                inmobiliaria digital que une derecho inmobiliario, gestión administrativa y tecnología útil, con
                cobertura en <strong className="text-[#1E293B]">toda España</strong>: el expediente se tramita online,
                con gestor dedicado y seguimiento continuo, estés donde estés.
              </p>
              <p>
                No somos un comparador ni un formulario automático. Detrás de cada operación hay profesionales
                colegiados que conocen arras, alquiler, compraventa y administración de alquiler desde la práctica
                diaria. Livendia existe porque vimos demasiadas operaciones mal cerradas: cláusulas genéricas, plazos
                mal calculados o sorpresas en notaría que se podían haber evitado con criterio jurídico y trato
                directo.
              </p>
              <p>
                Nuestro compromiso es sencillo: precios publicados, gestor asignado, documentación ordenada y
                explicaciones en lenguaje claro — sin letra pequeña creativa ni desaparecer a mitad de camino.
              </p>
            </div>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {FOUNDERS_BULLETS.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-[#475569] sm:text-base">
                  <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-[#06B6D4]" aria-hidden />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            {showCta ? (
              <Link
                href="/equipo"
                className="mt-8 inline-flex min-h-11 items-center rounded-full bg-[#1A4FBF] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2563EB]"
              >
                Conoce a los fundadores
              </Link>
            ) : null}
          </div>

          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl ring-1 ring-slate-200">
            <Image
              src="/images/fundadores-oficina.png"
              alt="Fundadores de Livendia en el despacho"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
