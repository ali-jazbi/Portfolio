# Ali Jazbi Portfolio

A responsive English portfolio built with Next.js 16 App Router, React 19, strict TypeScript and Tailwind CSS 4. The original design package remains in `desktop/`, `mobile/` and `source/`; these files are references, not the running application.

## Run locally

Use Node.js 20.9 or newer (Node.js 24 LTS was used for this implementation).

```sh
npm ci
npm run dev
```

Open http://localhost:3000. If that port is occupied, use `npm run dev -- --port 3010`.

```sh
npm run lint
npm run typecheck
npm run build
npm run start
```

`npm run lint` fails on warnings as well as errors. Production builds prerender every portfolio page, including the two case studies.

## Pages and architecture

- `/`: introduction, selected work, approach and experience.
- `/work`: accessible All / Professional / Personal filters.
- `/work/healthcare-dashboards`: Dotr healthcare work associated with SBMU.
- `/work/parin-sanat`: complete storefront and admin frontend redesign.
- `/about`: approach, skills, experience and education.
- `/contact`: direct email, LinkedIn and GitHub links.

`data/profile.ts`, `data/projects.ts` and `data/experience.ts` are the content sources. Shared server-rendered UI lives in `components/`. Only navigation and project filtering are client components. Project entries are rendered on the server and passed into the filter as content, keeping previews out of the client bundle. `app/globals.css` contains design tokens and the layout geometry adapted from the supplied references; Tailwind handles small shared utilities.

The design intentionally uses the supplied light palette, dark Home and Footer sections, numbered labels and concept illustrations. These requirements take precedence over generic design-skill defaults. Design settings: variance 5, motion 2, density 3. Motion only provides interaction feedback; reduced-motion preferences disable transitions and smooth scrolling.

## Content and approved images

The dashboard, storefront and form-builder visuals are **illustrative concepts**, rendered as HTML/CSS with accessible labels. They contain no client screenshots or patient records. Their preview content is a visual illustration, so it has no pretend navigation, cart actions or form submission.

To add a permitted project screenshot:

1. Place the sanitized file in `public/images/projects/`.
2. Set that project's `approvedImage` in `data/projects.ts` with `src`, descriptive `alt`, intrinsic `width` and `height`.
3. Update the case-study copy and preview disclaimer only after confirming the image may be published. Avoid suggesting that remaining concept images are real screenshots.
4. Recheck mobile cropping and image dimensions. `ProjectPreview` renders approved images through `next/image` with responsive sizes and reserved dimensions.

Set `profile.portrait` in `data/profile.ts` to add a permitted real portrait. The current `AJ.` graphic is a decorative placeholder, not a portrait.

## Domain and SEO

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` or your hosting environment to the confirmed public URL, then rebuild. A domain is intentionally not guessed. Until it is set, canonical URLs are omitted, the sitemap has no entries, and social image resolution uses the local development URL. Each page has its own title and description. A server-generated Open Graph image and favicon are included. Set the real URL before deployment so social images, canonical links and the six sitemap entries resolve publicly.

This work does not configure an automatic deployment or claim measured Core Web Vitals results.

## Browser checks and screenshots

```sh
npx playwright install chromium
npm test
```

On a Windows machine with Edge installed, browser downloads are optional:

```powershell
$env:PLAYWRIGHT_CHANNEL = 'msedge'
npm test
```

Tests check all six routes at 320, 375, 390, 425, 768, 1024, 1440 and 1920 pixels, horizontal/text overflow, page metadata, runtime errors, WCAG AA automated checks, filter results and announcements, menu keyboard behavior, internal links, contact URLs, skip navigation, reduced motion and missing routes. Full-page desktop and mobile PNGs are saved under `artifacts/screenshots/`; generated reports and screenshots are ignored by Git.

For checks against the production build, run `npm run build` first, then set `PLAYWRIGHT_PRODUCTION=1` before `npm test`. This starts the built app on port 3011.

## Needs confirmation

See [CONTENT_CHECKLIST.md](CONTENT_CHECKLIST.md) for missing dates, publishable screenshots, portrait permission, verified project links and the production domain. See [QA_REPORT.md](QA_REPORT.md) for validation evidence and its limits.
