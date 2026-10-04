# V3 URL Inventory / Consolidation Audit - 2026-10-04

**Project:** Eastern Mysticism Archive

**Phase:** Observation / Recovery Signal Monitoring

**Baseline HEAD:** `e207225`

**Decision:** V3A - Observation / structural freeze

## Executive Conclusion

V3 was a read-only inventory and consolidation audit, not a recovery implementation. It reconciled exact GSC membership with repository content and historical performance. The initial and final audit working trees were clean. No consolidation, deletion, redirect, noindex, content rewrite, or architecture change was implemented.

**Recommendation: V3A.** Preserve the current 189 content pages, six navigation routes, and completed authority work. Keep V1 and V2 unchanged while collecting new crawl and indexing evidence. Ten Class C pages are review candidates only, not an implementation queue; no pilot is approved.

This checkpoint summarizes the full ignored V3 report, especially sections 1-7 and 19-24. It does not rerun the audit or claim a new production technical inspection. The [August audit](../08/INDEXING_RECOVERY_AUDIT_2026-08-20.md) remains a historical record; the [current queue](../../../NEXT_OPTIMIZATION_QUEUE.md) records the active decision.

## Exact GSC Reconciliation

| Exported state | Total URLs | Public HTML | Technical resources |
| --- | ---: | ---: | ---: |
| Indexed | 10 | 10 | 0 |
| Crawled - currently not indexed (CNI) | 91 | 90 | 1 |
| Discovered - currently not indexed (DNI) | 95 | 95 | 0 |
| Total | 196 | 195 | 1 |

The 195 HTML routes comprise 189 content pages, the homepage, and five category hubs. The excluded resource is `/favicon.ico?favicon.0x3dzn~oxb6tn.ico`, in CNI. Exact sets contained no duplicate URLs, cross-set overlaps, malformed URLs, foreign hosts, or missing public routes.

The source audit recorded zero duplicate slugs, broken body-link destinations, broken related-link destinations, and total-inbound content orphans. These are local inventory/graph checks, not a guarantee of Google indexing.

### Report Dates and Crawl Limits

- Indexing charts end on 2026-09-21, although the exports are dated October 4.
- Performance covers Web / Last 3 months, with daily rows from 2026-06-30 through 2026-09-29.
- Crawl Stats covers 2026-07-06 through 2026-10-02, with 1,883 total requests and zero daily requests after September 6.
- The CNI URL table nevertheless records `/taoism/cosmology-in-taoism` last crawled on September 15. The discrepancy is unresolved; do not claim that no URL was crawled after September 6.
- Both crawl observations predate the reported V2 deployment on September 18. No meaningful post-V2 recrawl is established.

Of the 90 CNI HTML routes, 87 have crawl dates before July 30 and three on or after that date: `/taoism/spirit-world` and `/taoism/hun-and-po` on August 1, and `/taoism/cosmology-in-taoism` on September 15. July 30 is a date-only boundary for the historical canonical correction, not verification of deployment time.

All 95 DNI records use the `1970-01-01` placeholder. It is treated as no real crawl date in this export, not proof of quality rejection or of every historical bot request.

## Change Since 2026-08-20

Exact historical and current URL unions match, including the favicon.

| Route | August 20 | October 4 export |
| --- | --- | --- |
| `/taoism/cosmology-in-taoism` | Indexed | CNI |
| `/folk-beliefs/folk-magic` | Indexed | CNI |
| `/taoism/qi-energy` | Indexed | CNI |
| `/symbols/lo-shu-square` | CNI | Indexed |

Three URLs moved Indexed to CNI and one moved CNI to Indexed. No DNI URL moved to CNI or Indexed, and no URL moved back to DNI. The other 192 memberships are unchanged. Membership movement alone does not prove a recent crawl or a V2 effect.

## Inventory Classification

| Class | Content pages | Meaning and current handling |
| --- | ---: | --- |
| A - Keep Standalone / Protect | 76 | Protect demonstrated demand, reviewed authority work, or compelling entity/graph value; indexed membership adds caution, not proof of quality. |
| B - Keep Standalone / Improve Later | 103 | Retain plausible independent intent. Selective improvement may be considered later; no default merger or rewrite is approved. |
| C - Consolidation Review | 10 | An identifiable destination, meaningful intent overlap, limited added value, and no strong conflicting search signal justify review only. |
| D - Retirement Review | 0 | No page confidently meets the required combination of strong retirement warning signals. |
| Total | 189 | Six navigation routes are outside this content classification. |

Grades are provisional editorial judgments using current prose and evidence, not Google's quality labels. The audit's additional twenty diagnostic comparisons include protected and deliberately differentiated pages; they must not be treated as twenty further approved merges.

## Search-Signal Protection

**40 content pages** met at least one disclosed protection criterion in the available performance window:

- At least one click.
- At least ten impressions.
- At least three impressions with average position 10 or lower.

These are conservative triage thresholds, not statistical significance. The wider export records impressions for 69 content pages and clicks for five; all five clicked pages are currently CNI. Historical demand therefore prevents simplistic deletion based on current non-indexed status. Weaker positive signals also remain relevant. An absent page row means no known signal in this export, not lifetime zero demand.

Performance aggregations differ: the date table records five clicks / 912 impressions, while the page table records five / 926. Preserve both rather than forcing agreement. The separate query table has no page-query join; URL-level query counts and cannibalization cannot be inferred from it.

## Consolidation and Overexpansion Conclusions

**Inventory-overexpansion verdict: Moderate evidence, not established causation.** Reported growth from approximately 23 pages on May 28 to 189 content pages by June 22 remains a plausible historical contributor. These dated growth counts are background, not newly reconstructed Git snapshots. The indexed chart independently records 99 on July 11.

Current content-level evidence supports only a small Class C review set, not widespread inventory reduction. The audit found 127 articles below 500 measured English words, but short named entities can have distinct intent, historical signals, or indexed membership. Short length alone was not a deletion signal; DNI was not interpreted as Google rejecting content.

Shared reference blocks and some overlapping umbrella topics support selective fragmentation concerns. No whole-page copied-block dominance was measured. Completed upgrades also established meaningful scope boundaries. Class D remains zero; hypothetical reduction scenarios are sensitivity analyses, not selected recovery actions or page-count targets.

## V1 and V2

### V1: Completed / Retained

V1 removed misleading deployment-generated sitemap `lastmod` values in `f72cf45`. Retain it. The sitemap continues to represent 195 public HTML routes; no sitemap architecture change is authorized.

### V2: Deployed / Awaiting Valid Evaluation

V2 (`e207225`, reported deployment 2026-09-18) reduced direct homepage content destinations from approximately 189 to 17 authority pages, retaining five category hubs and category reachability for all 189 articles. Retain the selected URLs and current homepage hierarchy.

**V2 was deployed after the latest confirmed meaningful Google crawl activity, so it has not yet received a valid post-deployment crawl/indexing evaluation.** The September 6 chart cutoff and September 15 URL-table exception both predate deployment. Whole-window HTML/smartphone ratios do not prove post-V2 exposure. Do not blame V2 for the present indexing state or interpret lack of exposure as experiment failure.

## Current Root-Cause Interpretation

The source audit ranks evidence as follows. These grades describe observations or hypotheses, not proven Google mechanisms.

| Rank | Factor | Evidence and limit |
| --- | --- | --- |
| 1 | Crawl demand / activity collapse | Strong observation; underlying cause unknown. No meaningful post-V2 exposure established. |
| 2 | Historical canonical defect | Strong historical evidence; residual impact unresolved because most CNI crawl dates predate correction. |
| 3 | Reporting lag / asynchronous data | Strong evidence from different report cutoffs and old crawl dates alongside membership movement. |
| 4 | Rapid expansion | Moderate causal hypothesis; chronology does not establish causation. |
| 5 | Weak standalone information on a subset | Moderate evidence; not a judgment against all 189 pages. |
| 6 | Intent fragmentation | Moderate evidence; some similar titles have legitimate differentiated scope. |
| 7 | Excessive templating | Moderate structural evidence, weak causal evidence; no measured whole-body copied-text dominance. |
| 8 | Homepage hierarchy | Weak causal evidence; V2 remains unevaluated, not implicated. |
| 9 | Current technical indexability defect | Evidence against within the audit's scope; prior healthy checks and local reconciliation, not a fresh production crawl. |
| 10 | Current sitemap defect | Evidence against; V1 retained and 195 routes reconciled. |
| 11 | Manual penalty | Evidence against based on supplied "No issues detected" status, not a workbook measurement. |
| 12 | Weak external authority | Unknown / not measured; no backlink evidence supplied. |
| 13 | Audience relevance mismatch | Unknown to weak; no joined page-query or engagement data. |
| 14 | Fresh deployment / homepage failure | Evidence against locally; expected HEAD and intact graph, without a new live production test. |

Missing backlink data does not prove missing backlinks. Current content, old crawled versions, and asynchronous GSC reports must not be conflated. The evidence does not show that consolidation would restart crawling or recover indexing.

## Current Decision

**Recovery strategy: V3A - Observation / structural freeze**

Current phase: **Observation / Recovery Signal Monitoring**. V3 audit is complete; no V3 implementation is approved. Preserve all 189 content pages and completed Priorities 1-5. Do not start another content wave or authority rewrite schedule.

Until new evidence is reviewed and a separate change is approved, do not mass merge, delete, redirect, or rewrite; change sitemap architecture, canonical strategy, robots, or homepage authority architecture; or manipulate indexing merely to force activity. No indexing request is part of this decision. The ten Class C pages remain review-only.

The existing mobile navigation overflow remains an unrelated, open engineering backlog item. It is neither changed nor bundled into the indexing recovery experiment.

## Re-Evaluation Triggers and Timing

Following the source audit, review fresh exports in **14 days from the October 4 checkpoint**. This is a data-review interval, not a recovery deadline, automatic implementation authorization, or scheduled automation. If meaningful recrawling remains absent, extend observation and record the experiment as unevaluated.

Reassess when fresh evidence shows:

1. Renewed Google HTML crawling and verified requests to current authority pages or other observed URLs.
2. Time-specific smartphone crawling, discovery, or refresh evidence. The audit's aggregate HTML 13.54%, smartphone 10.3%, discovery 6.32%, and refresh 93.68% ratios are baselines, not proof of post-deployment exposure.
3. Exact Indexed/CNI/DNI membership transitions, real crawl dates replacing DNI placeholders, or other meaningful Page Indexing movement. Compare URLs, not only headline counts.
4. Meaningful new impressions, impression-receiving pages, queries, or clicks in comparable windows/dimensions. Do not invent a statistical threshold from these sparse data.
5. Persistent loss of previously signaled destinations, which calls for stop-and-review rather than broader changes.

Any later consolidation pilot requires owner approval, preservation and destination-scope review, newer page-query evidence where available, and verified exposure to current versions. Only if such a pilot is separately approved does the audit recommend **28-42 days after verified Google recrawl of changed sources/destinations**, not merely after deployment, for outcome observation. No pilot or implementation date is selected now.

## Preserved Evidence

Detailed data remains intentionally Git-ignored under `ema-gsc-audit/2026-10-04/`:

- `v3-consolidation-audit-2026-10-04.md`: primary full report.
- `v3-url-inventory-2026-10-04.csv` and `.json`: 195-route inventory.
- `v3-consolidation-candidates-2026-10-04.csv`: thirty reviews, including protected/held comparisons.
- `v3-analysis-evidence.json`: workbook values, body evidence, graph, comparisons, hashes, and editorial rules.
- The five original October 4 GSC workbooks.

These local evidence files will not appear automatically in a fresh clone. This tracked checkpoint preserves the decision and limitations without copying the full inventory. The original audit confirmed unchanged input hashes, clean Git status, no tracked edits, no build, no commit, and no push. This documentation task does not change that historical audit scope.
