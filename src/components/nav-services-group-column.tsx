import Link from "next/link";

export function NavGroupColumn({
  title,
  subtitle,
  links,
  onNavigate,
}: {
  title: string;
  subtitle: string;
  links: readonly { href: string; label: string }[];
  onNavigate: () => void;
}) {
  return (
    <div className="min-w-0">
      <p className="text-[11px] font-bold uppercase tracking-wider text-[#1A4FBF]">{title}</p>
      <p className="mt-0.5 text-xs leading-snug text-slate-500">{subtitle}</p>
      <ul className="mt-3 space-y-0.5">
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              role="menuitem"
              className="block rounded-lg px-2 py-2 text-sm font-medium leading-snug text-[#1E293B] transition hover:bg-[#EFF6FF] hover:text-[#1A4FBF]"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
