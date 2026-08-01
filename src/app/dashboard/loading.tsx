import { PANEL_CARD, PANEL_PAGE_BG } from "@/lib/client-panel-ui";

function Pulse({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-slate-200/80 ${className ?? ""}`} />;
}

export default function DashboardLoading() {
  return (
    <div className={`flex min-h-screen ${PANEL_PAGE_BG}`}>
      <aside className="hidden w-64 shrink-0 bg-[#1A4FBF] lg:block">
        <div className="space-y-4 p-6">
          <Pulse className="h-8 w-32 bg-white/20" />
          <Pulse className="h-4 w-24 bg-white/15" />
          <div className="mt-8 space-y-2">
            {Array.from({ length: 6 }).map((_, i) => (
              <Pulse key={i} className="h-10 w-full bg-white/10" />
            ))}
          </div>
        </div>
      </aside>
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="hidden border-b border-slate-200 bg-white lg:block">
          <div className="px-6 py-4">
            <Pulse className="h-8 w-64" />
            <Pulse className="mt-2 h-4 w-48" />
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8">
          <div className={`${PANEL_CARD} mb-6 lg:hidden`}>
            <Pulse className="h-6 w-40" />
            <Pulse className="mt-4 h-10 w-full" />
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Pulse className="h-16" />
              <Pulse className="h-16" />
              <Pulse className="h-16" />
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Pulse key={i} className="h-28 rounded-2xl" />
            ))}
          </div>
          <div className={`${PANEL_CARD} mt-8`}>
            <Pulse className="h-6 w-48" />
            <Pulse className="mt-4 h-20 w-full" />
            <Pulse className="mt-3 h-20 w-full" />
          </div>
        </main>
      </div>
    </div>
  );
}
