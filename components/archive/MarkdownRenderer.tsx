import ReactMarkdown from "react-markdown";
import KnowledgeVisual from "./KnowledgeVisual";

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  const visualDirective =
    /^::knowledge-visual\[([a-z0-9-]+)\]\s*$/gm;
  const sections: Array<
    | { type: "markdown"; content: string }
    | { type: "visual"; id: string }
  > = [];
  let sectionStart = 0;
  let match: RegExpExecArray | null;

  while ((match = visualDirective.exec(content)) !== null) {
    const markdown = content.slice(sectionStart, match.index);

    if (markdown.trim()) {
      sections.push({ type: "markdown", content: markdown });
    }

    sections.push({ type: "visual", id: match[1] });
    sectionStart = visualDirective.lastIndex;
  }

  const remainingMarkdown = content.slice(sectionStart);

  if (remainingMarkdown.trim()) {
    sections.push({
      type: "markdown",
      content: remainingMarkdown,
    });
  }

  return (
    <div className="mt-16">
      {sections.map((section, index) =>
        section.type === "visual" ? (
          <KnowledgeVisual
            key={`visual-${section.id}-${index}`}
            id={section.id}
          />
        ) : (
          <ReactMarkdown
            key={`markdown-${index}`}
            components={{
              h1: ({ children }) => (
                <h1 className="mt-12 mb-6 text-4xl font-bold">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="mt-10 mb-4 text-3xl font-semibold">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="mt-8 mb-3 text-2xl font-semibold">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-6 leading-8 text-neutral-300">
                  {children}
                </p>
              ),
              ul: ({ children }) => (
                <ul className="mb-6 list-disc space-y-2 pl-6 text-neutral-300">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-6 list-decimal space-y-2 pl-6 text-neutral-300">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="leading-7">{children}</li>
              ),
              strong: ({ children }) => (
                <strong className="font-semibold text-neutral-100">
                  {children}
                </strong>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-neutral-100 underline decoration-neutral-600 underline-offset-4 transition hover:decoration-neutral-300"
                >
                  {children}
                </a>
              ),
            }}
          >
            {section.content}
          </ReactMarkdown>
        ),
      )}
    </div>
  );
}
