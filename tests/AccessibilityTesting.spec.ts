import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test.skip("Accessibility testing", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  //Scan
  const accessibilityScanRes = await new AxeBuilder({ page }).analyze();
  console.log(accessibilityScanRes.violations.length);
  expect(accessibilityScanRes.violations.length).toEqual(7);
});
test("Accessibility testing1", async ({ page }, testInfo) => {
  await page.goto("https://demowebshop.tricentis.com/");
  //Scan
  const accessibilityScanRes = await new AxeBuilder({ page })
    .withTags(["wcag2a"])
    .analyze();
  await testInfo.attach("Accessibility Results", {
    body: JSON.stringify(accessibilityScanRes, null, 2),
    contentType: "application/json",
  });
  console.log(accessibilityScanRes.violations.length);
  expect(accessibilityScanRes.violations.length).toEqual(4);
});
