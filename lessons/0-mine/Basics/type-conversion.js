console.log("---TYPE CONVERSION---");
/*
JavaScript variables can be converted to a new variable and another data type:
By the use of a JS function or Automatically by JS itself:
Converting Strings to Numbers
Converting Numbers to Strings
Converting Dates to Numbers
Converting Numbers to Dates
Converting Booleans to Numbers
Converting Numbers to Booleans
*/
console.log(" ");
console.log("---1) Strings to Numbers---");
console.log("-------Number()------");
// Number()	Returns a number, converted from its argument
console.log(Number("3.14"));// returns 3.14
console.log(Number(" "));// returns 0
console.log(Number(""));// returns 0
console.log(Number("99 88"));// returns NaN
console.log(typeof Number("%!"), Number("%!"));// returns NaN

console.log("-------parseFloat()------");
// parseFloat()	Parses a string and returns a floating point number
console.log(parseFloat("3.14"));// returns 3.14
console.log(parseFloat(" "));// returns NaN
console.log(parseFloat(""));// returns NaN
console.log(typeof parseFloat("99 88"), parseFloat("99 88"));// 99
console.log(parseFloat("%!"));// returns NaN

console.log("-------parseInt()------");
// parseInt()	Parses a string and returns an integer
console.log(parseInt("3.14"));// returns 3.14
console.log(parseInt(" "));// returns NaN
console.log(parseInt(""));// returns NaN
console.log(typeof parseInt("99 88"), parseInt("99 88"));// 99
console.log(parseInt("%!"));// returns NaN

console.log("-------Variables to Numbers------");
// The unary + operator can be used to convert a variable to a number:
const y = "5";
const x = + y;
console.log(typeof y, y, ";", typeof x, x);

const y1 = "u";
const x1 = + y1;
console.log(typeof y1, y1, "; ", typeof x1, x1);


console.log(" ");
console.log("---2) Numbers to Strings---");
console.log("-------String()------");
/* The global method String() can convert numbers to strings.
It can be used on any type of numbers, literals, variables, or expressions: */
const a = 123;
console.log(typeof String(a), String(a)); // 123
console.log(typeof String(123), String(123)); // 123
console.log(typeof String(100 + 23), String(100 + 23.123)); // 123

console.log("-------String()------");
// The Number method toString() does the same.
console.log(a.toString());
console.log((123).toString());
console.log((100 + 23.123).toString());

console.log("-------toExponential()------");
// Returns a string, with a number rounded and written using exponential notation.
console.log(a.toExponential());
console.log(typeof (123).toExponential(), (123).toExponential());
console.log((100 + 23).toExponential());
console.log((100 + 23.123).toExponential());

console.log("-------toPrecision()------");
// Returns a string, with a number written with a specified length
console.log(a.toPrecision());
console.log(typeof (123).toPrecision(), (123).toPrecision());
console.log((100 + 23).toPrecision(5));
console.log((100 + 23.123).toPrecision(4));

console.log("-------toFixed()------");
// toFixed() returns a string, with the number written with a specified number of decimals:
console.log(a.toFixed());
console.log(typeof (123).toFixed(), (123).toFixed(1));
console.log((100 + 23).toFixed(5));
console.log((100 + 23.123).toFixed(4));


console.log(" ");
console.log("---3) Dates to Numbers---");
console.log("-------Number()------");
/* The global method Number() can be used to convert dates to numbers. */
const d = new Date();
console.log(Number(d));

console.log("-------getTime()------");
/* The date method getTime() does the same. */
const d1 = new Date();
console.log(d1.getTime());


console.log(" ");
console.log("---4) Dates to Strings---");
console.log("-------String()------");
/* The global method String() can be used to convert dates to strings. */
console.log(String(Date()));

console.log("-------toString()------");
// The Date method toString() does the same.
console.log(Date().toString());

const date = new Date();
console.log(typeof date, date);
console.log(typeof date.getTime(), date.getTime()); //The getTime() method returns the number of milliseconds since January 1, 1970:
console.log(date.getFullYear()); //The getFullYear() method returns the year of a date as a four digit number:
console.log(date.getMonth()); //The getMonth() method returns the month of a date as a number (0-11):
console.log(typeof date.getDate(), date.getDate()); //The getDate() method returns the day of a date as a number (1-31):
console.log(date.getHours()); //The getHours() Method
console.log(date.getMinutes());//The getMinutes() method returns the minutes of a date as a number (0-59):
console.log(date.getSeconds()); //The getSeconds() method returns the seconds of a date as a number (0-59):
console.log(date.getMilliseconds()); //The getMilliseconds() method returns the milliseconds of a date as a number (0-999):
console.log(date.getTime());
console.log("getDay()", date.getDay()); //The getDay() method returns the weekday as a number: In JavaScript, the first day of the week (0) means "Sunday", even if some countries in the world consider the first day of the week to be "Monday".
console.log(date.getTime()); // The getTime() method returns the number of milliseconds since January 1, 1970:

console.log(" ");
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const d2 = new Date();
let day = days[d2.getDay()];
console.log(day);


console.log(" ");
console.log("---6) Booleans to Numbers---");
console.log("-------Number()------");
// The global method Number() can convert booleans to strings.
console.log(typeof Number(false), Number(false));
console.log(typeof Number(true), Number(true));


console.log(" ");
console.log("---6) Booleans to Strings---");
console.log("-------String()------");
// The global method String() can convert booleans to strings.
console.log(typeof String(false), String(false));
console.log(typeof String(true), String(true));
console.log("-------toString()------");
// The Boolean method toString() does the same.
console.log(typeof false.toString(), false.toString());
console.log(typeof true.toString(), true.toString());

