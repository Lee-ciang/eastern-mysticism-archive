import Breadcrumbs from "./Breadcrumbs";
import MarkdownRenderer from "./MarkdownRenderer";
import RelatedTopics from "./RelatedTopics";

type ArticleLayoutProps = {
  title: string;
  description: string;
  categoryLabel: string;
  categoryHref: string;
  content: string;
  relatedTopics?: string[];
  relatedTitle?: string;
  compactHeader?: boolean;
  showBreadcrumbs?: boolean;
};

export default function ArticleLayout({
  title,
  description,
  categoryLabel,
  categoryHref,
  content,
  relatedTopics = [],
  relatedTitle,
  compactHeader = false,
  showBreadcrumbs = true,
}: ArticleLayoutProps) {
  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <article
        className={
          compactHeader
            ? "mx-auto max-w-3xl px-6 py-20"
            : "mx-auto max-w-4xl px-6 py-24"
        }
      >
        {showBreadcrumbs && (
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: categoryLabel, href: categoryHref },
              { label: title },
            ]}
          />
        )}

        <p
          className={
            compactHeader
              ? "mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500"
              : "text-sm uppercase tracking-[0.3em] text-neutral-500"
          }
        >
          {categoryLabel}
        </p>

        <h1
          className={
            compactHeader
              ? "text-5xl font-bold"
              : "mt-6 text-6xl font-semibold tracking-tight"
          }
        >
          {title}
        </h1>

        <p
          className={
            compactHeader
              ? "mt-4 text-neutral-400"
              : "mt-6 text-xl text-neutral-400"
          }
        >
          {description}
        </p>

        <MarkdownRenderer content={content} />

        <RelatedTopics
          relatedTopics={relatedTopics}
          title={relatedTitle}
        />
      </article>
    </main>
  );
}
