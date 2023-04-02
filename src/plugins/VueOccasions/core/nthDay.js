const nthDay = (params, override) => {
  const [nth, weekday, month] = params.split(',');
  const nthNum = Number(nth);
  const weekdayIndex = weekdayIndex(weekday);
  const monthIndex = monthIndex(month);
  const today = new Date();
  let year = today.getFullYear();
  if (override && override.length > 6) {
    year = override.slice(-4);
  }
  let day = 1;
  let d = new Date(year, monthIndex, day);
  let offset = 0;
  if (weekdayIndex != d.getDay()) {
    let weekdayIndex = d.getDay();
    while (weekdayIndex != weekdayIndex) {
      weekdayIndex++;
      offset++;
      if (weekdayIndex == 7) {
        weekdayIndex = 0;
      }
    }
  }
  day = day + offset + (7 * (nthNum - 1));
  d = d.setDate(day);
  d = new Date(d);
  const monthName = monthName(d.getMonth());
  const date = `${monthName} ${(day < 10 ? '0' : '') + day}`;
  return date;
};

export { nthDay }
