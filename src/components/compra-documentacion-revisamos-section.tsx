import { COMPRA_LOCAL_DOCUMENTACION_ITEMS } from "@/lib/compra-local-template";
import { FileSearch } from "lucide-react";

type Props = {
  city?: string;
  className?: string;
};

export function CompraDocumentacionRevisamosSection({ city, className = "" }: Props) {
  return (
    <section className={`border-b border-slate-200 bg-white px-4 py-16 sm:px-6 ${className}`}>
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#EFF6FF]">
            <FileSearch className="h-7 w-7 text-[#1A4FBF]" aria-hidden />
          </div>
          <h2 className="text-2xl font-extrabold text-[#1E293B] sm:text-3xl">
            Documentación que revisamos{city ? ` en ${city}` : ""}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-[#475569]">
            Checklist gestor antes de que firmes reserva o arras. Si falta algo, te lo decimos con margen para
            negociar.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2">
          {COMPRA_LOCAL_DOCUMENTACION_ITEMS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 ring-1 ring-slate-100"
            >
              <h3 className="font-bold text-[#1E293B]">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#475569]">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
