# Eastern Mysticism Archive AI Collaboration and Operating Rhythm

## 1. Purpose

This handbook defines how humans, ChatGPT, Codex, and future AI systems collaborate on Eastern Mysticism Archive.

A standardized collaboration workflow improves quality, consistency, and long-term maintainability by making responsibilities clear. The project is large enough that ad hoc work can create duplicated topics, broken links, inconsistent standards, weak documentation, and uneven quality. A shared operating rhythm keeps every contributor aligned with the same goals.

The handbook exists to support:

- Clear division of responsibility.
- Predictable execution.
- Reliable validation.
- Better documentation discipline.
- Stronger SEO and knowledge graph health.
- Reusable systems rather than one-off work.
- Long-term continuity across many sessions, tools, and future AI agents.

The goal is not to slow the project down. The goal is to make progress repeatable, reviewable, and safe.

## 2. Collaboration Roles

### Human

The human owner provides direction, judgement, and final approval.

Responsibilities:

- Strategic decisions.
- Final approval.
- Publishing.
- Quality judgement.
- Brand direction.
- Cultural sensitivity review.
- Prioritization when tradeoffs are unclear.
- Approval of major new systems.
- Reviewing work before public release.

The human decides what the project should become. AI systems help plan, execute, validate, and document that direction.

### ChatGPT

ChatGPT acts as strategic planner, editor, project manager, and review partner.

Responsibilities:

- Architecture thinking.
- Planning.
- SEO strategy.
- Project management.
- Content strategy.
- Topic cluster planning.
- Documentation drafting.
- Review of audits and reports.
- Decision support.
- Operating framework design.
- Translating project goals into executable tasks.

ChatGPT should be used when the project needs reasoning, prioritization, strategy, documentation, or cross-system planning.

### Codex

Codex acts as the implementation and validation agent inside the repository.

Responsibilities:

- Batch implementation.
- Content generation.
- Markdown editing.
- Refactoring when allowed.
- Link graph validation.
- Duplicate slug checks.
- Broken link checks.
- Orphan page checks.
- Build verification.
- Git status review.
- Technical audits.
- Documentation file creation.

Codex should follow strict task boundaries. If the task is documentation-only, Codex should create only the requested documentation. If the task is content-only, Codex should not modify architecture. If the task forbids new pages, Codex should not create them.

### Future AI Agents

Future AI systems may support specialized production without changing the project's principles.

Responsibilities may include:

- Image generation.
- Diagram generation.
- Metadata assistance.
- Translation.
- Asset automation.
- ALT text drafting.
- Pinterest asset planning.
- Open Graph image planning.
- Topic gap detection.
- Performance reporting.
- Structured data suggestions.

Future AI agents should operate under the same project rules: documentation first, validation required, no uncontrolled expansion, no broken graph health, and no undocumented architectural change.

## 3. Standard Operating Rhythm

### Daily

Objectives:

- Make focused progress.
- Avoid uncontrolled scope.
- Keep the working tree understandable.

Typical tasks:

- Review current priority.
- Execute one clearly bounded task.
- Run required validation.
- Record results.
- Commit and push when appropriate.

Deliverables:

- One completed task.
- Clear report.
- Clean validation results.
- Updated documentation only when required.

### Weekly

Objectives:

- Review project health.
- Select the next best work.
- Prevent drift.

Typical tasks:

- Review Google Search Console trends.
- Review recent content and documentation changes.
- Check graph health.
- Identify weak pages or clusters.
- Choose next authority upgrade, visual asset batch, or cluster plan.

Deliverables:

- Weekly priority list.
- Validation summary.
- SEO observations.
- Backlog adjustments.

### Monthly

Objectives:

- Make larger strategic decisions.
- Evaluate whether the archive is compounding.

Typical tasks:

- Review static page count.
- Review indexed pages.
- Review clicks, impressions, and query growth.
- Audit internal links.
- Review image roadmap progress.
- Identify new bridge entities.
- Decide whether to expand, upgrade, or consolidate.

Deliverables:

- Monthly project health summary.
- Updated priority roadmap if needed.
- List of next authority upgrades.
- List of next visual assets.

### Quarterly

Objectives:

- Reassess the full operating strategy.
- Confirm the project is still aligned with its long-term vision.

Typical tasks:

- Full archive audit.
- SEO trend review.
- Content quality review.
- Visual asset system review.
- Documentation review.
- Technical maintenance review.
- Future product planning for books, courses, PDFs, or video.

Deliverables:

- Quarterly archive audit.
- Strategic roadmap update.
- System improvement recommendations.
- Major production priorities for the next quarter.

## 4. Standard Daily Workflow

Normal work sequence:

```text
Review data
↓
Choose priority
↓
Create implementation plan
↓
Codex execution
↓
Validation
↓
Build
↓
Git commit
↓
Git push
↓
Record progress
```

Workflow details:

1. Review data

Check the available source of truth: audits, documentation, Google Search Console, current backlog, or the latest project status.

2. Choose priority

Select one bounded task. Avoid mixing unrelated work such as content expansion, architecture changes, image planning, and SEO audits in the same task.

3. Create implementation plan

Define allowed files, forbidden files, validation requirements, and final report format.

4. Codex execution

Codex performs the requested repository work while staying inside the task boundaries.

5. Validation

Run the checks required by the task, such as duplicate slugs, broken links, orphan pages, word counts, route checks, or documentation-only status.

6. Build

Run the build only when requested or when code/content changes require verification. Documentation-only tasks usually do not require a build.

7. Git commit

Commit only after the work is complete and validated.

8. Git push

Push after the commit when the user requests deployment readiness or repository synchronization.

9. Record progress

Summarize what changed, what passed validation, and what remains for future work.

## 5. Decision Rules

Future priorities should be selected in this order:

1. Technical stability

Protect the build, routing, sitemap, robots, metadata, package configuration, and repository health. Broken technical foundations reduce the value of all future work.

2. Authority pages

Strengthen the most important evergreen pages before adding large volumes of new content. Authority pages support search visibility, internal linking, visual assets, and future products.

3. Knowledge graph

Maintain strong internal relationships. Fix orphan pages, weak pages, broken links, duplicate slugs, and missing bridges before expanding aggressively.

4. Visual assets

Create reusable diagrams, maps, timelines, relationship maps, and hero images after the relevant text foundation is strong.

5. Performance optimization

Improve speed, image compression, accessibility, and technical SEO after core content and graph structures are stable.

6. Expansion

Create new clusters only when data, coverage gaps, or strategic planning justify expansion. New pages should strengthen existing authority rather than scatter attention.

## 6. Quality Control

Quality control should happen before final reporting, before commits, and before publishing.

Review checkpoints:

- Broken related links.
- Broken body links.
- Duplicate slugs.
- Orphan pages.
- Pages with weak inbound links.
- Pages with excessive related links.
- Build status.
- TypeScript status.
- SEO title and description quality when metadata is part of the task.
- Accessibility, including ALT text for images.
- Visual consistency when assets are involved.
- Cultural and historical accuracy.
- Neutral educational tone.
- No supernatural, medical, financial, or predictive claims presented as factual guarantees.
- Documentation updates when workflows, standards, or systems change.

For documentation-only work:

- Confirm only the requested document was created.
- Confirm no existing files were modified.
- Confirm no code or content files changed.
- Do not run build unless explicitly requested.

For content work:

- Preserve frontmatter when required.
- Preserve slugs.
- Validate internal links.
- Validate route existence.
- Run build when required.

For visual asset work:

- Validate file naming.
- Validate dimensions.
- Validate ALT text.
- Validate compression.
- Validate image accuracy.

## 7. Documentation Maintenance

Project documentation should be updated when a new reusable decision has been made.

Update documentation after:

- A new workflow is introduced.
- A new standard is approved.
- A new production system is created.
- A major architectural decision is made.
- A validation process changes.
- A new asset class is introduced.
- A recurring task becomes standardized.
- A major strategic phase begins.

Documentation should not be updated for every small content edit. It should be updated when the project learns a rule that future work should reuse.

Documentation maintenance rules:

- Keep each document focused on its purpose.
- Do not duplicate large sections across documents unless necessary.
- Prefer linking concepts through clear naming rather than copying whole frameworks repeatedly.
- Preserve existing documentation unless the task explicitly asks for updates.
- Create new documentation only when it adds a durable operating standard.

## 8. Future Automation

Future AI systems can integrate into the workflow by taking over repeatable tasks while preserving project principles.

Possible automation areas:

- Automated duplicate slug checks.
- Automated broken link checks.
- Automated orphan detection.
- Automated related-link density reports.
- Automated image task lists.
- Automated ALT text drafts.
- Automated Open Graph image planning.
- Automated Pinterest asset planning.
- Automated GSC query summaries.
- Automated topic gap reports.
- Automated translation drafts.
- Automated diagram prompt generation.

Automation boundaries:

- AI systems should not publish without human approval.
- AI systems should not change architecture without explicit instruction.
- AI systems should not create new content clusters without strategic approval.
- AI systems should not treat generated images or translations as final without review.
- AI systems should not override project documentation unless asked.

Automation should increase consistency, not bypass judgement.

## 9. Long-term Operating Philosophy

The operating philosophy of Eastern Mysticism Archive is built from several principles that work together.

### Documentation First

Important systems should be documented before they are repeated. Documentation keeps the project coherent across many sessions, contributors, and AI tools.

### Knowledge Asset Production Framework (KAPF)

KAPF organizes work into lifecycle phases: Foundation, Knowledge Graph, Authority Layer, Visual Knowledge System, Data Driven Growth, and Knowledge Asset Expansion. Every major task should fit into this framework.

### One Source, Multiple Outputs (OSMO)

A strong source article should support many outputs: diagrams, timelines, social graphics, books, courses, and video scripts. Work should be designed for reuse.

### Data Before Expansion

Expansion should follow evidence. Search data, audits, graph health, and coverage gaps should guide new pages, clusters, and assets.

### Quality Before Quantity

The archive should grow carefully. A smaller number of strong, accurate, well-linked pages is more valuable than a large number of weak pages.

### Evergreen Before Trending

The archive should prioritize durable topics that remain useful over time. Evergreen assets compound in value because they keep serving readers.

### Reusable Assets First

Diagrams, maps, timelines, icon sets, and authority hubs should be built for repeated use. Reusable assets strengthen many pages at once.

Together, these principles make the project durable. Documentation defines the rules, KAPF defines the lifecycle, OSMO multiplies the value of each asset, data guides priorities, quality protects trust, evergreen focus compounds value, and reusable assets help the archive scale without losing identity.
