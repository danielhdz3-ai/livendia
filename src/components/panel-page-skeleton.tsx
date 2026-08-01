import { PANEL_HERO_STRIP, PANEL_PAGE_BG } from "@/lib/client-panel-ui";

function Pulse({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-slate-200/80 ${className ?? ""}`} />;
}

function HeroPulse() {
  return (
    <div className={`${PANEL_HERO_STRIP}`}>
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Pulse className="h-4 w-28 bg-white/20" />
        <Pulse className="mt-4 h-9 w-64 max-w-full bg-white/25" />
        <Pulse className="mt-3 h-4 w-80 max-w-full bg-white/15" />
      </div>
    </div>
  );
}

export function PanelPageSkeleton({ wide = false }: { wide?: boolean }) {
  const maxW = wide ? "max-w-7xl" : "max-w-4xl";

  return (
    <div className={PANEL_PAGE_BG}>
      <HeroPulse />
      <div className={`mx-auto ${maxW} space-y-4 px-4 py-8 sm:px-6`}>
        <Pulse className="h-40 w-full rounded-2xl" />
        <Pulse className="h-32 w-full rounded-2xl" />
        <Pulse className="h-24 w-full rounded-2xl" />
      </div>
    </div>
  );
}

export default PanelPageSkeleton;
