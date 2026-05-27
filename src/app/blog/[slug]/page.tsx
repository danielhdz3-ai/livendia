import Link from "next/link";
import Image from "next/image";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { BlogStructuredData } from "@/components/blog-structured-data";
import { BlogMarkdown } from "@/components/blog-markdown";
import { BlogToc } from "@/components/blog-toc";
import { BlogCategoryCta } from "@/components/blog-category-cta";
import { BlogPostNav } from "@/components/blog-post-nav";
import {
  BLOG_CATEGORY_IMAGES,
  BLOG_CATEGORY_LABEL,
  BLOG_DEFAULT_OG_IMAGE,
  extractTocHeadings,
  getAdjacentPosts,
  getAllPostSlugs,
  getPostBySlug,
} from "@/lib/blog";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

function formatDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Artículo" };

  const base = getSiteUrl().replace(/\/$/, "");
  const imagePath = post.ogImage ?? BLOG_DEFAULT_OG_IMAGE;
  const imageUrl = `${base}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;

  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `${base}/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.modified,
      locale: "es_ES",
      images: [{ url: imageUrl }],
    },
  };
}

export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const toc = extractTocHeadings(post.content);
  const { prev, next } = getAdjacentPosts(slug);
  const cover = post.ogImage ?? BLOG_CATEGORY_IMAGES[post.category];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <BlogStructuredData post={post} />
      <PublicHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:py-14">
          <Link href="/blog" className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
            ← Volver al blog
          </Link>

          <header className="mt-6 border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-[#EFF3F9] px-3 py-1 font-semibold text-[#1A4FBF]">
                {BLOG_CATEGORY_LABEL[post.category]}
              </span>
              <time dateTime={post.date} className="font-medium text-[#06B6D4]">
                {formatDate(post.date)}
              </time>
              {post.modified !== post.date ? (
                <span className="text-[#64748B]">· Actualizado {formatDate(post.modified)}</span>
              ) : null}
              {post.city ? (
                <span className="text-[#64748B]">· {post.city}</span>
              ) : null}
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl lg:text-[2.5rem]">
              {post.title}
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-relaxed text-[#475569]">{post.description}</p>
            <div className="relative mt-8 aspect-[21/9] max-w-4xl overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
              <Image src={cover} alt="" fill className="object-cover" priority sizes="(max-width: 896px) 100vw, 896px" />
            </div>
          </header>

          <div className="mt-10 grid gap-10 lg:grid-cols-[minmax(0,1fr)_240px]">
            <div className="min-w-0 max-w-none">
              {toc.length > 0 ? (
                <nav
                  className="mb-8 rounded-xl border border-slate-200 bg-[#F8FAFC] p-4 lg:hidden"
                  aria-label="Contenido del artículo"
                >
                  <p className="text-xs font-bold uppercase text-[#64748B]">En este artículo</p>
                  <ul className="mt-2 space-y-1 text-sm">
                    {toc.map((item) => (
                      <li key={item.id} className={item.level === 3 ? "ml-3" : ""}>
                        <a href={`#${item.id}`} className="text-[#1A4FBF] hover:underline">
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              ) : null}
              <BlogMarkdown content={post.content} />
              <BlogCategoryCta category={post.category} />
              <BlogPostNav prev={prev} next={next} />
            </div>
            <aside className="hidden lg:block">
              <BlogToc items={toc} />
            </aside>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
