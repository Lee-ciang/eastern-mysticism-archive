# Indexing Recovery Audit - 2026-08-20

**Project:** Eastern Mysticism Archive  
**KAPF stage:** Indexing Stabilization / Post-Canonical Recovery Observation  
**Evidence source:** Exact Google Search Console exports in the Git-ignored `ema-gsc-audit/` workspace  
**Decision date:** 2026-08-20

## Executive Summary

This audit compares the exact Google Search Console URL sets with the archive's current public routes, page content, crawl chronology, metadata, internal-link graph, and cluster structure. Its purpose is to preserve the evidence behind the current stabilization strategy.

The exports contain 196 unique URLs: 195 public HTML routes and one favicon technical resource. The three GSC states are mutually exclusive in the supplied exports:

- **Set A - Indexed:** 12 URLs.
- **Set B - Crawled - currently not indexed:** 89 URLs, consisting of 88 HTML routes and one favicon resource.
- **Set C - Discovered - currently not indexed:** 95 HTML routes.

The decisive chronological finding is that 86 of the 88 Set B HTML routes were last crawled before the site-wide self-canonical correction around 2026-07-30. Only `/taoism/spirit-world` and `/taoism/hun-and-po` show a later crawl, both on 2026-08-01. No Set B HTML route was crawled on the fix date. Therefore, almost all current Crawled-not-indexed decisions describe pre-fix page versions and are not evidence about Google's treatment of the current self-canonical versions.

All 95 Set C exports use `1970-01-01` as the crawl date. In this audit, that value is treated as a GSC placeholder for no recorded crawl, not as a real crawl date and not as proof of content rejection.

The current technical inspection found all 195 public HTML routes returning HTTP 200, declaring a self-referencing canonical and matching `og:url`, appearing in the sitemap, and carrying no `noindex` directive or redirect. Robots rules do not block these routes. No current site-wide technical indexability defect was found.

Accordingly, expansion is paused while Google recrawls post-fix pages and reprocesses the sitemap. Mass rewriting, deletion, consolidation, redirects, and further canonical, sitemap, or robots changes are not approved on the present evidence.

## Evidence Boundaries

### Measured Facts

Measured facts in this report come from the exact exported URL sets, current route and HTML checks, repository content analysis, and internal-link graph calculations. Counts and percentages are reported as observed and are not extrapolated from samples.

### Evidence-Supported Interpretations

Interpretations connect multiple measured facts. The principal interpretation is that historical canonical defects, recrawl timing, sitemap reprocessing, rapid site expansion, and crawl prioritization provide a stronger explanation for the present state than a site-wide content-quality failure.

### Unresolved Hypotheses

Google's internal indexing systems are not directly observable. Site-wide quality reassessment, page-level intent overlap, or other indexing-selection factors may contribute, but the current exports do not establish them as dominant causes. This report does not claim a Google penalty.

## Exact URL Set Reconciliation

| Exported state | Total URLs | HTML routes | Other resources | Interpretation |
| --- | ---: | ---: | ---: | --- |
| Set A: Indexed | 12 | 12 | 0 | Indexed at export time |
| Set B: Crawled - currently not indexed | 89 | 88 | 1 | Crawled decision, overwhelmingly based on pre-fix versions |
| Set C: Discovered - currently not indexed | 95 | 95 | 0 | Discovered but no recorded crawl in the export |
| **Total** | **196** | **195** | **1** | Exact match to 195 public HTML routes plus favicon |

The one non-HTML Set B URL is the favicon. It is a technical resource and is excluded from content-page analysis. The exports contained no duplicate URLs, no overlap among sets, no malformed URLs, and no foreign-host URLs.

## Category Distribution

| Category or route type | Set A: Indexed | Set B: Crawled-not-indexed | Set C: Discovered-not-indexed |
| --- | ---: | ---: | ---: |
| Taoism content | 8 | 32 | 29 |
| Symbols content | 1 | 25 | 25 |
| Folk Beliefs content | 3 | 21 | 17 |
| Rituals content | 0 | 5 | 15 |
| Feng Shui content | 0 | 2 | 6 |
| Homepage | 0 | 1 | 0 |
| Category routes | 0 | 2 | 3 |
| Technical resources | 0 | 1 | 0 |

The distribution shows that the indexing issue is not isolated to one content category. Taoism has the largest absolute representation because it is the archive's largest category. Rituals and Feng Shui have no currently indexed pages in these exports, but their smaller page counts and crawl states do not by themselves prove category-level rejection.

## Crawl Chronology

The site expanded from approximately 23 pages on 2026-05-28 to 189 content pages by 2026-06-22. GSC indexed URLs rose to approximately 99 around mid-July, then fell to approximately 12 around 2026-07-25. The site-wide self-canonical defect was corrected around 2026-07-30 in commit `2cd06f6`. The sitemap later became successful; GSC last successfully read it on 2026-08-19 and reported 195 discovered pages.

For the 88 Set B HTML routes:

- Earliest last crawl: 2026-05-29.
- Latest last crawl: 2026-08-01.
- Median last crawl: 2026-07-16.
- Last crawled before canonical fix: 86.
- Last crawled after canonical fix: 2.
- Last crawled on the fix date: 0.
- Post-fix routes: `/taoism/spirit-world` and `/taoism/hun-and-po`, both on 2026-08-01.

This chronology is the audit's strongest evidence. Set B primarily records evaluations of versions that existed before the canonical correction. A post-fix crawl and indexing observation window is required before those decisions can be used to judge the current versions.

All 95 Set C routes have `1970-01-01` in the crawl-date field. That date is interpreted as a no-crawl placeholder. Set C should therefore be treated primarily as a discovery and crawl-prioritization problem until actual crawl evidence appears.

## Current Technical State

The current route audit found:

- 195 of 195 public HTML routes are indexable by the tested page-level signals.
- 195 of 195 return HTTP 200.
- 195 of 195 declare a self-referencing canonical.
- 195 of 195 have an `og:url` matching the public route.
- 195 of 195 appear in the sitemap.
- No public HTML route carries `noindex`.
- No public HTML route redirects.
- Robots rules do not block the public routes.

These findings do not guarantee indexing, but they provide evidence against a current site-wide technical exclusion. Canonical, sitemap, and robots changes are not justified without new contradictory technical evidence.

## Content-Depth Comparison

### Word Counts

| Metric | Set A: Indexed | Set B: Crawled-not-indexed | Set C: Discovered-not-indexed |
| --- | ---: | ---: | ---: |
| Mean words | 1000.0 | 742.0 | 580.7 |
| Median words | 440 | 389 | 384 |

| Word-count bucket | Set A | Set B | Set C |
| --- | ---: | ---: | ---: |
| Under 250 | 3 | 9 | 5 |
| 250-299 | 1 | 9 | 14 |
| 300-399 | 2 | 27 | 29 |
| 400-499 | 1 | 9 | 18 |
| 500-999 | 1 | 12 | 13 |
| 1000-1999 | 2 | 9 | 7 |
| 2000+ | 2 | 10 | 6 |

Indexed pages have a higher mean, but the medians are close and short pages occur in every state. Set B also contains ten pages above 2,000 words. Word count may be a page-level factor, but these distributions do not support mass rewriting as a recovery strategy.

### Headings and FAQ Coverage

| Structural measure | Set A | Set B | Set C |
| --- | ---: | ---: | ---: |
| Mean headings | 15.8 | 13.1 | 11.0 |
| Pages with FAQ sections | 33.3% | 20.0% | 17.4% |

Indexed pages are somewhat more developed on these measures. The differences can help prioritize future selective improvements, but they are correlations rather than proof of why a URL is or is not indexed.

## Internal-Link Comparison

| Link measure | Set A | Set B | Set C |
| --- | ---: | ---: | ---: |
| Mean inbound links, all internal sources | 21.0 | 15.4 | 13.8 |
| Median inbound links, all internal sources | 9 | 9 | 9 |
| Mean inbound contextual body links | 5.4 | 4.3 | 4.0 |
| Pages with zero inbound body links | 1 | 13 | 19 |
| Pages with zero outbound body links | 8 | 52 | 59 |

Indexed pages have a stronger mean inbound profile, while all three groups share the same median. Contextual-link gaps are more common in Sets B and C, but zero contextual links also occur in Indexed pages. Internal linking is therefore a useful selective recovery signal, not a sufficient root-cause explanation.

## Template and Metadata Findings

| Similarity measure | Set A | Set B | Set C |
| --- | ---: | ---: | ---: |
| Mean nearest-page structural similarity | 0.153 | 0.198 | 0.212 |
| Mean introduction similarity | 0.327 | 0.313 | 0.284 |
| Mean cluster overlap | 0.328 | 0.329 | 0.299 |
| Mean boilerplate proportion | 0.059 | 0.049 | 0.034 |

Template similarity does not sharply distinguish Indexed pages from the other sets. Repeated authority navigation blocks occur on 6 of 12 Set A pages, 26 of 85 Set B content pages, and 20 of 92 Set C content pages. Because the feature is proportionally most common in Set A, the audit does not support it as a dominant cause.

No duplicate titles were found. Five exact duplicate-description groups affect 14 pages across multiple indexing states, including one Indexed page. Metadata duplication is real but limited and is ranked as a secondary issue rather than a site-wide explanation.

## Cluster Findings

| Cluster | Total pages | Set A | Set B | Set C |
| --- | ---: | ---: | ---: | ---: |
| Yin Yang | 5 | 0 | 3 | 2 |
| Five Elements | 16 | 1 | 7 | 8 |
| Bagua | 15 | 0 | 8 | 7 |
| Qi | 13 | 1 | 6 | 6 |
| Taoist Cosmology | 12 | 1 | 4 | 7 |
| Eight Immortals | 10 | 3 | 6 | 1 |
| Taoist Deities | 21 | 1 | 10 | 10 |
| Ancestor | 12 | 0 | 3 | 9 |
| Talismans | 16 | 1 | 9 | 6 |
| Sacred Animals | 11 | 1 | 3 | 7 |
| Chinese Zodiac | 10 | 0 | 6 | 4 |
| Folk Magic | 6 | 2 | 2 | 2 |

Mixed states within most clusters argue against a simple cluster-wide technical block. The Eight Immortals and Folk Magic clusters have relatively strong indexed representation. Yin Yang, Bagua, Ancestor, and Chinese Zodiac have no indexed pages in the exact export and should be observed carefully, but their current states still need to be read against crawl chronology.

Potential future intent-overlap areas include `qi` versus `qi-energy`, Taoist Cosmology variants, Taoist Immortals variants, Five Elements/Qi relationship pages, Bagua/Five Elements relationship pages, several talisman micro-pages, and short Sacred Animal or individual Immortal profiles. These are review candidates, not approved consolidation or deletion targets.

## Strong Authority Pages in Set B

Set B contains substantial authority pages whose last known crawls predate the canonical fix, including:

- `/symbols/five-elements`
- `/symbols/yin-yang`
- `/symbols/lo-shu-square`
- `/folk-beliefs/ancestor-veneration`
- `/taoism/taoist-heavens`
- `/taoism/taoist-cosmology`
- `/feng-shui/qi-flow`
- `/taoism/taoist-deities`
- `/folk-beliefs/ancestral-hall`
- `/rituals/taoist-talisman-rituals`
- `/rituals/talisman-burning-practice`

Their presence in Set B is evidence against treating the status as proof that all affected pages are thin or low quality. Their pre-fix crawl dates also mean the current versions have not yet received a recorded post-fix evaluation in the supplied data.

## Weak-Page Candidates for Later Review

Pages that may deserve selective review after the observation window include `/folk-beliefs/folk-charms`, `/folk-beliefs/folk-taboos`, `/symbols/azure-dragon-symbol`, `/symbols/black-tortoise-symbol`, several individual Immortal profiles, household and threshold talisman pages, and short deity profiles.

This candidate list is based on combinations of limited standalone depth, narrow intent, contextual-link gaps, and overlap risk. It is not an instruction to rewrite, merge, redirect, or delete these pages now.

## Root-Cause Ranking

### Strongly Supported

1. **Historical canonical defect.** Almost all Set B HTML decisions were made before the self-canonical correction.
2. **Canonical reprocessing delay.** Only two Set B HTML routes show a post-fix crawl.
3. **Sitemap reprocessing.** GSC successfully read the sitemap on 2026-08-19, one day before this audit.
4. **Rapid archive expansion.** The site grew from approximately 23 pages to 189 content pages in less than a month.
5. **Crawl prioritization.** Every Set C URL lacks a recorded crawl, and stronger inbound-link means correlate with more advanced indexing states.

### Moderately Supported or Plausible

1. **Intent overlap.** Several entity families contain pages with potentially competing search intent.
2. **A limited weak-page subset.** Some short or narrowly differentiated pages may need later page-specific work.
3. **Site-wide reassessment.** The mid-July rise and late-July fall may reflect broad reprocessing, but GSC exports cannot establish the mechanism.
4. **GSC reporting lag.** Indexing and crawl reports can trail current page state; the present audit cannot quantify that lag.

### Evidence Against a Dominant Role

- Template similarity.
- Zero contextual body links by themselves.
- Repeated authority navigation blocks.
- A current site-wide technical indexability defect.

### Weakly Supported

- **Metadata duplication as the primary cause.** Duplicate descriptions are limited and cross indexing states; duplicate titles were not found.

## Recovery Tiers

The tiers classify the 180 non-indexed HTML routes by their current evidence and intended handling. They do not authorize content or technical changes.

### Tier 0 - Await First Crawl: 95 URLs

All 95 Set C routes belong here. Preserve technical accessibility, sitemap inclusion, and internal discovery paths while waiting for real crawl evidence. Do not diagnose these pages as rejected content from a never-crawled placeholder state.

### Tier 1 - Protect and Observe: 27 URLs

These are strong Set B authority or strategically important pages. Protect their current work, monitor recrawl, and avoid speculative rewrites while their known GSC crawls predate the canonical fix.

### Tier 2 - Selective Recovery Candidates: 34 URLs

These pages may benefit from page-specific review only after a post-fix crawl remains Crawled-not-indexed for a meaningful period. Evaluate search intent, contextual links, information gain, overlap, and competition before approving changes.

### Tier 3 - High-Overlap Review: 6 URLs

These pages require careful differentiation review if post-fix evidence continues to be unfavorable:

- `/symbols/protective-talismans`
- `/symbols/bagua-and-five-elements`
- `/feng-shui/five-elements-and-bagua`
- `/taoism/five-elements-and-qi`
- `/symbols/protective-charms`
- `/taoism/immortals-in-taoism`

Tier 3 does not authorize consolidation, redirects, or deletion.

### Tier 4 - Later Consolidation Review: 18 URLs

These are lower-priority micro-entities or pages with narrower standalone value. Review only after Tier 0 crawl behavior and Tier 1 recovery are understood. No merge, redirect, deletion, or URL change is approved.

## Top 20 Recovery Candidates

The following pages have the highest combined recovery value based on authority role, existing depth, cluster importance, and graph position:

1. `/symbols/five-elements`
2. `/symbols/yin-yang`
3. `/symbols/lo-shu-square`
4. `/folk-beliefs/ancestor-veneration`
5. `/taoism/taoist-heavens`
6. `/taoism/taoist-cosmology`
7. `/feng-shui/five-elements-and-bagua`
8. `/taoism/taoist-deities`
9. `/folk-beliefs/ancestral-hall`
10. `/rituals/taoist-talisman-rituals`
11. `/rituals/talisman-burning-practice`
12. `/feng-shui/qi-flow`
13. `/taoism/heaven-earth-human`
14. `/taoism/yin-and-yang-balance`
15. `/taoism/i-ching-divination`
16. `/symbols/early-heaven-bagua`
17. `/taoism/cultivating-qi`
18. `/symbols/protective-charms`
19. `/taoism/immortals-in-taoism`
20. `/taoism/deities-in-taoism`

The route list records monitoring and recovery value. It does not prescribe immediate edits.

## Observation Sample

Monitor these five strong authority pages in Crawled-not-indexed:

1. `/symbols/five-elements`
2. `/symbols/yin-yang`
3. `/symbols/lo-shu-square`
4. `/folk-beliefs/ancestor-veneration`
5. `/taoism/taoist-heavens`

Each page's last known GSC crawl predates the canonical fix. Future checks should record:

- Last crawl.
- Current indexing state.
- User-declared canonical.
- Google-selected canonical.
- Whether a post-fix recrawl has occurred.

No indexing request is part of this task.

## Recovery Decision Rule

### If authority pages are recrawled after the canonical fix and begin indexing

Continue stabilization, preserve successful pages, and avoid unnecessary rewriting.

### If authority pages are recrawled after the canonical fix but remain Crawled-not-indexed for a meaningful period

Begin selective Tier 2 or Tier 3 recovery work based on:

- Standalone search intent.
- Contextual internal linking.
- Page-specific information gain.
- Semantic overlap.
- Cluster competition.

Document the post-fix crawl evidence and obtain approval before structural or editorial action.

### If pages remain never crawled

Treat the condition primarily as crawl and discovery prioritization rather than proven content rejection. Continue monitoring sitemap processing and discovery signals without inferring page-quality failure.

## Strategic Decisions

### Expansion

**PAUSED.** No new topic cluster or broad page expansion is approved during the stabilization window.

### Mass Rewriting

**NOT APPROVED.** Content depth differs by state, but the evidence does not establish a site-wide content-quality failure.

### Page Deletion

**NOT APPROVED.** The current data does not justify deleting pages.

### Consolidation / Redirects

**NOT APPROVED.** Overlap candidates require post-fix evidence and page-level review before any structural decision.

### Canonical / Sitemap / Robots Changes

**NOT APPROVED without new technical evidence.** Current checks show correct self-canonicals, sitemap inclusion, indexable directives, and crawl access.

### Current Primary Strategy

Allow post-fix recrawl and sitemap reprocessing before making large-scale structural changes. Monitor the observation sample, preserve completed authority work, and use the recovery decision rule when new crawl evidence arrives.

## Next Review Inputs

The next formal decision should use a fresh GSC export or URL Inspection evidence that can answer:

- Which Set B authority pages have been recrawled after 2026-07-30?
- Which recrawled pages changed indexing state?
- Do user-declared and Google-selected canonicals agree?
- Has Set C begun receiving real crawl dates?
- Has the successfully read sitemap changed crawl distribution?

Until those inputs exist, Priority 6 content optimization remains unapproved and expansion remains paused.
