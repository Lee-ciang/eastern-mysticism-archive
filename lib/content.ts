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