import type { Metadata } from "next";
import ArticleLayout from "@/components/archive/ArticleLayout";
import { getAllRituals, getRitualBySlug } from "@/lib/content";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllRituals().map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata(
  props: PageProps
): Promise<Metadata> {
  const params = await props.params;
  const ritual = getRitualBySlug(params.slug);
  const canonicalPath = `/rituals/${ritual.slug}`;

  return {
    title: `${ritual.title} | Eastern Mysticism Archive`,
    description: ritual.tradition,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      url: canonicalPath,
    },
  };
}

export default async function RitualPage({ params }: PageProps) {
  const { slug } = await params;
  const ritual = getRitualBySlug(slug);

  return (
    <ArticleLayout
      title={ritual.title}
      description={ritual.tradition}
      categoryLabel="Rituals"
      categoryHref="/rituals"
      content={ritual.content}
      relatedTopics={ritual.related}
    />
  );
}
