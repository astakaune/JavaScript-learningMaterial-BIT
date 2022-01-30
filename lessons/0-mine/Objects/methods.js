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
console.log(" ");
console.log("-------JS Methods()------");
/* JS methods are actions that can be performed on objects.
A JS method is a property containing a function definition.
Methods are functions stored as object properties.
Property name:	Attribute value
fullName:	function() {return this.firstName + " " + this.lastName;}
*/
console.log("-------Accessing Methods------");
/* Method accessing syntax: objectName.methodName()
You will typically describe fullName() as a method of the person object, and fullName as a property.
The fullName property will execute (as a function) when it is invoked with ().
This example accesses the fullName() method of a person object:
Example
name = person.fullName(); */
const person1 = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
console.log("Person's name is:", person1.fullName());
console.log("Person's name is:", person1.fullName);


console.log(" ");
console.log("-------Adding Methods------");
// Adding a new method to an object is easy:
const person2 = {
	firstName: "John",
	lastName: "Doe",
	id: 5566
  };
person2.fullName = function () {
	return this.firstName + " " + this.lastName;
};
console.log(person2);
console.log(person2.fullName());


console.log(" ");
console.log("-----Using Built-In Methods------");
// This example uses the toUpperCase() method of the String object, to convert a text to uppercase:
const x = "Hello World!";
const x1 = x.toUpperCase();
const x2 = x1.toLowerCase();
console.log(typeof x, x);
console.log(typeof x1, x1);
console.log(typeof x2,x2);

console.log(" ");
console.log("---ex2---");
const person3 = {
	firstName: "John",
	lastName: "Doe",
	id: 5566,
  };
person3.name = function() {
	// return this.firstName.toUpperCase() + " " + this.lastName;
	return (this.firstName.toUpperCase() + " " + this.lastName).toUpperCase();
}
console.log(person3.name());

