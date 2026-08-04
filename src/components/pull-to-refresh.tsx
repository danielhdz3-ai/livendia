"use client";

import type { ReactNode } from "react";
import { useCallback, useRef, useState } from "react";
import { Loader2 } from "lucide-react";

const THRESHOLD = 72;

export function PullToRefresh({
  children,
  onRefresh,
  disabled = false,
}: {
  children: ReactNode;
  onRefresh: () => Promise<void> | void;
  disabled?: boolean;
}) {
  const [pull, setPull] = useState(0);
  const [refreshing, setRefreshing] = useState(false);
  const startY = useRef(0);
  const pulling = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const reset = useCallback(() => {
    setPull(0);
    pulling.current = false;
  }, []);

  const triggerRefresh = useCallback(async () => {
    if (refreshing || disabled) return;
    setRefreshing(true);
    try {
      await onRefresh();
    } finally {
      setRefreshing(false);
      reset();
    }
  }, [disabled, onRefresh, refreshing, reset]);

  function onTouchStart(e: React.TouchEvent) {
    if (disabled || refreshing) return;
    const scrollTop = containerRef.current?.scrollTop ?? window.scrollY;
    if (scrollTop > 4) return;
    startY.current = e.touches[0].clientY;
    pulling.current = true;
  }

  function onTouchMove(e: React.TouchEvent) {
    if (!pulling.current || disabled || refreshing) return;
    const delta = e.touches[0].clientY - startY.current;
    if (delta <= 0) {
      setPull(0);
      return;
    }
    setPull(Math.min(delta * 0.45, 96));
  }

  function onTouchEnd() {
    if (!pulling.current) return;
    if (pull >= THRESHOLD) {
      void triggerRefresh();
    } else {
      reset();
    }
  }

  const progress = Math.min(pull / THRESHOLD, 1);

  return (
    <div
      ref={containerRef}
      className="relative"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 z-20 flex justify-center transition-opacity lg:hidden"
        style={{
          height: Math.max(pull, refreshing ? 48 : 0),
          opacity: pull > 8 || refreshing ? 1 : 0,
        }}
        aria-hidden
      >
        <div className="mt-2 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-semibold text-[#1A4FBF] shadow ring-1 ring-slate-200">
          {refreshing ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Actualizando…
            </>
          ) : (
            <>
              <span
                className="inline-block h-4 w-4 rounded-full border-2 border-[#1A4FBF] border-t-transparent"
                style={{ transform: `rotate(${progress * 360}deg)` }}
              />
              {progress >= 1 ? "Suelta para actualizar" : "Tira hacia abajo"}
            </>
          )}
        </div>
      </div>
      <div style={{ transform: pull > 0 ? `translateY(${pull}px)` : undefined, transition: pull === 0 ? "transform 0.2s ease" : undefined }}>
        {children}
      </div>
    </div>
  );
}
