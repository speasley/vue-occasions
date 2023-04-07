import { test, expect } from "vitest";
import * as core from "../../src/plugins/VueOccasions/core/index";

test("month index", () => {
  expect(core.monthIndex("Jan")).toEqual(0);
  expect(core.monthIndex("Feb")).toEqual(1);
  expect(core.monthIndex("Mar")).toEqual(2);
  expect(core.monthIndex("Apr")).toEqual(3);
  expect(core.monthIndex("May")).toEqual(4);
  expect(core.monthIndex("Jun")).toEqual(5);
  expect(core.monthIndex("Jul")).toEqual(6);
  expect(core.monthIndex("Aug")).toEqual(7);
  expect(core.monthIndex("Sep")).toEqual(8);
  expect(core.monthIndex("Oct")).toEqual(9);
  expect(core.monthIndex("Nov")).toEqual(10);
  expect(core.monthIndex("Dec")).toEqual(11);
})

test("month name", () => {
  expect(core.monthName(0)).toEqual("Jan");
  expect(core.monthName(1)).toEqual("Feb");
  expect(core.monthName(2)).toEqual("Mar");
  expect(core.monthName(3)).toEqual("Apr");
  expect(core.monthName(4)).toEqual("May");
  expect(core.monthName(5)).toEqual("Jun");
  expect(core.monthName(6)).toEqual("Jul");
  expect(core.monthName(7)).toEqual("Aug");
  expect(core.monthName(8)).toEqual("Sep");
  expect(core.monthName(9)).toEqual("Oct");
  expect(core.monthName(10)).toEqual("Nov");
  expect(core.monthName(11)).toEqual("Dec");
})
