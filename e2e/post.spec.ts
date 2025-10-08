import { test, expect } from "@playwright/test";

test.describe("Individual Post Page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/blog");
    await page.waitForLoadState("networkidle");
    const postLink = page.locator("a[href^='/posts/']").first();
    await postLink.click();
    await page.waitForURL(/\/posts\/.+/);
  });

  test("should display post title", async ({ page }) => {
    const title = page.locator("h1, h2").first();
    await expect(title).toBeVisible();

    const titleText = await title.textContent();
    expect(titleText).toBeTruthy();
    expect(titleText?.length).toBeGreaterThan(0);
  });

  test("should display post content", async ({ page }) => {
    const content = page.locator("article, [data-testid='post-body']");
    await expect(content.first()).toBeVisible();

    const text = await page.textContent("body");
    expect(text?.length).toBeGreaterThan(100);
  });

  test("should display post date", async ({ page }) => {
    const dateElement = page.locator("time");
    await expect(dateElement.first()).toBeVisible();
  });

  test("should have navigation back to blog", async ({ page }) => {
    const blogLink = page.getByRole("link", { name: /blog/i });
    const homeLink = page.getByRole("link", { name: /qual\.is/i });

    const blogCount = await blogLink.count();
    const homeCount = await homeLink.count();

    expect(blogCount + homeCount).toBeGreaterThan(0);
  });

  test("should have proper Open Graph meta tags", async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute("content", /.+/);

    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute("content", /.+/);

    const ogUrl = page.locator('meta[property="og:url"]');
    await expect(ogUrl).toHaveAttribute("content", /.+/);
  });

  test("should have proper Twitter Card meta tags", async ({ page }) => {
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute("content", /.+/);
  });
});
