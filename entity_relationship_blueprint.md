# Entity Relationship Blueprint

## Purpose

This document defines how archive entities in Eastern Mysticism Archive should connect to one another. The goal is to build a coherent encyclopedia-style relationship system that supports topical authority, internal linking, semantic SEO, future filtering, and eventual archive graphing.

The archive should not link topics randomly. Each relationship should clarify meaning, context, origin, use, symbolic connection, ritual role, or category-level relevance.

## Core Principle

Every archive entry should behave as both:

- an encyclopedia article
- a node in a larger cultural, symbolic, and ritual graph

Related entries should help readers understand where the topic belongs and what adjacent topics explain it.

## Entity Connection Model

Archive entities can connect through several broad patterns:

- shared cosmological framework
- symbolic representation
- ritual use
- historical or textual relationship
- category membership
- applied system relationship
- festival or seasonal context
- household or temple practice
- protective function
- conceptual dependency

The strongest links are those that help explain the entity. Weak links that merely share a broad cultural background should usually be avoided.

## Relationship Types

### Concept-to-Concept

Concept-to-concept relationships connect abstract ideas, philosophical principles, cosmological systems, or interpretive frameworks.

**Examples:**

- `dao` -> `qi`
- `qi` -> `yin-yang`
- `five-elements` -> `qi`
- `dao` -> `wu-wei`

**When to use:**

- One concept explains another.
- Two concepts frequently appear together in the same tradition.
- A reader needs one concept to understand the other.

**Avoid:**

- Linking every Taoist concept to every other Taoist concept.
- Linking because two terms are both famous.

### Symbol-to-Cosmology

Symbol-to-cosmology relationships connect visual or diagrammatic symbols to the cosmological systems they express.

**Examples:**

- `bagua` -> `eight-trigrams`
- `bagua` -> `yin-yang`
- `eight-trigrams` -> `dao`
- `bagua-and-five-elements` -> `five-elements`
- `lo-shu-square` -> `bagua`

**When to use:**

- A symbol encodes cosmological ideas.
- A diagram depends on a concept such as yin-yang, qi, trigrams, or Five Elements.
- A cosmological topic explains why a symbol matters.

**Avoid:**

- Linking symbols only because they are visually common.
- Linking a symbol to a cosmological concept that is not discussed in the entry.

### Symbol-to-Ritual

Symbol-to-ritual relationships connect symbols to ritual actions, protective practices, temple use, talismans, offerings, or ceremonial contexts.

**Examples:**

- `bagua` -> `protection-ritual`
- `dragon-symbol` -> temple or festival topics when available
- `door-gods` -> `protection-ritual`
- `fu-talismans` -> `talisman-burning`

**When to use:**

- The symbol appears in ritual objects or practices.
- The symbol marks protection, offering, invocation, purification, or threshold meaning.
- The ritual helps explain the active cultural use of the symbol.

**Avoid:**

- Linking every symbol to rituals just because it has religious associations.
- Linking to ritual pages where the symbol is not meaningfully relevant.

### Taoism-to-Symbol

Taoism-to-symbol relationships connect Taoist concepts, deities, rituals, or texts to visual and cosmological symbols.

**Examples:**

- `dao` -> `bagua`
- `qi` -> `yin-yang`
- `three-pure-ones` -> Taoist ritual symbols when available
- `wu-wei` -> `dao`

**When to use:**

- A Taoist concept is represented through a symbol.
- A symbol helps explain Taoist cosmology.
- A Taoist ritual or deity system uses symbolic diagrams or objects.

**Avoid:**

- Treating every Chinese symbol as automatically Taoist.
- Linking folk religious symbols to Taoism unless the article explains the connection.

### Feng-Shui-to-Symbol

Feng-Shui-to-symbol relationships connect applied spatial topics to symbols, diagrams, tools, and cosmological frameworks.

**Examples:**

- `bagua-in-feng-shui` -> `bagua`
- `bagua-map` -> `eight-trigrams`
- `qi-flow` -> `qi`
- `five-elements-in-feng-shui` -> `five-elements`
- `luopan-compass` -> `lo-shu-square`

**When to use:**

- A Feng Shui method depends on a symbolic diagram.
- A spatial topic uses a cosmological framework.
- A tool or map contains symbols that require explanation.

**Avoid:**

- Linking Feng Shui pages to unrelated symbols for decoration.
- Linking to broad Taoist pages unless they clarify the Feng Shui topic.

### Folk-Belief-to-Ritual

Folk-belief-to-ritual relationships connect everyday beliefs, household customs, festivals, spirits, and protective traditions to the actions that express them.

**Examples:**

- `ancestor-veneration` -> `ancestor-ritual`
- `ghost-month` -> `incense-offering`
- `kitchen-god` -> `incense-offering`
- `door-gods` -> `protection-ritual`

**When to use:**

- A belief is enacted through a ritual.
- A household or festival practice explains the belief.
- A ritual provides the practical context for the belief.

**Avoid:**

- Linking every folk belief to every ritual.
- Linking because both topics involve spirits, offerings, or protection without a direct relationship.

## Relationship Priority Levels

### Primary Relationships

Primary relationships are essential to understanding an entry. They should appear first in `relatedEntries`.

**Definition:**

- Direct explanatory relationship
- Parent concept or foundational system
- Core counterpart or paired topic
- Main applied use
- Main ritual expression

**Recommended count:**  
2 to 4 per entry.

**Examples:**

- `bagua` -> `eight-trigrams`
- `qi` -> `dao`
- `ancestor-veneration` -> `ancestor-ritual`
- `bagua-in-feng-shui` -> `bagua-map`

### Secondary Relationships

Secondary relationships are strongly relevant but not essential. They expand the reader's understanding into adjacent systems.

**Definition:**

- Closely related category topic
- Applied version of a concept
- Related symbol, object, or practice
- Historical or interpretive neighbor

**Recommended count:**  
2 to 4 per entry.

**Examples:**

- `bagua-directions` -> `lo-shu-square`
- `five-elements-in-feng-shui` -> `qi-flow`
- `door-gods` -> `kitchen-god`
- `three-pure-ones` -> `incense-offering`

### Contextual Relationships

Contextual relationships are useful for discovery but should be used sparingly. They provide broader thematic connections.

**Definition:**

- Shared tradition
- Shared ritual environment
- Shared symbolic language
- Shared festival or household context

**Recommended count:**  
0 to 2 per entry.

**Examples:**

- `dragon-symbol` -> `qi`
- `talisman-burning` -> `ghost-month`
- `early-heaven-bagua` -> `dao`

## Recommended Related Entries Limits

### General Rule

Each mature article should usually have:

- Minimum: 3 related entries
- Ideal range: 4 to 8 related entries
- Maximum: 10 related entries

Most entries should not exceed 8. More than 10 should be reserved for major hub entries.

### Hub Entry Rule

Foundational hub entries may support more links if they are central to a cluster.

Examples of hub entries:

- `bagua`
- `dao`
- `qi`
- `five-elements`
- `ancestor-veneration`

Recommended range for hub entries:

- 8 to 12 related entries

Hub pages should link carefully, not exhaustively.

### Narrow Entry Rule

Narrow entries should stay focused.

Examples:

- `early-heaven-bagua`
- `kitchen-god`
- `incense-offering`

Recommended range:

- 3 to 6 related entries

## Avoiding Random Linking

Random linking weakens the archive graph and makes related topics less useful.

### A Link Should Pass One Of These Tests

1. **Explanation Test**  
   Does the target explain a concept needed to understand the current entry?

2. **Use Test**  
   Is the current entity used in the target ritual, practice, object, or system?

3. **Expression Test**  
   Does the current entity express or represent the target concept?

4. **Context Test**  
   Do both entities appear in the same clear cultural, ritual, or historical context?

5. **Cluster Test**  
   Are both entries part of the same intentional entity cluster?

If a link fails all five tests, do not add it.

### Avoid These Linking Patterns

- Linking every entry in one category to every other entry in that category.
- Linking only because two topics are popular.
- Linking from a narrow entry to a broad hub without explaining why.
- Linking to a topic that is not mentioned or implied in the article.
- Repeating the same related list across many pages.
- Treating `relatedEntries` as SEO keyword stuffing.

## Future Entity Cluster Method

An entity cluster is a planned group of entries around a foundational topic. A strong cluster includes a hub page, supporting explanation pages, applied-use pages, and cross-category bridge pages.

### Cluster Structure

Each cluster should include:

1. **Hub Entry**  
   The broad central topic.

2. **Foundational Concepts**  
   Entries needed to understand the hub.

3. **Structural Subtopics**  
   Parts, arrangements, forms, or systems within the hub.

4. **Applied Contexts**  
   How the topic appears in Feng Shui, ritual, folk belief, temples, festivals, or symbolism.

5. **Bridge Entries**  
   Pages that connect the cluster to other categories.

### Example: Bagua Cluster

**Hub:**

- `bagua`

**Foundational concepts:**

- `eight-trigrams`
- `yin-yang`
- `dao`
- `qi`

**Structural subtopics:**

- `early-heaven-bagua`
- `later-heaven-bagua`
- `bagua-directions`
- `bagua-and-five-elements`

**Applied contexts:**

- `bagua-map`
- `bagua-in-feng-shui`
- `qi-flow`
- `five-elements-in-feng-shui`

**Bridge topics:**

- `lo-shu-square`
- `five-elements`
- `luopan-compass`

### Example: Ancestor Rituals Cluster

**Hub:**

- `ancestor-veneration`

**Foundational concepts:**

- `ancestor-ritual`
- `incense-offering`
- `ghost-month`

**Applied contexts:**

- household altar topics when available
- Qingming when available
- funeral offerings when available

**Bridge topics:**

- `kitchen-god`
- spirit money when available
- afterlife belief entries when available

## Existing Example Relationships

### Bagua

`bagua` should function as a major hub. Its strongest relationships are:

- `eight-trigrams`
- `early-heaven-bagua`
- `later-heaven-bagua`
- `bagua-directions`
- `bagua-map`
- `bagua-in-feng-shui`
- `lo-shu-square`
- `five-elements-in-feng-shui`

The Bagua cluster should connect symbols, cosmology, Feng Shui, qi, and Five Elements without turning every related page into a duplicate explanation.

### Eight Trigrams

`eight-trigrams` should explain the structural basis of the Bagua.

Strong relationships:

- `bagua`
- `early-heaven-bagua`
- `later-heaven-bagua`
- `bagua-directions`
- `yin-yang`

It should not become a general Feng Shui page. Feng Shui links should be secondary.

### Qi

`qi` should function as a broad cosmological and Taoist concept.

Strong relationships:

- `dao`
- `yin-yang`
- `qi-flow`
- `five-elements`
- `five-elements-in-feng-shui`

Because qi appears across many traditions, its related links should be curated carefully. Do not link every Feng Shui or ritual page back to `qi` unless qi is central to that page.

### Dao

`dao` should be treated as a Taoist philosophical hub.

Strong relationships:

- `wu-wei`
- `qi`
- `yin-yang`
- `bagua`

Dao links should clarify philosophical or cosmological context. Avoid linking every folk belief or ritual to `dao` unless the Taoist connection is meaningful.

### Five Elements

`five-elements` and `five-elements-in-feng-shui` should be related but distinct.

Strong relationships:

- `five-elements` -> cosmological system
- `five-elements-in-feng-shui` -> applied spatial use
- `bagua-and-five-elements`
- `qi-flow`
- `bagua-map`

This separation helps the archive avoid collapsing general cosmology into applied Feng Shui.

### Ancestor Rituals

`ancestor-ritual` should connect ritual action to folk belief and family memory.

Strong relationships:

- `ancestor-veneration`
- `incense-offering`
- `ghost-month`
- `folk-beliefs`

Future relationships may include Qingming, spirit tablets, ancestral halls, funeral rites, and spirit money.

## Relationship Review Checklist

Before adding a related entry, ask:

- Is this relationship direct enough to help a reader?
- Is the linked topic mentioned or clearly implied in the article?
- Does the target explain, express, apply, or contextualize the current entry?
- Is this a primary, secondary, or contextual link?
- Is the related list becoming too broad?
- Does this link strengthen a planned cluster?
- Would a reader reasonably expect this topic as a next step?

## Long-Term Graph Direction

The archive can eventually move from simple `relatedEntries` to typed relationships. For now, simple related slugs are enough. The editorial pattern should still anticipate graph growth.

Future typed relationship ideas:

- `explains`
- `symbolizes`
- `usedIn`
- `appearsIn`
- `associatedWith`
- `protectsAgainst`
- `belongsTo`
- `derivedFrom`
- `appliedIn`
- `ritualizes`

These should not be implemented until the archive has enough stable content to justify typed edges.

## Summary

The archive relationship system should prioritize meaningful, explanatory links over volume. Primary relationships should define the entity. Secondary relationships should expand the reader's understanding. Contextual relationships should be used sparingly for discovery.

Strong clusters, such as the Bagua cluster and future Ancestor Rituals cluster, should be built intentionally around hub entries, foundational concepts, structural subtopics, applied contexts, and bridge pages. This approach supports semantic SEO, reader navigation, and future graph architecture without turning the archive into a random web of links.
