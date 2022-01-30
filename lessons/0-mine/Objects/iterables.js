console.log(" ");
console.log("---Iterables---");
/* Objects that can be iterated over with for..of are called iterable.
Technically, iterables must implement the Symbol.iterator method.
Iteration - looping over a sequence of elements: over a String or an Array.
Iterables are iterable objects (like Arrays).
Iterables can be accessed with simple and efficient code.
Syntax: for (variable of iterable) {
  // code block to be executed
}*/
// This iterable returns never ending: 10,20,30,40,.... Everytime next() is called:
function myNumbers() { // Home Made Iterable
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value:n, done:false};
    }
  };
}
const n = myNumbers(); // Create Iterable
n.next(); // Returns 10
console.log(n.next());
n.next(); // Returns 20
n.next(); // Returns 30
console.log(n.next());

console.log(" ");
console.log("---Iterators---");
/* The iterator protocol defines how to produce a sequence of values from an object.
An object becomes an iterator when it implements a next() method.
The next() method must return an object with two properties:
  value (the next value) - returned by the iterator (Can be omitted if done is true).
  done (true or false) - true if the iterator has completed. false if the iterator has produced a new value.
*/

console.log(" ");
console.log("---Iterating over a String---");
console.log("---ex1---");
const string1 = "televizorius";
let stringNew = "";
for (let i of string1) {
	stringNew += i + " ";
}
console.log(string1);
console.log(stringNew);

console.log("---ex2---");
const myName = "KaunAsta";
let text = "";
for (const x of myName) {
	text += x + " . ";
}
console.log(text);
console.log(typeof text, typeof myName);
console.log(typeof x);

console.log(" ");
console.log("---Iterating over an Array---");
console.log("---ex1---");
const myArray = ["K", "a", "u", "n", "A", "s", "t", "a"];
let text2 = "";
for (const x of myArray) {
	text2 += x + " . ";
}
console.log(text2);
console.log(typeof myArray, typeof text2);

console.log("---ex2---");
const myArray2 = [
	"A",
	"s",
	" ",
	"t",
	"a",
	"v",
	"e",
	" ",
	"m",
	"y",
	"l",
	"i",
	"u",
];
let text21 = "";
for (let i of myArray2) {
	text21 += i;
}
console.log(myArray2);
console.log(text21);

console.log(" ");
console.log("---Iterating over an Set---");
console.log("---ex1---");
const mySet = new Set(["K", "a", "u", "n", "A", "s", "t", "a"]);
let text3 = "";
for (const x of mySet) {
	text3 += x + ". ";
}
console.log(mySet);
console.log(text3);

console.log("---ex2---");
const mySet2 = new Set([
	"A",
	"s",
	" ",
	"t",
	"a",
	"v",
	"e",
	" ",
	"m",
	"y",
	"l",
	"i",
	"u",
]);
let text31 = "";
for (let i of mySet2) {
	text31 = text31 + i;
}
console.log(mySet2);
console.log(text31);

console.log(" ");
console.log("---Iterating over an Map---");
console.log("---ex1---");
const myMap = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
let text4 = "";
for (const x of myMap) {
	text4 += x + ". ";
}
console.log(text4);

console.log("---ex2---");
const myMap2 = new Map([
	["John", 29],
	["Ann", 70],
	["Tom", 72],
	["Geaorge", 57],
	["Marthin", 2],
	["Thoro", 6],
]);
let text41 = "";
for(let i of myMap2){
text41 = text41 + i + ". ";
}
console.log(myMap2);
console.log(text41);


