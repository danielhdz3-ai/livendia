import { PublicHeader } from "@/components/public-header";
import { SiteFooter } from "@/components/site-footer";
import type { ReactNode } from "react";

type LegalPageShellProps = {
  title: string;
  intro?: ReactNode;
  children: ReactNode;
};

export function LegalPageShell({ title, intro, children }: LegalPageShellProps) {
  return (
    <div className="flex min-h-screen flex-col bg-[#F1F5F9]">
      <PublicHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
          <h1 className="text-3xl font-bold text-[#1E293B]">{title}</h1>
          {intro ? <p className="mt-3 text-sm text-[#64748B]">{intro}</p> : null}
          <div className="prose-legal mt-8 space-y-8 text-sm leading-relaxed text-[#475569]">{children}</div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

export function LegalSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-[#1E293B]">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}
