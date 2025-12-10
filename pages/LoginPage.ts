import { Page, Locator } from "@playwright/test";

export class LoginPage {
  private readonly page: Page;
  private readonly loginLink: Locator;
  private readonly userNameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.loginLink = this.page.locator("#login2");
    this.userNameInput = this.page.locator("#loginusername");
    this.passwordInput = this.page.locator("#loginpassword");
    this.loginBtn = this.page.getByRole("button", { name: "Log in" });
  }

  async clickLoginLink() {
    await this.loginLink.click();
  }
  async enterUserNamePassword(userName: string, passWord: string) {
    await this.userNameInput.fill(userName);
    await this.passwordInput.fill(passWord);
  }
  async clickLoginBtn() {
    await this.loginBtn.click();
  }
}
