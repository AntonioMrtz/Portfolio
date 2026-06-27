import { test, expect } from "@playwright/test";

test.describe("Certifications page", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("");
  });

  test("should change preview certification when a different certification is clicked", async ({
    page,
  }) => {
    await page.getByRole("link", { name: "Certifications" }).click();

    await page
      .getByRole("button", { name: "MongoDB Python Developer Path" })
      .click();
    const mongoHeading = page.getByRole("heading", {
      name: "MongoDB Python Developer Path",
    });
    await expect(mongoHeading).toBeVisible();

    await page.getByRole("button", { name: "Python asynchronous" }).click();
    await expect(mongoHeading).not.toBeVisible();
    await expect(
      page.getByRole("heading", { name: "Python asynchronous" }),
    ).toBeVisible();
  });
});
