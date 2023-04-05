import { globalYear } from "./globalYear"
import { monthName } from "./month"

const todaysDate = (override) => {
  const today = new Date();
  if (override && override.length > 5) {
    today.setFullYear(globalYear(override.slice(-4)));
  }
  const now_month = today.getMonth();
  const now_day = today.getDate();
  let now_date = `${monthName(now_month)} ${now_day < 10 ? '0' : ''}${now_day}`;
  if (override) {
    now_date = override;
  }
  return now_date;
};

export { todaysDate };
