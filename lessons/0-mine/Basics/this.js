console.log(" ");
console.log("-------Object Methods------");
// Methods are actions that can be performed on objects.
// An object method is an object property containing a function definition.
const person = {
	// property: atribute;
	// name: value;
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
console.log(typeof person, person);
console.log(person.fullName());

console.log(" ");
console.log("-------this------");
/* The JS this keyword refers to the object it belongs to.
It has different values depending on where it is used:
	In a method, this refers to the owner object - the person object that "owns" the fullName function, ex: In other words, this.firstName means the firstName property of this object.
	Alone, this refers to the global object.
	In a function, this refers to the global object - "owner" of the function.
	In a function, in strict mode, this is undefined.
	In an event, this refers to the element that received the event.
	Methods like call(), and apply() can refer this to any object.
*/
console.log("-------this in a method()------");
/* In an object method, this refers to the "owner" of the method.
In the example, this refers to the person object.
The person object is the owner of the fullName method.
fullName : function() {
  return this.firstName + " " + this.lastName;
}
*/
console.log("-------this alone------");
/*When used alone, the owner is the Global object, so this refers to the Global object.
In a browser window the Global object is [object Window]:
Example: let x = this;

In strict mode, when used alone, this also refers to the Global object [object Window]:
Example: 
"use strict";
let x = this;
*/
console.log("-----this in a function(Default)------");
/*
In a JS function, the owner of the function is the default binding for this.
So, in a function, this refers to the Global object [object Window].
Example:
function myFunction() {
  return this;
}
*/
console.log("-------this in Event Handlers------");
/*
In HTML event handlers, this refers to the HTML element that received the event:
Example:
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>
*/
console.log("-------Object Method Binding------");
// here this is the person object (The person object is the "owner" of the function)
// [object Object]:
console.log("----ex1----");
const person1 = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	myFunction: function () {
		return this;
	},
};
console.log(typeof person1.myFunction(), person1.myFunction()); //[object Object]
console.log(typeof person1, person1); // [object Object]
console.log(typeof this, this); //[object Window]

console.log("----ex2----");
// In other words: this.firstName means the firstName property of this (person) object.
const person2 = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
console.log(person2);
console.log(person2.fullName());
console.log(this.firstName); //undefined

console.log(" ");
console.log("-------Explicit Function Binding------");
/* The call() and apply() methods are predefined JS methods.
They can both be used to call an object method with another object as argument. */

console.log("----ex3----");
// when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1:
const person11 = {
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
// console.log(person11);
// console.log(person11.fullName());
const person12 = {
	firstName: "John",
	lastName: "Doe",
};
console.log(person12);
console.log(person11.fullName.call(person12)); // Will return "John Doe"

