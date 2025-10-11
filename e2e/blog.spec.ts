import { test, expect } from "@playwright/test";

test.describe("Blog Page", () => {
  test("should load blog page with posts", async ({ page }) => {
    await page.goto("/blog");

    await expect(page).toHaveURL("/blog");

    await expect(
      page.getByRole("heading", { name: "Engineering Musings" })
    ).toBeVisible();

    const hasHeroPost = (await page.locator("section").count()) > 0;
    expect(hasHeroPost).toBeTruthy();
  });

  test("should display topic filter", async ({ page }) => {
    await page.goto("/blog");

    await expect(
      page.getByRole("heading", { name: "Topic Filters" })
    ).toBeVisible();

    const filterButtons = page
      .locator("button")
      .filter({ hasText: /engineer|lead|manage|think/i });
    expect(await filterButtons.count()).toBeGreaterThan(0);
  });

  test("should filter posts by topic when clicking filter button", async ({
    page,
  }) => {
    await page.goto("/blog");

    const activeFilter = page
      .locator("button")
      .filter({ hasText: "🔘" })
      .first();

    await activeFilter.waitFor({ state: "visible" });

    if (await activeFilter.isVisible()) {
      const buttonText = await activeFilter.textContent();
      const topicName = buttonText?.replace("🔘", "").trim();

      await activeFilter.click();
      await page.waitForTimeout(300);

      const button = page
        .locator("button")
        .filter({ hasText: topicName || "" })
        .first();
      await expect(button).toContainText("⚪️");

      await button.click();
      await page.waitForTimeout(300);

      await expect(button).toContainText("🔘");
    }
  });

  test("should navigate to individual post", async ({ page }) => {
    await page.goto("/blog");

    const postLink = page.locator("a[href^='/posts/']").first();

    await expect(postLink).toBeVisible();
    await postLink.click();

    await expect(page).toHaveURL(/\/posts\/.+/);
  });

  test("should have proper SEO meta tags", async ({ page }) => {
    await page.goto("/blog");

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute("content", /.+/);
  });
});
