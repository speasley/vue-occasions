import { monthName } from "./month"

const todaysDate = (override) => {
  const today = new Date();
  const now_month = today.getMonth();
  const now_day = today.getDate();
  let now_date = `${monthName(now_month)} ${now_day < 10 ? '0' : ''}${now_day}`;
  if (override) {
    now_date = override;
  }
  return now_date;
};

export { todaysDate };
