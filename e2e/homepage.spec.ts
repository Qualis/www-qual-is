import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("should load homepage with hero section", async ({ page }) => {
    await page.goto("/");

    await expect(page).toHaveTitle(/qual\.is/i);

    const heroHeading = page.getByRole("heading", {
      name: /connecting the dots.*decoding complexity/i,
    });
    await expect(heroHeading).toBeVisible();
  });

  test("should display navigation links", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");

    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(300);
    }

    const aboutLinks = page.getByRole("link", { name: /about/i });
    const blogLinks = page.getByRole("link", { name: /blog/i });

    const aboutCount = await aboutLinks.count();
    const blogCount = await blogLinks.count();

    expect(aboutCount).toBeGreaterThan(0);
    expect(blogCount).toBeGreaterThan(0);
  });

  test("should have working navigation to About page", async ({ page }) => {
    await page.goto("/");

    await page.getByRole("link", { name: /about/i }).first().click();

    await expect(page).toHaveURL("/about");

    await page.waitForLoadState("networkidle");
    const heading = page.locator("h1, h2").first();
    await expect(heading).toBeVisible();
  });

  test("should have working navigation to Blog page", async ({ page }) => {
    await page.goto("/");

    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(300);
    }

    await page.getByRole("link", { name: /blog/i }).first().click();

    await expect(page).toHaveURL("/blog");
  });

  test("should display services section", async ({ page }) => {
    await page.goto("/");

    const servicesHeading = page.getByRole("heading", { name: "Services" });
    await expect(servicesHeading).toBeVisible();
  });

  test("should have proper meta tags for SEO", async ({ page }) => {
    await page.goto("/");

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute("content", /.+/);

    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /.+/);
  });
});
