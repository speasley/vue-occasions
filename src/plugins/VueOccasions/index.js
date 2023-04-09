import * as core from "./core/index"
import { name, version } from "../../../package.json"
import occasionsData from "./occasions.json" assert { type: "json" }

export default {
  install: (app, options) => {
    app.component("vue-occasions");
    const consolePre = `[${name}]`
    console.debug(`${consolePre} version ${ version } installed.`)
    // merge any user-supplied occasions
    const userOccasions = options.occasions ? options.occasions : {};
    let occasions = core.mergeHashes(occasionsData, userOccasions)
    // use options-supplied date, or today's date
    const todays_date = options && options.date ? core.todaysDate(options.date).slice(0,6) : core.todaysDate()
    // check for special date
    Object.keys(occasions).forEach(key => {
      if(key.slice(0, 1) === "_") {
        // replace key with special-date result
        occasions = core.renameKey(occasions, key, core.specialDate(key, todays_date));
      }
    });
    // log occasions object, if requested with option
    if (options && options.log) {
      const sortedDates = Object.keys(occasions).sort((a, b) => {
        const dateA = new Date(`2000 ${a}`)
        const dateB = new Date(`2000 ${b}`)
        return dateA - dateB;
      });
      console.groupCollapsed(`${consolePre} available occasions...`);
      sortedDates.forEach((date) => {
        console.log(`${date}: ${occasions[date]}`);
      });
      console.groupEnd()
    }
    // check for and apply occasion
    if (occasions[todays_date] !== undefined) {
      document.body.classList.add(occasions[todays_date])
      document.body.dataset.occasion = occasions[todays_date]
      if ( options.onOccasion ) { options.onOccasion.call(this) };
      console.debug(`${consolePre} "${ occasions[todays_date] }" occasion found.`)
    } else {
      console.debug(`${consolePre} no occasion found for today.`)
    }
  }
}