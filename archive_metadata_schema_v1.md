# Archive Metadata Schema v1

## Purpose

This document defines the first stable long-term metadata schema for Eastern Mysticism Archive entries. The schema is designed for semantic SEO, entity relationships, internal linking, future filtering and search, archive graph structures, and scalable markdown-based content management.

Version 1 should remain minimal. Its purpose is to establish durable metadata fields that are useful across symbols, Taoism, rituals, folk religion, Feng Shui, cosmology, divination, talismans, spirit entities, sacred objects, festivals, and related East Asian esoteric systems.

## Design Principles

- Keep metadata stable across many future categories.
- Prefer fields that support multiple archive types.
- Avoid adding fields that require constant editorial judgment.
- Use structured values where they improve linking, filtering, or SEO.
- Keep markdown frontmatter readable for humans.
- Treat each entry as both an encyclopedia article and a graph node.
- Add complexity only when it clearly supports discovery, maintenance, or authority.

## Schema Overview

| Field | Type | Required | Purpose |
|---|---:|---:|---|
| `slug` | string | Yes | Stable URL and entity identifier |
| `title` | string | Yes | Human-readable entry title |
| `category` | string | Yes | Primary archive grouping |
| `tradition` | string | Yes | Cultural, religious, or intellectual context |
| `region` | string | Optional | Geographic or cultural region |
| `entityType` | string | Yes | Semantic type of the archive entry |
| `relatedEntries` | string[] | Optional | Internal linking and graph relationships |
| `keywords` | string[] | Optional | Semantic SEO and editorial targeting |
| `seoTitle` | string | Optional | Search-optimized title override |
| `seoDescription` | string | Optional | Search snippet and metadata description |
| `content` | markdown body | Yes | Main article content |

## Field Definitions

### `slug`

**Purpose:**  
The permanent machine-readable identifier for the entry. It should match the URL segment whenever possible.

**SEO and entity value:**  
The slug creates a stable canonical identity for the topic. It helps search engines and internal systems distinguish one entity from another.

**Maintenance cost:**  
Low, but changes are expensive after publication because they affect URLs and internal links.

**Required:**  
Yes.

**Guidance:**
- Use lowercase words separated by hyphens.
- Keep slugs short and descriptive.
- Do not include dates unless the topic is date-specific.
- Avoid changing slugs after publication.

Example:

```yaml
slug: "bagua"
```

### `title`

**Purpose:**  
The primary human-readable name of the entry.

**SEO and entity value:**  
The title identifies the entity clearly for readers, internal links, search snippets, and related topic displays.

**Maintenance cost:**  
Low. Titles may be adjusted, but should remain stable once articles gain internal links.

**Required:**  
Yes.

**Guidance:**
- Use the most recognizable English name.
- Avoid keyword stuffing.
- Use alternate names in the article body, not the title, unless necessary.

Example:

```yaml
title: "Bagua"
```

### `category`

**Purpose:**  
The primary archive category for the entry.

**SEO and entity value:**  
Category supports topical authority, index pages, breadcrumb structure, filtering, and archive clustering.

**Maintenance cost:**  
Medium. Category changes can affect URLs, navigation, sitemap structure, and internal links.

**Required:**  
Yes.

**Recommended v1 categories:**
- `symbols`
- `cosmology`
- `taoism`
- `rituals`
- `folk-beliefs`
- `feng-shui`
- `talismans`
- `divination`

**Guidance:**
- Use one primary category only.
- Do not create new categories casually.
- If a topic fits several areas, choose the strongest editorial home and use `relatedEntries` for cross-links.

Example:

```yaml
category: "symbols"
```

### `tradition`

**Purpose:**  
Describes the cultural, religious, philosophical, or esoteric context of the entry.

**SEO and entity value:**  
Helps clarify whether a topic belongs to Taoism, folk religion, Feng Shui, Chinese cosmology, temple practice, ritual culture, or broader East Asian traditions.

**Maintenance cost:**  
Low to medium. It requires editorial consistency, but it is flexible enough to remain useful across categories.

**Required:**  
Yes.

**Guidance:**
- Use concise descriptive phrases.
- Avoid turning this field into a long explanation.
- Do not use it as a replacement for category.

Example:

```yaml
tradition: "Taoist cosmology and I Ching philosophy"
```

### `region`

**Purpose:**  
Identifies the geographic or cultural region most associated with the entry.

**SEO and entity value:**  
Supports future filtering by regional tradition and helps distinguish Chinese, Taiwanese, Hong Kong, Southeast Asian Chinese, Japanese, Korean, or broader East Asian contexts.

**Maintenance cost:**  
Medium. Some topics are pan-regional or historically complex, so over-specific tagging can create inconsistency.

**Required:**  
Optional.

**Guidance:**
- Use broad stable labels.
- Leave blank if the entry is not region-specific.
- Prefer consistency over excessive precision.

Examples:

```yaml
region: "China"
```

```yaml
region: "East Asia"
```

### `entityType`

**Purpose:**  
Defines what kind of archive entity the entry represents.

**SEO and entity value:**  
This is one of the most important fields for future relationship graphing. It helps distinguish concepts, symbols, rituals, objects, spirit entities, festivals, texts, places, and practices.

**Maintenance cost:**  
Medium. Requires a controlled vocabulary, but it prevents long-term metadata chaos.

**Required:**  
Yes.

**Recommended v1 values:**
- `symbol`
- `concept`
- `ritual`
- `practice`
- `belief`
- `object`
- `text`
- `spirit-entity`
- `festival`
- `place`
- `system`

**Guidance:**
- Use one primary entity type.
- Do not invent new values unless the existing list cannot reasonably describe the entry.
- Keep values lowercase and hyphenated.

Example:

```yaml
entityType: "symbol"
```

### `relatedEntries`

**Purpose:**  
Lists related entry slugs for internal linking and graph relationships.

**SEO and entity value:**  
Supports contextual internal links, topical clusters, related topic chips, and future graph edges.

**Maintenance cost:**  
Medium. Related links must be reviewed as the archive grows to avoid stale, weak, or repetitive connections.

**Required:**  
Optional, but recommended for most published entries.

**Guidance:**
- Use slugs, not titles.
- Link to closely related entries, not every vaguely connected topic.
- Prefer 3 to 8 strong relationships.
- Include foundational concepts when relevant.

Example:

```yaml
relatedEntries:
  - "yin-yang"
  - "five-elements"
  - "luopan-compass"
```

### `keywords`

**Purpose:**  
Stores target search phrases, semantic variants, and editorial keyword intent.

**SEO and entity value:**  
Helps plan content coverage and align entries with search behavior without forcing awkward phrasing into titles.

**Maintenance cost:**  
Medium. Keywords can become noisy if every article accumulates too many terms.

**Required:**  
Optional.

**Guidance:**
- Use a small number of focused phrases.
- Prefer semantic relevance over search-volume chasing.
- Avoid duplicating the same keyword set across many entries.
- Do not use keywords as public tags unless intentionally designed.

Example:

```yaml
keywords:
  - "bagua meaning"
  - "bagua symbol"
  - "taoist bagua"
```

### `seoTitle`

**Purpose:**  
Optional search-optimized title override for metadata.

**SEO and entity value:**  
Allows the visible article title to remain clean while metadata can include clarifying context.

**Maintenance cost:**  
Low to medium. Overuse can create inconsistency between page title and metadata.

**Required:**  
Optional.

**Guidance:**
- Use only when the default title is too short or ambiguous.
- Keep it natural and non-clickbait.
- Avoid repeating the site name unless the system requires it.

Example:

```yaml
seoTitle: "Bagua Meaning in Taoist Cosmology and Feng Shui"
```

### `seoDescription`

**Purpose:**  
Optional concise metadata description for search snippets and social previews.

**SEO and entity value:**  
Improves clarity in search results and can help distinguish similar archive entries.

**Maintenance cost:**  
Medium. Descriptions require editorial care and should stay accurate as articles evolve.

**Required:**  
Optional, but recommended for important cornerstone entries.

**Guidance:**
- Summarize the entry in one sentence.
- Avoid supernatural promises or exaggerated claims.
- Keep cultural, historical, and educational framing.

Example:

```yaml
seoDescription: "Learn how the Bagua functions as a symbolic system in Taoist cosmology, the I Ching, and Feng Shui traditions."
```

### `content`

**Purpose:**  
The main markdown article body.

**SEO and entity value:**  
The content provides topical depth, entity context, semantic coverage, internal links, and reader value.

**Maintenance cost:**  
High. Content requires research, editing, updates, and consistency with the archive's educational positioning.

**Required:**  
Yes.

**Guidance:**
- Use consistent section structures where practical.
- Include historical, symbolic, ritual, cultural, and interpretive context.
- Avoid turning metadata into a substitute for good article structure.
- Do not rewrite content only to satisfy metadata.

## Example Schemas

### Symbol Example

```yaml
slug: "bagua"
title: "Bagua"
category: "symbols"
tradition: "Taoist cosmology and I Ching philosophy"
region: "China"
entityType: "symbol"
relatedEntries:
  - "yin-yang"
  - "five-elements"
  - "luopan-compass"
keywords:
  - "bagua meaning"
  - "bagua symbol"
  - "taoist bagua"
seoTitle: "Bagua Meaning in Taoist Cosmology and Feng Shui"
seoDescription: "Explore the Bagua as a symbolic system connected to Taoist cosmology, the I Ching, and Feng Shui traditions."
```

### Taoism Example

```yaml
slug: "dao"
title: "Dao"
category: "taoism"
tradition: "Classical Taoist philosophy and religious Taoism"
region: "China"
entityType: "concept"
relatedEntries:
  - "yin-yang"
  - "wu-wei"
  - "taiji"
keywords:
  - "dao meaning"
  - "taoist dao"
  - "dao in taoism"
seoTitle: "Dao Meaning in Taoist Philosophy and Tradition"
seoDescription: "A cultural and philosophical overview of the Dao as a central concept in Taoist thought and religious tradition."
```

### Ritual Example

```yaml
slug: "talisman-burning"
title: "Talisman Burning"
category: "rituals"
tradition: "Taoist ritual practice and Chinese folk spirituality"
region: "East Asia"
entityType: "ritual"
relatedEntries:
  - "fu-talismans"
  - "dao"
  - "ghost-month"
keywords:
  - "talisman burning"
  - "taoist talisman ritual"
  - "fu talisman burning"
seoTitle: "Talisman Burning in Taoist Ritual Practice"
seoDescription: "Learn how talisman burning functions as a ritual practice in Taoist and Chinese folk religious traditions."
```

### Folk Belief Example

```yaml
slug: "ghost-month"
title: "Ghost Month"
category: "folk-beliefs"
tradition: "Chinese folk religion and ancestral observance"
region: "East Asia"
entityType: "belief"
relatedEntries:
  - "hungry-ghosts"
  - "ancestor-veneration"
  - "spirit-money"
keywords:
  - "ghost month meaning"
  - "chinese ghost month"
  - "hungry ghost festival beliefs"
seoTitle: "Ghost Month in Chinese Folk Religion"
seoDescription: "An educational overview of Ghost Month beliefs, ancestral offerings, hungry ghosts, and related Chinese folk religious customs."
```

## Fields Intentionally Excluded From v1

### `author`

**Why excluded:**  
The archive currently functions as a structured reference project rather than a multi-author publication. Adding author metadata too early creates maintenance overhead without improving the core entity graph.

**Future use:**  
Add if multiple credited contributors, reviewers, or subject-matter editors become part of the project.

### `publishedDate`

**Why excluded:**  
Many encyclopedia-style entries are evergreen. Publication dates can make reference content appear stale.

**Future use:**  
Add if the project introduces blog-like updates, changelogs, or editorial transparency pages.

### `lastReviewed`

**Why excluded:**  
Useful, but only if the project has a real review workflow. Otherwise it becomes stale metadata.

**Future use:**  
Add when review cycles are formalized.

### `difficulty`

**Why excluded:**  
Difficulty labels are subjective and may not apply cleanly across symbols, rituals, spirits, festivals, and objects.

**Future use:**  
Could be useful for learning paths, but not necessary for archive v1.

### `sources`

**Why excluded:**  
Source handling should be designed carefully. A weak source field can become inconsistent quickly.

**Future use:**  
Add structured citations later if the archive commits to a citation standard.

### `aliases`

**Why excluded:**  
Useful for search, but can become messy across transliteration systems, Chinese characters, regional names, and popular spellings.

**Future use:**  
Add when search and entity disambiguation become priorities.

### `chineseName`

**Why excluded:**  
Important for many entries, but not universal across all future archive types and regions. It also requires careful encoding, variant handling, and editorial accuracy.

**Future use:**  
Add once multilingual naming conventions are standardized.

### `pinyin`

**Why excluded:**  
Useful for Chinese-specific entries, but not all entries will be Chinese-language terms.

**Future use:**  
Add together with `chineseName`, `aliases`, and broader naming rules.

### `relationshipTypes`

**Why excluded:**  
Typed graph edges are powerful but too complex for v1. Simple `relatedEntries` is enough for the first stable schema.

**Future use:**  
Add once the archive has enough entries to justify explicit graph modeling.

### `contentWarnings`

**Why excluded:**  
May be useful for spirit, death, funerary, or ritual topics, but not essential to v1.

**Future use:**  
Add if the archive expands into sensitive topics requiring reader context.

## Future Optional Schema Expansion Ideas

### Naming and Language Fields

Possible fields:

- `aliases`
- `chineseName`
- `pinyin`
- `japaneseName`
- `koreanName`
- `alternateSpellings`

Use when the archive needs stronger multilingual entity disambiguation.

### Graph Relationship Fields

Possible fields:

- `relatedSymbols`
- `relatedRituals`
- `relatedEntities`
- `relatedObjects`
- `relatedFestivals`
- `cosmologyLinks`
- `protectivePracticeLinks`
- `relationshipTypes`

Use when simple related entries are no longer enough.

### Editorial Workflow Fields

Possible fields:

- `status`
- `author`
- `reviewer`
- `lastReviewed`
- `revisionNotes`
- `sourceQuality`

Use only after there is a real editorial workflow.

### Research and Citation Fields

Possible fields:

- `sources`
- `furtherReading`
- `primaryTexts`
- `historicalPeriod`
- `schoolOrLineage`

Use when the archive develops higher research depth and citation standards.

### Discovery and UX Fields

Possible fields:

- `summary`
- `featured`
- `learningPath`
- `complexity`
- `popularEntry`
- `seasonalRelevance`

Use if the site adds guided browsing, curated collections, or seasonal landing pages.

## Maintainability Recommendations

### Keep Controlled Vocabularies Small

Fields like `category` and `entityType` should use a controlled list. Too many values will make filtering and graphing unreliable.

### Prefer One Primary Category

Each entry should have one primary category. Cross-category relevance should be handled through `relatedEntries`, not multiple categories.

### Limit Related Entries

Too many related links weaken the graph. Prefer a small set of meaningful relationships over broad topical association.

Recommended range:

- Minimum: 2 to 3 related entries for mature articles
- Ideal: 3 to 8 related entries
- Avoid: 15 or more unless there is a strong reason

### Keep SEO Fields Optional

Most entries can derive metadata from `title` and `tradition`. Use `seoTitle` and `seoDescription` only when they improve clarity or search targeting.

### Avoid Keyword Hoarding

Keywords should guide editorial intent, not become a dumping ground for every possible search phrase.

Recommended range:

- 2 to 6 keywords per entry
- Prefer semantic quality over quantity

### Do Not Encode Every Idea In Metadata

If a concept is only useful inside one article, put it in the article body. Metadata should support site-wide structure, not replace writing.

## Avoiding Metadata Entropy

Metadata entropy happens when fields multiply, values become inconsistent, and editors stop trusting the schema.

To avoid it:

- Review new field proposals carefully.
- Do not add fields for one-off needs.
- Keep field names stable.
- Use lowercase hyphenated values for controlled fields.
- Periodically audit category, entity type, and related entry values.
- Prefer fewer reliable fields over many inconsistent fields.

## Avoiding Over-Engineering

The archive does not need a full ontology in v1. It needs enough structure to support durable URLs, category pages, related topics, search, filtering, and future graph expansion.

Avoid in v1:

- Typed relationship edges
- Multi-level taxonomies inside every entry
- Complex citation schemas
- Locale-specific naming systems
- Automated authority scoring
- Excessive workflow metadata

These may become useful later, but they should not slow down article production or make markdown hard to maintain.

## Recommended v1 Frontmatter Shape

```yaml
slug: ""
title: ""
category: ""
tradition: ""
region: ""
entityType: ""
relatedEntries: []
keywords: []
seoTitle: ""
seoDescription: ""
```

The markdown body below the frontmatter is the `content` field.

## Summary

Archive Metadata Schema v1 should establish a lightweight but durable foundation. The most important stable fields are `slug`, `title`, `category`, `tradition`, `entityType`, and `content`. Optional fields like `region`, `relatedEntries`, `keywords`, `seoTitle`, and `seoDescription` support SEO, internal linking, filtering, and graph expansion without overloading every entry.

The schema should evolve slowly. Its job is to make the archive easier to scale, not harder to write.
