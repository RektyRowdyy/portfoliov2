# Portfolio — CLAUDE.md

Personal portfolio website for Hridya Dham (`rektyrowdyy`), built on top of [chanhdai.com](https://github.com/ncdai/chanhdai.com) as the base stack.

## Stack

- **Next.js 16 (App Router)** — `src/app/(app)/page.tsx` is the home page
- **React 19**, TypeScript 5.8, Tailwind CSS v4
- **shadcn/ui**, Radix UI, Base UI for components
- **Motion** for animations, **visx + D3** for charts
- **next-themes** for dark/light mode
- **pnpm** as the package manager

## Key directories

| Path | Purpose |
|---|---|
| `src/app/(app)/` | Main layout + home page |
| `src/features/portfolio/` | All portfolio-specific components, data, types |
| `src/features/portfolio/data/` | User data, experiences, projects, social links, tech stack |
| `src/features/portfolio/components/` | Section-level React components |
| `src/config/site.ts` | Site-wide constants — MAIN_NAV, GitHub username, X handle |
| `src/components/site-header.tsx` | Top nav bar |
| `src/styles/globals.css` | Tailwind v4 theme + OKLch color tokens |
| `public/` | Static assets, favicons, OG images |

## Env vars

See `.env.local`. The critical one is `GITHUB_API_TOKEN` — without it the GitHub contributions graph on the profile header will fall back to a skeleton.

## Project management — Linear

All work tracked in **Linear** → Project: **"The Switch"** → Milestone: **"Portfolio"** (note: typo in Linear, that's the actual name).

### Active tickets

| ID | Title | Priority |
|---|---|---|
| HRI-41 | [Setup] Initialize portfolio codebase from reference | Urgent |
| HRI-42 | [Nav] Simplify site header — remove nav links & CommandMenu | High |
| HRI-43 | [Hero] Replace profile background with GitHub contributions graph | High |
| HRI-49 | [Data] Personalize profile, contact info & social links | High |
| HRI-44 | [Data] Add work experience & projects | High |
| HRI-45 | [Data] Update about bio & tech stack | Medium |
| HRI-50 | [Cleanup] Remove Awards, Certifications, Bookmarks, Blog, Sponsors sections | High |
| HRI-46 | [Section] Twitter screenshots placeholder panel | Medium |
| HRI-47 | [Polish] Branding — logo, favicon, OG image, site metadata | Medium |
| HRI-48 | [Deploy] Configure & deploy to production | Medium |

### Workflow conventions

- When starting a ticket, update its Linear status to **In Progress** via the MCP server (`mcp__linear-server__save_issue`).
- When completing a ticket, update status to **Done**.
- Stage & commit after each ticket is done before moving to the next.
- Commit message format: `[HRI-XX] short description of what changed`
- Do not run `npm run` / `pnpm run` commands in TODOs — verify in the browser manually.
- Deadline for all tickets: **June 15, 2026**

## Design decisions

- **No nav links in header** — only Logo, GitHub icon, ThemeToggle. `MAIN_NAV = []` in `site.ts`.
- **GitHub contributions graph** replaces the `ChanhDaiMarkIsometric` SVG in `ProfileHeader`.
- **Removed sections**: Awards, Certifications, Bookmarks, Blog, Sponsors, ComponentsShowcase.
- **Added section**: Twitter Screenshots (placeholder, full impl deferred).
- Sections kept: Overview, SocialLinks, About, Experiences, Projects, Insights, TOC.
