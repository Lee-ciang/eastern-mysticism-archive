import Link from "next/link";
import type { Metadata } from "next";
import { getAllFengShuiEntries } from "@/lib/content";

export const metadata: Metadata = {
  title: "Feng Shui Database | Eastern Mysticism Archive",
  description:
    "Explore Chinese Feng Shui symbols, tools, spatial traditions, and geomantic concepts.",
  alternates: {
    canonical: "/feng-shui",
  },
  openGraph: {
    url: "/feng-shui",
  },
};

export default function FengShuiPage() {
  const entries = getAllFengShuiEntries();

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-neutral-100">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Feng Shui Database
        </p>

        <h1 className="text-5xl font-bold">Feng Shui</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Explore Chinese Feng Shui tools, spatial traditions, geomantic
          systems, symbolic objects, and cultural interpretations.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {entries.map((entry) => (
            <Link
              key={entry.slug}
              href={`/feng-shui/${entry.slug}`}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                {entry.category}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">{entry.title}</h2>

              <p className="mt-3 text-neutral-400">{entry.tradition}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
