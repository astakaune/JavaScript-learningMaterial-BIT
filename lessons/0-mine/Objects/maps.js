console.log(" ");
console.log("---MAP---");
/* A Map holds key-value pairs where the keys can be any datatype.
A Map remembers the original insertion order of the keys.
You can create a JavaScript Map by:
    Passing an Array to new Map()
    Create a Map and use Map.set() 
Map Methods:
Method	    Description
new Map()	Creates a new Map object
set()	    Sets the value for a key in a Map
get()	    Gets the value for a key in a Map
clear()	    Removes all the elements from a Map
delete()	Removes a Map element specified by a key
has()	    Returns true if a key exists in a Map
forEach()	Invokes a callback for each key/value pair in a Map
entries()	Returns an iterator object with the [key, value] pairs in a Map
keys()	    Returns an iterator object with the keys in a Map
values()	Returns an iterator object of the values in a Map     */
console.log(" ");
console.log("------size property------");
// The size property returns the number of elements in a Map:
const myMap = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(myMap);
console.log(myMap.size);

console.log(" ");
console.log("--------METHODS-------");
console.log("------new Map()------");
// Creates a new Map:
//  by passing an Array to the new Map() constructo
const myMap1 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(myMap1);

console.log(" ");
console.log("------map.get()------");
// Gets the value for a key in a Map
console.log(myMap.get("apples")); // returns 500

console.log(" ");
console.log("------map.set()------");
// The set() method can also be used to change existing Map values:
// You can add elements to a Map with the set() method:
const myMap2 = new Map();
myMap2.set("apples", 500);
myMap2.set("bananas", 300);
myMap2.set("oranges", 200);
console.log(myMap2);
console.log(myMap2.get("apples"));
// The set() method can also be used to change existing Map values:
myMap2.set("apples", 100);
console.log(myMap2);
console.log(myMap2.get("apples"));

console.log(" ");
console.log("------map.delete()------");
// The delete() method removes a Map element:
const myMap3 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(myMap3);
console.log(myMap3.size);
myMap3.delete("apples");
console.log(myMap3);
console.log(myMap3.size);

console.log(" ");
console.log("------map.clear()------");
// The clear() method removes all the elements from a Map:
const myMap31 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(myMap31);
myMap31.clear();
console.log(myMap31);

console.log(" ");
console.log("------map.has()------");
// The has() method returns true if a key exists in a Map:
const myMap4 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(myMap4);
console.log(myMap4.has("apples"));
console.log("delete", myMap4.delete("apples"));
console.log(myMap4.has("apples"));

console.log(" ");
console.log("------forEach()------");
// The forEach() method calls a function for each key/value pair in a Map:
const myMap5 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(myMap5);
let text5 = "";
myMap5.forEach(function (value, key) {
	text5 += key + " = " + value + ", ";
});
console.log(text5);

console.log(" ");
console.log("------entries()------");
// The entries() method returns an iterator object with the [key, values] in a Map:
let text6 = "";
for (const x of myMap5.entries()) {
	text6 += x + "; ";
}
console.log(text6);
console.log(myMap5);

console.log(" ");
console.log("------map.keys()------");
// The keys() method returns an iterator object with the keys in a Map:
const fruits2 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
let vegies = "";
for (const i of fruits2.keys()) {
	vegies += i + ", ";
}
console.log(fruits2);
console.log(vegies);

console.log(" ");
console.log("------Objects as Keys------");
// Being able to use objects as keys is an important Map feature.
// Remember: The key is an object (apples), not a string ("apples"):
const apples = { name: "Apples" };
const bananas = { name: "Bananas" };
const oranges = { name: "Oranges" };
const fruits10 = new Map();
fruits10.set(apples, 100);
fruits10.set(bananas, 200);
fruits10.set(oranges, 300);
console.log(fruits10);
console.log(fruits10.get(apples));

console.log(" ");
console.log("------map.values()------");
// The values method returns an iterator object with the values in a Map:
const fruits3 = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
let vegies3 = "";
for (const i of fruits3.values()) {
	vegies3 += i + ", ";
}
console.log(fruits3);
console.log(vegies3);

console.log(" ");
console.log("------MAPS are OBJECTS------");
// typeof returns object:
const fruits = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200],
]);
console.log(fruits);
console.log(typeof fruits);
console.log(fruits instanceof Map);
console.log(fruits instanceof Object);
console.log(fruits instanceof Set);

console.log(" ");
console.log("------Objects vs Maps------");
/* JS Objects vs Maps:
Differences      Object	                             Map
Iterable	Not directly iterable	            Directly iterable
Size	    Do not have a size property	        Have a size property
Key Types	Keys must be Strings (or Symbols)	Keys can be any datatype
Key Order	Keys are not well ordered	        Keys are ordered by insertion
Defaults	Have default keys	                Do not have default keys
*/
