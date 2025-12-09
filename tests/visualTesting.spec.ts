import { test, expect } from "@playwright/test";

test.skip("test1", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  expect(await page.screenshot()).toMatchSnapshot("homepage.png");
});

test.skip("test2", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  await expect(page).toHaveScreenshot();
});

test.skip("test3", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const logo = page.locator('img[alt="Tricentis Demo Web Shop"]');
  expect(await logo.screenshot()).toMatchSnapshot("screenshots/logo.png");
});
