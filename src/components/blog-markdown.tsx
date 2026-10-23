import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import type { Components } from "react-markdown";
import { BlogContractPromoBanner } from "@/components/blog-contract-promo-banner";
import { GestorContactCta } from "@/components/gestor-contact-cta";
import { BLOG_INLINE_MARKER_RE, getBlogContractPromo } from "@/lib/blog-contract-promos";

const components: Components = {
  h2: ({ children, id }) => (
    <h2 id={id} className="scroll-mt-24 text-2xl font-bold text-[#1E293B]">
      {children}
    </h2>
  ),
  h3: ({ children, id }) => (
    <h3 id={id} className="scroll-mt-24 text-xl font-semibold text-[#1E293B]">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mt-4 leading-relaxed text-[#334155]">{children}</p>,
  ul: ({ children }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-[#334155]">{children}</ul>,
  ol: ({ children }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-[#334155]">{children}</ol>,
  li: ({ children }) => <li className="leading-relaxed">{children}</li>,
  strong: ({ children }) => <strong className="font-semibold text-[#1E293B]">{children}</strong>,
  a: ({ href, children }) => (
    <a href={href} className="font-medium text-[#1A4FBF] underline hover:text-[#2563EB]">
      {children}
    </a>
  ),
  blockquote: ({ children }) => (
    <blockquote className="mt-4 border-l-4 border-[#06B6D4] bg-[#F8FAFC] py-2 pl-4 text-[#475569]">
      {children}
    </blockquote>
  ),
  table: ({ children }) => (
    <div className="my-6 overflow-x-auto rounded-xl ring-1 ring-slate-200">
      <table className="min-w-full border-collapse text-sm text-[#334155]">{children}</table>
    </div>
  ),
  thead: ({ children }) => <thead className="bg-[#EFF3F9] text-left text-[#1E293B]">{children}</thead>,
  th: ({ children }) => (
    <th className="border-b border-slate-200 px-4 py-3 font-semibold">{children}</th>
  ),
  td: ({ children }) => <td className="border-b border-slate-100 px-4 py-3 align-top">{children}</td>,
};

/** Inserta banner de gestor experto con teléfono dentro del artículo. */
export const BLOG_GESTOR_BANNER_MARKER = "[[GESTOR_BANNER]]";

type BlogMarkdownProps = {
  content: string;
  city?: string;
  serviceLabel?: string;
};

type Segment =
  | { type: "markdown"; text: string }
  | { type: "gestor" }
  | { type: "contrato"; variant: string };

function parseBlogSegments(content: string): Segment[] {
  const segments: Segment[] = [];
  let lastIndex = 0;
  const re = new RegExp(BLOG_INLINE_MARKER_RE.source, "g");
  let match: RegExpExecArray | null;

  while ((match = re.exec(content)) !== null) {
    const before = content.slice(lastIndex, match.index);
    if (before.trim()) segments.push({ type: "markdown", text: before });

    const full = match[1];
    if (full === "GESTOR_BANNER") {
      segments.push({ type: "gestor" });
    } else {
      segments.push({ type: "contrato", variant: match[2] });
    }
    lastIndex = match.index + match[0].length;
  }

  const tail = content.slice(lastIndex);
  if (tail.trim()) segments.push({ type: "markdown", text: tail });

  return segments.length > 0 ? segments : [{ type: "markdown", text: content }];
}

export function BlogMarkdown({ content, city, serviceLabel }: BlogMarkdownProps) {
  const segments = parseBlogSegments(content);
  let gestorIndex = 0;
  let contratoIndex = 0;

  return (
    <>
      {segments.map((segment, index) => {
        if (segment.type === "gestor") {
          gestorIndex += 1;
          return (
            <GestorContactCta
              key={`gestor-${index}`}
              placement={`blog_inline_${gestorIndex}`}
              className="my-10 rounded-2xl"
              city={city}
              serviceLabel={serviceLabel}
              headline="Llama a tu gestor experto"
            />
          );
        }

        if (segment.type === "contrato") {
          contratoIndex += 1;
          const promo = getBlogContractPromo(segment.variant);
          if (!promo) return null;
          return (
            <BlogContractPromoBanner
              key={`contrato-${index}-${segment.variant}`}
              promo={promo}
              placement={`blog_inline_${contratoIndex}`}
            />
          );
        }

        return (
          <ReactMarkdown
            key={`md-${index}`}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeSlug]}
            components={components}
          >
            {segment.text.trimStart()}
          </ReactMarkdown>
        );
      })}
    </>
  );
}
