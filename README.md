# Playwright Framework - Typescript

[1. What is Playwright?](#1-what-is-playwright)

[2. Playwright Kick start](#2-playwright-kick-start)

[3. Understanding Playwright Locators(Built-in)](#3-understanding-playwright-locatorsbuilt-in)

[4. Locating Elements using CSS Locators](#4-locating-elements-using-css-locators)

[5. Locating Elements using XPath, Operators and functions in XPath](#5-locating-elements-using-xpath-operators-and-functions-in-xpath)

[6. Locating complex elements using Xpath Axes](#6-locating-complex-elements-using-xpath-axes)

[7. Playwright Actions-Inputbox, Checkbox & Radio buttons](#7-playwright-actions-inputbox-checkbox--radio-buttons)

[8. Handle Dropdowns -Part1](#8-handle-dropdowns--part1)

[9. Handle Dropdowns -Part2](#9-handle-dropdowns--part2)

[10. Handle Static & Dynamic Tables](#10-handle-static--dynamic-tables)

[11. Handle Date Pickers](#11-handle-date-pickers)

[12. Handling Dialogs and Frames/iFrames](#12-handling-dialogs-and-framesiframes)

[13. Playwright Browser Contexts, Handle Tabs and Popup Windows](#13-playwright-browser-contexts-handle-tabs-and-popup-windows)

[14. Handling Mouse Actions and Scrolling in playwright](#14-handling-mouse-actions-and-scrolling-in-playwright)

[15. Handling Keyboard Actions, File Upload and Download in Playwright](#15-handling-keyboard-actions-file-upload-and-download-in-playwright)

[16. Handle Shadow DOM Elements, SSL, Proxy and Cookies](#16-handle-shadow-dom-elements-ssl-proxy-and-cookies)

[17. Auto Waiting, Assertions and Test Generator(Codegen)](#17-auto-waiting-assertions-and-test-generatorcodegen)

[18. Capture Screenshots, Record Videos for test, Trace Viewer and Handle Flaky tests](#18-capture-screenshots-record-videos-for-test-trace-viewer-and-handle-flaky-tests)

[19. Grouping Tests, Hooks, Annotations and Tagging tests](#19-grouping-tests-hooks-annotations-and-tagging-tests)

[20. Parallelism/Parallel Testing](#20-parallelismparallel-testing)

[21. Parameterization(Data-Driven Testing using JSON, CSV and Excel)](#21-parameterizationdata-driven-testing-using-json-csv-and-excel)

## Interview POV

## 1. What is Playwright?

- Playwright is an open-source tool by Microsoft for automating web browser testing. <br>
- Playwright is a framework for automating web browsers, enabling end-to-end testing
  <br>
- Beyound browser testing, Playwright offers a dedicated API for testing and interacting with Web APIs
- Released in 2020
- Playwright is an Open-source Node.js library

#### Major Features

- Cross browser (_Chromium, Edge, Firefox, Webkit_)
- Cross Platform( _Windows, Mac, Linux_ )
- Cross Language (_Javascript, Typescript, Java, Python or C#_)
- Test Mobile Web
- API Testing
- Automatic Waiting
- Complex element handling
- Parallel execution
- Reports
- Inspector (_Helps debug tests by showing click points and verifying locators in real time_)
- Code Gen (_record and playback_)
- Tracing

#### Javascript vs Typescript

| Feature        | JavaScript              | TypeScript                         |
| -------------- | ----------------------- | ---------------------------------- |
| Type System    | Dynamic                 | Static (with type annotations)     |
| Compilation    | Interpreted             | Compiled to JavaScript             |
| Error Checking | Runtime                 | Compile-time                       |
| IDE Support    | Good                    | Excellent (with type info)         |
| Learning Curve | Easier                  | Slightly harder (types, config)    |
| Popularity     | Very High               | Growing fast                       |
| Use Case       | Web, Node.js, scripting | Large apps, maintainable codebases |

## 2. Playwright Kick start

- Installation
  - `npm init playwright@latest`
- Running tests
  - `npx playwright test`
- Generating HTML Report
  - `npx playwright show-report`
- Running tests in headed modes
  - `npx playwright test --headed`
- Running tests in specific browser
  - `npx playwright test --project=chromium`
- Running specific test file
  - `npx playwright test tests/example.spec.ts`
- Running specific test inside a file
  - `npx playwright test tests/example.spec.ts -g "test name"`
- Running tests in debug mode
  - `npx playwright test --debug`
- Generating code using codegen
  - `npx playwright codegen <website url>`
- `npx playwright test --ui` to open the test runner UI
- Fixtures
  - page
  - browser
  - context
  - Locator

## 3. Understanding Playwright Locators(Built-in)

- `page.getByRole()` to locate by explicit and implicit accessibility attributes.
- HTML Element vs ARIA Role table [here](https://www.w3.org/TR/html-aria/#docconformance).

- `page.getByText()` to locate by text content/substring.
- `page.getByLabel()` to locate a form control by associated label's text.
- `page.getByPlaceholder()` to locate an input by placeholder.
- `page.getByAltText()` to locate an element, usually image, by its text alternative.
- `page.getByTitle()` to locate an element by its title attribute.
- `page.getByTestId()` to locate an element based on its data-testid attribute (other attributes can be configured).
- In playwright.config.ts we can configure testIdAttribute property to use custom attribute instead of data-testid.
  example: `testIdAttribute: 'data-test'`

## 4. Locating Elements using CSS Locators

- CSS has two types of stratagies to identify the locators
  - Relative
  - Absolute
- Different ways to create a CSS locatorsm(_Relative_)
  - tag with id (_tag#id_)
  - tag with class (_tag.class_)
  - tag with any other attribute (_tag[attribute=value]_)
  - tag with class and attribute (_tag.class[attribute=value]_)
- `page.locator("CSS/Xpath)`
- `body > div > *:nth-child(2)`
- `body > div > *:first-child`
- `body > div > *:last-child`
- `p[class^="ma"]` (_^ starts with_)
- `p[class$="ma"]`(_$ starts with_)
- `p[class*="ma"]` (_\* contains_)

## 5. Locating Elements using XPath, Operators and functions in XPath

- Absolute xpath
  - Starts from root
- Relative xpath

```js
await page.fill('//input[@value="Search store"][@name="q"]', "iPhone");
await page.click('//input[@type="submit" and @value="Search"]');
await page.locator('//input[@type="submit" or @value="Search"]').click();
```

- **Functions**
  - contains()
    - `//a[contains(@href,'gift')]`
  - starts-with()
    - `//a[starts-with(@href,'/build')]`
  - text()
    - `//a[text()='Register']`
    - `//a[normalize-space()='Register']`
  - last()
    - `//div[@class="column follow-us"]/ul/li[last()]`
  - position()
    - `//div[@class="column follow-us"]/ul/li[position()=2]`
  - Dynamic Xpath
    - use `OR` , `AND` , or above strategies
    - e.g:`//button[@name="start" or @name="stop"]`

## 6. Locating complex elements using Xpath Axes

- XPath Axes are used to navigate through elements in an XML document relative to the current node.
- Commonly used XPath Axes:
  - `child`: Selects all child elements of the current node.
    - `//div[@class='product-grid']/child::div`
  - `parent`: Selects the parent element of the current node.
    - `//a[@href='/register']/parent::li`
  - `ancestor`: Selects all ancestor elements (parents, grandparents, etc.) of the current node.
    - `//a[@href='/register']/ancestor::ul`
  - `descendant`: Selects all descendant elements (children, grandchildren, etc.) of the current node.
    - `//div[@class='product-grid']/descendant::a`
  - `following-sibling`: Selects all sibling elements that come after the current node.
    - `//h2[text()='Featured Products']/following-sibling::div`
  - `preceding-sibling`: Selects all sibling elements that come before the current node.
    - `//h2[text()='Featured Products']/preceding-sibling::div`
  - `following`: Selects all elements in the document that come after the current node.
    - `//a[@href='/register']/following::div`
  - `preceding`: Selects all elements in the document that come before the current node.
    - `//a[@href='/register']/preceding::div`

## 7. Playwright Actions-Inputbox, Checkbox & Radio buttons

**Input Field**

- To fill any Inputbox we need to use following method
  - `await userNameField.fill("Anil Simha")`
- To get the Entered value in the input field
  - `await userNameField.inputValue()`
- To get the Attribute value of the Locator
  - `const attributeValue: string | null = await userNameField.getAttribute("maxlength");`
- To assert the Attribute value
  - `await expect(userNameField).toHaveAttribute("maxlength", "15");`

**Radio Buttons**

```js
await expect(genderMale).toBeVisible();
(await genderMale.isChecked())
  ? console.log("Male is checked")
  : console.log("Male is unchecked");
```

**Checkbox**

- Select by label
  - `const sundayLable: Locator = page.getByLabel("Sunday");`
- Check all by `elementHandles()` method

```js
//Method1
const checkboxElements = await page
  .locator('//input[@class="form-check-input" and @type="checkbox"]')
  .elementHandles();

for (const element of checkboxElements) {
  await element.check();
}
```

```js
//Method2
const days: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const checkBoxs: Locator[] = days.map((day) => page.getByLabel(day));
await expect(checkBoxs).toHaveLength(7);

for (const checkbox of checkBoxs) {
  await checkbox.check();
}
```

## 8. Handle Dropdowns -Part1

- Methods to select the dropdown elements (Single Select)

```js
const countryDropDown: Locator = page.locator("#country");
await countryDropDown.selectOption("India"); //Visible Text
await countryDropDown.selectOption({ value: "usa" }); //Attribute
await countryDropDown.selectOption({ label: "Brazil" }); //label
await countryDropDown.selectOption({ index: 2 }); //Index
```

- Count the dropdown elements

```js
const countryDropDownElements: Locator = page.locator("#country>option");
const totalCountOfCountries = await countryDropDownElements.count();
console.log(totalCountOfCountries);
await expect(totalCountOfCountries).toBe(10);
```

- Contain the following option

```js
const optionsText: string[] = (
  await countryDropDownElements.allTextContents()
).map((text) => text.trim());
console.log(optionsText);
await expect(optionsText).toContain("Germany");
for (let option of optionsText) {
  console.log(option);
}
```

- Methods to select the dropdown elements (Multi Select)

```js
const colorsElements: Locator = await page.locator("#colors");
await colorsElements.selectOption(["Blue", "Green"]); //Visible
await colorsElements.selectOption(["white"]); //Attribute
await colorsElements.selectOption([{ value: "yellow" }, { value: "red" }]); //Value
await colorsElements.selectOption([{ index: 1 }, { index: 3 }]); //Index
```

## 9. Handle Dropdowns -Part2

- Get all the suggested options
  - `cmd+shift+p` on DOM and run `Emulate a focused page`

```js
//Auto Suggest Dropdowns
await page.goto("https://www.flipkart.com/");
const searchBoxLocator: Locator = page.locator(
  '//input[@title="Search for Products, Brands and More"]'
);
await searchBoxLocator.fill("mobile");
await page.waitForTimeout(10000);
const options: Locator = page.locator("ul>li");
const totalCount = await options.count();
console.log(totalCount);
for (let i = 0; i < totalCount; i++) {
  const suggestedText = await options.nth(i).innerText();
  if (suggestedText == "mobile under 7000") {
    await options.nth(i).click();
    break;
  }
}
```

## 10. Handle Static & Dynamic Tables

- [tests/StaticTables.spec.ts](./tests/StaticTables.spec.ts)
- [tests/DynamicTable.spec.ts](./tests/DynamicTable.spec.ts)

```js
const allRowData = await tableRows.all();
for (let rowdata of allRowData.slice(1)) {
  console.log(await rowdata.locator("td").allInnerTexts());
}
```

## 11. Handle Date Pickers

- Using Fill Method
- [./tests/jQueryDatePicker.spec.ts](./tests/jQueryDatePicker.spec.ts)

```js
await page.fill("#datepicker", "09/04/2025");
```

## 12. Handling Dialogs and Frames/iFrames

_Topics Covered:_

**Dialog**

- By default Playwright dimisses the Alert
  - [./tests/DialogsAlerts.spec.ts](./tests/DialogsAlerts.spec.ts)

```js
//Alert
page.on("dialog", (dialog) => {
  expect(dialog.message()).toContain("I am an alert box!");
  expect(dialog.type()).toBe("alert");
  dialog.accept();
});
```

**iFrames**
[./tests/Frame.spec.ts](./tests/Frame.spec.ts)

## 13. Playwright Browser Contexts, Handle Tabs and Popup Windows

_Topics Covered:_

- Browser Context

  - We can have multiple contexts for multiple users/apps for the same browser
  - A way to operate the multiple independent browser sessions
  - `page` is nothing but Tab, Window, Pop-up

  ```js
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page: Page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  ```

  - Files
  - [./tests/BrowserContext.spec.ts](./tests/BrowserContext.spec.ts)
  - [./tests/AuthenticationPopup.spec.ts](./tests/AuthenticationPopup.spec.ts)
  - [./tests/Popup.spec.ts](./tests/Popup.spec.ts)
  - [./tests/Tabs.spec.ts](./tests/Tabs.spec.ts)

## 14. Handling Mouse Actions and Scrolling in playwright

- [automaticScrolling.spec.ts](./tests/automaticScrolling.spec.ts)
- [infiniteScrolling.spec.ts](./tests/infiniteScrolling.spec.ts)
- [mouseActions.spec.ts](./tests/mouseActions.spec.ts)

## 15. Handling Keyboard Actions, File Upload and Download in Playwright

- page.keyboard
  - insertText
  - type
  - down
  - press
  - up
  - Control for windows
  - Meta for Mac
- File Uploads
  - `setInputFiles`('path of the files for single file upload')
  - setInputFiles(['file1','file2'])
- File Downloads

```js
const [download] = await Promise.all([
  page.waitForEvent("download"),
  page.locator("#txtDownloadLink").click(),
]);
const downLoadPath = "testFiles/downdloadedfile.txt";
await download.saveAs(downLoadPath);
await page.waitForTimeout(5000);
const fileDownloaded = fs.existsSync(downLoadPath);
expect(fileDownloaded).toBeTruthy();
fs.readFile("testFiles/downdloadedfile.txt", "utf8", (err, data) => {
  console.log("Message from file", data);
});
if (fileDownloaded) {
  fs.unlinkSync(downLoadPath);
}
```

- [DownloadFile.spec.ts](./tests/DownloadFile.spec.ts)
- [FileUpload.spec.ts](./tests/FileUpload.spec.ts)
- [KeyboardActions.spec.ts](./tests/KeyboardActions.spec.ts)

## 16. Handle Shadow DOM Elements, SSL, Proxy and Cookies

- Shadow Root
- Shadow Host
- Shadow DOM
- Only way to access shadow DOM elements is through `css selectors` and xpath will not work

- **Browser Context** settings

```js
const browser = await chromium.launch({ headless: false });
const context = await browser.newContext({
  viewport: { width: 800, height: 800 },
  locale: "en-US",
  //proxy: { server: "PROXY URL" },
  ignoreHTTPSErrors: true,
});
const page = await context.newPage();
await page.goto("https://books-pwakit.appspot.com/");
```

**Cookies**

```js
const browser = await chromium.launch();
const context = await browser.newContext();
context.addCookies([
  {
    name: "mycookies",
    value: "12345678",
    url: "http://www.automationpractice.pl/index.php",
  },
  {
    name: "mycookies1",
    value: "123456789",
    url: "http://www.automationpractice.pl/index.php",
  },
]);
const page = await context.newPage();
await page.goto("http://www.automationpractice.pl/index.php");
const allTheCookies = await context.cookies();
const retrivedCookies = allTheCookies.find((c) => c.name === "mycookies1");
console.log(retrivedCookies);
await context.clearCookies();
```

## 17. Auto Waiting, Assertions and Test Generator(Codegen)

- Auto Waiting

  - Playwright automatically waits for the elements to be ready before performing actions.
  - It waits for elements to be visible, enabled, and stable.
  - No need to use explicit waits like `sleep` or `waitForSelector` in most cases.

  ```js
  //force keyword is used to skip the Auto waiting
  await page.locator("#small-searchterms").fill("Laptop", { force: true });
  await page.locator(".button-1.search-box-button").click({ force: true });
  ```

- Timeouts

  - You can set default timeouts for actions and navigation in Playwright.
  - Eg: `test.setTimeout(60000);` sets a 60-second timeout for a specific test.
  - You can also set timeouts for specific actions using options.
  - Example: `await page.click('#submit', { timeout: 10000 });` sets a 10-second timeout for the click action.
  - Global timeouts can be configured in `playwright.config.ts` file.
    `eg: timeout: 30000` sets a default timeout of 30 seconds for all tests.
  - Timout for expect globally
    - `expect.setTimeout(5000);` sets a 5-second timeout for all assertions.
  - Timeout for expect locally
    - `await expect(locator).toBeVisible({ timeout: 10000 });` sets a 10-second timeout for this specific assertion.
  - test.slow() method
    - `test.slow()` can be used to mark a test as slow, which increases its timeout limit.
    - Example: `test('slow test', async ({ page }) => { test.slow(); /* test code */ });`

- Assertions (Auto retry mechanism and Non-retry mechanism)

  - Playwright provides built-in assertions to verify the state of elements and pages.
  - Examples include `toBeVisible()`, `toHaveText()`, `toBeChecked()`, etc.
  - Assertions help ensure that the application behaves as expected during tests.
  - Timeout is possible only on Auto retry mechanism assertions not on non-retry mechanism assertions.
  - Hard Assertions fails to execute further steps once the assertion fails.
  - Soft Assertions allows the test to continue executing even if an assertion fails.

  ```js
  //Soft Assertion Example
  await expect.soft(locator).toBeVisible({ timeout: 10000 });
  ```

- Test Generator (Codegen)
  - Playwright's Codegen feature allows you to record user interactions and generate test code automatically.
  - You can start Codegen by running `npx playwright codegen <website-url>`.
  - `npx playwright codegen -o <filename.ts> <website-url>` to save the generated code directly to a file.
  - It captures actions like clicks, form fills, and navigation, and generates corresponding test code.
  - Codegen is useful for quickly creating test scripts and learning how to use Playwright's API.

## 18. Capture Screenshots,Reacord Videos for test, Trace Viewer and Handle Flaky tests

- Screenshots
  - `await page.screenshot({ path: 'screenshot.png' });` captures a screenshot of the current page and to take a full page screenshot use `fullPage:true` option.
  - You can capture screenshots on test failure by configuring it in `playwright.config.ts` using `screenshot: 'only-on-failure'` and also can set it to `on-first-failure`,`on` or `off` in `use` block.
- Video Recording
  - You can record videos of your test runs by configuring it in `playwright.config.ts` using `video: 'on-first-retry'`,`retain-on-failure`, `retry-with-video` or `video: 'on'` in `use` block.
- Trace Viewer
  - Playwright's Trace Viewer allows you to visualize and analyze the execution of your tests.
  - You can enable tracing in your tests by configuring it in `playwright.config.ts` using `trace: 'on-first-retry'`,`retain-on-failure`, `retry-with-trace` or `trace: 'on'` in `use` block.
  - After running your tests with tracing enabled, you can view the trace using the command `npx playwright show-trace <trace-file-path>`.
  - Traceviewer can be enabled on specific testing using `context.tracing.start({screenshots: true, snapshots: true})` and `context.tracing.stop({path: 'trace.zip'})` methods.
  - Utility: `https://trace.playwright.dev/`
- Handling Flaky Tests
  - Flaky tests are tests that sometimes pass and sometimes fail without any changes to the code.
  - To handle flaky tests in Playwright, you can use the `retries` option in `playwright.config.ts` to specify the number of times to retry a failed test.
  - Example: `retries: 2` will retry a failed test up to two times before marking it as failed.
  - You can also use `test.skip()` to temporarily skip flaky tests until the underlying issue is resolved.

## 19. Grouping Tests, Hooks, Annotations and Tagging tests

- By default playwright runs all the test in Parallel mode.

  - To configure serial execution we need to set `fullyParallel: false` in `playwright.config.ts`

- Grouping Tests
  - You can group related tests using `test.describe()` block.
  - This helps organize tests and apply common setup/teardown logic.
  - To run specific group of describe block use `--grep` flag with describe block name.
    - `npx playwright test --grep "Group Name"`
- Hooks
  - Playwright provides hooks like `beforeAll`, `afterAll`, `beforeEach`, and `afterEach` to set up and tear down test environments.
  - These hooks allow you to run code before or after tests or test suites.
- Annotations
  - Playwright supports annotations to add metadata to tests.
  - You can use annotations like `only`, `skip`, `fixme`, `slow` and `fail` to control test execution.
- Tagging Tests
  - You can tag tests with `@tagName` in the test title or you can pass it as a parameter.
    - Example1: `test('@smoke Test Name', async ({ page }) => { /* test code */ });`
    - Example2:`test('Test Name', { tags: ['smoke'] }, async ({ page }) => { /* test code */ });`
  - To run tests with specific tags, use the `--grep` flag with the tag name.
    - `npx playwright test --grep "@tag-name"`

## 20. Parallelism/Parallel Testing

- we can achieve parallelism in Playwright by configuring the `workers` option in the `playwright.config.ts` file.
- The `workers` option specifies the number of parallel worker processes that Playwright will use to run tests.
- By default, Playwright sets the number of workers to the number of CPU cores available on the machine.
- You can customize the number of workers based on your requirements and the capabilities of your test environment.
- Example: `workers: 4` will run tests using 4 parallel worker processes.
- You can also set `workers: 1` to run tests sequentially.
- Additionally, you can use the `--workers` command-line flag to override the number of workers specified in the configuration file.
- Example: `npx playwright test --workers=3`
- Keep in mind that running tests in parallel can significantly reduce the overall test execution time, especially for large test suites.
- However, ensure that your tests are designed to be independent and do not share state, as this can lead to flaky tests when run in parallel.
- You can also control parallelism at the test file level by using the `test.describe.parallel()` method to run all tests within a describe block in parallel.
- You can also use `test.describe.configure({ mode: 'parallel' })` to set parallel mode for a specific describe block and following is the code for serial execution of a describe block.
  - `test.describe.configure({ mode: 'serial' })`
- Parallel mode can set at Browser level using `projects` in `playwright.config.ts` file.

## 21. Parameterization(Data-Driven Testing using JSON, CSV and Excel)

- Data-Driven Testing (DDT) is a testing methodology where test data is separated from test scripts, allowing the same test logic to be executed with different sets of input data.
- In Playwright, you can achieve DDT by using external data sources like JSON, CSV, or Excel files to provide input data for your tests.
- JSON Example:

```js
import test from "@playwright/test";
import fs from "fs";
const testData = JSON.parse(fs.readFileSync("testData.json", "utf-8"));
testData.forEach((data) => {
  test(`Test with data: ${data.input}`, async ({ page }) => {
    await page.goto("https://example.com");
    await page.fill("#inputField", data.input);
    await page.click("#submitButton");
    await expect(page.locator("#result")).toHaveText(data.expectedOutput);
  });
});
```

- CSV Example:

```js
import test from "@playwright/test";
import fs from "fs";
import csvParser from "csv-parser";
const testData = [];
fs.createReadStream("testData.csv")
  .pipe(csvParser())
  .on("data", (row) => {
    testData.push(row);
  })
  .on("end", () => {
    testData.forEach((data) => {
      test(`Test with data: ${data.input}`, async ({ page }) => {
        await page.goto("https://example.com");
        await page.fill("#inputField", data.input);
        await page.click("#submitButton");
        await expect(page.locator("#result")).toHaveText(data.expectedOutput);
      });
    });
  });
```

- Excel Example:

```js
import test from "@playwright/test";
import xlsx from "xlsx";
const workbook = xlsx.readFile("testData.xlsx");
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const testData = xlsx.utils.sheet_to_json(sheet);
testData.forEach((data) => {
  test(`Test with data: ${data.input}`, async ({ page }) => {
    await page.goto("https://example.com");
    await page.fill("#inputField", data.input);
    await page.click("#submitButton");
    await expect(page.locator("#result")).toHaveText(data.expectedOutput);
  });
});
```

- In these examples, we read test data from JSON, CSV, and Excel files, and use that data to run the same test logic with different inputs and expected outputs.
- This approach allows for easy maintenance and scalability of test cases, as you can simply update the data files without modifying the test scripts.

## 22. Playwright Reports & Allure Reports

_Topics Covered:_

- npx playwright show-report
  - congigure in playwright.config.ts
  - `reporter: [['html', { open: 'never' }], ['list'], ['junit', { outputFile: 'results/results.xml' }]],`
- Allure Reports
  - Installation
    - `npm install -D allure-playwright`
    - `npm install -g allure-commandline --save-dev`
  - Configure in playwright.config.ts
    - `reporter: [['allure-playwright']],`
  - Generating Allure Report
    - `npx playwright test`
    - `allure generate allure-results --clean -o allure-report`
    - `allure open allure-report` to view the report
