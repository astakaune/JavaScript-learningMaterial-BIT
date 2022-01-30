console.log(" ");
console.log("-------Object PROTOTYPES------");
// Only modify your own prototypes. Never modify the prototypes of standard JavaScript objects.
console.log("-------Prototype Inheritance------");
/* All JavaScript objects inherit properties and methods from a prototype.
	Date objects inherit from Date.prototype
	Array objects inherit from Array.prototype
	Person objects inherit from Person.prototype
The Object.prototype is on the top of the prototype inheritance chain:
Date objects, Array objects, and Person objects inherit from Object.prototype.
*/

console.log("-------Adding prototype Property-----");
// The JS prototype property allows you to add new properties to object constructors:
function Person(first, last, age, eyecolor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";
const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather.nationality);
console.log(Person);

console.log(" ");
console.log("-------Adding prototype Method()-----");
// The JavaScript prototype property also allows you to add new methods to objects constructors:
function Person2(first, last, age, eyecolor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyecolor;
}
Person2.prototype.name = function () {
	return this.firstName + " " + this.lastName;
};
const myFather2 = new Person2("John", "Doe", 50, "blue");
console.log(myFather2.name());
