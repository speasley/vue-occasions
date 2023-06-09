import { monthIndex, monthName } from "./month";
import { timestamp } from "./timestamp";

const oneDay = 86400;
const oneWeek = 604800;

const lastWeekday = (parameters) => {
  const params = parameters.replace(/\s/g, "").split(","); // weekday, month
  let [weekday, month, year = new Date().getFullYear()] = params.map(param => param.trim());
  const weekday_index = weekdayIndex(weekday);
  const month_index = monthIndex(month);
  const lastDayOfMonth = new Date(year, month_index + 1, 0);
  let date = lastDayOfMonth;
  let offset = 0;
  let weekdayIndexRef = lastDayOfMonth.getDay();

  while (weekdayIndexRef !== weekday_index) {
    weekdayIndexRef--;
    offset++;

    if (weekdayIndexRef === -1) {
      weekdayIndexRef = 6;
    }
  }

  const timestamp = (month, day, year) => {
    const date = new Date(year, month, day);
    return Math.floor(date.getTime() / 1000);
  };

  const timestampLastDayOfMonth = timestamp(month_index + 1, 0, year);
  date = new Date((timestampLastDayOfMonth - oneDay * offset) * 1000);
  const day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate();
  date = `${month} ${day}`;

  return date;

};

const weekdayAfter = (parameters) => {
  const params = parameters.replace(/\s/g, "").split(","); // weekday, month, day
  let [target_weekday, target_month, target_day, year = new Date().getFullYear()] = params.map(param => param.trim());
  let target_weekday_index = weekdayIndex(target_weekday)
  const target_month_index = monthIndex(target_month);
  target_day = Number(target_day);
  let date = timestamp(target_month_index, target_day, year);
  
  let refDay = new Date(date * 1000).getDay();
  if (refDay === target_weekday_index) {
    date += oneWeek; // add seven days if days of week match
  } else {
    let offset = 0;
    while (refDay !== target_weekday_index) {
      refDay++;
      offset++;
      if (refDay === 7) {
        refDay = 0; // when greater than 6 (Sat), set to 0 (Sun)
      }
    }
    date = timestamp(target_month_index, target_day, year) + (oneDay * offset);
  }

  date = new Date(date * 1000);
  const formattedMonth = monthName(date.getMonth());
  const formattedDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

  return `${formattedMonth} ${formattedDay}`;

};

const weekdayBefore = (parameters) => {
  const params = parameters.replace(/\s/g, "").split(","); // weekday, month, day
  let [target_weekday, target_month, target_day, year = new Date().getFullYear()] = params.map(param => param.trim());
  let target_weekday_index = weekdayIndex(target_weekday)
  const target_month_index = monthIndex(target_month);
  target_day = Number(target_day);
  let date = timestamp(target_month_index, target_day, year);
  
  let refDay = new Date(date * 1000).getDay();
  if (refDay === target_weekday_index) {
    date -= oneWeek; // subtract seven days if days of week match
  } else {
    let offset = 0;
    while (refDay !== target_weekday_index) {
      refDay--;
      offset++;
      if (refDay === -1) {
        refDay = 6; // when less than 0 (Sun), set to 6 (Sat)
      }
    }
    date = timestamp(target_month_index, target_day, year) - (oneDay * offset);
  }

  date = new Date(date * 1000);
  const formattedMonth = monthName(date.getMonth());
  const formattedDay = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate();

return `${formattedMonth} ${formattedDay}`;

};

const weekdayIndex = (d) => {
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdayNames.indexOf(d);
};

const weekdayName = (d) => {
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return weekdayNames[d];
};

export { lastWeekday, weekdayAfter, weekdayBefore, weekdayIndex, weekdayName }
