import { test, expect } from "@playwright/test";
import fs from "fs";
const { parse: parseSync } = require("csv-parse/sync");

//Reading data from json
const CSVdataPath = "testData/data.csv";
const contentInCSV = fs.readFileSync(CSVdataPath, "utf8");
const records = parseSync(contentInCSV, {
  columns: true,
  skipEmptyLines: true,
});

for (let data of records) {
  test(`Login test ${data.email}`, async ({ page }) => {
    await page.goto("https://demowebshop.tricentis.com/login");
    await page.locator("#Email").fill(data.email);
    await page.locator("#Password").fill(data.password);
    await page.locator('input[value="Log in"]').click();

    if (data.validity.toLowerCase() === "valid") {
      const logoutLink = page.locator('//a[@href="/logout"]');
      await expect(logoutLink).toBeVisible({ timeout: 5000 });
    } else {
      const errorMsg = page.locator(".validation-summary-errors");
      await expect(errorMsg).toBeVisible({ timeout: 5000 });
      await expect(page).toHaveURL("https://demowebshop.tricentis.com/login");
    }
  });
}
