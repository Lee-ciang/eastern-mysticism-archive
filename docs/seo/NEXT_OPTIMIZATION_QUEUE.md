# Next Optimization Queue

**Project:** Eastern Mysticism Archive  
**Queue date:** 2026-07-24  
**Recovery checkpoint:** 2026-10-04

**KAPF stage:** Performance Validation

## Purpose

This queue translates current Search Console signals into an ordered optimization plan. Work should proceed from the highest priority unless new data, a technical issue, or a documented dependency requires resequencing.

Each priority begins with a Search Console review and ends with validation plus a recorded optimization date.

**Current active state:** Observation / Recovery Signal Monitoring

**Recovery strategy:** V3A - Observation / structural freeze. No consolidation is approved.

Priorities 1 through 5 remain complete. No Priority 6 has been approved. New content expansion remains paused.

The [V3 URL Inventory Audit - 2026-10-04](reports/2026/10/V3_URL_INVENTORY_AUDIT_2026-10-04.md) records the current checkpoint: 195 public HTML routes, comprising 10 Indexed, 90 Crawled-not-indexed, and 95 Discovered-not-indexed. One favicon is excluded. Content classes are A: 76, B: 103, C: 10, D: 0; forty pages meet historical search-signal protection criteria. The [August audit](reports/2026/08/INDEXING_RECOVERY_AUDIT_2026-08-20.md) remains the historical comparison, not the current membership baseline.

| Recovery item | Current status |
| --- | --- |
| V1: remove misleading sitemap lastmod | Completed / retained (`f72cf45`) |
| V2: homepage authority hierarchy | Deployed 2026-09-18 / awaiting valid post-deployment Google crawl evaluation (`e207225`) |
| V3 URL Inventory Audit | Completed, read-only |
| V3 implementation recommendation | V3A / no consolidation; no pilot approved |

Keep V2's 17 authority destinations, five category hubs, and reachability for all 189 content pages. Crawl Stats ends nonzero activity on September 6, while a URL-table record reports a September 15 crawl; both predate V2 deployment. This discrepancy remains unresolved and does not establish valid post-V2 evaluation.

## Active Stabilization Gate

The next decision depends on new crawl and indexing evidence, not a new content-production target. Until that evidence is reviewed:

- Preserve the completed Priority 1-5 authority work.
- Monitor the August authority-page sample using current membership: Lo Shu Square is now Indexed; preserve the other observed authority pages and historical search signals.
- Retain V1 and V2; freeze homepage hierarchy, canonical strategy, sitemap architecture, robots, and the 189-page content inventory.
- Allow Google to recrawl corrected self-canonical pages and reprocess the successful sitemap.
- Do not interpret never-crawled pages as proven content rejection.
- Do not begin mass rewriting, deletion, consolidation, redirects, or new content expansion.
- Do not schedule another authority-page rewrite wave or turn the ten Class C reviews into implementation tasks.
- Do not request indexing or manipulate indexing signals merely to force activity.

Review fresh exports in 14 days from the October 4 checkpoint, as recommended by the V3 audit; this is not an automatic intervention deadline. Re-evaluate on renewed HTML/smartphone crawling, verified exposure to current versions, exact Page Indexing membership movement, or meaningful new impressions/clicks. Compare consistent reporting windows and dimensions. Without verified exposure, continue observation rather than declare V2 unsuccessful.

If recrawled authority pages begin indexing, preserve the successful state. Persistent non-indexing after meaningful recrawl can justify a separately approved page-level review under the [SEO decision rules](SEO_DECISION_RULES.md), not automatic consolidation. Any future approved pilot would be observed for 28-42 days after verified recrawl of changed sources/destinations, not merely after deployment. No pilot is selected now.

The mobile navigation overflow remains in the separate [technical backlog](TECHNICAL_BACKLOG.md); its status and engineering scope are unchanged.

## Priority 1: Yin Yang - Completed

**Completed:** 2026-07-26
**Git commit:** `4f27af2`
**Completion report:** [Yin Yang Optimization - 2026-07-26](reports/2026/07/YIN_YANG_OPTIMIZATION_2026-07-26.md)

The original tasks and completion criteria are retained below as historical context.

### Tasks

- Improve article depth.
- Add accurate educational diagrams.
- Improve FAQ coverage using observed search intent.
- Improve comparison sections.
- Improve contextual internal linking.

### Supporting Review

- Review Yin Yang Symbol and Yin Yang Meaning intent.
- Confirm that overlapping pages have distinct purposes.
- Strengthen links to Taiji Diagram, Qi, Five Elements, Bagua, and Taoist Cosmology where useful.
- Identify reusable visual assets for the cluster.

### Completion Criteria

- Main article is comprehensive and intent-aligned.
- Comparisons and FAQs answer distinct user questions.
- Cluster links form clear paths among principal Yin Yang entities.
- Proposed diagrams have defined educational purposes.

## Priority 2: Eight Immortals - Completed

**Completed:** 2026-07-27
**Git commit:** `00cb543`
**Completion report:** [Eight Immortals Optimization - 2026-07-27](reports/2026/07/EIGHT_IMMORTALS_OPTIMIZATION_2026-07-27.md)

The original tasks and completion criteria are retained below as historical context.

### Tasks

- Review hub completeness and query coverage.
- Improve supporting-page consistency.
- Strengthen links among individual immortals, immortal legends, Taoist immortals, and sacred mountains.
- Identify an Eight Immortals relationship or attribute diagram.
- Expand FAQs where search intent supports them.

### Completion Criteria

- The hub clearly introduces all eight figures.
- Each supporting page has a clear relationship to the hub.
- Symbolic attributes and common questions are covered accurately.
- The cluster avoids unnecessary duplication.

## Priority 3: Five Elements - Completed

**Completed:** 2026-07-27
**Git commit:** `be53a42`
**Completion report:** [Five Elements Optimization - 2026-07-27](reports/2026/07/FIVE_ELEMENTS_OPTIMIZATION_2026-07-27.md)

The original tasks and completion criteria are retained below as historical context.

### Tasks

- Review semantic coverage of the five phases and their cycles.
- Improve comparison with Yin Yang where useful.
- Strengthen links to Bagua, Qi, Feng Shui, cosmology, and related authority pages.
- Define reusable generation and control cycle diagrams.
- Review supporting pages for overlap and missing context.

### Completion Criteria

- The page distinguishes five phases from static material elements.
- Major relationships and cycles are explained consistently.
- Internal links connect relevant clusters without excessive density.

## Priority 4: Lo Shu - Completed

**Completed:** 2026-07-27
**Git commit:** `52aae73`
**Completion report:** [Lo Shu Optimization - 2026-07-27](reports/2026/07/LO_SHU_OPTIMIZATION_2026-07-27.md)

The original tasks and completion criteria are retained below as historical context.

### Tasks

- Review queries for Lo Shu, Lo Shu Square, and related spellings.
- Strengthen historical and symbolic explanation.
- Clarify relationships with Bagua and Feng Shui.
- Add or plan an accurately labeled Lo Shu diagram.
- Improve links to number, direction, and cosmology pages.

### Completion Criteria

- Search intent is served by the correct Lo Shu page.
- Diagram labels and number placement are accurate.
- Related concepts are linked without merging distinct traditions.

## Priority 5: Ancestor Worship - Completed

**Completed:** 2026-07-28
**Git commit:** `5dd7733`
**Completion report:** [Ancestor Worship Optimization - 2026-07-28](reports/2026/07/ANCESTOR_WORSHIP_OPTIMIZATION_2026-07-28.md)

The original tasks and completion criteria are retained below as historical context.

### Tasks

- Review terminology around ancestor worship and ancestor veneration.
- Improve intent alignment for Ancestor Worship and Ancestor Hall queries.
- Strengthen links among ancestor-veneration, ancestral-hall, ancestor-tablets, spirit-offerings, Qingming Festival, and Ghost Month.
- Identify a relationship map for household, hall, grave, and festival practices.
- Review cultural and religious framing for accuracy and neutrality.

### Completion Criteria

- Terminology is explained without flattening regional or religious variation.
- Hub and supporting pages have clear roles.
- Internal links support search intent and archive navigation.

## Queue Management Rules

- Search Console data can change the order when evidence is documented.
- Complete meaningful optimization of a successful cluster before unrelated expansion.
- Do not create new pages when an existing page can satisfy the intent through improvement.
- Record completed work and its date before moving to the next priority.
- Add newly tested pages to Star Pages Tier C for monitoring.
