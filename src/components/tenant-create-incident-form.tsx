"use client";

import { CreateIncidentForm } from "@/app/dashboard/rental/incidencias/create-incident-form";
import { useRouter } from "next/navigation";

export function TenantCreateIncidentForm({ propertyId }: { propertyId: string }) {
  const router = useRouter();
  return (
    <CreateIncidentForm
      propertyId={propertyId}
      onSuccess={() => router.refresh()}
    />
  );
}
