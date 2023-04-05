import * as core from "./core/index"
import { name, version } from "../../../package.json"
import occasionsData from './occasions.json' assert { type: 'json' }

export default {
  install: (app, options) => {
    app.component("vue-occasions");
    const consolePre = `[${name}]`
    console.debug(`${consolePre} version ${ version } installed.`)
    let occasions = { ...occasionsData }
    // use options-supplied date, or today's date
    const todays_date = options && options.date ? core.todaysDate(options.date).slice(0,6) : core.todaysDate()
    // check for special date
    Object.keys(occasions).forEach(key => {
      if(key.slice(0, 1) === '_') {
        // replace key with special-date result
        occasions = core.renameKey(occasions, key, core.specialDate(key, todays_date));
      }
    });
    // check for standard date
    if (occasions[todays_date] !== undefined) {
      document.body.classList.add(occasions[todays_date])
      document.body.dataset.occasion = occasions[todays_date]
      options.onOccasion.call(this);
      console.debug(`${consolePre} "${ occasions[todays_date] }" occasion found.`)
    } else {
      console.debug(`${consolePre} no occasion found.`)
    }
  }
}