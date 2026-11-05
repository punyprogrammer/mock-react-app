import assert from "node:assert/strict";
import test from "node:test";
import { nextCount, resetCount } from "../src/counter.ts";
import { formatCount } from "../src/formatCount.ts";
import { greeting } from "../src/greeting.ts";
import { matchesName, parsePeople, rankPeople, searchUrl } from "../src/directory.ts";

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

test("searchUrl keeps the query", () => {
  assert.match(searchUrl("ada"), /q=ada/);
});

test("parsePeople reads a person list", () => {
  const people = parsePeople('[{"id":"1","name":"Ada","bio":"ok","score":1}]');
  assert.equal(people[0].name, "Ada");
});

test("rankPeople orders by score", () => {
  const ranked = rankPeople([
    { id: "1", name: "Ada", bio: "ok", score: 1 },
    { id: "2", name: "Lin", bio: "ok", score: 4 },
  ]);
  assert.equal(ranked[0].name, "Lin");
});

test("matchesName finds a substring", () => {
  assert.equal(
    matchesName({ id: "1", name: "Ada", bio: "ok", score: 1 }, "Ad"),
    true,
  );
});
