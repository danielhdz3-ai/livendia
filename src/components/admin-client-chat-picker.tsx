"use client";

import { useRouter, useSearchParams } from "next/navigation";

export function AdminClientChatPicker({
  clientId,
  properties,
  activePropertyId,
}: {
  clientId: string;
  properties: { id: string; address: string }[];
  activePropertyId: string;
}) {
  const router = useRouter();
  const searchParams = useSearchParams();

  if (properties.length <= 1) return null;

  function onChange(nextId: string) {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    params.set("propertyId", nextId);
    router.push(`/admin/alquileres/${clientId}/chat?${params.toString()}`);
  }

  return (
    <div className="mb-6">
      <label className="mb-2 block text-sm font-semibold text-[#64748B]">Inmueble</label>
      <select
        value={activePropertyId}
        onChange={(e) => onChange(e.target.value)}
        className="w-full max-w-md rounded-lg border border-slate-300 px-4 py-2 text-sm focus:border-[#1A4FBF] focus:outline-none focus:ring-2 focus:ring-[#1A4FBF]/20"
      >
        {properties.map((p) => (
          <option key={p.id} value={p.id}>
            {p.address}
          </option>
        ))}
      </select>
    </div>
  );
}
