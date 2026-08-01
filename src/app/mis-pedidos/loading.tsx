import { PANEL_CARD, PANEL_PAGE_BG } from "@/lib/client-panel-ui";

function Pulse({ className }: { className?: string }) {
  return <div className={`animate-pulse rounded-xl bg-slate-200/80 ${className ?? ""}`} />;
}

export default function MisPedidosLoading() {
  return (
    <div className={PANEL_PAGE_BG}>
      <div className="h-64 bg-gradient-to-br from-[#1A4FBF] to-[#2563EB]" />
      <div className="mx-auto max-w-7xl space-y-4 px-4 py-8 sm:px-6">
        <Pulse className="h-8 w-48" />
        <Pulse className="h-32 w-full rounded-2xl" />
        <Pulse className="h-32 w-full rounded-2xl" />
      </div>
    </div>
  );
}
