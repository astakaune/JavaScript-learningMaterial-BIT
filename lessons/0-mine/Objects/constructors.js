console.log(" ");
console.log("-------Object CONSTRUCTORS------");
/* The examples from the previous chapters can create only single objects.
Sometimes we need a "blueprint" for creating many objects of the same "type".
The way to create an "object type", is to use an object constructor function. 
It is considered good practice to name constructor functions with an upper-case first letter.
*/
// In the example function Person() is an object constructor function.
function Person(first, last, age, eye) {
	// Constructor function for Person objects
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
}
const myFather = new Person("Tom", "Mili", 72, "lightBlue"); // Create a Person object
console.log("My father is:", myFather.age); // Display age

console.log(" ");
console.log("----Types (Blueprints) (Classes)--");
// Objects of the same type are created by calling the constructor function with the new keyword:
const myMother = new Person("Ann", "Mili", 70, "blue");
console.log("My mothers eyes are: ", myMother.eyeColor);
const mySister = new Person("Viki", "Kuci", 44, "lightBlue");

console.log(" ");
console.log("-----------this Keyword----------");
/* In JS, the thing called this is the object that "owns" the code.
The value of this, when used in an object, is the object itself.
In a constructor function this does not have a value. It is a substitute for the new object. The value of this will become the new object when a new object is created.
Note that this is not a variable. It is a keyword. You cannot change the value of this.*/

console.log(" ");
console.log("---Adding a METHOD to OBJECT---");
// The method will be added to myFather. Not to myMother. (Not to any other person objects).
myFather.fullName = function () {
	return this.firstName + " " + this.lastName;
};
console.log(myFather);
console.log(myFather.fullName());

console.log(" ");
console.log("---Adding a PROPERTY to OBJECT----");
// Adding a new property to an existing object is easy:
// The property will be added to myFather. Not to myMother. (Not to any other person objects).
myFather.height = 170;
console.log(myFather);
myMother.nationality = "LT";
console.log(myMother);
mySister.hairColor = "blond";
console.log(mySister);
console.log(Person);

console.log(" ");
console.log("------Adding a PROPERTY to CONSTRUCTOR-------");
/* You cannot add a new property to an object constructor the same way you add a new property to an existing object. To add a new property to a constructor, you must add it to the constructor function: */
function Person2(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eye;
	this.nationality = "LT"; //This way object properties can have default values.
}
const myFather2 = new Person2("Tom", "Mili", 72, "lightBlue"); // Create a Person2 object
const myMother2 = new Person2("Ann", "Mili", 70, "blue");
const mySister2 = new Person2("Viki", "Kuci", 44, "lightBlue");
// Display nationality
console.log(myFather2.age);
console.log(myFather2.nationality);
console.log(myMother2.nationality);

console.log(" ");
console.log("------Adding a METHOD to CONSTRUCTOR-------");
// Your constructor function can also define methods:
// Adding methods to an object constructor must be done inside the constructor function:
// The changeName() function assigns the value of name to the person's lastName property.
function Person3(first, last, age, eyecolor) { // Constructor function for Person3 objects
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyecolor;
	this.changeName = function (name) {
		this.lastName = name;
	};
}
const myMother3 = new Person3("Sally", "Rally", 48, "green"); // Create a Person object
console.log(myMother3.lastName);
myMother3.changeName("Doe"); // Change last name
console.log(myMother3.lastName); // Display last name


console.log(" ");
console.log("-----Built-inConstructors-----");
/* JS has built-in constructors for native objects:
	new String()    // A new String object - Use string literals "" instead
	new Number()    // A new Number object - Use number literals 50 instead
	new Boolean()   // A new Boolean object - Use boolean literals true / false instead
	new Object()    // A new Object object - Use object literals {} instead
	new Array()     // A new Array object - Use array literals [] instead
	new RegExp()    // A new RegExp object - Use pattern literals /()/ instead
	new Function()  // A new Function object - Use function expressions () {} instead
	new Date()      // A new Date object
There is no need to use new String(), new Number(), new Boolean(), new Array(), and new RegExp()
Use literals instead like: myArray = []
The new keyword cannot be used on Math. Math is a global object.
*/

