import { ClientMobileTopBar } from "@/components/client-mobile-top-bar";

export default function MisPedidosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientMobileTopBar />
      {children}
    </>
  );
}
