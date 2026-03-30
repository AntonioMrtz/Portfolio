import { test, expect } from "@playwright/test";
import {
  TESTS_CV_NAME,
  TESTS_GITHUB_URL,
  TESTS_LINKEDIN_URL,
} from "./data/test-data";

test.describe("Home page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  test("should render the home page", async ({ page }) => {
    expect(page.url()).toContain("Portfolio");
  });

  test("should display the correct title", async ({ page }) => {
    const title = await page.textContent("h1");
    const trimmedTitle = title?.trim();
    expect(trimmedTitle).toBe("Antonio Martínez Fernández");
  });

  test.describe("Contact cards", () => {
    test("should download CV when CV button is clicked", async ({ page }) => {
      const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("a", { hasText: "CV" }).click(),
      ]);

      expect(download.suggestedFilename()).toBe(TESTS_CV_NAME);
    });

    test("should have a link to the GitHub profile", async ({ page }) => {
      const githubLink = page.getByTestId("home-card-button-github");
      await expect(githubLink).toHaveAttribute("href", TESTS_GITHUB_URL);
      await expect(githubLink).toBeVisible();
    });

    test("should have a link to the LinkedIn profile", async ({ page }) => {
      const linkedinLink = page.getByTestId("home-card-button-linkedin");
      await expect(linkedinLink).toHaveAttribute("href", TESTS_LINKEDIN_URL);
      await expect(linkedinLink).toBeVisible();
    });
  });
});
