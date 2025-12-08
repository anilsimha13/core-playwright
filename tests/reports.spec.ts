import { test, expect } from "@playwright/test";

test.beforeEach("Launch the application", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
});

test("Logo should be visible", async ({ page }) => {
  await expect(
    page.locator('img[alt="Tricentis Demo Web Shop"]')
  ).toBeVisible();
});
test("Page Title validation", async ({ page }) => {
  expect(await page.title()).toContain("Demo Web Shop1");
});

test("search text", async ({ page }) => {
  await page.locator("#small-searchterms").fill("laptop");
  await page.locator("input[value='Search']").click();
  await expect
    .soft(page.locator("h2 a").nth(0))
    .toContainText("Laptop", { ignoreCase: true });
});
