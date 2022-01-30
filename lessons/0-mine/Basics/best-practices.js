console.log("---PERFORMANCE---");
// How to speed up your JavaScript code?
console.log("---1) Reduce Activity in Loops---");
/* Statements or assignments that can be placed outside the loop will make the loop run faster.
BAD
for (let i = 0; i < arr.length; i++)

BETTER
const l = arr.length; 
for (let i = 0; i < l; i++) 
*/

console.log(" ");
console.log("---2) Reduce DOM Access---");
/*
Accessing the HTML DOM is very slow, compared to other JavaScript statements.
If you expect to access a DOM element several times, access it once, and use it as a local variable:
*/

console.log(" ");
console.log("---3) Reduce DOM Size---");
/*
Keep the number of elements in the HTML DOM small.
This will always improve page loading, and speed up rendering (page display), especially on smaller devices.
Every attempt to search the DOM (like getElementsByTagName) will benefit from a smaller DOM.
*/

console.log(" ");
console.log("---4) Avoid Unnecessary Variables---");
/*
Don't create new variables if you don't plan to save values.
Often you can replace code like this:
let fullName = firstName + " " + lastName;
document.getElementById("demo").innerHTML = fullName;

With this:
document.getElementById("demo").innerHTML = firstName + " " + lastName;
*/

console.log(" ");
console.log("---5) Delay JavaScript Loading---");
/*
The HTTP specification defines that browsers should not download more than two components in parallel.
An alternative is to use defer="true" in the script tag. The defer attribute specifies that the script should be executed after the page has finished parsing, but it only works for external scripts.
*/

console.log(" ");
console.log("---6) Avoid Using with---");
// Avoid using the with keyword. It has a negative effect on speed. It also clutters up JavaScript scopes.

console.log("---BEST PRACTICES---");
// Avoid global variables, avoid new, avoid ==, avoid eval()
console.log("---1) Avoid Global Variables---");
/* This includes all data types, objects, and functions.
Global variables and functions can be overwritten by other scripts.
Use local variables instead, and learn how to use closures. */

console.log("---2) Always Declare Local Variables---");
/* All variables used in a function should be declared as local variables. */

console.log("---3) Declarations on Top---");
/* It is a good coding practice to put all declarations at the top of each script or function. */

console.log("---4) Initialize Variables---");
/*
It is a good coding practice to initialize variables when you declare them.
Declare and initiate at the beginning
let firstName = "",
let lastName = "",
let price = 0,
let discount = 0,
let fullPrice = 0,
const myArray = [],
const myObject = {};
*/

console.log("---5) Declarations on Top---");
/* It is a good coding practice to put all declarations at the top of each script or function. */

console.log("---6) Declare Objects and Arrays with const---");
/* Declaring objects with const will prevent any accidential change of type: 
let car = {type:"Fiat", model:"500", color:"white"};
car = "Fiat";      // Changes object to string */

console.log("---7) Don't Use new Object()---");
/* Use "" instead of new String()
Use 0 instead of new Number()
Use false instead of new Boolean()
Use {} instead of new Object()
Use [] instead of new Array()
Use /()/ instead of new RegExp()
Use function (){} instead of new Function() */

console.log("---8) Beware of Automatic Type Conversions---");
/*Beware that numbers can accidentally be converted to strings or NaN (Not a Number). When doing mathematical operations, JavaScript can convert numbers to strings: 
let x = 5 + 7;       // x.valueOf() is 12,  typeof x is a number
let x = 5 + "7";     // x.valueOf() is 57,  typeof x is a string
let x = "5" + 7;     // x.valueOf() is 57,  typeof x is a string
let x = 5 - 7;       // x.valueOf() is -2,  typeof x is a number
let x = 5 - "7";     // x.valueOf() is -2,  typeof x is a number
let x = "5" - 7;     // x.valueOf() is -2,  typeof x is a number
let x = 5 - "x";     // x.valueOf() is NaN, typeof x is a number 
Subtracting a string from a string, does not generate an error but returns NaN (Not a Number).  Example
"Hello" - "Dolly"    // returns NaN */

console.log("---9) Use === Comparison---");
/* The == comparison operator always converts (to matching types) before comparison.
The === operator forces comparison of values and type:
0 == "";        // true
1 == "1";       // true
1 == true;      // true

0 === "";       // false
1 === "1";      // false
1 === true;     // false
*/

console.log("---10) Use Parameter Defaults---");
/* If a function is called with a missing argument, the value of the missing argument is set to undefined.
Undefined values can break your code. It is a good habit to assign default values to arguments.
*/
function myFunction(x, y) {
  if (y === undefined) {
    y = 0;
  } return x * y;
}
console.log(myFunction(4));


console.log("---11) End Your Switches with Defaults---");
/* Always end your switch statements with a default. Even if you think there is no need for it. */

console.log("---12) Avoid Number, String, and Boolean as Objects---");
/* Always treat numbers, strings, or booleans as primitive values. Not as objects. Declaring these types as objects, slows down execution speed, and produces nasty side effects: 
*/
let x = "John";             
let y = new String("John");
console.log(x === y); // is false because x is a string and y is an object.
// arba
let x1 = new String("John");             
let y1 = new String("John");
console.log(x1 == y1); // is false because you cannot compare objects.

console.log("---13) Avoid Using eval()---");
/* The eval() function is used to run text as code. In almost all cases, it should not be necessary to use it.
Because it allows arbitrary code to be run, it also represents a security problem.*/
