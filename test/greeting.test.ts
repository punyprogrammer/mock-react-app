import assert from "node:assert/strict";
import test from "node:test";
import { greeting } from "../src/greeting.ts";

test("greeting includes the name", () => {
  assert.equal(greeting("reviewer"), "Hello, reviewer");
});
