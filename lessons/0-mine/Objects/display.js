console.log(" ");
console.log("-------DISPLAY Objects------");
/* Displaying a JavaScript object will output [object Object].
Some common solutions to display JavaScript objects are:
	Displaying the Object Properties by name
	Displaying the Object Properties in a Loop
	Displaying the Object using Object.values()
	Displaying the Object using JSON.stringify()
*/
const person = {
	name: "John",
	age: 30,
	city: "New York",
};
console.log(person);
document.getElementById("demo").innerHTML = person;

console.log(" ");
console.log("-------1) DISPLAY Obj properties------");
// The properties of an object can be displayed as a string:
const person1 = {
	name: "John",
	age: 30,
	city: "New York",
};
console.log(typeof person1, person1);
console.log(typeof person1.name, person1.name);
console.log(
	typeof (person1.name + ", " + person1["age"] + ", " + person1.city),
	person1.name + ", " + person1["age"] + ", " + person1.city
);

console.log(" ");
console.log("-------2) DISPLAY Obj for..in Loop------");
// The properties of an object can be collected in a loop:
const person2 = {
	name: "John",
	age: 30,
	city: "New York",
};
let counter = 0;
let txt = "";
for (i in person2) {
	txt = txt + person2[i] + ", ";
	counter++;
	console.log("Object property is: ", i);
}
console.log("Obj properties values:", txt);
console.log("Object has ", counter, " properties.");

console.log(" ");
console.log("-------3) Using Object.value()------");
// Any JS object can be converted to an array using Object.values():
const person3 = {
	name: "John",
	age: 30,
	city: "New York",
};
const array3 = Object.values(person3);
console.log(typeof person3, person3); //{name: 'John', age: 30, city: 'New York'}
console.log(typeof array3, array3); //(3) ['John', 30, 'New York']

console.log(" ");
console.log("-------4) Using JSON.stringify()------");
// Any JS object can be converted to a string with the JS function JSON.stringify().
console.log("-------stringify Objects------");
const person4 = {
	name: "John",
	age: 30,
	city: "New York",
};
const string4 = JSON.stringify(person4);
console.log(typeof person4, person4); //object {name: 'John', age: 30, city: 'New York'}
console.log(typeof string4, string4); //string {"name":"John","age":50,"city":"New York"}

console.log("-------stringify Dates------");
// JSON.stringify converts dates into strings:
const person41 = {
	name: "John",
	today: new Date(),
};
const string41 = JSON.stringify(person41);
console.log(person41); // {name: 'John', today: Fri Nov 12 2021 12:55:01 GMT+0200 (Eastern European Standard Time)}
console.log(string41); // {"name":"John","today":"2021-11-12T10:55:01.727Z"}

console.log("-------stringify Functions------");
console.log("---ex1---");
// JSON.stringify will not stringify functions:
const person42 = {
	name: "John",
	age: function () {
		return 30;
	},
};
const string42 = JSON.stringify(person42); //console nieko nerodo. tik innerHTML nerodo funkcijos
document.getElementById("demo42").innerHTML = JSON.stringify(person42);

console.log("---ex2---");
// This can be "fixed" if you convert the functions into strings before stringifying.
const person43 = {
	name: "John",
	age: function () {
		return 30;
	},
};
console.log(typeof person43, person43);
console.log(typeof person43.age(), person43.age());
// metodas1 toString();
// person43.age = person43.age.toString();
// console.log(typeof person43.age, person43.age);
// const string431 = JSON.stringify(person43);
// console.log(typeof string431, string431);

// metodas2 String()
// person43.age = String(person43.age());
// console.log(typeof person43.age, person43.age);
// const string432 = JSON.stringify(person43);
// console.log(typeof string432, string432);

 // budas2.1 String() vietoje metodo person43.age panaudotas dar vienas variable.
const string433 = String(person43.age());
console.log(typeof string433, string433);
const string434 = JSON.stringify(person43);
console.log(typeof string434, string434);


console.log("-------Stringify Arrays------");
// It is also possible to stringify JS arrays:
const arr = ["John", "Peter", "Sally", "Jane"];
console.log(typeof arr, arr); 				//(4) ['John', 'Peter', 'Sally', 'Jane']
const stringArr = JSON.stringify(arr);
console.log(typeof stringArr, stringArr);//string ["John","Peter","Sally","Jane"]


