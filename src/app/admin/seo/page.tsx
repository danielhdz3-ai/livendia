import Link from "next/link";
import { AdminPageHeader } from "@/components/admin/admin-page-header";
import { AdminSeoDashboard } from "@/components/admin/admin-seo-dashboard";
import { ADMIN_BTN_GHOST } from "@/lib/admin-ui";
import { requireAdmin } from "@/lib/admin-auth";
import { buildAdminSeoLandingIndex } from "@/lib/admin-seo-landing-index";
import { getSiteUrl } from "@/lib/site-url";

export const metadata = { title: { absolute: "SEO — Landing pages — Livendia Admin" } };

export default async function AdminSeoPage() {
  await requireAdmin("/admin/seo");
  const index = buildAdminSeoLandingIndex();
  const siteOrigin = getSiteUrl().replace(/\/$/, "");

  return (
    <>
      <AdminPageHeader
        title="SEO — Landing pages"
        subtitle="Landings locales por servicio y ciudad"
        actions={
          <>
            <Link href="/sitemap.xml" target="_blank" rel="noopener noreferrer" className={ADMIN_BTN_GHOST}>
              Mapa del sitio
            </Link>
            <Link href="/servicios" target="_blank" rel="noopener noreferrer" className={ADMIN_BTN_GHOST}>
              Hub servicios
            </Link>
          </>
        }
      />
      <AdminSeoDashboard index={index} siteOrigin={siteOrigin} />
    </>
  );
}
