import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { PANEL_MUTED, PANEL_PAGE_BG } from "@/lib/client-panel-ui";

export function ClientPanelShell({
  title,
  subtitle,
  backHref = "/dashboard",
  backLabel = "Volver al panel",
  children,
}: {
  title: string;
  subtitle?: string;
  backHref?: string;
  backLabel?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={PANEL_PAGE_BG}>
      <header className="border-b border-white/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto max-w-4xl px-4 py-4 sm:px-6 sm:py-6">
          <Link
            href={backHref}
            className="inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-[#1A4FBF] transition hover:text-[#06B6D4]"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden />
            {backLabel}
          </Link>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-[#1E293B] sm:mt-4 sm:text-3xl">
            {title}
          </h1>
          {subtitle ? <p className={`mt-1 ${PANEL_MUTED}`}>{subtitle}</p> : null}
        </div>
      </header>
      <main className="mx-auto max-w-4xl px-4 py-6 pb-24 sm:px-6 sm:py-8 lg:pb-8">{children}</main>
    </div>
  );
}
