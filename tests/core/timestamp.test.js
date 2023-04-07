
import { test, expect } from "vitest";
import * as core from "../../src/plugins/VueOccasions/core/index";

test("timestamp", () => {
  expect(core.timestamp(0, 15, 1980)).toEqual(316767600);
  expect(core.timestamp(2, 25, 1919)).toEqual(-1602262800);
  expect(core.timestamp(4, 5, 2034)).toEqual(2030421600);
  expect(core.timestamp(7, 1, 2000)).toEqual(965109600);
  expect(core.timestamp(12, 8, 2007)).toEqual(1199775600);
})
