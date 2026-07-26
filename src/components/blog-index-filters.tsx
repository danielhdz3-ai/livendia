import Link from "next/link";
import Image from "next/image";
import {
  BLOG_CATEGORIES,
  BLOG_CATEGORY_IMAGES,
  BLOG_CATEGORY_LABEL,
  BLOG_POSTS_PER_PAGE,
  type BlogCategory,
  type BlogPost,
} from "@/lib/blog-types";

function formatDate(d: string) {
  try {
    return new Date(d + "T12:00:00").toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return d;
  }
}

type BlogIndexFiltersProps = {
  posts: BlogPost[];
  activeCategory: BlogCategory | "all";
  currentPage: number;
  totalPages: number;
};

function filterHref(category: BlogCategory | "all", page: number) {
  const params = new URLSearchParams();
  if (category !== "all") params.set("categoria", category);
  if (page > 1) params.set("page", String(page));
  const q = params.toString();
  return q ? `/blog?${q}` : "/blog";
}

export function BlogIndexFilters({
  posts,
  activeCategory,
  currentPage,
  totalPages,
}: BlogIndexFiltersProps) {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        <Link
          href="/blog"
          className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
            activeCategory === "all"
              ? "bg-[#1A4FBF] text-white"
              : "bg-white text-[#475569] ring-1 ring-slate-200 hover:ring-[#1A4FBF]"
          }`}
        >
          Todos
        </Link>
        {BLOG_CATEGORIES.map((cat) => (
          <Link
            key={cat}
            href={`/blog?categoria=${cat}`}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
              activeCategory === cat
                ? "bg-[#1A4FBF] text-white"
                : "bg-white text-[#475569] ring-1 ring-slate-200 hover:ring-[#1A4FBF]"
            }`}
          >
            {BLOG_CATEGORY_LABEL[cat]}
          </Link>
        ))}
      </div>

      {posts.length === 0 ? (
        <div className="mt-8 rounded-2xl bg-white p-12 text-center shadow-md ring-1 ring-slate-200">
          <p className="text-lg font-semibold text-[#1E293B]">No hay artículos en esta categoría.</p>
          <Link href="/blog" className="mt-4 inline-block text-sm font-semibold text-[#1A4FBF] hover:underline">
            Ver todos los artículos
          </Link>
        </div>
      ) : (
        <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-md ring-1 ring-slate-200 transition hover:shadow-xl hover:ring-[#1A4FBF]"
              >
                <div className="relative h-40 w-full bg-slate-100">
                  <Image
                    src={post.ogImage ?? BLOG_CATEGORY_IMAGES[post.category]}
                    alt=""
                    fill
                    className="object-cover transition group-hover:scale-[1.02]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1152px) 33vw, 368px"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-xs font-bold text-[#1A4FBF] shadow">
                    {BLOG_CATEGORY_LABEL[post.category]}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <time dateTime={post.date} className="text-xs font-medium text-[#06B6D4]">
                    {formatDate(post.date)}
                  </time>
                  <h2 className="mt-2 line-clamp-2 text-lg font-bold text-[#1E293B] group-hover:text-[#1A4FBF]">
                    {post.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm text-[#475569]">{post.description}</p>
                  <span className="mt-4 text-sm font-semibold text-[#1A4FBF]">
                    Leer más <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}

      {totalPages > 1 ? (
        <nav className="mt-10 flex items-center justify-center gap-2" aria-label="Paginación del blog">
          {currentPage > 1 ? (
            <Link
              href={filterHref(activeCategory, currentPage - 1)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] hover:bg-slate-50"
            >
              ← Anterior
            </Link>
          ) : null}
          <span className="px-3 text-sm text-[#64748B]">
            Página {currentPage} de {totalPages}
          </span>
          {currentPage < totalPages ? (
            <Link
              href={filterHref(activeCategory, currentPage + 1)}
              className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#1E293B] hover:bg-slate-50"
            >
              Siguiente →
            </Link>
          ) : null}
        </nav>
      ) : null}
    </>
  );
}

export function paginatePosts(posts: BlogPost[], page: number): {
  items: BlogPost[];
  totalPages: number;
  currentPage: number;
} {
  const totalPages = Math.max(1, Math.ceil(posts.length / BLOG_POSTS_PER_PAGE));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const start = (currentPage - 1) * BLOG_POSTS_PER_PAGE;
  return {
    items: posts.slice(start, start + BLOG_POSTS_PER_PAGE),
    totalPages,
    currentPage,
  };
}
