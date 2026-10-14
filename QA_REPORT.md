# Portfolio QA report

Validated locally on 14 October 2026 with Node.js 24, Next.js 16.4.0, React 19.3.0, TypeScript 6 and Tailwind CSS 4.3.3.

## Verification

- Read the complete `PROMPT_CODEX_FA.md` and inspected all 12 individual desktop/mobile references.
- `npm run lint`: passed, with zero warnings.
- `npm run typecheck`: passed.
- `npm run build`: passed, with no build warnings. All six pages are prerendered; the two case studies use static parameters.
- Playwright on installed Microsoft Edge: **9 tests passed** against the development app.
- Playwright on the built production app: **9 tests passed** in 53.1 seconds.
- Every route was checked at **320, 375, 390, 425, 768, 1024, 1440 and 1920px**. No horizontal scrolling, heading/button text overflow or browser page errors were found in these checks.
- Automated axe checks at 1440px and 390px found **no WCAG A/AA violations** for the covered rules. This is not a claim of complete manual accessibility certification.
- Checked professional/personal filters, result announcements, pressed states, keyboard menu opening, Escape/focus return, navigation closing, skip link, internal route links, case-study next links, contact URLs, reduced-motion behavior and unknown-route 404s.
- Open Graph image, robots and sitemap endpoints returned HTTP 200; the social image returned PNG content.
- Production dependency audit: **0 vulnerabilities**.

The local Playwright browser download was denied with HTTP 403, so the installed Edge browser was used. GitHub CI is configured to install Chromium on its runner; its hosted result is separate from the confirmed local results above.

## Visual review

Full-page captures for all six routes are saved in `artifacts/screenshots/desktop/` and `artifacts/screenshots/mobile/`. They were visually reviewed against the corresponding supplied references.

Preserved the palette, max-width, section sequence, desktop column proportions, mobile stacking, restrained radii, project cover rotation and large editorial typography. Corrected heading weights reset by Tailwind, insufficient gray-text contrast, overly long mobile hero lines and the healthcare title wrapping on the mobile Work page.

Inter is locally served through `next/font/local`. The reference renderer relied on its system fallback font; the production font has different glyph widths. Mobile display sizes were adjusted to preserve the intended Home and Contact line breaks. Supporting text differs where necessary to state the employer and role accurately. Grays were darkened where automated contrast checks found issues.

| Page             | Desktop reference / rendered height | Mobile reference / rendered height |
| ---------------- | ----------------------------------: | ---------------------------------: |
| Home             |                       4073 / 4093px |                      4879 / 5052px |
| Work             |                       2980 / 3014px |                      3594 / 3666px |
| Healthcare case  |                       3477 / 3466px |                      3975 / 4087px |
| Parin Sanat case |                       3350 / 3442px |                      3801 / 3928px |
| About            |                       3131 / 3175px |                      4196 / 4315px |
| Contact          |                       1695 / 1720px |                      1549 / 1565px |

These heights document remaining font/content differences, not pixel-identical matching. All desktop captures are 1440px wide; all mobile captures are 390px wide.

## Content and publication

The public content correctly attributes healthcare work to Dotr and describes projects associated with Shahid Beheshti University of Medical Sciences. It explicitly avoids database-design ownership. Parin Sanat is a four-month complete frontend redesign of the storefront and admin panel. No statistics, patient information, clients, synthetic portrait or unsupported live project links were added.

The supplied Behbod Shop candidate URL could not be confirmed: web retrieval failed and the direct HTTP check timed out after 25 seconds. This does **not** prove that the site is offline. Its live link is therefore not presented as verified.

See `CONTENT_CHECKLIST.md` for dates, screenshot permissions, real portrait, verified links and deployment domain. Before public deployment, set `NEXT_PUBLIC_SITE_URL` and rebuild; canonical URLs and sitemap entries intentionally wait for that confirmed domain.

Core Web Vitals, Lighthouse scores, real-device Safari behavior and hosted CI outcomes were not measured or claimed.

## Development-tool dependency limitation

The full `npm audit` reports five high-severity package entries from one development-only dependency chain: `eslint-config-next` → `@next/eslint-plugin-next` → `fast-glob` → `micromatch` → `braces`. The registry's latest `braces` is 3.0.3 and is covered by the reported advisory; an available patched release was not found. The suggested force-fix would downgrade the Next lint configuration across major versions, so it was not applied. This chain is not included in the production runtime dependency audit, which passes with zero vulnerabilities. Recheck upstream patches before updating the tooling lockfile.

ESLint is pinned to the supported 9.x range because the current React, import and JSX accessibility plugins do not yet declare compatibility with ESLint 10. The npm registry marks ESLint 9 as deprecated; migrating to 10 should wait for compatible plugins. The final dependency tree and `npm ci --dry-run --ignore-scripts` were checked to avoid committing an incompatible install.

## Changed files

- `app/`: Home, Work, generated case studies, About, Contact, 404, root layout, design tokens/styles, favicon, Open Graph image, robots and sitemap.
- `components/`: shared navigation, header/footer, links, tags, section headings, experience, project cards/previews and filters.
- `data/`: typed projects, factual employment and profile content.
- `lib/metadata.ts`: page metadata and confirmed-domain handling.
- Root configuration: package manifest/lockfile, strict TypeScript, Next.js, Tailwind/PostCSS, ESLint, environment example and generated Next agent guidance.
- `tests/`, `playwright.config.ts` and `.github/workflows/ci.yml`: browser QA and repeatable CI checks.
- `README.md`, `CONTENT_CHECKLIST.md`, `QA_REPORT.md`: setup, replacement instructions, publication inputs and validation evidence.
- Original design inputs were committed separately and preserved.
