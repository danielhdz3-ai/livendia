import { ClientMobileTopBar } from "@/components/client-mobile-top-bar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ClientMobileTopBar />
      {children}
    </>
  );
}
