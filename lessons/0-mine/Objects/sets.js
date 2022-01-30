console.log("---Set---");
console.log(" ");
/* A JS Set is a collection of unique values. Each value can only occur once in a Set.
You can create a JS Set by:
Passing an Array to new Set()
Create a new Set and use add() to add values
Create a new Set and use add() to add variables */
console.log("--------METHODS-------");
console.log("------new Set()------");
// new Set()	Creates a new Set
console.log("---ex1---");
// create a set from an array
const mySet = new Set(["K", "a", "u", "n", "A", "s", "t", "a"]);
const mySet1 = new Set(["K", "a", "u", "n", "A", "s", "t", "a1"]);
console.log(typeof mySet, mySet);
console.log(mySet.size, mySet1.size);
const mySet2 = new Set([1, 2, 3]);
console.log(mySet2);

console.log("---ex2---");
// Create a Set and add values:
const mySet3 = new Set();
mySet3.add("A");
console.log(mySet3.size, mySet3);
mySet3.add("s");
console.log(mySet3.size, mySet3);
mySet3.add("t");
console.log(mySet3.size, mySet3);
mySet3.add("a");
console.log(mySet3.size, mySet3);

console.log("---ex3---");
// Create a Set, (create variables), add variables:
const mySet4 = new Set();
const a = "A";
const b = "s";
const c = "t";
const d = "a";
mySet4.add(a);
console.log(mySet4.size, mySet4);
mySet4.add(b);
console.log(mySet4.size, mySet4);
mySet4.add(c);
console.log(mySet4.size, mySet4);
mySet4.add(d);
console.log(mySet4.size, mySet4);

console.log(" ");
console.log("-------add()-------");
// its possible to add variables or values
// syntax: name.add("value");
// syntax: name.add(variable);

console.log(" ");
console.log("-------forEach()-------");
// The forEach() method invokes (calls) a function for each Set element:
const mySet5 = new Set(["K", "a", "u", "n", "A", "s", "t", "ė"]);
let text5 = "";
mySet5.forEach(function (value) {
  text5 += value + " ";
});
console.log(typeof text5, text5);
console.log(typeof mySet5, mySet5.size, mySet5);

console.log(" ");
console.log("-------values()-------");
// The values() method returns a new iterator object containing all the values in a Set:
console.log("---ex1---");
const mySet6 = new Set(["K", "a", "u", "n", "A", "s", "t", "ė"]);
console.log(mySet6.size);
console.log(mySet6.values());

console.log("---ex2---");
// Now you can use the Iterator object to access the elements:
let text6 = "";
for (const x of mySet6.values()) {
  text6 += x + " ";
}
console.log(mySet6);
console.log(text6);


console.log(" ");
console.log("-------keys()-------");
/* A Set has no keys. 
keys() returns the same as values().
This makes Sets compatible with Maps.*/
const letters = new Set(["a","b","c"]); // Create a Set
console.log(letters.keys()); // Display set.size
console.log(letters.values());

console.log(" ");
console.log("-------entries()-------");
// A Set has no keys. entries() returns Iterator with [value,value] pairs from a Set instead of [key,value] pairs. This makes Sets compatible with Maps:
const letters2 = new Set(["a","b","c"]); // Create a Set
const iterator = letters2.entries(); // List all entries
let text = "";
for (const i of iterator) {
  text += i + " ";
}
console.log(letters2);
console.log(iterator);
console.log(text);





