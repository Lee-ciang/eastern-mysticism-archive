import Link from "next/link";
import { getAllSymbols } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Symbol Database | Eastern Mysticism Archive",
  description:
    "Explore Eastern mystical symbols, Taoist diagrams, philosophical signs, and cultural motifs.",
};

export default function SymbolsPage() {
  const symbols = getAllSymbols();

  return (
    <main className="min-h-screen bg-black px-6 py-20 text-neutral-100">
      <section className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Symbol Database
        </p>

        <h1 className="text-5xl font-bold">Symbols</h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-400">
          Explore symbolic systems, sacred diagrams, philosophical signs, and
          cultural motifs from Eastern mystical traditions.
        </p>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {symbols.map((symbol) => (
            <Link
              key={symbol.slug}
              href={`/symbols/${symbol.slug}`}
              className="rounded-2xl border border-neutral-800 bg-neutral-950 p-6 transition hover:border-neutral-600 hover:bg-neutral-900"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-neutral-500">
                {symbol.category}
              </p>

              <h2 className="mt-3 text-2xl font-semibold">{symbol.title}</h2>

              <p className="mt-3 text-neutral-400">{symbol.tradition}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}