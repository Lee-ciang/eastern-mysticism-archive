import Link from "next/link";
import {
  getEntryHrefBySlug,
  getEntryTitleBySlug,
} from "@/lib/content";

type RelatedTopic =
  | string
  | {
      slug?: string;
      title: string;
      href?: string;
    };

type RelatedTopicsProps = {
  relatedTopics?: RelatedTopic[];
  title?: string;
};

export default function RelatedTopics({
  relatedTopics = [],
  title = "Related Topics",
}: RelatedTopicsProps) {
  if (relatedTopics.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 border-t border-neutral-800 pt-10">
      <h2 className="text-2xl font-semibold">{title}</h2>

      <div className="mt-6 flex flex-wrap gap-4">
        {relatedTopics.map((topic) => {
          const slug =
            typeof topic === "string" ? topic : topic.slug ?? topic.title;
          const label =
            typeof topic === "string"
              ? getEntryTitleBySlug(topic)
              : topic.title;
          const href =
            typeof topic === "string"
              ? getEntryHrefBySlug(topic)
              : topic.href ?? getEntryHrefBySlug(slug);

          return (
            <Link
              key={slug}
              href={href}
              className="rounded-full border border-neutral-700 bg-neutral-900 px-4 py-2 text-sm text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-800"
            >
              {label}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
