import { ref } from "vue";
import { monthIndex, monthName } from "./month";
import { timestamp } from "./timestamp";

const oneDay = 86400;
const oneWeek = 604800;

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
    date = new Date((timestampFirstDayOfMonth + oneDay * offset) * 1000);
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
    date = new Date((timestampLastDayOfMonth - oneDay * offset) * 1000);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    date = `${month} ${day}`;
  }

  return date;

};

const weekdayAfter = (parameters, override) => {
  const params = parameters.replace(/\s/g, '').split(','); // weekday, month, day
  let [target_weekday, target_month, target_day] = params.map(param => param.trim());
  let target_weekday_index = weekdayIndex(target_weekday)
  const target_month_index = monthIndex(target_month);
  target_day = Number(target_day);
  const year = new Date().getFullYear();

  if (override && override.length > 6) {
    year = override.slice(-4);
  }
  
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

const weekdayBefore = (parameters, override) => {
  const params = parameters.replace(/\s/g, '').split(','); // weekday, month, day
  let [target_weekday, target_month, target_day] = params.map(param => param.trim());
  let target_weekday_index = weekdayIndex(target_weekday)
  const target_month_index = monthIndex(target_month);
  target_day = Number(target_day);
  const year = new Date().getFullYear();

  if (override && override.length > 6) {
    year = override.slice(-4);
  }
  
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

export { firstWeekday, lastWeekday, weekdayAfter, weekdayBefore, weekdayIndex, weekdayName }
