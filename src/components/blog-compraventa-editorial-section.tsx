import Link from "next/link";
import {
  COMPRAVENTA_FEATURED_BLOG,
  COMPRAVENTA_FEATURED_RESPUESTAS,
} from "@/lib/compraventa-editorial-crosslinks";
import { ArrowRight } from "lucide-react";

type Props = {
  /** Slug del post actual para no auto-enlazar. */
  currentBlogSlug?: string;
};

/** Refuerzo SEO: blog compraventa → respuestas PAA y otras guías. */
export function BlogCompraventaEditorialSection({ currentBlogSlug }: Props) {
  const respuestas = COMPRAVENTA_FEATURED_RESPUESTAS;
  const blog = COMPRAVENTA_FEATURED_BLOG.filter((l) => l.href !== `/blog/${currentBlogSlug}`);

  return (
    <section
      className="mt-12 rounded-2xl border border-[#1A4FBF]/20 bg-[#EFF6FF] p-6 sm:p-8"
      aria-labelledby="blog-compraventa-editorial-title"
    >
      <h2 id="blog-compraventa-editorial-title" className="text-xl font-extrabold text-[#1E293B]">
        Respuestas rápidas y guías relacionadas
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-[#64748b]">
        Preguntas frecuentes en formato PAA y artículos del blog — contenido distinto a las landings de contratación,
        pensado para enlazar autoridad interna sin canibalizar URLs ganadoras.
      </p>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Índice /respuestas</p>
          <ul className="mt-3 space-y-2 text-sm">
            {respuestas.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold text-[#1A4FBF] hover:underline">
                  {item.title}
                </Link>
                <span className="mt-0.5 block text-[#64748b]">{item.description}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4">
            <Link
              href="/respuestas"
              className="inline-flex items-center gap-1 text-sm font-semibold text-[#1A4FBF] hover:underline"
            >
              Ver todas las respuestas
              <ArrowRight className="h-4 w-4" aria-hidden />
            </Link>
          </p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-[#06B6D4]">Blog compraventa</p>
          <ul className="mt-3 space-y-2 text-sm">
            {blog.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="font-semibold text-[#1A4FBF] hover:underline">
                  {item.title}
                </Link>
                <span className="mt-0.5 block text-[#64748b]">{item.description}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
