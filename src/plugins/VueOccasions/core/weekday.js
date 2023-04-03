import { ref } from "vue";
import { monthIndex, monthName } from "./month";
import { timestamp } from "./timestamp";

const firstWeekday = (parameters, override) => {
  const params = parameters.replace(/\s/g, '').split(','); // weekday, month
  let [weekday, month] = params.map(param => param.trim());
  const weekday_index = weekdayIndex(weekday);
  const month_index = monthIndex(month);
  const today = new Date();
  let year = today.getFullYear();

  if (override && override.length > 6) {
    year = override.slice(-4);
  }

  const firstDayOfMonth = new Date(year, month_index, 1);
  let date;

  if (firstDayOfMonth.getDay() === weekday_index) {
    date = firstDayOfMonth;
  } else {
    let offset = 0;
    let weekdayIndexRef = firstDayOfMonth.getDay();
    
    while (weekdayIndexRef !== weekday_index) {
      weekdayIndexRef++;
      offset++;

      if (weekdayIndexRef === 7) {
        weekdayIndexRef = 0;
      }
    }

    const timestamp = (month, day, year) => {
      const date = new Date(year, month, day);
      return Math.floor(date.getTime() / 1000);
    };

    const timestampFirstDayOfMonth = timestamp(month_index + 1, 1, year);
    date = new Date((timestampFirstDayOfMonth + 86400 * offset) * 1000);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    date = `${month} ${day}`;
  }

  return date

}

const lastWeekday = (parameters, override) => {
  const params = parameters.replace(/\s/g, '').split(','); // weekday, month
  let [weekday, month] = params.map(param => param.trim());
  const weekday_index = weekdayIndex(weekday);
  const month_index = monthIndex(month);
  const today = new Date();
  let year = today.getFullYear();

  if (override && override.length > 6) {
    year = override.slice(-4);
  }

  const lastDayOfMonth = new Date(year, month_index + 1, 0);
  let date;

  if (lastDayOfMonth.getDay() === weekday_index) {
    date = lastDayOfMonth;
  } else {
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
    date = new Date((timestampLastDayOfMonth - 86400 * offset) * 1000);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    date = `${month} ${day}`;
  }

  return date;

};

const weekdayBefore = (parameters, override) => {
  const params = parameters.replace(/\s/g, '').split(','); // weekday, month, day
  let [weekday, month, day] = params.map(param => param.trim());
  weekday = weekdayIndex(weekday);
  month = monthIndex(month);
  day = Number(day);
  const today = new Date();
  const year = today.getFullYear();

  if (override && override.length > 6) {
    year = override.slice(-4);
  }
  
  let date;

  if (day === weekdayName(weekday)) {
    date = timestamp(month, day, year) - 604800; //minus seven days
  } else {
    let offset = 0;
    let weekday_index = day; //weekday of the reference date, eg. 25

    while (weekday_index !== weekday) {
      weekday_index--;
      offset++;
      if (weekday_index === -1) {
        weekday_index = 6; // when less than 0 (Sun), set to 6 (Sat)
      }
    }
    date = timestamp(month, day, year) - (86400 * offset);
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

export { firstWeekday, lastWeekday, weekdayBefore, weekdayIndex, weekdayName }
