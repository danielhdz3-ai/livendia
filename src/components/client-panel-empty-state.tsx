import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { PANEL_CARD, PANEL_CTA, PANEL_MUTED } from "@/lib/client-panel-ui";

export function ClientPanelEmptyState({
  icon: Icon,
  title,
  description,
  actionHref,
  actionLabel,
  secondaryHref,
  secondaryLabel,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
  actionHref?: string;
  actionLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <div
      className={`${PANEL_CARD} relative overflow-hidden border-2 border-dashed border-[#1A4FBF]/15 bg-gradient-to-br from-[#EFF6FF]/60 to-white text-center`}
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#1A4FBF]/5 blur-2xl" />
      <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1A4FBF] to-[#2563EB] text-white shadow-lg shadow-blue-500/25">
        <Icon className="h-8 w-8" aria-hidden />
      </div>
      <h3 className="relative mt-5 text-lg font-extrabold text-[#1E293B]">{title}</h3>
      <p className={`relative mx-auto mt-2 max-w-md ${PANEL_MUTED}`}>{description}</p>
      {actionHref && actionLabel ? (
        <Link href={actionHref} className={`relative mt-6 ${PANEL_CTA}`}>
          {actionLabel}
        </Link>
      ) : null}
      {secondaryHref && secondaryLabel ? (
        <Link
          href={secondaryHref}
          className="relative mt-3 inline-block text-sm font-semibold text-[#1A4FBF] hover:underline"
        >
          {secondaryLabel}
        </Link>
      ) : null}
    </div>
  );
}
