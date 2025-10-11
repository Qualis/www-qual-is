import { test, expect } from "@playwright/test";

test.describe("About Page", () => {
  test("should load about page with main heading", async ({ page }) => {
    await page.goto("/about");

    await expect(page).toHaveTitle(/qual\.is/i);

    const mainHeading = page.getByRole("heading", {
      name: /sean van osselaer.*fractional cto/i,
    });
    await expect(mainHeading).toBeVisible();
  });

  test("should display profile image", async ({ page }) => {
    await page.goto("/about");

    const profileImage = page.getByAltText(/sean van osselaer/i);
    await expect(profileImage).toBeVisible();
  });

  test("should display subtitle", async ({ page }) => {
    await page.goto("/about");

    const subtitle = page.getByText(/technical strategy & team scaling/i);
    await expect(subtitle).toBeVisible();
  });

  test("should display introduction paragraphs", async ({ page }) => {
    await page.goto("/about");

    const introParagraph = page.getByText(
      /growing companies face challenges when scaling/i
    );
    await expect(introParagraph).toBeVisible();
  });

  test("should display technical expertise section", async ({ page }) => {
    await page.goto("/about");

    const expertiseHeading = page.getByRole("heading", {
      name: "Technical Expertise",
    });
    await expect(expertiseHeading).toBeVisible();

    await expect(page.getByText(/languages & frameworks/i)).toBeVisible();
    await expect(page.getByText(/cloud & infrastructure/i)).toBeVisible();
    await expect(page.getByText(/architecture & systems/i)).toBeVisible();
    await expect(page.getByText(/process & leadership/i)).toBeVisible();
  });

  test("should display approach and philosophy section", async ({ page }) => {
    await page.goto("/about");

    const approachHeading = page.getByRole("heading", {
      name: "Approach & Philosophy",
    });
    await expect(approachHeading).toBeVisible();

    await expect(
      page.getByText(/connecting technical & human systems/i)
    ).toBeVisible();
  });

  test("should display all FAQ items", async ({ page }) => {
    await page.goto("/about");

    const faqHeading = page.getByRole("heading", {
      name: "Frequently Asked Questions",
    });
    await expect(faqHeading).toBeVisible();

    await expect(page.getByText(/what is a fractional cto/i)).toBeVisible();
    await expect(
      page.getByText(/how does fractional cto work vs full-time hiring/i)
    ).toBeVisible();
    await expect(
      page.getByText(/what size companies benefit most/i)
    ).toBeVisible();
    await expect(page.getByText(/how do you measure success/i)).toBeVisible();
    await expect(
      page.getByText(/what's the typical engagement timeline/i)
    ).toBeVisible();
  });

  test("should display CTA section", async ({ page }) => {
    await page.goto("/about");

    const ctaHeading = page.getByRole("heading", {
      name: /ready to transform your engineering organization/i,
    });
    await expect(ctaHeading).toBeVisible();
  });

  test("should have working Reach out button", async ({ page }) => {
    await page.goto("/about");

    const reachOutButton = page.getByRole("button", { name: /reach out/i });
    await expect(reachOutButton).toBeVisible();

    await reachOutButton.click();

    const modal = page.locator('[role="dialog"]');
    await expect(modal).toBeVisible({ timeout: 5000 });
  });

  test("should have proper navigation back to home", async ({ page }) => {
    await page.goto("/about");

    await page
      .getByRole("link", { name: /qual\.is/i })
      .first()
      .click();

    await expect(page).toHaveURL("/");
  });

  test("should display all technical expertise categories", async ({
    page,
  }) => {
    await page.goto("/about");

    await expect(page.getByText(/python, typescript, clojure/i)).toBeVisible();
    await expect(page.getByText(/aws, gcp, azure/i)).toBeVisible();
    await expect(page.getByText(/microservices, apis/i)).toBeVisible();
    await expect(page.getByText(/agile, lean, devops/i)).toBeVisible();
  });

  test("should display FAQ answers when scrolled into view", async ({
    page,
  }) => {
    await page.goto("/about");

    const faqAnswer = page.getByText(
      /a fractional cto is a part-time chief technology officer/i
    );
    await faqAnswer.scrollIntoViewIfNeeded();
    await expect(faqAnswer).toBeVisible();
  });

  test("should have proper section structure", async ({ page }) => {
    await page.goto("/about");

    const sections = page.locator("section");
    await sections.first().waitFor({ state: "visible" });
    const sectionCount = await sections.count();

    expect(sectionCount).toBeGreaterThanOrEqual(5);
  });

  test("should have accessible navigation", async ({ page }) => {
    await page.goto("/about");

    const menuButton = page.getByRole("button", { name: /toggle menu/i });
    if (await menuButton.isVisible()) {
      await expect(menuButton).toHaveAttribute("aria-label", "Toggle menu");
    }
  });

  test("should have proper meta tags for SEO", async ({ page }) => {
    await page.goto("/about");

    const metaDescription = page.locator('meta[name="description"]');
    await expect(metaDescription).toHaveAttribute("content", /.+/);
  });

  test("should render properly on mobile viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/about");

    const mainHeading = page.getByRole("heading", {
      name: /sean van osselaer.*fractional cto/i,
    });
    await expect(mainHeading).toBeVisible();

    const profileImage = page.getByAltText(/sean van osselaer/i);
    await expect(profileImage).toBeVisible();
  });

  test("should have working theme switcher", async ({ page }) => {
    await page.goto("/about");

    const themeSwitcher = page.getByRole("button", {
      name: /toggle theme/i,
    });
    await expect(themeSwitcher).toBeVisible();
  });

  test("should display approach philosophy content", async ({ page }) => {
    await page.goto("/about");

    await expect(
      page.getByText(/my approach centers on connecting/i)
    ).toBeVisible();
    await expect(
      page.getByText(/every engagement follows a data-driven methodology/i)
    ).toBeVisible();
  });

  test("should have proper heading hierarchy", async ({ page }) => {
    await page.goto("/about");

    const h1 = page.locator("h1");
    const h1Count = await h1.count();
    expect(h1Count).toBeGreaterThan(0);

    const h2Elements = page.locator("h2");
    const h2Count = await h2Elements.count();
    expect(h2Count).toBeGreaterThan(0);
  });

  test("should have all FAQ sections visible when scrolled", async ({
    page,
  }) => {
    await page.goto("/about");

    const lastFaq = page.getByText(
      /engagements typically start with an assessment/i
    );
    await lastFaq.scrollIntoViewIfNeeded();
    await expect(lastFaq).toBeVisible();
  });
});
