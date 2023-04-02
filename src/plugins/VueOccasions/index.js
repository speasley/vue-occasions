import * as core from "./core/index"
import { version } from "../../../package.json"

export default {
  install: (app, options) => {
    app.component("vue-occasions");
    console.debug(`[vue-occasions] version ${ version } installed.`)
    // guts
    /*
    const todays_date = todaysDate(settings.date_override).slice(0,6)
    console.debug(todays_date)
    /*
    const todays_date = todaysDate(settings.date_override).slice(0,6);
    if (occasions[todays_date] !== null) {
      this.addClass(occasions[todays_date]);
      this.data('occasion', occasions[todays_date]);
      settings.onSuccess.call(this);
    }
    */
  }
}