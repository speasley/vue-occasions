import { monthIndex, monthName } from "./month";
import { weekdayIndex } from "./weekday";

const nthDay = (parameters, override) => {
  const params = parameters.replace(/\s/g, '').split(','); // nth, weekday, month
  let [nth, weekday, month] = params.map(param => param.trim());
  nth = Number(nth);
  weekday = weekdayIndex(weekday);
  month = monthIndex(month);
  const today = new Date();
  let year = today.getFullYear();
  if (override && override.length > 6) {
    year = override.slice(-4);
  }
  let day = 1; // start on the 1st of the month
  let d = new Date(year, month, day); // 1st of the target month
  // set weekday of 1st of the month
  let offset = 0;
  if (weekday !== d.getDay()) {
    // weekday is not on the 1st of the month
    let weekdayIndex = d.getDay(); // weekday of 1st of the month
    while (weekdayIndex !== weekday) {
      weekdayIndex++;
      offset++;
      if (weekdayIndex === 7) {
        weekdayIndex = 0;
      }
    }
  }
  day = day + offset + (7 * (nth - 1));
  d = new Date(d.setDate(day)); // set occasion date
  month = d.getMonth();
  const date = `${monthName(month)} ${day < 10 ? '0' : ''}${day}`;
  return date;
};

export { nthDay };
