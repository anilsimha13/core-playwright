import { test, Locator, expect } from "@playwright/test";
test("Screenshots Demo", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const timeStamp = Date.now();
  await page.screenshot({ path: `screenshots/homePage${timeStamp}.png` });
  await page.screenshot({
    path: `screenshots/homePage${timeStamp}.png`,
    fullPage: true,
  });
  const logo = page.getByRole("img", { name: "Tricentis Demo Web Shop" });
  await logo.screenshot({ path: `screenshots/logo${timeStamp}.png` });
});
