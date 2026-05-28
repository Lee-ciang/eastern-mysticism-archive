import type { Metadata } from "next";
import ArticleLayout from "@/components/archive/ArticleLayout";
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
    <ArticleLayout
      title={entry.title}
      description={entry.tradition}
      categoryLabel={entry.category}
      categoryHref="/feng-shui"
      content={entry.content}
      relatedTopics={entry.related}
      compactHeader
      showBreadcrumbs={false}
    />
  );
}
