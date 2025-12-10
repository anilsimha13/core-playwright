import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test("Login Into the System", async ({ page }) => {
  await page.goto("https://www.demoblaze.com/");

  const loginPage = new LoginPage(page);
  await loginPage.clickLoginLink();
  await loginPage.enterUserNamePassword("pavanol", "test@123");
  await loginPage.clickLoginBtn();
});
