import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { CityHubServices } from "@/components/city-hub-services";
import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { getPostsByCitySlug } from "@/lib/blog-content";
import {
  CIUDADES_HUB_BASE,
  CITY_HUB_IMAGES,
  CITY_HUB_TAGLINES,
  cityHubHref,
  getCityHub,
  getCityHubMeta,
  isCityHubSlug,
} from "@/lib/ciudades-hub";
import { HOME_COVERAGE_CITY_SLUGS } from "@/lib/home-coverage-cities";
import { getSiteUrl } from "@/lib/site-url";
import type { Metadata } from "next";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return HOME_COVERAGE_CITY_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  if (!isCityHubSlug(slug)) return {};
  const city = getCityHub(slug);
  if (!city) return {};

  const meta = getCityHubMeta(city);
  const canonical = `${getSiteUrl()}${cityHubHref(slug)}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical },
    openGraph: {
      title: meta.title,
      description: meta.description,
      url: canonical,
      locale: "es_ES",
      type: "website",
    },
  };
}

export default async function CiudadHubPage({ params }: Props) {
  const { slug } = await params;
  if (!isCityHubSlug(slug)) notFound();

  const city = getCityHub(slug);
  if (!city) notFound();

  const posts = getPostsByCitySlug(slug);
  const pageUrl = `${getSiteUrl()}${cityHubHref(slug)}`;
  const meta = getCityHubMeta(city);
  const image = CITY_HUB_IMAGES[city.slug];

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Inicio", item: getSiteUrl() },
      { "@type": "ListItem", position: 2, name: "Ciudades", item: `${getSiteUrl()}${CIUDADES_HUB_BASE}` },
      { "@type": "ListItem", position: 3, name: city.name, item: pageUrl },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col bg-[#F8FAFC]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <PublicHeader />
      <main className="flex-1">
        <section className="relative border-b border-slate-200 bg-[#1E293B]">
          <div className="relative mx-auto max-w-6xl">
            <div className="relative aspect-[21/9] min-h-[220px] max-h-[360px] w-full sm:aspect-[3/1]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                priority
                className="object-cover opacity-80"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1E293B]/95 via-[#1E293B]/75 to-[#1E293B]/40" />
            </div>
            <div className="absolute inset-0 flex items-end">
              <div className="mx-auto w-full max-w-4xl px-4 pb-8 pt-6 sm:px-6 sm:pb-10">
                <nav aria-label="Breadcrumb" className="text-sm text-blue-200">
                  <ol className="flex flex-wrap items-center gap-1">
                    <li>
                      <Link href="/" className="hover:text-white hover:underline">
                        Inicio
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li>
                      <Link href={CIUDADES_HUB_BASE} className="hover:text-white hover:underline">
                        Ciudades
                      </Link>
                    </li>
                    <li aria-hidden>/</li>
                    <li className="font-semibold text-white">{city.name}</li>
                  </ol>
                </nav>
                <h1 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
                  Gestoría inmobiliaria en {city.name}
                </h1>
                <p className="mt-3 max-w-2xl text-lg text-blue-100">{CITY_HUB_TAGLINES[city.slug]}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200 bg-white px-4 py-8 sm:px-6">
          <div className="mx-auto max-w-4xl">
            <p className="text-[#64748b]">{meta.description}</p>
          </div>
        </section>

        <section className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <CityHubServices city={city} />

          {posts.length > 0 ? (
            <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm ring-1 ring-slate-100">
              <h2 className="text-lg font-bold text-[#1E293B]">Guías del blog en {city.name}</h2>
              <ul className="mt-4 space-y-2 text-sm">
                {posts.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`} className="font-semibold text-[#1A4FBF] hover:underline">
                      {post.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          <p className="mt-10 text-center text-sm text-[#64748b]">
            <Link href={CIUDADES_HUB_BASE} className="font-semibold text-[#1A4FBF] hover:underline">
              ← Ver todas las ciudades
            </Link>
            {" · "}
            <Link href="/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
              Catálogo nacional
            </Link>
          </p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
