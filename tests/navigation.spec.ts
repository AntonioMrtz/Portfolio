import { expect, test } from "@playwright/test";

test.describe("Navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  const sections = [
    { label: "Projects", hash: "#projects" },
    { label: "Experience", hash: "#experience" },
    { label: "Certifications", hash: "#certifications" },
    { label: "Education", hash: "#education" },
    { label: "About Me", hash: "#about-me" },
    { label: "Contact", hash: "#contact" },
  ];

  for (const section of sections) {
    test(`should navigate to the ${section.label} section when the ${section.label} button is clicked`, async ({
      page,
    }) => {
      await page.locator("a", { hasText: section.label }).click();
      expect(page.url()).toContain(section.hash);
    });
  }
});
