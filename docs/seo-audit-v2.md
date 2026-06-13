# SEO Audit v2

Date: 2026-06-09

Project: Eastern Mysticism Archive

Audit scope: routed content files under `content/symbols`, `content/feng-shui`, `content/folk-beliefs`, `content/taoism`, and `content/rituals`.

This audit did not modify any content files, routes, components, layout, metadata, sitemap, robots, or deployment configuration.

## Executive Summary

The site is in a healthy post-expansion state. The previous orphan issue has been resolved, the new Cosmology Cluster is active, and the Festival & Calendar Cluster is now deeply connected to existing ancestor, ghost, offering, and temple content.

Current routed content pages audited: 123

Key findings:

- Orphan pages: 0
- Weak pages with inbound links below 3: 10
- Overlinked pages with more than 15 `related` links: 15
- Broken `related` slugs: 0
- Slug conflicts: 0
- Exact duplicate slug conflicts: 0
- Main SEO risk: topical overlap/cannibalization in a few closely named conceptual pages
- Main next opportunity: build targeted clusters in currently empty or underdeveloped directories, especially I Ching / divination and talismans

## Methodology

Internal links counted:

- `related` frontmatter links
- inline markdown links that resolve to an existing routed content slug

Internal links not counted:

- homepage listing links
- category index listing links
- breadcrumbs
- external URLs
- self-links

Definitions:

- Orphan page: 0 inbound editorial links
- Weak page: fewer than 3 inbound editorial links
- Overlinked page: more than 15 `related` frontmatter links
- Cluster overlap: page naturally or structurally belongs to multiple topic clusters
- Slug conflict: more than one routed page uses the same `slug`
- Duplicate topic: pages whose title, slug, and likely search intent are close enough to risk cannibalization

## Collection Overview

| Collection | Pages | Avg inbound | Avg related | Orphans | Weak pages | Overlinked pages |
|---|---:|---:|---:|---:|---:|---:|
| Symbols | 25 | 10.08 | 8.28 | 0 | 1 | 0 |
| Feng Shui | 8 | 9.25 | 6.75 | 0 | 3 | 0 |
| Folk Beliefs | 25 | 10.92 | 12.80 | 0 | 1 | 9 |
| Taoism | 49 | 9.90 | 11.39 | 0 | 4 | 6 |
| Rituals | 16 | 12.75 | 9.31 | 0 | 1 | 0 |

## 1. Orphan Pages

Result: none found.

No routed content page has 0 inbound editorial links. This is a major improvement from the previous audit, where `thunder-deities` was orphaned.

## 2. Weak Pages

Weak page definition: inbound editorial links below 3.

| Priority | Page | Inbound | Related | Notes |
|---|---|---:|---:|---|
| HIGH | `/feng-shui/luopan-compass` | 1 | 2 | Most fragile page in the graph. It needs support from Bagua, Lo Shu, Eight Trigrams, Bagua Map, and Qi Flow pages. |
| HIGH | `/feng-shui/five-elements-and-bagua` | 1 | 10 | Good outbound coverage but weak inbound authority. Likely too dependent on one source page. |
| HIGH | `/feng-shui/qi-in-feng-shui` | 1 | 10 | Important bridge between Taoist Qi and Feng Shui, but almost no inbound support. |
| MEDIUM | `/folk-beliefs/ancestral-hall` | 2 | 8 | Ancestor cluster support page; should receive more links from ancestor, Qingming, and household altar pages. |
| MEDIUM | `/rituals/ancestor-ritual-symbols` | 2 | 8 | Natural child of ancestor ritual and ancestor veneration; under-supported. |
| MEDIUM | `/symbols/qi-and-bagua` | 2 | 10 | Strong conceptual bridge but under-linked from Bagua/Feng Shui pages. |
| MEDIUM | `/taoism/earth-god` | 2 | 10 | Deity/local god page needs more support from deity and household religion pages. |
| MEDIUM | `/taoism/five-elements-and-qi` | 2 | 10 | Potential duplicate/cannibalization risk with `/taoism/qi-and-five-elements`; also weak inbound. |
| MEDIUM | `/taoism/queen-mother-of-the-west` | 2 | 10 | Deity page needs stronger inbound from deities, immortals, heavens, and sacred sites. |
| LOW | `/taoism/universe-in-taoism` | 2 | 20 | New cosmology support page. It is structurally healthy outbound, but needs more inbound from existing cosmology pages over time. |

## 3. Overlinked Pages

Overlinked definition: more than 15 `related` links.

This is not automatically bad, especially for new hub pages. The risk is that every related link becomes less editorially meaningful when a page links to too many peers.

| Page | Related links | Assessment |
|---|---:|---|
| `/folk-beliefs/chinese-new-year-customs` | 20 | Overlinked by design as part of Festival Cluster launch. Consider trimming later to 12-15 strongest links. |
| `/folk-beliefs/dragon-boat-festival` | 20 | Same Festival Cluster issue. |
| `/folk-beliefs/festival-offerings` | 20 | Hub/bridge page; 20 is defensible but should be curated later. |
| `/folk-beliefs/ghost-festival` | 20 | Strong cluster bridge; risk of overlap with `ghost-month`. |
| `/folk-beliefs/lunar-calendar` | 20 | Calendar hub; 20 is acceptable if it remains the cluster navigation spine. |
| `/folk-beliefs/mid-autumn-festival` | 20 | Seasonal support page; could eventually be reduced. |
| `/folk-beliefs/seasonal-rituals` | 20 | Conceptual bridge; 20 is defensible but broad. |
| `/folk-beliefs/traditional-festival-cycle` | 20 | Primary Festival Hub; 20 is acceptable. |
| `/folk-beliefs/winter-solstice-customs` | 20 | Seasonal support page; could eventually be reduced. |
| `/taoism/cosmology-in-taoism` | 20 | Primary Cosmology Hub; 20 is acceptable. |
| `/taoism/five-elements-theory` | 20 | Support page; watch for overlap with Five Elements pages. |
| `/taoism/natural-harmony` | 20 | Support page; broad conceptual linking. |
| `/taoism/qi-energy` | 20 | Support page; watch for overlap with `/taoism/qi`. |
| `/taoism/universe-in-taoism` | 20 | Support page and weak inbound; too many outbound links relative to inbound. |
| `/taoism/yin-and-yang-balance` | 20 | Support page; watch for overlap with Yin-Yang pages. |

Recommendation:

- Keep primary hubs at 18-20 links if needed.
- Trim non-hub support pages toward 10-15 links after cluster authority stabilizes.
- Prioritize trimming pages that are both overlinked and weak inbound, especially `/taoism/universe-in-taoism`.

## 4. Cluster Overlap

Some overlap is intentional and useful. The site covers traditions where festivals, ancestors, spirits, offerings, temples, and cosmology naturally intersect.

Meaningful overlap found:

| Page | Cluster overlap | Assessment |
|---|---|---|
| `/folk-beliefs/festival-offerings` | Festival / Ancestor / Temple | Healthy bridge page. Needs clear positioning as festival-specific offerings, not a duplicate of spirit or temple offerings. |
| `/folk-beliefs/traditional-festival-cycle` | Festival / Ancestor / Temple | Healthy hub overlap. It should remain the Festival Hub. |
| `/rituals/spirit-offerings` | Festival / Ancestor / Temple | Existing core ritual node. Strong bridge into the Festival Cluster. |
| `/folk-beliefs/qingming-festival` | Festival / Ancestor | Healthy overlap. It should remain an existing core Festival node, not be duplicated. |
| `/folk-beliefs/ghost-festival` | Festival / Ghost / Ancestor | Healthy if positioned as the festival date, with `ghost-month` as the broader ritual season. |
| `/folk-beliefs/ghost-month` | Ghost / Festival / Ancestor | Strong existing hub. It now receives support from the Festival Cluster. |
| `/taoism/cosmology-in-taoism` | Cosmology / Taoism hub | Healthy hub overlap with Qi, Yin-Yang, Five Elements, Heaven-Earth, and cosmic-order pages. |
| `/symbols/bagua` | Symbols / Feng Shui / Cosmology | Healthy cross-cluster authority node. |
| `/taoism/qi` | Taoism / Cosmology / Feng Shui bridge | Healthy primary authority node. |

Overlap risk:

- Festival pages currently link very densely to ancestor and offering pages. This is useful for launch, but if every festival page keeps the same 20-link footprint, the cluster may feel mechanically interlinked rather than editorially curated.
- Cosmology support pages also share very similar related-link sets. They need distinct page intent to avoid becoming interchangeable.

## 5. Slug Conflicts

Result: none found.

No duplicate routed slugs were detected across the audited collections.

Important note:

- The project correctly avoided creating a second `qingming-festival` page.
- Existing `content/folk-beliefs/qingming-festival.md` is now the single canonical Qingming node.

## 6. Duplicate Topic / Cannibalization Risks

No hard duplicate slugs were found. However, several pages have close topical intent and should be watched for search cannibalization.

HIGH risk:

| Pair | Risk | Recommendation |
|---|---|---|
| `/symbols/bagua-and-five-elements` and `/feng-shui/five-elements-and-bagua` | Same core phrase reversed. Could compete unless differentiated by intent. | Keep Symbols page focused on symbolic system; keep Feng Shui page focused on spatial application. |
| `/taoism/five-elements-and-qi` and `/taoism/qi-and-five-elements` | Very close intent in the same collection. | Consider consolidating later or sharply differentiating one as Qi-first and one as Five Phases-first. |
| `/taoism/cosmology-in-taoism` and `/taoism/taoist-cosmology` | Very close hub intent. | Use `cosmology-in-taoism` as the newer cluster hub and `taoist-cosmology` as the established conceptual article. |

MEDIUM risk:

| Pair | Risk | Recommendation |
|---|---|---|
| `/taoism/qi-energy` and `/taoism/qi` | New support page may overlap with primary Qi page. | Keep `/taoism/qi` as canonical hub; keep `qi-energy` as beginner/search-intent support page. |
| `/folk-beliefs/ghost-festival` and `/folk-beliefs/ghost-month` | Festival date vs month/season distinction must stay clear. | Use `ghost-festival` for the focal observance and `ghost-month` for the broader ritual period. |
| `/folk-beliefs/festival-offerings`, `/rituals/spirit-offerings`, and `/rituals/temple-offerings` | Offering pages overlap by object/practice. | Differentiate by recipient and setting: festival context, spirit recipient, temple setting. |
| `/taoism/yin-and-yang-balance`, `/taoism/yin-yang-cosmology`, and `/symbols/yin-yang` | Same concept across symbol, cosmology, and balance intent. | Maintain distinct intent: symbol meaning, cosmological system, practical balance concept. |

LOW / expected series overlap:

- Element pages: `wood-element`, `fire-element`, `earth-element`, `metal-element`, `water-element`
- Bagua support pages: `bagua`, `bagua-directions`, `qi-and-bagua`, `early-heaven-bagua`, `later-heaven-bagua`
- Ancestor support pages: `ancestor-ritual`, `ancestor-ritual-symbols`, `ancestor-veneration`, `ancestor-spirits`

These are series pages rather than duplicate pages, as long as their headings and internal links keep the intent distinct.

## Broken Internal Links

Result: none found.

All `related` frontmatter slugs resolve to known routed content pages.

## Cluster Strength Snapshot

| Cluster | Pages | Intra-cluster links | Outbound links | Avg inbound | Assessment |
|---|---:|---:|---:|---:|---|
| Cosmology / Qi / Yin-Yang / Five Elements | 59 | 524 | 67 | 11.44 | Very strong but broad. Needs cannibalization control. |
| Festival / Calendar / Seasonal Rituals | 20 | 174 | 110 | 12.20 | Newly strong. High density is good short term, but some pages are overlinked. |
| Ancestor / Afterlife / Ghosts | 30 | 240 | 106 | 10.63 | Strong and now reinforced by Festival Cluster. |
| Protection / Talismans / Door Guardians | 15 | 75 | 59 | 8.33 | Strong opportunity cluster, not fully built out yet. |
| Temple / Deities / Sacred Sites | 30 | 163 | 164 | 9.10 | Broad and useful, but less internally focused than Cosmology/Festival. |
| Feng Shui / Bagua / Spatial Systems | 16 | 79 | 40 | 9.69 | Good authority around Bagua/Qi Flow, but several Feng Shui pages are weak inbound. |

## Empty or Underdeveloped Content Areas

The following directories exist but are not currently routed or populated with markdown content in the same way as the active collections:

| Directory | Markdown files | SEO implication |
|---|---:|---|
| `buddhist-objects` | 0 | Potential future object/material culture cluster. |
| `forbidden` | 0 | Potential taboo/prohibited practices cluster. Needs careful editorial framing. |
| `ghosts` | 0 | Potential ghost taxonomy cluster, but overlaps with existing Ghost Month pages. |
| `glossary` | 0 | Useful for definitions, but not a priority until routing strategy is clear. |
| `i-ching` | 0 | Strong next cluster candidate because Bagua/trigram content already exists. |
| `jade` | 0 | Medium opportunity; can connect to Jade Emperor, Queen Mother, immortality, and material symbolism. |
| `spirits` | 0 | Strong but overlaps with ancestor/afterlife/ghost pages. |
| `talismans` | 0 | Strong next cluster candidate because protection/talisman pages already have authority. |

## Next Topic Cluster Recommendations

### 1. I Ching / Divination / Trigrams Cluster

Priority: HIGH

Why:

- Existing authority already exists around `bagua`, `eight-trigrams`, `early-heaven-bagua`, `later-heaven-bagua`, `lo-shu-square`, `bagua-directions`, and Feng Shui pages.
- This cluster would extend topical authority without duplicating the Festival or Cosmology clusters.
- It can strengthen weak Feng Shui pages by connecting divination, trigrams, directions, and spatial cosmology.

Suggested future hub:

- `i-ching`

Suggested supporting topics:

- hexagrams
- trigrams-in-the-i-ching
- yarrow-stalk-divination
- king-wen-sequence
- i-ching-and-taoism
- i-ching-and-bagua
- changing-lines
- divination-in-chinese-tradition

### 2. Talismans / Fu / Ritual Writing Cluster

Priority: HIGH

Why:

- Strong existing nodes: `protective-talismans`, `talisman-burning`, `protection-ritual`, `thunder-deities`, `warding-practices`, `evil-aversion-symbols`.
- The `talismans` directory exists but is unused.
- This cluster would deepen protection and ritual authority without relying on generic festival pages.

Suggested future hub:

- `taoist-talismans`

Suggested supporting topics:

- fu-talismans
- talismanic-script
- thunder-rites-and-talismans
- talismans-for-protection
- talisman-paper
- seals-in-taoist-ritual
- talisman-burning-rites
- household-talismans

### 3. Ghosts / Spirit Taxonomy Cluster

Priority: MEDIUM-HIGH

Why:

- Strong existing nodes: `ghost-month`, `ghost-festival`, `ghost-gates`, `wandering-spirits`, `ancestor-spirits`, `spirit-world`, `underworld-beliefs`.
- The `ghosts` and `spirits` directories exist but are unused.
- Needs careful differentiation from the existing ancestor and Festival clusters.

Suggested future hub:

- `ghosts-in-chinese-folklore`

Suggested supporting topics:

- hungry-ghosts
- wandering-ghosts
- ancestral-spirits-vs-ghosts
- ghost-taboos
- ghost-stories-in-folk-belief
- appeasing-spirits
- ghost-gates-and-underworld

### 4. Jade / Sacred Materials Cluster

Priority: MEDIUM

Why:

- The `jade` directory exists but is unused.
- Existing bridge nodes include `jade-emperor`, `queen-mother-of-the-west`, immortality themes, deities, and symbolic objects.
- Good cultural authority opportunity, but current internal graph support is weaker than I Ching or Talismans.

Suggested future hub:

- `jade-symbolism`

Suggested supporting topics:

- jade-in-chinese-culture
- jade-and-immortality
- jade-emperor-symbolism
- jade-burial-objects
- jade-charms
- bi-disc
- cong-tube

### 5. Buddhist Objects / Temple Material Culture Cluster

Priority: MEDIUM-LOW

Why:

- The `buddhist-objects` directory exists but no active routing/content cluster supports it yet.
- Could connect to `temple-offerings`, `incense-offering`, `temple-altars`, `temple-incense`, and `sacred-sites`.
- It may require a broader editorial decision about whether the archive is expanding beyond Taoist/folk Chinese traditions.

Suggested future hub:

- `buddhist-ritual-objects`

Suggested supporting topics:

- prayer-beads
- incense-burners
- offering-bowls
- lotus-symbolism
- temple-bells
- ritual-lamps

## Priority Fix Recommendations

HIGH:

1. Strengthen weak Feng Shui pages:
   - `/feng-shui/luopan-compass`
   - `/feng-shui/five-elements-and-bagua`
   - `/feng-shui/qi-in-feng-shui`

2. Resolve or clarify high-risk duplicate intent:
   - `/taoism/five-elements-and-qi` vs `/taoism/qi-and-five-elements`
   - `/symbols/bagua-and-five-elements` vs `/feng-shui/five-elements-and-bagua`
   - `/taoism/cosmology-in-taoism` vs `/taoism/taoist-cosmology`

3. Keep `traditional-festival-cycle` as the Festival Hub and avoid creating another general festival overview page.

MEDIUM:

1. Reduce related-link count on non-hub overlinked pages after they gain stable inbound support.
2. Strengthen deity/local god support pages:
   - `/taoism/earth-god`
   - `/taoism/queen-mother-of-the-west`
3. Strengthen ancestor support pages:
   - `/folk-beliefs/ancestral-hall`
   - `/rituals/ancestor-ritual-symbols`

LOW:

1. Review thin older pages with low word counts when content quality work is allowed.
2. Add stronger editorial distinction between offering-related pages.
3. Avoid creating duplicate Qingming, Ghost Month, Qi, Yin-Yang, Five Elements, or Taoist Cosmology overview pages.

## Final Conclusion

The site has no orphan pages, no broken related links, and no slug conflicts. The main SEO risks are no longer crawlability problems; they are editorial architecture problems:

- weak inbound support for a small set of bridge pages
- overlinked new cluster pages
- close-topic cannibalization among cosmology, five-elements, ghost, and offering pages

The next best Topic Cluster to build is I Ching / Divination / Trigrams, followed by Talismans / Fu / Ritual Writing. These clusters can grow from existing authority without duplicating the newest Festival and Cosmology hubs.
