"use client";

import { useRouter } from "next/navigation";
import { PullToRefresh } from "@/components/pull-to-refresh";

export function MisPedidosPullRefresh({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return <PullToRefresh onRefresh={() => router.refresh()}>{children}</PullToRefresh>;
}
