import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "content");

export type SymbolEntry = {
  title: string;
  slug: string;
  category: string;
  chinese_name: string;
  pinyin: string;
  tradition: string;
  source_type: string;
  primary_keywords: string[];
  related: string[];
  status: string;
  last_reviewed: string;
  content: string;
};

export function getSymbolBySlug(slug: string): SymbolEntry {
  const fullPath = path.join(
    contentDirectory,
    "symbols",
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(fileContents);

  return {
    ...(data as Omit<SymbolEntry, "content">),
    content,
  };
}

export function getAllSymbols(): SymbolEntry[] {
  const symbolsDirectory = path.join(contentDirectory, "symbols");

  const fileNames = fs.readdirSync(symbolsDirectory);

  return fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      return getSymbolBySlug(slug);
    });
}

export type FengShuiEntry = {
  title: string;
  slug: string;
  category: string;
  chinese_name: string;
  pinyin: string;
  tradition: string;
  source_type: string;
  primary_keywords: string[];
  related: string[];
  status: string;
  last_reviewed: string;
  content: string;
};

export function getAllFengShuiEntries(): FengShuiEntry[] {
  const directory = path.join(process.cwd(), "content/feng-shui");

  const filenames = fs.readdirSync(directory);

  return filenames.map((filename) => {
    const filePath = path.join(directory, filename);

    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<FengShuiEntry, "content">),
      content,
    };
  });
}

export function getFengShuiEntryBySlug(
  slug: string
): FengShuiEntry {
  const entries = getAllFengShuiEntries();

  const entry = entries.find((item) => item.slug === slug);

  if (!entry) {
    throw new Error("Feng Shui entry not found");
  }

  return entry;
}

export type FolkBeliefEntry = {
  title: string;
  slug: string;
  category: string;
  chinese_name: string;
  pinyin: string;
  tradition: string;
  source_type: string;
  primary_keywords: string[];
  related: string[];
  status: string;
  last_reviewed: string;
  content: string;
};

export function getAllFolkBeliefs(): FolkBeliefEntry[] {
  const directory = path.join(process.cwd(), "content/folk-beliefs");

  const filenames = fs.readdirSync(directory);

  return filenames.map((filename) => {
    const filePath = path.join(directory, filename);

    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<FolkBeliefEntry, "content">),
      content,
    };
  });
}

export function getFolkBeliefBySlug(slug: string): FolkBeliefEntry {
  const entries = getAllFolkBeliefs();

  const entry = entries.find((item) => item.slug === slug);

  if (!entry) {
    throw new Error("Folk belief entry not found");
  }

  return entry;
}

export type TaoismEntry = {
  title: string;
  slug: string;
  category: string;
  chinese_name: string;
  pinyin: string;
  tradition: string;
  source_type: string;
  primary_keywords: string[];
  related: string[];
  status: string;
  last_reviewed: string;
  content: string;
};

export function getAllTaoismEntries(): TaoismEntry[] {
  const directory = path.join(process.cwd(), "content/taoism");

  const filenames = fs.readdirSync(directory);

  return filenames.map((filename) => {
    const filePath = path.join(directory, filename);

    const fileContents = fs.readFileSync(filePath, "utf8");

    const { data, content } = matter(fileContents);

    return {
      ...(data as Omit<TaoismEntry, "content">),
      content,
    };
  });
}

export function getTaoismEntryBySlug(
  slug: string
): TaoismEntry {
  const entries = getAllTaoismEntries();

  const entry = entries.find((item) => item.slug === slug);

  if (!entry) {
    throw new Error("Taoism entry not found");
  }

  return entry;
}

export function getAllRituals() {
  const ritualDirectory = path.join(
    process.cwd(),
    "content/rituals"
  );

  const files = fs.readdirSync(ritualDirectory);

  return files.map((file) => {
    const slug = file.replace(".md", "");

    const fullPath = path.join(
      ritualDirectory,
      file
    );

    const fileContents = fs.readFileSync(
      fullPath,
      "utf8"
    );

    const { data } = matter(fileContents);

    return {
      slug,
      ...(data as {
        title: string;
        tradition: string;
        category: string;
        related: string[];
      }),
    };
  });
}

export function getRitualBySlug(slug: string) {
  const fullPath = path.join(
    process.cwd(),
    "content/rituals",
    `${slug}.md`
  );

  const fileContents = fs.readFileSync(
    fullPath,
    "utf8"
  );

  const { data, content } = matter(fileContents);

  return {
    slug,
    content,
    ...(data as {
      title: string;
      tradition: string;
      category: string;
      related: string[];
    }),
  };
}

export function getEntryTitleBySlug(slug: string) {
  const collections = [
    getAllSymbols(),
    getAllFengShuiEntries(),
    getAllFolkBeliefs(),
    getAllTaoismEntries(),
    getAllRituals(),
  ];

  for (const collection of collections) {
    const match = collection.find((entry) => entry.slug === slug);

    if (match) {
      return match.title;
    }
  }

  return slug;
}