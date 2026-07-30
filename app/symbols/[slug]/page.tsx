import type { Metadata } from "next";
import ArticleLayout from "@/components/archive/ArticleLayout";
import { getAllSymbols, getSymbolBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllSymbols().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const params = await props.params;
  const symbol = getSymbolBySlug(params.slug);
  const canonicalPath = `/symbols/${symbol.slug}`;

  return {
    title: `${symbol.title} | Eastern Mysticism Archive`,
    description: symbol.tradition,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: canonicalPath,
    },
  };
}

export default async function SymbolPage({ params }: PageProps) {
  const { slug } = await params;
  const symbol = getSymbolBySlug(slug);

  return (
    <ArticleLayout
      title={symbol.title}
      description={symbol.tradition}
      categoryLabel="Symbols"
      categoryHref="/symbols"
      content={symbol.content}
      relatedTopics={symbol.related}
      relatedTitle="Related Symbols"
      compactHeader
    />
  );
}
