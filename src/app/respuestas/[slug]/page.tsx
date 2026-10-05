import Link from "next/link";
import Image from "next/image";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { BlogMarkdown } from "@/components/blog-markdown";
import { BlogCategoryCta } from "@/components/blog-category-cta";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { PaaStructuredData } from "@/components/paa-structured-data";
import { BLOG_CATEGORY_IMAGES, BLOG_CATEGORY_LABEL } from "@/lib/blog-types";
import { getPaaRegistryBySlug } from "@/lib/paa-registry";
import { getAllRespuestaSlugs, getRespuestaBySlug } from "@/lib/paa-content";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllRespuestaSlugs().map((slug) => ({ slug }));
}

function formatDate(d: string) {
  return new Date(d + "T12:00:00").toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const registry = getPaaRegistryBySlug(slug);
  if (registry?.blogSlug) {
    return { alternates: { canonical: `${getSiteUrl()}/blog/${registry.blogSlug}` } };
  }
  const article = getRespuestaBySlug(slug);
  if (!article) return { title: "Respuesta" };

  const base = getSiteUrl().replace(/\/$/, "");
  const imagePath = article.ogImage ?? BLOG_CATEGORY_IMAGES[article.category];
  const imageUrl = `${base}${imagePath.startsWith("/") ? imagePath : `/${imagePath}`}`;

  return {
    title: `${article.title} | Livendia`,
    description: article.description,
    alternates: { canonical: `${base}/respuestas/${article.slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.date,
      modifiedTime: article.modified,
      locale: "es_ES",
      images: [{ url: imageUrl }],
    },
  };
}

export default async function RespuestaPaaPage({ params }: Props) {
  const { slug } = await params;
  const registry = getPaaRegistryBySlug(slug);
  if (registry?.blogSlug) {
    redirect(`/blog/${registry.blogSlug}`);
  }

  const article = getRespuestaBySlug(slug);
  if (!article) notFound();

  const cover = article.ogImage ?? BLOG_CATEGORY_IMAGES[article.category];

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <PaaStructuredData article={article} />
      <PublicHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-14">
          <Link href="/respuestas" className="text-sm font-semibold text-[#1A4FBF] hover:text-[#06B6D4]">
            ← Todas las respuestas
          </Link>

          <header className="mt-6 border-b border-slate-200 pb-8">
            <div className="flex flex-wrap items-center gap-3 text-sm">
              <span className="rounded-full bg-[#EFF3F9] px-3 py-1 font-semibold text-[#1A4FBF]">
                {BLOG_CATEGORY_LABEL[article.category]}
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
                PAA · respuesta ampliada
              </span>
              <time dateTime={article.date} className="font-medium text-[#06B6D4]">
                {formatDate(article.date)}
              </time>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-[#1E293B] sm:text-4xl">
              {article.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-[#475569]">{article.description}</p>
            <div className="relative mt-8 aspect-[2/1] overflow-hidden rounded-2xl bg-slate-100 ring-1 ring-slate-200">
              <Image
                src={cover}
                alt=""
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 672px"
              />
            </div>
          </header>

          <div className="prose prose-slate mt-10 max-w-none">
            <BlogMarkdown content={article.content} />
          </div>

          <GestorContactCta placement="blog_post" className="mt-12 rounded-2xl" />
          <BlogCategoryCta category={article.category} />
        </article>
      </main>
      <SiteFooter />
    </div>
  );
}
