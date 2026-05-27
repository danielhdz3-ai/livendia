import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import type { Components } from "react-markdown";

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
};

type BlogMarkdownProps = {
  content: string;
};

export function BlogMarkdown({ content }: BlogMarkdownProps) {
  return (
    <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeSlug]} components={components}>
      {content}
    </ReactMarkdown>
  );
}
