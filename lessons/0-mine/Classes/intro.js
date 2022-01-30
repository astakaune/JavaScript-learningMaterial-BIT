console.log(" ");
console.log("-------CLASSES INTRO------");

console.log(" ");
console.log("-------Syntax-----");
/* Use the keyword class to create a class.
A JS class is not an object.
It is a template for JS objects.
Always add a method named constructor().
Syntax:
class ClassName {
  constructor() { ... }
}
The example creates a class named "Car".
The class has two initial properties: "name" and "year".*/
console.log(this);
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}
console.log(typeof Car);
console.log(Car);
console.log(typeof Car.name, Car.name);

console.log(" ");
console.log("-----Using a Class-----");
// When you have a class, you can use the class to create objects:
// The example uses the Car class to create two Car objects.
// The constructor method is called automatically when a new object is created.
let myCar1 = new Car("Ford", 2020);
console.log(myCar1);
let myCar2 = new Car("Audi", 2021);
console.log(myCar2);

console.log(" ");
console.log("-----Constructor Method-----");
/* The constructor method is a special method:
	- It has to have the exact name "constructor"
	- It is executed automatically when a new object is created
	- It is used to initialize object properties
	- If you do not define a constructor method, JS will add an empty constructor method.*/

console.log(" ");
console.log("-----Class Methods-----");
/* Class methods are created with the same syntax as object methods.
	- Use the keyword class to create a class.
	- Always add a constructor() method.
	- Then add any number of methods.
Syntax:
class ClassName {
  constructor() { ... }
  method_1() { ... }
  method_2() { ... }
  method_3() { ... }
}

Create a Class method named "age", that returns the Car age:*/
class Car1 {
	constructor(model, year) {
		this.model = model;
		this.year = year;
	}
	age() {
		let date = new Date();
		return date.getFullYear() - this.year;
	}
}
let car11 = new Car1("Toyota", 2015);
console.log("My car is", car11.age(), "years old.");

// You can send parameters to Class methods:
class Car2 {
	constructor(model, year) {
		this.model = model;
		this.year = year;
	}
	age(x) {
		return x - this.year;
	}
}
let date = new Date();
let year = date.getFullYear();
let car22 = new Car2("Audi", 2012);
console.log("My car is", car22.age(year), "years old.");

console.log(" ");
console.log("-----'use strict'-----");
/* The syntax in classes must be written in "strict mode".
You will get an error if you do not follow the "strict mode" rules.

ex1. In "strict mode" you will get an error if you use a variable without declaring it:*/
class Car3 {
	constructor(model, year) {
		this.model = model;
		this.year = year;
	}
	age() {
		"use strict";
		let date = new Date(); //will work only with "let or const";
		return date.getFullYear() - this.year;
	}
}
console.log(date);
