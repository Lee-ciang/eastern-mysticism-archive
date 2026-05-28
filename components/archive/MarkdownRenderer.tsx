import ReactMarkdown from "react-markdown";

type MarkdownRendererProps = {
  content: string;
};

export default function MarkdownRenderer({
  content,
}: MarkdownRendererProps) {
  return (
    <div className="mt-16">
      <ReactMarkdown
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
            <li className="leading-7">
              {children}
            </li>
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
        {content}
      </ReactMarkdown>
    </div>
  );
}
