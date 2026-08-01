"use client";

import { useState, type ReactNode } from "react";

type TabItem = {
  id: string;
  label: string;
  content: ReactNode;
};

export function OrderDetailMobileTabs({
  tabs,
  defaultTab = "documentos",
}: {
  tabs: TabItem[];
  defaultTab?: string;
}) {
  const [active, setActive] = useState(defaultTab);
  const current = tabs.find((t) => t.id === active) ?? tabs[0];

  return (
    <div className="lg:hidden">
      <div
        className="flex gap-1 overflow-x-auto rounded-xl bg-slate-100/90 p-1 ring-1 ring-slate-200"
        role="tablist"
        aria-label="Secciones del expediente"
      >
        {tabs.map((tab) => {
          const selected = tab.id === active;
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => setActive(tab.id)}
              className={`min-h-10 shrink-0 rounded-lg px-3 py-2 text-xs font-bold transition sm:px-4 sm:text-sm ${
                selected
                  ? "bg-white text-[#1A4FBF] shadow-sm ring-1 ring-slate-200"
                  : "text-[#64748B] hover:text-[#1E293B]"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-4 space-y-4" role="tabpanel">
        {current?.content}
      </div>
    </div>
  );
}
