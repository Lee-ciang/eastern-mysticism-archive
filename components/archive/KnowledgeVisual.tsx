import { useId } from "react";

type KnowledgeVisualId =
  | "yin-yang-core"
  | "taiji-anatomy"
  | "yin-yang-relationships"
  | "eight-immortals-attributes"
  | "five-elements-generating-cycle"
  | "five-elements-overcoming-cycle"
  | "lo-shu-square";

type KnowledgeVisualProps = {
  id: string;
};

const visualMeta: Record<
  KnowledgeVisualId,
  { title: string; description: string }
> = {
  "yin-yang-core": {
    title: "The four principles of Yin and Yang",
    description:
      "A concept diagram showing interdependence, dynamic balance, cyclical transformation, and the presence of each tendency within the other.",
  },
  "taiji-anatomy": {
    title: "Anatomy of the Taiji Diagram",
    description:
      "A labeled Taiji symbol showing the dark and light fields, contrasting seed points, and the continuous flow between Yin and Yang.",
  },
  "yin-yang-relationships": {
    title: "Yin Yang relationship map",
    description:
      "A map connecting Yin Yang with Qi, Five Elements, Bagua, Taoist cosmology, and the Taiji and Wuji sequence.",
  },
  "eight-immortals-attributes": {
    title: "Eight Immortals attribute guide",
    description:
      "A reference guide to objects commonly used to identify the Eight Immortals. Attributes vary across periods, regions, and individual works of art.",
  },
  "five-elements-generating-cycle": {
    title: "Five Phases generating cycle",
    description:
      "The generating cycle presents a traditional sequence of support: Wood to Fire, Fire to Earth, Earth to Metal, Metal to Water, and Water back to Wood.",
  },
  "five-elements-overcoming-cycle": {
    title: "Five Phases overcoming cycle",
    description:
      "The overcoming cycle presents regulation rather than random conflict: Wood regulates Earth, Earth regulates Water, Water regulates Fire, Fire regulates Metal, and Metal regulates Wood.",
  },
  "lo-shu-square": {
    title: "The standard Lo Shu Square",
    description:
      "The standard number arrangement is shown without imposing a map orientation. Every row, column, and main diagonal totals 15, and 5 occupies the center.",
  },
};

function VisualFrame({
  id,
  children,
}: {
  id: KnowledgeVisualId;
  children: React.ReactNode;
}) {
  const meta = visualMeta[id];

  return (
    <figure className="my-12 overflow-hidden rounded-lg border border-neutral-700 bg-neutral-950 lg:-mx-16">
      <div className="border-b border-neutral-800 px-5 py-4 sm:px-7">
        <p className="mb-1 text-xs font-semibold uppercase text-red-400">
          Visual Knowledge
        </p>
        <h2 className="text-xl font-semibold text-neutral-100">
          {meta.title}
        </h2>
      </div>
      <div className="p-4 sm:p-7">{children}</div>
      <figcaption className="border-t border-neutral-800 px-5 py-4 text-sm leading-6 text-neutral-400 sm:px-7">
        {meta.description}
      </figcaption>
    </figure>
  );
}

function PrincipleCard({
  index,
  title,
  description,
}: {
  index: string;
  title: string;
  description: string;
}) {
  return (
    <div className="min-h-36 border border-neutral-700 bg-neutral-900 p-4">
      <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full border border-red-500/70 text-sm font-semibold text-red-300">
        {index}
      </div>
      <h3 className="text-base font-semibold text-neutral-100">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-neutral-400">{description}</p>
    </div>
  );
}

function YinYangCoreVisual() {
  return (
    <VisualFrame id="yin-yang-core">
      <div className="grid gap-3 sm:grid-cols-2">
        <PrincipleCard
          index="01"
          title="Interdependence"
          description="Each tendency is understood through its relation to the other: rest supports activity, and activity makes rest necessary."
        />
        <PrincipleCard
          index="02"
          title="Dynamic balance"
          description="Balance is responsive proportion over time, not a motionless fifty-fifty division."
        />
        <PrincipleCard
          index="03"
          title="Cyclical transformation"
          description="Conditions reach a limit and turn: day becomes night, and winter moves toward spring."
        />
        <PrincipleCard
          index="04"
          title="Seed of the opposite"
          description="No condition is absolute. Each side contains the possibility and beginning of its counterpart."
        />
      </div>
      <div className="mt-5 grid grid-cols-1 items-center gap-3 text-center text-sm sm:grid-cols-[1fr_auto_1fr]">
        <div className="border border-neutral-700 bg-neutral-900 px-3 py-3 text-neutral-300">
          Yin: receptive, inward, cooling
        </div>
        <span
          className="rotate-90 text-xl text-red-400 sm:rotate-0"
          aria-hidden="true"
        >
          ⇄
        </span>
        <div className="border border-neutral-300 bg-neutral-100 px-3 py-3 text-neutral-900">
          Yang: active, outward, warming
        </div>
      </div>
    </VisualFrame>
  );
}

function TaijiAnatomyVisual() {
  const visualId = useId().replaceAll(":", "");
  const desktopTitleId = `${visualId}-taiji-title`;
  const desktopDescId = `${visualId}-taiji-desc`;
  const desktopClipId = `${visualId}-taiji-circle`;
  const mobileTitleId = `${visualId}-taiji-mobile-title`;
  const mobileDescId = `${visualId}-taiji-mobile-desc`;
  const mobileClipId = `${visualId}-taiji-mobile-circle`;

  return (
    <VisualFrame id="taiji-anatomy">
      <svg
        viewBox="0 0 760 430"
        className="hidden h-auto w-full sm:block"
        role="img"
        aria-labelledby={`${desktopTitleId} ${desktopDescId}`}
      >
        <title id={desktopTitleId}>
          Labeled anatomy of the Taiji Diagram
        </title>
        <desc id={desktopDescId}>
          A black and white Taiji symbol with labels identifying the Yin field,
          Yang field, seed points, circular whole, and continuous curved motion.
        </desc>
        <defs>
          <clipPath id={desktopClipId}>
            <circle cx="270" cy="215" r="150" />
          </clipPath>
        </defs>

        <circle
          cx="270"
          cy="215"
          r="154"
          fill="#0a0a0a"
          stroke="#a3a3a3"
          strokeWidth="2"
        />
        <g clipPath={`url(#${desktopClipId})`}>
          <rect x="120" y="65" width="300" height="300" fill="#f5f5f5" />
          <path
            d="M270 65 A75 75 0 0 1 270 215 A75 75 0 0 0 270 365 A150 150 0 0 1 270 65Z"
            fill="#171717"
          />
          <circle cx="270" cy="140" r="20" fill="#f5f5f5" />
          <circle cx="270" cy="290" r="20" fill="#171717" />
        </g>

        <path
          d="M270 39 A176 176 0 0 1 442 179"
          fill="none"
          stroke="#ef4444"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path d="M442 179 l-11 -9 l2 15 z" fill="#ef4444" />

        <g
          fill="none"
          stroke="#737373"
          strokeWidth="1.5"
          strokeLinecap="round"
        >
          <path d="M206 165 L86 122" />
          <path d="M338 252 L494 303" />
          <path d="M270 140 L493 116" />
          <path d="M270 290 L492 184" />
          <path d="M421 215 L533 232" />
        </g>

        <g fontFamily="Arial, sans-serif">
          <text x="24" y="107" fill="#f5f5f5" fontSize="17" fontWeight="700">
            Yin field
          </text>
          <text x="24" y="129" fill="#a3a3a3" fontSize="13">
            dark, receptive, inward
          </text>

          <text x="510" y="300" fill="#f5f5f5" fontSize="17" fontWeight="700">
            Yang field
          </text>
          <text x="510" y="322" fill="#a3a3a3" fontSize="13">
            light, active, outward
          </text>

          <text x="510" y="106" fill="#f5f5f5" fontSize="17" fontWeight="700">
            Yang seed
          </text>
          <text x="510" y="128" fill="#a3a3a3" fontSize="13">
            light within Yin
          </text>

          <text x="510" y="174" fill="#f5f5f5" fontSize="17" fontWeight="700">
            Yin seed
          </text>
          <text x="510" y="196" fill="#a3a3a3" fontSize="13">
            dark within Yang
          </text>

          <text x="550" y="235" fill="#f5f5f5" fontSize="17" fontWeight="700">
            One whole
          </text>
          <text x="550" y="257" fill="#a3a3a3" fontSize="13">
            polarity within unity
          </text>

          <text x="451" y="62" fill="#f87171" fontSize="14" fontWeight="700">
            continuous motion
          </text>
        </g>
      </svg>
      <div className="sm:hidden">
        <svg
          viewBox="0 0 320 300"
          className="h-auto w-full"
          role="img"
          aria-labelledby={`${mobileTitleId} ${mobileDescId}`}
        >
          <title id={mobileTitleId}>Taiji Diagram</title>
          <desc id={mobileDescId}>
            A circular dark and light Taiji symbol with a contrasting point in
            each field and an arrow indicating continuous motion.
          </desc>
          <defs>
            <clipPath id={mobileClipId}>
              <circle cx="160" cy="145" r="105" />
            </clipPath>
          </defs>
          <circle
            cx="160"
            cy="145"
            r="108"
            fill="#0a0a0a"
            stroke="#a3a3a3"
            strokeWidth="2"
          />
          <g clipPath={`url(#${mobileClipId})`}>
            <rect x="55" y="40" width="210" height="210" fill="#f5f5f5" />
            <path
              d="M160 40 A52.5 52.5 0 0 1 160 145 A52.5 52.5 0 0 0 160 250 A105 105 0 0 1 160 40Z"
              fill="#171717"
            />
            <circle cx="160" cy="92.5" r="14" fill="#f5f5f5" />
            <circle cx="160" cy="197.5" r="14" fill="#171717" />
          </g>
          <path
            d="M160 22 A124 124 0 0 1 280 122"
            fill="none"
            stroke="#ef4444"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <path d="M280 122 l-13 -10 l3 17 z" fill="#ef4444" />
          <text
            x="160"
            y="286"
            fill="#f87171"
            fontFamily="Arial, sans-serif"
            fontSize="14"
            fontWeight="700"
            textAnchor="middle"
          >
            continuous motion
          </text>
        </svg>
        <div className="mt-4 grid gap-2">
          <RelationshipNode
            label="Yin field"
            detail="Dark, receptive, and inward-facing tendency"
          />
          <RelationshipNode
            label="Yang field"
            detail="Light, active, and outward-facing tendency"
          />
          <RelationshipNode
            label="Contrasting seed points"
            detail="Each side contains the possibility of its counterpart"
          />
          <RelationshipNode
            label="Circular whole"
            detail="Polarity remains part of one continuous system"
          />
        </div>
      </div>
    </VisualFrame>
  );
}

function RelationshipNode({
  label,
  detail,
}: {
  label: string;
  detail: string;
}) {
  return (
    <div className="border border-neutral-700 bg-neutral-900 px-3 py-3 text-center">
      <p className="text-sm font-semibold text-neutral-100">{label}</p>
      <p className="mt-1 text-xs leading-5 text-neutral-400">{detail}</p>
    </div>
  );
}

function YinYangRelationshipVisual() {
  return (
    <VisualFrame id="yin-yang-relationships">
      <div className="grid items-stretch gap-3 md:grid-cols-[1fr_1.15fr_1fr]">
        <div className="grid gap-3">
          <RelationshipNode
            label="Taiji / Wuji"
            detail="From non-polarity to differentiated polarity"
          />
          <RelationshipNode
            label="Qi"
            detail="The changing medium described through Yin and Yang qualities"
          />
        </div>

        <div className="flex min-h-44 flex-col items-center justify-center border border-red-500/60 bg-red-950/20 px-5 py-6 text-center">
          <span className="text-xs font-semibold uppercase text-red-400">
            Core relation
          </span>
          <p className="mt-2 text-2xl font-semibold text-neutral-100">
            Yin Yang
          </p>
          <p className="mt-2 max-w-xs text-sm leading-6 text-neutral-400">
            Polarity, interdependence, alternation, and transformation
          </p>
          <p className="mt-4 text-xs font-semibold uppercase text-red-400">
            Connects outward
          </p>
        </div>

        <div className="grid gap-3">
          <RelationshipNode
            label="Five Elements"
            detail="Five recurring phases within patterned change"
          />
          <RelationshipNode
            label="Bagua"
            detail="Eight configurations built from Yin and Yang lines"
          />
        </div>
      </div>
      <div className="mt-3 border border-neutral-700 bg-neutral-900 px-4 py-3 text-center">
        <p className="text-sm font-semibold text-neutral-100">
          Taoist cosmology
        </p>
        <p className="mt-1 text-xs leading-5 text-neutral-400">
          Connects polarity with cosmic order, time, landscape, ritual, and
          transformation
        </p>
      </div>
    </VisualFrame>
  );
}

type AttributeGlyphName =
  | "sword"
  | "fan"
  | "crutch"
  | "lotus"
  | "basket"
  | "tablets"
  | "flute"
  | "drum";

function AttributeGlyph({ name }: { name: AttributeGlyphName }) {
  const commonProps = {
    className: "h-12 w-12 text-red-300",
    viewBox: "0 0 48 48",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  if (name === "sword") {
    return (
      <svg {...commonProps}>
        <path d="M34 6 17 29" />
        <path d="m31 9 8-3-3 8" />
        <path d="m13 27 8 6" />
        <path d="m16 32-6 8" />
      </svg>
    );
  }

  if (name === "fan") {
    return (
      <svg {...commonProps}>
        <path d="M24 39 8 17c10-7 22-7 32 0L24 39Z" />
        <path d="m24 39-8-27M24 39V10m0 29 8-27" />
      </svg>
    );
  }

  if (name === "crutch") {
    return (
      <svg {...commonProps}>
        <path d="M14 40V12c0-4 3-7 7-7 3 0 5 2 5 5" />
        <path d="M11 40h6" />
        <path d="M31 20c-4 4-5 8-5 13 0 5 3 8 7 8s7-3 7-8c0-5-1-9-5-13Z" />
        <path d="M30 20h6" />
      </svg>
    );
  }

  if (name === "lotus") {
    return (
      <svg {...commonProps}>
        <path d="M24 36c-8-6-10-14 0-25 10 11 8 19 0 25Z" />
        <path d="M23 36c-10 0-16-5-17-15 9 0 15 5 17 15Z" />
        <path d="M25 36c10 0 16-5 17-15-9 0-15 5-17 15Z" />
        <path d="M24 36v7" />
      </svg>
    );
  }

  if (name === "basket") {
    return (
      <svg {...commonProps}>
        <path d="M8 20h32l-4 21H12L8 20Z" />
        <path d="M15 20c0-8 4-12 9-12s9 4 9 12" />
        <path d="M10 27h28M17 20l2 21m12-21-2 21" />
      </svg>
    );
  }

  if (name === "tablets") {
    return (
      <svg {...commonProps}>
        <path d="M11 9h10v31H11zM27 9h10v31H27z" />
        <path d="M14 14h4M14 19h4M30 14h4M30 19h4" />
      </svg>
    );
  }

  if (name === "flute") {
    return (
      <svg {...commonProps}>
        <path d="m7 34 34-20" />
        <path d="m11 37-4-7m34-12-4-7" />
        <circle cx="18" cy="28" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="25" cy="24" r="1.5" fill="currentColor" stroke="none" />
        <circle cx="32" cy="20" r="1.5" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  return (
    <svg {...commonProps}>
      <path d="M17 9h14v30H17z" />
      <path d="M14 9h20M14 39h20" />
      <path d="m35 14 7-5M35 34l7 5" />
      <circle cx="24" cy="24" r="4" />
    </svg>
  );
}

function ImmortalAttributeCard({
  name,
  chinese,
  attribute,
  note,
  glyph,
}: {
  name: string;
  chinese: string;
  attribute: string;
  note: string;
  glyph: AttributeGlyphName;
}) {
  return (
    <div className="grid min-h-52 grid-cols-[3rem_1fr] gap-3 border border-neutral-700 bg-neutral-900 p-4 sm:block">
      <AttributeGlyph name={glyph} />
      <div className="sm:mt-4">
        <h3 className="text-base font-semibold text-neutral-100">
          {name} <span className="font-normal text-neutral-400">{chinese}</span>
        </h3>
        <p className="mt-2 text-sm font-semibold text-red-300">{attribute}</p>
        <p className="mt-2 text-sm leading-6 text-neutral-400">{note}</p>
      </div>
    </div>
  );
}

function EightImmortalsAttributesVisual() {
  return (
    <VisualFrame id="eight-immortals-attributes">
      <div className="mb-5 border-l-2 border-red-500 px-4 text-sm leading-6 text-neutral-300">
        These objects are common iconographic identifiers, not universal fixed
        rules. Artists may substitute, combine, or omit attributes.
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <ImmortalAttributeCard
          name="Lu Dongbin"
          chinese="呂洞賓"
          attribute="Sword"
          note="Commonly depicted as a scholar; the sword may suggest discernment or protective authority."
          glyph="sword"
        />
        <ImmortalAttributeCard
          name="Zhongli Quan"
          chinese="鍾離權"
          attribute="Fan"
          note="Often shown as a senior figure; legends associate the fan with transformation or revival."
          glyph="fan"
        />
        <ImmortalAttributeCard
          name="Li Tieguai"
          chinese="李鐵拐"
          attribute="Iron crutch and gourd"
          note="His distinctive objects accompany stories about changed appearance, compassion, and transcendence."
          glyph="crutch"
        />
        <ImmortalAttributeCard
          name="He Xiangu"
          chinese="何仙姑"
          attribute="Lotus or flower"
          note="Floral and auspicious objects vary; later art often connects them with purity and attainment."
          glyph="lotus"
        />
        <ImmortalAttributeCard
          name="Lan Caihe"
          chinese="藍采和"
          attribute="Flower basket"
          note="The wandering figure varies in age, dress, and gender presentation across traditions."
          glyph="basket"
        />
        <ImmortalAttributeCard
          name="Cao Guojiu"
          chinese="曹國舅"
          attribute="Court tablets or castanets"
          note="Court dress and paired objects distinguish this figure associated with rank and reform."
          glyph="tablets"
        />
        <ImmortalAttributeCard
          name="Han Xiangzi"
          chinese="韓湘子"
          attribute="Flute"
          note="The flute identifies a figure often associated with music, cultivated refinement, and nature."
          glyph="flute"
        />
        <ImmortalAttributeCard
          name="Zhang Guolao"
          chinese="張果老"
          attribute="Bamboo instrument"
          note="A tube drum is common; the backward-riding donkey is another widely recognized motif."
          glyph="drum"
        />
      </div>
    </VisualFrame>
  );
}

type PhaseName = "Wood" | "Fire" | "Earth" | "Metal" | "Water";

const phaseStyles: Record<
  PhaseName,
  { accent: string; movement: string }
> = {
  Wood: {
    accent: "border-emerald-700 text-emerald-300",
    movement: "growth and extension",
  },
  Fire: {
    accent: "border-red-700 text-red-300",
    movement: "heat and outward expression",
  },
  Earth: {
    accent: "border-amber-700 text-amber-300",
    movement: "centering and mediation",
  },
  Metal: {
    accent: "border-neutral-500 text-neutral-200",
    movement: "contraction and refinement",
  },
  Water: {
    accent: "border-sky-700 text-sky-300",
    movement: "descent and storage",
  },
};

function PhaseSequence({
  phases,
  relation,
}: {
  phases: PhaseName[];
  relation: "supports" | "regulates";
}) {
  return (
    <ol
      className="grid gap-2 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr_auto_1fr]"
      aria-label={`Five Phases ${relation} sequence`}
    >
      {phases.map((phase, index) => (
        <li
          key={phase}
          className="contents"
        >
          <div
            className={`min-h-28 border bg-neutral-900 p-4 ${phaseStyles[phase].accent}`}
          >
            <p className="text-xs font-semibold uppercase text-neutral-500">
              Step {index + 1}
            </p>
            <h3 className="mt-2 text-lg font-semibold">{phase}</h3>
            <p className="mt-2 text-sm leading-6 text-neutral-400">
              {phaseStyles[phase].movement}
            </p>
          </div>
          {index < phases.length - 1 ? (
            <div
              className={`flex min-h-8 items-center justify-center text-xs font-semibold uppercase lg:min-h-28 ${
                relation === "supports"
                  ? "text-emerald-300"
                  : "text-amber-300"
              }`}
              aria-hidden="true"
            >
              <span className="lg:hidden">{relation} next</span>
              <span className="hidden text-xl lg:inline">→</span>
            </div>
          ) : null}
        </li>
      ))}
    </ol>
  );
}

function FiveElementsGeneratingCycleVisual() {
  return (
    <VisualFrame id="five-elements-generating-cycle">
      <div className="mb-5 border-l-2 border-emerald-600 px-4 text-sm leading-6 text-neutral-300">
        Generation means symbolic support or succession. It does not describe a
        universal material or scientific cause.
      </div>
      <PhaseSequence
        phases={["Wood", "Fire", "Earth", "Metal", "Water"]}
        relation="supports"
      />
      <p className="mt-5 text-center text-sm leading-6 text-neutral-400">
        Water completes the sequence by supporting renewed Wood growth.
      </p>
    </VisualFrame>
  );
}

function FiveElementsOvercomingCycleVisual() {
  return (
    <VisualFrame id="five-elements-overcoming-cycle">
      <div className="mb-5 border-l-2 border-amber-600 px-4 text-sm leading-6 text-neutral-300">
        Overcoming can also be translated as controlling, restraining, or
        regulating. The sequence describes limits within a connected system.
      </div>
      <PhaseSequence
        phases={["Wood", "Earth", "Water", "Fire", "Metal"]}
        relation="regulates"
      />
      <p className="mt-5 text-center text-sm leading-6 text-neutral-400">
        Metal completes the sequence by regulating Wood growth.
      </p>
    </VisualFrame>
  );
}

const loShuNumbers = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 6],
];

const loShuSums = [
  {
    label: "Rows",
    lines: ["4 + 9 + 2", "3 + 5 + 7", "8 + 1 + 6"],
  },
  {
    label: "Columns",
    lines: ["4 + 3 + 8", "9 + 5 + 1", "2 + 7 + 6"],
  },
  {
    label: "Diagonals",
    lines: ["4 + 5 + 6", "2 + 5 + 8"],
  },
];

function LoShuSquareVisual() {
  return (
    <VisualFrame id="lo-shu-square">
      <div className="grid items-start gap-7 lg:grid-cols-[minmax(0,22rem)_1fr]">
        <div>
          <div
            className="grid aspect-square grid-cols-3 border border-neutral-500 bg-neutral-700"
            role="img"
            aria-label="Lo Shu Square arranged in three rows: 4, 9, 2; 3, 5, 7; and 8, 1, 6. The center number is 5."
          >
            {loShuNumbers.flat().map((number, index) => {
              const isCenter = number === 5;

              return (
                <div
                  key={`${number}-${index}`}
                  className={`flex items-center justify-center border border-neutral-700 text-3xl font-semibold sm:text-4xl ${
                    isCenter
                      ? "bg-red-950 text-red-200"
                      : "bg-neutral-900 text-neutral-100"
                  }`}
                >
                  <span>{number}</span>
                  {isCenter ? (
                    <span className="sr-only">, center</span>
                  ) : null}
                </div>
              );
            })}
          </div>
          <p className="mt-3 text-center text-sm text-neutral-400">
            Standard arrangement; rotations and reflections preserve the
            mathematical property.
          </p>
        </div>

        <div>
          <div className="border-l-2 border-red-500 px-4">
            <p className="text-sm font-semibold text-neutral-100">
              Eight straight lines, one constant total
            </p>
            <p className="mt-1 text-sm leading-6 text-neutral-400">
              Three rows, three columns, and two main diagonals each add to 15.
            </p>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {loShuSums.map((group) => (
              <div
                key={group.label}
                className="border border-neutral-700 bg-neutral-900 p-4"
              >
                <h3 className="text-sm font-semibold text-red-300">
                  {group.label}
                </h3>
                <ul className="mt-3 space-y-2">
                  {group.lines.map((line) => (
                    <li
                      key={line}
                      className="text-sm tabular-nums text-neutral-300"
                    >
                      {line} = <strong className="text-neutral-100">15</strong>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </VisualFrame>
  );
}

export default function KnowledgeVisual({ id }: KnowledgeVisualProps) {
  if (id === "yin-yang-core") {
    return <YinYangCoreVisual />;
  }

  if (id === "taiji-anatomy") {
    return <TaijiAnatomyVisual />;
  }

  if (id === "yin-yang-relationships") {
    return <YinYangRelationshipVisual />;
  }

  if (id === "eight-immortals-attributes") {
    return <EightImmortalsAttributesVisual />;
  }

  if (id === "five-elements-generating-cycle") {
    return <FiveElementsGeneratingCycleVisual />;
  }

  if (id === "five-elements-overcoming-cycle") {
    return <FiveElementsOvercomingCycleVisual />;
  }

  if (id === "lo-shu-square") {
    return <LoShuSquareVisual />;
  }

  return null;
}
