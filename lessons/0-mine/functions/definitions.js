console.log(" ");
console.log("-------FUNCTION DEFINITIONS------");
/* 
JS functions are defined with the function keyword.
You can use a function declaration or a function expression.
*/

console.log("-------Declarations------");
/* declaration syntax:
function functionName(parameters) {
  // code to be executed
}
Declared functions are not executed immediately.
They will be executed later, when they are invoked (called upon).
*/
function sum(a, b) {
	return a + b;
}
console.log(sum);
console.log(sum());
console.log(sum(2, 3));

console.log(" ");
console.log("-------Expressions------");
// A JavaScript function can also be defined using an expression.
// A function expression can be stored in a variable:
const sum1 = function (a, b) {
	return a + b;
};
console.log(sum1(2, 5));

// After a function expression has been stored in a variable, the variable can be used as a function:
// The function above is actually an anonymous function (a function without a name).
// Functions stored in variables do not need function names. They are always invoked (called) using the variable name.
const sum2 = function (a, b) {
	return a + b;
};
let z = sum2(2, 8);
console.log(z);

console.log(" ");
console.log("-------Function() Constructor------");
/* JS functions are defined with the function keyword.
Functions can also be defined with a built-in JS function constructor called Function().
Most of the time, you can avoid using the new keyword in JavaScript.
*/

console.log(" ");
console.log("-------Function Hoisting------");
// Hoisting applies to variable declarations and to function declarations.
// JavaScript functions can be called before they are declared:
// Functions defined using an expression are not hoisted.
console.log(myFunction(5));
function myFunction(y) {
	return y * y;
}

console.log(" ");
console.log("-------Self-Invoking Functions------");
/* Function expressions can be made "self-invoking".
A self-invoking expression is invoked (started) automatically, without being called.
Function expressions will execute automatically if the expression is followed by ().
You cannot self-invoke a function declaration.
You have to add parentheses around the function to indicate that it is a function expression:
*/
// The function above is actually an anonymous self-invoking function (function without name).
(function () {
	console.log("Hello! I called myself"); // I will invoke myself
})();

console.log(" ");
console.log("-------Using Functions as Values------");
// JavaScript functions can be used as values:
function myFunction(a, b) {
	return a * b;
}
let x = myFunction(4, 3);
console.log(x);

// JavaScript functions can be used in expressions:
let x2 = myFunction(4, 3) * 2;
console.log(x2);

console.log(" ");
console.log("-------Functions are Objects------");
/* A function defined as the property of an object, is called a method to the object.
A function designed to create new objects, is called an object constructor.

The typeof operator in JavaScript returns "function" for functions.
But, JavaScript functions can best be described as objects.
JavaScript functions have both properties and methods.
The arguments.length property returns the number of arguments received when the function was invoked:
*/
function myFunction(a, b) {
	return arguments.length;
}
console.log(myFunction(2, 10)); // 3

//   The toString() method returns the function as a string:
function sum3(a, b, c) {
	return a + b + c;
}
console.log(typeof sum3(1, 1, 1), sum3(1, 1, 1));
console.log(typeof sum3(1, 2, 3).toString(), sum3(1, 2, 3).toString());


console.log(" ");
console.log("-------Arrow Functions------");
// paprasta funkcija
var x3 = function (x, y) {
	return x * y;
};
console.log(x3(2, 5));
// arrow funkcija
const x4 = (x, y) => {return x * y};
console.log(x4(5, 4));



