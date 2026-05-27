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
        <nav className="mb-8 text-sm text-neutral-500">
  <Link href="/" className="hover:text-neutral-300">
    Home
  </Link>

  <span className="mx-2">/</span>

  <Link
    href="/symbols"
    className="hover:text-neutral-300"
  >
    Symbols
  </Link>

  <span className="mx-2">/</span>

  <span className="text-neutral-300">
    {symbol.title}
  </span>
</nav>
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
  <ReactMarkdown
  components={{
    h1: ({ children }) => (
      <h1 className="mt-12 mb-6 text-4xl font-bold">
        {children}
      </h1>
    ),

    h2: ({ children }) => (
      <h2 className="mt-10 mb-4 text-2xl font-semibold">
        {children}
      </h2>
    ),

    h3: ({ children }) => (
      <h3 className="mt-8 mb-3 text-xl font-semibold">
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

    li: ({ children }) => (
      <li className="leading-7">
        {children}
      </li>
    ),
  }}
>
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