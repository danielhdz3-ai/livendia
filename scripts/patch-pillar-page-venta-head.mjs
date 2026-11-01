import fs from "node:fs";

const slugs = ["madrid", "barcelona", "valencia", "malaga", "sevilla", "bilbao", "granada", "zaragoza"];

for (const slug of slugs) {
  const path = `src/components/pillar-pages/vender-piso-sin-inmobiliaria-${slug}-page.tsx`;
  let c = fs.readFileSync(path, "utf8");
  if (!c.includes("getSeoVentaHeadLandingHref")) {
    c = c.replace(
      'import { VENDER_PISO_SIN_INMOBILIARIA_BASE } from "@/lib/vender-piso-sin-inmobiliaria-local-cities";',
      'import { getSeoVentaHeadLandingHref } from "@/lib/pillar-compraventa-canonical-links";\nimport { VENDER_PISO_SIN_INMOBILIARIA_BASE } from "@/lib/vender-piso-sin-inmobiliaria-local-cities";',
    );
  }
  if (!c.includes("ventaHeadHref")) {
    c = c.replace(
      /const pageUrl = `\$\{getSiteUrl\(\)\}\$\{PILLAR_\w+_PATH\}`;/,
      (m) => `${m}\n  const ventaHeadHref = getSeoVentaHeadLandingHref("${slug}");`,
    );
  }
  c = c.replace(
    /url: `\$\{base\}\/servicios\/servicio-completo-venta`,/,
    "url: `${base}${ventaHeadHref.startsWith(\"/\") ? ventaHeadHref : `/${ventaHeadHref}`}`,",
  );
  c = c.replace(
    '<PillarJsonLd pageUrl={pageUrl} priceEur={priceEur} faq={PILLAR_',
    '<PillarJsonLd pageUrl={pageUrl} priceEur={priceEur} offerLandingUrl={ventaHeadHref} faq={PILLAR_',
  );
  if (!c.includes("offerLandingUrl")) {
    c = c.replace(
      "function PillarJsonLd({\n  pageUrl,\n  priceEur,\n  faq,\n}: {\n  pageUrl: string;\n  priceEur: number;\n  faq:",
      "function PillarJsonLd({\n  pageUrl,\n  priceEur,\n  offerLandingUrl,\n  faq,\n}: {\n  pageUrl: string;\n  priceEur: number;\n  offerLandingUrl: string;\n  faq:",
    );
  }
  c = c.replace(
    /href="\/servicios\/servicio-completo-venta"\s*\n\s*className="inline-flex min-h-11 items-center rounded-full border border-white\/40 px-6 py-3 text-sm text-blue-100 hover:bg-white\/5"\s*\n\s*>\s*\n\s*Ver ficha del servicio/,
    'href={ventaHeadHref}\n                          className="inline-flex min-h-11 items-center rounded-full border border-white/40 px-6 py-3 text-sm text-blue-100 hover:bg-white/5"\n                        >\n                          Vender sin agencia — landing principal',
  );
  fs.writeFileSync(path, c);
  console.log("ok", slug);
}
