import Link from "next/link";
import {
  getAllFengShuiEntries,
  getAllSymbols,
  getAllFolkBeliefs,
  getAllTaoismEntries,
  getAllRituals,
} from "@/lib/content";

export default function HomePage() {
  const symbols = getAllSymbols();
  const fengShuiEntries = getAllFengShuiEntries();
  const folkBeliefs = getAllFolkBeliefs();
  const taoismEntries = getAllTaoismEntries();
  const rituals = getAllRituals();

  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
          Eastern Mysticism Archive
        </p>

        <h1 className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
          Ancient Symbols, Folk Beliefs, Taoist Mysticism, and Cultural Archives
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
          A research-focused archive exploring Eastern mystical traditions,
          Taoist symbols, feng shui, folk beliefs, jade culture, rituals, and
          forgotten folklore.
        </p>

        <div className="mt-12">
          <h2 className="text-xl font-semibold">Symbol Database</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            {symbols.map((symbol) => (
              <Link
                key={symbol.slug}
                href={`/symbols/${symbol.slug}`}
                className="rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2 text-sm text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-800"
              >
                {symbol.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-xl font-semibold">Feng Shui Database</h2>

          <div className="mt-6 flex flex-wrap gap-4">
            {fengShuiEntries.map((entry) => (
              <Link
                key={entry.slug}
                href={`/feng-shui/${entry.slug}`}
                className="rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2 text-sm text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-800"
              >
                {entry.title}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-16">
  <h2 className="text-xl font-semibold">Folk Beliefs Database</h2>

  <div className="mt-6 flex flex-wrap gap-4">
    {folkBeliefs.map((entry) => (
      <Link
        key={entry.slug}
        href={`/folk-beliefs/${entry.slug}`}
        className="rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2 text-sm text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-800"
      >
        {entry.title}
      </Link>
    ))}
  </div>
</div>

<div className="mt-16">
  <h2 className="text-xl font-semibold">Taoism Database</h2>

  <div className="mt-6 flex flex-wrap gap-4">
    {taoismEntries.map((entry) => (
      <Link
        key={entry.slug}
        href={`/taoism/${entry.slug}`}
        className="rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2 text-sm text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-800"
      >
        {entry.title}
      </Link>
    ))}
  </div>
</div>

<div className="mt-16">
  <h2 className="text-xl font-semibold">Rituals Database</h2>

  <div className="mt-6 flex flex-wrap gap-4">
    {rituals.map((ritual) => (
      <Link
        key={ritual.slug}
        href={`/rituals/${ritual.slug}`}
        className="rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2 text-sm text-neutral-100 transition hover:border-neutral-500 hover:bg-neutral-800"
      >
        {ritual.title}
      </Link>
    ))}
  </div>
</div>
      </section>
    </main>
  );
}