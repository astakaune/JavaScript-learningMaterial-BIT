console.log(" ");
console.log("-------Function CALL------");
/* With the call() method, you can write a method that can be used on different objects. */
console.log("---Function is method---");
/* In JS all functions are object methods.
If a function is not a method of a JS object, it is a function of the global object.
The example below creates an object with 3 properties, firstName, lastName, fullName.
*/
const obj1 = {
	firstName: "Asta",
	lastName: "Mili",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
console.log(obj1.fullName());

console.log(" ");
console.log("---this Keyword---");
/* In a function definition, this refers to the "owner" of the function. In the example above, this is the person object that "owns" the fullName function. In other words, this.firstName means the firstName property of this object.*/

console.log(" ");
console.log("---call() Method---");
/* The call() method is a predefined JS method. It can be used to invoke (call) a method with an owner object as an argument (parameter).
With call(), an object can use a method belonging to another object.
This example calls the fullName method of person, using it on person1: */
const person = {
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
const person1 = {
	firstName: "Asta",
	lastName: "Mili",
};
const person2 = {
	firstName: "Rasa",
	lastName: "Giedra",
};
console.log(person.fullName.call(person1)); //Asta Mili
console.log(person.fullName.call(person2)); //Rasa Giedra

console.log(" ");
console.log("---call() Method with arguments---");
// The call() method can accept arguments:
const person00 = {
	fullName: function (city, country, year) {
		return (
			this.firstName +
			" " +
			this.lastName +
			" from " +
			city +
			"," +
			country +
			", year: " +
			year
		);
	},
};
const person11 = {
	firstName: "John",
	lastName: "Doe",
};
console.log(person00.fullName.call(person11, "Kaunas", "LT", 2021));






