import { getSymbolBySlug } from "@/lib/content";
import ReactMarkdown from "react-markdown";
import type { Metadata } from "next";

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
      </article>
    </main>
  );
}