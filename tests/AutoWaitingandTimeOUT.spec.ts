import { test, expect, Locator } from "@playwright/test";

test("Autowaiting and forcing", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  await expect(page).toHaveURL("https://demowebshop.tricentis.com/");
  await expect(page.locator("text=welcome to our store")).toBeVisible();

  await page.locator("#small-searchterms").fill("Laptop", { force: true });
  await page.locator(".button-1.search-box-button").click({ force: true });
});
