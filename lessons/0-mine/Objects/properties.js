console.log(" ");
console.log("-------Object Properties------");
/*
Properties are the most important part of any JavaScript object.
The named values, in JS objects, are called properties. name-property : value.
Object properties can be both primitive values, other objects, and functions.
A JS object is a collection of unordered properties.
Properties can usually be changed, added, and deleted, but some are read only.
*/
console.log("-------Accessing Properties------");
/* The syntax for accessing the property of an object is. */
const person5 = { name: "Johnny", surname: "Ouje", age: 55 };
console.log(person5);

console.log("------way1------");
// 1) objectName.property // person.age
console.log(person5.name);

console.log("------way2------");
// 2) objectName["property"]  // person["age"]
console.log(person5["surname"]);

console.log("------way3------");
// 3) objectName[expression]   // x = "age"; person[x]
const y = "age";
console.log(person5[y]);

console.log(" ");
console.log(person5.name + " ", "is ", person5["age"], " old.");
console.log(
	person5.age,
	"years old",
	person5.name,
	"has ",
	person5.surname,
	"surname."
);

console.log(" ");
console.log("-------for...in Loop------");
/*
The JS for...in statement loops through the properties of an object.
The block of code inside of the for...in loop will be executed once for each PROPERTY.
Syntax:
for (let variable in object) {
  // code to be executed;
}
*/
console.log("------ex1------");
// Looping through the properties of an object:
const person6 = { name: "Victoria", surname: "Secret", age: 40 };
console.log(person6);

let properties;
for (let x in person6) {
	properties += person6[x];
	console.log(x);
}

console.log(" ");
console.log("-------Adding New Properties------");
// You can add new properties to an existing object by simply giving it a value.
person6.nationality = "English";
console.log(person6);
person6["height"] = 177;
console.log(person6);

console.log(" ");
console.log("-------Deleting Properties------");
/* The delete keyword deletes a property from an object:
The delete keyword deletes both the value of the property and the property itself.
After deletion, the property cannot be used before it is added back again.
The delete operator is designed to be used on object properties. It has no effect on variables or functions. */
const person7 = {
	firstName: "John",
	lastName: "Doe",
	age: 50,
	eyeColor: "blue",
};
console.log(person7);
delete person7.eyeColor;
console.log(person7);
delete person7["age"];
console.log(person7);

console.log(" ");
console.log("-------Nested Objects------");
// Values in an object can be another object:
const objA = { vegie: "agurkas", fruit: "apelsinas", berry: "agrastas" };
const objB = { vegie: "burokėlis", fruit: "bananas", berry: "bruknė" };

const objABC = {
	propertyA: objA,
	propertyB: objB,
	propertyC: { vegie: "cukinija", fruit: "citrina", berry: "blueberry" },
};
console.log(objABC);
// You can access nested objects using the dot notation or the bracket notation:
// in several ways:
console.log(objABC["propertyA"]["berry"]);
console.log(objABC.propertyB["fruit"]);
console.log(objABC.propertyC.vegie);

console.log(" ");
console.log("-----Nested Arrays and Objects----");
// Values in objects can be arrays, and values in arrays can be objects:
console.log("-----ex1----");
const arrayDM = [
	{ vegie: "durnarope", fruit: "dygioji slyva", berry: "datulė" },
	{ vegie: "morka", fruit: "mango", berry: "mėlynė" },
];
objABC.propertyDM = arrayDM;
console.log(objABC);

// To access arrays inside arrays, use a for-in loop for each array:
console.log(" ");
console.log("-----ex2----");
const objABCDM = {
	propertyA: { vegie: "agurkas", fruit: "apelsinas", berry: "agrastas" },
	propertyB: { vegie: "burokėlis", fruit: "bananas", berry: "bruknė" },
	propertyC: { vegie: "cukinija", fruit: "citrina", berry: "blueberry" },
	propertyDM: [
		{ vegie: "durnarope", fruit: "dygioji slyva", berry: "datulė" },
		{ vegie: "morka", fruit: "mango", berry: "mėlynė" },
	],
};
console.log(objABCDM);

let prop1 = "";
for (let i in objABCDM.propertyDM) {
	prop1 += objABCDM.propertyDM[i].vegie + ", ";
}
console.log(prop1);

console.log(" ");
console.log("-----ex3----");
const myObj = {
	name: "John",
	age: 30,
	cars: [
		{ name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
		{ name: "BMW", models: ["320", "X3", "X5"] },
		{ name: "Fiat", models: ["500", "Panda"] },
	],
};
console.log(myObj);

let x1 = "";
for (let i in myObj.cars) {
	x1 += myObj.cars[i].name + ": ";
	for (let j in myObj.cars[i].models) {
		x1 += myObj.cars[i].models[j] + ", ";
	}
}
console.log(x1);

console.log(" ");
console.log("-----Property Attributes----");
/* All properties have a name and a value.
Property's attributes are: value, enumerable, configurable, and writable.
These attributes define how the property can be accessed (is it readable?, is it writable?)
In JS, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).
*/

console.log(" ");
console.log("-----Prototype Properties----");
/* JS objects inherit the properties of their prototype.
The delete keyword does not delete inherited properties, 
but if you delete a prototype property, it will affect all objects inherited from the prototype.
*/
