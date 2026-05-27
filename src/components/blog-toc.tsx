import type { BlogTocItem } from "@/lib/blog-types";

type BlogTocProps = {
  items: BlogTocItem[];
};

export function BlogToc({ items }: BlogTocProps) {
  if (items.length === 0) return null;

  return (
    <nav
      className="sticky top-24 hidden max-h-[calc(100vh-8rem)] overflow-y-auto rounded-xl border border-slate-200 bg-[#F8FAFC] p-5 lg:block"
      aria-label="Tabla de contenidos"
    >
      <p className="text-xs font-bold uppercase tracking-wider text-[#64748B]">En este artículo</p>
      <ul className="mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item.id} className={item.level === 3 ? "ml-3" : ""}>
            <a
              href={`#${item.id}`}
              className="text-[#475569] transition hover:text-[#1A4FBF]"
            >
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
