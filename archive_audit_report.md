# Archive Content Graph Audit Report

## Scope

This audit reviews the current markdown archive graph in `content/` for Eastern Mysticism Archive. It focuses on entity connectivity, related-entry health, cluster strength, orphan pages, weakly connected pages, duplicate or overlapping concepts, and future relationship opportunities.

No new archive entries are proposed as immediate content work in this report. Recommendations are graph and planning recommendations only.

## Current Graph Snapshot

### Entity Count

Current archive entity count: **78 entries**

Breakdown by content directory:

| Category | Entries |
|---|---:|
| `symbols` | 25 |
| `taoism` | 21 |
| `folk-beliefs` | 13 |
| `rituals` | 11 |
| `feng-shui` | 8 |

### Relationship Count

Total declared `related` links: **561**

Average declared outgoing related links per entry: **7.19**

Invalid related links found: **4**

Estimated valid directed relationships: **557**

Approximate directed graph density:

```text
557 valid directed links / 6006 possible directed links = ~9.3%
```

This is a healthy early-stage density for an encyclopedia-style archive. The graph is already meaningfully connected, but several older hub entries have too few outgoing links and several newer bridge pages have no inbound links yet.

## Invalid Related Links

These links point to slugs that do not currently exist as archive entries.

| Source Entry | Invalid Related Slug | Recommendation |
|---|---|---|
| `kitchen-god` | `folk-beliefs` | Replace with an actual folk-belief entry such as `household-protection`, `protective-folk-customs`, or `household-altar`. |
| `dragon-symbol` | `feng-shui` | Replace with `bagua-in-feng-shui`, `qi-flow`, or `cosmology-and-feng-shui`. |
| `five-elements` | `yin-yang-symbol` | Replace with existing slug `yin-yang`. |
| `taiji-diagram` | `yin-yang-symbol` | Replace with existing slug `yin-yang`. |

These should be fixed before larger graph expansion because invalid edges weaken related-topic rendering and entity title mapping.

## Orphan Pages

Orphan pages are entries with **zero inbound related links**. They link outward, but no other page currently points to them.

| Entry | Category | Outgoing Links | Priority |
|---|---|---:|---|
| `ancestor-ritual-symbols` | `rituals` | 8 | High |
| `five-elements-and-bagua` | `feng-shui` | 10 | High |
| `five-elements-and-qi` | `taoism` | 10 | High |
| `ghost-month-and-ancestors` | `folk-beliefs` | 8 | High |
| `qi-and-bagua` | `symbols` | 10 | High |
| `qi-in-feng-shui` | `feng-shui` | 10 | High |
| `three-realms` | `taoism` | 9 | Medium |

### Interpretation

Most orphans are newer bridge pages. They are not weak in outgoing graph structure, but they need reciprocal links from their parent hubs.

Highest-value fixes:

- Link `qi-and-bagua` from `qi`, `bagua`, or `bagua-and-five-elements`.
- Link `qi-in-feng-shui` from `qi-flow`, `qi`, or `five-elements-in-feng-shui`.
- Link `five-elements-and-bagua` from `bagua-and-five-elements`, `five-elements-in-feng-shui`, or `bagua-map`.
- Link `five-elements-and-qi` from `qi-and-five-elements`, `five-elements`, or `qi`.
- Link `ghost-month-and-ancestors` from `ghost-month` and `ancestor-veneration`.
- Link `ancestor-ritual-symbols` from `ancestor-ritual` and `ancestor-tablets`.

## Weakly Connected Pages

Weakly connected pages have low total degree, meaning they have few inbound and outbound relationships combined.

| Entry | Category | Outgoing | Inbound | Issue |
|---|---|---:|---:|---|
| `luopan-compass` | `feng-shui` | 2 | 1 | Very under-connected for a major Feng Shui tool. |
| `taiji-diagram` | `symbols` | 2 | 4 | Has invalid `yin-yang-symbol` link and should connect to newer cosmology entries. |
| `three-pure-ones` | `taoism` | 4 | 2 | Needs stronger religious Taoism and ritual graph support. |
| `dragon-symbol` | `symbols` | 4 | 3 | Has invalid `feng-shui` link and should connect to mythology/protection/guardian symbolism. |

## Pages With Too Few Related Links

Several older hub pages have strong inbound authority but too few outgoing links. These are especially important because they should direct readers into newer clusters.

| Entry | Outgoing | Inbound | Recommendation |
|---|---:|---:|---|
| `bagua` | 2 | 35 | Expand to Bagua cluster pages. |
| `five-elements` | 2 | 35 | Expand to Wu Xing cluster pages and fix invalid slug. |
| `yin-yang` | 2 | 35 | Expand to Yin Yang cosmology, Taiji, Qi, Bagua, and Five Elements. |
| `dao` | 3 | 30 | Expand to Taoist cosmology, wu wei, qi, nature, cosmic order. |
| `qi` | 4 | 39 | Expand to Qi cluster bridge pages. |
| `ghost-month` | 2 | 9 | Expand to ancestor and offering cluster pages. |
| `luopan-compass` | 2 | 1 | Expand to Feng Shui, Bagua, Lo Shu, qi flow, directions. |
| `taiji-diagram` | 2 | 4 | Expand to Taiji/Wuji, Yin Yang cosmology, Taoist cosmology. |
| `wu-wei` | 3 | 14 | Expand to Taoist view of nature, unity of Heaven and Humanity, cultivation. |
| `talisman-burning` | 3 | 7 | Expand to protective talismans, warding practices, ritual purification. |

## Strongest Clusters

### Qi Cluster

The Qi cluster is currently the strongest graph hub.

Core nodes:

- `qi`
- `qi-flow`
- `qi-and-yin-yang`
- `qi-and-five-elements`
- `qi-circulation`
- `balanced-qi`
- `cultivating-qi`
- `qi-in-taoist-practice`
- `qi-in-feng-shui`
- `qi-and-bagua`
- `vital-energy-concepts`

Strengths:

- Strong cross-category reach into Taoism, Feng Shui, symbols, and cosmology.
- High inbound count to `qi`.
- Good conceptual layering from broad hub to applied contexts.

Weakness:

- Some bridge nodes are orphaned because the older `qi` hub has not yet been updated to point back to them.

### Bagua Cluster

Core nodes:

- `bagua`
- `eight-trigrams`
- `early-heaven-bagua`
- `later-heaven-bagua`
- `bagua-directions`
- `bagua-map`
- `bagua-in-feng-shui`
- `bagua-and-five-elements`
- `qi-and-bagua`
- `lo-shu-square`

Strengths:

- Strong semantic shape.
- Good symbol-to-Feng-Shui bridge.
- Good relationship to Qi and Five Elements.

Weakness:

- `bagua` itself still only links outward to `yin-yang` and `five-elements`, so the hub page is not yet acting like a hub.

### Ancestor Belief and Ritual Cluster

Core nodes:

- `ancestor-veneration`
- `ancestor-ritual`
- `ancestor-tablets`
- `household-altar`
- `spirit-offerings`
- `qingming-festival`
- `ancestral-hall`
- `spirit-money`
- `funeral-offerings`
- `filial-piety-and-ancestors`
- `ghost-month-and-ancestors`
- `ancestor-ritual-symbols`

Strengths:

- Good cross-linking between folk belief and ritual.
- Strong material culture layer through tablets, altars, spirit money, offerings.
- Good festival bridge through Qingming and Ghost Month.

Weakness:

- `ghost-month-and-ancestors` and `ancestor-ritual-symbols` need inbound links from their natural parent pages.

### Protective Practices Cluster

Core nodes:

- `protection-ritual`
- `protective-talismans`
- `door-protection-symbols`
- `threshold-rituals`
- `warding-practices`
- `household-protection`
- `protective-charms`
- `guardian-symbols`
- `ritual-purification`
- `evil-aversion-symbols`
- `protective-folk-customs`
- `door-gods`
- `kitchen-god`

Strengths:

- Strong symbol-to-ritual-to-folk-belief structure.
- Good links into household religion and Feng Shui-adjacent concepts.
- `protection-ritual` has strong inbound authority.

Weakness:

- `protection-ritual` itself has only 4 outgoing links and should point back to the newer protective subtopics.

### Five Elements / Wu Xing Cluster

Core nodes:

- `five-elements`
- `wood-element`
- `fire-element`
- `earth-element`
- `metal-element`
- `water-element`
- `generating-cycle`
- `overcoming-cycle`
- `five-elements-symbolism`
- `five-elements-in-feng-shui`
- `five-elements-and-bagua`
- `five-elements-and-qi`

Strengths:

- Strong element-level substructure.
- Good cycle pages.
- Good links to Feng Shui, Bagua, and Qi.

Weakness:

- `five-elements` has an invalid outgoing link and does not yet link to the new cluster pages.

### Taoist Cosmology Cluster

Core nodes:

- `taoist-cosmology`
- `heaven-and-earth`
- `three-realms`
- `taiji-and-wuji`
- `yin-yang-cosmology`
- `cosmic-order`
- `unity-of-heaven-and-humanity`
- `taoist-view-of-nature`
- `cosmology-and-ritual`
- `cosmology-and-feng-shui`

Strengths:

- Strong cross-category bridges into ritual and Feng Shui.
- Good links to Dao, Qi, Yin Yang, Taiji, Five Elements, Bagua.
- `taoist-cosmology` is structurally strong.

Weakness:

- `three-realms` is currently orphaned.
- `dao` has not yet been updated to point into this cluster.

## Weakest Clusters

### Feng Shui Tools Cluster

Weak node:

- `luopan-compass`

Issue:

`luopan-compass` is an important Feng Shui tool but has only 2 outgoing links and 1 inbound link. It should connect to `bagua-map`, `lo-shu-square`, `qi-flow`, `bagua-directions`, `five-elements-in-feng-shui`, and `cosmology-and-feng-shui`.

### Taoist Deity / Religious Hierarchy Cluster

Weak node:

- `three-pure-ones`

Issue:

`three-pure-ones` exists as an isolated religious Taoism node. It needs stronger support from future deity, temple, liturgy, and celestial hierarchy entries.

### Mythic / Animal Symbol Cluster

Weak node:

- `dragon-symbol`

Issue:

`dragon-symbol` has a useful start, but currently contains an invalid `feng-shui` edge and lacks a larger mythology or guardian-symbol context.

## Missing Connections Between Clusters

### Qi and Protective Practices

Current bridge exists through:

- `ritual-purification`
- `warding-practices`
- `protective-talismans`
- `protective-charms`

Missing improvement:

- `qi` and `qi-flow` should selectively link back to `ritual-purification` or `household-protection` only if the article content supports ritual atmosphere and spatial protection.

### Bagua and Protective Practices

Current bridge exists through:

- `door-protection-symbols`
- `evil-aversion-symbols`
- `protective-talismans`

Missing improvement:

- `bagua` should link to protective uses through `door-protection-symbols` or `evil-aversion-symbols`.

### Ancestor Cluster and Protective Practices

Current bridge exists through:

- `household-protection`
- `protective-folk-customs`
- `ancestor-ritual`

Missing improvement:

- `household-altar` could become a stronger bridge between ancestors, household protection, Kitchen God, and door gods.

### Taoist Cosmology and Ancestor / Spirit Beliefs

Current bridge exists through:

- `three-realms`
- `cosmology-and-ritual`

Missing improvement:

- `ghost-month`, `ancestor-veneration`, and `spirit-offerings` should eventually link to cosmological context pages if the article text supports afterlife or ritual-world structure.

## Duplicate Concepts And Overlapping Topics

### `qi-and-five-elements` vs `five-elements-and-qi`

Risk:

These are highly overlapping. One lives in Taoism and one was created as part of the Five Elements cluster, but their semantic distinction may be unclear to readers.

Recommendation:

- Treat `qi-and-five-elements` as the Qi cluster perspective.
- Treat `five-elements-and-qi` as the Wu Xing cluster perspective.
- Keep cross-links, but avoid duplicating section structure in future edits.

### `bagua-and-five-elements` vs `five-elements-and-bagua`

Risk:

Strong overlap. One is symbol-oriented and one is Feng Shui-oriented.

Recommendation:

- Keep `bagua-and-five-elements` focused on symbolic/cosmological relationship.
- Keep `five-elements-and-bagua` focused on Feng Shui application.

### `qi-flow` vs `qi-in-feng-shui`

Risk:

Both concern qi in spatial contexts.

Recommendation:

- Keep `qi-flow` as the practical spatial movement concept.
- Keep `qi-in-feng-shui` as the broader explanatory bridge from Qi cluster to Feng Shui.

### `ancestor-ritual` vs `ancestor-ritual-symbols`

Risk:

Moderate overlap.

Recommendation:

- Keep `ancestor-ritual` focused on action and ceremony.
- Keep `ancestor-ritual-symbols` focused on objects, signs, offerings, tablets, incense, and spatial symbolism.

### `protection-ritual` vs `warding-practices`

Risk:

Moderate overlap.

Recommendation:

- Keep `protection-ritual` as the broad ritual hub.
- Keep `warding-practices` as the narrower apotropaic-action page.

### `household-protection` vs `protective-folk-customs`

Risk:

Moderate overlap.

Recommendation:

- Keep `household-protection` focused on domestic space.
- Keep `protective-folk-customs` focused on everyday customs, seasonal actions, and informal practices.

## Estimated Cluster Count

Current major clusters: **8**

1. Bagua Cluster
2. Qi Cluster
3. Five Elements / Wu Xing Cluster
4. Taoist Cosmology Cluster
5. Ancestor Belief and Ritual Cluster
6. Protective Practices Cluster
7. Feng Shui Spatial Systems Cluster
8. Ritual / Offering Systems Cluster

Emerging but incomplete clusters:

1. Taoist Deities and Celestial Hierarchy
2. Mythic and Guardian Beings
3. Festival and Seasonal Rituals
4. Temple and Sacred Space
5. Afterlife and Spirit Worlds

## Top 20 Relationship Improvements

These are the highest-value relationship edits to make in existing frontmatter.

1. `bagua` should link to `eight-trigrams`.
2. `bagua` should link to `early-heaven-bagua`.
3. `bagua` should link to `later-heaven-bagua`.
4. `bagua` should link to `bagua-directions`.
5. `bagua` should link to `bagua-in-feng-shui`.
6. `five-elements` should replace `yin-yang-symbol` with `yin-yang`.
7. `five-elements` should link to `five-elements-symbolism`.
8. `five-elements` should link to `generating-cycle`.
9. `five-elements` should link to `overcoming-cycle`.
10. `five-elements` should link to `five-elements-and-qi`.
11. `qi` should link to `qi-and-yin-yang`.
12. `qi` should link to `qi-and-five-elements`.
13. `qi` should link to `qi-circulation`.
14. `qi` should link to `qi-in-taoist-practice`.
15. `qi` should link to `qi-in-feng-shui`.
16. `dao` should link to `taoist-cosmology`.
17. `dao` should link to `taoist-view-of-nature`.
18. `ancestor-veneration` should link to `ancestor-tablets`.
19. `ancestor-veneration` should link to `ghost-month-and-ancestors`.
20. `protection-ritual` should link to `protective-talismans`, `warding-practices`, or `ritual-purification`.

Secondary technical cleanup:

- `taiji-diagram` should replace `yin-yang-symbol` with `yin-yang`.
- `dragon-symbol` should replace `feng-shui` with `bagua-in-feng-shui` or `cosmology-and-feng-shui`.
- `kitchen-god` should replace `folk-beliefs` with `household-protection` or `protective-folk-customs`.

## Top 10 Future Entities With Highest Graph Value

These are not content tasks for this audit, but they would have high graph value if created later.

1. `yin-yang-and-five-elements`  
   Would bridge the Yin Yang, Qi, and Five Elements clusters.

2. `taoist-deities`  
   Would support `three-pure-ones`, temple topics, ritual, mythology, and cosmology.

3. `temple-altars`  
   Would connect rituals, offerings, incense, Taoist deities, folk religion, and sacred objects.

4. `spirit-world`  
   Would connect `three-realms`, Ghost Month, ancestor beliefs, funeral offerings, and spirit entities.

5. `underworld-beliefs`  
   Would strengthen afterlife, ancestor, Ghost Month, and ritual clusters.

6. `qingming-rituals`  
   Would deepen the Qingming and ancestor cluster with a ritual-specific bridge.

7. `bagua-mirror`  
   Would strongly connect Bagua, Feng Shui, threshold protection, evil-aversion symbols, and household protection.

8. `fu-talismans`  
   Would become the natural hub for protective talismans, talisman burning, Taoist ritual, and warding practices.

9. `taoist-priesthood`  
   Would connect rituals, talismans, Three Pure Ones, Taoist cosmology, and temple practice.

10. `lunar-calendar`  
   Would connect festivals, Qingming, Ghost Month, astrology, ritual timing, and Feng Shui.

## Overall Assessment

The archive graph is in strong early condition. It has a clear hub-and-cluster structure, especially around Qi, Bagua, Five Elements, Ancestor Rituals, Protective Practices, and Taoist Cosmology.

The main issue is not lack of content. The main issue is that older foundational hubs were created before the newer clusters and have not been updated to point into them. This creates a graph shape where many new pages point to hubs, but the hubs do not yet guide readers back outward.

The next best maintenance pass should focus on:

- fixing 4 invalid related slugs
- updating older hub entries with 6 to 10 carefully chosen related links
- adding inbound links to the 7 orphan bridge pages
- preserving distinctions between overlapping bridge topics
- avoiding excessive all-to-all linking within large clusters

The archive is ready for a focused relationship cleanup pass before adding the next large content cluster.
