import { test, expect } from "vitest";
import * as core from "../../src/plugins/VueOccasions/core/index";

test("renameKey", () => {
  const hash = {
    "before":"foo"
  }
  expect(core.renameKey(hash, "before", "after")).toEqual({
    "after":"foo"
  });
})
