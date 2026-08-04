export function AdminClientAvatar({ name }: { name: string }) {
  const initial = name.trim().charAt(0).toUpperCase() || "?";
  return (
    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#EFF6FF] text-sm font-bold text-[#1A4FBF] ring-1 ring-[#BFDBFE]">
      {initial}
    </span>
  );
}
