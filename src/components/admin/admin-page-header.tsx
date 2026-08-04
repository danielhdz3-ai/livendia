import type { ReactNode } from "react";
import { ADMIN_CARD_PAD } from "@/lib/admin-ui";

export function AdminPageHeader({
  title,
  subtitle,
  actions,
}: {
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-[#1E293B] sm:text-3xl">{title}</h1>
        {subtitle ? <p className="mt-1 text-sm text-[#64748B]">{subtitle}</p> : null}
      </div>
      {actions ? <div className="flex flex-wrap items-center gap-2">{actions}</div> : null}
    </div>
  );
}

export function AdminStatCard({
  label,
  value,
  hint,
}: {
  label: string;
  value: string | number;
  hint?: string;
}) {
  return (
    <div className={ADMIN_CARD_PAD}>
      <p className="text-[11px] font-semibold uppercase tracking-wide text-[#64748B]">{label}</p>
      <p className="mt-2 text-2xl font-bold text-[#1E293B]">{value}</p>
      {hint ? <p className="mt-1 text-xs text-[#94A3B8]">{hint}</p> : null}
    </div>
  );
}
