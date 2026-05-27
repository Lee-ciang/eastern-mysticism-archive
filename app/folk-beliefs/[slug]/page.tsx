import { getFolkBeliefBySlug } from "@/lib/content";
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

  const entry = getFolkBeliefBySlug(params.slug);

  return {
    title: `${entry.title} | Eastern Mysticism Archive`,
    description: entry.tradition,
  };
}

export default async function FolkBeliefPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const entry = getFolkBeliefBySlug(slug);

  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <nav className="mb-10 text-sm text-neutral-500">
          <Link href="/" className="hover:text-neutral-300">
            Home
          </Link>

          <span className="mx-2">/</span>

          <Link
            href="/folk-beliefs"
            className="hover:text-neutral-300"
          >
            Folk Beliefs
          </Link>

          <span className="mx-2">/</span>

          <span className="text-neutral-300">
            {entry.title}
          </span>
        </nav>

        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Folk Beliefs
        </p>

        <h1 className="mt-6 text-6xl font-semibold tracking-tight">
          {entry.title}
        </h1>

        <p className="mt-6 text-xl text-neutral-400">
          {entry.tradition}
        </p>

        <div className="mt-16">
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
    {entry.content}
  </ReactMarkdown>
</div>
      </section>
    </main>
  );
}