"use client";

import type { ReactNode } from "react";

/** Transición suave al entrar en rutas del panel cliente. */
export function PanelContentEnter({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`livendia-page-enter ${className}`.trim()}>{children}</div>;
}
