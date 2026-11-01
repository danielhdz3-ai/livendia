import Link from "next/link";
import { BookOpen } from "lucide-react";

const GESTORIA_RESOURCE_LINKS = [
  {
    href: "/blog/cuanto-cuesta-una-gestoria-inmobiliaria",
    label: "¿Cuánto cuesta una gestoría inmobiliaria?",
  },
  {
    href: "/blog/que-es-un-contrato-de-arras",
    label: "Qué es un contrato de arras",
  },
  {
    href: "/blog/administracion-alquiler-propietarios-guia",
    label: "Guía de administración de alquiler para propietarios",
  },
  {
    href: "/blog/contrato-alquiler-habitacion-piso-compartido",
    label: "Contrato de alquiler de habitación en piso compartido",
  },
] as const;

export function GestoriaResourceLinksSection() {
  return (
    <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-[#1A4FBF]">
          <BookOpen className="h-5 w-5" aria-hidden />
          <p className="text-sm font-bold uppercase tracking-wide">Recursos Livendia</p>
        </div>
        <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {GESTORIA_RESOURCE_LINKS.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-semibold text-[#1A4FBF] hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
