import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { mkdirSync } from "node:fs";

const routes = [
  ["01-home", "/"],
  ["02-work", "/work"],
  ["03-healthcare-case", "/work/healthcare-dashboards"],
  ["04-parin-case", "/work/parin-sanat"],
  ["05-about", "/about"],
  ["06-contact", "/contact"],
] as const;

for (const [name, route] of routes) {
  test(`${name}: responsive rendering, metadata, accessibility and screenshots`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (error) => errors.push(error.message));
    for (const width of [1440, 390, 320, 375, 425, 768, 1024, 1920]) {
      await page.setViewportSize({ width, height: width > 700 ? 900 : 844 });
      const response = await page.goto(route);
      expect(response?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main")).toBeVisible();
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth),
      ).toBeLessThanOrEqual(width);
      expect(
        (await page.locator('meta[name="description"]').getAttribute("content"))
          ?.length,
      ).toBeGreaterThan(40);
      await expect(page).toHaveTitle(/Ali Jazbi/);
      const clipped = await page
        .locator("h1, h2, h3, .button, .contact-row .name")
        .evaluateAll((elements) =>
          elements
            .filter((element) => {
              const rect = element.getBoundingClientRect();
              return (
                rect.width > 0 &&
                (element.scrollWidth > element.clientWidth + 2 ||
                  rect.left < -1 ||
                  rect.right > innerWidth + 1)
              );
            })
            .map((element) => element.textContent),
        );
      expect(clipped, `Text overflow at ${width}px`).toEqual([]);
      if (width === 1440 || width === 390) {
        const group = width === 1440 ? "desktop" : "mobile";
        mkdirSync(`artifacts/screenshots/${group}`, { recursive: true });
        await page.screenshot({
          path: `artifacts/screenshots/${group}/${name}.png`,
          fullPage: true,
          animations: "disabled",
        });
        const a11y = await new AxeBuilder({ page })
          .exclude("nextjs-portal")
          .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
          .analyze();
        expect(
          a11y.violations.map((v) => ({
            id: v.id,
            nodes: v.nodes.map((node) => node.target),
          })),
        ).toEqual([]);
      }
    }
    expect(errors).toEqual([]);
  });
}

test("filters show the correct projects and announce their state", async ({
  page,
}) => {
  await page.goto("/work");
  await expect(page.locator("article.work-entry:visible")).toHaveCount(4);
  await page.getByRole("button", { name: "Professional", exact: true }).click();
  await expect(page.locator("article.work-entry:visible")).toHaveCount(3);
  await expect(page.locator("#behbod-shop")).toBeHidden();
  await expect(
    page.getByRole("button", { name: "Professional", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  await expect(page.getByRole("status")).toHaveText("3 projects shown");
  await page.getByRole("button", { name: "Personal", exact: true }).click();
  await expect(page.locator("article.work-entry:visible")).toHaveCount(1);
  await expect(page.locator("#behbod-shop")).toBeVisible();
  await page.getByRole("button", { name: "All projects", exact: true }).click();
  await expect(page.locator("article.work-entry:visible")).toHaveCount(4);
});

test("mobile menu supports keyboard, Escape, navigation and focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Open menu" });
  await toggle.focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#mobile-nav")).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Close menu" }),
  ).toHaveAttribute("aria-expanded", "true");
  await page.keyboard.press("Tab");
  await expect(
    page
      .locator("#mobile-nav")
      .getByRole("link", { name: "Home", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator("#mobile-nav")).toBeHidden();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .locator("#mobile-nav")
    .getByRole("link", { name: "Work", exact: true })
    .click();
  await expect(page).toHaveURL(/\/work$/);
  await expect(page.locator("#mobile-nav")).toBeHidden();
});

test("links, case studies, skip link, concepts and reduced motion", async ({
  page,
  request,
}) => {
  const internal = new Set<string>();
  for (const [, route] of routes) {
    await page.goto(route);
    const links = await page
      .locator("a")
      .evaluateAll((anchors) =>
        anchors.map((anchor) => anchor.getAttribute("href")),
      );
    expect(links.every((href) => !!href && href !== "#")).toBe(true);
    for (const href of links)
      if (href?.startsWith("/")) internal.add(href.split("#")[0]);
    const visuals = page.locator('[role="img"]');
    for (const visual of await visuals.all())
      await expect(visual).toHaveAttribute("aria-label", /[Ii]llustrative/);
  }
  for (const path of internal)
    expect((await request.get(path)).status()).toBe(200);
  const socialImage = await request.get("/opengraph-image");
  expect(socialImage.status()).toBe(200);
  expect(socialImage.headers()["content-type"]).toContain("image/png");
  expect((await request.get("/robots.txt")).status()).toBe(200);
  expect((await request.get("/sitemap.xml")).status()).toBe(200);
  await page.goto("/contact");
  await expect(page.locator(".contact-row").nth(0)).toHaveAttribute(
    "href",
    "mailto:ali.jazbi@yahoo.com",
  );
  await expect(page.locator(".contact-row").nth(1)).toHaveAttribute(
    "href",
    "https://linkedin.com/in/ali-jazbi",
  );
  await expect(page.locator(".contact-row").nth(2)).toHaveAttribute(
    "href",
    "https://github.com/ali-jazbi",
  );
  await page.goto("/");
  await page.keyboard.press("Tab");
  await expect(
    page.getByRole("link", { name: "Skip to content" }),
  ).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(page.locator("main")).toBeFocused();
  await page.getByRole("link", { name: "Explore selected work" }).click();
  await expect(page).toHaveURL(/\/work$/);
  await page
    .locator("#healthcare-dashboards")
    .getByRole("link", { name: "Read case study" })
    .click();
  await expect(page).toHaveURL(/healthcare-dashboards$/);
  await page.getByRole("link", { name: "View case study" }).click();
  await expect(page).toHaveURL(/parin-sanat$/);
  await page.emulateMedia({ reducedMotion: "reduce" });
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe("auto");
  expect((await request.get("/work/nonexistent")).status()).toBe(404);
});
