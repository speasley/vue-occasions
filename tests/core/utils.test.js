import { test, expect } from "vitest";
import * as core from "../../src/plugins/VueOccasions/core/index";

test("mergeHashes", () => {
  const hash1 = {
    "a":"1",
    "c":"3",
    "e":"5",
  }
  const hash2 = {
    "b":"2",
    "d":"4",
    "f":"6"
  }
  expect(core.mergeHashes(hash1, hash2)).toEqual({
    "a":"1",
    "b":"2",
    "c":"3",
    "d":"4",
    "e":"5",
    "f":"6"
  });
})
