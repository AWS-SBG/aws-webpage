# Restructure Plan: Page Clarity and Conversion

## Context
The current homepage has two redundant sections (Services and Members) that both describe Cloud Quest and workshops — a visitor reads Cloud Quest twice and learns nothing the second time. The hero has four equal social links and no primary CTA, a stats strip with placeholder values, and an abstract description. There is no project showcase despite real project content existing. The footer contact form is the wrong closing action for a student audience. This plan fixes all of it.

---

## Target Page Order
1. Hero (rewritten)
2. What You Get (new — merges Services + Members)
3. Upcoming Events (Events.tsx — unchanged)
4. Member Projects (new)
5. Meet the Team (current Projects.tsx — id fix only)
6. Join CTA (new — Slack-focused)
7. Footer (contact form demoted)

---

## Changes

### 1. `src/app/components/Hero.tsx`
- **Fix olive-green artifact**: The top-left maize blob (`opacity-30`) and light blue blob are overlapping near upper-left, producing a green cast via additive blending. Fix by moving the maize blob to `top-[-10%] right-[-5%]` (top-right) and keeping the light blue blob bottom-right only. Remove the third small maize blob entirely. This eliminates the overlap.
- **Description**: Replace abstract copy with — "Free AWS credits, certification vouchers, and workshops run with AWS engineers — open to all U-M students."
- **Primary CTA**: One solid maize pill button — "Join our Slack →" — linking to the Slack invite URL, placed directly under the description. This is the only button-styled element.
- **Secondary links**: Meetup, Instagram, LinkedIn as small `text-white/50` text links in one row below the button. No icons, no equal visual weight.
- **Remove**: the empty Buttons motion div, current four-icon social link row, stats strip, the third maize blob.
- **Affiliation bar**: Replaces stats strip. Thin `border-t border-white/10` row with three pipe-separated items: `Official AWS Student Builder Group · University of Michigan · Launching Fall 2026`. No counters. Remove the "Launching Fall 2026" badge at the top — it duplicates this line. Replace badge text with `Official AWS Chapter`.

### 2. `src/app/components/WhatYouGet.tsx` (new — replaces Services + Members on homepage)
- **Heading**: "What You Get" with "Get" in maize italic serif.
- **Background**: `#F4F6F9`.
- **Layout**: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` — no zipper offset. Events surface faster.
- **6 cards** (alternating maize / light blue left border):
  1. AWS Credits — maize
  2. Certification Exam Vouchers — light blue
  3. AWS Skill Builder Access — maize
  4. Workshops with AWS Engineers — light blue
  5. Builder Hackathon Track — maize
  6. Industry Networking — light blue
- Each card: icon, title, one-sentence description. Same card style as current Members cards.

### 3. `src/app/data/projects.ts` (new)
```ts
export interface Project {
  title: string;
  stack: string[];
  description: string;
  status: 'In Progress' | 'Completed';
  url?: string;
}
export const projects: Project[] = [
  {
    title: "SageMaker Protein Folding Module",
    stack: ["AWS SageMaker", "Python", "Jupyter"],
    description: "Using SageMaker to run protein structure prediction models, benchmarked against AlphaFold outputs.",
    status: "In Progress",
  },
  {
    title: "Grant Tracking App",
    stack: ["AWS Amplify", "DynamoDB", "React"],
    description: "A full-stack app for tracking research grant deadlines and funding status, built during the Builder Hackathon.",
    status: "Completed",
  },
];
```

### 4. `src/app/components/BuildProjects.tsx` (new)
- **Heading**: "What We're Building" with "Building" in maize italic serif.
- **Background**: white.
- **Layout**: 2-column grid. Each card horizontal: left = stack pills + status badge, right = title + description.
- **Status**: "In Progress" = light blue pill, "Completed" = maize pill.
- Returns `null` if `projects` array is empty.

### 5. `src/app/components/Projects.tsx` (team — minor fix)
- Change `id="work"` → `id="team"` on the section element.
- Change eyebrow label from "Core Team" to "Team".

### 6. `src/app/components/JoinCTA.tsx` (new)
- **Background**: `#00274C`.
- **Heading**: "Ready to build?" — white, "build" in maize italic serif.
- **One button**: large maize pill, full-width mobile / auto desktop — "Join our Slack →" → Slack invite URL, `target="_blank"`.
- **Below button**: `"Free to join · Open to all U-M students · Launching Fall 2026"` in `text-white/40 text-sm`.

### 7. `src/app/components/Footer.tsx`
- Remove the prominent "Get in Touch" button + large heading block.
- Replace with a small text link: `"Partner or sponsor with us →"` that calls `setIsFormOpen(true)`. Keep the ContactModal as-is.
- Add Slack link to the Connect column alongside Instagram, LinkedIn, Meetup.
- Fix social hrefs: Instagram → `https://www.instagram.com/awssbgmich/`, Meetup → `https://www.meetup.com/aws-sbg-at-university-of-michigan-ann-arbor-campus/events/`, Slack → invite URL.
- Left column becomes: club name + email + small sponsor link. No large heading.

### 8. `src/app/App.tsx`
```tsx
// HomePage render:
<Hero />
<WhatYouGet />
<Events />
<BuildProjects />
<Projects />    {/* team */}
<JoinCTA />
<Footer />
```
Remove `Services` and `Members` from homepage render (keep files; `Members` stays on `/members` route).

---

## Files Modified
- `src/app/components/Hero.tsx`
- `src/app/components/Projects.tsx` (id + eyebrow only)
- `src/app/components/Footer.tsx`
- `src/app/App.tsx`

## Files Created
- `src/app/components/WhatYouGet.tsx`
- `src/app/components/BuildProjects.tsx`
- `src/app/components/JoinCTA.tsx`
- `src/app/data/projects.ts`

## Homepage Render — Services and Members removed (files kept)

---

## Verification
- Hero shows one Slack button, concrete description, affiliation bar, no stats.
- What You Get shows 6 cards in a 3-col grid.
- Events unchanged and functional.
- BuildProjects shows 2 project cards; returns null if array emptied.
- Team section `id="team"` resolves from navbar Team link.
- JoinCTA Slack button opens invite in new tab.
- Footer contact form accessible only via "Partner or sponsor with us" text link.
- `/members` route still renders standalone Members page.
