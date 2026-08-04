import { redirect } from "next/navigation";

export default async function AdminClienteDetailRedirect({
  params,
}: {
  params: Promise<{ clientId: string }>;
}) {
  const { clientId } = await params;
  redirect(`/admin/expedientes/cliente/${clientId}`);
}
