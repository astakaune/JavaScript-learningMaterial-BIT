console.log(" ");
console.log("---OBJECT METHODS---");

console.log("------Managing objects------");

const person = {
	firstName: "John",
	lastName: "Doe",
	language: "EN",
};
console.log(person);

// Adding or changing an object property: Object.defineProperty(object, "property", {descriptor- value: "x"});
console.log(
	"2",
	Object.defineProperty(person, "firstName", { value: "Johnny" })
); // Change Property

// Returns all properties as an array: Object.getOwnPropertyNames(object);
console.log("3", Object.getOwnPropertyNames(person));

// Accessing Properties
console.log("4", Object.getOwnPropertyDescriptor(person, "firstName"));

// Returns all properties as an array
console.log("5", Object.getOwnPropertyNames(person));

// Returns enumerable properties as an array
console.log("6", Object.keys(person));

// Accessing the prototype
console.log("7", Object.getPrototypeOf(person));

console.log(" ");
console.log("------Protecting Objects------");

const person2 = new Object();
person2.name = "James";
person2.surname = "Brown";
person2.age = 50;
console.log(person2);

// Prevents adding properties to an object
console.log("1", Object.preventExtensions(person2));

// Returns true if properties can be added to an object
console.log("2", Object.isExtensible(person2));

// Prevents changes of object properties (not values)
console.log("3", Object.seal(person2));

// Returns true if object is sealed
console.log("4", Object.isSealed(person2));

// Prevents any changes to an object
console.log("5", Object.freeze(person2));

// Returns true if object is frozen
console.log("6", Object.isFrozen(person2));

console.log(" ");
console.log("---Changing a Property Value---");
//Syntax: Object.defineProperty(object, property, {value : value})
const person3 = {
	firstName: "John",
	lastName: "Doe",
	language: "EN",
};
console.log(person3);
console.log(Object.defineProperty(person3, "lastName", { value: "Milin" }));

console.log(" ");
console.log("---Changing Meta Data---");
/*
ES5 allows the following property meta data to be changed:
  writable : true/false      // Property value can/not be changed
  enumerable : true/false    // Property can/not be enumerated
  configurable : true/false  // Property can/not be reconfigured

ES5 allows getters and setters to be changed:
  get: function() { return language } // Defining a getter
  set: function(value) { language = value } // Defining a setter
*/
const person4 = {
	firstName: "John",
	lastName: "Doe",
	language: "EN",
};
console.log(person4);
// This example makes language read-only:
Object.defineProperty(person4, "language", { writable: false });
// This example makes language not enumerable:
Object.defineProperty(person, "language", { enumerable: false });

console.log(" ");
console.log("---Listing All Properties---");
// This example list all properties of an object:
const person5 = {
	firstName: "John",
	lastName: "Doe",
	language: "EN",
};

console.log(Object.defineProperty(person5, "language", { enumerable: false })); // Change Property
console.log(Object.getOwnPropertyNames(person5)); //Display Properties Returns an array of props;

console.log(Object.keys(person5)); // Returns an array of enumerable properties
console.log(Object.defineProperty(person, "language", { enumerable: true }));
console.log(Object.keys(person5));

console.log(" ");
console.log("---Adding a Property---");
// This example adds a new property to an object:
Object.defineProperty(person5, "year", { value: 2008 });
console.log(person5);

console.log(" ");
console.log("---Adding Getters and Setters---");
const person6 = { 
  firstName: "John", 
  lastName: "Doe" 
};
console.log(person6);
Object.defineProperty(person6, "fullName", { // Define a getter
  get: function () {return this.firstName + " " + this.lastName;}
});
console.log(person6.fullName);

