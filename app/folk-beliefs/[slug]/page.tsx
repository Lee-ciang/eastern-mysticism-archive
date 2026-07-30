import {
  getAllFolkBeliefs,
  getFolkBeliefBySlug,
} from "@/lib/content";
import type { Metadata } from "next";
import ArticleLayout from "@/components/archive/ArticleLayout";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllFolkBeliefs().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const params = await props.params;

  const entry = getFolkBeliefBySlug(params.slug);
  const canonicalPath = `/folk-beliefs/${entry.slug}`;

  return {
    title: `${entry.title} | Eastern Mysticism Archive`,
    description: entry.tradition,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: canonicalPath,
    },
  };
}

export default async function FolkBeliefPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const entry = getFolkBeliefBySlug(slug);

  return (
    <ArticleLayout
      title={entry.title}
      description={entry.tradition}
      categoryLabel="Folk Beliefs"
      categoryHref="/folk-beliefs"
      content={entry.content}
      relatedTopics={entry.related}
    />
  );
}
