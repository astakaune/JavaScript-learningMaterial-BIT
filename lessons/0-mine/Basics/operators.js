console.log(" ");
console.log("---Arithmetic Operators---");

let y = 5;

let x = y + 2;
console.log('y=', y, 'and', 'x=', x);

let x1 = y - 2;
console.log('y=', y, 'and', 'x=', x1);

let x2 = y * 2;
console.log('y=', y, 'and', 'x=', x2);

let x3 = y / 2;
console.log('y=', y, 'and', 'x=', x3);

let x4 = y % 2;
console.log('y=', y, 'and', 'x=', x4);

console.log("----------");
let x6 = ++y;
console.log('y=', y, 'and', 'x=', x6);

let x5 = y++;
console.log('y=', y, 'and', 'x=', x5); //y=7, nes ++y buvo gauta 6
console.log("----------");

let y1 = 5;
let x7 = 10 + y1--;
console.log('y=', y1, 'and', 'x=', x7);
// x 15, y 4

let y2 = 5;
let x8 = 10 + --y2;
console.log('y=', y2, 'and', 'x=', x8);
// x 14 y 4

console.log("----------");
let y3 = 5;
let x9 = y3 ** 2;
let x10 = y3 ** 3;
console.log('y=', y3, 'and', 'x=', x9, 'x=', x10);
// x ** y produces the same result as Math.pow(x,y):
let x11 = Math.pow(y3, 3);
console.log('y=', y3, 'and', 'x=', x11);


console.log(" ");
console.log("---Conditional (Ternary) Operator---");
/* The conditional operator assigns a value to a variable based on a condition.
Syntax: variablename = (condition) ? value1:value2	
*/
const time = 10;
const day = (time >= 10) ? "Its is a daytime" : "It is still night";
console.log(time, 'h:', day);

const age = 19;
const votable = (age > 18) ? "You can vote" : "you are too young - sorry";
console.log('age is:', age, votable);

const speed = 25;
const windType = (speed >= 30) ? "it is a storm" : "it is just a breeze";
console.log('The speed of the wind is:', speed, 'miles/h, so', windType);


console.log(" ");
console.log("---Logical Operators---");
console.log("---&&---");
// Logical operators are used to determine the logic between variables or values.
// ex1
const temperatureMIN = 22;
const temperatureMAX = 25;
const humidityMIN = 55;
const humidityMAX = 65;
const normalConditions = ((temperatureMIN >= 22 && temperatureMAX <= 25) && ((humidityMIN >= 55 && humidityMAX <= 65))) ? 'The environment conditions are normal' : 'DANGER!';
console.log('temperatureMIN = ', temperatureMIN, 'temperatureMAX = ', temperatureMAX, 'and humidityMIN = ', humidityMIN, 'humidityMAX = ', humidityMAX, '.', normalConditions);

console.log("---||---");
// ex2
let x50 = 6;
let y50 = '5';
if (x50 === 5 || y50 === 5) {
    console.log(true);
} else {
    console.log(false);
}
//or
const trueOrFalse = (x50 === 5 || y50 === 5) ? true : false;
console.log(trueOrFalse);

console.log("--- ! ---");
// ex3
const notEqual = (!(x50 === y50)) ? true : false;
console.log(notEqual);


console.log(" ");
console.log("---delete Operator---");
// The delete operator deletes both the value of the property and the property itself. After deletion, the property cannot be used before it is added back again.
// The delete operator is designed to be used on object properties. It has no effect on variables or functions.
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};
console.log(person);
delete person.age;   // or delete person["age"];
console.log(person);


console.log(" ");
console.log("---in Operator---");
// The in operator returns true if the specified property is in the specified object, otherwise false:
// Syntax: property in object
//Arrays
//index        0       1          2        3
const cars = ['BMW', 'Toyota', 'Honda', 'Audi'];
console.log(cars);
const propIn = (0 in cars) ? true : false;
console.log(propIn);
const propIn1 = ("Audi" in cars) ? true : false;
console.log(propIn1);

//Objects
const cars1 = { model1: 'BMW', model2: 'Toyota', model3: 'Honda', model4: 'Audi'};
console.log(cars1);
const propIn2 = (0 in cars1) ? true : false;
console.log(propIn2);
const propIn3 = ("model1" in cars1) ? true : false;
console.log(propIn3);
const propIn4 = ("BMW" in cars1) ? true : false;
console.log(propIn4);

// Predefined objects
const predifined = {math: "PI", number: "NaN", string: "length"};
console.log(predifined);
const pi = ("math" in predifined) ? true : false;
console.log(pi);


console.log(" ");
console.log("---instanceof Operator---");
// returns true if the specified object is an instance of the specified object: