const lastWeekday = (params, override) => {
  const [weekday, month] = params.split(',');
  const weekdayIndex = weekdayIndex(weekday);
  const monthIndex = monthIndex(month);
  const today = new Date();
  let year = today.getFullYear();

  if (override && override.length > 6) {
    year = override.slice(-4);
  }

  const lastDayOfMonth = new Date(year, monthIndex + 1, 0);
  let date;

  if (lastDayOfMonth.getDay() === weekdayIndex) {
    date = lastDayOfMonth;
  } else {
    let offset = 0;
    let weekdayIndexRef = lastDayOfMonth.getDay();

    while (weekdayIndexRef !== weekdayIndex) {
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

    const timestampLastDayOfMonth = timestamp(monthIndex + 1, 0, year);
    date = new Date((timestampLastDayOfMonth - 86400 * offset) * 1000);
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    date = `${month} ${day}`;
  }

  return date;
};

const weekdayBefore = (params, override) => {
  const [weekday, month, day] = params.split(',');
  const monthIndex = monthName(month);
  const dayNumber = Number(day);
  const today = new Date();
  let year = today.getFullYear();
  
  if (override && override.length > 6) {
    year = override.slice(-4);
  }
  
  const referenceDate = new Date(year, monthIndex, dayNumber);
  
  let date;
  if (referenceDate.getDay() === weekdayIndex(weekday)) {
    date = timestamp(monthIndex, dayNumber, year) - 604800; //minus seven days
  } else {
    let offset = 0;
    let weekdayIndex = referenceDate.getDay(); //weekday of the reference date
    
    while (weekdayIndex !== weekdayIndex(weekday)) {
      weekdayIndex--;
      offset++;
      
      if (weekdayIndex === -1) {
        weekdayIndex = 6;
      }
    }
    
    date = timestamp(monthIndex, dayNumber, year) - (86400 * offset);
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

export { lastWeekday, weekdayBefore, weekdayIndex, weekdayName }
