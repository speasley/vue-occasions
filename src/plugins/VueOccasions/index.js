import * as core from "./core/index"
import { name, version } from "../../../package.json"
import occasions from './occasions.json' assert { type: 'json' }

export default {
  install: (app, options) => {
    app.component("vue-occasions");
    const consolePre = `[${name}]`
    console.debug(`${consolePre} version ${ version } installed.`)
    const todays_date = options && options.date ? core.todaysDate(options.date).slice(0,6) : core.todaysDate()
    if (occasions[todays_date] !== null) {
      document.body.classList.add(occasions[todays_date])
      document.body.dataset.occasion = occasions[todays_date]
    }
  }
}