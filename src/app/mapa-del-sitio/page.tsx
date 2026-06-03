import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import { FooterDiscoverabilityLinks } from "@/components/footer-discoverability-links";
import { getAllPosts } from "@/lib/blog-content";
import { getPublicServices } from "@/lib/catalog";
import { getHomeCoverageCityFlatLinks } from "@/lib/home-coverage-cities";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Mapa del sitio | Livendia",
  description:
    "Índice de servicios de gestoría inmobiliaria, guías por ciudad, blog y páginas principales de Livendia.",
  alternates: { canonical: "https://livendia.com/mapa-del-sitio" },
};

export default async function MapaDelSitioPage() {
  const services = await getPublicServices();
  const posts = getAllPosts();
  const cityLinks = getHomeCoverageCityFlatLinks();

  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <section className="border-b border-slate-200 bg-white px-4 py-10 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <h1 className="text-3xl font-extrabold text-[#1E293B]">Mapa del sitio</h1>
            <p className="mt-3 text-[#475569]">
              Todas las secciones públicas de Livendia para orientarte y facilitar el acceso a contratos,
              compraventa y administración de alquileres.
            </p>
          </div>
        </section>

        <div className="mx-auto max-w-3xl space-y-10 px-4 py-10 sm:px-6">
          <section>
            <h2 className="text-lg font-bold text-[#1E293B]">Páginas principales</h2>
            <ul className="mt-3 list-inside list-disc space-y-1 text-sm text-[#475569]">
              <li>
                <Link href="/" className="font-semibold text-[#1A4FBF] hover:underline">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="font-semibold text-[#1A4FBF] hover:underline">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/precios" className="font-semibold text-[#1A4FBF] hover:underline">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="/para-propietarios" className="font-semibold text-[#1A4FBF] hover:underline">
                  Para propietarios
                </Link>
              </li>
              <li>
                <Link href="/blog" className="font-semibold text-[#1A4FBF] hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/equipo" className="font-semibold text-[#1A4FBF] hover:underline">
                  Equipo
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="font-semibold text-[#1A4FBF] hover:underline">
                  Contacto
                </Link>
              </li>
              <li>
                <Link href="/gestoria" className="font-semibold text-[#1A4FBF] hover:underline">
                  Gestoría por ciudad
                </Link>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E293B]">Madrid, Valencia, Barcelona y toda España</h2>
            <p className="mt-2 text-sm text-[#475569]">
              Mismo servicio online en las tres ciudades prioritarias y en cualquier provincia española.
            </p>
            <ul className="mt-3 space-y-1 text-sm">
              {cityLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="font-semibold text-[#1A4FBF] hover:underline">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E293B]">Servicios</h2>
            <ul className="mt-3 space-y-1 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/servicios/${s.slug}`}
                    className="font-semibold text-[#1A4FBF] hover:underline"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-[#1E293B]">Blog</h2>
            <ul className="mt-3 space-y-1 text-sm">
              {posts.map((p) => (
                <li key={p.slug}>
                  <Link href={`/blog/${p.slug}`} className="text-[#1A4FBF] hover:underline">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl bg-[#1E3A8A] p-6 text-white">
            <h2 className="text-lg font-bold">Guías locales y hubs</h2>
            <div className="mt-4 text-sm [&_a]:text-cyan-200 [&_a:hover]:text-white">
              <FooterDiscoverabilityLinks />
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
