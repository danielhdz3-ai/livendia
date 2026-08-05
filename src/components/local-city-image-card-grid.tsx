import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { getLocalCityCardImage } from "@/lib/local-city-card-images";

export type LocalCityImageCardItem = {
  slug: string;
  city: string;
  region?: string;
  href: string;
  linkLabel?: string;
};

type LocalCityImageCardGridProps = {
  cities: readonly LocalCityImageCardItem[];
  title?: string;
  description?: ReactNode;
  className?: string;
  listClassName?: string;
};

export function LocalCityImageCardGrid({
  cities,
  title,
  description,
  className = "",
  listClassName = "mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
}: LocalCityImageCardGridProps) {
  if (cities.length === 0) return null;

  return (
    <div className={className}>
      {title ? <h2 className="text-2xl font-bold text-[#1E293B]">{title}</h2> : null}
      {description ? <div className="mt-2 max-w-3xl text-[#64748b]">{description}</div> : null}
      <ul className={listClassName}>
        {cities.map((c) => (
          <li key={c.slug}>
            <Link
              href={c.href}
              className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:border-[#1A4FBF] hover:shadow-lg"
            >
              <div className="relative h-32 overflow-hidden bg-slate-100">
                <Image
                  src={getLocalCityCardImage(c.slug)}
                  alt={`Servicios inmobiliarios en ${c.city}`}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F2A6B]/60 via-[#0F2A6B]/15 to-transparent" />
                <span className="absolute bottom-3 left-4 text-lg font-bold text-white drop-shadow-sm">
                  {c.city}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                {c.region ? <span className="text-sm text-[#64748b]">{c.region}</span> : null}
                <span className="mt-3 inline-flex text-sm font-semibold text-[#1A4FBF]">
                  {c.linkLabel ?? "Ver landing →"}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
