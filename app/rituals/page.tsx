import Link from "next/link";
import type { Metadata } from "next";
import { getAllRituals } from "@/lib/content";

export const metadata: Metadata = {
  title: "Rituals Database | Eastern Mysticism Archive",
  description:
    "Explore Taoist rituals, folk ceremonies, incense offerings, ancestor rites, protection rituals, talisman burning, and purification practices.",
};

export default function RitualsPage() {
  const rituals = getAllRituals();

  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 py-24">
        <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
          Rituals Database
        </p>

        <h1 className="mt-6 text-6xl font-semibold tracking-tight">
          Rituals
        </h1>

        <p className="mt-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          {rituals.length} entries in database
        </p>

        <p className="mt-10 max-w-3xl text-xl leading-9 text-neutral-400">
          Explore Taoist rituals, folk ceremonies, protection rites,
          ancestral offerings, purification practices, spiritual
          ceremonies, and mystical traditions across East Asia.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {rituals.map((ritual) => (
            <Link
              key={ritual.slug}
              href={`/rituals/${ritual.slug}`}
              className="rounded-3xl border border-neutral-800 bg-neutral-950 p-8 transition hover:border-neutral-700 hover:bg-neutral-900"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-neutral-500">
                Rituals
              </p>

              <h2 className="mt-6 text-4xl font-semibold">
                {ritual.title}
              </h2>

              <p className="mt-6 text-lg text-neutral-400">
                {ritual.tradition}
              </p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
