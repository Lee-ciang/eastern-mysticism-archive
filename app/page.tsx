export default function HomePage() {
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

        <div className="mt-12 flex flex-wrap gap-4">
          <div className="rounded-full border border-neutral-800 px-5 py-2 text-sm text-neutral-300">
            Taoist Symbols
          </div>

          <div className="rounded-full border border-neutral-800 px-5 py-2 text-sm text-neutral-300">
            Feng Shui
          </div>

          <div className="rounded-full border border-neutral-800 px-5 py-2 text-sm text-neutral-300">
            Folk Beliefs
          </div>

          <div className="rounded-full border border-neutral-800 px-5 py-2 text-sm text-neutral-300">
            Jade Culture
          </div>

          <div className="rounded-full border border-neutral-800 px-5 py-2 text-sm text-neutral-300">
            Ancient Rituals
          </div>
        </div>
      </section>
    </main>
  );
}