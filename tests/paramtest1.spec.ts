import { expect, test } from "@playwright/test";

const searchItems = ["laptop", "gift card", "smartphone", "monitor"];

//using for-loop

/*
for (let item of searchItems) {
  test(`Search Items and validate the result ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator('//input[@value="Search"]').click();
    await expect(page.locator("h2 a").nth(0)).toContainText(item, {
      ignoreCase: true,
    });
  });
}
*/

//using ForEach function

searchItems.forEach((item) => {
  test(`Search Items and validate the result ${item}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/");
    await page.locator("#small-searchterms").fill(item);
    await page.locator('//input[@value="Search"]').click();
    await expect(page.locator("h2 a").nth(0)).toContainText(item, {
      ignoreCase: true,
    });
  });
});
