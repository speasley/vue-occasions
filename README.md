# vue-occasions

vue-occasions tags your HTML’s body element with a class and a data attribute reflecting today’s occasion or holiday. You can then style that element with CSS or implement some JavaScript behaviour. For example, you could show special versions of your site’s logo on different holidays or trigger a holiday-specific modal.

## Installation

### npm

`npm install vue-occasions --save`

### yarn

`yarn add vue-occasions`

Import vue-occasions into your project:

```
import VueOccasions from 'vue-occasions'
```

Install the plugin in your application:

```
createApp(App)
  .use(VueOccasions)
  .mount('#app')
```

On May the 4th, this will result in:

```
<body class="star-wars" data-occasion="star-wars">
```

Now you can leverage CSS and JavaScript as you wish in celebration of Star Wars Day.

## Options

### custom occasions

You can add your own occasions but supplying a json object with during initialization:
```
createApp(App)
  .use(VueOccasions, {
    occasions: {
      "Feb 27":"birthday"
    }
  })
  .mount('#app')
```

Note: if an occasion already exists for the date you provide, your custom occasion will be given priority.

### date

To simulate an occasion without having to time travel, pass in a relevant date with your initialization:

```
createApp(App)
  .use(VueOccasions, {date: 'Apr 01'})
  .mount('#app')
```

This is intended for testing purposes only. Be sure to remove the date override once you have completed testing.

### onOccasion callback

When vue-occasions adds its attributes to your body tag, it will also execute code inside the `onOccasion` callback block.

```
createApp(App)
  .use(VueOccasions, {
    onOccasion: () => {
      // add your callback code here
    }
  })
  .mount('#app')
```

## Extras

### Special dates

Four special date functions are available: `nthDay()`, `lastWeekday()` and `weekdayAfter()` and `weekdayBefore()`. Use these as follows:

The first Monday of February:
```
"_nthDay(1,Mon,Feb)":"happy-day"
```

The last Monday of May:
```
"_lastWeekday(Mon,May)":"memorial"
```

The Tuesday after June 14:
```
"_weekdayAfter(Tue,Jun,14)":"knitting-group"
```

The Tuesday before February 27:
```
"_weekdayBefore(Tue,Feb,27)":"nappy-day"
```

Don’t miss those double-quotes.

### Current occasion

You can retrieve the current occasion that is attached to your element with `document.querySelector('body').getAttribute('data-occasion')`.

## Usage examples

### Star Wars Day

Let’s trigger a JavaScript alert when simulating May 4th:
```
createApp(App)
  .use(VueOccasions, {
    date: 'May 04',
    onOccasion: () => {
      if (document.querySelector('body').getAttribute('data-occasion') === 'star wars') {
        alert('May the Fourth be with you.')
      }
    }
  })
  .mount('#app')
```

### Book club

A book club meets on the last Friday of each month. On those Fridays, their website displays a reminder badge.

Their initialization looks like this:

```
createApp(App)
  .use(VueOccasions, {
    occasions: {
      "_lastWeekday(Fri,Jan)":"book-club-meeting",
      "_lastWeekday(Fri,Feb)":"book-club-meeting",
      "_lastWeekday(Fri,Mar)":"book-club-meeting",
      "_lastWeekday(Fri,Apr)":"book-club-meeting",
      "_lastWeekday(Fri,May)":"book-club-meeting",
      "_lastWeekday(Fri,Jun)":"book-club-meeting",
      "_lastWeekday(Fri,Jul)":"book-club-meeting",
      "_lastWeekday(Fri,Aug)":"book-club-meeting",
      "_lastWeekday(Fri,Sep)":"book-club-meeting",
      "_lastWeekday(Fri,Oct)":"book-club-meeting",
      "_lastWeekday(Fri,Nov)":"book-club-meeting",
      "_lastWeekday(Fri,Dec)":"book-club-meeting"
    }
  })
  .mount('#app')
```

In their CSS, they have:

```
#meeting-tonight {
  display: none;
}
body.book-club-meeting #meeting-tonight {
  display: block;
}
```

## Notes

### Date format

Names of months and weekdays must be their first three letters, title cased. Eg: `Jan`, `Feb`, `Mon` and `Tue`.

## Change Log

### Apr 5, 2023 v1.0.0

* Core functionality
