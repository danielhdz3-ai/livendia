import Link from "next/link";
import type { ServiceLandingResourceLink } from "@/lib/service-landing-module-profile";
import { BookOpen } from "lucide-react";

export function ServiceLandingResourceLinksSection({
  links,
}: {
  links: readonly ServiceLandingResourceLink[];
}) {
  if (links.length === 0) return null;

  return (
    <section className="border-b border-slate-200 bg-[#F8FAFC] px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center gap-2 text-[#1A4FBF]">
          <BookOpen className="h-5 w-5" aria-hidden />
          <p className="text-sm font-bold uppercase tracking-wide">Recursos</p>
        </div>
        <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-sm">
          {links.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="font-semibold text-[#1A4FBF] hover:underline">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
