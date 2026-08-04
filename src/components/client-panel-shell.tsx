import Link from "next/link";
import { PanelContentEnter } from "@/components/panel-content-enter";
import { PANEL_HERO_STRIP } from "@/lib/client-panel-ui";
import { ArrowLeft, Sparkles } from "lucide-react";

export function ClientPanelShell({
  title,
  subtitle,
  eyebrow = "Panel Livendia",
  backHref = "/dashboard",
  backLabel = "Volver al panel",
  wide = false,
  children,
}: {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  backHref?: string;
  backLabel?: string;
  wide?: boolean;
  children: React.ReactNode;
}) {
  const maxW = wide ? "max-w-7xl" : "max-w-4xl";

  return (
    <div className="min-h-full w-full">
      <section className={`${PANEL_HERO_STRIP} relative overflow-hidden`}>
        <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/15 blur-3xl" />
        <div className={`relative mx-auto ${maxW} px-4 py-6 sm:px-6 lg:py-8 xl:px-8`}>
          <div className="flex flex-wrap items-center justify-between gap-3 lg:hidden">
            <Link
              href={backHref}
              className="inline-flex min-h-10 items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/20 backdrop-blur-sm transition hover:bg-white/25"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden />
              {backLabel}
            </Link>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-blue-100 lg:mt-0">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {eyebrow}
          </div>
          <h1 className="mt-3 text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">{title}</h1>
          {subtitle ? <p className={`mt-2 max-w-2xl text-sm text-blue-100 lg:text-base`}>{subtitle}</p> : null}
        </div>
      </section>

      <PanelContentEnter>
        <main className={`mx-auto ${maxW} space-y-6 px-4 py-6 pb-24 sm:px-6 sm:py-8 lg:pb-8 xl:px-8`}>
          {children}
        </main>
      </PanelContentEnter>
    </div>
  );
}
