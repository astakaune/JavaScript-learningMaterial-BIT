console.log("---JavaScript statements---");
console.log(" ");
console.log("---Function()---");
/* function statement declares a function. A declared function is "saved for later use", and will be executed later, when it is invoked (called). In JS, functions are objects, and they have both properties and methods.
A function can also be defined using an expression.
Tip: Use the return statement to return a value from the function.
Syntax: 
function functionName(parameter, parameter2, etc.) {
  code to be executed
}
functionName(argument1, argument2, etc.);
Inside the function, the arguments are used as local variables.
Note: If a function is called with a missing argument, the value of the missing argument is set to undefined
*/
console.log("---ex1---");
function myFunction() {
    return Math.PI;
}
console.log(Math.round(myFunction()), typeof Math.round(myFunction()));

console.log("---ex2---");
function myFunction2(a, b) {
    return a * b;
}
console.log(myFunction2(2, 3));
console.log(myFunction2(5, 5));

console.log("---ex3---");
function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}
console.log(Math.round(toCelsius(110)));
console.log(Math.round(toCelsius(80)));

console.log("---ex4---");
const text1 = "The temperature is " + Math.round(toCelsius(32)) + " Centigrade";
console.log(text1);

console.log("---ex5---");





