console.log(" ");
console.log("-------Object ACCESSORS------");
console.log("-----Getters and Setters-----");
/* Getters and setters allow you to define Object Accessors (Computed Properties).
Why Using Getters and Setters?
	It gives simpler syntax
	It allows equal syntax for properties and methods
	It can secure better data quality
	It is useful for doing things behind-the-scenes
*/
console.log("---------1) Getter--------");
// JavaScript Getter (The get Keyword)
// This example uses a lang property to get the value of the language property.
const person = {
	firstName: "John",
	lastName: "Doe",
	language: "en",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
	get lang() {
		return this.language;
	},
};
console.log(person);
console.log(typeof person.lang, person.lang);

console.log("---------2) Setter--------");
// JavaScript Setter (The set Keyword)
// This example uses a lang property to set the value of the language property.
const person2 = {
	// Create an object:
	firstName: "John",
	lastName: "Doe",
	language: "NO",
	set lang(value) {
		this.language = value;
	},
};
console.log(person2);
console.log(person2.language); // Display data from the object:

person2.lang = "EN"; // Set a property using set:

console.log(person2);
console.log(person2.language); // Display data from the object:

console.log(" ");
console.log("---------Function or Getter?--------");
// What is the differences between these two examples?
console.log("------ex1---");
const person31 = {
	firstName: "John",
	lastName: "Doe",
	fullName: function () {
		return this.firstName + " " + this.lastName;
	},
};
// Display data from the object using a method:
// access fullName as a function: person.fullName().
console.log(person.fullName());

console.log("------ex2---");
const person32 = {
	firstName: "John",
	lastName: "Doe",
	get fullName() {
		return this.firstName + " " + this.lastName;
	},
};
// Display data from the object using a getter:
//  access fullName as a property: person.fullName
console.log(person.fullName);

console.log(" ");
console.log("---------Data Quality--------");
console.log("------ex1---");
// Using the lang property, returns the value of the language property in upper case:
const person41 = {
	firstName: "John",
	lastName: "Doe",
	language: "en",
	get lang() {
		return this.language.toUpperCase();
	},
};
console.log(person41);
console.log(person41.language); //en
console.log(person41.lang); //EN
console.log(person41);

console.log("------ex2---");
// Using the lang property, stores an upper case value in the language property:
const person42 = {
	firstName: "John",
	lastName: "Doe",
	language: "no",
	set lang(lang) {
		this.language = lang.toUpperCase();
	},
};
console.log(person42);
console.log(person42.language); //no
person42.lang = "no";
console.log(person42.language); //NO
console.log(person42);

console.log(" ");
console.log("------Object.defineProperty()-----");
// The Object.defineProperty() method can also be used to add Getters and Setters:
// Define object
const obj = { counter: 0 };
console.log(obj);
// Define setters
Object.defineProperty(obj, "reset", {
	get: function () {
		this.counter = 0;
	},
});
Object.defineProperty(obj, "increment", {
	get: function () {
		this.counter++;
	},
});
Object.defineProperty(obj, "decrement", {
	get: function () {
		this.counter--;
	},
});
Object.defineProperty(obj, "add", {
	set: function (value) {
		this.counter += value;
	},
});
Object.defineProperty(obj, "substract", {
	set: function (value) {
		this.counter -= value;
	},
});
// Play with the counter:
obj.add = 5;
console.log(obj.counter);
obj.substract = 2;
console.log(obj.counter);
obj.increment;
obj.increment;
obj.increment;
console.log(obj.counter);
obj.decrement;
console.log(obj.counter);
obj.reset;
console.log(obj.counter);




