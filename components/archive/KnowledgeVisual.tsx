import { useId } from "react";

type KnowledgeVisualId =
  | "yin-yang-core"
  | "taiji-anatomy"
  | "yin-yang-relationships";

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

  return null;
}
