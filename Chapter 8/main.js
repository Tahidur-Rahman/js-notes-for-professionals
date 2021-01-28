// chapter 8 : Date

console.log(Date())
console.log(new Date('05-01-2002')) // with date string
// with multiple parameters
console.log(new Date(1998,01,05,1,1,1))

let now = new Date();
console.log(now.toString() === 'Thu Jan 28 2021 12:48:19 GMT+0600 (Bangladesh Standard Time)')

// date in unix epoch

let epoch  = new Date(0);
console.log(epoch.toISOString())

console.log(new Date(Date.UTC(2020,01)).toISOString())

console.log(new Date('2013 Dec 03 12:12:22'))

console.log((new Date()).toTimeString())
console.log((new Date()).toDateString())
console.log((new Date()).toUTCString())
console.log((new Date()).toISOString())
console.log((new Date()).toGMTString())
console.log((new Date()).toLocaleDateString())
console.log((new Date()).toLocaleDateString(['zh','en-US']))
let options = {weekday:'long',year:'numeric',month:'long',day:'numeric'}
console.log((new Date()).toLocaleDateString([],options))

convert time to local time from any timezone

// Wrong approch
let anytime = new Date(2000, 0, 3);

console.log(anytime);

const formatDate = (dayOfWeek, day, month, year) => {
  let daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  return (
    "He was born " +
    daysOfWeek[dayOfWeek] +
    " " +
    months[month] +
    " " +
    day +
    " " +
    year
  );
};
console.log(
  formatDate(
    anytime.getUTCDay(),
    anytime.getUTCDate(),
    anytime.getUTCMonth(),
    anytime.getUTCFullYear()
  )
);

console.log(Date.UTC(2000,0,31,12))
console.log(new Date(Date.UTC(2000,0,31,12)))


// Formatting js date

console.log(Date.now())
console.log(new Date().getFullYear())
console.log(new Date().getMonth())
console.log(new Date().getMilliseconds())
console.log((new Date()).toUTCString())
console.log((new Date()).getTime())

// increment a date object

let date = new Date(2020,1,1);
date.setDate(date.getDate() + 232)
console.log(date)

console.log(date.toJSON())
