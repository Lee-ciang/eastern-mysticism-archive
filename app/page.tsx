import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
  },
};

const knowledgeAreas = [
  {
    slug: "symbols",
    title: "Symbols",
    description: "Diagrams, cycles, and motifs that express ideas about change and order.",
    topics: [
      { slug: "yin-yang", title: "Yin Yang", description: "Complementary forces, their changing balance, and the meaning of the familiar symbol." },
      { slug: "five-elements", title: "Five Elements", description: "Wood, fire, earth, metal, and water as phases of transformation." },
      { slug: "bagua", title: "Bagua", description: "The eight trigrams and their place in cosmology, divination, and spatial traditions." },
      { slug: "lo-shu-square", title: "Lo Shu Square", description: "A nine-number diagram at the meeting point of mathematics, legend, and symbolism." },
    ],
  },
  {
    slug: "taoism",
    title: "Taoism",
    description: "Philosophy, cosmology, celestial worlds, and the stories of immortals.",
    topics: [
      { slug: "cosmology-in-taoism", title: "Cosmology in Taoism", description: "How Dao, qi, and cycles of change connect heaven, earth, and human life." },
      { slug: "qi", title: "Qi", description: "Breath, vitality, and transformation in Chinese philosophy and cultural practice." },
      { slug: "eight-immortals", title: "Eight Immortals", description: "Eight legendary figures, their attributes, and their enduring place in art and folklore." },
      { slug: "taoist-heavens", title: "Taoist Heavens", description: "Celestial realms and their interpretations across Taoist texts and ritual traditions." },
    ],
  },
  {
    slug: "folk-beliefs",
    title: "Folk Beliefs",
    description: "Family memory, festival customs, calendar traditions, and everyday beliefs.",
    topics: [
      { slug: "ancestor-veneration", title: "Ancestor Veneration", description: "Family remembrance through offerings, tablets, ancestral halls, and seasonal ceremonies." },
      { slug: "folk-magic", title: "Folk Magic", description: "Charms, symbolic objects, and protective customs in their historical and cultural settings." },
      { slug: "chinese-zodiac", title: "Chinese Zodiac", description: "The twelve-animal cycle and its relationship to calendars, folklore, and symbolism." },
    ],
  },
  {
    slug: "feng-shui",
    title: "Feng Shui",
    description: "Traditional ways of interpreting landscape, direction, and inhabited space.",
    topics: [
      { slug: "five-elements-and-bagua", title: "Five Elements and Bagua", description: "How phase relationships and trigram patterns inform traditional spatial interpretation." },
      { slug: "qi-flow", title: "Qi Flow", description: "Movement, gathering, and balance as cultural ways of reading landscapes and buildings." },
      { slug: "luopan-compass", title: "Luopan Compass", description: "The compass, its layered markings, and its role in Feng Shui history and practice." },
    ],
  },
  {
    slug: "rituals",
    title: "Rituals",
    description: "Ceremonies, offerings, talismans, and the meanings of ritual actions.",
    topics: [
      { slug: "taoist-talisman-rituals", title: "Taoist Talisman Rituals", description: "Fu symbols within liturgy, purification, and traditions of ritual authority." },
      { slug: "talisman-burning-practice", title: "Talisman Burning Practice", description: "Burning as a symbolic act of transformation in religious and household settings." },
      { slug: "protection-ritual", title: "Protection Ritual", description: "The cultural meanings of protective ceremonies, household boundaries, and ritual objects." },
    ],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-neutral-100">
      <div className="mx-auto max-w-5xl px-6 pb-20">
        <section aria-labelledby="archive-title" className="py-24">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-neutral-500">
            Eastern Mysticism Archive
          </p>
          <h1 id="archive-title" className="max-w-3xl text-5xl font-semibold leading-tight md:text-7xl">
            Ancient Symbols, Folk Beliefs, Taoist Mysticism, and Cultural Archives
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-neutral-400">
            A research-focused archive exploring Eastern mystical traditions,
            Taoist symbols, feng shui, folk beliefs, jade culture, rituals, and
            forgotten folklore.
          </p>
        </section>

        <section aria-labelledby="knowledge-areas" className="border-t border-neutral-800 py-12">
          <h2 id="knowledge-areas" className="text-2xl font-semibold">
            Five knowledge areas
          </h2>
          <ul className="mt-8 grid gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
            {knowledgeAreas.map((area) => (
              <li key={area.slug} className="min-w-0">
                <h3 className="text-lg font-semibold">
                  <Link
                    href={`/${area.slug}`}
                    className="underline decoration-neutral-600 underline-offset-4 transition hover:decoration-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-100"
                  >
                    {area.title}
                  </Link>
                </h3>
                <p className="mt-3 text-sm leading-6 text-neutral-400">
                  {area.description}
                </p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="foundational-topics" className="border-t border-neutral-800 pt-12">
          <h2 id="foundational-topics" className="text-3xl font-semibold">
            Foundational topics
          </h2>
          <p className="mt-4 max-w-2xl leading-7 text-neutral-400">
            Change and balance connect the symbolic systems; family and community
            give those ideas a place in everyday life. These starting points
            trace the connections across the archive.
          </p>
          <div className="mt-10 space-y-14">
            {knowledgeAreas.map((area) => (
              <section key={area.slug} aria-labelledby={`${area.slug}-topics`}>
                <div className="mb-5 flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3">
                  <h3 id={`${area.slug}-topics`} className="text-xl font-semibold">
                    {area.title}
                  </h3>
                  <Link
                    href={`/${area.slug}`}
                    className="text-sm text-neutral-400 underline decoration-neutral-700 underline-offset-4 transition hover:text-neutral-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-100"
                  >
                    Browse all {area.title} topics
                  </Link>
                </div>
                <ul className={`grid gap-4 sm:grid-cols-2 ${area.topics.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"}`}>
                  {area.topics.map((topic) => (
                    <li key={topic.slug} className="min-w-0">
                      <Link
                        href={`/${area.slug}/${topic.slug}`}
                        className="block h-full rounded-lg border border-neutral-800 bg-neutral-950 p-5 transition hover:border-neutral-500 hover:bg-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-100"
                      >
                        <h4 className="text-lg font-semibold leading-7">{topic.title}</h4>
                        <p className="mt-3 text-sm leading-6 text-neutral-400">{topic.description}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
