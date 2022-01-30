console.log(" ");
console.log("-------Function Invocation------");
// The code inside a JS function will execute when "something" invokes it.
console.log("-------Invoking:------");
/*  The code inside a function is not executed when the function is defined. The code inside a function is executed when the function is invoked. It is common to use the term "call a function" instead of "invoke a function". It is also common to say "call upon a function", "start a function", or "execute a function". JS function can be invoked without being called. */

console.log("----1) Invoking a Function as a Function--");
/*The function below does not belong to any object. But in JS there is always a default global object.
In HTML the default global object is the HTML page itself, so the function above "belongs" to the HTML page.
In a browser the page object is the browser window. The function above automatically becomes a window function.
myFunction() and window.myFunction() is the same function:
This is a common way to invoke a JS function, but not a very good practice. Global variables, methods, or functions can easily create name conflicts and bugs in the global object.*/
function myFunction(a, b) {
	return a + b;
}
document.getElementById("demo").innerHTML = "Atsakymas1: " + myFunction(2, 8);
document.getElementById("demo1").innerHTML =
	"Atsakymas2: " + window.myFunction(5, 15);
console.log("Atsakymas1:", myFunction(2, 8));
console.log("Atsakymas2:", myFunction(5, 15));

console.log(" ");
console.log("-------THIS Keyword------");
/* In JS, the thing called this, is the object that "owns" the current code. The value of this, when used in a function, is the object that "owns" the function. Note that this is not a variable. It is a keyword. You cannot change the value of this. */

console.log(" ");
console.log("-------The Global Object------");
/* When a function is called without an owner object, the value of this becomes the global object. In a web browser the global object is the browser window. Invoking a function as a global function, causes the value of this to be the global object. Using the window object as a variable can easily crash your program.
This example returns the window object as the value of this:*/
const myFunc3 = myFunction3();
function myFunction3() {
	return this;
}
console.log(myFunc3);
console.log(myFunction3(myFunc3));
document.getElementById("demo3").innerHTML = myFunc3;

console.log(" ");
console.log("----2) Invoking a Function as a Method------");
/* In JS you can define functions as object methods.
The thing called this, is the object that "owns" the JavaScript code. In this case the value of this is myObject.
The fullName method is a function. The function belongs to the object. myObject is the owner of the function.*/
// The example creates an object (myObject), with two properties (firstName and lastName), and a method (fullName):
const myObject = {
	firstName: "Asta",
	lastName: "Mili",
	fullName: function myFunction4() {
		return this.firstName + " " + this.lastName;
	},
};
console.log(myObject);
console.log(myObject.firstName);
console.log(myObject.fullName()); //function invoking

// Invoking a function as an object method, causes the value of this to be the object itself.
const myObject2 = {
	firstName: "Asta",
	lastName: "Mili",
	fullName: function () {
		return this;
	},
};
console.log(myObject2.fullName());
document.getElementById("demo4").innerHtml = myObject2.fullName();

console.log(" ");
console.log("----3) Invoking a Function with a Function Constructor--");
/* If a function invocation is preceded with the new keyword, it is a constructor invocation. It looks like you create a new function, but since JS functions are objects you actually create a new object:
A constructor invocation creates a new object. The new object inherits the properties and methods from its constructor.
The this keyword in the constructor does not have a value.
The value of this will be the new object created when the function is invoked.
*/
function myFunction5(arg1, arg2) {
	// function constructor:
	this.firsName = arg1;
	this.lastName = arg2;
}
const newObject = new myFunction5("Asta", "Mili"); // creating new object
console.log(newObject);
console.log(myFunction5);

console.log(newObject.firsName); //Asta
