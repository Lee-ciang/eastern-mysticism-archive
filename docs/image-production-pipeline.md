# Eastern Mysticism Archive Image Production Pipeline

## 1. Overall Production Philosophy

Every image in Eastern Mysticism Archive is a reusable knowledge asset, not decoration.

Images should clarify ideas that are difficult to understand through text alone: symbolic relationships, historical sequences, ritual steps, cosmological models, spatial patterns, deity networks, festival cycles, and conceptual comparisons.

The production pipeline exists to make each image:

- Accurate enough for educational use.
- Visually consistent with the archive.
- Reusable across future articles and clusters.
- Search-friendly for Google Images.
- Suitable for Pinterest and social discovery.
- Accessible to readers using assistive technology.
- Lightweight enough for fast page performance.

An image should only be produced when it improves understanding, strengthens a hub page, supports a cluster, or creates a durable visual reference that can be reused later.

## 2. Image Request Workflow

Official workflow:

```text
Authority Page
↓
Determine image requirements
↓
Choose image category
↓
Write AI prompt
↓
Generate draft
↓
Manual review
↓
Revision
↓
Compression
↓
WebP export
↓
ALT text
↓
Upload
↓
Page integration
```

Workflow details:

1. Authority Page

Start with the page or cluster that needs visual support. Prioritize cornerstone pages, hub pages, and pages explaining complex systems.

2. Determine image requirements

Decide what the image must teach. Identify the concept, relationship, sequence, map, symbol, or comparison that the reader needs to understand.

3. Choose image category

Select the correct image type: hero illustration, knowledge diagram, relationship map, timeline, comparison diagram, symbol illustration, flow diagram, map, or icon set.

4. Write AI prompt

Use the archive's visual style standard and adapt it to the topic. Specify dimensions, labels, diagram type, and any required exclusions.

5. Generate draft

Create an initial image draft. Do not treat the first output as final.

6. Manual review

Check factual accuracy, label spelling, symbol placement, visual hierarchy, and consistency with the archive style.

7. Revision

Revise the prompt or image until the visual is accurate, readable, and consistent.

8. Compression

Optimize the image for web performance without damaging readability.

9. WebP export

Export the final production asset as `.webp` unless a different format is specifically required.

10. ALT text

Write concise, descriptive ALT text that explains the educational content of the image.

11. Upload

Place the image in the correct `public/images/` subdirectory according to its category and page context.

12. Page integration

Add the image to the relevant page only after it passes QA. Confirm placement supports the surrounding content.

## 3. Image Checklist

Before publishing every image, check:

- Accuracy: The image matches the article and does not introduce false relationships.
- Consistency: The image follows the archive's approved visual identity.
- Spelling: All English labels are correct.
- Labels: Labels are readable, concise, and placed near the correct objects.
- Colors: Palette is muted, readable, and consistent with the Visual Knowledge System.
- Dimensions: The asset uses the correct standard size for its image category.
- SEO: File name, context, caption, and placement support search discovery.
- ALT: ALT text is descriptive, concise, and not keyword-stuffed.
- Compression: File size is web-appropriate without damaging detail.
- File naming: File name follows the official slug-based convention.

No image should be published if it contains uncertain Chinese characters, unreadable labels, incorrect symbols, broken visual hierarchy, or misleading cultural claims.

## 4. Prompt Workflow

Image prompts should be built in layers.

### Base Prompt

The Base Prompt defines the archive style. It should include manuscript texture, ink linework, muted color palette, educational infographic structure, and professional museum-quality tone.

Use the Base Prompt for every image so the archive remains visually coherent.

### Topic Prompt

The Topic Prompt defines the subject.

It should include:

- Page slug or article title.
- Main concept being explained.
- Required symbols, nodes, or objects.
- Cultural or historical context.
- What the image must avoid.

Example:

```text
Topic: Bagua as a Chinese cosmological diagram. Show eight trigrams arranged around a central Taiji symbol, with clear English labels and subtle directional structure.
```

### Diagram Prompt

The Diagram Prompt defines layout and information structure.

It should include:

- Image category.
- Required dimensions.
- Number of sections, nodes, arrows, or stages.
- Label placement.
- Reading direction.
- Hierarchy of primary and secondary information.

Example:

```text
Create a knowledge diagram, 1400 x 1000, with one central symbol, eight surrounding labeled nodes, thin ink arrows showing relationships, and a small legend in the lower corner.
```

### Revision Prompt

The Revision Prompt corrects specific problems.

It should be precise and limited:

- Fix this label.
- Remove this incorrect symbol.
- Make arrows circular.
- Use muted red only for the selected node.
- Increase label contrast.
- Remove photorealistic people.
- Correct direction order.

Avoid vague revision prompts such as "make it better." Every revision should name the exact problem.

## 5. Image QA

Image QA is mandatory because educational visuals can accidentally create misinformation.

Check for:

- Wrong symbols: A symbol belongs to a different tradition, cluster, or concept.
- Wrong directions: North, south, east, west, or seasonal placement is incorrect.
- Wrong Bagua: Trigrams, labels, or arrangement do not match the intended Bagua system.
- Wrong Five Elements: Generating, overcoming, directional, or color relationships are incorrect.
- Wrong Chinese characters: Characters are malformed, unreadable, inappropriate, or unrelated.
- Wrong arrows: Arrows imply causation when the relationship is symbolic, cyclical, or associative.
- Incorrect relationships: Concepts are shown as equivalent when they should be related but distinct.
- Visual clutter: Too many labels, arrows, colors, or decorative elements reduce learning value.
- Readability failure: Text cannot be read at article width or thumbnail size.

QA process:

1. Compare the visual against the source article.
2. Compare symbolic systems against established archive pages.
3. Check every label manually.
4. Check all arrows and relationship lines.
5. Confirm the image does not make supernatural, medical, financial, or predictive claims.
6. Review mobile readability.
7. Approve only after the image teaches the intended concept clearly.

## 6. SEO Workflow

File name:

- Use lowercase.
- Use hyphens.
- Begin with the page slug.
- Add the image type or purpose.
- Example: `bagua-relationship-map.webp`.

ALT:

- Describe the image content accurately.
- Include the main concept naturally.
- Avoid keyword stuffing.
- Keep it useful for screen readers.

Caption:

- Use captions when they improve understanding.
- Keep captions factual and concise.
- Do not repeat the ALT text exactly.

Placement:

- Place the image near the relevant section.
- Use hero images near the top of major hub pages.
- Use diagrams where the concept is explained.
- Use timelines near historical sections.
- Use relationship maps near cluster summaries.

Lazy loading:

- Use lazy loading for non-critical images when supported.
- Avoid slowing the first viewport with multiple large images.

WebP:

- Export final production images as `.webp`.
- Balance compression with label readability.
- Keep master files separately if future editing is expected.

Open Graph:

- Create `1200 x 630` versions for important authority pages when needed.
- Keep title text readable and centered within safe margins.

Pinterest:

- Create `1000 x 1500` vertical versions for strong evergreen topics.
- Use clear title hierarchy and one central educational idea.

## 7. Version Control

Use version naming during production:

```text
bagua-hero-v1.webp
bagua-hero-v2.webp
bagua-hero-final.webp
```

Version rules:

- `v1` is the first generated draft.
- `v2`, `v3`, and later versions are revised drafts.
- `final` is the approved production image.
- Only final images should be integrated into pages.
- Drafts should not be referenced by live content.
- If a final image is later replaced, create a new version rather than silently overwriting the historical asset during review.

Recommended production pattern:

```text
{slug}-{image-type}-v1.webp
{slug}-{image-type}-v2.webp
{slug}-{image-type}-final.webp
```

For live page usage, the final public file may optionally omit `final` if the project chooses stable URLs:

```text
bagua-hero.webp
```

In that case, preserve versioned drafts outside the live image path or in a dedicated production archive.

## 8. Future Automation

Future AI agents or Codex workflows can use this pipeline to generate image task lists automatically.

Automation inputs:

- Page slug.
- Page category.
- Article title.
- Cluster name.
- Existing related links.
- Page headings.
- Authority level.
- Missing image types.

Automation output:

- Recommended image category.
- Suggested dimensions.
- Draft file name.
- AI prompt.
- Required labels.
- Required QA checks.
- Suggested ALT text.
- Suggested caption.
- Priority level.

Example automated task list:

```text
Page: bagua
Priority: High
Image Type: Knowledge Diagram
Dimensions: 1400 x 1000
File Name: bagua-knowledge-diagram.webp
Purpose: Explain eight trigrams around a central Taiji structure.
QA Focus: trigram labels, direction placement, readable English labels.
ALT Draft: Bagua diagram showing eight trigrams arranged around a central Taiji symbol.
```

At scale, automation should prioritize:

- Authority hubs first.
- Cluster hub pages second.
- Pages with high internal links third.
- Pages with complex abstract concepts fourth.
- Pinterest-friendly evergreen topics fifth.

The goal of automation is not to remove editorial review. It is to make image planning faster while preserving accuracy, consistency, and educational quality.
