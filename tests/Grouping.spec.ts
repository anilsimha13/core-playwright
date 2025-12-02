import { test, expect, Locator } from "@playwright/test";

test.describe("Group1", async () => {
  test("Test1", async () => {
    console.log("I am from test1");
  });

  test("Test2", async () => {
    console.log("I am from test2");
  });
});

test.describe("Group2", async () => {
  test("Test3", async () => {
    console.log("I am from test3");
  });
  test("Test4", async () => {
    console.log("I am from test4");
  });
});
