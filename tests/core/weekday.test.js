import { test, expect } from "vitest";
import * as core from "../../src/plugins/VueOccasions/core/index";

test("weekday index", () => {
  expect(core.weekdayIndex("Sun")).toEqual(0);
  expect(core.weekdayIndex("Mon")).toEqual(1);
  expect(core.weekdayIndex("Tue")).toEqual(2);
  expect(core.weekdayIndex("Wed")).toEqual(3);
  expect(core.weekdayIndex("Thu")).toEqual(4);
  expect(core.weekdayIndex("Fri")).toEqual(5);
  expect(core.weekdayIndex("Sat")).toEqual(6);
})

test("weekday name", () => {
  expect(core.weekdayName(0)).toEqual("Sun");
  expect(core.weekdayName(1)).toEqual("Mon");
  expect(core.weekdayName(2)).toEqual("Tue");
  expect(core.weekdayName(3)).toEqual("Wed");
  expect(core.weekdayName(4)).toEqual("Thu");
  expect(core.weekdayName(5)).toEqual("Fri");
  expect(core.weekdayName(6)).toEqual("Sat");
})
