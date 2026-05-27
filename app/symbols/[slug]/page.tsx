import { getSymbolBySlug } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import Link from "next/link";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const params = await props.params;

  const symbol = getSymbolBySlug(params.slug);

  return {
    title: `${symbol.title} | Eastern Mysticism Archive`,
    description: symbol.tradition,
  };
}

export default async function SymbolPage({ params }: PageProps) {
  const { slug } = await params;

  const symbol = getSymbolBySlug(slug);

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-neutral-100">
      <article className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {symbol.category}
        </p>

        <h1 className="text-5xl font-bold">
          {symbol.title}
        </h1>

        <p className="mt-4 text-neutral-400">
          {symbol.tradition}
        </p>

        <div className="prose prose-invert mt-12 max-w-none">
  <ReactMarkdown>
    {symbol.content}
  </ReactMarkdown>
</div>

{symbol.related.length > 0 && (
  <section className="mt-16 border-t border-neutral-800 pt-10">
    <h2 className="text-2xl font-semibold">
      Related Symbols
    </h2>

    <div className="mt-6 flex flex-wrap gap-4">
      {symbol.related.map((relatedSlug) => (
        <Link
          key={relatedSlug}
          href={`/symbols/${relatedSlug}`}
          className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-800"
        >
          {relatedSlug}
        </Link>
      ))}
    </div>
  </section>
)}

      </article>
    </main>
  );
}