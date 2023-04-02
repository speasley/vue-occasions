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

Now you can leverage CSS and JavaScript as you wish.

## Testing an occasion

To simulate an occasion without having to time travel, pass in a relevant date with your initialization:

```
createApp(App)
  .use(VueOccasions, {date: 'Apr 01'})
  .mount('#app')
```

Be sure to remove the date override once you have completed testing.

## Options

### path

vue-occasions will look for its required external files in the directory from which it is run. If you wish to store these somewhere else, you’ll need to provide the filepath.

```
$('#logo').occasions({path:'/my/file/path'}); //this leads to occasions.json, canada.json, etc
```

### onSuccess callback

When vue-occasions adds a class to your element, code inside the `onSuccess` callback will be executed.

```
$('#logo').occasions({
  onSuccess: function() {
    //add your callback code here
  }
});
```

## Extras

### Custom occasions

Custom occasions can be added by editing the occasions.json file (or one of the other json files, if
that makes more sense). Follow the pattern there and you’re away to the races. Happy birthday!

#### Special dates

Three special date functions are available: `nthDay()`, `lastWeekday()` and `weekdayBefore()`. Use these in the json files as follows:

```
"_nthDay(2,Mon,Feb)":"happy-day"
```
That would give you the second Monday of February.

```
"_lastWeekday(Mon,May)":"memorial"
```
That would give you the last Monday of May, which the United States observes as Memorial Day.

```
"_weekdayBefore(Tue,Feb,27)":"nappy-day"
```
That would give you the Tuesday before February 27.

Don’t miss those double-quotes.


### Date override

You can simulate an occasion by passing in the date you wish to test:

```
$('#logo').occasions({date_override:'May 04'});
```

This is for testing purposes only; it can’t be your birthday everyday.

### Current occasion

You can retrieve the current occasion that is attached to your element by accessing `$('#logo').data('occasion')`.

## Advanced usage

### Example
```
$('#logo').occasions({
  onSuccess: function() {
    if( $(this).data('occasion') == 'star-wars' ) {
      alert('May the Fourth be with you.');
    }
  }
});
```

## Usage examples

### Book club

A book club meets on the last Friday of each month. On those Fridays, their website shows a reminder badge.

Their `occasions.json` file looks like this:

```
{
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
```

They call `vue-occasions()` on their `body` element:

```
$('body').occasions();
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

### Occasion priority

Only one occasion is intended for a single day. If you use an option to include more occasions,
those occasions will override the defaults in the event of a date overlap. If you need to avoid
this, you can simply delete the troublesome line(s) from the associated json file.

### Date format

Names of months and weekdays must be three letters, as in `Jan`, `Feb`, `Mon` and `Tue`. Dates before the 10th must contain a leading zero, as in `Feb 07`.

### Optimization

If you want to trim some overhead, you can edit the css and json files to remove occasions you don’t
need.

## Change Log

### Aug 7, 2014 v0.0.1: Tunnel Mountain

* Basic functionality
* Some unofficial holidays
* Canadian fixed-date national holidays and observances
* Christian fixed-date holidays and observances

### Aug 8, 2014 v0.0.2

* Country setting bugfix
* Support for nth weekday occasions (eg. Mother’s Day, Second Sunday of May)
* Support for the weekday preceding a date (eg. Victoria Day, Monday before May 25)
* Add Canadian and Christian nth weekday occasions
* Remove Christian Easter occasions because they are based on moon cycles and beyond the scope of my interest in writing this plugin

### Aug 9, 2014 v0.1.0

* Add callback function

### Apr 10, 2015 v1.0.0: Skoki

* Add Jasmine test suite
* Add date override
* Use leading zeroes in all dates
* Set occasion property on element

### May 29, 2016 v2.0.0: Fort McMurray

* Total rewrite with expanded test suite
* Move occasions to external files (loaded only as needed)
* Change date format ("02/07" to "Feb 07")
* Expand default occasions

### May 29, 2016 v2.1.0

* Add lastWeekday function

### Jun 4, 2016 v2.1.1

* Path setting bugfix

##Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request
