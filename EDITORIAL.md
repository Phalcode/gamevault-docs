# GameVault Documentation Style Guide

This guide is the reference for every page under `docs/` and `blog/`. It keeps
the documentation consistent with the product and the website.

## Voice and tone

- Write in second person ("you"), present tense, and active voice.
- Be direct. Prefer "Run the server" over "The server should be run".
- Do not use filler words such as "simply", "just", "obviously" or "of course".
- Explain _why_ a step matters when the reason is not obvious.
- Do not promise features that are not shipped. Mark planned behaviour as
  planned and link to the tracking issue when one exists.

## Punctuation

Do not use em dashes. Replace them with a colon in definition lists, a comma in
prose, or start a new sentence. `pnpm build` and `pnpm lint` fail on em dashes
through `scripts/check-em-dash.mjs`.

## Terminology

| Use                  | Avoid                                  |
| -------------------- | -------------------------------------- |
| GameVault Server     | backend, the backend, GV server        |
| GameVault 2          | GV2, the new client, the frontend      |
| GameVault 1 (legacy) | old client, legacy Windows client      |
| Web UI               | web client, browser client             |
| game files           | ROMs, ISOs (unless the format matters) |
| library              | collection, catalogue                  |
| metadata             | meta, meta data                        |
| GameVault+           | GameVault Plus, GV+                    |

Product names are written exactly as above. Use sentence case for headings
("Add your games", not "Add Your Games") except for product names.

## Page structure

Every task page follows this order:

1. **Frontmatter** — `title` (optional if the H1 is clear), `sidebar_label` when
   the sidebar needs a shorter label, `description` for search and social
   previews, and `sidebar_position`.
2. **What and why** — one or two sentences before the first heading.
3. **Prerequisites** — a `:::note` block or a short "Before you start" list.
4. **Steps** — numbered, one action per step, exact UI labels and commands.
5. **Verify** — how the reader knows it worked.
6. **Next steps** — two or three relevant links.
7. **Troubleshooting** — only known failure modes, with a link to the central
   troubleshooting page.

Reference pages (configuration, API, feature comparison) may skip steps but
still start with a short explanation and a table of contents.

## Frontmatter

```yaml
---
title: Add your games
sidebar_label: Adding games
description: Prepare game files, upload them to GameVault Server and trigger indexing.
sidebar_position: 3
---
```

- `description` is required on every page. Keep it under 160 characters.
- Use `sidebar_position` only inside a category. Do not duplicate positions.
- Use `hide_table_of_contents: true` on short pages.
- Do not change slugs or paths without adding a redirect in
  `docusaurus.config.js`.

## Code and commands

- Every code fence has a language: `bash`, `yaml`, `json`, `ini`, `ts`, `text`.
- Commands are copy-paste ready. Do not leave unexplained placeholders.
- Use `$` only in shell transcripts. Use plain commands for copyable snippets.
- Show the expected output only when it helps verify the step.
- Prefer `docker compose` (v2) over `docker-compose`.

## Images

- Always add descriptive alt text that explains what the screenshot shows.
- Add a title only when it adds context; the docs site renders it as a caption:
  `![GameVault 2 library with filters open](/img/features/library.png "Library view with filters")`
- Crop screenshots to the relevant UI. Do not include personal data.
- Mark screenshots of GameVault 1 as legacy in the caption.
- Do not add images that are not stored in `static/img/`.

## Callouts

- `:::note` — context the reader needs before acting.
- `:::tip` — a faster or better way.
- `:::info` — background information.
- `:::warning` — data loss, security or irreversible actions.
- `:::danger` — actions that break the installation.

Do not stack callouts. If a page has more than three, move the content into
the body or a troubleshooting section.

## Links

- Use relative links to other docs (`../server/configuration.md`), absolute
  links for the website (`/download`), and full URLs for external sites.
- Link text describes the destination. Avoid "click here".
- When a page moves, add a redirect entry in `docusaurus.config.js`.
- Check `pnpm build`: it fails on broken links and anchors.

## Legacy content

GameVault 1 is maintenance-only. Legacy pages must:

- state the status in the first paragraph;
- link to the GameVault 2 equivalent when one exists;
- keep the original screenshots, with a "GameVault 1" caption.

## Blog posts

Blog posts are a historical record. Do not rewrite opinions or update facts
from the past. You may fix formatting, headings, code fences, image paths,
captions, tags and broken internal links. Add a note at the top when a post
describes behaviour that has since changed.
