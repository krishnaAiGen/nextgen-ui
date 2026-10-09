# NextGenIQ Press — Journal Portal UI

Static UI mockups for an open-access academic publishing portal, built as
Design Canvas (`.dc.html`) pages.

## Run locally

```bash
npm run dev
```

Then open <http://localhost:3000> (it redirects to `/Home.dc.html`).

No `npm install` needed — the dev server is a ~90-line zero-dependency Node
script. Override the port with `PORT=4000 npm run dev`.

> The pages **must** be served over HTTP. Opening a `.dc.html` file directly
> via `file://` shows a blank page, because the runtime `fetch`es its sibling
> components and `file://` requests are blocked by CORS.

## Deploy to Vercel

```bash
npx vercel          # preview
npx vercel --prod   # production
```

Or import the repo at [vercel.com/new](https://vercel.com/new) — `vercel.json`
already supplies the settings, so accept the defaults.

| Setting | Value |
| --- | --- |
| Framework preset | Other |
| Build command | `npm run build` |
| Output directory | `public` |
| Install command | *(none required)* |

## How it works

Every page is a standalone HTML document wrapped in `<x-dc>`. There is no
bundler and no server: [`public/support.js`](public/support.js) is a
self-contained client-side runtime that

1. loads React 18 and Babel from unpkg at runtime,
2. compiles the `{{ expression }}` templates plus the `<sc-if>` / `<sc-for>`
   control-flow tags, and
3. resolves each `<dc-import name="Header">` by fetching `./Header.dc.html`
   from the same directory.

Because imports resolve relative to the current URL, **all `.dc.html` files
must stay flat in `public/`** — moving one into a subdirectory breaks its
imports. `npm run build` compiles nothing; it verifies that every import and
local script reference resolves, so a broken link fails the deploy instead of
shipping a blank page.

The entry point is `Home.dc.html` rather than `index.html`. The runtime derives
a page's component name from its URL path, so the path has to keep the
`.dc.html` suffix — hence the `/` → `/Home.dc.html` redirect in both
`vercel.json` and the dev server.

## Layout

```
public/                 # deployed as-is (Vercel output directory)
├── Home.dc.html        # entry point
├── Header.dc.html      # shared, pulled in via <dc-import>
├── Footer.dc.html      # shared, pulled in via <dc-import>
├── …                    # Article, Authors, Dashboard, Issue, Journal,
│                        # JournalMasthead, JournalPage, Journals, Profile,
│                        # ProposeJournal, Search, SignIn, Submit
├── support.js          # Design Canvas runtime (generated — do not edit)
├── image-slot.js       # <image-slot> custom element
├── data.js             # mock journal/article content
├── theme.js            # design tokens, light/dark
├── motion.js           # shared animation helpers
└── assets/             # hero images and article thumbnails

scripts/
├── dev-server.mjs      # npm run dev
└── build.mjs           # npm run build — reference check only

design-sources/         # not deployed: original uploads, canvas thumbnail
```

### Pages

`Home` · `Journals` · `Journal` · `JournalPage` · `JournalMasthead` · `Issue` ·
`Article` · `Search` · `Authors` · `Submit` · `ProposeJournal` · `Dashboard` ·
`Profile` · `SignIn` — plus the shared `Header` and `Footer` components.
