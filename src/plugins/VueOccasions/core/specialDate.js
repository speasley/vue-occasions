import { nthDay } from './nthDay'
import { firstWeekday, lastWeekday, weekdayBefore } from './weekday'

const specialDate = (date, override) => {

  let params;
  let new_date;

  if (date.startsWith('_nthDay')) {
    params = date.substring(8, date.length - 1);
    new_date = nthDay(params, override);
  } else if (date.startsWith('_weekdayBefore')) {
    params = date.substring(15, date.length - 1);
    new_date = weekdayBefore(params, override);
  } else if (date.startsWith('_lastWeekday')) {
    params = date.substring(13, date.length - 1);
    new_date = lastWeekday(params, override);
  } else if (date.startsWith('_firstWeekday')) {
    params = date.substring(14, date.length - 1);
    new_date = firstWeekday(params, override);
  }

  return new_date;
};

export { specialDate }
