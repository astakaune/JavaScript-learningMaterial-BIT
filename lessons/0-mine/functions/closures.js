console.log(" ");
console.log("-------Function CLOSURES------");
/*JS variables can belong to the local or global scope.
Global variables can be made local (private) with closures. */

console.log(" ");
console.log("-------Global Variables-----");
// A function can access all variables defined inside the function, like this:
function myFunctionA() {
	let a = 4; //a is local variable
	return a * a;
}
console.log(myFunctionA());

// But a function can also access variables defined outside the function, like this:
let b = 4; // b is global variable
function myFunctionB() {
	return b * b;
}
console.log(myFunctionB());

/* a is a global variable. In a web page, global variables belong to the window object.
Global variables can be used (and changed) by all scripts in the page (and in the window).
b is a local variable. A local variable can only be used inside the function where it is defined. It is hidden from other functions and other scripting code. Global and local variables with the same name are different variables. Modifying one, does not modify the other.
Variables created without a declaration keyword (var, let, or const) are always global, even if they are created inside a function.
*/
myFunctionC();
document.getElementById("demo").innerHTML = c * c;
function myFunctionC() {
	c = 4;
}
console.log(c);

console.log(" ");
console.log("-------Variable Lifetime-----");
/*Global variables live until the page is discarded, like when you navigate to another page or close the window.
Local variables have short lives. They are created when the function is invoked, and deleted when the function is finished.*/

console.log(" ");
console.log("------A Counter Dilemma-----");
// Suppose you want to use a variable for counting something, and you want this counter to be available to all functions.
// You could use a global variable, and a function to increase the counter:
// let counter = 0;
function add() {
	let counter = 0;
	counter += 1;
	return counter;
}
// console.log('The counter is:', counter);
add();
add();
add();
function myFunctionAdd() {
	document.getElementById('demo1').innerHTML = add();
}