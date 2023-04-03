import { nthDay } from './nthDay'
import { lastWeekday, weekdayBefore } from './weekday'

const specialDate = (date, override) => {

  let params;
  let new_date;

  if (date.startsWith('_nthDay')) {
    params = date.substring(8, date.length - 1);
    new_date = nthDay(params, override);
  } else if (date.startsWith('_weekda')) {
    params = date.substring(15, date.length - 1);
    new_date = weekdayBefore(params, override);
  } /*else if (date.startsWith('_lastWe')) {
    params = date.substring(12, date.length - 1);
    new_date = lastWeekday(params, override);
  }*/

  return new_date;
};

export { specialDate }
