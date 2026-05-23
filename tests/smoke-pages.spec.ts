import { expect, test } from "@playwright/test";
import path from "node:path";

const pages = [
  { name: "home", path: "/" },
  { name: "products", path: "/products" },
  { name: "contact", path: "/contact" },
  { name: "winter-melon-mooncake", path: "/products/winter-melon-mooncake" },
];

test.describe("core pages smoke check", () => {
  for (const item of pages) {
    test(`${item.name} loads and captures a screenshot`, async ({ page }) => {
      const response = await page.goto(item.path, { waitUntil: "domcontentloaded" });

      expect(response, `${item.path} should return a response`).not.toBeNull();
      expect(response?.status(), `${item.path} should not be 404`).not.toBe(404);
      expect(response?.ok(), `${item.path} should load successfully`).toBeTruthy();

      await page.waitForLoadState("networkidle");
      const bodyText = await page.locator("body").innerText();
      expect(bodyText.trim().length, `${item.path} should render body content`).toBeGreaterThan(0);

      await page.screenshot({
        fullPage: true,
        path: path.join("test-results", "screenshots", `${item.name}.png`),
      });
    });
  }
});
