import Link from "next/link";
import type { BlogPost } from "@/lib/blog-types";
import { ChevronLeft, ChevronRight } from "lucide-react";

type BlogPostNavProps = {
  prev: BlogPost | null;
  next: BlogPost | null;
};

export function BlogPostNav({ prev, next }: BlogPostNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      className="mt-12 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-2"
      aria-label="Artículos anterior y siguiente"
    >
      {prev ? (
        <Link
          href={`/blog/${prev.slug}`}
          className="group rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 transition hover:border-[#1A4FBF] hover:shadow-sm"
        >
          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
            <ChevronLeft className="h-4 w-4" aria-hidden />
            Anterior
          </span>
          <p className="mt-2 font-semibold text-[#1E293B] group-hover:text-[#1A4FBF]">{prev.title}</p>
        </Link>
      ) : (
        <div />
      )}
      {next ? (
        <Link
          href={`/blog/${next.slug}`}
          className="group rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 text-right transition hover:border-[#1A4FBF] hover:shadow-sm sm:col-start-2"
        >
          <span className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#64748B]">
            Siguiente
            <ChevronRight className="h-4 w-4" aria-hidden />
          </span>
          <p className="mt-2 font-semibold text-[#1E293B] group-hover:text-[#1A4FBF]">{next.title}</p>
        </Link>
      ) : null}
    </nav>
  );
}
