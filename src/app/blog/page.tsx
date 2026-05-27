import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { BlogLocalCitiesSection } from "@/components/blog-local-cities-section";
import { BlogIndexStructuredData } from "@/components/blog-index-structured-data";
import { BlogIndexFilters, paginatePosts } from "@/components/blog-index-filters";
import {
  BLOG_CATEGORIES,
  getAllPosts,
  getPostsByCategory,
  type BlogCategory,
} from "@/lib/blog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Gestoría inmobiliaria y derecho aplicado",
  description:
    "Artículos y guías sobre contratos de alquiler y compraventa, LAU, arras, administración de alquiler y gestión inmobiliaria con Livendia.",
  alternates: { canonical: "https://livendia.com/blog" },
};

type Props = {
  searchParams: Promise<{ categoria?: string; page?: string }>;
};

function parseCategory(raw: string | undefined): BlogCategory | "all" {
  if (!raw) return "all";
  return (BLOG_CATEGORIES as readonly string[]).includes(raw) ? (raw as BlogCategory) : "all";
}

export default async function BlogPage({ searchParams }: Props) {
  const sp = await searchParams;
  const category = parseCategory(sp.categoria);
  const page = Math.max(1, parseInt(sp.page ?? "1", 10) || 1);

  const filtered = category === "all" ? getAllPosts() : getPostsByCategory(category);
  const { items, totalPages, currentPage } = paginatePosts(filtered, page);

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <BlogIndexStructuredData posts={items} />
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-[#1A4FBF] px-4 py-14 text-white sm:px-6">
          <div className="mx-auto max-w-6xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-cyan-300">Blog Livendia</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Recursos sobre alquiler, compraventa y gestión inmobiliaria
            </h1>
            <p className="mt-3 max-w-2xl text-lg text-blue-100">
              Guías prácticas para entender contratos, arras y administración antes de firmar.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
          <BlogIndexFilters
            posts={items}
            activeCategory={category}
            currentPage={currentPage}
            totalPages={totalPages}
          />
        </div>

        <BlogLocalCitiesSection />
      </main>
      <SiteFooter />
    </div>
  );
}
