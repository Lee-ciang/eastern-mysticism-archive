import Link from "next/link";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";
import { getFengShuiEntryBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const params = await props.params;

  const entry = getFengShuiEntryBySlug(params.slug);

  return {
    title: `${entry.title} | Eastern Mysticism Archive`,
    description: entry.tradition,
  };
}

export default async function FengShuiEntryPage({ params }: PageProps) {
  const { slug } = await params;

  const entry = getFengShuiEntryBySlug(slug);

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-neutral-100">
      <article className="mx-auto max-w-3xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {entry.category}
        </p>

        <h1 className="text-5xl font-bold">{entry.title}</h1>

        <p className="mt-4 text-neutral-400">{entry.tradition}</p>

        <div className="prose prose-invert mt-12 max-w-none">
          <ReactMarkdown>{entry.content}</ReactMarkdown>
        </div>

        {entry.related.length > 0 && (
          <section className="mt-16 border-t border-neutral-800 pt-10">
            <h2 className="text-2xl font-semibold">Related Topics</h2>

            <div className="mt-6 flex flex-wrap gap-4">
              {entry.related.map((relatedSlug) => (
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