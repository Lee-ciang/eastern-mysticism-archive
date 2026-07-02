# Full Archive Audit v2

Date: 2026-06-22

Project: Eastern Mysticism Archive

Scope: all routed markdown content under `content/symbols`, `content/feng-shui`, `content/folk-beliefs`, `content/taoism`, and `content/rituals`.

No content, route, component, metadata, sitemap, robots, or configuration files were modified during this audit.

## Executive Summary

The archive contains 189 routed content pages and 2,525 directed editorial links. The graph has no duplicate slugs, broken `related` links, orphan pages, or pages with zero inbound links.

The archive is highly connected, but recent expansion has created a recurring topology: new clusters are internally dense and link outward to established authority pages, while several receive no reciprocal inbound links from outside their own cluster. This makes them crawlable and non-orphaned, but still isolated as topical islands.

Key findings:

- Routed content pages: 189
- Editorial graph edges: 2,525
- Average outgoing degree: 13.36
- Directed graph density: 7.11%
- Duplicate slugs: 0
- Broken related links: 0
- Orphan pages: 0
- Pages with zero inbound links: 0
- Pages with exactly one inbound link: 3
- Pages with more than 20 frontmatter related links: 1
- Main structural risk: excessive dependence on a small set of authority nodes
- Main expansion risk: internally complete clusters with weak external inbound support

## 1. Total Content Count

Total routed content pages: **189**

The production build also includes category indexes, metadata routes, the homepage, and framework pages, which explains the higher static-page count reported by builds.

## 2. Content Count by Category

| Category | Pages | Outgoing edges | Inbound edges | Avg inbound | Avg outgoing |
|---|---:|---:|---:|---:|---:|
| Symbols | 51 | 694 | 720 | 14.12 | 13.61 |
| Feng Shui | 8 | 54 | 74 | 9.25 | 6.75 |
| Folk Beliefs | 41 | 590 | 474 | 11.56 | 14.39 |
| Taoism | 69 | 965 | 975 | 14.13 | 13.99 |
| Rituals | 20 | 222 | 282 | 14.10 | 11.10 |

Taoism is the largest collection. Feng Shui remains the smallest and least internally developed category.

## 3. Duplicate Slugs

Result: **none found**.

Every routed page has a unique slug across all five active content collections.

## 4. Broken Related Links

Result: **none found**.

All frontmatter `related` values resolve to existing routed content slugs.

## 5. Orphan Pages

Result: **none found**.

Every routed page receives at least one editorial inbound link from another content page.

## 6. Pages with Zero Inbound Links

Result: **none found**.

This is a strong crawlability result. Category indexes and homepage listings were excluded from this count.

## 7. Pages with Only One Inbound Link

| Page | Inbound | Outgoing | Total degree | Assessment |
|---|---:|---:|---:|---|
| `/feng-shui/luopan-compass` | 1 | 2 | 3 | Most fragile page in the graph; both inbound and outbound support are weak. |
| `/feng-shui/five-elements-and-bagua` | 1 | 10 | 11 | Good outbound bridge, but almost no authority flows back into it. |
| `/feng-shui/qi-in-feng-shui` | 1 | 10 | Important cross-category bridge with insufficient inbound support. |

All three one-inbound pages are in Feng Shui, confirming that this category needs graph reinforcement before further expansion.

## 8. Pages with More Than 20 Related Links

| Page | Related links | Inbound | Assessment |
|---|---:|---:|---|
| `/symbols/fu-talismans` | 22 | 9 | Intentional Talisman/Fu hub, but still the only page above the current density threshold. |

No other page has more than 20 frontmatter related links.

## 9. Top 20 Most Connected Pages

Ranked by inbound plus outgoing editorial degree.

| Rank | Page | Inbound | Outgoing | Total |
|---:|---|---:|---:|---:|
| 1 | `/symbols/yin-yang` | 103 | 11 | 114 |
| 2 | `/symbols/five-elements` | 95 | 10 | 105 |
| 3 | `/taoism/qi-energy` | 71 | 20 | 91 |
| 4 | `/taoism/dao` | 78 | 11 | 89 |
| 5 | `/symbols/bagua` | 72 | 10 | 82 |
| 6 | `/taoism/taoist-cosmology` | 64 | 10 | 74 |
| 7 | `/taoism/qi` | 57 | 12 | 69 |
| 8 | `/taoism/cosmology-in-taoism` | 45 | 20 | 65 |
| 9 | `/taoism/deities-in-taoism` | 42 | 13 | 55 |
| 10 | `/rituals/protection-ritual` | 41 | 13 | 54 |
| 11 | `/folk-beliefs/ancestor-veneration` | 39 | 12 | 51 |
| 12 | `/folk-beliefs/chinese-zodiac` | 25 | 18 | 43 |
| 13 | `/rituals/spirit-offerings` | 32 | 8 | 40 |
| 14 | `/taoism/immortals-in-taoism` | 19 | 21 | 40 |
| 15 | `/symbols/protective-charms` | 31 | 8 | 39 |
| 16 | `/rituals/ritual-purification` | 30 | 8 | 38 |
| 17 | `/folk-beliefs/zodiac-symbolism` | 20 | 18 | 38 |
| 18 | `/taoism/chinese-deities` | 19 | 19 | 38 |
| 19 | `/taoism/taoist-deities` | 19 | 19 | 38 |
| 20 | `/folk-beliefs/lunar-calendar` | 18 | 20 | 38 |

Authority concentration is very high around Yin-Yang, Five Elements, Qi, Dao, Bagua, and Taoist Cosmology.

## 10. Weakest Connected Pages

Ranked by total editorial degree.

| Page | Inbound | Outgoing | Total |
|---|---:|---:|---:|
| `/feng-shui/luopan-compass` | 1 | 2 | 3 |
| `/folk-beliefs/ancestral-hall` | 2 | 8 | 10 |
| `/rituals/ancestor-ritual-symbols` | 2 | 8 | 10 |
| `/feng-shui/five-elements-and-bagua` | 1 | 10 | 11 |
| `/feng-shui/qi-in-feng-shui` | 1 | 10 | 11 |
| `/symbols/earth-element` | 3 | 8 | 11 |
| `/symbols/fire-element` | 3 | 8 | 11 |
| `/symbols/metal-element` | 3 | 8 | 11 |
| `/symbols/water-element` | 3 | 8 | 11 |
| `/symbols/wood-element` | 3 | 8 | 11 |
| `/feng-shui/bagua-map` | 7 | 4 | 11 |
| `/symbols/qi-and-bagua` | 2 | 10 | 12 |
| `/taoism/earth-god` | 2 | 10 | 12 |
| `/taoism/five-elements-and-qi` | 2 | 10 | 12 |
| `/taoism/queen-mother-of-the-west` | 2 | 10 | 12 |
| `/symbols/early-heaven-bagua` | 3 | 9 | 12 |
| `/taoism/unity-of-heaven-and-humanity` | 3 | 9 | 12 |
| `/taoism/vital-energy-concepts` | 3 | 9 | 12 |
| `/folk-beliefs/filial-piety-and-ancestors` | 4 | 8 | 12 |
| `/folk-beliefs/protective-folk-customs` | 4 | 8 | 12 |

## 11. Hub Pages by Category

### Symbols

1. `/symbols/yin-yang` — 114 total degree
2. `/symbols/five-elements` — 105
3. `/symbols/bagua` — 82
4. `/symbols/protective-charms` — 39
5. `/symbols/i-ching-divination` — 37

### Feng Shui

1. `/feng-shui/qi-flow` — 35
2. `/feng-shui/five-elements-in-feng-shui` — 24
3. `/feng-shui/bagua-in-feng-shui` — 20
4. `/feng-shui/cosmology-and-feng-shui` — 13
5. `/feng-shui/bagua-map` — 11

### Folk Beliefs

1. `/folk-beliefs/ancestor-veneration` — 51
2. `/folk-beliefs/chinese-zodiac` — 43
3. `/folk-beliefs/zodiac-symbolism` — 38
4. `/folk-beliefs/lunar-calendar` — 38
5. `/folk-beliefs/traditional-festival-cycle` — 38

### Taoism

1. `/taoism/qi-energy` — 91
2. `/taoism/dao` — 89
3. `/taoism/taoist-cosmology` — 74
4. `/taoism/qi` — 69
5. `/taoism/cosmology-in-taoism` — 65

### Rituals

1. `/rituals/protection-ritual` — 54
2. `/rituals/spirit-offerings` — 40
3. `/rituals/ritual-purification` — 38
4. `/rituals/ancestor-ritual` — 33
5. `/rituals/incense-offering` — 31

## 12. Graph Density Estimate

- Nodes: 189
- Directed editorial edges: 2,525
- Possible directed edges excluding self-links: 35,532
- Estimated directed density: **7.11%**
- Average outgoing degree: **13.36**

For an editorial archive of this size, 7.11% is dense. The graph is not suffering from general underlinking. The challenge is link quality, reciprocity, and concentration rather than raw edge count.

## 13. Cluster Health Analysis

| Cluster | Pages | Internal edges | Internal density | External inbound | Assessment |
|---|---:|---:|---:|---:|---|
| Cosmology | 10 | 50 | 55.6% | 152 | Strongest integrated cluster; excellent external authority support. |
| Festival & Calendar | 10 | 81 | 90.0% | 34 | Strong and reasonably integrated. |
| I Ching / Divination | 10 | 90 | 100% | 10 | Complete internal mesh; modest outside support. |
| Talisman / Fu | 10 | 74 | 82.2% | 0 | Connected internally, but isolated from older pages on inbound flow. |
| Chinese Zodiac | 10 | 90 | 100% | 26 | Healthy and externally supported through recent cross-cluster pages. |
| Chinese Deities | 10 | 90 | 100% | 36 | Healthy and increasingly central. |
| Sacred Animals | 10 | 90 | 100% | 0 | Complete internal mesh but no inbound links from outside the cluster. |
| Eight Immortals | 10 | 90 | 100% | 0 | Complete internal mesh but no external inbound support. |
| Folk Magic | 6 | 30 | 100% | 0 | Compact and complete, but entirely self-supported inbound. |

Cluster conclusions:

- Cosmology is the strongest model because it combines internal links with substantial external inbound authority.
- Zodiac and Chinese Deities are the healthiest recent clusters because later clusters have begun linking into them.
- Sacred Animals, Eight Immortals, Folk Magic, and Talisman/Fu are not orphans, but they are graph islands: inbound links come only from cluster peers.
- Full-mesh linking guarantees crawlability but can look mechanical. Future cluster work should favor curated hub-and-spoke structures with reciprocal bridges.

## 14. Internal Link Opportunities

### Highest Priority

1. Strengthen Feng Shui inbound links.
   - Link older Bagua, trigrams, Lo Shu, Qi, and Five Elements pages into `/feng-shui/luopan-compass`, `/feng-shui/five-elements-and-bagua`, and `/feng-shui/qi-in-feng-shui`.

2. Add external inbound support to recent cluster hubs.
   - Existing authority pages should eventually link to `/symbols/fu-talismans`, `/symbols/sacred-animals`, `/taoism/eight-immortals`, and `/folk-beliefs/folk-magic`.

3. Build reciprocity from authority hubs.
   - New pages repeatedly link to Yin-Yang, Five Elements, Dao, Qi Energy, Bagua, Taoist Cosmology, Protective Charms, and Deities in Taoism, but these authority nodes do not consistently link back.

### Medium Priority

4. Strengthen individual Five Elements pages.
   - Wood, Fire, Earth, Metal, and Water each have only three inbound links despite the dominance of the Five Elements hub.

5. Strengthen secondary ancestor pages.
   - `/folk-beliefs/ancestral-hall` and `/rituals/ancestor-ritual-symbols` need support from Qingming, household altar, ancestor veneration, and festival pages.

6. Strengthen secondary deity pages.
   - `/taoism/earth-god` and `/taoism/queen-mother-of-the-west` need inbound links from the newer Chinese Deities cluster.

### Editorial Quality Opportunity

7. Expand short authority pages before adding more edges.
   - `/symbols/bagua` has 122 words and 72 inbound links.
   - `/symbols/yin-yang` has 161 words and 103 inbound links.
   - `/symbols/five-elements` has 181 words and 95 inbound links.
   - `/taoism/dao` has 160 words and 78 inbound links.

These pages carry extraordinary graph authority relative to their content depth.

## 15. Topic Overlap Opportunities

Healthy overlap areas that could become curated bridge sections:

- Zodiac + Sacred Animals: dragon, tiger, animal symbolism, calendar identity.
- Deities + Eight Immortals: popular devotion, temple imagery, heavens, sacred biographies.
- Talisman/Fu + Folk Magic: protective objects, charms, household customs, purification.
- Festival + Folk Magic: lucky symbols, taboos, offerings, seasonal protection.
- I Ching + Feng Shui: trigrams, Bagua, directions, Lo Shu, cosmological mapping.
- Sacred Animals + Feng Shui: Four Beasts, direction, Five Elements, spatial protection.
- Cosmology + Deities: celestial bureaucracy, heavens, star deities, divine order.
- Ancestor Beliefs + Festival: Qingming, Ghost Festival, offerings, family continuity.

Overlap should be expressed through bridge pages and reciprocal links, not duplicate overview articles.

## 16. Candidate Merge Opportunities

These pairs or groups have the highest potential for search-intent cannibalization. A merge is not automatically required; differentiation may be preferable.

| Candidate pages | Risk | Recommended audit question |
|---|---|---|
| `/taoism/qi` + `/taoism/qi-energy` | High | Is one canonical Qi hub and the other a distinct beginner-intent page? |
| `/taoism/taoist-cosmology` + `/taoism/cosmology-in-taoism` | High | Do they serve distinct conceptual vs hub intents? |
| `/taoism/deities-in-taoism` + `/taoism/taoist-deities` + `/taoism/chinese-deities` | High | Can each page own a distinct scope: archive hub, Taoist pantheon, broader Chinese deity systems? |
| `/taoism/taoist-immortals` + `/taoism/immortals-in-taoism` | High | Are these materially different, or reversed-title duplicates? |
| `/taoism/five-elements-and-qi` + `/taoism/qi-and-five-elements` | High | The phrasing and likely search intent are nearly identical. |
| `/symbols/bagua-and-five-elements` + `/feng-shui/five-elements-and-bagua` | High | Differentiate symbolic theory from Feng Shui application. |
| `/rituals/talisman-burning` + `/rituals/talisman-burning-practice` | Medium | Differentiate overview/history from ritual-process context. |
| `/symbols/dragon-symbol` + `/symbols/dragon-symbolism` | Medium | Keep one concise entity page and one broader cultural-symbolism article, or consolidate. |
| `/symbols/protective-talismans` + `/symbols/fu-talismans` | Medium | Differentiate generic protective objects from Taoist Fu forms. |
| `/folk-beliefs/folk-charms` + `/symbols/protective-charms` | Medium | Differentiate folk-cultural charm taxonomy from protective-symbol taxonomy. |

## 17. Missing Bridge Entities

High-value bridge entities that would connect existing clusters rather than create isolated expansions:

1. **Chinese Almanac / Huangli** — bridges Lunar Calendar, Zodiac, I Ching, auspicious timing, festivals, and folk taboos.
2. **Twenty-Four Solar Terms** — bridges calendar, seasonal rituals, cosmology, agriculture, and festivals.
3. **Taoist Priests and Ritual Specialists** — bridges deities, talismans, offerings, purification, temples, and ritual texts.
4. **Spirit Mediums in Chinese Folk Religion** — bridges folk magic, deities, spirit world, healing beliefs, and temple practice.
5. **Temple Guardian Animals** — bridges Sacred Animals, guardian symbols, temple architecture, protection, and deity imagery.
6. **Cosmological Directions** — bridges Bagua, Four Sacred Beasts, Five Elements, Feng Shui, and Lo Shu.
7. **Household Deities** — bridges Kitchen God, Earth God, Door Gods, household altars, offerings, and festivals.
8. **Auspicious Culture** — bridges lucky symbols, zodiac, festival customs, charms, colors, numbers, and wordplay.
9. **Immortals and Sacred Mountains** — bridges Eight Immortals, pilgrimage, sacred sites, cultivation, and Taoist geography.
10. **Paper Offerings** — bridges spirit money, festival offerings, funerals, ancestors, temple practice, and folk magic.

## 18. Top 20 Highest-Value Future Entities

Ranked by bridge potential, topical demand, and ability to strengthen existing content rather than form another isolated cluster.

| Rank | Future entity | Primary bridge value |
|---:|---|---|
| 1 | Chinese Almanac (Huangli) | Calendar + Zodiac + I Ching + taboos + auspicious timing |
| 2 | Twenty-Four Solar Terms | Festivals + seasonal rituals + cosmology + agriculture |
| 3 | Taoist Priests | Rituals + talismans + deities + temples + purification |
| 4 | Spirit Mediums | Folk magic + deities + spirit world + temple practice |
| 5 | Cosmological Directions | Bagua + Four Beasts + Five Elements + Feng Shui |
| 6 | Household Deities | Kitchen God + Earth God + Door Gods + household altar |
| 7 | Temple Guardian Animals | Sacred Animals + temples + protection + architecture |
| 8 | Paper Offerings | Ancestors + funerals + Ghost Festival + folk ritual |
| 9 | Incense Symbolism | Offerings + temples + ancestors + purification |
| 10 | Five Sacred Mountains of Taoism | Immortals + pilgrimage + sacred sites + cosmology |
| 11 | Mount Wudang | Taoist sacred geography + temples + pilgrimage |
| 12 | Mount Qingcheng | Taoist origins + sacred mountains + pilgrimage |
| 13 | Mount Longhu | Celestial Masters + talismans + ritual authority |
| 14 | Mazu | Chinese deities + sea protection + temples + festivals |
| 15 | Guan Yu / Guandi | Deities + martial guardians + loyalty symbolism + temples |
| 16 | Nezha | Deities + protective youth imagery + temples + folklore |
| 17 | Doumu | Star deities + Big Dipper + Taoist heavens + astrology |
| 18 | Big Dipper Deities | Star deities + calendar + longevity symbolism + ritual |
| 19 | Four Pillars of Destiny | Zodiac + stems/branches + Five Elements + calendar culture |
| 20 | Xuanwu as a Taoist Deity | Black Tortoise + deities + protection + northern cosmology |

## Final Assessment

The archive is technically healthy and unusually dense for 189 routed content pages. It has no crawlability emergencies. The next phase should focus on graph quality rather than raw page count.

Recommended priorities:

1. Add reciprocal inbound bridges to recent isolated clusters.
2. Reinforce the three weak Feng Shui pages.
3. Clarify or consolidate high-risk duplicate intents.
4. Expand the shortest high-authority hubs.
5. Build bridge entities such as the Chinese Almanac, Solar Terms, ritual specialists, and cosmological directions before launching another complete-mesh entity cluster.
