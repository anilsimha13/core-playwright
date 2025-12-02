import { test, expect, Locator } from "@playwright/test";

test.beforeAll("BeforeAll", async () => {
  console.log("BeforeAll");
});

test.afterAll("AfterAll", async () => {
  console.log("AfterAll");
});

test.beforeEach("BeforeEach", async () => {
  console.log("BeforeEach");
});
test.afterEach("AfterEach", async () => {
  console.log("AfterEach");
});
test("Test1", async () => {
  console.log("I am from test1");
});

test("Test2", async () => {
  console.log("I am from test2");
});

test("Test3", async () => {
  console.log("I am from test3");
});
test("Test4", async () => {
  console.log("I am from test4");
});
