# SEO Technical Backlog

## Global Mobile Navigation Horizontal Overflow

| Field | Value |
| --- | --- |
| Date discovered | 2026-07-26 |
| Status | Open |
| Priority | Separate from content-cluster optimization |
| Affected scope | Global site header and mobile navigation |

### Observed Behavior

At a `390 x 844` mobile viewport, the global navigation extends beyond the page's available width and creates horizontal document overflow. Automated inspection traced the overflow to the navigation container and its final links, not to the Yin Yang visual components.

Lo Shu QA on 2026-07-27 reproduced the same pre-existing `76px` overflow. All overflowing elements again belonged to the global header navigation, and the new Lo Shu visual introduced no additional component or document overflow.

### Why It Was Excluded

The issue predates the Yin Yang authority-cluster work. Commit `4f27af2` was intentionally limited to the Yin Yang content cluster, Markdown visual directive, and reusable visual components.

Changing the global navigation would affect every archive page and require a broader responsive navigation design and regression test. It was therefore excluded rather than bundled into an unrelated SEO content optimization.

### Recommended Future Task

- Inspect the global header and navigation implementation.
- Select the smallest responsive pattern consistent with the existing site.
- Verify navigation labels and destinations remain accessible.
- Test at narrow mobile widths and intermediate breakpoints.
- Check keyboard navigation, focus visibility, and touch targets.
- Confirm no horizontal document overflow.
- Run cross-category page screenshots.
- Run ESLint, TypeScript, `git diff --check`, and the production build.
- Confirm static generation remains successful.

### Closure Criteria

This backlog item can close when:

- The global navigation fits or intentionally collapses at supported mobile widths.
- No page-level horizontal overflow remains.
- All navigation destinations remain reachable.
- Accessibility and responsive regression checks pass.
- The production build and static generation pass.
