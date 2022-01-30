console.log(" ");
console.log("-------FUNCTION PARAMETERS------");
/* A JS function does not perform any checking on parameter values (arguments). 
Syntax:
function functionName(parameter1, parameter2, parameter3) {
  // code to be executed
}
Function parameters are the names listed in the function definition.
Function arguments are the real values of parameters passed to (and received by) the function.*/
console.log("-------Parameters-----");
/* JS function definitions do not specify data types for parameters.
JS functions do not perform type checking on the passed arguments.
JS functions do not check the number of arguments received.
arguments.length specify the quantity of arguments enetered.
If a function is called with missing arguments (less than declared), the missing values are set to undefined (NaN)
Sometimes this is acceptable, but sometimes it is better to assign a default value to the parameter with : 
if (y === undefined) {
		y = 2;
	}
*/
console.log("-------ex1-----");
function manoF(x, y) {
	return x * y;
}
console.log(manoF()); //NaN
console.log(manoF(2)); //NaN
console.log(manoF(2, 3)); //6

console.log("-------ex2-----");
function manoFF(x, y) {
	if (y === undefined) {
		y = 3;
	}
	if (x === undefined) {
		x = 2;
	}
	return x * y;
}
console.log(manoFF()); //6
console.log(manoFF(2)); //6
console.log(manoFF(2, 3)); //6

console.log(" ");
console.log("-------Arguments Object------");
/* JS functions have a built-in object called the arguments object.
If a function is called with too many arguments (more than declared), these arguments can be reached using the arguments object.
The argument object contains an array of the arguments used when the function was called (invoked).
This way you can simply use a function to find (for instance) the highest value in a list of numbers Or create a function to sum all input values: */
console.log("-------ex1-----");
// use a function to find the highest value in a list of numbers
let findM1 = findMax1(1, 2, 16, -8, 1, 11, -5);
function findMax1() {
	let max = -Infinity;
	for (let i = 0; i < arguments.length; i++) {
		if (arguments[i] > max) {
			max = arguments[i];
			console.log("max", max);
		}
	}
	return max;
}
console.log("findMax1(findM)", findMax1(findM1));
console.log("findM", findM1);
console.log("findMax1()", findMax1());
document.getElementById("demo").innerHTML = findM1;

console.log("-------ex2-----");
// use a function to find the lowest value in a list of numbers
let findM = findMin(0, 1, 2, 3, -9);
function findMin() {
	for (let i = 0; i < arguments.length; i++) {
		min = Infinity;
		if (arguments[i] < min) {
			min = arguments[i];
		}
	}
	return min;
}
console.log(findMin(findM));
document.getElementById("demo1").innerHTML = findM;

console.log("-------ex3-----");
// Or create a function to sum all input values:
const sumA = sumAll(0, 1, 2, 3, -9);
function sumAll() {
	let sum = 0;
	for (i = 0; i < arguments.length; i++) {
		sum += arguments[i];
		// console.log('sum cikle', sum);
	}
	return sum;
}
console.log(sumAll(sumA));


console.log(" ");
console.log("-------Arguments are Passed by Value------");
/* The parameters, in a function call, are the function's arguments.
JS arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function. */
console.log("-------Objects are Passed by Reference------");
/* In JS, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.
*/
