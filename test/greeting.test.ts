import assert from "node:assert/strict";
import test from "node:test";
import { nextCount, resetCount } from "../src/counter.ts";
import { formatCount } from "../src/formatCount.ts";
import { greeting } from "../src/greeting.ts";

test("greeting includes the name", () => {
  assert.equal(greeting("reviewer"), "Hello, reviewer");
});

test("greeting trims surrounding spaces", () => {
  assert.equal(greeting("  reviewer  "), "Hello, reviewer");
});

test("greeting uses a fallback for a blank name", () => {
  assert.equal(greeting("   "), "Hello, there");
});

test("nextCount adds one", () => {
  assert.equal(nextCount(2), 3);
});

test("resetCount returns zero", () => {
  assert.equal(resetCount(), 0);
});

test("formatCount labels the number", () => {
  assert.equal(formatCount(4), "Clicks: 4");
});
