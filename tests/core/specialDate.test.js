import { test, expect } from "vitest";
import * as core from "../../src/plugins/VueOccasions/core/index";

test("nthDay", () => {
  expect(core.specialDate("_nthDay(4,Mon,Feb,2023)")).toEqual("Feb 27");
  expect(core.specialDate("_nthDay(4,Mon,Feb,2024)")).toEqual("Feb 26");
  expect(core.specialDate("_nthDay(4,Mon,Feb,2025)")).toEqual("Feb 24");
  expect(core.specialDate("_nthDay(1,Tue,Jan,1999)")).toEqual("Jan 05");
  expect(core.specialDate("_nthDay(2,Wed,Aug,1979)")).toEqual("Aug 08");
  expect(core.specialDate("_nthDay(3,Sun,Dec,2000)")).toEqual("Dec 17");
})

test("weekdayAfter", () => {
  expect(core.specialDate("_weekdayAfter(Mon,Feb,1,2023)")).toEqual("Feb 06");
  expect(core.specialDate("_weekdayAfter(Tue,Feb,5,2024)")).toEqual("Feb 06");
  expect(core.specialDate("_weekdayAfter(Wed,Feb,10,2025)")).toEqual("Feb 12");
  expect(core.specialDate("_weekdayAfter(Thu,Jan,15,1999)")).toEqual("Jan 21");
  expect(core.specialDate("_weekdayAfter(Fri,Aug,28,1979)")).toEqual("Aug 31");
  expect(core.specialDate("_weekdayAfter(Sun,Dec,31,2000)")).toEqual("Jan 07");
})

test("weekdayBefore", () => {
  expect(core.specialDate("_weekdayBefore(Mon,Feb,1,2023)")).toEqual("Jan 30");
  expect(core.specialDate("_weekdayBefore(Tue,Feb,5,2024)")).toEqual("Jan 30");
  expect(core.specialDate("_weekdayBefore(Wed,Feb,10,2025)")).toEqual("Feb 05");
  expect(core.specialDate("_weekdayBefore(Thu,Jan,15,1999)")).toEqual("Jan 14");
  expect(core.specialDate("_weekdayBefore(Fri,Aug,28,1979)")).toEqual("Aug 24");
  expect(core.specialDate("_weekdayBefore(Sun,Dec,31,2000)")).toEqual("Dec 24");
})

test("lastWeekday", () => {
  expect(core.specialDate("_lastWeekday(Mon,Feb,2023)")).toEqual("Feb 27");
  expect(core.specialDate("_lastWeekday(Tue,Feb,2024)")).toEqual("Feb 27");
  expect(core.specialDate("_lastWeekday(Wed,Feb,2025)")).toEqual("Feb 26");
  expect(core.specialDate("_lastWeekday(Thu,Jan,1999)")).toEqual("Jan 28");
  expect(core.specialDate("_lastWeekday(Fri,Aug,1979)")).toEqual("Aug 31");
  expect(core.specialDate("_lastWeekday(Sun,Dec,2000)")).toEqual("Dec 31");
})
