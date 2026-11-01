import fs from "node:fs";

const slugs = ["madrid", "barcelona", "valencia", "malaga", "sevilla", "bilbao", "granada", "zaragoza"];

for (const slug of slugs) {
  const path = `src/components/pillar-pages/vender-piso-sin-inmobiliaria-${slug}-page.tsx`;
  let c = fs.readFileSync(path, "utf8");
  c = c.replace(
    /function PillarJsonLd\(\{\s*pageUrl,\s*priceEur,\s*faq,/,
    "function PillarJsonLd({ pageUrl, priceEur, offerLandingUrl, faq,",
  );
  c = c.replace(
    /pageUrl: string;\s*priceEur: number;\s*faq:/,
    "pageUrl: string; priceEur: number; offerLandingUrl: string; faq:",
  );
  c = c.replace(
    /url: `\$\{base\}\$\{ventaHeadHref[^`]+\}`,/,
    'url: `${base}${offerLandingUrl.startsWith("/") ? offerLandingUrl : `/${offerLandingUrl}`}`,',
  );
  if (c.includes("ventaHeadHref.startsWith")) {
    console.error("still broken", slug);
    process.exitCode = 1;
  }
  fs.writeFileSync(path, c);
  console.log("fixed", slug);
}
