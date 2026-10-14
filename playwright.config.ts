import { defineConfig } from "@playwright/test";

const production = process.env.PLAYWRIGHT_PRODUCTION === "1";
const baseURL =
  process.env.PLAYWRIGHT_BASE_URL ??
  `http://localhost:${production ? 3011 : 3010}`;

export default defineConfig({
  testDir: "./tests",
  timeout: 60_000,
  fullyParallel: false,
  workers: 1,
  reporter: [["list"], ["html", { open: "never" }]],
  use: {
    baseURL,
    trace: "retain-on-failure",
    ...(process.env.PLAYWRIGHT_CHANNEL
      ? { channel: process.env.PLAYWRIGHT_CHANNEL }
      : {}),
  },
  webServer: {
    command: production
      ? "npm run start -- --port 3011"
      : "npm run dev -- --port 3010",
    url: baseURL,
    reuseExistingServer: !production && !process.env.CI,
    timeout: 120_000,
  },
});
