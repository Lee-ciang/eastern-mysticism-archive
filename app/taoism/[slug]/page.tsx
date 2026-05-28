import type { Metadata } from "next";
import ArticleLayout from "@/components/archive/ArticleLayout";
import {
  getAllTaoismEntries,
  getTaoismEntryBySlug,
} from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllTaoismEntries().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const params = await props.params;
  const entry = getTaoismEntryBySlug(params.slug);

  return {
    title: `${entry.title} | Eastern Mysticism Archive`,
    description: entry.tradition,
  };
}

export default async function TaoismEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getTaoismEntryBySlug(slug);

  return (
    <ArticleLayout
      title={entry.title}
      description={entry.tradition}
      categoryLabel="Taoism"
      categoryHref="/taoism"
      content={entry.content}
      relatedTopics={entry.related}
    />
  );
}
