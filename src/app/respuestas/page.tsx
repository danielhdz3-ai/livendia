import Link from "next/link";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { BLOG_CATEGORY_LABEL } from "@/lib/blog-types";
import { getAllPublishedRespuestas } from "@/lib/paa-content";
import { getPaaCanonicalHref, PAA_REGISTRY } from "@/lib/paa-registry";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Respuestas a preguntas frecuentes (PAA) | Livendia",
  description:
    "Micro-guías sobre alquiler, arras, compraventa entre particulares y administración de alquileres. Enlaces desde las FAQs de cada landing.",
  alternates: { canonical: `${getSiteUrl()}/respuestas` },
};

export default function RespuestasIndexPage() {
  const micro = getAllPublishedRespuestas();
  const blogLinked = PAA_REGISTRY.filter((e) => e.blogSlug);

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <PublicHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-14 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-wide text-[#1A4FBF]">People Also Ask</p>
          <h1 className="mt-2 text-3xl font-extrabold text-[#1E293B] sm:text-4xl">
            Respuestas ampliadas a preguntas reales
          </h1>
          <p className="mt-4 text-lg leading-relaxed text-[#64748b]">
            Cada landing de Livendia enlaza desde su FAQ a estas guías cortas. Capturan búsquedas del
            tipo «qué pasa si…», «cómo calcular…» o «qué documentos necesito…» sin duplicar el blog
            largo cuando ya existe un artículo allí.
          </p>

          <h2 className="mt-12 text-xl font-bold text-[#1E293B]">Micro-artículos en Livendia</h2>
          <ul className="mt-6 space-y-3">
            {micro.map((a) => (
              <li key={a.slug}>
                <Link
                  href={`/respuestas/${a.slug}`}
                  className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#1A4FBF]/30 hover:shadow-md"
                >
                  <span className="text-xs font-semibold uppercase text-[#1A4FBF]">
                    {BLOG_CATEGORY_LABEL[a.category]}
                  </span>
                  <p className="mt-1 text-lg font-bold text-[#1E293B]">{a.title}</p>
                  <p className="mt-1 text-sm text-[#64748b]">{a.description}</p>
                </Link>
              </li>
            ))}
          </ul>

          <h2 className="mt-12 text-xl font-bold text-[#1E293B]">Guías en el blog (mismo índice PAA)</h2>
          <ul className="mt-6 space-y-3">
            {blogLinked.map((e) => (
              <li key={e.slug}>
                <Link
                  href={getPaaCanonicalHref(e)}
                  className="block rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-[#1A4FBF]/30"
                >
                  <span className="text-xs font-semibold uppercase text-[#64748b]">Blog</span>
                  <p className="mt-1 font-bold text-[#1E293B]">{e.title}</p>
                  <p className="mt-1 text-sm text-[#64748b]">{e.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
