# Mohammed Shan — Portfolio (Next.js)

A dark, minimal portfolio built with Next.js 14 (App Router), TypeScript and
Tailwind CSS. No CMS, no database — everything you'll want to change lives
in two files.

## Running it

```bash
npm install
npm run dev
```

Open http://localhost:3000. To ship it: `npm run build && npm start`, or
deploy the whole folder to Vercel (`vercel deploy`) — zero config needed.

## How to update content

**Text — bio, experience, skills, contact links:**
Edit `data/site.ts`. Every value on that file is what's rendered; there's no
other place that text lives.

**Projects:**
Edit `data/projects.ts`. Each project looks like this:

```ts
{
  slug: "xims",
  title: "XIMS — Enterprise Information Management System",
  tag: "Hoztox",
  addressBar: "xims.internal/dashboard",
  description: "…",
  stack: ["Django", "React", "Celery"],
  images: ["/projects/xims/1.jpg", "/projects/xims/2.jpg", "/projects/xims/3.jpg"],
  featured: true // only one project should be featured — it gets the big slot
}
```

`images` takes **as many screenshots as you want** — one is enough, or add
five. The first image is the cover shown on the card; clicking it opens a
gallery with all of them, with arrow-key/click navigation and a dot
indicator when there's more than one.

To add or swap screenshots:
1. Drop image files into `public/projects/<slug>/` (create the folder if it's a new project)
2. Point `images` at those paths in `data/projects.ts`

To add a whole new project, copy one of the existing objects in the array,
give it a new `slug`, and set `size` to `"medium"` or `"small"` (or leave it
off for the default small 3-up grid; `"medium"` gives it a 2-up slot).

**Profile photo:** replace `public/profile.jpg` with your own (same filename,
any image works — it's cropped to a 3:4 frame automatically).

## Structure

```
app/            — page shell, fonts, global CSS
components/     — one file per section, plus Gallery.tsx (the lightbox)
data/site.ts    — bio, experience, skills, contact
data/projects.ts — the project list
public/         — profile photo + project screenshots
```

Everything is plain Tailwind utility classes in the components — no separate
CSS files to hunt through if you want to tweak spacing or color.
"# Potfolio" 
