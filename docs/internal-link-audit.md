# Internal Link and Hub Audit

Date: 2026-06-07

Project path audited: `D:\eastern-mysticism-archive`

## Executive summary

The archive has a strong internal graph for its current size. I audited all routed markdown content files under `content/symbols`, `content/feng-shui`, `content/folk-beliefs`, `content/taoism`, and `content/rituals`.

- Routed content pages audited: 108
- Main editorial link source: `related` frontmatter rendered by `ArticleLayout`
- Broken `related` slugs found: 0
- True editorial orphan pages: 1
- Pages with fewer than 3 outgoing internal editorial links: 3
- Weakly connected pages needing attention: 7
- Empty content folders without routed pages: `buddhist-objects`, `forbidden`, `ghosts`, `glossary`, `i-ching`, `jade`, `spirits`, `talismans`

Every routed page is technically reachable from the homepage and its category index. This audit therefore treats an orphan as a page with no inbound editorial links from another article, excluding homepage, category listing, and breadcrumb links.

## Methodology

I counted internal editorial links from:

- `related` frontmatter values
- inline markdown links that resolve to a known routed content page

I did not count:

- homepage database links
- category index listing links
- breadcrumbs
- external links
- self-links

Definitions used:

- Orphan page: 0 inbound editorial links
- Page with less than 3 internal links: fewer than 3 outgoing editorial links
- Weakly connected page: 0 inbound links, fewer than 2 inbound links, fewer than 3 outgoing links, or total inbound plus outgoing editorial links below 5
- Hub candidate: page with high inbound authority, high outbound coverage, or obvious topical centrality across multiple clusters

## Graph overview by collection

| Collection | Pages | Inbound links | Outgoing links | Avg inbound | Avg outgoing | Orphans | <3 outgoing |
|---|---:|---:|---:|---:|---:|---:|---:|
| Symbols | 25 | 221 | 197 | 8.84 | 7.88 | 0 | 1 |
| Feng Shui | 8 | 69 | 54 | 8.63 | 6.75 | 0 | 1 |
| Folk Beliefs | 16 | 139 | 132 | 8.69 | 8.25 | 0 | 1 |
| Taoism | 43 | 366 | 435 | 8.51 | 10.12 | 1 | 0 |
| Rituals | 16 | 170 | 147 | 10.63 | 9.19 | 0 | 0 |

The strongest collection by graph depth is Taoism, with 43 pages and 435 outgoing editorial links. Rituals has the highest average inbound count, mostly because protection, ancestor, and offering pages are tied tightly to folk belief pages.

## Orphan pages

HIGH

| Page | Inbound | Outgoing | Issue | Recommendation |
|---|---:|---:|---|---|
| `/taoism/thunder-deities` | 0 | 10 | No article points to it, despite strong outbound links to deities, cosmology, ritual protection, talismans, Qi, Dao, and Jade Emperor. | Add inbound links from existing pages that naturally mention Taoist divine hierarchy, thunder rites, protective ritual, or celestial bureaucracy. Best sources: `/taoism/deities-in-taoism`, `/taoism/celestial-bureaucracy`, `/rituals/protection-ritual`, `/symbols/protective-talismans`, `/rituals/talisman-burning`. |

## Pages with fewer than 3 outgoing internal links

HIGH

| Page | Inbound | Outgoing | Current outgoing targets | Recommendation |
|---|---:|---:|---|---|
| `/symbols/yin-yang` | 37 | 2 | Bagua, Five Elements | This is already a major authority node but is under-serving the graph. Expand related links to Qi, Dao, Taiji Diagram, Taiji and Wuji, Yin Yang Cosmology, Qi and Yin Yang, Taoist Cosmology, Wu Wei, and Heaven and Earth. |
| `/folk-beliefs/ghost-month` | 14 | 2 | Yin Yang, Bagua | This should behave like a folk belief hub, not a thin spoke. Add links to Ghost Month and Ancestors, Ghost Gates, Wandering Spirits, Spirit Money, Ancestor Veneration, Underworld Beliefs, Judgment after Death, Funeral Offerings, and Spirit Offerings. |

MEDIUM

| Page | Inbound | Outgoing | Current outgoing targets | Recommendation |
|---|---:|---:|---|---|
| `/feng-shui/luopan-compass` | 1 | 2 | Bagua, Yin Yang | Add links to Bagua Map, Bagua in Feng Shui, Five Elements in Feng Shui, Qi Flow, Lo Shu Square, Early Heaven Bagua, Later Heaven Bagua, and Eight Trigrams. This page is a tool page and should connect into both the feng shui and symbol systems. |

## Weakly connected pages

HIGH

| Page | Inbound | Outgoing | Why it matters | Fix priority |
|---|---:|---:|---|---|
| `/taoism/thunder-deities` | 0 | 10 | Only true editorial orphan; it belongs inside the deity, protection, and ritual clusters. | HIGH |
| `/symbols/yin-yang` | 37 | 2 | Huge inbound authority but only two outgoing links; authority is not being redistributed. | HIGH |
| `/folk-beliefs/ghost-month` | 14 | 2 | Strong seasonal and afterlife topic, but outgoing links do not reflect the existing cluster. | HIGH |

MEDIUM

| Page | Inbound | Outgoing | Why it matters | Fix priority |
|---|---:|---:|---|---|
| `/feng-shui/luopan-compass` | 1 | 2 | Thinly linked tool page; should anchor compass, direction, bagua, and qi flow concepts. | MEDIUM |
| `/feng-shui/five-elements-and-bagua` | 1 | 10 | Good outbound coverage but almost no inbound support. | MEDIUM |
| `/feng-shui/qi-in-feng-shui` | 1 | 10 | Good outbound coverage but only receives a link from `/taoism/qi`; should receive links from feng shui pages. | MEDIUM |
| `/taoism/five-elements-and-qi` | 1 | 10 | Good bridge page but inbound support is too low for a Taoism and Five Elements crossover. | MEDIUM |

LOW watchlist

These pages are not structurally broken, but they have low inbound support relative to their topical value:

- `/taoism/vital-energy-concepts` - 2 inbound, 9 outgoing
- `/folk-beliefs/ancestral-hall` - 2 inbound, 8 outgoing
- `/folk-beliefs/protective-folk-customs` - 2 inbound, 8 outgoing
- `/rituals/ancestor-ritual-symbols` - 2 inbound, 8 outgoing
- `/symbols/qi-and-bagua` - 2 inbound, 10 outgoing
- `/taoism/earth-god` - 2 inbound, 10 outgoing
- `/taoism/queen-mother-of-the-west` - 2 inbound, 10 outgoing

## Hub pages that should be formalized

The following pages already behave like hubs or should be promoted into hub roles because they connect multiple topical clusters.

HIGH

| Hub candidate | Inbound | Outgoing | Current role | Recommended hub function |
|---|---:|---:|---|---|
| `/taoism/qi` | 50 | 12 | Strongest authority node in the archive. | Primary hub for energy, cultivation, yin-yang, five elements, feng shui qi, and body/cosmos concepts. |
| `/taoism/dao` | 41 | 11 | Strong Taoist philosophy hub. | Primary philosophical hub linking Dao, Wu Wei, cosmology, nature, cosmic order, and Taiji/Wuji. |
| `/symbols/bagua` | 36 | 10 | Core symbol and feng shui bridge. | Hub for trigrams, directions, early/later heaven bagua, Lo Shu, feng shui bagua, and qi/bagua topics. |
| `/symbols/five-elements` | 35 | 10 | Strong Five Phases hub. | Hub for element symbolism, generating/overcoming cycles, feng shui elements, qi, bagua, and cosmology. |
| `/symbols/yin-yang` | 37 | 2 | High inbound authority, weak outbound support. | Promote to a hub by expanding outgoing related links. This is one of the highest-impact fixes in the audit. |
| `/rituals/protection-ritual` | 29 | 12 | Strong cross-cluster ritual hub. | Hub for talismans, door gods, household protection, warding practices, purification, threshold rites, and evil-aversion symbols. |
| `/folk-beliefs/ancestor-veneration` | 28 | 12 | Strong ancestor cluster hub. | Hub for ancestor rituals, tablets, Qingming, household altar, spirit money, ghost month, and filial piety. |
| `/taoism/taoist-cosmology` | 27 | 10 | Strong metaphysical bridge. | Hub for Dao, Qi, yin-yang, Taiji, five elements, heaven-earth-human, ritual cosmology, and feng shui cosmology. |

MEDIUM

| Hub candidate | Inbound | Outgoing | Current role | Recommended hub function |
|---|---:|---:|---|---|
| `/taoism/deities-in-taoism` | 20 | 12 | Deity hierarchy hub. | Use as primary deity hub and add inbound/outbound support for Thunder Deities. |
| `/taoism/taoist-temples` | 9 | 12 | Strong outgoing temple hub, moderate inbound support. | Hub for temple architecture, halls, altars, incense, offerings, sacred sites, pilgrimage, and deities. |
| `/taoism/spirit-world` | 9 | 12 | Afterlife/spirit bridge. | Hub for spirit realms, underworld, ghosts, ancestor spirits, wandering spirits, protection, and deities. |
| `/feng-shui/qi-flow` | 26 | 4 | Strong inbound feng shui concept, modest outgoing depth. | Hub for feng shui energy flow, luopan, bagua map, five elements, and qi in feng shui. |
| `/feng-shui/five-elements-in-feng-shui` | 20 | 4 | Strong inbound feng shui bridge. | Hub for five elements applications in feng shui, Lo Shu, bagua, qi flow, and cycles. |
| `/rituals/incense-offering` | 19 | 4 | Strong ritual practice node with low outbound links. | Hub for ancestor ritual, temple incense, spirit offerings, household altar, Kitchen God, and purification. |

LOW

| Hub candidate | Inbound | Outgoing | Current role | Recommended hub function |
|---|---:|---:|---|---|
| `/folk-beliefs/ghost-month` | 14 | 2 | Under-linked seasonal/ghost topic. | Future hub for Ghost Month once outgoing links are expanded. |
| `/symbols/taiji-diagram` | 4 | 6 | Supporting symbol page. | Secondary hub for Taiji, Wuji, yin-yang, Dao, and cosmology. |
| `/feng-shui/bagua-in-feng-shui` | 10 | 10 | Healthy niche hub. | Keep as feng shui-specific subhub under Bagua. |

## Cluster strength analysis

| Cluster | Existing pages | Intra-cluster links | Total inbound | Avg inbound | Avg intra links/page | Assessment |
|---|---:|---:|---:|---:|---:|---|
| Qi / energy / yin-yang / five elements | 16 | 81 | 195 | 12.19 | 5.06 | Strongest expansion candidate. It has high authority, deep coverage, and several natural hub nodes. |
| Ancestors / Ghost Month / afterlife | 18 | 105 | 147 | 8.17 | 5.83 | Very strong cluster density. Needs Ghost Month and afterlife hub cleanup. |
| Protection / talismans / door guardians | 12 | 65 | 100 | 8.33 | 5.42 | Strong commercial and informational cluster potential; current hub is Protection Ritual. |
| Bagua / trigrams / feng shui cosmology | 12 | 51 | 96 | 8.00 | 4.25 | Strong symbolic and feng shui bridge; needs support for Luopan and feng shui-specific bridge pages. |
| Temples / deities / sacred sites | 17 | 74 | 98 | 5.76 | 4.35 | Broad and promising but less internally authoritative than the other clusters. Thunder Deities is the main structural flaw. |

## Cross-collection link patterns

The archive is strongest when Taoism, Symbols, Rituals, and Folk Beliefs reinforce each other. Current cross-links show good topical bridging:

- Taoism to Symbols: 61 links
- Taoism to Rituals: 42 links
- Taoism to Folk Beliefs: 29 links
- Symbols to Taoism: 34 links
- Symbols to Feng Shui: 25 links
- Feng Shui to Symbols: 23 links
- Folk Beliefs to Rituals: 48 links
- Rituals to Folk Beliefs: 34 links
- Rituals to Taoism: 25 links

The weakest cross-collection area is Feng Shui receiving support from other sections. Several feng shui bridge pages have good outbound links but very low inbound support:

- `/feng-shui/luopan-compass`
- `/feng-shui/five-elements-and-bagua`
- `/feng-shui/qi-in-feng-shui`

## Ranked opportunities

### HIGH

1. Fix the only editorial orphan: `/taoism/thunder-deities`.
   - Add inbound links from deity and protection pages.
   - Best sources: `/taoism/deities-in-taoism`, `/taoism/celestial-bureaucracy`, `/taoism/jade-emperor`, `/rituals/protection-ritual`, `/symbols/protective-talismans`, `/rituals/talisman-burning`.

2. Promote `/symbols/yin-yang` into a real hub.
   - It has 37 inbound links but only 2 outgoing links.
   - Add links to Qi, Dao, Taiji Diagram, Taiji and Wuji, Yin Yang Cosmology, Qi and Yin Yang, Taoist Cosmology, Wu Wei, Heaven and Earth, and Cosmic Order.

3. Promote `/folk-beliefs/ghost-month` into a real hub.
   - It has 14 inbound links but only 2 outgoing links.
   - Add links to Ghost Month and Ancestors, Ghost Gates, Wandering Spirits, Spirit Money, Ancestor Veneration, Underworld Beliefs, Judgment after Death, Funeral Offerings, Spirit Offerings, and Ancestor Ritual.

4. Strengthen the Qi/Five Elements/Yin-Yang cluster.
   - This is the best next expansion cluster because it already has the strongest graph, high topical authority, and multiple hub candidates.
   - Fix low-inbound bridge pages: `/taoism/five-elements-and-qi`, `/feng-shui/five-elements-and-bagua`, `/feng-shui/qi-in-feng-shui`.

### MEDIUM

1. Strengthen feng shui bridge pages.
   - `/feng-shui/luopan-compass` needs both inbound and outbound links.
   - `/feng-shui/five-elements-and-bagua` and `/feng-shui/qi-in-feng-shui` need inbound support from related feng shui and symbol pages.

2. Make `/feng-shui/qi-flow` and `/feng-shui/five-elements-in-feng-shui` stronger subhubs.
   - Both have strong inbound authority but only 4 outgoing links each.
   - Add outgoing links to relevant bagua, elements, Lo Shu, luopan, and cosmology pages.

3. Strengthen temple/deity inbound support.
   - The cluster has 17 pages but lower average inbound strength than the other major clusters.
   - Prioritize Thunder Deities, Sacred Sites, Sacred Mountains, Pilgrimage Traditions, and Taoist Temples.

4. Improve low-inbound but high-outbound bridge pages.
   - `/taoism/vital-energy-concepts`
   - `/folk-beliefs/ancestral-hall`
   - `/folk-beliefs/protective-folk-customs`
   - `/rituals/ancestor-ritual-symbols`
   - `/symbols/qi-and-bagua`

### LOW

1. Review empty content folders before future expansion.
   - Empty directories suggest planned clusters: Buddhist objects, forbidden/taboo, ghosts, glossary, I Ching, jade, spirits, talismans.
   - Do not create pages until the current hub structure is cleaned up.

2. Add more reciprocal links where the topic relationship is strong.
   - Example: if a page links to a hub and the hub is directly relevant, ensure the hub links back to that page.

3. Consider differentiating category pages from hub pages.
   - Current category index pages list all entries. That is useful for discovery, but topical hubs should be article pages with curated related links.

## Recommended next cluster expansion

Recommended next cluster: Qi / Yin-Yang / Five Elements / Cosmology.

Rationale:

- Topical authority: This cluster contains the strongest site-wide authority page, `/taoism/qi`, plus highly authoritative support pages: `/symbols/yin-yang`, `/symbols/five-elements`, `/taoism/dao`, and `/taoism/taoist-cosmology`.
- Internal graph strength: The cluster has 16 existing pages, 81 intra-cluster links, 195 total inbound links, and the highest average inbound strength of the audited clusters.
- Existing content coverage: The archive already covers Qi, balanced qi, cultivating qi, qi circulation, qi in Taoist practice, qi in feng shui, qi and bagua, qi and yin-yang, qi and five elements, five elements symbolism, generating cycle, overcoming cycle, and feng shui five elements.
- Best strategic fit: The cluster bridges Taoism, symbols, feng shui, and ritual cosmology, making it a strong foundation for future topical authority.

Recommended sequence before creating any new pages:

1. Expand `/symbols/yin-yang` outbound links.
2. Increase inbound support to `/taoism/five-elements-and-qi`, `/feng-shui/five-elements-and-bagua`, and `/feng-shui/qi-in-feng-shui`.
3. Strengthen `/feng-shui/qi-flow` and `/feng-shui/five-elements-in-feng-shui` as feng shui subhubs.
4. Use `/taoism/qi`, `/symbols/five-elements`, `/symbols/yin-yang`, and `/taoism/taoist-cosmology` as the main four-page hub layer.

Do not expand into the empty `jade`, `i-ching`, `talismans`, or `ghosts` directories until the current graph cleanup is complete. The strongest short-term SEO and topical-authority return is improving the existing Qi/Yin-Yang/Five Elements/Cosmology network.

## Suggested source-target link additions

These are recommendations only. No content was modified.

HIGH

| Add link from | Add link to | Reason |
|---|---|---|
| `/taoism/deities-in-taoism` | `/taoism/thunder-deities` | Thunder deities belong in the deity hierarchy. |
| `/taoism/celestial-bureaucracy` | `/taoism/thunder-deities` | Thunder deities fit the bureaucratic divine order. |
| `/rituals/protection-ritual` | `/taoism/thunder-deities` | Thunder rites and protective ritual overlap. |
| `/symbols/protective-talismans` | `/taoism/thunder-deities` | Thunder deities are already related outbound from Thunder Deities to talismans. |
| `/symbols/yin-yang` | `/taoism/qi` | High-authority hub should link to the core energy hub. |
| `/symbols/yin-yang` | `/taoism/yin-yang-cosmology` | Direct topical child page. |
| `/symbols/yin-yang` | `/taoism/qi-and-yin-yang` | Direct topical child page. |
| `/symbols/yin-yang` | `/symbols/taiji-diagram` | Direct symbolic relationship. |
| `/folk-beliefs/ghost-month` | `/folk-beliefs/ghost-month-and-ancestors` | Direct topical child page. |
| `/folk-beliefs/ghost-month` | `/folk-beliefs/ghost-gates` | Direct Ghost Month concept. |
| `/folk-beliefs/ghost-month` | `/folk-beliefs/wandering-spirits` | Direct spirit/ghost cluster relationship. |
| `/folk-beliefs/ghost-month` | `/taoism/underworld-beliefs` | Strong afterlife bridge. |

MEDIUM

| Add link from | Add link to | Reason |
|---|---|---|
| `/feng-shui/bagua-map` | `/feng-shui/luopan-compass` | Luopan supports directional and bagua interpretation. |
| `/feng-shui/bagua-in-feng-shui` | `/feng-shui/luopan-compass` | Bagua practice and compass use are naturally linked. |
| `/symbols/lo-shu-square` | `/feng-shui/luopan-compass` | Directional/cosmological bridge. |
| `/symbols/eight-trigrams` | `/feng-shui/luopan-compass` | Trigram orientation and luopan interpretation connect. |
| `/feng-shui/five-elements-in-feng-shui` | `/feng-shui/five-elements-and-bagua` | Direct parent-child relationship. |
| `/feng-shui/bagua-in-feng-shui` | `/feng-shui/five-elements-and-bagua` | Direct bagua application relationship. |
| `/feng-shui/qi-flow` | `/feng-shui/qi-in-feng-shui` | Direct qi/feng shui relationship. |
| `/feng-shui/cosmology-and-feng-shui` | `/feng-shui/qi-in-feng-shui` | Conceptual bridge from cosmology to qi. |
| `/taoism/qi-and-five-elements` | `/taoism/five-elements-and-qi` | Direct reciprocal topic relationship. |
| `/taoism/qi` | `/taoism/five-elements-and-qi` | Strengthens a low-inbound Taoist bridge page. |

LOW

| Add link from | Add link to | Reason |
|---|---|---|
| `/folk-beliefs/ancestor-veneration` | `/folk-beliefs/ancestral-hall` | Ancestral hall is a natural supporting page. |
| `/rituals/ancestor-ritual` | `/rituals/ancestor-ritual-symbols` | Ritual symbols should be connected to the ritual hub. |
| `/folk-beliefs/household-protection` | `/folk-beliefs/protective-folk-customs` | Strengthens a low-inbound protective customs page. |
| `/symbols/bagua` | `/symbols/qi-and-bagua` | Qi and Bagua should be a child of Bagua. |
| `/taoism/deities-in-taoism` | `/taoism/earth-god` | Earth God belongs in deity hierarchy. |
| `/taoism/deities-in-taoism` | `/taoism/queen-mother-of-the-west` | Queen Mother belongs in deity hierarchy. |

## Final audit conclusion

The archive is not suffering from broad orphaning or broken internal links. Its main issue is uneven authority distribution: a few high-authority pages, especially `/symbols/yin-yang` and `/folk-beliefs/ghost-month`, receive many links but do not pass enough relevance onward. The single true orphan, `/taoism/thunder-deities`, should be fixed first.

The best next cluster expansion is the Qi / Yin-Yang / Five Elements / Cosmology cluster, but only after strengthening existing hub behavior and low-inbound bridge pages. This cluster has the strongest combination of topical authority, internal graph strength, and existing coverage.
