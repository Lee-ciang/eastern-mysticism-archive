import Link from "next/link";
import type { Metadata } from "next";
import { getAllFolkBeliefs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Folk Beliefs Database | Eastern Mysticism Archive",
  description:
    "Explore Chinese folk beliefs, ancestor veneration, household protection, Ghost Month, Kitchen God customs, and protective traditions.",
};

export default function FolkBeliefsPage() {
  const entries = getAllFolkBeliefs();

  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Folk Beliefs Database
        </p>

        <h1 className="mt-6 text-6xl font-semibold tracking-tight">
          Folk Beliefs
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {entries.length} entries in database
        </p>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-400">
          Explore traditional superstitions, ancestral customs,
          spirit beliefs, ritual taboos, seasonal traditions,
          and cultural folklore from East Asian traditions.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/folk-beliefs/${entry.slug}`}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 transition hover:border-neutral-700 hover:bg-neutral-900"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Folk Beliefs
              </p>

              <h2 className="mt-6 text-4xl font-semibold">
                {entry.title}
              </h2>

              <p className="mt-6 text-lg text-neutral-400">
                {entry.tradition}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
