import { test, expect } from "vitest";
import * as core from "../../src/plugins/VueOccasions/core/index";

const date = new Date();

test("today's date", () => {
  const formattedDate = `${core.monthName(date.getMonth())} ${date.getDate()}`
  expect(core.todaysDate(formattedDate)).toEqual(formattedDate);
})

test("date override", () => {
  expect(core.todaysDate("Feb 27")).toEqual(`Feb 27`);
})
